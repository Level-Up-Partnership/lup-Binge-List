(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d1a958f"],{"03b7":function(t,e,c){"use strict";c("475b")},"2a9c":function(t,e,c){"use strict";c("8f50")},"475b":function(t,e,c){},"77be":function(t,e,c){"use strict";c.r(e);var a=c("7a23"),s={class:"account"},n=Object(a["h"])("h1",null,"My Account",-1),l={class:"card"},i={class:"card-body"},o={class:"card-title"},r=Object(a["h"])("h1",null,"Activity List",-1);function b(t,e,c,b,u,v){var d=Object(a["C"])("account-nav"),h=Object(a["C"])("activity-list"),O=Object(a["C"])("overview-stats");return Object(a["v"])(),Object(a["d"])("div",s,[n,Object(a["h"])(d),Object(a["h"])("img",{src:u.profileUrl,alt:"profile image",width:"100",height:"100"},null,8,["src"]),Object(a["h"])("div",l,[Object(a["h"])("div",i,[Object(a["h"])("h5",o,Object(a["E"])(u.username),1)])]),r,Object(a["h"])(h),Object(a["h"])(O)])}var u=c("5530"),v=c("5502"),d=c("f59a"),h=c("7342"),O=Object(a["N"])("data-v-e559968e");Object(a["y"])("data-v-e559968e");var j={class:"overviewstats"},f={class:"card"},g={class:"card mb-3",style:{"max-width":"300px"}},m={class:"row g-0"},p=Object(a["h"])("div",{class:"col-md-1"},null,-1),w={class:"col-md-4"},y={class:"card-body"},S={class:"card-text"},k=Object(a["h"])("label",null,"Total Shows",-1),U=Object(a["h"])("div",{class:"col-md-2"},null,-1),_={class:"col-md-4"},A={class:"card-body"},x={class:"card-text"},C=Object(a["h"])("label",null,"Total Shows",-1),E=Object(a["h"])("div",{class:"col-md-1"},null,-1);Object(a["w"])();var L=O((function(t,e,c,s,n,l){return Object(a["v"])(),Object(a["d"])("div",j,[Object(a["h"])("div",f,[Object(a["h"])("div",g,[Object(a["h"])("div",m,[p,Object(a["h"])("div",w,[Object(a["h"])("div",y,[Object(a["h"])("p",S,Object(a["E"])(n.totalShows),1)]),k]),U,Object(a["h"])("div",_,[Object(a["h"])("div",A,[Object(a["h"])("p",x,Object(a["E"])(n.averageScore),1)]),C]),E])])])])})),M={name:"overview stats",data:function(){return{totalShows:0,averageScore:0}}},N=(c("2a9c"),c("6b0d")),I=c.n(N);const T=I()(M,[["render",L],["__scopeId","data-v-e559968e"]]);var $=T,J={data:function(){return{username:"",profileUrl:""}},name:"My Account",components:{AccountNav:d["a"],ActivityList:h["a"],OverviewStats:$},computed:{getUser:function(){return this.$store.getters.getUser}},mounted:function(){var t=this;this.$store.subscribe((function(e,c){console.log(e.type),console.log(e.payload),console.log("USER: ",c),t.user=c}));var e=localStorage.getItem("userToken");e?(this.getUser||this.login(e),console.log("My Account mount"),this.username=this.getUser.username,this.profileUrl=this.getUser.profile_image):this.$router.push("/")},methods:Object(u["a"])({},Object(v["b"])(["login"]))};const F=I()(J,[["render",b]]);e["default"]=F},"8f50":function(t,e,c){},f59a:function(t,e,c){"use strict";var a=c("7a23"),s=Object(a["N"])("data-v-473177e6");Object(a["y"])("data-v-473177e6");var n={class:"navbar navbar-expand-lg navbar-light bg-light",id:"AccountNavHeader"},l={class:"navbar-nav mr-auto"},i={class:"nav-item"},o=Object(a["g"])("Overview"),r={class:"nav-item"},b=Object(a["g"])("My List"),u={class:"nav-item"},v=Object(a["g"])("Favourite"),d={class:"nav-item"},h=Object(a["g"])("Social");Object(a["w"])();var O=s((function(t,e){var c=Object(a["C"])("router-link");return Object(a["v"])(),Object(a["d"])("div",null,[Object(a["h"])("div",n,[Object(a["h"])("ul",l,[Object(a["h"])("li",i,[Object(a["h"])(c,{to:"/account",class:"nav-link"},{default:s((function(){return[o]})),_:1})]),Object(a["h"])("li",r,[Object(a["h"])(c,{to:"/accountList",class:"nav-link"},{default:s((function(){return[b]})),_:1})]),Object(a["h"])("li",u,[Object(a["h"])(c,{to:"/favourite",class:"nav-link"},{default:s((function(){return[v]})),_:1})]),Object(a["h"])("li",d,[Object(a["h"])(c,{to:"/social",class:"nav-link"},{default:s((function(){return[h]})),_:1})])])])])})),j=(c("03b7"),c("6b0d")),f=c.n(j);const g={},m=f()(g,[["render",O],["__scopeId","data-v-473177e6"]]);e["a"]=m}}]);
//# sourceMappingURL=chunk-3d1a958f.15f84e6d.js.map