import MongoClient from "mongodb";

export async function findOneBySlug({ slug }) {
  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db();
  const postsCollection = db.collection("posts");
  const post = await postsCollection.findOne({ slug });
  client.close();
  return post;
}

export async function findAll() {
  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db();
  const postsCollection = db.collection("posts");
  const posts = await postsCollection.find().toArray();
  client.close();
  return posts;
}

export async function insertMany(posts) {
  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db();
  const postsCollection = db.collection("posts");
  const result = await postsCollection.insertMany(posts);
  client.close();
  return result;
}
