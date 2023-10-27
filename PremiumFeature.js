const Expense=require('../models/expense');
const Order = require('../models/orders')
const SIGNIN=require('../models/signin');
const sequelize = require('../util/database');
const usercontrol=require('./expensesignin');

const getUserLeaderBoard = async (req, res) => {
    try{
        const leaderboardofusers = await SIGNIN.findAll()

        res.status(200).json({premiumdata:leaderboardofusers})

} catch (err){
    console.log(err)
    res.status(500).json(err)
}
}

module.exports = {
    getUserLeaderBoard
}