/*===== Components =====*/
import React from "react"
import Link from 'next/link'
import CloseIcon from '@components/SVGComponents/CloseIcon'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function InactivityModal({ 
  //Props
  url, title, defaultZoom, disclaimerCopy,
}) {

  //console.log(author);

  //NOTES:
  //Open functions are in /ContentComponents/PdfThumbnail

  const modalClose = () => {
    const element = document.getElementById("ModalWrapper");
    element.setAttribute('data-modal-status', 'inactive');
  }

  const closeClick = () => {
    modalClose();
  };

  return (
    <div 
      id="InactivityModal"
      className={componentStyles.InactivityModal}
    >

      <div 
        className={componentStyles.closeButton}
        onClick={modalClose}
      >
        <CloseIcon/>
      </div>
      
      <div className={componentStyles.titleArea}>
         <h4>Still Using The App?</h4>
      </div>

      <div className={componentStyles.copyArea}>
        <p>
          If not, we'll just go back to the home page for the next user.
        </p>
      </div>

      <div className={componentStyles.buttonArea}>
        <a href="#">Keep Browsing</a>
      </div>

    </div>
  )
}
