/*===== Components =====*/
import React from "react"


/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function Cell({ 
  //Props
  children, width
}) {

  //console.log(author);

  return (
    <div className={componentStyles.Cell} data-width={width}>
      {children}
    </div>
  )
}
