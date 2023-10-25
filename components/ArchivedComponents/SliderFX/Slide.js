/*===== Components =====*/
import React from "react"
//import Button1 from '@components/Button1'


/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function Slide({ 
  //Props
  image, imageAlt,
  titleCopy, bodyCopy, 
  children, slideID
}) {
  return (
    <div 
      className={componentStyles.SwiperSlide} 
      data-slide-id={slideID}
    >
      
      <div className={componentStyles.content}>
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
      
        {/*<span data-popupcard="card-1">
          <Button1
            text="Learn More"
          />
        </span>*/}
      </div>

      <div className={componentStyles.assets}>
        <div className={componentStyles.inner}>
          {children}
        </div>
      </div>

    </div>
  )
}
