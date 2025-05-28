import {
  generateMarkdown,
  sanitizeFileName,
} from "../lib/posts/utils/createMarkdown.js";
import content from "../content.json" with { type: "json" };
import { MongoClient } from "mongodb";
import { DATABASE_NAME, POSTS_COLLECTION_NAME } from "../utils/constants.js";

async function createPosts(posts) {
  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();
    console.log("Conectado a MongoDB");

    const db = client.db(DATABASE_NAME);
    const collection = db.collection(POSTS_COLLECTION_NAME);

    // Insertar los posts en la colección
    const result = await collection.insertMany(posts);
    console.log(`${result.insertedCount} posts insertados en MongoDB`);
  } catch (error) {
    console.error("Error al insertar en MongoDB:", error);
  } finally {
    await client.close();
    console.log("Conexión a MongoDB cerrada");
  }
}

export default async function seed() {
  // Generar los posts y alimentarlos a MongoDB
  const posts = content.map((post) => {
    return {
      title: post.title,
      slug: sanitizeFileName(post.title),
      description: post.description,
      date: post.date,
      tags: post.tags,
      coverImage: "/assets/blog/automatizacion-ia-sre/cover.png",
      author: {
        name: "Facundo Palombo & compañIA",
        picture: "/assets/blog/authors/facundo.png",
      },
      ogImage: {
        url: "/assets/blog/automatizacion-ia-sre/cover.png",
      },
      content: generateMarkdown(post),
    };
  });

  if (!posts)
    throw new Error(
      "No se han podido generar los posts a partir de content.json"
    );

  await createPosts(posts);
}

await seed();
