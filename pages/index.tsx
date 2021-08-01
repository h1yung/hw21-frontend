import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Header } from "../Components/Header";
import { Layout } from "../Components/Layout";

export default function Index() {
  return (
    <div className={styles.resources}>
      <Head>
        <title>Resources</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header headerImgClass="index-header">
          {/* <img src="../images/logo.png"></img> */}
          <button className="apply-now-button">Apply now!</button>
          {/* TODO: Add Helloworld img , rocket img and apply now button  */}
        </Header>

        <div className="date-and-why-us-section">
          <div className="date-section ">
            <div className="container">
            <h1 className="date-h1">
              SEP. <br></br>11TH
            </h1>
            <div className="orange-rectangle"></div>
            <p className="date-paragraph">Meet us there.</p>
            <button className="date-button">VIEW SCHEDULE</button>
            {/* <Image src="/planet.png"layout='fill'
             objectFit='contain'></Image> */}
          </div>
          </div>

          <div className="why-us-section">
            <div className="container">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>

            <h1 className="why-us-h1">WHY US?</h1>
            <div className="why-us-picture"></div>
            <p className="why-us-paragraph">
              <a className="why-us-a"href="/faq">
              Have questions? Check out some FAQ's
              <span>
                <Image src="/arrow_button.png" width={20} height={20}></Image>
              </span>
              </a>
            </p>
          </div>
          </div>
        </div>
        <div className="sponsors-section">
          <div className="container">
          <h1 className="sponsors-h1">SPONSORS</h1>
          {/* List of sponsors */}
          {/* Make img array and display them dynamically */}
          <Image src="/circle.png" height={150} width={150}></Image>
          <Image src="/circle.png" height={150} width={150}></Image>
          <Image src="/circle.png" height={150} width={150}></Image>
          <Image src="/circle.png" height={150} width={150}></Image>
          <button className="learn-more-button">LEARN MORE</button>
        </div></div>
      </Layout>

      {/* <main className={styles.main}>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Resource &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

      </main> */}
    </div>
  );
}
