import { Router } from "express";
import { Trans } from "../entity/Trans";
import { Block } from "../entity/Block"
import { AppDataSource } from "../_datasource";

export const articlesroute=Router()

blockssroute.get("/trans/",(req,res)=>{
    AppDataSource.manager.find(Block).
    then(d=>{
        res.json(d)
    }).catch(console.log)
})


blocksroute.post("/trans/create",(req,res)=>{
   
   let block:Block=<block>{
      trans:Trans[],
      hash:""
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
