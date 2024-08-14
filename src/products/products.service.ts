import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { ResponseProductDTO } from './dto/response-product.dto';
import { CreateProductDTO } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}
  public async findAll(): Promise<ResponseProductDTO[]> {
    const products = await this.productRepository.find();
    return products;
  }

  public async create({
    description,
    barcode,
    amount,
  }: CreateProductDTO): Promise<ResponseProductDTO> {
    const isProductExists = await this.productRepository.findOneBy({
      description,
    });
    if (isProductExists) {
      throw new BadRequestException('Esse produto já existe.');
    }

    const film = this.productRepository.create({
      description,
      barcode,
      amount,
    });

    await this.productRepository.save(film);
    return film;
  }
}
