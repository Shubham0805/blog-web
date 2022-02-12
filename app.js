const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const methodOverride = require('method-override');


//routes
const productRoutes = require('./routes/product');


mongoose.connect('mongodb://localhost:27017/great-quotes', 
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            // usefindAndModify:false,
            // useCreateIndex:true
        })
        .then(()=>console.log("DB connected"))
        .catch(err=>console.log(err));


            //SEEDING DBS
            // seedDB();

//configuring the view engine   
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'))
//views is for ejs files and public is for static files

//configuring static files
app.use(express.static(path.join(__dirname,'/public')))
//req ki body ko parse krna hai therefore we will use
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));







//using routes
app.use(productRoutes);



app.get('/',(req,res)=>{
    res.send("welcome home/landing page");
    // res.render('products/home');
})

app.listen(3000,()=>{
    console.log("server connected at port 3000");
})