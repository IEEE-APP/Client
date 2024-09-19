import mongoose from "mongoose";
import config from 'config'

async function connect() {
  const dbUri = config.get<string>('dbUri')

  return await mongoose.connect(dbUri, {})
    .then(() => {
      console.info('Connected to DB')
    })
    .catch((err) => {
      console.error('Could not connect to db')
      process.exit(1)
    })
}

export default connect