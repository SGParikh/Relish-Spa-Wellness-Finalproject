var express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
var multer=require('multer');
var path = require('path');
var Gallery = require('../models/gallery')
var router = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

//set storage engine
var storage = multer.diskStorage({
  destination: './public/images/gallery/',
  filename: function (req, file, cb) {
    cb(null, file.originalname.split('.')[0] + '-' + Date.now()+ path.extname(file.originalname));
  }
})
//init upload
var upload = multer({ 
  storage: storage,
  limits:{fileSize:1000000},
  fileFilter:function(req, file, cb){
    checkfiletype(file,cb);
  }
}).single('customFile');

//check file type
function checkfiletype(file,cb){
  const filetypes=/jpeg|jpg|png|gif/;
  const extname=filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype=filetypes.test(file.mimetype);
  if(mimetype && extname)
  {
    return cb(null,true);
  }
  else
  {
    cb('Images only!');
  }
}



/* GET home page. */
router.get('/',function(req, res) {
    Gallery.find({},(err,galleries)=>{
      res.render('galleryMT', { title: 'Gallery Management',heading:"Gallery Management", Galleries: galleries,user:req.user});
    })
  })
  
router.post('/upload',(req,res)=>{
  upload(req,res,(err)=>{
    console.log(req.body)
    console.log(req.file);
    let errors=[];
    if(err)
    {
      errors.push({msg:err});
      res.render('galleryMT',{
        errors
      });
    }
    else
    {
        var gallery = new Gallery({
            _id: new mongoose.Types.ObjectId().toHexString(),
            imagePath: req.file.filename,
            title:req.body.title
            });
            gallery.save(function(err,gallery){
            if(err){
                throw err;
            }
            else
            {
              req.flash('success_msg','Successfully file uploded')
                res.redirect('/galleryMT');
            }
        });
    }
  });
});


// router.post('/delete/:id',urlencodedParser,(req,res)=>{
//   var id=req.params.id;

//   try {
//       const gallery = Gallery.findByIdAndDelete(id)
  
//       if (!gallery) res.status(404).send("No item found")

//       req.flash('success_msg','Successfully file deleted')
//       res.redirect('/galleryMT');

//     } catch (err) {
//       res.status(500).send(err)
//     }
// })
module.exports = router;