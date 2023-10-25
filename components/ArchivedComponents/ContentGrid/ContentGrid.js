/*===== Components =====*/
import React from "react"
import Cell from "./Cell"

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function ContentGrid({ 
  //Props
  id, image, title, 
  previewText, author, date
}) {

  //console.log(author);

  return (
    <div className={componentStyles.ContentGrid}>

       <div className={componentStyles.parent}>
        <div className={componentStyles.div1}>
          <Cell>
            Sidebar Area
          </Cell>
        </div>

        <div className={componentStyles.div2}>
          <Cell>
            Content Cell
          </Cell>
        </div>

        <div className={componentStyles.div3}>
          <Cell>
            Content Cell
          </Cell>
        </div>

        <div className={componentStyles.div4}>
          <Cell>
            Content Cell
          </Cell>
        </div>

        <div className={componentStyles.div5}>
          <Cell>
            Content Cell
          </Cell>
        </div>

        <div className={componentStyles.div6}>
          <Cell>
            Content Cell
          </Cell>
        </div>

        <div className={componentStyles.div7}>
          <Cell>
            Content Cell
          </Cell>
        </div>

       </div>
      
    </div>
  )
}
