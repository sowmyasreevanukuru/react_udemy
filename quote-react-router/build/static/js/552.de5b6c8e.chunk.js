"use strict";(self.webpackChunkpractice_project_react_router=self.webpackChunkpractice_project_react_router||[]).push([[552],{233:function(e,t,r){r.r(t),r.d(t,{default:function(){return j}});var n=r(791),o=r(689),s=r(885),c="Card_card__ASxy0",u=r(184),a=function(e){return(0,u.jsx)("div",{className:c,children:e.children})},i=r(147),l="QuoteForm_form__yoqCe",d="QuoteForm_loading__sTWfN",f="QuoteForm_control__woMr2",h="QuoteForm_actions__whHyo",x=function(e){var t=(0,n.useRef)(),r=(0,n.useRef)(),o=(0,n.useState)(!1),c=(0,s.Z)(o,2),x=(c[0],c[1]);return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(a,{children:(0,u.jsxs)("form",{className:l,onSubmit:function(n){n.preventDefault();var o=t.current.value,s=r.current.value;o&&s&&e.onAddQuote({author:o,text:s})},onFocus:function(){x((function(e){return!0}))},children:[e.isLoading&&(0,u.jsx)("div",{className:d,children:(0,u.jsx)(i.default,{})}),(0,u.jsxs)("div",{className:f,children:[(0,u.jsx)("label",{htmlFor:"author",children:"Author"}),(0,u.jsx)("input",{type:"text",id:"author",ref:t})]}),(0,u.jsxs)("div",{className:f,children:[(0,u.jsx)("label",{htmlFor:"text",children:"Text"}),(0,u.jsx)("textarea",{id:"text",rows:"5",ref:r})]}),(0,u.jsx)("div",{className:h,children:(0,u.jsx)("button",{onClick:function(){x(!1)},className:"btn",children:"Add Quote"})})]})})})},_=r(995),m=r(853),j=function(){var e=(0,_.Z)(m.KP),t=e.sendRequest,r=e.status,s=(0,o.s0)();(0,n.useEffect)((function(){"completed"===r&&s("/quotes",{replace:!0})}),[r,s]);return(0,u.jsx)(x,{isLoading:"pending"===r,onAddQuote:function(e){t(e),console.log(e)}})}}}]);
//# sourceMappingURL=552.de5b6c8e.chunk.js.map