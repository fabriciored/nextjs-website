import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "../src/infra/components/Head";
import { GitHub, Link, Linkedin } from "react-feather";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head title="Fabricio Santos Dev" />

      <h1 className={styles.title}>Fabricio Santos</h1>

      <main className={styles.main}>
        <div className={styles.info}>
          <img src="https://avatars.githubusercontent.com/u/61992729?v=4"></img>

          <div className={styles.links}>
            <p>
              <GitHub />
              github.com/fabriciored
            </p>
            <p>
              <Linkedin />
              linkedin.com/in/fabriciojlsantos/
            </p>
          </div>
        </div>

        <h2 className={styles.name}>Software Developer</h2>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>My Projects &rarr;</h2>
            <p></p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Contact Info&rarr;</h2>
            <p></p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
