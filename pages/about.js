import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
// import TOC from '../components/toc'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function About({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>About</title>
      </Head>
      <div className="page-content">
        <section className={`${utilStyles.headingMd}`}>
          <h1>About</h1>
          <blockquote className={utilStyles.blockquote}>
            <p>
              "Happiness is the most insidious prison of all."
              <br />
              <strong>- Alan Moore</strong>
            </p>
          </blockquote>
        </section>
        {/* <TOC /> */}
      </div>
    </Layout>
  );
}
