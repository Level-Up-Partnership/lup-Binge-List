(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-509d3608"],{"03b7":function(e,t,r){"use strict";r("475b")},"03e2":function(e,t,r){"use strict";r("dd64")},"18ff":function(e,t,r){"use strict";r.r(t);var n=r("7a23"),a=Object(n["N"])("data-v-3603d13a");Object(n["y"])("data-v-3603d13a");var c={class:"favourite"},s=Object(n["h"])("h1",null,"Favourite",-1),i={class:"card border border-dark shadow-0"},o={class:"card-body"},u={key:0},l={key:1,id:"emptyFavourites"},b=Object(n["h"])("p",null,"No favourites found",-1);Object(n["w"])();var d=a((function(e,t,r,a,d,O){var j=Object(n["C"])("account-nav"),v=Object(n["C"])("side-filter"),h=Object(n["C"])("favourite-show");return Object(n["v"])(),Object(n["d"])("div",c,[s,Object(n["h"])(j),Object(n["h"])(v,{onSideFilterChange:O.updateQuerySideFilter},null,8,["onSideFilterChange"]),Object(n["h"])("div",i,[Object(n["h"])("div",o,[d.favourites.length>0?(Object(n["v"])(),Object(n["d"])("div",u,[(Object(n["v"])(!0),Object(n["d"])(n["a"],null,Object(n["B"])(d.favourites,(function(e){return Object(n["v"])(),Object(n["d"])("div",{key:e.id_user_show},[Object(n["h"])(h,{showFav:e},null,8,["showFav"])])})),128))])):(Object(n["v"])(),Object(n["d"])("div",l,[b]))])])])})),O=r("5530"),j=r("1da1"),v=(r("96cf"),r("5502")),h=r("f59a"),f=r("5f08"),g={class:"bg-image hover-overlay"},y=Object(n["h"])("a",{href:"#!"},[Object(n["h"])("div",{class:"mask",style:{"background-color":"rgba(251, 251, 251, 0.15)"}})],-1),p={class:"card-body"},m={class:"card-title"};function w(e,t,r,a,c,s){return Object(n["v"])(),Object(n["d"])("div",null,[Object(n["h"])("div",g,[Object(n["h"])("img",{src:r.showFav.show_image,alt:"show image",width:"200",height:"300"},null,8,["src"]),y]),Object(n["h"])("div",p,[Object(n["h"])("h5",m,[Object(n["h"])("a",null,Object(n["E"])(r.showFav.title[0]),1)])])])}var F={props:{showFav:{type:Object,required:!0,default:function(){}}}},k=r("6b0d"),q=r.n(k);const S=q()(F,[["render",w]]);var C=S,R=r("7e16"),U={components:{AccountNav:h["a"],SideFilter:f["a"],FavouriteShow:C},data:function(){return{query:{userId:"",country:"",genre:"",yearStart:"",yearEnd:"",status:"",favourite:!0},favourites:[]}},name:"Favourite",watch:{query:{deep:!0,handler:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.loadTables();case 1:case"end":return t.stop()}}),t)})))()}}},computed:{getUser:function(){return this.$store.getters.getUser}},mounted:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.subscribe((function(t,r){console.log(t.type),console.log(t.payload),console.log("USER: ",r),e.user=r})),r=localStorage.getItem("userToken"),r?(e.getUser?(e.user=e.getUser,e.query.userId=e.getUser.id_user):(e.login(r),e.user=e.getUser,e.query.userId=e.getUser.id_user),console.log("Favourite mount")):e.$router.push("/"),t.next=5,e.loadTables();case 5:case"end":return t.stop()}}),t)})))()},methods:Object(O["a"])(Object(O["a"])({},Object(v["b"])(["login"])),{},{loadTables:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getBingeList();case 2:case"end":return t.stop()}}),t)})))()},getBingeList:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("QUERY: ",e.query),t.next=3,R["a"].getAccountList(e.query);case 3:e.favourites=t.sent,console.log("FAVOURITE: ",e.favourites);case 5:case"end":return t.stop()}}),t)})))()},updateQuerySideFilter:function(e){this.query.country=e.country,this.query.genre=e.genre,this.query.yearStart=e.yearStart,this.query.yearEnd=e.yearEnd}})};r("03e2");const _=q()(U,[["render",d],["__scopeId","data-v-3603d13a"]]);t["default"]=_},"475b":function(e,t,r){},"5e83":function(e,t,r){},"5f08":function(e,t,r){"use strict";var n=r("7a23"),a=Object(n["N"])("data-v-392255f5");Object(n["y"])("data-v-392255f5");var c={class:"vstack gap-2 col-md-1 mx-auto"},s=Object(n["h"])("label",{class:"form-label",for:"sideFilterCountry"},"Country",-1),i={class:"btn-group"},o=Object(n["h"])("option",{value:""},"-",-1),u=Object(n["h"])("label",{class:"form-label",for:"sideFilterGenre"},"Genre",-1),l={class:"btn-group"},b=Object(n["h"])("option",{value:""},"-",-1),d=Object(n["h"])("label",{class:"form-label",for:"sideFilterYearRange"},"Year",-1),O={class:"btn-group"},j=Object(n["h"])("option",{value:""},"-",-1),v=Object(n["h"])("p",null,"to",-1),h=Object(n["h"])("option",{value:""},"-",-1);Object(n["w"])();var f=a((function(e,t,r,a,f,g){return Object(n["v"])(),Object(n["d"])("div",null,[Object(n["h"])("div",c,[s,Object(n["h"])("div",i,[Object(n["K"])(Object(n["h"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return f.query.country=e}),id:"sideFilterCountry",class:"form-select","aria-label":"Default select example"},[o,(Object(n["v"])(!0),Object(n["d"])(n["a"],null,Object(n["B"])(f.listOfCountries,(function(e,t){return Object(n["v"])(),Object(n["d"])("option",{key:t},Object(n["E"])(e),1)})),128))],512),[[n["G"],f.query.country]])]),u,Object(n["h"])("div",l,[Object(n["K"])(Object(n["h"])("select",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return f.query.genre=e}),id:"sideFilterGenre",class:"form-select","aria-label":"Default select example"},[b,(Object(n["v"])(!0),Object(n["d"])(n["a"],null,Object(n["B"])(f.listOfGenres,(function(e,t){return Object(n["v"])(),Object(n["d"])("option",{key:t},Object(n["E"])(e),1)})),128))],512),[[n["G"],f.query.genre]])]),d,Object(n["h"])("div",O,[Object(n["K"])(Object(n["h"])("select",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return f.query.yearStart=e}),id:"sideFilterYearRange",class:"form-select","aria-label":"Default select example"},[j,(Object(n["v"])(!0),Object(n["d"])(n["a"],null,Object(n["B"])(f.listOfYears,(function(e,t){return Object(n["v"])(),Object(n["d"])("option",{key:t},Object(n["E"])(e),1)})),128))],512),[[n["G"],f.query.yearStart]]),v,Object(n["K"])(Object(n["h"])("select",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return f.query.yearStart=e}),id:"sideFilterYearRange",class:"form-select","aria-label":"Default select example"},[h,(Object(n["v"])(!0),Object(n["d"])(n["a"],null,Object(n["B"])(f.listOfYears,(function(e,t){return Object(n["v"])(),Object(n["d"])("option",{key:t},Object(n["E"])(e),1)})),128))],512),[[n["G"],f.query.yearStart]])])])])})),g=r("5530"),y=r("5502"),p={data:function(){return{listOfStatus:["Airing","Finished","Not released","Not airing"],listOfYears:[1998,1999,2e3,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],listOfCountries:[],listOfGenres:[],query:{country:"",genre:"",yearStart:"",yearEnd:""}}},name:"SideFilter",computed:{getCountries:function(){return this.$store.getters.getCountries},getGenres:function(){return this.$store.getters.getGenres}},mounted:function(){var e=localStorage.getItem("userToken");e?this.getUser||this.login(e):this.$router.push("/"),console.log("COUNTRIES: ",this.getCountries),this.listOfCountries=this.getCountries,this.listOfGenres=this.getGenres},methods:Object(g["a"])(Object(g["a"])({},Object(y["b"])(["login"])),{},{submitRequestShow:function(){console.log("enteredCountry: ",this.enteredCountry)}}),watch:{query:{deep:!0,handler:function(){this.$emit("side-filter-change",this.query)}}}},m=(r("e7ab"),r("6b0d")),w=r.n(m);const F=w()(p,[["render",f],["__scopeId","data-v-392255f5"]]);t["a"]=F},dd64:function(e,t,r){},e7ab:function(e,t,r){"use strict";r("5e83")},f59a:function(e,t,r){"use strict";var n=r("7a23"),a=Object(n["N"])("data-v-473177e6");Object(n["y"])("data-v-473177e6");var c={class:"navbar navbar-expand-lg navbar-light bg-light",id:"AccountNavHeader"},s={class:"navbar-nav mr-auto"},i={class:"nav-item"},o=Object(n["g"])("Overview"),u={class:"nav-item"},l=Object(n["g"])("My List"),b={class:"nav-item"},d=Object(n["g"])("Favourite"),O={class:"nav-item"},j=Object(n["g"])("Social");Object(n["w"])();var v=a((function(e,t){var r=Object(n["C"])("router-link");return Object(n["v"])(),Object(n["d"])("div",null,[Object(n["h"])("div",c,[Object(n["h"])("ul",s,[Object(n["h"])("li",i,[Object(n["h"])(r,{to:"/account",class:"nav-link"},{default:a((function(){return[o]})),_:1})]),Object(n["h"])("li",u,[Object(n["h"])(r,{to:"/accountList",class:"nav-link"},{default:a((function(){return[l]})),_:1})]),Object(n["h"])("li",b,[Object(n["h"])(r,{to:"/favourite",class:"nav-link"},{default:a((function(){return[d]})),_:1})]),Object(n["h"])("li",O,[Object(n["h"])(r,{to:"/social",class:"nav-link"},{default:a((function(){return[j]})),_:1})])])])])})),h=(r("03b7"),r("6b0d")),f=r.n(h);const g={},y=f()(g,[["render",v],["__scopeId","data-v-473177e6"]]);t["a"]=y}}]);
//# sourceMappingURL=chunk-509d3608.fbc7ec96.js.map