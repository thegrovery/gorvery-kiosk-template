/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import { router } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import $ from 'jquery'
import Layout, { siteData } from '@components/layout'

import DynamicHeader from '@components/DynamicHeader'
import DynamicFooter from '@components/DynamicFooter'
import ComputerFrame from '@components/SVGComponents/ComputerFrame'
import TransitionScreen from '@components/SVGComponents/TransitionScreen'
import BlockQuote from '@components/ContentComponents/BlockQuote'
import PdfThumbnail from '@components/ContentComponents/PdfThumbnail'
import QRCodePreset from "@components/ContentComponents/QRCodePreset";

/*===== Styles =====*/
import utilStyles from '@styles/utils.module.css'
import pageStyles from '@styles/pages.module.scss'

let title = "Using the My BMS Cases Provider Portal";
//{["Using the My BMS Cases ", <strong>Provider Portal</strong>]}
let footerText = "";

export default function Post({ postData }) {

  useEffect(() => {

    //define function
          function updateActionState(stateValue, delay, thread) {
            setTimeout(function() {
              const LayoutOuter = document.querySelector("#LayoutOuter");
              if(thread == "load"){
                LayoutOuter.setAttribute("data-action-state-load", stateValue);
              } else if(thread == "transition"){
                LayoutOuter.setAttribute("data-action-state-transition", stateValue);
              } else if(thread == "tooltips"){
                LayoutOuter.setAttribute("data-action-state-tooltips", stateValue);
              } else if(thread == "cards"){
                LayoutOuter.setAttribute("data-action-state-cards", stateValue);
              }else if(thread == "cards-show"){
                LayoutOuter.setAttribute("data-action-state-cards-show", stateValue);
              } else if(thread == "page"){
                LayoutOuter.setAttribute("data-action-state-page", stateValue);
              } else if(thread == "home-bg"){
                LayoutOuter.setAttribute("data-action-state-home-bg", stateValue);
              } else if(thread == "transition-screen"){
                LayoutOuter.setAttribute("data-action-state-transition-screen", stateValue);
              } else{
                LayoutOuter.setAttribute("data-action-state", stateValue);
              }
            }, delay);
          }

    function transtionScreenAnimationChain(){
       
         console.log("page lvl 3 detected");
          updateActionState('initial', 0, 'transition-screen');
          updateActionState('zoom', 2000, 'transition-screen');
          updateActionState('fade', 3500, 'transition-screen');
          updateActionState('end', 5000, 'transition-screen');
       
    }

    transtionScreenAnimationChain();
  });

  
  return (
    <Layout 
      access 
      pageActionState="lvl-3"
      backButtonUrl="/access"
    >
      
      <Head>
        <title>{title} | {siteData.siteTitleBase}</title>
      </Head>
      <div className={pageStyles.pageLayout}>
        {/*Header*/}
        <DynamicHeader
          heading={["Billing & Coding Assistance"]}
        />

        {/*Content*/}
        <div className={pageStyles.pageLevel3} data-bg-color="cream">          
          <TransitionScreen screen="6"/>   
          <section className={pageStyles.mainSection}>
            <ComputerFrame frame="4">
              {/*Inner Page Content*/}

              <div className={pageStyles.twoColumn}>
                {/*LEFT CELL*/}
                <div className={pageStyles.cell}>

                  <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                  <BlockQuote icon="/images/icons/contentClipboardIcon.svg">
                    <p><strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                  </BlockQuote>

                  <BlockQuote icon="/images/icons/contentClipboardIcon.svg">
                    <p><strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                  </BlockQuote>

                  <BlockQuote icon="/images/icons/contentListIcon.svg">
                    <p><em>Lorem ipsum dolor sit amet</em>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                  </BlockQuote>
                  <br/>
                  
                  
                </div>               

                {/*RIGHT CELL*/}
                <div className={pageStyles.cell} data-centered>
                  <img src="https://placehold.co/400x600" alt="" />
                  <QRCodePreset 
                    link="https://www.bmsaccesssupport.bmscustomerconnect.com/?utm_source=bms_congress_access_app&utm_medium=qr_code_scan&utm_campaign=congress_access_event"
                    toolTipText="Scan For Lorem Ipsum"
                    toolTipPlacement="right"
                  />
                </div>

              </div>
            </ComputerFrame>            
          </section>
        </div>        

        {/*Footer*/}
        <DynamicFooter
          dynamicText={footerText}
        />
      </div>
      
      
    </Layout>
  )
}


