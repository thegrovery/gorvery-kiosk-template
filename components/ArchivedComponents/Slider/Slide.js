/*===== Components =====*/
import React from "react"
//import Button1 from '@components/Button1'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function Slide({ 
  //Props
  image, imageAlt,
  titleCopy, bodyCopy
}) {
  return (
    <div className={componentStyles.SwiperSlide}>
      
      <div className={componentStyles.image}>
        <img src={image} alt={imageAlt} />
      </div>

      <div className={componentStyles.copy}>
        <p className={componentStyles.title}>
          {titleCopy}
        </p>
        <p className={componentStyles.body}>
          {bodyCopy}
        </p>
      </div>

    </div>
  )
}
