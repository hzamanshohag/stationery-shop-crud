import { Request, Response } from "express";
import { productService } from "./product.service";

const createProduct = async function (req: Request, res: Response) {
  try {
    const payload = req.body;

    const result = await productService.createProduct(payload);
    res.json({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Validation failed",
      data: error,
    });
  }
};

const getAllProduct = async function (req: Request, res: Response) {
  try {
    const result = await productService.getProduct();
    res.json({
      status: true,
      message: "Products retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Resource not found",
      data: error,
    });
  }
};

const getProductByQuery = async function (req: Request, res: Response) {
  try {
    const data = req.query;
    const result = await productService.getProductByQuery(data);
    res.json({
      status: true,
      message: "Products retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Resource not found",
      data: error,
    });
  }
};

const singleProduct = async function (req: Request, res: Response) {
  try {
    const productId = req.params.productId;
    const result = await productService.singleProductData(productId);
    res.json({
      status: true,
      message: "Product retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Resource not found",
      data: error,
    });
  }
};

const productUpdate = async function (req: Request, res: Response) {
  try {
    const data = req.body;
    const productId = req.params.productId;
    const result = await productService.productUpdate(productId, data);
    res.json({
      status: true,
      message: "Product updated successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Resource not found",
      data: error,
    });
  }
};

const productDelete = async function (req: Request, res: Response) {
  try {
    const id = req.params.productId;
    const result = await productService.productDelete(id);
    res.json({
      status: true,
      message: "Product deleted successfully",
      data: {},
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Resource not found",
      data: error,
    });
  }
};

export const productController = {
  createProduct,
  getAllProduct,
  getProductByQuery,
  singleProduct,
  productUpdate,
  productDelete,
};
