import { Router } from "express";
import authentication from "../controllers/authentication";

const router = Router();

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Authenticate user and return JWT token
 *     description: Validates the user's credentials and returns a JWT token if valid.
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         required: true
 *         description: User login details
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
 *       200:
 *         description: Authentication successful, returns a JWT token
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *             token:
 *               type: string
 *       400:
 *         description: Email and password are required
 *       401:
 *         description: Invalid credentials
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
router.post("/login", authentication);

export default router;
