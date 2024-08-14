import { Controller, Get, Res } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ResponseProductDTO } from './dto/response-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  public async findAll(@Res() res): Promise<ResponseProductDTO[]> {
    const films = await this.productsService.findAll();
    return res.json(films);
  }
}
