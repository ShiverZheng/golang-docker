(function(t){function e(e){for(var r,c,o=e[0],s=e[1],u=e[2],l=0,f=[];l<o.length;l++)c=o[l],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&f.push(i[c][0]),i[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var o=n[c];0!==i[o]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},c={app:0},i={app:0},a=[];function o(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-0b58c742":"a33f9091","chunk-01cfa01e":"d651b0eb","chunk-1dbfeb8c":"c561115b","chunk-bf747074":"a5b66a19","chunk-12b82af0":"b1e20fb5","chunk-380bb11f":"fa874e36","chunk-2d0c4643":"f2b30561"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-01cfa01e":1,"chunk-1dbfeb8c":1,"chunk-bf747074":1,"chunk-12b82af0":1,"chunk-380bb11f":1};c[t]?e.push(c[t]):0!==c[t]&&n[t]&&e.push(c[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-0b58c742":"31d6cfe0","chunk-01cfa01e":"e6486bab","chunk-1dbfeb8c":"1fb98006","chunk-bf747074":"57cf5aea","chunk-12b82af0":"90bf3419","chunk-380bb11f":"34362664","chunk-2d0c4643":"31d6cfe0"}[t]+".css",i=s.p+r,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var u=a[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return e()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){u=f[o],l=u.getAttribute("data-href");if(l===r||l===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||i,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete c[t],d.parentNode.removeChild(d),n(a)},d.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){c[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+c+")",f.name="ChunkLoadError",f.type=r,f.request=c,n[1](f)}i[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/shopping/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},2872:function(t,e,n){t.exports=n.p+"img/shopcart.c68224ce.svg"},"31f3":function(t,e,n){},5156:function(t,e,n){"use strict";n("31f3")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"Detail"}},[n("router-view")],1),n("main-tab-bar")],1)},i=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tab-bar",[r("tab-bar-item",{attrs:{path:"/home"}},[r("img",{attrs:{slot:"item-icon",src:n("9443"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("b508"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("首页")])]),r("tab-bar-item",{attrs:{path:"/category"}},[r("img",{attrs:{slot:"item-icon",src:n("57cd"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("a5ef"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("分类")])]),r("tab-bar-item",{attrs:{path:"/cart"}},[r("img",{attrs:{slot:"item-icon",src:n("2872"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("c3f8"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("购物车")])]),r("tab-bar-item",{attrs:{path:"/profile"}},[r("img",{attrs:{slot:"item-icon",src:n("e55d"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("d151"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("我的")])])],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ignore",attrs:{id:"tab-bar"}},[t._t("default")],2)},u=[],l={name:"TabBar"},f=l,d=(n("5156"),n("2877")),h=Object(d["a"])(f,s,u,!1,null,"e2ce6f2e",null),p=h.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ignore tab-bar-item",on:{click:t.itemClick}},[t.isActive?n("div",[t._t("item-icon-active")],2):n("div",[t._t("item-icon")],2),n("div",{style:t.activeStyle},[t._t("item-text")],2)])},b=[],v=(n("ac1f"),n("5319"),{name:"TabBarItem",props:{path:String,activeColor:{type:String,default:"red"}},data:function(){return{}},computed:{isActive:function(){return-1!==this.$route.path.indexOf(this.path)},activeStyle:function(){return this.isActive?{color:this.activeColor}:{}}},methods:{itemClick:function(){this.$router.replace(this.path)}}}),g=v,k=(n("9949"),Object(d["a"])(g,m,b,!1,null,"80674bce",null)),y=k.exports,_={name:"MainTabBar",components:{TabBar:p,TabBarItem:y}},x=_,w=Object(d["a"])(x,a,o,!1,null,"64b5470c",null),O=w.exports,j={name:"App",components:{MainTabBar:O}},C=j,S=(n("034f"),Object(d["a"])(C,c,i,!1,null,null,null)),T=S.exports,E=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),P=function(){return Promise.all([n.e("chunk-0b58c742"),n.e("chunk-bf747074"),n.e("chunk-380bb11f")]).then(n.bind(null,"b3d7"))},L=function(){return Promise.all([n.e("chunk-0b58c742"),n.e("chunk-1dbfeb8c")]).then(n.bind(null,"bb51"))},$=function(){return Promise.all([n.e("chunk-0b58c742"),n.e("chunk-01cfa01e")]).then(n.bind(null,"c228"))},A=function(){return n.e("chunk-2d0c4643").then(n.bind(null,"3b42"))},B=function(){return Promise.all([n.e("chunk-0b58c742"),n.e("chunk-bf747074"),n.e("chunk-12b82af0")]).then(n.bind(null,"6ab7"))};r["a"].use(E["a"]);var M,N=[{path:"",redirect:"/home"},{path:"/home",component:P},{path:"/category",component:L},{path:"/cart",component:$},{path:"/profile",component:A},{path:"/detail/:iid",component:B}],D=new E["a"]({mode:"history",base:"/shopping/",routes:N}),I=D,q=n("2f62"),J={cartList:[]},F=n("ade3"),H="addToChart",K="addCounter",U="changeChecked",z=(M={},Object(F["a"])(M,H,(function(t,e){e.checked=!1,t.cartList.push(e)})),Object(F["a"])(M,K,(function(t,e){e.count++})),Object(F["a"])(M,U,(function(t,e){e.checked=!e.checked})),M),G=(n("7db0"),{addChart:function(t,e){return new Promise((function(n,r){var c=t.state.cartList.find((function(t){return t.iid===e.iid}));c?(t.commit(K,c),n("数量+1")):(e.count=1,t.commit(H,e),n("加入购物车"))}))}}),Q={cartLength:function(t){return t.cartList.length},cartList:function(t){return t.cartList}};r["a"].use(q["a"]);var R=new q["a"].Store({state:J,mutations:z,actions:G,getters:Q}),V=R,W=n("fe3c"),X=n.n(W),Y=n("caf9"),Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isShow?n("div",{staticClass:"toast"},[t._v(t._s(t.message))]):t._e()},tt=[],et={name:"Toast",data:function(){return{message:"",isShow:!1}},methods:{show:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"默认文本",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500;this.message=e,this.isShow=!0,setTimeout((function(){t.message="",t.isShow=!1}),n)}}},nt=et,rt=(n("f779"),Object(d["a"])(nt,Z,tt,!1,null,"bffdfef4",null)),ct=rt.exports,it={install:function(t){var e=t.extend(ct),n=new e;n.$mount(document.createElement("div")),document.body.appendChild(n.$el),t.prototype.$toast=n}},at=it;r["a"].use(at),r["a"].config.productionTip=!1,r["a"].prototype.$bus=new r["a"],X.a.attach(document.body),r["a"].use(Y["a"],{loading:n("bc5e")}),new r["a"]({router:I,store:V,render:function(t){return t(T)}}).$mount("#app")},"57cd":function(t,e,n){t.exports=n.p+"img/category.12bedb89.svg"},7567:function(t,e,n){},8380:function(t,e,n){},"85ec":function(t,e,n){},9443:function(t,e,n){t.exports=n.p+"img/home.7210ddcb.svg"},9949:function(t,e,n){"use strict";n("8380")},a5ef:function(t,e,n){t.exports=n.p+"img/category_active.cb2cc09f.svg"},b508:function(t,e,n){t.exports=n.p+"img/home_active.cc40b6f2.svg"},bc5e:function(t,e,n){t.exports=n.p+"img/placeholder.48bcea0d.png"},c3f8:function(t,e,n){t.exports=n.p+"img/shopcart_active.3f0a2016.svg"},d151:function(t,e,n){t.exports=n.p+"img/profile_active.fd66b281.svg"},e55d:function(t,e,n){t.exports=n.p+"img/profile.42d7cf12.svg"},f779:function(t,e,n){"use strict";n("7567")}});
//# sourceMappingURL=app.810ce40c.js.map