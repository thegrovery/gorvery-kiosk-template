import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import componentStyles from './styles.module.scss'
import Link from 'next/link'

import varStyles from '@styles/vars.module.scss'
import { BsList } from "react-icons/bs";
import $ from 'jquery'

const name = 'BMS CONGRESS ACCESS'

export default function DesktopNav({ children, home }) {

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
      <header className={componentStyles.header}>
        <div className={componentStyles.inner}>
          
          <div className={componentStyles.logo}>
            <Link href="/">
              <a>
                <img src="/images/groverylogo_color.svg" alt=""/>
              </a>
            </Link>
            <Link href="/">
              <a className={componentStyles.siteName}>
                <span >
                  {name}
                </span>
              </a>
            </Link>
          </div>
          
          {/*<div className={componentStyles.buttonWrapper}>
            <div id="headerNavButton" className={componentStyles.navButton}>
              <BsList className={componentStyles.icon} color="#212121" size={45} />
              <BsList className={componentStyles.iconHover} color="#fafafa" size={45} />
            </div>
          </div>*/}
          
          
        </div>
        
      </header>
      
      
    </>
  )
}
