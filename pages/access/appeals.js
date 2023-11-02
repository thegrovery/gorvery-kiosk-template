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

let title = "PA & Appeals Support";
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
          heading={["Section 2, ", <strong>Page 2</strong>]}
        />

        {/*Content*/}
        <div className={pageStyles.pageLevel3} data-bg-color="cream">          
          <TransitionScreen screen="5"/>   
          <section className={pageStyles.mainSection}>
            <ComputerFrame frame="3">
              {/*Inner Page Content*/}

              <div className={pageStyles.twoColumn}>
                {/*LEFT CELL*/}
                <div className={pageStyles.cell}>
                  
                  <BlockQuote icon="/images/icons/contentListIcon.svg">
                  {/*<h2>Prior Authorization (PA)</h2>*/}
                  <h2>Lorem ipsum dolor sit amet</h2>
                  <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                  </ul>
                  </BlockQuote>

                  <h2>Lorem ipsum dolor sit amet</h2>
                  <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                  </ul>

                  <BlockQuote icon="/images/icons/contentClipboardIcon.svg">
                    <h2>Appeals Support </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <ul>
                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    </ul>
                  </BlockQuote>
                  
                  
                  
                </div>               

                {/*RIGHT CELL*/}
                <div className={pageStyles.cell} data-centered>
                  <img src="https://placehold.co/400x400" alt="" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <QRCodePreset 
                    link="https://www.bmsaccessmap.com/opdivo?utm_source=bms_congress_access_app&utm_medium=qr_code_scan&utm_campaign=congress_access_event"
                    toolTipText="Scan to visit BMS Access Payer Map"
                    toolTipPlacement="right"
                  />

                  <br/><br/>

                  <img src="https://placehold.co/400x200" alt="" />
                  <QRCodePreset 
                    link="https://www.bmsaccesssupport.bmscustomerconnect.com/forms-resources?utm_source=bms_congress_access_app&utm_medium=qr_code_scan&utm_campaign=congress_access_event"
                    toolTipText="Scan for PA &amp; Appeals Forms &amp; Resources"
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


