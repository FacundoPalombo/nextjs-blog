import Markdown from "react-markdown";
import { findOneBySlug } from "../../services/posts";
import Layout from "../posts/layout";

export const getServerSideProps = async ({ params }) => {
  const { slug } = params;

  const post = await findOneBySlug({ slug: slug });

  if (!post) {
    console.log("No se encontró el post ", slug);
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: {
        id: post._id.toString(),
        title: post.title,
        content: post.content,
        slug: slug,
        date: post.date,
        tags: post.tags,
        coverImage: post.coverImage,
        author: post.author,
        ogImage: post.ogImage,
      },
    },
  };
};

export default function Post({ post }) {
  return (
    <Layout title={post.title}>
      <h1>{post.title}</h1>
      <br />
      <br />
      <div>
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("es-ES")}
        </time>{" "}
        by <span>{post.author.name}</span>
      </div>
      <Markdown>{post.content}</Markdown>
    </Layout>
  );
}
