const { commentedService } = require("../serivces");

const addcommented = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const commented = await commentedService.addcommented(body);
    console.log(req.body);
    res.status(201).json({
      message: "commented Created success",
        
      data: commented,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};


const getcommented = async (req, res) => {
    const commented = await commentedService.getcommented();
  
    console.log(commented, "get");
  
    res.status(200).json({
      message: "commented get success",
      data: commented,
    });
  };
  


  const deletecommented = async (req, res) => {

  
    let id = req.params.id;
  
    const commented = await commentedService.deletecommented(id);
  
  
    console.log(commented, "delete");
  
    res.status(200).json({
      message: "commented delete success",
      data: commented,
    });
  };  
  
module.exports = { addcommented,getcommented,deletecommented};
