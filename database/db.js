const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri, { useUnifiedTopology: true });
async function run() {
  try {
    await client.connect();

    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
  }
}
run().catch(console.dir);
exports.Users = client.db("mlh").collection("users");
exports.Courses = client.db("mlh").collection("courses");
exports.userCol = client.db("mlh").collection("notes");
