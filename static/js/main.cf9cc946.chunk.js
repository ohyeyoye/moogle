(this.webpackJsonpmoogle=this.webpackJsonpmoogle||[]).push([[0],{41:function(e,n,t){e.exports=t(58)},46:function(e,n,t){},58:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(19),i=t.n(o),c=(t(46),t(10)),l=t(11),s=t(15);function m(){var e=Object(c.a)(['\n  font-family: "Noto Serif KR", serif;\n  font-weight: lighter;\n  font-size: 3em;\n  text-align: center;\n  user-select: none;\n']);return m=function(){return e},e}var u=Object(l.b)((function(e){var n=e.className;return a.a.createElement("h1",{className:"".concat(n," logo")},"Moogle")}))(m()),d=t(30),f=t(25),g=t(27),h=t(29),b=t.n(h),v=t(35),p=t.n(v),w=function(e){return new Date(e).getFullYear()},E="#ffffff",x=function(e){var n,t="";return e<=3?(n="#ff6529",t=E):e<=5?(n="#ff9f29",t=E):e<=6?(n="#ffd129",t=E):e<=8?(n="#4d96f0",t=E):e<=10&&(n="#6bc7a2",t=E),{bg:n,text:t}},j=t(14);var N=Object(j.b)({movie:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"MOVIE/SET_MOVIE":return n.data;default:return e}}});function O(){var e=Object(c.a)(["\n  position: relative;\n  background-color: transparent;\n  border-radius: 0.25rem;\n  color: white;\n  .spinner-container {\n    width: 1.25rem;\n    height: 1.25rem;\n    position: absolute;\n    top: 0;\n    right: 0.375rem;\n    transform: translateY(0.375rem);\n  }\n"]);return O=function(){return e},e}function y(){var e=Object(c.a)(["\n  list-style: none;\n  width: 100%;\n  background-color: rgba(80, 80, 80, 1);\n  user-select: none;\n  max-height: 20rem;\n  overflow: scroll;\n  opacity: 0.8;\n  .suggestion {\n    display: flex;\n    justify-content: space-between;\n    padding: 0.5rem;\n    span {\n      pointer-events: none;\n    }\n    &:hover {\n      background-color: rgba(120, 120, 120, 1);\n    }\n  }\n"]);return y=function(){return e},e}function k(){var e=Object(c.a)(["\n  width: 100%;\n  background-color: rgba(80, 80, 80, 1);\n  font-size: 1em;\n  color: white;\n  height: 2rem;\n  border: none;\n  padding: 0 0.5rem;\n  &:focus {\n    outline: none;\n  }\n  &::placeholder {\n    color: rgba(200, 200, 200, 1);\n  }\n"]);return k=function(){return e},e}function z(){var e=Object(c.a)(["\n  query searchMovie($keyword: String!) {\n    movies(keyword: $keyword) {\n      id\n      title\n      overview\n      rating\n      release_date\n      poster_path\n    }\n  }\n"]);return z=function(){return e},e}var S=Object(f.b)(z()),_=l.b.input.attrs((function(){return{type:"text",placeholder:"Search..."}}))(k()),M=l.b.ul(y()),I=Object(l.b)((function(e){var n=e.className,t=Object(r.useState)(""),o=Object(d.a)(t,2),i=o[0],c=o[1],l=Object(r.useState)(!1),m=Object(d.a)(l,2),u=m[0],f=m[1],h=Object(s.b)(),v=Object(r.useRef)(),E=function(e){var n=Number(e.target.dataset.index);h(function(e){return{type:"MOVIE/SET_MOVIE",data:e}}(O.movies[n])),console.log(O.movies[n]),f(!1)},x=Object(g.a)(S,{variables:{keyword:i}}),j=x.error,N=x.loading,O=x.data;return Object(r.useEffect)((function(){document.addEventListener("mousedown",(function(e){e.target.classList.contains("suggestion")||b()(i)||e.target===v.current||f(!1)}))})),j&&console.log(j.message),a.a.createElement("div",{className:n},a.a.createElement(_,{onChange:function(e){c(e.target.value),f(!0)},value:i,ref:v}),!b()(i)&&N&&a.a.createElement("div",{className:"spinner-container"},a.a.createElement(p.a,{className:"spinner",size:"20",color:"white"})),a.a.createElement(M,null,u&&O&&O.movies.map((function(e,n){return a.a.createElement("li",{className:"suggestion",key:e.id,onClick:E,"data-index":n},a.a.createElement("span",null,e.title),a.a.createElement("span",null,isNaN(e.release_date)?w(e.release_date):"Unknown"))}))))}))(O()),V=t(40);function Y(){var e=Object(c.a)(["\n  position: relative;\n  width: 300px;\n  height: 500px;\n  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);\n  border-radius: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  user-select: none;\n  .img-container {\n    position: relative;\n    height: 70%;\n    overflow: hidden;\n    transform: skewY(-10deg) translateY(-3.5rem);\n    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);\n    img {\n      height: 20rem;\n      object-fit: cover;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      z-index: 1;\n    }\n    .error-message {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      position: absolute;\n      width: 100%;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      z-index: 2;\n      font-size: 2em;\n      .error-icon {\n        width: 3rem;\n        height: 3rem;\n      }\n    }\n  }\n  .rating {\n    display: block;\n    position: absolute;\n    top: 60%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: ",";\n    color: ",';\n    font-weight: bold;\n    text-align: center;\n    line-height: 4rem;\n    width: 4rem;\n    height: 4rem;\n    font-size: 1.2em;\n    border-radius: 50%;\n    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);\n  }\n  .movie-info {\n    position: relative;\n    z-index: 2;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    padding: 1rem;\n    .title-date-container {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 0.5rem;\n      .movie-title {\n        flex: 1;\n        font-size: 1.5em;\n        font-weight: bold;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n      .release-date {\n        font-size: 1.2em;\n        width: 5rem;\n        text-align: center;\n      }\n    }\n    .overview {\n      position: relative;\n      height: 4.8em;\n      line-height: 1.2em;\n      font-size: 1em;\n      word-wrap: break-word;\n      overflow: hidden;\n      &:after {\n        content: "";\n        text-align: right;\n        position: absolute;\n        bottom: 0;\n        right: 0;\n        width: 50%;\n        height: 1.2em;\n        background: linear-gradient(\n          to right,\n          rgba(255, 255, 255, 0),\n          rgba(255, 255, 255, 1) 50%\n        );\n      }\n    }\n  }\n']);return Y=function(){return e},e}var $=Object(l.b)((function(e){var n=e.className,t=e.movie,r=t.title,o=t.overview,i=t.rating,c=t.release_date,l=t.poster_path;return a.a.createElement("div",{className:n},a.a.createElement("div",{className:"img-container"},a.a.createElement("img",{src:l,alt:"".concat(r),draggable:"false"}),!l&&a.a.createElement("div",{className:"error-message"},a.a.createElement(V.a,{className:"error-icon"}),a.a.createElement("span",null,"Poster Not Found."))),a.a.createElement("span",{className:"rating"},i),a.a.createElement("div",{className:"movie-info"},a.a.createElement("div",{className:"title-date-container"},a.a.createElement("span",{className:"movie-title"},r),a.a.createElement("span",{className:"release-date"},isNaN(c)?w(c):"Unknown")),a.a.createElement("p",{className:"overview"},o)))}))(Y(),(function(e){return x(e.movie.rating).bg}),(function(e){return x(e.movie.rating).text}));function B(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem;\n  .search-form {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    "," {\n      width: 70%;\n      position: absolute;\n      z-index: 2;\n    }\n  }\n  .search-result {\n    position: relative;\n    top: 4rem;\n  }\n"]);return B=function(){return e},e}var C=Object(l.b)((function(e){var n=e.className,t=Object(s.c)((function(e){return e.movie}));return a.a.createElement("div",{className:n},a.a.createElement("form",{className:"search-form",onSubmit:function(e){return e.preventDefault()}},a.a.createElement(I,null)),a.a.createElement("div",{className:"search-result"},t&&a.a.createElement($,{movie:t})))}))(B(),I);function D(){var e=Object(c.a)(["\n  * {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n  .logo {\n    margin-top: 2rem;\n  }\n"]);return D=function(){return e},e}var F=Object(l.a)(D());var J=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(u,null),a.a.createElement(C,null),a.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=t(8),R=new f.a({uri:"https://moogle-app.herokuapp.com"}),T=Object(j.c)(N);i.a.render(a.a.createElement(L.a,{client:R},a.a.createElement(s.a,{store:T},a.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.cf9cc946.chunk.js.map