const express = require('express');
const router = express.Router();
const cinemaController = require('../controllers/cinemaController');

/**
 * @swagger
 * tags:
 *   name: Cinemas
 *   description: API para la gestión de cines
 */

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
 * /cinemas/{id}:
 *   delete:
 *     summary: Eliminar el cine por ID
 *     tags: [Cinemas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del cine a eliminar
 *     responses:
 *       204:
 *         description: El cine fue eliminado
 *       404:
 *         description: El cine no fue encontrado
 *       500:
 *         description: Error del servidor
 */
router.delete('/cinemas/:id', cinemaController.deleteCinema);

module.exports = router;
