
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res, UseGuards,Patch } from '@nestjs/common';


@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Res() res, @Body() createProductDto: CreateProductDto) {
    const producto = await this.productService.create(createProductDto);

    return res.status(HttpStatus.CREATED).json({ 
      message: 'recieved',
      data: producto 
  });

  }

  @Get()
    async findAll(@Res() res){
        const producto = await this.productService.findAll();
        return res.status(HttpStatus.OK).json({
            data : producto
        });
    }

  
  @Get(':id')
    async findOne(@Res() res, @Param('id') id ){
        const producto = await this.productService.findOne(id);

        if(!producto){
            throw new NotFoundException('Producto no existe');
        }

        return res.status(HttpStatus.OK).json({
            message:'found',
            data: producto
        });
    }

  
  @Patch(':id')
    async updateStudent(@Res() res, @Body() updateProductDto: UpdateProductDto, @Param('id') id ){

        const producto = await this.productService.update(id, updateProductDto);

        if(!producto){
            throw new NotFoundException('Producto no existe');
        }

        return res.status(HttpStatus.OK).json({
            message:'Producto actualizado correctamente',
            data: producto
        });

    }


  @Delete(':id')
    async deleteStudent(@Res() res , @Param('id') id){
        const producto = await this.productService.remove(+id);

        if(!producto){
            throw new NotFoundException('Producto no existe');
        }

        return res.status(HttpStatus.OK).json({
            message:'deleted',
            data: producto
        });

    }
}
