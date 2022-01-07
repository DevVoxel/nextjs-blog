import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import hovercard from "../styles/hovercard.module.css";

const name = "Voxel";
export const siteTitle = "Voxel's Blog";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Voxel's personal blog website." />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={hovercard.card}>
      <div classname={hovercard.cardcontent}>
        <h2 className={hovercard.cardtitle}>Random Title</h2>
        <p className={hovercard.cardbody}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          labore consequatur illo in quidem!
        </p>
        <a href="#" className={hovercard.button}>Learn More</a>
      </div>
    </div>

        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
    </div>
  );
}
