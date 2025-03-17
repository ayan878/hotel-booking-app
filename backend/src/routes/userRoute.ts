import { Router } from "express";
import register from "../controllers/register"; 

const router = Router();

/**
 * @swagger
 * /api/users/register:
 *   post:
 *     summary: Register a new user
 *     description: Creates a new user in the system with the provided details.
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         required: true
 *         description: User details
 *         schema:
 *           type: object
 *           required:
 *             - email
 *             - password
 *             - firstName
 *             - lastName
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *             firstName:
 *               type: string
 *             lastName:
 *               type: string
 *     responses:
 *       201:
 *         description: User successfully registered
 *       400:
 *         description: User already exists
 *       500:
 *         description: Server error
 */
router.post("/register", register);

export default router;
