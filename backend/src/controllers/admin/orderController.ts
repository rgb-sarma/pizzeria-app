import {Request, Response} from 'express';
import { run } from '../../utils/mongoconnection';
import { ObjectId } from 'mongodb';

export const getAllOrders = async (req: Request, res: Response): Promise<void> => {
  const db = await run();
  const orders = await db.collection('order').find({}).toArray();
  res.json(orders);
}

export const updateOrder = async (req: Request, res: Response, next: Function): Promise<void> => {
  const db = await run();
  const order = await db.collection('order').updateOne({_id: new ObjectId((req.params.id))}, {$set: {
    status: req.body.status
  }});

  if (!order) {
    res.status(404);
    next(new Error('order not found'));
  }

  res.json(order);
}

export const createOrder = async (req: Request, res: Response): Promise<void> => {
  const db = await run();
  let size = new ObjectId(req.body.pizza.size);
  let toppings = req.body.pizza.toppings.map((el:any) => new ObjectId(el))
  const order = await db.collection('order').insertOne({
    name: req.body.name,
    lastname: req.body.lastname,
    address: req.body.address,
    phone: req.body.phone,
    status: req.body.status,
    pizza: {
      name: req.body.pizza.name,
      size: size,
      toppings: toppings,
      totalPrice: req.body.pizza.totalPrice
    }
  });
  res.json(order);
}

// export const deleteOrder = async (req: Request, res: Response): Promise<void> => {
//   const db = await run();
//   const order = await db.collection('order').deleteOne({_id: new ObjectId((req.params.id))});
//   res.json(order);
// }
