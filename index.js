// Env SetUp
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

// Imports
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const MenuRouters = require('./Menu')

// Initialization
const app = express()
const port = 5000

// middlewares
app.use(express.json())
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,//access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));

// DataBase
mongoose.connect(
    process.env.DB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log("Connectionn successful");
}).catch((err) => { console.log(err) });

app.use("/api/canteen", MenuRouters )

// Listening
app.listen(process.env.PORT || port, () => console.log(`App listening on port http://localhost:${port}`))

module.exports = app