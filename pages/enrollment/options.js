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

/*===== Styles =====*/
import utilStyles from '@styles/utils.module.css'
import pageStyles from '@styles/pages.module.scss'

let title = "Options To Enroll";
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
    <Layout enrollment pageActionState="lvl-3" backButtonUrl="/enrollment">
      
      <Head>
        <title>{title} | {siteData.siteTitleBase}</title>
      </Head>
      <div className={pageStyles.pageLayout} data-bg-color="cream">
        {/*Header*/}
        <DynamicHeader
          heading={["Options to Enroll in BMS ", <strong>Access Support</strong>]}
        />

        {/*Content*/}
        <div className={pageStyles.pageLevel3}>     
          <TransitionScreen screen="1"/>     
          <section className={pageStyles.mainSection}>



            <ComputerFrame frame="1">
              {/*Inner Page Content*/}

              <div className={pageStyles.twoColumn}>
                {/*LEFT CELL*/}
                <div className={pageStyles.cell}>
                  
                  <BlockQuote icon="/images/icons/contentPrinterIcon.svg">
                    <h2>Option 1: Enroll via Fax</h2>
                    <p>Obtain enrollment forms at BMSAccessSupport.com, under the Enrollment tab. <a data-page-transition="/enrollment/enrollment-form" data-delay="0">Tap for information on how to complete the enrollment form</a>.</p>
                  </BlockQuote>

                  <BlockQuote icon="/images/icons/contentComputerScreen.svg">
                    <h2>Option 2: Enroll via the Provider Portal</h2>
                    <p><a data-page-transition="/enrollment/provider-portal" data-delay="0">Visit MyBMSCases.com</a> to submit completed forms with physician and patient signatures through the provider portal.</p>
                  </BlockQuote>

                  <p>Once the enrollment form has been submitted and a Benefits Review has been conducted, you will receive your patient’s summary of healthcare benefits.</p>

                  <p>Please Note: While enrollment in the BMS Access Support program is required to receive certain support offerings, such as Benefits Reviews and appeals assistance, patients can also access select support offerings through the online resources found at BMSAccessSupport.com.</p>
                </div>               

                {/*RIGHT CELL*/}
                <div className={pageStyles.cell} data-centered>
                  <PdfThumbnail
                    name="Enrollment Form"
                    url="/pdf/Oncology_Enrollment_Form_EN.pdf"
                    thumbnail="/images/thumbnails/Oncology_Enrollment_Form_EN.jpg"
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


