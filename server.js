import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// In-memory storage for leads
const leads = [];

// GET all leads
app.get("/api/v1/leads", (req, res) => {
  res.json(leads);
});

// POST a new lead
app.post("/api/v1/leads", (req, res) => {
  const { name, email, phone, notes } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  const newLead = { id: leads.length + 1, name, email, phone, notes };
  leads.push(newLead);
  res.status(201).json({ message: "Lead submitted successfully", lead: newLead });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
