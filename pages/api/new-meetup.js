import { MongoConnect } from "mongodb";
async function handler(req, res) {
  if (req === "POST") {
    const data = req.body;

    const client = await MongoConnect.connect(
      "mongodb+srv://seyfe:123456789ab@cluster0.znimg.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupCollection = db.collection("meetups");
    const result = await meetupCollection.insertOne(data);
    client.close();
    res.status(201).json({ message: "Meetup inserted" });
  }
}
export default handler;
