const express =require("express")
const {usercheck,usercreate}= require("../control/fun")
const app=express();
const{auth}=require('../control/auth')
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
const router = express.Router();
const {userproduct}= require('../control/info');
const {Send,Sendt}= require('../control/chart')
const usercontrol2 = require("../control/control-router")
const Chartitem=require("../module/itemchart");
const Chart=require("../module/models/Cart");

// router.get("/detail",usercreate);
router.post("/detail",usercreate);

// Remove item from cart
router.delete('/api/cart/:id', async (req, res) => {
  try {
    await Chart.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Item removed from cart' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/api/cart/add',auth,Send);
router.get('/api/cart/all',auth,Sendt);

// router.get("/login",usercheck);
router.post("/login",usercheck);

router.get('/services',auth,userproduct);
// router.post('/services',auth,userproduct);

router.get("/auth",auth);
router.post("/auth",auth);
module.exports=router
