
import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Footer from './footer'
import StructuredMetaData from './StructuredData'


const blogname = 'Panun blogi'
const name = 'Panu Puhtila'
export const siteTitle = 'Panun blogi'



/*allPostsData is passed to Footer -element as prop*/
export default function Layout({ children, home, allPostsData }) {
  return (
  <>
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Panun blogi"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
		<meta name="og:type" content="website" />
		<meta name="og:URL" content="https://puhtila-example-blog.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
		<script type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(StructuredMetaData) }}
		/>

      </Head>
      
        {home ? (
          <>
		  <header className={styles.header}>
		  <h1 className={utilStyles.heading2Xl}>{blogname}</h1>
		  
            <Image
              priority
			  responsive
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            </header>
          </>
        ) : (
          <>
           
            
          </>
        )}
	
      <main>{children}</main>
      
     
      
    </div>
	<div className={utilStyles.FooterWrapper}>
		<div className={utilStyles.FooterSection}>
	<Footer allPostsData={allPostsData} />
	</div>
	</div>
	</>
  )
}

