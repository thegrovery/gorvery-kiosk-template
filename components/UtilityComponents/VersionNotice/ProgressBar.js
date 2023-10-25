/*===== Ultility Components =====*/
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { BsCodeSlash } from "react-icons/bs";

/*===== Theme Components =====*/


/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function ProgressBar({ 
  //Props
  children, id, progress
}) {

  //JS Goes Here
  //console.log(title);
   useEffect(() => {});

  return (
    <div 
      className={componentStyles.ProgressBar}
      data-progress={progress ? progress : '0%'}
    >
      <div 
        className={componentStyles.progress} 
        /*style={progressStyle}*/
        style={{ width: progress ? progress : '0%' }}
      ></div>
    </div>
  )
}
