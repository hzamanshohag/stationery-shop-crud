import { Router } from "express";
import { orderController } from "./order.controller";

const orderRouter = Router();

orderRouter.post("/", orderController.newOrder);
orderRouter.get("/revenue", orderController.totalRevenue);

export default orderRouter;
