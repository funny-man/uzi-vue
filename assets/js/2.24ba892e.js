(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{168:function(t,e,a){},169:function(t,e,a){},170:function(t,e,a){},171:function(t,e,a){},172:function(t,e,a){},173:function(t,e,a){},186:function(t,e,a){"use strict";var n=a(168);a.n(n).a},187:function(t,e,a){"use strict";var n=a(169);a.n(n).a},188:function(t,e,a){"use strict";var n=a(170);a.n(n).a},189:function(t,e,a){"use strict";var n=a(171);a.n(n).a},190:function(t,e,a){"use strict";var n=a(172);a.n(n).a},191:function(t,e,a){"use strict";var n=a(173);a.n(n).a},193:function(t,e,a){"use strict";a.r(e);var n={name:"z-layout",props:{direction:String},mounted:function(){console.log(this.$slots.default[0])},computed:{isVertical:function(){return"vertical"===this.direction||"horizontal"!==this.direction&&(!(!this.$slots||!this.$slots.default)&&this.$slots.default.some(function(t){var e=t.componentOptions&&t.componentOptions.tag;return"z-header"===e||"z-footer"===e}))}}},i=(a(186),a(0)),o=Object(i.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("section",{staticClass:"z-layout",class:{"is-vertical":this.isVertical}},[this._t("default")],2)},[],!1,null,"2183cce5",null);o.options.__file="layout.vue";var r=o.exports,s={name:"z-header",props:{height:{type:String,default:"60px"}}},l=(a(187),Object(i.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("header",{staticClass:"z-header",style:{height:this.height}},[this._t("default")],2)},[],!1,null,"9ba36334",null));l.options.__file="header.vue";var z=l.exports,u={name:"z-aside",props:{width:{type:String,default:"360px"}}},d=(a(188),Object(i.a)(u,function(){var t=this.$createElement;return(this._self._c||t)("aside",{staticClass:"z-aside",style:{width:this.width}},[this._t("default")],2)},[],!1,null,"75274a88",null));d.options.__file="aside.vue";var h=d.exports,_={name:"z-main"},v=(a(189),Object(i.a)(_,function(){var t=this.$createElement;return(this._self._c||t)("main",{staticClass:"z-main"},[this._t("default")],2)},[],!1,null,"88285566",null));v.options.__file="main.vue";var c=v.exports,f={name:"z-footer",props:{height:{type:String,default:"60px"}}},m=(a(190),Object(i.a)(f,function(){var t=this.$createElement;return(this._self._c||t)("footer",{staticClass:"z-footer",style:{height:this.height}},[this._t("default")],2)},[],!1,null,"bf661152",null));m.options.__file="footer.vue";var y={components:{"z-layout":r,"z-header":z,"z-aside":h,"z-main":c,"z-footer":m.exports},data:function(){return{a:'    \n  <z-layout>\n  <z-header>Header</z-header>\n  <z-main>Main</z-main>\n</z-layout>\n<hr>\n<z-layout>\n  <z-header>Header</z-header>\n  <z-main>Main</z-main>\n  <z-footer>Footer</z-footer>\n</z-layout>\n<hr>\n<z-layout>\n  <z-aside>Aside</z-aside>\n  <z-main>Main</z-main>\n</z-layout>\n<hr>\n<z-layout>\n  <z-header>Header</z-header>\n  <z-layout>\n    <z-aside width="200px">Aside</z-aside>\n    <z-main>Main</z-main>\n  </z-layout>\n</z-layout>\n<hr>\n<z-layout>\n  <z-header>Header</z-header>\n  <z-layout>\n    <z-aside width="200px">Aside</z-aside>\n    <z-layout>\n      <z-main>Main</z-main>\n      <z-footer>Footer</z-footer>\n    </z-layout>\n  </z-layout>\n</z-layout>\n<hr>\n<z-layout>\n  <z-aside>Aside</z-aside>\n  <z-layout>\n    <z-header>Header</z-header>\n    <z-main>Main</z-main>\n  </z-layout>\n</z-layout>\n<hr>\n<z-layout>\n  <z-aside>Aside</z-aside>\n  <z-layout>\n    <z-header>Header</z-header>\n    <z-main>Main</z-main>\n    <z-footer>Footer</z-footer>\n  </z-layout>\n</z-layout>'.trim()}}},p=(a(191),Object(i.a)(y,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"demo-warpper"},[a("z-layout",[a("z-header",[t._v("Header")]),t._v(" "),a("z-main",[t._v("Main")])],1),t._v(" "),a("hr"),t._v(" "),a("z-layout",[a("z-header",[t._v("Header")]),t._v(" "),a("z-main",[t._v("Main")]),t._v(" "),a("z-footer",[t._v("Footer")])],1),t._v(" "),a("hr"),t._v(" "),a("z-layout",[a("z-aside",[t._v("Aside")]),t._v(" "),a("z-main",[t._v("Main")])],1),t._v(" "),a("hr"),t._v(" "),a("z-layout",[a("z-header",[t._v("Header")]),t._v(" "),a("z-layout",[a("z-aside",{attrs:{width:"200px"}},[t._v("Aside")]),t._v(" "),a("z-main",[t._v("Main")])],1)],1),t._v(" "),a("hr"),t._v(" "),a("z-layout",[a("z-header",[t._v("Header")]),t._v(" "),a("z-layout",[a("z-aside",{attrs:{width:"200px"}},[t._v("Aside")]),t._v(" "),a("z-layout",[a("z-main",[t._v("Main")]),t._v(" "),a("z-footer",[t._v("Footer")])],1)],1)],1),t._v(" "),a("hr"),t._v(" "),a("z-layout",[a("z-aside",[t._v("Aside")]),t._v(" "),a("z-layout",[a("z-header",[t._v("Header")]),t._v(" "),a("z-main",[t._v("Main")])],1)],1),t._v(" "),a("hr"),t._v(" "),a("z-layout",[a("z-aside",[t._v("Aside")]),t._v(" "),a("z-layout",[a("z-header",[t._v("Header")]),t._v(" "),a("z-main",[t._v("Main")]),t._v(" "),a("z-footer",[t._v("Footer")])],1)],1),t._v(" "),t._m(0),t._v(" "),a("pre",[a("code",{domProps:{textContent:t._s(t.a)}})])],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text"},[e("h5",[this._v("基本布局")]),this._v(" "),e("p",[this._v("一些常见的布局...")])])}],!1,null,"0271aff2",null));p.options.__file="demos-layout.vue";e.default=p.exports}}]);