(function(t){function e(e){for(var n,a,s=e[0],i=e[1],l=e[2],u=0,d=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);f&&f(e);while(d.length)d.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={index:0},o={index:0},c=[];function s(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-2d0d7286":"17916b3d","chunk-2d22d746":"d524ebd7","chunk-6ef467c8":"d47467d0","chunk-2d0c1cfe":"ca358fd2","chunk-2d21de4f":"2c83f653"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r={"chunk-6ef467c8":1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise((function(e,r){for(var n="css/"+({}[t]||t)+"."+{"chunk-2d0d7286":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-6ef467c8":"482c281b","chunk-2d0c1cfe":"31d6cfe0","chunk-2d21de4f":"31d6cfe0"}[t]+".css",o=i.p+n,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var l=c[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===n||u===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete a[t],f.parentNode.removeChild(f),r(c)},f.href=o;var v=document.getElementsByTagName("head")[0];v.appendChild(f)})).then((function(){a[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var c=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"1e3b":function(t,e,r){"use strict";var n=r("b3f8"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-btn",{staticClass:"mb-3",attrs:{to:"/",color:"warning",block:""}},[t._v("หน้าหลัก")]),r("v-btn",{staticClass:"mb-3",attrs:{to:"/Customer",color:"error",block:""}},[t._v("ลูกค้า")]),r("v-btn",{staticClass:"mb-3",attrs:{to:"/Product",color:"primary",block:""}},[t._v("ข้อมูลสินค้า")]),r("v-btn",{staticClass:"mb-3",attrs:{to:"/Report",color:"success",block:""}},[t._v("รายงาน")]),r("v-btn",{staticClass:"mb-3",attrs:{to:"/About",color:"secondary",block:""}},[t._v("เกี่ยวกับ")])],1)],1)],1)],1),r("v-app-bar",{attrs:{app:"","clipped-left":""}},[r("v-btn",{staticClass:"ma-2",attrs:{outlined:"",fab:"",color:"pink"},on:{click:function(e){t.drawer=!t.drawer}}},[r("v-icon",{attrs:{color:"dark"}},[t._v("mdi-format-list-bulleted-square")])],1),r("v-toolbar-title",[t._v(" ระบบเก็บข้อมูลร้านค้า ")])],1),r("v-main",[r("router-view")],1),r("v-footer",{attrs:{app:""}},[r("span",[t._v("© RMUTL "+t._s((new Date).getFullYear()+543))])])],1)},o=[],c={data:function(){return{right:null,message:"RMUTL",drawer:null}}},s=c,i=(r("034f"),r("2877")),l=r("6544"),u=r.n(l),d=r("7496"),f=r("40dc"),v=r("8336"),p=r("62ad"),b=r("a523"),h=r("553a"),m=r("132d"),g=r("f6c4"),k=r("f774"),w=r("0fd9"),C=r("2a7f"),_=Object(i["a"])(s,a,o,!1,null,null,null),y=_.exports;u()(_,{VApp:d["a"],VAppBar:f["a"],VBtn:v["a"],VCol:p["a"],VContainer:b["a"],VFooter:h["a"],VIcon:m["a"],VMain:g["a"],VNavigationDrawer:k["a"],VRow:w["a"],VToolbarTitle:C["a"]});r("d3b7");var x=r("8c4f"),V=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"4"}},[r("v-card",{attrs:{color:"#BA25CB ",dark:""}},[r("v-card-title",[r("div",{staticClass:"font-big"},[t._v("จำนวนลูกค้า")])]),r("v-card-text",[r("div",{staticClass:"font-big"},[t._v("50 คน")])]),r("v-card-actions",[r("v-btn",{attrs:{text:""}},[t._v("ข้อมูลลูกค้า")])],1)],1)],1),r("v-col",{attrs:{cols:"4"}},[r("v-card",{attrs:{color:"#25CB69",dark:""}},[r("v-card-title",[r("div",{staticClass:"font-big"},[t._v("จำนวนสินค้า")])]),r("v-card-text",[r("div",{staticClass:"font-big"},[t._v("50 ชิ้น")])]),r("v-card-actions",[r("v-btn",{attrs:{text:""}},[t._v("ข้อมูลจำนวนสินค้า")])],1)],1)],1),r("v-col",{attrs:{cols:"4"}},[r("v-card",{attrs:{color:"#2543CB",dark:""}},[r("v-card-title",[r("div",{staticClass:"font-big"},[t._v("จำนวนรายงาน")])]),r("v-card-text",[r("div",{staticClass:"font-big"},[t._v("16 รายการ")])]),r("v-card-actions",[r("v-btn",{attrs:{text:""}},[t._v("ข้อมูลรายการ")])],1)],1)],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-card",{staticClass:"mx-auto text-center",attrs:{color:"pink",dark:""}},[r("v-card-text",[r("v-sheet",{attrs:{color:"rgba(0, 0, 0, .12)"}},[r("v-sparkline",{attrs:{value:t.value,color:"rgba(117, 234, 85)",height:"100",padding:"24","line-width":"1","stroke-linecap":"round",smooth:""},scopedSlots:t._u([{key:"label",fn:function(e){return[t._v(" "+t._s(e.value)+" ฿")]}}])})],1)],1),r("v-card-text",[r("div",{staticClass:"font-big"},[t._v("รายงานการขาย")])]),r("v-divider"),r("v-card-actions",{staticClass:"justify-center"})],1)],1)],1)],1)},P=[],j={data:function(){return{value:[423,446,675,510,590,610]}}},O=j,T=(r("1e3b"),r("b0af")),S=r("99d9"),A=r("ce7e"),E=r("8dd9"),B=r("7f2e"),L=Object(i["a"])(O,V,P,!1,null,null,null),M=L.exports;u()(L,{VBtn:v["a"],VCard:T["a"],VCardActions:S["a"],VCardText:S["b"],VCardTitle:S["c"],VCol:p["a"],VContainer:b["a"],VDivider:A["a"],VRow:w["a"],VSheet:E["a"],VSparkline:B["a"]}),n["a"].use(x["a"]);var R=[{path:"/",name:"Home",component:M},{path:"/about",name:"About",component:function(){return r.e("chunk-2d22d746").then(r.bind(null,"f820"))}},{path:"/Customer",name:"Customer",component:function(){return Promise.all([r.e("chunk-6ef467c8"),r.e("chunk-2d0c1cfe")]).then(r.bind(null,"4848"))}},{path:"/Product",name:"Product",component:function(){return Promise.all([r.e("chunk-6ef467c8"),r.e("chunk-2d21de4f")]).then(r.bind(null,"d2f1"))}},{path:"/Report",name:"Report",component:function(){return r.e("chunk-2d0d7286").then(r.bind(null,"762c"))}}],N=new x["a"]({mode:"history",base:"/",routes:R}),D=N,q=r("2f62");n["a"].use(q["a"]);var F=new q["a"].Store({state:{},mutations:{},actions:{},modules:{}}),U=r("f309");n["a"].use(U["a"]);var $=new U["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:D,store:F,vuetify:$,render:function(t){return t(y)}}).$mount("#app")},"85ec":function(t,e,r){},b3f8:function(t,e,r){}});
//# sourceMappingURL=index.9e4b2a1b.js.map