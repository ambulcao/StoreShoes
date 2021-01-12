(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),c=t(17),o=t.n(c),i=t(8),u=t(15),l=t(25),s=(t(73),t(86),t(87),t(13)),d=t(14),p=(t(88),t(54)),m=t.n(p);function f(){var n=Object(s.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');\n\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    background: #191920 url(",") no-repeat center top;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  /**\n  * Overwrites default input & button font\n  */\n  body, input, button {\n    font: 14px Roboto, sans-serif;\n  }\n\n  #root {\n    max-width: 1020px;\n    margin: 0 auto;\n    padding: 0 20px 50px;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"]);return f=function(){return n},n}var b=Object(d.a)(f(),m.a),g=t(22),x=t(20);function E(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  transition: opacity 0.2s;\n\n  &:hover {\n    opacity: 0.7;\n  }\n\n  div {\n    text-align: right;\n    margin-right: 10px;\n\n    strong {\n      display: block;\n      color: #fff;\n    }\n\n    span {\n      font-size: 12px;\n      color: #999;\n    }\n  }\n"]);return E=function(){return n},n}function O(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 50px 0;\n"]);return O=function(){return n},n}var v=d.b.div(O()),h=Object(d.b)(g.a)(E()),j=t(57),y=t.n(j);function k(){var n=Object(u.c)(function(n){return n.cart.length});return r.a.createElement(v,null,r.a.createElement(g.a,{to:"/"},r.a.createElement("img",{src:y.a,alt:"Rocketshoes"})),r.a.createElement(h,{to:"/cart"},r.a.createElement("div",null,r.a.createElement("strong",null,"Meu carrinho"),r.a.createElement("span",null,n," itens")),r.a.createElement(x.e,{size:36,color:"#fff"})))}var w=t(16),T=t.n(w),S=t(19),U=t(58),A=t(60),R=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format,D=t(59),C=t.n(D).a.create({baseURL:"https://my-json-server.typicode.com/guilhermerodz/rocketshoes-fake-api"});function z(n,e){return{type:"@cart/UPDATE_AMOUNT_REQUEST",id:n,amount:e}}function _(n,e){return{type:"@cart/UPDATE_AMOUNT_SUCCESS",id:n,amount:e}}var M=t(30);function N(){var n=Object(s.a)(["\n  /*\n  Old\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 20px; */\n\n  /*\n    Responsive\n    */\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  list-style: none;\n\n  li {\n    display: flex;\n    flex-direction: column;\n    background: #fff;\n    border-radius: 4px;\n    padding: 20px;\n\n    /*\n    Responsive\n    */\n    margin: 10px;\n    width: calc(33.33% - 20px);\n\n    @media (max-width: 950px) {\n      width: calc(50% - 20px);\n    }\n    @media (max-width: 650px) {\n      width: calc(100% - 20px);\n    }\n\n    img {\n      align-self: center;\n      max-width: 250px;\n    }\n\n    > strong {\n      font-size: 16px;\n      line-height: 20px;\n      color: #333;\n      margin-top: 5px;\n    }\n\n    > span {\n      font-size: 21px;\n      font-weight: bold;\n      margin: 5px 0 20px;\n    }\n\n    button {\n      background: #7159c1;\n      color: #fff;\n      border: 0;\n      border-radius: 4px;\n      overflow: hidden;\n      margin-top: auto;\n\n      display: flex;\n      align-items: center;\n      transition: background 0.2s;\n\n      &:hover {\n        background: ",";\n      }\n\n      div {\n        display: flex;\n        align-items: center;\n        padding: 12px;\n        background: rgba(0, 0, 0, 0.1);\n\n        svg {\n          margin-right: 5px;\n        }\n      }\n\n      span {\n        flex: 1;\n        text-align: center;\n        font-weight: bold;\n      }\n    }\n  }\n"]);return N=function(){return n},n}var I=d.b.ul(N(),Object(M.a)(.03,"#7159c1"));function Q(){var n=Object(a.useState)([]),e=Object(A.a)(n,2),t=e[0],c=e[1],o=Object(u.c)(function(n){return n.cart.reduce(function(n,e){return n[e.id]=e.amount,n},{})}),i=Object(u.b)();return Object(a.useEffect)(function(){function n(){return(n=Object(U.a)(T.a.mark(function n(){var e,t;return T.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,C.get("products");case 2:e=n.sent,t=e.data.map(function(n){return Object(S.a)(Object(S.a)({},n),{},{priceFormatted:R(n.price)})}),c(t);case 5:case"end":return n.stop()}},n)}))).apply(this,arguments)}!function(){n.apply(this,arguments)}()},[]),r.a.createElement(I,null,t.map(function(n){return r.a.createElement("li",{key:n.id},r.a.createElement("img",{src:n.image,alt:n.title}),r.a.createElement("strong",null,n.title),r.a.createElement("span",null,n.priceFormatted),r.a.createElement("button",{type:"button",onClick:function(){return e=n.id,void i(function(n){return{type:"@cart/ADD_REQUEST",id:n}}(e));var e}},r.a.createElement("div",null,r.a.createElement(x.b,{size:16,color:"#fff"})," ",o[n.id]||0),r.a.createElement("span",null,"ADICIONAR AO CARRINHO")))}))}function F(){var n=Object(s.a)(["\n  display: flex;\n  align-items: baseline;\n\n  span {\n    color: #999;\n    font-weight: bold;\n  }\n\n  strong {\n    font-size: 28px;\n    margin-left: 5px;\n  }\n"]);return F=function(){return n},n}function L(){var n=Object(s.a)(["\n  width: 100%;\n\n  thead th {\n    color: #999;\n    text-align: left;\n    padding: 12px;\n  }\n\n  tbody td {\n    padding: 12px;\n    border-bottom: 1px solid #eee;\n  }\n\n  img {\n    height: 100px;\n  }\n\n  strong {\n    display: block;\n    color: #333;\n  }\n\n  span {\n    display: block;\n    margin-top: 5px;\n    font-size: 18px;\n    font-weight: bold;\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n\n    input {\n      border: 1px solid #ddd;\n      border-radius: 4px;\n      color: #666;\n      padding: 6px;\n      width: 50px;\n\n      /* Disable input field arrows */\n      -moz-appearance: textfield;\n    }\n  }\n\n  button {\n    background: none;\n    border: 0;\n    padding: 6px;\n  }\n"]);return L=function(){return n},n}function P(){var n=Object(s.a)(["\n  padding: 30px;\n  background: #fff;\n  border-radius: 4px;\n\n  footer {\n    margin-top: 30px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    button {\n      background: #7159c1;\n      color: #fff;\n      border: 0;\n      border-radius: 4px;\n      padding: 12px 20px;\n      font-weight: bold;\n      text-transform: uppercase;\n      transition: background 0.2s;\n\n      &:hover {\n        background: ",";\n      }\n    }\n  }\n"]);return P=function(){return n},n}var B=d.b.div(P(),Object(M.a)(.03,"#7159c1")),q=d.b.table(L()),J=d.b.div(F());function V(){var n=Object(u.c)(function(n){return R(n.cart.reduce(function(n,e){return n+e.price*e.amount},0))}),e=Object(u.c)(function(n){return n.cart.map(function(n){return Object(S.a)(Object(S.a)({},n),{},{subTotal:R(n.price*n.amount)})})}),t=Object(u.b)();return r.a.createElement(B,null,r.a.createElement(q,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"PRODUTO"),r.a.createElement("th",null,"QTD"),r.a.createElement("th",null,"SUBTOTAL"),r.a.createElement("th",null))),r.a.createElement("tbody",null,e.map(function(n){return r.a.createElement("tr",{key:String(n.id)},r.a.createElement("td",null,r.a.createElement("img",{src:n.image,alt:n.title})),r.a.createElement("td",null,r.a.createElement("strong",null,n.title),r.a.createElement("span",null,n.priceFormatted)),r.a.createElement("td",null,r.a.createElement("div",null,r.a.createElement("button",{type:"button"},r.a.createElement(x.d,{size:20,color:"#7159c1",onClick:function(){return function(n){t(z(n.id,n.amount-1))}(n)}})),r.a.createElement("input",{type:"number",readOnly:!0,value:n.amount}),r.a.createElement("button",{type:"button"},r.a.createElement(x.a,{size:20,color:"#7159c1",onClick:function(){return function(n){t(z(n.id,n.amount+1))}(n)}})))),r.a.createElement("td",null,r.a.createElement("strong",null,n.subTotal)),r.a.createElement("td",null,r.a.createElement("button",{type:"submit"},r.a.createElement(x.c,{size:20,color:"#7159c1",onClick:function(){return t({type:"@cart/REMOVE",id:n.id})}}))))}))),r.a.createElement("footer",null,r.a.createElement("button",{type:"button"},"Finalizar pedido"),r.a.createElement(J,null,r.a.createElement("span",null,"TOTAL"),r.a.createElement("strong",null,n))))}function H(){return r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:Q}),r.a.createElement(i.a,{path:"/cart",component:V}))}var G=t(9),K=Object(G.a)(),W=t(18),X=t(61),Y=t(31);var Z=Object(W.c)({cart:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"@cart/ADD_SUCCESS":return Object(Y.a)(n,function(n){var t=e.product;n.push(t)});case"@cart/REMOVE":return Object(Y.a)(n,function(n){var t=n.findIndex(function(n){return n.id===e.id});t>=0&&n.splice(t,1)});case"@cart/UPDATE_AMOUNT_SUCCESS":return Object(Y.a)(n,function(n){var t=n.findIndex(function(n){return n.id===e.id});t>=0&&(n[t].amount=Number(e.amount))});default:return n}}}),$=t(10),nn=T.a.mark(tn),en=T.a.mark(an);function tn(n){var e,t,a,r,c,o,i,u;return T.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return e=n.id,s.next=3,Object($.select)(function(n){return n.cart.find(function(n){return n.id===e})});case 3:return t=s.sent,s.next=6,Object($.call)(C.get,"/stock/".concat(e));case 6:if(a=s.sent,r=a.data.amount,c=t?t.amount:0,!((o=c+1)>r)){s.next=13;break}return l.b.error("Quantidade solicitada fora de estoque!"),s.abrupt("return");case 13:if(!t){s.next=18;break}return s.next=16,Object($.put)(_(e,o));case 16:s.next=25;break;case 18:return s.next=20,Object($.call)(C.get,"/products/".concat(e));case 20:return i=s.sent,u=Object(S.a)(Object(S.a)({},i.data),{},{amount:1,priceFormatted:R(i.data.price)}),s.next=24,Object($.put)({type:"@cart/ADD_SUCCESS",product:u});case 24:K.push("/cart");case 25:case"end":return s.stop()}},nn)}function an(n){var e,t,a,r;return T.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(e=n.id,!((t=n.amount)<=0)){c.next=3;break}return c.abrupt("return");case 3:return c.next=5,Object($.call)(C.get,"stock/".concat(e));case 5:if(a=c.sent,r=a.data.amount,!(t>r)){c.next=10;break}return l.b.error("Quantidade solicitada fora de estoque!"),c.abrupt("return");case 10:return c.next=12,Object($.put)(_(e,t));case 12:case"end":return c.stop()}},en)}var rn=Object($.all)([Object($.takeLatest)("@cart/ADD_REQUEST",tn),Object($.takeLatest)("@cart/UPDATE_AMOUNT_REQUEST",an)]),cn=T.a.mark(on);function on(){return T.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object($.all)([rn]);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},cn)}var un=Object(X.a)({sagaMonitor:null}),ln=Object(W.a)(un),sn=Object(W.e)(Z,ln);un.run(on);var dn=sn;var pn=function(){return r.a.createElement(u.a,{store:dn},r.a.createElement(i.b,{history:K},r.a.createElement(k,null),r.a.createElement(H,null),r.a.createElement(b,null),r.a.createElement(l.a,{autoClose:3e3})))};o.a.render(r.a.createElement(pn,null),document.getElementById("root"))},54:function(n,e,t){n.exports=t.p+"static/media/background.38ea808a.svg"},57:function(n,e,t){n.exports=t.p+"static/media/logo.728ca744.svg"},64:function(n,e,t){n.exports=t(107)}},[[64,1,2]]]);
//# sourceMappingURL=main.3d0dfd48.chunk.js.map