(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)r=o[u],s[r]&&d.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var o=n[r];0!==s[o]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},s={app:0},i=[];function o(t){return c.p+"js/"+({routes:"routes"}[t]||t)+"."+{"chunk-2d0be6c9":"c41c11a9","chunk-2d0cb6c9":"ddce8643","chunk-2d0d63f1":"5a475e17","chunk-2d0daa98":"04336431","chunk-2d0f09f3":"68adf333","chunk-2d23822a":"2ea4dccb","chunk-3d197ff2":"ed1c5b10","chunk-4df50f95":"2420485b","chunk-59c0bb64":"e7c3d75f","chunk-d74f796c":"3e879ade",routes:"caf93e90"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-3d197ff2":1,"chunk-4df50f95":1,"chunk-59c0bb64":1,"chunk-d74f796c":1,routes:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="css/"+({routes:"routes"}[t]||t)+"."+{"chunk-2d0be6c9":"31d6cfe0","chunk-2d0cb6c9":"31d6cfe0","chunk-2d0d63f1":"31d6cfe0","chunk-2d0daa98":"31d6cfe0","chunk-2d0f09f3":"31d6cfe0","chunk-2d23822a":"31d6cfe0","chunk-3d197ff2":"41a4938a","chunk-4df50f95":"c8ce4b4f","chunk-59c0bb64":"c1e6d6c2","chunk-d74f796c":"f2db3c14",routes:"c8ce4b4f"}[t]+".css",s=c.p+a,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===s))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===a||u===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.request=a,delete r[t],f.parentNode.removeChild(f),n(i)},f.href=s;var v=document.getElementsByTagName("head")[0];v.appendChild(f)}).then(function(){r[t]=0}));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise(function(e,n){a=s[t]=[e,n]});e.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t),l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,n[1](i)}s[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/vuetify-admin-dashboard/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0315":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-toolbar",{attrs:{flat:"",color:"white"}},[n("v-toolbar-title",[t._v("My CRUD")]),n("v-divider",{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),n("v-spacer"),n("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({staticClass:"mb-2",attrs:{color:"primary",dark:""}},a),[t._v("New Item")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),n("v-card-text",[n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[n("v-text-field",{attrs:{label:"Dessert name"},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1),n("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[n("v-text-field",{attrs:{label:"Calories"},model:{value:t.editedItem.calories,callback:function(e){t.$set(t.editedItem,"calories",e)},expression:"editedItem.calories"}})],1),n("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[n("v-text-field",{attrs:{label:"Fat (g)"},model:{value:t.editedItem.fat,callback:function(e){t.$set(t.editedItem,"fat",e)},expression:"editedItem.fat"}})],1),n("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[n("v-text-field",{attrs:{label:"Carbs (g)"},model:{value:t.editedItem.carbs,callback:function(e){t.$set(t.editedItem,"carbs",e)},expression:"editedItem.carbs"}})],1),n("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[n("v-text-field",{attrs:{label:"Protein (g)"},model:{value:t.editedItem.protein,callback:function(e){t.$set(t.editedItem,"protein",e)},expression:"editedItem.protein"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.close}},[t._v("Cancel")]),n("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.save}},[t._v("Save")])],1)],1)],1)],1),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.desserts},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",[t._v(t._s(e.item.name))]),n("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.calories))]),n("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.fat))]),n("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.carbs))]),n("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.protein))]),n("td",{staticClass:"justify-center layout px-0"},[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(n){return t.editItem(e.item)}}},[t._v("\n          edit\n        ")]),n("v-icon",{attrs:{small:""},on:{click:function(n){return t.deleteItem(e.item)}}},[t._v("\n          delete\n        ")])],1)]}},{key:"no-data",fn:function(){return[n("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v("Reset")])]},proxy:!0}])})],1)},r=[],s=n("5176"),i=n.n(s),o={data:function(){return{dialog:!1,headers:[{text:"Dessert (100g serving)",align:"left",sortable:!1,value:"name"},{text:"Calories",value:"calories"},{text:"Fat (g)",value:"fat"},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Actions",value:"name",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{name:"",calories:0,fat:0,carbs:0,protein:0},defaultItem:{name:"",calories:0,fat:0,carbs:0,protein:0}}},computed:{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}},watch:{dialog:function(t){t||this.close()}},created:function(){this.initialize()},methods:{initialize:function(){this.desserts=[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7}]},editItem:function(t){this.editedIndex=this.desserts.indexOf(t),this.editedItem=i()({},t),this.dialog=!0},deleteItem:function(t){var e=this.desserts.indexOf(t);confirm("Are you sure you want to delete this item?")&&this.desserts.splice(e,1)},close:function(){var t=this;this.dialog=!1,setTimeout(function(){t.editedItem=i()({},t.defaultItem),t.editedIndex=-1},300)},save:function(){this.editedIndex>-1?i()(this.desserts[this.editedIndex],this.editedItem):this.desserts.push(this.editedItem),this.close()}}},c=o,l=n("2877"),u=Object(l["a"])(c,a,r,!1,null,null,null);e["default"]=u.exports},"0a2d":function(t){t.exports={needHelp:"Need Help?"}},1196:function(t,e,n){"use strict";var a=n("1d1c"),r=n.n(a);r.a},"173d":function(t){t.exports={facebook:"Facebook",footer:"Footer",github:"Github",twitter:"Twitter"}},"1d1c":function(t,e,n){},"25f5":function(t,e,n){"use strict";var a=n("453f"),r=n.n(a);r.a},2609:function(t,e,n){"use strict";n.r(e),e["default"]={drawer:null,color:"general",image:""}},"2a74":function(t,e,n){"use strict";n.r(e);n("28a5");var a=n("768b"),r=(n("a481"),n("ac6a"),n("c653")),s={};r.keys().forEach(function(t){if("./index.js"!==t){var e=t.replace(/(\.\/|\.js)/g,""),n=e.split("/"),i=Object(a["a"])(n,2),o=i[0],c=i[1];s[o]||(s[o]={namespaced:!0}),s[o][c]=r(t).default}}),e["default"]=s},"2c37":function(t,e,n){},4025:function(t,e,n){},4072:function(t,e,n){"use strict";var a=n("721f"),r=n.n(a);r.a},"41c0":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{id:"app-drawer",app:"",dark:"",floating:"",persistent:"","mobile-break-point":"991",width:"260"},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}},[n("v-img",{attrs:{src:t.image,height:"100%"}},[n("v-layout",{staticClass:"fill-height",attrs:{tag:"v-list",column:""}},[n("v-list-tile",{attrs:{avatar:""}},[n("v-list-tile-avatar",{attrs:{color:"white"}},[n("v-img",{attrs:{src:t.logo,height:"34",contain:""}})],1),n("v-list-tile-title",{staticClass:"title"},[t._v("\n          Vuetify Admin Dash\n        ")])],1),n("v-divider"),t.responsive?n("v-list-tile",[n("v-text-field",{staticClass:"purple-input search-input",attrs:{label:"Search...",color:"purple"}})],1):t._e(),t._l(t.links,function(e,a){return n("v-list-tile",{key:a,staticClass:"v-list-item",attrs:{to:e.to,"active-class":t.color,avatar:""}},[n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-tile-title",{domProps:{textContent:t._s(e.text)}})],1)})],2)],1)],1)},r=[],s=n("cebc"),i=n("2f62"),o={data:function(){return{logo:"./img/redditicon.png",links:[{to:"/dashboard",icon:"mdi-view-dashboard",text:"Dashboard"},{to:"/user-profile",icon:"mdi-account",text:"User Profile"},{to:"/table-list",icon:"mdi-clipboard-outline",text:"Table List"},{to:"/tables",icon:"mdi-clipboard-outline",text:"CRUD Tables"},{to:"/typography",icon:"mdi-format-font",text:"Typography"},{to:"/icons",icon:"mdi-chart-bubble",text:"Icons"},{to:"/maps",icon:"mdi-map-marker",text:"Maps"},{to:"/notifications",icon:"mdi-bell",text:"Notifications"}],responsive:!1}},computed:Object(s["a"])({},Object(i["c"])("app",["image","color"]),{inputValue:{get:function(){return this.$store.state.app.drawer},set:function(t){this.setDrawer(t)}},items:function(){return this.$t("Layout.View.items")}}),mounted:function(){this.onResponsiveInverted(),window.addEventListener("resize",this.onResponsiveInverted)},beforeDestroy:function(){window.removeEventListener("resize",this.onResponsiveInverted)},methods:Object(s["a"])({},Object(i["b"])("app",["setDrawer","toggleDrawer"]),{onResponsiveInverted:function(){window.innerWidth<991?this.responsive=!0:this.responsive=!1}})},c=o,l=(n("ff57"),n("2877")),u=Object(l["a"])(c,a,r,!1,null,null,null);e["default"]=u.exports},"42e7":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("material-card",t._g(t._b({staticClass:"v-card--material-stats"},"material-card",t.$attrs,!1),t.$listeners),[n("v-card",{staticClass:"pa-4",class:"elevation-"+t.elevation,attrs:{slot:"offset",color:t.color,dark:""},slot:"offset"},[n("v-icon",{attrs:{size:"40"}},[t._v("\n      "+t._s(t.icon)+"\n    ")])],1),n("div",{staticClass:"text-xs-right"},[n("p",{staticClass:"category grey--text font-weight-light",domProps:{textContent:t._s(t.title)}}),n("h3",{staticClass:"title display-1 font-weight-light"},[t._v("\n      "+t._s(t.value)+" "),n("small",[t._v(t._s(t.smallValue))])])]),n("template",{slot:"actions"},[n("v-icon",{staticClass:"mr-2",attrs:{color:t.subIconColor,size:"20"}},[t._v("\n      "+t._s(t.subIcon)+"\n    ")]),n("span",{staticClass:"caption font-weight-light",class:t.subTextColor,domProps:{textContent:t._s(t.subText)}})],1)],2)},r=[],s=n("cebc"),i=n("e3a9"),o={inheritAttrs:!1,props:Object(s["a"])({},i["default"].props,{icon:{type:String,required:!0},subIcon:{type:String,default:void 0},subIconColor:{type:String,default:void 0},subTextColor:{type:String,default:void 0},subText:{type:String,default:void 0},title:{type:String,default:void 0},value:{type:String,default:void 0},smallValue:{type:String,default:void 0}})},c=o,l=(n("4d79"),n("2877")),u=Object(l["a"])(c,a,r,!1,null,null,null);e["default"]=u.exports},"453f":function(t,e,n){},4999:function(t,e,n){var a={"./en/Common.json":"0a2d","./en/Core/Footer.json":"173d","./en/Core/Toolbar.json":"f26b","./en/Home.json":"5cc6"};function r(t){var e=s(t);return n(e)}function s(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}r.keys=function(){return Object.keys(a)},r.resolve=s,t.exports=r,r.id="4999"},"4d79":function(t,e,n){"use strict";var a=n("803b"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=(n("a481"),n("ac6a"),n("8103")),s=n.n(r),i=n("bba4"),o=n.n(i),c=n("ffe0");c.keys().forEach(function(t){var e=c(t),n=s()(o()(t.replace(/^\.\//,"").replace(/\.\w+$/,"")));a["default"].component(n,e.default||e)});var l=n("bc3a"),u=n.n(l);a["default"].prototype.$http=u.a,u.a.defaults.baseURL="https://vue-update.firebaseio.com",u.a.defaults.headers.get["Accepts"]="application/json";var d=localStorage.getItem("token");d&&(a["default"].prototype.$http.defaults.headers.common["Authorization"]=d);n("4633");a["default"].use(n("84b5"));var f=n("31bd"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("transition",{attrs:{mode:"out-in"}},[n("router-view")],1)],1)},p=[],m=(n("5c0b"),n("2877")),h={},b=Object(m["a"])(h,v,p,!1,null,null,null),g=b.exports,x=n("a925"),y=(n("28a5"),n("5d73")),_=n.n(y),k=n("4999"),w={},C=!0,I=!1,O=void 0;try{for(var j,E=function(){var t=j.value;if("./index.js"===t)return"continue";var e=t.replace(/(\.\/|\.json$)/g,"").split("/");e.reduce(function(n,a,r){return n[a]?n[a]:(n[a]=r+1===e.length?k(t):{},n[a])},w)},$=_()(k.keys());!(C=(j=$.next()).done);C=!0)E()}catch(X){I=!0,O=X}finally{try{C||null==$.return||$.return()}finally{if(I)throw O}}var T=w;a["default"].use(x["a"]);var S=new x["a"]({locale:"en",fallbackLocale:"en",messages:T}),A=S,D=n("0284"),L=n.n(D),N=n("8c4f"),P=n("0a89"),F=n.n(P),q=[{path:"*",meta:{name:"",requiresAuth:!0},redirect:{path:"/control/dashboard"}},{path:"/control",meta:{name:"",requiresAuth:!1},component:function(){return n.e("routes").then(n.bind(null,"503f"))},children:[{path:"",component:function(){return Promise.resolve().then(n.bind(null,"61b1"))}}]},{path:"/control/dashboard",meta:{name:"Dashboard View",requiresAuth:!0},component:function(){return n.e("chunk-4df50f95").then(n.bind(null,"6c12"))},children:[{path:"",name:"Dashboard",component:function(){return n.e("chunk-2d0d63f1").then(n.bind(null,"7277"))}},{path:"user-profile",meta:{name:"User Profile",requiresAuth:!0},component:function(){return n.e("chunk-2d0cb6c9").then(n.bind(null,"4a39"))}},{path:"table-list",meta:{name:"Table List",requiresAuth:!0},component:function(){return n.e("chunk-2d0be6c9").then(n.bind(null,"2fcb"))}},{path:"tables",meta:{name:"Complex Tables",requiresAuth:!0},component:function(){return n.e("chunk-d74f796c").then(n.bind(null,"01c0"))}},{path:"tablestest",meta:{name:"Complex Tables test",requiresAuth:!0},component:function(){return n.e("chunk-2d0daa98").then(n.bind(null,"6d0d"))}},{path:"typography",meta:{name:"Typography",requiresAuth:!0},component:function(){return n.e("chunk-3d197ff2").then(n.bind(null,"547e"))}},{path:"icons",meta:{name:"Icons",requiresAuth:!0},component:function(){return n.e("chunk-2d0f09f3").then(n.bind(null,"9cc6"))}},{path:"maps",meta:{name:"",requiresAuth:!0},component:function(){return n.e("chunk-59c0bb64").then(n.bind(null,"daba"))}},{path:"notifications",meta:{name:"",requiresAuth:!0},component:function(){return n.e("chunk-2d23822a").then(n.bind(null,"fda7"))}}]}];a["default"].use(N["a"]);var B=new N["a"]({base:"/",mode:"history",routes:q,scrollBehavior:function(t,e,n){return n||(t.hash?{selector:t.hash}:{x:0,y:0})}});a["default"].use(F.a),Object({NODE_ENV:"production",BASE_URL:"/vuetify-admin-dashboard/"}).GOOGLE_ANALYTICS&&a["default"].use(L.a,{id:Object({NODE_ENV:"production",BASE_URL:"/vuetify-admin-dashboard/"}).GOOGLE_ANALYTICS,router:B,autoTracking:{page:!0}});var V=B,z=n("2f62"),M={},R={},U=n("2a74"),H={},Y={};a["default"].use(z["a"]);var G=new z["a"].Store({actions:M,getters:R,modules:U["default"],mutations:H,state:Y}),W=G,J=n("ce5b"),K=n.n(J),Q={primary:"#4caf50",secondary:"#4caf50",tertiary:"#495057",accent:"#82B1FF",error:"#f55a4e",info:"#00d3ee",success:"#5cb860",warning:"#ffa21a",general:"#2196F3"};n("bf40"),n("5363"),n("d1e7");Object(f["sync"])(W,V),a["default"].use(K.a,{iconfont:"mdi",theme:Q}),a["default"].config.productionTip=!1,new a["default"]({i18n:A,router:V,store:W,render:function(t){return t(g)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),r=n.n(a);r.a},"5cc6":function(t){t.exports={title:"Vuetify Admin Alpha",footer:"2019 Vuetify LLC",drawerItems:["Inspire"],needHelp:"Need help?"}},"5e27":function(t,e,n){},"602c":function(t,e,n){"use strict";var a=n("84b6"),r=n.n(a);r.a},6096:function(t,e,n){"use strict";n.r(e);var a=function(t){return function(e,n){return e[t]=n}},r=function(t){return function(e){return e[t]=!e[t]}};e["default"]={setDrawer:a("drawer"),setImage:a("image"),setColor:a("color"),toggleDrawer:r("drawer")}},"61b1":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",[n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[n("v-card",{staticClass:"elevation-12"},[n("v-toolbar",{attrs:{dark:"",color:"general"}},[n("v-toolbar-title",[t._v("Admin Panel")]),n("v-spacer")],1),n("v-card-text",[n("v-form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[n("v-text-field",{ref:"username",attrs:{rules:[function(){return!!t.username||"This field is required"}],"error-messages":t.errorMessages,"prepend-icon":"mdi-account",label:"Login",placeholder:"TotallyNotThanos",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),n("v-text-field",{ref:"password",attrs:{rules:[function(){return!!t.password||"This field is required"}],"error-messages":t.errorMessages,"append-icon":t.showPassword?"mdi-eye-off":"mdi-eye",type:t.showPassword?"text":"password","prepend-icon":"mdi-lock",label:"Password",placeholder:"*********",counter:"",required:""},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),n("v-divider",{staticClass:"mt-5"}),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{"align-center":"","justify-center":"",color:"general"},on:{click:t.login}},[t._v("Login\n            ")])],1)],1)],1)],1)],1)],1)},r=[],s=n("a4bb"),i=n.n(s),o=(n("ac6a"),{data:function(){return{username:"",password:"",errorMessages:"",formHasErrors:!1,showPassword:!1}},computed:{form:function(){return{username:this.username,password:this.password}}},methods:{login:function(){var t=this;this.formHasErrors=!1,i()(this.form).forEach(function(e){t.form[e]||(t.formHasErrors=!1),t.$refs[e].validate(!0)})}},metaInfo:function(){return{title:"Super Secret | Login"}}}),c=o,l=n("2877"),u=Object(l["a"])(c,a,r,!1,null,null,null);e["default"]=u.exports},"703d":function(t,e,n){},"721f":function(t,e,n){},"78d5":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("material-card",t._g(t._b({staticClass:"v-card--material-chart"},"material-card",t.$attrs,!1),t.$listeners),[n("chartist",{attrs:{slot:"header",data:t.data,"event-handlers":t.eventHandlers,options:t.options,ratio:t.ratio,"responsive-options":t.responsiveOptions,type:t.type},slot:"header"}),t._t("default"),t._t("actions",null,{slot:"actions"})],2)},r=[],s=(n("6762"),n("2fdb"),{inheritAttrs:!1,props:{data:{type:Object,default:function(){return{}}},eventHandlers:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){return{}}},ratio:{type:String,default:void 0},responsiveOptions:{type:Array,default:function(){return[]}},type:{type:String,required:!0,validator:function(t){return["Bar","Line","Pie"].includes(t)}}}}),i=s,o=(n("e536"),n("2877")),c=Object(o["a"])(i,a,r,!1,null,null,null);e["default"]=c.exports},"7a74":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{id:"core-footer",absolute:"",height:"82"}},[n("div",{staticClass:"footer-items"},t._l(t.links,function(e){return n("span",{key:e.name},[n("a",{staticClass:"tertiary--text footer-links",attrs:{href:e.Link}},[t._v(t._s(e.name))])])}),0),n("v-spacer"),n("span",{staticClass:"font-weight-light copyright"},[t._v("\n    ©\n    "+t._s((new Date).getFullYear())+"\n    "),n("a",{attrs:{href:"https://twitter.com/Cleesus",target:"_blank"}},[t._v("@cleesus")]),t._v(", made with\n    "),n("v-icon",{attrs:{color:"tertiary",size:"17"}},[t._v("mdi-heart")]),t._v("\n    for a better web\n  ")],1)],1)},r=[],s={data:function(){return{links:[{name:"Home",Link:"/dashboard"},{name:"Change later",Link:"https://www.creative-tim.com"},{name:"About Us",Link:"https://creative-tim.com/presentation"},{name:"Blog",Link:"https://blog.creative-tim.com"}]}}},i=s,o=(n("602c"),n("2877")),c=Object(o["a"])(i,a,r,!1,null,null,null);e["default"]=c.exports},"7c07":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-data-table",{attrs:{headers:t.headers,items:t.desserts},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",[n("v-edit-dialog",{attrs:{"return-value":e.item.name,lazy:""},on:{"update:returnValue":function(n){return t.$set(e.item,"name",n)},"update:return-value":function(n){return t.$set(e.item,"name",n)},save:t.save,cancel:t.cancel,open:t.open,close:t.close},scopedSlots:t._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{rules:[t.max25chars],label:"Edit","single-line":"",counter:""},model:{value:e.item.name,callback:function(n){t.$set(e.item,"name",n)},expression:"props.item.name"}})]},proxy:!0}],null,!0)},[t._v(" "+t._s(e.item.name)+"\n          ")])],1),n("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.calories))]),n("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.fat))]),n("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.carbs))]),n("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.protein))]),n("td",{staticClass:"text-xs-right"},[n("v-edit-dialog",{attrs:{"return-value":e.item.iron,large:"",lazy:"",persistent:""},on:{"update:returnValue":function(n){return t.$set(e.item,"iron",n)},"update:return-value":function(n){return t.$set(e.item,"iron",n)},save:t.save,cancel:t.cancel,open:t.open,close:t.close},scopedSlots:t._u([{key:"input",fn:function(){return[n("v-text-field",{attrs:{rules:[t.max25chars],label:"Edit","single-line":"",counter:"",autofocus:""},model:{value:e.item.iron,callback:function(n){t.$set(e.item,"iron",n)},expression:"props.item.iron"}})]},proxy:!0}],null,!0)},[n("div",[t._v(t._s(e.item.iron))])])],1)]}}])}),n("v-snackbar",{attrs:{timeout:3e3,color:t.snackColor},model:{value:t.snack,callback:function(e){t.snack=e},expression:"snack"}},[t._v("\n    "+t._s(t.snackText)+"\n    "),n("v-btn",{attrs:{flat:""},on:{click:function(e){t.snack=!1}}},[t._v("Close")])],1)],1)},r=[],s={data:function(){return{snack:!1,snackColor:"",snackText:"",max25chars:function(t){return t.length<=25||"Input too long!"},pagination:{},headers:[{text:"Dessert (100g serving)",align:"left",sortable:!1,value:"name"},{text:"Calories",value:"calories"},{text:"Fat (g)",value:"fat"},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Iron (%)",value:"iron"}],desserts:[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,iron:"1%"},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,iron:"1%"},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6,iron:"7%"},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3,iron:"8%"},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9,iron:"16%"},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0,iron:"0%"},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0,iron:"2%"},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5,iron:"45%"},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9,iron:"22%"},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7,iron:"6%"}]}},methods:{save:function(){this.snack=!0,this.snackColor="success",this.snackText="Data saved"},cancel:function(){this.snack=!0,this.snackColor="error",this.snackText="Canceled"},open:function(){this.snack=!0,this.snackColor="info",this.snackText="Dialog opened"},close:function(){console.log("Dialog closed")}}},i=s,o=n("2877"),c=Object(o["a"])(i,a,r,!1,null,null,null);e["default"]=c.exports},"803b":function(t,e,n){},"84b6":function(t,e,n){},"8f36":function(t,e,n){},"9306e":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",[n("div",{attrs:{id:"core-view"}},[n("v-fade-transition",{attrs:{mode:"out-in"}},[n("router-view")],1)],1),"Maps"!==t.$route.name?n("core-footer"):t._e()],1)},r=[],s={metaInfo:function(){return{title:"Vuetify Admin Dashboard by ClintOxx"}}},i=s,o=(n("ee4f"),n("2877")),c=Object(o["a"])(i,a,r,!1,null,null,null);e["default"]=c.exports},"9cbf":function(t,e,n){"use strict";var a=n("8f36"),r=n.n(a);r.a},"9d6c":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-alert",t._g(t._b({staticClass:"v-alert--notification",class:["elevation-"+t.elevation],attrs:{value:t.value}},"v-alert",t.$attrs,!1),t.$listeners),[t._t("default")],2)},r=[],s=(n("c5f6"),{inheritAttrs:!1,props:{elevation:{type:[Number,String],default:6},value:{type:Boolean,default:!0}}}),i=s,o=(n("4072"),n("2877")),c=Object(o["a"])(i,a,r,!1,null,null,null);e["default"]=c.exports},b2ab:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"close-on-content-click":!1,bottom:"",left:"","min-width":"300","max-width":"300","nudge-left":"12","offset-x":"",transition:"slide-y-transition"}},[n("v-btn",{staticClass:"elevation-0",staticStyle:{top:"96px"},attrs:{slot:"activator",color:"grey",dark:"",fab:"",fixed:"",top:""},slot:"activator"},[n("v-icon",[t._v("mdi-settings")])],1),n("v-card",[n("v-container",{attrs:{"grid-list-xl":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("div",{staticClass:"text-xs-center body-2 text-uppercase "},[t._v("Sidebar Filters")]),n("v-layout",{attrs:{"justify-center":""}},t._l(t.colors,function(e){return n("v-avatar",{key:e,class:[e===t.color?"color-active color-"+e:"color-"+e],attrs:{size:"23"},on:{click:function(n){return t.setColor(e)}}})}),1),n("v-divider",{staticClass:"mt-3"})],1),n("v-flex",{attrs:{xs12:""}},[n("div",{staticClass:"text-xs-center body-2 text-uppercase "},[t._v("Images")])]),t._l(t.images,function(e){return n("v-flex",{key:e,attrs:{xs3:""}},[n("v-img",{class:[t.image===e?"image-active":""],attrs:{src:e,height:"120"},nativeOn:{click:function(n){return t.setImage(e)}}})],1)}),n("v-flex",{attrs:{xs12:""}},[n("v-btn",{attrs:{href:"https://www.creative-tim.com/product/vuetify-material-dashboard",target:"_blank",color:"success",block:""}},[t._v("\n            Free Download\n          ")])],1),n("v-flex",{attrs:{xs12:""}},[n("v-btn",{staticClass:"white--text",attrs:{href:"https://demos.creative-tim.com/vuetify-material-dashboard/documentation",target:"_blank",color:"primary",block:""}},[t._v("\n            Documentation\n          ")])],1),n("v-flex",{attrs:{xs12:""}},[n("div",{staticClass:"text-xs-center body-2 text-uppercase"},[n("div",{staticClass:" "},[t._v("\n              Thank You for Sharing!\n            ")]),n("div",[n("v-btn",{staticClass:"mr-2 v-btn-facebook",attrs:{color:"indigo",fab:"",icon:"",small:"",round:""}},[n("v-icon",[t._v("mdi-facebook")])],1),n("v-btn",{staticClass:"v-btn-twitter",attrs:{color:"cyan",fab:"",icon:"",small:"",round:""}},[n("v-icon",[t._v("mdi-twitter")])],1)],1)])])],2)],1)],1)],1)},r=[],s=n("cebc"),i=n("2f62"),o={data:function(){return{colors:["primary","info","success","warning","danger","general"],images:["https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-1.23832d31.jpg","https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg","https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-3.3a54f533.jpg","https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-4.3b7e38ed.jpg"]}},computed:Object(s["a"])({},Object(i["c"])("app",["image","color"]),{color:function(){return this.$store.state.app.color}}),methods:Object(s["a"])({},Object(i["b"])("app",["setImage"]),{setColor:function(t){this.$store.state.app.color=t}})},c=o,l=(n("9cbf"),n("2877")),u=Object(l["a"])(c,a,r,!1,null,null,null);e["default"]=u.exports},bdca:function(t,e,n){},c653:function(t,e,n){var a={"./app/mutations.js":"6096","./app/state.js":"2609","./index.js":"2a74"};function r(t){var e=s(t);return n(e)}function s(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}r.keys=function(){return Object.keys(a)},r.resolve=s,t.exports=r,r.id="c653"},c6cc:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-offset",class:t.classes,style:t.styles},[t._t("default")],2)},r=[],s=(n("c5f6"),{props:{fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:0}},computed:{classes:function(){return{"v-offset--full-width":this.fullWidth}},styles:function(){return{top:"-".concat(this.offset,"px"),marginBottom:"-".concat(this.offset,"px")}}}}),i=s,o=(n("1196"),n("2877")),c=Object(o["a"])(i,a,r,!1,null,null,null);e["default"]=c.exports},cb2c:function(t,e,n){"use strict";var a=n("4025"),r=n.n(a);r.a},d23b:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{staticStyle:{background:"#424242"},attrs:{id:"core-toolbar",dark:"",flat:"",prominent:""}},[n("div",{staticClass:"v-toolbar-title"},[n("v-toolbar-title",{staticClass:"font-weight-light text-general"},[t.responsive?n("v-btn",{staticClass:"default v-btn--simple",attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.onClickBtn(e)}}},[n("v-icon",[t._v("mdi-view-list")])],1):t._e(),t._v("\n      "+t._s(t.title)+"\n    ")],1)],1),n("v-spacer"),n("v-toolbar-items",[n("v-flex",{attrs:{"align-center":"",layout:"","py-2":""}},[t.responsiveInput?n("v-text-field",{staticClass:"mr-4 mt-2 purple-input",attrs:{label:"Search...","hide-details":"",color:"purple"}}):t._e(),n("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"toolbar-items",attrs:{to:"/"}},[n("v-icon",{attrs:{color:""}},[t._v("mdi-home")])],1),n("v-menu",{attrs:{bottom:"",left:"","content-class":"dropdown-menu","offset-y":"",transition:"slide-y-transition"}},[n("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"toolbar-items",attrs:{slot:"activator",to:"/notifications"},slot:"activator"},[n("v-badge",{attrs:{color:"error",overlap:""}},[n("template",{slot:"badge"},[t._v("\n              "+t._s(t.notifications.length)+"\n            ")]),n("v-icon",{attrs:{color:""}},[t._v("mdi-bell")])],2)],1),n("v-card",[n("v-list",{attrs:{dense:""}},t._l(t.notifications,function(e){return n("v-list-tile",{key:e,on:{click:t.onClick}},[n("v-list-tile-title",{domProps:{textContent:t._s(e)}})],1)}),1)],1)],1),n("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"toolbar-items",attrs:{to:"/user-profile"}},[n("v-icon",{attrs:{color:""}},[t._v("mdi-account")])],1),n("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"toolbar-items",attrs:{to:"/logout"}},[n("v-icon",{attrs:{color:""}},[t._v("mdi-power")])],1)],1)],1)],1)},r=[],s=n("cebc"),i=(n("7f7f"),n("2f62")),o={data:function(){return{notifications:["Mike, John responded to your email","You have 5 new tasks","You're now a friend with Andrew","Another Notification","Another One"],title:"I got a digital dash -Future Hendrixx",responsive:!1,responsiveInput:!1}},watch:{$route:function(t){this.title=t.name}},mounted:function(){this.onResponsiveInverted(),window.addEventListener("resize",this.onResponsiveInverted)},beforeDestroy:function(){window.removeEventListener("resize",this.onResponsiveInverted)},methods:Object(s["a"])({},Object(i["b"])("app",["setDrawer","toggleDrawer"]),{onClickBtn:function(){this.setDrawer(!this.$store.state.app.drawer)},onClick:function(){},onResponsiveInverted:function(){window.innerWidth<991?(this.responsive=!0,this.responsiveInput=!1):(this.responsive=!1,this.responsiveInput=!0)}})},c=o,l=(n("25f5"),n("2877")),u=Object(l["a"])(c,a,r,!1,null,null,null);e["default"]=u.exports},e3a9:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",t._g(t._b({style:t.styles},"v-card",t.$attrs,!1),t.$listeners),[t.hasOffset?n("helper-offset",{attrs:{inline:t.inline,"full-width":t.fullWidth,offset:t.offset}},[t.$slots.offset?t._t("offset"):n("v-card",{staticClass:"v-card--material__header",class:"elevation-"+t.elevation,attrs:{color:t.color,dark:""}},[t.title||t.text?n("span",[n("h4",{staticClass:"title font-weight-light mb-2",domProps:{textContent:t._s(t.title)}}),n("p",{staticClass:"category font-weight-thin",domProps:{textContent:t._s(t.text)}})]):t._t("header")],2)],2):t._e(),n("v-card-text",[t._t("default")],2),t.$slots.actions?n("v-divider",{staticClass:"mx-3"}):t._e(),t.$slots.actions?n("v-card-actions",[t._t("actions")],2):t._e()],1)},r=[],s=(n("c5f6"),{inheritAttrs:!1,props:{color:{type:String,default:"secondary"},elevation:{type:[Number,String],default:10},inline:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:24},title:{type:String,default:void 0},text:{type:String,default:void 0}},computed:{hasOffset:function(){return this.$slots.header||this.$slots.offset||this.title||this.text},styles:function(){return this.hasOffset?{marginBottom:"".concat(this.offset,"px"),marginTop:"".concat(2*this.offset,"px")}:null}}}),i=s,o=(n("cb2c"),n("2877")),c=Object(o["a"])(i,a,r,!1,null,null,null);e["default"]=c.exports},e536:function(t,e,n){"use strict";var a=n("bdca"),r=n.n(a);r.a},ee4f:function(t,e,n){"use strict";var a=n("703d"),r=n.n(a);r.a},f26b:function(t){t.exports={title:"Title"}},ff57:function(t,e,n){"use strict";var a=n("2c37"),r=n.n(a);r.a},ffe0:function(t,e,n){var a={"./LoginForm.vue":"61b1","./Tables/CrudTable.vue":"0315","./Tables/InlineEditTable.vue":"7c07","./core/Drawer.vue":"41c0","./core/Filter.vue":"b2ab","./core/Footer.vue":"7a74","./core/Toolbar.vue":"d23b","./core/View.vue":"9306e","./helper/Offset.vue":"c6cc","./material/Card.vue":"e3a9","./material/ChartCard.vue":"78d5","./material/Notification.vue":"9d6c","./material/StatsCard.vue":"42e7"};function r(t){var e=s(t);return n(e)}function s(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}r.keys=function(){return Object.keys(a)},r.resolve=s,t.exports=r,r.id="ffe0"}});
//# sourceMappingURL=app.8edfaa62.js.map