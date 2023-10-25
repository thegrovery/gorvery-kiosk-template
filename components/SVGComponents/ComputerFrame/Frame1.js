/*===== Components =====*/
import React from "react"
import Link from 'next/link'
import ChevronDown from '@components/SVGComponents/ChevronDown'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

/*===== Site Data =====*/
import data from "@data/data.json"

export default function Frame1({ 
  //Props
  id, children
}) {

  //console.log(author);
  let accentColor = data.accentColor1;

  return (
    <div className={componentStyles.Frame1}>
      <svg id="computerOne" width="1400" height="793.83" viewBox="0 0 1400 793.83">
        <defs>
          <clipPath id="clip-path">
            <rect id="content-area-square" width="1258" height="522" transform="translate(58.593 106.799)" fill="#fff"/>
          </clipPath>
        </defs>
        <g id="computerFrameGroup" transform="translate(-4555.346 -1396.972)">
          <path id="computer_stand" d="M5275.057,2263.657l47.566-148.009H5182.555l-57.9,180.153h256.326v-32.144Z" transform="translate(0 -105)" fill="#a69f9f"/>
          <path id="computer_stand_shadow" d="M5275.057,2263.657l47.566-148.009H5182.555l-57.9,180.153h140.067Z" transform="translate(18 -161)" fill="#373231" opacity="0.313"/>
          <g id="computer_box" transform="translate(4555.346 1396.972)" fill="#fff">
            <path d="M 1399 720 L 1 720 L 1 1 L 1399 1 L 1399 720 Z" stroke="none"/>
            <path d="M 2 2 L 2 719 L 1398 719 L 1398 2 L 2 2 M 0 0 L 1400 0 L 1400 721 L 0 721 L 0 0 Z" stroke="none" fill="#707070"/>
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
