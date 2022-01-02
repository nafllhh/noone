import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/Home.module.css'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
const divStyle = {
  color: 'black'
};
export default function Layout(props) {
  return (
    <div className={styles.bg_home} style={divStyle}>
    

        
        <Head>
          <title>{props.title}</title>
    </Head>

    {props.children}
    <Footer/>

      
    </div>
    
  )
}
