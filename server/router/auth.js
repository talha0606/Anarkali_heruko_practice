const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const multer = require("multer");

require("../db/conn");
const User = require("../model/userSchema");
const File = require("../model/fileSchema");
const Product = require("../model/productSchema");

router.get("/", (req, res) => {
  res.send(`Hello world from the server rotuer js`);
});

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    // callback(null, "./uploads/");
    callback(null, "../frontend/public/uploads/");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
// upload.single("shopImage");

router.post("/register", upload.single("shopImage"), (req, res) => {
  // for signin
  const user = new User({
    sName: req.body.sName,
    sDescription: req.body.sDescription,
    address: req.body.address,
    email: req.body.email,
    password: req.body.password,
    category: req.body.category,
    shopImage: req.file.originalname,
  });

  user
    .save()
    .then((resu) => {
      res.json({ id: resu._id });
    })
    .catch((err) => {
      console.log(err);
    });

  //   // const { sName, address, email, password } = req.body;
  //   // const { shopImage } = req.file.originalname;

  //   // if (!sName || !address || !email || !password || !) {
  //   //   return res.status(422).send("Please filled the empty field properly");
  //   // }

  //   // With Async and Await
  //   // try {
  //   //   // const userExist = await User.findOne({ email: email });

  //   //   // if (userExist) {
  //   //   //   return res.status.toString(422).json({ error: "Email already Exist" });
  //   //   // } else if (password != cpassword) {
  //   //   //   return res.status
  //   //   //     .toString(422)
  //   //   //     .json({ error: "Password are not matching" });
  //   //   // } else {
  //   //   //   // const user = new User(req.body).save();
  //   //   const user = new User({
  //   //     sName: req.body.sName,
  //   //     address: req.body.address,
  //   //     email: req.body.email,
  //   //     password: req.body.password,
  //   //     shopImage: req.file.originalname,
  //   //   });

  //   //   // yaha pr password and cpassword ko hash karain gy

  //   //   const userRegistered = await user.save();

  //   //   res.status(201).json({ message: "User Registered Successfully" });

  //   //   // if (userRegistered) {
  //   //   //   res.status(201).json({ message: "User Registered Successfully" });
  //   //   // } else {
  //   //   //   res.status(500).json({ error: "Failed to registered" });
  //   //   // }
  //   // } catch (error) {
  //   //   console.log(error);
  //   // }

  //   // // With Promise
  //   // // User.findOne({ email: email })
  //   // //   .then((userExist) => {
  //   // //     if (userExist) {
  //   // //       return res.status.toString(422).json({ error: "Email already Exist" });
  //   // //     }

  //   // //     // const user = new User(req.body).save();
  //   // //     const user = new User({
  //   // //       name: name,
  //   // //       email: email,
  //   // //       phone,
  //   // //       work,
  //   // //       password,
  //   // //       cpassword,
  //   // //     });

  //   // //     user
  //   // //       .save()
  //   // //       .then(() => {
  //   // //         res.status(201).json({ message: "user registered successfully" });
  //   // //       })
  //   // //       .catch((err) =>
  //   // //         res.status(500).json({ error: "Failed to registered" })
  //   // //       );
  //   // //   })
  //   // //   .catch((error) => {
  //   // //     console.log(error);
  //   // //   });

  //   // // console.log(req.body);
  //   // // res.json({ message: req.body });
  //   // // res.send("mera register page");
});

router.post("/product", upload.single("prodImage"), (req, res) => {
  // for signin
  const prod = new Product({
    sellerId: req.body.sellerId,
    pName: req.body.pName,
    pDescription: req.body.pDescription,
    price: req.body.price,
    prodImage: req.file.originalname,
    category: req.body.category,
    brand: req.body.brand,
    stock: req.body.stock,
  });

  prod
    .save()
    .then(() => res.json("New Product Added"))
    .catch((err) => {
      console.log(err);
    });
});

// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ error: "Plz filled the data" });
//     }

//     const userLogin = await User.findOne({ email: email });
//     // console.log(userLogin);

//     if (userLogin) {
//       const isMatch = await bcrypt.compare(password, userLogin.password);

//       // Generate Web Tokens for security
//       const token = await userLogin.generateAuthToken();
//       console.log(token);

//       // Generate cookies
//       res.cookie("jwtoken", token, {
//         expires: new Date(Date.now() + 25892000000),
//         httpOnly: true,
//       });
//       // if (!userlogin)
//       if (!isMatch)
//         res.status(400).json({ error: "Invalid login Credentials pass" });
//       else res.json({ message: "User Signin Successfully" });
//     } else {
//       res.status(400).json({ error: "Invalid login Credentials" });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

router.post("/products", async (req, res) => {
  console.log(`In Home API`);
  // console.log(req.body.filters);
  let findArgs = {};

  for (let key in req.body.filters) {
    if (req.body.filters[key].length > 0) {
      if (key === "price") {
      } else {
        findArgs[key] = req.body.filters[key];
        console.log(req.body.filters[key]);
        console.log(findArgs);
      }
    }
  }
  const rootUser = await Product.find(findArgs);

  if (!rootUser) {
    throw new Error("Data not Found");
  }

  res.send(rootUser);
});

router.get("/myproducts", async (req, res) => {
  try {
    console.log("Myproducts API");
    const myproducts = [await Product.find({ sellerId: req.query.id })];
    console.log("Myproducts" + myproducts);
    res.send(myproducts);
  } catch (err) {
    console.log(err.Message);
  }
});

router.get("/shopinfo", async (req, res) => {
  console.log("ShopInfo API");
  const ShopData = await User.find({ _id: req.query.sellerid });
  res.send(ShopData);
});

router.get("/shop_by_id", async (req, res) => {
  console.log("In Shop Detail API");

  let type = req.query.type;
  let shopId = req.query.id;

  console.log(req.query.type);
  console.log(shopId);

  // if (type === "array") {
  // }

  const shop = await Product.find({ _id: shopId });
  if (!shop) {
    throw new Error("Shop not found");
  } else {
    console.log("Shop found");
  }
  console.log(shop);

  res.send(shop);
});

router.get("/deleteproduct", async (req, res) => {
  try {
    console.log("Delete Product API...");
    const deleted = await Product.deleteOne({ _id: req.query.id });
    if (deleted) {
      res.send("Product Deleted Successfully");
    }
  } catch (err) {
    console.log("DeleteProductError: " + err.Message);
  }
});
//.........................................................................................
// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, "./uploads/");
//   },
//   filename: (req, file, callback) => {
//     callback(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

router.post("/postImage", upload.single("shopImage"), (req, res) => {
  const newFile = new File({
    shopImage: req.file.originalname,
  });

  newFile
    .save()
    .then(() => res.json("New File Posted"))
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
