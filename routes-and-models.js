const express = require('express');
const { Feature } = require('../models');
const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
  try {
    const feature = await Feature.create(req.body);
    res.status(201).json(feature);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ ALL
router.get('/', async (req, res) => {
  try {
    const features = await Feature.findAll();
    res.json(features);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ ONE
router.get('/:id', async (req, res) => {
  try {
    const feature = await Feature.findByPk(req.params.id);
    if (!feature) return res.status(404).json({ error: 'Feature not found' });
    res.json(feature);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Feature.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Feature not found' });
    const updatedFeature = await Feature.findByPk(req.params.id);
    res.json(updatedFeature);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Feature.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Feature not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
