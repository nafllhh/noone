import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    <div className={styles.topnav}>
          <a href="#" className={styles.active}>Home</a>
          <a href="/blog/learn2">Post</a>
          <a href="#">Project</a>
          <img className={styles.logo_me} src="/vercel2.svg"></img>
    </div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
            
      <main className={styles.main}>
          <img className={styles.hero}src="/gitpp.png"></img>
        <h1 className={styles.title}>
          Selamat datang di <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Just editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="/blog/learn2" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Navigating</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
            &nbsp; and <font className={styles.next}>&nbsp;Next.js</font> 

        </a>
      </footer>
    </div>
  )
}
