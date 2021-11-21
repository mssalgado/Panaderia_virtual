import { Body, Controller, Delete, Get, HttpStatus, Post, Res,Param, NotFoundException, Put, Patch, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './models/user.entity';



 @Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(@Res() res){
    const users = await this.userService.findAll();
    return res.status(HttpStatus.OK).json({
      data : users
    })
  }


  @Patch(':id')
  async updateUser(@Res() res, @Body() userEntity: UserEntity, @Param('id') id){
    const user = await this.userService.updateUser(id, userEntity);

    if(!user){
      throw new NotFoundException('Usuario no existe');    
    }

    return res.status(HttpStatus.OK).json({
      message:'User updated successfly',
      data: user
    
    });
  }

  @Delete(':id')
    async remove(@Res() res , @Param('id') id){
        const user = await this.userService.removeUser(id);

        if(!user){
            throw new NotFoundException('Usuario no existe');
        }

        return res.status(HttpStatus.OK).json({
            message:'deleted',
            data: user
        });

    }



    
/*
  

  @Get('/:userId')
  async getUserById(@Res() res, @Param('userId') id){
    const user = await this.userService.getUserById(id);

    if(!user){
      throw new NotFoundException('Usuario no existe')    }

    return res.status(HttpStatus.OK).json({
      message:'found',
      data: user
    
    });
  }


  @Post('/create')
  async createUser(@Res() Res, @Body() CreateUserDTO: CreateUserDTO) {
    
    const user = await this.userService.createUser(CreateUserDTO);

    return Res.status(HttpStatus.CREATED).json({ 
      message: 'recieved', 
      data : user });
  }


  @Put('/update/:userId')
  async updateUser(@Res() res, @Body() CreateUserDTO: CreateUserDTO, @Param('userId') id){
    const user = await this.userService.updateUser(id, CreateUserDTO);

    if(!user){
      throw new NotFoundException('Usuario no existe');    
    }

    return res.status(HttpStatus.OK).json({
      message:'User updated successfly',
      data: user
    
    });
  }*/
  
  
}
