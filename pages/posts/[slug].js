import Layout from "./layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Markdown from "react-markdown";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
  };
}

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
