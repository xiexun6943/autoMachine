(function(e){function r(r){for(var n,o,u=r[0],c=r[1],i=r[2],l=0,m=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(r);while(m.length)m.shift()();return s.push.apply(s,i||[]),t()}function t(){for(var e,r=0;r<s.length;r++){for(var t=s[r],n=!0,o=1;o<t.length;o++){var u=t[o];0!==a[u]&&(n=!1)}n&&(s.splice(r--,1),e=c(c.s=t[0]))}return e}var n={},o={app:0},a={app:0},s=[];function u(e){return c.p+"assets/js/"+({}[e]||e)+"."+{"chunk-5ad729a6":"0f3b5fa0"}[e]+".js"}function c(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var r=[],t={"chunk-5ad729a6":1};o[e]?r.push(o[e]):0!==o[e]&&t[e]&&r.push(o[e]=new Promise((function(r,t){for(var n="assets/css/"+({}[e]||e)+"."+{"chunk-5ad729a6":"e8d57462"}[e]+".css",a=c.p+n,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var i=s[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===n||l===a))return r()}var m=document.getElementsByTagName("style");for(u=0;u<m.length;u++){i=m[u],l=i.getAttribute("data-href");if(l===n||l===a)return r()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=r,d.onerror=function(r){var n=r&&r.target&&r.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete o[e],d.parentNode.removeChild(d),t(s)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)r.push(n[2]);else{var s=new Promise((function(r,t){n=a[e]=[r,t]}));r.push(n[2]=s);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var m=new Error;i=function(r){l.onerror=l.onload=null,clearTimeout(d);var t=a[e];if(0!==t){if(t){var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;m.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",m.name="ChunkLoadError",m.type=n,m.request=o,t[1](m)}a[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(r)},c.m=e,c.c=n,c.d=function(e,r,t){c.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,r){if(1&r&&(e=c(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)c.d(t,n,function(r){return e[r]}.bind(null,n));return t},c.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(r,"a",r),r},c.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},c.p="",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=r,i=i.slice();for(var m=0;m<i.length;m++)r(i[m]);var d=l;s.push([0,"chunk-vendors"]),t()})({0:function(e,r,t){e.exports=t("56d7")},"034f":function(e,r,t){"use strict";t("85ec")},"4dcc":function(e,r,t){"use strict";t.d(r,"i",(function(){return c})),t.d(r,"j",(function(){return l})),t.d(r,"c",(function(){return p})),t.d(r,"a",(function(){return f})),t.d(r,"d",(function(){return h})),t.d(r,"b",(function(){return g})),t.d(r,"e",(function(){return w})),t.d(r,"f",(function(){return b})),t.d(r,"g",(function(){return v})),t.d(r,"h",(function(){return y}));var n=t("1da1"),o=(t("96cf"),t("d3b7"),t("bc3a")),a=t.n(o),s=t("4328"),u=t.n(s),c=function(){return JSON.parse(localStorage.getItem("userName"))},i=function(){return JSON.parse(localStorage.getItem("loginInfo"))},l=function(){var e=i();return e},m=!0;a.a.interceptors.response.use((function(e){return console.log("response : "+e.status),e}),(function(e){console.log("error : "+e.response),console.log(e),console.log(e.response),console.log(e.response.status),401===e.response.status&&(document.getElementById("pop_des").style.display="block",document.getElementById("pop_des").innerText="登录已失效"+e.response.data.Message,!0===m&&(m=!1,setTimeout((function(){setStorage("loginInfo",""),setStorage("userInfo",""),Object({NODE_ENV:"production",BASE_URL:""}).REACT_APP_ENV,window.location="/#/",window.location.reload()}),2e3)));var r={status:e.response.status,message:e.response["data"]["Message"]};return Promise.reject(r)}));var d="http://rubikcubexy.club",p=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=u.a.stringify(r),e.next=3,a.a.post(d+"/Api.login.do",t,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){return e})).catch((function(e){return e}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=u.a.stringify(r),e.next=3,a.a.post(d+"/Api.getBalance.do",t,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){return e})).catch((function(e){return e}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=u.a.stringify({}),e.next=3,a.a.post(d+"/Api.getLottery.do",r,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){return e})).catch((function(e){return e}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=u.a.stringify(r),e.next=3,a.a.post(d+"/Api.getLotteryCode.do",t,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){return e})).catch((function(e){return e}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),w=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=u.a.stringify(r),e.next=3,a.a.post(d+"/Api.getLotteryRate.do",t,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){return e})).catch((function(e){return e}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),b=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=u.a.stringify(r),e.next=3,a.a.post(d+"/Api.openOrcloseGuaji.do",t,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){return e})).catch((function(e){return e}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=u.a.stringify(r),e.next=3,a.a.post(d+"/Api.getPlan.do",t,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){return e})).catch((function(e){return e}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),y=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=u.a.stringify({}),e.next=3,a.a.post(d+"/Api.getFangan.do",r,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){return e})).catch((function(e){return e}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},"56d7":function(e,r,t){"use strict";t.r(r);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],s=t("ccde"),u=(t("c027"),t("8b65"),t("8c4f")),c=(t("d3b7"),t("3ca3"),t("ddb0"),[{name:"home",path:"/",component:function(){return Promise.resolve().then(t.bind(null,"ccde"))}},{name:"content",path:"/content",component:function(){return t.e("chunk-5ad729a6").then(t.bind(null,"cdf1"))}}]),i=c;n["default"].use(u["a"]);var l=new u["a"]({routes:i,mode:"hash",fallback:!0}),m=l,d={name:"App",router:m,components:{Home:s["default"]}},p=d,f=(t("034f"),t("2877")),h=Object(f["a"])(p,o,a,!1,null,null,null),g=h.exports;n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(g)}}).$mount("#app")},"7c04":function(e,r,t){e.exports=t.p+"assets/img/logo.7a02a1b9.png"},"85ec":function(e,r,t){},"8b65":function(e,r){(window.onresize=function(){var e=document.documentElement,r=document.documentElement.clientWidth;if(r>=750)e.style.fontSize="100px";else{var t=r/750*100;e.style.fontSize=t+"px"}})();try{document.addEventListener("touchstart",(function(e){e.touches.length>1&&e.preventDefault()}));var t=0;document.addEventListener("touchend",(function(e){var r=(new Date).getTime();r-t<=300&&e.preventDefault(),t=r}),!1),document.addEventListener("gesturestart",(function(e){e.preventDefault()}))}catch(n){}},"8f8c":function(e,r,t){},bab0:function(e,r,t){"use strict";t("8f8c")},c027:function(e,r,t){},ccde:function(e,r,t){"use strict";t.r(r);var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"container_home"},[e._m(0),t("div",{staticClass:"login_lump"},[t("div",{staticClass:"content"},[t("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules}},[t("el-form-item",{attrs:{prop:"name"}},[t("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.ruleForm.name,callback:function(r){e.$set(e.ruleForm,"name",r)},expression:"ruleForm.name"}})],1),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{placeholder:"请输入密码","show-password":""},model:{value:e.ruleForm.password,callback:function(r){e.$set(e.ruleForm,"password",r)},expression:"ruleForm.password"}})],1),t("el-form-item",{attrs:{label:"记住密码",prop:"rememberPassword"}},[t("el-switch",{on:{change:function(r){return e.cancelRememberPassword()}},model:{value:e.ruleForm.rememberPassword,callback:function(r){e.$set(e.ruleForm,"rememberPassword",r)},expression:"ruleForm.rememberPassword"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("登录")])],1)],1)],1)])])},o=[function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("div",{staticClass:"logo_lump"},[n("span",{staticClass:"logo"},[n("img",{attrs:{src:t("7c04"),alt:""}})]),e._v(" 云计算 ")])}],a=(t("b0c0"),t("2b0e")),s=t("5c96"),u=t.n(s),c=(t("0fae"),t("4dcc"));a["default"].use(u.a);var i={name:"home",data:function(){return{ruleForm:{name:"",password:"",rememberPassword:!1},rules:{name:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:12,message:"长度在 3 到 12 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:12,message:"长度在 6 到 12 个字符",trigger:"blur"}]}}},methods:{getRememberPassword:function(){return JSON.parse(localStorage.getItem("rememberPassword"))},setStorage:function(e,r){localStorage.setItem(e,JSON.stringify(r))},submitForm:function(e){var r=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;r.sendLogin()}))},cancelRememberPassword:function(){this.setStorage("rememberPassword",{rememberStatus:!1,username:null,userpassword:null})},sendLogin:function(){var e=this,r={name:this.ruleForm["name"],pass:this.ruleForm["password"]};!0===this.ruleForm.rememberPassword?this.setStorage("rememberPassword",{rememberStatus:this.ruleForm.rememberPassword,username:this.ruleForm["name"],userpassword:this.ruleForm["password"]}):this.setStorage("rememberPassword",{rememberStatus:!1,username:null,userpassword:null}),Object(c["c"])(r).then((function(t){500===t["data"]["code"]?e.$message({message:t["data"]["data"]["message"],type:"error"}):(e.setStorage("loginInfo",t["data"]["data"]["authToken"]),e.setStorage("userName",e.ruleForm["name"]),console.log(r),console.log(t["data"]["data"]["authToken"]),e.$router.push({path:"/content"}),!0===e.ruleForm.rememberPassword&&(!0===e.ruleForm.rememberPassword?e.setStorage("rememberPassword",{rememberStatus:e.ruleForm.rememberPassword,username:e.ruleForm.name,userpassword:e.ruleForm.password}):e.setStorage("rememberPassword",{rememberStatus:!1,username:null,userpassword:null})))})).catch((function(e){console.log(e)}))}},created:function(){this.setStorage("loginInfo","")},mounted:function(){null!==this.getRememberPassword()&&!0===this.getRememberPassword()["rememberStatus"]&&(this.ruleForm.rememberPassword=!0,this.ruleForm.name=this.getRememberPassword()["username"],this.ruleForm.password=this.getRememberPassword()["userpassword"])}},l=i,m=(t("bab0"),t("2877")),d=Object(m["a"])(l,n,o,!1,null,null,null);r["default"]=d.exports}});