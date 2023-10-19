const SIGNIN=require('../models/signin');

exports.registeruser=async(req,res)=>{
    try{
        const {USERNAME,EMAIL,PASSWORD } = req.body;
    
       const data=await SIGNIN.create({
        USERNAME:USERNAME,
        EMAIL:EMAIL,
        PASSWORD:PASSWORD,
      })
           
          res.status(201).json({newuserdetails:data});
          
      }catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while registering user .');
      }

};
exports.alreadyauser=async(req,res)=>{
    try{
        UID=req.params.id;
        const finduser= await SIGNIN.findByPk(UID)
        res.status(201).json({user:finduser});

    }
   catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while registering user .');
  }

};
exports.finduser=async(req,res)=>{
    try{
    const finduser=await SIGNIN.findAll()
    res.status(201).json({userlogin:finduser});

    }
    
    catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while registering user .');
      }

};