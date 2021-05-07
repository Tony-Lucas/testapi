const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const multer = require("multer");
require("dotenv").config();
require("./config/relations");
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,"./uploads/")
    },
    filename: (req,file,cb) => {
        cb(null,Date.now() + file.originalname)
    }
})
const upload = multer({storage: storage})

app.use(express.static("uploads"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.post("/",upload.single("img"),(req,res) => {
    res.json({corpo:req.body})
})

app.listen(process.env.PORT || 3000);