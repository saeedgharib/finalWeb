const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery' ,true);
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@anonchat.aeegie7.mongodb.net/?retryWrites=true&w=majority`,{useNewUrlParser:true,useUnifiedTopology: true})
.then(()=> console.log("Connect to MONGO_DB."));
