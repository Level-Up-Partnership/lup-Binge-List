(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59f46ceb"],{"03b7":function(e,t,a){"use strict";a("475b")},"0e90":function(e,t,a){},"475b":function(e,t,a){},"63ad":function(e,t,a){"use strict";a("0e90")},d328:function(e,t,a){"use strict";a.r(t);var c=a("7a23"),n={class:"social"},d=Object(c["h"])("h1",null,"Social",-1),r=Object(c["h"])("label",null,"Request",-1),s={class:"card border border-dark shadow-0"},i={class:"card-body"},o=Object(c["h"])("label",null,"Friends",-1),l={class:"card border border-dark shadow-0"},b={class:"card-body"};function v(e,t,a,v,u,h){var j=Object(c["C"])("account-nav"),O=Object(c["C"])("friend-request"),g=Object(c["C"])("friends-list");return Object(c["v"])(),Object(c["d"])("div",n,[d,Object(c["h"])(j),r,Object(c["h"])("div",s,[Object(c["h"])("div",i,[Object(c["h"])(O)])]),o,Object(c["h"])("div",l,[Object(c["h"])("div",b,[Object(c["h"])(g)])])])}var u=a("5530"),h=a("5502"),j=a("f59a"),O=Object(c["N"])("data-v-7de5446d");Object(c["y"])("data-v-7de5446d");var g=Object(c["f"])('<div class="bg-image hover-overlay" data-v-7de5446d><img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.jpg" alt="profile image" width="200" height="300" data-v-7de5446d><a href="#!" data-v-7de5446d><div class="mask" style="background-color:rgba(251, 251, 251, 0.15);" data-v-7de5446d></div></a></div><div class="card-body" data-v-7de5446d><h5 class="card-title" data-v-7de5446d><a data-v-7de5446d>Friend request name <i class="fas fa-plus-square" data-v-7de5446d></i></a></h5></div>',2);Object(c["w"])();var f=O((function(e,t){return g})),m=(a("63ad"),a("6b0d")),p=a.n(m);const k={},w=p()(k,[["render",f],["__scopeId","data-v-7de5446d"]]);var y=w,_=Object(c["f"])('<div class="bg-image hover-overlay"><img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.jpg" alt="profile image" width="200" height="300"><a href="#!"><div class="mask" style="background-color:rgba(251, 251, 251, 0.15);"></div></a></div><div class="card-body"><h5 class="card-title"><a>Friend&#39;s name</a></h5></div>',2);function F(e,t){return _}const S={},q=p()(S,[["render",F]]);var C=q,N={components:{AccountNav:j["a"],FriendRequest:y,FriendsList:C},data:function(){return{}},name:"Social",computed:{getUser:function(){return this.$store.getters.getUser}},mounted:function(){var e=this;this.$store.subscribe((function(t,a){console.log(t.type),console.log(t.payload),console.log("USER: ",a),e.user=a}));var t=localStorage.getItem("userToken");t?(this.getUser||this.login(t),console.log("Social mount")):this.$router.push("/")},methods:Object(u["a"])({},Object(h["b"])(["login"]))};const U=p()(N,[["render",v]]);t["default"]=U},f59a:function(e,t,a){"use strict";var c=a("7a23"),n=Object(c["N"])("data-v-473177e6");Object(c["y"])("data-v-473177e6");var d={class:"navbar navbar-expand-lg navbar-light bg-light",id:"AccountNavHeader"},r={class:"navbar-nav mr-auto"},s={class:"nav-item"},i=Object(c["g"])("Overview"),o={class:"nav-item"},l=Object(c["g"])("My List"),b={class:"nav-item"},v=Object(c["g"])("Favourite"),u={class:"nav-item"},h=Object(c["g"])("Social");Object(c["w"])();var j=n((function(e,t){var a=Object(c["C"])("router-link");return Object(c["v"])(),Object(c["d"])("div",null,[Object(c["h"])("div",d,[Object(c["h"])("ul",r,[Object(c["h"])("li",s,[Object(c["h"])(a,{to:"/account",class:"nav-link"},{default:n((function(){return[i]})),_:1})]),Object(c["h"])("li",o,[Object(c["h"])(a,{to:"/accountList",class:"nav-link"},{default:n((function(){return[l]})),_:1})]),Object(c["h"])("li",b,[Object(c["h"])(a,{to:"/favourite",class:"nav-link"},{default:n((function(){return[v]})),_:1})]),Object(c["h"])("li",u,[Object(c["h"])(a,{to:"/social",class:"nav-link"},{default:n((function(){return[h]})),_:1})])])])])})),O=(a("03b7"),a("6b0d")),g=a.n(O);const f={},m=g()(f,[["render",j],["__scopeId","data-v-473177e6"]]);t["a"]=m}}]);
//# sourceMappingURL=chunk-59f46ceb.cd7a1e40.js.map