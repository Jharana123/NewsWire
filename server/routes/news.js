const express = require("express"),
  router = express.Router();

// const { getNewsItemsById } = require("../../client/src/store/actions");
const News = require("../models/news"),
  newsContorller = require("../controllers/news.js");

router.get("/api/news",async(req,res)=>{
    try {
        const newsPosts=await News.find();
        // res.json(newsPosts);
        res.status(200).json(newsPosts);
    } catch (error) {
         res.status(400).json({
            info:error.message
         });
    }
});
router.get("/api/test",async (req,res)=>{
  try {
    for(let i=0;i<5;i++){
       const newObj= new News({
      title:'test post',
      body:'test post body',
      author:'test user'
    });
    await newObj.save();
    }
   res.send("ok");
  } catch (error) {
    res.send(error)
  }
});

router.post("/api/news", async(req, res) => {
   try {
    const newsObj = new News({
      title: req.body.title,
      body: req.body.body,
      author: req.body.author,
    });
    await newsObj.save();
    res.status(200).json("ok");
  } catch (error) {
    console.log(error);
    res.status(400).json({
      info: error.message,
    });
  }
});

router.get("/api/news/:id", async(req,res)=>{
try {
  const newPost=await News.findById(req.params.id);
  res.status(200).json(newPost);
} catch (error) {
  console.log(error)
  req.status(400).json({
    info:error.message
  });
}
});

router.patch("/api/news/:id", async(req,res)=>{
   try {
     await News.findByIdAndUpdate(req.params.id, {
       title: req.body.title,
       body: req.body.body,
       author: req.body.author,
     });
     res.status(200).json("ok");
   } catch (error) {
     console.log(error);
     res.status(400).json({
       info: error.message,
     });
   }
});

router.delete("/api/news/:id", async(req,res)=>{
  try {
    await News.findByIdAndDelete(req.params.id);
    res.status(200).json('ok');
    
  } catch (error) {
    console.log(error);
    res.status(400).json({
      info: error.message,
    });
  }
});

module.exports = router;
