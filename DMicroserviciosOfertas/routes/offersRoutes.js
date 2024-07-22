const express = require('express');
const { listOffers } = require('../controllers/offersController');

const router = express.Router();

/**
 * @swagger
 * /api/offers:
 *   get:
 *     summary: Devuelve una lista de ofertas
 *     responses:
 *       200:
 *         description: Lista de ofertas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID de la oferta
 *                   title:
 *                     type: string
 *                     description: Título de la oferta
 *                   description:
 *                     type: string
 *                     description: Descripción de la oferta
 *       500:
 *         description: Error al leer los datos de las ofertas
 */
router.get('/offers', listOffers);

module.exports = router;
