/*===== Components =====*/
import React from "react"


/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function Door({ 
  //Props
  children, title, sign, link, image, cta
}) {

  //console.log(author);

  return (
    <div 
      className={componentStyles.Door + ' Door'} 
      data-active="inactive"
      data-link={link}
    >
      <div className={componentStyles.doorFrame}>
        
        <div className={componentStyles.doorPanel}>
          <div className={componentStyles.title}>
            {title ? title : " [DOOR TITLE]"}
          </div>
          <div className={componentStyles.cta}>
            {cta ? cta : "Tap Here"}
          </div>
        </div>

        <div className={componentStyles.content}>
          CONTENT GOES HERE
        </div>

      </div>
    </div>
  )
}
