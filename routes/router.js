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
const multer = require("multer");

const storage = multer.memoryStorage(); // 👈 image ko memory me buffer banata hai
const upload = multer({ storage: storage });

router.get("/detail",usercreate);
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

router.get('/api/cart/:userId', async (req, res) => {
  try {
    const cartItems = await Chart.find({ userId: req.params.userId });
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});




router.get("/login",usercheck);
router.post("/login",usercheck);

// router.post('/addcart', async (req, res) => {
//   try {
//     const { name, price, image, id } = req.body;

//     const newItem = new Chartitem({
//       name,
//       price,
//       image,
//       productId: id
//     });

//     await newItem.save();
//     res.status(200).json({ message: 'Product added to cart successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Something went wrong' });
//   }
// });

router.get('/services',auth,userproduct);
router.post('/services',auth,userproduct);


// async (req, res) => {
//   // try {
//     const body=req.body();
//     console.log(body)

//  console.log(para)
//     res.json({message:"ok"});
  //   // Find existing cart item
  //   let cartItem = await Cart.findOne({ userId, productId });
    
  //   if (cartItem) {
  //     // Update quantity if item exists
  //     cartItem.quantity += quantity;
  //   } else {
  //     // Create new cart item
  //     cartItem = new Cart({
  //       userId,
  //       productId,
  //       name,
  //       price,
  //       image,
  //       quantity
  //     });
  //   }
    
  //   await cartItem.save();
  //   res.status(200).json(cartItem);
  // } catch (error) {
  //   res.status(500).json({ error: error.message });
  // }
// }
router.get("/auth",auth);
router.post("/auth",auth);
module.exports=router
