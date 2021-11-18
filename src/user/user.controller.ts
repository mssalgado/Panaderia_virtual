import { Body, Controller, Delete, Get, HttpStatus, Post, Res,Param, NotFoundException, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create_user.dto';
import { NotFoundError } from 'rxjs';
import { UserDTO } from './dto/user.dto';

 @Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
/*
  @Get()
  async getUsers(@Res() res){
    const users = await this.userService.getUsers();
    return res.status(HttpStatus.OK).json({
      data : users
    })
  }

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

  @Delete('/delete/:userId')
  async deleteUser(@Res() res, @Param('userId') id){
    const user = await this.userService.deleteUser(id);

    if(!user){
      throw new NotFoundException('Usuario no existe')    }

    return res.status(HttpStatus.OK).json({
      message:'deleted',
      data: user
    
    });
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
