const express = require('express');
const { getAllData, createData, showData, editData, createDataStore, updateData, deleteData, allUnverifiedData, verifiedAccount } = require('../controllers/studentController');
const multer = require('multer');
const path = require('path');

// multer setup
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images/student/'));
    },
    filename : (req, file , cb) => {
        cb(null, file.originalname);
    }
});
const studentDataStore = multer({
    storage : storage
}).single('studentPhoto');

// router init
const router = express.Router();


// all routes
router.get('/', getAllData);
router.get('/unverified', allUnverifiedData);
router.get('/create', createData);
router.post('/create', studentDataStore, createDataStore);
router.get('/show/:id', showData);
router.get('/edit/:id', editData);
router.post('/update/:id', studentDataStore, updateData);
router.get('/delete/:id', deleteData)
router.get('/verify/:token', verifiedAccount);



// module exports
module.exports = router;