/*===== Components =====*/
import React, { useState, useEffect } from 'react';
//import Button1 from '@components/Button1'
import Slide from './Slide'
import $ from 'jquery'
import '@scripts/script.js';

/*===== Swiper Imports =====*/
import SwiperCore, { Controller, Navigation, Pagination, A11y, Autoplay, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Controller, Navigation, Pagination, A11y, Autoplay, EffectCoverflow]);

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function SliderFX({ 
  //Props
  id, image, title, 
  previewText, author, date, effect, middle
}) {

  useEffect(() => {
      $(document).ready(function() {
        //JS GOES HERE

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

      });
    });

  return (
    <Swiper
        id="SliderFX"
        data-slider="SliderFX"
        className={componentStyles.Slider}
        //Settings
        centeredSlides={true}
        spaceBetween={-250}
        slidesPerView={1}
        //loop={true}
        speed={1000}
        preventClicks={false}
        //virtual={{enabled: true}}
        initialSlide={2}
        
        //Navigation
        navigation
        pagination={{ clickable: true }}

        //{effect &&
          //Effects
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 80,
            stretch: 0,
            depth: 100,
            modifier: 0.75,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Pagination]}
        //}

        //Actions
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >

        <SwiperSlide className={componentStyles.SlideOutter}>
          <div className={componentStyles.SlideInner}>
            
            <Slide
              image="/images/groverylogo_color.svg"
              imageAlt="Planet Caravan"
              titleCopy="BasicSlide Component"
              bodyCopy="This slide is its own component, with 
                image, imageAlt, titleCopy, and bodyCopy props."
            />

          </div>
        </SwiperSlide>

        <SwiperSlide className={componentStyles.SlideOutter}>
          <div className={componentStyles.SlideInner}>
            
            <Slide
              image="/images/groverylogo_color.svg"
              imageAlt="Planet Caravan"
              titleCopy="BasicSlide Component"
              bodyCopy="This slide is its own component, with 
                image, imageAlt, titleCopy, and bodyCopy props."
            />

          </div>
        </SwiperSlide>

        <SwiperSlide className={componentStyles.SlideOutter}>
          <div className={componentStyles.SlideInner}>
            
            <Slide
              image="/images/groverylogo_color.svg"
              imageAlt="Planet Caravan"
              titleCopy="BasicSlide Component"
              bodyCopy="This slide is its own component, with 
                image, imageAlt, titleCopy, and bodyCopy props."
            />

          </div>
        </SwiperSlide>

        <SwiperSlide className={componentStyles.SlideOutter}>
          <div className={componentStyles.SlideInner}>
            
            <Slide
              image="/images/groverylogo_color.svg"
              imageAlt="Planet Caravan"
              titleCopy="BasicSlide Component"
              bodyCopy="This slide is its own component, with 
                image, imageAlt, titleCopy, and bodyCopy props."
            />

          </div>
        </SwiperSlide>

        <SwiperSlide className={componentStyles.SlideOutter}>
          <div className={componentStyles.SlideInner}>
            
            <Slide
              image="/images/groverylogo_color.svg"
              imageAlt="Planet Caravan"
              titleCopy="BasicSlide Component"
              bodyCopy="This slide is its own component, with 
                image, imageAlt, titleCopy, and bodyCopy props."
            />

          </div>
        </SwiperSlide>

      </Swiper>

      
  )
}
