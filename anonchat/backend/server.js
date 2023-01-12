const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes')
const roomRoutes = require('./routes/roomRoutes')
const User = require('./models/User');
const Message = require('./models/Message')
const Rooms =require('./models/Rooms')
// const rooms = ['general', 'tech', 'finance', 'crypto'];
const cors = require('cors');
const bodyParser = require('body-parser');
const { request } = require('http');
const { response } = require('express');
const { ObjectId } = require('mongodb');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());


// app.get('/UsersList',(req,res)=>{
//   res.send("CRUD APP")
// })
const server = require('http').createServer(app);
const PORT = 3200;
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
})
app.use('/users', userRoutes)
app.use('/Create', userRoutes)
// app.use('/Rooms', roomRoutes)
// app.use('/addRoom', roomRoutes)
// app.use('/UsersList', userRoutes)
// app.use('/UsersList', userRoutes)
require('./connection')

async function getLastMessagesFromRoom(room){
  let roomMessages = await Message.aggregate([
    {$match: {to: room}},
    {$group: {_id: '$date', messagesByDate: {$push: '$$ROOT'}}}
  ])
  return roomMessages;
}

function sortRoomMessagesByDate(messages){
  return messages.sort(function(a, b){
    let date1 = a._id.split('/');
    let date2 = b._id.split('/');

    date1 = date1[2] + date1[0] + date1[1]
    date2 =  date2[2] + date2[0] + date2[1];

    return date1 < date2 ? -1 : 1
  })
}

// socket connection

io.on('connection', (socket)=> {

  socket.on('new-user', async ()=> {
    const members = await User.find();
    io.emit('new-user', members)
  })

  socket.on('join-room', async(newRoom, previousRoom)=> {
    socket.join(newRoom);
    socket.leave(previousRoom);
    let roomMessages = await getLastMessagesFromRoom(newRoom);
    roomMessages = sortRoomMessagesByDate(roomMessages);
    socket.emit('room-messages', roomMessages)
  })

  socket.on('message-room', async(room, content, sender, time, date) => {
    const newMessage = await Message.create({content, from: sender, time, date, to: room});
    let roomMessages = await getLastMessagesFromRoom(room);
    roomMessages = sortRoomMessagesByDate(roomMessages);
    // sending message to room
    io.to(room).emit('room-messages', roomMessages);
    socket.broadcast.emit('notifications', room)
  })

  app.delete('/logout', async(req, res)=> {
    try {
      const {_id, newMessages} = req.body;
      const user = await User.findById(_id);
      
      user.status = "offline";
      user.newMessages = newMessages;
      await user.save();
      const members = await User.find();
      socket.broadcast.emit('new-user', members);
      res.status(200).send();
    } catch (e) {
      console.log(e);
      res.status(400).send()
    }
  })

  

})
app.get("/UsersList", async(req, res) => {
  try{

    const users=await User.find();

    res.json(users);
        
    }catch(error){

   console.log(error);
    }
  
  });

  app.get("/edit/:id", async(req, res) => {
    try{
  
      // const user=await User.find({_id:req.params.id});
      const user= await User.findById(req.params.id);
      console.log(user);
      res.status(200).json(user);
          
      }catch(error){
  
     console.log("server.js");

      }
    
    });

  app.delete("/UsersList", async(req, res) => {
    try{
  
      await User.deleteOne({_id:req.body.id})
       
      }catch(error){
  
     console.log(error);
      }
    
    });


    app.put("/edit/:id", async(req, res) => {
      let user =req.body;
      const editUser =new User(user);
      try{
    
        // const user=await User.find({_id:req.params.id});
        await User.updateOne({_id:req.params.id},editUser);
        res.status(200).json()
        console.log(user);
        res.status(200).json(user);
            
        }catch(error){
    
       console.log("server.js");
  
        }
      
      });
    
app.get('/Rooms', async(req, res)=> {
  const room = await Rooms.find();
  res.json(room);
})

app.get('/chat', async(req, res)=> {
  const room = await Rooms.find();
  res.json(room);
})

app.post('/addRoom', async(req, res)=> {
  try {
    const {name, description} = req.body;
    // await Rooms.create({name, description});
    await Rooms.create({name, description});
    res.status(200).json()
  } catch (e) {
      res.status(400).json(e.message)
  }
})

app.delete("/Rooms", async(req, res) => {
  // try{
  
  //   await Rooms.findByIdAndDelete(ObjectID(req.body.id));
     
  //   }catch(error){

  //  console.log(error);
  //   }

  await Rooms.deleteOne({_id: ObjectId('req.body.id') }).setOptions({ single: true });
  res.json();




  // await Rooms.findByIdAndRemove(req.body.ObjectId, function(err) {
  //   if (err) throw err;
  //   console.log("deleted");
  // })
  });


server.listen(PORT, ()=> {
  console.log('listening to port', PORT)
})
