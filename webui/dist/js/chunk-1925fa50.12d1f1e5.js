(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1925fa50"],{"26d3":function(e,n,t){"use strict";t.r(n);t("b0c0");var r=t("7a23"),a={class:"settings"},i=Object(r["h"])("h1",null,"Settings",-1),c={class:"card"},s={class:"card-body"},o=Object(r["h"])("h5",{class:"card-title"},"Avatar",-1),u=Object(r["h"])("h3",null,"Add the webpage's",-1),l=Object(r["h"])("label",{for:"image-link1"},"Banner 1: ",-1),b=Object(r["h"])("br",null,null,-1),d=Object(r["h"])("label",{for:"image-link1"},"Banner 2: ",-1),m=Object(r["h"])("br",null,null,-1),p=Object(r["h"])("label",{for:"image-link1"},"Banner 3: ",-1),g=Object(r["h"])("br",null,null,-1),h=Object(r["h"])("button",{type:"submit",class:"btn btn-primary"},"Update Banners",-1),f={class:"card-body"},j=Object(r["h"])("label",{for:"account-username"},"Username: ",-1),O=Object(r["f"])('<div class="card-body"><label for="image-link">Time zone: </label><div class="btn-group"><button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> Time zone </button><ul class="dropdown-menu"><li><a class="dropdown-item" href="#">list of time zones</a></li></ul></div></div><div class="card-footer"><button type="submit" class="btn btn-primary">Save</button></div>',2);function v(e,n,t,v,w,k){return Object(r["v"])(),Object(r["d"])("div",a,[i,Object(r["h"])("div",c,[Object(r["h"])("div",s,[o,Object(r["K"])(Object(r["h"])("div",null,[Object(r["h"])("form",{onSubmit:n[4]||(n[4]=Object(r["M"])((function(){return k.updateBanners&&k.updateBanners.apply(k,arguments)}),["prevent"]))},[u,l,Object(r["K"])(Object(r["h"])("input",{type:"text",id:"image-link1","onUpdate:modelValue":n[1]||(n[1]=function(e){return w.banners[0]=e})},null,512),[[r["H"],w.banners[0]]]),Object(r["h"])("img",{src:w.banners[0],alt:"profile image",width:"350",height:"200"},null,8,["src"]),b,d,Object(r["K"])(Object(r["h"])("input",{type:"text",id:"image-link2","onUpdate:modelValue":n[2]||(n[2]=function(e){return w.banners[1]=e})},null,512),[[r["H"],w.banners[1]]]),Object(r["h"])("img",{src:w.banners[1],alt:"profile image",width:"350",height:"200"},null,8,["src"]),m,p,Object(r["K"])(Object(r["h"])("input",{type:"text",id:"image-link3","onUpdate:modelValue":n[3]||(n[3]=function(e){return w.banners[2]=e})},null,512),[[r["H"],w.banners[2]]]),Object(r["h"])("img",{src:w.banners[2],alt:"profile image",width:"350",height:"200"},null,8,["src"]),g,h],32)],512),[[r["I"],w.isAdmin]])]),Object(r["h"])("div",f,[j,Object(r["K"])(Object(r["h"])("input",{type:"text",id:"account-username","onUpdate:modelValue":n[5]||(n[5]=function(e){return w.user.name=e})},null,512),[[r["H"],w.user.name]])]),O])])}var w=t("1da1"),k=(t("96cf"),t("7e16")),x={data:function(){return{isAdmin:!1,banners:[t("2a54"),t("275d"),t("8cd3")],username:"",user:{name:localStorage.getItem("username"),profileUrl:localStorage.getItem("profileImage"),id:localStorage.getItem("userId"),roleId:localStorage.getItem("userRoleId")}}},name:"Settings",computed:{},mounted:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return 1==e.user.roleId&&(console.log("REACHED inside if"),e.isAdmin=!0),n.next=3,e.getBanners();case 3:t=localStorage.getItem("userToken"),t||e.$router.push("/"),console.log("Settings mount");case 6:case"end":return n.stop()}}),n)})))()},methods:{getBanners:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,k["a"].getBanners();case 2:t=n.sent,null!==t&&(e.banners=t);case 4:case"end":return n.stop()}}),n)})))()},updateBanners:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.isAdmin){n.next=4;break}return t={banners:e.banners,id:e.user.id},n.next=4,k["a"].updateBanners(t);case 4:case"end":return n.stop()}}),n)})))()}}},y=(t("ec1f"),t("6b0d")),B=t.n(y);const I=B()(x,[["render",v]]);n["default"]=I},"275d":function(e,n,t){e.exports=t.p+"img/kBanner.6c4eb444.png"},"2a54":function(e,n,t){e.exports=t.p+"img/Banner.fb519639.png"},"8cd3":function(e,n,t){e.exports=t.p+"img/aBanner.7ba8e12f.png"},"8e8a":function(e,n,t){},b0c0:function(e,n,t){var r=t("83ab"),a=t("9bf2").f,i=Function.prototype,c=i.toString,s=/^\s*function ([^ (]*)/,o="name";r&&!(o in i)&&a(i,o,{configurable:!0,get:function(){try{return c.call(this).match(s)[1]}catch(e){return""}}})},ec1f:function(e,n,t){"use strict";t("8e8a")}}]);
//# sourceMappingURL=chunk-1925fa50.12d1f1e5.js.map