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
  const postData = getPostData(params.id);
  return {
    props: {
      post: postData,
    },
  };
}

export default function Post({ post }) {
  console.log(post);
  return (
    <Layout title={post.title}>
      <h1>{post.title}</h1>
      <br />
      <br />
      <div>
        <time dateTime={post.date}>{post.date}</time> by{" "}
        <span>{post.author.name}</span>
      </div>
      <Markdown>{post.content}</Markdown>
    </Layout>
  );
}
