import express from 'express'
import morgan from "morgan"
import authRouter from './routes/auth'
import connect from './utils/dbconnection'
import cors from 'cors';
const app = express()
const PORT = process.env.PORT || 3001
const IP = process.env.IP ;
const PORT_FRONTEND= process.env.PORT_FRONTEND || 8081;
//configuracion Cors
const corsOptions = {
   origin: [`http://localhost:${PORT_FRONTEND}`, `http://${IP}:${PORT_FRONTEND}`], // url frontend
   optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));  
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