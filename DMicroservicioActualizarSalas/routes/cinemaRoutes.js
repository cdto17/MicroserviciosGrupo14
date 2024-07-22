const express = require('express');
const router = express.Router();
const cinemaController = require('../controllers/cinemaController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Cinema:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - capacity
 *         - location
 *       properties:
 *         id:
 *           type: integer
 *           description: ID del cine
 *         name:
 *           type: string
 *           description: Nombre del cine
 *         capacity:
 *           type: integer
 *           description: Capacidad del cine
 *         location:
 *           type: string
 *           description: Ubicación del cine
 *       example:
 *         id: 1
 *         name: Cinemax
 *         capacity: 200
 *         location: Ciudad de México
 */

/**
 * @swagger
 * tags:
 *   name: Cinemas
 *   description: API para la gestión de cines
 */

/**
 * @swagger
 * /cinemas/{id}:
 *   put:
 *     summary: Actualizar el cine por ID
 *     tags: [Cinemas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del cine a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cinema'
 *     responses:
 *       200:
 *         description: El cine fue actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cinema'
 *       404:
 *         description: El cine no fue encontrado
 *       500:
 *         description: Error del servidor
 */
router.put('/cinemas/:id', cinemaController.updateCinema);

module.exports = router;
