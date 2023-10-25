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



export default function EnrollmentDoors({
    //Props
    id,
    children
}) {

    //console.log(author);
    let accentColor = data.accentColor1;

    return (
        <div className={componentStyles.EnrollmentDoors}>
      <svg width="1976" height="1263" viewBox="0 0 1976 1263">
        <defs>
          <linearGradient id="linear-gradient" x1="0.263" y1="-0.1" x2="0.918" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0" stopColor="#373231"/>
            <stop offset="1" stopColor="#453838"/>
          </linearGradient>
          <clipPath id="clip-iPad_Pro_12.9in_Enrollment_Hallway_2">
            <rect width="1976" height="1263"/>
          </clipPath>
        </defs>
        <g id="iPad_Pro_12.9in_Enrollment_Hallway_2" data-name="iPad Pro 12.9in – Enrollment Hallway – 2" clipPath="url(#clip-iPad_Pro_12.9in_Enrollment_Hallway_2)">
          <rect width="1976" height="1263" fill="#fff"/>
          <path id="Background-Color" d="M0,0H1976V1303.253H0Z" fill="#fdd7c2" stroke="#fff" strokeWidth="1.04" opacity="0.196"/>
          <rect id="Floor" width="1989.786" height="150" transform="translate(-13.786 1153.253)" fill="#fff" stroke="#453838" strokeMiterlimit="10" strokeWidth="1"/>
          <g id="All-Objects">
            <g id="Doors-Group" data-element="doors">



              <g id="door1" transform="translate(-2434.939 184.607)" className="droppable" data-door="1" data-door-name="options" data-link="/enrollment/options/" data-active="inactive">
                <g className="doorInnerBlack">
                  <path id="Path_3483" data-name="Path 3483" d="M0,0H279.311V526.307H0Z" fill="#212121" transform="translate(2589.634 442.31)"/>
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
                            <g id="door-scanner" transform="translate(2678.939 600.393)">
                              <g id="Path_5268" data-name="Path 5268" fill="url(#linear-gradient)">
                                <path d="M 97 55.25 L 3 55.25 C 1.759346723556519 55.25 0.75 54.24065399169922 0.75 53 L 0.75 3 C 0.75 1.759346723556519 1.759346723556519 0.75 3 0.75 L 97 0.75 C 98.24065399169922 0.75 99.25 1.759346723556519 99.25 3 L 99.25 53 C 99.25 54.24065399169922 98.24065399169922 55.25 97 55.25 Z" stroke="none"/>
                                <path d="M 3 1.5 C 2.172897338867188 1.5 1.5 2.172901153564453 1.5 3 L 1.5 53 C 1.5 53.82709884643555 2.172897338867188 54.5 3 54.5 L 97 54.5 C 97.82710266113281 54.5 98.5 53.82709884643555 98.5 53 L 98.5 3 C 98.5 2.172901153564453 97.82710266113281 1.5 97 1.5 L 3 1.5 M 3 0 L 97 0 C 98.6568603515625 0 100 1.343143463134766 100 3 L 100 53 C 100 54.65685653686523 98.6568603515625 56 97 56 L 3 56 C 1.3431396484375 56 0 54.65685653686523 0 53 L 0 3 C 0 1.343143463134766 1.3431396484375 0 3 0 Z" stroke="none" fill="#707070"/>
                              </g>
                              <text id="Scan_Here" data-name="Scan Here" transform="translate(45.349 26.412)" fill="#fff" fontSize="16"  fontWeight="700"><tspan x="0" y="0">SCAN</tspan><tspan x="0" y="16">HERE</tspan></text>
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

              <g id="door2" transform="translate(-2097.943 184.607)" className="droppable" data-door="2" data-door-name="enrollmentForm" data-link="/enrollment/enrollment-form/" data-active="inactive">
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
                      <text id="Scan_Here-2" data-name="Scan Here" transform="translate(45.349 26.412)" fill="#fff" fontSize="16"  fontWeight="700"><tspan x="0" y="0">SCAN</tspan><tspan x="0" y="16">HERE</tspan></text>
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

              <g id="door3" transform="translate(-1769.29 184.607)" className="droppable" data-door="3" data-door-name="providerPortal" data-link="/enrollment/provider-portal/" data-active="inactive">
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
                      <text id="Scan_Here-3" data-name="Scan Here" transform="translate(45.349 26.412)" fill="#fff" fontSize="16"  fontWeight="700"><tspan x="0" y="0">SCAN</tspan><tspan x="0" y="16">HERE</tspan></text>
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

              <g id="Signs">
                <g id="sign2" transform="translate(0 20)">
                  <rect id="Rectangle_185" data-name="Rectangle 185" width="279.31" height="86.697" transform="translate(491.5 491.358)" fill="#fff" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.264"/>
                  <rect id="Rectangle_1905" data-name="Rectangle 1905" width="279.31" height="9.697" transform="translate(491.691 568.358)" fill="#fecdb4" stroke="#fecdb4" strokeLinecap="round" strokeWidth="1.264"/>
                  <text id="HOW_TO_COMPLETE_THE_ENROLLMENT_FORM" data-name="HOW TO COMPLETE THE 
      ENROLLMENT FORM" transform="translate(631 528)" fill="#595454" fontSize="22"   letterSpacing="0.02em"><tspan x="-127.941" y="0">HOW TO COMPLETE THE </tspan><tspan x="-104.561" y="22">ENROLLMENT FORM</tspan></text>
                </g>
                <g id="sign1" transform="translate(-336.996 20)">
                  <rect id="Rectangle_185-2" data-name="Rectangle 185" width="279.31" height="86.697" transform="translate(491.691 491.358)" fill="#fff" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.264"/>
                  <rect id="Rectangle_1905-2" data-name="Rectangle 1905" width="279.31" height="9.697" transform="translate(491.691 568.358)" fill="#fecdb4" stroke="#fecdb4" strokeLinecap="round" strokeWidth="1.264"/>
                  <text id="OPTIONS_TO_ENROLL" data-name="OPTIONS TO ENROLL" transform="translate(631.269 539)" fill="#595454" fontSize="22"   letterSpacing="0.02em"><tspan x="-107.515" y="0">OPTIONS TO ENROLL</tspan></text>
                </g>
                <g id="sign3" transform="translate(328.653 20)">
                  <rect id="Rectangle_185-3" data-name="Rectangle 185" width="279.31" height="86.697" transform="translate(491.847 491.358)" fill="#fff" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.264"/>
                  <rect id="Rectangle_1905-3" data-name="Rectangle 1905" width="279.31" height="9.697" transform="translate(491.691 568.358)" fill="#fecdb4" stroke="#fecdb4" strokeLinecap="round" strokeWidth="1.264"/>
                  <text id="PROVIDER_PORTAL" data-name="PROVIDER PORTAL" transform="translate(631.347 539)" fill="#595454" fontSize="22"   letterSpacing="0.02em"><tspan x="-94.19" y="0">PROVIDER PORTAL</tspan></text>
                </g>
              </g>
            </g>
            <g id="Objects" data-element="objects">
              <g id="chair" transform="translate(10.5 942.023)">
                <rect id="Rectangle_626" data-name="Rectangle 626" width="89.908" height="19.576" transform="translate(21.171 110.543)" fill="#fff"/>
                <rect id="Rectangle_627" data-name="Rectangle 627" width="89.908" height="19.576" transform="translate(21.171 110.543)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                <g id="Group_883" data-name="Group 883">
                  <g id="Group_1444" data-name="Group 1444">
                    <path id="Path_3492" data-name="Path 3492" d="M17.082,236.56,7.344,361.781a3.54,3.54,0,0,0,7.034.775L32.244,237.367Z" transform="translate(-3.785 -122.105)" fill="#fff"/>
                    <path id="Path_3493" data-name="Path 3493" d="M17.082,236.56,7.344,361.781a3.54,3.54,0,0,0,7.034.775L32.244,237.367Z" transform="translate(-3.785 -122.105)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                    <path id="Path_3494" data-name="Path 3494" d="M229.6,236.56l9.738,125.221a3.54,3.54,0,0,1-7.034.775L214.44,237.367Z" transform="translate(-110.687 -122.105)" fill="#fff"/>
                    <path id="Path_3495" data-name="Path 3495" d="M229.6,236.56l9.738,125.221a3.54,3.54,0,0,1-7.034.775L214.44,237.367Z" transform="translate(-110.687 -122.105)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                    <path id="Path_3496" data-name="Path 3496" d="M132.727,99.455c-2.123-5.46-3.342-15.244-4.418-22.393l-7.447-63.829A14.4,14.4,0,0,0,106.555.5H42.111A14.4,14.4,0,0,0,27.8,13.234L20.357,77.062C19.281,84.212,18.062,94,15.939,99.455c0,0,43.575,5.869,58.394,5.869s58.394-5.869,58.394-5.869" transform="translate(-8.227 -0.258)" fill="#eee7e7"/>
                    <path id="Path_3497" data-name="Path 3497" d="M132.727,99.455c-2.123-5.46-3.342-15.244-4.418-22.393l-7.447-63.829A14.4,14.4,0,0,0,106.555.5H42.111A14.4,14.4,0,0,0,27.8,13.234L20.357,77.062C19.281,84.212,18.062,94,15.939,99.455c0,0,43.575,5.869,58.394,5.869S132.727,99.455,132.727,99.455Z" transform="translate(-8.227 -0.258)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                    <path id="Path_3498" data-name="Path 3498" d="M71.635,194.24a449.214,449.214,0,0,0,62.893,0" transform="translate(-36.976 -100.261)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                    <path id="Path_3499" data-name="Path 3499" d="M132.2,213.308c0-4.853-2.511-9.451-8.681-9.254l-5.481.466c-17.578,1.582-34.822,2.468-51.678,2.546-16.856-.079-34.1-.965-51.678-2.546L9.2,204.054c-6.17-.2-8.681,4.4-8.681,9.254-.209,4.422,1.605,7.57,7.1,8.624,11.3,2.169,30.366,3.132,45.177,3.488v0c4.606.109,13.323.173,13.558.173h.016c.236,0,8.953-.063,13.558-.173v0c14.811-.356,33.876-1.319,45.177-3.488,5.491-1.054,7.306-4.2,7.1-8.624" transform="translate(-0.258 -105.323)" fill="#eee7e7"/>
                    <path id="Path_3500" data-name="Path 3500" d="M132.2,213.308c0-4.853-2.511-9.451-8.681-9.254l-5.481.466c-17.578,1.582-34.822,2.468-51.678,2.546-16.856-.079-34.1-.965-51.678-2.546L9.2,204.054c-6.17-.2-8.681,4.4-8.681,9.254-.209,4.422,1.605,7.57,7.1,8.624,11.3,2.169,30.366,3.132,45.177,3.488v0c4.606.109,13.323.173,13.558.173h.016c.236,0,8.953-.063,13.558-.173v0c14.811-.356,33.876-1.319,45.177-3.488C130.59,220.877,132.405,217.73,132.2,213.308Z" transform="translate(-0.258 -105.323)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                  </g>
                </g>
              </g>
              <g id="Wall-Item" transform="translate(-2733.63 192.948)">
                <g id="Group_185" data-name="Group 185">
                  <rect id="Rectangle_152" data-name="Rectangle 152" width="92.904" height="123.68" transform="translate(3890.97 507.821) rotate(-0.279)" fill="#fdd7c2" stroke="#453838" strokeMiterlimit="10" strokeWidth="1.332"/>
                  <rect id="Rectangle_153" data-name="Rectangle 153" width="74.924" height="105.699" transform="translate(3900.003 516.767) rotate(-0.279)" fill="#fff"/>
                  <rect id="Rectangle_154" data-name="Rectangle 154" width="38.509" height="6.181" transform="translate(3918.244 523.224) rotate(-0.279)" fill="#f0e8e5"/>
                  <rect id="Rectangle_155" data-name="Rectangle 155" width="56.491" height="5.048" transform="translate(3909.328 538.843) rotate(-0.279)" fill="#f0e8e5"/>
                  <rect id="Rectangle_156" data-name="Rectangle 156" width="56.491" height="5.048" transform="translate(3909.376 548.77) rotate(-0.279)" fill="#f0e8e5"/>
                  <rect id="Rectangle_157" data-name="Rectangle 157" width="56.491" height="5.048" transform="translate(3909.425 558.698) rotate(-0.279)" fill="#f0e8e5"/>
                  <rect id="Rectangle_158" data-name="Rectangle 158" width="56.491" height="5.048" transform="translate(3909.473 568.625) rotate(-0.279)" fill="#f0e8e5"/>
                  <rect id="Rectangle_159" data-name="Rectangle 159" width="56.491" height="5.048" transform="translate(3909.521 578.553) rotate(-0.279)" fill="#f0e8e5"/>
                  <rect id="Rectangle_160" data-name="Rectangle 160" width="56.491" height="5.047" transform="translate(3909.57 588.48) rotate(-0.279)" fill="#f0e8e5"/>
                  <rect id="Rectangle_161" data-name="Rectangle 161" width="28.247" height="5.048" transform="translate(3937.923 610.686) rotate(-0.279)" fill="#f0e8e5"/>
                </g>
              </g>
              <g id="plant" transform="translate(-2663.383 192.948)">
                <g id="Group_187" data-name="Group 187">
                  <g id="Group_186" data-name="Group 186">
                    <path id="Path_271" data-name="Path 271" d="M3901.465,813.759c-4.351-5.35-7.147-13.57-7.147-22.806,0-16.124,8.5-29.2,18.977-29.2s18.977,13.071,18.977,29.2c0,9.236-2.8,17.456-7.148,22.806,4.352,5.349,7.148,13.569,7.148,22.805a38.681,38.681,0,0,1-5.192,20.023,38.681,38.681,0,0,1,5.192,20.023,39.4,39.4,0,0,1-4.542,18.923,39.4,39.4,0,0,1,4.542,18.923c0,16.123-8.5,29.194-18.977,29.194s-18.977-13.071-18.977-29.194a39.4,39.4,0,0,1,4.541-18.923,39.4,39.4,0,0,1-4.541-18.923,38.681,38.681,0,0,1,5.191-20.023,38.681,38.681,0,0,1-5.191-20.023C3894.318,827.328,3897.114,819.108,3901.465,813.759Z" fill="#f0e8e5" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.362"/>
                    <line id="Line_23" data-name="Line 23" x1="1.64" y2="169.331" transform="translate(3912.475 776.355)" fill="#fff" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.362"/>
                    <path id="Path_272" data-name="Path 272" d="M3954.115,823.746c-2.437-6.451-2.491-15.133.428-23.895,5.1-15.3,17.289-25.013,27.232-21.7s13.872,18.4,8.776,33.7c-2.919,8.762-8.169,15.677-13.989,19.377,2.438,6.451,2.492,15.133-.427,23.9a38.682,38.682,0,0,1-11.254,17.355,38.689,38.689,0,0,1-1.4,20.638,39.407,39.407,0,0,1-10.29,16.517,39.4,39.4,0,0,1-1.672,19.388c-5.1,15.3-17.288,25.013-27.231,21.7s-13.873-18.4-8.777-33.7a39.4,39.4,0,0,1,10.289-16.517,39.4,39.4,0,0,1,1.673-19.388,38.668,38.668,0,0,1,11.254-17.356,38.663,38.663,0,0,1,1.4-20.637C3943.046,834.361,3948.3,827.446,3954.115,823.746Z" fill="#fff" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.362"/>
                    <line id="Line_24" data-name="Line 24" x1="55.076" y2="160.132" transform="translate(3922.863 792.259)" fill="#fff" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.362"/>
                    <path id="Path_273" data-name="Path 273" d="M3883.171,863.643c-5.865-3.627-11.2-10.475-14.231-19.2-5.289-15.232-1.551-30.367,8.35-33.8s22.214,6.123,27.5,21.354c3.03,8.726,3.085,17.407.729,23.889,5.866,3.626,11.2,10.474,14.233,19.2a38.683,38.683,0,0,1,1.663,20.618,38.677,38.677,0,0,1,11.472,17.212,39.41,39.41,0,0,1,1.917,19.366,39.4,39.4,0,0,1,10.5,16.386c5.289,15.232,1.55,30.366-8.35,33.8s-22.214-6.123-27.5-21.355a39.409,39.409,0,0,1-1.918-19.365,39.4,39.4,0,0,1-10.5-16.386,38.665,38.665,0,0,1-1.664-20.618,38.673,38.673,0,0,1-11.472-17.212C3880.871,878.806,3880.816,870.123,3883.171,863.643Z" fill="#fff" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.362"/>
                    <line id="Line_25" data-name="Line 25" x2="53.994" y2="160.5" transform="translate(3882.853 824.159)" fill="#fff" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.362"/>
                  </g>
                  <path id="Rectangle_162" data-name="Rectangle 162" d="M32.691,0h24.58A32.691,32.691,0,0,1,89.961,32.691v54.78a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V32.691A32.691,32.691,0,0,1,32.691,0Z" transform="translate(3968.364 985.463) rotate(180)" fill={accentColor} stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.362"/>
                  <line id="Line_26" data-name="Line 26" x1="89.007" transform="translate(3878.711 917.646)" fill="#fff" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.362"/>
                  <path id="Rectangle_163" data-name="Rectangle 163" d="M8.176,0H104.32A8.176,8.176,0,0,1,112.5,8.176V11.25a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V8.176A8.176,8.176,0,0,1,8.176,0Z" transform="translate(3980.659 992.567) rotate(-180)" fill="#f0e8e5" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.362"/>
                </g>
              </g>
            </g>
          </g>
          <g id="Overhead-Lights" transform="translate(-149.453 61)">
            <g className="innerTransform" data-element="lights" >
              <g id="Group_881" data-name="Group 881" transform="translate(822.58 112.985)">
                <path id="Path_3491" data-name="Path 3491" d="M554.736,143.767H5.958a5.458,5.458,0,1,1,0-10.916H554.736a5.458,5.458,0,1,1,0,10.916Z" transform="translate(-0.127 2.843)" fill="none" stroke="#a69f9f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                <line id="Line_162" data-name="Line 162" y1="130.158" transform="translate(108.106 5.536)" fill="none" stroke="#a69f9f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                <line id="Line_163" data-name="Line 163" y1="135.694" transform="translate(452.334 0)" fill="none" stroke="#a69f9f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                <rect id="Rectangle_624" data-name="Rectangle 624" width="190.443" height="10.916" transform="translate(184.999 135.694)" fill="#a69f9f"/>
              </g>
              <g id="Group_1567" data-name="Group 1567" transform="translate(1466.58 112.985)">
                <path id="Path_3491-2" data-name="Path 3491" d="M554.736,143.767H5.958a5.458,5.458,0,1,1,0-10.916H554.736a5.458,5.458,0,1,1,0,10.916Z" transform="translate(-0.127 2.843)" fill="none" stroke="#a69f9f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                <line id="Line_162-2" data-name="Line 162" y1="130.158" transform="translate(108.106 5.536)" fill="none" stroke="#a69f9f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                <line id="Line_163-2" data-name="Line 163" y1="135.694" transform="translate(452.334 0)" fill="none" stroke="#a69f9f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                <rect id="Rectangle_624-2" data-name="Rectangle 624" width="190.443" height="10.916" transform="translate(184.999 135.694)" fill="#a69f9f"/>
              </g>
              <g id="Group_1443" data-name="Group 1443" transform="translate(178.58 112.985)">
                <path id="Path_3491-3" data-name="Path 3491" d="M554.736,143.767H5.958a5.458,5.458,0,1,1,0-10.916H554.736a5.458,5.458,0,1,1,0,10.916Z" transform="translate(-0.127 2.843)" fill="none" stroke="#a69f9f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                <line id="Line_162-3" data-name="Line 162" y1="130.158" transform="translate(108.106 5.536)" fill="none" stroke="#a69f9f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                <line id="Line_163-3" data-name="Line 163" y1="135.694" transform="translate(452.334 0)" fill="none" stroke="#a69f9f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                <rect id="Rectangle_624-3" data-name="Rectangle 624" width="190.443" height="10.916" transform="translate(184.999 135.694)" fill="#a69f9f"/>
              </g>
            </g>
          </g>
        </g>
      </svg>

    </div>

    )
}