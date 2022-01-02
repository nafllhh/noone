
import Head from 'next/head'
// import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../../../components/Layout'
export default function why() {
  return (
    <Layout title="Section 3">
    <div className={styles.topnav}>
          <a href="/" >Home</a>
          <a href="/blog/learn/sec1" className={styles.active} >Post</a>
          <a href="#">Project</a>
          <img className={styles.logo_me} src="/vercel2.svg"></img>
    </div>
    <div className={styles.container}>
    <div className={styles.topside_nav}>
        <span className={styles.topSection}>
          {' '}{' '}{' '}
            <Link href="/blog/learn/sec1">
              <a className={styles.sec_inactive}>sec1</a>
             </Link>
            <Link href="/blog/learn/sec2">
              <a className={styles.sectop_active}>sec2</a>
             </Link>
            <Link href="/blog/learn/sec3">
              <a className={styles.sec_inactive}>sec3</a>
             </Link>
            </span>
    </div>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
            
      <main id={styles.main} className={styles.main}>
      <div className={styles.side_nav}>
        <span className={styles.section}>
          {' '}{' '}{' '}
            <Link href="/blog/learn/sec1">
              <a className={styles.sec_inactive} >Getting started</a>
             </Link>
            <Link href="/blog/learn/sec2">
              <a className={styles.sec_active}>Section 2</a>
             </Link>
            <Link  href="/blog/learn/sec3">
              <a className={styles.sec_inactive} >Section 3</a>
             </Link>
            </span>
    </div>
        <h1 className={styles.title}>
          im sec 2 
        </h1>

        <p className={styles.description}>
          Just editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
      <p>

      </p>


      </main>

    </div>
    </Layout>
  )
}
