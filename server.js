const express = require('express')
const cors = require('cors')
require('dotenv').config()

const leadsRouter = require('./routes/leads')

const app = express()
app.use(cors()) // allow requests from frontend
app.use(express.json())

// Mount leads routes
app.use('/api/v1/leads', leadsRouter)

const port = process.env.PORT || 5000
app.get("/api/v1/leads", (req, res) => {
  res.json({ message: "Lead endpoint working properly!" });
});

app.listen(port, () => console.log(`Backend running on port ${port}`))
```js
app.get("/api/v1/leads", (req, res) => {
  res.json({ message: "Lead endpoint working properly!" });
});
Add test endpoint for leads
