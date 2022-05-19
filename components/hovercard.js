import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import hovercard from "../styles/hovercard.module.css";

const name = "Aiden Smith";
export const siteTitle = "";

export default function Hovercard() {
  return (
    <div className={`${utilStyles.uselessCenter}`}>
      <div className={hovercard.card}>
        <div className={hovercard.cardcontent}>
          <h2 className={hovercard.cardtitle}>3D render - Kdoms</h2>
          <p className={hovercard.cardbody}>
            Check out this cool image that was rendered in 3D by my friend Kyle, otherwise known as Kdoms.
          </p>
          <a href="#" className={hovercard.button}>
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
