// config inicial
const express = require('express')
const mongoose = require('mongoose')
const app = express()

//forma de ler json
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)
//rota
app.get('/',(req, res) => {
    //mostar req

    res.json({message: 'oi express'})
})

// mongodb+srv://${DB_USER}:${DB_PASSWD}@apijsjean.pvhda.mongodb.net/?retryWrites=true&w=majority

const DB_USER = 'USUARIO'
const DB_PASSWD = encodeURIComponent('SENHA')


//porta
mongoose
.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWD}@apijsjean.pvhda.mongodb.net/?retryWrites=true&w=majority`,
    )

.then(() => {
    console.log('conectado ao mongo db')
    app.listen(3000)
})

.catch((err)=> console.log(err))