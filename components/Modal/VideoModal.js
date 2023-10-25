/*===== Components =====*/
import React from "react"
import Link from 'next/link'
import CloseIcon from '@components/SVGComponents/CloseIcon'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function VideoModal({ 
  //Props
  url, title, defaultZoom, disclaimerCopy,
}) {

  //console.log(author);

  //NOTES:
  //Open functions are in /ContentComponents/PdfThumbnail

  //console.log(author);
    const modalClose = () => {
      const element = document.getElementById("ModalWrapper");
      const iframe = document.getElementById("ModalIframe");
      element.setAttribute('data-modal-status', 'inactive');
      iframe.setAttribute('src', '/images/BMSLogo.svg');
    }

    const closeClick = () => {
      modalClose();
    };

  return (
    <div className={componentStyles.VideoModal}>

      <div 
        className={componentStyles.closeButton}
        onClick={modalClose}
      >
        <CloseIcon/>
      </div>
      
      <div className={componentStyles.titleArea}>
        NO-US-2200226_BMS10289 AS Sample SOB Form_Pending Determination_FINAL.pdf
      </div>

      <div className={componentStyles.videoWrapper}>
        <video controls width="250">
            <source src="/media/cc0-videos/flower.webm" type="video/webm">
            <source src="/media/cc0-videos/flower.mp4" type="video/mp4">
        </video>
      </div>
      
      <div className={componentStyles.copyArea}>
        <p>
          The accurate completion of reimbursement- or coverage-related documentation is the responsibility of the healthcare provider and patient. Bristol Myers Squibb and its agents make no guarantee regarding reimbursement for any service or item.
        </p>
      </div>

    </div>
  )
}
