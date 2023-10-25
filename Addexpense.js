const Expense=require('../models/expense');
const Razorpay = require('razorpay');
const Order = require('../models/orders')
const SIGNIN=require('../models/signin');


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
        //console.log(finddata);
        
       res.status(201).json({Alluserdata:finddata});


    }
    catch(err){
        console.log(err);
      res.status(500).send('An error occurred while saving appointments.');
    }


};
exports.premium=async(req,res)=>{
    try{
        var rzp = new Razorpay({
            key_id:'rzp_test_yzoX6RtuI4Ca9M',
            key_secret:'Ht0aadUnipaL14shsnrXA4GP'
        })
        const amount = 2500;

        rzp.orders.create({amount, currency: "INR"}, (err, order) => {
            if(err) {
                throw new Error(JSON.stringify(err));
            }
            Order.create({ orderid: order.id,userDetailId:req.user.id,status: 'PENDING'}).then(() => {
                return res.status(201).json({ order, key_id : rzp.key_id});

            }).catch(err => {
                throw new Error(err)
            })
        })

    }
    catch(err){
        console.log(err);
      res.status(500).send('An error occurred while saving appointments.');
    }
};
exports.updatestatus=async(req,res)=>{
    try{
        const userId = req.user.id;
        const { payment_id, order_id} = req.body;
        const order  = await Order.findOne({where : {orderid : order_id}}) //2
        const signin  = await SIGNIN.findOne({where : {id : userId}}) //2
        const promise1 =  order.update({ paymentid: payment_id, status: 'SUCCESSFUL'}) 
        const promise2 =  signin.update({ ispremiumuser: true }) 

        Promise.all([promise1, promise2]).then(()=> {
            return res.status(202).json({sucess: true, message: "Transaction Successful" });
        }).catch((error ) => {
            throw new Error(error)
        })
    }
    catch(err){
        console.log(err);
      res.status(500).send('An error occurred while saving appointments.');
    }
};
