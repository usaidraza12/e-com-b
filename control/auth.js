const express= require('express');

const {login}=require('../control/control-router')

function auth(req, res, next){
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];


  if (!token){
    return res.status(401).json({ message:false})
  }
 
    login(token)
    next()
 
}
module.exports={
  auth,
}