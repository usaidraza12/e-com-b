
const Chart =require("../module/models/Cart")

// async function Send(req,res) {
  
//      const {name,price,image,quantity,userId}= req.body;
//    const cartItem = await Chart.findOne({
//     name:name,
//     userId:userId,
//    });
    
//     if (cartItem) {
//        cartItem.quantity += quantity;
//          res.status(201).json({message:"add"});
//       // Update quantity if item exists


//     }

//       // Create new cart item
//      const createcart = await Chart.create({
//       name,
//        price,
//       image,
//        quantity,
//        userId,
//       });
//     res.status(200).json({message:"okk"});

   
// }

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
// async function Sendt(req,res) {
//   const { userId } = req.query;

//   if (!userId) {
//     return res.status(400).json({ message: 'userId is required' });
//   }

//   try {
//     const cartItems = await Chart.findOne({userId});
//     res.status(200).json({cartItems});
//   } catch (error) {
//     console.error('Error fetching cart:', error);
//     res.status(200).json({ message: 'continue' });
//   }

// }

async function Send(req, res) {
  const { name, price, image, quantity, userId } = req.body;

  try {
    const cartItem = await Chart.findOne({ name, userId });

    if (cartItem) {
      cartItem.quantity += quantity;
      await cartItem.save(); // Don't forget to save changes
      return res.status(201).json({ message: "add" }); // ✅ return here
    }

    // Create new cart item if not exists
    await Chart.create({
      name,
      price,
      image,
      quantity,
      userId,
    });

   return res.status(200).json({ message: "New item added to cart" });
  } catch (err) {
    console.error("Error in Send:", err);
   return res.status(500).json({ error: "Server error" });
  }
}

async function Sendt(req, res) {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ message: 'userId is required' });
  }

  try {
    const cartItems = await Chart.find({ userId }); // ✅ find() not findOne()
   return res.status(200).json({ cartItems }); // ✅ Key matches frontend use
  } catch (error) {
    console.error('Error fetching cart:', error);
  return  res.status(500).json({ message: 'Server error' }); // ✅ Use 500
  }
}

module.exports={
    Send,
    Sendt
}