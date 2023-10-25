/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import { router } from 'next/router'
import $ from 'jquery'
import Link from 'next/link'


//import Button1 from '@components/Button1'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function BackToHome({ 
  //Props
  id, image, title, 
  previewText, author, date
}) {

  useEffect(() => {
    $(document).ready(function() {
      $("#BackToHome").click(function(){
        router.prefetch("/"); //prefetch next page
        setTimeout(function() { 
            $("#LayoutOuter").attr("data-hidden", "true"); //page transition
            setTimeout(function() { 
                router.push("/"); //move user to next page
            }, 250);
        }, 1000);
      })

    });
  });

  return (
    <div className={componentStyles.BackToHome}>
      <div id="BackToHome" className={componentStyles.area}>
        <p>Back To Home</p>
      </div>
      
    </div>
  )
}
