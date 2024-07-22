// src/routes/paymentsRoutes.js
const express = require('express');
const { listPayment } = require('../controllers/paymentControllers');

const router = express.Router();

/**
 * @swagger
 * /api/payments:
 *   get:
 *     summary: Devuelve una lista de métodos de pago
 *     responses:
 *       200:
 *         description: Lista de métodos de pago
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     description: Nombre del método de pago
 *                   description:
 *                     type: string
 *                     description: Descripción del método de pago
 *       500:
 *         description: Error al leer los datos de los métodos de pago
 */
router.get('/payments', listPayment);

module.exports = router;
