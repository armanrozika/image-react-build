(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(t,e,a){t.exports=a(50)},42:function(t,e,a){},50:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(29),o=a.n(s),c=a(14),i=a(10),l=a(31),u=a(15),h=a(11),p=a(16),f={data:[],favlist:[],showcolor:"hidecol",hidecolor:"classzero",colorstate:[]},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;return"fetch_data"===e.type?Object(p.a)({},t,{data:e.payload.data,loadstate:"loading"}):"fetch_next"===e.type?(console.log(t.data),Object(p.a)({},t,{data:[].concat(Object(h.a)(t.data),Object(h.a)(e.payload.data))})):"add_favorite"===e.type?Object(p.a)({},t,{favlist:[].concat(Object(h.a)(t.favlist),[e.payload])}):"remove_favorite"===e.type?(console.log(e.payload),t.favlist.splice(e.payload,1),Object(p.a)({},t)):t},v=(a(42),a(4)),m=a.n(v),y=a(9),w=a(19),g=a(20),b=a(23),x=a(21),j=a(22),E=a(8),O=Object(i.b)(function(t){return{state:t}})(function(t){console.log(t);var e=t.state.favlist.length>0?t.state.favlist.map(function(t,e){return r.a.createElement("img",{key:e,src:t})}):null;return r.a.createElement("div",{className:"favourites"},r.a.createElement("div",{className:"search"},e))}),k=function(t){function e(){var t,a;Object(w.a)(this,e);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(b.a)(this,(t=Object(x.a)(e)).call.apply(t,[this].concat(r)))).state={query:"",searchload:"show",btnext:"hide",waitload:"hide",pagination:8},a.setQuery=function(t){a.setState({query:t.target.value}),a.props.searchQuery(t.target.value)},a.searchQuery=function(){var t=Object(y.a)(m.a.mark(function t(e){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==a.state.query){t.next=4;break}return t.abrupt("return",null);case 4:return t.next=6,a.props.fetchData(a.state.query,a.state.pagination,a.beforeLoad,a.afterLoad);case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),a.beforeLoad=function(){a.setState({searchload:"hide",waitload:"showresult"})},a.afterLoad=function(){a.setState({btnext:"show",searchload:"show",waitload:"hide"})},a.searchViaEnter=function(){var t=Object(y.a)(m.a.mark(function t(e){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(13!==e.keyCode){t.next=3;break}return t.next=3,a.props.fetchData(a.state.query,a.state.pagination,a.beforeLoad,a.afterLoad);case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),a.nextResults=function(){a.props.fetchNext(a.props.queryWord,a.state.pagination)},a.changeColor=function(t){if(t.target.classList.contains(void 0)||t.target.classList.contains("nocolor"))a.props.addActive(parseInt(t.target.dataset.index),a.props.state.data.length),a.props.addFavorite(a.props.state.data[t.target.dataset.index].images["480w_still"].url);else if(t.target.classList.contains("yescolor")){a.props.removeActive(parseInt(t.target.dataset.index),a.props.state.data.length);var e=a.props.state.favlist.indexOf(a.props.state.data[t.target.dataset.index].images["480w_still"].url);e>-1&&(a.props.removeFavorite(e),console.log(e))}},a}return Object(j.a)(e,t),Object(g.a)(e,[{key:"componentDidMount",value:function(){console.log(this.props),this.props.state.data.length>0?this.setState({btnext:"show"}):this.setState({btnext:"hide"})}},{key:"render",value:function(){var t=this;console.log(this.props.state.favlist);var e=this.props.state.data.length>0?this.props.state.data.map(function(e,a){return r.a.createElement("div",{key:a,className:"image-wrapper"},r.a.createElement("img",{src:e.images["480w_still"].url}),r.a.createElement("i",{"data-index":a,"data-color":t.props.state.colorzero,onClick:t.changeColor,className:"fas fa-heart "+t.props.shownList[a]}))}):null;return r.a.createElement("div",{className:"search-container"},r.a.createElement("div",{className:"search-input"},r.a.createElement("input",{onChange:this.setQuery,onKeyUp:this.searchViaEnter,type:"text",placeholder:"Start searching for images!"}),r.a.createElement("button",{onClick:this.searchQuery},"Search")),r.a.createElement("div",{className:"search "+this.state.searchload},e),r.a.createElement("p",{className:this.state.waitload},"LOADING..."),r.a.createElement("button",{onClick:this.nextResults,className:"nextbtn "+this.state.btnext},"Next"))}}]),e}(n.Component),N=Object(i.b)(function(t){return{state:t}},function(t){return{fetchData:function(){var e=Object(y.a)(m.a.mark(function e(a,n,r,s){var o,c;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r(),e.next=3,fetch("http://api.giphy.com/v1/gifs/search?q=".concat(a,"&api_key=h20Y5jKjyQXumGfT2asKUdo8dkaSCvwd&limit=8"));case 3:return o=e.sent,e.next=6,o.json();case 6:return c=e.sent,e.next=9,t({type:"fetch_data",payload:c});case 9:s();case 10:case"end":return e.stop()}},e)}));return function(t,a,n,r){return e.apply(this,arguments)}}(),fetchNext:function(){var e=Object(y.a)(m.a.mark(function e(a,n){var r,s;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://api.giphy.com/v1/gifs/search?q=".concat(a,"&api_key=h20Y5jKjyQXumGfT2asKUdo8dkaSCvwd&limit=8&offset=").concat(n));case 2:return r=e.sent,e.next=5,r.json();case 5:s=e.sent,t({type:"fetch_next",payload:s});case 7:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),addFavorite:function(e){t({type:"add_favorite",payload:e})},removeFavorite:function(e){t({type:"remove_favorite",payload:e})}}})(k),C=function(t){function e(){var t,a;Object(w.a)(this,e);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(b.a)(this,(t=Object(x.a)(e)).call.apply(t,[this].concat(r)))).state={active:0,shown:[],shownlist:[],searchquery:""},a.removeActive=function(t,e){if(a.state.shown.length>0){var n=a.state.shown.indexOf(t);n>-1&&a.state.shown.splice(n,1)}for(var r=[],s=0;s<e;s++)r.push("nocolor");for(var o=0;o<a.state.shown.length;o++)void 0===r[a.state.shown[o]]?r[a.state.shown[o]]="yescolor":"yescolor"===r[a.state.shown[o]]?r[a.state.shown[o]]="nocolor":"nocolor"===r[a.state.shown[o]]&&(r[a.state.shown[o]]="yescolor");a.setState({shownlist:r,active:a.state.shown.length}),console.log(a.state)},a.setActive=function(){var t=Object(y.a)(m.a.mark(function t(e,n){var r,s,o;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.setState({shown:[].concat(Object(h.a)(a.state.shown),[e])});case 2:for(r=[],s=0;s<n;s++)r.push("nocolor");for(o=0;o<a.state.shown.length;o++)void 0===r[a.state.shown[o]]?r[a.state.shown[o]]="yescolor":"yescolor"===r[a.state.shown[o]]?r[a.state.shown[o]]="nocolor":"nocolor"===r[a.state.shown[o]]&&(r[a.state.shown[o]]="yescolor");a.setState({shownlist:r,active:a.state.shown.length});case 6:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}(),a.searchQuery=function(t){a.setState({searchquery:t})},a.refreshPage=function(){window.location.href="http://localhost:3000"},a}return Object(j.a)(e,t),Object(g.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"App"},r.a.createElement("nav",null,r.a.createElement("p",{onClick:this.refreshPage},"Galler",r.a.createElement("span",null,"Easy")),r.a.createElement(u.b,{exact:!0,activeClassName:"is-active",to:"/"},"Search"),r.a.createElement(u.b,{activeClassName:"is-active",to:"/favourites"},"Favourites(",this.state.active,")")),r.a.createElement(E.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(N,Object.assign({},e,{removeActive:function(e,a){return t.removeActive(e,a)},queryWord:t.state.searchquery,addActive:function(e,a){return t.setActive(e,a)},isShown:t.state.shown,shownList:t.state.shownlist,searchQuery:function(e){return t.searchQuery(e)}}))}}),r.a.createElement(E.a,{path:"/favourites",component:O}),r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Gallereasy POC webapp"),r.a.createElement("p",null,"2359 media")))}}]),e}(n.Component),S=Object(c.c)(d,Object(c.a)(l.a));o.a.render(r.a.createElement(i.a,{store:S},r.a.createElement(u.a,null,r.a.createElement(C,null))),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.3e15ee77.chunk.js.map