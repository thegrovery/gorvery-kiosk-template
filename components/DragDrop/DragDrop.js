/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import { router } from 'next/router'
import $ from 'jquery'
import interact from 'interactjs'
import Card from './Card.js'
import IDCard from '@components/IDCard'
//import IDCard from '@components/SVGComponents/IDCard'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function DragDrop({ 
  //Props
  id, image, title, 
  previewText, author, date,
  animation
}) {

 

  /*===== Component Content =====*/
  return (
    <div className={'draggableBounds '+componentStyles.DragDrop}>
      
      {/*===== Draggable Cards =====*/}
      <div className={componentStyles.cardsOuter}>

        {/*<div className={"cardsFilter "+ componentStyles.cardsFilter}></div>*/}

        <IDCard
          cardID="enrollment"
          text="Enrollment"
          link="/enrollment/"
          color="mutedRed"
          animation="fadeInUp"
          animationDelay="1"
          tooltipID="lvl-1-card-instructions"
          tooltipText={[<h2>Tooltip Title</h2> , <p>Tap to drag an access card to the scanner on the right to learn more about each topic.</p>]}
          tooltipPlacement="up"
        />

        <IDCard
          cardID="sample"
          text="Access and Reimbursement Report"
          link="/access/"
          color="mutedYellow"
          animation="fadeInUp"
          animationDelay="2"
        />

        <IDCard 
          cardID="financial"
          text="Co-Pay &amp; Finacial Assistance Services"
          link="/financial/"
          color="mutedBlue"
          animation="fadeInUp"
          animationDelay="3"
        />
      
        <IDCard 
          cardID="resources"
          text="Patient Resources"
          link="/resources/"
          color="mutedGreen"
          animation="fadeInUp"
          animationDelay="4"
        />
        
      </div>

      {/*===== Dropzone =====*/}
      {/*<div className={componentStyles.dropZoneWrapper}>
        <div id="DropZone" className={componentStyles.dropZone + ' droppable'}>
          <span className={componentStyles.message}>Drag n' Drop Dropzone</span>
        </div>
      </div>*/}
      
    </div>
  )
}
