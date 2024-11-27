import product from "../product/product.model";
import { Iorder } from "./order.interface";
import order from "./order.model";

const newOrder = async (data:Iorder) => {
  const oldProduct = await product.findOne({ _id: data.product });
  if (oldProduct && oldProduct.quantity >= data.quantity) {
    const remainQuantity = oldProduct.quantity - data.quantity;
    const id = oldProduct?._id;
    const remain: object = { quantity: remainQuantity };
    const result = await product.findByIdAndUpdate(id, remain, {
      new: true,
    });

    if (remainQuantity === 0) {
      const id = oldProduct?._id;
      const productdata: object = { inStock: false, quantity: 0 };
      const result = await product.findByIdAndUpdate(id, productdata, {
        new: true,
      });
    }
  }

  const userOrder = {
    email: data.email,
    product: data.product,
    quantity: data.quantity,
    totalPrice: data.totalPrice,
  };

  const newOrder = await order.create(userOrder);
  return newOrder
};



export const orderService = {
  newOrder,
};