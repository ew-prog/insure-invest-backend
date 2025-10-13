// In-memory storage for demo
let leads = []

const getLeads = (req, res) => {
  res.json(leads)
}

const addLead = (req, res) => {
  const { name, email, phone } = req.body
  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'All fields are required' })
  }
  leads.push({ name, email, phone })
  res.status(201).json({ message: 'Lead added successfully' })
}

module.exports = { getLeads, addLead }
