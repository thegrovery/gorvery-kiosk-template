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

let title = "Patient Brochures";
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
    <Layout resources pageActionState="lvl-3" backButtonUrl="/resources">
      
      <Head>
        <title>{title} | {siteData.siteTitleBase}</title>
      </Head>
      <div className={pageStyles.pageLayout}>
        {/*Header*/}
        <DynamicHeader
          heading="Patient Brochures"
        />

        {/*Content*/}
        <div className={pageStyles.pageLevel3} data-bg-color="blue">    
          <TransitionScreen screen="9"/>        
          <section className={pageStyles.mainSection}>
            <ComputerFrame frame="1">
              {/*Inner Page Content*/}

              <div className={pageStyles.twoColumn}>
                {/*LEFT CELL*/}
                <div className={pageStyles.cell}>
                  <BlockQuote icon="/images/icons/contentFormIcon.svg">
                    <p>Patients can download brochures and coverage-related resources that may help answer questions regarding accessing their prescribed BMS medication.</p>
                  </BlockQuote>

                  <p>
                    <strong className={pageStyles.purple}>Understanding Your Healthcare Benefits</strong>
                    <br/>
                    Provides information on how health insurance works and ways BMS Access Support can help
                  </p>
                  <p>
                    <strong className={pageStyles.purple}>Patient Reimbursement Process Journey Map</strong>
                    <br/>
                    A high-level flow map showing potential patient insurance coverage scenarios and claims processing information
                  </p>

                  <p>
                    <strong className={pageStyles.purple}>A Guide to 2023 Medicare Part D Coverage for Specialty Drugs</strong>
                    <br/>
                    A step-by-step guide through each phase of Medicare Part D with patient cost journey examples and additional resources and contact information
                  </p>
                  <p>
                    <strong className={pageStyles.purple}>BMS Access Support Patient Brochure</strong>
                    <br/>
                    An overview of the coverage journey and how we can help you obtain access to your prescribed BMS medications
                  </p>

                  <p>
                    Our resources help provide a better understanding of the health insurance landscape and expectations along the treatment journey. They are located on the Forms &amp; Resources page of the BMS Access Support website.   
                  </p>

                  <QRCodePreset 
                    link="https://www.bmsaccesssupport.bmscustomerconnect.com/forms-resources?utm_source=bms_congress_access_app&utm_medium=qr_code_scan&utm_campaign=congress_access_event"
                    toolTipText="Scan to view Forms &amp; Resources"
                    toolTipPlacement="right"
                  />
                  
                </div>               

                {/*RIGHT CELL*/}
                <div className={pageStyles.cell} data-centered>
                  <PdfThumbnail 
                    thumbnail="/images/thumbnails/Understanding_Healthcare_Benefits_thumb.png"
                    name="Understanding Healthcare Benefits"
                    url="/pdf/Understanding_Healthcare_Benefits.pdf"
                   />
                   <br/>
                  <PdfThumbnail 
                    thumbnail="/images/thumbnails/Patient_Reimbursement_Process_Map_thumb.png"
                    name="Patient Reimbursement Process Map"
                    url="/pdf/Patient_Reimbursement_Process_Map.pdf"
                   />
                   <br/>
                   <PdfThumbnail 
                    thumbnail="/images/thumbnails/NO-US-2200487_A_Guide_to_Medicare_Part_D_2023_thumb2x.jpg"
                    name="Medicare Part D Guide"
                    url="/pdf/A_Guide_to_Medicare_Part_D_2023.pdf"
                   />
                   <br/>
                   <PdfThumbnail 
                    thumbnail="/images/thumbnails/PatientBrochure_Thumb.png"
                    name="BMS Access Support Patient Brochure"
                    url="/pdf/Patient_Brochure.pdf"
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


