(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/add-gray-s.6a555c88.svg"},function(e,a,t){e.exports=t.p+"static/media/sad-gray-w.1aa6adbb.svg"},function(e,a,t){e.exports=t.p+"static/media/rec-gray-s.b2f18160.svg"},function(e,a,t){e.exports=t.p+"static/media/share-gray-s.2e9ef69e.svg"},function(e,a,t){e.exports=t.p+"static/media/logo-telecine.238fd604.svg"},function(e,a,t){e.exports=t.p+"static/media/play-small-player-w.4ee3f796.svg"},function(e,a,t){e.exports=t(35)},,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(7),r=t.n(c),i=t(1),o=t(2),l=t(4),m=t(3),p=t(5),u=(t(19),t(21),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).getTilteInfo=function(){var e=t.props.showInfo.Genres,a=t.props.showInfo.Year,n="";if(void 0!==e){for(var s=0;s<e.length;s++)n+=e[s].Title+" / ";return n+a}},t}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"title-area"},s.a.createElement("div",{className:"title"},this.props.showInfo.Title),s.a.createElement("div",{className:"title-info"},this.getTilteInfo()))}}]),a}(n.Component)),d=(t(23),t(8)),h=t.n(d),b=t(9),f=t.n(b),v=t(10),E=t.n(v),g=t(11),N=t.n(g),O=function(e){function a(){return Object(i.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"container-general"},s.a.createElement("div",{className:"icons"},s.a.createElement("div",{className:"icon"},s.a.createElement("div",{className:"icon-image"},s.a.createElement("img",{alt:"button icon",src:h.a})),s.a.createElement("div",{className:"icon-text"},"Add to List")),s.a.createElement("div",{className:"icon"},s.a.createElement("div",{className:"icon-image"},s.a.createElement("img",{alt:"button icon",src:f.a})),s.a.createElement("div",{className:"icon-text"},"Rate")),s.a.createElement("div",{className:"icon"},s.a.createElement("div",{className:"icon-image"},s.a.createElement("img",{alt:"button icon",src:E.a})),s.a.createElement("div",{className:"icon-text"},"Record")),s.a.createElement("div",{className:"icon"},s.a.createElement("div",{className:"icon-image"},s.a.createElement("img",{alt:"button icon",src:N.a})),s.a.createElement("div",{className:"icon-text"},"Share"))),s.a.createElement("div",{className:"synopsis"},s.a.createElement("div",{className:"synopsis-text"},s.a.createElement("span",{className:"synopsis-title"},"SYNOPSIS"),s.a.createElement("br",null),this.props.showSynopsis)))}}]),a}(n.Component),y=(t(25),function(e){function a(){return Object(i.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"container-cast"},s.a.createElement("div",{className:"cast"},this.props.cast.map(function(e){return s.a.createElement("div",{className:"cast-member",key:e.ID},s.a.createElement("div",{className:"member-name"},e.Name))})))}}]),a}(n.Component)),j=(t(27),t(12)),S=t.n(j),w=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={tabGeneralClass:"tab-selected",tabCastClass:"tab"},t.changeTab=function(e){var a="tab",n="tab";"general"===e?a="tab-selected":"cast"===e&&(n="tab-selected"),t.setState({tabGeneralClass:a,tabCastClass:n})},t}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"data-area"},s.a.createElement("div",{className:"tabs"},s.a.createElement("div",{className:this.state.tabGeneralClass,onClick:function(){e.changeTab("general")}},"GENERAL"),s.a.createElement("div",{className:this.state.tabCastClass,onClick:function(){e.changeTab("cast")}},"CAST")),s.a.createElement("img",{className:"telecine-img",alt:"telecine-img",src:S.a}),s.a.createElement("div",{className:"divider"}),s.a.createElement("div",{className:"tab-content"},"tab-selected"===e.state.tabGeneralClass?s.a.createElement(O,{showSynopsis:e.props.showInfo.Synopsis}):s.a.createElement(y,{cast:e.props.showInfo.Cast})))}}]),a}(n.Component),k=(t(29),t(31),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).changeClass=function(){t.props.changeSeason(t.props.seasonNumber)},t}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{onClick:this.changeClass,className:this.props.classTab},this.props.titleTab)}}]),a}(n.Component)),C=(t(33),t(13)),I=t.n(C),T=function(e){function a(){return Object(i.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{onClick:function(){e.props.changeEp(e.props.number)},className:"episode-container"},s.a.createElement("div",{className:"episode-title"},this.props.number," ",this.props.title,s.a.createElement("img",{className:"play-button",alt:"play button",src:I.a})),function(){if(e.props.open)return s.a.createElement("div",{className:"ep-data"},s.a.createElement("img",{className:"ep-thumbnail",alt:"thumbnail",src:e.props.image}),s.a.createElement("div",{className:"ep-synopsis"},e.props.synopsis))}())}}]),a}(n.Component),x=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={seasonSelected:1,epSelected:0},t.changeSeason=function(e){t.setState({seasonSelected:e}),t.setState({epSelected:0})},t.checkQuantityOfSeasons=function(e){var a=[];return e.forEach(function(e){e&&a.push(e.SeasonNumber)}),Math.max.apply(Math,a)},t.showOrHideEPInfo=function(e){e===t.state.epSelected?t.setState({epSelected:0}):t.setState({epSelected:e})},t}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container-seasons"},s.a.createElement("div",{className:"season-tabs"},function(){var a=e.checkQuantityOfSeasons(e.props.epsInfo);if(a>0){for(var t=[],n=1;n<=a;n++){var c="season-tab";n===e.state.seasonSelected&&(c="season-tab-selected"),t.push(s.a.createElement(k,{key:n,classTab:c,seasonNumber:n,changeSeason:e.changeSeason,titleTab:"T"+n}))}return t}}()),s.a.createElement("div",{className:"divider"}),s.a.createElement("div",{className:"episodes"},this.props.epsInfo.map(function(a){if(a&&a.SeasonNumber===e.state.seasonSelected){var t=!1;return e.state.epSelected===a.EpisodeNumber&&(t=!0),s.a.createElement(T,{key:a.ID,open:t,title:a.Title,changeEp:e.showOrHideEPInfo,synopsis:a.Synopsis,number:a.EpisodeNumber,image:a.Image})}})))}}]),a}(n.Component),D=function(e,a){var t=new XMLHttpRequest;t.overrideMimeType("application/json"),t.open("GET",a,!0),t.onreadystatechange=function(){4===t.readyState&&200===t.status&&e(t.responseText)},t.send(null)},A=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(l.a)(this,Object(m.a)(a).call(this,e))).state={showData:[],EpsData:[],Background:""},t.getShowInfo=function(){D(function(e){var a=JSON.parse(e);t.setState({showData:a,Background:a.Images.Background})},"https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json"),D(function(e){var a=JSON.parse(e);t.setState({EpsData:a})},"https://sample-api-78c77.firebaseio.com/episodes/SHOW123.json")},t.getShowInfo(),t}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"page-container"},s.a.createElement("div",{className:"background"},s.a.createElement("img",{className:"background-image",alt:"background",src:this.state.Background}),s.a.createElement("div",{className:"image-shadow"})),s.a.createElement(u,{showInfo:this.state.showData}),s.a.createElement(x,{epsInfo:this.state.EpsData}),s.a.createElement(w,{showInfo:this.state.showData}),s.a.createElement("div",{className:"close-page-icon"},"X"))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(A,null),document.getElementById("tvshow-app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[14,2,1]]]);
//# sourceMappingURL=main.b5e14b2c.chunk.js.map