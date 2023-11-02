/*===== Components =====*/
import React from "react"
import Link from 'next/link'


//import Button1 from '@components/Button1'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function BlogPreview({ 
  //Props
  text
}) {

  //console.log(author);

  return (
    <div className={componentStyles.BlogPreview}>
      <p>
        {text && 
            {text} ? "Placeholder Content"
        }
      </p>
    </div>
  )
}
