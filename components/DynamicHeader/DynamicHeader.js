import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { BsList } from "react-icons/bs";
//import BMSLogo from '@components/SVGComponents/BMSLogo'
import $ from 'jquery'

import componentStyles from './styles.module.scss'

import varStyles from '@styles/vars.module.scss'

const name = 'BMS CONGRESS ACCESS'

export default function DynamicHeader({ 
  children, home, heading, subhead
}) {

  useEffect(() => {
    $(document).ready(function() {
      
      //OPEN
      $("#headerNavButton").click(function(){
        //console.log("click");
        navMenuOpenClose();
      });

      //CLOSE
      $(".navClose").click(function(){
        navMenuOpenClose();
      });

      function navMenuOpenClose(){
        if($("#NavMenu").attr("data-active") == "active"){
          $("#NavMenuWrapper").attr("data-active", "inactive");
          $("#NavMenu").attr("data-active", "inactive");
          $("#NavMenuBackdrop").attr("data-active", "inactive");
        }else{
          $("#NavMenuWrapper").attr("data-active", "active");
          $("#NavMenu").attr("data-active", "active");
          $("#NavMenuBackdrop").attr("data-active", "active");
        }        
      }

    });
  });

  return (
    <>

      {/* HEADER */}
      <header className={componentStyles.DynamicHeader}>
        <div className={componentStyles.inner}>
          
          {/*Logo/Home Link*/}
          <div className={componentStyles.logo}>
            {/*<Link href="/">*/}
              <a data-page-transition="/" data-delay="0">
                <img src="/images/grovery-logo.svg" alt="The Grovery"/>
              </a>
            {/*</Link>*/}

          </div>

          {/*Dynamic Text Section*/}
          <div className={componentStyles.text}>
            <h1 className={componentStyles.heading}>
              {heading}
            </h1>
            <p className={componentStyles.subhead}>{subhead}</p>
          </div>
          
        </div>
        
      </header>
      
      
    </>
  )
}
