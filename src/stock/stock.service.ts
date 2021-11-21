import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { StockEntity } from './entities/stock.entity';
import { CreatestockDTO } from './dto/create_stock.dto';

@Injectable()
export class StockService {

    constructor(
        @InjectRepository(StockEntity)
        private readonly stockRepository: Repository<StockEntity>,
      ) {}



  async create(createstockDTO: CreatestockDTO)  {
    const producto = await this.stockRepository.save(createstockDTO);
    return producto;
}

  async findAll() {
    const producto = await this.stockRepository.find();
    return producto;
  }

  async findOne(id: number) {
    const producto = await this.stockRepository.findOne(id);
    return producto;
  }

  async update(id: number, createstockDTO: CreatestockDTO) {
    await this.stockRepository.update(id, createstockDTO);
    const producto = await this.stockRepository.findOne(id);
    return producto;
  }

  async remove(id: number ) {
    const producto = await this.stockRepository.findOne(id);
    await this.stockRepository.delete(id);
    return producto;
  }
}