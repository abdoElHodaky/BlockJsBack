import { Router } from "express";
import { Trans } from "../entity/Trans";
import { Block } from "../entity/Block"
import { AppDataSource } from "../_datasource";
import { Not } from "typeorm"
export const blocksroute=Router()

blocksroute.get("/blocks/",(req,res)=>{
    AppDataSource.manager.find(Block).
    then(d=>{
        res.json(d)
    }).catch(console.log)
})


blocksroute.post("/block/create",(req,res)=>{
   let lastblock:Block;
   let block:Block=<Block>{
      trans:[],
      prevhash:lastblock.hash
    }
   AppDataSource.manager.findOne(Block,{
      where:{
          type:Not("initial")
      },
      order:{id:"desc"}
  }).then(b=>{
    lastblock=b  
  }).catch(console.log)
   if(lastblock.trans.length==2){
       AppDataSource.manager.save(Block,block)
   }
  
  /*let userid=req.body.userid
    let author:Author;
    AppDataSource.manager.findOneByOrFail(Author,{id:userid}).then(d=>{
        author=d;
        return author
    }).then(a=>{
        article.author=a;
        a.articles=[]
        a.articles.push(article)
        return article
    }).then(a=>{
        AppDataSource.manager.save(Article,a)
        //AppDataSource.manager.save(a.user)
        res.json({message:"created successfully"})
    })*/
  
})
