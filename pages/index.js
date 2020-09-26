import Head from 'next/head'

import SEO from 'src/components/seo/seo'
import styles from 'styles/index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <SEO />
      <Head>
        <title>derrej</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      {/* <h1>derrej</h1> */}
      <div className={styles.logoWrapper}>
        <img src="/derrej.svg" alt="derrej Logo" className={styles.logo} />

        <div className={styles.shadow}></div>
      </div>
    </div>
  )
}
