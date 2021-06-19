// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";
async function handler(req, res) {
  try {
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
  } catch (error) {
    console.log(error);
  }

  if (req.method === "POST") {
    console.log(req.body);
    const client = await MongoClient.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    const db = client.db();
    const collection = db.collection(process.env.MONGO_COLLECTION);
    const result = await collection.find({}).toArray();
    const { currentBackAmount, totalBackers, rewards } = result[0];
    await collection.updateMany(
      { title: "Mastercraft Bamboo Monitor Riser" },
      {
        $set: {
          currentBackAmount: currentBackAmount + req.body.pledge,
          totalBackers: totalBackers + 1,
        },
      }
    );
    if (req.body.rewardID) {
      let currentRewardsArray = rewards;
      let updatedRewardsArray = currentRewardsArray.map((reward) => {
        if (reward.id === req.body.rewardID) {
          return { ...reward, stock: reward.stock - 1 };
        }
        return reward;
      });

      await collection.updateOne(
        { title: "Mastercraft Bamboo Monitor Riser" },
        { $set: { rewards: updatedRewardsArray } }
      );
    }
    client.close();
    res.status(200).json("hello");
  }
}
export default handler;
