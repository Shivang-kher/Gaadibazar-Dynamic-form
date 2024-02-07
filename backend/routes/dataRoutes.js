const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// Define routes for CRUD operations
router.get('/', dataController.getAllData);
// Implement other routes (POST, PUT, DELETE) similarly...

module.exports = router;
