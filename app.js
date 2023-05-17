//npm start garyo vane run hunxa if package.json vitra script ma "start" : "nodemon" lekhyo vane//
const port = 4000
const express = require('express')
const app = express()
// const productData = require("./data.json")
const productRouter = require('../routes/product')
const homeRouter = require('../routes/home')

app.use(homeRouter)
app.use("/api/products", productRouter)

app.listen(port, () =>{
    console.log(`server starts at port ${port}`)
})
//csr (client side rendering)
