import Markdown from "react-markdown";
import * as posts from "../../../repository/posts";

export async function getServerSideProps({ params }) {
  const { slug } = params;

  const post = await posts.findOneBySlug({ slug });

  if (!post) {
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
        slug: post.slug,
        date: post.date,
        tags: post.tags,
        coverImage: post.coverImage,
        author: post.author,
        ogImage: post.ogImage,
        content: post.content,
      },
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
        <time dateTime={post.date}>{post.date}</time> by{" "}
        <span>{post.author.name}</span>
      </div>
      <Markdown>{post.content}</Markdown>
    </Layout>
  );
}
