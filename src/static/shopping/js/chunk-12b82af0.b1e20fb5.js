(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12b82af0"],{"0330":function(t,s,e){"use strict";e("3399")},"0768":function(t,s,e){"use strict";e("d6b3")},"0af8":function(t,s,e){"use strict";e("3aa2")},"0d9a":function(t,s,e){"use strict";e("908b")},1148:function(t,s,e){"use strict";var i=e("a691"),a=e("1d80");t.exports=function(t){var s=String(a(this)),e="",o=i(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(s+=s))1&o&&(e+=s);return e}},3399:function(t,s,e){},"3aa2":function(t,s,e){},"408a":function(t,s,e){var i=e("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=i(t))throw TypeError("Incorrect invocation");return+t}},"508b":function(t,s,e){},5817:function(t,s,e){"use strict";e("9bf5")},"6ab7":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"detail"}},[e("detail-nav-bar",{ref:"nav",on:{titleClick:t.titleClick}}),e("scroll",{ref:"scroll",staticClass:"content",attrs:{"pull-up-load":!0,"probe-type":3},on:{scroll:t.contentScroll}},[e("detail-swiper",{attrs:{"top-images":t.topImages}}),e("detail-base-info",{attrs:{goods:t.goods}}),e("detail-shop-info",{attrs:{shop:t.shop}}),e("detail-goods-info",{attrs:{detailInfo:t.detailInfo},on:{imgLoad:t.imgLoad}}),e("detail-param-info",{ref:"params",attrs:{itemParams:t.itemParams}}),e("detail-comments",{ref:"comments",attrs:{comments:t.comments}}),e("goods-list",{ref:"recommend",attrs:{goods:t.recommend}},[e("h3",{attrs:{slot:"title"},slot:"title"},[t._v("【更多推荐】")])])],1),e("detail-bottom-bar",{on:{addChart:t.addChart}}),e("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackUp,expression:"isShowBackUp"}],attrs:{"probe-type":3},nativeOn:{click:function(s){return t.backClick.apply(null,arguments)}}})],1)},a=[],o=e("5d17"),n=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("nav-bar",{staticClass:"detail"},[i("div",{staticClass:"back",attrs:{slot:"left"},on:{click:t.backClick},slot:"left"},[i("img",{attrs:{src:e("7a74"),alt:""}})]),i("div",{staticClass:"titles",attrs:{slot:"center"},slot:"center"},t._l(t.titles,(function(s,e){return i("span",{key:e,class:{active:t.currentTitle===e},on:{click:function(s){return t.titleClick(e)}}},[t._v(t._s(s))])})),0)])},r=[],c=e("a7ac"),l={name:"DetailNavBar",components:{NavBar:c["a"]},data:function(){return{titles:["商品","参数","评论","推荐"],currentTitle:0}},methods:{titleClick:function(t){this.currentTitle=t,this.$emit("titleClick",t)},backClick:function(){this.$router.back()}}},u=l,d=(e("0330"),e("2877")),m=Object(d["a"])(u,n,r,!1,null,"efb5e2b4",null),f=m.exports,h=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("swiper",{staticClass:"detail-swiper"},t._l(t.topImages,(function(s,i){return e("swiper-item",{key:i},[e("img",{attrs:{src:s,alt:""},on:{load:t.imageLoad}})])})),1)},p=[],v=e("dc2c"),_={name:"DetailSwiper",data:function(){return{isLoad:!1}},components:{Swiper:v["a"],SwiperItem:v["b"]},props:{topImages:{type:Array,default:function(){return[]}}},methods:{imageLoad:function(){}}},g=_,b=(e("0af8"),Object(d["a"])(g,h,p,!1,null,null,null)),C=b.exports,w=function(){var t=this,s=t.$createElement,e=t._self._c||s;return 0!==Object.keys(t.goods).length?e("div",{staticClass:"base-info"},[e("h3",{staticClass:"title"},[t._v(t._s(t.goods.title))]),e("div",{staticClass:"price"},[e("span",{staticClass:"now-price"},[t._v(t._s(t.goods.price))]),e("span",{staticClass:"old-price"},[t._v(t._s(t.goods.oldPrice))]),t.goods.discount?e("span",{staticClass:"discount"},[t._v(t._s(t.goods.discount))]):t._e()]),e("div",{staticClass:"other-info"},[e("span",[t._v(t._s(t.goods.columns[0]))]),e("span",[t._v(t._s(t.goods.columns[1]))]),e("span",[t._v(t._s(t.goods.services[t.goods.services.length-1].name))])]),e("div",{staticClass:"services"},t._l(t.goods.services,(function(s,i){return e("div",{key:i},[s.icon?e("img",{attrs:{src:s.icon,alt:""}}):t._e(),e("span",[t._v(t._s(s.name))])])})),0)]):t._e()},k=[],I={name:"DetailBaseInfo",props:{goods:{type:Object,default:function(){return null}}}},y=I,$=(e("ee55"),Object(d["a"])(y,w,k,!1,null,"60bd303c",null)),x=$.exports,D=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shop-info"},[e("div",{staticClass:"shop-top"},[e("img",{attrs:{src:t.shop.shopLogo,alt:""}}),e("span",[t._v(t._s(t.shop.name))])]),e("div",{staticClass:"shop-middle"},[e("div",{staticClass:"shop-middle-left"},[e("div",{staticClass:"box"},[e("div",[e("div",{staticClass:"num"},[t._v(t._s(t.sellNum))]),e("div",[t._v("总销量")])]),e("div",[e("div",{staticClass:"num"},[t._v(t._s(t.shop.goodsNum))]),e("div",[t._v("全部宝贝")])])])]),e("div",{staticClass:"shop-middle-right"},t._l(t.shop.score,(function(s,i){return e("div",{key:i,staticClass:"score-item"},[e("span",[t._v(t._s(s.name))]),e("span",{staticClass:"score",class:{"score-better":s.isBetter}},[t._v(t._s(s.score))]),e("span",{staticClass:"better",class:{"score-better":s.isBetter}},[t._v(t._s(s.isBetter?"高":"低"))])])})),0)]),e("div",{staticClass:"shop-bottom"},[e("a",{attrs:{href:t.shop.shopUrl}},[t._v("进店逛逛")])])])},O=[],j=(e("b680"),{name:"DetailShopInfo",props:{shop:{type:Object,default:function(){return{}}}},computed:{sellNum:function(){return this.shop.sells<1e4?this.shop.sells:(this.shop.sells/1e4).toFixed(1)+"万"}}}),P=j,T=(e("0768"),Object(d["a"])(P,D,O,!1,null,"f8f8e72e",null)),L=T.exports,B=function(){var t=this,s=t.$createElement,e=t._self._c||s;return 0!==Object.keys(t.detailInfo).length?e("div",{staticClass:"goods-info"},[e("p",{staticClass:"good-desc"},[t._v(t._s(t.detailInfo.desc))]),e("div",{staticClass:"images"},t._l(t.detailInfo.detailImage[0].list,(function(s,i){return e("img",{key:i,attrs:{src:s,alt:""},on:{load:t.imgLoad}})})),0)]):t._e()},N=[],S={name:"DetailGoodsInfo",props:{detailInfo:{type:Object,default:function(){return{}}}},data:function(){return{counter:0,imgLength:0}},methods:{imgLoad:function(){this.counter++,this.counter===this.imgLength&&this.$emit("imgLoad")}},watch:{detailInfo:function(){this.imgLength=this.detailInfo.detailImage[0].list.length}}},E=S,Y=(e("8ea3"),Object(d["a"])(E,B,N,!1,null,null,null)),F=Y.exports,U=function(){var t=this,s=t.$createElement,e=t._self._c||s;return 0!==Object.keys(t.itemParams).length?e("div",{staticClass:"param-info"},[e("div",{staticClass:"info"},[e("h3",[t._v("【商品参数】")]),e("table",{attrs:{border:"1"}},t._l(t.itemParams.info.set,(function(s,i){return e("tr",{key:i},[e("td",[t._v(t._s(s.key))]),e("td",[t._v(t._s(s.value))])])})),0)]),e("div",{staticClass:"rule"},[e("h3",[t._v("【尺码说明】")]),e("table",{attrs:{border:"1"}},t._l(t.itemParams.rule.tables[0],(function(s,i){return e("tr",{key:i},t._l(s,(function(s,i){return e("td",{key:i},[t._v(t._s(s))])})),0)})),0),e("p",[t._v(t._s(t.itemParams.rule.disclaimer))])]),t.itemParams.info.images?e("div",{staticClass:"info-img"},[e("img",{attrs:{src:t.itemParams.info.images[0],alt:""}})]):t._e()]):t._e()},G=[],R={name:"DetailParamInfo",props:{itemParams:{type:Object,default:function(){return{}}}}},J=R,M=(e("c895"),Object(d["a"])(J,U,G,!1,null,"6d5aaa6e",null)),A=M.exports,W=function(){var t=this,s=t.$createElement,e=t._self._c||s;return 0!==Object.keys(t.comments).length?e("div",{staticClass:"comments"},[e("div",{staticClass:"top-bar"},[e("h3",[t._v("用户评价")]),e("span",[t._v("更多("+t._s(t.comments.cRate)+")")])]),0!==Object.keys(t.comments.list[0]).length?e("div",{staticClass:"first-comment"},[e("div",{staticClass:"user"},[e("img",{attrs:{src:t.comments.list[0].user.avatar,alt:""}}),e("span",[t._v(t._s(t.comments.list[0].user.uname))])]),e("div",{staticClass:"content"},[e("p",[t._v(t._s(t.comments.list[0].content))]),e("span",{staticClass:"date"},[t._v(t._s(t._f("showDate")(1e3*t.comments.list[0].created)))]),e("span",[t._v(" "+t._s(t.comments.list[0].style))]),t.comments.list[0].images?e("div",{staticClass:"images"},t._l(t.comments.list[0].images,(function(t,s){return e("img",{key:s,attrs:{src:t,alt:""}})})),0):t._e()])]):e("div",[t._v("暂无评论")])]):t._e()},q=[],z={name:"DetailComments",props:{comments:{type:Object,default:function(){return{}}}},filters:{showDate:function(t){var s=new Date(t);return s.getFullYear()+"-"+s.getMonth()+"-"+s.getDate()}}},H=z,K=(e("5817"),Object(d["a"])(H,W,q,!1,null,"b203b79e",null)),Q=K.exports,V=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"bottom-bar"},[t._m(0),e("div",{staticClass:"bottom-bar-right"},[e("a",{staticClass:"chart",attrs:{href:"#"},on:{click:t.addChart}},[t._v("加入购物车")]),e("a",{staticClass:"buy-btn",attrs:{href:"#"}},[t._v("购买")])])])},X=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"bottom-bar-left"},[e("div",{staticClass:"service-staff"},[e("span",{staticClass:"icon"}),e("p",[t._v("客服")])]),e("div",{staticClass:"shop"},[e("span",{staticClass:"icon"}),e("p",[t._v("店铺")])]),e("div",{staticClass:"collections"},[e("span",{staticClass:"icon"}),e("p",[t._v("收藏")])])])}],Z={name:"DetailBottomBar",methods:{addChart:function(){this.$emit("addChart")}}},tt=Z,st=(e("0d9a"),Object(d["a"])(tt,V,X,!1,null,"1899df9d",null)),et=st.exports,it=e("fdd6"),at=e("6d71");function ot(t,s){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")}e("b0c0");var nt=e("1bab");function rt(t){return Object(nt["a"])({url:"/detail",params:{iid:t}})}function ct(){return Object(nt["a"])({url:"/recommend"})}var lt=function t(s,e,i){ot(this,t),this.title=s.title,this.price=s.price,this.oldPrice=s.oldPrice,this.discount=s.discountDesc,this.columns=e,this.services=i,this.lowNowPrice=s.lowNowPrice},ut=function t(s){ot(this,t),this.name=s.name,this.shopLogo=s.shopLogo,this.shopUrl=s.shopUrl,this.sells=s.cSells,this.goodsNum=s.cGoods,this.score=s.score},dt=e("48ec"),mt={name:"Detail",data:function(){return{iid:null,topImages:[],goods:{},shop:{},detailInfo:{},itemParams:{},comments:{},recommend:[],themeTopYs:[],message:"",show:!1}},mixins:[dt["b"],dt["a"]],methods:{imgLoad:function(){this.$refs.scroll.refresh(),this.themeTopYs.push(0),this.themeTopYs.push(this.$refs.params.$el.offsetTop),this.themeTopYs.push(this.$refs.comments.$el.offsetTop),this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)},titleClick:function(t){this.$refs.scroll.scrollTo(0,-this.themeTopYs[t],100)},contentScroll:function(t){this.positonY=-t.y;for(var s=this.themeTopYs.length-1;s>=0;s--)if(this.positonY>=this.themeTopYs[s]){this.$refs.nav.currentTitle=s;break}this.listenShowBackTop(t)},addChart:function(){var t=this,s={};s.iid=this.iid,s.img=this.topImages[0],s.title=this.goods.title,s.lowNowPrice=this.goods.lowNowPrice,this.$store.dispatch("addChart",s).then((function(s){t.$toast.show(s)}))}},components:{Scroll:o["a"],DetailNavBar:f,DetailSwiper:C,DetailBaseInfo:x,DetailShopInfo:L,DetailGoodsInfo:F,DetailParamInfo:A,DetailComments:Q,GoodsList:at["a"],DetailBottomBar:et,BackTop:it["a"]},created:function(){var t=this;this.iid=this.$route.params.iid,rt(this.iid).then((function(s){var e=s.result;t.topImages=e.itemInfo.topImages,t.goods=new lt(e.itemInfo,e.columns,e.shopInfo.services),t.shop=new ut(e.shopInfo),t.detailInfo=e.detailInfo,t.itemParams=e.itemParams,0!==e.rate.cRate&&(t.comments=e.rate)})),ct().then((function(s){t.recommend=s.data.list}))},destroyed:function(){this.$bus.$off("itemImageLoad",this.itemImgListener)}},ft=mt,ht=(e("75f2"),Object(d["a"])(ft,i,a,!1,null,"67fcb8fe",null));s["default"]=ht.exports},"75f2":function(t,s,e){"use strict";e("9d9c")},"7a74":function(t,s,e){t.exports=e.p+"img/back.26df9036.svg"},"8ea3":function(t,s,e){"use strict";e("508b")},"908b":function(t,s,e){},"9b35":function(t,s,e){},"9bf5":function(t,s,e){},"9d9c":function(t,s,e){},b680:function(t,s,e){"use strict";var i=e("23e7"),a=e("a691"),o=e("408a"),n=e("1148"),r=e("d039"),c=1..toFixed,l=Math.floor,u=function(t,s,e){return 0===s?e:s%2===1?u(t,s-1,e*t):u(t*t,s/2,e)},d=function(t){var s=0,e=t;while(e>=4096)s+=12,e/=4096;while(e>=2)s+=1,e/=2;return s},m=function(t,s,e){var i=-1,a=e;while(++i<6)a+=s*t[i],t[i]=a%1e7,a=l(a/1e7)},f=function(t,s){var e=6,i=0;while(--e>=0)i+=t[e],t[e]=l(i/s),i=i%s*1e7},h=function(t){var s=6,e="";while(--s>=0)if(""!==e||0===s||0!==t[s]){var i=String(t[s]);e=""===e?i:e+n.call("0",7-i.length)+i}return e},p=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){c.call({})}));i({target:"Number",proto:!0,forced:p},{toFixed:function(t){var s,e,i,r,c=o(this),l=a(t),p=[0,0,0,0,0,0],v="",_="0";if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(v="-",c=-c),c>1e-21)if(s=d(c*u(2,69,1))-69,e=s<0?c*u(2,-s,1):c/u(2,s,1),e*=4503599627370496,s=52-s,s>0){m(p,0,e),i=l;while(i>=7)m(p,1e7,0),i-=7;m(p,u(10,i,1),0),i=s-1;while(i>=23)f(p,1<<23),i-=23;f(p,1<<i),m(p,1,1),f(p,2),_=h(p)}else m(p,0,e),m(p,1<<-s,0),_=h(p)+n.call("0",l);return l>0?(r=_.length,_=v+(r<=l?"0."+n.call("0",l-r)+_:_.slice(0,r-l)+"."+_.slice(r-l))):_=v+_,_}})},c895:function(t,s,e){"use strict";e("9b35")},d6b3:function(t,s,e){},ee55:function(t,s,e){"use strict";e("f4d0")},f4d0:function(t,s,e){}}]);
//# sourceMappingURL=chunk-12b82af0.b1e20fb5.js.map