import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'
export default function Layout(props) {
  return (
    <div className={styles.bg_home}>
        <Head>
          <title>{props.title}</title>
    </Head>
    {props.children}

      <footer className={styles.footer}>
        <a
  href =
      "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  target = "_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
            &nbsp; and <font className={styles.next}>&nbsp;Next.js</font> 
        </a>
    <br/>
      </footer>
    </div>
    
  )
}
