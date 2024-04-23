const asyncHandler = require("express-async-handler");

const User = require("../Models/usermodel");
const generateToken = require("../config/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  try {
    

  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }

  const userExists = await User.findOne({
    email,
  });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token:generateToken(user._id)
    });
  }else{
    res.status(400);
    throw new Error("Something Went Wrong")
  }
} catch (error) {
    
}
});

const authUser = (async(req,res) => { 

  try {
    
 
  const {email ,  password} = req.body;

  const user = await User.findOne({email});
  if(user && (await user.match_password(password))){
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token:generateToken(user._id)
    })
  }else{
    res.status(401);
    throw new Error("Invalid Email or Passowrd")
  }
} catch (error) {
    
}
});

module.exports ={registerUser,authUser};
