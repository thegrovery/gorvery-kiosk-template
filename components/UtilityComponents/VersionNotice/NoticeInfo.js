/*===== Ultility Components =====*/
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { BsCodeSlash } from "react-icons/bs";

/*===== Theme Components =====*/
import ProgressBar from './ProgressBar'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function NoticeInfo({ 
  //Props
  children, projectName, versionNumber, updatePercentComplete,
  totalPercentComplete, notes, currentUpdate, nextUpdate
}) {


  //JS Goes Here
  //console.log(title);
   useEffect(() => {});

  return (
    <div 
      id="VersionInfoBox"
      className={componentStyles.NoticeInfo}
      data-active="inactive"
    >
      
      <div className={componentStyles.version}>
        <div className={componentStyles.cell}>{projectName} /// v.{versionNumber}</div>
        <div className={componentStyles.cell}>
          Sprint Completion: {updatePercentComplete}
          <ProgressBar progress={updatePercentComplete}/>
        </div>
        <div className={componentStyles.cell}>
          Total Completion: {totalPercentComplete}
          <ProgressBar progress={totalPercentComplete}/>
        </div>
        
      </div>
      
      <hr/>
      
      <div className={componentStyles.notes}>
        <div>Notes:</div>
        <div>
          {notes}
        </div>
      </div>

    </div>
  )
}
