import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, TableInheritance } from "typeorm"
import { Block } from "./User";
@Entity()
export class Trans {
    @PrimaryGeneratedColumn("increment")
    id:number
    @Column({default:""})
    from: string;
    @Column({default:""})
    to:string;
    @Column({default:0})
    amount:number 
    @Column({default:""})
    hash:string
    @ManyToOne(()=>Block,block=>block.trans) block:Block
}
