import { BeforeInsert, Column, Entity,OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import { ProductEntity } from "src/product/entities/product.entity";
import { Role } from "./user.enum";



@Entity("users")
export class UserEntity{
    
    @PrimaryGeneratedColumn('uuid')
    id : string;
    @Column({unique: true, nullable: false})
    usuario : string;
    @Column({nullable: false})
    contraseña : string;
    @Column()
    nombres : string; 
    @Column()
    apellidos : string;
    @Column({nullable: false})
    correo : string;
    @Column()
    tiIdentidad : string;
    @Column()
    nuIdentidad : number;
    @Column()
    ciudad : string;
    @Column()
    barrio : string;
    @Column()
    direccion : string;
    @Column({ type: 'timestamp', default: ()=> 'CURRENT_TIMESTAMP'})
    creacionfe : Date;
    @Column({nullable: false, default: true})
    activo : boolean;

    @Column({nullable: true, default: Role.AUTHUSER})
    role : Role;

    @OneToMany(type => ProductEntity, product => product.user )
    products: ProductEntity[];

    @BeforeInsert() async hashPasswors(){
        this.contraseña = await bcrypt.hash(this.contraseña,10);

    }



}