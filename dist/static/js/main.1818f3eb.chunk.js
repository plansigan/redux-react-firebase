(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{215:function(e,t,a){e.exports=a(411)},220:function(e,t,a){},411:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(211),i=a.n(c),l=(a(220),a(6)),o=a(32),s=a(8),u=Object(s.b)(null,function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})})})}}})(function(e){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(l.c,{to:"/create"},"New Project")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"Log Out")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"/",className:"btn btn-floating pink lighten-1"},e.profile.initials)))}),m=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(l.c,{to:"/signup"},"Signup")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"/signin"},"Login")))},d=Object(s.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement(u,{profile:a}):r.a.createElement(m,null);return r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(l.b,{to:"/",className:"brand-logo"},"MarioPlan"),n))}),h=a(26),p=a(27),f=a(30),E=a(28),b=a(31),g=a(47),v=a.n(g),N=function(e){var t=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notifications"},t&&t.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"pink-text"},e.user),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"grey-text note-date"},v()(e.time.toDate()).fromNow()))})))))},j=function(e){var t=e.project;return r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,"Posted by the ",t.authorFirstName," ",t.authorLastName),r.a.createElement("p",{className:"grey-text"},v()(t.createdAt.toDate()).calendar())))},O=function(e){var t=e.projects;return r.a.createElement("div",{className:"project-list section"},t&&t.map(function(e){return r.a.createElement(l.b,{to:"/project/"+e.id,key:e.id},r.a.createElement(j,{project:e}))}))},w=a(22),y=a(17),C=function(e){function t(){return Object(h.a)(this,t),Object(f.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.auth,n=e.notifications;return a.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(O,{projects:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(N,{notifications:n})))):r.a.createElement(o.a,{to:"/signin"})}}]),t}(n.Component),S=Object(y.d)(Object(s.b)(function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}}),Object(w.firestoreConnect)([{collection:"projects"},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(C),R=Object(y.d)(Object(s.b)(function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}}),Object(w.firestoreConnect)([{collection:"projects"}]))(function(e){var t=e.project;return e.auth.uid?t?r.a.createElement("div",null,r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("div",null,v()(t.createdAt.toDate()).calendar(),"}")))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading project ...")):r.a.createElement(o.a,{to:"/signin"})}),x=a(29),k=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(x.a)({},e.target.id,[e.target.value]))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(o.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"LOGIN"),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null))))}}]),t}(n.Component),A=Object(s.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email[0],a.password[0]).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(t){e({type:"LOGIN_ERROR",err:t})})}));var a}}})(k),F=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",firstName:"",lastName:""},a.handleChange=function(e){a.setState(Object(x.a)({},e.target.id,[e.target.value]))},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(o.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign Up"),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null))))}}]),t}(n.Component),I=Object(s.b)(function(e){return{auth:e.firebase.auth,authError:e.auth.authError}},function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),l=c();i.auth().createUserWithEmailAndPassword(e.email[0],e.password[0]).then(function(t){return l.collection("users").doc(t.user.uid).set({firstName:e.firstName[0],lastName:e.lastName[0],initials:e.firstName[0].charAt(0)+e.lastName[0].charAt(0)})}).then(function(){t({type:"SIGNUP_SUCCESS"})}).catch(function(e){t({type:"SIGNUP_ERROR",err:e})})}}(t))}}})(F),P=a(41),U=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:""},a.handleChange=function(e){a.setState(Object(x.a)({},e.target.id,[e.target.value]))},a.handleSubmit=function(e){e.preventDefault(),a.props.createProject(a.state),a.props.history.push("/")},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create Project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Content"),r.a.createElement("textarea",{name:"content",id:"content",cols:"30",rows:"10",className:"materialize-textarea",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create")))):r.a.createElement(o.a,{to:"/signin"})}}]),t}(n.Component),L=Object(s.b)(function(e){return{auth:e.firebase.auth}},function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,i=a().firebase.auth;r.collection("projects").add(Object(P.a)({},e,{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:i.uid,createdAt:new Date})).then(function(){t({type:"CREATE_PROJECT",project:e})}).catch(function(e){console.log(e),t({type:"CREATE_PROJECT_ERROR",err:e})})}}(t))}}})(U);var _=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/",component:S}),r.a.createElement(o.b,{exact:!0,path:"/project/:id",component:R}),r.a.createElement(o.b,{exact:!0,path:"/signin",component:A}),r.a.createElement(o.b,{exact:!0,path:"/signup",component:I}),r.a.createElement(o.b,{exact:!0,path:"/create",component:L}))))},T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var W={authError:null},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(P.a)({},e,{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(P.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(P.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(P.a)({},e,{authError:t.err.message});default:return e}return e},D={projects:[{id:"1",title:"help me find peach",content:"blah blah blah"},{id:"2",title:"collect all the stars",content:"blah blah blah"},{id:"3",title:"egg hunt with yoshi",content:"blah blah blah"}]},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created project",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("create project error",t.err),e;default:return e}},B=a(62),M=Object(y.c)({auth:z,project:J,firestore:B.firestoreReducer,firebase:w.firebaseReducer}),q=a(214),H=a(91),K=a.n(H);a(405),a(409);K.a.initializeApp({apiKey:"AIzaSyA02496j8eqW0L5TS1TYznJr1LMHM_9m8c",authDomain:"net-ninja-marioplan-bea0e.firebaseapp.com",databaseURL:"https://net-ninja-marioplan-bea0e.firebaseio.com",projectId:"net-ninja-marioplan-bea0e",storageBucket:"",messagingSenderId:"862550842669",appId:"1:862550842669:web:bb2b1ab17fd1208d"}),K.a.firestore();var Y=K.a,$=Object(y.e)(M,Object(y.d)(Object(y.a)(q.a.withExtraArgument({getFirebase:w.getFirebase,getFirestore:B.getFirestore})),Object(B.reduxFirestore)(Y),Object(w.reactReduxFirebase)(Y,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));$.firebaseAuthIsReady.then(function(){i.a.render(r.a.createElement(s.a,{store:$},r.a.createElement(_,null)),document.getElementById("root"))}),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");T?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):G(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):G(t,e)})}}()}},[[215,1,2]]]);
//# sourceMappingURL=main.1818f3eb.chunk.js.map