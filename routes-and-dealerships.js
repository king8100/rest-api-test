const express = require('express');
const { Dealership } = require('../models');
const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
  try {
    const dealership = await Dealership.create(req.body);
    res.status(201).json(dealership);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ ALL
router.get('/', async (req, res) => {
  try {
    const dealerships = await Dealership.findAll();
    res.json(dealerships);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ ONE
router.get('/:id', async (req, res) => {
  try {
    const dealership = await Dealership.findByPk(req.params.id);
    if (!dealership) return res.status(404).json({ error: 'Dealership not found' });
    res.json(dealership);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Dealership.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Dealership not found' });
    const updatedDealership = await Dealership.findByPk(req.params.id);
    res.json(updatedDealership);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Dealership.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Dealership not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
