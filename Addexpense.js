const Expense=require('../models/expense');
const Razorpay = require('razorpay');
const Order = require('../models/orders')
const SIGNIN=require('../models/signin');
const usercontrol=require('./expensesignin');


exports.addexpense= async(req,res)=>{
    try{
        const{Price,Description,Category}=req.body;
        const data1=await Expense.create({
        Price:Price,
        Description:Description,
        Category:Category,
        userDetailId:req.user.id,
       });
        
        
       res.status(201).json({added:data1});


    }
    catch(err){
        console.log(err);
      res.status(500).send('An error occurred while saving appointments.');
    }


};
exports.showallexpenses= async(req,res)=>{
    try{
        const UID=req.user.id;
       // console.log(`uid>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>${UID}`);
        const finddata=await Expense.findAll({where:{userDetailId:UID}});
        //const finddata1=await SIGNIN.findAll({where:{id:UID}});
        //console.log(finddata);
        
       res.status(201).json({Alluserdata:finddata});


    }
    catch(err){
        console.log(err);
      res.status(500).send('An error occurred while saving appointments.');
    }


};
