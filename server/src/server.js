const cors = require('cors')
const express = require('express')
const routes = require('./routes')
const path = require('path')

require('./database')

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)


app.listen(3000, () => console.log('servidor rodando na porta 3000'))
