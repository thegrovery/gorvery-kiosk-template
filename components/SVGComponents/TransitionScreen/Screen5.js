/*===== Components =====*/
import React from "react"
import Link from 'next/link'
import ChevronDown from '@components/SVGComponents/ChevronDown'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

/*===== Site Data =====*/
import data from "@data/data.json"


export default function Screen5({ 
  //Props
  id, children
}) {

  //console.log(author);
  let accentColor = data.accentColor1;

  return (
    <div className={componentStyles.Screen5}>
      {/*<svg width="1959.473" height="1080" viewBox="0 0 1959.473 1080">
        <defs>
          <clipPath id="clip-path">
            <rect id="Rectangle_1232" data-name="Rectangle 1232" width="1727.6" height="818.026" fill="none"/>
          </clipPath>
          <clipPath id="clip-path-2">
            <rect id="Rectangle_1231" data-name="Rectangle 1231" width="1727.601" height="818.026" fill="none"/>
          </clipPath>
          <clipPath id="clip-path-3">
            <rect id="Rectangle_1215" data-name="Rectangle 1215" width="519.32" height="87.355" transform="translate(575.94 11.804)" fill="none"/>
          </clipPath>
          <clipPath id="clip-path-4">
            <rect id="Rectangle_1217" data-name="Rectangle 1217" width="508.18" height="87.355" transform="translate(1108.09 11.804)" fill="none"/>
          </clipPath>
          <clipPath id="clip-path-5">
            <rect id="Rectangle_1547" data-name="Rectangle 1547" width="595.004" height="290.701" fill="none"/>
          </clipPath>
        </defs>
        <g id="Assets" transform="translate(47.473)">
          <g id="Desk_BG" data-name="Desk BG" transform="translate(0 912)" fill="#fff" stroke="#707070" stroke-width="1">
            <rect width="1912" height="168" stroke="none"/>
            <rect x="0.5" y="0.5" width="1911" height="167" fill="none"/>
          </g>
          <g id="Person_and_BG_assets" data-name="Person and BG assets" transform="translate(-47.473 174)">
            <g id="Group_1161" data-name="Group 1161" clip-path="url(#clip-path)">
              <rect id="Rectangle_1208" data-name="Rectangle 1208" width="354.006" height="233.458" transform="translate(118.684 74.944)" fill="#fff"/>
              <rect id="Rectangle_1209" data-name="Rectangle 1209" width="354.006" height="233.458" transform="translate(118.684 74.944)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.172"/>
              <rect id="Rectangle_1210" data-name="Rectangle 1210" width="326.791" height="206.243" transform="translate(132.292 88.552)" fill="#fbecce"/>
              <rect id="Rectangle_1211" data-name="Rectangle 1211" width="326.791" height="206.243" transform="translate(132.292 88.552)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.172"/>
              <g id="Group_1160" data-name="Group 1160">
                <g id="Group_1159" data-name="Group 1159" clip-path="url(#clip-path-2)">
                  <path id="Path_4065" data-name="Path 4065" d="M132.292,244.969s11.736,5.464,122.6-32.353c101.52-34.631,79.853-7.734,54.089,22.1-38.215,44.249,123.271-36.793,150.1-6" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.172"/>
                  <path id="Path_4066" data-name="Path 4066" d="M132.292,175.428s11.736,5.464,122.6-32.353c101.52-34.631,79.853-7.734,54.089,22.1-38.215,44.249,123.271-36.793,150.1-6" fill="none" stroke="#a84599" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                  <line id="Line_314" data-name="Line 314" x1="282.031" transform="translate(0.855 616.938)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <line id="Line_315" data-name="Line 315" x1="282.031" transform="translate(0.855 737.704)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <path id="Path_4067" data-name="Path 4067" d="M282.886,793.381V497.3H22.848" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <rect id="Rectangle_1212" data-name="Rectangle 1212" width="187.726" height="14.382" transform="translate(36.306 482.916)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <rect id="Rectangle_1213" data-name="Rectangle 1213" width="188.4" height="17.866" transform="translate(55.877 465.05)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <path id="Path_4068" data-name="Path 4068" d="M943.1,338.837V275.4H901.05v49.81h-17.7V312.8H865.189v19.539h-15.4V365.9s-32.412.229-32.642,0,0-24.6,0-24.6H800.016" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <path id="Path_4069" data-name="Path 4069" d="M1090.24,317.169H1035.3v12.147H989.546V339.9" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <path id="Path_4070" data-name="Path 4070" d="M1493.583,330.942H1475.6V302.188h-12.236v-7.417H1431.1v6.3h-4.45s.371,39.306,0,39.676-15.2,0-15.2,0a16.686,16.686,0,0,0-16.686-16.686h-19.282v20.148H1332.1v18.639h-41.9v12.259" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <path id="Path_4071" data-name="Path 4071" d="M1319.513,388.37a97.73,97.73,0,0,1,168.9,66.976V365.174a115.27,115.27,0,0,1,115.27-115.27h12.59" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <path id="Path_4072" data-name="Path 4072" d="M575.94,242.469h69.406A170.256,170.256,0,0,1,815.6,412.725v11.263s49.4-86.164,145.33-86.164c54.165,0,89.678,21.06,110.334,39.4" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <line id="Line_316" data-name="Line 316" y2="184.446" transform="translate(642.361 297.891)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <line id="Line_317" data-name="Line 317" x1="93.16" y2="138.657" transform="translate(642.361 311.848)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <line id="Line_318" data-name="Line 318" x2="47.635" y2="100.125" transform="translate(594.726 304.263)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <line id="Line_319" data-name="Line 319" y1="172.298" transform="translate(1578.683 310.039)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <line id="Line_320" data-name="Line 320" x2="60.441" y2="120.512" transform="translate(1518.242 315.166)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <line id="Line_321" data-name="Line 321" x1="26.327" y2="81.577" transform="translate(1578.683 316.649)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <line id="Line_322" data-name="Line 322" x1="53.025" y2="89.302" transform="translate(1369.549 393.035)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <line id="Line_323" data-name="Line 323" x1="73.255" y2="47.34" transform="translate(1378.613 419.733)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <g id="Group_1155" data-name="Group 1155" opacity="0.48">
                    <g id="Group_1154" data-name="Group 1154">
                      <g id="Group_1153" data-name="Group 1153" clip-path="url(#clip-path-3)">
                        <rect id="Rectangle_1214" data-name="Rectangle 1214" width="519.324" height="87.355" transform="translate(575.94 11.804)" fill="#fbecce"/>
                      </g>
                    </g>
                  </g>
                  <line id="Line_324" data-name="Line 324" x1="518.347" transform="translate(575.94 43.635)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <line id="Line_325" data-name="Line 325" x1="518.347" transform="translate(575.94 71.852)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <g id="Group_1158" data-name="Group 1158" opacity="0.48">
                    <g id="Group_1157" data-name="Group 1157">
                      <g id="Group_1156" data-name="Group 1156" clip-path="url(#clip-path-4)">
                        <rect id="Rectangle_1216" data-name="Rectangle 1216" width="508.182" height="87.355" transform="translate(1108.092 11.804)" fill="#fbecce"/>
                      </g>
                    </g>
                  </g>
                  <line id="Line_326" data-name="Line 326" x1="507.205" transform="translate(1108.092 43.635)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <line id="Line_327" data-name="Line 327" x1="507.205" transform="translate(1108.092 71.852)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <rect id="Rectangle_1218" data-name="Rectangle 1218" width="518.347" height="470.534" transform="translate(575.94 11.803)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <rect id="Rectangle_1219" data-name="Rectangle 1219" width="508.182" height="470.534" transform="translate(1108.092 11.804)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <rect id="Rectangle_1220" data-name="Rectangle 1220" width="1062.231" height="492.431" transform="translate(564.992 0.855)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <path id="Path_4073" data-name="Path 4073" d="M1238.518,224.817a22.984,22.984,0,0,0-16.419,7.131V208.521a75.766,75.766,0,0,0-75.767-75.766h-.178a75.767,75.767,0,0,0-75.767,75.766v57.087a75.854,75.854,0,0,0,42.742,68.259l-2.458,25.465-32.935,83.919,134.45-13.084-14.815-108.528a75.665,75.665,0,0,0,24.338-48.3,23.071,23.071,0,0,0,16.809,7.531c13.648,0,24.711-12.547,24.711-28.025s-11.063-28.026-24.711-28.026" fill="#a59f9f"/>
                  <path id="Path_4074" data-name="Path 4074" d="M1297.275,305.136a59.863,59.863,0,0,1-59.794,59.8c-15.221,0-22.4-3.445-35.548-10.664-3.336-1.831-.8.283-.8-.018l-4.676-32.611a.916.916,0,0,1,.338-.729,74.578,74.578,0,0,0,23.988-47.608c.044-.424.172-.858.574-.995a1.007,1.007,0,0,1,1.071.352,21.994,21.994,0,0,0,16.018,7.19c13.026,0,23.832-11.948,23.832-26.8l-.021-.47c-.006-.377.048-.937.367-1.139a1.087,1.087,0,0,1,1.059-.058,59.428,59.428,0,0,1,33.591,53.755m-90.281-131.194a33.257,33.257,0,0,0,14.017,51.069v6.936a1.087,1.087,0,0,0,.676,1.007,1.166,1.166,0,0,0,1.189-.408c2.494-2.531,9.505-8.342,19.333-6.461,9.1,1.633,16.594,9.174,19.075,19.318a1.43,1.43,0,0,0,.575.932,1.092,1.092,0,0,0,.953-.028,61.254,61.254,0,0,0-3.609-110.333,55.907,55.907,0,0,0-72.544-53.256,36.691,36.691,0,0,0-65.992,4.682,45.823,45.823,0,0,0-18.76-4.008,46.378,46.378,0,0,0-44.862,58.124,35.3,35.3,0,0,0,.47,64.264A36.651,36.651,0,0,0,1070,266.429a1.089,1.089,0,0,0,1.476-1.017V208.52c0-.9.043-1.8.087-2.694l.049-1.1c.021-.523.042-1.046.078-1.559.108-1.427.246-2.847.426-4.253a74.065,74.065,0,0,1,6.524-22.312c17.526-4.459,31.447-17.65,39.278-37.223.971-.4,1.951-.774,2.927-1.127a30.073,30.073,0,0,0,52.125,10.842,31.066,31.066,0,0,0,34.024,24.85" fill="#5c5353"/>
                  <path id="Path_4075" data-name="Path 4075" d="M1070.387,265.29v.318a75.859,75.859,0,0,0,151.308,7.873" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.073"/>
                  <path id="Path_4076" data-name="Path 4076" d="M1197.371,321.643l14.453,111.716-129.888-1.069L1110.8,359.6l2.329-25.723" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.073"/>
                  <path id="Path_4077" data-name="Path 4077" d="M1216.393,265.269c4.041,9.235,12.417,15.6,22.124,15.6,13.648,0,24.711-12.547,24.711-28.025s-11.063-28.026-24.711-28.026c-9.707,0-18.083,6.364-22.124,15.6" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.073"/>
                  <path id="Path_4078" data-name="Path 4078" d="M1114.722,235.082a5.758,5.758,0,1,1-5.758-5.758,5.758,5.758,0,0,1,5.758,5.758m59.948-5.758a5.757,5.757,0,1,0,5.758,5.758,5.758,5.758,0,0,0-5.758-5.758" fill="#595454"/>
                  <path id="Path_4079" data-name="Path 4079" d="M1248.941,292.42a11.971,11.971,0,1,1-11.971-11.97,11.972,11.972,0,0,1,11.971,11.97" fill={accentColor}/>
                  <circle id="Ellipse_52" data-name="Ellipse 52" cx="11.971" cy="11.971" r="11.971" transform="translate(1221.329 298.899) rotate(-67.5)" fill="none" stroke="#ede7e7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.073"/>
                  <path id="Path_4080" data-name="Path 4080" d="M1142.987,237.049s-4.484,9.383-9.433,17.289a12.777,12.777,0,0,0,4.209,17.838l.063.037" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.069"/>
                  <path id="Path_4081" data-name="Path 4081" d="M1162.55,284.832c-3.427,6.353-17.005,10.53-29.647,5.216" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.069"/>
                  <path id="Path_4082" data-name="Path 4082" d="M1161.026,212.984c9.762-5.774,20.375-3.392,25.48,3.407" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.069"/>
                  <path id="Path_4083" data-name="Path 4083" d="M1119.765,212.333c-9.763-5.774-20.375-3.392-25.481,3.407" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.069"/>
                  <path id="Path_4084" data-name="Path 4084" d="M823.331,608.933l-26.624-19.115-47.4-42.852a4.751,4.751,0,0,0-6.965,6.4l12.048,15.812a2.618,2.618,0,0,1-1.725,4.183c-3.773.514-9.4,1.178-13.279,1.625a30.485,30.485,0,0,1-8.615-.235c-9.314-1.588-31.705-5.405-45.077-7.663a6.341,6.341,0,0,0-6.972,8.53l6.049,15.75a19.318,19.318,0,0,0,11.591,11.288c16.354,5.784,52.854,17.971,76.45,20.382l50.517,49.608Z" fill="#a59f9f"/>
                  <path id="Path_4085" data-name="Path 4085" d="M679.473,572.631c15.633,5.468,55.429,11.043,55.429,11.043" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <path id="Path_4086" data-name="Path 4086" d="M681.923,580.981c11.476,5.424,50.382,11.861,50.382,11.861" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <path id="Path_4087" data-name="Path 4087" d="M685.461,590.193c12.6,4.4,44.276,11.715,44.276,11.715" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <line id="Line_328" data-name="Line 328" x1="7.282" y2="25.714" transform="translate(728.554 580.374)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <path id="Path_4088" data-name="Path 4088" d="M1073.52,749.645l-38.057,22.33-32.785-22.64,49.748-221.678a567.451,567.451,0,0,1,24.916-81.678l9.571-24.575h89.39l-23.057,49.607a730.578,730.578,0,0,0-50.259,147.618Z" fill={accentColor}/>
                  <path id="Path_4089" data-name="Path 4089" d="M1111.429,358.454l-41.9,14.687a99.9,99.9,0,0,0-64.363,72.119l-55,241.835L812.306,589.087V670.1l132.7,120.793h48.344l59.074-263.233a567.585,567.585,0,0,1,24.915-81.678Z" fill="#ede7e7"/>
                  <path id="Path_4090" data-name="Path 4090" d="M1111.429,358.454l-41.9,14.687a99.9,99.9,0,0,0-64.363,72.119l-55,241.835L812.306,589.087V670.1l132.7,120.793h48.344l59.074-263.233a567.585,567.585,0,0,1,24.915-81.678Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <path id="Path_4091" data-name="Path 4091" d="M1248.031,702.915,1232.239,652.8l20.214-54.371,16.538,98.771L1082.643,748l13.2,42.893h225.993a59.791,59.791,0,0,0,59.2-68.212l-39.837-280.093a79.85,79.85,0,0,0-65.656-67.475l-72.02-12.258-50.271,108.159a730.638,730.638,0,0,0-50.259,147.618L1073.52,749.645" fill="#ede7e7"/>
                  <path id="Path_4092" data-name="Path 4092" d="M1248.031,702.915,1232.239,652.8l20.214-54.371,16.538,98.771L1082.643,748l13.2,42.893h225.993a59.791,59.791,0,0,0,59.2-68.212l-39.837-280.093a79.85,79.85,0,0,0-65.656-67.475l-72.02-12.258-50.271,108.159a730.638,730.638,0,0,0-50.259,147.618L1073.52,749.645" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <line id="Line_329" data-name="Line 329" x1="13.615" y1="81.315" transform="translate(1238.837 517.116)" fill="#fff"/>
                  <line id="Line_330" data-name="Line 330" x1="13.615" y1="81.315" transform="translate(1238.837 517.116)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <line id="Line_331" data-name="Line 331" y2="86.556" transform="translate(840.127 608.865)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <line id="Line_332" data-name="Line 332" x2="14.061" y2="52.685" transform="translate(1118.564 738.206)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <path id="Path_4093" data-name="Path 4093" d="M1238.837,368.864l-24.289,69.242a24.884,24.884,0,0,1-23.481,16.647h-12.7l-12.576,91.406a106.246,106.246,0,0,1-25.972,56.246l-44.37,49.738" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <path id="Path_4094" data-name="Path 4094" d="M1050.329,431.391l-18.166,49.625a580.734,580.734,0,0,0-28.01,107.327L977.9,751.373" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <path id="Path_4095" data-name="Path 4095" d="M1081.731,368.864l-22.263,58.186a20.264,20.264,0,0,0,8.156,24.407l-26.692,60.969a108.129,108.129,0,0,0-9.029,40.164l-2.272,76.644" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <line id="Line_333" data-name="Line 333" x2="13.198" y2="42.893" transform="translate(1082.642 747.997)" fill="#fff"/>
                  <line id="Line_334" data-name="Line 334" x2="13.198" y2="42.893" transform="translate(1082.642 747.997)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <path id="Path_4096" data-name="Path 4096" d="M722.869,790.89v-13.1A24.728,24.728,0,0,1,747.6,753.061h85.188V790.89Z" fill="#fff"/>
                  <path id="Path_4097" data-name="Path 4097" d="M722.869,790.89v-13.1A24.728,24.728,0,0,1,747.6,753.061h85.188V790.89Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <path id="Path_4098" data-name="Path 4098" d="M808.058,790.89v-13.1a24.728,24.728,0,1,1,49.456,0v13.1" fill="#595454"/>
                  <path id="Path_4099" data-name="Path 4099" d="M808.058,790.89v-13.1a24.728,24.728,0,1,1,49.456,0v13.1" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <rect id="Rectangle_1221" data-name="Rectangle 1221" width="162.323" height="10.277" transform="translate(808.058 780.613)" fill="#ede7e7"/>
                  <rect id="Rectangle_1222" data-name="Rectangle 1222" width="162.323" height="10.277" transform="translate(808.058 780.613)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <line id="Line_335" data-name="Line 335" y2="10.277" transform="translate(857.513 780.613)" fill="#ede7e7"/>
                  <line id="Line_336" data-name="Line 336" y2="10.277" transform="translate(857.513 780.613)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <path id="Path_4100" data-name="Path 4100" d="M956.079,781.058l-6.427-6.857,5.389-52.178,7.06.729Z" fill="#fff"/>
                  <path id="Path_4101" data-name="Path 4101" d="M956.079,781.058l-6.427-6.857,5.389-52.178,7.06.729Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <path id="Path_4102" data-name="Path 4102" d="M966.723,678.006,962.1,722.753l-7.06-.729,4.622-44.747a3.549,3.549,0,1,1,7.06.729" fill="#fbecce"/>
                  <path id="Path_4103" data-name="Path 4103" d="M966.723,678.006,962.1,722.753l-7.06-.729,4.622-44.747a3.549,3.549,0,1,1,7.06.729Z" fill="none" stroke="#a84599" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <path id="Path_4104" data-name="Path 4104" d="M1081.787,748.04l-27.286,5.042a54.205,54.205,0,0,1-16,.488L993.055,748.2a24.3,24.3,0,0,0-15.153,3.175l-29.937,17.574a5.985,5.985,0,0,0-.724,9.826c6.41,5.156,15.117,12.117,15.4,12.117h132.341Z" fill="#a59f9f"/>
                  <line id="Line_337" data-name="Line 337" x1="28.186" y2="16.53" transform="translate(948.518 761.494)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <line id="Line_338" data-name="Line 338" y1="17.216" x2="25.866" transform="translate(956.76 767.267)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <line id="Line_339" data-name="Line 339" y1="16.073" x2="22.205" transform="translate(964.861 774.817)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <path id="Path_4105" data-name="Path 4105" d="M1148.481,778.982h224.583V790.89H1142.651v-6.078a5.83,5.83,0,0,1,5.83-5.83" fill="#827d7d"/>
                  <path id="Path_4106" data-name="Path 4106" d="M1148.481,778.982h224.583V790.89H1142.651v-6.078A5.83,5.83,0,0,1,1148.481,778.982Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.043"/>
                  <path id="Path_4107" data-name="Path 4107" d="M1424.43,550.2h293.635a8.508,8.508,0,0,1,8.123,11.04L1654.635,790.89H1343.176l73.13-234.713a8.509,8.509,0,0,1,8.124-5.978" fill="#827d7d"/>
                  <path id="Path_4108" data-name="Path 4108" d="M1424.43,550.2h293.635a8.508,8.508,0,0,1,8.123,11.04L1654.635,790.89H1343.176l73.13-234.713A8.509,8.509,0,0,1,1424.43,550.2Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.043"/>
                  <line id="Line_340" data-name="Line 340" x1="40.317" transform="translate(1433.883 563.897)" fill="#ede7e7"/>
                  <line id="Line_341" data-name="Line 341" x1="40.317" transform="translate(1433.883 563.897)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.043"/>
                  <rect id="Rectangle_1223" data-name="Rectangle 1223" width="24.349" height="43.538" transform="translate(1040.446 773.633)" fill="#fff"/>
                  <rect id="Rectangle_1224" data-name="Rectangle 1224" width="24.349" height="43.538" transform="translate(1040.446 773.633)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <rect id="Rectangle_1225" data-name="Rectangle 1225" width="35.84" height="15.474" transform="translate(1034.7 758.159)" fill={accentColor}/>
                  <rect id="Rectangle_1226" data-name="Rectangle 1226" width="35.84" height="15.474" transform="translate(1034.7 758.159)" fill="none" stroke="#a84599" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <rect id="Rectangle_1227" data-name="Rectangle 1227" width="12.174" height="25.81" transform="translate(1048.496 782.164)" fill="none" stroke="#a84599" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <line id="Line_342" data-name="Line 342" y2="17.187" transform="translate(1061.58 757.326)" fill="#fff"/>
                  <line id="Line_343" data-name="Line 343" y2="17.187" transform="translate(1061.58 757.326)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <line id="Line_344" data-name="Line 344" y2="17.187" transform="translate(1052.62 757.326)" fill="#fff"/>
                  <line id="Line_345" data-name="Line 345" y2="17.187" transform="translate(1052.62 757.326)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <line id="Line_346" data-name="Line 346" y2="17.187" transform="translate(1043.66 757.326)" fill="#fff"/>
                  <line id="Line_347" data-name="Line 347" y2="17.187" transform="translate(1043.66 757.326)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <rect id="Rectangle_1228" data-name="Rectangle 1228" width="68.722" height="31.25" transform="translate(1079.672 778.245)" fill="#fff"/>
                  <rect id="Rectangle_1229" data-name="Rectangle 1229" width="68.722" height="31.25" transform="translate(1079.672 778.245)" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <path id="Path_4109" data-name="Path 4109" d="M1148.393,799.408H1130.53a14.336,14.336,0,0,1-14.336-14.336h-36.523v-6.827h68.722Z" fill={accentColor}/>
                  <path id="Path_4110" data-name="Path 4110" d="M1148.393,799.408H1130.53a14.336,14.336,0,0,1-14.336-14.336h-36.523v-6.827h68.722Z" fill="none" stroke="#a84599" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <path id="Path_4111" data-name="Path 4111" d="M1086.726,796.563a6.03,6.03,0,1,0,6.03-6.03A6.03,6.03,0,0,0,1086.726,796.563Z" fill="none" stroke="#a84599" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.711"/>
                  <path id="Path_4112" data-name="Path 4112" d="M1187.945,314.541c.967,5.226-6.17,10.926-15.94,12.733s-18.474-.965-19.441-6.19,6.171-10.927,15.941-12.733,18.474.964,19.44,6.19" fill="#827d7d"/>
                  <path id="Path_4113" data-name="Path 4113" d="M1187.945,314.541c.967,5.226-6.17,10.926-15.94,12.733s-18.474-.965-19.441-6.19,6.171-10.927,15.941-12.733S1186.979,309.315,1187.945,314.541Z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1.184"/>
                  <path id="Path_4114" data-name="Path 4114" d="M1185.865,310.316s26.589-11.51,47.035-53.712c5.041-10.4,7.123,7.5,7.123,7.5s-8.365,34.782-55.137,57.324Z" fill="#827d7d"/>
                  <path id="Path_4115" data-name="Path 4115" d="M1185.865,310.316s26.589-11.51,47.035-53.712c5.041-10.4,7.123,7.5,7.123,7.5s-8.365,34.782-55.137,57.324Z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1.184"/>
                  <path id="Path_4116" data-name="Path 4116" d="M1236.556,229.22a4.01,4.01,0,0,1-4.005-3.831l-2.2-48.394a54.338,54.338,0,0,0-54.37-51.952H1119.3a54.488,54.488,0,0,0-54.427,54.426,4.013,4.013,0,1,1-8.026,0,62.523,62.523,0,0,1,62.453-62.452h56.676a62.351,62.351,0,0,1,62.387,59.613l2.2,48.395a4.014,4.014,0,0,1-3.827,4.191c-.063,0-.125,0-.185,0" fill="#827d7d"/>
                  <path id="Path_4117" data-name="Path 4117" d="M1236.556,229.22a4.01,4.01,0,0,1-4.005-3.831l-2.2-48.394a54.338,54.338,0,0,0-54.37-51.952H1119.3a54.488,54.488,0,0,0-54.427,54.426,4.013,4.013,0,1,1-8.026,0,62.523,62.523,0,0,1,62.453-62.452h56.676a62.351,62.351,0,0,1,62.387,59.613l2.2,48.395a4.014,4.014,0,0,1-3.827,4.191C1236.678,229.219,1236.616,229.22,1236.556,229.22Z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1.184"/>
                  <path id="Path_4118" data-name="Path 4118" d="M1236.056,278.3h0a13.7,13.7,0,0,1-13.661-13.661V223.369a13.661,13.661,0,1,1,27.322,0v41.272a13.7,13.7,0,0,1-13.661,13.661" fill="#827d7d"/>
                  <path id="Path_4119" data-name="Path 4119" d="M1236.056,278.3h0a13.7,13.7,0,0,1-13.661-13.661V223.369a13.661,13.661,0,1,1,27.322,0v41.272A13.7,13.7,0,0,1,1236.056,278.3Z" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1.184"/>
                  <path id="Path_4120" data-name="Path 4120" d="M1248.958,261.609h0a2.631,2.631,0,0,1-2.623-2.623l0-24.012a2.623,2.623,0,1,1,5.246,0l0,24.013a2.63,2.63,0,0,1-2.623,2.623" fill="#ede7e7"/>
                  <path id="Path_4121" data-name="Path 4121" d="M1248.958,261.609h0a2.631,2.631,0,0,1-2.623-2.623l0-24.012a2.623,2.623,0,1,1,5.246,0l0,24.013A2.63,2.63,0,0,1,1248.958,261.609Z" fill="none" stroke="#595454" stroke-miterlimit="10" stroke-width="1.184"/>
                  <path id="Path_4124" data-name="Path 4124" d="M651.4,783.76V524.917a13.5,13.5,0,0,0-13.484-13.476H258.045a13.5,13.5,0,0,0-13.485,13.476V783.76H197.352l0,10.4c2.985,2,10.568,6.419,19.154,6.419H679.459c8.574,0,16.157-4.417,19.148-6.415v-10.4ZM245.555,524.917a12.5,12.5,0,0,1,12.49-12.481H637.916a12.5,12.5,0,0,1,12.489,12.481V783.76H245.555ZM481.716,784.755a4.493,4.493,0,0,1-4.428,3.724H418.672a4.493,4.493,0,0,1-4.428-3.724Zm197.743,14.827H216.5c-7.271,0-13.829-3.294-17.3-5.421H696.762c-3.478,2.127-10.037,5.421-17.3,5.421m18.154-6.416H198.347v-8.411H413.24a5.486,5.486,0,0,0,5.432,4.719h58.616a5.485,5.485,0,0,0,5.432-4.719H697.613Z" fill="#595454"/>
                  <path id="Path_4125" data-name="Path 4125" d="M638.932,766.891v-237.7a.5.5,0,0,0-.5-.5H257.526a.5.5,0,0,0-.5.5v237.7a.5.5,0,0,0,.5.5H638.434a.5.5,0,0,0,.5-.5m-.995-.5H258.024v-236.7H637.937Z" fill="#a59f9f"/>
                  <path id="Path_4126" data-name="Path 4126" d="M447.98,523.015a2.451,2.451,0,1,0-2.45-2.451,2.454,2.454,0,0,0,2.45,2.451m0-3.906a1.455,1.455,0,1,1-1.455,1.455,1.457,1.457,0,0,1,1.455-1.455" fill="#a59f9f"/>
                  <line id="Line_348" data-name="Line 348" y1="111.272" x2="116.892" transform="translate(438.14 551.045)" fill="none" stroke="#707071" stroke-width="0.846"/>
                  <line id="Line_349" data-name="Line 349" y1="46.882" x2="50.008" transform="translate(291.872 592.492)" fill="none" stroke="#707071" stroke-width="0.846"/>
                  <line id="Line_350" data-name="Line 350" y1="111.272" x2="116.892" transform="translate(432.22 582.342)" fill="none" stroke="#707071" stroke-width="0.846"/>
                </g>
              </g>
            </g>
          </g>
          <g id="Laptop" transform="translate(75 684)">
            <g id="Group_1243" data-name="Group 1243" clip-path="url(#clip-path-5)">
              <path id="Path_4692" data-name="Path 4692" d="M576.85,289.319l-556.787.4L1.456,284.071l-.477-10.9,56.3.807,1.112-260.5c0-6.9,6.615-12.5,14.774-12.5H523.058c8.159,0,14.773,5.6,14.773,12.5v260.1l56.2-.4-.477,10.5Z" fill="#827d7d"/>
              <path id="Path_4693" data-name="Path 4693" d="M576.85,289.319l-556.787.4L1.456,284.071l-.477-10.9,56.3.807,1.112-260.5c0-6.9,6.615-12.5,14.774-12.5H523.058c8.159,0,14.773,5.6,14.773,12.5v260.1l56.2-.4-.477,10.5Z" fill="none" stroke="#595454" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.957"/>
              <rect id="Rectangle_1546" data-name="Rectangle 1546" width="450.718" height="236.221" transform="translate(71.729 19.249)" fill="#fff"/>
              <path id="Path_4694" data-name="Path 4694" d="M537.962,272.965V14.122c0-7.431-7.149-13.476-15.937-13.476H73.075c-8.788,0-15.937,6.045-15.937,13.476V272.965H1.346l-.006,10.4c3.528,2,12.491,6.419,22.638,6.419H571.123c10.133,0,19.1-4.417,22.63-6.415v-10.4ZM58.314,14.122c0-6.882,6.622-12.481,14.761-12.481h448.95c8.139,0,14.761,5.6,14.761,12.481V272.965H58.314ZM337.421,273.96a5.138,5.138,0,0,1-5.233,3.724H262.912a5.138,5.138,0,0,1-5.233-3.724Zm233.7,14.827H23.978c-8.593,0-16.344-3.294-20.452-5.421H591.573c-4.111,2.127-11.863,5.421-20.45,5.421m21.455-6.416H2.522V273.96H256.493c.444,2.681,3.161,4.719,6.419,4.719h69.276c3.258,0,5.975-2.038,6.42-4.719h253.97Z" fill="#595454"/>
              <path id="Path_4695" data-name="Path 4695" d="M523.226,256.1V18.4a.548.548,0,0,0-.588-.5H72.462a.548.548,0,0,0-.588.5V256.1a.549.549,0,0,0,.588.5H522.638a.549.549,0,0,0,.588-.5m-1.176-.5h-449V18.894h449Z" fill="#a59f9f"/>
              <path id="Path_4696" data-name="Path 4696" d="M297.55,12.221a2.7,2.7,0,0,0,2.9-2.451,2.937,2.937,0,0,0-5.792,0,2.7,2.7,0,0,0,2.9,2.451m0-3.906a1.607,1.607,0,0,1,1.72,1.455,1.744,1.744,0,0,1-3.44,0,1.606,1.606,0,0,1,1.72-1.455" fill="#a59f9f"/>
              <line id="Line_548" data-name="Line 548" y1="111.272" x2="138.148" transform="translate(285.921 40.251)" fill="none" stroke="#707071" stroke-width="0.92"/>
              <line id="Line_549" data-name="Line 549" y1="46.882" x2="59.102" transform="translate(113.054 81.697)" fill="none" stroke="#707071" stroke-width="0.92"/>
              <line id="Line_550" data-name="Line 550" y1="111.272" x2="138.148" transform="translate(278.923 71.547)" fill="none" stroke="#707071" stroke-width="0.92"/>
            </g>
          </g>
          <rect id="Size_Setter" data-name="Size Setter" width="1912" height="1080" fill="none"/>
        </g>
      </svg>*/}

      <img src="/images/transitionScreens/screen-5.svg" alt="" />
    </div>
      
  )
}
