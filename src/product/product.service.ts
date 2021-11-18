import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(ProductEntity) private readonly productRepository: Repository<ProductEntity> ,
    private readonly userService: UserService
    ){}


  async create(createProductDto: CreateProductDto) {
  

    const { name, userID, precio } = createProductDto;
    const product = new ProductEntity();
    product.nombre = name;
    product.precio = precio;
    product.user = await this.userService.findById(userID);
    await this.productRepository.save(product);
    return product;  
  }

  async findAll() {
    const producto = await this.productRepository.find();
    return producto;
    
  }

  async findOne(id: number) {
    const producto = await this.productRepository.findOne(id);
    return producto;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    await this.productRepository.update(id, updateProductDto);
    const updatedStudent = await this.productRepository.findOne(id);
    return updatedStudent;
  }

  async remove(id: number) {
    const deletedStudent =  await this.productRepository.findOne(id);
    await this.productRepository.delete(id);
    return deletedStudent;
  }
}
