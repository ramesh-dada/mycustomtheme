(()=>{var e={n:a=>{var t=a&&a.__esModule?()=>a.default:()=>a;return e.d(t,{a:t}),t},d:(a,t)=>{for(var s in t)e.o(t,s)&&!e.o(a,s)&&Object.defineProperty(a,s,{enumerable:!0,get:t[s]})},o:(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},a={};(()=>{"use strict";e.r(a);const t=flarum.core.compat["common/extend"],s=flarum.core.compat["tags/components/TagsPage"];var o=e.n(s);const r=flarum.core.compat["components/IndexPage"];var n=e.n(r);const i=flarum.core.compat["components/Link"];var l=e.n(i);const c=flarum.core.compat["components/LoadingIndicator"];var u=e.n(c);const p=flarum.core.compat["helpers/listItems"];var g=e.n(p);const d=flarum.core.compat["helpers/humanTime"];var f=e.n(d);const v=flarum.core.compat["tags/common/helpers/tagIcon"];var T=e.n(v);const N=flarum.core.compat["tags/common/helpers/tagLabel"];var h=e.n(N);const y=flarum.core.compat["tags/common/utils/sortTags"];var P=e.n(y),A=function(){function e(){}return e.prototype.view=function(){if(this.loading)return m(u(),null);var e=this.tags.filter((function(e){return null!==e.position()})),a=this.tags.filter((function(e){return null===e.position()}));return m("div",{className:"Asirem-TagsPage"},n().prototype.hero(),m("div",{className:"sideNavContainer container"},m("nav",{className:"TagsPage-nav IndexPage-nav sideNav"},m("ul",null,g()(n().prototype.sidebarItems().toArray()))),m("div",{className:"TagsPage-content sideNavOffset"},m("ul",{className:"Asirem-TagTiles"},e.map((function(e){var a=e.lastPostedDiscussion(),t=P()(e.children()||[]),s=T()(e,{},{useColor:!1});return delete s.attrs.style.backgroundColor,m("li",{className:"Asirem-TagTile "+(e.color()?"colored":""),style:{"--tag-bg":e.color()}},m(l(),{className:"Asirem-TagTile-info",href:app.route.tag(e)},m("div",{className:"Asirem-TagTile-icon"},s),m("div",{className:"Asirem-TagTile-content"},m("h3",{className:"Asirem-TagTile-name"},e.name()),m("p",{className:"Asirem-TagTile-description"},e.description()),t&&t.length?m("div",{className:"Asirem-TagTile-children"},t.map((function(e){return[m(l(),{href:app.route.tag(e),className:"TagLabel"},e.name())," "]}))):"",a?m(l(),{className:"Asirem-TagTile-lastPostedDiscussion",href:app.route.discussion(a,a.lastPostNumber())},m("span",{className:"Asirem-TagTile-lastPostedDiscussion-title"},a.title()),f()(a.lastPostedAt())):m("span",{className:"Asirem-TagTile-lastPostedDiscussion"}))))}))),a.length?m("div",{className:"Asirem-TagCloud"},a.map((function(e){return[h()(e,{link:!0})," "]}))):"")))},e}();flarum.core.compat["utils/string"],app.initializers.add("custom-tagspage",(function(){(0,t.override)(o().prototype,"view",A.prototype.view)}))})(),module.exports=a})();
//# sourceMappingURL=forum.js.map