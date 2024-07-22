const express = require('express');
const cinemasController = require('../controllers/cinemasController');

const router = express.Router();

/**
 * @swagger
 * /api/cinemas:
 *   get:
 *     summary: Devuelve una lista de cines
 *     responses:
 *       200:
 *         description: Lista de cines
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID del cine
 *                   name:
 *                     type: string
 *                     description: Nombre del cine
 *                   capacity:
 *                     type: integer
 *                     description: Capacidad del cine
 *                   location:
 *                     type: string
 *                     description: Ubicación del cine
 *       500:
 *         description: Error al leer los datos de los cines
 */
router.get('/cinemas', cinemasController.listCinemas);
router.get('/cinemas/:id', cinemasController.getCinemaById);

module.exports = router;
