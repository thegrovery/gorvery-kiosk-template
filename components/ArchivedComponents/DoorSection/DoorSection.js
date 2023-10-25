/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import { router } from 'next/router'
import $ from 'jquery'
import Door from "./Door"
import ContentAccess from "./ContentAccess"
import ContentEnrollment from "./ContentEnrollment"
import ContentFinancial from "./ContentFinancial"
import ContentResources from "./ContentResources"
import Container from '@components/Container'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function DoorSection({ 
  //Props
  access, enrollment, financial, resources
}) {

  //console.log(author);
  useEffect(() => {
    $(document).ready(function() {
      let doorLink = "";
      //OPEN/CLOSE DOORS
      $(".Door").click(function(){
        //console.log("click");
        $(".Door").attr("data-active", "inactive"); //reset doors

        if( $(this).attr("data-active") == "active"){
          //Don't do the thing
          $(this).attr("data-active", "inactive");
        }else{
          //Do the thing
          $(this).attr("data-active", "active");
          doorLink = $(this).attr("data-link");
          router.prefetch(doorLink); //prefetch next page
          setTimeout(function() { 
              $("#LayoutOuter").attr("data-hidden", "true"); //page transition
              setTimeout(function() { 
                  router.push(doorLink); //move user to next page
              }, 250);
          }, 1000);
        }

      });
      //END door function

    });
  });

  return (
    <div className={componentStyles.DoorSection}>
      
        
        <div className={componentStyles.layout}>
          
          {access && 
            <ContentAccess/>
          }
          {enrollment && 
            <ContentEnrollment/>
          }
          {financial && 
            <ContentFinancial/>
          }
          {resources && 
            <ContentResources/>
          }
                    
        </div>

      
    </div>
  )
}
