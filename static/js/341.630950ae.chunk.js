"use strict";(self.webpackChunkpizza_app=self.webpackChunkpizza_app||[]).push([[341],{8157:function(s,t,e){e.r(t),e.d(t,{default:function(){return p}});e(2791);var a={container:"Basket_container__px5xg",basketControl:"Basket_basketControl__kPsob",totalData:"Basket_totalData__5JyH5",basketButtons:"Basket_basketButtons__Pi8NW",link:"Basket_link__EnU05",backButton:"Basket_backButton__ZCMo3",payButton:"Basket_payButton__BxHRU",clearBasket:"Basket_clearBasket__EFbe2",emptyBasket:"Basket_emptyBasket__JM2uz"},i=e(3153),c=e(1087),n=e.p+"static/media/noPizzas.1744fdc7c5cd61602633.png";var l=e.p+"static/media/path.fc29ec73901b6f8218c91a0d69592416.svg",r=e(184),d=function(){return(0,r.jsxs)("div",{className:a.emptyBasket,children:[(0,r.jsx)("h1",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f"}),(0,r.jsxs)("p",{children:["\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u0435\u0439 \u0432\u0441\u0435\u0433\u043e, \u0432\u044b \u043d\u0435 \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u043b\u0438 \u0435\u0449\u0451 \u043f\u0438\u0446\u0446\u0443.",(0,r.jsx)("br",{}),"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0438\u0446\u0446\u0443, \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."]}),(0,r.jsx)("div",{children:(0,r.jsx)("img",{src:n,alt:"empty_basket"})}),(0,r.jsx)(c.rU,{to:"/pizza/items",className:a.link,children:(0,r.jsxs)("div",{className:a.backButton,children:[(0,r.jsx)("img",{src:l,alt:"path"}),(0,r.jsx)("p",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})]})})]})},o=e(8683);var m=e.p+"static/media/basket.dcd5168086a25b3307ba9f5524ca6e70.svg";var u=e.p+"static/media/can.ceafcffb34cece0b1462c3505b170d88.svg",k=e(5366),x={basketListItem:"BasketItem_basketListItem__JPGuV",imgAndTitleBlock:"BasketItem_imgAndTitleBlock__AgHJC",pizzaTitleDescription:"BasketItem_pizzaTitleDescription__7jFwZ",deletePizza:"BasketItem_deletePizza__v2Wog",chooseQuantity:"BasketItem_chooseQuantity__957SU"},h=function(s){var t=(0,i.T)();return(0,r.jsxs)("div",{className:x.basketListItem,children:[(0,r.jsxs)("div",{className:x.imgAndTitleBlock,children:[(0,r.jsx)("img",{src:s.imageUrl,alt:"pizza"}),(0,r.jsxs)("div",{className:x.pizzaTitleDescription,children:[(0,r.jsx)("b",{children:s.title}),(0,r.jsxs)("p",{children:[s.sortValue.type,", ",s.sortValue.size,"\u0441\u043c."]})]})]}),(0,r.jsxs)("div",{className:x.chooseQuantity,children:[(0,r.jsx)("div",{onClick:function(){return t((0,k.wz)(s))},children:"-"}),(0,r.jsx)("div",{children:s.count}),(0,r.jsx)("div",{onClick:function(){t((0,k.jX)({sortValue:{id:s.sortValue.id,size:s.sortValue.size,type:s.sortValue.type},imageUrl:s.imageUrl,title:s.title,price:s.price,count:1}))},children:"+"})]}),(0,r.jsxs)("div",{className:x.pizzaCost,children:[(0,r.jsx)("b",{children:s.count*s.price})," P"]}),(0,r.jsx)("div",{className:x.deletePizza,onClick:function(){return t((0,k.WZ)(s))},children:"+"})]})},j=function(){var s=(0,i.C)((function(s){return s.basket.items})),t=(0,i.C)((function(s){return s.basket.totalPrice})),e=(0,i.T)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:a.basketControl,children:[(0,r.jsxs)("div",{className:a.basketTitlImg,children:[(0,r.jsx)("img",{src:m,alt:"basket"}),(0,r.jsx)("h4",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"})]}),(0,r.jsxs)("div",{className:a.clearBasket,onClick:function(){return e((0,k.$o)())},children:[(0,r.jsx)("img",{src:u,alt:"garbage can"}),(0,r.jsx)("p",{children:"\u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})]}),(0,r.jsx)("div",{className:a.basketList,children:s.map((function(s){return(0,r.jsx)(h,(0,o.Z)({},s))}))}),(0,r.jsxs)("div",{className:a.totalData,children:[(0,r.jsxs)("div",{className:a.totalQuantity,children:["\u0412\u0441\u0435\u0433\u043e \u043f\u0438\u0446\u0446:"," ",(0,r.jsxs)("b",{className:a.totalQuantityText,children:[s.reduce((function(s,t){return s+t.count}),0)," \u0448\u0442."]})]}),(0,r.jsxs)("div",{className:a["total\u0421ost"],children:["\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430: ",(0,r.jsxs)("b",{className:a["total\u0421ostText"],children:[t,"\u0420"]})]})]}),(0,r.jsxs)("div",{className:a.basketButtons,children:[(0,r.jsx)(c.rU,{to:"/pizza/items",className:a.link,children:(0,r.jsxs)("div",{className:a.backButton,children:[(0,r.jsx)("img",{src:l,alt:"path"}),(0,r.jsx)("p",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})]})}),(0,r.jsx)("div",{className:a.payButton,children:"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441"})]})]})},p=function(){var s=(0,i.C)((function(s){return s.basket.items}));return(0,r.jsx)("main",{className:a.main,children:(0,r.jsx)("div",{className:a.container,children:s.length?(0,r.jsx)(j,{}):(0,r.jsx)(d,{})})})}}}]);
//# sourceMappingURL=341.630950ae.chunk.js.map