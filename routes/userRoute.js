const express = require('express');
const { userData, storeData } = require('../controllers/userController');
const path = require('path');
const multer = require('multer');

// multer setup
const userStorage = multer.diskStorage({
    destination : (req, file, cb) => {

        if(req.files.studentPhoto){

            if(file.mimetype == "image/jpg" || file.mimetype == "image/png"){ 
                cb(null, path.join(__dirname, '../public/images/user/'));
            }else{
                console.log('Eta');
            }
        }

        if(req.files.cv){
            if(file.mimetype == 'application/pdf'){ 
                cb(null, path.join(__dirname, '../public/images/cv/'));
            }else{
                console.log('Invlid File Format');
            }
        }
       


    },
    filename : (req, file, cb) => {
        cb(null, Date.now()+"_"+ Math.floor(Math.random() * 1000000) +"_" +file.originalname);
    }
});
const userMiddleCheck = multer({
    storage : userStorage
}).fields([
    {
        name : "studentPhoto",
        maxCount : 2
    },
    {
        name : "cv",
        maxCount : 1
    }
]);

// router setup
const router = express.Router();

// routes
router.get('/', userData);
router.post('/', userMiddleCheck, storeData);


// module exports
module.exports = router;