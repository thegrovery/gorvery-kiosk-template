/*===== Ultility Components =====*/
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { BsDownload } from "react-icons/bs";

/*===== Theme Components =====*/


/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function IconWidget({ 
  //Props
  children, id, title, image, imgAlt, 
  backgroundColor, font, 
}) {

  //JS Goes Here
  //console.log(title);
   useEffect(() => {});

  return (
    <div 
      id="VersionInfoIcon"
      className={componentStyles.IconWidget}
      data-bg-color={backgroundColor}
    >
      <span className={componentStyles.inner}><BsDownload/></span>
    </div>
  )
}
