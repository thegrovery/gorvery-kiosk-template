/*===== Components =====*/
import React from "react"
import Link from 'next/link'


//import Button1 from '@components/Button1'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function BlogPreview({ 
  //Props
  id, image, title, 
  previewText, author, date
}) {

  //console.log(author);

  return (
    <div className={componentStyles.BlogPreview}>
      {image ? 
         <div className={componentStyles.image}>
          <Link href={`/posts/${id}`}>
            <a>
              <img 
                src={image} 
                alt="" 
              />
            </a>
          </Link>
        </div>
        :
        <>
          NO IMAGE
        </>
      }
       
        <Link href={`/posts/${id}`}>
          <a className={componentStyles.title}>{title}</a>
        </Link>
        {previewText && 
          <p className={componentStyles.previewText}>
            {previewText}
          </p>
        }
        <div className={componentStyles.readMore}>
          <Button1
             href={`/posts/${id}`}
             text="READ MORE"
          />
        </div>
        <div className={componentStyles.postMetas}>
          {author &&
            <span className={componentStyles.author}>{author} | </span>
          }
          {date &&
            <span className={componentStyles.date}>
              <Date dateString={date}  />
            </span>
          }          
        </div>
        <SocialIcons
          instagram="#"
          facebook="#"
          twitter="#"
          tumblr="#"
          pinterest="#"
        />
      
    </div>
  )
}
