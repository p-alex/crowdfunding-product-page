import { MongoClient } from "mongodb";
async function handler(req, res) {
  const client = await MongoClient.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const db = client.db();
  if (req.method === "GET") {
    try {
      const collection = db.collection(process.env.MONGO_COLLECTION);
      const data = await collection.find().toArray();
      client.close();
      res.json(data);
    } catch (error) {
      console.log(error);
      client.close();
      res.status(404).json({ message: "Could not retrieve data from the Api" });
    }
  }

  if (req.method === "POST") {
    try {
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
      res.status(200).json({ message: "Success" });
    } catch (error) {
      console.log(error);
      client.close();
      res.status(404).json({ message: "Error" });
    }
  }
}
export default handler;
