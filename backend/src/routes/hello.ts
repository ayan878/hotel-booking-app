import { Router, Request, Response } from "express";

const router = Router();

/**
 * @swagger
 * /hello:
 *   get:
 *     description: Get a hello world message
 *     responses:
 *       200:
 *         description: A hello world message
 */
router.get("/hello", async(req: Request, res: Response) => {
  res.send({ message: "Hello World" });
});
// router.get("/api/test", async (req: Request, res: Response) => {
//   res.send("Hello, TypeScript and Express!");
// });

export default router;
