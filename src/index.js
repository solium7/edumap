// import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Router, browserHistory} from 'react-router'
import {routes} from './routes'

// import $ from 'jquery'
// import './static/css/jquery.percentageloader-0.2.css'
// import './static/jquery.percentageloader-0.2'


// Trying to set preloader

// $('#mapid').css('').hide();

// $("#pre_loader_veil").fadeIn(200);
// (function () {
//     var cntr = 0;
//     var kbytes = 0;
//     var timerId = setInterval(function () {
//         $("#pre_loader").percentageLoader({
//             value: (kbytes + ((cntr * Math.random() * (107 - 93) + 93))).toFixed(0) + 'kb',
//             progress: ((cntr * 5 / 100) + (Math.random() * (3 - 1)+1)/100)
//         });
//         kbytes = kbytes + (cntr * Math.random() * (107 - 93) + 93);
//         cntr++;
//         if (cntr > 20) {
//             clearInterval(timerId);
//             $("#pre_loader_veil").fadeOut(700);
//         }
//     }, 100);
// })();

// $('#mapid').css('').show();

render(
    <Router history={browserHistory} routes={routes}/>,
    document.getElementById('app')
);