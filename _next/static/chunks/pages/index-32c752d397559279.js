(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5728:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9009)}])},9009:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var l=t(5893),s=t(9008),a=t.n(s),i=t(2305),r=t.n(i),o=t(4053),c=t(7294);function h(){let[e,n]=(0,c.useState)(null),[t,s]=(0,c.useState)(0),[i,h]=(0,c.useState)(1),[d,m]=(0,c.useState)(0),[u,p]=(0,c.useState)(0),[x,_]=(0,c.useState)(0),[v,g]=(0,c.useState)(null),[j,w]=(0,c.useState)(null),[b,C]=(0,c.useState)(null),[f,N]=(0,c.useState)(null),k=(0,o.useSupabaseClient)(),S=e=>{if(e.preventDefault(),C(null),!j)return C("Code must be between 3 and 10 charter.");y()},y=async()=>{N(!0);let e=3600*parseInt(t)+60*parseInt(i)+parseInt(d);e>7200?e=7200:e<0&&(e=0);let l=60*parseInt(u)+parseInt(x);if(l>3600?l=3600:l<0&&(l=0),j.length<3||j.length>10)return N(null),C("Code must be between 3 and 10 charter.");let{data:s,error:a}=await k.rpc("create_link",{time_set:e,secret_code:j,penalty_time:l});if(N(null),a||!s)return C("Network error.");let r="".concat(window.document.location.href,"/room?id=").concat(s);n(r)},I=e=>{let n=e.target.value;n<0?s(0):n>1?s(1):s(n)},B=e=>{let n=e.target.value;n<0?h(0):n>59?h(59):h(n)},T=e=>{let n=e.target.value;n<0?m(0):n>59?m(59):m(n)},z=e=>{let n=e.target.value;n<0?p(0):n>59?p(59):p(n)},D=e=>{let n=e.target.value;n<0?_(0):n>59?_(59):_(n)},M=e=>{let n=e.target.value;w(n)},E=()=>{navigator.share&&navigator.share({title:"".concat(window.document.title),url:"".concat(e)}).then(()=>{console.log("Thanks for sharing \uD83D\uDD17")}).catch(e=>{console.log("Something when wrong"),console.log(e)})},H=()=>{g(!0),navigator.clipboard.writeText(e),setTimeout(()=>{g(null)},1e3)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a(),{children:[(0,l.jsx)("title",{children:"Timebomb"}),(0,l.jsx)("meta",{name:"description",content:"Time bomb that will blow unless you solve the code"}),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,l.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,l.jsxs)("main",{className:r().main,children:[(0,l.jsx)("h1",{className:r().title,children:"Create a new count down"}),(0,l.jsxs)("form",{onSubmit:S,className:r().mainForm,children:[(0,l.jsx)("p",{className:r().error,children:b}),(0,l.jsx)("h2",{children:"Timer"}),(0,l.jsxs)("div",{className:r().timeInput,children:[(0,l.jsx)("input",{disabled:f,type:"number",name:"timer-hours",placeholder:"HH",min:0,max:1,value:t||"00",onChange:I}),(0,l.jsx)("span",{className:r().dots,children:":"}),(0,l.jsx)("input",{disabled:f,type:"number",name:"timer-minutes",placeholder:"MM",min:0,max:59,value:i||"00",onChange:B}),(0,l.jsx)("span",{className:r().dots,children:":"}),(0,l.jsx)("input",{disabled:f,type:"number",name:"timer-seconds",placeholder:"SS",min:0,max:59,value:d||"00",onChange:T})]}),(0,l.jsx)("h2",{children:"Wrong code penalty"}),(0,l.jsxs)("div",{className:r().timeInput,children:[(0,l.jsx)("input",{disabled:f,type:"number",name:"penalty-minutes",placeholder:"MM",min:0,max:59,value:u||"00",onChange:z}),(0,l.jsx)("span",{className:r().dots,children:":"}),(0,l.jsx)("input",{disabled:f,type:"number",name:"penalty-seconds",placeholder:"SS",min:0,max:59,value:x||"00",onChange:D})]}),(0,l.jsx)("h2",{children:"Secret Code"}),(0,l.jsx)("div",{className:r().codeInput,children:(0,l.jsx)("input",{disabled:f,type:"text",name:"code",placeholder:"type code here..",minLength:3,maxLength:10,value:j||"",onChange:M})}),(0,l.jsxs)("button",{className:r().submitBtn,type:"submit",disabled:f,children:[f&&(0,l.jsx)("div",{className:r().loadingCircle,children:(0,l.jsx)("svg",{width:"50px",height:"50px",fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"m20 12c0 1.3811-0.3576 2.7386-1.0378 3.9405-0.6803 1.2019-1.6601 2.2072-2.8441 2.9182-1.1841 0.7109-2.532 1.1032-3.9126 1.1387-1.3806 0.0354-2.7469-0.2871-3.9658-0.9362",stroke:"#000",strokeLinecap:"round",strokeWidth:"3.5556"})})}),"Generate Link"]})]}),e&&(0,l.jsxs)("div",{className:r().linkContainer,children:[(0,l.jsxs)("div",{className:r().urlControls,children:[(0,l.jsx)("h1",{children:"Link"}),(0,l.jsxs)("div",{className:r().urlButtons,children:[v?(0,l.jsx)("div",{className:r().copied,children:"Copied"}):(0,l.jsx)("button",{onClick:H,children:(0,l.jsxs)("svg",{width:"50px",height:"50px",fill:"#000000",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M13.49 3 10.74.37A1.22 1.22 0 0 0 9.86 0h-4a1.25 1.25 0 0 0-1.22 1.25v11a1.25 1.25 0 0 0 1.25 1.25h6.72a1.25 1.25 0 0 0 1.25-1.25V3.88a1.22 1.22 0 0 0-.37-.88zm-.88 9.25H5.89v-11h2.72v2.63a1.25 1.25 0 0 0 1.25 1.25h2.75zm0-8.37H9.86V1.25l2.75 2.63z"}),(0,l.jsx)("path",{d:"M10.11 14.75H3.39v-11H4V2.5h-.61a1.25 1.25 0 0 0-1.25 1.25v11A1.25 1.25 0 0 0 3.39 16h6.72a1.25 1.25 0 0 0 1.25-1.25v-.63h-1.25z"})]})}),(0,l.jsx)("button",{onClick:E,children:(0,l.jsx)("svg",{width:"50px",height:"50px",fill:"#000000",viewBox:"0 0 1920 1920",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"m1478.5 1318.5c132.69 0 240.6 107.91 240.6 240.6 0 132.69-107.91 240.6-240.6 240.6-132.69 0-240.6-107.91-240.6-240.6 0-21.053 3.609-41.143 8.661-60.632 10.467-39.94 30.557-76.03 58.346-105.14 43.79-45.834 105.26-74.827 173.59-74.827zm-1037.6-601.5c67.61 0 128.48 28.15 172.27 73.143 28.031 28.873 48.121 64.842 58.948 104.78 5.534 20.09 9.384 40.782 9.384 62.677 0 24.18-4.692 47.278-11.429 69.293-11.91 39.459-32.962 74.948-61.955 103.1-43.308 41.985-102.14 68.21-167.22 68.21-132.69 0-240.6-107.91-240.6-240.6 0-132.69 107.91-240.6 240.6-240.6zm1037.6-596.69c132.69 0 240.6 107.91 240.6 240.6 0 132.69-107.91 240.6-240.6 240.6-67.488 0-128.24-28.03-171.91-72.782-28.15-28.872-48.36-64.842-59.188-104.78-5.533-20.21-9.503-41.023-9.503-63.038 0-132.69 107.91-240.6 240.6-240.6zm0 1077.9c-112.84 0-212.57 53.053-278.74 134.5l-423.34-244.45c15.88-40.662 25.384-84.452 25.384-130.65 0-43.79-9.023-85.173-23.339-124.03l422.98-244.33c66.285 80.24 165.17 132.57 277.05 132.57 198.98 0 360.9-161.92 360.9-360.9 1e-3 -198.98-161.92-360.9-360.9-360.9-198.98 0-360.9 161.92-360.9 360.9 0 43.91 9.023 85.534 23.459 124.39l-422.86 244.21c-66.165-80.36-165.17-132.81-277.29-132.81-198.98 0-360.9 161.92-360.9 360.9s161.92 360.9 360.9 360.9c109.59 0 206.8-50.165 272.96-127.52l426.35 246.14c-13.835 38.376-22.617 79.037-22.617 121.98 0 198.98 161.92 360.9 360.9 360.9 198.98 0 360.9-161.92 360.9-360.9 0-198.98-161.92-360.9-360.9-360.9",fillRule:"evenodd"})})})]})]}),(0,l.jsx)("div",{className:r().linkUrlCont,children:(0,l.jsx)("h1",{className:r().url,children:e})})]})]})]})}},2305:function(e){e.exports={main:"home_main__x_qRY",title:"home_title__1hzQa",mainForm:"home_mainForm__XALZr",error:"home_error__X3EOj",timeInput:"home_timeInput__4BKqN",dots:"home_dots__qBgwT",codeInput:"home_codeInput__7bbDR",submitBtn:"home_submitBtn__vsrxk",linkContainer:"home_linkContainer__f59D_",urlControls:"home_urlControls__nazKO",linkUrlCont:"home_linkUrlCont___XD2l",urlButtons:"home_urlButtons___XcQV",url:"home_url__arUbI",loadingCircle:"home_loadingCircle__McxVT","loading-spin":"home_loading-spin__bfgtr"}},9008:function(e,n,t){e.exports=t(2636)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5728)}),_N_E=e.O()}]);