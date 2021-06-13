// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "GET") {
    const client = await MongoClient.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    const db = client.db();
    const collection = db.collection(process.env.MONGO_COLLECTION);
    const data = await collection.find().toArray();
    client.close();
    res.json(data);
  }
}
export default handler;
