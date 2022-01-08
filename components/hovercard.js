import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import hovercard from "../styles/hovercard.module.css";

const name = "Voxel";
export const siteTitle = "Voxel's Blog";

export default function Hovercard() {
  return (
    <div className={styles.container}>
      <div className={hovercard.card}>
        <div className={hovercard.cardcontent}>
          <h2 className={hovercard.cardtitle}>Random Title</h2>
          <p className={hovercard.cardbody}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            labore consequatur illo in quidem!
          </p>
          <a href="#" className={hovercard.button}>
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
