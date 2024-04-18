const express = require('express')
const app = express()
const multer = require('multer')
const {v4: uuidv4} = require('uuid')
const path = require("path")
const itemModel = require("../models/item")


// Konfigurimet e nevojshme per upload e imazheve ne mongoDB
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'images');
    },
    filename: function (req, file, cb) {
    cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname))
    }
    })
    const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true)
    } else {
    cb(null, false)
    }}
    let upload = multer({ storage, fileFilter })


//Sintaksa
/*
app.method("path", (req,res) => {
    try{

    }
    catch(err){

    }
})
*/

//Create
app.post('/create',upload.single('photo'),async(req,res) => {
    try {
const newItem = new itemModel({
    ...req.body,
    //Imazhi
    photo:req.file.filename
})
await newItem.save();   
res.status(200).send("Created")
// Mesazhi i suksesit
res.status(200).send(newItem);
    }
    catch(err) {
        console.log("Create " + err)
        res.status(500).send("Item not Created " + err)
    }
})

//Read All
app.get('/readAll',async(req,res) => {
    try {
    const items = await itemModel.find({});
    console.log(items)
    res.status(200).send(items)
    }
    catch(err) {
        console.log("ReadAll" + err)
        res.status(500).send("Items not Read " + err)
    }
})

//Read One
app.get('/readOne/:id',async(req,res) => {
    try {
        const itemId = req.params.id
        const items = await itemModel.findById({_id:itemId});
        console.log(item)
        res.status(200).send(item)
    }
    catch(err) {
        console.log("Read One " + err)
        res.status(500).send("Item not Read " + err)
    }
})
//Delete
app.delete('/delete/:id', async (req,res) => {
    try {
        // const itemId = req.params.id   
        await itemModel.deleteOne({_id:req.params.id});
        res.status(200).send("Deleted")

    }
    catch(err) {
        console.log("Delete " + err)
        res.status(500).send("Item not Deleted " + err)
    }
})
//Update
app.patch('/update/:id', upload.single('photo'), async(req,res) => {
    try {
        const itemId = req.params.id
        const itemInfo = {...req.body};   
        if (req.file) {
            itemInfo.photo = req.file.filename;
        }
        const itemUpdated = await itemModel.findByIdAndUpdate(
            {_id: itemID},
            {$set: itemInfo},
            {new: true}
        );
        console.log("Data update" + itemUpdated);
        res.status(200).send(itemUpdated);            

    }
    catch(err) {
        console.log("Update " + err)
        res.status(500).send("Item not Update " + err)
    }
})

module.exports = app