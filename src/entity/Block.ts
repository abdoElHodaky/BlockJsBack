import { Entity,Column,OneToMany,PrimaryGeneratedColumn} from "typeorm"
import { Trans } from "./Trans";

@Entity()
export class Block {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({type: "varchar", nullable: true})
    hash: string;

    @Column({type: "varchar"})
    prevhash: string

    @OneToMany(()=>Block,block=>trans.block) trans:Trans[]
}
