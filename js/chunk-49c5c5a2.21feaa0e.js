(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49c5c5a2"],{"38c7":function(e,t,c){"use strict";c.r(t);var r=c("7a23"),l={class:"container",style:{"margin-top":"5rem !important"}},n={class:"d-flex justify-content-center mt-5"},o={key:0,class:"card p-4 mt-3"},a=Object(r["createElementVNode"])("h3",null,"搜尋結果",-1),d={class:"p-4"},s={class:"d-flex flex-column py-2"},i={class:"row border p-4"},b={class:"col-md-4 text-start d-flex align-items-center border-end mb-2"},m=Object(r["createElementVNode"])("span",{class:"h5"},"訂單編號: ",-1),O={class:"ps-2 h5"},u={class:"col-md-8 mb-2"},j={class:"p-0"},p={style:{"max-width":"200px","text-align":"start",width:"200px"}},E={style:{"max-width":"50px","text-align":"start",width:"50px"}},N={style:{"max-width":"100px","text-align":"start",width:"100px"}},V={class:"d-flex justify-content-between border-top pt-3"},h={class:"h3"},f={key:0,class:"d-flex align-items-center text-success text-align-center"},y={key:1,class:"d-flex align-items-center text-danger"},k={class:"d-flex justify-content-end"},g={key:1,class:"card p-4 mt-3"};function x(e,t,c,x,v,B){var D=Object(r["resolveComponent"])("FrontOrderDetailModal");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,[Object(r["createElementVNode"])("div",l,[Object(r["createElementVNode"])("div",n,[Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{class:"form-control me-2 orderSearch",type:"search","onUpdate:modelValue":t[0]||(t[0]=function(e){return v.order=e}),placeholder:"訂單搜尋","aria-label":"訂單搜尋"},null,512),[[r["vModelText"],v.order]]),Object(r["createElementVNode"])("button",{class:"btn btn-outline-success",onClick:t[1]||(t[1]=function(){return B.getOrderInfo&&B.getOrderInfo.apply(B,arguments)})},"搜尋")]),void 0!==v.orderList.id?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",o,[a,Object(r["createElementVNode"])("ul",d,[Object(r["createElementVNode"])("li",s,[Object(r["createElementVNode"])("div",i,[Object(r["createElementVNode"])("div",b,[m,Object(r["createElementVNode"])("span",O,Object(r["toDisplayString"])(v.orderList.id),1)]),Object(r["createElementVNode"])("div",u,[Object(r["createElementVNode"])("ul",j,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(v.orderList.products,(function(e,t){return Object(r["openBlock"])(),Object(r["createElementBlock"])("li",{class:"d-flex justify-content-around",key:t},[Object(r["createElementVNode"])("div",p,Object(r["toDisplayString"])(e.product.title),1),Object(r["createElementVNode"])("div",E," x"+Object(r["toDisplayString"])(e.qty),1),Object(r["createElementVNode"])("div",N," $ NT"+Object(r["toDisplayString"])(Math.floor(e.final_total)),1)])})),128))])]),Object(r["createElementVNode"])("div",V,[Object(r["createElementVNode"])("span",h,"總計: "+Object(r["toDisplayString"])(Math.floor(v.orderList.total))+"元",1),v.orderList.is_paid?(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",f,"已付款")):Object(r["createCommentVNode"])("",!0),v.orderList.is_paid?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",y,"未付款"))]),Object(r["createElementVNode"])("div",k,[v.orderList.is_paid?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createElementBlock"])("button",{key:0,class:"btn btn-primary",onClick:t[2]||(t[2]=function(t){return e.$router.push({path:"/cart/payment/".concat(v.orderList.id),query:{currentPage:3}})})}," 立即付款 ")),Object(r["createElementVNode"])("button",{class:"btn btn-success ms-2",onClick:t[3]||(t[3]=function(e){return B.openOrderDetailModal(v.orderList)})}," 查看明細 ")])])])])])):(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",g,"查無資料，請重新搜尋"))]),Object(r["createVNode"])(D,{order:v.tempOrder,ref:"FrontOrderDetailModal"},null,8,["order"])])}var v=c("1da1"),B=c("5530"),D=(c("96cf"),c("7b36")),w=c("365c"),S={name:"SearchSingleOrder",data:function(){return{order:this.$route.params.id,orderList:{},tempOrder:{}}},components:{FrontOrderDetailModal:D["a"]},methods:{openOrderDetailModal:function(e){this.tempOrder=Object(B["a"])({},e),this.$refs.FrontOrderDetailModal.openModal()},getOrderInfo:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(w["l"])(e.order);case 3:c=t.sent,c.success?e.orderList=c.order:(e.orderList={},console.log(e.orderList!=={})),t.next=12;break;case 7:t.prev=7,t.t0=t["catch"](0),e.orderList={},console.log(e.orderList==={}),console.log("error",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,7]])})))()}},mounted:function(){this.getOrderInfo()}},L=c("6b0d"),M=c.n(L);const C=M()(S,[["render",x]]);t["default"]=C},"68e0":function(e,t,c){"use strict";var r=c("7c2b"),l=c.n(r);t["a"]={methods:{openModal:function(){this.modal.show()},closeModal:function(){this.modal.hide()}},mounted:function(){this.modal=new l.a(this.$refs.modal)}}},"7b36":function(e,t,c){"use strict";c("b0c0");var r=c("7a23"),l={class:"modal fade",id:"modal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},n={class:"modal-dialog modal-xl",role:"document"},o={class:"modal-content border-0"},a=Object(r["createElementVNode"])("div",{class:"modal-header bg-dark text-white"},[Object(r["createElementVNode"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(r["createElementVNode"])("span",null,"訂單細節")]),Object(r["createElementVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),d={class:"modal-body"},s={class:"row"},i={class:"col-md-4"},b=Object(r["createElementVNode"])("h3",null,"用戶資料",-1),m={class:"table"},O={key:0},u=Object(r["createElementVNode"])("th",{style:{width:"100px"}},"姓名",-1),j=Object(r["createElementVNode"])("th",null,"Email",-1),p=Object(r["createElementVNode"])("th",null,"電話",-1),E=Object(r["createElementVNode"])("th",null,"地址",-1),N={class:"col-md-8"},V=Object(r["createElementVNode"])("h3",null,"訂單細節",-1),h={class:"table"},f=Object(r["createElementVNode"])("th",{style:{width:"100px"}},"訂單編號",-1),y=Object(r["createElementVNode"])("th",null,"下單時間",-1),k=Object(r["createElementVNode"])("th",null,"付款時間",-1),g={key:0},x={key:1},v=Object(r["createElementVNode"])("th",null,"付款狀態",-1),B={key:0,class:"text-success"},D={key:1,class:"text-muted"},w=Object(r["createElementVNode"])("th",null,"總金額",-1),S=Object(r["createElementVNode"])("h3",null,"選購商品",-1),L={class:"table"},M=Object(r["createElementVNode"])("thead",null,[Object(r["createElementVNode"])("tr")],-1),C={class:"text-end"},_=Object(r["createElementVNode"])("div",{class:"modal-footer border-0"},[Object(r["createElementVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ")],-1);function F(e,t,c,F,$,I){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",l,[Object(r["createElementVNode"])("div",n,[Object(r["createElementVNode"])("div",o,[a,Object(r["createElementVNode"])("div",d,[Object(r["createElementVNode"])("div",s,[Object(r["createElementVNode"])("div",i,[b,Object(r["createElementVNode"])("table",m,[$.tempOrder.user?(Object(r["openBlock"])(),Object(r["createElementBlock"])("tbody",O,[Object(r["createElementVNode"])("tr",null,[u,Object(r["createElementVNode"])("td",null,Object(r["toDisplayString"])($.tempOrder.user.name),1)]),Object(r["createElementVNode"])("tr",null,[j,Object(r["createElementVNode"])("td",null,Object(r["toDisplayString"])($.tempOrder.user.email),1)]),Object(r["createElementVNode"])("tr",null,[p,Object(r["createElementVNode"])("td",null,Object(r["toDisplayString"])($.tempOrder.user.tel),1)]),Object(r["createElementVNode"])("tr",null,[E,Object(r["createElementVNode"])("td",null,Object(r["toDisplayString"])($.tempOrder.user.address),1)])])):Object(r["createCommentVNode"])("",!0)])]),Object(r["createElementVNode"])("div",N,[V,Object(r["createElementVNode"])("table",h,[Object(r["createElementVNode"])("tbody",null,[Object(r["createElementVNode"])("tr",null,[f,Object(r["createElementVNode"])("td",null,Object(r["toDisplayString"])($.tempOrder.id),1)]),Object(r["createElementVNode"])("tr",null,[y,Object(r["createElementVNode"])("td",null,Object(r["toDisplayString"])(I.transDate($.tempOrder.create_at)),1)]),Object(r["createElementVNode"])("tr",null,[k,Object(r["createElementVNode"])("td",null,[$.tempOrder.paid_date?(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",g,Object(r["toDisplayString"])(I.transDate($.tempOrder.paid_date)),1)):(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",x,"時間不正確"))])]),Object(r["createElementVNode"])("tr",null,[v,Object(r["createElementVNode"])("td",null,[$.tempOrder.is_paid?(Object(r["openBlock"])(),Object(r["createElementBlock"])("strong",B,"已付款")):(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",D,"尚未付款"))])]),Object(r["createElementVNode"])("tr",null,[w,Object(r["createElementVNode"])("td",null," $"+Object(r["toDisplayString"])("".concat(e.numberWithCommas($.tempOrder.total))),1)])])]),S,Object(r["createElementVNode"])("table",L,[M,Object(r["createElementVNode"])("tbody",null,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])($.tempOrder.products,(function(t){return Object(r["openBlock"])(),Object(r["createElementBlock"])("tr",{key:t.id},[Object(r["createElementVNode"])("th",null,Object(r["toDisplayString"])(t.product.title),1),Object(r["createElementVNode"])("td",null,Object(r["toDisplayString"])(t.qty)+" / "+Object(r["toDisplayString"])(t.product.unit),1),Object(r["createElementVNode"])("td",C," $"+Object(r["toDisplayString"])("".concat(e.numberWithCommas($.tempOrder.final_total))),1)])})),128))])])])])]),_])])],512)}var $=c("68e0"),I={mixins:[$["a"]],props:{order:{type:Object,default:function(){return{}}}},data:function(){return{status:{},modal:"",tempOrder:{},isPaid:!1}},computed:{transDate:function(){return function(e){var t=new Date(1e3*e);return t.toLocaleDateString()}}},methods:{},watch:{order:function(){this.tempOrder=this.order}},mounted:function(){}},q=c("6b0d"),T=c.n(q);const J=T()(I,[["render",F]]);t["a"]=J},b0c0:function(e,t,c){var r=c("83ab"),l=c("5e77").EXISTS,n=c("e330"),o=c("9bf2").f,a=Function.prototype,d=n(a.toString),s=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,i=n(s.exec),b="name";r&&!l&&o(a,b,{configurable:!0,get:function(){try{return i(s,d(this))[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-49c5c5a2.21feaa0e.js.map