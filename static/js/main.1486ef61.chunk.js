(this["webpackJsonpyoutube-clone"]=this["webpackJsonpyoutube-clone"]||[]).push([[0],{109:function(e,t,n){},110:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),i=n.n(a),s=n(24),r=n.n(s),o=(n(78),n(9)),d=n(20),j=n(36),l=n(19),b="FETCH_VIDEOS",u="LOADING",p="FETCH_VIDEO_SELECTED",v="FETCH_MORE_VIDEOS",O={loading:!1,videos:[],videoSelected:null,prevPageToken:"",nextPageToken:"",termToSearch:""},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case u:return Object(l.a)(Object(l.a)({},e),{},{loading:!0});case p:return Object(l.a)(Object(l.a)({},e),{},{videoSelected:c,loading:!1});case b:return Object(l.a)(Object(l.a)({},e),{},{loading:!1,videos:c.data.items,nextPageToken:c.data.nextPageToken,termToSearch:c.term});case v:return Object(l.a)(Object(l.a)({},e),{},{videos:[].concat(Object(j.a)(e.videos),Object(j.a)(c.data.items)),nextPageToken:c.data.nextPageToken,prevPageToken:c.data.prevPageToken});default:return e}},x=Object(d.combineReducers)({videos:h}),m=n(48),f=n(49),g=(n(83),n(17)),_=n(7),y=n(26),N=i.a.createContext(),T=function(e){var t=e.children,n=Object(a.useState)(!1),i=Object(y.a)(n,2),s=i[0],r=i[1];return s&&(document.querySelector("body").style.overflow="hidden"),!s&&(document.querySelector("body").style.overflow="unset"),Object(c.jsx)(N.Provider,{value:{sidebarToggle:s,handlerToggleSidebar:function(){r(!s)}},children:t})},w=i.a.createContext(),k=function(e){var t=e.children,n=Object(a.useState)("light"),i=Object(y.a)(n,2),s=i[0],r=i[1],o="light"===s?"#333":"#fff",d="light"===s?"#fff":"#333";return document.body.style.color=o,document.body.style.background=d,Object(c.jsx)(w.Provider,{value:{theme:s,toggleTheme:function(){r("light"===s?"dark":"light")},bgColor:d,color:o},children:t})},C=(n(84),n(54)),D=n.n(C),P=n(55),I=n.n(P),S=n(53),E=n.n(S),R={avatarStyle:{width:"50px",borderRadius:"50%"}},L=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("img",{style:R.avatarStyle,src:"https://avatars.githubusercontent.com/u/50033128?s=400&u=7637d6c0a6bb2ca0fb2f52931d784122b9383734&v=4",alt:"avatar"})})},W=(n(85),n(50)),F=n.n(W),H=function(){var e=Object(a.useState)(""),t=Object(y.a)(e,2),n=t[0],i=t[1],s=Object(_.f)();return Object(c.jsxs)("form",{className:"header__searchbar",onSubmit:function(e){e.preventDefault(),s.push("/search/".concat(n))},children:[Object(c.jsx)("input",{type:"text",value:n,onChange:function(e){return i(e.target.value)}}),Object(c.jsx)("button",{type:"submit",className:"searchBar__submit",children:Object(c.jsx)(F.a,{})})]})},M=(n(88),n(51)),q=n.n(M),A=n(52),V=n.n(A),B=function(){var e=Object(a.useContext)(N).handlerToggleSidebar;return Object(c.jsxs)("div",{className:"menuLeft",children:[Object(c.jsx)(q.a,{onClick:e}),Object(c.jsx)(g.b,{to:"/",children:Object(c.jsx)(V.a,{})})]})},G=function(){var e=Object(a.useContext)(w).bgColor;return Object(c.jsxs)("header",{className:"header",style:{background:e},children:[Object(c.jsx)(B,{}),Object(c.jsx)(H,{}),Object(c.jsxs)("div",{className:"header__iconsWrapper",children:[Object(c.jsx)(E.a,{}),Object(c.jsx)(D.a,{}),Object(c.jsx)(I.a,{}),Object(c.jsx)(L,{})]})]})},J=(n(89),n(64)),z=n.n(J),K=n(65),U=n.n(K),X=n(56),Y=n.n(X),Q=n(57),Z=n.n(Q),$=n(58),ee=n.n($),te=n(59),ne=n.n(te),ce=n(60),ae=n.n(ce),ie=n(61),se=n.n(ie),re=n(62),oe=n.n(re),de=n(63),je=n.n(de),le=[{title:"Home",icon:Y.a,path:"/"},{title:"Trending",icon:Z.a,path:"/trending"},{title:"Subscriptions",icon:ee.a,path:"/subscriptions"}],be=[{title:"Library",icon:ne.a,path:"/library"},{title:"History",icon:ae.a,path:"/history"},{title:"Your videos",icon:se.a,path:"/your_videos"},{title:"Watch Later",icon:oe.a,path:"/watch_later"},{title:"Liked videos",icon:je.a,path:"/liked_videos"}],ue=function(e){var t=e.Icon,n=e.title,i=e.path,s=Object(a.useContext)(N).handlerToggleSidebar;return Object(c.jsxs)(g.c,{to:i,className:"asidebarRow",exact:!0,activeClassName:"asidebarRow--selected",onClick:function(){setTimeout((function(){s()}),250)},children:[Object(c.jsx)(t,{className:"asidebarRow__icon"}),Object(c.jsx)("h2",{className:"asidebarRow__title",children:n})]})},pe=function(){var e=Object(a.useContext)(N).sidebarToggle,t=Object(a.useContext)(w),n=t.toggleTheme,i=t.theme,s=t.bgColor,r=t.color;return Object(c.jsxs)("div",{className:"asidebar ".concat(e&&"asidebar__active"),style:{background:s},children:[Object(c.jsxs)("div",{className:"asidebar__header",children:[Object(c.jsx)(B,{themeOption:!0}),Object(c.jsx)("div",{className:"asidebar__themeWrapper",children:"light"===i?Object(c.jsx)(z.a,{onClick:n,style:{fill:r}}):Object(c.jsx)(U.a,{onClick:n,style:{fill:r}})})]}),le.map((function(e){return Object(c.jsx)(ue,{title:e.title,Icon:e.icon,path:e.path},e.title)})),Object(c.jsx)("hr",{}),be.map((function(e){return Object(c.jsx)(ue,{title:e.title,Icon:e.icon,path:e.path},e.title)}))]})},ve=(n(38),n(18)),Oe=n.n(ve),he=n(28),xe=n(66),me=n.n(xe).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{key:"AIzaSyADkRndI8nKtx6rIXR5aL8BF2WG9Wy0wnM"}}),fe=function(e){return function(){var t=Object(he.a)(Oe.a.mark((function t(n){var c,a;return Oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:u}),t.next=3,me.get("/search",{params:{q:e,part:"snippet",maxResults:5,type:"video"}});case 3:c=t.sent,a=c.data,n({type:b,payload:{data:a,term:e}});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},ge=function(e){return function(){var t=Object(he.a)(Oe.a.mark((function t(n){var c,a;return Oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:u}),t.next=3,me.get("/videos",{params:{part:"snippet",chart:"mostPopular",videoCategoryId:e}});case 3:c=t.sent,a=c.data,n({type:b,payload:{data:a}});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_e=n(127),ye=function(e){var t=e.videoData,n=t.snippet.thumbnails.default.url,a=t.snippet.channelTitle,i=t.snippet.title,s=t.snippet.publishedAt;return Object(c.jsxs)(g.b,{className:"videoItem",to:function(){if(t.id.videoId){var e=t.id.videoId;return"/video/".concat(e)}var n=t.id;return"/video/".concat(n)},children:[Object(c.jsx)("img",{src:n,alt:"",className:"videoItem__thumbnail"}),Object(c.jsxs)("div",{className:"videoItem__info",children:[Object(c.jsx)(_e.a,{className:"videoItem__avatar",alt:a}),Object(c.jsxs)("div",{className:"videoItem__text",children:[Object(c.jsx)("h4",{children:i}),Object(c.jsx)("p",{children:a}),Object(c.jsxs)("p",{children:["'2M' ",s]})]})]})]})},Ne=n(126),Te=function(e){var t=e.titlePage,n=e.videosData,i=e.loading,s=Object(a.useRef)(null),r=Object(o.b)();Object(a.useEffect)((function(){var e=new IntersectionObserver(d,{root:null,rootMargin:"50px",threshold:1});s.current&&e.observe(s.current)}),[]);var d=function(e){e[0].isIntersecting&&r(function(){var e=Object(he.a)(Oe.a.mark((function e(t,n){var c,a,i,s,r,o;return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:return c=e.sent,a=c.videos,i=a.termToSearch,s=a.nextPageToken,e.next=8,me.get("/search",{params:{part:"snippet",q:i,maxResults:5,pageToken:s,type:"video"}});case 8:r=e.sent,o=r.data,t({type:v,payload:{data:o}});case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())};return Object(c.jsxs)("div",{className:"videosContainer",children:[t?Object(c.jsx)("h2",{className:"videosContainer__title",children:t}):"",Object(c.jsxs)("div",{className:"videosContainer__videos",children:[i||!n?Object(c.jsx)("div",{className:"videosContainer__spinnerWrapper",children:Object(c.jsx)(Ne.a,{})}):n.map((function(e,t){return Object(c.jsx)(ye,{videoData:e},t)})),Object(c.jsx)("div",{ref:s,children:Object(c.jsx)("h2",{children:"Loading..."})})]})]})},we=function(){var e=Object(o.c)((function(e){return e.videos})),t=e.videos,n=e.loading,i=Object(o.b)();return Object(a.useEffect)((function(){i(fe("recommended"))}),[i]),Object(c.jsx)("section",{className:"container",children:Object(c.jsx)(Te,{titlePage:"Recommended",videosData:t,loading:n})})},ke=function(){var e=Object(o.c)((function(e){return e.videos})),t=e.loading,n=e.videos,i=Object(o.b)();return Object(a.useEffect)((function(){i(fe("trending"))}),[i]),Object(c.jsx)("section",{className:"container",children:Object(c.jsx)(Te,{titlePage:"Trending",loading:t,videosData:n})})},Ce=function(){return Object(c.jsx)("section",{className:"container",children:Object(c.jsx)(Te,{titlePage:"Subscriptions"})})},De=function(e){var t=e.match.params.searchTerm,n=Object(o.c)((function(e){return e.videos})).videos,i=Object(o.b)();return Object(a.useEffect)((function(){i(fe(t))}),[i,t]),Object(c.jsx)("section",{className:"container",children:Object(c.jsx)(Te,{titlePage:"Videos related with ".concat(t),videosData:n})})},Pe=(n(109),n(67)),Ie=n.n(Pe),Se=n(68),Ee=n.n(Se),Re=n(69),Le=n.n(Re),We=n(70),Fe=n.n(We),He=n(71),Me=n.n(He),qe=function(e){var t=e.match.params.videoId,n=Object(o.b)();Object(a.useEffect)((function(){var e;n((e=t,function(){var t=Object(he.a)(Oe.a.mark((function t(n){var c,a,i;return Oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:u}),t.next=3,me.get("/videos",{params:{part:"snippet",id:e}});case 3:c=t.sent,a=c.data,i=a.items[0].snippet.categoryId,n({type:p,payload:a.items[0]}),n(ge(i));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}),[n,t]);var i=Object(o.c)((function(e){return e.videos})),s=i.videoSelected,r=i.loading,d=i.videos;return Object(c.jsx)("section",{className:"videoPage",children:Object(c.jsxs)("div",{className:"videoPage__videoContent",children:[Object(c.jsxs)("div",{className:"videoPage__firstColumn",children:[Object(c.jsx)("div",{className:"videoPage__videoWrapper",children:Object(c.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(t),title:"video player",className:"videoPage__video"})}),Object(c.jsx)("div",{className:"videoPage__videoDescription",children:function(){if(!r&&s){var e=s.snippet.title;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h4",{className:"videoDescription__title",children:e}),Object(c.jsxs)("div",{className:"videoDescription__description",children:[Object(c.jsx)("p",{children:"97.109 views \u2022 Date: Dic 16, 2020"}),Object(c.jsxs)("div",{className:"videoDescription__actions",children:[Object(c.jsxs)("button",{className:"videoDescription__action",children:[Object(c.jsx)(Ie.a,{}),Object(c.jsx)("p",{children:"4324"})]}),Object(c.jsxs)("button",{className:"videoDescription__action",children:[Object(c.jsx)(Ee.a,{}),Object(c.jsx)("p",{children:"48"})]}),Object(c.jsxs)("button",{className:"videoDescription__action",children:[Object(c.jsx)(Le.a,{}),Object(c.jsx)("p",{children:"compartir"})]}),Object(c.jsxs)("button",{className:"videoDescription__action",children:[Object(c.jsx)(Fe.a,{}),Object(c.jsx)("p",{children:"guardar"})]}),Object(c.jsx)("button",{className:"videoDescription__action",children:Object(c.jsx)(Me.a,{})})]})]})]})}return Object(c.jsx)("p",{children:"loading..."})}()})]}),Object(c.jsx)("div",{className:"videoPage__secondColumn",children:!r&&d?Object(c.jsx)(Te,{titlePage:"Related",videosData:d,loading:r}):null})]})})};var Ae=function(){return Object(c.jsx)(k,{children:Object(c.jsx)(T,{children:Object(c.jsx)("div",{className:"app",children:Object(c.jsxs)(g.a,{children:[Object(c.jsx)(G,{}),Object(c.jsxs)("div",{className:"app__page",children:[Object(c.jsx)(pe,{}),Object(c.jsxs)(_.c,{children:[Object(c.jsx)(_.a,{path:"/subscriptions",exact:!0,component:Ce}),Object(c.jsx)(_.a,{path:"/trending",exact:!0,component:ke}),Object(c.jsx)(_.a,{path:"/search/:searchTerm",exact:!0,component:De}),Object(c.jsx)(_.a,{path:"/video/:videoId",exact:!0,component:qe}),Object(c.jsx)(_.a,{path:"/",exact:!0,component:we})]})]})]})})})})},Ve=Object(d.createStore)(x,Object(m.composeWithDevTools)(Object(d.applyMiddleware)(f.a))),Be=function(){return Object(c.jsx)(o.a,{store:Ve,children:Object(c.jsx)(Ae,{})})};r.a.render(Object(c.jsx)(Be,{}),document.getElementById("root"))},38:function(e,t,n){},78:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){}},[[110,1,2]]]);
//# sourceMappingURL=main.1486ef61.chunk.js.map