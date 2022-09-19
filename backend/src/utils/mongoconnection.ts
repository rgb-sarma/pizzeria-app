import {MongoClient} from 'mongodb'

let connectionString: string = process.env.MONGO_DB_URI || 'mongodb://localhost:27017/'

const client = new MongoClient(connectionString)

export async function run() {
    await client.connect()
    return client.db('pizzeria')
}

// export default run