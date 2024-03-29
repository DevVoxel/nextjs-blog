import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Aiden Smith";
export const siteTitle = "Aiden Smith - Blog";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/redAnim.gif" />
        <meta name="description" content="Aiden Smith's personal blog website." />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            {/* Profile image at top of all posts. */}
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile_mealtime.png"
                  className={utilStyles.borderCircle}
                  height={144}
                  width={144}
                  alt={name}
                />
              </a>
            </Link>
            <h1 className={utilStyles.headingXl}>{name}</h1>
            <div className="navbar">
              <nav className="site-nav">
                <div className={styles.logo}>
                  <Link href="/">
                    <a>{/* SVG LOGO */}</a>
                  </Link>
                </div>
                <ul id="menu" className="menu">
                  <li className="menu-item menu-anim menu-about">
                    <Link href={`/about`}>
                      <a>About</a>
                    </Link>
                  </li>
                  <li className="menu-item menu-anim menu-blog">
                    <Link href={`/`}>
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li className="menu-item menu-anim menu-projects">
                    <Link href={`/projects`}>
                      <a>Projects</a>
                    </Link>
                  </li>
                  <li className="menu-item menu-anim menu-contact-me">
                    <Link href={`/contact-me`}>
                      <a>Contact Me</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </>
        ) : (
          <>
            {/* <h1 className={utilStyles.headingXl}>{name}</h1> */}
            <div className="navbarMain">
              <nav className="site-nav">
                <div className={styles.logo}>
                  <Link href="/">
                    <a>
                      {/* SVG LOGO EVENTUALLY */}
                      <Image
                        priority
                        src="/images/profile_mealtime.png"
                        className={`${utilStyles.borderCircle}`}
                        height={72}
                        width={72}
                        alt={name}
                      />
                    </a>
                  </Link>
                </div>
                <ul id="menu" className="menu">
                  <li className="menu-item menu-anim menu-about">
                    <Link href={`/about`}>
                      <a>About</a>
                    </Link>
                  </li>
                  <li className="menu-item menu-anim menu-blog">
                    <Link href={`/`}>
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li className="menu-item menu-anim menu-projects">
                    <Link href={`/projects`}>
                      <a>Projects</a>
                    </Link>
                  </li>
                  <li className="menu-item menu-anim menu-contact-me">
                    <Link href={`/contact-me`}>
                      <a>Contact Me</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
