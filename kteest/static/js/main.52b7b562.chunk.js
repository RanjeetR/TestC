(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),s=(n(9),n(1)),i=function(e,t){return fetch(e,t)},l={scoreUpdatedBY:5,API_URL:"http://localhost:9096"},d=function(e){var t=e.options,n=e.handleScore,a=function(e,t,a){if("plus"===t){var o=e.score+l.scoreUpdatedBY;n({score:o,id:e.id})}else{var r=e.score>=l.scoreUpdatedBY?e.score-l.scoreUpdatedBY:e.score;n({score:r,id:e.id})}};return o.a.createElement("div",{className:"leader"},o.a.createElement("div",{className:"leader-name"}," ",t.leaderName," "),o.a.createElement("div",{className:"leader-buttons"},o.a.createElement("button",{className:"plus-icon",onClick:a.bind(void 0,t,"plus")}," ")," ",o.a.createElement("button",{className:"minus-icon",onClick:a.bind(void 0,t,"minus")}," ")," "),o.a.createElement("div",{className:"leader-score"}," ",o.a.createElement("label",null,t.score)," "))},u=(n(10),function(e){var t=e.leaderDetails,n=Object(a.useState)(t),r=Object(s.a)(n,2),c=r[0],u=r[1],m=function(e){var t=p(e),n={method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}};i("".concat(l.API_URL,"/update"),n).then((function(e){return e.json()})).then((function(e){e&&(t.sort((function(e,t){if(t.score!==e.score)return t.score-e.score;var n=e.leaderName.toLowerCase(),a=t.leaderName.toLowerCase();return n<a?-1:n>a?1:0})),u(t))})).catch((function(e){return console.log(e)}))},p=function(e){return c.map((function(t){return t.id===e.id&&(t.score=e.score),t}))};return o.a.createElement("div",{className:"leader-board-app"},c.map((function(e,t){return o.a.createElement(d,{key:e.id,options:{leaderName:e.leaderName,score:e.score,id:e.id},handleScore:m})})))}),m=(n(11),function(){return o.a.createElement("div",{style:{position:"absolute",margin:"auto",top:0,right:0,bottom:0,left:0,width:"100px",height:"100px",borderRadius:"3px"}},o.a.createElement("div",{className:"load-wrapp"},o.a.createElement("div",{className:"load-3"},o.a.createElement("div",{className:"line"}),o.a.createElement("div",{className:"line"}),o.a.createElement("div",{className:"line"}))))});var p=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){i("".concat(l.API_URL,"/all"),{method:"get",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e.sort((function(e,t){return t.score-e.score})),r(e)})).catch((function(e){return console.log(e)}))}),[]),o.a.createElement("div",{className:"App"},n&&n.length?o.a.createElement(u,{leaderDetails:n}):o.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.52b7b562.chunk.js.map