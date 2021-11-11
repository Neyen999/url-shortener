(this["webpackJsonpurl-shortening"]=this["webpackJsonpurl-shortening"]||[]).push([[0],{13:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),i=s(5),a=s.n(i),r=s(2),l=s(0),j=function(){var e=Object(c.useState)(!0),t=Object(r.a)(e,2),s=t[0],n=t[1];return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsxs)("div",{className:"header--nav",children:[Object(l.jsx)("h1",{children:"Shortly"}),Object(l.jsxs)("nav",{className:"navbar ".concat(!0===s?"hide":"show"),children:[Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#features",children:"Features"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#resources",children:"Pricing"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#company",children:"Resources"})})]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"signup",children:[Object(l.jsx)("button",{className:"login",children:"Login"}),Object(l.jsx)("button",{className:"sign",children:"Sign Up"})]})]})]}),Object(l.jsx)("div",{children:Object(l.jsx)("i",{onClick:function(){return n(!s)},className:"fas fa-bars"})})]})},d=s(4),o=s.n(d),b=s(6),h=s.p+"static/media/illustration-working.c9b5ef54.svg",u=function(e){var t=e.inputInitialValue,s=e.setInitialValue,c=e.data,n=e.setData,i=e.loading,a=e.setLoading,r=function(){var e=Object(b.a)(o.a.mark((function e(i){var r,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.preventDefault(),a(!0),e.next=4,fetch("https://api.shrtco.de/v2/shorten?"+"url=".concat(t));case 4:return r=e.sent,e.next=7,r.json();case 7:l=e.sent,n(c.concat(l)),a(!1),s("");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"banner",children:[Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"banner--title",children:[Object(l.jsx)("div",{className:"banner--img__container",children:Object(l.jsx)("img",{className:"banner--img",src:h,alt:""})}),Object(l.jsx)("h2",{children:"More than just shorter links"}),Object(l.jsx)("p",{children:"build your brand's recognition and get detailed insigths on how your links are performing"}),Object(l.jsx)("div",{className:"button--container",children:Object(l.jsx)("button",{children:"Get Started"})})]})}),Object(l.jsxs)("form",{onSubmit:r,className:"form--container ".concat(i?"disabled--form":""),children:[Object(l.jsx)("input",{disabled:i?"disabled":null,placeholder:"Shorten your link here",type:"text",onChange:function(e){var t=e.target.value;s(t)},value:t}),Object(l.jsx)("button",{disabled:i?"disabled":null,children:"Shorten it!"})]})]})},O=function(e){var t=e.brand,s=e.title,c=e.description;return Object(l.jsxs)("div",{className:"box box-".concat(s),children:[Object(l.jsx)("div",{className:"logo--container",children:Object(l.jsx)("img",{src:t,alt:s})}),Object(l.jsx)("h3",{children:s}),Object(l.jsx)("p",{children:c})]})},x=function(){return Object(l.jsxs)("div",{className:"lds-ellipsis",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})},m=function(e){var t=e.linkData,s=Object(c.useState)(!1),n=Object(r.a)(s,2),i=n[0],a=n[1];return Object(l.jsxs)("div",{className:"short--box",children:[Object(l.jsx)("div",{className:"full--link",children:Object(l.jsx)("p",{children:t.result.original_link})}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"short--link",children:[Object(l.jsxs)("p",{children:[t.result.short_link,i?Object(l.jsx)("i",{className:"fas fa-clipboard-check"}):null]}),!1===i?Object(l.jsx)("button",{onClick:function(){navigator.clipboard.writeText(t.result.short_link),a(!0),setTimeout((function(){a(!1)}),2e3)},className:"button copy",children:"Copy"}):Object(l.jsx)("button",{className:"button copied",children:"Copied!"})]})]})},p=s.p+"static/media/icon-brand-recognition.c349d3b6.svg",g=s.p+"static/media/icon-detailed-records.265c8aea.svg",v=s.p+"static/media/icon-fully-customizable.a1532a74.svg",f=function(e){var t=e.loading,s=e.data;return Object(l.jsxs)("div",{className:"stats",children:[Object(l.jsxs)("div",{className:"stats--title",children:[t&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{children:"Preparando su enlace..."}),Object(l.jsx)(x,{})]}),s.length>0?Object(l.jsx)("h2",{children:"Your Short Link"}):null,s.length>0?s.map((function(e){return Object(l.jsx)(m,{linkData:e},e.result.code)})):null,Object(l.jsx)("h2",{children:"Advanced statistics"}),Object(l.jsx)("p",{className:"advanced--description",children:"Track how your links are performing across the web with our advanced statistics dashboard"})]}),Object(l.jsxs)("div",{className:"stats--details",children:[Object(l.jsx)(O,{brand:p,title:"Brand Recognition",description:"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."}),Object(l.jsx)(O,{brand:g,title:"Detailed Records",description:"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."}),Object(l.jsx)(O,{brand:v,title:"Fully Customizable",description:"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."})]})]})},N=s.p+"static/media/icon-facebook.229c75a0.svg",k=s.p+"static/media/icon-twitter.1d5c6d5e.svg",w=s.p+"static/media/icon-pinterest.a2d25ab4.svg",y=s.p+"static/media/icon-instagram.df587328.svg",S=function(){return Object(l.jsxs)("footer",{className:"footer",id:"features",children:[Object(l.jsxs)("div",{className:"footer--started",children:[Object(l.jsx)("h2",{children:"Boost your links today"}),Object(l.jsx)("button",{children:"Get Started"})]}),Object(l.jsxs)("div",{className:"footer--details",children:[Object(l.jsx)("div",{className:"footer--title",children:Object(l.jsx)("h2",{children:"Shortly"})}),Object(l.jsxs)("div",{className:"footer--features detail1",children:[Object(l.jsx)("h3",{children:"Features"}),Object(l.jsx)("p",{children:"Link shortener"}),Object(l.jsx)("p",{children:"Branded Links"}),Object(l.jsx)("p",{children:"Analytics"})]}),Object(l.jsxs)("div",{className:"footer--features detail2",children:[Object(l.jsx)("h3",{children:"Resources"}),Object(l.jsx)("p",{children:"Blog"}),Object(l.jsx)("p",{children:"Developers"}),Object(l.jsx)("p",{children:"Support"})]}),Object(l.jsxs)("div",{className:"footer--features detail3",children:[Object(l.jsx)("h3",{children:"Company"}),Object(l.jsx)("p",{children:"About"}),Object(l.jsx)("p",{children:"Our team"}),Object(l.jsx)("p",{children:"Carrers"}),Object(l.jsx)("p",{children:"Contact"})]})]}),Object(l.jsxs)("div",{className:"footer--social",children:[Object(l.jsx)("a",{href:"https://www.facebook.com/",children:Object(l.jsx)("img",{src:N,alt:"Facebook"})}),Object(l.jsx)("a",{href:"https://twitter.com/?lang=es",children:Object(l.jsx)("img",{src:k,alt:"Twitter"})}),Object(l.jsx)("a",{href:"https://ar.pinterest.com/",children:Object(l.jsx)("img",{src:w,alt:"Pinterest"})}),Object(l.jsx)("a",{href:"https://www.instagram.com/?hl=es",children:Object(l.jsx)("img",{src:y,alt:"Instagram"})})]})]})};s(13);var C=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),s=t[0],n=t[1],i=Object(c.useState)([]),a=Object(r.a)(i,2),d=a[0],o=a[1],b=Object(c.useState)(!1),h=Object(r.a)(b,2),O=h[0],x=h[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{}),Object(l.jsx)(u,{inputInitialValue:s,setInitialValue:n,setData:o,data:d,loading:O,setLoading:x}),Object(l.jsx)(f,{loading:O,data:d}),Object(l.jsx)(S,{})]})};a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.c8fc910d.chunk.js.map