import React from "react"
import Container from '@components/Container'
import componentStyles from './styles.module.scss'

export default function HeroSection({ 
  children, heading, subhead, image, height, backgroundFilter
}) {
  return (
    <>
      <style jsx>{`
        section{
          background-image: url(${image});
        }
      `}</style>

      <section className={componentStyles.HeroSection}>
        {backgroundFilter && 
          <div className={componentStyles.filter}></div>
        }
        <Container width="">
        
          <div className={componentStyles.textContent}>
            {heading && 
              <h1 className={componentStyles.heading}>{heading}</h1>
            }
            {subhead && 
              <p className={componentStyles.subhead}>{subhead}</p>
            }
          </div>
          
          {/*{children &&
            <div className={componentStyles.childContent}>
              {children}
            </div>
          }*/}
        
        </Container>
      </section>
    </>
  )
}
