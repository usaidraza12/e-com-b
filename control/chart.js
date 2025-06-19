
const Chartitem = require("../module/itemchart");
const Chart =require("../module/models/Cart")

async function Send(req,res) {
  
     const body = req.body;

     const name=body.name;
     const price=body.price;
     const image= body.image;
     const quantity=body.quantity;
     const userId=body.userId;
    
   let cartItem = await Chart.findOne({name,price});
    
    if (cartItem) {
      // Update quantity if item exists
      cartItem.quantity += quantity;
    res.status(200).json({message:"okk"});


    } else {
      // Create new cart item
      cartItem = await Chart.create({
      name,
       price,
      image,
       quantity,
       userId,
      });
    res.status(200).json({message:"okk"});

    }
   
}

// async function Send(req, res) {
//   try {
//     const { name, price, quantity, userId } = req.body;
//     console.log(name,price,quantity,userId)

//     const parsedQuantity = parseInt(quantity); // ✅ ensure it's a number

//     let cartItem = await Chart.findOne({ name, price, userId });

//     if (cartItem) {
//       cartItem.quantity += parsedQuantity;
//       await cartItem.save();
//     } else {
//       if (!req.file) {
//         return res.status(400).json({ error: "Image file is required" });
//       }

//       cartItem = await Chart.create({
//         name,
//         price,
//         userId,
//         quantity: parsedQuantity,
//         image: {
//           data: req.file.buffer,
//           contentType: req.file.mimetype,
//         },
//       });
//     }

//     res.status(200).json({ message: "OK", item: cartItem });
//   } catch (error) {
//     console.error("Error in Send:", error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// }
async function Sendt(req,res) {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ message: 'userId is required' });
  }

  try {
    const cartItems = await Chart.find({ userId });
    res.status(200).json(cartItems);
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}


module.exports={
    Send,
    Sendt
}