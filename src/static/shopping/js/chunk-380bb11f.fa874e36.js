(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-380bb11f"],{"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?s(t):o(n(t))}},"08ce":function(t,e,r){},1388:function(t,e,r){},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),i=r("2d00"),a=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"4df4":function(t,e,r){"use strict";var n=r("0366"),o=r("7b0b"),i=r("9bdd"),a=r("e95a"),s=r("50c4"),c=r("8418"),u=r("35a1");t.exports=function(t){var e,r,f,l,d,p,b=o(t),m="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,g=void 0!==v,y=u(b),w=0;if(g&&(v=n(v,h>2?arguments[2]:void 0,2)),void 0==y||m==Array&&a(y))for(e=s(b.length),r=new m(e);e>w;w++)p=g?v(b[w],w):b[w],c(r,w,p);else for(l=y.call(b),d=l.next,r=new m;!(f=d.call(l)).done;w++)p=g?i(l,v,[f.value,w],!0):f.value,c(r,w,p);return r.length=w,r}},"5cbe":function(t,e,r){t.exports=r.p+"img/recommend_bg.794b6628.jpg"},"68f2":function(t,e,r){},"6a4b":function(t,e,r){"use strict";r("68f2")},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),i=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},"74fa":function(t,e,r){"use strict";r("08ce")},"80f4":function(t,e,r){"use strict";r("1388")},8418:function(t,e,r){"use strict";var n=r("c04e"),o=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var a=n(e);a in t?o.f(t,a,i(0,r)):t[a]=r}},"9bdd":function(t,e,r){var n=r("825a"),o=r("2a62");t.exports=function(t,e,r,i){try{return i?e(n(r)[0],r[1]):e(r)}catch(a){throw o(t),a}}},a1d8:function(t,e,r){},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("d066"),a=r("c430"),s=r("83ab"),c=r("4930"),u=r("fdbf"),f=r("d039"),l=r("5135"),d=r("e8b5"),p=r("861d"),b=r("825a"),m=r("7b0b"),h=r("fc6a"),v=r("c04e"),g=r("5c6c"),y=r("7c73"),w=r("df75"),S=r("241c"),O=r("057f"),k=r("7418"),x=r("06cf"),C=r("9bf2"),j=r("d1e7"),T=r("9112"),_=r("6eeb"),$=r("5692"),A=r("f772"),I=r("d012"),L=r("90e3"),E=r("b622"),H=r("e538"),P=r("746f"),N=r("d44e"),F=r("69f3"),B=r("b727").forEach,G=A("hidden"),M="Symbol",U="prototype",J=E("toPrimitive"),Y=F.set,D=F.getterFor(M),V=Object[U],z=o.Symbol,R=i("JSON","stringify"),Q=x.f,W=C.f,q=O.f,K=j.f,X=$("symbols"),Z=$("op-symbols"),tt=$("string-to-symbol-registry"),et=$("symbol-to-string-registry"),rt=$("wks"),nt=o.QObject,ot=!nt||!nt[U]||!nt[U].findChild,it=s&&f((function(){return 7!=y(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=Q(V,e);n&&delete V[e],W(t,e,r),n&&t!==V&&W(V,e,n)}:W,at=function(t,e){var r=X[t]=y(z[U]);return Y(r,{type:M,tag:t,description:e}),s||(r.description=e),r},st=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof z},ct=function(t,e,r){t===V&&ct(Z,e,r),b(t);var n=v(e,!0);return b(r),l(X,n)?(r.enumerable?(l(t,G)&&t[G][n]&&(t[G][n]=!1),r=y(r,{enumerable:g(0,!1)})):(l(t,G)||W(t,G,g(1,{})),t[G][n]=!0),it(t,n,r)):W(t,n,r)},ut=function(t,e){b(t);var r=h(e),n=w(r).concat(bt(r));return B(n,(function(e){s&&!lt.call(r,e)||ct(t,e,r[e])})),t},ft=function(t,e){return void 0===e?y(t):ut(y(t),e)},lt=function(t){var e=v(t,!0),r=K.call(this,e);return!(this===V&&l(X,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(X,e)||l(this,G)&&this[G][e])||r)},dt=function(t,e){var r=h(t),n=v(e,!0);if(r!==V||!l(X,n)||l(Z,n)){var o=Q(r,n);return!o||!l(X,n)||l(r,G)&&r[G][n]||(o.enumerable=!0),o}},pt=function(t){var e=q(h(t)),r=[];return B(e,(function(t){l(X,t)||l(I,t)||r.push(t)})),r},bt=function(t){var e=t===V,r=q(e?Z:h(t)),n=[];return B(r,(function(t){!l(X,t)||e&&!l(V,t)||n.push(X[t])})),n};if(c||(z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=L(t),r=function(t){this===V&&r.call(Z,t),l(this,G)&&l(this[G],e)&&(this[G][e]=!1),it(this,e,g(1,t))};return s&&ot&&it(V,e,{configurable:!0,set:r}),at(e,t)},_(z[U],"toString",(function(){return D(this).tag})),_(z,"withoutSetter",(function(t){return at(L(t),t)})),j.f=lt,C.f=ct,x.f=dt,S.f=O.f=pt,k.f=bt,H.f=function(t){return at(E(t),t)},s&&(W(z[U],"description",{configurable:!0,get:function(){return D(this).description}}),a||_(V,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:z}),B(w(rt),(function(t){P(t)})),n({target:M,stat:!0,forced:!c},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=z(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!s},{create:ft,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pt,getOwnPropertySymbols:bt}),n({target:"Object",stat:!0,forced:f((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(m(t))}}),R){var mt=!c||f((function(){var t=z();return"[null]"!=R([t])||"{}"!=R({a:t})||"{}"!=R(Object(t))}));n({target:"JSON",stat:!0,forced:mt},{stringify:function(t,e,r){var n,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(n=e,(p(e)||void 0!==t)&&!st(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!st(e))return e}),o[1]=e,R.apply(null,o)}})}z[U][J]||T(z[U],J,z[U].valueOf),N(z,M),I[G]=!0},a630:function(t,e,r){var n=r("23e7"),o=r("4df4"),i=r("1c7e"),a=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:o})},b3d7:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"home"}},[r("nav-bar",[r("div",{attrs:{slot:"center"},slot:"center"},[t._v("购物街")])]),r("tab-control",{directives:[{name:"show",rawName:"v-show",value:t.isTabFixed,expression:"isTabFixed"}],ref:"tabControlOutside",staticClass:"tab-control-outside",attrs:{titles:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),r("scroll",{ref:"scroll",staticClass:"content",attrs:{"probe-type":3,"pull-up-load":!0},on:{scroll:t.contentScroll,pullingUp:t.loadMore}},[r("home-swiper",{attrs:{banners:t.banners},on:{swiperImageLoad:t.swiperImageLoad}}),r("recommend-view",{attrs:{recommends:t.recommends}}),r("feature-view"),r("tab-control",{ref:"tabControl",attrs:{titles:["流行","新款","精选"]},on:{tabClick:t.tabClick}}),r("goods-list",{attrs:{goods:t.goods[t.currentType].list}})],1),r("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackUp,expression:"isShowBackUp"}],attrs:{"probe-type":3},nativeOn:{click:function(e){return t.backClick.apply(null,arguments)}}})],1)},o=[];function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t){if(Array.isArray(t))return i(t)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}r("fb6a"),r("b0c0");function c(t,e){if(t){if("string"===typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t){return a(t)||s(t)||c(t)||u()}var l=r("a7ac"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"tab-control"}},[r("ul",t._l(t.titles,(function(e,n){return r("li",{key:n,staticClass:"tab-control-item",class:{active:t.currentIndex===n},on:{click:function(e){return t.tabClick(n)}}},[r("span",[t._v(t._s(e))])])})),0)])},p=[],b={name:"TabControl",props:{titles:{type:Array,default:function(){return[]}}},data:function(){return{currentIndex:0}},methods:{tabClick:function(t){this.currentIndex=t,this.$emit("tabClick",t)}}},m=b,h=(r("6a4b"),r("2877")),v=Object(h["a"])(m,d,p,!1,null,"f7b91e5e",null),g=v.exports,y=r("6d71"),w=r("5d17"),S=r("fdd6"),O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("swiper",t._l(t.banners,(function(e,n){return r("swiper-item",{key:n},[r("a",{attrs:{href:e.link}},[r("img",{attrs:{src:e.image,alt:""},on:{load:t.imageLoad}})])])})),1)},k=[],x=r("dc2c"),C={name:"HomeSwiper",components:{Swiper:x["a"],SwiperItem:x["b"]},data:function(){return{isLoad:!1}},props:{banners:{type:Array,default:function(){return[]}}},methods:{imageLoad:function(){this.isLoad||(this.$emit("swiperImageLoad"),this.isLoad=!0)}}},j=C,T=Object(h["a"])(j,O,k,!1,null,null,null),_=T.exports,$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"recommend"},t._l(t.recommends,(function(e,n){return r("div",{key:n,staticClass:"recommend-item"},[r("a",{attrs:{href:e.link}},[r("img",{attrs:{src:e.image,alt:""}}),r("p",[t._v(t._s(e.title))])])])})),0)},A=[],I={name:"RecommendView",props:{recommends:{type:Array}}},L=I,E=(r("80f4"),Object(h["a"])(L,$,A,!1,null,null,null)),H=E.exports,P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"feature"},[n("a",{attrs:{href:"https://act.mogujie.com/zzlx67"}},[n("img",{attrs:{src:r("5cbe"),alt:""}})])])}],F={name:"FeatureName"},B=F,G=(r("74fa"),Object(h["a"])(B,P,N,!1,null,"38598be4",null)),M=G.exports,U=r("1bab");function J(){return Object(U["a"])({url:"/home/multidata"})}function Y(t,e){return Object(U["a"])({url:"/home/data",params:{type:t,page:e}})}var D=r("48ec"),V={name:"Home",components:{NavBar:l["a"],TabControl:g,GoodsList:y["a"],Scroll:w["a"],BackTop:S["a"],HomeSwiper:_,RecommendView:H,FeatureView:M},mixins:[D["b"],D["a"]],data:function(){return{banners:[],recommends:[],titles:[],goods:{pop:{page:0,list:[]},new:{page:0,list:[]},sell:{page:0,list:[]}},goodsType:["pop","new","sell"],currentType:"pop",tabOffsetTop:0,isTabFixed:!1,saveY:0}},created:function(){this.getHomeMultiData(),this.getHomeGoods("pop"),this.getHomeGoods("new"),this.getHomeGoods("sell")},activated:function(){this.$refs.scroll.scrollTo(0,this.saveY,0),this.$refs.scroll.refresh()},deactivated:function(){this.saveY=this.$refs.scroll.getScrollY(),this.$bus.$off("itemImageLoad",this.itemImgListener)},methods:{tabClick:function(t){this.currentType=this.goodsType[t],this.$refs.tabControlOutside.currentIndex=t,this.$refs.tabControl.currentIndex=t},contentScroll:function(t){this.listenShowBackTop(t),this.isTabFixed=-t.y>this.tabOffsetTop},loadMore:function(){this.getHomeGoods(this.currentType)},swiperImageLoad:function(){this.tabOffsetTop=this.$refs.tabControl.$el.offsetTop},getHomeMultiData:function(){var t=this;J().then((function(e){t.banners=e.data.banner.list,t.recommends=e.data.recommend.list})).catch((function(t){console.log(t)}))},getHomeGoods:function(t){var e=this,r=this.goods[t].page+1;Y(t,r).then((function(r){var n;(n=e.goods[t].list).push.apply(n,f(r.data.list)),e.goods[t].page++,e.$refs.scroll.finishPullUp()}))}}},z=V,R=(r("ba9f"),Object(h["a"])(z,n,o,!1,null,"57d9b8fb",null));e["default"]=R.exports},ba9f:function(t,e,r){"use strict";r("a1d8")},d28b:function(t,e,r){var n=r("746f");n("iterator")},e01a:function(t,e,r){"use strict";var n=r("23e7"),o=r("83ab"),i=r("da84"),a=r("5135"),s=r("861d"),c=r("9bf2").f,u=r("e893"),f=i.Symbol;if(o&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};u(d,f);var p=d.prototype=f.prototype;p.constructor=d;var b=p.toString,m="Symbol(test)"==String(f("test")),h=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=b.call(t);if(a(l,t))return"";var r=m?e.slice(7,-1):e.replace(h,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,r){var n=r("b622");e.f=n},fb6a:function(t,e,r){"use strict";var n=r("23e7"),o=r("861d"),i=r("e8b5"),a=r("23cb"),s=r("50c4"),c=r("fc6a"),u=r("8418"),f=r("b622"),l=r("1dde"),d=l("slice"),p=f("species"),b=[].slice,m=Math.max;n({target:"Array",proto:!0,forced:!d},{slice:function(t,e){var r,n,f,l=c(this),d=s(l.length),h=a(t,d),v=a(void 0===e?d:e,d);if(i(l)&&(r=l.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?o(r)&&(r=r[p],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return b.call(l,h,v);for(n=new(void 0===r?Array:r)(m(v-h,0)),f=0;h<v;h++,f++)h in l&&u(n,f,l[h]);return n.length=f,n}})}}]);
//# sourceMappingURL=chunk-380bb11f.fa874e36.js.map