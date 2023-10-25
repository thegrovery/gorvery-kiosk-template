/*===== Components =====*/
import React, { useState, useEffect } from 'react';
//import Button1 from '@components/Button1'
import PlaceholderContent from '@components/PlaceholderContent'
import Slide from './Slide'
import Asset from './Asset'
import $ from 'jquery'
import '@scripts/script.js';

/*===== Swiper Imports =====*/
import { useSwiper } from 'swiper/react';
import SwiperCore, { Controller, Navigation, Pagination, A11y, Autoplay, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Controller, Navigation, Pagination, A11y, Autoplay, EffectCoverflow]);

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function ContentEnrollment({ 
  //Props
  id, image, title, 
  previewText, author, date, effect, middle
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
          hashNavigation= {{
              replaceState: true,
            }}

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

        //URL parameter navigation
          onSwiper={(swiper, slideID) => swiper.slideTo(slideID, 0)}
          
        //Debug
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
      >

        <SwiperSlide className={componentStyles.SlideOutter} data-hash="slide1">
          <div className={componentStyles.SlideInner}>
            
            <Slide
              slideID="slide-1"
              image="/images/groverylogo_color.svg"
              imageAlt="The Grovery"
              titleCopy="Options to Enroll"
              bodyCopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus at urna condimentum mattis pellentesque id. Integer vitae justo eget magna fermentum iaculis eu non diam. Mauris pharetra et ultrices neque ornare aenean. Faucibus in ornare quam viverra orci sagittis. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Amet massa vitae tortor condimentum lacinia. Risus sed vulputate odio ut enim blandit volutpat. Et netus et malesuada fames ac turpis. Lectus magna fringilla urna porttitor rhoncus dolor. Ultrices vitae auctor eu augue ut lectus arcu. Eget dolor morbi non arcu risus quis varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus at urna condimentum mattis pellentesque id. Integer vitae justo eget magna fermentum iaculis eu non diam. Mauris pharetra et ultrices neque ornare aenean. Faucibus in ornare quam viverra orci sagittis. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Amet massa vitae tortor condimentum lacinia. Risus sed vulputate odio ut enim blandit volutpat. Et netus et malesuada fames ac turpis. Lectus magna fringilla urna porttitor rhoncus dolor. Ultrices vitae auctor eu augue ut lectus arcu. Eget dolor morbi non arcu risus quis varius. "
            >
              <PlaceholderContent/>
            </Slide>

          </div>
        </SwiperSlide>

        <SwiperSlide className={componentStyles.SlideOutter} data-hash="slide2">
          <div className={componentStyles.SlideInner}>
            
            <Slide
              slideID="slide-2"
              image="/images/groverylogo_color.svg"
              imageAlt="The Grovery"
              titleCopy="How to Complete the Enrollment Form"
              bodyCopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus at urna condimentum mattis pellentesque id. Integer vitae justo eget magna fermentum iaculis eu non diam. Mauris pharetra et ultrices neque ornare aenean. Faucibus in ornare quam viverra orci sagittis. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Amet massa vitae tortor condimentum lacinia. Risus sed vulputate odio ut enim blandit volutpat. Et netus et malesuada fames ac turpis. Lectus magna fringilla urna porttitor rhoncus dolor. Ultrices vitae auctor eu augue ut lectus arcu. Eget dolor morbi non arcu risus quis varius."
            >
              <PlaceholderContent/>
            </Slide>

          </div>
        </SwiperSlide>

        <SwiperSlide className={componentStyles.SlideOutter} data-hash="slide3">
          <div className={componentStyles.SlideInner}>
            
            <Slide
              slideID="slide-3"
              image="/images/groverylogo_color.svg"
              imageAlt="The Grovery"
              titleCopy="Provider Portal (myBMScases.com)"
              bodyCopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus at urna condimentum mattis pellentesque id. Integer vitae justo eget magna fermentum iaculis eu non diam. Mauris pharetra et ultrices neque ornare aenean. Faucibus in ornare quam viverra orci sagittis. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Amet massa vitae tortor condimentum lacinia. Risus sed vulputate odio ut enim blandit volutpat. Et netus et malesuada fames ac turpis. Lectus magna fringilla urna porttitor rhoncus dolor. Ultrices vitae auctor eu augue ut lectus arcu. Eget dolor morbi non arcu risus quis varius."
            >
              <PlaceholderContent/>
            </Slide>

          </div>
        </SwiperSlide>

        <SwiperSlide className={componentStyles.SlideOutter} data-hash="slide4">
          <div className={componentStyles.SlideInner}>
            
            <Slide
              slideID="slide-4"
              image="/images/groverylogo_color.svg"
              imageAlt="The Grovery"
              titleCopy="Annexus / AssistPoint Enrollment"
              bodyCopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus at urna condimentum mattis pellentesque id. Integer vitae justo eget magna fermentum iaculis eu non diam. Mauris pharetra et ultrices neque ornare aenean. Faucibus in ornare quam viverra orci sagittis. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Amet massa vitae tortor condimentum lacinia. Risus sed vulputate odio ut enim blandit volutpat. Et netus et malesuada fames ac turpis. Lectus magna fringilla urna porttitor rhoncus dolor. Ultrices vitae auctor eu augue ut lectus arcu. Eget dolor morbi non arcu risus quis varius."
            >
              <PlaceholderContent/>
            </Slide>

          </div>
        </SwiperSlide>

        <SwiperSlide className={componentStyles.SlideOutter} data-hash="slide5">
          <div className={componentStyles.SlideInner}>
            
            <Slide
              slideID="slide-5"
              image="/images/groverylogo_color.svg"
              imageAlt="The Grovery"
              titleCopy="Options to Enroll"
              bodyCopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus at urna condimentum mattis pellentesque id. Integer vitae justo eget magna fermentum iaculis eu non diam. Mauris pharetra et ultrices neque ornare aenean. Faucibus in ornare quam viverra orci sagittis. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Amet massa vitae tortor condimentum lacinia. Risus sed vulputate odio ut enim blandit volutpat. Et netus et malesuada fames ac turpis. Lectus magna fringilla urna porttitor rhoncus dolor. Ultrices vitae auctor eu augue ut lectus arcu. Eget dolor morbi non arcu risus quis varius."
            >
              <PlaceholderContent/>
            </Slide>

          </div>
        </SwiperSlide>

      </Swiper>

      
  )
}
