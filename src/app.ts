import express, { Request, Response } from "express";
import productRouter from "./module/product/product.router";
import orderRouter from "./module/orders/order.router";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Stationery Shop Running 🏃⚡");
});

app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

export default app;
