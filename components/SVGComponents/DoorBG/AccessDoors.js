/*===== Components =====*/
import React from "react"

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

/*===== Site Data =====*/
  import data from "@data/data.json"


/*===== Notes =====*/
// Add and edit the following to the 
// elements you want to make interactive:
/*
  className="droppable" data-door="1" data-door-name="options" data-link="/enrollment/options/" data-active="inactive"
*/

export default function AccessDoors({
    //Props
    id,
    children
}) {

    //console.log(author);
    let accentColor = data.accentColor1;

    return (
      <div className={componentStyles.AccessDoors}>
        <svg width="1976" height="1263" viewBox="0 0 1976 1263">
          <defs>
            <linearGradient id="linear-gradient" x1="0.263" y1="-0.1" x2="0.918" y2="1" gradientUnits="objectBoundingBox">
              <stop offset="0" stopColor="#373231"/>
              <stop offset="1" stopColor="#453838"/>
            </linearGradient>
            <clipPath id="clipPath">
              <rect id="Rectangle_1906" data-name="Rectangle 1906" width="136.733" height="102.812" fill="none"/>
            </clipPath>
            <clipPath id="clip-iPad_Pro_12.9in_Access_Reimbursement_Support_Hallway_2">
              <rect width="1976" height="1263"/>
            </clipPath>
          </defs>
          <g id="iPad_Pro_12.9in_Access_Reimbursement_Support_Hallway_2" data-name="iPad Pro 12.9in – Access &amp; Reimbursement Support Hallway – 2" clipPath="url(#clip-iPad_Pro_12.9in_Access_Reimbursement_Support_Hallway_2)">
            <rect width="1976" height="1263" fill="#fff"/>
            <path id="background-color" d="M0,0H1990.792V1303.253H0Z" transform="translate(-14.792)" fill="#fffdf8" stroke="#fff" strokeWidth="1.04"/>
            <rect id="floor" width="1989.786" height="150" transform="translate(-13.786 1153.253)" fill="#fff" stroke="#453838" strokeMiterlimit="10" strokeWidth="1"/>
            <g id="all-objects">
              <g id="doors" data-element="doors">
                <g id="door1" transform="translate(-2433.939 185.607)" className="droppable" data-door="1" data-door-name="Benefits Rreview" data-link="/access/benefits/" data-active="inactive">
                  <g className="doorInnerBlack">
                    <path id="Path_3483" data-name="Path 3483" d="M0,0H279.311V526.307H0Z" transform="translate(2589.634 442.31)" fill="#212121"/>
                  </g>
                  <g className="doorInner">
                    <g className="doorInnerAnimate">
                                <g id="Group_193" data-name="Group 193" transform="translate(2589.634 442.31)">
                                  <path id="Path_3483" data-name="Path 3483" d="M0,0H279.311V526.307H0Z" fill="#a69f9f"/>
                                  <rect id="Rectangle_181" data-name="Rectangle 181" width="232.288" height="486.115" transform="translate(24.139 23.792)" fill="#fff" stroke="#595454" strokeWidth="1"/>
                                  <rect id="Rectangle_183" data-name="Rectangle 183" width="10.71" height="161.774" transform="translate(6.14 185.963)" fill="#fff" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.403"/>
                                  <path id="Path_3486" data-name="Path 3486" d="M70.567,369.352,208.763,237.8" fill="none" stroke="#707070" strokeWidth="1"/>
                                  <path id="Path_3487" data-name="Path 3487" d="M70.567,369.352,208.763,237.8" transform="translate(-7 37)" fill="none" stroke="#707070" strokeWidth="1"/>
                                </g>
                                <g id="door-scanner" transform="translate(2678.939 599.393)">
                                  <g id="Path_5268" data-name="Path 5268" fill="url(#linear-gradient)">
                                    <path d="M 97 55.25 L 3 55.25 C 1.759346723556519 55.25 0.75 54.24065399169922 0.75 53 L 0.75 3 C 0.75 1.759346723556519 1.759346723556519 0.75 3 0.75 L 97 0.75 C 98.24065399169922 0.75 99.25 1.759346723556519 99.25 3 L 99.25 53 C 99.25 54.24065399169922 98.24065399169922 55.25 97 55.25 Z" stroke="none"/>
                                    <path d="M 3 1.5 C 2.172897338867188 1.5 1.5 2.172901153564453 1.5 3 L 1.5 53 C 1.5 53.82709884643555 2.172897338867188 54.5 3 54.5 L 97 54.5 C 97.82710266113281 54.5 98.5 53.82709884643555 98.5 53 L 98.5 3 C 98.5 2.172901153564453 97.82710266113281 1.5 97 1.5 L 3 1.5 M 3 0 L 97 0 C 98.6568603515625 0 100 1.343143463134766 100 3 L 100 53 C 100 54.65685653686523 98.6568603515625 56 97 56 L 3 56 C 1.3431396484375 56 0 54.65685653686523 0 53 L 0 3 C 0 1.343143463134766 1.3431396484375 0 3 0 Z" stroke="none" fill="#707070"/>
                                  </g>
                                  <text id="Scan_Here" data-name="Scan
                      Here" transform="translate(45.349 26.412)" fill="#fff" fontSize="16"  fontWeight="700"><tspan x="0" y="0">SCAN</tspan><tspan x="0" y="16">HERE</tspan></text>
                                  <g id="Group_875" data-name="Group 875" transform="translate(18.949 15.597) rotate(3)">
                                    <path id="Path_160" data-name="Path 160" d="M0,5.252c0,.016,0,.032,0,.048A7.41,7.41,0,0,0,1.4,9.639a4.838,4.838,0,0,0,.326.422,1.342,1.342,0,0,0,2-1.79s-.016-.018-.04-.048L3.7,8.217l.01.01a1.4,1.4,0,0,1-.126-.153,5.039,5.039,0,0,1-.9-2.822,5.037,5.037,0,0,1,.894-2.816,1.631,1.631,0,0,1,.127-.156l-.01.01L3.69,2.286c.024-.031.04-.049.04-.049a1.342,1.342,0,0,0-2-1.789A4.849,4.849,0,0,0,1.4.872,7.409,7.409,0,0,0,0,5.207Z" transform="translate(16.048 7.468)" fill="#fff"/>
                                    <path id="Path_161" data-name="Path 161" d="M3.1,0A1.317,1.317,0,0,1,4.148,2.117,9.8,9.8,0,0,0,2.635,7.554a10.787,10.787,0,0,0,1.541,5.655,1.317,1.317,0,0,1-2.149,1.524A13.2,13.2,0,0,1,0,7.554,12.229,12.229,0,0,1,2.054.518,1.315,1.315,0,0,1,3.1,0Z" transform="translate(10.971 5.124)" fill="#fff"/>
                                    <path id="Path_162" data-name="Path 162" d="M3.757,0A1.318,1.318,0,0,1,4.811,2.106a14.4,14.4,0,0,0-2.176,7.927,15.568,15.568,0,0,0,2.2,8.215,1.318,1.318,0,1,1-2.165,1.5A18.132,18.132,0,0,1,0,10.033,16.735,16.735,0,0,1,2.7.529,1.315,1.315,0,0,1,3.757,0Z" transform="translate(5.483 2.61)" fill="#fff"/>
                                    <path id="Path_163" data-name="Path 163" d="M4.476,0A1.318,1.318,0,0,1,5.531,2.106a19.019,19.019,0,0,0-2.9,10.5A20.8,20.8,0,0,0,5.56,23.47a1.317,1.317,0,0,1-2.167,1.5A23.053,23.053,0,0,1,0,12.606,21.249,21.249,0,0,1,3.42.529,1.314,1.314,0,0,1,4.476,0Z" transform="translate(0)" fill="#fff"/>
                                  </g>
                                </g>
                    </g>
                  </g>
                  
                </g>

                <g id="door2" transform="translate(-2097.943 184.607)" className="droppable" data-door="2" data-door-name="PA Appeals Support" data-link="/access/appeals/" data-active="inactive">
                  <g className="doorInnerBlack">
                    <path id="Path_3483" data-name="Path 3483" d="M0,0H279.311V526.307H0Z" fill="#212121" transform="translate(2589.634 442.31)"/>
                  </g>
                  <g className="doorInner">
                    <g className="doorInnerAnimate">
                                <g id="Group_193-2" data-name="Group 193" transform="translate(2589.634 442.31)">
                                  <path id="Path_3483-2" data-name="Path 3483" d="M0,0H279.311V526.307H0Z" fill="#a69f9f"/>
                                  <rect id="Rectangle_181-2" data-name="Rectangle 181" width="52.952" height="231.056" transform="translate(24.139 23.792)" fill="#fff" stroke="#595454" strokeWidth="1"/>
                                  <rect id="Rectangle_183-2" data-name="Rectangle 183" width="10.71" height="161.774" transform="translate(6.14 185.963)" fill="#fff" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.403"/>
                                  <path id="Path_3487-2" data-name="Path 3487" d="M128.4,267.483,159.178,237.8" transform="translate(-89.051 -79.297)" fill="none" stroke="#707070" strokeWidth="1"/>
                                  <path id="Path_3488" data-name="Path 3488" d="M128.4,267.483l16.985-16.615" transform="translate(-89.051 -102.297)" fill="none" stroke="#707070" strokeWidth="1"/>
                                </g>
                                <g id="door-scanner-2" data-name="door-scanner" transform="translate(2678.943 600.393)">
                                  <g id="Path_5268-2" data-name="Path 5268" fill="url(#linear-gradient)">
                                    <path d="M 97 55.25 L 3 55.25 C 1.759346723556519 55.25 0.75 54.24065399169922 0.75 53 L 0.75 3 C 0.75 1.759346723556519 1.759346723556519 0.75 3 0.75 L 97 0.75 C 98.24065399169922 0.75 99.25 1.759346723556519 99.25 3 L 99.25 53 C 99.25 54.24065399169922 98.24065399169922 55.25 97 55.25 Z" stroke="none"/>
                                    <path d="M 3 1.5 C 2.172897338867188 1.5 1.5 2.172901153564453 1.5 3 L 1.5 53 C 1.5 53.82709884643555 2.172897338867188 54.5 3 54.5 L 97 54.5 C 97.82710266113281 54.5 98.5 53.82709884643555 98.5 53 L 98.5 3 C 98.5 2.172901153564453 97.82710266113281 1.5 97 1.5 L 3 1.5 M 3 0 L 97 0 C 98.6568603515625 0 100 1.343143463134766 100 3 L 100 53 C 100 54.65685653686523 98.6568603515625 56 97 56 L 3 56 C 1.3431396484375 56 0 54.65685653686523 0 53 L 0 3 C 0 1.343143463134766 1.3431396484375 0 3 0 Z" stroke="none" fill="#707070"/>
                                  </g>
                                  <text id="Scan_Here-2" data-name="Scan
                      Here" transform="translate(45.349 26.412)" fill="#fff" fontSize="16"  fontWeight="700"><tspan x="0" y="0">SCAN</tspan><tspan x="0" y="16">HERE</tspan></text>
                                  <g id="Group_875-2" data-name="Group 875" transform="translate(18.949 15.597) rotate(3)">
                                    <path id="Path_160-2" data-name="Path 160" d="M0,5.252c0,.016,0,.032,0,.048A7.41,7.41,0,0,0,1.4,9.639a4.838,4.838,0,0,0,.326.422,1.342,1.342,0,0,0,2-1.79s-.016-.018-.04-.048L3.7,8.217l.01.01a1.4,1.4,0,0,1-.126-.153,5.039,5.039,0,0,1-.9-2.822,5.037,5.037,0,0,1,.894-2.816,1.631,1.631,0,0,1,.127-.156l-.01.01L3.69,2.286c.024-.031.04-.049.04-.049a1.342,1.342,0,0,0-2-1.789A4.849,4.849,0,0,0,1.4.872,7.409,7.409,0,0,0,0,5.207Z" transform="translate(16.048 7.468)" fill="#fff"/>
                                    <path id="Path_161-2" data-name="Path 161" d="M3.1,0A1.317,1.317,0,0,1,4.148,2.117,9.8,9.8,0,0,0,2.635,7.554a10.787,10.787,0,0,0,1.541,5.655,1.317,1.317,0,0,1-2.149,1.524A13.2,13.2,0,0,1,0,7.554,12.229,12.229,0,0,1,2.054.518,1.315,1.315,0,0,1,3.1,0Z" transform="translate(10.971 5.124)" fill="#fff"/>
                                    <path id="Path_162-2" data-name="Path 162" d="M3.757,0A1.318,1.318,0,0,1,4.811,2.106a14.4,14.4,0,0,0-2.176,7.927,15.568,15.568,0,0,0,2.2,8.215,1.318,1.318,0,1,1-2.165,1.5A18.132,18.132,0,0,1,0,10.033,16.735,16.735,0,0,1,2.7.529,1.315,1.315,0,0,1,3.757,0Z" transform="translate(5.483 2.61)" fill="#fff"/>
                                    <path id="Path_163-2" data-name="Path 163" d="M4.476,0A1.318,1.318,0,0,1,5.531,2.106a19.019,19.019,0,0,0-2.9,10.5A20.8,20.8,0,0,0,5.56,23.47a1.317,1.317,0,0,1-2.167,1.5A23.053,23.053,0,0,1,0,12.606,21.249,21.249,0,0,1,3.42.529,1.314,1.314,0,0,1,4.476,0Z" transform="translate(0)" fill="#fff"/>
                                  </g>
                                </g>
                    </g>
                  </g>

                  
                </g>

                <g id="door3" transform="translate(-1769.29 184.607)" className="droppable" data-door="3" data-door-name="Billing Coding" data-link="/access/billing/" data-active="inactive">
                  <g className="doorInnerBlack">
                    <path id="Path_3483" data-name="Path 3483" d="M0,0H279.311V526.307H0Z" fill="#212121" transform="translate(2589.634 442.31)"/>
                  </g>
                  <g className="doorInner">
                    <g className="doorInnerAnimate">
                                <g id="Group_193-3" data-name="Group 193" transform="translate(2589.634 442.31)">
                                  <path id="Path_3483-3" data-name="Path 3483" d="M0,0H279.311V526.307H0Z" fill="#a69f9f"/>
                                  <rect id="Rectangle_181-3" data-name="Rectangle 181" width="232.288" height="486.115" transform="translate(24.139 23.792)" fill="#fff" stroke="#595454" strokeWidth="1"/>
                                  <rect id="Rectangle_183-3" data-name="Rectangle 183" width="10.71" height="161.774" transform="translate(6.14 185.963)" fill="#fff" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.403"/>
                                  <path id="Path_3486-2" data-name="Path 3486" d="M70.567,369.352,208.763,237.8" fill="none" stroke="#707070" strokeWidth="1"/>
                                  <path id="Path_3487-3" data-name="Path 3487" d="M70.567,369.352,208.763,237.8" transform="translate(-7 37)" fill="none" stroke="#707070" strokeWidth="1"/>
                                </g>
                                <g id="door-scanner-3" data-name="door-scanner" transform="translate(2679.29 600.393)">
                                  <g id="Path_5268-3" data-name="Path 5268" fill="url(#linear-gradient)">
                                    <path d="M 97 55.25 L 3 55.25 C 1.759346723556519 55.25 0.75 54.24065399169922 0.75 53 L 0.75 3 C 0.75 1.759346723556519 1.759346723556519 0.75 3 0.75 L 97 0.75 C 98.24065399169922 0.75 99.25 1.759346723556519 99.25 3 L 99.25 53 C 99.25 54.24065399169922 98.24065399169922 55.25 97 55.25 Z" stroke="none"/>
                                    <path d="M 3 1.5 C 2.172897338867188 1.5 1.5 2.172901153564453 1.5 3 L 1.5 53 C 1.5 53.82709884643555 2.172897338867188 54.5 3 54.5 L 97 54.5 C 97.82710266113281 54.5 98.5 53.82709884643555 98.5 53 L 98.5 3 C 98.5 2.172901153564453 97.82710266113281 1.5 97 1.5 L 3 1.5 M 3 0 L 97 0 C 98.6568603515625 0 100 1.343143463134766 100 3 L 100 53 C 100 54.65685653686523 98.6568603515625 56 97 56 L 3 56 C 1.3431396484375 56 0 54.65685653686523 0 53 L 0 3 C 0 1.343143463134766 1.3431396484375 0 3 0 Z" stroke="none" fill="#707070"/>
                                  </g>
                                  <text id="Scan_Here-3" data-name="Scan
                      Here" transform="translate(45.349 26.412)" fill="#fff" fontSize="16"  fontWeight="700"><tspan x="0" y="0">SCAN</tspan><tspan x="0" y="16">HERE</tspan></text>
                                  <g id="Group_875-3" data-name="Group 875" transform="translate(18.949 15.597) rotate(3)">
                                    <path id="Path_160-3" data-name="Path 160" d="M0,5.252c0,.016,0,.032,0,.048A7.41,7.41,0,0,0,1.4,9.639a4.838,4.838,0,0,0,.326.422,1.342,1.342,0,0,0,2-1.79s-.016-.018-.04-.048L3.7,8.217l.01.01a1.4,1.4,0,0,1-.126-.153,5.039,5.039,0,0,1-.9-2.822,5.037,5.037,0,0,1,.894-2.816,1.631,1.631,0,0,1,.127-.156l-.01.01L3.69,2.286c.024-.031.04-.049.04-.049a1.342,1.342,0,0,0-2-1.789A4.849,4.849,0,0,0,1.4.872,7.409,7.409,0,0,0,0,5.207Z" transform="translate(16.048 7.468)" fill="#fff"/>
                                    <path id="Path_161-3" data-name="Path 161" d="M3.1,0A1.317,1.317,0,0,1,4.148,2.117,9.8,9.8,0,0,0,2.635,7.554a10.787,10.787,0,0,0,1.541,5.655,1.317,1.317,0,0,1-2.149,1.524A13.2,13.2,0,0,1,0,7.554,12.229,12.229,0,0,1,2.054.518,1.315,1.315,0,0,1,3.1,0Z" transform="translate(10.971 5.124)" fill="#fff"/>
                                    <path id="Path_162-3" data-name="Path 162" d="M3.757,0A1.318,1.318,0,0,1,4.811,2.106a14.4,14.4,0,0,0-2.176,7.927,15.568,15.568,0,0,0,2.2,8.215,1.318,1.318,0,1,1-2.165,1.5A18.132,18.132,0,0,1,0,10.033,16.735,16.735,0,0,1,2.7.529,1.315,1.315,0,0,1,3.757,0Z" transform="translate(5.483 2.61)" fill="#fff"/>
                                    <path id="Path_163-3" data-name="Path 163" d="M4.476,0A1.318,1.318,0,0,1,5.531,2.106a19.019,19.019,0,0,0-2.9,10.5A20.8,20.8,0,0,0,5.56,23.47a1.317,1.317,0,0,1-2.167,1.5A23.053,23.053,0,0,1,0,12.606,21.249,21.249,0,0,1,3.42.529,1.314,1.314,0,0,1,4.476,0Z" transform="translate(0)" fill="#fff"/>
                                  </g>
                                </g>
                    </g>
                  </g>
                  
                </g>
                
                <g id="signs">
                  <g id="sign2" transform="translate(0 20)">
                    <rect id="Rectangle_185" data-name="Rectangle 185" width="279.31" height="86.697" transform="translate(491.691 491.358)" fill="#fff" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.264"/>
                    <rect id="Rectangle_1905" data-name="Rectangle 1905" width="279.31" height="9.697" transform="translate(491.691 568.358)" fill="#ffd186" stroke="#ffd186" strokeLinecap="round" strokeWidth="1.264"/>
                    <text id="PA_Appeals_Support" data-name="PA &amp; Appeals Support" transform="translate(631.579 539)" fill="#595454" fontSize="22"   letterSpacing="0.02em"><tspan x="-123.488" y="0">PA &amp; APPEALS SUPPORT</tspan></text>
                  </g>
                  <g id="sign1" transform="translate(-335.996 21)">
                    <rect id="Rectangle_185-2" data-name="Rectangle 185" width="279.31" height="86.697" transform="translate(491.691 491.358)" fill="#fff" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.264"/>
                    <rect id="Rectangle_1905-2" data-name="Rectangle 1905" width="279.31" height="9.697" transform="translate(491.691 568.358)" fill="#ffd186" stroke="#ffd186" strokeLinecap="round" strokeWidth="1.264"/>
                    <text id="BENEFITS_REVIEW" data-name="BENEFITS REVIEW" transform="translate(630.269 538)" fill="#595454" fontSize="22"   letterSpacing="0.02em"><tspan x="-89.189" y="0">BENEFITS REVIEW</tspan></text>
                  </g>
                  <g id="sign3" transform="translate(328.653 20)">
                    <rect id="Rectangle_185-3" data-name="Rectangle 185" width="279.31" height="86.697" transform="translate(491.691 491.358)" fill="#fff" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.264"/>
                    <rect id="Rectangle_1905-3" data-name="Rectangle 1905" width="279.31" height="9.697" transform="translate(491.691 568.358)" fill="#ffd186" stroke="#ffd186" strokeLinecap="round" strokeWidth="1.264"/>
                    <text id="Billing_Coding" data-name="Billing &amp; Coding" transform="translate(631.269 539)" fill="#595454" fontSize="22"   letterSpacing="0.02em"><tspan x="-97.643" y="0">BILLING &amp; CODING</tspan></text>
                  </g>
                </g>
              </g>
              <g id="objects" data-element="objects">
                <g id="plant" transform="translate(-8351.703 -6386.202)">
                  <line id="Line_269" data-name="Line 269" x2="27.641" y2="156.763" transform="translate(9656.695 7340.178)" fill="#e9e1e0"/>
                  <line id="Line_271" data-name="Line 271" x2="20.903" y2="118.553" transform="translate(9640.26 7378.389)" fill="#e9e1e0"/>
                  <line id="Line_273" data-name="Line 273" x2="19.728" y2="111.882" transform="translate(9687.78 7385.059)" fill="#e9e1e0"/>
                  <g id="Group_1128" data-name="Group 1128" transform="translate(0 1)">
                    <path id="Path_3809" data-name="Path 3809" d="M1568.046,783.58h0c-6.4,0-10.671,5.187-9.543,11.586L1580.408,919.4h23.172l-21.905-124.234a14.421,14.421,0,0,0-13.629-11.586" transform="translate(8069.17 6577.542)" fill="#e9e1e0" stroke="#707070" strokeWidth="1"/>
                    <path id="Path_3811" data-name="Path 3811" d="M1611.386,789.622h0c-6.4,0-10.671,5.188-9.543,11.586l20.738,117.609h23.172l-20.738-117.609a14.421,14.421,0,0,0-13.629-11.586" transform="translate(8073.342 6578.123)" fill="#e9e1e0" stroke="#707070" strokeWidth="1"/>
                    <path id="Path_3813" data-name="Path 3813" d="M1583.084,748.992h0c-6.4,0-10.671,5.188-9.543,11.586l28.591,162.151H1625.3l-28.592-162.151a14.421,14.421,0,0,0-13.629-11.586" transform="translate(8070.617 6574.212)" fill="#e9e1e0" stroke="#707070" strokeWidth="1"/>
                    <line id="Line_270" data-name="Line 270" x2="27.641" y2="156.763" transform="translate(9656.695 7340.178)" fill="none" stroke="#474343" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5"/>
                    <line id="Line_272" data-name="Line 272" x2="20.903" y2="118.553" transform="translate(9640.26 7378.389)" fill="none" stroke="#474343" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5"/>
                    <line id="Line_274" data-name="Line 274" x2="19.728" y2="111.882" transform="translate(9687.78 7385.059)" fill="none" stroke="#474343" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5"/>
                  </g>
                  <line id="Line_275" data-name="Line 275" x2="113.53" transform="translate(9626.25 7514.657)" fill="#fff"/>
                  <g id="Group_1447" data-name="Group 1447" transform="translate(9619.414 7496.94)">
                    <g id="Group_1446" data-name="Group 1446" clipPath="url(#clipPath)">
                      <path id="Path_5191" data-name="Path 5191" d="M41.9,102.812C6.088,72.383,0,36.983,0,0H136.733c0,36.983-6.084,72.383-41.9,102.812" fill={accentColor}/>
                    </g>
                  </g>
                  <line id="Line_276" data-name="Line 276" x2="113.53" transform="translate(9626.25 7514.657)" fill="none" stroke="#474343" strokeLinejoin="round" strokeWidth="1"/>
                </g>
                <g id="wall-art" transform="translate(1248.132 139.081)">
                  <rect id="Rectangle_775" data-name="Rectangle 775" width="136.733" height="207.338" transform="translate(-48.787 503.274)" fill="#fff"/>
                  <rect id="Rectangle_776" data-name="Rectangle 776" width="136.733" height="207.338" transform="translate(-48.787 503.274)" fill="none" stroke="#474343" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.497"/>
                  <path id="Path_3817" data-name="Path 3817" d="M0,0H120.794V191.4H0Z" transform="translate(-40.816 511.244)" fill="#ffeccd"/>
                  <rect id="Rectangle_778" data-name="Rectangle 778" width="120.794" height="191.397" transform="translate(-40.816 511.244)" fill="none" stroke="#474343" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.497"/>
                  <path id="Path_3735" data-name="Path 3735" d="M90.184,511.05s-3.2,6.873,18.948,71.8c20.283,59.459,4.53,46.768-12.942,31.679-25.915-22.383,21.55,72.2,3.516,87.913" transform="translate(-61.089 0.194)" fill="none" stroke="#8f3189" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.497"/>
                  <path id="Path_3734" data-name="Path 3734" d="M60.667,511.05s-3.2,6.873,18.948,71.8c20.283,59.459,4.53,46.768-12.942,31.679-25.915-22.383,21.55,72.2,3.516,87.913" transform="translate(-72.302 0.194)" fill="none" stroke="#474343" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.497"/>
                </g>
                <g id="stool" transform="translate(-95 341.499)">
                  <rect id="Rectangle_1909" data-name="Rectangle 1909" width="63.983" height="23.634" transform="translate(141.096 630.417)" fill="#fff" stroke="#707070" strokeWidth="1"/>
                  <rect id="Rectangle_1910" data-name="Rectangle 1910" width="90.175" height="10.049" transform="translate(128 749.117)" fill="#fff" stroke="#707070" strokeWidth="1"/>
                  <path id="Path_4398" data-name="Path 4398" d="M118.807,854.218h0c-2.345,0-4.195-1.577-4.015-3.424L134.663,645H154.2L122.8,851.415c-.244,1.6-1.96,2.8-4,2.8" transform="translate(-2.073 -11.646)" fill="#fff" stroke="#707070" strokeWidth="1"/>
                  <path id="Path_4400" data-name="Path 4400" d="M233.042,854.218h0c2.345,0,4.194-1.577,4.016-3.424L217.187,645H197.652l31.392,206.416c.244,1.6,1.96,2.8,4,2.8" transform="translate(-3.569 -11.646)" fill="#fff" stroke="#707070" strokeWidth="1"/>
                  <path id="Path_4402" data-name="Path 4402" d="M217.557,647.7H133.034a11.655,11.655,0,0,1-11.655-11.655v-.935a11.655,11.655,0,0,1,11.655-11.655h84.524a11.655,11.655,0,0,1,11.655,11.655v.935A11.655,11.655,0,0,1,217.557,647.7" transform="translate(-2.192 -11.257)" fill={accentColor}/>
                </g>
              </g>
            </g>
            <g id="lights" transform="translate(82 32.417)" >
              <g className="innerTransform" data-element="lights">
                <path id="Path_3946" data-name="Path 3946" d="M142.192,304.553h0a12.5,12.5,0,0,1-12.467-12.467v-20.4a12.467,12.467,0,1,1,24.934,0v20.4a12.5,12.5,0,0,1-12.467,12.467" transform="translate(-82 -2)" fill="#fde6c2"/>
                <path id="Union_4" data-name="Union 4" d="M-10106-5262.125a20.2,20.2,0,0,1,13.072-14.751v-23.955a6.634,6.634,0,0,1,4.591-6.31V-5335h4.078v27.858a6.634,6.634,0,0,1,4.591,6.31v23.955a20.207,20.207,0,0,1,13.072,14.751Z" transform="translate(10146.492 5533.172)" fill="#908a89"/>
                <path id="Path_3765" data-name="Path 3765" d="M607.291,304.553h0a12.5,12.5,0,0,1-12.467-12.467v-20.4a12.467,12.467,0,1,1,24.934,0v20.4a12.5,12.5,0,0,1-12.467,12.467" transform="translate(-82 -2)" fill="#fde6c2"/>
                <path id="Path_3767" data-name="Path 3767" d="M626.993,273.046a20.165,20.165,0,0,0-39.4,0Z" transform="translate(-82 -2)" fill="#908a89"/>
                <path id="Path_3768" data-name="Path 3768" d="M613.921,262.392h-13.26v-28.05a6.63,6.63,0,0,1,13.26,0Z" transform="translate(-82 -2)" fill="#908a89"/>
                <rect id="Rectangle_861" data-name="Rectangle 861" width="4.08" height="35.36" transform="translate(523.251 198.172)" fill="#908a89"/>
                <path id="Path_3769" data-name="Path 3769" d="M1072.389,304.553h0a12.5,12.5,0,0,1-12.467-12.467v-20.4a12.467,12.467,0,1,1,24.934,0v20.4a12.5,12.5,0,0,1-12.467,12.467" transform="translate(-82 -2)" fill="#fde6c2"/>
                <path id="Union_2" data-name="Union 2" d="M-10106-5262.125a20.21,20.21,0,0,1,13.072-14.751v-23.955a6.634,6.634,0,0,1,4.591-6.31V-5335h4.078v27.858a6.634,6.634,0,0,1,4.591,6.31v23.955a20.207,20.207,0,0,1,13.072,14.751Z" transform="translate(11076.688 5533.172)" fill="#908a89"/>
                <path id="Path_3773" data-name="Path 3773" d="M1537.488,304.553h0a12.5,12.5,0,0,1-12.467-12.467v-20.4a12.467,12.467,0,1,1,24.934,0v20.4a12.5,12.5,0,0,1-12.467,12.467" transform="translate(-82 -2)" fill="#fde6c2"/>
                <path id="Union_3" data-name="Union 3" d="M-10106-5262.125a20.2,20.2,0,0,1,13.072-14.751v-23.955a6.634,6.634,0,0,1,4.591-6.31V-5335h4.078v27.858a6.634,6.634,0,0,1,4.591,6.31v23.955a20.207,20.207,0,0,1,13.072,14.751Z" transform="translate(11541.787 5533.172)" fill="#908a89"/>
                <rect id="Rectangle_864" data-name="Rectangle 864" width="1996.74" height="4.135" transform="translate(-82 214.482)" fill="#908a89"/>
              </g>
              
            </g>
          </g>
        </svg>

      </div>

    )
}