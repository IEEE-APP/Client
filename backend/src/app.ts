import express from 'express'
import morgan from "morgan"
import authRouter from './routes/auth'

const app = express()
const PORT = process.env.PORT || 3001


app.use(morgan('dev'))
app.use(express.json())
app.get('/', (req, res) => {
  res.json({ msg: 'ok' })
})

//?: Auth router
app.use('/auth', authRouter)

app.listen(PORT, () => {
  console.log(`App is running on: App is running on: App is running on: http://localhost:${PORT}/`)
})