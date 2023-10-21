const Expense=require('../models/expense');



exports.addexpense= (req,res)=>{
    try{
        const{Price,Description,Category}=req.body;
        const data=req.SIGNIN.createExpense({
        Price:Price,
        Description:Description,
        Category:Category,
       });
        
        
       res.status(201).json({added:data});


    }
    catch(err){
        console.log(err);
      res.status(500).send('An error occurred while saving appointments.');
    }


};