const express = require('express')
require('./database/config')
const multer = require('multer')
const control = require('./controllers/controllers')
const app = express()
const alienRouter = require('./routes/aliens')
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))
let ejs = require('ejs');
app.set('view engine', 'ejs');

app.use(express.json())
app.use('/aliens', alienRouter)
app.listen(9000, () => {
    console.log('Server started')
})
const storage = multer.diskStorage({
    destination: "Uploads",
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })
app.post('/upload', upload.single('myFile'), control.uploadimage);
app.delete('/delete/:imagename', control.deleteimage);

