import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image"
import Date from "../components/date";

export default function Home({  }) {
  return (
    <Layout home>
      <Head>
        <title>Aiden Smith - Contact Me</title>
      </Head>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.blogBox}`}
      >
        <ul>
            <li className={` ${utilStyles.list} ${utilStyles.uselessCenter} ${utilStyles.contactList} `}>
                <a href="https://www.linkedin.com/in/aidensmithdev/" target="_blank">
                    LinkedIn
                </a>
            </li>
            <li className={` ${utilStyles.list} ${utilStyles.uselessCenter} ${utilStyles.contactList} `}>
                <a href="https://github.com/voxel20" target="_blank">
                    GitHub
                </a>
            </li>
            <li className={` ${utilStyles.list} ${utilStyles.uselessCenter} ${utilStyles.contactList} `}>
                <a href="https://twitter.com/DevVoxel" target="_blank">
                    Twitter
                </a>
            </li>
            <li className={` ${utilStyles.list} ${utilStyles.uselessCenter} ${utilStyles.contactList} `}>
                <a href="https://discord.com/users/153258046171119616" target="_blank">
                    Discord
                </a>
            </li>
        </ul>
      </section>
    </Layout>
  );
}
