(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(1),r=n.n(c),i=(n(11),n(2)),l=n(4),s=n.n(l),u=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(o.useState)(0),l=Object(i.a)(r,2),u=l[0],f=l[1];Object(o.useEffect)(function(){m()},[u]);var m=function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(e){fetch("https://api.darksky.net/forecast/56be0ef4bc8f4cdffa9f0de805515c04/".concat(e.coords.latitude,",").concat(e.coords.longitude)).then(function(e){return e.json()}).then(function(e){var t=[e.timezone,e.currently.icon,e.currently.temperature+" F"];c(t),console.log(n)}).catch(function(e){return console.log(e)})})};return a.a.createElement("div",{className:"App"},a.a.createElement("button",{onClick:function(e){e.preventDefault(),f(u+1)}},"Refresh"),a.a.createElement("div",{className:"app-info"},a.a.createElement("div",{className:"timezone"},n[0]),a.a.createElement("div",{className:"icon"},function(e){if(void 0!==e){var t=e.toUpperCase().replace("-","_");return a.a.createElement(s.a,{color:"white",autoplay:!0,icon:t})}return a.a.createElement("h2",null,"Icon unavaible allow location get or wait for database connection..")}(n[1]))),a.a.createElement("div",{className:"temperature"},n[2]))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},5:function(e,t,n){e.exports=n(16)}},[[5,1,2]]]);
//# sourceMappingURL=main.b6f0fe47.chunk.js.map