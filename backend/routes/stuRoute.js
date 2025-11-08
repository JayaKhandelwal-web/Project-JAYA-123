const express =require('express')
const route = express.Router(); //create router
const StudentController = require('../controllers/stdController')
 
route.post('/save',StudentController.stuSave);

module.exports=route;
