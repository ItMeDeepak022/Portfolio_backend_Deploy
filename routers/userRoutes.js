let express=require('express');
const { getInfo } = require('../controller/userController');

let userRoutes=express();

userRoutes.post('/Info',getInfo)

module.exports={userRoutes}