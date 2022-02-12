const mongoose = require('mongoose');
const Product = require('./models/product');

//making array so that intially if database is dropped we would not face much prob in entering elemnt everytime

const products = [
    {
        name: "Sabeel Bhaiya",
        desc:"This covid-19 virus is just in our head we can together fight with it with the help of yoga "
        
    },
    {
        name: "Kartil Bhaiya",
        desc:"This covid-19 virus is just in our head we can together fight with it with the help of yoga "
        
    },
    {
        name: "Samarth",
        desc:"This covid-19 virus is just in our head we can together fight with it with the help of yoga "
        
    }

]





const seedDB =  async ()=>{
    await Product.insertMany(products);
    console.log("DB seeded");
}

module.exports = seedDB;