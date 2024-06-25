const Item = require('../models/Item');

const marketPlaceController = {
  getAllItems: async (req, res) => {
    try {
      const items = await Item.find();
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getItemById: async (req, res) => {
    try {
      const item = await Item.findById(req.params.id);
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createItem: async (req, res) => {
    const { name, price, description } = req.body;
    try {
      const newItem = new Item({ name, price, description });
      await newItem.save();
      res.status(201).json(newItem);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateItem: async (req, res) => {
    const { name, price, description } = req.body;
    try {
      const item = await Item.findById(req.params.id);
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
      item.name = name;
      item.price = price;
      item.description = description;
      await item.save();
      res.status(200).json(item);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteItem: async (req, res) => {
    try {
      const item = await Item.findById(req.params.id);
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
      await item.remove();
      res.status(204).json();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = marketPlaceController;