import express from 'express'
import morgan from "morgan"
import authRouter from './routes/auth'
import connect from './utils/dbconnection'

const app = express()
const PORT = process.env.PORT || 3001


app.use(morgan('dev'))
app.use(express.json())
app.get('/', (req, res) => {
  res.json({ msg: 'ok' })
})

//?: Auth router
app.use('/auth', authRouter)

app.listen(PORT, async () => {
  console.log(`App is running on: App is running on: App is running on: http://localhost:${PORT}/`)
  await connect();
})