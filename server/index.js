const express=require ('express');
mongoose = require("mongoose");
const app=express();

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.7hn0evk.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB Connected!"))
  .catch((error) => console.log(error));

  app.use(express.json());
  const newsRoutes = require("./routes/news");
  app.use(newsRoutes);
// const mongoose
app.get('/',(req,res)=>{
    res.send("This is lending page")
})
app.listen('3001',()=>{
    console.log("Server running at 3001");
})