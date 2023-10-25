/*===== Components =====*/
import React from "react"
import Link from 'next/link'
import Frame1 from "./Frame1"
import Frame2 from "./Frame2"
import Frame3 from "./Frame3"
import Frame4 from "./Frame4"

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function ComputerFrame({ 
  //Props
  id, children, frame
}) {

  //console.log(author);

  return (
    <div className={componentStyles.ComputerFrame}>
      {frame == "" &&
        <Frame1>{children}</Frame1>
      }
      {frame == "1" &&
        <Frame1>{children}</Frame1>
      }
      {frame == "2" &&
        <Frame2>{children}</Frame2>
      }
      {frame == "3" &&
        <Frame1>{children}</Frame1>
      }
      {frame == "4" &&
        <Frame4>{children}</Frame4>
      }
    </div>
      
  )
}
