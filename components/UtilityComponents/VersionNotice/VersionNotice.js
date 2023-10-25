/*===== Ultility Components =====*/
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

/*===== Theme Components =====*/
import IconWidget from './IconWidget'
import NoticeInfo from './NoticeInfo'
import Data from './Data'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

export default function VersionNotice({ 
  //Props
  children, projectName, versionNumber, updatePercentComplete,
  totalPercentComplete, notes, currentUpdate, nextUpdate
}) {

  

   useEffect(() => {
    //JS Goes Here
    //console.log(author);
    
    //Open/Close
    function versionInfoFunctions(){
      //define target elements
      let icon = document.querySelector('#VersionInfoIcon');
      let infoBox = document.querySelector('#VersionInfoBox');

      icon.addEventListener('click', () => {
        if(infoBox.getAttribute('data-active') == 'active'){
          //already active, set to inactive
          infoBox.setAttribute('data-active', 'inactive');
        }else{
          //set to active
          infoBox.setAttribute('data-active', 'active');
        }
      });
      //end
    }

    //Close by default
    function versionInfoHide(){
      let infoBox = document.querySelector('#VersionInfoBox');
      infoBox.setAttribute('data-active', 'inactive');
      //end
    }

    //run functions
    versionInfoHide();
    versionInfoFunctions();
   });

  return (
    <div className={componentStyles.VersionNotice}>
      <NoticeInfo
        projectName={projectName}
        versionNumber={versionNumber}
        updatePercentComplete={updatePercentComplete}
        totalPercentComplete={totalPercentComplete}
        notes={children}
      />
      {/*<Data/>*/}
      <IconWidget/>
    </div>
  )
}
