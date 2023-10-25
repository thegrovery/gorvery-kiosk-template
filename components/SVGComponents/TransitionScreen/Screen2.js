/*===== Components =====*/
import React from "react"
import Link from 'next/link'
import ChevronDown from '@components/SVGComponents/ChevronDown'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

/*===== Site Data =====*/
import data from "@data/data.json"


export default function Screen2({ 
  //Props
  id, children
}) {

  //console.log(author);
  let accentColor = data.accentColor1;

  return (
    <div className={componentStyles.Screen2}>
      {/*<svg width="1463.974" height="990.35" viewBox="0 0 1463.974 990.35">
        <defs>
          <clipPath id="clip-path">
            <rect id="Rectangle_730" data-name="Rectangle 730" width="1463.974" height="973.488" fill="none"/>
          </clipPath>
          <clipPath id="clip-path-2">
            <rect id="Rectangle_671" data-name="Rectangle 671" width="1463.971" height="973.487" fill="none"/>
          </clipPath>
          <clipPath id="clip-path-4">
            <path id="Path_3589" data-name="Path 3589" d="M212.735,871.573l12.823,132h84.512l12.824-132Z" transform="translate(-212.735 -871.573)" fill="none"/>
          </clipPath>
          <clipPath id="clip-path-7">
            <rect id="Rectangle_1191" data-name="Rectangle 1191" width="176.774" height="237.626" fill="none"/>
          </clipPath>
        </defs>
        <g id="Assets" transform="translate(-121.921)">
          <g id="Group_935" data-name="Group 935" transform="translate(121.921 16.862)">
            <g id="Group_934" data-name="Group 934" clip-path="url(#clip-path)">
              <g id="Group_922" data-name="Group 922" transform="translate(0 0.001)">
                <g id="Group_921" data-name="Group 921" transform="translate(-2 24)" clip-path="url(#clip-path-2)">
                  <path id="Path_3579" data-name="Path 3579" d="M1474.679,769.254h0c-6.121,0-10.208,4.962-9.129,11.083l20.955,118.846h22.167l-20.956-118.846a13.8,13.8,0,0,0-13.037-11.083" transform="translate(-142.595 -74.857)" fill="#fecdb4"/>
                  <path id="Path_3580" data-name="Path 3580" d="M1474.679,769.254h0c-6.121,0-10.208,4.962-9.129,11.083l20.955,118.846h22.167l-20.956-118.846A13.8,13.8,0,0,0,1474.679,769.254Z" transform="translate(-142.595 -74.857)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.399"/>
                  <path id="Path_3581" data-name="Path 3581" d="M1525.03,776.274h0c-6.121,0-10.208,4.962-9.129,11.083l19.837,112.51h22.167l-19.839-112.51a13.8,13.8,0,0,0-13.038-11.083" transform="translate(-147.495 -75.54)" fill="#fecdb4"/>
                  <path id="Path_3582" data-name="Path 3582" d="M1525.03,776.274h0c-6.121,0-10.208,4.962-9.129,11.083l19.837,112.51h22.167l-19.839-112.51A13.8,13.8,0,0,0,1525.03,776.274Z" transform="translate(-147.495 -75.54)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.399"/>
                  <path id="Path_3583" data-name="Path 3583" d="M1492.15,729.07h0c-6.121,0-10.208,4.962-9.129,11.083l27.352,155.119h22.167l-27.352-155.119a13.8,13.8,0,0,0-13.037-11.083" transform="translate(-144.295 -70.946)" fill="#fecdb4"/>
                  <path id="Path_3584" data-name="Path 3584" d="M1492.15,729.07h0c-6.121,0-10.208,4.962-9.129,11.083l27.352,155.119h22.167l-27.352-155.119A13.8,13.8,0,0,0,1492.15,729.07Z" transform="translate(-144.295 -70.946)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.399"/>
                  <line id="Line_182" data-name="Line 182" x2="26.442" y2="149.964" transform="translate(1350.718 674.362)" fill="#e9e1e0"/>
                  <line id="Line_183" data-name="Line 183" x2="26.442" y2="149.964" transform="translate(1350.718 674.362)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.399"/>
                  <line id="Line_184" data-name="Line 184" x2="19.997" y2="113.41" transform="translate(1334.997 710.915)" fill="#e9e1e0"/>
                  <line id="Line_185" data-name="Line 185" x2="19.997" y2="113.41" transform="translate(1334.997 710.915)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.399"/>
                  <line id="Line_186" data-name="Line 186" x2="18.873" y2="107.029" transform="translate(1380.456 717.297)" fill="#e9e1e0"/>
                  <line id="Line_187" data-name="Line 187" x2="18.873" y2="107.029" transform="translate(1380.456 717.297)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.399"/>
                  <path id="Path_3585" data-name="Path 3585" d="M1463.328,913.189c0,35.378,5.821,69.244,40.08,98.353h102.327V913.189Z" transform="translate(-142.396 -88.863)" fill="#fff"/>
                  <path id="Path_3586" data-name="Path 3586" d="M1463.328,913.189c0,35.378,5.821,69.244,40.08,98.353h102.327V913.189Z" transform="translate(-142.396 -88.863)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.399"/>
                  <line id="Line_188" data-name="Line 188" x2="108.606" transform="translate(1321.595 841.273)" fill="#fff"/>
                  <line id="Line_189" data-name="Line 189" x2="108.606" transform="translate(1321.595 841.273)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.399"/>
                </g>
              </g>
              <path id="Path_3958" data-name="Path 3958" d="M0,0H252.085V166.243H0Z" transform="translate(1156.431 260.745)" fill="#fff"/>
              <rect id="Rectangle_673" data-name="Rectangle 673" width="252.085" height="166.243" transform="translate(1156.431 260.745)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.924"/>
              <g id="Group_924" data-name="Group 924" transform="translate(0 0.001)">
                <g id="Group_923" data-name="Group 923" clip-path="url(#clip-path-2)">
                  <path id="Path_3587" data-name="Path 3587" d="M1291.829,419.244s8.357,3.891,87.3-23.038c72.292-24.661,56.863-5.507,38.517,15.736-27.214,31.509,87.78-26.2,106.887-4.275" transform="translate(-125.707 -37.427)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.924"/>
                  <path id="Path_3588" data-name="Path 3588" d="M1291.829,364.385s8.357,3.891,87.3-23.038c72.292-24.661,56.863-5.507,38.517,15.736-27.214,31.509,87.78-26.2,106.887-4.275" transform="translate(-125.707 -32.088)" fill="none" stroke="#8f3189" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                  <rect id="Rectangle_674" data-name="Rectangle 674" width="232.705" height="146.864" transform="translate(1166.122 270.432)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.924"/>
                </g>
              </g>
              <g id="Group_926" data-name="Group 926" transform="translate(192.034 786.761)">
                <g id="Group_925" data-name="Group 925" clip-path="url(#clip-path-4)">
                  <line id="Line_190" data-name="Line 190" x2="126.047" y2="126.047" transform="translate(55.103 -66.185)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.93"/>
                  <line id="Line_191" data-name="Line 191" x2="126.047" y2="126.047" transform="translate(46.682 -57.763)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.93"/>
                  <line id="Line_192" data-name="Line 192" x2="126.047" y2="126.047" transform="translate(38.26 -49.341)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.93"/>
                  <line id="Line_193" data-name="Line 193" x2="126.047" y2="126.047" transform="translate(29.839 -40.92)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.93"/>
                  <line id="Line_194" data-name="Line 194" x2="126.047" y2="126.047" transform="translate(21.417 -32.498)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.93"/>
                  <line id="Line_195" data-name="Line 195" x2="126.047" y2="126.047" transform="translate(12.995 -24.077)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.93"/>
                  <line id="Line_196" data-name="Line 196" x2="126.047" y2="126.047" transform="translate(4.574 -15.655)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.93"/>
                  <line id="Line_197" data-name="Line 197" x2="126.047" y2="126.047" transform="translate(-3.848 -7.233)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.93"/>
                  <line id="Line_198" data-name="Line 198" x2="126.047" y2="126.047" transform="translate(-12.269 1.188)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.93"/>
                  <line id="Line_199" data-name="Line 199" x2="126.047" y2="126.047" transform="translate(-20.691 9.61)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.93"/>
                  <line id="Line_200" data-name="Line 200" x2="126.047" y2="126.047" transform="translate(-29.113 18.031)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.93"/>
                  <line id="Line_201" data-name="Line 201" x2="126.047" y2="126.047" transform="translate(-37.534 26.453)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.93"/>
                  <line id="Line_202" data-name="Line 202" x2="126.047" y2="126.047" transform="translate(-45.956 34.875)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.93"/>
                  <line id="Line_203" data-name="Line 203" x2="126.047" y2="126.047" transform="translate(-54.377 43.296)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.93"/>
                  <line id="Line_204" data-name="Line 204" x2="126.047" y2="126.047" transform="translate(-62.799 51.718)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.93"/>
                  <line id="Line_205" data-name="Line 205" x2="126.047" y2="126.047" transform="translate(-71.221 60.139)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.93"/>
                  <line id="Line_206" data-name="Line 206" x1="126.222" y2="126.222" transform="translate(-71.115 -66.238)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.93"/>
                  <line id="Line_207" data-name="Line 207" x1="126.222" y2="126.222" transform="translate(-62.693 -57.817)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.93"/>
                  <line id="Line_208" data-name="Line 208" x1="126.222" y2="126.222" transform="translate(-54.272 -49.395)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.93"/>
                  <line id="Line_209" data-name="Line 209" x1="126.222" y2="126.222" transform="translate(-45.85 -40.973)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.93"/>
                  <line id="Line_210" data-name="Line 210" x1="126.222" y2="126.222" transform="translate(-37.428 -32.552)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.93"/>
                  <line id="Line_211" data-name="Line 211" x1="126.222" y2="126.222" transform="translate(-29.007 -24.13)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.93"/>
                  <line id="Line_212" data-name="Line 212" x1="126.222" y2="126.222" transform="translate(-20.585 -15.709)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.93"/>
                  <line id="Line_213" data-name="Line 213" x1="126.222" y2="126.222" transform="translate(-12.164 -7.287)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.93"/>
                  <line id="Line_214" data-name="Line 214" x1="126.222" y2="126.222" transform="translate(-3.742 1.135)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.93"/>
                  <line id="Line_215" data-name="Line 215" x1="126.222" y2="126.222" transform="translate(4.68 9.556)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.93"/>
                  <line id="Line_216" data-name="Line 216" x1="126.222" y2="126.222" transform="translate(13.101 17.978)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.93"/>
                  <line id="Line_217" data-name="Line 217" x1="126.222" y2="126.222" transform="translate(21.523 26.399)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.93"/>
                  <line id="Line_218" data-name="Line 218" x1="126.222" y2="126.222" transform="translate(29.944 34.821)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.93"/>
                  <line id="Line_219" data-name="Line 219" x1="126.222" y2="126.222" transform="translate(38.366 43.243)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.93"/>
                  <line id="Line_220" data-name="Line 220" x1="126.222" y2="126.222" transform="translate(46.787 51.664)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.93"/>
                  <line id="Line_221" data-name="Line 221" x1="126.222" y2="126.222" transform="translate(55.209 60.086)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.93"/>
                </g>
              </g>
              <g id="Group_928" data-name="Group 928" transform="translate(0 0.001)">
                <g id="Group_927" data-name="Group 927" clip-path="url(#clip-path-2)">
                  <path id="Path_3590" data-name="Path 3590" d="M322.892,871.573H212.734l12.824,132H310.07Z" transform="translate(-20.701 -84.813)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.93"/>
                  <rect id="Rectangle_676" data-name="Rectangle 676" width="134.903" height="7.893" transform="translate(179.662 778.866)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.93"/>
                  <path id="Path_3591" data-name="Path 3591" d="M300.327,460.167v-5.1a3.962,3.962,0,0,0-3.962-3.962H265.293a3.962,3.962,0,0,0-3.962,3.962v9.042l6.21,44.272h26.577l6.21-44.272Z" transform="translate(-25.43 -43.898)" fill="#fff"/>
                  <path id="Path_3592" data-name="Path 3592" d="M300.327,460.167v-5.1a3.962,3.962,0,0,0-3.962-3.962H265.293a3.962,3.962,0,0,0-3.962,3.962v9.042l6.21,44.272h26.577l6.21-44.272Z" transform="translate(-25.43 -43.898)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                  <path id="Path_3593" data-name="Path 3593" d="M296.342,495.862H265.588l-2.857-20.367H299.2Z" transform="translate(-25.566 -46.271)" fill={accentColor}/>
                  <path id="Path_3594" data-name="Path 3594" d="M296.342,495.862H265.588l-2.857-20.367H299.2Z" transform="translate(-25.566 -46.271)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                  <rect id="Rectangle_677" data-name="Rectangle 677" width="46.037" height="3.939" transform="translate(232.38 416.269)" fill="#fff"/>
                  <rect id="Rectangle_678" data-name="Rectangle 678" width="46.037" height="3.939" transform="translate(232.38 416.269)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                </g>
              </g>
              <g id="Group_933" data-name="Group 933" transform="translate(0 0.001)">
                <g id="Group_932" data-name="Group 932" clip-path="url(#clip-path-2)">
                  <path id="Path_3595" data-name="Path 3595" d="M348.536,555.1c-9.519,0-17.236,6.586-17.236,14.71h34.472c0-8.124-7.717-14.71-17.236-14.71" transform="translate(-32.239 -54.018)" fill="#fecdb4"/>
                  <path id="Path_3596" data-name="Path 3596" d="M348.536,555.1c-9.519,0-17.236,6.586-17.236,14.71h34.472C365.772,561.69,358.055,555.1,348.536,555.1Z" transform="translate(-32.239 -54.018)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.361"/>
                  <rect id="Rectangle_680" data-name="Rectangle 680" width="10.274" height="34.129" transform="translate(263.479 482.594)" fill="#fff"/>
                  <rect id="Rectangle_681" data-name="Rectangle 681" width="10.274" height="34.129" transform="translate(263.479 482.594)" fill="none" stroke="#474343" stroke-miterlimit="10" stroke-width="1.361"/>
                  <path id="Path_3597" data-name="Path 3597" d="M154.756,492.767V317.432h-8.262v178.26h89.549v-2.926Z" transform="translate(-14.255 -30.89)" fill="#e9e1e0"/>
                  <path id="Path_3598" data-name="Path 3598" d="M154.756,492.767V317.432h-8.262v178.26h89.549v-2.926Z" transform="translate(-14.255 -30.89)" fill="none" stroke="#474343" stroke-miterlimit="10" stroke-width="1.361"/>
                  <rect id="Rectangle_682" data-name="Rectangle 682" width="173.549" height="8.47" transform="translate(219.618 516.245)" fill="#fff"/>
                  <rect id="Rectangle_683" data-name="Rectangle 683" width="173.549" height="8.47" transform="translate(219.618 516.245)" fill="none" stroke="#474343" stroke-miterlimit="10" stroke-width="1.361"/>
                  <path id="Path_3599" data-name="Path 3599" d="M167.89,356.32l-21.4-30.708V299.857l21.4-30.709Z" transform="translate(-14.255 -26.192)" fill="#e9e1e0"/>
                  <path id="Path_3600" data-name="Path 3600" d="M167.89,356.32l-21.4-30.708V299.857l21.4-30.709Z" transform="translate(-14.255 -26.192)" fill="none" stroke="#474343" stroke-miterlimit="10" stroke-width="1.361"/>
                  <rect id="Rectangle_684" data-name="Rectangle 684" width="8.767" height="178.105" transform="translate(150.564 195.905)" fill="#948d8d"/>
                  <rect id="Rectangle_685" data-name="Rectangle 685" width="8.767" height="178.105" transform="translate(150.564 195.905)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.361"/>
                  <rect id="Rectangle_686" data-name="Rectangle 686" width="11.441" height="166.181" transform="translate(142.194 489.473)" fill="#fff"/>
                  <rect id="Rectangle_687" data-name="Rectangle 687" width="11.441" height="166.181" transform="translate(142.194 489.473)" fill="none" stroke="#474343" stroke-miterlimit="10" stroke-width="1.361"/>
                  <rect id="Rectangle_688" data-name="Rectangle 688" width="193.885" height="12.351" transform="translate(50.972 482.677)" fill="#948d8d"/>
                  <rect id="Rectangle_689" data-name="Rectangle 689" width="193.885" height="12.351" transform="translate(50.972 482.677)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.361"/>
                  <rect id="Rectangle_690" data-name="Rectangle 690" width="31.02" height="297.647" transform="translate(132.405 655.654)" fill="#fff"/>
                  <rect id="Rectangle_691" data-name="Rectangle 691" width="31.02" height="297.647" transform="translate(132.405 655.654)" fill="none" stroke="#474343" stroke-miterlimit="10" stroke-width="1.361"/>
                  <rect id="Rectangle_692" data-name="Rectangle 692" width="193.885" height="12.352" transform="translate(50.972 947.124)" fill="#fff"/>
                  <rect id="Rectangle_693" data-name="Rectangle 693" width="193.885" height="12.352" transform="translate(50.972 947.124)" fill="none" stroke="#474343" stroke-miterlimit="10" stroke-width="1.361"/>
                  <rect id="Rectangle_694" data-name="Rectangle 694" width="290.853" height="17.875" transform="translate(0.614 464.802)" fill="#fff"/>
                  <rect id="Rectangle_695" data-name="Rectangle 695" width="290.853" height="17.875" transform="translate(0.614 464.802)" fill="none" stroke="#474343" stroke-miterlimit="10" stroke-width="1.361"/>
                  <rect id="Rectangle_696" data-name="Rectangle 696" width="36.602" height="28.328" transform="translate(410.121 899.953)" fill="#fff"/>
                  <rect id="Rectangle_697" data-name="Rectangle 697" width="36.602" height="28.328" transform="translate(410.121 899.953)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.361"/>
                  <rect id="Rectangle_698" data-name="Rectangle 698" width="36.602" height="28.328" transform="translate(455.7 899.866) rotate(-3.365)" fill="#fff"/>
                  <rect id="Rectangle_699" data-name="Rectangle 699" width="36.602" height="28.328" transform="translate(455.7 899.866) rotate(-3.365)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.361"/>
                  <path id="Path_3601" data-name="Path 3601" d="M447.006,1025.834h41.9v36.87H411.37v-9.118a8.641,8.641,0,0,1,7.855-8.605l11.4-1.042a18.023,18.023,0,0,0,16.384-17.948Z" transform="translate(-40.03 -99.825)" fill="#fff"/>
                  <path id="Path_3602" data-name="Path 3602" d="M447.006,1025.834h41.9v36.87H411.37v-9.118a8.641,8.641,0,0,1,7.855-8.605l11.4-1.042a18.023,18.023,0,0,0,16.384-17.948Z" transform="translate(-40.03 -99.825)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.361"/>
                  <line id="Line_222" data-name="Line 222" x1="11.733" transform="translate(406.978 931.152)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.361"/>
                  <line id="Line_223" data-name="Line 223" x1="13.085" transform="translate(403.528 936.76)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.361"/>
                  <rect id="Rectangle_700" data-name="Rectangle 700" width="77.535" height="6" transform="translate(371.339 956.878)" fill="#474343"/>
                  <rect id="Rectangle_701" data-name="Rectangle 701" width="77.535" height="6" transform="translate(371.339 956.878)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.361"/>
                  <path id="Path_3603" data-name="Path 3603" d="M499.484,1025.834h41.9v36.87H463.848v-9.118a8.641,8.641,0,0,1,7.855-8.605l11.4-1.042a18.023,18.023,0,0,0,16.384-17.948Z" transform="translate(-45.137 -99.825)" fill="#fff"/>
                  <path id="Path_3604" data-name="Path 3604" d="M499.484,1025.834h41.9v36.87H463.848v-9.118a8.641,8.641,0,0,1,7.855-8.605l11.4-1.042a18.023,18.023,0,0,0,16.384-17.948Z" transform="translate(-45.137 -99.825)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.361"/>
                  <line id="Line_224" data-name="Line 224" x1="11.733" transform="translate(454.35 931.152)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.361"/>
                  <line id="Line_225" data-name="Line 225" x1="13.085" transform="translate(450.9 936.76)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.361"/>
                  <rect id="Rectangle_702" data-name="Rectangle 702" width="77.535" height="6" transform="translate(418.711 956.878)" fill="#474343"/>
                  <rect id="Rectangle_703" data-name="Rectangle 703" width="77.535" height="6" transform="translate(418.711 956.878)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.361"/>
                  <path id="Path_3605" data-name="Path 3605" d="M505.848,966.094l-4.16-290.941L439.23,588.025l-12.945,153.3a214.143,214.143,0,0,0,.29,39.189l18.4,185.181Z" transform="translate(-41.408 -57.222)" fill="#948d8d"/>
                  <path id="Path_3606" data-name="Path 3606" d="M505.848,966.094l-4.16-290.941L439.23,588.025l-12.945,153.3a214.143,214.143,0,0,0,.29,39.189l18.4,185.181Z" transform="translate(-41.408 -57.222)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.361"/>
                  <path id="Path_3607" data-name="Path 3607" d="M455.73,620.622l37.337,347L540.024,965l-.969-294.581,6.255-21.859a92.565,92.565,0,0,0-1.418-55.439l-9.782-28.58-93.4,21.2" transform="translate(-42.885 -54.937)" fill="#948d8d"/>
                  <path id="Path_3608" data-name="Path 3608" d="M455.73,620.622l37.337,347L540.024,965l-.969-294.581,6.255-21.859a92.565,92.565,0,0,0-1.418-55.439l-9.782-28.58-93.4,21.2" transform="translate(-42.885 -54.937)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.361"/>
                  <line id="Line_226" data-name="Line 226" x2="36.806" y2="343.188" transform="translate(412.845 565.685)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.361"/>
                  <path id="Path_3609" data-name="Path 3609" d="M423.986,263.223a11.763,11.763,0,0,1-8.665-2.532l-.008-.006a12.916,12.916,0,0,1-3.834-5.573,10.9,10.9,0,0,1-.5-2.337l-1.635-14.965-5.741-3.953a23.419,23.419,0,0,0-9.778,18.481l-.413,17.169-7.2,11.56A3.308,3.308,0,0,0,387.6,285.8l7.837,3.747,1.512,13.836a16.034,16.034,0,0,0,17.681,14.2l9.387-1.025,5.63,18.342,42.77-5.547-5.989-22a28.788,28.788,0,0,1-1.016-5.362l-11.934,1.3a10.072,10.072,0,0,1-11.106-8.918l-.775-7.1" transform="translate(-37.534 -22.758)" fill="#e9e1e0"/>
                  <path id="Path_3610" data-name="Path 3610" d="M423.986,263.223a11.763,11.763,0,0,1-8.665-2.532l-.008-.006a12.916,12.916,0,0,1-3.834-5.573,10.9,10.9,0,0,1-.5-2.337l-1.635-14.965-5.741-3.953a23.419,23.419,0,0,0-9.778,18.481l-.413,17.169-7.2,11.56A3.308,3.308,0,0,0,387.6,285.8l7.837,3.747,1.512,13.836a16.034,16.034,0,0,0,17.681,14.2l9.387-1.025,5.63,18.342,42.77-5.547-5.989-22a28.788,28.788,0,0,1-1.016-5.362l-11.934,1.3a10.072,10.072,0,0,1-11.106-8.918l-.775-7.1" transform="translate(-37.534 -22.758)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.361"/>
                  <path id="Path_3611" data-name="Path 3611" d="M425.915,262.461a11.776,11.776,0,0,1-8.689-2.455,14.575,14.575,0,0,1-2.513-2.639,13.715,13.715,0,0,1-1.8-5.354l-1.635-14.965-5.741-3.953a23.346,23.346,0,0,1,11.1-4.253l24.231-2.648a27.835,27.835,0,0,1,30.7,30.676l-4.19,38.579a28.729,28.729,0,0,0-.041,5.776l-11.934,1.3a10.072,10.072,0,0,1-11.106-8.918l-2.17-14.9a107.036,107.036,0,0,1-13.562-4.321s-1.6-9.29-2.648-11.929" transform="translate(-39.462 -21.996)" fill="#948d8d"/>
                  <path id="Path_3612" data-name="Path 3612" d="M425.915,262.461a11.776,11.776,0,0,1-8.689-2.455,14.575,14.575,0,0,1-2.513-2.639,13.715,13.715,0,0,1-1.8-5.354l-1.635-14.965-5.741-3.953a23.346,23.346,0,0,1,11.1-4.253l24.231-2.648a27.835,27.835,0,0,1,30.7,30.676l-4.19,38.579a28.729,28.729,0,0,0-.041,5.776l-11.934,1.3a10.072,10.072,0,0,1-11.106-8.918l-2.17-14.9a107.036,107.036,0,0,1-13.562-4.321s-1.6-9.29-2.648-11.929" transform="translate(-39.462 -21.996)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.361"/>
                  <path id="Path_3613" data-name="Path 3613" d="M437.991,271.651a13.426,13.426,0,1,1,2.229,20.4Z" transform="translate(-42.621 -26.03)" fill="#e9e1e0"/>
                  <path id="Path_3614" data-name="Path 3614" d="M405.752,273.174a2.41,2.41,0,1,1-2.658-2.134,2.41,2.41,0,0,1,2.658,2.134" transform="translate(-39.016 -26.374)" fill="#474343"/>
                  <path id="Path_3615" data-name="Path 3615" d="M410.023,268.615a8.086,8.086,0,0,0-11.007-3.124" transform="translate(-38.828 -25.736)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.361"/>
                  <path id="Path_3616" data-name="Path 3616" d="M406.746,296.023a4.538,4.538,0,0,1-5.132,3.548" transform="translate(-39.081 -28.807)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.361"/>
                  <path id="Path_3617" data-name="Path 3617" d="M402.151,565.957l12.821-6.095-4.656-24.071s-17.731,14.661-26.151,14.661l-14.672-1.727a9.686,9.686,0,0,0-6.322,1.166L349.6,557.67c-2.484,1.424-3.318,4.076-.922,6.446s4.172,4.745,7.5,4.745,34.788-.328,34.788-.328a26.624,26.624,0,0,0,11.182-2.577" transform="translate(-33.791 -52.139)" fill="#e9e1e0"/>
                  <path id="Path_3618" data-name="Path 3618" d="M402.151,565.957l12.821-6.095-4.656-24.071s-17.731,14.661-26.151,14.661l-14.672-1.727a9.686,9.686,0,0,0-6.322,1.166L349.6,557.67c-2.484,1.424-3.318,4.076-.922,6.446s4.172,4.745,7.5,4.745,34.788-.328,34.788-.328A26.624,26.624,0,0,0,402.151,565.957Z" transform="translate(-33.791 -52.139)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.361"/>
                  <path id="Path_3619" data-name="Path 3619" d="M371.8,563.158s-9.346,1.8-15.372,8.068" transform="translate(-34.684 -54.802)" fill="#e9e1e0"/>
                  <path id="Path_3620" data-name="Path 3620" d="M371.8,563.158s-9.346,1.8-15.372,8.068" transform="translate(-34.684 -54.802)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.361"/>
                  <path id="Path_3621" data-name="Path 3621" d="M366.924,559.719s-9.234,2.1-15.26,8.367" transform="translate(-34.22 -54.467)" fill="#e9e1e0"/>
                  <path id="Path_3622" data-name="Path 3622" d="M366.924,559.719s-9.234,2.1-15.26,8.367" transform="translate(-34.22 -54.467)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.361"/>
                  <path id="Path_3623" data-name="Path 3623" d="M363.283,556.538s-9.234,2.1-15.26,8.367" transform="translate(-33.866 -54.157)" fill="#e9e1e0"/>
                  <path id="Path_3624" data-name="Path 3624" d="M363.283,556.538s-9.234,2.1-15.26,8.367" transform="translate(-33.866 -54.157)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.361"/>
                  <path id="Path_3625" data-name="Path 3625" d="M432.133,345.163l-5.867,8.221a80.433,80.433,0,0,0-13.158,63.659l24.737,146.786,99.553-5.943c.891-79.642-23.964-134.055-49.644-216.878l-14.993-1.641Z" transform="translate(-40.024 -33.024)" fill={accentColor}/>
                  <path id="Path_3626" data-name="Path 3626" d="M432.133,345.163l-5.867,8.221a80.433,80.433,0,0,0-13.158,63.659l24.737,146.786,99.553-5.943c.891-79.642-23.964-134.055-49.644-216.878l-14.993-1.641Z" transform="translate(-40.024 -33.024)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.361"/>
                  <path id="Path_3627" data-name="Path 3627" d="M481.73,340.631a50.664,50.664,0,0,1,47.24,41.45l16.93,92.207a29.733,29.733,0,0,1-19.231,33.367l-112.853,40.09L400.345,520.8l94.93-56.486-26.683-78.905" transform="translate(-38.957 -33.148)" fill={accentColor}/>
                  <path id="Path_3628" data-name="Path 3628" d="M481.73,340.631a50.664,50.664,0,0,1,47.24,41.45l16.93,92.207a29.733,29.733,0,0,1-19.231,33.367l-112.853,40.09L400.345,520.8l94.93-56.486-26.683-78.905" transform="translate(-38.957 -33.148)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.361"/>
                  <path id="Path_3629" data-name="Path 3629" d="M398.763,525.711l96.358-56.568-26.683-78.9" transform="translate(-38.803 -37.975)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.361"/>
                  <line id="Line_227" data-name="Line 227" x1="113.263" y2="40.476" transform="translate(374.449 474.507)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.361"/>
                  <rect id="Rectangle_704" data-name="Rectangle 704" width="10.274" height="34.129" transform="translate(833.619 482.594)" fill="#fff" stroke="#707070" stroke-width="1"/>
                  <path id="Path_3632" data-name="Path 3632" d="M786.357,492.767V317.432h-8.262v178.26h89.549v-2.926Z" transform="translate(-75.716 -30.89)" fill="#e9e1e0"/>
                  <path id="Path_3633" data-name="Path 3633" d="M786.357,492.767V317.432h-8.262v178.26h89.549v-2.926Z" transform="translate(-75.716 -30.89)" fill="none" stroke="#474343" stroke-miterlimit="10" stroke-width="1"/>
                  <rect id="Rectangle_708" data-name="Rectangle 708" width="11.441" height="166.181" transform="translate(712.335 489.473)" fill="#fff"/>
                  <rect id="Rectangle_709" data-name="Rectangle 709" width="11.441" height="166.181" transform="translate(712.335 489.473)" fill="none" stroke="#474343" stroke-miterlimit="10" stroke-width="1"/>
                  <rect id="Rectangle_710" data-name="Rectangle 710" width="193.885" height="12.351" transform="translate(621.111 482.677)" fill="#948d8d"/>
                  <rect id="Rectangle_711" data-name="Rectangle 711" width="193.885" height="12.351" transform="translate(621.111 482.677)" fill="none" stroke="#948d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.361"/>
                  <rect id="Rectangle_712" data-name="Rectangle 712" width="31.02" height="297.647" transform="translate(702.545 655.654)" fill="#fff"/>
                  <rect id="Rectangle_713" data-name="Rectangle 713" width="31.02" height="297.647" transform="translate(702.545 655.654)" fill="none" stroke="#474343" stroke-miterlimit="10" stroke-width="1"/>
                  <rect id="Rectangle_714" data-name="Rectangle 714" width="193.885" height="12.352" transform="translate(621.111 947.124)" fill="#fff"/>
                  <rect id="Rectangle_715" data-name="Rectangle 715" width="193.885" height="12.352" transform="translate(621.111 947.124)" fill="none" stroke="#474343" stroke-miterlimit="10" stroke-width="1"/>
                  <rect id="Rectangle_716" data-name="Rectangle 716" width="290.853" height="17.875" transform="translate(570.754 464.802)" fill="#fff" stroke="#595454" stroke-width="1"/>
                  <path id="Path_3634" data-name="Path 3634" d="M1242.345,254.445h-.35V240.831a30.54,30.54,0,0,0-30.541-30.54h-9.531a30.54,30.54,0,0,0-30.54,30.54v13.614h-.351a12.488,12.488,0,0,0,0,24.976h.468a30.59,30.59,0,0,0,15.585,24.139l-.316,56.163,17.63,30.936,22.287-38.586-.392-48.512a30.589,30.589,0,0,0,15.584-24.139h.468a12.488,12.488,0,0,0,0-24.976" transform="translate(-112.737 -20.464)" fill="#948d8d"/>
                  <path id="Path_3635" data-name="Path 3635" d="M1242.345,254.445h-.35V240.831a30.54,30.54,0,0,0-30.541-30.54h-9.531a30.54,30.54,0,0,0-30.54,30.54v13.614h-.351a12.488,12.488,0,0,0,0,24.976h.468a30.59,30.59,0,0,0,15.585,24.139l-.316,56.163,17.63,30.936,22.287-38.586-.392-48.512a30.589,30.589,0,0,0,15.584-24.139h.468a12.488,12.488,0,0,0,0-24.976Z" transform="translate(-112.737 -20.464)" fill="none" stroke="#948d8d" stroke-miterlimit="10" stroke-width="1.069"/>
                  <path id="Path_3636" data-name="Path 3636" d="M1209.857,282.236c9.982.409,19.674,4.109,23,10.7l10.584-11.193v9.384a23.26,23.26,0,0,1-23.259,23.26h-24.243a23.26,23.26,0,0,1-23.26-23.26V281.74l10.586,11.193c3.329-6.588,13.02-10.288,23-10.7l1.624-.042c.145,0,.287,0,.432,0Z" transform="translate(-114.113 -27.417)" fill="#474343"/>
                  <path id="Path_3637" data-name="Path 3637" d="M1209.857,282.236c9.982.409,19.674,4.109,23,10.7l10.584-11.193v9.384a23.26,23.26,0,0,1-23.259,23.26h-24.243a23.26,23.26,0,0,1-23.26-23.26V281.74l10.586,11.193c3.329-6.588,13.02-10.288,23-10.7l1.624-.042c.145,0,.287,0,.432,0l1.528.042" transform="translate(-114.113 -27.417)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.069"/>
                  <path id="Path_3638" data-name="Path 3638" d="M1224.771,260.828a2.5,2.5,0,1,1-1.951,2.952,2.5,2.5,0,0,1,1.951-2.952m-33.9,2.952a2.5,2.5,0,1,0,1.951-2.952,2.5,2.5,0,0,0-1.951,2.952" transform="translate(-115.878 -25.377)" fill="#474343"/>
                  <path id="Path_3639" data-name="Path 3639" d="M1223.942,248.822c4.552-2.693,9.5-1.581,11.882,1.589" transform="translate(-119.101 -24.066)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.069"/>
                  <path id="Path_3640" data-name="Path 3640" d="M1198.038,248.485c-4.552-2.693-9.5-1.582-11.882,1.589" transform="translate(-115.424 -24.033)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.069"/>
                  <path id="Path_3641" data-name="Path 3641" d="M1211.891,261.7l-4.857,9.651a3.647,3.647,0,0,0,2.2,5.129l2.656.805" transform="translate(-117.418 -25.466)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.069"/>
                  <path id="Path_3642" data-name="Path 3642" d="M1219.133,288.636c-2.2,2.546-11.7,4.765-16.263.125" transform="translate(-117.051 -28.088)" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.069"/>
                  <rect id="Rectangle_718" data-name="Rectangle 718" width="40.431" height="35.376" transform="translate(1145.88 916.251)" fill="#948d8d"/>
                  <rect id="Rectangle_719" data-name="Rectangle 719" width="40.431" height="35.376" transform="translate(1145.88 916.251)" fill="none" stroke="#948d8d" stroke-miterlimit="10" stroke-width="1"/>
                  <path id="Path_3643" data-name="Path 3643" d="M1269.406,1034.668v32.023h22.872v-4.513l9.515,4.513h44.595v-7.6a6.781,6.781,0,0,0-6.516-6.777l-16.218-.634a14.452,14.452,0,0,1-13.886-14.44v-2.574Z" transform="translate(-123.525 -100.684)" fill="#474343"/>
                  <path id="Path_3644" data-name="Path 3644" d="M1269.406,1034.668v32.023h22.872v-4.513l9.515,4.513h44.595v-7.6a6.781,6.781,0,0,0-6.516-6.777l-16.218-.634a14.452,14.452,0,0,1-13.886-14.44v-2.574Z" transform="translate(-123.525 -100.684)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                  <rect id="Rectangle_720" data-name="Rectangle 720" width="40.431" height="35.376" transform="translate(1033.838 916.251)" fill="#948d8d"/>
                  <rect id="Rectangle_721" data-name="Rectangle 721" width="40.431" height="35.376" transform="translate(1033.838 916.251)" fill="none" stroke="#948d8d" stroke-miterlimit="10" stroke-width="1"/>
                  <path id="Path_3645" data-name="Path 3645" d="M1181.775,1034.668v32.023H1158.9v-4.513l-9.515,4.513h-44.595v-7.6a6.781,6.781,0,0,1,6.516-6.777l16.218-.634a14.452,14.452,0,0,0,13.886-14.44v-2.574Z" transform="translate(-107.507 -100.684)" fill="#474343"/>
                  <path id="Path_3646" data-name="Path 3646" d="M1181.775,1034.668v32.023H1158.9v-4.513l-9.515,4.513h-44.595v-7.6a6.781,6.781,0,0,1,6.516-6.777l16.218-.634a14.452,14.452,0,0,0,13.886-14.44v-2.574Z" transform="translate(-107.507 -100.684)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                  <path id="Path_3647" data-name="Path 3647" d="M1283.832,574.96l23.678,399.389h-62.944L1207,685.454l-11.827,288.9h-62.406V579.434a75.6,75.6,0,0,1,151.065-4.474" transform="translate(-110.229 -49.029)" fill="#474343"/>
                  <path id="Path_3649" data-name="Path 3649" d="M1166.543,583.292h75.429v-239.9l-35.568,40.5-39.861-40.5Z" transform="translate(-113.516 -33.416)" fill="#fecdb4"/>
                  <path id="Path_3650" data-name="Path 3650" d="M1166.543,583.292h75.429v-239.9l-35.568,40.5-39.861-40.5Z" transform="translate(-113.516 -33.416)" fill="none" stroke="#474343" stroke-miterlimit="10" stroke-width="1"/>
                  <path id="Path_3651" data-name="Path 3651" d="M1021.334,463.2l-17.807-6.221-33.138-15.945a2.734,2.734,0,0,0-2.8,4.668l9.224,6.769a1.507,1.507,0,0,1-.272,2.59c-2,.9-5,2.18-7.066,3.057a17.508,17.508,0,0,1-4.794,1.273c-5.4.638-18.382,2.174-26.132,3.1a3.65,3.65,0,0,0-2.462,5.844l5.9,7.71a11.117,11.117,0,0,0,8.234,4.346c9.97.532,32.1,1.322,45.521-1.185l33.434,8.952Z" transform="translate(-91.016 -42.892)" fill="#948d8d"/>
                  <path id="Path_3652" data-name="Path 3652" d="M1021.334,463.2l-17.807-6.221-33.138-15.945a2.734,2.734,0,0,0-2.8,4.668l9.224,6.769a1.507,1.507,0,0,1-.272,2.59c-2,.9-5,2.18-7.066,3.057a17.508,17.508,0,0,1-4.794,1.273c-5.4.638-18.382,2.174-26.132,3.1a3.65,3.65,0,0,0-2.462,5.844l5.9,7.71a11.117,11.117,0,0,0,8.234,4.346c9.97.532,32.1,1.322,45.521-1.185l33.434,8.952Z" transform="translate(-91.016 -42.892)" fill="none" stroke="#948d8d" stroke-miterlimit="10" stroke-width="1"/>
                  <path id="Path_3653" data-name="Path 3653" d="M935.387,469.518c9.52.475,33.026-3.107,33.026-3.107" transform="translate(-91.022 -45.387)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                  <path id="Path_3654" data-name="Path 3654" d="M938.39,474.32c7.218,1.126,30.373-1.834,30.373-1.834" transform="translate(-91.314 -45.978)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                  <path id="Path_3655" data-name="Path 3655" d="M942.214,479.415c7.674.381,26.979-.922,26.979-.922" transform="translate(-91.686 -46.563)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                  <path id="Path_3656" data-name="Path 3656" d="M1269.327,492.191l33.353,13.1a25.625,25.625,0,0,0,34.3-28.313l-15.2-88.524a55.448,55.448,0,0,0-54.649-46.065l-33.957.706-12.388,169.856,2.662,123.478h80.672l-4.875-132.269" transform="translate(-118.794 -33.319)" fill="#6f6a6a"/>
                  <path id="Path_3657" data-name="Path 3657" d="M1269.327,492.191l33.353,13.1a25.625,25.625,0,0,0,34.3-28.313l-15.2-88.524a55.448,55.448,0,0,0-54.649-46.065l-33.957.706-12.388,169.856,2.662,123.478h80.672l-4.875-132.269" transform="translate(-118.794 -33.319)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                  <path id="Path_3658" data-name="Path 3658" d="M1121.85,464.761l-5.448,13.185a25.037,25.037,0,0,1-27.324,14.763l-80.471-14.117,3.1-30.788,61.963.886,27.711-73.847a50.031,50.031,0,0,1,46.842-32.454l23.388.4,12.862,140.871,5.219,152.763h-74.552l9.743-248.506" transform="translate(-98.147 -33.319)" fill="#6f6a6a"/>
                  <path id="Path_3659" data-name="Path 3659" d="M1121.85,464.761l-5.448,13.185a25.037,25.037,0,0,1-27.324,14.763l-80.471-14.117,3.1-30.788,61.963.886,27.711-73.847a50.031,50.031,0,0,1,46.842-32.454l23.388.4,12.862,140.871,5.219,152.763h-74.552l9.743-248.506" transform="translate(-98.147 -33.319)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                  <path id="Path_3660" data-name="Path 3660" d="M1252.618,342.389l4.6,34.369a13.147,13.147,0,0,1-13.031,14.891h-10.135l13.892,9.755a13.146,13.146,0,0,1,4.923,14.9l-32.082,96.644" transform="translate(-118.794 -33.319)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                  <path id="Path_3661" data-name="Path 3661" d="M1167.814,342.389l-4.6,34.369a13.148,13.148,0,0,0,13.031,14.891h11.894L1173,401.492a13.149,13.149,0,0,0-5.313,15.166l31.965,96.292" transform="translate(-113.181 -33.319)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                  <path id="Path_3662" data-name="Path 3662" d="M1256.986,469.04l-17.963-5.757L1205.484,448.2a2.735,2.735,0,0,0-2.683,4.739l9.4,6.527a1.507,1.507,0,0,1-.2,2.6c-1.975.95-4.94,2.309-6.985,3.24a17.555,17.555,0,0,1-4.759,1.4c-5.383.778-18.319,2.649-26.042,3.779a3.649,3.649,0,0,0-2.309,5.905l6.1,7.556a11.116,11.116,0,0,0,8.344,4.131c9.98.274,32.126.49,45.475-2.364l37.217,13.579Z" transform="translate(-113.958 -43.592)" fill="#948d8d"/>
                  <path id="Path_3663" data-name="Path 3663" d="M1256.986,469.04l-17.963-5.757L1205.484,448.2a2.735,2.735,0,0,0-2.683,4.739l9.4,6.527a1.507,1.507,0,0,1-.2,2.6c-1.975.95-4.94,2.309-6.985,3.24a17.555,17.555,0,0,1-4.759,1.4c-5.383.778-18.319,2.649-26.042,3.779a3.649,3.649,0,0,0-2.309,5.905l6.1,7.556a11.116,11.116,0,0,0,8.344,4.131c9.98.274,32.126.49,45.475-2.364l37.217,13.579Z" transform="translate(-113.958 -43.592)" fill="none" stroke="#948d8d" stroke-miterlimit="10" stroke-width="1"/>
                  <path id="Path_3664" data-name="Path 3664" d="M1269.935,389.409l18.589,72.073-38.536-5.718-7.937,30.5,50.233,18.858" transform="translate(-120.863 -37.894)" fill="#6f6a6a"/>
                  <path id="Path_3665" data-name="Path 3665" d="M1269.935,389.409l18.589,72.073-38.536-5.718-7.937,30.5,50.233,18.858" transform="translate(-120.863 -37.894)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                  <line id="Line_228" data-name="Line 228" x2="0.561" y2="15.371" transform="translate(1090.058 425.289)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                  <rect id="Rectangle_722" data-name="Rectangle 722" width="273.976" height="161.434" transform="translate(569.548 196.403)" fill="#fff"/>
                  <rect id="Rectangle_723" data-name="Rectangle 723" width="273.976" height="161.434" transform="translate(569.548 196.403)" fill="none" stroke="#352a2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.566"/>
                  <rect id="Rectangle_724" data-name="Rectangle 724" width="273.976" height="12.885" transform="translate(569.548 344.951)" fill="#e9e1e0"/>
                  <rect id="Rectangle_725" data-name="Rectangle 725" width="273.976" height="12.885" transform="translate(569.548 344.951)" fill="none" stroke="#474343" stroke-miterlimit="10" stroke-width="1"/>
                  <rect id="Rectangle_726" data-name="Rectangle 726" width="273.976" height="11.49" transform="translate(569.548 196.403)" fill="#e9e1e0"/>
                  <rect id="Rectangle_727" data-name="Rectangle 727" width="273.976" height="11.49" transform="translate(569.548 196.403)" fill="none" stroke="#474343" stroke-miterlimit="10" stroke-width="1"/>
                  <path id="Path_3666" data-name="Path 3666" d="M784.1,221.054a2.959,2.959,0,1,1-2.946,2.958,2.952,2.952,0,0,1,2.946-2.958" transform="translate(-76.014 -21.512)" fill="#861479"/>
                  <line id="Line_229" data-name="Line 229" y2="91.784" transform="translate(1316.134 0.886)" fill="#fff"/>
                  <rect id="Rectangle_745" data-name="Rectangle 745" width="173.549" height="8.47" transform="translate(789.757 516.245)" fill="#fff" stroke="#595454" stroke-width="1"/>
                  <path id="Path_3727" data-name="Path 3727" d="M980.137,555.1c-9.519,0-17.236,6.586-17.236,14.71h34.472c0-8.124-7.717-14.71-17.236-14.71" transform="translate(-93.7 -53.569)" fill={accentColor} stroke="#595454" stroke-width="1"/>
                </g>
              </g>
            </g>
          </g>
          <g id="Group_1142" data-name="Group 1142" transform="translate(1312)">
            <path id="Path_3959" data-name="Path 3959" d="M88.386,102.66v0Z" fill="#fff"/>
            <g id="Group_1141" data-name="Group 1141">
              <g id="Group_1140" data-name="Group 1140" clip-path="url(#clip-path-7)">
                <line id="Line_280" data-name="Line 280" y2="101.678" transform="translate(88.387 0.982)" fill="none" stroke="#a59f9f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.964"/>
                <path id="Path_3960" data-name="Path 3960" d="M97.132,107.053a8.746,8.746,0,0,0-17.491,0" fill="#fff"/>
                <path id="Path_3961" data-name="Path 3961" d="M97.132,107.053a8.746,8.746,0,0,0-17.491,0" fill="none" stroke="#a59f9f" stroke-miterlimit="10" stroke-width="1.964"/>
                <path id="Path_3962" data-name="Path 3962" d="M107.017,218.014a18.63,18.63,0,0,1-37.26,0Z" fill="#ede7e7"/>
                <path id="Path_3963" data-name="Path 3963" d="M107.017,218.014a18.63,18.63,0,0,1-37.26,0Z" fill="none" stroke="#a59f9f" stroke-miterlimit="10" stroke-width="1.964"/>
                <path id="Path_3964" data-name="Path 3964" d="M103.264,119.329V107.053H73.509v12.276A16,16,0,0,1,62.284,134.6a87.414,87.414,0,0,0-61.3,83.414h174.81a87.415,87.415,0,0,0-61.3-83.414,16,16,0,0,1-11.226-15.271" fill={accentColor}/>
                <path id="Path_3965" data-name="Path 3965" d="M103.264,119.329V107.053H73.509v12.276A16,16,0,0,1,62.284,134.6a87.414,87.414,0,0,0-61.3,83.414h174.81a87.415,87.415,0,0,0-61.3-83.414A16,16,0,0,1,103.264,119.329Z" fill="none" stroke="#595454" stroke-miterlimit="10" stroke-width="1.964"/>
              </g>
            </g>
          </g>
        </g>
      </svg>*/}

      <img src="/images/transitionScreens/screen-2.svg" alt="" />

    </div>
      
  )
}
