const express = require('express')
const router = express.Router()
const control = require('../controllers/controllers')


router.get('/getdetails', control.getdetails)
router.get('/adduser', control.adduser)
router.get('/viewuser', control.viewuser)
router.get('/:id', control.databyid)
router.post('/add', control.addsignup)
router.get('/update/:id', control.updateSignIn)
router.get('/delete/:id', control.deletesignup)
router.get('updateuser/:id', control.getUserData)
router.get('/singledata/:id', control.singledata)
router.post('/update/:id', control.update)
module.exports = router