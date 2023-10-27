const Expense=require('../models/expense');
const Razorpay = require('razorpay');
const Order = require('../models/orders')
const SIGNIN=require('../models/signin');
const usercontrol=require('./expensesignin');
const sequelize = require('../util/database');



exports.addexpense= async(req,res)=>{
    
    const t = await sequelize.transaction(); // Start a new transaction

try {
    const { Price, Description, Category } = req.body;

    // Create a new expense record within the transaction
    const data1 = await Expense.create({
        Price: Price,
        Description: Description,
        Category: Category,
        userDetailId: req.user.id,
    }, { transaction: t });

    // Calculate the new total expense
    const newTotalExpense = Number(req.user.totalExpense) + Number(Price);

    // Update the user's total expense within the transaction
    await SIGNIN.update(
        { totalExpense: newTotalExpense },
        { where: { id: req.user.id } },
        { transaction: t }
    );

    console.log(`Total expense after adding: ${newTotalExpense}`);

    // Commit the transaction to save changes
    await t.commit();

    res.status(201).json({ added: data1 });
} catch (err) {
    console.error(err);
    await t.rollback(); // Rollback the transaction in case of an error
    res.status(500).send('An error occurred while saving expenses.');
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
