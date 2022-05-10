const express = require('express');
const ClienteController = require ('../controllers/clienteControllers.js');
const router = express.Router();
 
router.post('/cliente', ClienteController.Insert);
 
module.exports = router;
