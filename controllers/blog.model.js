const { blogService } = require("../serivces");

const addblog = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const blog = await blogService.addblog(body);
    console.log(req.body);
    
    res.status(201).json({
      message: "blog Created success",
  
      data: blog,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};


const getblog = async (req, res) => {
    const blog = await blogService.getblog();
  
    console.log(blog, "get");
  
    res.status(200).json({
      message: "blog get success",
      data: blog,
    });
  };
  


  const deleteblog = async (req, res) => {

  
    let id = req.params.id;
  
    const blog = await blogService.deleteblog(id);
  
  
    console.log(blog, "delete");
  
    res.status(200).json({
      message: "blog delete success",
      data: blog,
    });
  };  
  
module.exports = { addblog,getblog,deleteblog};
