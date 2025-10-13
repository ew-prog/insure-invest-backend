const express = require('express')
const router = express.Router()
const { getLeads, addLead } = require('../controllers/leadsController')

// GET all leads
router.get('/', getLeads)

// POST a new lead
router.post('/', addLead)

module.exports = router
