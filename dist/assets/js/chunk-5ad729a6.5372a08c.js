(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ad729a6"],{"159b":function(t,e,n){var a=n("da84"),s=n("fdbc"),o=n("17c2"),i=n("9112");for(var c in s){var r=a[c],u=r&&r.prototype;if(u&&u.forEach!==o)try{i(u,"forEach",o)}catch(l){u.forEach=o}}},"17c2":function(t,e,n){"use strict";var a=n("b727").forEach,s=n("a640"),o=s("forEach");t.exports=o?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,n){var a=n("d039"),s=n("b622"),o=n("2d00"),i=s("species");t.exports=function(t){return o>=51||!a((function(){var e=[],n=e.constructor={};return n[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},3602:function(t,e,n){},"65f0":function(t,e,n){var a=n("861d"),s=n("e8b5"),o=n("b622"),i=o("species");t.exports=function(t,e){var n;return s(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!s(n.prototype)?a(n)&&(n=n[i],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},8418:function(t,e,n){"use strict";var a=n("c04e"),s=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var i=a(e);i in t?s.f(t,i,o(0,n)):t[i]=n}},"8d65":function(t,e,n){"use strict";n("3602")},"99af":function(t,e,n){"use strict";var a=n("23e7"),s=n("d039"),o=n("e8b5"),i=n("861d"),c=n("7b0b"),r=n("50c4"),u=n("8418"),l=n("65f0"),d=n("1dde"),f=n("b622"),g=n("2d00"),v=f("isConcatSpreadable"),h=9007199254740991,_="Maximum allowed index exceeded",m=g>=51||!s((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),p=d("concat"),b=function(t){if(!i(t))return!1;var e=t[v];return void 0!==e?!!e:o(t)},y=!m||!p;a({target:"Array",proto:!0,forced:y},{concat:function(t){var e,n,a,s,o,i=c(this),d=l(i,0),f=0;for(e=-1,a=arguments.length;e<a;e++)if(o=-1===e?i:arguments[e],b(o)){if(s=r(o.length),f+s>h)throw TypeError(_);for(n=0;n<s;n++,f++)n in o&&u(d,f,o[n])}else{if(f>=h)throw TypeError(_);u(d,f++,o)}return d.length=f,d}})},a640:function(t,e,n){"use strict";var a=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&a((function(){n.call(null,e||function(){throw 1},1)}))}},b727:function(t,e,n){var a=n("0366"),s=n("44ad"),o=n("7b0b"),i=n("50c4"),c=n("65f0"),r=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,d=6==t,f=7==t,g=5==t||d;return function(v,h,_,m){for(var p,b,y=o(v),C=s(y),I=a(h,_,3),x=i(C.length),k=0,L=m||c,j=e?L(v,x):n||f?L(v,0):void 0;x>k;k++)if((g||k in C)&&(p=C[k],b=I(p,k,y),t))if(e)j[k]=b;else if(b)switch(t){case 3:return!0;case 5:return p;case 6:return k;case 2:r.call(j,p)}else switch(t){case 4:return!1;case 7:r.call(j,p)}return d?-1:u||l?l:j}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},cdf1:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"info_lump"},[n("div",{staticClass:"logo_lump"},[t._m(0),t._v(" 云计算 "),n("div",{staticClass:"exit",on:{click:t.exit}},[t._v("退出")])]),n("div",{staticClass:"info_con"},[n("div",[t._v(" 用户名: "+t._s(t.geUserNameStorage)+" ")]),n("div",[t._v(" 总资产: "+t._s(t.balance)+" ")]),n("div",[t._v(" "+t._s(t.infoLabelIncome)+": "+t._s(t.income)+" ")]),n("div",[t._v(" 目前时间: "+t._s(t.currentTime)+" ")])])]),n("div",{staticClass:"tab_lump"},[t._l(t.tabMenus,(function(e,a){return n("div",{key:a,class:t.tabIndex===a?"tab_menus_active":"tab_menus",on:{click:function(e){return t.tabMenusClick(a)}}},[t._v(t._s(e)+" ")])})),0===t.tabIndex?n("div",{staticClass:"table_container_01"},[null!==t.actionGame?n("span",[n("div",{staticClass:"table_01"},t._l(t.tabContentMenus01,(function(e,a){return n("span",{key:a},[t._v(t._s(e))])})),0),t._l(t.planList,(function(e,a){return n("div",{key:a,staticClass:"table_con_01"},[n("span",[t._v(t._s(e["hezhi"]))]),n("span",[t._v(t._s(e["expect"]))]),n("span",[t._v(t._s(e["kongqi"]))]),n("span",[t._v(t._s(e["amount"]))]),n("span",[t._v(t._s(e["status"]))])])}))],2):n("span",[n("div",{staticClass:"history_title"},[t._v("您还没有开通挂机")])]),n("div",{staticClass:"table_btn_01"},["1"===this.isOpen?n("span",[n("i",{on:{click:function(e){return t.close()}}},[t._v("一键关闭")])]):n("span",[n("i",{on:{click:function(e){return t.open()}}},[t._v("一键开启")])]),n("span",[t._v(t._s("1"===this.isOpen?"已开启":"已关闭"))])])]):t._e(),1===t.tabIndex?n("div",{staticClass:"table_container_02"},[n("div",{staticClass:"table_02"},t._l(t.tabContentMenus02,(function(e,a){return n("span",{key:a},[t._v(t._s(e))])})),0),t._l(t.programList,(function(e,a){return n("div",{key:a,staticClass:"table_con_02"},[n("span",[t._v(t._s(e["方案"]))]),n("span",[t._v(t._s(e["起金"]))]),n("span",[t._v(t._s(e["空期"]))]),n("span",[t._v(t._s(e["收益%"]))]),n("span",[t._v(t._s(e["触发线1"]))]),n("span",[t._v(t._s(e["触发线1减至%"]))]),n("span",[t._v(t._s(e["触发线2"]))]),n("span",[t._v(t._s(e["触发线2减至%"]))])])}))],2):t._e(),2===t.tabIndex?n("div",{staticClass:"table_container_03"},[null!==t.actionGame?n("span",[n("div",{staticClass:"history_title"},[t._v(t._s(t.actionGame))]),n("div",{staticClass:"table_03"},t._l(t.tabContentMenus03,(function(e,a){return n("span",{key:a},[t._v(t._s(e))])})),0),t._l(t.historyLogInfo,(function(e,a){return n("div",{key:a,staticClass:"table_con_03"},[n("span",[t._v(t._s(e["expect"])),n("br"),t._v(t._s(t.getDateFromMillisecond(e["opentime"])))]),n("span",[t._v(t._s(e["opencode"]))]),n("span",[t._v(t._s(e["sum"]))])])}))],2):n("span",[n("div",{staticClass:"history_title"},[t._v("您还没有开通挂机")])])]):t._e()],2)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"logo"},[a("img",{attrs:{src:n("7c04"),alt:""}})])}],o=(n("159b"),n("b0c0"),n("99af"),n("4dcc")),i={name:"content",data:function(){return{actionGame:null,actionGameId:"",isOpen:"0",currentTime:"",balance:0,lotteryKinds:[],historyLogInfo:[],infoLabelIncome:"今日收益",income:0,tabMenus:["选取计划","选取参数","历史开奖"],tabIndex:0,tabContentMenus01:["和值","奖期数","空期","投注金额","状态"],planList:[{hezhi:0,expect:"",kongqi:0,amount:"",status:""}],tabContentMenus02:["方案","起金","空期","收益%","触发线1","减至%","触发线2","减至%"],programList:[{plan:1,amount:.3,planEmpty:30,income:35,trigger01:60,reduce01:25,trigger02:120,reduce02:15}],tabContentMenus03:["期号/开奖时间","开奖号码","和值"],tabContent03:[{time:"255472782782 20:54:40",number:"06 08 04 03 09 02 07 05 01 10",sumValue:12},{time:"255472782782 20:54:40",number:"06 08 04 03 09 02 07 05 01 10",sumValue:12},{time:"255472782782 20:54:40",number:"06 08 04 03 09 02 07 05 01 10",sumValue:12}]}},computed:{geUserNameStorage:function(){return Object(o["i"])()}},methods:{setStorage:function(t,e){localStorage.setItem(t,JSON.stringify(e))},exit:function(){this.setStorage("loginInfo",""),this.setStorage("userName",""),this.$router.push({path:"/"})},getDateFromMillisecond:function(t){var e=new Date(1e3*t),n=e.getFullYear(),a=e.getMonth()+1,s=e.getDate(),o=e.getHours(),i=e.getMinutes(),c=e.getSeconds();return n+"-"+a+"-"+s+" "+o+":"+i+":"+c},tabMenusClick:function(t){this.tabIndex=t,0===this.tabIndex&&this.getPlan(),1===this.tabIndex&&this.getProgram(),2===this.tabIndex&&this.getHistoryLog(this.actionGameId)},getLoginInfoStorage:function(){return JSON.parse(localStorage.getItem("loginInfo"))},checkLoginStatus:function(){null!==this.getLoginInfoStorage()&&this.getLoginInfoStorage().length>0||this.$router.push({path:"/"})},getGMTTime:function(){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1;n<10&&(n="0"+n);var a=t.getDate();a<10&&(a="0"+a);var s=t.getHours();s<10&&(s="0"+s);var o=t.getMinutes();o<10&&(o="0"+o);var i=t.getSeconds();return i<10&&(i="0"+i),e+"-"+n+"-"+a+" "+s+":"+o+":"+i},getCurrentTime:function(){var t=this;setInterval((function(){t.currentTime=t.getGMTTime()}),300)},open:function(){var t=this,e={authToken:Object(o["j"])(),status:1};Object(o["f"])(e).then((function(e){500===e["data"]["code"]?t.$message({message:e["data"]["msg"],type:"error"}):t.$message({message:e["data"]["msg"],type:"success"}),t.getBalance()})).catch((function(t){console.log(t)}))},close:function(){var t=this,e={authToken:Object(o["j"])(),status:0};Object(o["f"])(e).then((function(e){500===e["data"]["code"]?t.$message({message:e["data"]["msg"],type:"error"}):t.$message({message:e["data"]["msg"],type:"success"}),t.getBalance()})).catch((function(t){console.log(t)}))},getPlan:function(){var t=this,e={authToken:Object(o["j"])()};Object(o["g"])(e).then((function(e){0===e["data"]["code"]?t.planList=e["data"]["data"]:t.$message({message:e["data"]["msg"],type:"error"})})).catch((function(t){console.log(t)}))},getProgram:function(){var t=this;Object(o["h"])().then((function(e){0===e["data"]["code"]?t.programList=e["data"]["data"]:t.$message({message:e["data"]["msg"],type:"error"})})).catch((function(t){console.log(t)}))},getBalance:function(){var t=this,e={authToken:Object(o["j"])()};Object(o["a"])(e).then((function(e){500===e["data"]["code"]?t.$message({message:e["data"]["data"]["msg"],type:"error"}):(t.balance=e["data"]["data"]["balance"],t.income=e["data"]["data"]["income"],t.isOpen=e["data"]["data"]["isguaji"],t.actionGame=e["data"]["data"]["gjgametile"],t.actionGameId=e["data"]["data"]["gjgameid"])})).catch((function(t){console.log(t)}))},getLotteryKinds:function(){var t=this;Object(o["d"])().then((function(e){if(500===e["data"]["code"])t.$message({message:e["data"]["data"]["msg"],type:"error"});else{e["data"]["data"].forEach((function(e){"pk10"===e["typeid"]&&t.lotteryKinds.push(e)})),t.historyLogInfo=[];for(var n=0;n<t.lotteryKinds.length;n++)t.getHistoryLog(t.lotteryKinds[n]["name"]);console.log(t.historyLogInfo)}})).catch((function(t){console.log(t)}))},getHistoryLog:function(t){var e=this,n={gameName:t,limit:""};Object(o["b"])(n).then((function(t){500===t["data"]["code"]?e.$message({message:t["data"]["data"]["msg"],type:"error"}):t["data"]["data"].length>0&&(e.historyLogInfo=e.historyLogInfo.concat(t["data"]["data"]))})).catch((function(t){console.log(t)}))},getLotteryRate:function(){var t=this,e={type:""};Object(o["e"])(e).then((function(e){500===e["data"]["code"]?t.$message({message:e["data"]["data"]["msg"],type:"error"}):console.log(e["data"])})).catch((function(t){console.log(t)}))}},mounted:function(){var t=this;this.checkLoginStatus(),this.getCurrentTime(),this.getPlan(),this.getBalance(),setInterval((function(){t.getBalance()}),3e4)}},c=i,r=(n("8d65"),n("2877")),u=Object(r["a"])(c,a,s,!1,null,null,null);e["default"]=u.exports},e8b5:function(t,e,n){var a=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}}}]);