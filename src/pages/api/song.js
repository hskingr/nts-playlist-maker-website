import { closeDb, initDb, search } from "../../app/lib/database.js";

export default async function handler(req, res) {
    const requestMethod = req.method;
    // const body = JSON.parse(req.body);
    switch (requestMethod) {
      case 'GET':
        await initDb()
        const result = await search({})
        await closeDb()
        res.status(200).json(result)
      // handle other HTTP methods
      default:
        res.status(400).json({ message: 'Not Supported'})
    }
  }