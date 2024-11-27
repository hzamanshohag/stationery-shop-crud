import { model, Schema } from "mongoose";
import { Iproduct } from "./product.interface";

const productSchema = new Schema<Iproduct>(
  {
    name: {
      type: String,
      required: [true, "Validation Error"],
    },
    brand: {
      type: String,
      required: [true, "Validation Error"],
    },
    price: {
      type: Number,
      require: [true, "Price must be a positive number"],
    },
    category: {
      type: String,
      enum: {
        values: [
          "Writing",
          "Office Supplies",
          "Art Supplies",
          "Educational",
          "Technology",
        ],
        message: "{VALUE} Validation Error",
      },
      required: [true, "Validation Error"],
    },
    description: {
      type: String,
      required: [true, "Validation Error"],
    },
    quantity: {
      type: Number,
      required: [true, "Validation Error"],
    },
    inStock: {
      type: Boolean,
      required: [true, "Validation Error"],
    },
  },
  { timestamps: true }
);



const product = model<Iproduct>("Product", productSchema);
export default product;
