import { Entity,Column,OneToMany,PrimaryGeneratedColumn,AfterInsert,AfterUpdate} from "typeorm"
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

    @AfterInsert()
    calchash(){
        this.ghash()
    }
    @AfterUpdate()
    calcchash(){
        this.ghash()
    }
    
    
    
    ghash(){
    let b= Buffer.from(
      this.prevhash+
      JSON.stringify(this.trans)+
      JSON.stringify(this.timestamp))
      this.hash=require("crypto").
      createHash("sha256")
      .update(b).digest("hex")
    }
}

