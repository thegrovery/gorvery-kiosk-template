/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import $ from 'jquery'
import ZoomIcon from '@components/SVGComponents/ZoomIcon'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function PdfThumbnail({ 
  //Props
  thumbnail, icon, name, url
}) {

  //console.log(author);

  useEffect(() => {
    $(document).ready(function() {
      //vars
      let ModalWrapper = $("#ModalWrapper");
      let PDFWindow = $("#PDFModal iframe");
      let PDFTitle = $("#PDFModalTitle");

      //open modal
      $("[data-modal-open='pdf']").click(function(e){
        console.log("pdf thumbnail click");
        e.preventDefault();
        //set PDF in iframe
        let pdfLink = $(this).attr('data-pdf-url');
        let pdfName = $(this).attr('data-pdf-name');
        console.log(pdfLink);
        PDFWindow.attr("src", pdfLink+"#view=FitH"); 
        //activate PDF modal
        ModalWrapper.attr("data-modal-status", "active");
        ModalWrapper.attr("data-modal-show", "PDFModal");
        PDFTitle.text(pdfName);
        
      });

      //close modal
      $("[data-modal-close]").click(function(e){
        e.preventDefault();
        ModalWrapper.attr("data-modal-status", "inactive");
      });

    });
  });

  return (
    <div 
      className={componentStyles.PdfThumbnail}
      /*onClick={handleClick(this)}*/
      data-modal-open='pdf'
      data-pdf-url={url}
      data-pdf-name={name}
    >

      <div className={componentStyles.thumbnail}>
        {thumbnail ? 
          <img src={thumbnail} alt="" />
          :
          <img src="/images/thumbnails/oncologyEnrollmentForm.png" alt="" />
        }
        <div className={componentStyles.thumbnailIcon}>
          <ZoomIcon/>
        </div>
      </div>

      <div className={componentStyles.text}>
        {name ? name : "PDF Name"}
      </div>

    </div>
  )
}
