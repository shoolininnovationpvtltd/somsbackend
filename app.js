// const app =require('./app')
// console.log(app);
// app.z(90)
// core modules HTTP,buffer,FS (1-global dont need to import 2-non-global need to import)

// file system module
// const FS = require('fs')
// FS.writeFileSync('new.txt','hello')

// HTTP module to make server handle request and response in node


// const d = require('./new')
// const HTTP = require('http');
// HTTP.createServer((req,resp)=>{
//     resp.writeHead(200,{'content-Type':'application\json'})
// resp.write('<h1 style="color:red">hello</h1>')
//     resp.write(JSON.stringify(d))
//     resp.end()
// }).listen(5000)
// console.log(process.argv);

// const x = process.argv
// const FS = require('fs')
// if (x[2] == 'add') {
//     FS.writeFileSync(x[3], x[4])
// }else{
//     FS.unlinkSync(x[3])
// }

// const fs = require('fs')
// const x = process.argv
// const path = require('path')
// const dir = path.join(__dirname,'files')
// console.log(dir);

// for (let i = 0; i < 6; i++) {
//     fs.writeFileSync(dir+`/${x[2]}${i}.txt` , x[3]+i)
// }

// fs.readdir(dir,(err,files)=>{
//     files.forEach((e)=>{
//         console.log(e);
//     })
// })

// const fs = require('fs')
// const path = require('path')
// const dir = path.join(__dirname, 'crud')
// const filepath = dir + '/test.txt'

// create file
// fs.writeFileSync(filepath,'testing')

// read file
// fs.readFile(filepath,'utf8',(err,i)=>{
// console.log(i);
// })


// update file
// fs.appendFile(filepath,'testing new added',(err)=>{
//     if (err) {
//         console.log(err)
//     }else{
//         console.log('success');
//     }
// })

// rename file
// fs.rename(filepath, `${dir}/xxx.txt`, (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('success');
//     }
// })

// delete file
// fs.unlinkSync(`${dir}/xxx.txt`)

// handle async data

// let a = 10;
// let b = 0;

// let wait = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(30)
//     }, 2000);
// })

// wait.then((d)=>{
// console.log(a+d);
// })

// const express = require('express')
// const app = express();

// // create web page
// app.get('',(req,res)=>{
//     console.log('data sent',req.query.name);
//     res.send(`<h2>hello ${req.query.name}</h2>`)
// })
// app.get('/about',(req,res)=>{
//     res.send([
//         {
//             name:'hello'
//         },
//         {
//             name:'hello'
//         },
//         {
//             name:'hello'
//         },
//         {
//             name:'hello'
//         },
//     ])
// })

// app.listen(5000)


// load static page from nodejs
// const express = require('express')
// const path = require('path')

// const app = express()
// const dir = path.join(__dirname,'public')

// app.use(express.static(dir))

// app.listen(5000)


// remove extension
// const express = require('express')
// const path = require('path')

// const app = express()
// const dir = path.join(__dirname,'public')

// app.get('',(req,res)=>{
//     res.sendFile(`${dir}/index.html`)
// })
// app.get('/home',(req,res)=>{
//     res.sendFile(`${dir}/home.html`)
// })
// app.get('/about',(req,res)=>{
//     res.sendFile(`${dir}/about.html`)
// })
// app.get('*',(req,res)=>{
//     res.sendFile(`${dir}/404.html`)
// })
// app.listen(5000)


// template page use to create dynamic page need to install npm i ejs

// const express = require('express')
// const path = require('path')

// const app = express()
// const dir = path.join(__dirname,'public')

// app.set('view engine', 'ejs');

// app.get('/profile',(req,res)=>{
//     const user = {
//         name:'xyz',
//         number:1234567890
//     }
//     res.render('profile',{user})
// })

// app.listen(5000)

// middleware use for route to modify request responce

// const express = require('express');
// const app = express();

// const reqf = (req, res, next) => {
//     if (!req.query.age) {
//         res.send('enter age')
//     }
//     else {
//         next()
//     }
// }
// app.use(reqf)
// app.get('/', (req, res) => {
//     res.send('home')
// })
// app.get('/about', (req, res) => {
//     res.send('about')
// })
// app.listen(5000)

// route level middleware

// const express = require('express');
// const app = express();
// const reqf = require('./middleware')

// // app.use(reqf)
// app.get('/', (req, res) => {
//     res.send('home')
// })
// app.get('/about',reqf, (req, res) => {
//     res.send('about')
// })
// app.get('/users', (req, res) => {
//     res.send('users')
// })
// app.listen(5000)

// connect mongodb with node (nmp i mongodb)

// const {MongoClient} = require('mongodb');
// const url = "mongodb://127.0.0.1:27017";
// const client = new MongoClient(url);

// async function getData() {
//     let result = await client.connect();
//     let db=result.db('soms');
//     let collection = db.collection('user');
//     let response = await collection.find({}).toArray();
//     console.log(response);
// }
// getData();

// --------read data from mongodb-----------
// const dbcollection = require('./mongodb')

// -----------first process to get data
// dbcollection().then((resp)=>{
// resp.find().toArray().then((e)=>{
//     console.log(e);
// })
// })

// ---------------second process to get data
// const main = async()=>{
//     let data = await dbcollection();
//     data = await data.find().toArray()
//     console.log(data);
// }
// main()

// insert data to mongodb
// const insertuser = async ()=>{
//     const data= await dbcollection();
//     const result = await data.insertMany(
//         [
//         {name:'some9',age:18,usertype:'other'},
//         {name:'some10',age:18,usertype:'other'},
//         {name:'some11',age:18,usertype:'other'}
//         ]
//     )
//     if (result.acknowledged) {
//         console.log('user inserted');
//     }
// }
// insertuser()

// update data to mongodb
// const updateuser = async () => {
//     const data = await dbcollection()
//     let result = await data.updateOne(
//         { name: 'some100' },
//         { $set: { name: 'some1000' } }
//     )
//     if (result.acknowledged) {
//         console.log('user update');
//     }
// }
// updateuser()

// delete data from mongodb
// const deleteuser = async()=>{
//     let data = await dbcollection();
//     let result = await data.deleteOne({name:'some1111'});
//     if (result.acknowledged) {
//         console.log('user deleted');
//     }
//     console.log(result);
// }
// deleteuser()


// crud mongoose

// const mongoose = require('mongoose');
// mongoose.connect("mongodb://127.0.0.1:27017/soms");
// const userSchema = new mongoose.Schema({
//     name:String,
//     price:Number
// });

// const aduser = async ()=>{
//     const usermodel = mongoose.model('user',userSchema);
//     let data = new usermodel({name:'newuser2222',price:100});
//     let result = await data.save();
//     console.log(result);
// }
// aduser()

// const updateuser = async () =>{
//     const usermodel = mongoose.model('user',userSchema);
//     let result = await usermodel.updateOne(
//         {name:'newuser2222'},
//         {$set:{price:500}}
//     )
//     if (result.acknowledged) {
//         console.log('success update');
//     }
// }
// updateuser()

// const deleteuser = async () =>{
//     const usermodel = mongoose.model('user',userSchema);
//     let result = await usermodel.deleteOne({name:'newuser2222'})
//     if (result.acknowledged) {
//         console.log('success delete');
//     }
// }
// deleteuser()

// const getuser = async () =>{
//     const usermodel = mongoose.model('user',userSchema);
//     let result = await usermodel.find()
//         console.log(result);
// }
// getuser()



// mongoose api-------------

const fs = require('fs')
const path = require('path')
const express = require('express');
const app = express();
const cors = require("cors")
require('./config');
app.use(express.json());
app.use(cors())
const PORT = process.env.PORT || 5000
// multer---------
const multer = require('multer')

// career file start----------
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './careerpdf')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now()
        cb(null, uniqueSuffix + file.originalname)
    }
})
const upload = multer({ storage: storage })
app.use("/careerpdf", express.static("careerpdf"))
// career file end----------

// about file start----------
const about = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './aboutimg')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now()
        cb(null, uniqueSuffix + file.originalname)
    }
})
const uploadabout = multer({ storage: about })
app.use("/aboutimg", express.static("aboutimg"))
// about file end----------

// team file start----------
const team = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './teamimg')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now()
        cb(null, uniqueSuffix + file.originalname)
    }
})
const uploadteam = multer({ storage: team })
app.use("/teamimg", express.static("teamimg"))
// team file end----------


// gallery file start----------
const gallery = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './galleryimg')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now()
        cb(null, uniqueSuffix + file.originalname)
    }
})
const uploadgallery = multer({ storage: gallery })
app.use("/galleryimg", express.static("galleryimg"))
// gallery file end----------


// contact api start
const Contact = require('./instances/contact');
// post contact
app.post("/contact/add", async (req, res) => {
    let data = new Contact(req.body);
    let result = await data.save();
    res.send(result);
    console.log(req.body);
});
// GET contact
app.get("/contact/get", async (req, res) => {
    let data = await Contact.find();
    res.send(data)
});
// delete contact
app.delete('/contact/delete/:_id', async (req, res) => {
    let data = await Contact.deleteOne(req.params)
    res.send(data)
})
// contact api end



// course api start
const Course = require('./instances/course');
// post course
app.post("/course/add", async (req, res) => {
    let data = new Course(req.body);
    let result = await data.save();
    res.send(result);
    console.log(req.body);
});
// GET course
app.get("/course/get", async (req, res) => {
    let data = await Course.find();
    res.send(data)
});
// delete course
app.delete('/course/delete/:_id', async (req, res) => {
    let data = await Course.deleteOne(req.params)
    res.send(data)
})
// course api end


// vacancy api start
const Vacancy = require('./instances/vacancy');


// post vacancy
app.post("/Vacancy/add", async (req, res) => {
    let data = new Vacancy(req.body);
    let result = await data.save();
    res.send(result);
    console.log(req.body);
});
// GET vacancy
app.get("/vacancy/get", async (req, res) => {
    let data = await Vacancy.find();
    res.send(data)
});
// delete vacancy
app.delete('/vacancy/delete/:_id', async (req, res) => {
    let data = await Vacancy.deleteOne(req.params)
    res.send(data)
})
// update vacancy
app.put('/vacancy/update/:_id', async (req, res) => {
    // console.log(req.params);
    let data = await Vacancy.updateOne(
        req.params,
        {
            $set: req.body
        }
    );
    res.send(data);
})
// vacancy api end

// admin api start
const Admin = require('./instances/admin');
// post admin
app.post("/admin/add", async (req, res) => {
    let data = new Admin(req.body);
    let result = await data.save();
    res.send(result);
    console.log(req.body);
});
// GET admin
app.get("/admin/get", async (req, res) => {
    let data = await Admin.find();
    res.send(data)
});
// delete admin
app.delete('/admin/delete/:_id', async (req, res) => {
    let data = await Admin.deleteOne(req.params)
    res.send(data)
})
// update admin
app.put('/admin/update/:_id', async (req, res) => {
    // console.log(req.params);
    let data = await Admin.updateOne(
        req.params,
        {
            $set: req.body
        }
    );
    res.send(data);
})
// login admin
app.get("/admin/login/:dataa/:p", async (req, res) => {
    let data = await Admin.find({email:req.params.dataa , apassword:req.params.p});
    if (data.length > 0) {
        res.send({
            status:'true',
            logindata:data
        })
    }else{
        res.send({
            status:'false'
        })
    }

});
// admin api end

// career api start
const Career = require('./instances/career');
// POST CAREER
app.post("/carrer/add", upload.single("file"), async (req, res) => {
    const cname = req.body.name;
    const creq = req.body.requirement;
    const cemail = req.body.email;
    const cmessage = req.body.message;
    const fileName = req.file.filename;
    // ----------------------
    const dateObj = new Date();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObj.getDate().toString().padStart(2, '0')
    const year = dateObj.getFullYear();
    const newDate = year + "-" + month + "-" + day;
    // ------------------------
    try {
        await Career.create({ name: cname, requirement: creq, email: cemail, pdf: fileName, message: cmessage, createdAt:newDate })
        res.send({ status: "ok" })
    } catch (error) {
        res.json({ status: error })
    }
})
// get career
app.get("/career/get", async (req, res) => {
    let data = await Career.find();
    res.send(data)
});
// delete career
app.delete('/career/delete/:_id', async (req, res) => {
    let dataa = await Career.find({ _id: req.params._id });
    let delpdf = dataa[0].pdf;
    const dir = path.join(__dirname, 'careerpdf')
    fs.unlinkSync(`${dir}/${delpdf}`)
    let data = await Career.deleteOne(req.params)
    res.send(data)
})
// career api end


// about api start
const About = require('./instances/about');
// POST ABOUT
app.post("/about/add", uploadabout.single("file"), async (req, res) => {
    const ades = req.body.description;
    const fileName = req.file.filename;
    try {
        await About.create({ description: ades, pdf: fileName })
        res.send({ status: "ok" })
    } catch (error) {
        res.json({ status: error })
    }
})
// get about
app.get("/about/get", async (req, res) => {
    await About.find()
        .then(users => res.json(users))
        .catch(err => res.json(err))
});
// delete about
app.delete('/about/delete/:_id', async (req, res) => {
    let dataa = await About.find({ _id: req.params._id });
    let delpdf = dataa[0].pdf;
    const dir = path.join(__dirname, 'aboutimg')
    fs.unlinkSync(`${dir}/${delpdf}`)
    let data = await About.deleteOne(req.params)
    res.send(data)
})
// about api end

// gallery catagory api start
const galerycat = require('./instances/galerycat');
// post gallery category
app.post("/gc/add", async (req, res) => {
    let data = new galerycat(req.body);
    let result = await data.save();
    res.send(result);
    console.log(req.body);
});
// get gallery category
app.get("/gc/get", async (req, res) => {
    let data = await galerycat.find();
    res.send(data)
});
// delete gallery category
app.delete('/gc/delete/:_id', async (req, res) => {
    const Gallery = require('./instances/gallery');
    let dd = await galerycat.find({ _id: req.params._id })
    let ddd = await Gallery.find({ description: dd[0].name })
    if (ddd.length === 0) {
        let data = await galerycat.deleteOne(req.params)
        res.send(data)
    }

})
// gallery catagory api end

// gallery image api sart
const Gallery = require('./instances/gallery');
// POST gallery
app.post("/gallery/add", uploadgallery.single("file"), async (req, res) => {
    const ades = req.body.description;
    const fileName = req.file.filename;
    try {
        await Gallery.create({ description: ades, pdf: fileName })
        res.send({ status: "ok" })
    } catch (error) {
        res.json({ status: error })
    }
})
// get filter gallery
app.get("/gallery/get/:dataa", async (req, res) => {
    await Gallery.find({ description: req.params.dataa })
        .then(users => res.json(users))
        .catch(err => res.json(err))
});
// get gallery
app.get("/ggalleryy/get", async (req, res) => {
    await Gallery.find()
        .then(users => res.json(users))
        .catch(err => res.json(err))
});
// delete gallery
app.delete('/gallery/delete/:_id', async (req, res) => {
    let dataa = await Gallery.find({ _id: req.params._id });
    let delpdf = dataa[0].pdf;
    const dir = path.join(__dirname, 'galleryimg')
    fs.unlinkSync(`${dir}/${delpdf}`)
    let data = await Gallery.deleteOne(req.params)
    res.send(data)
})

// gallery image api end

// our team api start
const Team = require('./instances/ourteam');
// POST TEAM
app.post("/team/add", uploadteam.single("file"), async (req, res) => {
    const fname = req.body.name;
    const fileName = req.file.filename;
    const deg = req.body.deg;
    const description = req.body.description;
    const flink = req.body.flink;
    const ilink = req.body.ilink;
    const llink = req.body.llink;
    try {
        await Team.create({ name: fname, pdf: fileName, deg:deg, description:description, flink:flink, ilink:ilink, llink:llink })
        res.send({ status: "ok" })
    } catch (error) {
        res.json({ status: error })
    }
})
// get team
app.get("/team/get", async (req, res) => {
    await Team.find()
        .then(users => res.json(users))
        .catch(err => res.json(err))
});
// get filter team by id
app.get("/teamm/get/:_id", async (req, res) => {
    await Team.find({  _id: req.params._id })
        .then(users => res.json(users))
        .catch(err => res.json(err))
});
// delete team
app.delete('/team/delete/:_id', async (req, res) => {
    let dataa = await Team.find({ _id: req.params._id });
    let delpdf = dataa[0].pdf;
    const dir = path.join(__dirname, 'teamimg')
    fs.unlinkSync(`${dir}/${delpdf}`)
    let data = await Team.deleteOne(req.params)
    res.send(data)
})
// update team
app.put('/team/update/:_id', async (req, res) => {
    // console.log(req.params);
    let data = await Team.updateOne(
        req.params,
        {
            $set: req.body
        }
    );
    res.send(data);
})
// our team api end





// post
// const Product = require('./product');
// app.post("/productpost",async (req,res)=>{
//     let data = new Product(req.body);
//     let result = await data.save();
//     res.send(result);
// console.log(req.body);
// });

// get
// app.get('/product/get',async (req,res)=>{
//     let data = await Product.find();
//     res.send(data)
// })

// delete
// app.delete('/product/delete/:_id', async (req,res)=>{
//     // console.log(req.params);
//     let data = await Product.deleteOne(req.params)
//     res.send(data)
// })

// update
// app.put('/product/update/:_id', async (req,res)=>{
//     // console.log(req.params);
//     let data = await Product.updateOne(
//         req.params,
//         {
//             $set: req.body
//         }
//     );
//     res.send(data);
// })


app.listen(PORT , function(){
    console.log("server is running");
});