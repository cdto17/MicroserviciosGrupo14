const express = require('express');
const { listTheater } = require('../controllers/theaterController');

const router = express.Router();

/**
 * @swagger
 * /api/rooms:
 *   get:
 *     summary: Devuelve una lista de salas de teatro
 *     responses:
 *       200:
 *         description: Lista de salas de teatro
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID de la sala de teatro
 *                   name:
 *                     type: string
 *                     description: Tipo de la sala de teatro
 *                   description:
 *                     type: string
 *                     description: Descripción de la sala de teatro
 *       500:
 *         description: Error al leer los datos de las salas de teatro
 */
router.get('/rooms', listTheater);

module.exports = router;
