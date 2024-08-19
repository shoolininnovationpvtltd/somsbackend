// const express = require('express');
// const dbcollection = require('./mongodb');
// const mongodb = require('mongodb')
// const app = express();

// app.use(express.json());

// app.get('/user',async (req,res)=>{
//     let data = await dbcollection()
//     data = await data.find().toArray()
//     res.send(data);
// })

// app.post('/userpost', async (req,res)=>{
//     // console.log(req.body);
//     let data = await dbcollection()
//     let result = await data.insertOne(req.body);
//     if (result.acknowledged) {
//         console.log('insert success');
//     }
// })

// app.put('/updateuser/:name',async (req,res)=>{
//     let data = await dbcollection();
//     let result = await data.updateOne(
//         {name:req.params.name},
//         {$set:req.body}
//     )
//     // console.log(req.body);
//     // res.send({data:'update'})
//     if (result.acknowledged) {
//         console.log('update success');
//     }
// })

// app.delete('/deleteuser/:id',async (req,res)=>{
//     let data =await dbcollection();
//     let result= await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
//     if (result.acknowledged) {
//         console.log('delete success');
//     }
// })

// app.listen(5000)