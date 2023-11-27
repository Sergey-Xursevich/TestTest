import{jsx as t}from"react/jsx-runtime";import{useEffect as n,useRef as e,useMemo as o}from"react";var r=function(t,e){n((function(){var n=function(n){var o=null==t?void 0:t.current;o&&!o.contains((null==n?void 0:n.target)||null)&&e()};return document.addEventListener("mousedown",n),function(){return document.removeEventListener("mousedown",n)}}),[t,e])},l=function(t){n((function(){var n=function(){document.body.style.overflow="auto"};return t?document.body.style.overflow="hidden":n(),function(){n()}}),[t])},i=function(n){var o=n.show,i=n.onClose,a=n.children,c=n.height,u=e(null);return r(u,i),l(o),t("div",{className:"w-full h-screen bg-slate-900 bg-opacity-50 fixed inset-0 top-0 z-50 overflow-hidden opacity-100 ".concat(o?"translate-y-0":"translate-y-full delay-500"),children:t("div",{ref:u,className:"bg-white rounded-t-2xl ".concat(c||"h-96"," absolute bottom-0 left-0 right-0 opacity-100 transition duration-500 ease-in-out ").concat(o?"translate-y-0":"translate-y-full"),children:a})})},a=function(n){var e=n.size,r=void 0===e?"small":e,l=n.type,i=void 0===l?"normal":l,a=n.custom,c=n.disabled,u=n.onClick,d=n.children,s=n.label,f=void 0===s?"":s,m=o((function(){return{large:"h-12",small:"h-11"}[r]}),[r]),h=o((function(){return{light:"bg-white",dark:"bg-neutral-800",normal:"bg-cyan-600"}[i]}),[i]);return t("button",{className:"flex items-center justify-center w-full ".concat(m," text-white text-2xl font-semibold ").concat(h," rounded-md disabled:").concat(h,"/30 ").concat(a),onClick:u,disabled:c,children:d||f})};export{i as BottomModal,a as Button,l as useOutScrollLock,r as useOutsideClick};
