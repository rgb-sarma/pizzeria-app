import {Request, Response} from 'express';
import { run } from '../../utils/mongoconnection';
import { ObjectId } from 'mongodb';

export const getAllPizzas = async (req: Request, res: Response): Promise<void> => {
  const db = await run();
  const pizzas = await db.collection('pizza').find({}).toArray();
  res.json(pizzas);
}

export const updatePizza = async (req: Request, res: Response, next: Function): Promise<void> => {
  const db = await run();
  let topping = req.body.availableToppings.map((el: any) => new ObjectId(el));
  // let sizes = req.body.sizes.map((el: any) => el.id = new ObjectId(el.id));
  req.body.sizes.forEach((el: any) => el.id = new ObjectId(el.id));
  let alergens = req.body.alergens.map((el: any) => new ObjectId(el));
  let image = new ObjectId(req.body.image);
  const pizza = await db.collection('pizza').updateOne({_id: new ObjectId((req.params.id))}, {$set: {
    name: req.body.name,
    description: req.body.description,
    availableToppings: topping,
    sizes: req.body.sizes,
    alergens: alergens,
  }});

  if (!pizza) {
    res.status(404);
    next(new Error('Pizza not found'));
  }

  res.json(pizza);
}

export const createPizza = async (req: Request, res: Response): Promise<void> => {
  const db = await run();
  let topping = req.body.availableToppings.map((el: any) => new ObjectId(el));
  // let sizes = req.body.sizes.map((el: any) => el.id = new ObjectId(el.id));
  req.body.sizes.forEach((el: any) => el.id = new ObjectId(el.id));
  let alergens = req.body.alergens.map((el: any) => new ObjectId(el));
  let image = new ObjectId(req.body.image);
  const pizza = await db.collection('pizza').insertOne({
    name: req.body.name,
    description: req.body.description,
    image: image,
    availableToppings: topping,
    sizes: req.body.sizes,
    alergens: alergens,
  });
  res.json(pizza);
}

export const deletePizza = async (req: Request, res: Response): Promise<void> => {
  const db = await run();
  const pizza = await db.collection('pizza').deleteOne({_id: new ObjectId((req.params.id))});
  res.json(pizza);
}
