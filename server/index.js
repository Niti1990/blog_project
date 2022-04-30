import dotenv from 'dotenv'
dotenv.config('./.env')
import express from 'express'
import mongoose from 'mongoose'
import articlesRouter from './routes/articles.js'
import singleRouter from './routes/singlearticle.js'

const app = express()

const { PORT, MNG_DB } = process.env
mongoose.connect(MNG_DB, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
//one time excecute , its connected or not
db.once('open', () => console.log('Connected to Mongoose.'))

app.use('/', articlesRouter)
app.use('/articles', singleRouter)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))