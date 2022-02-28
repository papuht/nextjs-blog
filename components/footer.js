import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from './date'
import Image from 'next/image'


export default function Footer({allPostsData}) {
	return(
<>


 <div className={utilStyles.FooterDiv1}>
 
	<div className={utilStyles.FooterH4}>
		<h4 className={utilStyles.FooterPosts}>Blogipostaukset</h4>
		</div>
		
			{allPostsData.map(({ id, title }) => (
				
				
				
			
			<Link href={`/posts/${id}`} key={id}>
				
				<a className={utilStyles.FooterListLink}>{title}</a>
				
			</Link>
				

			
			
			
			
			))}
		
		
		</div>
		
		<div className={utilStyles.FooterDiv2}>
		<h1 className={utilStyles.FooterDiv2Header}>Alaotsikko</h1>
		<div className={utilStyles.FooterDiv2Text}>
		<p> Tähän tulee joku syvällinen ja älykäs mietelause </p>
		</div>
		</div>
		
	</>	
		)
		
}