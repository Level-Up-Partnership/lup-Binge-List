(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71cb8e66"],{2061:function(e,t,r){},"3abe":function(e,t,r){},8030:function(e,t,r){"use strict";r("2061")},c2e4:function(e,t,r){"use strict";r("3abe")},d328:function(e,t,r){"use strict";r.r(t);var c=r("7a23"),n={class:"social"},a=Object(c["createVNode"])("h1",null,"Social",-1),o={key:0},i=Object(c["createVNode"])("label",null,"Request",-1),s={class:"card border border-dark shadow-0"},d={key:0,class:"card-body"},l={key:1,class:"card-body"},u=Object(c["createVNode"])("h2",{style:{color:"red"}},"No friend requests",-1),b=Object(c["createVNode"])("label",null,"Friends",-1),O={class:"card border border-dark shadow-0"},j={key:0,class:"card-body"},p={key:1,class:"card-body"},f=Object(c["createVNode"])("h2",{style:{color:"red"}},"No friends",-1);function g(e,t,r,g,m,v){var k=Object(c["resolveComponent"])("account-nav"),h=Object(c["resolveComponent"])("friend-request"),N=Object(c["resolveComponent"])("friends-list");return Object(c["openBlock"])(),Object(c["createBlock"])("div",n,[a,Object(c["createVNode"])(k,{id:m.user.id},null,8,["id"]),m.isSameUser?(Object(c["openBlock"])(),Object(c["createBlock"])("div",o,[i,Object(c["createVNode"])("div",s,[m.listFriendRequests.length>0?(Object(c["openBlock"])(),Object(c["createBlock"])("div",d,[Object(c["createVNode"])(h,{friendRequests:m.listFriendRequests,onAcceptFriendRequest:v.loadData},null,8,["friendRequests","onAcceptFriendRequest"])])):(Object(c["openBlock"])(),Object(c["createBlock"])("div",l,[u]))])])):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])("div",null,[b,Object(c["createVNode"])("div",O,[m.listFriends.length>0?(Object(c["openBlock"])(),Object(c["createBlock"])("div",j,[Object(c["createVNode"])(N,{friends:m.listFriends,onDeletedUserRelation:v.loadData},null,8,["friends","onDeletedUserRelation"])])):(Object(c["openBlock"])(),Object(c["createBlock"])("div",p,[f]))])])])}var m=r("1da1"),v=(r("96cf"),r("f59a")),k=Object(c["withScopeId"])("data-v-e23d6a9e");Object(c["pushScopeId"])("data-v-e23d6a9e");var h={class:"bg-image hover-overlay"},N={class:"card-body"},V={class:"card-title"},I=Object(c["createVNode"])("i",{class:"fas fa-plus-square"},null,-1);Object(c["popScopeId"])();var R=k((function(e,t,r,n,a,o){return Object(c["openBlock"])(),Object(c["createBlock"])("div",null,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(r.friendRequests,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{key:e.id_user_relations},[Object(c["createVNode"])("div",h,[Object(c["createVNode"])("img",{src:e.profile_image,alt:e.username,width:"150",height:"150"},null,8,["src","alt"])]),Object(c["createVNode"])("div",N,[Object(c["createVNode"])("h5",V,[Object(c["createVNode"])("a",{onClick:function(t){return o.acceptFriendRequest(e.id_user_relations)}},[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.username)+" ",1),I],8,["onClick"])])])])})),128))])})),y=r("7e16"),B={props:{friendRequests:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{loggedInUser:{name:localStorage.getItem("username"),profileUrl:localStorage.getItem("profileImage"),id:this.$route.params.id,roleId:localStorage.getItem("userRoleId")}}},create:function(){},methods:{acceptFriendRequest:function(e){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,y["a"].updateFriendRequest({idUserRelations:e});case 2:alert("Accepted friend request!"),t.$emit("accept-friend-request");case 4:case"end":return r.stop()}}),r)})))()}}},w=(r("8030"),r("6b0d")),S=r.n(w);const F=S()(B,[["render",R],["__scopeId","data-v-e23d6a9e"]]);var q=F,_={class:"bg-image hover-overlay"},x=Object(c["createVNode"])("a",{href:"#!"},[Object(c["createVNode"])("div",{class:"mask",style:{"background-color":"rgba(251, 251, 251, 0.15)"}})],-1),U={class:"card-body"},C={class:"card-title"};function D(e,t,r,n,a,o){var i=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createBlock"])("div",null,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(r.friends,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{key:e.id_user_relations},[Object(c["createVNode"])("div",_,[e.user_id1!=a.user.id?(Object(c["openBlock"])(),Object(c["createBlock"])("img",{key:0,src:e.profile_image1,alt:"profile image",width:"150",height:"150"},null,8,["src"])):(Object(c["openBlock"])(),Object(c["createBlock"])("img",{key:1,src:e.profile_image2,alt:"profile image",width:"150",height:"150"},null,8,["src"])),x]),Object(c["createVNode"])("div",U,[Object(c["createVNode"])("h5",C,[e.user_id1!=a.user.id?(Object(c["openBlock"])(),Object(c["createBlock"])(i,{key:0,to:"/account/".concat(e.user_id1)},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.username1),1)]})),_:2},1032,["to"])):(Object(c["openBlock"])(),Object(c["createBlock"])(i,{key:1,to:"/account/".concat(e.user_id2)},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.username2),1)]})),_:2},1032,["to"]))]),Object(c["createVNode"])("button",{onClick:function(t){return o.removeFriend(e.id_user_relations)},class:"btn btn-danger"},"Remove",8,["onClick"])])])})),128))])}var T={props:{friends:{type:Array,require:!0,default:function(){return[]}}},data:function(){return{user:{name:localStorage.getItem("username"),profileUrl:localStorage.getItem("profileImage"),id:localStorage.getItem("userId"),roleId:localStorage.getItem("userRoleId")}}},create:function(){},methods:{removeFriend:function(e){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log("REMOVE THIS RELATION: ",e),r.next=3,y["a"].deleteFriend(e);case 3:alert("DELETE user!"),t.$emit("deleted-user-relation");case 5:case"end":return r.stop()}}),r)})))()}}};const A=S()(T,[["render",D]]);var L=A,E={components:{AccountNav:v["a"],FriendRequest:q,FriendsList:L},data:function(){return{user:{id:this.$route.params.id},listFriendRequests:[],listFriends:[],loggedInUser:{name:localStorage.getItem("username"),profileUrl:localStorage.getItem("profileImage"),id:localStorage.getItem("userId"),roleId:localStorage.getItem("userRoleId")},isSameUser:!1}},name:"Social",computed:{},created:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.user.id=e.$route.params.id,e.isSameUser=e.user.id==e.loggedInUser.id,t.next=4,e.loadData();case 4:case"end":return t.stop()}}),t)})))()},mounted:function(){var e=localStorage.getItem("userToken");e||this.$router.push("/"),this.isSameUser=this.user.id==this.loggedInUser.id,console.log("Social mount")},methods:{loadData:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getMyFriendRequests();case 2:return t.next=4,e.getMyFriends();case 4:case"end":return t.stop()}}),t)})))()},getMyFriendRequests:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={id:e.loggedInUser.id,type:"request"},t.next=3,y["a"].getRelationsByUserId(r);case 3:e.listFriendRequests=t.sent,console.log("list friends request: ",e.listFriendRequests);case 5:case"end":return t.stop()}}),t)})))()},getMyFriends:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,y["a"].getFriendsList(e.loggedInUser.id);case 2:e.listFriends=t.sent,console.log("list friends: ",e.listFriends);case 4:case"end":return t.stop()}}),t)})))()}}};const M=S()(E,[["render",g]]);t["default"]=M},f59a:function(e,t,r){"use strict";var c=r("7a23"),n=Object(c["withScopeId"])("data-v-7795f11f");Object(c["pushScopeId"])("data-v-7795f11f");var a={class:"navbar navbar-expand-lg navbar-light bg-light",id:"AccountNavHeader"},o={class:"navbar-nav mr-auto"},i={class:"nav-item"},s=Object(c["createTextVNode"])("Overview"),d={class:"nav-item"},l=Object(c["createTextVNode"])("My List"),u={class:"nav-item"},b=Object(c["createTextVNode"])("Favourite"),O={class:"nav-item"},j=Object(c["createTextVNode"])("Social");Object(c["popScopeId"])();var p=n((function(e,t,r,p,f,g){var m=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createBlock"])("div",null,[Object(c["createVNode"])("div",a,[Object(c["createVNode"])("ul",o,[Object(c["createVNode"])("li",i,[Object(c["createVNode"])(m,{to:"/account/".concat(r.id),class:"nav-link"},{default:n((function(){return[s]})),_:1},8,["to"])]),Object(c["createVNode"])("li",d,[Object(c["createVNode"])(m,{to:"/accountList/".concat(r.id),class:"nav-link"},{default:n((function(){return[l]})),_:1},8,["to"])]),Object(c["createVNode"])("li",u,[Object(c["createVNode"])(m,{to:"/favourite/".concat(r.id),class:"nav-link"},{default:n((function(){return[b]})),_:1},8,["to"])]),Object(c["createVNode"])("li",O,[Object(c["createVNode"])(m,{to:"/social/".concat(r.id),class:"nav-link"},{default:n((function(){return[j]})),_:1},8,["to"])])])])])})),f={props:{id:{type:String,required:!0,default:""}},created:function(){console.log("NAV ID: ",this.id)}},g=(r("c2e4"),r("6b0d")),m=r.n(g);const v=m()(f,[["render",p],["__scopeId","data-v-7795f11f"]]);t["a"]=v}}]);
//# sourceMappingURL=chunk-71cb8e66.a7946aa0.js.map