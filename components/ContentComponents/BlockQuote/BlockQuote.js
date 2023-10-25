/*===== Components =====*/
import React from "react"

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

export default function BlockQuote({ 
  //Props
  children, icon, headline
}) {

  //console.log(author);

  return (
    <div className={componentStyles.BlockQuote}>

      <div className={componentStyles.icon}>
        {icon ? 
          <img className={componentStyles.iconImg} src={icon} alt="" />
          :
          <img className={componentStyles.iconImg} src="/images/icons/contentFormIcon.svg" alt="" />
        }
      </div>

      <div className={componentStyles.text}>
        {/*<h2>{headline}</h2>*/}
        <div className={componentStyles.children}>
          {children}
        </div>
      </div>

    </div>
  )
}
