/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import $ from 'jquery'
import ZoomIcon from '@components/SVGComponents/ZoomIcon'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function VideoThumbnail({ 
  //Props
  thumbnail, icon, name, url
}) {

  //console.log(author);

  //Currently using PDFModalfor corresponding modal
  useEffect(() => {
    $(document).ready(function() {
      //vars
      let ModalWrapper = $("#ModalWrapper");
      let PDFWindow = $("#PDFModal iframe");
      let PDFTitle = $("#PDFModalTitle");

      //open modal
      $("[data-modal-open='video']").click(function(e){
        e.preventDefault();
        //set PDF in iframe
        let videoLink = $(this).attr('data-video-url');
        let pdfName = $(this).attr('data-video-name');
        PDFWindow.attr("src", videoLink); 
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
      className={componentStyles.VideoThumbnail}
      /*onClick={handleClick(this)}*/
      data-modal-open='video'
      data-video-url={url}
      data-video-name={name}
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
        {name ? name : "video Name"}
      </div>

    </div>
  )
}
