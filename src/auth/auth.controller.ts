import { Body, Controller, Get, HttpStatus, Post, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { IRegistrationStatus } from './interfaces/register_status.interface';
import { AuthService } from './auth.service';
import { CreateUserDTO } from 'src/user/dto/create_user.dto';
import { HttpException } from '@nestjs/common';
import { LoginUserDTO } from 'src/user/dto/login_user.dto';
import { IloginStatus } from './interfaces/login_status.interface';
import { AuthGuard } from '@nestjs/passport';
import { IJwtPayload } from './interfaces/jwt_payload.interface';
import { RoleGuard } from './guards/role.guard';
import { Role } from './guards/role.decorator';


@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService){}
    
    @Post('register')
    @UsePipes(new ValidationPipe())
    public async register(@Body() CreateUserDTO: CreateUserDTO): Promise<IRegistrationStatus>{
          
        const result: IRegistrationStatus = await this.authService.register(CreateUserDTO);

        if(!result.success){
            throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
        }
        return result;

    }

    @Post('login')
    @UsePipes(new ValidationPipe())
    public async login(@Body() LoginUserDTO: LoginUserDTO): Promise<IloginStatus>{
          
        const result: IloginStatus = await this.authService.login(LoginUserDTO);
        return result;

    }

    @Get('whoami')
    @Role('ADMIN', 'AUTHUSER')
    @UseGuards(AuthGuard(), RoleGuard)
    public async testAuth(@Req() req: any): Promise<IJwtPayload>{
        return req.user;
    }

}