const express = require('express');
const router = express.Router();
const Product = require('../models/product');



//listing all the products
router.get('/products',async(req,res)=>{
try{
    const products = await Product.find({});
    res.render('products/index',{products});

}
catch(e){
    console.log("something went wrong");
    res.render('error');
}

    
})




//ADDING FORM
router.get('/products/new',(req,res)=>{
    try{
        res.render('products/new'); 
            
    }
    catch(e){
        console.log("something went wrong");
        res.render('error');
    }

})

//ADDING NEW PRODUCT VIA FORM AFTER MAKING THE NAME OBJECT IN new

    router.post('/products',async(req,res)=>{
        try{
                const {product} = req.body;
                await Product.create(product);                
                // await Product.create(req.body.product); 
                res.redirect('/products');
        }
    
    
        catch(e){
            console.log("something went wrong");
            res.render('error');
        }
    
    
    })
    
    //showing a partiular product
     router.get('/products/:id',async(req,res)=>{
         try{
            const {id} = req.params;
            const product = await Product.findById(id);
           
            res.render('products/show', {product});
    
         }
         catch(e){
            console.log("something went wrong");            
            res.redirect('/error');
    
         }
    
    
    }) 

     //deleteing the partiular product
    router.delete('/products/:id',async(req,res)=>{
        try{
           await Product.findByIdAndDelete(req.params.id);
           res.redirect('/products');
   
        }
        catch(e){
           console.log("something went wrong");
           req.flash('error' , 'Something went Wrong!!! Cannot Delete the Product');
           res.render('error');
   
        }
        
    })
   
    router.get('/error',(req,res)=>{
        res.render('error');
    })
    
     module.exports = router;