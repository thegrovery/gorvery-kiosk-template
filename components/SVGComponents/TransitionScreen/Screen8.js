/*===== Components =====*/
import React from "react"
import Link from 'next/link'
import ChevronDown from '@components/SVGComponents/ChevronDown'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

/*===== Site Data =====*/
import data from "@data/data.json"


export default function Screen8({ 
  //Props
  id, children
}) {

  //console.log(author);
  let accentColor = data.accentColor1;

  return (
    <div className={componentStyles.Screen8}>
      {/*<svg width="1920" height="1080" viewBox="0 0 1920 1080">
        <defs>
          <clipPath id="clip-path">
            <rect id="Rectangle_1521" data-name="Rectangle 1521" width="1616.299" height="1440.279" transform="translate(0 0.001)" fill="none"/>
          </clipPath>
          <clipPath id="clip-path-2">
            <rect id="Rectangle_1525" data-name="Rectangle 1525" width="1602.917" height="892.88" transform="translate(0 95.523)" fill="none"/>
          </clipPath>
          <clipPath id="clip-Government_Uninsured_Patients_-_Room_Scene_">
            <rect width="1920" height="1080"/>
          </clipPath>
        </defs>
        <g id="Government_Uninsured_Patients_-_Room_Scene_" data-name="Government &amp; Uninsured Patients - Room Scene " clip-path="url(#clip-Government_Uninsured_Patients_-_Room_Scene_)">
          <rect width="1920" height="1080" fill="#fff"/>
          <g id="Layer_2" data-name="Layer 2" transform="translate(-7034.963 -8.205)">
            <path id="Path_3504" data-name="Path 3504" d="M0,0H2008.065V932.76H0Z" transform="translate(6987.491 -12.347)" fill="#c0f2fb" stroke="#595454" stroke-width="1.03" opacity="0.203"/>
          </g>
          <g id="Group_1242" data-name="Group 1242" transform="translate(-13 116.999)">
            <rect id="Rectangle_1498" data-name="Rectangle 1498" width="482.622" height="517.983" transform="translate(1121.676 7.572)" fill="#fff"/>
            <path id="Path_4577" data-name="Path 4577" d="M1129.54,15.277h469.9V518.843h-469.9Zm-16.859,518.841H1616.3V0H1112.681Z" fill="#ede7e7"/>
            <rect id="Rectangle_1499" data-name="Rectangle 1499" width="16.859" height="514.268" transform="translate(1356.06 9.925)" fill="#ede7e7"/>
            <rect id="Rectangle_1500" data-name="Rectangle 1500" width="244.455" height="5.092" transform="translate(1120.666 163.187)" fill="#ede7e7"/>
            <rect id="Rectangle_1501" data-name="Rectangle 1501" width="244.455" height="5.092" transform="translate(1120.666 352.603)" fill="#ede7e7"/>
            <rect id="Rectangle_1502" data-name="Rectangle 1502" width="244.455" height="5.092" transform="translate(1364.418 163.187)" fill="#ede7e7"/>
            <rect id="Rectangle_1503" data-name="Rectangle 1503" width="244.455" height="5.092" transform="translate(1364.418 352.603)" fill="#ede7e7"/>
            <rect id="Rectangle_1504" data-name="Rectangle 1504" width="5.62" height="517.665" transform="translate(1241.252 9.034)" fill="#ede7e7"/>
            <rect id="Rectangle_1505" data-name="Rectangle 1505" width="5.62" height="517.665" transform="translate(1484.303 9.034)" fill="#ede7e7"/>
            <path id="Path_4578" data-name="Path 4578" d="M6.026,280.941H233.76V265.835H6.026" fill="none" stroke="#a59f9f" stroke-miterlimit="10" stroke-width="1.475"/>
            <rect id="Rectangle_1506" data-name="Rectangle 1506" width="243.604" height="14.171" transform="translate(99.886 450.595)" fill="none" stroke="#a59f9f" stroke-miterlimit="10" stroke-width="1.371"/>
            <g id="Group_1235" data-name="Group 1235">
              <g id="Group_1234" data-name="Group 1234" clip-path="url(#clip-path)">
                <path id="Path_4579" data-name="Path 4579" d="M87.351,202.49l3.864-16.033,2.313-9.592s-2.133-1.979-13.246-.709c-16.779,1.917-23.416-7.144-46.325-1.939L44.548,209.96H117.8l7.725-21.784c-10.042-3.192-21.9-4.8-34.309-1.719" fill="#fff"/>
                <path id="Path_4580" data-name="Path 4580" d="M87.351,202.49l3.864-16.033,2.313-9.592s-2.133-1.979-13.246-.709c-16.779,1.917-23.416-7.144-46.325-1.939L44.548,209.96H117.8l7.725-21.784c-10.042-3.192-21.9-4.8-34.309-1.719" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.21"/>
                <path id="Path_4581" data-name="Path 4581" d="M133.293,264.714H22.975V209.96H133.293Z" fill="#ede7e7"/>
                <path id="Path_4582" data-name="Path 4582" d="M133.293,264.714H22.975V209.96H133.293Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.21"/>
                <path id="Path_4583" data-name="Path 4583" d="M126.833,450.558h0a1.268,1.268,0,0,1-1.173-1.751L132,433.4l5.643,5.816-7.806,8.641c-.24.266-2.646,2.7-3,2.7" fill="#a59f9f"/>
                <path id="Path_4584" data-name="Path 4584" d="M126.833,450.558h0a1.268,1.268,0,0,1-1.173-1.751L132,433.4l5.643,5.816-7.806,8.641C129.6,448.121,127.192,450.558,126.833,450.558Z" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                <path id="Path_4585" data-name="Path 4585" d="M178.8,450.558h0a1.268,1.268,0,0,0,1.173-1.751L173.632,433.4l-5.643,5.816,9.87,10.926a1.267,1.267,0,0,0,.941.418" fill="#a59f9f"/>
                <path id="Path_4586" data-name="Path 4586" d="M178.8,450.558h0a1.268,1.268,0,0,0,1.173-1.751L173.632,433.4l-5.643,5.816,9.87,10.926A1.267,1.267,0,0,0,178.8,450.558Z" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                <rect id="Rectangle_1507" data-name="Rectangle 1507" width="7.09" height="2.999" transform="translate(149.272 376.825)" fill="#a59f9f"/>
                <rect id="Rectangle_1508" data-name="Rectangle 1508" width="7.09" height="2.999" transform="translate(149.272 376.825)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                <line id="Line_495" data-name="Line 495" y2="2.52" transform="translate(152.816 379.824)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                <path id="Path_4587" data-name="Path 4587" d="M152.816,382.345a30.68,30.68,0,1,0,30.68,30.68,30.68,30.68,0,0,0-30.68-30.68m0,56.248a25.568,25.568,0,1,1,25.568-25.568,25.568,25.568,0,0,1-25.568,25.568" fill={accentColor}/>
                <path id="Path_4588" data-name="Path 4588" d="M152.816,382.345a30.68,30.68,0,1,0,30.68,30.68A30.68,30.68,0,0,0,152.816,382.345Zm0,56.248a25.568,25.568,0,1,1,25.568-25.568A25.568,25.568,0,0,1,152.816,438.593Z" fill="none" stroke="#595454" stroke-miterlimit="10" stroke-width="1"/>
                <path id="Path_4589" data-name="Path 4589" d="M121.512,393.3a13.053,13.053,0,1,1,21.89-14.225Z" fill={accentColor}/>
                <path id="Path_4590" data-name="Path 4590" d="M121.512,393.3a13.053,13.053,0,1,1,21.89-14.225Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                <path id="Path_4591" data-name="Path 4591" d="M184.121,393.3a13.053,13.053,0,1,0-21.89-14.225Z" fill={accentColor}/>
                <path id="Path_4592" data-name="Path 4592" d="M184.121,393.3a13.053,13.053,0,1,0-21.89-14.225Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                <path id="Path_4593" data-name="Path 4593" d="M143.164,403.39l9.652,9.138,15.543-14.482" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                <path id="Path_4594" data-name="Path 4594" d="M165.892,140.69c-3.03-3.726-4.977-9.45-4.977-15.882,0-11.229,5.917-20.331,13.216-20.331s13.215,9.1,13.215,20.331c0,6.432-1.947,12.156-4.978,15.882,3.031,3.725,4.978,9.45,4.978,15.882a26.943,26.943,0,0,1-3.615,13.944,26.94,26.94,0,0,1,3.615,13.944,27.444,27.444,0,0,1-3.163,13.178,27.437,27.437,0,0,1,3.163,13.177c0,11.229-5.917,20.331-13.215,20.331s-13.216-9.1-13.216-20.331a27.437,27.437,0,0,1,3.162-13.177,27.444,27.444,0,0,1-3.162-13.178,26.94,26.94,0,0,1,3.615-13.944,26.943,26.943,0,0,1-3.615-13.944c0-6.432,1.947-12.157,4.977-15.882" fill="#ede7e7"/>
                <path id="Path_4595" data-name="Path 4595" d="M165.892,140.69c-3.03-3.726-4.977-9.45-4.977-15.882,0-11.229,5.917-20.331,13.216-20.331s13.215,9.1,13.215,20.331c0,6.432-1.947,12.156-4.978,15.882,3.031,3.725,4.978,9.45,4.978,15.882a26.943,26.943,0,0,1-3.615,13.944,26.94,26.94,0,0,1,3.615,13.944,27.444,27.444,0,0,1-3.163,13.178,27.437,27.437,0,0,1,3.163,13.177c0,11.229-5.917,20.331-13.215,20.331s-13.216-9.1-13.216-20.331a27.437,27.437,0,0,1,3.162-13.177,27.444,27.444,0,0,1-3.162-13.178,26.94,26.94,0,0,1,3.615-13.944,26.943,26.943,0,0,1-3.615-13.944C160.915,150.14,162.862,144.415,165.892,140.69Z" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.949"/>
                <line id="Line_496" data-name="Line 496" x1="1.142" y2="117.922" transform="translate(173.56 114.643)" fill="#fff"/>
                <line id="Line_497" data-name="Line 497" x1="1.142" y2="117.922" transform="translate(173.56 114.643)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.949"/>
                <path id="Path_4596" data-name="Path 4596" d="M202.558,147.646c-1.7-4.492-1.735-10.538.3-16.641,3.549-10.653,12.04-17.419,18.964-15.112s9.661,12.813,6.112,23.466c-2.033,6.1-5.689,10.918-9.742,13.5,1.7,4.492,1.735,10.538-.3,16.641a26.932,26.932,0,0,1-7.837,12.086,26.937,26.937,0,0,1-.977,14.372,27.445,27.445,0,0,1-7.166,11.5,27.442,27.442,0,0,1-1.164,13.5c-3.549,10.653-12.04,17.419-18.964,15.112s-9.661-12.813-6.112-23.465a27.438,27.438,0,0,1,7.165-11.5A27.447,27.447,0,0,1,184,187.6a26.932,26.932,0,0,1,7.837-12.086,26.927,26.927,0,0,1,.978-14.372c2.032-6.1,5.689-10.918,9.741-13.5" fill="#fff"/>
                <path id="Path_4597" data-name="Path 4597" d="M202.558,147.646c-1.7-4.492-1.735-10.538.3-16.641,3.549-10.653,12.04-17.419,18.964-15.112s9.661,12.813,6.112,23.466c-2.033,6.1-5.689,10.918-9.742,13.5,1.7,4.492,1.735,10.538-.3,16.641a26.932,26.932,0,0,1-7.837,12.086,26.937,26.937,0,0,1-.977,14.372,27.445,27.445,0,0,1-7.166,11.5,27.442,27.442,0,0,1-1.164,13.5c-3.549,10.653-12.04,17.419-18.964,15.112s-9.661-12.813-6.112-23.465a27.438,27.438,0,0,1,7.165-11.5A27.447,27.447,0,0,1,184,187.6a26.932,26.932,0,0,1,7.837-12.086,26.927,26.927,0,0,1,.978-14.372C194.849,155.038,198.506,150.223,202.558,147.646Z" fill="none" stroke="#a84599" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.949"/>
                <line id="Line_498" data-name="Line 498" x1="38.355" y2="111.516" transform="translate(180.794 125.718)" fill="#fff"/>
                <line id="Line_499" data-name="Line 499" x1="38.355" y2="111.516" transform="translate(180.794 125.718)" fill="none" stroke="#a84599" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.949"/>
                <path id="Path_4598" data-name="Path 4598" d="M153.153,175.429c-4.085-2.525-7.8-7.294-9.911-13.371-3.683-10.606-1.08-21.147,5.815-23.541s15.47,4.264,19.153,14.873c2.11,6.075,2.149,12.121.508,16.635,4.085,2.526,7.8,7.294,9.911,13.371a26.934,26.934,0,0,1,1.159,14.358,26.928,26.928,0,0,1,7.989,11.986,27.435,27.435,0,0,1,1.335,13.487,27.438,27.438,0,0,1,7.31,11.41c3.683,10.608,1.08,21.148-5.815,23.541s-15.47-4.263-19.153-14.871a27.426,27.426,0,0,1-1.335-13.485,27.439,27.439,0,0,1-7.31-11.411,26.939,26.939,0,0,1-1.159-14.359,26.942,26.942,0,0,1-7.989-11.986c-2.11-6.076-2.148-12.123-.508-16.637" fill="#fff"/>
                <path id="Path_4599" data-name="Path 4599" d="M153.153,175.429c-4.085-2.525-7.8-7.294-9.911-13.371-3.683-10.606-1.08-21.147,5.815-23.541s15.47,4.264,19.153,14.873c2.11,6.075,2.149,12.121.508,16.635,4.085,2.526,7.8,7.294,9.911,13.371a26.934,26.934,0,0,1,1.159,14.358,26.928,26.928,0,0,1,7.989,11.986,27.435,27.435,0,0,1,1.335,13.487,27.438,27.438,0,0,1,7.31,11.41c3.683,10.608,1.08,21.148-5.815,23.541s-15.47-4.263-19.153-14.871a27.426,27.426,0,0,1-1.335-13.485,27.439,27.439,0,0,1-7.31-11.411,26.939,26.939,0,0,1-1.159-14.359,26.942,26.942,0,0,1-7.989-11.986C151.551,185.99,151.513,179.943,153.153,175.429Z" fill="none" stroke="#a84599" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.949"/>
                <line id="Line_500" data-name="Line 500" x2="37.601" y2="111.772" transform="translate(152.931 147.933)" fill="#fff"/>
                <line id="Line_501" data-name="Line 501" x2="37.601" y2="111.772" transform="translate(152.931 147.933)" fill="none" stroke="#a84599" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.949"/>
                <path id="Path_4600" data-name="Path 4600" d="M178.13,260.265h6.053a28.3,28.3,0,0,0,28.3-28.3V199.35H149.832v32.617a28.3,28.3,0,0,0,28.3,28.3" fill={accentColor}/>
                <path id="Path_4601" data-name="Path 4601" d="M178.13,260.265h6.053a28.3,28.3,0,0,0,28.3-28.3V199.35H149.832v32.617A28.3,28.3,0,0,0,178.13,260.265Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.949"/>
                <line id="Line_502" data-name="Line 502" x1="61.984" transform="translate(150.046 213.037)" fill="#fff"/>
                <line id="Line_503" data-name="Line 503" x1="61.984" transform="translate(150.046 213.037)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.949"/>
                <path id="Path_4602" data-name="Path 4602" d="M149.778,265.212h64.188a7.078,7.078,0,0,0,7.077-7.077v-.757H142.7v.757a7.077,7.077,0,0,0,7.077,7.077" fill={accentColor}/>
                <path id="Path_4603" data-name="Path 4603" d="M149.778,265.212h64.188a7.078,7.078,0,0,0,7.077-7.077v-.757H142.7v.757A7.077,7.077,0,0,0,149.778,265.212Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.949"/>
                <rect id="Rectangle_1509" data-name="Rectangle 1509" width="40.986" height="138.062" transform="translate(234.121 312.824)" fill="#fff"/>
                <rect id="Rectangle_1510" data-name="Rectangle 1510" width="40.986" height="138.062" transform="translate(234.121 312.824)" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
                <rect id="Rectangle_1511" data-name="Rectangle 1511" width="25.002" height="48.95" transform="translate(242.113 335.398)" fill="#fff"/>
                <rect id="Rectangle_1512" data-name="Rectangle 1512" width="25.002" height="48.95" transform="translate(242.113 335.398)" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
                <path id="Path_4604" data-name="Path 4604" d="M260.612,430.048a6,6,0,1,0-6,6,6,6,0,0,0,6-6" fill="#fff"/>
                <circle id="Ellipse_71" data-name="Ellipse 71" cx="5.998" cy="5.998" r="5.998" transform="translate(246.131 430.048) rotate(-45)" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
                <line id="Line_504" data-name="Line 504" x2="16.662" transform="translate(246.283 364.997)" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
                <line id="Line_505" data-name="Line 505" x2="16.662" transform="translate(246.283 370.551)" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
                <line id="Line_506" data-name="Line 506" x2="16.662" transform="translate(246.283 376.105)" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
                <rect id="Rectangle_1513" data-name="Rectangle 1513" width="40.986" height="138.062" transform="translate(275.107 312.824)" fill="#ede7e7"/>
                <rect id="Rectangle_1514" data-name="Rectangle 1514" width="40.986" height="138.062" transform="translate(275.107 312.824)" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
                <rect id="Rectangle_1515" data-name="Rectangle 1515" width="25.002" height="48.95" transform="translate(283.099 335.398)" fill="#fff"/>
                <rect id="Rectangle_1516" data-name="Rectangle 1516" width="25.002" height="48.95" transform="translate(283.099 335.398)" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
                <path id="Path_4605" data-name="Path 4605" d="M301.6,430.048a6,6,0,1,0-6,6,6,6,0,0,0,6-6" fill="#fff"/>
                <circle id="Ellipse_72" data-name="Ellipse 72" cx="5.998" cy="5.998" r="5.998" transform="matrix(0.526, -0.851, 0.851, 0.526, 287.344, 431.996)" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
                <line id="Line_507" data-name="Line 507" x2="16.662" transform="translate(287.269 364.997)" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
                <line id="Line_508" data-name="Line 508" x2="16.662" transform="translate(287.269 370.551)" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
                <line id="Line_509" data-name="Line 509" x2="16.662" transform="translate(287.269 376.105)" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
                <rect id="Rectangle_1517" data-name="Rectangle 1517" width="40.986" height="138.062" transform="translate(193.135 312.824)" fill="#ede7e7"/>
                <rect id="Rectangle_1518" data-name="Rectangle 1518" width="40.986" height="138.062" transform="translate(193.135 312.824)" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
                <rect id="Rectangle_1519" data-name="Rectangle 1519" width="25.002" height="48.95" transform="translate(201.126 335.398)" fill="#fff"/>
                <rect id="Rectangle_1520" data-name="Rectangle 1520" width="25.002" height="48.95" transform="translate(201.126 335.398)" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
                <path id="Path_4606" data-name="Path 4606" d="M219.626,430.048a6,6,0,1,0-6,6,6,6,0,0,0,6-6" fill="#fff"/>
                <circle id="Ellipse_73" data-name="Ellipse 73" cx="5.998" cy="5.998" r="5.998" transform="translate(205.145 430.048) rotate(-45)" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
                <line id="Line_510" data-name="Line 510" x2="16.662" transform="translate(205.296 364.997)" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
                <line id="Line_511" data-name="Line 511" x2="16.662" transform="translate(205.296 370.551)" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
                <line id="Line_512" data-name="Line 512" x2="16.662" transform="translate(205.296 376.105)" fill="none" stroke="#595454" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
                <path id="Path_4607" data-name="Path 4607" d="M460.23,210.188a35.391,35.391,0,1,0-35.391,35.391,35.391,35.391,0,0,0,35.391-35.391" fill="#ede7e7"/>
                <circle id="Ellipse_74" data-name="Ellipse 74" cx="35.391" cy="35.391" r="35.391" transform="matrix(0.447, -0.894, 0.894, 0.447, 377.357, 226.015)" fill="none" stroke="#595454" stroke-miterlimit="10" stroke-width="0.722"/>
                <path id="Path_4608" data-name="Path 4608" d="M441.063,147.92H408.615v31.115h32.448Z" fill="#a59f9f"/>
                <path id="Path_4609" data-name="Path 4609" d="M441.063,147.92H408.615v31.115h32.448Z" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.722"/>
                <line id="Line_513" data-name="Line 513" y2="54.6" transform="translate(424.839 53.927)" fill="#fff"/>
                <line id="Line_514" data-name="Line 514" y2="54.6" transform="translate(424.839 53.927)" fill="none" stroke="#595454" stroke-miterlimit="10" stroke-width="0.722"/>
                <line id="Line_515" data-name="Line 515" x2="163.264" transform="translate(343.207 224.421)" fill="#fff"/>
                <line id="Line_516" data-name="Line 516" x2="163.264" transform="translate(343.207 224.421)" fill="none" stroke="#595454" stroke-miterlimit="10" stroke-width="0.506"/>
                <path id="Path_4610" data-name="Path 4610" d="M424.839,108.2,343.207,224.42l31.181,39.049h100.9l31.181-39.049Z" fill="none" stroke="#595454" stroke-miterlimit="10" stroke-width="0.722"/>
                <path id="Path_4611" data-name="Path 4611" d="M424.839,108.2,397.486,224.42l10.448,39.049h33.81l10.448-39.049Z" fill="none" stroke="#595454" stroke-miterlimit="10" stroke-width="0.722"/>
                <path id="Path_4612" data-name="Path 4612" d="M1084.958,210.188a35.391,35.391,0,1,0-35.391,35.391,35.391,35.391,0,0,0,35.391-35.391" fill="#ede7e7"/>
                <circle id="Ellipse_75" data-name="Ellipse 75" cx="35.391" cy="35.391" r="35.391" transform="matrix(0.29, -0.957, 0.957, 0.29, 1005.438, 233.805)" fill="none" stroke="#595454" stroke-miterlimit="10" stroke-width="0.722"/>
                <path id="Path_4613" data-name="Path 4613" d="M1065.791,147.92h-32.448v31.115h32.448Z" fill="#a59f9f"/>
                <path id="Path_4614" data-name="Path 4614" d="M1065.791,147.92h-32.448v31.115h32.448Z" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.722"/>
                <line id="Line_517" data-name="Line 517" y2="54.6" transform="translate(1049.567 53.927)" fill="#fff"/>
                <line id="Line_518" data-name="Line 518" y2="54.6" transform="translate(1049.567 53.927)" fill="none" stroke="#595454" stroke-miterlimit="10" stroke-width="0.722"/>
                <line id="Line_519" data-name="Line 519" x2="163.264" transform="translate(967.935 224.421)" fill="#fff"/>
                <line id="Line_520" data-name="Line 520" x2="163.264" transform="translate(967.935 224.421)" fill="none" stroke="#595454" stroke-miterlimit="10" stroke-width="0.506"/>
                <path id="Path_4615" data-name="Path 4615" d="M1049.567,108.2,967.935,224.42l31.181,39.049h100.9L1131.2,224.42Z" fill="none" stroke="#595454" stroke-miterlimit="10" stroke-width="0.722"/>
                <path id="Path_4616" data-name="Path 4616" d="M1049.567,108.2,1022.214,224.42l10.447,39.049h33.81l10.448-39.049Z" fill="none" stroke="#595454" stroke-miterlimit="10" stroke-width="0.722"/>
              </g>
            </g>
            <g id="Group_1237" data-name="Group 1237">
              <g id="Group_1236" data-name="Group 1236" clip-path="url(#clip-path-2)">
                <rect id="Rectangle_1522" data-name="Rectangle 1522" width="72.687" height="38.03" transform="translate(1166.741 964.226)" fill="#fff"/>
                <rect id="Rectangle_1523" data-name="Rectangle 1523" width="72.687" height="38.03" transform="translate(1166.741 964.226)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.047"/>
                <path id="Path_4617" data-name="Path 4617" d="M1384.891,971.409H1021.277a9.046,9.046,0,0,1-9.045-9.045V922.986a9.046,9.046,0,0,1,9.045-9.045h363.614a9.046,9.046,0,0,1,9.045,9.045v39.378a9.046,9.046,0,0,1-9.045,9.045" fill="#595454"/>
                <path id="Path_4618" data-name="Path 4618" d="M1453.826,801.541h-213.62c-35.013,0-62.272-33.05-58.466-70.888l10.515-104.531c3.262-32.428,28.458-56.987,58.466-56.987h213.62c35.013,0,62.272,33.05,58.466,70.888l-10.515,104.531c-3.262,32.428-28.458,56.987-58.466,56.987" fill="#595454"/>
                <path id="Path_4619" data-name="Path 4619" d="M1348.651,830.99c19.844-56.75,28.972-119.4,27.134-186.193l-24.535.8c1.741,63.274-6.853,122.461-25.545,175.915a403.5,403.5,0,0,1-65.536,119.078h31.748a432.94,432.94,0,0,0,56.734-109.6" fill="#fff"/>
                <path id="Path_4620" data-name="Path 4620" d="M1348.651,830.99c19.844-56.75,28.972-119.4,27.134-186.193l-24.535.8c1.741,63.274-6.853,122.461-25.545,175.915a403.5,403.5,0,0,1-65.536,119.078h31.748A432.94,432.94,0,0,0,1348.651,830.99Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.047"/>
                <path id="Path_4621" data-name="Path 4621" d="M1285.708,845.18h-85.27l9.325-193.473,1.359-157.571c1.184-45.023,16.846-82.878,52.505-108.536l47.171-33.94,54.759,14.88" fill="#fff"/>
                <path id="Path_4622" data-name="Path 4622" d="M1285.708,845.18h-85.27l9.325-193.473,1.359-157.571c1.184-45.023,16.846-82.878,52.505-108.536l47.171-33.94,54.759,14.88" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.765"/>
                <path id="Path_4623" data-name="Path 4623" d="M1052.212,791.065h83.906V959.757h-43.129v348.206H941.808V901.469a110.4,110.4,0,0,1,110.4-110.4" fill="#fff"/>
                <path id="Path_4624" data-name="Path 4624" d="M1052.212,791.065h83.906V959.757h-43.129v348.206H941.808V901.469A110.4,110.4,0,0,1,1052.212,791.065Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.765"/>
                <path id="Path_4625" data-name="Path 4625" d="M1230.993,791.065V711.6h90.623A124.483,124.483,0,0,1,1446.1,836.087v2.577a121.093,121.093,0,0,1-121.093,121.093H1181.365v348.206H1030.184V901.469a110.4,110.4,0,0,1,110.405-110.4Z" fill="#fff"/>
                <path id="Path_4626" data-name="Path 4626" d="M1230.993,791.065V711.6h90.623A124.483,124.483,0,0,1,1446.1,836.087v2.577a121.093,121.093,0,0,1-121.093,121.093H1181.365v348.206H1030.184V901.469a110.4,110.4,0,0,1,110.405-110.4Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.765"/>
                <path id="Path_4627" data-name="Path 4627" d="M1223.96,464.822l70.287-113.163,71.153,14.519a112.313,112.313,0,0,1,82.863,108.384V760.84H1232.044l-12.421-160.464-7.176-92.7a76.733,76.733,0,0,1,11.513-42.857" fill={accentColor}/>
                <path id="Path_4628" data-name="Path 4628" d="M1223.96,464.822l70.287-113.163,71.153,14.519a112.313,112.313,0,0,1,82.863,108.384V760.84H1232.044l-12.421-160.464-7.176-92.7A76.733,76.733,0,0,1,1223.96,464.822Z" fill="none" stroke="#595454" stroke-miterlimit="10" stroke-width="1.765"/>
                <path id="Path_4629" data-name="Path 4629" d="M1236.657,293.5l63.858,24.967c-.136.67,1.518,15.585,1.348,16.253l-74.815,8.735-1.755-12.482-1.951-13.885a22.28,22.28,0,0,1,13.315-23.588" fill="#595454"/>
                <path id="Path_4630" data-name="Path 4630" d="M1236.657,293.5l63.858,24.967c-.136.67,1.518,15.585,1.348,16.253l-74.815,8.735-1.755-12.482-1.951-13.885A22.28,22.28,0,0,1,1236.657,293.5Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.765"/>
                <path id="Path_4631" data-name="Path 4631" d="M1278.809,342.911s3.373,20.754,3.373,22.054l-31.44,54.946,85.728,1.281,17.455-66.372-7.365-41.448" fill="#a59f9f"/>
                <path id="Path_4632" data-name="Path 4632" d="M1300.934,346.693h-8.642a56.182,56.182,0,0,1-56.182-56.182V220.524a56.182,56.182,0,0,1,56.182-56.182h8.642a56.182,56.182,0,0,1,56.182,56.182v69.987a56.182,56.182,0,0,1-56.182,56.182" fill="#a59f9f"/>
                <rect id="Rectangle_1524" data-name="Rectangle 1524" width="121.006" height="182.351" rx="56.182" transform="translate(1236.11 164.342)" fill="none" stroke="#a59f9f" stroke-miterlimit="10" stroke-width="1.944"/>
                <path id="Path_4633" data-name="Path 4633" d="M1296.091,162.325h0a59.434,59.434,0,0,1,59.415,57.951l.863,34.6c-65.552-27.089-74.613-74.964-74.613-74.964-6.188,9.953-22.7,31.446-45.974,40.915l.005-.259c.646-32.355,27.942-58.248,60.3-58.248" fill="#595454"/>
                <path id="Path_4634" data-name="Path 4634" d="M1296.091,162.325h0a59.434,59.434,0,0,1,59.415,57.951l.863,34.6c-65.552-27.089-74.613-74.964-74.613-74.964-6.188,9.953-22.7,31.446-45.974,40.915l.005-.259C1236.433,188.218,1263.729,162.325,1296.091,162.325Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.765"/>
                <path id="Path_4635" data-name="Path 4635" d="M1296.091,162.325c53.291,0,81.979,22.16,86.61,59.84l4.054,32.991a16.89,16.89,0,0,1,14.647,14.7l3.2,26a22.279,22.279,0,0,1,18.968,19.335l1.711,13.919-74.939,9.215c-.337-.6-.652-1.208-.956-1.821-14.735-29.613,7.516-81.616,7.516-81.616s-63.289-19.558-63.289-77.166" fill="#595454"/>
                <path id="Path_4636" data-name="Path 4636" d="M1296.091,162.325c53.291,0,81.979,22.16,86.61,59.84l4.054,32.991a16.89,16.89,0,0,1,14.647,14.7l3.2,26a22.279,22.279,0,0,1,18.968,19.335l1.711,13.919-74.939,9.215c-.337-.6-.652-1.208-.956-1.821-14.735-29.613,7.516-81.616,7.516-81.616s-63.289-19.558-63.289-77.166" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.765"/>
                <path id="Path_4637" data-name="Path 4637" d="M1340.639,261.538c1.446-14.158,9.965-24.884,19.028-23.959s15.237,13.154,13.791,27.312-9.965,24.885-19.028,23.958a11.907,11.907,0,0,1-7.077-3.463c-.092-.089-.183-.178-.274-.27l-1.247-1.274" fill="#a59f9f"/>
                <path id="Path_4638" data-name="Path 4638" d="M1313.371,344.432a59.5,59.5,0,0,1-15.651,2.081h-2.933a59.536,59.536,0,0,1-14.755-1.845" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.765"/>
                <path id="Path_4639" data-name="Path 4639" d="M1285.538,250.325a4.155,4.155,0,1,0,4.154-4.154,4.154,4.154,0,0,0-4.154,4.154" fill="#595454"/>
                <path id="Path_4640" data-name="Path 4640" d="M1241.3,250.325a4.154,4.154,0,1,0,4.154-4.154,4.154,4.154,0,0,0-4.154,4.154" fill="#595454"/>
                <path id="Path_4641" data-name="Path 4641" d="M1267.418,238.941a16.191,16.191,0,0,1-4.663,11.372l-11.8,11.972a7.486,7.486,0,0,0,2.216,12.063l6.488,2.968" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.765"/>
                <path id="Path_4642" data-name="Path 4642" d="M1278.406,236.961a16.532,16.532,0,0,1,22.572,6.148" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.765"/>
                <path id="Path_4643" data-name="Path 4643" d="M1256.742,236.961a16.534,16.534,0,0,0-21.093,3.976" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.765"/>
                <path id="Path_4644" data-name="Path 4644" d="M1273.039,288.25l-18.5,3.757.681,1.877a9.3,9.3,0,0,0,17.99-4.237Z" fill="#fff"/>
                <path id="Path_4645" data-name="Path 4645" d="M1273.039,288.25l-18.5,3.757.681,1.877a9.3,9.3,0,0,0,17.99-4.237Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.765"/>
                <path id="Path_4646" data-name="Path 4646" d="M1335.446,295.213a10.641,10.641,0,1,0,9.263-11.859,10.641,10.641,0,0,0-9.263,11.859" fill={accentColor}/>
                <path id="Path_4647" data-name="Path 4647" d="M1335.446,295.213a10.641,10.641,0,1,0,9.263-11.859A10.641,10.641,0,0,0,1335.446,295.213Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.765"/>
                <path id="Path_4648" data-name="Path 4648" d="M1353.925,353.193c-19.639,22.6-48.272,40.939-65.9,43.857" fill="none" stroke="#c3e8f5" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.765"/>
                <path id="Path_4649" data-name="Path 4649" d="M1288.026,397.049l-2.143,20.585-10.67.011Z" fill="#c3e8f5"/>
                <path id="Path_4650" data-name="Path 4650" d="M1288.026,397.049l-2.143,20.585-10.67.011Z" fill="none" stroke="#c3e8f5" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.765"/>
                <path id="Path_4651" data-name="Path 4651" d="M1288.026,397.049c-6.407-6.526-10.139-20.928-6.407-31.393" fill="none" stroke="#c3e8f5" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.765"/>
                <path id="Path_4652" data-name="Path 4652" d="M1351.862,362.611l44.9,12.51c45.879,10.042,51.721,43.034,51.721,90l5.274,316.991,47.807,299.533H1287.331l-4.463-308.629-5.46-262.652c0-58.1,24.706-112.42,74.454-147.752" fill="#fff"/>
                <path id="Path_4653" data-name="Path 4653" d="M1351.862,362.611l44.9,12.51c45.879,10.042,51.721,43.034,51.721,90l5.274,316.991,47.807,299.533H1287.331l-4.463-308.629-5.46-262.652C1277.408,452.26,1302.114,397.943,1351.862,362.611Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.765"/>
                <path id="Path_4654" data-name="Path 4654" d="M1278.212,597.694l31.106-109.515a27.13,27.13,0,0,0-1.967-19.83l-9.507-17.645,16.865-6.108c6.072-2.2,11.088-7.7,13.983-15.038,8.8-22.323,21.917-43.253,37.283-63.455l-13.3-17.18c-20.29,21.883-36.11,44.756-52.115,69.989-15.375,24.24-23.429,55.042-23.156,86.568Z" fill="#fff"/>
                <path id="Path_4655" data-name="Path 4655" d="M1278.212,597.694l31.106-109.515a27.13,27.13,0,0,0-1.967-19.83l-9.507-17.645,16.865-6.108c6.072-2.2,11.088-7.7,13.983-15.038,8.8-22.323,21.917-43.253,37.283-63.455l-13.3-17.18c-20.29,21.883-36.11,44.756-52.115,69.989-15.375,24.24-23.429,55.042-23.156,86.568Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.765"/>
                <line id="Line_521" data-name="Line 521" x1="135.173" transform="translate(1291.752 825.457)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.765"/>
                <path id="Path_4656" data-name="Path 4656" d="M102.29,1427.458V709.381H1490.476v718.077h-58.2V804.7H161v621.547Z" fill="#ede7e7"/>
                <path id="Path_4657" data-name="Path 4657" d="M102.29,1427.458V709.381H1490.476v718.077h-58.2V804.7H161v621.547Z" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.079"/>
                <path id="Path_4658" data-name="Path 4658" d="M1135.573,639.743l-26.222-4.607-49.788-14.659a3.859,3.859,0,0,0-2.842,7.14l14.389,7.327a2.127,2.127,0,0,1,.213,3.669c-2.581,1.706-6.467,4.176-9.147,5.869a24.731,24.731,0,0,1-6.387,2.864c-7.377,2.12-25.109,7.217-35.69,10.277a5.151,5.151,0,0,0-2.1,8.7l9.978,9.394a15.69,15.69,0,0,0,12.46,4.177c14.009-1.53,45.015-5.473,63.134-12.024l54.452,18.5Z" fill="#a59f9f"/>
                <path id="Path_4659" data-name="Path 4659" d="M1135.573,639.743l-26.222-4.607-49.788-14.659a3.859,3.859,0,0,0-2.842,7.14l14.389,7.327a2.127,2.127,0,0,1,.213,3.669c-2.581,1.706-6.467,4.176-9.147,5.869a24.731,24.731,0,0,1-6.387,2.864c-7.377,2.12-25.109,7.217-35.69,10.277a5.151,5.151,0,0,0-2.1,8.7l9.978,9.394a15.69,15.69,0,0,0,12.46,4.177c14.009-1.53,45.015-5.473,63.134-12.024l54.452,18.5Z" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.765"/>
                <path id="Path_4660" data-name="Path 4660" d="M1056.873,654.481a370.325,370.325,0,0,1-39.65,10.459" fill="#ede7e7"/>
                <path id="Path_4661" data-name="Path 4661" d="M1056.873,654.481a370.325,370.325,0,0,1-39.65,10.459" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.765"/>
                <path id="Path_4662" data-name="Path 4662" d="M1061.4,661.094c-10.34,3.425-22.555,5.486-38.347,8.8" fill="#ede7e7"/>
                <path id="Path_4663" data-name="Path 4663" d="M1061.4,661.094c-10.34,3.425-22.555,5.486-38.347,8.8" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.765"/>
                <path id="Path_4664" data-name="Path 4664" d="M1065.922,667.707c-12.02,4.1-25.7,5.761-38.528,7.314" fill="#ede7e7"/>
                <path id="Path_4665" data-name="Path 4665" d="M1065.922,667.707c-12.02,4.1-25.7,5.761-38.528,7.314" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.765"/>
                <path id="Path_4666" data-name="Path 4666" d="M1448.892,489.384l-32.643,194.065a59.964,59.964,0,0,1-71.936,48.717L1104.9,679.9l8.547-51.018,224.789,9.995,6.819-173.917" fill="#fff"/>
                <path id="Path_4667" data-name="Path 4667" d="M1448.892,489.384l-32.643,194.065a59.964,59.964,0,0,1-71.936,48.717L1104.9,679.9l8.547-51.018,224.789,9.995,6.819-173.917" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.765"/>
              </g>
            </g>
            <g id="Group_1239" data-name="Group 1239">
              <g id="Group_1238" data-name="Group 1238" clip-path="url(#clip-path)">
                <path id="Path_4668" data-name="Path 4668" d="M737,726.708l22.684-68.617H692.887l-27.61,83.519H787.518v-14.9Z" fill="#a59f9f"/>
                <path id="Path_4669" data-name="Path 4669" d="M758.234,662.994l22.684-68.617H714.125L686.515,677.9h66.794Z" fill="#595454"/>
                <rect id="Rectangle_1526" data-name="Rectangle 1526" width="570.213" height="334.623" transform="translate(440.975 323.468)" fill="#fff"/>
                <rect id="Rectangle_1527" data-name="Rectangle 1527" width="570.213" height="334.623" transform="translate(440.975 323.468)" fill="none" stroke="#453838" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.062"/>
                <rect id="Rectangle_1528" data-name="Rectangle 1528" width="570.213" height="26.709" transform="translate(440.975 631.383)" fill="#eee7e7"/>
                <rect id="Rectangle_1529" data-name="Rectangle 1529" width="570.213" height="26.709" transform="translate(440.975 631.383)" fill="none" stroke="#453838" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.062"/>
                <rect id="Rectangle_1530" data-name="Rectangle 1530" width="570.213" height="23.817" transform="translate(440.975 323.468)" fill="#eee7e7"/>
                <rect id="Rectangle_1531" data-name="Rectangle 1531" width="570.213" height="23.817" transform="translate(440.975 323.468)" fill="none" stroke="#453838" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.062"/>
                <path id="Path_4670" data-name="Path 4670" d="M729.3,329.977a6.133,6.133,0,1,1-6.132,6.132,6.134,6.134,0,0,1,6.132-6.132" fill="#a0248b"/>
                <line id="Line_522" data-name="Line 522" y1="139.695" x2="146.75" transform="translate(750.76 392.784)" fill="none" stroke="#707071" stroke-width="1.062"/>
                <line id="Line_523" data-name="Line 523" y1="58.858" x2="62.781" transform="translate(567.131 444.817)" fill="none" stroke="#707071" stroke-width="1.062"/>
                <line id="Line_524" data-name="Line 524" y1="139.695" x2="146.75" transform="translate(743.327 432.074)" fill="none" stroke="#707071" stroke-width="1.062"/>
                <rect id="Rectangle_1532" data-name="Rectangle 1532" width="33.13" height="41.185" transform="translate(486.552 711.68)" fill="#a59f9f"/>
                <rect id="Rectangle_1533" data-name="Rectangle 1533" width="33.13" height="41.185" transform="translate(486.552 711.68)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.152"/>
                <path id="Path_4671" data-name="Path 4671" d="M515.915,701.684v-6.4h-25.6v6.4h-3.768v8.571h33.13v-8.571Z" fill="#fff"/>
                <path id="Path_4672" data-name="Path 4672" d="M515.915,701.684v-6.4h-25.6v6.4h-3.768v8.571h33.13v-8.571Z" fill="none" stroke="#595454" stroke-miterlimit="10" stroke-width="1.152"/>
                <rect id="Rectangle_1534" data-name="Rectangle 1534" width="42.031" height="3.167" transform="translate(482.102 708.526)" fill="#fff"/>
                <rect id="Rectangle_1535" data-name="Rectangle 1535" width="42.031" height="3.167" transform="translate(482.102 708.526)" fill="none" stroke="#595454" stroke-miterlimit="10" stroke-width="1.152"/>
                <line id="Line_525" data-name="Line 525" x2="18.641" transform="translate(493.797 701.68)" fill="#fff"/>
                <line id="Line_526" data-name="Line 526" x2="18.641" transform="translate(493.797 701.68)" fill="none" stroke="#595454" stroke-miterlimit="10" stroke-width="1.152"/>
                <rect id="Rectangle_1536" data-name="Rectangle 1536" width="25.768" height="25.768" transform="translate(493.914 718.826)" fill="#fff"/>
                <rect id="Rectangle_1537" data-name="Rectangle 1537" width="25.768" height="25.768" transform="translate(493.914 718.826)" fill="none" stroke="#595454" stroke-miterlimit="10" stroke-width="1.152"/>
              </g>
            </g>
            <g id="Group_1241" data-name="Group 1241">
              <g id="Group_1240" data-name="Group 1240" clip-path="url(#clip-path)">
                <path id="Path_4673" data-name="Path 4673" d="M998.368,751.3c-6.393-8.654-22.909-14.817-42.279-14.817S920.2,742.646,913.81,751.3Z" fill="#c3e8f5"/>
                <path id="Path_4674" data-name="Path 4674" d="M998.368,751.3c-6.393-8.654-22.909-14.817-42.279-14.817S920.2,742.646,913.81,751.3Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.155"/>
                <path id="Path_4675" data-name="Path 4675" d="M419.26,752.574V714.241c0-3.157.675-5.427,4.241-7.821,5.03-3.377,8.724-5.577,8.724-10.738V693.2h22.509v2.485c0,5.161,3.694,7.361,8.723,10.738,3.566,2.394,4.242,4.664,4.242,7.821v38.333Z" fill="#fff"/>
                <path id="Path_4676" data-name="Path 4676" d="M419.26,752.574V714.241c0-3.157.675-5.427,4.241-7.821,5.03-3.377,8.724-5.577,8.724-10.738V693.2h22.509v2.485c0,5.161,3.694,7.361,8.723,10.738,3.566,2.394,4.242,4.664,4.242,7.821v38.333Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.563"/>
                <rect id="Rectangle_1539" data-name="Rectangle 1539" width="48.439" height="24.219" transform="translate(419.26 716.515)" fill="#fff"/>
                <rect id="Rectangle_1540" data-name="Rectangle 1540" width="48.439" height="24.219" transform="translate(419.26 716.515)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.563"/>
                <path id="Path_4677" data-name="Path 4677" d="M449.73,727.452h-5.078v-5.078h-2.344v5.078H437.23V729.8h5.078v5.078h2.344V729.8h5.078Z" fill={accentColor}/>
                <path id="Path_4678" data-name="Path 4678" d="M449.73,727.452h-5.078v-5.078h-2.344v5.078H437.23V729.8h5.078v5.078h2.344V729.8h5.078Z" fill="none" stroke="#a84599" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.563"/>
                <rect id="Rectangle_1541" data-name="Rectangle 1541" width="35.939" height="11.328" transform="translate(425.51 682.259)" fill={accentColor}/>
                <rect id="Rectangle_1542" data-name="Rectangle 1542" width="35.939" height="11.328" transform="translate(425.51 682.259)" fill="none" stroke="#a84599" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.563"/>
                <line id="Line_527" data-name="Line 527" y2="8.203" transform="translate(428.245 683.821)" fill="none" stroke="#ede7e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.563"/>
                <line id="Line_528" data-name="Line 528" y2="8.203" transform="translate(432.598 683.821)" fill="none" stroke="#ede7e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.563"/>
                <line id="Line_529" data-name="Line 529" y2="8.203" transform="translate(436.95 683.821)" fill="none" stroke="#ede7e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.563"/>
                <line id="Line_530" data-name="Line 530" y2="8.203" transform="translate(441.303 683.821)" fill="none" stroke="#ede7e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.563"/>
                <line id="Line_531" data-name="Line 531" y2="8.203" transform="translate(445.656 683.821)" fill="none" stroke="#ede7e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.563"/>
                <line id="Line_532" data-name="Line 532" y2="8.203" transform="translate(450.009 683.821)" fill="none" stroke="#ede7e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.563"/>
                <line id="Line_533" data-name="Line 533" y2="8.203" transform="translate(454.362 683.821)" fill="none" stroke="#ede7e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.563"/>
                <line id="Line_534" data-name="Line 534" y2="8.203" transform="translate(458.714 683.821)" fill="none" stroke="#ede7e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.563"/>
                <path id="Path_4679" data-name="Path 4679" d="M349.707,577.517l-4.153-24.37-4.153,24.37" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.509"/>
                <path id="Path_4680" data-name="Path 4680" d="M345.554,553.147l-2.077,12.185h4.154Z" fill="#595454"/>
                <path id="Path_4681" data-name="Path 4681" d="M345.554,553.147l-2.077,12.185h4.154Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.509"/>
                <rect id="Rectangle_1543" data-name="Rectangle 1543" width="8.306" height="139.695" transform="translate(341.401 577.517)" fill={accentColor}/>
                <rect id="Rectangle_1544" data-name="Rectangle 1544" width="8.306" height="139.695" transform="translate(341.401 577.517)" fill="none" stroke="#a84599" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.509"/>
                <path id="Path_4682" data-name="Path 4682" d="M349.707,721.314v-4.1H341.4v4.1a4.16,4.16,0,1,0,8.306,0Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.509"/>
                <path id="Path_4683" data-name="Path 4683" d="M313.3,571.43l-2.2-8.585a2.656,2.656,0,0,1,5.145-1.318l2.2,8.585" fill="#ede7e7"/>
                <path id="Path_4684" data-name="Path 4684" d="M313.3,571.43l-2.2-8.585a2.656,2.656,0,0,1,5.145-1.318l2.2,8.585" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.509"/>
                <path id="Path_4685" data-name="Path 4685" d="M346.477,710.11,311.622,574.08a2.152,2.152,0,0,1,1.55-2.618l5.4-1.383a2.151,2.151,0,0,1,2.617,1.549l34.855,136.031.023.089c3.183,12.423.017,19.963.017,19.963s-6.4-5.089-9.585-17.511Z" fill="#ede7e7"/>
                <path id="Path_4686" data-name="Path 4686" d="M346.477,710.11,311.622,574.08a2.152,2.152,0,0,1,1.55-2.618l5.4-1.383a2.151,2.151,0,0,1,2.617,1.549l34.855,136.031.023.089c3.183,12.423.017,19.963.017,19.963s-6.4-5.089-9.585-17.511Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.509"/>
                <path id="Path_4687" data-name="Path 4687" d="M316.792,610.1,308.3,576.947l3.433-.88" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.509"/>
                <line id="Line_535" data-name="Line 535" y1="2.229" x2="8.701" transform="translate(321.853 609.671)" fill="#ede7e7"/>
                <line id="Line_536" data-name="Line 536" y1="2.229" x2="8.701" transform="translate(321.853 609.671)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.509"/>
                <line id="Line_537" data-name="Line 537" y1="2.229" x2="8.701" transform="translate(321.108 606.763)" fill="#ede7e7"/>
                <line id="Line_538" data-name="Line 538" y1="2.229" x2="8.701" transform="translate(321.108 606.763)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.509"/>
                <line id="Line_539" data-name="Line 539" y1="2.229" x2="8.701" transform="translate(347.007 707.841)" fill="#ede7e7"/>
                <line id="Line_540" data-name="Line 540" y1="2.229" x2="8.701" transform="translate(347.007 707.841)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.509"/>
                <path id="Path_4688" data-name="Path 4688" d="M363.616,554.59l29.671,3.807L373.916,709.373l-1.457,11.356-29.672-3.807Z" fill="#ede7e7"/>
                <path id="Path_4689" data-name="Path 4689" d="M363.616,554.59l29.671,3.807L373.916,709.373l-1.457,11.356-29.672-3.807Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.509"/>
                <line id="Line_541" data-name="Line 541" x2="8.153" y2="1.046" transform="translate(367.174 697.328)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.509"/>
                <line id="Line_542" data-name="Line 542" x2="8.153" y2="1.046" transform="translate(369.735 677.363)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.509"/>
                <line id="Line_543" data-name="Line 543" x2="8.153" y2="1.046" transform="translate(372.297 657.398)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.509"/>
                <line id="Line_544" data-name="Line 544" x2="8.153" y2="1.046" transform="translate(374.859 637.433)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.509"/>
                <line id="Line_545" data-name="Line 545" x2="8.153" y2="1.046" transform="translate(377.421 617.468)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.509"/>
                <line id="Line_546" data-name="Line 546" x2="8.153" y2="1.046" transform="translate(379.982 597.503)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.509"/>
                <line id="Line_547" data-name="Line 547" x2="8.153" y2="1.046" transform="translate(382.544 577.538)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.509"/>
                <path id="Path_4690" data-name="Path 4690" d="M328.161,753.089h51.487l12.4-103.342H315.763Z" fill="#fff"/>
                <path id="Path_4691" data-name="Path 4691" d="M328.161,753.089h51.487l12.4-103.342H315.763Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.509"/>
              </g>
            </g>
          </g>
        </g>
      </svg>*/}

      <img src="/images/transitionScreens/screen-8.svg" alt="" />

    </div>
      
  )
}
