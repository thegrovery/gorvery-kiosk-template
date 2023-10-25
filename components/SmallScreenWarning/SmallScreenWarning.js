/*===== Components =====*/
import React from "react"
import Container from '@components/Container'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function SmallScreenWarning({ 
  //Props
  
}) {

  //console.log(author);

  return (
    <div id="SmallScreenWarning" className={componentStyles.SmallScreenWarning}>
       
       <Container>
         <div className={componentStyles.content}>
           <img src="/images/BMSLogo.svg" alt="Bristol Myers Squibb - Access Support"/>
            <p >
             Looks like you're viewing this site on too small of a small screen.  This experience is meant to be viewed in landscape orientation on a large display or tablet, and doesn't quite  translate to small or portrait-oriented screens.
             <br/>
             <br/>
             Minimum size: 3:2 aspect ratio or 1000px wide.
             <br/>
             Reccomended browser: Chrome or Firefox.
            </p>
         </div>        
       </Container>
        
      
    </div>
  )
}
