const router = require('express').Router();
const Room= require('../models/Rooms');
const mongoose = require("mongoose");


router.get('/Rooms', async(req, res)=> {
    const room = await Room.find();
    res.json(room);
  })

router.post('/', async(req, res)=> {
    try {
      const {name, description} = req.body;
      const room = await Room.create({name, description});
    res.json(room);
    } catch (e) {
        res.status(400).json(e.message)
    }
  })