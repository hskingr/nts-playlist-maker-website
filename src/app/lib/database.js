import { MongoClient } from "mongodb";

let client;
let database;
let collection;

export async function initDb() {
  try {
    console.log(`Initialising DB`);
    const uri = process.env.MONGODB_CONNECTION_STRING;

    client = new MongoClient(uri);
    database = client.db("nts-spotify-playlist-maker");
    collection = database.collection("songs");
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.log(error);
  }
}

export async function search(query) {
    const result = await collection.find(query).toArray()
    return result
}

export async function closeDb() {
  await client.close();
}
