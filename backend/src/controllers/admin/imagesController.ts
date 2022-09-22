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
    } else {
      res.sendFile(__dirname + data.imagePath)
    }
    // res.json(data)
  } catch (e) {
    next(e)
    return
  }
}

export async function postImage(req: Request, res: Response, next: Function) {
  // console.log(req.files);
  
  // console.log(req.files);
  

  // res.sendStatus(200)
  
  if (!req.files) {
    throw new Error('Invalid image.')
  }
  try {
    // console.log(req.file);
    // res.json(req.file)
    const file: any = req.files.file

    file.mv(__dirname + '/upload/' + file.name);
    const db = await run()
    let data = await db.collection('images').insertOne({ imagePath: '/upload/' + file.name })
    res.json(data.insertedId)
  } catch (e) {
    next(e)
    return
  }
  // res.json('ok')
}


export async function updateImage(req: Request, res: Response, next: Function) {
  if (!req.files) {
    throw new Error('Invalid image.')
  }
  try {
    const file: any = req.files.file
    file.mv(__dirname + '/upload/' + file.name);
    const db = await run()
    await db.collection('images').insertOne({ imagePath: '/upload/' + file.name })
    const data = await db
      .collection('images')
      .updateOne({ _id: new ObjectId(req.params.id) }, { $set: { imagePath: '/upload/' + file.name } })
    // res.json(data)
    res.json('ok')
  } catch (e) {
    next(e)
    return
  }
}