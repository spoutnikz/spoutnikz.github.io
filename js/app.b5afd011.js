(function(t){function e(e){for(var i,o,a=e[0],u=e[1],d=e[2],m=0,l=[];m<a.length;m++)o=a[m],s[o]&&l.push(s[o][0]),s[o]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);g&&g(e);while(l.length)l.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,a=1;a<n.length;a++){var u=n[a];0!==s[u]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},s={app:0},r=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var d=0;d<a.length;d++)e(a[d]);var g=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),s=n.n(i);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"controls"}},[n("div",{staticStyle:{float:"right","z-index":"3",width:"8px",height:"8px","background-color":"red"},on:{click:function(e){t.settings.controls=!t.settings.controls}}}),n("table",{directives:[{name:"show",rawName:"v-show",value:t.settings.controls,expression:"settings.controls"}]},[n("tr",[n("td",[t._v("background:")]),n("td",[t._v("\n          R\n          "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.settings.bg.r,expression:"settings.bg.r",modifiers:{number:!0}}],staticClass:"inputnumber",attrs:{min:"0",max:"255",type:"number"},domProps:{value:t.settings.bg.r},on:{input:function(e){e.target.composing||t.$set(t.settings.bg,"r",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),n("td",[t._v("\n          G\n          "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.settings.bg.g,expression:"settings.bg.g",modifiers:{number:!0}}],staticClass:"inputnumber",attrs:{min:"0",max:"255",type:"number"},domProps:{value:t.settings.bg.g},on:{input:function(e){e.target.composing||t.$set(t.settings.bg,"g",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),n("td",[t._v("\n          B\n          "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.settings.bg.b,expression:"settings.bg.b",modifiers:{number:!0}}],staticClass:"inputnumber",attrs:{min:"0",max:"255",type:"number"},domProps:{value:t.settings.bg.b},on:{input:function(e){e.target.composing||t.$set(t.settings.bg,"b",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),n("td",[t._v("\n          A\n          "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.settings.bg.a,expression:"settings.bg.a",modifiers:{number:!0}}],staticClass:"inputnumber",attrs:{min:"0",max:"255",type:"number"},domProps:{value:t.settings.bg.a},on:{input:function(e){e.target.composing||t.$set(t.settings.bg,"a",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),n("tr",[n("td",[t._v("circles:")]),n("td",[t._v("\n          R\n          "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.settings.dot.r,expression:"settings.dot.r",modifiers:{number:!0}}],staticClass:"inputnumber",attrs:{min:"0",max:"255",type:"number"},domProps:{value:t.settings.dot.r},on:{input:function(e){e.target.composing||t.$set(t.settings.dot,"r",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),n("td",[t._v("\n          G\n          "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.settings.dot.g,expression:"settings.dot.g",modifiers:{number:!0}}],staticClass:"inputnumber",attrs:{min:"0",max:"255",type:"number"},domProps:{value:t.settings.dot.g},on:{input:function(e){e.target.composing||t.$set(t.settings.dot,"g",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),n("td",[t._v("\n          B\n          "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.settings.dot.b,expression:"settings.dot.b",modifiers:{number:!0}}],staticClass:"inputnumber",attrs:{min:"0",max:"255",type:"number"},domProps:{value:t.settings.dot.b},on:{input:function(e){e.target.composing||t.$set(t.settings.dot,"b",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),n("td",[t._v("\n          A\n          "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.settings.dot.a,expression:"settings.dot.a",modifiers:{number:!0}}],staticClass:"inputnumber",attrs:{min:"0",max:"255",type:"number"},domProps:{value:t.settings.dot.a},on:{input:function(e){e.target.composing||t.$set(t.settings.dot,"a",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),n("tr",[n("td",[t._v(" ")]),n("td",[t._v("\n          MinSize\n          "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.settings.dot.minSize,expression:"settings.dot.minSize",modifiers:{number:!0}}],staticClass:"inputnumber",attrs:{min:"0",max:"255",type:"number"},domProps:{value:t.settings.dot.minSize},on:{input:function(e){e.target.composing||t.$set(t.settings.dot,"minSize",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),n("td",[t._v("\n          MaxSize\n          "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.settings.dot.maxSize,expression:"settings.dot.maxSize",modifiers:{number:!0}}],staticClass:"inputnumber",attrs:{min:"0",max:"255",type:"number"},domProps:{value:t.settings.dot.maxSize},on:{input:function(e){e.target.composing||t.$set(t.settings.dot,"maxSize",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),n("td",[t._v(" ")]),n("td",[t._v(" ")])]),n("tr",[n("td",[t._v("other:")]),n("td",[t._v("\n          cellWidth\n          "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.settings.grid.cellWidth,expression:"settings.grid.cellWidth",modifiers:{number:!0}}],staticClass:"inputnumber",attrs:{min:"10",max:"255",type:"number"},domProps:{value:t.settings.grid.cellWidth},on:{input:function(e){e.target.composing||t.$set(t.settings.grid,"cellWidth",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),n("td",[t._v("\n          cellHeight\n          "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.settings.grid.cellHeight,expression:"settings.grid.cellHeight",modifiers:{number:!0}}],staticClass:"inputnumber",attrs:{min:"10",max:"255",type:"number"},domProps:{value:t.settings.grid.cellHeight},on:{input:function(e){e.target.composing||t.$set(t.settings.grid,"cellHeight",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),n("td",[t._v("\n          FPS\n          "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.settings.framerate,expression:"settings.framerate",modifiers:{number:!0}}],staticClass:"inputnumber",attrs:{min:"0",max:"255",type:"number"},domProps:{value:t.settings.framerate},on:{input:function(e){e.target.composing||t.$set(t.settings,"framerate",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),n("td",[t._v("\n          realFps: "+t._s(t.realFps)+"\n        ")])]),t._e()])]),n("div",{attrs:{id:"p5"}})])},r=[],o=(n("ac6a"),n("6c7b"),n("3425")),a=n.n(o),u={name:"app",components:{},data:function(){return{settings:{controls:!0,framerate:10,bg:{r:25,g:25,b:25,a:255},grid:{cols:0,rows:0,width:0,height:0,cellWidth:50,cellHeight:50},dot:{r:0,g:255,b:0,a:255,maxSize:30,minSize:0}},data:{dots:[]},realFps:null,sk:null,timers:{resize:null}}},mounted:function(){var t=this;console.log("mounted P5: ",a.a),new a.a(function(e){t.sk=e,t.sk.setup=t.setup.bind(t),t.sk.draw=t.draw.bind(t)},"body")},watch:{settings:{handler:function(){console.log("settings change"),this.debounceResize()},deep:!0}},methods:{setup:function(){this.setupGrid(this.sk.windowWidth,this.sk.windowHeight),window.addEventListener("resize",this.debounceResize),this.sk.createCanvas(this.sk.windowWidth,this.sk.windowHeight),this.sk.frameRate(this.settings.framerate),this.sk.background(this.settings.bg.r,this.settings.bg.g,this.settings.bg.b,255),this.sk.noStroke()},resize:function(){console.log("resize"),this.sk.frameRate(this.settings.framerate),this.sk.resizeCanvas(this.sk.windowWidth,this.sk.windowHeight),this.setupGrid(this.sk.windowWidth,this.sk.windowHeight)},debounceResize:function(){window.clearTimeout(this.timers.resize),this.timers.resize=window.setTimeout(this.resize,100)},draw:function(){this.realFps=Math.round(this.sk.frameRate()),this.sk.background(this.settings.bg.r,this.settings.bg.g,this.settings.bg.b,this.settings.bg.a),this.fill()},setupGrid:function(t,e){console.log("setupGrid: ",t,e),this.data.dots=[],this.settings.grid.width=t,this.settings.grid.height=e,this.settings.grid.cols=Math.floor(t/this.settings.grid.cellWidth),this.settings.grid.rows=Math.floor(e/this.settings.grid.cellHeight);for(var n=0;n<this.settings.grid.cols;n++)for(var i=0;i<this.settings.grid.cols;i++){var s=Math.floor(Math.random()*(this.settings.dot.maxSize-this.settings.dot.minSize+1))+this.settings.dot.minSize;this.data.dots.push({x:n*this.settings.grid.cellWidth,y:i*this.settings.grid.cellHeight,w:s,h:s,grow:s>this.settings.dot.minSize&&s<this.settings.dot.maxSize?Math.random()<.5:!s})}},fill:function(){var t=this;this.sk.fill(this.settings.dot.r,this.settings.dot.g,this.settings.dot.b,this.settings.dot.a),this.sk.ellipseMode(this.sk.RADIUS),this.data.dots.forEach(function(e){var n=!!e.w;e.grow=e.w>t.settings.dot.minSize&&e.w<t.settings.dot.maxSize?e.grow:!n;var i=e.grow?1:-1;e.w=e.w+i,e.h=e.h+i,t.sk.ellipse(e.x,e.y,e.w,e.h)})}}},d=u,g=(n("034f"),n("2877")),m=Object(g["a"])(d,s,r,!1,null,null,null),l=m.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,e,n){}});
//# sourceMappingURL=app.b5afd011.js.map