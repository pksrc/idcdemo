(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([["pages/media-library"],{"./pages/404.tsx":function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return n}});var s=a("./node_modules/@wordpress/react-i18n/build-module/index.js"),i=a("./components/index.js"),t=a("./node_modules/react/jsx-runtime.js");function n(e){var r=e.errorPageParagraph,a=e.errorPageList,n=(0,s.QT)().__;return(0,t.jsx)(i.Ar,{title:"Page Not Found",mainClassName:"error-404",children:(0,t.jsxs)("div",{className:"error-404__wrap",children:[(0,t.jsx)("h1",{className:"error-404__title",children:n("Sorry, the page you requested was not found.")}),r,a]})})}},"./pages/_error.js":function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return d}});var s=a("./node_modules/next/router.js"),i=a("./node_modules/@wordpress/react-i18n/build-module/index.js"),t=a("./components/index.js"),n=a("./pages/404.tsx"),l=a("./node_modules/react/jsx-runtime.js");function d(e){var r=e.statusCode,a=void 0===r?404:r,s=(0,i.QT)().__,d=s('If you\'re having trouble locating a destination on news.vmware.com, try vising the <a href="/">newsroom home page</a>. Alternatively, try visiting the <a href="https://www.vmware.com/">VMware home page</a> or the following sections:'),o=s('<li><a href="https://my.vmware.com/web/vmware/login?">My VMware</a>: Manage your licenses, support and services.</li><li><a href="https://www.vmware.com/products.html">Products</a>: Browse the VMware product list.</li><li><a href="https://my.vmware.com/en/web/vmware/downloads">Downloads</a>: Download VMware products, drivers and tools.</li><li><a href="https://www.vmware.com/support.html">Support</a>: Find VMware support by products.</li><li><a href="https://www.vmware.com/solutions.html">Solutions</a>: Find solutions to address your IT priorities and initiatives.</li>');return 404===a?(0,l.jsx)(n.default,{errorPageParagraph:(0,l.jsx)("p",{dangerouslySetInnerHTML:{__html:d}}),errorPageList:(0,l.jsx)("ul",{className:"error-404__list",dangerouslySetInnerHTML:{__html:o}})}):(0,l.jsx)(t.Ar,{title:"Page Not Found",mainClassName:"error-404",children:(0,l.jsxs)("div",{className:"error-404__wrap",children:[(0,l.jsx)("h1",{className:"error-404-title",children:s("Error loading page")}),d&&(0,l.jsx)("p",{dangerouslySetInnerHTML:{__html:d}}),o&&(0,l.jsx)("ul",{className:"error-404__list",dangerouslySetInnerHTML:{__html:o}})]})})}d.getInitialProps=function(e){var r=e.res,a=e.err,i=e.asPath,t=404;if(r?t=r.statusCode:a&&(t=a.statusCode),t&&404===t&&i.match(/\/$/)){var n=i.substr(0,i.length-1);r?(r.writeHead(302,{Location:n}),r.end()):s.default.push(n)}return{statusCode:t}}},"./pages/media-library/index.js":function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return N}});var s=a("./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),i=a("./node_modules/next/node_modules/@babel/runtime/regenerator/index.js"),t=a.n(i),n=a("./node_modules/@wordpress/react-i18n/build-module/index.js"),l=a("./components/index.js"),d=a("./utils/api.ts"),o=a("./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),c=a("./node_modules/classnames/index.js"),m=a.n(c),u=a("./components/image/index.tsx"),_=a("./utils/post-helpers.ts"),p=a("./utils/image-helpers.ts"),h=a("./utils/safe-alt.ts"),b=a("./assets/icons/pdf.js"),x=a("./node_modules/react/jsx-runtime.js");function j(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,s)}return a}function v(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?j(Object(a),!0).forEach((function(r){(0,o.Z)(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function w(e){var r=e.className,a=e.multimedia,s=(0,n.QT)().__;return(0,x.jsx)("div",{className:m()("media-library__assets",r||r),children:a.images.map((function(e){var r,a,i,t,n,l,d=e.meta.multimedia_library_cta,o=e.meta.multimedia_library_thumb||(null===(r=e.media_details.sizes)||void 0===r||null===(a=r.corpnews_large)||void 0===a?void 0:a.source_url)||(null===(i=e.media_details.sizes)||void 0===i||null===(t=i.full)||void 0===t?void 0:t.source_url)||"",c=Boolean(e.meta.multimedia_library_url),m={href:e.meta.multimedia_library_url||e.source_url||(null===(n=e.media_details.sizes)||void 0===n||null===(l=n.full)||void 0===l?void 0:l.source_url),onClick:c?void 0:p.ZF,target:c?"_blank":void 0},j=v(v({},m),{},{tabIndex:-1});return(0,x.jsxs)("div",{className:"media-library__asset-item",children:[o?(0,x.jsx)("div",{className:"media-library__image-container",children:(0,x.jsx)("a",v(v({},j),{},{children:(0,x.jsx)(u.Z,{src:o,alt:(0,h.F)(e.alt_text),loading:"lazy",layout:"fill",objectFit:"contain"})}))}):(0,x.jsx)("div",{className:"media-library__asset-fallback asset-fallback",children:(0,x.jsx)("a",v(v({},j),{},{children:(0,x.jsx)("div",{className:"media-library__fallback-container",children:(0,x.jsx)("div",{className:"media-library__fallback-content",children:"application/pdf"===e.mime_type?(0,x.jsx)("span",{className:"asset-fallback__pdf",children:(0,x.jsx)(b.Z,{})}):(0,x.jsx)("span",{className:"asset-fallback__label",children:s("(Preview Not Available)")})})})}))}),(0,x.jsx)("a",v(v({className:"media-library__download"},m),{},{children:(0,x.jsx)("span",{className:"media-library__download-text",children:(0,_.SH)(d||e.title.rendered)})}))]},e.id)}))})}var f=a("./components/media-library/media-assets.tsx"),y=a("./components/link/index.tsx"),g=a("./pages/_error.js");function N(e){var r,a=e.brandAssets,s=e.error,i=void 0!==s&&s,t=e.recentMultimedia,d=(0,n.QT)().__;if(!0===i)return(0,x.jsx)(g.default,{statusCode:500});var o={yoast_head_json:{title:d("Media Asset | VMware News & Stories"),description:d("Find official VMware media assets including images, videos, and documents for download. For media inquiries, please contact us at PRInquiries@vmware.com."),canonical:"https://news.vmware.com/media-library",robots:"max-snippet:-1, max-image-preview:large, max-video-preview:-1"}};return(0,x.jsxs)(l.Ar,{mainClassName:"media-library",seo:o,children:[(0,x.jsxs)("div",{className:"media-library__header-container container",children:[(0,x.jsx)("header",{className:"media-library__header",children:(0,x.jsx)("h1",{className:"media-library__header-title",children:d("Media Library")})}),(0,x.jsx)(l.UI,{})]}),(null===(r=a.collection)||void 0===r?void 0:r.length)>0&&(0,x.jsx)("div",{className:"media-library__container container",children:(0,x.jsxs)("div",{className:"media-library__wrap",children:[(0,x.jsx)("h2",{className:"media-library__title",children:d("Brand Assets")}),(0,x.jsx)("div",{className:"media-library__grid",children:(0,x.jsx)(w,{className:"media-library__items",multimedia:a})})]})}),(0,x.jsx)("div",{className:"media-library__container container",children:(0,x.jsxs)("div",{className:"media-library__wrap",children:[(0,x.jsx)("h2",{className:"media-library__title",children:d("All Media Assets")}),(0,x.jsx)("div",{className:"media-library__grid",children:t&&(0,x.jsx)(f.t,{className:"media-library__items",multimedia:t})}),(0,x.jsx)("div",{className:"media-library__view-more",children:(0,x.jsxs)(y.Ml,{href:"/media-library/recent",className:"button",children:[d("View More"),(0,x.jsx)("span",{className:"screen-reader-text",children:d("All Media Assets")})]})})]})})]})}N.getInitialProps=function(){var e=(0,s.Z)(t().mark((function e(r){var a,s;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.locale,e.next=3,(0,d.JP)(a);case 3:if((s=e.sent).brand_assets||s.media_assets){e.next=6;break}return e.abrupt("return",{error:!0});case 6:return e.abrupt("return",{brandAssets:s.brand_assets,recentMultimedia:s.recent_multimedia});case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fmedia-library&absolutePagePath=private-next-pages%2Fmedia-library%2Findex.js!":function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/media-library",function(){return a("./pages/media-library/index.js")}])}},function(e){e.O(0,["framework","vendors-node_modules_wordpress_dom-ready_build-module_index_js-node_modules_wordpress_html-en-49a932","components_index_js","pages/_app","main"],(function(){return r="./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fmedia-library&absolutePagePath=private-next-pages%2Fmedia-library%2Findex.js!",e(e.s=r);var r}));var r=e.O();_N_E=r}]);