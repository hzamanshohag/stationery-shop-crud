import { model, Schema } from "mongoose";

const orderSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Validation Error"],
    },
    product: {
      type: String,
      required: [true, "Validation Error"],
    },
    quantity: {
      type: Number,
      required: [true, "Validation Error"],
    },
    totalPrice: {
      type: Number,
      required: [true, "Validation Error"],
    },
  },
  { timestamps: true }
);

const order = model("order", orderSchema);
export default order;
