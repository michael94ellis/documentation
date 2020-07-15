(window.webpackJsonp=window.webpackJsonp||[]).push([[22,9],{156:function(e,t,a){"use strict";a.r(t);var n=a(2),r=(a(373),a(0)),l=a.n(r),c=a(172),s=a(186),o=a(174),i=a(173),m=a(179),u=a(134),d=a.n(u),f=[{title:l.a.createElement(l.a.Fragment,null,"Guides"),link:"/docs/guides/getting-started",description:l.a.createElement(l.a.Fragment,null,"Discover how to get started with the Trefle API basis, step by step.")},{title:l.a.createElement(l.a.Fragment,null,"Advanced topics"),link:"/docs/advanced/plants-fields",description:l.a.createElement(l.a.Fragment,null,"Understand trefle schemas and specifications in depth.")},{title:l.a.createElement(l.a.Fragment,null,"Examples and samples"),link:"/docs/examples/snippets",description:l.a.createElement(l.a.Fragment,null,"See sample queries and code snippets.")},{title:l.a.createElement(l.a.Fragment,null,"API Reference"),link:"/reference",description:l.a.createElement(l.a.Fragment,null,"In depth reference of Trefle API endpoints, parameters and data structure.")}];function g(e){var t=e.link,a=e.title,n=e.description;return l.a.createElement(o.a,{to:Object(m.a)(t),className:Object(c.a)(d.a.feature)},l.a.createElement("h3",null,a),l.a.createElement("p",null,n))}t.default=function(e){var t=Object(i.a)(),a=t.siteConfig,r=void 0===a?{}:a;return console.log({props:e,context:t}),l.a.createElement(s.a,{title:""+r.title,description:"Getting started with the Trefle API"},l.a.createElement("header",{className:Object(c.a)("hero",d.a.heroBanner)},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"hero__title"},r.title),l.a.createElement("p",{className:"hero__subtitle"},r.tagline),l.a.createElement("div",{className:d.a.buttons},l.a.createElement(o.a,{className:Object(c.a)("button button--outline button--secondary button--lg",d.a.getStarted,d.a.bigButton),to:Object(m.a)("docs/guides/getting-started")},"Get Started")))),l.a.createElement("main",null,f&&f.length>0&&l.a.createElement("section",{className:d.a.features},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},f.map((function(e,t){return l.a.createElement(g,Object(n.a)({key:t},e))}))),l.a.createElement("div",{className:"col"},l.a.createElement(g,{key:"changelogs",title:"Releases",link:"/blog/tags/releases"})))))))}},187:function(e,t,a){"use strict";var n=a(2),r=a(9),l=a(0),c=a.n(l),s=a(172),o=a(174),i=a(173),m=a(179),u=a(128),d=a.n(u);function f(e){var t=e.to,a=e.href,l=e.label,s=e.prependBaseUrlToHref,i=Object(r.a)(e,["to","href","label","prependBaseUrlToHref"]),u=Object(m.a)(t),d=Object(m.a)(a,{forcePrependBaseUrl:!0});return c.a.createElement(o.a,Object(n.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:s?d:a}:{to:u},i),l)}var g=function(e){var t=e.url,a=e.alt;return c.a.createElement("img",{className:"footer__logo",alt:a,src:t})};t.a=function(){var e=Object(i.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},r=n.copyright,l=n.links,o=void 0===l?[]:l,u=n.logo,p=void 0===u?{}:u,E=Object(m.a)(p.src);return a?c.a.createElement("footer",{className:Object(s.a)("footer",{"footer--dark":"dark"===a.style})},c.a.createElement("div",{className:"container"},o&&o.length>0&&c.a.createElement("div",{className:"row footer__links"},o.map((function(e,t){return c.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?c.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?c.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?c.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):c.a.createElement("li",{key:e.href||e.to,className:"footer__item"},c.a.createElement(f,e))}))):null)}))),(p||r)&&c.a.createElement("div",{className:"text--center"},p&&p.src&&c.a.createElement("div",{className:"margin-bottom--sm"},p.href?c.a.createElement("a",{href:p.href,target:"_blank",rel:"noopener noreferrer",className:d.a.footerLogoLink},c.a.createElement(g,{alt:p.alt,url:E})):c.a.createElement(g,{alt:p.alt,url:E})),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}})))):null}},373:function(e,t,a){"use strict";a(374)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},374:function(e,t,a){var n=a(12),r=a(13),l=a(31),c=/"/g,s=function(e,t,a,n){var r=String(l(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(n).replace(c,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),n(n.P+n.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}}}]);