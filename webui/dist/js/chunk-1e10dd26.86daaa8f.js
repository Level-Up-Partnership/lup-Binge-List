(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e10dd26"],{"03b7":function(e,t,r){"use strict";r("475b")},"0555":function(e,t,r){},"18ff":function(e,t,r){"use strict";r.r(t);var a=r("7a23"),n=Object(a["N"])("data-v-61a59375");Object(a["y"])("data-v-61a59375");var c={class:"favourite"},i=Object(a["h"])("h1",null,"Favourite",-1),o={class:"card border border-dark shadow-0"},s={class:"card-body"},u={key:0},l={key:1,id:"emptyFavourites"},b=Object(a["h"])("p",null,"No favourites found",-1);Object(a["w"])();var d=n((function(e,t,r,n,d,O){var j=Object(a["C"])("account-nav"),v=Object(a["C"])("side-filter"),h=Object(a["C"])("favourite-show");return Object(a["v"])(),Object(a["d"])("div",c,[i,Object(a["h"])(j),Object(a["h"])(v,{onSideFilterChange:O.updateQuerySideFilter},null,8,["onSideFilterChange"]),Object(a["h"])("div",o,[Object(a["h"])("div",s,[d.favourites.length>0?(Object(a["v"])(),Object(a["d"])("div",u,[(Object(a["v"])(!0),Object(a["d"])(a["a"],null,Object(a["B"])(d.favourites,(function(e){return Object(a["v"])(),Object(a["d"])("div",{key:e.id_user_show},[Object(a["h"])(h,{showFav:e},null,8,["showFav"])])})),128))])):(Object(a["v"])(),Object(a["d"])("div",l,[b]))])])])})),O=r("1da1"),j=(r("96cf"),r("f59a")),v=r("5f08"),h={class:"bg-image hover-overlay"},f=Object(a["h"])("a",{href:"#!"},[Object(a["h"])("div",{class:"mask",style:{"background-color":"rgba(251, 251, 251, 0.15)"}})],-1),g={class:"card-body"},m={class:"card-title"};function y(e,t,r,n,c,i){return Object(a["v"])(),Object(a["d"])("div",null,[Object(a["h"])("div",h,[Object(a["h"])("img",{src:r.showFav.show_image,alt:"show image",width:"200",height:"300"},null,8,["src"]),f]),Object(a["h"])("div",g,[Object(a["h"])("h5",m,[Object(a["h"])("a",null,Object(a["E"])(r.showFav.title[0]),1)])])])}var p={props:{showFav:{type:Object,required:!0,default:function(){}}}},w=r("6b0d"),S=r.n(w);const k=S()(p,[["render",y]]);var F=k,q=r("7e16"),C={components:{AccountNav:j["a"],SideFilter:v["a"],FavouriteShow:F},data:function(){return{query:{userId:localStorage.getItem("userId"),country:"",genre:"",yearStart:"",yearEnd:"",status:"",favourite:!0},user:{name:localStorage.getItem("username"),profileUrl:localStorage.getItem("profileImage"),id:localStorage.getItem("userId"),roleId:localStorage.getItem("userRoleId")},favourites:[]}},name:"Favourite",watch:{query:{deep:!0,handler:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.loadTables();case 1:case"end":return t.stop()}}),t)})))()}}},computed:{},mounted:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=localStorage.getItem("userToken"),r||e.$router.push("/"),console.log("Favourite mount"),t.next=5,e.loadTables();case 5:case"end":return t.stop()}}),t)})))()},methods:{loadTables:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getBingeList();case 2:case"end":return t.stop()}}),t)})))()},getBingeList:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,q["a"].getAccountList(e.query);case 2:e.favourites=t.sent;case 3:case"end":return t.stop()}}),t)})))()},updateQuerySideFilter:function(e){this.query.country=e.country,this.query.genre=e.genre,this.query.yearStart=e.yearStart,this.query.yearEnd=e.yearEnd}}};r("75ed");const I=S()(C,[["render",d],["__scopeId","data-v-61a59375"]]);t["default"]=I},"475b":function(e,t,r){},"5e83":function(e,t,r){},"5f08":function(e,t,r){"use strict";var a=r("7a23"),n=Object(a["N"])("data-v-392255f5");Object(a["y"])("data-v-392255f5");var c={class:"vstack gap-2 col-md-1 mx-auto"},i=Object(a["h"])("label",{class:"form-label",for:"sideFilterCountry"},"Country",-1),o={class:"btn-group"},s=Object(a["h"])("option",{value:""},"-",-1),u=Object(a["h"])("label",{class:"form-label",for:"sideFilterGenre"},"Genre",-1),l={class:"btn-group"},b=Object(a["h"])("option",{value:""},"-",-1),d=Object(a["h"])("label",{class:"form-label",for:"sideFilterYearRange"},"Year",-1),O={class:"btn-group"},j=Object(a["h"])("option",{value:""},"-",-1),v=Object(a["h"])("p",null,"to",-1),h=Object(a["h"])("option",{value:""},"-",-1);Object(a["w"])();var f=n((function(e,t,r,n,f,g){return Object(a["v"])(),Object(a["d"])("div",null,[Object(a["h"])("div",c,[i,Object(a["h"])("div",o,[Object(a["K"])(Object(a["h"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return f.query.country=e}),id:"sideFilterCountry",class:"form-select","aria-label":"Default select example"},[s,(Object(a["v"])(!0),Object(a["d"])(a["a"],null,Object(a["B"])(f.listOfCountries,(function(e,t){return Object(a["v"])(),Object(a["d"])("option",{key:t},Object(a["E"])(e),1)})),128))],512),[[a["G"],f.query.country]])]),u,Object(a["h"])("div",l,[Object(a["K"])(Object(a["h"])("select",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return f.query.genre=e}),id:"sideFilterGenre",class:"form-select","aria-label":"Default select example"},[b,(Object(a["v"])(!0),Object(a["d"])(a["a"],null,Object(a["B"])(f.listOfGenres,(function(e,t){return Object(a["v"])(),Object(a["d"])("option",{key:t},Object(a["E"])(e),1)})),128))],512),[[a["G"],f.query.genre]])]),d,Object(a["h"])("div",O,[Object(a["K"])(Object(a["h"])("select",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return f.query.yearStart=e}),id:"sideFilterYearRange",class:"form-select","aria-label":"Default select example"},[j,(Object(a["v"])(!0),Object(a["d"])(a["a"],null,Object(a["B"])(f.listOfYears,(function(e,t){return Object(a["v"])(),Object(a["d"])("option",{key:t},Object(a["E"])(e),1)})),128))],512),[[a["G"],f.query.yearStart]]),v,Object(a["K"])(Object(a["h"])("select",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return f.query.yearStart=e}),id:"sideFilterYearRange",class:"form-select","aria-label":"Default select example"},[h,(Object(a["v"])(!0),Object(a["d"])(a["a"],null,Object(a["B"])(f.listOfYears,(function(e,t){return Object(a["v"])(),Object(a["d"])("option",{key:t},Object(a["E"])(e),1)})),128))],512),[[a["G"],f.query.yearStart]])])])])})),g=r("5530"),m=r("5502"),y={data:function(){return{listOfStatus:["Airing","Finished","Not released","Not airing"],listOfYears:[1998,1999,2e3,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],listOfCountries:[],listOfGenres:[],query:{country:"",genre:"",yearStart:"",yearEnd:""}}},name:"SideFilter",computed:{getCountries:function(){return this.$store.getters.getCountries},getGenres:function(){return this.$store.getters.getGenres}},mounted:function(){var e=localStorage.getItem("userToken");e?this.getUser||this.login(e):this.$router.push("/"),console.log("COUNTRIES: ",this.getCountries),this.listOfCountries=this.getCountries,this.listOfGenres=this.getGenres},methods:Object(g["a"])(Object(g["a"])({},Object(m["b"])(["login"])),{},{submitRequestShow:function(){console.log("enteredCountry: ",this.enteredCountry)}}),watch:{query:{deep:!0,handler:function(){this.$emit("side-filter-change",this.query)}}}},p=(r("e7ab"),r("6b0d")),w=r.n(p);const S=w()(y,[["render",f],["__scopeId","data-v-392255f5"]]);t["a"]=S},"75ed":function(e,t,r){"use strict";r("0555")},e7ab:function(e,t,r){"use strict";r("5e83")},f59a:function(e,t,r){"use strict";var a=r("7a23"),n=Object(a["N"])("data-v-473177e6");Object(a["y"])("data-v-473177e6");var c={class:"navbar navbar-expand-lg navbar-light bg-light",id:"AccountNavHeader"},i={class:"navbar-nav mr-auto"},o={class:"nav-item"},s=Object(a["g"])("Overview"),u={class:"nav-item"},l=Object(a["g"])("My List"),b={class:"nav-item"},d=Object(a["g"])("Favourite"),O={class:"nav-item"},j=Object(a["g"])("Social");Object(a["w"])();var v=n((function(e,t){var r=Object(a["C"])("router-link");return Object(a["v"])(),Object(a["d"])("div",null,[Object(a["h"])("div",c,[Object(a["h"])("ul",i,[Object(a["h"])("li",o,[Object(a["h"])(r,{to:"/account",class:"nav-link"},{default:n((function(){return[s]})),_:1})]),Object(a["h"])("li",u,[Object(a["h"])(r,{to:"/accountList",class:"nav-link"},{default:n((function(){return[l]})),_:1})]),Object(a["h"])("li",b,[Object(a["h"])(r,{to:"/favourite",class:"nav-link"},{default:n((function(){return[d]})),_:1})]),Object(a["h"])("li",O,[Object(a["h"])(r,{to:"/social",class:"nav-link"},{default:n((function(){return[j]})),_:1})])])])])})),h=(r("03b7"),r("6b0d")),f=r.n(h);const g={},m=f()(g,[["render",v],["__scopeId","data-v-473177e6"]]);t["a"]=m}}]);
//# sourceMappingURL=chunk-1e10dd26.86daaa8f.js.map