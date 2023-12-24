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


    ghash(){
    let b=new Buffer.from(
      this.prevhash+
      JSON.stringify(this.trans)+
      JSON.stringify(this.timestamp))
      this.hash=require("crypto").
      createHash("sha256")
      .update(b).digest("hex")
    }
}

