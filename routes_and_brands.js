const express = require('express');
const { Brand } = require('../models');
const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
  try {
    const brand = await Brand.create(req.body);
    res.status(201).json(brand);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ ALL
router.get('/', async (req, res) => {
  try {
    const brands = await Brand.findAll();
    res.json(brands);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ ONE
router.get('/:id', async (req, res) => {
  try {
    const brand = await Brand.findByPk(req.params.id);
    if (!brand) return res.status(404).json({ error: 'Brand not found' });
    res.json(brand);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Brand.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Brand not found' });
    const updatedBrand = await Brand.findByPk(req.params.id);
    res.json(updatedBrand);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Brand.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Brand not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
