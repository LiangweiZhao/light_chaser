(this["webpackJsonplight-chaser"]=this["webpackJsonplight-chaser"]||[]).push([[0],{104:function(e,a,t){e.exports=t.p+"static/media/USC-Games_CardOnWhite_Horiz.a1daf3ac.png"},118:function(e,a,t){e.exports=t(200)},123:function(e,a,t){},125:function(e,a,t){},200:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(3),s=t.n(c),r=(t(123),t(58)),i=t(28),m=t(104),o=t.n(m),d=(t(124),t(125),t(126),t(127),t(203)),p=(t(128),t(105)),E=t(77),u=t(78),h=t(85),v=t(79),g=t(86),_=t(47),N=t.n(_),b=t(202),f=t(201),w=t(29),k=function(e){function a(){return Object(E.a)(this,a),Object(h.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props,a=(e.index,e.name),t=e.email,n=e.task,c=e.photo,s=Object(p.a)(e,["index","name","email","task","photo"]);return l.a.createElement("div",s,l.a.createElement("div",{className:"cardFront"},l.a.createElement("img",{src:"".concat(c)})),l.a.createElement("div",{className:"cardBack"},l.a.createElement("h1",null,a),l.a.createElement("h2",null,t),l.a.createElement("h3",null,n)))}}]),a}(n.Component),y=function(e){function a(){var e,t;Object(E.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(h.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(l)))).state={vppVal:"video"},t.handleVppClick=function(e){t.setState({vppVal:e.target.value})},t}return Object(g.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e={className:"center",centerMode:!0,infinite:!0,centerPadding:"0",slidesToShow:3,speed:500,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0,dots:!0}},{breakpoint:550,settings:{slidesToShow:1,slidesToScroll:1}}]};return console.log(window.location.pathname.split("/")),l.a.createElement("div",null,l.a.createElement(f.a,{mode:"horizontal",className:"Main-header"},l.a.createElement(f.a.Item,null,l.a.createElement("a",{className:"logo",href:"/".concat(window.location.pathname.split("/")[1])},l.a.createElement("img",{src:"USC-Games_CardOnWhite_Horiz.png"}))),l.a.createElement(f.a.Item,null,l.a.createElement("a",{href:"#levels"},l.a.createElement(w.a,{type:"home"}),"Home")),l.a.createElement(f.a.Item,null,l.a.createElement("a",{href:"#scene"},l.a.createElement(w.a,{type:"solution"}),"Introduction")),l.a.createElement(f.a.Item,null,l.a.createElement("a",{href:"#vpp"},l.a.createElement(w.a,{type:"video-camera"}),"Video")),l.a.createElement(f.a.Item,null,l.a.createElement("a",{href:"#team"},l.a.createElement(w.a,{type:"team"}),"Team"))),l.a.createElement("div",{className:"font_main"},l.a.createElement("h1",null,"Rushing Light")),l.a.createElement("div",{id:"levels"},l.a.createElement(N.a,{fade:!0,infinite:!0,autoplay:!0,speed:500,slidesToShow:1,slidesToScroll:1},l.a.createElement("div",{className:"overall_item level1"},l.a.createElement("img",{src:"level1_bg.png"})),l.a.createElement("div",{className:"overall_item level2"},l.a.createElement("img",{src:"level2_bg.png"})),l.a.createElement("div",{className:"overall_item level3"},l.a.createElement("img",{src:"level3_bg.png"})))),l.a.createElement("div",{id:"scene"},l.a.createElement("div",{className:"background_info"},l.a.createElement("h1",null,"Design Purpose"),l.a.createElement("span",null,"We want to design a small but elegant game, which also includes music. Every one can play it easily!")),l.a.createElement("div",{className:"scene_bg"}),l.a.createElement(N.a,Object.assign({},{dots:!0,infinite:!0,speed:500,autoplay:!0,slidesToShow:3,slidesToScroll:3,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]},{className:"scene_items"}),l.a.createElement("div",{className:"scene_item"},l.a.createElement("img",{src:"instru_1.png"})),l.a.createElement("div",{className:"scene_item"},l.a.createElement("img",{src:"instru_1.png"})),l.a.createElement("div",{className:"scene_item"},l.a.createElement("img",{src:"instru_1.png"})),l.a.createElement("div",{className:"scene_item"},l.a.createElement("img",{src:"instru_2.png"})),l.a.createElement("div",{className:"scene_item"},l.a.createElement("img",{src:"instru_2.png"})),l.a.createElement("div",{className:"scene_item"},l.a.createElement("img",{src:"instru_2.png"})))),l.a.createElement("div",{id:"vpp"},l.a.createElement("div",{className:"background_info"},l.a.createElement("h1",null,"Poster, Video & Screenshots"),l.a.createElement("span",null,"This part contains our poster, video & the screenshots of our game.")),l.a.createElement("div",{className:"vpp_bg"}),l.a.createElement(b.a.Group,{value:this.state.vppVal,className:"vpp_controller",onChange:this.handleVppClick},l.a.createElement(b.a.Button,{value:"poster"},"Poster"),l.a.createElement(b.a.Button,{value:"video"},"Video"),l.a.createElement(b.a.Button,{value:"screenshot"},"Screenshot")),l.a.createElement("br",null),"video"===this.state.vppVal?l.a.createElement("div",{className:"player"},l.a.createElement("video",{width:"1000",height:"400",controls:!0},l.a.createElement("source",{src:"http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"}))):"poster"===this.state.vppVal?l.a.createElement("img",{id:"poster",src:"poster.jpeg"}):l.a.createElement("div",{className:"screenshot"},l.a.createElement(N.a,e,l.a.createElement("h1",null,"1"),l.a.createElement("h1",null,"2"),l.a.createElement("h1",null,"3"),l.a.createElement("h1",null,"4")))),l.a.createElement("div",{id:"team"},l.a.createElement("div",{className:"background_info"},l.a.createElement("h1",null,"Team"),l.a.createElement("span",null,"Let's introduce our team!")),l.a.createElement("div",{className:"team_bg"}),l.a.createElement("div",{className:"team_container"},l.a.createElement(N.a,e,l.a.createElement(k,{className:"team_item",name:"LIANGWEI ZHAO",email:"liangwez@usc.edu",task:"Front-End Designer, Level Switch Designer",photo:"photo_wei.jpg",index:1}),l.a.createElement(k,{className:"team_item",name:"MAI LI",email:"maili@usc.edu",task:"Game Map designer\uff0cUI designer",photo:"photo_mai.jpeg",index:2}),l.a.createElement(k,{className:"team_item",name:"BOYU ZHANG",email:"boyuz@usc.edu",task:"Background Music Analysis",photo:"photo_boyu.jpeg",index:3}),l.a.createElement(k,{className:"team_item",name:"ZHUNYUE  CHEN",email:"zhunyuec@usc.edu",task:"Music Analyst, UI designer",photo:"photo_yue.jpeg",index:4}),l.a.createElement(k,{index:5,className:"team_item"}),l.a.createElement(k,{index:6,className:"team_item"}),l.a.createElement(k,{index:7,className:"team_item"})))),l.a.createElement("div",{id:"contact"},l.a.createElement("div",{className:"contact_content"},l.a.createElement("span",null,"Light Chaser"),l.a.createElement("br",null),l.a.createElement("img",{src:"USC-Games_CardOnWhite_Horiz.png"}))))}}]),a}(l.a.Component);var S=function(){return console.log(window.location.pathname),l.a.createElement(r.a,{className:"App"},l.a.createElement(i.c,null,l.a.createElement(r.a,{basename:window.location.pathname||""},l.a.createElement(i.a,{exact:!0,path:"/"},l.a.createElement("div",{className:"App-bg"}),l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{src:o.a,className:"App-logo",alt:"logo"}),l.a.createElement("h1",null,"Light Chaser"),l.a.createElement(r.b,{to:"/main"},l.a.createElement(d.a,{type:"primary"},"Click to Start"))),l.a.createElement("div",null,l.a.createElement("div",{className:"cube Cube-left"}))),l.a.createElement(i.a,{path:"/main",component:y}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[118,1,2]]]);
//# sourceMappingURL=main.62757a8b.chunk.js.map