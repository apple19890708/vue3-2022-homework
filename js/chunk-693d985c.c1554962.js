(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-693d985c"],{"057f":function(t,e,r){var n=r("c6b6"),o=r("fc6a"),c=r("241c").f,i=r("4dae"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return c(t)}catch(e){return i(a)}};t.exports.f=function(t){return a&&"Window"==n(t)?u(t):c(o(t))}},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,c,i){try{var a=t[c](i),u=a.value}catch(l){return void r(l)}a.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,c){var i=t.apply(e,r);function a(t){n(i,o,c,a,u,"next",t)}function u(t){n(i,o,c,a,u,"throw",t)}a(void 0)}))}}},"428f":function(t,e,r){var n=r("da84");t.exports=n},"4dae":function(t,e,r){var n=r("da84"),o=r("23cb"),c=r("07fa"),i=r("8418"),a=n.Array,u=Math.max;t.exports=function(t,e,r){for(var n=c(t),l=o(e,n),s=o(void 0===r?n:r,n),f=a(u(s-l,0)),d=0;l<s;l++,d++)i(f,d,t[l]);return f.length=d,f}},"4de4":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").filter,c=r("1dde"),i=c("filter");n({target:"Array",proto:!0,forced:!i},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));r("b64b"),r("a4d3"),r("4de4"),r("d3b7"),r("e439"),r("159b"),r("dbb4");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"746f":function(t,e,r){var n=r("428f"),o=r("1a2d"),c=r("e538"),i=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||i(e,t,{value:c.f(t)})}},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(C){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,c=Object.create(o.prototype),i=new P(n||[]);return c._invoke=N(t,r,i),c}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(C){return{type:"throw",arg:C}}}t.wrap=l;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",b={};function m(){}function g(){}function y(){}var v={};u(v,c,(function(){return this}));var O=Object.getPrototypeOf,j=O&&O(O(L([])));j&&j!==r&&n.call(j,c)&&(v=j);var w=y.prototype=m.prototype=Object.create(v);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,c,i,a){var u=s(t[o],t,c);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,a)}),(function(t){r("throw",t,i,a)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,a)}))}a(u.arg)}var o;function c(t,n){function c(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(c,c):c()}this._invoke=c}function N(t,e,r){var n=f;return function(o,c){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw c;return _()}r.method=o,r.arg=c;while(1){var i=r.delegate;if(i){var a=x(i,r);if(a){if(a===b)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?p:d,u.arg===b)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}function x(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,x(t,r),"throw"===r.method))return b;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return b}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,b;var c=o.arg;return c?c.done?(r[t.resultName]=c.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,b):c:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function V(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(V,this),this.reset(!0)}function L(t){if(t){var r=t[c];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:_}}function _(){return{value:e,done:!0}}return g.prototype=y,u(w,"constructor",y),u(y,"constructor",g),g.displayName=u(y,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,a,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},E(S.prototype),u(S.prototype,i,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,o,c){void 0===c&&(c=Promise);var i=new S(l(e,r,n,o),c);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(w),u(w,a,"Generator"),u(w,c,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return a.type="throw",a.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var c=this.tryEntries.length-1;c>=0;--c){var i=this.tryEntries[c],a=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var c=o;break}}c&&("break"===t||"continue"===t)&&c.tryLoc<=e&&e<=c.finallyLoc&&(c=null);var i=c?c.completion:{};return i.type=t,i.arg=e,c?(this.method="next",this.next=c.finallyLoc,b):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:L(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),b}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),c=r("d066"),i=r("2ba4"),a=r("c65b"),u=r("e330"),l=r("c430"),s=r("83ab"),f=r("4930"),d=r("d039"),h=r("1a2d"),p=r("e8b5"),b=r("1626"),m=r("861d"),g=r("3a9b"),y=r("d9b5"),v=r("825a"),O=r("7b0b"),j=r("fc6a"),w=r("a04b"),E=r("577e"),S=r("5c6c"),N=r("7c73"),x=r("df75"),V=r("241c"),k=r("057f"),P=r("7418"),L=r("06cf"),_=r("9bf2"),C=r("37e8"),T=r("d1e7"),A=r("f36a"),I=r("6eeb"),D=r("5692"),G=r("f772"),M=r("d012"),B=r("90e3"),F=r("b622"),$=r("e538"),J=r("746f"),q=r("d44e"),R=r("69f3"),z=r("b727").forEach,U=G("hidden"),Y="Symbol",Q="prototype",W=F("toPrimitive"),H=R.set,K=R.getterFor(Y),X=Object[Q],Z=o.Symbol,tt=Z&&Z[Q],et=o.TypeError,rt=o.QObject,nt=c("JSON","stringify"),ot=L.f,ct=_.f,it=k.f,at=T.f,ut=u([].push),lt=D("symbols"),st=D("op-symbols"),ft=D("string-to-symbol-registry"),dt=D("symbol-to-string-registry"),ht=D("wks"),pt=!rt||!rt[Q]||!rt[Q].findChild,bt=s&&d((function(){return 7!=N(ct({},"a",{get:function(){return ct(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=ot(X,e);n&&delete X[e],ct(t,e,r),n&&t!==X&&ct(X,e,n)}:ct,mt=function(t,e){var r=lt[t]=N(tt);return H(r,{type:Y,tag:t,description:e}),s||(r.description=e),r},gt=function(t,e,r){t===X&&gt(st,e,r),v(t);var n=w(e);return v(r),h(lt,n)?(r.enumerable?(h(t,U)&&t[U][n]&&(t[U][n]=!1),r=N(r,{enumerable:S(0,!1)})):(h(t,U)||ct(t,U,S(1,{})),t[U][n]=!0),bt(t,n,r)):ct(t,n,r)},yt=function(t,e){v(t);var r=j(e),n=x(r).concat(Et(r));return z(n,(function(e){s&&!a(Ot,r,e)||gt(t,e,r[e])})),t},vt=function(t,e){return void 0===e?N(t):yt(N(t),e)},Ot=function(t){var e=w(t),r=a(at,this,e);return!(this===X&&h(lt,e)&&!h(st,e))&&(!(r||!h(this,e)||!h(lt,e)||h(this,U)&&this[U][e])||r)},jt=function(t,e){var r=j(t),n=w(e);if(r!==X||!h(lt,n)||h(st,n)){var o=ot(r,n);return!o||!h(lt,n)||h(r,U)&&r[U][n]||(o.enumerable=!0),o}},wt=function(t){var e=it(j(t)),r=[];return z(e,(function(t){h(lt,t)||h(M,t)||ut(r,t)})),r},Et=function(t){var e=t===X,r=it(e?st:j(t)),n=[];return z(r,(function(t){!h(lt,t)||e&&!h(X,t)||ut(n,lt[t])})),n};if(f||(Z=function(){if(g(tt,this))throw et("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?E(arguments[0]):void 0,e=B(t),r=function(t){this===X&&a(r,st,t),h(this,U)&&h(this[U],e)&&(this[U][e]=!1),bt(this,e,S(1,t))};return s&&pt&&bt(X,e,{configurable:!0,set:r}),mt(e,t)},tt=Z[Q],I(tt,"toString",(function(){return K(this).tag})),I(Z,"withoutSetter",(function(t){return mt(B(t),t)})),T.f=Ot,_.f=gt,C.f=yt,L.f=jt,V.f=k.f=wt,P.f=Et,$.f=function(t){return mt(F(t),t)},s&&(ct(tt,"description",{configurable:!0,get:function(){return K(this).description}}),l||I(X,"propertyIsEnumerable",Ot,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:Z}),z(x(ht),(function(t){J(t)})),n({target:Y,stat:!0,forced:!f},{for:function(t){var e=E(t);if(h(ft,e))return ft[e];var r=Z(e);return ft[e]=r,dt[r]=e,r},keyFor:function(t){if(!y(t))throw et(t+" is not a symbol");if(h(dt,t))return dt[t]},useSetter:function(){pt=!0},useSimple:function(){pt=!1}}),n({target:"Object",stat:!0,forced:!f,sham:!s},{create:vt,defineProperty:gt,defineProperties:yt,getOwnPropertyDescriptor:jt}),n({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:wt,getOwnPropertySymbols:Et}),n({target:"Object",stat:!0,forced:d((function(){P.f(1)}))},{getOwnPropertySymbols:function(t){return P.f(O(t))}}),nt){var St=!f||d((function(){var t=Z();return"[null]"!=nt([t])||"{}"!=nt({a:t})||"{}"!=nt(Object(t))}));n({target:"JSON",stat:!0,forced:St},{stringify:function(t,e,r){var n=A(arguments),o=e;if((m(e)||void 0!==t)&&!y(t))return p(e)||(e=function(t,e){if(b(o)&&(e=a(o,this,t,e)),!y(e))return e}),n[1]=e,i(nt,null,n)}})}if(!tt[W]){var Nt=tt.valueOf;I(tt,W,(function(t){return a(Nt,this)}))}q(Z,Y),M[U]=!0},dbb4:function(t,e,r){var n=r("23e7"),o=r("83ab"),c=r("56ef"),i=r("fc6a"),a=r("06cf"),u=r("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,r,n=i(t),o=a.f,l=c(n),s={},f=0;while(l.length>f)r=o(n,e=l[f++]),void 0!==r&&u(s,e,r);return s}})},e439:function(t,e,r){var n=r("23e7"),o=r("d039"),c=r("fc6a"),i=r("06cf").f,a=r("83ab"),u=o((function(){i(1)})),l=!a||u;n({target:"Object",stat:!0,forced:l,sham:!a},{getOwnPropertyDescriptor:function(t,e){return i(c(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},fb44:function(t,e,r){"use strict";r.r(e);var n=r("7a23"),o={class:"text-end",style:{padding:"15px"}},c={style:{padding:"15px"}},i={class:"table align-middle"},a=Object(n["createElementVNode"])("thead",null,[Object(n["createElementVNode"])("tr",null,[Object(n["createElementVNode"])("th",null,"刪除"),Object(n["createElementVNode"])("th",null,"圖片"),Object(n["createElementVNode"])("th",null,"品名"),Object(n["createElementVNode"])("th",{style:{width:"150px"}},"數量/單位"),Object(n["createElementVNode"])("th",null,"總價")])],-1),u=["onClick","disabled"],l={key:0,class:"fas fa-spinner fa-pulse"},s=Object(n["createTextVNode"])(" x "),f={style:{width:"200px"}},d={class:"input-group input-group-sm"},h={class:"input-group mb-3"},p=["onUpdate:modelValue","onBlur","disabled"],b={class:"input-group-text",id:"basic-addon2"},m=Object(n["createElementVNode"])("td",{colspan:"4",class:"text-end"},"總計",-1),g={class:"fz-2 text-danger"},y={class:"border-0"},v=Object(n["createElementVNode"])("td",{colspan:"4",class:"text-end"},null,-1);function O(t,e,r,O,j,w){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["createElementVNode"])("div",o,[Object(n["createElementVNode"])("button",{class:"btn btn-outline-danger",type:"button",onClick:e[0]||(e[0]=function(){return w.deleteAllCarts&&w.deleteAllCarts.apply(w,arguments)})}," 清空購物車 ")]),Object(n["createElementVNode"])("div",c,[Object(n["createElementVNode"])("table",i,[a,Object(n["createElementVNode"])("tbody",null,[j.cart.carts?(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],{key:0},Object(n["renderList"])(j.cart.carts,(function(t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",{key:t.id},[Object(n["createElementVNode"])("td",null,[Object(n["createElementVNode"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(e){return w.removeCartItem(t.id)},disabled:j.loadingStatus.loadingItem===t.id},[j.loadingStatus.loadingItem===t.id?(Object(n["openBlock"])(),Object(n["createElementBlock"])("i",l)):Object(n["createCommentVNode"])("",!0),s],8,u)]),Object(n["createElementVNode"])("td",f,[Object(n["createElementVNode"])("div",{style:Object(n["normalizeStyle"])([{backgroundImage:"url(".concat(t.product.imageUrl,")")},{height:"100px","background-size":"cover","background-position":"center"}])},null,4)]),Object(n["createElementVNode"])("td",null,Object(n["toDisplayString"])(t.product.title),1),Object(n["createElementVNode"])("td",null,[Object(n["createElementVNode"])("div",d,[Object(n["createElementVNode"])("div",h,[Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":function(e){return t.qty=e},onBlur:function(e){return w.updateCart(t)},disabled:j.loadingStatus.loadingItem===t.id,min:"1",type:"number",class:"form-control"},null,40,p),[[n["vModelText"],t.qty,void 0,{number:!0}]]),Object(n["createElementVNode"])("span",b,Object(n["toDisplayString"])(t.product.unit),1)])])]),Object(n["createElementVNode"])("td",null," NT $"+Object(n["toDisplayString"])(t.final_total),1)])})),128)):Object(n["createCommentVNode"])("",!0)]),Object(n["createElementVNode"])("tfoot",null,[Object(n["createElementVNode"])("tr",null,[m,Object(n["createElementVNode"])("td",null,[Object(n["createElementVNode"])("span",g,"NT$"+Object(n["toDisplayString"])(j.cart.total),1)])]),Object(n["createElementVNode"])("tr",y,[v,Object(n["createElementVNode"])("td",null,[Object(n["createElementVNode"])("button",{type:"button",class:"fz-2 text-end btn btn-outline-danger",onClick:e[1]||(e[1]=function(){return w.createOrder&&w.createOrder.apply(w,arguments)})}," 送出訂單 ")])])])])])])}var j=r("1da1"),w=r("5530"),E=(r("96cf"),r("e9c4"),r("5502")),S=r("365c"),N={name:"CartCheckProducts",data:function(){return{cart:[],loadingStatus:{loadingItem:""}}},computed:Object(w["a"])({},Object(E["b"])("commonModule",["carts"])),watch:{carts:function(){this.cart=JSON.parse(JSON.stringify(this.carts))}},methods:{createOrder:function(){0!==this.cart.carts.length?this.$router.push({path:"/cart/order",query:{currentPage:2}}):alert("購物車內無商品")},getCart:function(){this.$store.dispatch("commonModule/getCart")},deleteAllCarts:function(){var t=this;Object(S["g"])().then((function(e){var r="刪除所有商品";t.$store.commit("commonModule/SAVE_TOAST_MESSAGE",{res:e,status:r}),t.getCart()})).catch((function(t){console.log(t)}))},removeCartItem:function(t){var e=this;Object(S["h"])(t).then((function(t){var r="刪除單筆商品";e.$store.commit("commonModule/SAVE_TOAST_MESSAGE",{res:t,status:r}),e.loadingStatus.loadingItem="",e.getCart()})).catch((function(t){var r="刪除單筆商品",n=t.response;e.$store.commit("commonModule/SAVE_TOAST_MESSAGE",{res:n,status:r})}))},updateCart:function(t){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function r(){var n,o,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,e.loadingStatus.loadingItem=t.id,n={product_id:t.product_id,qty:t.qty},r.next=5,Object(S["r"])({data:n},t.id);case 5:o=r.sent,o&&(c="更新商品數量",e.$store.commit("commonModule/SAVE_TOAST_MESSAGE",{res:o,status:c}),e.loadingStatus.loadingItem="",e.getCart()),r.next=13;break;case 9:r.prev=9,r.t0=r["catch"](0),console.log(r.t0),e.loadingStatus.loadingItem="";case 13:case"end":return r.stop()}}),r,null,[[0,9]])})))()}},created:function(){this.getCart()}},x=r("6b0d"),V=r.n(x);const k=V()(N,[["render",O]]);e["default"]=k}}]);
//# sourceMappingURL=chunk-693d985c.c1554962.js.map