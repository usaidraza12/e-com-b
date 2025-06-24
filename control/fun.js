const User=require("../module/module")
const express =require("express")
const app=express();
const bcrypt = require('bcrypt');
const {v4:uuidv4}=require("uuid")
const cors= require("cors")
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());
const cookieParser = require("cookie-parser");
app.use(cookieParser())
const {sign,login}=require('../control/control-router')

// async function usercreate (req,res){
//   const {name,email,password}= req.body;
//   if (!email || !password || !name) {
//     return res.status(400).json({ message:"email,namr or passord required" });
//   }else if(email && password && name){
//     const find= await User.findOne({name,email,password})
//     if(find){
//       return res.json({message:"this user alredy exit"})
//     }
//     else if(!find){
//       const hash= await bcrypt.hash(password,10)
//       const create = await User.create({
//         name,
//         email,
//         password:hash
//       })
      
//     }
//   }
//     }
 // Adjust path as needed

async function usercreate(req, res) {
  const { name, email, password } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({ message: "Email, name, or password required" });
  }
else if(email || password || name){
  try {
    // Check if user already exists by email only
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "This email is already registered" });
    }

    // Hash password
    const hash = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await User.create({
      name,
      email,
      password: hash
    });

    return res.status(201).json({newUser});

  } catch (err) {
    console.error("Error creating user:", err);

    // Handle duplicate key error if schema has unique constraint

    return res.status(500).json({ message: "Internal server error" });
  }
}

}
    async function usercheck(req, res) {
      const { email, password } = req.body;
    

      if (!email || !password) {
        return res.status(400).json({ message:"email or passord required" });
      }
      else if(email || password){
      const user = await User.findOne({email}); // NOTE: plaintext password — not secure!
      const mypass= await bcrypt.compare(password,user.password);
      
if (!mypass) {
        

        return res.status(401).json({ message:"invalid info"});
      }else if(mypass){
      

        const token=sign(user)
       return res.status(200).json({token,user});
      }
      }
      
    }


    module.exports={
        usercreate,
        usercheck

    }