/*===== Components =====*/
import React from "react"
import Link from 'next/link'
import ChevronDown from '@components/SVGComponents/ChevronDown'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

/*===== Site Data =====*/
import data from "@data/data.json"

export default function Frame2({ 
  //Props
  id, children
}) {

  //console.log(author);
  let accentColor = data.accentColor1;

  return (
    <div className={componentStyles.Frame2}>
      <svg id="ComputerTwo" width="1400" height="797" viewBox="0 0 1400 797">
        <defs>
          <clipPath id="clip-path">
            <rect id="content-area-square" width="1258" height="522" transform="translate(58.593 106.799)" fill="#fff"/>
          </clipPath>
        </defs>
        <g id="computerFrameGroup" transform="translate(-4555.346 -1396.972)">
          <g id="computer_stand2" transform="translate(5234.345 2113.972)" fill="#eee7e7" stroke="#707070" stroke-width="2">
            <rect width="50" height="80" stroke="none"/>
            <rect x="1" y="1" width="48" height="78" fill="none"/>
          </g>
          <rect id="computer_stand2_shadow" width="50" height="33" transform="translate(5234.345 2113.972)" fill="#595454" opacity="0.305"/>
          <g id="computer_box" transform="translate(4555.346 1396.972)" fill="#fff" stroke="#707070" stroke-width="2">
            <rect width="1400" height="721" stroke="none"/>
            <rect x="1" y="1" width="1398" height="719" fill="none"/>
          </g>
          <rect id="computer_bottombar" width="1393.008" height="56.268" transform="translate(4558.752 2058.381)" fill="#eee7e7"/>
          <rect id="computer_topbar" width="1395" height="51.067" transform="translate(4557.752 1399.172)" fill="#eee7e7"/>
          <ellipse id="camera" cx="12.86" cy="13.149" rx="12.86" ry="13.149" transform="translate(5246.067 1412.125)" fill={accentColor}/>
        </g>
        
        {/*<foreignObject className={componentStyles.content} x="0" y="0" width="100%" height="100%">
          <div className={componentStyles.contentInner} data-overflow-detect>
            {children}
          </div>
          <div className={componentStyles.scrollNotice}>
            Scroll to continue
            <ChevronDown/>
          </div>
        </foreignObject>*/}

      </svg>

      <div className={componentStyles.content} x="0" y="0" width="100%" height="100%">
        <div className={componentStyles.contentInner} data-overflow-detect>
          {children}
        </div>
        <div className={componentStyles.scrollNotice}>
          Scroll to continue
          <ChevronDown/>
        </div>
      </div>

    </div>
      
  )
}
