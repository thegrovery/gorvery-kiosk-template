/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import ZoomIcon from '@components/SVGComponents/ZoomIcon'
import QRCode from "react-qr-code";
import tippy, {inlinePositioning} from 'tippy.js';

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function Tooltip({ 
  //Props
  children, text, bgColor, placement
}) {

  //console.log(author);
  useEffect(() => {
    //JS GOES HERE
  });

  return (
    <div 
      className={componentStyles.Tooltip}
      data-bg-color={bgColor ? bgColor : "purple"}
      data-placement={placement ? placement : "right"}
    >
      {text}
    </div>
  )
}
