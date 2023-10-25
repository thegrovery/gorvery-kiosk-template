import React from "react"
import Link from 'next/link'


//import Button1 from '@components/Button1'

import componentStyles from './styles.module.scss'


export default function BlogPreview({ 
  //Props
  id, image, title, path,
  previewText, author, date
}) {

  //console.log(author);

  return (
    <div className={componentStyles.BlogPreview}>
      {image ? 
         <div className={componentStyles.image}>
          <Link href={path ? `/${path}/${id}` : `/posts/${id}`}>
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
       
        
        <a href={path ? `/${path}/${id}` : `/posts/${id}`} className={componentStyles.title}>{title}</a>
        
        {previewText && 
          <p className={componentStyles.previewText}>
            {previewText}
          </p>
        }
        <div className={componentStyles.readMore}>
          <Button1
             href={path ? `/${path}/${id}` : `/posts/${id}`}
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
