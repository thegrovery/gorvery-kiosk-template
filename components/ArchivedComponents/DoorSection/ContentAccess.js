/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import { router } from 'next/router'
import $ from 'jquery'
import Door from "./Door"
import Container from '@components/Container'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function ContentAccess({ 
  //Props
  access, enrollment, financial, resources
}) {

  //console.log(author);
  useEffect(() => {
    
  });

  return (
    <>
      <div className={componentStyles.cell}>
        <Door
          title="Options to Enroll"
          link="/posts/master-post"
        />
      </div>

      <div className={componentStyles.cell}>
        <Door
          title="How to Complete the Enrollment Form"
          link="/posts/master-post"
        />
      </div>

      <div className={componentStyles.cell}>
        <Door
          title="Provider Portal (myBMScases.com)"
          link="/posts/master-post"
        />
      </div>

      <div className={componentStyles.cell}>
        <Door
          title="Annexus / AssistPoint Enrollment"
          link="/posts/master-post"
        />
      </div>

      {/*<div className={componentStyles.cell}>
        <Door
          title="Options to Enroll"
          link="/access-2?slide=5"
        />
      </div>*/}
    </>
  )
}
