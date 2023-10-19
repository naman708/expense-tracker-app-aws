
// app.js
const path = require('path'); 
const express = require('express');
const cors = require('cors');

// Use CORS middleware


const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const signinroute = require('./routes/signinroute');
const rootDir=require('./util/path');

const app = express();
app.use(cors());

app.use(bodyParser.json({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(signinroute);

sequelize.sync().then(() => {
  console.log('Database & tables created!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


 


