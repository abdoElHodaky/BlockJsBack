import { Entity,Column,OneToMany,PrimaryGeneratedColumn} from "typeorm"
import { Trans } from "./Trans";

@Entity()
export class Block {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({type: "varchar", default: "",})
    hash: string;

    @Column({type: "varchar", default:""})
    prevhash: string 

    @Column({default:Date.now()})
    timestamp:Date
    @OneToMany(()=>Block,block=>trans.block) trans:Trans[]
}
