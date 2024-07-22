const express = require('express');
const snacksController = require('../controllers/snacksController');

const router = express.Router();

/**
 * @swagger
 * /api/snacks:
 *   get:
 *     summary: Devuelve una lista de snacks
 *     tags: [Snacks]
 *     responses:
 *       200:
 *         description: Lista de snacks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID del snack
 *                   name:
 *                     type: string
 *                     description: Nombre del snack
 *                   description:
 *                     type: string
 *                     description: Descripción del snack
 *                   price:
 *                     type: number
 *                     format: float
 *                     description: Precio del snack
 *                   mark:
 *                     type: string
 *                     description: Marca del snack
 *                   advert:
 *                     type: string
 *                     description: Advertencia del snack
 *                   advert2:
 *                     type: string
 *                     description: Segunda advertencia del snack
 *       500:
 *         description: Error al leer los datos de los snacks
 */
router.get('/snacks', snacksController.listSnacks);
router.get('/snacks/:id', snacksController.getSnackById);


module.exports = router;
