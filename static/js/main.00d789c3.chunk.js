(this["webpackJsonp02-store"]=this["webpackJsonp02-store"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),s=c(3),o=c.n(s),i=(c(9),c.p,c(10),c(4)),a=c(0);var l=function(e){var t=e.onSwitch,c=e.icon;return Object(a.jsx)("div",{children:Object(a.jsx)("span",{className:"material-icons",onClick:t,children:c})})};var m=function(e){var t=e.product;return console.log(t),Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("div",{className:"color",children:t.color}),Object(a.jsx)("img",{src:t.img,alt:t.name}),Object(a.jsxs)("div",{className:"action",children:[Object(a.jsxs)("div",{className:"price",children:["$",t.price]}),Object(a.jsx)("button",{children:"Add to cart"})]})]})};var j=function(e){var t=e.products.map((function(e,t){return Object(a.jsx)(m,{product:e},t)}));return Object(a.jsx)("div",{className:"cards-view",children:t})};var d=function(e){var t=e.product;return console.log(t),Object(a.jsxs)("div",{className:"cardrow",children:[Object(a.jsx)("div",{className:"image",children:Object(a.jsx)("img",{src:t.img,alt:t.name})}),Object(a.jsx)("div",{className:"title",children:t.name}),Object(a.jsx)("div",{className:"color",children:t.color}),Object(a.jsxs)("div",{className:"price",children:["$",t.price]}),Object(a.jsx)("div",{className:"button",children:Object(a.jsx)("button",{children:"Add to cart"})})]})};var u=function(e){var t=e.products.map((function(e,t){return Object(a.jsx)(d,{product:e},t)}));return Object(a.jsx)("div",{className:"cards-view",children:t})},b=[{name:"Nike Metcon 2",price:"130",color:"red",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"},{name:"Nike Metcon 2",price:"130",color:"green",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"},{name:"Nike Metcon 2",price:"130",color:"blue",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"},{name:"Nike Metcon 2",price:"130",color:"black",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"},{name:"Nike free run",price:"170",color:"black",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"},{name:"Nike Metcon 3",price:"150",color:"green",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"}];var g=function(e){var t=Object(r.useState)("view_module"),c=Object(i.a)(t,2),n=c[0],s=c[1],o="view_list"===n?Object(a.jsx)(j,{products:b}):Object(a.jsx)(u,{products:b});return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(l,{icon:n,onSwitch:function(e){var t=e.currentTarget.textContent;s("view_list"===t?"view_module":"view_list")}}),o]})};var h=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(g,{})})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),r(e),n(e),s(e),o(e)}))};o.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),v()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.00d789c3.chunk.js.map