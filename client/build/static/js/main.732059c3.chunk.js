(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{47:function(e,t,a){e.exports=a(88)},52:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(20),r=a.n(c),s=(a(52),a(2)),i=a(13),o=a(12),m=a.n(o),u=a(15),d=a(16),p=a(5),f=a(3),E=function(){var e=Object(n.useState)(!1),t=Object(f.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(null),r=Object(f.a)(c,2),s=r[0],i=r[1];return{loading:a,request:Object(n.useCallback)(function(){var e=Object(u.a)(m.a.mark((function e(t){var a,n,c,r,s,o=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>1&&void 0!==o[1]?o[1]:"GET",n=o.length>2&&void 0!==o[2]?o[2]:"null",c=o.length>3&&void 0!==o[3]?o[3]:{},l(!0),e.prev=4,n&&(n=JSON.stringify(n),c["Content-Type"]="application/json"),e.next=8,fetch(t,{method:a,body:n,headers:c});case 8:return r=e.sent,e.next=11,r.json();case 11:if(s=e.sent,r.ok){e.next=14;break}throw new Error(s.message||"something went wrong");case 14:return l(!1),e.abrupt("return",s);case 18:throw e.prev=18,e.t0=e.catch(4),l(!1),i(e.t0.message),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:s,clearError:Object(n.useCallback)((function(){return i(null)}),[])}},h=function(){return Object(n.useCallback)((function(e){window.M&&e&&window.M.toast({html:e})}),[])},g=function(){var e=h(),t=E(),a=t.loading,c=t.request,r=t.error,i=t.clearError,o=Object(n.useState)({username:"",email:"",password:""}),g=Object(f.a)(o,2),b=g[0],v=g[1];Object(n.useEffect)((function(){e(r),i()}),[r,e,i]),Object(n.useEffect)((function(){window.M.updateTextFields()}),[]),Object(n.useEffect)((function(){window.M.updateTextFields()}),[]);var N=function(e){v(Object(p.a)({},b,Object(d.a)({},e.target.name,e.target.value)))},y=function(){var t=Object(u.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c("/api/auth/register","POST",Object(p.a)({},b));case 3:a=t.sent,e(a.message),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return l.a.createElement("div",{className:"row",style:{marginBottom:"0"}},l.a.createElement("div",{className:"col s10 m6 offset-s1 offset-m3",style:{textAlign:"center",marginTop:"2em"}},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-content"},l.a.createElement("span",{className:"card-title"},l.a.createElement("h5",null,"Sign Up")),l.a.createElement("div",null,l.a.createElement("div",{className:"input-field"},l.a.createElement("i",{className:"material-icons prefix"},"account_circle"),l.a.createElement("input",{className:"pink-input",id:"username",type:"text",name:"username",onChange:N}),l.a.createElement("label",{htmlFor:"username"},"Username")),l.a.createElement("div",{className:"input-field"},l.a.createElement("i",{className:"material-icons prefix"},"email"),l.a.createElement("input",{className:"pink-input",id:"email",type:"text",name:"email",onChange:N}),l.a.createElement("label",{htmlFor:"email"},"Email")),l.a.createElement("div",{className:"input-field"},l.a.createElement("i",{className:"material-icons prefix"},"lock"),l.a.createElement("input",{className:"pink-input",id:"password",type:"password",name:"password",onChange:N}),l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("div",{style:{paddingTop:"1.5em"}},l.a.createElement(s.b,{to:"/signin",className:"pink-text"},"Sign In"))))),l.a.createElement("div",{className:"card-action"},l.a.createElement("button",{className:"btn pink darken-2",style:{marginRight:"10px"},onClick:y,disabled:a},"Sign Up")))))};function b(){}var v=Object(n.createContext)({token:null,userId:null,email:null,username:null,login:b,logout:b,isAuthenticated:!1}),N=a(22),y=a.n(N),k=function(){var e=Object(n.useContext)(v),t=Object(i.g)(),a=h(),c=E(),r=c.loading,o=c.request,g=c.error,b=c.clearError,N=Object(n.useState)({email:"",password:""}),k=Object(f.a)(N,2),j=k[0],O=k[1];Object(n.useEffect)((function(){"Blocked"===y.a.parse(window.location.search).status&&(a("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d"),b(),setTimeout((function(){return t.push("/signin")}),2500)),a(g),b()}),[g,a,b,t]),Object(n.useEffect)((function(){window.M.updateTextFields()}),[]);var w=function(e){O(Object(p.a)({},j,Object(d.a)({},e.target.name,e.target.value)))},x=function(){var t=Object(u.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o("/api/auth/login","POST",Object(p.a)({},j));case 3:a=t.sent,e.login(a.token,a.userId,a.email,a.username),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return l.a.createElement("div",{className:"row",style:{marginBottom:"0"}},l.a.createElement("div",{className:"col s10 m6 offset-s1 offset-m3",style:{textAlign:"center",marginTop:"2em"}},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-content"},l.a.createElement("span",{className:"card-title"},l.a.createElement("h5",null,"Sign In")),l.a.createElement("div",null,l.a.createElement("div",{className:"input-field"},l.a.createElement("i",{className:"material-icons prefix"},"email"),l.a.createElement("input",{className:"pink-input",id:"email",type:"text",name:"email",onChange:w}),l.a.createElement("label",{htmlFor:"email"},"Email")),l.a.createElement("div",{className:"input-field"},l.a.createElement("i",{className:"material-icons prefix"},"lock"),l.a.createElement("input",{className:"pink-input",id:"password",type:"password",name:"password",onChange:w}),l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("div",{style:{paddingTop:"1.5em"}},l.a.createElement("a",{href:"/api/auth/google",className:"waves-effect waves-light btn deep-orange accent-4"},"Sign in with Google")),l.a.createElement("div",{style:{paddingTop:".5em"}},l.a.createElement("a",{href:"/api/auth/spotify",className:"waves-effect waves-light btn green accent-4"},"Sign in with Spotify")),l.a.createElement("p",{style:{paddingTop:"1.5em"}},"Don't have an account?"),l.a.createElement("div",null,l.a.createElement(s.b,{to:"/signup",className:"pink-text"},"Sign Up"))))),l.a.createElement("div",{className:"card-action"},l.a.createElement("button",{className:"btn pink darken-2",style:{marginRight:"10px"},onClick:x,disabled:r},"Sign In")))))},j=a(4),O=function(e){return{type:"UPDATE_PLAYLISTS",payload:e}},w=function(e){return{type:"UPDATE_QUERY",payload:e}},x=a(6),S=a.n(x),C=function(e){var t=e.album,a=Object(n.useState)(),c=Object(f.a)(a,2),r=c[0],s=c[1],i=Object(j.b)();return l.a.createElement("div",null,l.a.createElement("div",{id:"modal1",className:"modal"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("input",{name:"playlistName",className:"pink-input",type:"text",onChange:function(e){s(e.target.value)}})),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{className:"btn pink darken-2 modal-close",onClick:function(){S.a.post("/api/users/"+JSON.parse(localStorage.getItem("userData")).userId+"/playlists/create/",{playlistName:r,album:t}).then((function(e){return i(O(e.data))}))}},"OK"))))},_=function(){return l.a.createElement("div",{className:"center-align",style:{marginTop:"12em"}},l.a.createElement("div",{className:"preloader-wrapper big active"},l.a.createElement("div",{className:"spinner-layer",style:{borderColor:"#E91E63"}},l.a.createElement("div",{className:"circle-clipper left"},l.a.createElement("div",{className:"circle"})),l.a.createElement("div",{className:"gap-patch"},l.a.createElement("div",{className:"circle"})),l.a.createElement("div",{className:"circle-clipper right"},l.a.createElement("div",{className:"circle"})))))},I=a(23),D=a.n(I),T=function(e){var t=e.albums,a=Object(j.c)((function(e){return Object.keys(e.playlists)})),c=Object(i.g)(),r=Object(j.b)(),s=Object(n.useState)(),o=Object(f.a)(s,2),m=o[0],u=o[1];Object(n.useEffect)((function(){D.a.Dropdown.init(document.querySelectorAll(".dropdown-trigger"),{constrainWidth:!1}),D.a.Modal.init(document.querySelectorAll(".modal"),{endingTop:"30%"})}));return t.length?l.a.createElement("div",{className:"items-wrapper"},t.map((function(e){return e.image[0]["#text"]&&l.a.createElement("div",{className:"card album-card",key:e.name+" "+e.url},l.a.createElement("div",{className:"card-image"},l.a.createElement("img",{src:e.image[2]["#text"],alt:"",onMouseEnter:function(){u(e)},onClick:function(){c.push("/albums/".concat((e.artist.name||e.artist).split(" ").join("+")+"/"+e.name.split(" ").join("+")))}})),l.a.createElement("div",{className:"card-content"},l.a.createElement("h5",null,e.artist.name||e.artist),l.a.createElement("p",null,e.name)),localStorage.getItem("userData")&&l.a.createElement("div",null,l.a.createElement("div",{"data-target":"dropdown1",className:"dropdown-trigger album-button material-icons"}),l.a.createElement("ul",{id:"dropdown1",className:"dropdown-content"},a.map((function(e){return l.a.createElement("li",{key:e},l.a.createElement("a",{onClick:function(t){t.preventDefault(),function(e){S.a.post("/api/users/"+JSON.parse(localStorage.getItem("userData")).userId+"/playlists/"+e+"/update/",{playlistName:e,currentAlbum:m}).then((function(e){r(O(e.data))}))}(e)},href:""},e))})),l.a.createElement("li",{className:"divider",tabIndex:"-1"}),l.a.createElement("li",null,l.a.createElement("a",{className:"modal-trigger",href:"#modal1"},l.a.createElement("i",{className:"material-icons"},"add"),"new playlist")))))})),l.a.createElement(C,{album:m})):l.a.createElement(_,null)},A="52c7f1e1257548e0650675e63ead469c",U=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.query})),a=Object(j.c)((function(e){return e.tags})),c=Object(j.c)((function(e){return e.playlists})),r=Object(n.useState)({}),i=Object(f.a)(r,2),o=i[0],m=i[1];return Object(n.useEffect)((function(){t.length?fetch("https://ws.audioscrobbler.com/2.0/?method=album.search&album=".concat(t,"&api_key=").concat(A,"&limit=10&format=json")).then((function(e){return e.json()})).then((function(e){var t=e.results.albummatches.album;m(t)})):fetch("https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=".concat("cemetary_party","&api_key=").concat(A,"&period=6month&format=json")).then((function(e){return e.json()})).then((function(e){var t,a=null===(t=e.topalbums)||void 0===t?void 0:t.album;m(a.filter((function(e,t){return t===a.indexOf(e)})))})),Object.values(c).map((function(t){return t.map((function(t){return fetch("http://ws.audioscrobbler.com/2.0/?method=album.gettoptags&artist=".concat(t.artist.name||t.artist,"&album=").concat(t.name,"&api_key=").concat(A,"&format=json")).then((function(e){return e.json()})).then((function(t){t.toptags.tag[0]&&e({type:"UPDATE_TAG",payload:t.toptags.tag[0].name})})),t})),t}))}),[t,e,c]),l.a.createElement("div",null,localStorage.getItem("userData")&&l.a.createElement("div",{className:"tags"},l.a.createElement("h4",null,"Top tags"),a.length?a.map((function(e){return l.a.createElement(s.b,{to:{pathname:"/albums/tags/".concat(e)},key:e,style:{textTransform:"none"},className:"btn-small btn-flat"},e)})):l.a.createElement("p",null,"here will be your top tags")),l.a.createElement(T,{albums:o,playlists:c}))},q=a(41),P=a.n(q),L=function(e){var t=e.albums,a=e.playlistName,c=Object(j.b)(),r=Object(i.h)(),s=Object(i.g)(),o=Object(n.useState)(""),m=Object(f.a)(o,2),u=m[0],d=m[1],p=Object(n.useState)(""),E=Object(f.a)(p,2),h=E[0],g=E[1];Object(n.useEffect)((function(){g(t.map((function(e){return e.artist.name||e.artist})).join(", ")),t.length?t.length<4?d("url(".concat(t[0].image[2]["#text"],")")):d("url(".concat(t[0].image[2]["#text"],") left top no-repeat, url(").concat(t[1].image[2]["#text"],") right top no-repeat, url(").concat(t[2].image[2]["#text"],") left bottom no-repeat, url(").concat(t[3].image[2]["#text"],") right bottom no-repeat")):d("#ccc")}),[t]);var b={playlistCover:{height:"20em",background:"".concat(u)}};return t&&l.a.createElement("div",{className:"card playlist-card"},l.a.createElement("div",{className:"card-image",onClick:function(){return s.push("".concat(r.pathname,"/").concat(a))}},t.length?t.length>3?l.a.createElement("div",{className:"playlist-cover",style:b.playlistCover}):l.a.createElement("img",{src:t[t.length-1].image[2]["#text"],alt:"",style:{height:"280px"}}):l.a.createElement("div",{className:"playlist-cover",style:b.playlistCover}),l.a.createElement("span",{className:"card-title playlist-title"},a,l.a.createElement("span",{className:"playlist-actions"},l.a.createElement("i",{className:"delete-playlist material-icons",onClick:function(e){e.stopPropagation(),S.a.post("/api/users/"+JSON.parse(localStorage.getItem("userData")).userId+"/playlists/"+a+"/delete/").then((function(e){c(O(e.data))}))}},"delete")))),l.a.createElement("div",{className:"card-content"},l.a.createElement(P.a,{line:2,element:"p",truncateText:"\u2026",text:h})))},J=function(){var e=Object(j.c)((function(e){return e.playlists}));return e?Object.keys(e).length?l.a.createElement("div",{className:"items-wrapper"},Object.keys(e).map((function(t){return l.a.createElement(L,{key:t,albums:e[t],playlistName:t})}))):l.a.createElement(_,null):l.a.createElement("h5",{style:{textAlign:"center",marginTop:"4em"}},"Nothing here yet",l.a.createElement("span",{role:"img","aria-label":"rat"},"\ud83d\udc00"))},M=function(e){var t=Object(i.g)(),a=Object(j.b)(),n=Object(j.c)((function(t){return t.playlists[e.match.params.playlistName]}));return n?l.a.createElement("ul",{className:"collection"},l.a.createElement("li",{className:"collection-item active"},l.a.createElement("button",{className:"btn-floating btn-flat grey darken-4"},l.a.createElement("i",{className:"material-icons",onClick:function(){return t.push("/".concat(e.match.params.id,"/playlists"))}},"keyboard_arrow_left")),l.a.createElement("h5",null,e.match.params.playlistName)),l.a.createElement("li",{className:"collection-item"},l.a.createElement("div",{className:"items-wrapper"},function(e,n){return e.map((function(e){return l.a.createElement("div",{className:"card album-card",key:e.name},l.a.createElement("div",{className:"card-image"},l.a.createElement("img",{src:e.image[2]["#text"],alt:"",onClick:function(){t.push("/albums/".concat((e.artist.name||e.artist).split(" ").join("+")+"/"+e.name.split(" ").join("+")))}})),l.a.createElement("div",{className:"card-content"},l.a.createElement("h5",null,e.artist.name||e.name),l.a.createElement("p",null,e.name)),l.a.createElement("div",{className:"album-button material-icons added",onClick:function(){return function(e,t){S.a.post("/api/users/"+JSON.parse(localStorage.getItem("userData")).userId+"/playlists/"+t+"/deleteAlbum/",[t,e]).then((function(e){a(O(e.data))}))}(e.name,n)}}))}))}(n,e.match.params.playlistName)))):l.a.createElement(_,null)},B=function(){return l.a.createElement("div",{className:"row",style:{marginTop:"1.5em"}},l.a.createElement(i.b,{exact:!0,path:"/:id/playlists"},l.a.createElement("h4",null,"Playlists"),l.a.createElement(J,null)),l.a.createElement(i.b,{path:"/:id/playlists/:playlistName",component:M}))},F=a(42),R=a(43),G=a(45),X=a(44),Q=a(46),Y=function(e){function t(e){var a;return Object(F.a)(this,t),(a=Object(G.a)(this,Object(X.a)(t).call(this,e))).renderList=function(){return a.state.users.map((function(e){return l.a.createElement("tr",{key:e._id,onClick:function(t){var n=e._id;a.setState((function(e){var t=e.users,a=e.allChecked;return a=(t=t.map((function(e){return e._id===n?Object(p.a)({},e,{isChecked:!e.isChecked}):e}))).every((function(e){return e.isChecked})),{users:t,allChecked:a}}))},className:a.state.users.find((function(t){return t._id===e._id})).isChecked?"checked":void 0},l.a.createElement("td",null,l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",key:e._id,name:e.username,value:e.username,checked:e.isChecked,onChange:a.handleClick,className:"filled-in"}),l.a.createElement("span",null))),l.a.createElement("td",null,e.username),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e._id),l.a.createElement("td",null,new Date(e.registrationDate).toLocaleString()),l.a.createElement("td",null,new Date(e.lastLoginDate).toLocaleString()),l.a.createElement("td",{style:{width:"70px"},className:e.status},e.status))}))},a.handleClick=function(e){var t=e.target.name,n=e.target.checked;a.setState((function(e){var a=e.users,l=e.allChecked;return"checkAll"===t?(l=n,a=a.map((function(e){return Object(p.a)({},e,{isChecked:n})}))):l=(a=a.map((function(e){return e.username===t?Object(p.a)({},e,{isChecked:!e.isChecked}):e}))).every((function(e){return e.isChecked})),{users:a,allChecked:l}}))},a.deleteUser=function(){a.state.users.filter((function(e){return e.isChecked})).forEach((function(e){S.a.delete("/api/users/"+e._id).then((function(e){console.log(e.data)})).then((function(){a.setState((function(t){return{users:t.users.filter((function(t){return t._id!==e._id}))}})),JSON.parse(localStorage.getItem("userData")).userId===e._id&&(localStorage.removeItem("userData"),window.location.reload())}))}))},a.blockUser=function(){var e=a.state.users.filter((function(e){return e.isChecked}));e.forEach((function(e){e.status="Blocked",a.setState((function(t){return{users:t.users.map((function(t){return Object(p.a)({},t,{user:e})}))}})),S.a.post("/api/users/"+e._id+"/update/",e).then((function(e){return console.log(e.data)}))})),e.some((function(e){return JSON.parse(localStorage.getItem("userData")).userId===e._id}))&&(localStorage.removeItem("userData"),window.location.reload())},a.unblockUser=function(){a.state.users.filter((function(e){return e.isChecked})).forEach((function(e){e.status="Active",a.setState((function(t){return{users:t.users.map((function(t){return Object(p.a)({},t,{user:e})}))}})),S.a.post("/api/users/"+e._id+"/update/",e).then((function(e){return console.log(e.data)}))}))},a.state={allChecked:!1,users:[]},a}return Object(Q.a)(t,e),Object(R.a)(t,[{key:"componentDidMount",value:function(){var e=this;S.a.get("/api/users").then((function(t){e.setState({users:t.data.map((function(e){return Object(p.a)({},e,{isChecked:!1})}))})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h4",null,"Users"),l.a.createElement("table",{className:"table"},l.a.createElement("thead",{className:"thead-light"},l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("label",{htmlFor:"checkAll"},l.a.createElement("input",{id:"checkAll",name:"checkAll",type:"checkbox",className:"filled-in",onChange:this.handleClick,checked:this.state.allChecked}),l.a.createElement("span",null))),l.a.createElement("th",null,"Username"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Registration Date"),l.a.createElement("th",null,"Last Login Date"),l.a.createElement("th",null,"Status"))),l.a.createElement("tbody",null,this.renderList())),l.a.createElement("p",null,l.a.createElement("button",{onClick:this.deleteUser,className:"btn pink darken-2 waves-effect waves-light"},"Delete",l.a.createElement("i",{className:"material-icons-outlined right"},"delete")),l.a.createElement("button",{onClick:this.blockUser,className:"btn pink darken-2 waves-effect waves-light",style:{marginLeft:"1em",marginRight:"1em"}},"Block",l.a.createElement("i",{className:"material-icons-outlined right"},"lock")),l.a.createElement("button",{onClick:this.unblockUser,className:"btn pink darken-2 waves-effect waves-light"},"Unblock",l.a.createElement("i",{className:"material-icons right"},"lock_open"))))}}]),t}(n.Component),K=function(e){var t=Object(n.useState)({}),a=Object(f.a)(t,2),c=a[0],r=a[1],o=Object(i.g)();return Object(n.useEffect)((function(){var t,a=e.match.params;fetch("http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=".concat("52c7f1e1257548e0650675e63ead469c","&artist=").concat(a.artist,"&album=").concat(a.albumName,"&lang=en&format=json")).then((function(e){return e.json()})).then((function(e){t=e.album,r(t)})),/[a-z]/i.test(a.albumName)?fetch("https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srwhat=text&srsearch=".concat(a.albumName+"+"+a.artist,"&format=json")).then((function(e){return e.json()})).then((function(e){e.query.search.length&&fetch("https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=extracts&exintro&explaintext&titles=".concat(e.query.search[0].title,"&format=json")).then((function(e){return e.json()})).then((function(e){r(Object(p.a)({},t,{description:Object.values(e.query.pages)[0].extract}))}))})):fetch("https://ru.wikipedia.org/w/api.php?origin=*&action=query&list=search&srwhat=text&srsearch=".concat(a.albumName+"+"+a.artist,"&format=json")).then((function(e){return e.json()})).then((function(e){e.query.search.length&&fetch("https://ru.wikipedia.org/w/api.php?origin=*&action=query&prop=extracts&exintro&explaintext&titles=".concat(e.query.search[0].title,"&format=json")).then((function(e){return e.json()})).then((function(e){r(Object(p.a)({},t,{description:Object.values(e.query.pages)[0].extract}))}))}))}),[e]),c&&0!==Object.values(c).length&&l.a.createElement("div",{className:"row album-details",style:{marginTop:"1.5em"}},l.a.createElement("div",{className:"col s2 m1 go-back"},l.a.createElement("button",{className:"btn-floating btn-flat grey darken-4"},l.a.createElement("i",{className:"material-icons",onClick:function(){return o.goBack()}},"keyboard_arrow_left"))),l.a.createElement("div",{className:"col s12 m5"},l.a.createElement("img",{src:c.image[5]["#text"],alt:""}),l.a.createElement("div",{className:"tags"},c.tags.tag.map((function(e){return l.a.createElement(s.b,{to:{pathname:"/albums/tags/".concat(e.name)},key:e.name,style:{textTransform:"none"},className:"btn-small btn-flat"},e.name)})))),l.a.createElement("div",{className:"album-description col s12 m6"},l.a.createElement("h5",null,c.artist),l.a.createElement("h4",null,c.name),l.a.createElement("p",null,c.description)))},V=function(e){var t=Object(n.useState)({}),a=Object(f.a)(t,2),c=a[0],r=a[1],s=Object(i.g)();return Object(n.useEffect)((function(){var t=e.match.params;fetch("https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=".concat(t.tag,"&api_key=").concat("52c7f1e1257548e0650675e63ead469c","&limit=20&format=json")).then((function(e){return e.json()})).then((function(e){var t=e.albums.album;r(t.filter((function(e,a){return a===t.indexOf(e)})))}))}),[e]),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s2 m1 go-back"},l.a.createElement("button",{className:"btn-floating btn-flat grey darken-4"},l.a.createElement("i",{className:"material-icons",onClick:function(){return s.goBack()}},"keyboard_arrow_left"))),l.a.createElement("h4",null,"Tags: ",l.a.createElement("span",{className:"tag"},e.match.params.tag)),l.a.createElement(T,{albums:c}))},z=a(24),H=a.n(z),W=function(e){var t=e.isAuthenticated,a=e.email,c=e.username,r=e.userId,o=Object(i.g)(),m=Object(j.b)(),u=Object(n.useContext)(v),d=function(e){e.preventDefault(),u.logout(),o.push("/")};return Object(n.useEffect)((function(){var e=document.querySelector(".sidenav");H.a.Sidenav.init(e,{edge:"left",inDuration:250});var t=document.querySelector(".autocomplete");H.a.Autocomplete.init(t,{data:{}})})),t?l.a.createElement("div",null,l.a.createElement("div",{className:"navbar-fixed"},l.a.createElement("nav",{className:"grey darken-4"},l.a.createElement("div",{className:"container nav-wrapper"},l.a.createElement(s.c,{to:"#","data-target":"slide-out",className:"sidenav-trigger show-on-large"},l.a.createElement("i",{className:"material-icons"},"menu")),l.a.createElement(s.c,{to:"/home",className:"brand-logo left hide-on-small-only",onClick:function(){return m(w(""))}},"MusicSearcher"),l.a.createElement("ul",{id:"nav-mobile",className:"right"},l.a.createElement("li",{className:"search"},l.a.createElement("div",{className:"input-field"},l.a.createElement("i",{className:"material-icons prefix"},"search"),l.a.createElement("input",{type:"text",id:"autocomplete-input",className:"autocomplete",onChange:function(e){o.push("/home"),m(w(e.target.value))}}))),l.a.createElement("li",null,l.a.createElement(s.c,{to:"/",onClick:d},l.a.createElement("i",{className:"material-icons right hide-on-small-only"},"logout"))))))),l.a.createElement("ul",{id:"slide-out",className:"sidenav"},l.a.createElement("li",null,l.a.createElement("div",{className:"user-view center-align"},l.a.createElement("div",{className:"background"},l.a.createElement("img",{alt:"",src:"https://img.discogs.com/XOPpJ3wQribJGdk-rb4-yAfiBtM=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-2821873-1445885288-1628.jpeg.jpg"})),l.a.createElement("img",{alt:"",className:"circle",style:{position:"relative",left:"50%",marginLeft:"-25px"},src:"https://sun9-50.userapi.com/c850024/v850024986/c3654/Sd5DUQOKadU.jpg"}),l.a.createElement("span",{className:"white-text name"},c),l.a.createElement("span",{className:"white-text email"},a))),l.a.createElement("li",null,l.a.createElement(s.c,{to:"/home"},l.a.createElement("i",{className:"material-icons"},"home"),"Home")),l.a.createElement("li",null,l.a.createElement(s.c,{to:"/"+r+"/playlists"},l.a.createElement("i",{className:"material-icons"},"library_music"),"My Playlists")),l.a.createElement("li",null,l.a.createElement(s.c,{to:"/users"},l.a.createElement("i",{className:"material-icons"},"people"),"Users")),l.a.createElement("li",null,l.a.createElement("div",{className:"divider"})),l.a.createElement("li",null,l.a.createElement(s.c,{to:"/",className:"sidenav-close",onClick:d},l.a.createElement("i",{className:"material-icons"},"logout"),"Logout")))):l.a.createElement("div",{className:"navbar-fixed"},l.a.createElement("nav",{className:"grey darken-4"},l.a.createElement("div",{className:"container nav-wrapper"},l.a.createElement(s.c,{to:"/",className:"brand-logo left"},"MusicSearcher"),l.a.createElement("ul",{id:"nav-mobile",className:"right"},l.a.createElement("li",null,l.a.createElement(s.c,{to:"/signin"},"Sign In"))))))};var Z=a(17),$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_PLAYLISTS":return t.payload;default:return e}},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_QUERY":return t.payload;default:return e}},te=a(29),ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_TAG":return Object(te.a)(new Set([].concat(Object(te.a)(e),[t.payload])));default:return e}},ne=Object(Z.b)({playlists:$,query:ee,tags:ae}),le=(a(87),Object(Z.c)(ne,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));r.a.render(l.a.createElement(j.a,{store:le},l.a.createElement((function(){var e=function(){var e=Object(n.useState)(null),t=Object(f.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(null),r=Object(f.a)(c,2),s=r[0],i=r[1],o=Object(n.useState)(null),m=Object(f.a)(o,2),u=m[0],d=m[1],p=Object(n.useState)(null),E=Object(f.a)(p,2),h=E[0],g=E[1],b=Object(n.useCallback)((function(e,t,a,n){l(e),i(t),d(a),g(n),localStorage.setItem("userData",JSON.stringify({userId:t,token:e,email:a,username:n}))}),[]),v=Object(n.useCallback)((function(){l(null),i(null),d(null),g(null),localStorage.removeItem("userData")}),[]);return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&b(e.token,e.userId,e.email,e.username)}),[b]),{login:b,logout:v,token:a,userId:s,email:u,username:h}}(),t=e.token,a=e.login,c=e.logout,r=e.userId,o=e.email,m=e.username,u=!!t,d=function(e,t){return e?l.a.createElement(i.d,null,l.a.createElement(i.b,{path:"/home"},l.a.createElement(U,null)),l.a.createElement(i.b,{path:"/"+t+"/playlists"},l.a.createElement(B,null)),l.a.createElement(i.b,{path:"/albums/tags/:tag",component:V}),l.a.createElement(i.b,{path:"/albums/:artist/:albumName",component:K}),l.a.createElement(i.b,{path:"/users"},l.a.createElement(Y,null)),l.a.createElement(i.a,{to:"/"+t+"/playlists"})):l.a.createElement(i.d,null,l.a.createElement(i.b,{path:"/albums/tags/:tag",component:V}),l.a.createElement(i.b,{path:"/albums/:artist/:albumName",component:K}),l.a.createElement(i.b,{path:"/signin"},l.a.createElement(k,null)),l.a.createElement(i.b,{path:"/signup"},l.a.createElement(g,null)),l.a.createElement(i.b,{path:"/"},l.a.createElement(U,null)),l.a.createElement(i.a,{to:"/"}))}(u,r),p=Object(j.b)();return Object(n.useEffect)((function(){var e=y.a.parse(window.location.search);e.token&&a(e.token,e.id,e.email,e.username)})),Object(n.useEffect)((function(){u&&r&&S.a.get("/api/users/"+r+"/playlists").then((function(e){p(O(e.data))})).catch((function(e){return console.log(e)}))})),l.a.createElement(v.Provider,{value:{token:t,login:a,logout:c,userId:r,isAuthenticated:u,email:o,username:m}},l.a.createElement(s.a,null,l.a.createElement(W,{isAuthenticated:u,email:o,username:m,userId:r}),l.a.createElement("div",{className:"container"},d)))}),null)),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.732059c3.chunk.js.map