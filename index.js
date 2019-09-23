const express = require('express');
const app = express();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './upload/')
    },
    filename: function(req, file ,cb){
        cb(null, file.originalname)
    }
});

const upload = multer({storage: storage});


app.post('/', upload.single('image'),(req,res)=>{
    console.log(req.file)
});

let portNo = process.env.PORT || 3000;
app.listen(portNo,() => console.log("App is Running!"));