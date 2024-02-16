const { verifyToken, createToken } = require("../middlewares/auth");
const { userService } = require("../serivces");

const adduser = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const user = await userService.adduser(body);
    res.status(201).json({
      message: "user Created success",
      data: user,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

//LOG-IN
const loginuser = async (req, res) => {
  const body = req.body;
  const email = req.body.email;
  const password = req.body.password;
  

  const findUser = await userService.findUser(email);

  console.log(findUser);
  if (!findUser) {
    res.status(500).json({
      message: "user not found",
    });
    
  } else {
    if (password === findUser.password) {
      
      let data = {
        _id: findUser._id,
        email: findUser.email,
        role: findUser.role,
      };

      const token = createToken(data);
      res.cookie("login_token", token);
      res.status(200).json({
        message: "login success",
        
      });
    } else {
      res.status(500).json({
        message: "invalid password",
      });
    }
  }
};


const getuser = async (req, res) => {
  const token = req.cookies["login_token"];
  if (!token) {
    res.status(500).json({
      mesasge: "you are not login",
    });
  }
  const user = await verifyToken(login_token);

  console.log(user);

  res.status(200).json({
    message: "profile get success",
    data: user,
  });
};

const deleteuser = async (req, res) => {


    let id = req.params.id;
  
    const user = await userService.deleteuser(id);
  
  
    console.log(user, "delete");
  
    res.status(200).json({
      message: "user delete success",
      data: user,
    });
  };

module.exports = { adduser, loginuser, getuser,deleteuser };
