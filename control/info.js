const express= require('express');
// const {login}=require('../control/control-router');
// const img1 =require('../uploads/down1.jpg')
// const img2 =require('../uploads/down2.jpg')
// const img3 =require('../uploads/download.jpg')
// const img4 =require('../uploads/img.jpg')
// const img5 =require('../uploads/img1.jpg')
// const img6 =require('../uploads/img2.jpg')
// const img7 =require('../uploads/pic.jpg')
const list = [
    { id: 1, name: 'Running Shoes', price: 59.99,  },
    { id: 2, name: 'Casual Sneakers', price: 49.99,},
    { id: 3, name: 'Formal Shoes', price: 89.99, },
    { id: 4, name: 'Sports Shoes', price: 69.99,},
    { id: 5, name: 'Sports Shoes', price: 69.99, },
    { id: 6, name: 'Sports Shoes', price: 69.99, },
    { id: 7, name: 'Running Shoes', price: 59.99,  },
    { id: 8, name: 'Running Shoes', price: 59.99,},
    { id: 9, name: 'High Heels', price: 79.99,},
  ];
function userproduct(req,res) {
  //  const authHeader = req.headers['authorization'];
  //   const token = authHeader && authHeader.split(' ')[1];
    
    // console.log(token)
  
  //   if (!token){
  //     return res.status(401).json({ message:false})
  
  //   }
  //     login(token)
     return res.status(200).json([list])

}

module.exports={
    userproduct
}
