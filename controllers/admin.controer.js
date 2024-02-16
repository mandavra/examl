const { verifyToken, createToken } = require("../middlewares/auth");
const { adminService } = require("../serivces");

const addadmin = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const admin = await adminService.addadmin(body);
    res.status(201).json({
      message: "admin Created success",
      data: admin,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

//LOG-IN
const loginadmin = async (req, res) => {
  const body = req.body;
  const email = req.body.email;
  const password = req.body.password;
  

  const findadmin = await adminService.findadmin(email);

  console.log(findadmin);
  if (!findadmin) {
    res.status(500).json({
      message: "admin not found",
    });
  } else {
    if (password === findadmin.password) {
      
      let data = {
        _id: findadmin._id,
        email: findadmin.email,
        role: findadmin.role,
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


const getadmin = async (req, res) => {
  const token = req.cookies["login_token"];
  if (!token) {
    res.status(500).json({
      mesasge: "you are not login",
    });
  }
  const admin = await verifyToken(login_token);

  console.log(admin);

  res.status(200).json({
    message: "profile get success",
    data: admin,
  });
};

const deleteadmin = async (req, res) => {


    let id = req.params.id;
  
    const admin = await adminService.deleteadmin(id);
  
  
    console.log(admin, "delete");
  
    res.status(200).json({
      message: "admin delete success",
      data: admin,
    });
  };

module.exports = { addadmin, loginadmin, getadmin,deleteadmin };
