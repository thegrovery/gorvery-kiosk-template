/*===== Components =====*/
import React, { useState, useEffect } from 'react';
//import Button1 from '@components/Button1'
import Slide from './Slide'
import Asset from './Asset'
import ContentAccess from "./ContentAccess"
import ContentEnrollment from "./ContentEnrollment"
import ContentFinancial from "./ContentFinancial"
import ContentResources from "./ContentResources"
import $ from 'jquery'
import '@scripts/script.js';

/*===== Swiper Imports =====*/
import { useSwiper } from 'swiper/react';
import SwiperCore, { Controller, Navigation, Pagination, A11y, Autoplay, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Controller, Navigation, Pagination, A11y, Autoplay, EffectCoverflow]);

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function SliderFX({ 
  //Props
  access, enrollment, financial, resources
}) {

  useEffect(() => {
      $(document).ready(function() {
        //JS GOES HERE
        //const swiper = useSwiper();
        //Navigate by clicking on next slide,
        //workaround because Swiper method wasn't working
          $(".swiper-slide").click(function(){
            console.log("slide click");
            if($(this).hasClass("swiper-slide-next")){
              console.log("slide next click");
              $(".swiper-button-next").click();
            } else if($(this).hasClass("swiper-slide-prev")){
              console.log("slide prev click");
              $(".swiper-button-prev").click();
            }
          });

        //URL parameter-based navigation
          let urlParams = new URLSearchParams(window.location.search);
          let slideID;
          //if URL parameter exists
          if(urlParams.has('slide')){
            slideID = urlParams.get('slide');
            //swiper.slideTo(slideID, 0)
          }else{
            //do nothing
          }

      });
    });

  return (
    <>
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
    </>
  )
}
