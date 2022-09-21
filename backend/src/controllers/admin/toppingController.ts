import {Request, Response} from 'express';
import { run } from '../../utils/mongoconnection';
import { ObjectId } from 'mongodb';

export const getAllToppings = async (req: Request, res: Response): Promise<void> => {
  const db = await run();
  const toppings = await db.collection('topping').find({}).toArray();
  res.json(toppings);
}

export const updateTopping = async (req: Request, res: Response, next: Function): Promise<void> => {
  const db = await run();
  let alergen = req.body.alergen ? req.body.alergen.map((el:any) => new ObjectId(el)) : null;
  let image = new ObjectId(req.body.image);
  const topping = await db.collection('topping').updateOne({_id: new ObjectId((req.params.id))}, {$set: {
    name: req.body.name,
    price: req.body.price,
    alergen: alergen,
    image: image,
  }});

  if (!topping) {
    res.status(404);
    next(new Error('topping not found'));
  }

  res.json(topping);
}

export const createTopping = async (req: Request, res: Response): Promise<void> => {
  const db = await run();
  let alergen = req.body.alergen ? new ObjectId(req.body.alergen) : null;
  let image = new ObjectId(req.body.image);
  const topping = await db.collection('topping').insertOne({
    name: req.body.name,
    price: req.body.price,
    alergen: alergen,
    image: image,
  });
  res.json(topping);
}

export const deleteTopping = async (req: Request, res: Response): Promise<void> => {
  const db = await run();
  const topping = await db.collection('topping').deleteOne({_id: new ObjectId((req.params.id))});
  res.json(topping);
}
