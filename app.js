const express = require('express')
const app = express()
const mongoose = require("mongoose")
const port = process.env.PORT || 3000
const dotenv = require('dotenv')
const { MONGOURI } = require('./config/keys')
dotenv.config()

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));


require('./models/user')
require('./models/post')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))


if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'))
    const path = require('path')
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`BLOG app listening on port ${port}!`))