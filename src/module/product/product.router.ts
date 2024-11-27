import { Router } from "express";
import { productController } from "./product.controller";

const productRouter = Router();

productRouter.post("/", productController.createProduct);
// productRouter.get("/", productController.getAllProduct);
productRouter.get("/", productController.getProductByQuery);
productRouter.get("/:productId", productController.singleProduct);
productRouter.put("/:productId", productController.productUpdate);
productRouter.delete("/:productId", productController.productDelete);

export default productRouter;
