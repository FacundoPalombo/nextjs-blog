import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../components/layout.module.css";
import { getRandomPostUrl } from "../../lib/posts/utils/constants";

const Layout = ({ children, title = "Blog", nextPost }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Blog page layout" />
      </Head>
      <header className={styles.header}>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href={nextPost ? `/${nextPost}` : "/"}>Next post</Link>
            </li>
            <li>
              <Link href={`/ssrPosts/${getRandomPostUrl()}`}>Surprise me</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <pre>
          © {new Date().getFullYear()} Facundo and CompañIA Blog. All rights
          reserved.
        </pre>
      </footer>
      <style jsx>{`
        nav ul {
          display: flex;
          list-style: none;
          padding: 0;
        }
        nav ul li {
          margin-right: 15px;
        }
        footer {
          text-align: center;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default Layout;
