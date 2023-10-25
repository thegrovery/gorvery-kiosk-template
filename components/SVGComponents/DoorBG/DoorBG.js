/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import { router } from 'next/router'
import $ from 'jquery'
import Link from 'next/link'
import interact from 'interactjs'
import EnrollmentDoors from "./EnrollmentDoors"
import AccessDoors from "./AccessDoors"
import FinancialDoors from "./FinancialDoors"
import ResourceDoors from "./ResourceDoors"

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function DoorBG({ 
  //Props
  id, children, 
  access, enrollment, financial, resources,
}) {

  

  return (
   <div className={componentStyles.DoorBG}>
     {access && 
       <AccessDoors/>
     }
     {enrollment && 
       <EnrollmentDoors/>
     }
     {financial && 
       <FinancialDoors/>
     }
     {resources && 
       <ResourceDoors/>
     }
   </div>
  )
}
