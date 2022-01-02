
import styles from '/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
export default function Navbar(props){
return (
    <div className={styles.topnav}>
            <Link href="/">
              <a className={props.hha}>Home</a>
             </Link>
            <Link href="/blog/learn/sec1">
              <a>Post</a>
             </Link>
          <a href="#">Project</a>
           <img className={styles.logo_me} src="/vercel2.svg"></img>
    </div>

  )

}
