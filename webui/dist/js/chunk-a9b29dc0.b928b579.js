(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a9b29dc0"],{"2a12":function(e,t,r){},"77be":function(e,t,r){"use strict";r.r(t);var n=r("7a23"),c={class:"account"},a={key:0},s=Object(n["createVNode"])("h1",null,"My Account",-1),o={key:1},i=Object(n["createVNode"])("br",null,null,-1),u={key:0},l=Object(n["createVNode"])("h3",{style:{color:"green"}},"You are friends",-1),d={key:1},b=Object(n["createTextVNode"])(" Send friend request "),O=Object(n["createVNode"])("i",{class:"fas fa-plus-square fa-lg"},null,-1),f={class:"card border-primary"},j={class:"card-body"},g={class:"card-title"},p=Object(n["createVNode"])("br",null,null,-1);function v(e,t,r,v,m,h){var N=Object(n["resolveComponent"])("account-nav");return Object(n["openBlock"])(),Object(n["createBlock"])("div",c,[m.query.id_user===m.loggedInUser.id?(Object(n["openBlock"])(),Object(n["createBlock"])("div",a,[s])):(Object(n["openBlock"])(),Object(n["createBlock"])("div",o,[Object(n["createVNode"])("h1",null,Object(n["toDisplayString"])(m.user.username)+"'s Account",1),i,m.hasRelations?(Object(n["openBlock"])(),Object(n["createBlock"])("div",u,[l])):(Object(n["openBlock"])(),Object(n["createBlock"])("div",d,[Object(n["createVNode"])("button",{onClick:t[1]||(t[1]=function(e){return h.sendFriendRequest(m.user)}),type:"button",class:"btn btn-success",disabled:m.hasRequest},[b,O],8,["disabled"])]))])),Object(n["createVNode"])(N,{id:m.query.id_user},null,8,["id"]),Object(n["createVNode"])("div",f,[Object(n["createVNode"])("div",j,[Object(n["createVNode"])("img",{src:m.user.profile_image,alt:"profile image",width:"100",height:"100"},null,8,["src"]),Object(n["createVNode"])("h5",g,Object(n["toDisplayString"])(m.user.username),1)]),Object(n["createVNode"])("p",null,Object(n["toDisplayString"])(m.user.time_zone),1),p,Object(n["createVNode"])("p",null,Object(n["toDisplayString"])(m.role),1),Object(n["createVNode"])("p",null,Object(n["toDisplayString"])(m.user.email),1),Object(n["createVNode"])("p",null,Object(n["toDisplayString"])(m.user.created_at),1)])])}var m=r("5530"),h=r("1da1"),N=(r("159b"),r("96cf"),r("5502")),V=r("f59a"),y=r("7e16"),k={data:function(){return{user:{},query:{id_user:"",email:"",google_id:"",username:"",role_id:"",time_zone:"",offset:0,limit:4},loggedInUser:{name:localStorage.getItem("username"),profileUrl:localStorage.getItem("profileImage"),id:localStorage.getItem("userId"),roleId:localStorage.getItem("userRoleId")},role:"User",listFriendRequests:[],hasRequest:!1,hasRelations:!1,listFriends:[]}},name:"Account",components:{AccountNav:V["a"]},computed:{},created:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.query.id_user=e.$route.params.id,t.next=3,e.getUsers();case 3:return t.next=5,e.getMyFriendRequests();case 5:return t.next=7,e.getMyFriends();case 7:case"end":return t.stop()}}),t)})))()},methods:Object(m["a"])(Object(m["a"])({},Object(N["b"])(["login"])),{},{getUsers:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,y["a"].getUserByFilter(e.query);case 2:r=t.sent,e.user=r[0],console.log("USER: ",e.user),e.role=1==e.user.role_id?"Admin":"User";case 6:case"end":return t.stop()}}),t)})))()},getMyFriendRequests:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={id:e.loggedInUser.id,type:"request"},t.next=3,y["a"].getRelationsByUserId(r);case 3:n=t.sent,e.listFriendRequests=n,console.log("friends request: ",e.listFriendRequests),n.forEach((function(t){t.user_id1==e.query.id_user&&(e.hasRequest=!0,e.hasRelations=!1)}));case 7:case"end":return t.stop()}}),t)})))()},getMyFriends:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,y["a"].getFriendsList(e.loggedInUser.id);case 2:r=t.sent,e.listFriends=r,console.log("list friends: ",e.listFriends),r.forEach((function(t){t.user_id1==e.query.id_user&&(e.hasRequest=!1,e.hasRelations=!0)}));case 6:case"end":return t.stop()}}),t)})))()},sendFriendRequest:function(e){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log("ADD this friend: ",e),n={type:"request",userId1:t.loggedInUser.id,userId2:e.id_user},r.next=4,y["a"].postUserRelation(n);case 4:return alert("Sent friend request!"),r.next=7,t.getMyFriendRequests();case 7:case"end":return r.stop()}}),r)})))()}})},R=r("6b0d"),q=r.n(R);const w=q()(k,[["render",v]]);t["default"]=w},7892:function(e,t,r){"use strict";r("2a12")},f59a:function(e,t,r){"use strict";var n=r("7a23"),c=Object(n["withScopeId"])("data-v-7056b0c2");Object(n["pushScopeId"])("data-v-7056b0c2");var a={id:"AccountNavHeader"},s={class:"navbar navbar-expand-xl bg-light"},o={class:"navbar-nav mr-auto"},i={class:"nav-item"},u=Object(n["createVNode"])("i",{class:"fas fa-street-view"},null,-1),l=Object(n["createTextVNode"])("Overview"),d={class:"nav-item"},b=Object(n["createVNode"])("i",{class:"fas fa-list"},null,-1),O=Object(n["createTextVNode"])("BingeList"),f={class:"nav-item"},j=Object(n["createVNode"])("i",{class:"fab fa-gratipay"},null,-1),g=Object(n["createTextVNode"])("Favourite"),p={class:"nav-item"},v=Object(n["createVNode"])("i",{class:"fas fa-user-friends"},null,-1),m=Object(n["createTextVNode"])("Social");Object(n["popScopeId"])();var h=c((function(e,t,r,h,N,V){var y=Object(n["resolveComponent"])("router-link");return Object(n["openBlock"])(),Object(n["createBlock"])("div",a,[Object(n["createVNode"])("div",s,[Object(n["createVNode"])("ul",o,[Object(n["createVNode"])("li",i,[Object(n["createVNode"])(y,{to:"/account/".concat(r.id),class:"nav-link"},{default:c((function(){return[u,l]})),_:1},8,["to"])]),Object(n["createVNode"])("li",d,[Object(n["createVNode"])(y,{to:"/accountList/".concat(r.id),class:"nav-link"},{default:c((function(){return[b,O]})),_:1},8,["to"])]),Object(n["createVNode"])("li",f,[Object(n["createVNode"])(y,{to:"/favourite/".concat(r.id),class:"nav-link"},{default:c((function(){return[j,g]})),_:1},8,["to"])]),Object(n["createVNode"])("li",p,[Object(n["createVNode"])(y,{to:"/social/".concat(r.id),class:"nav-link"},{default:c((function(){return[v,m]})),_:1},8,["to"])])])])])})),N={props:{id:{type:String,required:!0,default:""}},created:function(){}},V=(r("7892"),r("6b0d")),y=r.n(V);const k=y()(N,[["render",h],["__scopeId","data-v-7056b0c2"]]);t["a"]=k}}]);
//# sourceMappingURL=chunk-a9b29dc0.b928b579.js.map