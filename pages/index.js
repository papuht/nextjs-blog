import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Blog from '../components/blog'




const header = 'Blogi'


export async function getStaticProps() {
	
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData
		}
	}
}





export default function Home({allPostsData}) {
  return (
	<>
    <Layout home allPostsData ={allPostsData}>
		<Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className = {utilStyles.IntroText}>Junior web developer. Bachelor of Arts and graduate student in Computer Science.</p>
        <br />
		<br />
		<br />
		<br />
		
      </section>
	  <br />
	  <br />
	  <br />
	  <br />
	 <Blog allPostsData={allPostsData} header={header}/>
	 <br />
	 <br />
	 <br />
	 <br />
	 
	  
    </Layout>
	
	</>

  )
}
