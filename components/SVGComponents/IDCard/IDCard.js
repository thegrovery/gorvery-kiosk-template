/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import { router } from 'next/router'
import $ from 'jquery'
import Link from 'next/link'
import EnrollmentCard from "./EnrollmentCard"

/*===== Styles =====*/
import componentStyles from './styles.module.scss'
import utilStyles from '@styles/utils.module.css'

export default function IDCard({ 
  //Props
  id, children, 
  access, enrollment, financial, resources,
}) {

  //console.log(author);
  useEffect(() => {
   
  });

  return (
   <div className={componentStyles.IDCard}>
     {access && 
       <EnrollmentCard/>
     }
     {enrollment && 
       <EnrollmentCard/>
     }
     {financial && 
       <EnrollmentCard/>
     }
     {resources && 
       <EnrollmentCard/>
     }
   </div>
  )
}
