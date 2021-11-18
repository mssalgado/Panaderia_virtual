import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("stock")
export class StockEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    NomProducto: string;
    
    @Column()
    PreProducto: number;

    @Column()
    info: string;

    @Column()
    cantidad: number;
    
    @Column({default: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png' })
    photoURL: string;
    
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fechaProd: Date;


}