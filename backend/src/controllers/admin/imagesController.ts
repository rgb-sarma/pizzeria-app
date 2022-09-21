import { Request, Response } from 'express'
import { ObjectId } from 'mongodb'
import { run } from '../../utils/mongoconnection'

export async function getAllImageIds( req: Request, res: Response, next: Function ) {
  try {
    const db = await run()
    const data = await db
      .collection('images')
      .find()
      .project({ image: 0, _id: 1 })
      .toArray()
    res.json(data)
  } catch (e) {
    next(e)
    return
  }
}

export async function getImageById( req: Request, res: Response, next: Function ) {
  try {
    const db = await run()
    const data = await db
      .collection('images')
      .findOne({ _id: new ObjectId(req.params.id) })
    if (!data) {
      res.status(404)
      throw new Error('Image not found.')
    }
    const img = Buffer.from(data.image.buffer, 'base64')

    res.send(img)
    // res.send(Buffer.from(data.image.buffer))
  } catch (e) {
    next(e)
    return
  }
}

export async function postImage(req: Request, res: Response, next: Function) {
  if (!req.file) {
    throw new Error('Invalid image.')
  }
  try {
    const db = await run()
    let data = await db.collection('images').insertOne({ image: req.file })
    res.json(data.insertedId)
  } catch (e) {
    next(e)
    return
  }
  // res.json('ok')
}


export async function updateImage(req: Request, res: Response, next: Function) {
  if (!req.file) {
    throw new Error('Invalid image.')
  }
  try {
    const db = await run()
    const data = await db
      .collection('images')
      .updateOne({ _id: new ObjectId(req.params.id) }, { $set: { image: req.file } })
    // res.json(data)
    res.json('ok')
  } catch (e) {
    next(e)
    return
  }
}