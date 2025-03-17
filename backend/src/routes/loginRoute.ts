import { Router } from "express";
import loginController from "../controllers/loginController";

const router = Router();

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login User
 *     description: Creates a new user in the system with the provided details.
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         required: true
 *         description: User login Creadentials
 *         schema:
 *           type: object
 *           required:
 *             - email
 *             - password
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       201:
 *         description: User successfully registered
 *       400:
 *         description: User already exists
 *       500:
 *         description: Server error
 */
router.post("/login",loginController);

export default router;
