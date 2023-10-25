/*===== Components =====*/
import React from "react"


/*===== Styles =====*/
import componentStyles from './styles.module.scss'

/*===== Site Data =====*/
  import data from "@data/data.json"

export default function ResourceDoors({
    //Props
    id,
    children
}) {

    //console.log(author);
    let accentColor = data.accentColor1;

    return (
        <div className={componentStyles.ResourceDoors}>
      <svg width="1976" height="1263" viewBox="0 0 1976 1263">
  <defs>
    <linearGradient id="linear-gradient" x1="0.263" y1="-0.1" x2="0.918" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0" stopColor="#373231"/>
      <stop offset="1" stopColor="#453838"/>
    </linearGradient>
    <clipPath id="clipPath">
      <rect id="Rectangle_1429" data-name="Rectangle 1429" width="180.115" height="284.8" fill="none"/>
    </clipPath>
    <clipPath id="clip-iPad_Pro_12.9in_9">
      <rect width="1976" height="1263"/>
    </clipPath>
  </defs>
  <g id="iPad_Pro_12.9in_9" data-name="iPad Pro 12.9in – 9" clipPath="url(#clip-iPad_Pro_12.9in_9)">
    <rect width="1976" height="1263" fill="#fff"/>
    <path id="bg-color" d="M0,0H1990.793V1497.623H0Z" transform="translate(-14.793 -93.623)" fill="#c5ffe6" stroke="#595454" strokeWidth="1" opacity="0.196"/>
    <rect id="floor" width="1989.786" height="327.747" transform="translate(-13.786 1153.253)" fill="#fff" stroke="#453838" strokeMiterlimit="10" strokeWidth="1"/>
    <rect id="Rectangle_1444" data-name="Rectangle 1444" width="1595.487" height="985.104" transform="translate(-46.087 189.002)" fill="none"/>
    <rect id="Rectangle_1450" data-name="Rectangle 1450" width="1595.489" height="985.106" transform="translate(-46.087 189)" fill="none"/>
    <g id="all-objects" >
      <g id="doors" data-element="doors">
        <g id="door2" transform="translate(-2434.935 184.607)" className="droppable" data-door="1" data-door-name="Brochures" data-link="/resources/brochures/" data-active="inactive">
          <g className="doorInnerBlack">
            <path id="Path_3483" data-name="Path 3483" d="M0,0H279.311V526.307H0Z" fill="#212121" transform="translate(2589.634 442.31)"/>
          </g>
          <g className="doorInner">
            <g className="doorInnerAnimate">
                        <g id="Group_193" data-name="Group 193" transform="translate(2589.634 442.31)">
                          <path id="Path_3483" data-name="Path 3483" d="M0,0H279.311V526.307H0Z" fill="#a69f9f"/>
                          <rect id="Rectangle_181" data-name="Rectangle 181" width="52.952" height="231.056" transform="translate(24.139 23.792)" fill="#fff" stroke="#595454" strokeWidth="1"/>
                          <rect id="Rectangle_183" data-name="Rectangle 183" width="10.71" height="161.774" transform="translate(6.14 185.963)" fill="#fff" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.403"/>
                          <path id="Path_3487" data-name="Path 3487" d="M128.4,267.483,159.178,237.8" transform="translate(-89.051 -79.297)" fill="none" stroke="#707070" strokeWidth="1"/>
                          <path id="Path_3488" data-name="Path 3488" d="M128.4,267.483l16.985-16.615" transform="translate(-89.051 -102.297)" fill="none" stroke="#707070" strokeWidth="1"/>
                        </g>
                        <g id="door-scanner" transform="translate(2678.943 600.393)">
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
        <g id="door3" transform="translate(-2106.281 184.607)" className="droppable" data-door="2" data-door-name="Videos" data-link="/resources/videos/" data-active="inactive">
          <g className="doorInnerBlack">
            <path id="Path_3483" data-name="Path 3483" d="M0,0H279.311V526.307H0Z" fill="#212121" transform="translate(2589.634 442.31)"/>
          </g>
          <g className="doorInner">
            <g className="doorInnerAnimate">
                        <g id="Group_193-2" data-name="Group 193" transform="translate(2589.634 442.31)">
                          <path id="Path_3483-2" data-name="Path 3483" d="M0,0H279.311V526.307H0Z" fill="#a69f9f"/>
                          <rect id="Rectangle_181-2" data-name="Rectangle 181" width="232.288" height="486.115" transform="translate(24.139 23.792)" fill="#fff" stroke="#595454" strokeWidth="1"/>
                          <rect id="Rectangle_183-2" data-name="Rectangle 183" width="10.71" height="161.774" transform="translate(6.14 185.963)" fill="#fff" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.403"/>
                          <path id="Path_3486" data-name="Path 3486" d="M70.567,369.352,208.763,237.8" fill="none" stroke="#707070" strokeWidth="1"/>
                          <path id="Path_3487-2" data-name="Path 3487" d="M70.567,369.352,208.763,237.8" transform="translate(-7 37)" fill="none" stroke="#707070" strokeWidth="1"/>
                        </g>
                        <g id="door-scanner-2" data-name="door-scanner" transform="translate(2679.29 600.393)">
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
          <g id="sign2" transform="translate(-336.991 20)">
            <rect id="Rectangle_185" data-name="Rectangle 185" width="279.31" height="86.697" transform="translate(491.691 491.358)" fill="#fff" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.264"/>
            <rect id="Rectangle_1905" data-name="Rectangle 1905" width="279.31" height="9.697" transform="translate(491.691 568.358)" fill="#c5ffe6" stroke="#c5ffe6" strokeLinecap="round" strokeWidth="1.264"/>
            <text id="BROCHURES" transform="translate(631.347 543.003)" fill="#595454" fontSize="24"   letterSpacing="0.02em"><tspan x="-68.723" y="0">BROCHURES</tspan></text>
          </g>
          <g id="sign3" transform="translate(-8.338 20)">
            <rect id="Rectangle_185-2" data-name="Rectangle 185" width="279.31" height="86.697" transform="translate(491.691 491.358)" fill="#fff" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.264"/>
            <rect id="Rectangle_1905-2" data-name="Rectangle 1905" width="279.31" height="9.697" transform="translate(491.691 568.358)" fill="#c5ffe6" stroke="#c5ffe6" strokeLinecap="round" strokeWidth="1.264"/>
            <text id="Videos" transform="translate(631.347 540)" fill="#595454" fontSize="24"   letterSpacing="0.02em"><tspan x="-41.753" y="0">VIDEOS</tspan></text>
          </g>
        </g>
      </g>
      <g id="objects" data-element="objects">
        <g id="pictureframe" transform="translate(-358.159)">
          <rect id="Rectangle_1426" data-name="Rectangle 1426" width="202.733" height="307.416" transform="translate(1346.16 595.773)" fill="#fff" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.043"/>
          <g id="Group_1221" data-name="Group 1221" transform="translate(1357.467 607.082)" opacity="0.69">
            <g id="Group_1220" data-name="Group 1220">
              <g id="Group_1219" data-name="Group 1219" clipPath="url(#clipPath)">
                <rect id="Rectangle_1427" data-name="Rectangle 1427" width="179.1" height="283.783" transform="translate(0.509 0.508)" fill="#e3f2e9"/>
                <rect id="Rectangle_1428" data-name="Rectangle 1428" width="179.1" height="283.783" transform="translate(0.509 0.508)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.043"/>
              </g>
            </g>
          </g>
          <path id="Path_4430" data-name="Path 4430" d="M1577.771,712.959s4.745-10.191-28.1-106.464c-30.073-88.159-6.716-69.344,19.19-46.97,38.425,33.186-31.951-107.049-5.213-130.349" transform="translate(-83.963 178.414)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
          <path id="Path_4431" data-name="Path 4431" d="M1515.854,712.959s4.745-10.191-28.1-106.464c-30.073-88.159-6.716-69.344,19.191-46.97,38.424,33.186-31.952-107.049-5.213-130.349" transform="translate(-82.436 178.414)" fill="none" stroke="#a84599" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
        </g>
        <g id="cactus" transform="translate(-553.859 189.002)">
          <path id="Path_4456" data-name="Path 4456" d="M1518.186,860.27c0,43.649-18.334,73.319-40.95,73.319s-40.95-29.67-40.95-73.319,18.333-73.319,40.95-73.319,40.95,29.67,40.95,73.319" transform="translate(-35.428 -19.413)" fill="#fff"/>
          <ellipse id="Ellipse_64" data-name="Ellipse 64" cx="40.95" cy="73.319" rx="40.95" ry="73.319" transform="translate(1400.857 767.538)" fill="none" stroke="#a84599" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.354"/>
          <path id="Path_4457" data-name="Path 4457" d="M1503.056,860.27c0,43.649-11.384,73.319-25.428,73.319s-25.429-29.67-25.429-73.319,11.385-73.319,25.429-73.319S1503.056,816.621,1503.056,860.27Z" transform="translate(-35.821 -19.413)" fill="none" stroke="#a84599" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.354"/>
          <ellipse id="Ellipse_65" data-name="Ellipse 65" cx="8.917" cy="73.319" rx="8.917" ry="73.319" transform="translate(1432.89 767.538)" fill="none" stroke="#a84599" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.354"/>
          <path id="Path_4458" data-name="Path 4458" d="M1521.645,770.448c15.433-15.433,32.964-18.88,41.652-10.192s5.24,26.219-10.192,41.652-32.964,18.88-41.651,10.192-5.24-26.219,10.192-41.652" transform="translate(-37.167 -18.64)" fill="#fff"/>
          <ellipse id="Ellipse_66" data-name="Ellipse 66" cx="36.659" cy="22.245" rx="36.659" ry="22.245" transform="translate(1458.556 777.731) rotate(-45)" fill="none" stroke="#a84599" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.354"/>
          <path id="Path_4459" data-name="Path 4459" d="M1531.983,780.787c15.433-15.433,28.381-23.463,31.415-20.428s-5,15.982-20.429,31.414-28.381,23.463-31.414,20.429S1516.551,796.22,1531.983,780.787Z" transform="translate(-37.269 -18.742)" fill="none" stroke="#a84599" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.354"/>
          <path id="Path_4460" data-name="Path 4460" d="M1499.953,748.438c0,21.825-9.959,36.659-22.244,36.659s-22.245-14.834-22.245-36.659,9.958-36.659,22.245-36.659,22.244,14.834,22.244,36.659" transform="translate(-35.901 -17.559)" fill="#fff"/>
          <path id="Path_4461" data-name="Path 4461" d="M1499.953,748.438c0,21.825-9.959,36.659-22.244,36.659s-22.245-14.834-22.245-36.659,9.958-36.659,22.245-36.659S1499.953,726.613,1499.953,748.438Z" transform="translate(-35.901 -17.559)" fill="none" stroke="#a84599" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.354"/>
          <path id="Path_4462" data-name="Path 4462" d="M1485.843,748.438c0,21.825-3.478,36.659-7.768,36.659s-7.769-14.834-7.769-36.659,3.478-36.659,7.769-36.659S1485.843,726.613,1485.843,748.438Z" transform="translate(-36.268 -17.559)" fill="none" stroke="#a84599" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.354"/>
          <path id="Path_4463" data-name="Path 4463" d="M1490.146,997.853h-25.795a27.564,27.564,0,0,1-27.564-27.563V919.171h80.922V970.29a27.563,27.563,0,0,1-27.563,27.563" transform="translate(-35.441 -22.675)" fill="#ede7e7"/>
          <path id="Path_4464" data-name="Path 4464" d="M1490.146,997.853h-25.795a27.564,27.564,0,0,1-27.564-27.563V919.171h80.922V970.29A27.563,27.563,0,0,1,1490.146,997.853Z" transform="translate(-35.441 -22.675)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.354"/>
          <line id="Line_468" data-name="Line 468" x2="79.508" transform="translate(1402.053 914.175)" fill="#fff"/>
          <line id="Line_469" data-name="Line 469" x2="79.508" transform="translate(1402.053 914.175)" fill="none" stroke="#595454" strokeMiterlimit="10" strokeWidth="1.354"/>
          <path id="Path_4465" data-name="Path 4465" d="M1520.116,1006.138h-86.25a7.472,7.472,0,0,1-7.471-7.472v-2.647h101.193v2.647a7.472,7.472,0,0,1-7.472,7.472" transform="translate(-35.184 -24.57)" fill="#c3bebe"/>
          <path id="Path_4466" data-name="Path 4466" d="M1520.116,1006.138h-86.25a7.472,7.472,0,0,1-7.471-7.472v-2.647h101.193v2.647A7.472,7.472,0,0,1,1520.116,1006.138Z" transform="translate(-35.184 -24.57)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.354"/>
        </g>
        <g id="leftside-things" transform="translate(-132)">
          <rect id="Rectangle_1430" data-name="Rectangle 1430" width="21.322" height="122.632" transform="translate(19.337 421.285)" fill={accentColor}/>
          <rect id="Rectangle_1431" data-name="Rectangle 1431" width="21.322" height="122.632" transform="translate(19.337 421.285)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.331"/>
          <rect id="Rectangle_1432" data-name="Rectangle 1432" width="10.661" height="122.632" transform="translate(154.162 421.285)" fill={accentColor}/>
          <rect id="Rectangle_1433" data-name="Rectangle 1433" width="10.661" height="122.632" transform="translate(154.162 421.285)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.331"/>
          <rect id="Rectangle_1434" data-name="Rectangle 1434" width="27.1" height="95.349" transform="translate(164.823 448.568)" fill="#ede7e7"/>
          <rect id="Rectangle_1435" data-name="Rectangle 1435" width="27.1" height="95.349" transform="translate(164.823 448.568)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.331"/>
          <rect id="Rectangle_1436" data-name="Rectangle 1436" width="5.831" height="116.992" transform="translate(13.506 426.925)" fill="#fff"/>
          <rect id="Rectangle_1437" data-name="Rectangle 1437" width="5.831" height="116.992" transform="translate(13.506 426.925)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.331"/>
          <rect id="Rectangle_1438" data-name="Rectangle 1438" width="27.034" height="116.992" transform="translate(40.711 435.312) rotate(-22.1)" fill="#ede7e7"/>
          <rect id="Rectangle_1439" data-name="Rectangle 1439" width="27.034" height="116.992" transform="translate(40.711 435.312) rotate(-22.1)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.331"/>
          <rect id="Rectangle_1440" data-name="Rectangle 1440" width="11.95" height="116.992" transform="translate(90.024 435.313) rotate(-22.102)" fill="#fff"/>
          <rect id="Rectangle_1441" data-name="Rectangle 1441" width="11.95" height="116.992" transform="translate(90.024 435.313) rotate(-22.102)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.331"/>
          <rect id="Rectangle_1442" data-name="Rectangle 1442" width="18.658" height="134.352" transform="translate(63.342 419.191) rotate(-22.1)" fill="#fff"/>
          <rect id="Rectangle_1443" data-name="Rectangle 1443" width="18.658" height="134.352" transform="translate(63.342 419.191) rotate(-22.1)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.331"/>
          <path id="Path_4432" data-name="Path 4432" d="M47.859,565.284H269.976V550.551H47.859" transform="translate(-47.267 175.42)" fill="#fff" stroke="#a69f9f" strokeWidth="2"/>
          <path id="Path_4434" data-name="Path 4434" d="M45.98,379.494H268.1V364.76H45.98" transform="translate(-47.221 180.003)" fill="#fff" stroke="#a69f9f" strokeWidth="2"/>
          <path id="Path_4438" data-name="Path 4438" d="M172.4,548.078H64.808v-53.4H172.4Z" transform="translate(-47.686 176.798)" fill={accentColor} stroke="#595454" strokeWidth="1"/>
          <path id="Path_4440" data-name="Path 4440" d="M207.6,424.513c-2.955-3.634-4.854-9.217-4.854-15.49,0-10.952,5.771-19.829,12.89-19.829s12.889,8.878,12.889,19.829c0,6.273-1.9,11.856-4.855,15.49,2.956,3.633,4.855,9.217,4.855,15.49A26.278,26.278,0,0,1,225,453.6a26.276,26.276,0,0,1,3.526,13.6,26.764,26.764,0,0,1-3.085,12.853,26.76,26.76,0,0,1,3.085,12.852c0,10.952-5.771,19.829-12.889,19.829s-12.89-8.877-12.89-19.829a26.76,26.76,0,0,1,3.084-12.852,26.764,26.764,0,0,1-3.084-12.853,26.276,26.276,0,0,1,3.526-13.6,26.278,26.278,0,0,1-3.526-13.6c0-6.273,1.9-11.857,4.854-15.49" transform="translate(-51.088 179.4)" fill="#cde8db"/>
          <path id="Path_4441" data-name="Path 4441" d="M207.6,424.513c-2.955-3.634-4.854-9.217-4.854-15.49,0-10.952,5.771-19.829,12.89-19.829s12.889,8.878,12.889,19.829c0,6.273-1.9,11.856-4.855,15.49,2.956,3.633,4.855,9.217,4.855,15.49A26.278,26.278,0,0,1,225,453.6a26.276,26.276,0,0,1,3.526,13.6,26.764,26.764,0,0,1-3.085,12.853,26.76,26.76,0,0,1,3.085,12.852c0,10.952-5.771,19.829-12.889,19.829s-12.89-8.877-12.89-19.829a26.76,26.76,0,0,1,3.084-12.852,26.764,26.764,0,0,1-3.084-12.853,26.276,26.276,0,0,1,3.526-13.6,26.278,26.278,0,0,1-3.526-13.6C202.748,433.73,204.647,428.146,207.6,424.513Z" transform="translate(-51.088 179.4)" fill="none" stroke="#a59f9f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.949"/>
          <line id="Line_458" data-name="Line 458" x1="1.114" y2="115.013" transform="translate(163.993 578.507)" fill="#fff"/>
          <line id="Line_459" data-name="Line 459" x1="1.114" y2="115.013" transform="translate(163.993 578.507)" fill="none" stroke="#a59f9f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.949"/>
          <path id="Path_4442" data-name="Path 4442" d="M243.689,431.567c-1.655-4.381-1.692-10.278.291-16.23,3.461-10.39,11.743-16.989,18.5-14.739s9.423,12.5,5.961,22.887c-1.983,5.951-5.549,10.649-9.5,13.162,1.656,4.381,1.692,10.278-.291,16.23A26.267,26.267,0,0,1,251,464.665a26.272,26.272,0,0,1-.953,14.017,26.759,26.759,0,0,1-6.989,11.218,26.769,26.769,0,0,1-1.135,13.169c-3.461,10.39-11.743,16.989-18.5,14.739s-9.423-12.5-5.961-22.887a26.764,26.764,0,0,1,6.988-11.218,26.77,26.77,0,0,1,1.136-13.169,26.268,26.268,0,0,1,7.644-11.788,26.272,26.272,0,0,1,.953-14.017c1.983-5.952,5.55-10.649,9.5-13.162" transform="translate(-51.414 179.129)" fill="#e1f1eb"/>
          <path id="Path_4443" data-name="Path 4443" d="M243.689,431.567c-1.655-4.381-1.692-10.278.291-16.23,3.461-10.39,11.743-16.989,18.5-14.739s9.423,12.5,5.961,22.887c-1.983,5.951-5.549,10.649-9.5,13.162,1.656,4.381,1.692,10.278-.291,16.23A26.267,26.267,0,0,1,251,464.665a26.272,26.272,0,0,1-.953,14.017,26.759,26.759,0,0,1-6.989,11.218,26.769,26.769,0,0,1-1.135,13.169c-3.461,10.39-11.743,16.989-18.5,14.739s-9.423-12.5-5.961-22.887a26.764,26.764,0,0,1,6.988-11.218,26.77,26.77,0,0,1,1.136-13.169,26.268,26.268,0,0,1,7.644-11.788,26.272,26.272,0,0,1,.953-14.017C236.171,438.776,239.737,434.08,243.689,431.567Z" transform="translate(-51.414 179.129)" fill="none" stroke="#a59f9f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.949"/>
          <line id="Line_460" data-name="Line 460" x1="37.409" y2="108.765" transform="translate(171.049 589.309)" fill="#fff"/>
          <line id="Line_461" data-name="Line 461" x1="37.409" y2="108.765" transform="translate(171.049 589.309)" fill="none" stroke="#a59f9f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.949"/>
          <path id="Path_4444" data-name="Path 4444" d="M194.7,459.222c-3.984-2.464-7.609-7.114-9.667-13.041-3.592-10.345-1.053-20.625,5.672-22.96s15.088,4.159,18.681,14.505c2.058,5.926,2.1,11.823.5,16.225,3.984,2.464,7.61,7.115,9.667,13.041a26.271,26.271,0,0,1,1.13,14,26.273,26.273,0,0,1,7.792,11.691,26.754,26.754,0,0,1,1.3,13.153,26.765,26.765,0,0,1,7.13,11.13c3.592,10.345,1.053,20.625-5.672,22.96s-15.088-4.159-18.681-14.5a26.755,26.755,0,0,1-1.3-13.153,26.755,26.755,0,0,1-7.13-11.129,26.264,26.264,0,0,1-1.13-14,26.272,26.272,0,0,1-7.792-11.69c-2.058-5.926-2.1-11.824-.5-16.226" transform="translate(-50.611 178.572)" fill="#e1f1eb"/>
          <path id="Path_4445" data-name="Path 4445" d="M194.7,459.222c-3.984-2.464-7.609-7.114-9.667-13.041-3.592-10.345-1.053-20.625,5.672-22.96s15.088,4.159,18.681,14.505c2.058,5.926,2.1,11.823.5,16.225,3.984,2.464,7.61,7.115,9.667,13.041a26.271,26.271,0,0,1,1.13,14,26.273,26.273,0,0,1,7.792,11.691,26.754,26.754,0,0,1,1.3,13.153,26.765,26.765,0,0,1,7.13,11.13c3.592,10.345,1.053,20.625-5.672,22.96s-15.088-4.159-18.681-14.5a26.755,26.755,0,0,1-1.3-13.153,26.755,26.755,0,0,1-7.13-11.129,26.264,26.264,0,0,1-1.13-14,26.272,26.272,0,0,1-7.792-11.69C193.138,469.522,193.1,463.624,194.7,459.222Z" transform="translate(-50.611 178.572)" fill="none" stroke="#a59f9f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.949"/>
          <line id="Line_462" data-name="Line 462" x2="36.674" y2="109.015" transform="translate(143.873 610.977)" fill="#fff"/>
          <line id="Line_463" data-name="Line 463" x2="36.674" y2="109.015" transform="translate(143.873 610.977)" fill="none" stroke="#a59f9f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.949"/>
          <path id="Path_4446" data-name="Path 4446" d="M219.265,543.477h5.9a27.6,27.6,0,0,0,27.6-27.6V484.065h-61.1v31.812a27.6,27.6,0,0,0,27.6,27.6" transform="translate(-50.815 177.06)" fill="#ede7e7"/>
          <path id="Path_4447" data-name="Path 4447" d="M219.265,543.477h5.9a27.6,27.6,0,0,0,27.6-27.6V484.065h-61.1v31.812A27.6,27.6,0,0,0,219.265,543.477Z" transform="translate(-50.815 177.06)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.949"/>
          <line id="Line_464" data-name="Line 464" x1="60.455" transform="translate(141.06 674.475)" fill="#fff"/>
          <line id="Line_465" data-name="Line 465" x1="60.455" transform="translate(141.06 674.475)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.949"/>
          <path id="Path_4448" data-name="Path 4448" d="M191.436,549.735h62.6a6.9,6.9,0,0,0,6.9-6.9v-.738h-76.41v.738a6.9,6.9,0,0,0,6.9,6.9" transform="translate(-50.639 175.628)" fill="#cbc7c7"/>
          <path id="Path_4449" data-name="Path 4449" d="M191.436,549.735h62.6a6.9,6.9,0,0,0,6.9-6.9v-.738h-76.41v.738A6.9,6.9,0,0,0,191.436,549.735Z" transform="translate(-50.639 175.628)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.949"/>
          <g id="chair" transform="translate(129.836 899.672)">
            <rect id="Rectangle_626" data-name="Rectangle 626" width="101.344" height="22.066" transform="translate(23.833 124.574)" fill="#fff"/>
            <rect id="Rectangle_627" data-name="Rectangle 627" width="101.344" height="22.066" transform="translate(23.833 124.574)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
            <g id="Group_883" data-name="Group 883" transform="translate(0.242 0.242)">
              <g id="Group_1444" data-name="Group 1444">
                <path id="Path_3492" data-name="Path 3492" d="M18.322,236.56,7.346,377.71a3.991,3.991,0,0,0,7.929.873L35.413,237.469Z" transform="translate(-3.607 -107.818)" fill="#fff"/>
                <path id="Path_3493" data-name="Path 3493" d="M18.322,236.56,7.346,377.71a3.991,3.991,0,0,0,7.929.873L35.413,237.469Z" transform="translate(-3.607 -107.818)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                <path id="Path_3494" data-name="Path 3494" d="M231.53,236.56l10.976,141.15a3.991,3.991,0,0,1-7.929.873L214.44,237.469Z" transform="translate(-97.762 -107.818)" fill="#fff"/>
                <path id="Path_3495" data-name="Path 3495" d="M231.53,236.56l10.976,141.15a3.991,3.991,0,0,1-7.929.873L214.44,237.469Z" transform="translate(-97.762 -107.818)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                <path id="Path_3496" data-name="Path 3496" d="M147.583,112.043c-2.393-6.154-3.767-17.183-4.98-25.241l-8.394-71.948A16.236,16.236,0,0,0,118.082.5H45.44A16.236,16.236,0,0,0,29.314,14.854L20.919,86.8c-1.212,8.059-2.587,19.087-4.98,25.241,0,0,49.118,6.616,65.822,6.616s65.822-6.616,65.822-6.616" transform="translate(-7.519 -0.5)" fill="#eee7e7"/>
                <path id="Path_3497" data-name="Path 3497" d="M147.583,112.043c-2.393-6.154-3.767-17.183-4.98-25.241l-8.394-71.948A16.236,16.236,0,0,0,118.082.5H45.44A16.236,16.236,0,0,0,29.314,14.854L20.919,86.8c-1.212,8.059-2.587,19.087-4.98,25.241,0,0,49.118,6.616,65.822,6.616S147.583,112.043,147.583,112.043Z" transform="translate(-7.519 -0.5)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                <path id="Path_3498" data-name="Path 3498" d="M71.635,194.24a506.359,506.359,0,0,0,70.894,0" transform="translate(-32.84 -88.579)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                <path id="Path_3499" data-name="Path 3499" d="M148.948,214.486c0-5.471-2.83-10.653-9.785-10.431l-6.179.526c-19.814,1.783-39.251,2.781-58.251,2.87-19-.089-38.437-1.087-58.251-2.87l-6.179-.526c-6.955-.221-9.785,4.961-9.785,10.431-.236,4.985,1.81,8.532,8,9.721,12.738,2.445,34.228,3.531,50.924,3.932v0c5.191.123,15.018.195,15.283.195h.018c.266,0,10.092-.071,15.283-.195v0c16.7-.4,38.186-1.487,50.924-3.932,6.19-1.188,8.236-4.736,8-9.721" transform="translate(-0.5 -93.037)" fill="#eee7e7"/>
                <path id="Path_3500" data-name="Path 3500" d="M148.948,214.486c0-5.471-2.83-10.653-9.785-10.431l-6.179.526c-19.814,1.783-39.251,2.781-58.251,2.87-19-.089-38.437-1.087-58.251-2.87l-6.179-.526c-6.955-.221-9.785,4.961-9.785,10.431-.236,4.985,1.81,8.532,8,9.721,12.738,2.445,34.228,3.531,50.924,3.932v0c5.191.123,15.018.195,15.283.195h.018c.266,0,10.092-.071,15.283-.195v0c16.7-.4,38.186-1.487,50.924-3.932C147.138,223.018,149.184,219.47,148.948,214.486Z" transform="translate(-0.5 -93.037)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
              </g>
            </g>
          </g>
          <g id="chair-2" data-name="chair" transform="translate(-44.82 899.672)">
            <rect id="Rectangle_626-2" data-name="Rectangle 626" width="101.344" height="22.066" transform="translate(23.833 124.574)" fill="#fff"/>
            <rect id="Rectangle_627-2" data-name="Rectangle 627" width="101.344" height="22.066" transform="translate(23.833 124.574)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
            <g id="Group_883-2" data-name="Group 883" transform="translate(0.242 0.242)">
              <g id="Group_1444-2" data-name="Group 1444">
                <path id="Path_3492-2" data-name="Path 3492" d="M18.322,236.56,7.346,377.71a3.991,3.991,0,0,0,7.929.873L35.413,237.469Z" transform="translate(-3.607 -107.818)" fill="#fff"/>
                <path id="Path_3493-2" data-name="Path 3493" d="M18.322,236.56,7.346,377.71a3.991,3.991,0,0,0,7.929.873L35.413,237.469Z" transform="translate(-3.607 -107.818)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                <path id="Path_3494-2" data-name="Path 3494" d="M231.53,236.56l10.976,141.15a3.991,3.991,0,0,1-7.929.873L214.44,237.469Z" transform="translate(-97.762 -107.818)" fill="#fff"/>
                <path id="Path_3495-2" data-name="Path 3495" d="M231.53,236.56l10.976,141.15a3.991,3.991,0,0,1-7.929.873L214.44,237.469Z" transform="translate(-97.762 -107.818)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                <path id="Path_3496-2" data-name="Path 3496" d="M147.583,112.043c-2.393-6.154-3.767-17.183-4.98-25.241l-8.394-71.948A16.236,16.236,0,0,0,118.082.5H45.44A16.236,16.236,0,0,0,29.314,14.854L20.919,86.8c-1.212,8.059-2.587,19.087-4.98,25.241,0,0,49.118,6.616,65.822,6.616s65.822-6.616,65.822-6.616" transform="translate(-7.519 -0.5)" fill="#eee7e7"/>
                <path id="Path_3497-2" data-name="Path 3497" d="M147.583,112.043c-2.393-6.154-3.767-17.183-4.98-25.241l-8.394-71.948A16.236,16.236,0,0,0,118.082.5H45.44A16.236,16.236,0,0,0,29.314,14.854L20.919,86.8c-1.212,8.059-2.587,19.087-4.98,25.241,0,0,49.118,6.616,65.822,6.616S147.583,112.043,147.583,112.043Z" transform="translate(-7.519 -0.5)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                <path id="Path_3498-2" data-name="Path 3498" d="M71.635,194.24a506.359,506.359,0,0,0,70.894,0" transform="translate(-32.84 -88.579)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                <path id="Path_3499-2" data-name="Path 3499" d="M148.948,214.486c0-5.471-2.83-10.653-9.785-10.431l-6.179.526c-19.814,1.783-39.251,2.781-58.251,2.87-19-.089-38.437-1.087-58.251-2.87l-6.179-.526c-6.955-.221-9.785,4.961-9.785,10.431-.236,4.985,1.81,8.532,8,9.721,12.738,2.445,34.228,3.531,50.924,3.932v0c5.191.123,15.018.195,15.283.195h.018c.266,0,10.092-.071,15.283-.195v0c16.7-.4,38.186-1.487,50.924-3.932,6.19-1.188,8.236-4.736,8-9.721" transform="translate(-0.5 -93.037)" fill="#eee7e7"/>
                <path id="Path_3500-2" data-name="Path 3500" d="M148.948,214.486c0-5.471-2.83-10.653-9.785-10.431l-6.179.526c-19.814,1.783-39.251,2.781-58.251,2.87-19-.089-38.437-1.087-58.251-2.87l-6.179-.526c-6.955-.221-9.785,4.961-9.785,10.431-.236,4.985,1.81,8.532,8,9.721,12.738,2.445,34.228,3.531,50.924,3.932v0c5.191.123,15.018.195,15.283.195h.018c.266,0,10.092-.071,15.283-.195v0c16.7-.4,38.186-1.487,50.924-3.932C147.138,223.018,149.184,219.47,148.948,214.486Z" transform="translate(-0.5 -93.037)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
              </g>
            </g>
          </g>
          <path id="Path_5208" data-name="Path 5208" d="M127.867,486.468l3.77-15.638,2.256-9.355s-2.081-1.929-12.92-.69c-16.365,1.87-22.838-6.969-45.182-1.892l10.33,34.861h71.444l7.535-21.247c-9.794-3.112-21.365-4.679-33.463-1.677" transform="translate(-47.956 177.72)" fill="#fff" stroke="#707070" strokeWidth="1"/>
        </g>
      </g>
    </g>
    <g id="lights" data-element="lights">
      <g id="light" transform="translate(-560.632 -117.411)">
        <line id="Line_466" data-name="Line 466" y2="207.826" transform="translate(1430.978 189.002)" fill="#fff"/>
        <line id="Line_467" data-name="Line 467" y2="304.917" transform="translate(1430.978 91.911)" fill="none" stroke="#595454" strokeMiterlimit="10" strokeWidth="1"/>
        <path id="Path_4450" data-name="Path 4450" d="M1522.866,217.328a8.664,8.664,0,1,0-17.329,0" transform="translate(-83.224 183.853)" fill="#fff"/>
        <path id="Path_4451" data-name="Path 4451" d="M1522.866,217.328a8.664,8.664,0,1,0-17.329,0" transform="translate(-83.224 183.853)" fill="none" stroke="#595454" strokeMiterlimit="10" strokeWidth="1"/>
        <path id="Path_4454" data-name="Path 4454" d="M1526.971,229.71V217.547H1497.49V229.71a15.85,15.85,0,0,1-11.124,15.13,86.614,86.614,0,0,0-60.739,82.649h173.207a86.614,86.614,0,0,0-60.74-82.649,15.851,15.851,0,0,1-11.123-15.13" transform="translate(-81.252 183.634)" fill={accentColor}/>
        <path id="Path_5207" data-name="Path 5207" d="M1532.412,330.27a18.459,18.459,0,1,1-36.918,0Z" transform="translate(-82.976 180.853)" fill="#ede7e7" stroke="#be2bbb" strokeWidth="1"/>
      </g>
      <g id="light-2" data-name="light" transform="translate(-1136.623 -117.411)">
        <line id="Line_466-2" data-name="Line 466" y2="207.826" transform="translate(1430.978 189.002)" fill="#fff"/>
        <line id="Line_467-2" data-name="Line 467" y2="304.917" transform="translate(1430.978 91.911)" fill="none" stroke="#595454" strokeMiterlimit="10" strokeWidth="1"/>
        <path id="Path_4450-2" data-name="Path 4450" d="M1522.866,217.328a8.664,8.664,0,1,0-17.329,0" transform="translate(-83.224 183.853)" fill="#fff"/>
        <path id="Path_4451-2" data-name="Path 4451" d="M1522.866,217.328a8.664,8.664,0,1,0-17.329,0" transform="translate(-83.224 183.853)" fill="none" stroke="#595454" strokeMiterlimit="10" strokeWidth="1"/>
        <path id="Path_4454-2" data-name="Path 4454" d="M1526.971,229.71V217.547H1497.49V229.71a15.85,15.85,0,0,1-11.124,15.13,86.614,86.614,0,0,0-60.739,82.649h173.207a86.614,86.614,0,0,0-60.74-82.649,15.851,15.851,0,0,1-11.123-15.13" transform="translate(-81.252 183.634)" fill={accentColor}/>
        <path id="Path_5207-2" data-name="Path 5207" d="M1532.412,330.27a18.459,18.459,0,1,1-36.918,0Z" transform="translate(-82.976 180.853)" fill="#ede7e7" stroke="#be2bbb" strokeWidth="1"/>
      </g>
      <g id="light-3" data-name="light" transform="translate(15.359 -117.411)">
        <line id="Line_466-3" data-name="Line 466" y2="207.826" transform="translate(1430.978 189.002)" fill="#fff"/>
        <line id="Line_467-3" data-name="Line 467" y2="304.917" transform="translate(1430.978 91.911)" fill="none" stroke="#595454" strokeMiterlimit="10" strokeWidth="1"/>
        <path id="Path_4450-3" data-name="Path 4450" d="M1522.866,217.328a8.664,8.664,0,1,0-17.329,0" transform="translate(-83.224 183.853)" fill="#fff"/>
        <path id="Path_4451-3" data-name="Path 4451" d="M1522.866,217.328a8.664,8.664,0,1,0-17.329,0" transform="translate(-83.224 183.853)" fill="none" stroke="#595454" strokeMiterlimit="10" strokeWidth="1"/>
        <path id="Path_4454-3" data-name="Path 4454" d="M1526.971,229.71V217.547H1497.49V229.71a15.85,15.85,0,0,1-11.124,15.13,86.614,86.614,0,0,0-60.739,82.649h173.207a86.614,86.614,0,0,0-60.74-82.649,15.851,15.851,0,0,1-11.123-15.13" transform="translate(-81.252 183.634)" fill={accentColor}/>
        <path id="Path_5207-3" data-name="Path 5207" d="M1532.412,330.27a18.459,18.459,0,1,1-36.918,0Z" transform="translate(-82.976 180.853)" fill="#ede7e7" stroke="#be2bbb" strokeWidth="1"/>
      </g>
    </g>
  </g>
</svg>

    </div>

    )
}