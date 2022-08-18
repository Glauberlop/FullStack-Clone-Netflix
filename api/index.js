const express = require("express");
const app =  express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

 mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(()=> console.log("Database MONGODB conected"))    
    .catch((err) => console.log(err));  

app.listen(8888, () => {
  console.log("Backend server is running!");
});