/*===== Components =====*/
import React from "react"
import Link from 'next/link'
import ChevronDown from '@components/SVGComponents/ChevronDown'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

/*===== Site Data =====*/
import data from "@data/data.json"

export default function Frame4({ 
  //Props
  id, children
}) {

  //console.log(author);
  let accentColor = data.accentColor1;

  return (
    <div className={componentStyles.Frame4}>
      <svg id="ComputerFour" width="1400" height="788.464" viewBox="0 0 1400 788.464">
        <g id="contentBoxGroup" transform="translate(12.407 1.201)">
          <rect id="content-area-square" width="1258" height="522" transform="translate(58.593 106.799)" fill="#fff"/>
        </g>
        <g id="computerFrameGroup" transform="translate(-4555.346 -1396.972)">
          <g id="computer_stand" transform="translate(0 -10)">
            <g id="computer_stand_bg" transform="translate(5146.346 2115.436)" fill="#fefcf7" stroke="#908a89" stroke-width="2">
              <rect width="169" height="80" stroke="none"/>
              <rect x="1" y="1" width="167" height="78" fill="none"/>
            </g>
            <line id="accentline2" y2="24" transform="translate(5159.846 2164.936)" fill="none" stroke="#908a89" stroke-linecap="round" stroke-width="2"/>
            <line id="accentline1" y1="12" transform="translate(5159.846 2128.936)" fill="none" stroke="#908a89" stroke-linecap="round" stroke-width="2"/>
          </g>
          <g id="computer_box" transform="translate(4555.346 1396.972)" fill="#fefcf7" stroke="#908a89" stroke-width="2">
            <rect width="1400" height="721" rx="6" stroke="none"/>
            <rect x="1" y="1" width="1398" height="719" rx="5" fill="none"/>
          </g>
          <g id="computer_box_inner" transform="translate(4585.346 1423.436)" fill="#fff" stroke="#908a89" stroke-width="2">
            <rect width="1341" height="644" stroke="none"/>
            <rect x="1" y="1" width="1339" height="642" fill="none"/>
          </g>
          <g id="computer_btn" transform="translate(5223.346 2083.436)" fill="#fefcf7" stroke="#908a89" stroke-width="2">
            <circle cx="8" cy="8" r="8" stroke="none"/>
            <circle cx="8" cy="8" r="7" fill="none"/>
          </g>
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
