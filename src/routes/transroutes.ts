import { Router } from "express";
import { Trans } from "../entity/Trans";
import { Block } from "../entity/Block"
import { AppDataSource } from "../_datasource";
import { Not } from "typeorm"

export const transroutes=Router()

transroutes.get("/trans/",(req,res)=>{
    AppDataSource.manager.find(Block).
    then(d=>{
        res.json(d)
    }).catch(console.log)
})


transroutes.post("/trans/create",(req,res)=>{
   let lastblock:Block=new Block();
   let trans:Trans=<Trans>{
       ...req.body
   }

  AppDataSource.manager.findOne(Block,{
      where:{
          type:Not("initial")
      },
      order:{id:"desc"}
  }).
    then(d=>{
        lastblock=d
        return d
    }).then(block=>{
        trans.block=block
        block.trans.push(trans)
        AppDataSource.manager.save(Block,block)
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
