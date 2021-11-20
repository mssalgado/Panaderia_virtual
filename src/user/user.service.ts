import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './models/user.entity';
import { Repository } from 'typeorm';
import { UserDTO } from './dto/user.dto';
import { LoginUserDTO } from './dto/login_user.dto';
import * as bcrypt from 'bcrypt';
import { CreateUserDTO } from './dto/create_user.dto';




@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
    ) {}

  async findById(id:string):Promise<UserEntity>{
  const userEntity = await this.userRepository.findOne(id);
  return userEntity;
  
  }
  userEntityToUserDTO(userEntity: UserEntity):UserDTO{
    const {id, usuario, nombres,apellidos,correo,tiIdentidad,nuIdentidad,ciudad,barrio,direccion,creacionfe,activo, role }= userEntity;
    let user:UserDTO = {id, usuario, nombres,apellidos,correo,tiIdentidad,nuIdentidad,ciudad,barrio,direccion,creacionfe, activo, role};
    return user;

  }

  async getUser(options?: object): Promise<UserDTO> {
    const users = await this.userRepository.findOne(options);
    return this.userEntityToUserDTO(users);

  }

  async getUserByCredentials({usuario,contraseña}: LoginUserDTO):Promise<UserDTO> 
  {
    const user = await this.userRepository.findOne({where : {usuario}});

    if(!user){
      throw new HttpException('Usuario no existe', HttpStatus.UNAUTHORIZED);
    }
    const sameContraseña = await bcrypt.compare(contraseña, user.contraseña);

    if(!sameContraseña){
      throw new HttpException('Credenciales invalidas', HttpStatus.UNAUTHORIZED);
    }
    return this.userEntityToUserDTO(user);
  }

  async findByPayload({usuario}: any):Promise<UserDTO>{
    const user = await this.getUser({where:{usuario}});
    return user;
  }

  async createUser(CreateUserDTO: CreateUserDTO): Promise<UserDTO>{
    const {
      usuario, 
      contraseña, 
      correo, 
      tiIdentidad,
      nuIdentidad,
      nombres,
      apellidos,
      ciudad,
      barrio,
      direccion,} = CreateUserDTO;
    const user = await this.userRepository.findOne({where: {usuario}});

    if(user){
      throw new HttpException('Usuario existente',HttpStatus.BAD_REQUEST);

    }

    const userr = await this.userRepository.create({
      usuario, 
      contraseña, 
      correo, 
      tiIdentidad,
      nuIdentidad,
      nombres,
      apellidos,
      ciudad,
      barrio,
      direccion, 
    });
    await this.userRepository.save(userr);
    return this.userEntityToUserDTO(userr);

  }

  /*async updateUser(userId:string, CreateUserDTO: CreateUserDTO):Promise<any>{
    await this.userRepository.update(userId, CreateUserDTO)
    const user = await this.userRepository.findOne(userId);
    return user;
  }

  async deleteUser(userId:string):Promise<any>{
    const user = await this.userRepository.findOne(userId);
    await this.userRepository.delete(userId);
    return user;
  }*/
  

}
