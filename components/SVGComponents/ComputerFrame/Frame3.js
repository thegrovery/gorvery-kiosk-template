/*===== Components =====*/
import React from "react"
import Link from 'next/link'
import ChevronDown from '@components/SVGComponents/ChevronDown'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

/*===== Site Data =====*/
import data from "@data/data.json"

export default function Frame3({ 
  //Props
  id, children
}) {

  //console.log(author);
  let accentColor = data.accentColor1;

  return (
    <div className={componentStyles.Frame3}>
      <svg id="ComputerThree" width="1400" height="825.343" viewBox="0 0 1400 825.343">
        <g id="contentBoxGroup" transform="translate(12.407 1.201)">
          <rect id="content-area-square" width="1258" height="522" transform="translate(58.593 106.799)" fill="#fff"/>
        </g>
        <g id="computerFrameGroup" transform="translate(-4555.346 -1396.972)">
          <path id="Path_64" data-name="Path 64" d="M5275.057,2263.657l47.566-148.009H5182.555l-47.826,148.009Z" transform="translate(2.024 -42.076)" fill="#eee7e7" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.467"/>
          <path id="Path_3508" data-name="Path 3508" d="M5275.057,2263.657l47.566-148.009H5182.555l-57.9,180.153h140.067Z" transform="translate(34.024 -140.076)" fill="#373231" opacity="0.313"/>
          <g id="computer_box" transform="translate(4555.346 1396.972)" fill="#fff" stroke="#707070" stroke-width="2">
            <rect width="1400" height="721" stroke="none"/>
            <rect x="1" y="1" width="1398" height="719" fill="none"/>
          </g>
          <rect id="computer_bottombar" width="1393.008" height="56.268" transform="translate(4558.752 2058.381)" fill="#eee7e7"/>
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
