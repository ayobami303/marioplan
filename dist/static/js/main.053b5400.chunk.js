(window.webpackJsonpmarioplan=window.webpackJsonpmarioplan||[]).push([[0],{217:function(e,t,a){e.exports=a(414)},407:function(e,t,a){},414:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(90),i=a.n(c),l=a(5),o=a(15),s=a(215),u=a(51),m=a(24),p=(a(407),a(6)),d=a(34),h=Object(l.b)(null,{signOut:function(){return function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})}).catch(function(t){e({type:"SIGNOUT_ERROR",err:t})})}}})(function(e){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(p.c,{to:"/create"},"New Project")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"Sign Out")),r.a.createElement("li",null,r.a.createElement(p.c,{to:"/",className:"btn btn-floating pink ligthen-1"},e.profile.initials)))}),f=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(p.c,{to:"/signup"},"Signup")),r.a.createElement("li",null,r.a.createElement(p.c,{to:"/signin"},"Login")))};var E=Object(l.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){var t=e.auth,a=e.profile;return r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(p.b,{to:"/",className:"brand-logo"},"MarioPlan"),t.uid&&r.a.createElement(h,{profile:a}),!t.uid&&r.a.createElement(f,null)))}),b=a(29),g=a(30),O=a(32),v=a(31),j=a(33),y=a(50),N=a.n(y),w=function(e){var t=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notifications"},t&&t.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"pink-text"},e.user," "),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"grey-text"}," ",N()(e.time.toDate()).fromNow()))})))))},S=function(e){var t=e.project;return r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,"Posted by ",t.authorFirstname," ",t.authorLastname),r.a.createElement("p",{className:"grey-text"},N()(t.createdAt.toDate().toString()).calendar())))},C=function(e){var t=e.projects;return r.a.createElement("div",{className:"project-list section"},t&&t.map(function(e){return r.a.createElement(p.b,{to:"/project/".concat(e.id),key:e.id},r.a.createElement(S,{project:e}))}))},P=function(e){function t(){return Object(b.a)(this,t),Object(O.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.auth,n=e.notifications;return a.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"s12 m6 col"},r.a.createElement(C,{projects:t})),r.a.createElement("div",{className:"s12 m5 offset-m1 col"},r.a.createElement(w,{notifications:n})))):r.a.createElement(d.a,{to:"/signin"})}}]),t}(n.Component),R=Object(o.d)(Object(l.b)(function(e){return{projects:e.firestore.ordered.projects,notifications:e.firestore.ordered.notifications,auth:e.firebase.auth}},null),Object(m.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:5,orderBy:["time","desc"]}]))(P);var F=Object(o.d)(Object(l.b)(function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}}),Object(m.firestoreConnect)([{collection:"projects"}]))(function(e){var t=e.project;return e.auth.uid?r.a.createElement("div",null,t&&r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Posted by ",t.authorFirstname," ",t.authorLastname),r.a.createElement("div",null,N()(t.createdAt.toDate().toString()).calendar())))),!t&&r.a.createElement("div",null,r.a.createElement("p",{className:"center"},"Loading project..."))):r.a.createElement(d.a,{to:"/signin"})}),k=a(14),x=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(O.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(k.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state),a.props.signIn(a.state)},a}return Object(j.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(d.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{onChange:this.handleChange,type:"email",id:"email"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{onChange:this.handleChange,type:"password",id:"password"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null))))}}]),t}(n.Component);var I=Object(l.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},{signIn:function(e){return function(t,a,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(e.email,e.password).then(function(){t({type:"LOGIN_SUCCESS"})}).catch(function(e){t({type:"LOGIN_ERROR",err:e})})}}})(x),A=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(O.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",firstname:"",lastname:""},a.handleChange=function(e){a.setState(Object(k.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state),a.props.signUp(a.state)},a}return Object(j.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(d.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{onChange:this.handleChange,type:"email",id:"email"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{onChange:this.handleChange,type:"password",id:"password"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstname"},"Firstname"),r.a.createElement("input",{onChange:this.handleChange,type:"text",id:"firstname"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastname"},"Lastname"),r.a.createElement("input",{onChange:this.handleChange,type:"text",id:"lastname"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign Up"),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null))))}}]),t}(n.Component);var D=Object(l.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},{signUp:function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),l=c();i.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){return l.collection("users").doc(t.user.uid).set({firstname:e.firstname,lastname:e.lastname,initials:e.firstname[0]+e.lastname[0]})}).then(function(){t({type:"SIGNUP_SUCCESS"})}).catch(function(e){t({type:"SIGNUP_ERROR",err:e})})}}})(A);function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var L=function(e){return function(t,a,n){var r=(0,n.getFirestore)(),c=a().firebase.profile,i=a().firebase.auth.uid;r.collection("projects").add(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(a,!0).forEach(function(t){Object(k.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{authorId:i,authorFirstname:c.firstname,authorLastname:c.lastname,createdAt:new Date})).then(function(){t({type:"CREATE_PROJECT",project:e})}).catch(function(e){t({type:"CREATE_PROJECT_ERROR",err:e})})}},_=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(O.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:""},a.handleChange=function(e){a.setState(Object(k.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createProject(a.state),a.props.history.push("/")},a}return Object(j.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create New Project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{onChange:this.handleChange,type:"text",id:"title"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Project Content"),r.a.createElement("textarea",{className:"materialize-textarea",onChange:this.handleChange,id:"content"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create")))):r.a.createElement(d.a,{to:"/signin"})}}]),t}(n.Component),T=Object(l.b)(function(e){return{auth:e.firebase.auth}},function(e){return{createProject:function(t){return e(L(t))}}})(_);var G=Object(l.b)(function(e){return console.log(e),{isLoaded:e.firebase.auth.isLoaded}})(function(e){return r.a.createElement(p.a,null,e.isLoaded&&r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",component:R}),r.a.createElement(d.b,{path:"/project/:id",component:F}),r.a.createElement(d.b,{path:"/signin",component:I}),r.a.createElement(d.b,{path:"/signup",component:D}),r.a.createElement(d.b,{path:"/create",component:T}))),!e.isLoaded&&r.a.createElement("div",null,r.a.createElement("p",{className:"center"},"Loading...")))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function J(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(a,!0).forEach(function(t){Object(k.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var B={authError:null},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;return"LOGIN_ERROR"===t.type?(console.log(t.err),J({},e,{authError:"Login failed"})):"LOGIN_SUCCESS"===t.type?J({},e,{authError:null}):"SIGNOUT_SUCCESS"===t.type?(console.log("Sign out sucess"),J({},e)):"SIGNOUT_ERROR"===t.type?J({},e):"SIGNUP_SUCCESS"===t.type?(console.log("Sign up sucess"),J({},e,{authError:null})):"SIGNUP_ERROR"===t.type?(console.log("Sign up error"),J({},e,{authError:t.err.message})):J({},e)};function K(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?K(a,!0).forEach(function(t){Object(k.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):K(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var X={projects:[{id:1,title:"just a title",content:"blah blas the nthsfv obasd"},{id:2,title:"just a title",content:"blah blas the nthsfv obasd"},{id:3,title:"just a title",content:"blah blas the nthsfv obasd"}]},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created project",t.project),M({},e);case"CREATE_PROJECT_ERROR":return console.log("create project error",t.err),M({},e);default:return M({},e)}},$=Object(o.c)({auth:W,project:Z,firestore:u.firestoreReducer,firebase:m.firebaseReducer}),q=a(92),H=a.n(q);a(409),a(412);H.a.initializeApp({apiKey:"AIzaSyA9ZyTfvPPLAjmExh15kbFm69E2cXgdycc",authDomain:"ayobami-marioplan.firebaseapp.com",databaseURL:"https://ayobami-marioplan.firebaseio.com",projectId:"ayobami-marioplan",storageBucket:"",messagingSenderId:"419040943729",appId:"1:419040943729:web:ecd5149d411e3daf9805d0"}),H.a.firestore();var Q=H.a,V=[s.a.withExtraArgument({getFirestore:u.getFirestore,getFirebase:m.getFirebase})],Y=Object(o.e)($,Object(o.d)(o.a.apply(void 0,V),Object(u.reduxFirestore)(Q))),ee={firebase:Q,config:{attachAuthIsReady:!0,userProfile:"users",useFirestoreForProfile:!0},dispatch:Y.dispatch,createFirestoreInstance:u.createFirestoreInstance};i.a.render(r.a.createElement(l.a,{store:Y},r.a.createElement(m.ReactReduxFirebaseProvider,ee,r.a.createElement(G,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[217,1,2]]]);
//# sourceMappingURL=main.053b5400.chunk.js.map