(this["webpackJsonpreact-card-filter"]=this["webpackJsonpreact-card-filter"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),l=(n(12),n(3)),i=n(4),s=n(5),u=n(6),d=(n(13),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{src:"https://via.placeholder.com/180/003366",width:"150",height:"150",alt:e.card.name}),r.a.createElement("h2",null," ",e.card.name," "),r.a.createElement("p",null," ",e.card.company.name," "),r.a.createElement("p",null," ",e.card.phone," "),r.a.createElement("p",null," ",e.card.email," "))}),h=(n(14),function(e){return r.a.createElement("div",{className:"card-list"},e.cards.map((function(e){return r.a.createElement(d,{key:e.id,card:e})})))}),m=(n(15),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),p=(n(16),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={cards:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({cards:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.cards,a=t.searchField,c=n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement(m,{placeholder:"Search People",handleChange:function(t){return e.setState({searchField:t.target.value})}}),r.a.createElement(h,{cards:c}))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.f8ab667f.chunk.js.map