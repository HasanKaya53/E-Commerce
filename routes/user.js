const express = require('express');
const router = express.Router();



router.get('/',(req,res,next)=>{
    let productList = [
        {
            href: "product-6.html",
            front_image: "product-6.jpg",
            back_image: "",
            category:"Dress",
            name: "Cotton floral print Dress",
            price: "40",
            discount: "50",
            discount_price: "20",
            currency: "TL",
            InsertDate: "2020-08-01"
        },
        {
            href: "product-6.html",
            front_image: "product-6.jpg",
            back_image: "product-121.jpg",
            category:"Dress",
            name: "Cotton floral print Dress",
            price: "30",
            discount: "0",
            discount_price: "0",
            currency: "TL",
            InsertDate: "2023-09-01"
        },
        {
            href: "product-6.html",
            front_image: "product-6.jpg",
            back_image: "product-121.jpg",
            category:"Dress",
            name: "Cotton floral print Dress",
            price: "50",
            discount: "0",
            discount_price: "0",
            currency: "TL",
            InsertDate: "2023-08-01"
        }
    ];
    res.render('index',{pageTitle:'Home',productList:productList});
});




module.exports = router;