import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto, UpdateProductDto} from './dto';
import { PaginationDto } from '../common/dtos/pagination.dto';


@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(
    @Body() createProductDto: CreateProductDto
  ) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll( @Query() paginationDto: PaginationDto) {
    return this.productService.findAll(paginationDto);
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.productService.findOne( term );
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
