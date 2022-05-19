import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";
import Hovercard from "../components/hovercard";

export default function Home({  }) {
  return (
    <Layout home>
      <Head>
        <title>Aiden Smith - Projects</title>
      </Head>
      <h2 className={utilStyles.uselessCenter}>Sorry there are no projects here at this time!</h2>
      <p className={utilStyles.uselessCenter}>But here is a cool hovercard example.</p>
      <br/>
      <Hovercard />
    </Layout>
  );
}
