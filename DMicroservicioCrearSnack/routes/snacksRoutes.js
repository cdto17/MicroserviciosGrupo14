const express = require('express');
const router = express.Router();
const snacksController = require('../controllers/snacksController');

/**
 * @swagger
 * tags:
 *   name: Snacks
 *   description: API para la gestión de snacks
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Snack:
 *       type: object
 *       required:
 *         - name
 *         - price
 *       properties:
 *         id:
 *           type: integer
 *           description: ID del snack
 *         name:
 *           type: string
 *           description: Nombre del snack
 *         description:
 *           type: string
 *           description: Descripción del snack
 *         price:
 *           type: number
 *           format: float
 *           description: Precio del snack
 *         mark:
 *           type: string
 *           description: Marca del snack
 *         advert:
 *           type: string
 *           description: Advertencia del snack
 *         advert2:
 *           type: string
 *           description: Segunda advertencia del snack
 *       example:
 *         id: 1
 *         name: Palomitas de Maíz
 *         description: Palomitas clásicas con mantequilla
 *         price: 5.00
 *         mark: Marca A
 *         advert: Contiene gluten
 *         advert2: Puede contener trazas de nueces
 */

/**
 * @swagger
 * /snacks:
 *   post:
 *     summary: Crear un nuevo snack
 *     tags: [Snacks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Snack'
 *     responses:
 *       201:
 *         description: El snack fue creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Snack'
 *       500:
 *         description: Error del servidor
 */
router.post('/snacks', snacksController.createSnacks);

module.exports = router;
