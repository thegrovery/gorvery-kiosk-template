/*===== Components =====*/
import React from "react"


/*===== Styles =====*/
import componentStyles from './styles.module.scss'

/*===== Site Data =====*/
  import data from "@data/data.json"

export default function FinancialDoors({ 
  //Props
  id, children
}) {

  //console.log(author);
  let accentColor = data.accentColor1;

  return (
    <div className={componentStyles.FinancialDoors}>
      <svg width="1976" height="1263" viewBox="0 0 1976 1263">
        <defs>
          <linearGradient id="linear-gradient" x1="0.263" y1="-0.1" x2="0.918" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0" stopColor="#373231"/>
            <stop offset="1" stopColor="#453838"/>
          </linearGradient>
          <clipPath id="clip-iPad_Pro_12.9in_8">
            <rect width="1976" height="1263"/>
          </clipPath>
        </defs>
        <g id="iPad_Pro_12.9in_8" data-name="iPad Pro 12.9in – 8" clipPath="url(#clip-iPad_Pro_12.9in_8)">
          <rect width="1976" height="1263" fill="#fff"/>
          <path id="bg-color" d="M0,0H2009.991V1319.876H0Z" transform="translate(-14.793 -16.623)" fill="#c0f2fb" opacity="0.196"/>
          <rect id="floor" width="1989.786" height="150" transform="translate(-13.786 1153.253)" fill="#fff" stroke="#453838" strokeMiterlimit="10" strokeWidth="1"/>
          <g id="all-objects">
            <g id="doors" data-element="doors">
              <g id="door1" transform="translate(-2434.939 184.607)" className="droppable" data-door="1" data-door-name="Commercial Patients" data-link="/financial/commercial-patients/" data-active="inactive">
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
              <g id="door2" transform="translate(-2097.943 184.607)" className="droppable" data-door="1" data-door-name="Government Uninsured Patients" data-link="/financial/government-uninsured-patients/" data-active="inactive">
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
              <g id="signs">
                <g id="sign2" transform="translate(0 20)">
                  <rect id="Rectangle_185" data-name="Rectangle 185" width="279.31" height="86.697" transform="translate(491.691 491.358)" fill="#fff" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.264"/>
                  <rect id="Rectangle_1905" data-name="Rectangle 1905" width="279.31" height="9.697" transform="translate(491.691 568.358)" fill="#c0f2fb" stroke="#c0f2fb" strokeLinecap="round" strokeWidth="1.264"/>
                  <text id="Government_uninsured_patients" data-name="Government &amp; 
      uninsured patients" transform="translate(631.346 528)" fill="#595454" fontSize="22"   letterSpacing="0.02em"><tspan x="-89.679" y="0">GOVERNMENT &amp; </tspan><tspan x="-112.542" y="22">UNINSURED PATIENTS</tspan></text>
                </g>
                <g id="sign1" transform="translate(-336.996 20)">
                  <rect id="Rectangle_185-2" data-name="Rectangle 185" width="279.31" height="86.697" transform="translate(491.691 491.358)" fill="#fff" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.264"/>
                  <rect id="Rectangle_1905-2" data-name="Rectangle 1905" width="279.31" height="9.697" transform="translate(491.691 568.358)" fill="#c0f2fb" stroke="#c0f2fb" strokeLinecap="round" strokeWidth="1.264"/>
                  <text id="Commercial_Patients" data-name="Commercial Patients" transform="translate(631.347 539)" fill="#595454" fontSize="22"   letterSpacing="0.02em"><tspan x="-121.125" y="0">COMMERCIAL PATIENTS</tspan></text>
                </g>
              </g>
            </g>
            <g id="objects" data-element="objects">
              <g id="window" transform="translate(-160.396)">
                <rect id="Rectangle_1410" data-name="Rectangle 1410" width="359.694" height="330.247" transform="translate(1356.261 482.613)" fill="#fff"/>
                <path id="Path_4397" data-name="Path 4397" d="M1759.9,489.511H1384.558V148.977H1759.9Zm-362.777-9.739h350.212V158.716H1397.123Z" transform="translate(-35 328.809)" fill="#ede7e7"/>
                <rect id="Rectangle_1411" data-name="Rectangle 1411" width="12.565" height="327.88" transform="translate(1530.946 484.112)" fill="#ede7e7"/>
                <rect id="Rectangle_1412" data-name="Rectangle 1412" width="182.19" height="3.246" transform="translate(1355.509 581.827)" fill="#ede7e7"/>
                <rect id="Rectangle_1413" data-name="Rectangle 1413" width="182.19" height="3.246" transform="translate(1355.509 702.593)" fill="#ede7e7"/>
                <rect id="Rectangle_1414" data-name="Rectangle 1414" width="182.19" height="3.246" transform="translate(1537.175 581.827)" fill="#ede7e7"/>
                <rect id="Rectangle_1415" data-name="Rectangle 1415" width="182.19" height="3.246" transform="translate(1537.175 702.593)" fill="#ede7e7"/>
                <rect id="Rectangle_1416" data-name="Rectangle 1416" width="4.189" height="330.045" transform="translate(1445.38 483.544)" fill="#ede7e7"/>
                <rect id="Rectangle_1417" data-name="Rectangle 1417" width="4.189" height="330.045" transform="translate(1626.523 483.544)" fill="#ede7e7"/>
              </g>
              <g id="stool" transform="translate(715.98 331.499)">
                <rect id="Rectangle_1909" data-name="Rectangle 1909" width="63.983" height="23.634" transform="translate(141.096 630.417)" fill="#ede7e7" stroke="#707070" strokeWidth="1"/>
                <rect id="Rectangle_1910" data-name="Rectangle 1910" width="90.175" height="10.049" transform="translate(128 749.117)" fill="#ede7e7" stroke="#707070" strokeWidth="1"/>
                <path id="Path_4398" data-name="Path 4398" d="M118.807,854.218h0c-2.345,0-4.195-1.577-4.015-3.424L134.663,645H154.2L122.8,851.415c-.244,1.6-1.96,2.8-4,2.8" transform="translate(-2.073 -11.646)" fill="#ede7e7" stroke="#707070" strokeWidth="1"/>
                <path id="Path_4400" data-name="Path 4400" d="M233.042,854.218h0c2.345,0,4.194-1.577,4.016-3.424L217.187,645H197.652l31.392,206.416c.244,1.6,1.96,2.8,4,2.8" transform="translate(-3.569 -11.646)" fill="#ede7e7" stroke="#707070" strokeWidth="1"/>
                <path id="Path_4402" data-name="Path 4402" d="M217.557,647.7H133.034a11.655,11.655,0,0,1-11.655-11.655v-.935a11.655,11.655,0,0,1,11.655-11.655h84.524a11.655,11.655,0,0,1,11.655,11.655v.935A11.655,11.655,0,0,1,217.557,647.7" transform="translate(-2.192 -11.257)" fill="#a59f9f"/>
              </g>
              <g id="couch" transform="translate(-262)">
                <path id="Path_4403" data-name="Path 4403" d="M1435.554,854.87h0a5.479,5.479,0,0,0,5.055-4.005l17.922-53.709H1441.52l-9.414,53.731a3.362,3.362,0,0,0,3.448,3.984" transform="translate(-35.858 317.104)" fill="#a59f9f"/>
                <path id="Path_4405" data-name="Path 4405" d="M1922.266,854.87h0a5.478,5.478,0,0,1-5.055-4.005l-17.922-53.709H1916.3l9.414,53.731a3.362,3.362,0,0,1-3.448,3.984" transform="translate(-44.295 317.104)" fill="#a59f9f"/>
                <path id="Path_4407" data-name="Path 4407" d="M1927.027,727.373V591.97a44.041,44.041,0,0,0-44.041-44.041H1718.452a44.042,44.042,0,0,0-43.943,41.12,44.041,44.041,0,0,0-43.942-41.12H1466.032a44.041,44.041,0,0,0-44.041,44.041v135.4Z" transform="translate(-35.677 321.604)" fill="#ccc8c8" stroke={accentColor} strokeWidth="2"/>
                <path id="Path_4409" data-name="Path 4409" d="M1916.115,657.556v71.209H1430.867V657.556a32.641,32.641,0,1,0-65.282,0v92.276a44.213,44.213,0,0,0,44.214,44.213h527.384a44.213,44.213,0,0,0,44.213-44.213V657.556a32.64,32.64,0,1,0-65.281,0" transform="translate(-34.658 320.215)" fill="#ccc8c8" stroke={accentColor} strokeWidth="2"/>
                <path id="Path_4411" data-name="Path 4411" d="M1454.866,698.982h439.651a22.8,22.8,0,0,1,22.8,22.8v8.32H1432.067v-8.32a22.8,22.8,0,0,1,22.8-22.8" transform="translate(-35.858 318.877)" fill="#ccc8c8" stroke={accentColor} strokeWidth="2"/>
                <line id="Line_450" data-name="Line 450" y2="107.206" transform="translate(1638.833 910.654)" fill="#ede7e7"/>
                <line id="Line_451" data-name="Line 451" y2="107.206" transform="translate(1638.833 910.654)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.636"/>
              </g>
              <g id="plant" transform="translate(725.98)">
                <path id="Path_5195" data-name="Path 5195" d="M207.915,511.481c0,33.749-14.175,56.689-31.662,56.689S144.59,545.23,144.59,511.481s14.175-56.689,31.663-56.689,31.662,22.939,31.662,56.689" transform="translate(-12.611 323.287)" fill="#fff"/>
                <path id="Path_5196" data-name="Path 5196" d="M207.915,511.481c0,33.749-14.175,56.689-31.662,56.689S144.59,545.23,144.59,511.481s14.175-56.689,31.663-56.689S207.915,477.731,207.915,511.481Z" transform="translate(-12.611 323.287)" fill="none" stroke={accentColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.04"/>
                <ellipse id="Ellipse_127" data-name="Ellipse 127" cx="19.66" cy="56.689" rx="19.66" ry="56.689" transform="translate(143.982 778.079)" fill="none" stroke={accentColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.04"/>
                <ellipse id="Ellipse_128" data-name="Ellipse 128" cx="6.894" cy="56.689" rx="6.894" ry="56.689" transform="translate(156.748 778.079)" fill="none" stroke={accentColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.04"/>
                <path id="Path_5197" data-name="Path 5197" d="M210.223,442.2c11.932-11.932,25.487-14.6,32.2-7.881s4.051,20.272-7.88,32.2-25.487,14.6-32.2,7.88-4.052-20.272,7.881-32.2" transform="translate(-13.588 323.722)" fill="#fff"/>
                <path id="Path_5198" data-name="Path 5198" d="M210.223,442.2c11.932-11.932,25.487-14.6,32.2-7.881s4.051,20.272-7.88,32.2-25.487,14.6-32.2,7.88S198.29,454.127,210.223,442.2Z" transform="translate(-13.588 323.722)" fill="none" stroke={accentColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.04"/>
                <path id="Path_5199" data-name="Path 5199" d="M218.195,450.168c11.932-11.932,21.944-18.14,24.289-15.8s-3.863,12.358-15.795,24.29-21.944,18.14-24.29,15.795S206.263,462.1,218.195,450.168Z" transform="translate(-13.646 323.664)" fill="none" stroke={accentColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.04"/>
                <path id="Path_5200" data-name="Path 5200" d="M193.718,425.4c0,16.875-7.7,28.344-17.2,28.345s-17.2-11.47-17.2-28.345,7.7-28.345,17.2-28.345,17.2,11.47,17.2,28.345" transform="translate(-12.877 324.329)" fill="#fff"/>
                <path id="Path_5201" data-name="Path 5201" d="M193.718,425.4c0,16.875-7.7,28.344-17.2,28.345s-17.2-11.47-17.2-28.345,7.7-28.345,17.2-28.345S193.718,408.53,193.718,425.4Z" transform="translate(-12.877 324.329)" fill="none" stroke={accentColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.04"/>
                <path id="Path_5202" data-name="Path 5202" d="M182.731,425.4c0,16.875-2.69,28.344-6.007,28.345s-6.007-11.47-6.007-28.345,2.69-28.345,6.007-28.345S182.731,408.53,182.731,425.4Z" transform="translate(-13.083 324.329)" fill="none" stroke={accentColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.04"/>
                <path id="Path_5203" data-name="Path 5203" d="M179.794,617.169h-7.068a27.75,27.75,0,0,1-27.749-27.75V556.334h62.565V589.42a27.749,27.749,0,0,1-27.749,27.75" transform="translate(-12.618 321.453)" fill="#c0f2fb"/>
                <path id="Path_5204" data-name="Path 5204" d="M179.794,617.169h-7.068a27.75,27.75,0,0,1-27.749-27.75V556.334h62.565V589.42A27.749,27.749,0,0,1,179.794,617.169Z" transform="translate(-12.618 321.453)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.04"/>
                <line id="Line_725" data-name="Line 725" x2="61.475" transform="translate(132.905 891.456)" fill="#fff"/>
                <line id="Line_726" data-name="Line 726" x2="61.475" transform="translate(132.905 891.456)" fill="none" stroke="#595454" strokeMiterlimit="10" strokeWidth="1.04"/>
                <path id="Path_5205" data-name="Path 5205" d="M207.714,623.175h-63.2a7.523,7.523,0,0,1-7.523-7.523v-.3h78.241v.3a7.523,7.523,0,0,1-7.523,7.523" transform="translate(-12.474 320.387)" fill="#c3e8f5"/>
                <path id="Path_5206" data-name="Path 5206" d="M207.714,623.175h-63.2a7.523,7.523,0,0,1-7.523-7.523v-.3h78.241v.3A7.523,7.523,0,0,1,207.714,623.175Z" transform="translate(-12.474 320.387)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.04"/>
              </g>
              <g id="clock" transform="translate(84.212 -159)">
                <path id="Path_5209" data-name="Path 5209" d="M126.653,221.256A71.049,71.049,0,1,0,197.7,292.3a71.049,71.049,0,0,0-71.049-71.049m0,130.259a59.21,59.21,0,1,1,59.21-59.21,59.21,59.21,0,0,1-59.21,59.21" transform="translate(757.996 434.503)" fill={accentColor}/>
                <line id="Line_727" data-name="Line 727" y2="9.549" transform="translate(884.648 678.595)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.148"/>
                <line id="Line_728" data-name="Line 728" y2="9.549" transform="translate(884.648 765.473)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.148"/>
                <line id="Line_729" data-name="Line 729" x1="9.549" transform="translate(923.312 726.809)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.148"/>
                <line id="Line_730" data-name="Line 730" x1="9.549" transform="translate(836.434 726.809)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.148"/>
                <path id="Path_5211" data-name="Path 5211" d="M101.072,271.338l26.4,21.7L165.12,262" transform="translate(757.175 433.768)" fill="none" stroke={accentColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
              </g>
            </g>
          </g>
          <g data-element="lights">
            <path id="lights" d="M4610.342,5224.788h-45.317a2.536,2.536,0,0,1-1.356-4.678l65.078-41.035v-56.008H4209.429v56.008l20.837,13.141a2.512,2.512,0,0,1,.841.532l43.392,27.364a2.533,2.533,0,0,1-1.346,4.677h-45.321a21.089,21.089,0,0,1-41.876,0H4140.64a2.533,2.533,0,0,1-1.353-4.677l65.075-41.038v-56.006H3785.044v56.006l20.839,13.144a2.508,2.508,0,0,1,.834.525l43.4,27.37a2.532,2.532,0,0,1-1.349,4.677h-45.319a21.088,21.088,0,0,1-41.875,0h-45.319a2.534,2.534,0,0,1-1.35-4.677l65.076-41.041v-56H3360.655v56l20.849,13.151a2.518,2.518,0,0,1,.817.515l43.411,27.377a2.534,2.534,0,0,1-1.35,4.677h-45.32a21.089,21.089,0,0,1-41.875,0h-45.319a2.533,2.533,0,0,1-1.353-4.677l65.076-41.041v-56h-398.78v56.008l20.841,13.141a2.527,2.527,0,0,1,.834.528l43.4,27.367a2.535,2.535,0,0,1-1.349,4.678h-45.32a21.088,21.088,0,0,1-41.875,0h-45.316a2.535,2.535,0,0,1-1.357-4.678l65.077-41.035v-56.008H2532.429v56.008l20.836,13.141a2.52,2.52,0,0,1,.842.532l43.392,27.364a2.534,2.534,0,0,1-1.346,4.677h-45.321a21.089,21.089,0,0,1-41.876,0H2463.64a2.533,2.533,0,0,1-1.353-4.677l65.073-41.038v-56.006H2108.043v56.006l20.839,13.144a2.527,2.527,0,0,1,.835.525l43.4,27.37a2.532,2.532,0,0,1-1.349,4.677h-45.32a21.087,21.087,0,0,1-41.874,0h-45.32a2.534,2.534,0,0,1-1.349-4.677l65.076-41.041v-56H1683.656v56l20.849,13.151a2.5,2.5,0,0,1,.816.515l43.412,27.377a2.534,2.534,0,0,1-1.351,4.677h-45.319a21.089,21.089,0,0,1-41.875,0h-45.319a2.533,2.533,0,0,1-1.353-4.677l65.076-41.041v-56h-141.06a2.532,2.532,0,0,1,0-5.063H1681.1a.13.13,0,0,1,.025,0l.024,0H3358.1a.108.108,0,0,1,.05,0H4774.872a2.532,2.532,0,1,1,0,5.063H4633.811v56.008l20.841,13.141a2.528,2.528,0,0,1,.834.528l43.4,27.367a2.535,2.535,0,0,1-1.348,4.678h-45.321a21.087,21.087,0,0,1-41.874,0Zm20.936,13.505a16.041,16.041,0,0,0,15.813-13.505h-31.626A16.038,16.038,0,0,0,4631.278,5238.293Zm-424.383,0a16.045,16.045,0,0,0,15.814-13.505h-31.63A16.048,16.048,0,0,0,4206.895,5238.293Zm-424.385,0a16.045,16.045,0,0,0,15.813-13.505h-31.631A16.048,16.048,0,0,0,3782.51,5238.293Zm-424.385,0a16.047,16.047,0,0,0,15.815-13.505H3342.31A16.044,16.044,0,0,0,3358.125,5238.293Zm-403.847,0a16.042,16.042,0,0,0,15.814-13.505h-31.626A16.037,16.037,0,0,0,2954.277,5238.293Zm-424.382,0a16.048,16.048,0,0,0,15.815-13.505h-31.632A16.049,16.049,0,0,0,2529.895,5238.293Zm-424.386,0a16.045,16.045,0,0,0,15.815-13.505h-31.631A16.047,16.047,0,0,0,2105.509,5238.293Zm-424.385,0a16.049,16.049,0,0,0,15.816-13.505H1665.31A16.043,16.043,0,0,0,1681.124,5238.293Zm2892.663-18.57h114.98l-35.86-22.615h-43.263Zm-424.388,0h114.982L4228.52,5197.1h-43.256Zm-424.383,0H3840l-35.857-22.615h-43.267Zm-424.385,0h114.983l-35.863-22.618h-43.259Zm-403.844,0h114.98l-35.86-22.615h-43.263Zm-424.387,0h114.981l-35.863-22.618h-43.255Zm-424.384,0H2163l-35.857-22.615h-43.267Zm-424.385,0h114.982l-35.863-22.618h-43.259Zm2994.045-27.682h27.2l-13.6-8.577Zm-424.384,0h27.2l-13.6-8.577Zm-424.386,0h27.2l-13.6-8.578Zm-424.388,0h27.205l-13.6-8.578Zm-403.844,0h27.2l-13.6-8.577Zm-424.384,0h27.2l-13.6-8.577Zm-424.386,0h27.205l-13.6-8.578Zm-424.386,0h27.2l-13.6-8.578Z" transform="translate(-1535 -4911.86)" fill="#908a89" stroke="#edf7f7" strokeWidth="3"/>
            <rect id="Rectangle_1423" data-name="Rectangle 1423" width="1957.72" height="842.826" transform="translate(-10 331.499)" fill="none"/>
          </g>
          
        </g>
      </svg>

    </div>
      
  )
}
