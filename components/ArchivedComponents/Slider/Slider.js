/*===== Components =====*/
import React from "react"
//import Button1 from '@components/Button1'
import Slide from './Slide'

/*===== Swiper Imports =====*/
import SwiperCore, { Controller, Navigation, Pagination, A11y, Autoplay, EffectCoverflow, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Controller, Navigation, Pagination, A11y, Autoplay, EffectCoverflow, Virtual]);

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function Slider({ 
  //Props
  id, image, title, 
  previewText, author, date
}) {

  //console.log(author);

  return (
    <>
      <style jsx>{`
        
      `}</style>

      <Swiper
          className={componentStyles.Slider}
          //Settings
          centeredSlides={true}
          spaceBetween={100}
          slidesPerView={1}
          loop={true}
          speed={1000}
          preventClicks={false}
          //virtual={{enabled: true}}
          initialSlide={0}
          
          //Navigation
          navigation
          pagination={{ clickable: true }}

          //Actions
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >

          <SwiperSlide className={componentStyles.SlideOutter}>
            <div className={componentStyles.SlideInner}>
              
              <Slide
                image="/images/planet-caravan-studios-logo.png"
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
                image="/images/planet-caravan-studios-logo.png"
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
                image="/images/planet-caravan-studios-logo.png"
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
                image="/images/planet-caravan-studios-logo.png"
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
                image="/images/planet-caravan-studios-logo.png"
                imageAlt="Planet Caravan"
                titleCopy="BasicSlide Component"
                bodyCopy="This slide is its own component, with 
                  image, imageAlt, titleCopy, and bodyCopy props."
              />

            </div>
          </SwiperSlide>

        </Swiper>
    </>
    

      
  )
}
