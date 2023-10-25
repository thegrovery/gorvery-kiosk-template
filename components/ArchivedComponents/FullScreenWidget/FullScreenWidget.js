/*===== Components =====*/
import React, { useState, useEffect } from 'react';

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

export default function FullScreenWidget({ 
  //Props
  id, children
}) {

  //console.log(author);
  

  const fullScreenDetect = () => {
    let element = document.getElementById("FullScreenWidget");
    if (document.fullscreenElement) {
      console.log('The page is in fullscreen mode.');
      element.setAttribute('data-active', 'active');
    } else {
      console.log('The page is not fullscreen mode.');
      element.setAttribute('data-active', 'inactive');
    }
  }

  const handleFullScreenClick = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };

  //useEffect
  useEffect(() => {
    fullScreenDetect();
    document.addEventListener('fullscreenchange', () => {
      fullScreenDetect();
    });
  });

  return (
    <div id="FullScreenWidget" className={componentStyles.FullScreenWidget} data-active="">
      <p>This web app is best viewed in fullscreen mode.</p>
      <button onClick={handleFullScreenClick}>Full Screen</button>
    </div>
  )
}
