(this.webpackJsonpreact_with_materialize=this.webpackJsonpreact_with_materialize||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(7),r=a.n(i),s=(a(14),a(8)),o=a(1),l=a(2),m=a(4),u=a(3),d=a(5),h=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={content:""},a.handleChange=function(e){var t=e.target.value;console.log(t),a.setState({content:t})},a.handleSubmit=function(e){e.preventDefault(),a.props.addItems(a.state),a.setState({content:""})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("input",{placeholder:"Add some stuff",type:"text",onChange:this.handleChange,value:this.state.content}),c.a.createElement("button",{className:"btn waves-effect waves-light",onSubmit:this.handleSubmit},c.a.createElement("i",{className:"material-icons right"},"send"),"Submit")))}}]),t}(c.a.Component),f=function(e){var t=e.stuff,a=e.deleteItems,n=t.length?t.map((function(e){return c.a.createElement("div",{className:"Active collection-item",key:e.id},c.a.createElement("span",{className:"green-text"},e.content),c.a.createElement("button",{className:"waves-effect waves-light btn right",onClick:function(){a(e.id)}},"Done"))})):c.a.createElement("p",{className:"red-text center"}," You have no item list ");return c.a.createElement("div",{className:"collection"},n)},v=(a(15),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={items:[{id:1,content:"Training React.js"},{id:2,content:"Get rid of trash"}]},a.deleteItems=function(e){var t=a.state.items.filter((function(t){return t.id!==e}));a.setState({items:t})},a.addItems=function(e){e.id=Math.random();var t=[].concat(Object(s.a)(a.state.items),[e]);a.setState({items:t})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"center blue-text"},"Lets get ready to rumble ... !!! "),c.a.createElement(f,{stuff:this.state.items,deleteItems:this.deleteItems}),c.a.createElement(h,{addItems:this.addItems}))}}]),t}(c.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=document.getElementById("root");r.a.render(c.a.createElement(v,null),b),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.d8dc7467.chunk.js.map