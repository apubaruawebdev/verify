const { readFileSync, writeFileSync } = require('fs');
const path = require('path');
const { verifyAccountMail } = require('../utility/sendMail');
const { verifySMS } = require('../utility/sendSMS');

// get all student data
const getAllData = (req, res) => {
    const students = JSON.parse(readFileSync(path.join(__dirname, '../db/student.json')));

    const verifiedStudent = students.filter(data => data.isVerified == true);

    res.render('students/index',{
        students : verifiedStudent
    });
}

// get all unverified student data
const allUnverifiedData = (req, res) => {
    const students = JSON.parse(readFileSync(path.join(__dirname, '../db/student.json')));

    const unverifiedStudent = students.filter(data => data.isVerified == false);

    res.render('students/unverified', { 
        students : unverifiedStudent
     });
}

// create student data
const createData = (req, res) => {
    res.render('students/create');
}

// Store create student data 
const createDataStore = async (req, res) => {
    const students = JSON.parse(readFileSync(path.join(__dirname, '../db/student.json')));

    const { name, email, cell, location, photo } = req.body;

    let last_id = 1;
    if(students.length > 0){
        last_id = students[students.length - 1].id + 1;
    }

    const token = Date.now() +'_'+ Math.floor(Math.random() * 1000000);

    
    

    students.push({
        id : last_id,
        name : name,
        email : email,
        cell : cell,
        location : location,
        photo : req.file ? req.file.filename : 'avatar.png',
        isVerified : false,
        token : token
    })

    // send mail
    await verifyAccountMail(email, 'Verify Account', { name, email, token, cell });

    

    

    writeFileSync(path.join(__dirname, '../db/student.json'), JSON.stringify(students));

    res.redirect('/student');
}

// show single student data
const showData = (req, res) => {
    const { id } = req.params;
    const students = JSON.parse(readFileSync(path.join(__dirname, '../db/student.json')));

    const showSingleData = students.find(data => data.id == id);
    
    res.render('students/show', { showSingleData });
}

// edit student data
const editData = (req, res) => {
    const { id } = req.params;
    const students = JSON.parse(readFileSync(path.join(__dirname, '../db/student.json')));
    
    const storeEditData = students.find(data => data.id == id);

    res.render('students/edit', { storeEditData });
}

// update edited student data
const updateData = (req, res) => {
    const { id } = req.params;
    const students = JSON.parse(readFileSync(path.join(__dirname, '../db/student.json')));


    students[students.findIndex(data => data.id == id)] = {
        ...students[students.findIndex(data => data.id == id)],
        name : req.body.name,
        email : req.body.email,
        cell : req.body.cell,
        location : req.body.location,
        photo : req.file.filename
    }

    writeFileSync(path.join(__dirname, '../db/student.json'), JSON.stringify(students));

    res.redirect('/student');
}

// Delete Student Data
const deleteData = (req, res) => {
    const { id } = req.params;
    const students = JSON.parse(readFileSync(path.join(__dirname, '../db/student.json')));

    const deleteData = students.filter(data => data.id != id);

    writeFileSync(path.join(__dirname, '../db/student.json'), JSON.stringify(deleteData));

    res.redirect('/student');
}

// verify account
const verifiedAccount = (req, res) => {
    const token = req.params.token;

    const students = JSON.parse(readFileSync(path.join(__dirname, '../db/student.json')));


    students[students.findIndex(data => data.token == token)] = {
        ...students[students.findIndex(data => data.token == token)],
        isVerified : true,
        token : ''
    }

    writeFileSync(path.join(__dirname, '../db/student.json'), JSON.stringify(students));

    res.redirect('/student');
}


// module exports
module.exports = {
    getAllData,
    createData,
    showData,
    editData,
    createDataStore,
    updateData,
    deleteData,
    allUnverifiedData,
    verifiedAccount
}