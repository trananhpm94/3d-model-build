(this.webpackJsonpdemo1=this.webpackJsonpdemo1||[]).push([[0],{109:function(e,t,n){},110:function(e,t,n){},115:function(e,t,n){},118:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){"use strict";n.r(t);var a=n(10),i=n(0),c=n.n(i),o=n(29),r=n.n(o),s=(n(109),n(32)),d=(n(110),n(33)),l=n.n(d),u=n(47),j=n(137),f=j.a.Meta,m=function(e){var t=e.imageUrl,n=e.title,i=e.desciption,c=function(){return t&&0!==t.length?t:"https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"};return Object(a.jsx)(j.a,{hoverable:!0,style:{width:"100%",height:"100%"},cover:Object(a.jsx)("img",{style:{borderBottom:"1px solid #f0f0f0"},alt:c(),src:c()}),children:Object(a.jsx)(f,{title:n,description:i})})},p=n(57),b=n(36),h=n(139),g=n(56),O=n(55),w=n(63);w.a.initializeApp({apiKey:"AIzaSyCO2ql2jkewARMLsR3NObhRu4GFjnQ5Mak",authDomain:"d-model-86d23.firebaseapp.com",projectId:"d-model-86d23",storageBucket:"d-model-86d23.appspot.com",messagingSenderId:"894432064505",appId:"1:894432064505:web:02ff8840879d300b464328",measurementId:"G-D75XP97J5Q"});var x,v,y,k,S=w.a.firestore(),C=w.a.storage().ref(),E=(w.a,S.collection("character")),L=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get();case 2:return t=e.sent,n=t.docs.map((function(e){return Object(O.a)(Object(O.a)({},e.data()),{id:e.id})})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,delete t.id,console.log(n,t),e.next=5,E.doc(n).update(t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=n(134),D=n(135),M=n(136),H=(n(115),function(e){var t=e.submidText,n=e.onChange,c=e.placeholder,o=e.loading,r=Object(i.useState)(null),d=Object(s.a)(r,2),l=d[0],u=d[1];return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(I.a,{className:"search-icon"}),Object(a.jsx)("input",{className:"input",onKeyDown:function(e){13===e.keyCode&&t&&t(l)},onChange:function(e){var t=e.target.value;u(t),n&&n(t)},value:l,placeholder:c}),!o&&l&&l.length>0&&Object(a.jsx)(D.a,{onClick:function(){u(""),n&&n("")},className:"empty-icon"}),o&&Object(a.jsx)(M.a,{className:"empty-icon"})]})}),N=(n(118),function(e){var t=e.navigation,n=Object(i.useState)([]),c=Object(s.a)(n,2),o=c[0],r=c[1],d=Object(i.useState)(""),j=Object(s.a)(d,2),f=j[0],O=j[1],w=Object(i.useState)(!1),x=Object(s.a)(w,2),v=x[0],y=x[1],k=Object(i.useState)([]),S=Object(s.a)(k,2),C=S[0],E=S[1];Object(i.useEffect)((function(){z()}),[]);var z=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.prev=1,e.next=4,L(t);case 4:n=e.sent,E(n);case 6:return e.prev=6,y(!1),e.finish(6);case 9:case"end":return e.stop()}}),e,null,[[1,,6,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){r(C.filter((function(e){return-1!==e.name.toLowerCase().indexOf(f.toLowerCase())})))}),[f,C]),Object(a.jsxs)("div",{children:[Object(a.jsx)(p.a,{style:{padding:20},alig:"middle",justify:"space-around",children:Object(a.jsx)(b.a,{xs:24,sm:24,md:12,lg:12,xl:12,xxl:12,span:12,children:Object(a.jsx)(H,{placeholder:"Input a character name",allowClear:!0,onChange:function(e){O(e)},loading:v})})}),v&&Object(a.jsx)(p.a,{alig:"middle",justify:"space-around",children:Object(a.jsx)(b.a,{children:Object(a.jsx)(h.a,{size:"large",style:{marginTop:200}})})}),!v&&o.length>0&&Object(a.jsx)(p.a,{children:o.map((function(e){return Object(a.jsx)(b.a,{style:{padding:20},xs:24,sm:24,md:12,lg:6,xl:6,xxl:6,span:6,children:Object(a.jsx)("div",{onClick:function(){t.navigate("_3DObject",{selectedObject:e})},style:{width:"100%",height:"100%"},children:Object(a.jsx)(m,{imageUrl:e.imageUrl,title:e.name})})})}))}),!v&&0===o.length&&Object(a.jsx)(p.a,{alig:"middle",justify:"space-around",children:Object(a.jsx)(b.a,{style:{paddingTop:150},children:Object(a.jsx)(g.a,{})})})]})}),R=n(92),T=n(3),B=n(93),F=n(94),P=function(e){var t=e.takeScreenshotTrigger,n=e.character,c=e.setLoading,o=n.selectedObject.configuration;function r(e){e.position.x=0,e.position.y=0,e.position.z=0,e.scale.x=o.scale,e.scale.y=o.scale,e.scale.z=o.scale,e.rotation.y=o.rotation,x.add(e);var t=new T.M(o.material);e.traverse((function(e){e.isMesh&&(e.castShadow=!0,o.material&&(e.material=t))})),l()}function s(){var e=document.getElementById("model");(x=new T.gb).background=new T.h(10526880),x.fog=new T.n(10526880,n.selectedObject.configuration.near,n.selectedObject.configuration.far);var t=new T.q(16777215,4473924);t.position.set(0,20,0),x.add(t);var a=new T.i(16777215);a.position.set(3,10,10),a.castShadow=!0,a.shadow.camera.top=2,a.shadow.camera.bottom=-2,a.shadow.camera.left=-2,a.shadow.camera.right=2,a.shadow.camera.near=.1,a.shadow.camera.far=40,x.add(a);var i=new T.K(new T.X(1e4,1e4),new T.M({color:10066329,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.receiveShadow=!0,i.position.set(0,n.selectedObject.configuration.groundY,0),x.add(i);var c=n.selectedObject.fileName;"GLTFLoader"===n.selectedObject.type?function(e){console.log("url",e),(new R.a).load(e,(function(e){r(e.scene)}))}(c):function(e){console.log("url",e),(new F.a).load(e,(function(e){r(e)}))}(c),(v=new T.ub({antialias:!0})).setPixelRatio(window.devicePixelRatio),v.setSize(window.innerWidth,window.innerHeight),v.outputEncoding=T.vb,v.shadowMap.enabled=!0,e.appendChild(v.domElement),(y=new T.W(o.camera.fov,window.innerWidth/window.innerHeight,o.camera.near,o.camera.far)).position.set(o.camera.x,o.camera.y,o.camera.z);var s=new B.a(y,v.domElement);s.enablePan=!1,s.enableZoom=!1,s.target.set(0,1,0),s.update(),window.addEventListener("resize",d,!1),l()}function d(){y.aspect=window.innerWidth/window.innerHeight,y.updateProjectionMatrix(),v.setSize(window.innerWidth,window.innerHeight),v.render(x,y)}function l(){k=requestAnimationFrame(l),v&&v.render(x,y)}return Object(i.useEffect)((function(){return s(),function(){cancelAnimationFrame(k),window.addEventListener("resize",null,!1),v.domElement.addEventListener("resize",null,!1),x=null,v=null,y=null,null}}),[]),Object(i.useEffect)((function(){t&&function(){c(!0),v.render(x,y),v.domElement.toBlob((function(e){var t=document.createElement("a"),a=URL.createObjectURL(e);t.href=a,t.download=n.selectedObject.name+".png",t.click()}),"image/png",1);var e=n.selectedObject.name+Date.now();v.domElement.toBlob((function(t){(new Image).src=t,C.child("image/"+e).put(t,{contentType:"image/png"}).then((function(e){e.ref.getDownloadURL().then((function(e){c(!1),z(Object(O.a)(Object(O.a)({},n.selectedObject),{imageUrl:e}))}))}))}))}()}),[t]),Object(a.jsx)("div",{style:{position:"absolute",zIndex:0},id:"model"})},U=n(141),A=n(95),W=n(99),q=n(138),G=(n(131),q.a.Option,{configuration:{initComponent:"Home"},components:[{key:"Home",component:N,title:"Home"},{key:"_3DObject",component:function(e){var t=e.navigation,n=e.data,c=Object(i.useState)(),o=Object(s.a)(c,2),r=o[0],d=o[1],l=Object(i.useState)(!1),u=Object(s.a)(l,2),j=u[0],f=u[1];return Object(a.jsxs)("div",{style:{position:"relative",width:"100%",height:"100vh"},children:[Object(a.jsx)(P,{takeScreenshotTrigger:r,character:n,setLoading:function(e){f(e)}}),Object(a.jsxs)("div",{style:{position:"absolute",right:40,bottom:40,textAlign:"center"},onClick:function(){return d(Date.now())},children:[j?Object(a.jsx)(h.a,{size:"large"}):Object(a.jsx)(U.a,{style:{fontSize:60}}),Object(a.jsx)("div",{style:{},children:"Screenshot"})]}),Object(a.jsx)("div",{style:{position:"absolute",top:20,display:"flex",flexDirection:"row",flex:1,width:"100%"},children:Object(a.jsx)(p.a,{style:{flex:1},children:Object(a.jsx)(b.a,{xs:24,sm:24,md:12,lg:12,xl:12,xxl:12,span:12,children:Object(a.jsx)("div",{style:{width:"100%",display:"flex",direction:"row",paddingRight:10,paddingLeft:10},children:Object(a.jsx)("div",{className:"containerHomeButton",onClick:function(){t.navigate("Home",{})},children:Object(a.jsx)(A.a,{icon:W.a,className:"homeIcon"})})})})})})]})},title:"3D Model"}]});var J=function(){var e=Object(i.useState)({key:G.configuration.initComponent,data:{}}),t=Object(s.a)(e,2),n=t[0],a=t[1],o=function(e){document.title=G.components.find((function(t){return t.key===e})).title};return Object(i.useEffect)((function(){o(n.key)}),[]),c.a.createElement(G.components.find((function(e){return e.key===n.key})).component,{navigation:{navigate:function(e,t){o(e),a({key:e,data:t})}},data:n.data})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,142)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),c(e),o(e)}))};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(J,{})}),document.getElementById("root")),K()}},[[132,1,2]]]);
//# sourceMappingURL=main.6dea52ce.chunk.js.map