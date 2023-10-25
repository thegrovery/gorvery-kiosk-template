import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { BsList } from "react-icons/bs";
//import BMSLogo from '@components/SVGComponents/BMSLogo'
import $ from 'jquery'

import componentStyles from './styles.module.scss'

import varStyles from '@styles/vars.module.scss'

const name = 'BMS CONGRESS ACCESS'

export default function DynamicFooter({ 
  children, dynamicText
}) {

  useEffect(() => {
    
  });

  return (
    <>

      {/* FOOTER */}
      <footer className={componentStyles.DynamicFooter}>
        <div className={componentStyles.inner}>

          {/*Dynamic Text Section*/}
          <div className={componentStyles.text}>
            {dynamicText ?
              <p className={componentStyles.dynamicText}>{dynamicText}</p>
            :
              <p className={componentStyles.dynamicText}>
                This section can accept custom text on a per-page basis, or if none is set, use static text.
              </p>
            }
            <p>
              &copy;2023 Client Name. Use of the information on this site is subject to the terms of our Legal Notice and Privacy Statement. 
              </p>
                        
          </div>
          
        </div>
        
      </footer>
      
      
    </>
  )
}
