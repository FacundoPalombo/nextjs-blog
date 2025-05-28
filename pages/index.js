import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import styles from "../styles/utils.module.css";

import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.headingMd}>
        <p>Hi, im facundo, a frontend engineer at Cognizant.</p>
        <p>
          This is a blog about AI and its usage with Next.js and React to show
          different strategies of making web apps with the next.js framework and
          React architectures. Enjoy it!
        </p>
      </section>
      <section className={`${styles.headingMd} ${styles.padding1px}`}>
        <h2 className={styles.headingLg}>Blog</h2>
        <ul className={styles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={styles.listItem} key={id}>
              <Link href={`/posts/${id}`} className={styles.link}>
                <h2 className={styles.headingLg}>{title}</h2>
                <pre className={styles.lightText}>
                  {id} <span>{new Date(date).toLocaleDateString("es-ES")}</span>
                </pre>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
