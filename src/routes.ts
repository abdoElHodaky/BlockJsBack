import { Router } from "express"
/*import { authroute } from "./routes/authroute";
import { supTicket } from "./entity/supTicket";
import { User } from "./entity/User";
import { usersroute } from "./routes/usersroute";
import { AppDataSource } from "./_datasource";
import { articlesroute } from "./routes/articlesroute";
import { authorsroutes } from "./routes/authorsroutes";
import { attachmentsroute } from "./routes/attachmentroutes";*/
import { blockstrans } from "./routes/blocksroutes"
import { transroutes } from "./routes/transroutes"
export const apiv1=Router();
apiv1.get("/",(req,res)=>{
    res.end("Hello")
})
/*apiv1.get("/suptickets",(req,res)=>{
    AppDataSource.manager.find(supTicket).
    then(d=>{
        //d.map((el,i)=>console.log(el.user))
        res.json(d)
    }).catch(console.log)
})
apiv1.post("/suptickets/create",(req,res)=>{
    let supticket:supTicket=<supTicket>{...req.body.ticket}
    let userid=req.body.userid
    let user:User;
    AppDataSource.manager.findOneByOrFail(User,{id:userid}).then(d=>{
        user=d;
        return user
    }).then(a=>{
        supticket.user=a;
        a.tickets=[]
        a.tickets.push(supticket)
        return supticket
    }).then(a=>{
        AppDataSource.manager.save(supTicket,a)
        //AppDataSource.manager.save(a.user)
        res.json({message:"created successfully"})
    })
    .catch(console.log);
    /*AppDataSource.manager.save(supTicket,ticket).then(d=>{
        res.json({message:"created successfully"});
    }).catch(console.log);*/
    

//})


/*apiv1.use(authroute)
apiv1.use(usersroute);
apiv1.use(authorsroutes)
apiv1.use(articlesroute)
apiv1.use(attachmentsroute)*/

apiv1.use(blockroutes)
apiv1.use(transroutes)
