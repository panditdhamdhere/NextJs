import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brilliant Coder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<nav className={styles.mainnav}>
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
    <li>Blog</li>
  </ul>
</nav>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Brilliant Coder
        </h1>

        <p className={styles.description}>
          A Blog For the coders by Pandit
        </p>
        <div className="blogs">
        <h2>Popular Blogs</h2>
          <div className="blogItem">
            <h3>How to learn NextJS in 2023 ?</h3>
            <p>Next Js is a great JavaScript Framework</p>
          </div>
        </div>
        <div className="blogs">
          <div className="blogItem">
            <h3>How to learn NextJS in 2023 ?</h3>
            <p>Next Js is a great JavaScript Framework</p>
          </div>
        </div>
        <div className="blogs">
          <div className="blogItem">
            <h3>How to learn NextJS in 2023 ?</h3>
            <p>Next Js is a great JavaScript Framework</p>
          </div>
        </div>
      </main>
    </div>

  )
}
