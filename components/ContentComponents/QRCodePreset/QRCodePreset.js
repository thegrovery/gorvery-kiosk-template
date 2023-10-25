/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import ZoomIcon from '@components/SVGComponents/ZoomIcon'
import Tooltip from './Tooltip.js'
import QRCode from "react-qr-code";
//import tippy, {inlinePositioning} from 'tippy.js';

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function QRCodePreset({ 
  //Props
  link, toolTipText, toolTipPlacement, color, 
}) {
  //console.log(author);
  useEffect(() => {
    //JS GOES HERE
    /*tippy('[data-qr-code-tooltip]', {
      //placement: 'right',
      arrow: true,
      theme: 'purple',
      animation: 'fade',
      //interactive: true,
      showOnCreate: true,
      showOnInit: true,
      hideOnClick: false,
      trigger: "manual",
      zIndex: 1,
      appendTo: 'parent',
      inlinePositioning: true,
      plugins: [inlinePositioning],
    });*/
  });

  return (
    <div className={componentStyles.QRCodePreset}>
      <QRCode 
          value={link ? link : "https://bms-kiosk-staging.netlify.app/"}
          size={256}
          bgColor="#ffffff"
          fgColor="#212121"
          style={{ height:"auto", width:"200px" }}
         /* data-qr-code-tooltip
          data-tippy-content={toolTipText}
          data-tippy-placement={toolTipPlacement ? toolTipPlacement : "right"}*/
        />
        {toolTipText &&
      <Tooltip 
          text={toolTipText}
          placement={toolTipPlacement}
        />
        }
        
    </div>
  )
}
