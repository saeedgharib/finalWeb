const router = require('express').Router();
const User = require('../models/User');
const mongoose = require("mongoose");
// creating user
router.post('/', async(req, res)=> {
  try {
    const {name, section,email, password, picture} = req.body;
    console.log(req.body);
    const user = await User.create({name, section,email, password, picture});
    res.status(201).json(user);
  } catch (e) {
    let msg;
    if(e.code == 11000){
      msg = "User already exists"
    } else {
      msg = e.message;
    }
    console.log(e);
    res.status(400).json(msg)
  }
})

// login user

router.post('/login', async(req, res)=> {
  try {
    const {email, password} = req.body;
    const user = await User.findByCredentials(email, password);
    user.status = 'online';
    await user.save();
    res.status(200).json(user);
  } catch (e) {
      res.status(400).json(e.message)
  }
})

// Read

router.get('/UsersList', async(req, res)=> {
  try {
    const user = await User.find({"name":"user5"})
    
    res.status(200).json(user);
  } catch (e) {
      res.status(400).json(e.message)
  }
})

// READ Students

// router.get("/UsersList", async(req, res) => {
//   try{

//     const users=await User.find();

//     res.json(users);
        
//     }catch(error){

//    console.log(error);
//     }
  
//   });

router.get("/UsersList", async(req, res) => {
  try{

    const users=await User.find();

    res.json(users);
        
    }catch(error){

   console.log(error);
    }
  
  });

  // export const getUsers = async(req, res) => {
  //   try {
  //       const users = await User.findAll({
  //           attributes:['_id','name','email']
  //       });
  //       res.json(users);
  //   } catch (error) {
  //       console.log(error);
  //   }}

  router.post('/Create', async(req, res)=> {
    try {
      const {name, email, password} = req.body;
      console.log(req.body);
      const user = await User.create({name, email, password});
      res.status(201).json(user);
    } catch (e) {
      let msg;
      if(e.code == 11000){
        msg = "User already exists"
      } else {
        msg = e.message;
      }
      console.log(e);
      res.status(400).json(msg)
    }  
  })




  router.delete("/UsersList", async(req, res) => {
    try{
  
      return await User.findByIdAndDelete(req.body._id);

       
      }catch(error){
  
     console.log(error);
      }
    
    });
module.exports = router
