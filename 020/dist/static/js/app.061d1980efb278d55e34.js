webpackJsonp([1],{"4VVD":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},a=n("VU/8")({name:"app"},i,!1,function(t){n("fZiJ")},"data-v-ffae4142",null).exports,r=n("/ocq"),o=n("mtWM"),c=n.n(o),h={name:"Form",data:function(){return{items:[],searchResults:""}},mounted:function(){this.loadItems()},methods:{loadItems:function(){var t=this;this.items=[],c.a.get("https://api.airtable.com/v0/appLa5g8kT0L6oRYW/Status?view=Grid%20view",{headers:{Authorization:"Bearer keyDwWtp99iJuamPh"}}).then(function(e){t.items=e.data.records}).catch(function(t){console.log(t)})}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"container"},[n("div",{attrs:{id:"content"}},[n("h1",[t._v("What's the current status?")]),t._v(" "),n("ul",t._l(t.items,function(e){return n("li",[n("h3",[t._v(t._s(e.fields.Date))]),t._v(" "),n("p",[t._v(t._s(e.fields.User))]),t._v(" "),n("p",[n("strong",[t._v("Yesterday: ")]),t._v(t._s(e.fields.Yesterday))]),t._v(" "),n("p",[n("strong",[t._v("Today: ")]),t._v(t._s(e.fields.Today))]),t._v(" "),n("p",[n("strong",[t._v("Blocker: ")]),t._v(t._s(e.fields.Blockers))])])}))])]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("a",{attrs:{href:"#"}},[this._v("Status Stash")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("ul",[e("li",[e("a",{attrs:{href:"/#/"}},[this._v("Home")])]),this._v(" "),e("li",[e("a",{attrs:{href:"/#/stitch"}},[this._v("Stitch")])])])])}]},l=n("VU/8")(h,u,!1,function(t){n("4VVD")},"data-v-21f7650a",null).exports,d=n("4x5z"),f={name:"Stitch",data:function(){return{items:[],searchResults:""}},mounted:function(){this.loadItems()},methods:{loadItems:function(){var t=new d.StitchClient("statusstash-dnwjj");t.login().then(function(){return console.log("logged in as: "+t.authedId())}).catch(function(t){return console.log("error: ",t)})}}},v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("header",[e("a",{attrs:{href:"#"}},[this._v("Status Stash")])]),this._v(" "),e("div",{staticClass:"container"},[e("div",{attrs:{id:"content"}},[e("h1",[this._v("Add your status")])])]),this._v(" "),e("footer",[e("ul",[e("li",[e("a",{attrs:{href:"/#/"}},[this._v("Home")])]),this._v(" "),e("li",[e("a",{attrs:{href:"/#/stitch"}},[this._v("Stitch")])])])])])}]},_=n("VU/8")(f,v,!1,function(t){n("Rxfj")},"data-v-d3492ce6",null).exports;s.a.use(r.a);var m=new r.a({routes:[{path:"/",name:"Form",component:l},{path:"/stitch",name:"Stitch",component:_}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:m,template:"<App/>",components:{App:a}})},Rxfj:function(t,e){},fZiJ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.061d1980efb278d55e34.js.map