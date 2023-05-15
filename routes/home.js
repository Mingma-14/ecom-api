const express = require('express')

//initializing router  object
const router = express.Router()

router.get("/" ,(req,res) =>{
    res.send("welcome to api")
})

module.exports = router