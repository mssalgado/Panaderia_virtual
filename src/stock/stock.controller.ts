import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { CreatestockDTO } from './dto/create_stock.dto';
import { StockService } from './stock.service';

@Controller('stock')
export class StockController {
    constructor(private readonly stockService: StockService){}

    @Get()
    async getProductos(@Res() res){
        const productos = await this.stockService.findAll();
        return res.status(HttpStatus.OK).send(productos);
    }

    @Get(':id')
    async getProducto(@Res() res, @Param('studentId') id ){
        const producto = await this.stockService.findOne(id);

        if(!producto){
            throw new NotFoundException('Producto no existe en el stock');
        }

        return res.status(HttpStatus.OK).send(producto);
    }

    @Post()
    async create(@Res() res, @Body() createstockDTO: CreatestockDTO ){

        const producto = await this.stockService.create(createstockDTO);
        return res.status(HttpStatus.CREATED).send(producto);

    }


    @Put(':id')
    async update(@Res() res, @Body() createstockDTO: CreatestockDTO, @Param('id') id ){

        const producto = await this.stockService.update(id, createstockDTO);

        if(!producto){
            throw new NotFoundException('Producto no existe en el stock');
        }

        return res.status(HttpStatus.OK).send(producto);

    }


    @Delete(':id')
    async delete(@Res() res , @Param('id') id){
        const producto = await this.stockService.remove(id);

        if(!producto){
            throw new NotFoundException('Producto no existe en el stock');
        }

        return res.status(HttpStatus.OK).send(producto);

    }
}
