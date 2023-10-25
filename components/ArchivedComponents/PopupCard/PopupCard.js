/*===== Components =====*/
import React from "react"
import Link from 'next/link'


//import Button1 from '@components/Button1'
import { BsXLg } from "react-icons/bs";

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function PopupCard({ 
  //Props
  id, image, title, 
  previewText, author, date
}) {

  //console.log(author);

  return (
    <div 
      className={componentStyles.PopupCard + " popUpCard"}
      data-active="false"
      data-popupcard="card-1"
    >
      <div data-close>
        <BsXLg className={componentStyles.icon} color="#212121" size={45} />
      </div>
      POPUP CARD CONTENT
      
    </div>
  )
}
