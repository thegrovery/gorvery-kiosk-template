import React from "react"
import componentStyles from './styles.module.scss'


export default function Button1({ 
  href, text, target, dataAttr
}) {
  return (
    <a 
      href={href ? href : '#'}
      target={target ? target : '_self'}
      className={componentStyles.Button1}
      {...dataAttr && dataAttr}
    >
      {text}
    </a>      
  )
}
