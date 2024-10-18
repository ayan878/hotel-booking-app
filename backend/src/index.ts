import express, { Request, Response } from "express";

const app = express();

app.get("/get", (req: Request, res: Response) => {
  res.json({ message: "hello" });
});
app.listen(3000, () => {
  console.log(`server is running http://localhost:3000`);
});
