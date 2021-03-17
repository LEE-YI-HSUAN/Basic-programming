var express=require('express');
var router=express.Router();

const testFolder = './public/Technology/';
    const fs = require('fs');

    

//var show=require('../public/js/show');

router.post('/',function(req,res,next){
   if(req.Group == Design)
      testFolder = './public/Design/';
   else if(req.Group == Technology)
   testFolder = './public/Technology/';
   
   res.json({"all":fs.readdirSync(testFolder)});
   
});

module.exports = router;