const express = require("express")
const cors = require("cors")

const app = express()

// ✅ Middleware
app.use(cors()) // Allow requests from all origins (frontend)
app.use(express.json()) // Parse JSON request bodies

// ✅ Root route
app.get("/", (req, res) => {
  res.send("✅ InsureInvest Backend is running successfully!")
})

// ✅ Leads API route
// Replace this with your database connection or in-memory array
let leads = [
  { name: "Eddy", email: "ewanyama@gmail.com", phone: "0774905936" },
]

app.get("/api/v1/leads", (req, res) => {
  res.json(leads)
})

app.post("/api/v1/leads", (req, res) => {
  const { name, email, phone } = req.body
  if (!name || !email || !phone) {
    return res.status(400).json({ message: "All fields are required" })
  }
  const newLead = { name, email, phone }
  leads.push(newLead)
  res.status(201).json(newLead)
})

// ✅ Start server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
