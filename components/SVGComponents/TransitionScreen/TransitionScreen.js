/*===== Components =====*/
import React from "react"
import Link from 'next/link'
import Screen1 from "./Screen1"
import Screen2 from "./Screen2"
import Screen3 from "./Screen3"
import Screen4 from "./Screen4"
import Screen5 from "./Screen5"
import Screen6 from "./Screen6"
import Screen7 from "./Screen7"
import Screen8 from "./Screen8"
import Screen9 from "./Screen9"
import Screen10 from "./Screen10"

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function TransitionScreen({ 
  //Props
  id, children, screen
}) {

  //console.log(author);

  return (
    <div className={componentStyles.TransitionScreen} data-transition-screen={screen}>
      {screen == "" &&
        <Screen1/>
      }
      {screen == "1" &&
        <Screen1/>
      }
      {screen == "2" &&
        <Screen2/>
      }
      {screen == "3" &&
        <Screen3/>
      }
      {screen == "4" &&
        <Screen4/>
      }
      {screen == "5" &&
        <Screen5/>
      }
      {screen == "6" &&
        <Screen6/>
      }
      {screen == "7" &&
        <Screen7/>
      }
      {screen == "8" &&
        <Screen8/>
      }
      {screen == "9" &&
        <Screen9/>
      }
      {screen == "10" &&
        <Screen10/>
      }
      
    </div>
      
  )
}
