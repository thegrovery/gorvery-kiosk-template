/*===== Components =====*/
  import React, { useState, useEffect } from 'react';
  import { router } from 'next/router'
  import Head from 'next/head'
  import Link from 'next/link'
  import $ from 'jquery'
  import interact from 'interactjs'
  import Layout, { siteData } from '@components/layout'
  import DynamicHeader from '@components/DynamicHeader'
  import DynamicFooter from '@components/DynamicFooter'
  import DragDrop from '@components/DragDrop'
  import IDCard from '@components/IDCard'
  import HomeBG from '@components/SVGComponents/HomeBG'

/*===== Styles =====*/
  import pageStyles from '@styles/pages.module.scss'

/*===== Site Data =====*/
  import data from "@data/data.json"

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
   /* window.onload = function() {
      init();
    }*/
   });

  return (
    <Layout home pageActionState="lvl-1" >
      
      <Head>
        <title>Home | {siteData.siteTitleBase}</title>
      </Head>
      <div 
        className={pageStyles.pageLayout} 
      >
        
        <DynamicHeader
          
          heading={["The Grovery | ", <strong>Kiosk Experience</strong>]}
          subhead="This template is designed for a fullscreen, touch-based experience.  Drag and drop the below elements to navigate the site.  The site is always locked in to 100% screen height and width, has smooth transitions between pages, and will reset after 2 minutes of inactivity."
        />

        <div className={pageStyles.pageLevel1}>

          <div className={pageStyles.background}>
            <HomeBG/>
          </div>

          <section className={pageStyles.mainSection}>
            <DragDrop/>
          </section>
          
        </div>

        <DynamicFooter
          dynamicText=""
        />
      </div>
      
      
    </Layout>
  )
}
