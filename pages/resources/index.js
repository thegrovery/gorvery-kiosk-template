/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import { router } from 'next/router'
import $ from 'jquery'
import Link from 'next/link'
import interact from 'interactjs'
import Layout, { siteData } from '@components/layout'
import DragDrop from '@components/DragDrop'
//import DoorSection from '@components/DoorSection'
import DynamicHeader from '@components/DynamicHeader'
import DynamicFooter from '@components/DynamicFooter'
import DoorBG from '@components/SVGComponents/DoorBG'

/*===== Styles =====*/
import pageStyles from '@styles/pages.module.scss'

/*===== Posts Data =====*/
import { getSortedPostsData } from '@lib/posts'
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

/*===== Page Content =====*/
export default function Home({ allPostsData }) {

  //console.log(author);
    useEffect(() => {

      
      const actionState = document.querySelector("#LayoutOuter")
      actionState.setAttribute("data-action-state","none");

    });

  return (
    <Layout 
      resources
      pageActionState="lvl-2"
      backButtonUrl="/"
      cardTooltipText={[<h2>Explore the Building!</h2> , <p>Drag the access card to a door on the left and release it to enter that room.</p>]}
    >
      
      <Head>
        <title>Resources | {siteData.siteTitleBase}</title>
      </Head>
      <div className={pageStyles.pageLayout}>
        <DynamicHeader
          heading={["", <strong>Patient Resources </strong>]}
          subhead="BMS Access Support offers resources for patients who have been prescribed select BMS medications, including insurance information, online tools, and answers to common coverage questions."
        />

        <div className={pageStyles.pageLevel2}>
                    
          <section className={pageStyles.mainSection}>
            <DoorBG resources/>
          </section>
        </div>

        <DynamicFooter
          dynamicText=""
        />
      </div>
            
    </Layout>
  )
}


