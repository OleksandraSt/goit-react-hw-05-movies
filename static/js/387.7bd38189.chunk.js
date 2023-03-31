"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{387:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r,a,u,i,c,s=n(439),o=n(618),p=n(791),f=n(689),l=n(168),h=n(934),d=h.Z.ul(r||(r=(0,l.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    list-style: none;\n"]))),v=h.Z.li(a||(a=(0,l.Z)(["\n  box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 14%) 0px 1px 1px,\n    rgb(0 0 0 / 20%) 0px 2px 1px;\n  border-radius: 6px;\n"]))),x=h.Z.p(u||(u=(0,l.Z)(["\n  text-transform: uppercase;\n  font-size: 20px;\n  font-weight: 700;\n"]))),m=h.Z.p(i||(i=(0,l.Z)(["\nfont-size: 20px;\n"]))),g=h.Z.p(c||(c=(0,l.Z)(["\n  text-transform: uppercase;\n  font-size: 40px;\n  font-weight: 700;\n  margin-bottom: 50px;\n"]))),Z=n(184),w=function(){var e=(0,p.useState)([]),t=(0,s.Z)(e,2),n=t[0],r=t[1],a=(0,f.UO)().movieId,u=(0,p.useState)(null),i=(0,s.Z)(u,2),c=i[0],l=i[1];if((0,p.useEffect)((function(){(0,o.Jh)(a).then((function(e){r(e),l(null)})).catch((function(e){l(e),r([])}))}),[a]),n)return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(d,{children:n.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,Z.jsxs)(v,{children:[(0,Z.jsxs)(x,{children:[" Author : ",n," "]}),(0,Z.jsxs)(m,{children:[" Review : ",r," "]})]},t)}))}),0===n.length&&!c&&(0,Z.jsx)(g,{children:"There are no reviews for this movie"})]})}},618:function(e,t,n){n.d(t,{Df:function(){return s},IQ:function(){return p},Jh:function(){return f},Pg:function(){return o},XT:function(){return l}});var r=n(861),a=n(687),u=n.n(a),i=n(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="7651f4fc4c55634ce2fb0f6883d09fb5",s=function(){var e=(0,r.Z)(u().mark((function e(){var t,n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("/trending/movie/day",{params:{api_key:c}});case 2:return t=e.sent,n=t.data,r=function(e){return e.map((function(e){return{id:e.id,title:e.title,posterPath:e.poster_path,releaseDate:e.release_date}}))},e.abrupt("return",r(n.results));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a,s,o,p,f,l;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("/movie/".concat(t),{params:{api_key:c,language:"en-US"}});case 2:return n=e.sent,r=n.data,a=r.title,s=r.poster_path,o=r.release_date,p=r.genres,f=r.overview,l=r.vote_average,e.abrupt("return",{title:a,posterPath:s,releaseDate:o,genres:p,overview:f,voteAverage:l});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("/movie/".concat(t,"/credits"),{params:{api_key:c,language:"en-US"}});case 2:return n=e.sent,r=n.data,a=function(e){return e.map((function(e){return{id:e.id,name:e.name,profilePath:e.profile_path,character:e.character}}))},e.abrupt("return",a(r.cast));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("/movie/".concat(t,"/reviews"),{params:{api_key:c,language:"en-US"}});case 2:return n=e.sent,r=n.data,a=function(e){return e.map((function(e){return{id:e.id,author:e.author,content:e.content}}))},e.abrupt("return",a(r.results));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/search/movie",{params:{api_key:c,language:"en-US",query:t,page:1,include_adult:!1}});case 2:return n=e.sent,r=n.data,a=function(e){return e.map((function(e){return{id:e.id,title:e.title,posterPath:e.poster_path,releaseDate:e.release_date}}))},e.abrupt("return",a(r.results));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.7bd38189.chunk.js.map