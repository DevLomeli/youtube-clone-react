(this["webpackJsonpyoutube-clone"]=this["webpackJsonpyoutube-clone"]||[]).push([[0],{104:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){},137:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),s=n.n(a),i=n(30),r=n.n(i),o=(n(104),n(17)),l=n(31),d=n(58),j=n(29),b="FETCH_VIDEOS",u="LOADING",h="FETCH_VIDEO_SELECTED",O="FETCH_MORE_VIDEOS",p={loading:!1,videos:[],videoSelected:null,prevPageToken:"",nextPageToken:"",termToSearch:""},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case u:return Object(j.a)(Object(j.a)({},e),{},{loading:!0});case h:return Object(j.a)(Object(j.a)({},e),{},{videoSelected:c,loading:!1});case b:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,videos:c.data.items,nextPageToken:c.data.nextPageToken,termToSearch:c.term});case O:return Object(j.a)(Object(j.a)({},e),{},{videos:[].concat(Object(d.a)(e.videos),Object(d.a)(c.data.items)),nextPageToken:c.data.nextPageToken,prevPageToken:c.data.prevPageToken});default:return e}},x=n(69),v=n.n(x),f=Object(l.combineReducers)({videos:m,login:v.a}),g=n(70),_=n(71),y=(n(108),n(23)),N=n(6),w=n(34),C=s.a.createContext(),T=function(e){var t=e.children,n=Object(a.useState)(!1),s=Object(w.a)(n,2),i=s[0],r=s[1];return i&&(document.querySelector("body").style.overflow="hidden"),!i&&(document.querySelector("body").style.overflow="unset"),Object(c.jsx)(C.Provider,{value:{sidebarToggle:i,handlerToggleSidebar:function(){r(!i)}},children:t})},k=s.a.createContext(),D=function(e){var t=e.children,n=Object(a.useState)("light"),s=Object(w.a)(n,2),i=s[0],r=s[1],o="light"===i?"#333":"#fff",l="light"===i?"#fff":"#333";return document.body.style.color=o,document.body.style.background=l,Object(c.jsx)(k.Provider,{value:{theme:i,toggleTheme:function(){r("light"===i?"dark":"light")},bgColor:l,color:o},children:t})},S=(n(109),n(76)),I=n.n(S),P=n(77),E=n.n(P),R=n(75),L=n.n(R),W=n(162),A=(n(110),n(72)),F=n.n(A),q=function(){var e=Object(a.useState)(""),t=Object(w.a)(e,2),n=t[0],s=t[1],i=Object(N.f)();return Object(c.jsxs)("form",{className:"header__searchbar",onSubmit:function(e){e.preventDefault(),i.push("/search/".concat(n))},children:[Object(c.jsx)("input",{type:"text",value:n,onChange:function(e){return s(e.target.value)}}),Object(c.jsx)("button",{type:"submit",className:"searchBar__submit",children:Object(c.jsx)(F.a,{})})]})},B=(n(113),n(73)),z=n.n(B),H=n(74),M=n.n(H),V=function(){var e=Object(a.useContext)(C).handlerToggleSidebar;return Object(c.jsxs)("div",{className:"menuLeft",children:[Object(c.jsx)(z.a,{onClick:e}),Object(c.jsx)(y.b,{to:"/",children:Object(c.jsx)(M.a,{})})]})},Z=function(){var e=Object(a.useContext)(k).bgColor;return Object(c.jsxs)("header",{className:"header",style:{background:e},children:[Object(c.jsx)(V,{}),Object(c.jsx)(q,{}),Object(c.jsxs)("div",{className:"header__iconsWrapper",children:[Object(c.jsx)(L.a,{}),Object(c.jsx)(I.a,{}),Object(c.jsx)(E.a,{}),Object(c.jsx)(y.b,{to:"/login",children:Object(c.jsx)(W.a,{style:{width:"50px"}})})]})]})},G=(n(114),n(85)),J=n.n(G),K=n(86),U=n.n(K),X=n(78),$=n.n(X),Q=n(79),Y=n.n(Q),ee=n(80),te=n.n(ee),ne=n(81),ce=n.n(ne),ae=n(82),se=n.n(ae),ie=n(83),re=n.n(ie),oe=n(84),le=n.n(oe),de=[{title:"Home",icon:$.a,path:"/"},{title:"Trending",icon:Y.a,path:"/trending"},{title:"Subscriptions",icon:te.a,path:"/subscriptions"}],je=[{title:"Library",icon:ce.a,path:"/library"},{title:"History",icon:se.a,path:"/history"},{title:"Watch Later",icon:re.a,path:"/watch_later"},{title:"Liked videos",icon:le.a,path:"/liked_videos"}],be=function(e){var t=e.Icon,n=e.title,s=e.path,i=Object(a.useContext)(C).handlerToggleSidebar,r=Object(a.useContext)(k).color;return Object(c.jsxs)(y.c,{to:s,className:"asidebarRow",exact:!0,activeClassName:"asidebarRow--selected",onClick:function(){setTimeout((function(){i()}),250)},style:{color:r},children:[Object(c.jsx)(t,{className:"asidebarRow__icon"}),Object(c.jsx)("h2",{className:"asidebarRow__title",children:n})]})},ue=function(){var e=Object(a.useContext)(C).sidebarToggle,t=Object(a.useContext)(k),n=t.toggleTheme,s=t.theme,i=t.bgColor,r=t.color;return Object(c.jsxs)("div",{className:"asidebar ".concat(e&&"asidebar__active"),style:{background:i},children:[Object(c.jsxs)("div",{className:"asidebar__header",children:[Object(c.jsx)(V,{themeOption:!0}),Object(c.jsx)("div",{className:"asidebar__themeWrapper",children:"light"===s?Object(c.jsx)(J.a,{onClick:n,style:{fill:r}}):Object(c.jsx)(U.a,{onClick:n,style:{fill:r}})})]}),de.map((function(e){return Object(c.jsx)(be,{title:e.title,Icon:e.icon,path:e.path},e.title)})),je.map((function(e){return Object(c.jsx)(be,{title:e.title,Icon:e.icon,path:e.path},e.title)}))]})},he=(n(59),n(28)),Oe=n.n(he),pe=n(41),me=n(87),xe=n.n(me).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{key:"AIzaSyADkRndI8nKtx6rIXR5aL8BF2WG9Wy0wnM"}}),ve=function(e){return function(){var t=Object(pe.a)(Oe.a.mark((function t(n){var c,a;return Oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:u}),t.next=3,xe.get("/search",{params:{q:e,part:"snippet",maxResults:10,type:"video"}});case 3:c=t.sent,a=c.data,n({type:b,payload:{data:a,term:e}});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},fe=function(e){return function(){var t=Object(pe.a)(Oe.a.mark((function t(n){var c,a;return Oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:u}),t.next=3,xe.get("/videos",{params:{part:"snippet",chart:"mostPopular",videoCategoryId:e}});case 3:c=t.sent,a=c.data,n({type:b,payload:{data:a}});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},ge=function(e){var t=e.videoData,n=Object(a.useContext)(k).theme,s=t.snippet.thumbnails.default.url,i=t.snippet.channelTitle,r=t.snippet.title,o=t.snippet.publishedAt;return Object(c.jsxs)(y.b,{className:"videoItem",to:function(){if(t.id.videoId){var e=t.id.videoId;return"/video/".concat(e)}var n=t.id;return"/video/".concat(n)},style:{background:"light"===n?"#fff":"#e1e1e1"},children:[Object(c.jsx)("img",{src:s,alt:"",className:"videoItem__thumbnail"}),Object(c.jsxs)("div",{className:"videoItem__info",children:[Object(c.jsx)(W.a,{className:"videoItem__avatar",alt:i}),Object(c.jsxs)("div",{className:"videoItem__text",children:[Object(c.jsx)("h4",{children:r}),Object(c.jsx)("p",{children:i}),Object(c.jsxs)("p",{children:["'2M' ",o]})]})]})]})},_e=n(158),ye=function(e){var t=e.titlePage,n=e.videosData,s=e.loading,i=(e.column,Object(a.useRef)(null)),r=Object(o.b)();Object(a.useEffect)((function(){var e=new IntersectionObserver(l,{root:null,rootMargin:"50px",threshold:1});i.current&&e.observe(i.current)}),[]);var l=function(e){e[0].isIntersecting&&r(function(){var e=Object(pe.a)(Oe.a.mark((function e(t,n){var c,a,s,i,r,o;return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:return c=e.sent,a=c.videos,s=a.termToSearch,i=a.nextPageToken,e.next=8,xe.get("/search",{params:{part:"snippet",q:s,maxResults:10,pageToken:i,type:"video"}});case 8:r=e.sent,o=r.data,t({type:O,payload:{data:o}});case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())};return Object(c.jsxs)("div",{className:"videosContainer ",children:[t?Object(c.jsx)("h2",{className:"videosContainer__title",children:t}):"",Object(c.jsxs)("div",{className:"videosContainer__videos",children:[s||!n?Object(c.jsx)("div",{className:"videosContainer__spinnerWrapper",children:Object(c.jsx)(_e.a,{})}):n.map((function(e,t){return Object(c.jsx)(ge,{videoData:e},t)})),Object(c.jsx)("div",{ref:i,children:Object(c.jsx)("h2",{children:"Loading..."})})]})]})},Ne=function(){var e=Object(o.c)((function(e){return e.videos})),t=e.videos,n=e.loading,s=Object(o.b)();return Object(a.useEffect)((function(){s(ve("recommended"))}),[s]),Object(c.jsx)("section",{className:"section container",children:n?Object(c.jsx)(_e.a,{size:"6rem"}):Object(c.jsx)(ye,{titlePage:"Recommended",videosData:t,loading:n})})},we=function(){var e=Object(o.c)((function(e){return e.videos})),t=e.loading,n=e.videos,s=Object(o.b)();return Object(a.useEffect)((function(){s(ve("trending"))}),[s]),Object(c.jsx)("section",{className:"section container",children:t?Object(c.jsx)(_e.a,{size:"6rem"}):Object(c.jsx)(ye,{titlePage:"Trending",loading:t,videosData:n})})},Ce=function(){return Object(c.jsx)("section",{className:"container",children:Object(c.jsx)("h2",{children:"Coming soon..."})})},Te=function(e){var t=e.match.params.searchTerm,n=Object(o.c)((function(e){return e.videos})),s=n.videos,i=n.loading,r=Object(o.b)();Object(a.useEffect)((function(){r(ve(t))}),[r,t]);return Object(c.jsx)("section",{className:"section container",children:i?Object(c.jsx)(_e.a,{size:"6rem"}):Object(c.jsx)(ye,{titlePage:"Videos related with ".concat(t),videosData:s})})},ke=(n(134),n(88)),De=n.n(ke),Se=n(89),Ie=n.n(Se),Pe=n(90),Ee=n.n(Pe),Re=n(91),Le=n.n(Re),We=n(92),Ae=n.n(We),Fe=function(e){var t=e.match.params.videoId,n=Object(o.b)();Object(a.useEffect)((function(){var e;n((e=t,function(){var t=Object(pe.a)(Oe.a.mark((function t(n){var c,a,s;return Oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:u}),t.next=3,xe.get("/videos",{params:{part:"snippet",id:e}});case 3:c=t.sent,a=c.data,s=a.items[0].snippet.categoryId,n({type:h,payload:a.items[0]}),n(fe(s));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}),[n,t]);var s=Object(o.c)((function(e){return e.videos})),i=s.videoSelected,r=s.loading,l=s.videos;return Object(c.jsx)("section",{className:"videoPage",children:Object(c.jsxs)("div",{className:"videoPage__videoContent",children:[Object(c.jsxs)("div",{className:"videoPage__firstColumn",children:[Object(c.jsx)("div",{className:"videoPage__videoWrapper",children:Object(c.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(t),title:"video player",className:"videoPage__video"})}),Object(c.jsx)("div",{className:"videoPage__videoDescription",children:function(){if(!r&&i){var e=i.snippet.title;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h4",{className:"videoDescription__title",children:e}),Object(c.jsxs)("div",{className:"videoDescription__description",children:[Object(c.jsx)("p",{children:"97.109 views \u2022 Date: Dic 16, 2020"}),Object(c.jsxs)("div",{className:"videoDescription__actions",children:[Object(c.jsxs)("button",{className:"videoDescription__action",children:[Object(c.jsx)(De.a,{}),Object(c.jsx)("p",{children:"4324"})]}),Object(c.jsxs)("button",{className:"videoDescription__action",children:[Object(c.jsx)(Ie.a,{}),Object(c.jsx)("p",{children:"48"})]}),Object(c.jsxs)("button",{className:"videoDescription__action",children:[Object(c.jsx)(Ee.a,{}),Object(c.jsx)("p",{children:"compartir"})]}),Object(c.jsxs)("button",{className:"videoDescription__action",children:[Object(c.jsx)(Le.a,{}),Object(c.jsx)("p",{children:"guardar"})]}),Object(c.jsx)("button",{className:"videoDescription__action",children:Object(c.jsx)(Ae.a,{})})]})]})]})}return Object(c.jsx)("p",{children:"loading..."})}()})]}),Object(c.jsx)("div",{className:"videoPage__secondColumn",children:!r&&l?Object(c.jsx)(ye,{titlePage:"Related",videosData:l,loading:r,column:!0}):null})]})})},qe=function(){return Object(c.jsx)("section",{className:"container",children:Object(c.jsx)("h2",{children:"Coming soon..."})})},Be=function(){return Object(c.jsx)("section",{className:"container",children:Object(c.jsx)("h2",{children:"Coming soon..."})})},ze=function(){return Object(c.jsx)("section",{className:"container",children:Object(c.jsx)("h2",{children:"Coming soon..."})})},He=function(){return Object(c.jsx)("section",{className:"container",children:Object(c.jsx)("h2",{children:"Coming soon..."})})},Me=(n(135),n(136),n(95)),Ve=n(159),Ze=n(161),Ge=n(163),Je=n(160),Ke=function(){return Object(c.jsx)(Me.a,{initialValues:{email:"",password:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)?e.password||(t.password="Required"):t.email="Invalid email address":t.email="Required",t},onSubmit:function(e,t){var n=t.setSubmitting;setTimeout((function(){n(!1)}),2e3)},children:function(e){var t=e.values,n=e.errors,a=e.touched,s=e.handleChange,i=e.handleBlur,r=e.handleSubmit,o=e.isSubmitting;return Object(c.jsx)("form",{onSubmit:r,className:"loginForm",children:o?Object(c.jsx)(_e.a,{size:"5rem"}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(Ve.a,{className:"fieldset",children:[Object(c.jsx)(Ze.a,{type:"email",name:"email",onChange:s,onBlur:i,value:t.email,placeholder:"Email..."}),n.email&&a.email&&Object(c.jsx)(Ge.a,{error:!0,children:n.email})]}),Object(c.jsxs)(Ve.a,{className:"fieldset",children:[Object(c.jsx)(Ze.a,{type:"password",name:"password",onChange:s,onBlur:i,value:t.password,placeholder:"Password..."}),n.password&&a.password&&Object(c.jsx)(Ge.a,{error:!0,children:n.password})]}),Object(c.jsx)(Je.a,{type:"submit",disabled:o,children:"Enter"})]})})}})},Ue=function(){return Object(c.jsx)("section",{className:"container",children:Object(c.jsx)("div",{className:"loginWrapper",children:Object(c.jsx)(Ke,{})})})};var Xe=function(){return Object(c.jsx)(D,{children:Object(c.jsx)(T,{children:Object(c.jsx)("div",{className:"app",children:Object(c.jsxs)(y.a,{basename:"/youtube-clone-react",children:[Object(c.jsx)(Z,{}),Object(c.jsxs)("div",{className:"app__page",children:[Object(c.jsx)(ue,{}),Object(c.jsxs)(N.c,{children:[Object(c.jsx)(N.a,{path:"/subscriptions",exact:!0,component:Ce}),Object(c.jsx)(N.a,{path:"/trending",exact:!0,component:we}),Object(c.jsx)(N.a,{path:"/search/:searchTerm",exact:!0,component:Te}),Object(c.jsx)(N.a,{path:"/video/:videoId",exact:!0,component:Fe}),Object(c.jsx)(N.a,{path:"/library",exact:!0,component:qe}),Object(c.jsx)(N.a,{path:"/history",exact:!0,component:Be}),Object(c.jsx)(N.a,{path:"/watch_later",exact:!0,component:ze}),Object(c.jsx)(N.a,{path:"/liked_videos",exact:!0,component:He}),Object(c.jsx)(N.a,{path:"/login",exact:!0,component:Ue}),Object(c.jsx)(N.a,{path:"/",exact:!0,component:Ne})]})]})]})})})})},$e=Object(l.createStore)(f,Object(g.composeWithDevTools)(Object(l.applyMiddleware)(_.a))),Qe=function(){return Object(c.jsx)(o.a,{store:$e,children:Object(c.jsx)(Xe,{})})};r.a.render(Object(c.jsx)(Qe,{}),document.getElementById("root"))},59:function(e,t,n){},69:function(e,t){}},[[137,1,2]]]);
//# sourceMappingURL=main.f43e33dd.chunk.js.map