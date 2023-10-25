import Image from 'next/image'
import componentStyles from './styles.module.scss'
import Link from 'next/link'

import varStyles from '@styles/vars.module.scss'
import { BsXLg } from "react-icons/bs";
import Container from '@components/Container'

const name = 'Planet Caravan Studios'
export const siteTitle = 'Next.js Sample Website'

export default function NavMenu({ children, home }) {
  return (
    <div id="NavMenuWrapper" className={componentStyles.NavMenuWrapper}>
      {/*BACKDROP ELEMENT*/}
      <div className={componentStyles.NavMenuBackdrop +" navClose"}></div>
      
      {/*CLOSE BUTTON*/}
      <Container width="contentWidthXl">
        <div className={componentStyles.NavMenuClose +" navClose"}>
          <BsXLg className={componentStyles.icon} color="#212121" size={45} />
          <BsXLg className={componentStyles.iconHover} color="#fafafa" size={45} />
        </div>
      </Container>

      {/*MENU*/}
      <nav id="NavMenu" className={componentStyles.NavMenu +" navClose"}>
        <div className={componentStyles.inner}>

            <div className={componentStyles.links}>
              <ul className={utilStyles.list}>
                <li className={utilStyles.listItem}>
                  <a href="/">Home</a>
                </li>
                <li className={utilStyles.listItem}>
                  <a href="/posts">Blog</a>
                </li>
                <li className={utilStyles.listItem}>
                  <a href="/events">Events</a>
                </li>
                <li className={utilStyles.listItem}>
                  <a href="/about">About</a>
                </li>
                <li className={utilStyles.listItem}>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>

        </div>
      </nav>

    </div>
  )
}
