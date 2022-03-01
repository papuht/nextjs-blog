
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from './date'
import Image from 'next/image'


/*this function returns the thumbnail list of other blog posts*/
export default function Blog({allPostsData, header}) {
	return(
	<>
	<div className={utilStyles.blogWrapper}>
	<h2 className={utilStyles.headingLg}>{header}</h2>
		{/*allPostsData is mapped to singular thumbnails*/}
		<div className={utilStyles.blogSection}>
		
			{allPostsData.map(({ id, date, title, image }) => (
				<Link href={`/posts/${id}`} key={id} className={utilStyles.blogThumbLink}>
				{/*singular thumbnail attributes*/}
				<div className={utilStyles.blogThumbWrapper} >
				<div className={utilStyles.blogThumbDiv}>
				
				<Image 
					responsive
					src={image}
					alt="Blogpost image"
					width={600}
					height={420}
					className={utilStyles.BlogThumbImage}
				/>
				
				<div className={utilStyles.listLinkWrapper}>
				<b><a className={utilStyles.listLink}>{title}</a></b>
				</div>
				
				
			
			</div>
			{/*thumbnail date*/}
			<div className={utilStyles.BlogLinkDateStyle}>
				<Date dateString={date} />
				</div>
			</div>
			
			</Link>
			
			
			))}
			
			</div>
		
		
		
	</div>
		
		</>
		)
		
}