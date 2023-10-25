/*===== Ultility Components =====*/
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

/*===== Theme Components =====*/
import IconWidget from './IconWidget'
import NoticeInfo from './NoticeInfo'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

export default function Data({ 
  //Props
  children, versionNumber, updatePercentComplete,
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
    <>
      <NoticeInfo
        versionNumber="0.1.1"
        updatePercentComplete="33%"
        totalPercentComplete="75%"
      >
        <ul>
          <li>Previous Update - Styleguide page</li>
          <li>Latest Update - Version Info component</li>
          <li>Next Update - Device &amp; Browser detection</li>
        </ul>
      </NoticeInfo>
    </>
  )
}
