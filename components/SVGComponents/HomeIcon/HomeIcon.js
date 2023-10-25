/*===== Components =====*/
import React from "react"

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function HomeIcon({ 
  //Props
  id, children, fillColor
}) {

  //console.log(author);

  return (
    <div className={componentStyles.HomeIcon}>
      <svg xmlns="http://www.w3.org/2000/svg" width="34.531" height="34.473" viewBox="0 0 34.531 34.473">
        <path id="Path_48" data-name="Path 48" d="M3909.167,4866.894l-2.37-2.215v-11.451a.507.507,0,0,0-.506-.506h-5.062a.506.506,0,0,0-.506.506V4859l-7.584-7.088a.755.755,0,0,0-1.032,0l-16.028,14.981a.508.508,0,0,0-.026.716l.343.369a.506.506,0,0,0,.716.025l1.337-1.25v17.606a.76.76,0,0,0,.76.76h26.829a.76.76,0,0,0,.759-.76v-17.6l1.337,1.249a.507.507,0,0,0,.717-.025l.342-.369A.507.507,0,0,0,3909.167,4866.894Zm-7.432-13.16h4.05v10l-4.05-3.786Zm-5.062,29.867h-8.1V4872.97h8.1Zm8.6,0h-7.593v-11.137a.507.507,0,0,0-.506-.506h-9.112a.507.507,0,0,0-.506.506V4883.6h-7.593v-18.266l12.655-11.828,12.655,11.828Z" transform="translate(-3875.358 -4851.147)" fill="#fff" stroke="#fff" strokeMiterlimit="10" strokeWidth="1"/>
      </svg>
    </div>
      
  )
}
