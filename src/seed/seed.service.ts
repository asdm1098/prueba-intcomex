import { Injectable } from '@nestjs/common';
import { ProductService } from '../product/product.service';
import { initialData } from './data/seed-data';


@Injectable()
export class SeedService {

  constructor(
    private readonly productService: ProductService,
  ) {}
  
  async runSeed() {
    const products = initialData;
    
    const insertPromises = [];
    
    products.forEach( product => {
      insertPromises.push( this.productService.create( product ) );
    });

    await Promise.all( insertPromises );

    return true;
  }

}
