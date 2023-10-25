import React from "react"
import componentStyles from './styles.module.scss'

export default function Container({ 
  children, width
}) {
  return (
    <div 
      className={componentStyles.Container}
      data-width={width}
    >
      {children}
    </div>
  )
}
