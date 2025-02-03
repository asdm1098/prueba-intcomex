import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'products'})
export class Product {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column('text')
    marca: string;

    @Column('text', {
        unique: true
    })
    sku: string;

    @Column('text', {
        unique: true
    })
    mpn: string;

    @Column()
    nombre: string;

    @Column()
    url_imagen: string;
    
    @Column()
    size_image: string;

}
