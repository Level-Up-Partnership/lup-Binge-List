(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e64ab95"],{"2a12":function(e,t,r){},7892:function(e,t,r){"use strict";r("2a12")},f59a:function(e,t,r){"use strict";var n=r("7a23"),a=Object(n["withScopeId"])("data-v-7056b0c2");Object(n["pushScopeId"])("data-v-7056b0c2");var c={id:"AccountNavHeader"},s={class:"navbar navbar-expand-xl bg-light"},i={class:"navbar-nav mr-auto"},o={class:"nav-item"},u=Object(n["createVNode"])("i",{class:"fas fa-street-view"},null,-1),d=Object(n["createTextVNode"])("Overview"),l={class:"nav-item"},b=Object(n["createVNode"])("i",{class:"fas fa-list"},null,-1),f=Object(n["createTextVNode"])("BingeList"),g={class:"nav-item"},p=Object(n["createVNode"])("i",{class:"fab fa-gratipay"},null,-1),O=Object(n["createTextVNode"])("Favourite"),j={class:"nav-item"},v=Object(n["createVNode"])("i",{class:"fas fa-user-friends"},null,-1),m=Object(n["createTextVNode"])("Social");Object(n["popScopeId"])();var h=a((function(e,t,r,h,N,V){var w=Object(n["resolveComponent"])("router-link");return Object(n["openBlock"])(),Object(n["createBlock"])("div",c,[Object(n["createVNode"])("div",s,[Object(n["createVNode"])("ul",i,[Object(n["createVNode"])("li",o,[Object(n["createVNode"])(w,{to:"/account/".concat(r.id),class:"nav-link"},{default:a((function(){return[u,d]})),_:1},8,["to"])]),Object(n["createVNode"])("li",l,[Object(n["createVNode"])(w,{to:"/accountList/".concat(r.id),class:"nav-link"},{default:a((function(){return[b,f]})),_:1},8,["to"])]),Object(n["createVNode"])("li",g,[Object(n["createVNode"])(w,{to:"/favourite/".concat(r.id),class:"nav-link"},{default:a((function(){return[p,O]})),_:1},8,["to"])]),Object(n["createVNode"])("li",j,[Object(n["createVNode"])(w,{to:"/social/".concat(r.id),class:"nav-link"},{default:a((function(){return[v,m]})),_:1},8,["to"])])])])])})),N={props:{id:{type:String,required:!0,default:""}},created:function(){}},V=(r("7892"),r("6b0d")),w=r.n(V);const R=w()(N,[["render",h],["__scopeId","data-v-7056b0c2"]]);t["a"]=R},fc1b:function(e,t,r){"use strict";r.r(t);var n=r("7a23"),a={class:"account"},c=Object(n["createVNode"])("div",null,[Object(n["createVNode"])("h1",null,"My Account")],-1),s={class:"card border-primary"},i={class:"card-body"},o={class:"card-title"},u=Object(n["createVNode"])("br",null,null,-1);function d(e,t,r,d,l,b){var f=Object(n["resolveComponent"])("account-nav");return Object(n["openBlock"])(),Object(n["createBlock"])("div",a,[c,Object(n["createVNode"])(f,{id:l.loggedInUser.id},null,8,["id"]),Object(n["createVNode"])("div",s,[Object(n["createVNode"])("div",i,[Object(n["createVNode"])("img",{src:l.user.profile_image,alt:"profile image",width:"100",height:"100"},null,8,["src"]),Object(n["createVNode"])("h5",o,Object(n["toDisplayString"])(l.user.username),1)]),Object(n["createVNode"])("p",null,Object(n["toDisplayString"])(l.user.time_zone),1),u,Object(n["createVNode"])("p",null,Object(n["toDisplayString"])(l.role),1),Object(n["createVNode"])("p",null,Object(n["toDisplayString"])(l.user.email),1),Object(n["createVNode"])("p",null,Object(n["toDisplayString"])(l.user.created_at),1)])])}var l=r("5530"),b=r("1da1"),f=(r("159b"),r("96cf"),r("5502")),g=r("f59a"),p=r("7e16"),O={data:function(){return{user:{},loggedInUser:{name:localStorage.getItem("username"),profileUrl:localStorage.getItem("profileImage"),id:localStorage.getItem("userId"),roleId:localStorage.getItem("userRoleId")},role:"User",listFriendRequests:[],hasRequest:!1,hasRelations:!1,listFriends:[]}},name:"My Account",components:{AccountNav:g["a"]},computed:{query:function(){return{id_user:this.loggedInUser.id,email:"",google_id:"",username:"",role_id:"",time_zone:"",offset:0,limit:4}}},created:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getUsers();case 2:return t.next=4,e.getMyFriendRequests();case 4:return t.next=6,e.getMyFriends();case 6:case"end":return t.stop()}}),t)})))()},methods:Object(l["a"])(Object(l["a"])({},Object(f["b"])(["login"])),{},{getUsers:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p["a"].getUserByFilter(e.query);case 2:r=t.sent,e.user=r[0],e.role=1==e.user.role_id?"Admin":"User";case 5:case"end":return t.stop()}}),t)})))()},getMyFriendRequests:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={id:e.loggedInUser.id,type:"request"},t.next=3,p["a"].getRelationsByUserId(r);case 3:n=t.sent,e.listFriendRequests=n,n.forEach((function(t){t.user_id1==e.query.id_user&&(e.hasRequest=!0,e.hasRelations=!1)}));case 6:case"end":return t.stop()}}),t)})))()},getMyFriends:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p["a"].getFriendsList(e.loggedInUser.id);case 2:r=t.sent,e.listFriends=r,r.forEach((function(t){t.user_id1==e.query.id_user&&(e.hasRequest=!1,e.hasRelations=!0)}));case 5:case"end":return t.stop()}}),t)})))()},sendFriendRequest:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n={type:"request",userId1:t.loggedInUser.id,userId2:e.id_user},r.next=3,p["a"].postUserRelation(n);case 3:return alert("Sent friend request!"),r.next=6,t.getMyFriendRequests();case 6:case"end":return r.stop()}}),r)})))()}})},j=r("6b0d"),v=r.n(j);const m=v()(O,[["render",d]]);t["default"]=m}}]);
//# sourceMappingURL=chunk-3e64ab95.44b28e16.js.map