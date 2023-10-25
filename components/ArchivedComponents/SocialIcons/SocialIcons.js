import React from "react"
import componentStyles from './styles.module.scss'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";

export default function SocialIcons({ 
  instagram, facebook, twitter, 
  tumblr, pinterest
}) {
  return (
    <>
      <ul className={componentStyles.list}>
        {instagram && 
          <li key="social-instagram" className={componentStyles.cell}>
            <a 
              href={instagram}
              className=""
            >
              <FaInstagram />
            </a>
          </li>
        }
        {facebook &&
          <li key="social-facebook" className={componentStyles.cell}>
            <a 
              href={facebook}
              className=""
            >
              <FaFacebook />
            </a>
          </li>
        }
        {twitter &&
          <li key="social-twitter" className={componentStyles.cell}>
            <a 
              href={twitter}
              className=""
            >
              <FaTwitter />
            </a>
          </li>
        }
        {tumblr && 
          <li key="social-tumblr" className={componentStyles.cell}>
            <a 
              href={tumblr}
              className=""
            >
              <FaTumblr />
            </a>
          </li>
        }
        {pinterest && 
          <li key="social-pinterest" className={componentStyles.cell}>
            <a 
              href={pinterest}
              className=""
            >
              <FaPinterest />
            </a>
          </li>
        }        
      </ul>
    </>
  )
}

//export default SocialIcons
