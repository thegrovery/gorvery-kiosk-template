/*===== Ultility Components =====*/
import React, { useState, useEffect } from 'react';
import { router } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

/*===== Theme Components =====*/
import IconWidget from './IconWidget'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

export default function PrecacheControl({ 
  //Props
  children, projectName, versionNumber, updatePercentComplete,
  totalPercentComplete, notes, currentUpdate, nextUpdate
}) {

  

   useEffect(() => {
    //JS Goes Here
    //console.log(author);

    //PRECACHE ALL PAGES
    async function processUrls(urls) {
      for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        try {
          router.prefetch(url);
          console.log(`Success while fetching URL ${i + 1}: ${url}`);
        } catch (error) {
          console.error(`Error while fetching URL ${i + 1}: ${url}`, error);
        }
      }
    }

    // Example usage:
    const urlsToProcess = [
      '/enrollment/',
      '/enrollment/options/',
      '/enrollment/enrollment-form/',
      '/enrollment/provider-portal/',
      '/access/',
      '/access/appeals/',
      '/access/benefits/',
      '/access/billing',
      '/financial/',
      '/financial/commercial-patients/',
      '/financial/government-uninsured-patients/',
      '/resources/',
      '/resources/brochures/',
      '/resources/videos/',
    ];

    //processUrls(urlsToProcess);

    
    //Open/Close
    function versionInfoFunctions(){
      //define target elements
      let icon = document.querySelector('#VersionInfoIcon');

      icon.addEventListener('click', () => {
        //precache function
        processUrls(urlsToProcess);
      });
      //end
    }

    //run functions
    versionInfoFunctions();
   });

  return (
    <div className={componentStyles.VersionNotice}>
     
      <IconWidget/>
    </div>
  )
}
