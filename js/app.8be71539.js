(function(t){function e(e){for(var i,s,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},n={app:0},o=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/Binary/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"06ab":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}}),a("router-view")],1)},o=[],s=(a("034f"),a("2877")),r={},c=Object(s["a"])(r,n,o,!1,null,null,null),l=c.exports,u=a("9483");Object(u["a"])("".concat("/Binary/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var d=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[t._m(0),a("div",{staticClass:"container text-white"},[a("div",{staticClass:"row py-4 p-md-4 mx-1 bg-secondary rounded-3"},[a("div",{staticClass:"row mx-auto"},[a("form",{on:{submit:function(e){return t.multiplyBinary()}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 m-auto"},[a("h5",[t._v("Ingrese valores a multiplicar")]),a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.multiplicador,expression:"multiplicador"}],staticClass:"form-control",attrs:{type:"number",id:"multiplicador","aria-describedby":"multiplicador",required:""},domProps:{value:t.multiplicador},on:{input:function(e){e.target.composing||(t.multiplicador=e.target.value)}}}),a("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[t._v("X")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.multiplicando,expression:"multiplicando"}],staticClass:"form-control",attrs:{type:"number",id:"multiplicando","aria-describedby":"multiplicando",required:""},domProps:{value:t.multiplicando},on:{input:function(e){e.target.composing||(t.multiplicando=e.target.value)}}}),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Multiplicar")])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-11 col-md-8 m-auto bg-white text-dark rounded-3 p-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4 text-center"},[t._v(t._s(t.operaciones.binarios.multiplicador))]),a("div",{staticClass:"col-4 text-center"},[t._v(t._s(t.operaciones.binarios.multiplicando))]),a("div",{staticClass:"col-4 text-center"},[t._v(t._s(t.operaciones.binarios.resultado))])]),a("div",{staticClass:"row mt-3"},[t._l(t.operaciones.iteraciones,(function(e,i){return a("div",{key:i,staticClass:"m-1"},[a("h6",{staticClass:"text-start"},[t._v(t._s(e.nombre))]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-4 text-center"},[t._v(t._s(e.inicio.multiplicador))]),a("div",{staticClass:"col-4 text-center"},[t._v(t._s(e.inicio.multiplicando))]),a("div",{staticClass:"col-4 text-center"},[t._v(t._s(e.inicio.resultado))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-4 text-center"},[t._v(t._s(e.final.multiplicador))]),a("div",{staticClass:"col-4 text-center"},[t._v(t._s(e.final.multiplicando))]),a("div",{staticClass:"col-4 text-center"},[t._v(t._s(e.final.resultado))])])])})),a("h5",{staticClass:"mt-3"},[t._v("Resultado("+t._s(t.multiplicador)+" x "+t._s(t.multiplicando)+") = "+t._s(t.multiplicador*t.multiplicando)),a("sub",[t._v("10")]),t._v(" = "+t._s(t.operaciones.resultado)),a("sub",[t._v("2")])])],2)])])])])])]),a("NavBar")],1)},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("h1",{staticClass:"text-white"},[t._v("Multiplicador por suma y desplazamiento binario")])])}],v=(a("d3b7"),a("25f0"),a("4d90"),a("fb6a"),a("843c"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"py-4 py-md-3"},[a("nav",{staticClass:"navbar fixed-bottom navbar-dark bg-7 shadow-lg"},[a("div",{staticClass:"col-12 col-sm-10 col-md-6 mx-auto"},[a("div",{staticClass:"row w-100 mx-auto"},[a("router-link",{staticClass:"navbar-brand d-flex flex-column col-3 mx-0 bg-7",attrs:{to:{name:"Home"}}},[a("span",{staticClass:"icon-home"}),a("span",{staticClass:"fs-8"},[t._v("Multiplicador")])]),a("router-link",{staticClass:"navbar-brand d-flex flex-column col-3 mx-0 bg-7",attrs:{to:{name:"Convertidor"}}},[a("span",{staticClass:"icon-credit-card"}),a("span",{staticClass:"fs-8"},[t._v("Convertidor")])]),a("router-link",{staticClass:"navbar-brand d-flex flex-column col-3 mx-0 bg-7",attrs:{to:{name:"",params:{anio:2021}}}},[a("span",{staticClass:"icon-calendar"}),a("span",{staticClass:"fs-8"},[t._v("Calendario")])]),a("router-link",{staticClass:"navbar-brand d-flex flex-column col-3 mx-0 bg-7",attrs:{to:{name:""}}},[a("span",{staticClass:"icon-user"}),a("span",{staticClass:"fs-8"},[t._v("Usuario")])])],1)])])])}),f=[],h={name:"NavBar"},b=h,g=(a("92b0"),Object(s["a"])(b,v,f,!1,null,"743a76df",null)),C=g.exports,_={name:"Home",components:{NavBar:C},data:function(){return{multiplicador:"",multiplicando:"",operaciones:{binarios:{multiplicador:"",multiplicando:"",resultado:""},iteraciones:[{nombre:"",inicio:{multiplicador:"",multiplicando:"",resultado:""},final:{multiplicador:"",multiplicando:"",resultado:""}}],resultado:""}}},methods:{toBinary:function(t){var e=parseInt(t);return e.toString(2)},maxLength:function(t,e){return t.length>e.length?t.length:e.length},addBinaries:function(t,e,a){for(var i=0,n="",o=a-1;o>=0;o--){var s=parseInt(t.charAt(o))+parseInt(e.charAt(o))+i;switch(s){case 0:n=s+n,i=0;break;case 1:n=s+n,i=0;break;case 2:n=0+n,i=1;break;case 3:n=1+n,i=1;break}}return n.padStart(a,"0")},multiplyBinary:function(){var t=this.toBinary(this.multiplicador),e=this.toBinary(this.multiplicando),a="",i=2*this.maxLength(t,e);this.operaciones.iteraciones=[],e=e.padStart(i,"0"),a=a.padStart(i,"0");var n=t.length;this.operaciones.binarios.multiplicador=t,this.operaciones.binarios.multiplicando=e,this.operaciones.binarios.resultado=a;for(var o=0;o<n;o++){var s={nombre:"",inicio:{},final:{}};s.nombre="Iteracion "+(o+1)+":";var r=parseInt(t.charAt(n-1));1==r&&(a=this.addBinaries(a,e,i)),s.inicio.multiplicador=t,s.inicio.multiplicando=e,s.inicio.resultado=a,t=t.slice(0,n-1),t=t.padStart(n,"0"),e=e.slice(1,e.length),e=e.padEnd(i,"0"),s.final.multiplicador=t,s.final.multiplicando=e,s.final.resultado=a,this.operaciones.iteraciones.push(s)}this.operaciones.resultado=a}}},w=_,x=Object(s["a"])(w,p,m,!1,null,"0ef3520c",null),y=x.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[t._m(0),a("div",{staticClass:"container text-white"},[a("div",{staticClass:"row p-2 p-md-4 mx-1 bg-secondary rounded-3"},[a("div",{staticClass:"row mx-auto"},[a("form",{on:{submit:function(e){return t.switchOperation()}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 m-auto"},[a("h5",[t._v("Ingrese valor a convertir")]),a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.numero,expression:"numero"}],staticClass:"form-control",attrs:{type:"text",id:"numero","aria-describedby":"numero",required:""},domProps:{value:t.numero},on:{input:function(e){e.target.composing||(t.numero=e.target.value)}}}),a("select",{directives:[{name:"model",rawName:"v-model",value:t.operacion,expression:"operacion"}],staticClass:"form-select",attrs:{id:"inputGroupSelect01"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.operacion=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"1"}},[t._v("Decimal a octal")]),a("option",{attrs:{value:"2"}},[t._v("Binario a decimal")])]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Convetir")])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-11 col-md-8 m-auto bg-white text-dark rounded-3 p-4"},[a("div",{staticClass:"row"},t._l(t.operaciones.entero,(function(e,i){return a("div",{key:i,staticClass:"col-12 text-start"},[a("div",{domProps:{innerHTML:t._s(e)}})])})),0),a("div",{staticClass:"row mt-3"},t._l(t.operaciones.decimal,(function(e,i){return a("div",{key:i,staticClass:"col-12 text-start"},[a("div",{domProps:{innerHTML:t._s(e)}})])})),0),a("div",{staticClass:"row mt-3"},[a("h5",{staticClass:"mt-3",domProps:{innerHTML:t._s(t.resultado)}})])])])])])])]),a("NavBar")],1)},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("h1",{staticClass:"text-white"},[t._v("Convertidor de bases numéricas")])])}],B=(a("ac1f"),a("1276"),{name:"Convertidor",components:{NavBar:C},data:function(){return{numero:"",operaciones:{entero:[],decimal:[]},resultado:"",operacion:"1"}},methods:{binarioToDecimal:function(){var t=[],e=0;this.operaciones.decimal=[],t=this.numero.split(",");for(var a="<span>"+t[0]+" = ",i="<span>"+t[0]+" = ",n="<span>"+t[0]+" = ",o=0,s=0;s<t[0].length;s++){var r=t[0].length-1-s,c=parseInt(t[0].charAt(s));a+=c+"(2<sup>"+r+"</sup>)</span>",s<t[0].length-1?a+="+":a+="",i+=c*Math.pow(2,r)+"</span>",s<t[0].length-1?i+="+":i+="",o+=c*Math.pow(2,r)}if(n+=o+"</span>",e+=o,this.operaciones.entero=[],this.operaciones.entero.push(a),this.operaciones.entero.push(i),this.operaciones.entero.push(n),t.length>1){a="<span>0,"+t[1]+" = ",i="<span>0,"+t[1]+" = ",n="<span>0,"+t[1]+" = ",o=0;for(var l=0;l<t[1].length;l++){var u=-(l+1),d=parseInt(t[1].charAt(l));a+=d+"(2<sup>"+u+"</sup>)</span>",l<t[1].length-1?a+="+":a+="",i+=d*Math.pow(2,u)+"</span>",l<t[1].length-1?i+="+":i+="",o+=d*Math.pow(2,u)}n+=o+"</span>",this.operaciones.decimal.push(a),this.operaciones.decimal.push(i),this.operaciones.decimal.push(n)}e+=o,this.resultado="<span>"+this.numero+"<sub>2</sub> = "+e+"<sub>10</sub>"},decimalToOctal:function(){var t="",e=0,a=this.numero,i=8;this.operaciones.entero=[];while(a>i){e=a%i;var n="<span>"+a+" / "+i+" = ";a=(a-e)/i,n+=a>i?a+' <span class="text-danger fw-bold">'+e+"</span></span>":' <span class="text-danger fw-bold">'+a+" "+e+"</span></span>",t=e+t,this.operaciones.entero.push(n)}t=a+t,this.resultado="<span>"+this.numero+"<sub>10</sub> = "+t+"<sub>"+i+"</sub>"},switchOperation:function(){switch(console.log(this.operacion),this.operacion){case"1":this.decimalToOctal();break;case"2":this.binarioToDecimal();break}}}}),j=B,M=(a("6930"),Object(s["a"])(j,k,O,!1,null,"3440c2e4",null)),P=M.exports;i["a"].use(d["a"]);var N=[{path:"/",name:"Home",component:y},{path:"/convertidor",name:"Convertidor",component:P}],S=new d["a"]({routes:N}),T=S;a("7b17"),a("ab8b");i["a"].config.productionTip=!1,new i["a"]({router:T,render:function(t){return t(l)}}).$mount("#app")},"5fff":function(t,e,a){},6930:function(t,e,a){"use strict";a("5fff")},"85ec":function(t,e,a){},"92b0":function(t,e,a){"use strict";a("06ab")}});
//# sourceMappingURL=app.8be71539.js.map