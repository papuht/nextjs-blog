import Layout from '../../components/layout'
import { getAllPostIds, getPostData, getSortedPostsData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import Blog from '../../components/blog'

import Image from 'next/image'
import Link from 'next/link'
import styles from '../../components/layout.module.css'


const header = "Muut postaukset:"
const name = "Panu Puhtila";

{/*function returns postsData and allPostsData which contain the data for post contents and thumbnails*/}
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  const allPostsData = await getSortedPostsData()
  return {
    props: {
      postData,
	  allPostsData
    }
  }
}


export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

//allPostsData is passed to the Blog as prop
export default function Post({postData, allPostsData}) {
  return (
  
  <Layout allPostsData={allPostsData}>
  {/*elements for author name and date*/}
  <div className={utilStyles.pageWrapper}>
  
   <header className={utilStyles.blogAuthorDiv}>
                <Image
                  priority
				  responsive
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={45}
                  width={45}
                  alt={name}
                />
				<p className={utilStyles.blogAuthorName}>{name}</p>
	<div className={utilStyles.BlogDateStyle}>
	<Date dateString={postData.date}  />
	</div>
			</header>
  
  
  {/*elements for big article image and return link*/}
	<div className={utilStyles.articleImage}>
		<Image 
			responsive
			src={postData.image}
			width={1500}
			height={700}
			alt={"This should be cool blog image"}
			
		/>
		</div>
		
		
   <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
  
  
   <Head>
        <title>{postData.title}</title>
      </Head>
	  {/*article content elements*/}
  <article className={utilStyles.blogArticle}>
 
  <h1 className={utilStyles.headingXl}>{postData.title}</h1>
  
  
  <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} className={utilStyles.BlogText} />
  </article>
  {/*Blog thumbnails*/}
  <Blog allPostsData={allPostsData} header={header} />
  </div>
  </Layout>
  
  )
}

