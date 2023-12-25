import { Router } from "express";
import { Trans } from "../entity/Trans";
import { Block } from "../entity/Block"
import { AppDataSource } from "../_datasource";
import { Not } from "typeorm"
export const blocksroutes=Router()

blocksroutes.get("/blocks/",(req,res)=>{
    AppDataSource.manager.find(Block).
    then(d=>{
        res.json(d)
    }).catch(console.log)
})
blocksroutes.get("/blocks/initial",(req,res)=>{
 AppDataSource.manager.findOneByOrFail(Block,{
     where:{type:"initial"}
 }).then(b=>{
     return b
 }).catch(e=>{
     let b:Block=<Block>{
         type:"initial"
     }
      AppDataSource.manager.create(Block,b)
 })
    
})

blocksroute.post("/block/create",(req,res)=>{
   let lastblock:Block=new Block();
   let block:Block=new Block();
   AppDataSource.manager.findOneByOrFail(Block,{
      "order":{id:"desc"},
      where:{
          type:Not("initial")
      }
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
