(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14f7e44f"],{"0c78":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),a={class:"table mt-4"},l=Object(c["createElementVNode"])("thead",null,[Object(c["createElementVNode"])("tr",null,[Object(c["createElementVNode"])("th",null,"購買時間"),Object(c["createElementVNode"])("th",null,"Email"),Object(c["createElementVNode"])("th",null,"購買款項"),Object(c["createElementVNode"])("th",null,"應付金額"),Object(c["createElementVNode"])("th",null,"是否付款"),Object(c["createElementVNode"])("th",null,"編輯")])],-1),r=["textContent"],o={class:"list-unstyled"},d={class:"text-right"},s={class:"form-check form-switch"},i=["id","onUpdate:modelValue","onChange"],m=["for"],b={key:0},u={key:1},O={class:"btn-group"},p=["onClick"],j=["onClick"];function E(e,t,n,E,V,N){var g=Object(c["resolveComponent"])("Loading"),f=Object(c["resolveComponent"])("OrderModal"),h=Object(c["resolveComponent"])("DelModal"),k=Object(c["resolveComponent"])("Pagenation");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createVNode"])(g,{active:V.isLoading,"z-index":1060},null,8,["active"]),Object(c["createElementVNode"])("table",a,[l,Object(c["createElementVNode"])("tbody",null,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(V.orders,(function(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],{key:t},[V.orders.length?(Object(c["openBlock"])(),Object(c["createElementBlock"])("tr",{key:0,class:Object(c["normalizeClass"])({"text-secondary":!e.is_paid})},[Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(N.CreatedAt(e.create_at)),1),Object(c["createElementVNode"])("td",null,[e.user?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",{key:0,textContent:Object(c["toDisplayString"])(e.user.email)},null,8,r)):Object(c["createCommentVNode"])("",!0)]),Object(c["createElementVNode"])("td",null,[Object(c["createElementVNode"])("ul",o,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.products,(function(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("li",{key:t},Object(c["toDisplayString"])(e.product.title)+" 數量："+Object(c["toDisplayString"])(e.qty)+" "+Object(c["toDisplayString"])(e.product.unit),1)})),128))])]),Object(c["createElementVNode"])("td",d,Object(c["toDisplayString"])(e.total),1),Object(c["createElementVNode"])("td",null,[Object(c["createElementVNode"])("div",s,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{class:"form-check-input",type:"checkbox",id:"paidSwitch".concat(e.id),"onUpdate:modelValue":function(t){return e.is_paid=t},onChange:function(t){return N.updatePaid(e)}},null,40,i),[[c["vModelCheckbox"],e.is_paid]]),Object(c["createElementVNode"])("label",{class:"form-check-label",for:"paidSwitch".concat(e.id)},[e.is_paid?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",b,"已付款")):(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",u,"未付款"))],8,m)])]),Object(c["createElementVNode"])("td",null,[Object(c["createElementVNode"])("div",O,[Object(c["createElementVNode"])("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:function(t){return N.openModal(e)}}," 檢視 ",8,p),Object(c["createElementVNode"])("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:function(t){return N.openDelOrderModal(e)}}," 刪除 ",8,j)])])],2)):Object(c["createCommentVNode"])("",!0)],64)})),128))])]),Object(c["createVNode"])(f,{order:V.tempOrder,ref:"orderModal",onUpdatePaid:N.updatePaid},null,8,["order","onUpdatePaid"]),Object(c["createVNode"])(h,{item:V.tempOrder,ref:"delModal",onDelItem:N.delOrder},null,8,["item","onDelItem"]),Object(c["createVNode"])(k,{pages:V.pagination,onGetProduct:N.getOrders},null,8,["pages","onGetProduct"])],64)}var V=n("5530"),N=n("1da1"),g=(n("96cf"),n("6ff1")),f=(n("b0c0"),{class:"modal fade",id:"modal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"}),h={class:"modal-dialog modal-xl",role:"document"},k={class:"modal-content border-0"},y=Object(c["createElementVNode"])("div",{class:"modal-header bg-dark text-white"},[Object(c["createElementVNode"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(c["createElementVNode"])("span",null,"訂單細節")]),Object(c["createElementVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),v={class:"modal-body"},S={class:"row"},B={class:"col-md-4"},x=Object(c["createElementVNode"])("h3",null,"用戶資料",-1),D={class:"table"},M={key:0},C=Object(c["createElementVNode"])("th",{style:{width:"100px"}},"姓名",-1),w=Object(c["createElementVNode"])("th",null,"Email",-1),_=Object(c["createElementVNode"])("th",null,"電話",-1),L=Object(c["createElementVNode"])("th",null,"地址",-1),$={class:"col-md-8"},A=Object(c["createElementVNode"])("h3",null,"訂單細節",-1),P={class:"table"},T=Object(c["createElementVNode"])("th",{style:{width:"100px"}},"訂單編號",-1),F=Object(c["createElementVNode"])("th",null,"下單時間",-1),G=Object(c["createElementVNode"])("th",null,"付款時間",-1),R={key:0},z={key:1},U=Object(c["createElementVNode"])("th",null,"付款狀態",-1),I={key:0,class:"text-success"},q={key:1,class:"text-muted"},J=Object(c["createElementVNode"])("th",null,"總金額",-1),W=Object(c["createElementVNode"])("h3",null,"選購商品",-1),X={class:"table"},H=Object(c["createElementVNode"])("thead",null,[Object(c["createElementVNode"])("tr")],-1),K={class:"text-end"},Q={class:"d-flex justify-content-end"},Y={class:"form-check"},Z={class:"form-check-label",for:"flexCheckDefault"},ee={key:0},te={key:1},ne={class:"modal-footer"},ce=Object(c["createElementVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ae(e,t,n,a,l,r){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",f,[Object(c["createElementVNode"])("div",h,[Object(c["createElementVNode"])("div",k,[y,Object(c["createElementVNode"])("div",v,[Object(c["createElementVNode"])("div",S,[Object(c["createElementVNode"])("div",B,[x,Object(c["createElementVNode"])("table",D,[l.tempOrder.user?(Object(c["openBlock"])(),Object(c["createElementBlock"])("tbody",M,[Object(c["createElementVNode"])("tr",null,[C,Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(l.tempOrder.user.name),1)]),Object(c["createElementVNode"])("tr",null,[w,Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(l.tempOrder.user.email),1)]),Object(c["createElementVNode"])("tr",null,[_,Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(l.tempOrder.user.tel),1)]),Object(c["createElementVNode"])("tr",null,[L,Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(l.tempOrder.user.address),1)])])):Object(c["createCommentVNode"])("",!0)])]),Object(c["createElementVNode"])("div",$,[A,Object(c["createElementVNode"])("table",P,[Object(c["createElementVNode"])("tbody",null,[Object(c["createElementVNode"])("tr",null,[T,Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(l.tempOrder.id),1)]),Object(c["createElementVNode"])("tr",null,[F,Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(r.transDate(l.tempOrder.create_at)),1)]),Object(c["createElementVNode"])("tr",null,[G,Object(c["createElementVNode"])("td",null,[l.tempOrder.paid_date?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",R,Object(c["toDisplayString"])(r.transDate(l.tempOrder.paid_date)),1)):(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",z,"時間不正確"))])]),Object(c["createElementVNode"])("tr",null,[U,Object(c["createElementVNode"])("td",null,[l.tempOrder.is_paid?(Object(c["openBlock"])(),Object(c["createElementBlock"])("strong",I,"已付款")):(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",q,"尚未付款"))])]),Object(c["createElementVNode"])("tr",null,[J,Object(c["createElementVNode"])("td",null," $"+Object(c["toDisplayString"])("".concat(e.numberWithCommas(l.tempOrder.total))),1)])])]),W,Object(c["createElementVNode"])("table",X,[H,Object(c["createElementVNode"])("tbody",null,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(l.tempOrder.products,(function(t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("tr",{key:t.id},[Object(c["createElementVNode"])("th",null,Object(c["toDisplayString"])(t.product.title),1),Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(t.qty)+" / "+Object(c["toDisplayString"])(t.product.unit),1),Object(c["createElementVNode"])("td",K," $"+Object(c["toDisplayString"])("".concat(e.numberWithCommas(l.tempOrder.final_total))),1)])})),128))])]),Object(c["createElementVNode"])("div",Q,[Object(c["createElementVNode"])("div",Y,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":t[0]||(t[0]=function(e){return l.tempOrder.is_paid=e})},null,512),[[c["vModelCheckbox"],l.tempOrder.is_paid]]),Object(c["createElementVNode"])("label",Z,[l.tempOrder.is_paid?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",ee,"已付款")):(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",te,"未付款"))])])])])])]),Object(c["createElementVNode"])("div",ne,[ce,Object(c["createElementVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[1]||(t[1]=function(t){return e.$emit("update-paid",l.tempOrder)})}," 修改付款狀態 ")])])])],512)}var le=n("68e0"),re={mixins:[le["a"]],props:{order:{type:Object,default:function(){return{}}}},data:function(){return{status:{},modal:"",tempOrder:{},isPaid:!1}},computed:{transDate:function(){return function(e){var t=new Date(1e3*e);return t.toLocaleDateString()}}},methods:{},emits:["update-paid"],watch:{order:function(){this.tempOrder=this.order}},mounted:function(){}},oe=n("6b0d"),de=n.n(oe);const se=de()(re,[["render",ae]]);var ie=se,me=n("4239"),be=n("365c"),ue={data:function(){return{orders:{},isNew:!1,pagination:{},isLoading:!1,tempOrder:{},currentPage:1}},components:{Pagenation:me["a"],DelModal:g["a"],OrderModal:ie},computed:{CreatedAt:function(){return function(e){var t=new Date(1e3*e);return t.toLocaleDateString()}}},methods:{getOrders:function(){var e=arguments,t=this;return Object(N["a"])(regeneratorRuntime.mark((function n(){var c,a,l,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return c=e.length>0&&void 0!==e[0]?e[0]:1,t.currentPage=c,t.isLoading=!0,n.prev=3,n.next=6,Object(be["n"])(c);case 6:a=n.sent,a.success&&(t.orders=a.orders,t.pagination=a.pagination,t.isLoading=!1),n.next=16;break;case 10:n.prev=10,n.t0=n["catch"](3),t.isLoading=!1,l="錯誤訊息",r=n.t0.response,t.$store.commit("commonModule/SAVE_TOAST_MESSAGE",{res:r,status:l});case 16:case"end":return n.stop()}}),n,null,[[3,10]])})))()},openModal:function(e){this.tempOrder=Object(V["a"])({},e),this.isNew=!1,this.$refs.orderModal.openModal()},openDelOrderModal:function(e){this.tempOrder=Object(V["a"])({},e),this.$refs.delModal.openModal()},updatePaid:function(e){var t=this;return Object(N["a"])(regeneratorRuntime.mark((function n(){var c,a,l,r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.isLoading=!0,c={is_paid:e.is_paid},n.prev=2,n.next=5,Object(be["t"])({data:c},e.id);case 5:a=n.sent,a.success&&(l="更新付款狀態",t.$store.commit("commonModule/SAVE_TOAST_MESSAGE",{res:a,status:l}),t.isLoading=!1,t.$refs.orderModal.closeModal(),t.getOrders(t.currentPage)),n.next=15;break;case 9:n.prev=9,n.t0=n["catch"](2),t.isLoading=!1,r="更新付款狀態",o=n.t0.response,t.$store.commit("commonModule/SAVE_TOAST_MESSAGE",{res:o,status:r});case 15:case"end":return n.stop()}}),n,null,[[2,9]])})))()},delOrder:function(){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){var n,c,a,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.prev=1,t.next=4,Object(be["f"])(e.tempOrder.id);case 4:n=t.sent,c="刪除訂單",n.success&&(e.isLoading=!1,e.$store.commit("commonModule/SAVE_TOAST_MESSAGE",{res:n,status:c}),e.$refs.delModal.closeModal(),e.getOrders(e.currentPage)),t.next=15;break;case 9:t.prev=9,t.t0=t["catch"](1),e.isLoading=!1,a="錯誤訊息",l=t.t0.response,e.$store.commit("commonModule/SAVE_TOAST_MESSAGE",{res:l,status:a});case 15:case"end":return t.stop()}}),t,null,[[1,9]])})))()}},created:function(){this.getOrders()}};const Oe=de()(ue,[["render",E]]);t["default"]=Oe},4239:function(e,t,n){"use strict";var c=n("7a23"),a={"aria-label":"Page navigation example"},l={class:"pagination"},r=Object(c["createElementVNode"])("span",{"aria-hidden":"true"},"«",-1),o=[r],d=["onClick"],s=Object(c["createElementVNode"])("span",{"aria-hidden":"true"},"»",-1),i=[s];function m(e,t,n,r,s,m){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",null,[Object(c["createElementVNode"])("nav",a,[Object(c["createElementVNode"])("ul",l,[Object(c["createElementVNode"])("li",{class:Object(c["normalizeClass"])(["page-item",{disabled:!n.pages.has_pre}])},[Object(c["createElementVNode"])("a",{class:"page-link",onClick:t[0]||(t[0]=function(t){return e.$emit("get-product",n.pages.current_page-1)}),"aria-label":"Previous"},o)],2),(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(n.pages.total_pages,(function(t,a){return Object(c["openBlock"])(),Object(c["createElementBlock"])("li",{class:Object(c["normalizeClass"])(["page-item",{active:t===n.pages.current_page}]),key:a},[Object(c["createElementVNode"])("a",{class:"page-link",onClick:function(n){return e.$emit("get-product",t)}},Object(c["toDisplayString"])(t),9,d)],2)})),128)),Object(c["createElementVNode"])("li",{class:Object(c["normalizeClass"])(["page-item",{disabled:!n.pages.has_next}])},[Object(c["createElementVNode"])("a",{class:"page-link",onClick:t[1]||(t[1]=function(t){return e.$emit("get-product",n.pages.current_page+1)}),"aria-label":"Next"},i)],2)])])])}var b={name:"Pagenation",data:function(){return{}},props:{pages:{type:Object,default:function(){return{}}}}},u=n("6b0d"),O=n.n(u);const p=O()(b,[["render",m]]);t["a"]=p},"68e0":function(e,t,n){"use strict";var c=n("7c2b"),a=n.n(c);t["a"]={methods:{openModal:function(){this.modal.show()},closeModal:function(){this.modal.hide()}},mounted:function(){this.modal=new a.a(this.$refs.modal)}}},"6ff1":function(e,t,n){"use strict";var c=n("7a23"),a={class:"modal fade",id:"delModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},l={class:"modal-dialog",role:"document"},r={class:"modal-content border-0"},o={class:"modal-header bg-danger text-white"},d={class:"modal-title"},s=Object(c["createElementVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),i={class:"modal-body"},m=Object(c["createTextVNode"])(" 是否刪除 "),b={class:"text-danger"},u=Object(c["createTextVNode"])(" (刪除後將無法恢復)。 "),O={class:"modal-footer"},p=Object(c["createElementVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function j(e,t,n,j,E,V){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",a,[Object(c["createElementVNode"])("div",l,[Object(c["createElementVNode"])("div",r,[Object(c["createElementVNode"])("div",o,[Object(c["createElementVNode"])("h5",d,[Object(c["createElementVNode"])("span",null,"刪除 "+Object(c["toDisplayString"])(n.item.title),1)]),s]),Object(c["createElementVNode"])("div",i,[m,Object(c["createElementVNode"])("strong",b,Object(c["toDisplayString"])(n.item.title),1),u]),Object(c["createElementVNode"])("div",O,[p,Object(c["createElementVNode"])("button",{type:"button",class:"btn btn-danger",onClick:t[0]||(t[0]=function(t){return e.$emit("del-item")})},"確認刪除 ")])])])],512)}var E=n("7c2b"),V=n.n(E),N={props:{item:{}},data:function(){return{modal:""}},emits:["del-item"],methods:{openModal:function(){this.modal.show()},closeModal:function(){this.modal.hide()}},mounted:function(){this.modal=new V.a(this.$refs.modal)}},g=n("6b0d"),f=n.n(g);const h=f()(N,[["render",j]]);t["a"]=h},b0c0:function(e,t,n){var c=n("83ab"),a=n("5e77").EXISTS,l=n("e330"),r=n("9bf2").f,o=Function.prototype,d=l(o.toString),s=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,i=l(s.exec),m="name";c&&!a&&r(o,m,{configurable:!0,get:function(){try{return i(s,d(this))[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-14f7e44f.350a1e50.js.map