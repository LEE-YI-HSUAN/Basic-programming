var express=require('express');
var router=express.Router();


const fs = require('fs');

router.post('/',function(req,res,next){
   var testFolder;
   // console.log(req.body.Group);
   if(req.body.Group == "Design"){
      console.log("Design");
      testFolder = './public/Design/';
   }
   else if(req.body.Group == "Technology"){
      console.log("Technology");
      testFolder = './public/Technology/';
   }
   res.json({"all":fs.readdirSync(testFolder)});
   
});

module.exports = router;