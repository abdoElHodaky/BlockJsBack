import { Router } from "express";
import { Trans } from "../entity/Trans";
import { Block } from "../entity/Block"
import { AppDataSource } from "../_datasource";

export const articlesroute=Router()

transsroute.get("/trans/",(req,res)=>{
    AppDataSource.manager.find(Block).
    then(d=>{
        res.json(d)
    }).catch(console.log)
})


transroute.post("/trans/create",(req,res)=>{
   let lastblock;
   let trans:Trans=<Trans>{
       ...req.body
   }

  AppDataSource.manager.findOne(Block,{
      where:{},
      order:{id:"desc"}
  }).
    then(d=>{
       return lastblock=d
    }).then(block=>{
        trans.block=block
        block.trans=[]
        block.trans.push(trans)
        return trans
    }).then(t=>{
        AppDataSource.manager.save(Trans,t)
    })
    .catch(console.log)
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
