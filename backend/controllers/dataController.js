const Data = require('../models/Data');

exports.createFormData = async (req, res) => {
  try {
    const { formData } = req.body;
    const newData = new Data({ formData });
    await newData.save();
    res.status(201).json({ message: 'Form data created successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};