import { Iproduct } from "./product.interface";
import product from "./product.model";

const createProduct = async (payload: Iproduct) => {
  const result = await product.create(payload);
  return result;
};

const getProduct = async () => {
  const result = await product.find();
  return result;
};

const getProductByQuery = async (data: any) => {
  const searchTerm = data.searchTerm;
  const filterProduct = searchTerm
    ? {
        $or: [
          { name: { $regex: searchTerm, $options: "i" } },
          { brand: { $regex: searchTerm, $options: "i" } },
          { category: { $regex: searchTerm, $options: "i" } },
        ],
      }
    : {}; 
  const allProducts = await product.find(filterProduct);
  return allProducts
};

const singleProductData = async (id: string) => {
  const result = await product.findById(id);
  return result;
};

const productUpdate = async (id: string, data: Iproduct) => {
  const result = await product.findByIdAndUpdate(id, data, {
    new: true,
  });
  return result;
};

const productDelete = async (id: string) => {
  const result = await product.findByIdAndDelete(id);
  return result;
};

export const productService = {
  createProduct,
  getProduct,
  getProductByQuery,
  singleProductData,
  productUpdate,
  productDelete,
};
