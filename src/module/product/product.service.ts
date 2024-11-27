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
  const queryData = data;
  if (
    queryData.searchTerm === "name" ||
    queryData.searchTerm === "brand" ||
    queryData.searchTerm === "category"
  ) {
    const query = { [queryData.searchTerm]: { $exists: true } };
    const result = await product.find(query);
    console.log("test", queryData.searchTerm);
    console.log("hello", result);
    return result;
  } else {
    throw new Error("'name', 'brand', or 'category' is valid search term");
  }
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
