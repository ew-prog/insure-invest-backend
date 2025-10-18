import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.js'
import leadsRoutes from './routes/leads.js'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/leads', leadsRoutes)

app.listen(process.env.PORT || 5000, () => console.log('Server running'))
