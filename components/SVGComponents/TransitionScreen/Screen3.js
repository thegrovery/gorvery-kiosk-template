/*===== Components =====*/
import React from "react"
import Link from 'next/link'
import ChevronDown from '@components/SVGComponents/ChevronDown'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

/*===== Site Data =====*/
import data from "@data/data.json"


export default function Screen3({ 
  //Props
  id, children
}) {

  //console.log(author);
  let accentColor = data.accentColor1;

  return (
    <div className={componentStyles.Screen3}>
      {/*<svg width="1706" height="960" viewBox="0 0 1706 960">
        <defs>
          <clipPath id="clip-path">
            <rect id="Rectangle_1192" data-name="Rectangle 1192" width="219.248" height="240.745" fill="none"/>
          </clipPath>
        </defs>
        <g id="Assets" transform="translate(0 -71)">
          <g id="Desk_-_White" data-name="Desk - White" transform="translate(0 912)" fill="#fff" stroke="#707070" stroke-width="1">
            <rect width="1706" height="119" stroke="none"/>
            <rect x="0.5" y="0.5" width="1705" height="118" fill="none"/>
          </g>
          <g id="Layer_3" data-name="Layer 3" transform="translate(-7034.963 -8.205)">
            <g id="Group_494" data-name="Group 494">
              <g id="Group_488" data-name="Group 488" transform="translate(0 100)">
                <g id="Group_483" data-name="Group 483">
                  <path id="Path_3505" data-name="Path 3505" d="M0,0H937.975V448H0Z" transform="translate(7158.467 138.644)" fill="#fff"/>
                  <path id="Path_2838" data-name="Path 2838" d="M7765.409,450.192v-60.6h37.911v47.59h15.959v-11.86h16.373v18.669h13.887v32.066s29.223.22,29.431,0,0-23.5,0-23.5h15.443" fill="none" stroke="#9f9089" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
                  <path id="Path_2839" data-name="Path 2839" d="M7632.745,429.49h49.535V441.1h41.25v10.114" fill="none" stroke="#9f9089" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
                  <path id="Path_2840" data-name="Path 2840" d="M7269.086,442.649H7285.3V415.176h11.032V408.09h29.086v6.023h4.012s-.334,37.554,0,37.908,13.707,0,13.707,0h0c0-8.8,6.736-15.943,15.045-15.943h17.384v19.25h39.116v17.809h37.778v11.712" fill="none" stroke="#9f9089" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
                  <path id="Path_2841" data-name="Path 2841" d="M7426.029,497.517c-16.07-18.089-38.875-29.383-64.169-29.383-48.664,0-88.114,41.8-88.114,93.374V475.355c0-60.825-46.53-110.132-103.928-110.132h-11.351" fill="none" stroke="#9f9089" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
                  <path id="Path_2842" data-name="Path 2842" d="M8096.442,358.119h-62.577c-84.778,0-153.5,72.828-153.5,162.667v10.761s-44.541-82.323-131.031-82.323c-48.836,0-80.855,20.121-99.479,37.642" fill="none" stroke="#9f9089" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
                  <g id="Group_480" data-name="Group 480">
                    <line id="Line_81" data-name="Line 81" y2="176.225" transform="translate(8036.557 411.071)" fill="none" stroke="#9f9089" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
                    <line id="Line_82" data-name="Line 82" x2="83.994" y2="132.478" transform="translate(7952.563 424.406)" fill="none" stroke="#9f9089" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
                    <line id="Line_83" data-name="Line 83" x1="42.948" y2="95.662" transform="translate(8036.557 417.159)" fill="none" stroke="#9f9089" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
                  </g>
                  <g id="Group_481" data-name="Group 481">
                    <line id="Line_84" data-name="Line 84" y1="164.619" transform="translate(7192.359 422.678)" fill="none" stroke="#9f9089" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
                    <line id="Line_85" data-name="Line 85" x1="54.494" y2="115.141" transform="translate(7192.359 427.576)" fill="none" stroke="#9f9089" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
                    <line id="Line_86" data-name="Line 86" x2="23.737" y2="77.941" transform="translate(7168.622 428.993)" fill="none" stroke="#9f9089" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
                  </g>
                  <g id="Group_482" data-name="Group 482">
                    <line id="Line_87" data-name="Line 87" x2="47.808" y2="85.322" transform="translate(7333.108 501.974)" fill="none" stroke="#9f9089" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
                    <line id="Line_88" data-name="Line 88" x2="66.048" y2="45.23" transform="translate(7306.697 527.482)" fill="none" stroke="#9f9089" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
                  </g>
                </g>
                <g id="Group_487" data-name="Group 487">
                  <g id="Group_484" data-name="Group 484" opacity="0.696">
                    <rect id="Rectangle_343" data-name="Rectangle 343" width="468.227" height="83.462" transform="translate(7628.215 137.734)" fill="#fdd7c2"/>
                    <line id="Line_89" data-name="Line 89" x2="467.346" transform="translate(7629.096 168.147)" fill="none" stroke="#9f9089" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                    <line id="Line_90" data-name="Line 90" x2="467.346" transform="translate(7629.096 195.106)" fill="none" stroke="#9f9089" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                  </g>
                  <g id="Group_485" data-name="Group 485" opacity="0.696">
                    <rect id="Rectangle_344" data-name="Rectangle 344" width="458.182" height="83.462" transform="translate(7158.467 137.734)" fill="#fdd7c2"/>
                    <line id="Line_91" data-name="Line 91" x2="457.301" transform="translate(7159.347 168.147)" fill="none" stroke="#9f9089" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                    <line id="Line_92" data-name="Line 92" x2="457.301" transform="translate(7159.347 195.106)" fill="none" stroke="#9f9089" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                  </g>
                  <g id="Group_486" data-name="Group 486">
                    <rect id="Rectangle_345" data-name="Rectangle 345" width="467.346" height="449.562" transform="translate(7629.096 137.734)" fill="none" stroke="#9f9089" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                    <rect id="Rectangle_346" data-name="Rectangle 346" width="458.182" height="449.562" transform="translate(7158.467 137.734)" fill="none" stroke="#9f9089" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                  </g>
                  <rect id="Rectangle_347" data-name="Rectangle 347" width="957.718" height="470.484" transform="translate(7148.595 127.273)" fill="none" stroke="#9f9089" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                </g>
              </g>
              <rect id="Rectangle_348" data-name="Rectangle 348" width="157.916" height="25.066" rx="3" transform="translate(7833.995 940.79) rotate(-180)" fill="#f0e8e5" stroke="#453838" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
              <g id="Group_489" data-name="Group 489" transform="translate(0 18.853)">
                <path id="Path_2843" data-name="Path 2843" d="M8113.263,909.088l21.362-64.617h-62.9l-26,78.65h115.115V909.088Z" fill="#a69f9f"/>
                <path id="Path_3509" data-name="Path 3509" d="M8113.263,909.088l21.362-64.617h-62.9l-26,78.65h62.9Z" transform="translate(20 -60)" fill="rgba(55,50,49,0.31)"/>
                <rect id="Rectangle_349" data-name="Rectangle 349" width="536.975" height="315.118" transform="translate(7834.497 529.353)" fill="#fff" stroke="#453838" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                <rect id="Rectangle_350" data-name="Rectangle 350" width="536.975" height="25.152" transform="translate(7834.497 819.319)" fill="#eee7e7" stroke="#453838" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                <rect id="Rectangle_351" data-name="Rectangle 351" width="536.975" height="22.429" transform="translate(7834.497 529.353)" fill="#eee7e7" stroke="#453838" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                <circle id="Ellipse_29" data-name="Ellipse 29" cx="5.775" cy="5.775" r="5.775" transform="translate(8100.244 535.482)" fill="#a01f8b"/>
              </g>
              <g id="Group_493" data-name="Group 493" transform="translate(0 7.533)">
                <g id="Group_490" data-name="Group 490">
                  <path id="Path_2844" data-name="Path 2844" d="M7755.214,623.177a92.779,92.779,0,0,0-92.779-92.779H7420.049a97.905,97.905,0,0,0-97.9,97.9V868.782a51.942,51.942,0,0,0,51.942,51.942h323.852a57.078,57.078,0,0,0,57.078-57.032Z" fill={accentColor} stroke="#453838" stroke-miterlimit="10" stroke-width="1"/>
                  <path id="Path_2845" data-name="Path 2845" d="M7481.775,838.9,7422.3,824.4V665.2" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                  <line id="Line_93" data-name="Line 93" y2="205.268" transform="translate(7652.409 661.333)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                </g>
                <g id="Group_491" data-name="Group 491">
                  <rect id="Rectangle_352" data-name="Rectangle 352" width="9.363" height="96.903" transform="translate(7691.81 812.843) rotate(-23.596)" fill="#453838"/>
                  <path id="Path_2846" data-name="Path 2846" d="M7481.775,838.905l137.08,33.427,71.567-8.959a32.633,32.633,0,0,1,20.356,4.266L7751,891.247c4.853,2.849,4.678,8.958.976,13.2-5.614,6.425-11.661,16.281-20.7,16.281H7466.3Z" fill="#9f9089" stroke="#453838" stroke-miterlimit="10" stroke-width="1.137"/>
                  <line id="Line_94" data-name="Line 94" x2="39.579" y2="23.212" transform="translate(7712.388 881.234)" fill="none" stroke="#453838" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.813"/>
                  <line id="Line_95" data-name="Line 95" x1="38.125" y1="25.004" transform="translate(7704.433 888.99)" fill="none" stroke="#453838" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.813"/>
                  <line id="Line_96" data-name="Line 96" x1="30.148" y1="21.396" transform="translate(7698.467 899.132)" fill="none" stroke="#453838" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.813"/>
                </g>
                <g id="Group_492" data-name="Group 492">
                  <path id="Rectangle_353" data-name="Rectangle 353" d="M49.919,0h84.239a49.919,49.919,0,0,1,49.919,49.919v95.758a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V49.919A49.919,49.919,0,0,1,49.919,0Z" transform="translate(7457.044 264.821)" fill="#453838" stroke="#453838" stroke-miterlimit="10" stroke-width="1.813"/>
                  <path id="Path_2847" data-name="Path 2847" d="M7552.189,515.749H7432.4V487.244a17.291,17.291,0,0,1,17.291-17.291h0V454.165a17.291,17.291,0,0,1,17.291-17.291h168.228a17.292,17.292,0,0,1,17.291,17.291v15.788h0a17.291,17.291,0,0,1,17.291,17.291v28.505H7550" fill="#453838" stroke="#453838" stroke-miterlimit="10" stroke-width="1.813"/>
                  <path id="Path_2848" data-name="Path 2848" d="M7626.419,389.35a27.823,27.823,0,1,1,0,55.646" fill="#9f9089"/>
                  <path id="Path_2849" data-name="Path 2849" d="M7471.789,389.35a27.823,27.823,0,0,0,0,55.646" fill="#9f9089"/>
                  <path id="Path_2850" data-name="Path 2850" d="M7591.21,530.4V496.783a59.975,59.975,0,0,0,34.755-54.4V345.952a60,60,0,0,0-60-60.006h-33.71a60.005,60.005,0,0,0-60.006,60.006v96.429a60.018,60.018,0,0,0,36.922,55.4V530.4h-59.385a102.424,102.424,0,0,0,202.628,0Z" fill="#9f9089" stroke="#453838" stroke-miterlimit="10" stroke-width="1.137"/>
                  <path id="Path_2851" data-name="Path 2851" d="M7565.96,285.946h-33.71a60.005,60.005,0,0,0-60.006,60.006v51.786c25.679-26.035,45.455-60.4,59.97-102.2,25.125,42.239,56,76.188,93.752,100.208V345.952A60.006,60.006,0,0,0,7565.96,285.946Z" fill="#453838" stroke="#453838" stroke-miterlimit="10" stroke-width="1.813"/>
                  <path id="Path_2852" data-name="Path 2852" d="M7563.977,432.552a8.833,8.833,0,0,1-17.667,0Z" fill="none" stroke="#453838" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.813"/>
                  <path id="Path_2853" data-name="Path 2853" d="M7560.538,376.486V388.2a18.819,18.819,0,0,0,.862,5.633l5.405,17.246a6.515,6.515,0,0,1-4.489,8.23l-9.275,2.551" fill="none" stroke="#453838" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.813"/>
                  <circle id="Ellipse_30" data-name="Ellipse 30" cx="5.438" cy="5.438" r="5.438" transform="translate(7507.484 380.591)" fill="#453838"/>
                  <circle id="Ellipse_31" data-name="Ellipse 31" cx="5.438" cy="5.438" r="5.438" transform="translate(7588.023 380.591)" fill="#453838"/>
                </g>
              </g>
              <path id="Path_3486" data-name="Path 3486" d="M70.567,369.352,208.763,237.8" transform="translate(8055.658 375.681)" fill="none" stroke="#707070" stroke-width="1"/>
              <path id="Path_3510" data-name="Path 3510" d="M149.641,293.227,208.763,237.8" transform="translate(7803.658 424.681)" fill="none" stroke="#707070" stroke-width="1"/>
              <path id="Path_3487" data-name="Path 3487" d="M70.567,369.352,208.763,237.8" transform="translate(8048.658 412.681)" fill="none" stroke="#707070" stroke-width="1"/>
            </g>
            <g id="Group_495" data-name="Group 495" transform="translate(0 83.342)">
              <circle id="Ellipse_32" data-name="Ellipse 32" cx="97.859" cy="97.859" r="97.859" transform="translate(8285.13 142.864)" fill="#fff" stroke="#be2bbb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
              <path id="Path_2854" data-name="Path 2854" d="M8382.988,164.357v76.366h41.979" fill="#fff" stroke="#be2bbb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
            </g>
          </g>
          <g id="Group_1149" data-name="Group 1149" transform="translate(1250 743)">
            <g id="Group_1144" data-name="Group 1144">
              <g id="Group_1143" data-name="Group 1143" clip-path="url(#clip-path)">
                <path id="Path_3966" data-name="Path 3966" d="M166.265,30.026,161.3.9l-4.963,29.124" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.803"/>
              </g>
            </g>
            <path id="Path_3967" data-name="Path 3967" d="M161.3.9l-2.482,14.562h4.964Z" fill="#595454"/>
            <g id="Group_1146" data-name="Group 1146">
              <g id="Group_1145" data-name="Group 1145" clip-path="url(#clip-path)">
                <path id="Path_3968" data-name="Path 3968" d="M161.3.9l-2.482,14.562h4.964Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.803"/>
              </g>
            </g>
            <rect id="Rectangle_1194" data-name="Rectangle 1194" width="9.927" height="166.944" transform="translate(156.338 30.026)" fill={accentColor}/>
            <rect id="Rectangle_1195" data-name="Rectangle 1195" width="9.927" height="166.944" transform="translate(156.338 30.026)" fill="none" stroke="#a84599" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.803"/>
            <g id="Group_1148" data-name="Group 1148">
              <g id="Group_1147" data-name="Group 1147" clip-path="url(#clip-path)">
                <path id="Path_3969" data-name="Path 3969" d="M166.265,201.871v-4.9h-9.926v4.9a4.971,4.971,0,1,0,9.926,0Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.803"/>
                <path id="Path_3970" data-name="Path 3970" d="M122.757,22.751l-2.629-10.26a3.173,3.173,0,0,1,6.148-1.575l2.629,10.26" fill="#ede7e7"/>
                <path id="Path_3971" data-name="Path 3971" d="M122.757,22.751l-2.629-10.26a3.173,3.173,0,0,1,6.148-1.575l2.629,10.26" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.803"/>
                <path id="Path_3972" data-name="Path 3972" d="M162.4,188.482,120.752,25.918A2.569,2.569,0,0,1,122.6,22.79l6.455-1.654a2.57,2.57,0,0,1,3.127,1.852l41.654,162.564.027.108c3.8,14.845.021,23.856.021,23.856s-7.651-6.081-11.454-20.927Z" fill="#ede7e7"/>
                <path id="Path_3973" data-name="Path 3973" d="M162.4,188.482,120.752,25.918A2.569,2.569,0,0,1,122.6,22.79l6.455-1.654a2.57,2.57,0,0,1,3.127,1.852l41.654,162.564.027.108c3.8,14.845.021,23.856.021,23.856s-7.651-6.081-11.454-20.927Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.803"/>
                <path id="Path_3974" data-name="Path 3974" d="M126.929,68.961,116.778,29.344l4.1-1.052" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.803"/>
                <line id="Line_281" data-name="Line 281" y1="2.664" x2="10.398" transform="translate(132.978 68.451)" fill="#ede7e7"/>
                <line id="Line_282" data-name="Line 282" y1="2.664" x2="10.398" transform="translate(132.978 68.451)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.803"/>
                <line id="Line_283" data-name="Line 283" y1="2.664" x2="10.398" transform="translate(132.087 64.975)" fill="#ede7e7"/>
                <line id="Line_284" data-name="Line 284" y1="2.664" x2="10.398" transform="translate(132.087 64.975)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.803"/>
                <line id="Line_285" data-name="Line 285" y1="2.664" x2="10.398" transform="translate(163.038 185.77)" fill="#ede7e7"/>
                <line id="Line_286" data-name="Line 286" y1="2.664" x2="10.398" transform="translate(163.038 185.77)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.803"/>
                <path id="Path_3975" data-name="Path 3975" d="M182.887,2.626l35.459,4.55L195.2,187.6l-1.742,13.571L158,196.623Z" fill="#ede7e7"/>
                <path id="Path_3976" data-name="Path 3976" d="M182.887,2.626l35.459,4.55L195.2,187.6l-1.742,13.571L158,196.623Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.803"/>
                <line id="Line_287" data-name="Line 287" x2="9.744" y2="1.25" transform="translate(187.139 173.206)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.803"/>
                <line id="Line_288" data-name="Line 288" x2="9.744" y2="1.25" transform="translate(190.2 149.347)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.803"/>
                <line id="Line_289" data-name="Line 289" x2="9.744" y2="1.25" transform="translate(193.261 125.488)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.803"/>
                <line id="Line_290" data-name="Line 290" x2="9.744" y2="1.25" transform="translate(196.323 101.629)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.803"/>
                <line id="Line_291" data-name="Line 291" x2="9.744" y2="1.25" transform="translate(199.384 77.769)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.803"/>
                <line id="Line_292" data-name="Line 292" x2="9.744" y2="1.25" transform="translate(202.445 53.91)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.803"/>
                <line id="Line_293" data-name="Line 293" x2="9.744" y2="1.25" transform="translate(205.507 30.051)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.803"/>
                <path id="Path_3977" data-name="Path 3977" d="M140.516,239.844h61.53l14.817-123.5H125.7Z" fill="#fff"/>
                <path id="Path_3978" data-name="Path 3978" d="M140.516,239.844h61.53l14.817-123.5H125.7Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.803"/>
                <path id="Path_3979" data-name="Path 3979" d="M75.64,150.893v-7.639H0v97.292H75.64V163.787a25.22,25.22,0,0,1,24.118,25.156v42.49a6.433,6.433,0,0,0,12.866,0v-42.49a38.114,38.114,0,0,0-36.984-38.05" fill={accentColor}/>
                <path id="Path_3980" data-name="Path 3980" d="M29.691,186.563,19.209,173.7,8.727,186.563v28.92H29.691Z" fill="#fff"/>
                <line id="Line_294" data-name="Line 294" y1="30.443" transform="translate(19.209 143.254)" fill="#ede7e7"/>
                <line id="Line_295" data-name="Line 295" y1="30.443" transform="translate(19.209 143.254)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.556"/>
                <circle id="Ellipse_51" data-name="Ellipse 51" cx="6.275" cy="6.275" r="6.275" transform="translate(12.934 191.239)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.556"/>
              </g>
            </g>
          </g>
          <rect id="Invisible_-_Size_Setter" data-name="Invisible - Size Setter" width="1706" height="960" transform="translate(0 71)" fill="none"/>
        </g>
      </svg>*/}
      <img src="/images/transitionScreens/screen-3.svg" alt="" />
    </div>
      
  )
}
