import User from "../model/userModel.js";
import bcryptjs from "bcryptjs";

export const Signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User Already exits.." });
    }
    const haspassword = await bcryptjs.hash(password, 10);
    const creatUser = new User({
      name: name,
      email: email,
      password: haspassword,
    });
    creatUser.save();
    res.status(201).json({ message: "User created"});
  } catch (error) {
    console.log("err:" + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const Login = async (req, res) => {
  try {
    let { email, password } = req.body;
    let isuser = await User.findOne({ email });
    let ispassword = await bcryptjs.compare(password, isuser.password);
    if (!isuser || !ispassword) {
      return res
        .status(400)
        .json({ message: "invalid user enter correct email" });
    } else {
      res.status(200).json({
        message: "Login succefull",
        user: {
          id: isuser.id,
          email: isuser.email,
          password: isuser.password,
        },
      });
    }
  } catch (error) {
    console.log("error;" + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
