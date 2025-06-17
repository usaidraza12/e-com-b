
const jwt =require("jsonwebtoken");


function sign(user) {
  return jwt.sign({ id: user._id,email:user.email},process.env.SEC_URL);
}
function login(id){
  return jwt.verify(id,process.env.SEC_URL)
}
module.exports={
  sign,
  login
}