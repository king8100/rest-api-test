const express = require('express');
const { Model, Brand } = require('../models');
const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
  try {
    const model = await Model.create(req.body);
    res.status(201).json(model);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ ALL
router.get('/', async (req, res) => {
  try {
    const models = await Model.findAll({ include: ['brand'] });
    res.json(models);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ ONE
router.get('/:id', async (req, res) => {
  try {
    const model = await Model.findByPk(req.params.id, { include: ['brand'] });
    if (!model) return res.status(404).json({ error: 'Model not found' });
    res.json(model);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Model.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Model not found' });
    const updatedModel = await Model.findByPk(req.params.id);
    res.json(updatedModel);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Model.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Model not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
