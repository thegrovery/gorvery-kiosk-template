/*===== Components =====*/
import React from "react"

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

/*===== Site Data =====*/
import data from "@data/data.json"


export default function ChevronDown({ 
  //Props
  id, children, fillColor
}) {

  //console.log(author);
  let accentColor = data.accentColor1;

  return (
    <div className={componentStyles.ChevronDown}>
      <svg xmlns="http://www.w3.org/2000/svg" width="22.243" height="12.621" viewBox="0 0 22.243 12.621">
        <path id="Icon_feather-chevron-down" data-name="Icon feather-chevron-down" d="M9,13.5l9,9,9-9" transform="translate(-6.879 -11.379)" fill="none" stroke={accentColor} stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      </svg>

    </div>
      
  )
}
