/*===== Components =====*/
import React from "react"
//import Button1 from '@components/Button1'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function ContactForm({ 
  //Props
  id, image, title, 
  previewText, author, date
}) {

  //console.log(author);

  return (
    <form 
      name="Contact" 
      method="POST" 
      data-netlify="true"
      action="/contact/#contactForm--thankYou"
      className={componentStyles.ContactForm}
    >
      
      <div className={componentStyles.formCell}>
        <label htmlFor="ContactForm--FirstName">First Name</label>
        <input 
          id="ContactForm--FirstName"
          name="FirstName" 
          type="text" 
          placeholder="First Name" 
        />
      </div>

      <div className={componentStyles.formCell}>
        <label htmlFor="ContactForm--LastName">Last Name</label>
        <input 
          id="ContactForm--LastName"
          name="LastName" 
          type="text" 
          placeholder="Last Name" 
        />
      </div>

      <div className={componentStyles.formCell}>
        <input 
          id="ContactForm--Submit"
          name="ContactForm--Submit" 
          type="submit" 
          placeholder="Submit" 
          value="Submit" 
        />
      </div>

    </form>
  )
}
