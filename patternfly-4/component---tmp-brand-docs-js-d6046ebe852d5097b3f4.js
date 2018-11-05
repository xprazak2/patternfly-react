webpackJsonp([23489459082096,0xf6edb67c0944],{737:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(4),o=n(144),l=r(o);t.default={title:"Brand",components:{Brand:a.Brand},examples:[l.default]},e.exports=t.default},144:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(2),f=r(i),u=n(4),p=n(14),s=r(p),c=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return f.default.createElement(u.Brand,{src:s.default,alt:"Brand Image"})},t}(f.default.Component);c.title="Simple Brand",t.default=c,c.__docgenInfo={description:"",displayName:"SimpleBrand"},e.exports=t.default},593:function(e,t){e.exports="import React from 'react';\nimport { Brand } from '@patternfly/react-core';\nimport brandImg from './pf_logo.svg';\n\nclass SimpleBrand extends React.Component {\n  static title = 'Simple Brand';\n\n  render() {\n    return <Brand src={brandImg} alt=\"Brand Image\" />;\n  }\n}\n\nexport default SimpleBrand;\n"},868:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(2),l=r(o),i=n(737),f=r(i),u=n(15),p=r(u),s=[{name:"SimpleBrand",path:"../../react-core/src/components/Brand/examples/SimpleBrand.js",file:n(593)}],c=[{name:"pf_logo.svg",file:n(10)},{name:"pf_mini_logo_white.svg",file:n(11)},{name:"img_avatar.png",file:n(13)},{name:"pf_logo.svg",file:n(14)},{name:"img_avatar.png",file:n(8)},{name:"l_pf-reverse-164x11.png",file:n(9)},{name:"pfbg_992.jpg",file:n(12)}];t.default=function(){return l.default.createElement(p.default,a({rawExamples:s,images:c},f.default))},e.exports=t.default}});
//# sourceMappingURL=component---tmp-brand-docs-js-d6046ebe852d5097b3f4.js.map