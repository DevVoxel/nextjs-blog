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
    <Layout>
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
        <box>
          <p className="about-content">
            &emsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam sit
            amet nisl suscipit adipiscing bibendum est ultricies. Fusce id velit
            ut tortor pretium viverra. Justo eget magna fermentum iaculis. Nibh
            tortor id aliquet lectus proin. Pharetra convallis posuere morbi leo
            urna molestie. Consequat id porta nibh venenatis cras sed felis
            eget. Volutpat consequat mauris nunc congue. Aliquam eleifend mi in
            nulla posuere sollicitudin aliquam. Sagittis id consectetur purus ut
            faucibus.
            <br />
            <br />
            &emsp;Est ullamcorper eget nulla facilisi etiam. Praesent semper feugiat
            nibh sed pulvinar proin gravida hendrerit lectus. Fusce id velit ut
            tortor pretium viverra suspendisse potenti nullam. At ultrices mi
            tempus imperdiet nulla malesuada pellentesque elit eget. Aliquet
            bibendum enim facilisis gravida neque convallis. Nisi quis eleifend
            quam adipiscing vitae proin. Ligula ullamcorper malesuada proin
            libero nunc consequat interdum varius. Mi eget mauris pharetra et
            ultrices neque ornare. Nec dui nunc mattis enim ut tellus elementum.
            Non enim praesent elementum facilisis. Quam nulla porttitor massa id
            neque aliquam vestibulum morbi blandit. Viverra aliquet eget sit
            amet tellus cras adipiscing enim eu. Fermentum dui faucibus in
            ornare. Nisi quis eleifend quam adipiscing vitae. Integer quis
            auctor elit sed vulputate mi. Enim sed faucibus turpis in. Sit amet
            cursus sit amet dictum sit amet justo.
            <br />
            <br />
            &emsp;Cursus in hac habitasse platea. Commodo viverra maecenas accumsan
            lacus. Congue mauris rhoncus aenean vel. Nunc pulvinar sapien et
            ligula ullamcorper. Ac felis donec et odio pellentesque. A cras
            semper auctor neque. Eget nunc lobortis mattis aliquam faucibus
            purus in massa. Odio pellentesque diam volutpat commodo sed egestas
            egestas. Tellus id interdum velit laoreet id donec. Vitae purus
            faucibus ornare suspendisse sed nisi. Sollicitudin ac orci phasellus
            egestas tellus rutrum tellus. Consectetur libero id faucibus nisl
            tincidunt eget nullam. Tincidunt arcu non sodales neque.
          </p>
        </box>
      </div>
    </Layout>
  );
}
