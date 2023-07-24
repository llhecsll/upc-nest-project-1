import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class UserModel{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nombre: string

}
