/*===== Components =====*/
import React from "react"

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

/*===== Site Data =====*/
import data from "@data/data.json"

export default function CloseIcon({ 
  //Props
  id, children, fillColor
}) {

  //console.log(author);
  let accentColor = data.accentColor1;

  return (
    <div className={componentStyles.CloseIcon}>
      <svg width="21" height="21" viewBox="0 0 21 21">
        <path id="Icon_material-close" data-name="Icon material-close" d="M28.5,9.615,26.385,7.5,18,15.885,9.615,7.5,7.5,9.615,15.885,18,7.5,26.385,9.615,28.5,18,20.115,26.385,28.5,28.5,26.385,20.115,18Z" transform="translate(-7.5 -7.5)" fill={accentColor}/>
      </svg>

    </div>
      
  )
}
