import { Body, Controller, Get, HttpCode, Post, Res } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ResponseProductDTO } from './dto/response-product.dto';
import { ZodValidationPipe } from 'nestjs-zod';
import {
  CreateProductDTO,
  createProductSchema,
} from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  public async findAll(@Res() res): Promise<ResponseProductDTO[]> {
    const films = await this.productsService.findAll();
    return res.json(films);
  }

  @Post()
  @HttpCode(201)
  public async create(
    @Res() res,
    @Body(new ZodValidationPipe(createProductSchema))
    createProductDTO: CreateProductDTO,
  ): Promise<ResponseProductDTO> {
    const film = await this.productsService.create(createProductDTO);
    return res.json(film);
  }
}
