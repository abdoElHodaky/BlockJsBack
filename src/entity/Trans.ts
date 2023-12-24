import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, TableInheritance ,AfterInsert} from "typeorm"
import { Block } from "./block";
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
    @AfterInsert()
    calchash(){
        this.ghash()
    }
    ghash(){
      let b=Buffer.from(
      JSON.stringify(this.timestamp)
      )
      this.hash=require("crypto").
      createHash("sha256")
      .update(b).digest("hex")
    
    }


}
