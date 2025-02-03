import { IsString, MinLength } from "class-validator"


export class CreateProductDto {
    
    @IsString()
    @MinLength(1)
    marca: string;

    @IsString()
    @MinLength(1)
    sku: string;

    @IsString()
    @MinLength(1)
    mpn: string;

    @IsString()
    @MinLength(1)
    nombre: string;

    @IsString()
    @MinLength(1)
    url_imagen: string;

    @IsString()
    @MinLength(1)
    size_image: string;

}
