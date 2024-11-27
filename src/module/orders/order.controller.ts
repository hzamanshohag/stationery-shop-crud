import { Request, Response } from "express";
import { orderService } from "./order.service";
import order from "./order.model";

const newOrder = async function (req: Request, res: Response) {
  try {
    const data = req.body;
    const result = await orderService.newOrder(data);

    res.json({
      status: true,
      message: "Order created successfully",
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

const totalRevenue = async function (req: Request, res: Response) {
  try {
    const revenue = await order.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$totalPrice" },
        },
      },
      {
        $project: {
          _id: 0,
          totalRevenue: 1,
        },
      },
    ]);


    res.json({
      status: true,
      message: "Revenue calculated successfully",
      data: revenue,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Resource not found",
      data: error,
    });
  }
};

export const orderController = {
  newOrder,
  totalRevenue,
};
