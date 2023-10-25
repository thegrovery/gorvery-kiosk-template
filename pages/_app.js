import React, { useState, useEffect } from 'react';
import $ from 'jquery'
import { router } from 'next/router'
import { useRouter } from 'next/router';
import 'normalize.css';

//Drag n Drop 
import interact from 'interactjs'

//Device Detection
import {isTablet, isSafari, isIPad13} from 'react-device-detect';

//Custom CSS/JS
import '@styles/main.scss';
//import '@scripts/script.js';

export default function App({ Component, pageProps }) {

  return <Component {...pageProps} />
}
