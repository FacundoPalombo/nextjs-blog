import { MongoClient, ServerApiVersion } from "mongodb";
import { DATABASE_NAME, POSTS_COLLECTION_NAME } from "../utils/constants";

export async function findOneBySlug({ slug }) {
  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  const db = client.db(DATABASE_NAME);
  const postsCollection = db.collection(POSTS_COLLECTION_NAME);
  const post = await postsCollection.findOne({ slug });
  client.close();
  return post;
}

export async function findAll() {
  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  const db = client.db(DATABASE_NAME);
  const postsCollection = db.collection(POSTS_COLLECTION_NAME);
  const posts = await postsCollection.find().toArray();
  client.close();
  return posts;
}

export async function insertMany(posts) {
  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  const db = client.db(DATABASE_NAME);
  const postsCollection = db.collection(POSTS_COLLECTION_NAME);
  const result = await postsCollection.insertMany(posts);
  client.close();
  return result;
}
