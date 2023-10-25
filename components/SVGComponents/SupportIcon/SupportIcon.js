/*===== Components =====*/
import React from "react"

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function SupportIcon({ 
  //Props
  id, children, fillColor
}) {

  //console.log(author);

  return (
    <div className={componentStyles.SupportIcon}>
      <svg xmlns="http://www.w3.org/2000/svg" width="31.843" height="41.187" viewBox="0 0 31.843 41.187">
        <g id="Group_1399" data-name="Group 1399" transform="translate(-3826.156 -3997.667)">
          <text id="_" data-name="?" transform="translate(3836.778 4025.667)" fill="#fff" fontSize="26" ><tspan x="0" y="0">?</tspan></text>
          <path id="Path_36" data-name="Path 36" d="M3855.855,4038.854a1.227,1.227,0,0,1-.858-.351l-6.991-6.869h-20.625a1.225,1.225,0,0,1-1.225-1.224v-27.073a1.226,1.226,0,0,1,1.225-1.224h29.393a1.226,1.226,0,0,1,1.225,1.224v34.292a1.226,1.226,0,0,1-1.225,1.225h-.919m-27.249-34.292v24.623h19.9a1.229,1.229,0,0,1,.858.351l6.184,6.076v-31.05Z" fill="#fff"/>
        </g>
      </svg>

    </div>
      
  )
}
