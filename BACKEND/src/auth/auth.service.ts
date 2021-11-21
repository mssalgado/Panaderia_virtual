import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService,JwtModule } from '@nestjs/jwt';
import { CreateUserDTO } from 'src/user/dto/create_user.dto';
import { LoginUserDTO } from 'src/user/dto/login_user.dto';
import { UserDTO } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';
import { IRegistrationStatus } from './interfaces/register_status.interface';
import { IJwtPayload } from './interfaces/jwt_payload.interface';
import { IloginStatus } from './interfaces/login_status.interface';


@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async register(createUserDTO: CreateUserDTO): Promise<IRegistrationStatus> {
    let status: IRegistrationStatus = {
        success: true,
        message: 'usuario registrado'
    };

    try {
      await this.userService.createUser(createUserDTO);
    } catch (err) {
      status = {
        success: false,
        message: err
      };
    }
    return status;
  }

  async login(LoginUserDTO: LoginUserDTO): Promise<IloginStatus> {
    const user = await this.userService.getUserByCredentials(LoginUserDTO);

    const expiresIn = process.env.EXPIRE_IN;
    const accesToken = this.jwtService.sign(user);
    
    
    let token: IloginStatus = {
        usuario: user.usuario,
        expiresIn,
        accesToken
      };

    return token;
  }

  async validateUser(payload : IJwtPayload): Promise<UserDTO>{
      const user = await this.userService.findByPayload(payload);

      if(!user){
          throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
      }

      return user;
  }
}
