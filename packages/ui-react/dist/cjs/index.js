"use strict";var e=require("react/jsx-runtime"),t=require("react"),n=function(e,n){t.useEffect((function(){var t=function(t){var o=null==e?void 0:e.current;o&&!o.contains((null==t?void 0:t.target)||null)&&n()};return document.addEventListener("mousedown",t),function(){return document.removeEventListener("mousedown",t)}}),[e,n])},o=function(e){t.useEffect((function(){var t=function(){document.body.style.overflow="auto"};return e?document.body.style.overflow="hidden":t(),function(){t()}}),[e])};exports.BottomModal=function(r){var l=r.show,i=r.onClose,c=r.children,u=r.height,a=t.useRef(null);return n(a,i),o(l),e.jsx("div",{className:"w-full h-screen bg-slate-900 bg-opacity-50 fixed inset-0 top-0 z-50 overflow-hidden opacity-100 ".concat(l?"translate-y-0":"translate-y-full delay-500"),children:e.jsx("div",{ref:a,className:"bg-white rounded-t-2xl ".concat(u||"h-96"," absolute bottom-0 left-0 right-0 opacity-100 transition duration-500 ease-in-out ").concat(l?"translate-y-0":"translate-y-full"),children:c})})},exports.Button=function(n){var o=n.size,r=void 0===o?"small":o,l=n.type,i=void 0===l?"normal":l,c=n.custom,u=n.disabled,a=n.onClick,s=n.children,d=n.label,f=void 0===d?"":d,m=t.useMemo((function(){return{large:"h-12",small:"h-11"}[r]}),[r]),h=t.useMemo((function(){return{light:"bg-white",dark:"bg-neutral-800",normal:"bg-cyan-600"}[i]}),[i]);return e.jsx("button",{className:"flex items-center justify-center w-full ".concat(m," text-white text-2xl font-semibold ").concat(h," rounded-md disabled:").concat(h,"/30 ").concat(c),onClick:a,disabled:u,children:s||f})},exports.useOutScrollLock=o,exports.useOutsideClick=n;