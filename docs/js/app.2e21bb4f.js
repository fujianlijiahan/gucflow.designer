(function(t){function e(e){for(var a,i,s=e[0],c=e[1],d=e[2],h=0,u=[];h<s.length;h++)i=s[h],o[i]&&u.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(u.length)u.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("c21b"),o=n.n(a);o.a},"2d47":function(t,e,n){},3125:function(t,e,n){t.exports=n.p+"img/users1.df2fa2bc.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("FlowDesigner",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"designer"}},[a("div",{attrs:{id:"toolbar"}},[a("div",{class:{active:t.tempData.mode.current==t.enums.mode.select},on:{click:function(e){t.switchMode(t.enums.mode.select)}}},[a("img",{attrs:{src:n("beac")}}),a("p",[t._v("选择")])]),a("div",{class:{active:t.tempData.mode.current==t.enums.mode.connect},on:{click:function(e){t.switchMode(t.enums.mode.connect)}}},[a("img",{attrs:{src:n("9a6e")}}),a("p",[t._v("连接")])]),a("hr"),a("div",{class:{active:t.tempData.mode.current==t.enums.mode.addNode_task},attrs:{id:t.enums.mode.addNode_task,nodetype:t.enums.nodeType.task},on:{click:function(e){t.switchMode(t.enums.mode.addNode_task)}}},[a("img",{attrs:{src:n("3125")}}),a("p",[t._v("任务")])]),a("div",{class:{active:t.tempData.mode.current==t.enums.mode.addNode_parallel},attrs:{id:t.enums.mode.addNode_parallel,nodetype:t.enums.nodeType.task},on:{click:function(e){t.switchMode(t.enums.mode.addNode_parallel)}}},[a("img",{attrs:{src:n("f573")}}),a("p",[t._v("分支")])]),a("div",{class:{active:t.tempData.mode.current==t.enums.mode.addNode_merge},attrs:{id:t.enums.mode.addNode_merge,nodetype:t.enums.nodeType.task},on:{click:function(e){t.switchMode(t.enums.mode.addNode_merge)}}},[a("img",{attrs:{src:n("f4b6")}}),a("p",[t._v("合并")])]),a("div",{class:{active:t.tempData.mode.current==t.enums.mode.addNode_subflow},attrs:{id:t.enums.mode.addNode_subflow,nodetype:t.enums.nodeType.task},on:{click:function(e){t.switchMode(t.enums.mode.addNode_subflow)}}},[a("img",{attrs:{src:n("8e81")}}),a("p",[t._v("子流程")])])]),a("div",{attrs:{id:"container"}},[a("svg",{attrs:{width:t.flowData.paperWidth,tabindex:"0",height:t.flowData.paperHeight,id:"paper",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},on:{keyup:[function(e){return"button"in e||46===e.keyCode?t.remove(e):null},function(e){return("button"in e||67===e.keyCode)&&e.ctrlKey?e.shiftKey||e.altKey||e.metaKey?null:t.copy(e):null},function(e){return("button"in e||86===e.keyCode)&&e.ctrlKey?e.shiftKey||e.altKey||e.metaKey?null:t.paste(e):null},function(e){return("button"in e||90===e.keyCode)&&e.ctrlKey?e.shiftKey||e.altKey||e.metaKey?null:t.undo(e):null}],mousemove:t.moving,mouseup:t.drop,click:function(e){return e.stopPropagation(),t.paperClick(e)}}},[a("defs",[a("marker",{attrs:{id:"arrow-unselect",orient:"auto",overflow:"visible",markerUnits:"userSpaceOnUse"}},[a("path",{staticClass:"unselect",attrs:{stroke:"none",transform:"rotate(180)",d:"M 10 -5 0 0 10 5 z"}})]),a("marker",{attrs:{id:"arrow-select",orient:"auto",overflow:"visible",markerUnits:"userSpaceOnUse"}},[a("path",{staticClass:"select",attrs:{stroke:"none",transform:"rotate(180)",d:"M 10 -5 0 0 10 5 z"}})])]),t._l(t.flowData.nodes,function(e){return a("g",{key:"node"+e.id,class:"node"==t.tempData.currentSelect.type&&t.tempData.currentSelect.id==e.id?"select":"unselect",attrs:{id:e.id,cursor:"pointer"},on:{dblclick:function(n){t.nodeDblClick(e)},mousedown:function(e){return e.stopPropagation(),t.beginMove(e)},mouseup:function(n){t.select("node",e.id,n)}}},[a("title",[t._v(t._s(e.text))]),t._v("\n                "+t._s(t.shortText=e.text.substringIfTooLong(6))+"\n                "),e.type==t.enums.nodeType.task?a("TaskNode",{attrs:{width:e.nodeWidth,height:e.nodeHeight,x:e.x,y:e.y}},[t._v(t._s(t.shortText))]):t._e(),e.type==t.enums.nodeType.start?a("StartNode",{attrs:{width:e.nodeWidth,height:e.nodeHeight,x:e.x,y:e.y}},[t._v(t._s(t.shortText))]):t._e(),e.type==t.enums.nodeType.stop?a("StopNode",{attrs:{width:e.nodeWidth,height:e.nodeHeight,x:e.x,y:e.y}},[t._v(t._s(t.shortText))]):t._e(),e.type==t.enums.nodeType.parallel?a("ParallelNode",{attrs:{width:e.nodeWidth,height:e.nodeHeight,x:e.x,y:e.y}},[t._v(t._s(t.shortText))]):t._e(),e.type==t.enums.nodeType.merge?a("MergeNode",{attrs:{width:e.nodeWidth,height:e.nodeHeight,x:e.x,y:e.y}},[t._v(t._s(t.shortText))]):t._e(),e.type==t.enums.nodeType.subflow?a("SubflowNode",{attrs:{width:e.nodeWidth,height:e.nodeHeight,x:e.x,y:e.y}},[t._v(t._s(t.shortText))]):t._e()],1)}),t._l(t.flowData.lines,function(e){return a("g",{key:"line"+e.id,class:"line"==t.tempData.currentSelect.type&&t.tempData.currentSelect.id==e.id?"select":"unselect",attrs:{cursor:"pointer"},on:{dblclick:function(n){t.lineDblClick(e)},click:function(n){n.stopPropagation(),t.select("line",e.id)}}},[t._v("\n                "+t._s(t.lineData=t.getLineInfo(e))+"\n                "),a("title",[t._v(t._s(e.text))]),a("path",{attrs:{d:t.lineData.path,fill:"none",stroke:"transparent","stroke-width":"10"}}),a("path",{attrs:{d:t.lineData.path,fill:"none","stroke-width":"2","marker-end":"line"==t.tempData.currentSelect.type&&t.tempData.currentSelect.id==e.id?"url(#arrow-select)":"url(#arrow-unselect)"}}),a("text",{attrs:{x:t.lineData.textx,y:t.lineData.texty}},[t._v("\n                    "+t._s(e.text.substringIfTooLong(12))+"\n                ")])])}),t.tempData.connectLine.path?a("path",{staticClass:"unselect",attrs:{d:t.tempData.connectLine.path,fill:"none","stroke-width":"2","marker-end":"url(#arrow-unselect)"}}):t._e()],2)]),a("div",{staticStyle:{color:"#e6e6e6"}},[t._v("ctrl+c,ctrl+v:复制粘贴,ctrl+z:撤销,delete:删除")])])},s=[],c=(n("55dd"),n("7514"),n("ac6a"),n("0d6d"),n("6bde"));n("6b54");function d(){return(65536*(1+Math.random())|0).toString(16).substring(1)}var l={guid:function(){return d()+d()+"-"+d()+"-"+d()+"-"+d()+"-"+d()+d()+d()},readonly:function(t){if(t&&"object"==Object(c["a"])(t))for(var e in Object.freeze(t),t)"object"===Object(c["a"])(t[e])&&Object.freeze(t[e]),l.readonly(t[e])},useExtends:function(){Array.prototype.remove=function(t){var e=this;this.filter(t).forEach(function(t){var n=e.indexOf(t);e.splice(n,1)})},Array.prototype.first=function(){return this.length?this[0]:null},Array.prototype.last=function(){return this.length?this[this.length-1]:null},String.prototype.substringIfTooLong=function(t){return this?this.length<=t?this:this.substring(0,t)+"...":""}},clone:function(t){var e={};for(var n in t)if("object"!=Object(c["a"])(t[n]))e[n]=t[n];else if(t[n]instanceof Array){for(var a=[],o=0;o<t[n].length;o++){var r=t[n][o];"object"!=Object(c["a"])(r)?a.push(r):a.push(l.clone(r))}e[n]=a}else e[n]=l.clone(t[n]);return e}},h=l,u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("g",[n("rect",{attrs:{width:t.width,height:t.height,x:t.x-t.width/2,y:t.y-t.height/2,rx:"2",ry:"2","stroke-width":"2",fill:"transparent","stroke-dasharray":"0"}}),n("text",{attrs:{x:t.x,y:t.y+2,"text-anchor":"middle","font-size":"14","stroke-width":"0"}},[t._t("default")],2),n("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:t.x-t.width/2+2,y:t.y-t.height/2+2,height:"18",width:"18",viewBox:"0 0 1000 1000","enable-background":"new 0 0 1000 1000","xml:space":"preserve"}},[n("metadata",[t._v(" Svg Vector Icons : http://www.sfont.cn ")]),n("g",[n("path",{attrs:{d:"M762.7,532.6c-5-1.6-38,8.8-14.9-63.1h-0.3c50.9-71.9,89.7-133.1,89.7-216.1c0-127.6-84.9-192.7-183.5-192.7c-17.5,0-34.4,3.7-50.6,8c39.6,36.3,65.2,86.5,65.2,159.8c0,92.2-20.8,179-77.2,254.7c-21.9,27.5-15.4,71.1,7,77C720.5,593,822.9,673.8,851.3,754.2l2.4,22.5c0,31.8-37.8,59.1-52.9,78.6C912.4,844,990,815,990,749.3v-25.1C990,654.9,871,568.5,762.7,532.6z M511.7,599.4c-5.4-1.8-40.1-17.5-18.5-83.3h-0.3c56.5-58.2,99.7-151.9,99.7-244c0-141.7-94.2-216-203.8-216c-109.5,0-203.3,74.3-203.3,216c0,92.6,42.9,186.6,99.8,244.6c22.2,58.1-17.5,79.7-25.8,82.7C144.6,640.9,10,716.5,10,791.2v27.9C10,920.9,207.2,944,389.7,944c182.7,0,377.5-23.2,377.5-124.9v-27.9C767.3,714.3,632.1,639.2,511.7,599.4z"}})])],1)])},p=[],f={props:["x","y","width","height"]},m=f,g=n("2877"),x=Object(g["a"])(m,u,p,!1,null,null,null);x.options.__file="task.vue";var w=x.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("g",[n("rect",{attrs:{width:t.width,height:t.height,x:t.x-t.width/2,y:t.y-t.height/2,rx:"2",ry:"2","stroke-width":"2",fill:"transparent","stroke-dasharray":"0"}}),n("text",{attrs:{x:t.x,y:t.y+2,"text-anchor":"middle","font-size":"14","stroke-width":"0"}},[t._t("default")],2),n("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:t.x-t.width/2+2,y:t.y-t.height/2+2,height:"18",width:"18",viewBox:"0 0 1000 1000","enable-background":"new 0 0 1000 1000","xml:space":"preserve"}},[n("metadata",[t._v(" Svg Vector Icons : http://www.sfont.cn ")]),n("g",[n("path",{attrs:{d:"M500,10C229,10,10,229,10,500s219,490,490,490s490-219,490-490S771,10,500,10z M500,937.9c-241.9,0-437.9-196-437.9-437.9S258.1,60.5,500,60.5s437.9,196,437.9,437.9S741.9,937.9,500,937.9z M383.6,706.7L771,500L383.6,293.3V706.7z"}})])],1)])},v=[],D={props:["x","y","width","height"]},b=D,_=Object(g["a"])(b,y,v,!1,null,null,null);_.options.__file="start.vue";var k=_.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("g",[n("rect",{attrs:{width:t.width,height:t.height,x:t.x-t.width/2,y:t.y-t.height/2,rx:"2",ry:"2","stroke-width":"2",fill:"transparent","stroke-dasharray":"0"}}),n("text",{attrs:{x:t.x,y:t.y+2,"text-anchor":"middle","font-size":"14","stroke-width":"0"}},[t._t("default")],2),n("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:t.x-t.width/2+2,y:t.y-t.height/2+2,height:"18",width:"18",viewBox:"0 0 1000 1000","enable-background":"new 0 0 1000 1000","xml:space":"preserve"}},[n("metadata",[t._v(" Svg Vector Icons : http://www.sfont.cn ")]),n("g",[n("path",{attrs:{d:"M500,10C229.4,10,10,229.4,10,500s219.4,490,490,490s490-219.4,490-490S770.6,10,500,10z M500,945.5C254,945.5,54.5,746,54.5,500C54.5,254,254,54.5,500,54.5C746,54.5,945.5,254,945.5,500C945.5,746,746,945.5,500,945.5z"}}),n("path",{attrs:{d:"M321.8,321.8h356.4v356.4H321.8V321.8z"}})])],1)])},S=[],N={props:["x","y","width","height"]},I=N,C=Object(g["a"])(I,M,S,!1,null,null,null);C.options.__file="stop.vue";var T=C.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("g",[n("rect",{attrs:{width:t.width,height:t.height,x:t.x-t.width/2,y:t.y-t.height/2,rx:"2",ry:"2","stroke-width":"2",fill:"transparent","stroke-dasharray":"0"}}),n("text",{attrs:{x:t.x,y:t.y+2,"text-anchor":"middle","font-size":"14","stroke-width":"0"}},[t._t("default")],2),n("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:t.x-t.width/2+2,y:t.y-t.height/2+2,height:"18",width:"18",viewBox:"0 0 1000 1000","enable-background":"new 0 0 1000 1000","xml:space":"preserve"}},[n("metadata",[t._v(" Svg Vector Icons : http://www.sfont.cn ")]),n("g",[n("g",{attrs:{transform:"translate(0.000000,511.000000) scale(0.100000,-0.100000)"}},[n("path",{attrs:{d:"M7294.9,4742.1l-289.1-267.9l507.6-532.3l511.2-535.8l-518.2-21.2c-740.3-28.2-1159.8-158.6-1699.2-525.3c-239.7-162.2-698-638.1-828.4-860.1c-52.9-88.1-98.7-162.2-105.8-162.2c-3.5,0-52.9,67-105.8,151.6c-324.3,500.6-690.9,842.5-1149.2,1082.2c-384.2,197.4-733.2,282-1276.1,306.7l-454.8,21.1l532.3,532.3l532.3,532.3l-257.3,257.3c-141,137.5-271.4,253.8-289.1,253.8c-21.2,0-493.5-458.3-1054-1018.8L332.7,2933.7l250.3-275c137.5-151.6,595.8-620.4,1018.8-1039.9l768.5-768.5l260.9,285.5l260.9,285.5l-208,215c-112.8,119.9-359.6,373.7-542.9,564l-334.9,341.9h437.1c490,0,733.2-49.4,1092.8-222.1c331.4-162.2,722.7-557,895.4-909.5c236.2-482.9,236.2-447.7,236.2-3475.8v-2725h405.4h405.4v2760.2c0,3021.1-3.5,2950.6,211.5,3391.2c229.1,472.4,705,895.4,1202.1,1075.2c193.8,70.5,310.2,84.6,842.5,95.2l616.9,14.1l-564-564l-564-567.6l282-282l282-282l1039.9,1039.9l1039.9,1039.9L8627.4,3970.1L7587.5,5010L7294.9,4742.1z"}})])])],1)])},z=[],H={props:["x","y","width","height"]},L=H,O=Object(g["a"])(L,j,z,!1,null,null,null);O.options.__file="parallel.vue";var W=O.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("g",[n("rect",{attrs:{width:t.width,height:t.height,x:t.x-t.width/2,y:t.y-t.height/2,rx:"2",ry:"2","stroke-width":"2",fill:"transparent","stroke-dasharray":"0"}}),n("text",{attrs:{x:t.x,y:t.y+2,"text-anchor":"middle","font-size":"14","stroke-width":"0"}},[t._t("default")],2),n("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:t.x-t.width/2+2,y:t.y-t.height/2+2,height:"18",width:"18",viewBox:"0 0 1000 1000","enable-background":"new 0 0 1000 1000","xml:space":"preserve"}},[n("metadata",[t._v(" Svg Vector Icons : http://www.sfont.cn ")]),n("g",[n("g",{attrs:{transform:"translate(0.000000,511.000000) scale(0.100000,-0.100000)"}},[n("path",{attrs:{d:"M872,4990.5c-19.8-19.8-31.7-225.7-31.7-459.3v-423.7l902.8-15.9c819.7-15.8,922.6-23.7,1176-110.9c574.2-198,1108.7-673.1,1366.1-1207.7c237.6-502.9,237.6-483.1,237.6-3286.6v-2561.9l-613.8,590c-340.5,320.7-629.6,590-645.4,597.9c-15.8,3.9-166.3-130.7-336.6-300.9l-304.9-308.9l403.9-392c225.7-213.8,752.3-732.5,1172.1-1144.3l760.3-756.3l1168.1,1168.1l1164.2,1164.2l-301,328.7l-304.9,332.6L6079-2402.3l-605.8-605.9l-7.9,2395.6c-7.9,1318.6-7.9,2498.6-3.9,2625.3c7.9,316.8,146.5,696.9,376.2,1041.4c229.6,344.5,538.5,609.8,922.6,795.9c431.6,201.9,720.7,249.5,1615.6,249.5h784l-11.9,447.4l-11.9,443.5l-851.3-4c-914.7,0-1231.5-47.5-1698.7-233.6c-558.3-229.7-1069.1-629.6-1417.6-1120.6c-99-138.6-194-237.6-205.9-217.8c-15.8,15.8-103,130.7-194,253.4C4309,4281.7,3580.5,4756.9,2863.7,4915.3C2574.7,4982.6,919.5,5042,872,4990.5z"}})])])],1)])},P=[],X={props:["x","y","width","height"]},E=X,K=Object(g["a"])(E,Y,P,!1,null,null,null);K.options.__file="merge.vue";var B=K.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("g",[n("rect",{attrs:{width:t.width,height:t.height,x:t.x-t.width/2,y:t.y-t.height/2,rx:"2",ry:"2","stroke-width":"2",fill:"transparent","stroke-dasharray":"0"}}),n("text",{attrs:{x:t.x,y:t.y+2,"text-anchor":"middle","font-size":"14","stroke-width":"0"}},[t._t("default")],2),n("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:t.x-t.width/2+2,y:t.y-t.height/2+2,height:"18",width:"18",viewBox:"0 0 1000 1000","enable-background":"new 0 0 1000 1000","xml:space":"preserve"}},[n("metadata",[t._v(" Svg Vector Icons : http://www.sfont.cn ")]),n("g",[n("path",{attrs:{d:"M500,10C229.8,10,10,229.8,10,500c0,270.2,219.8,490,490,490c106.5,0,208.5-34.6,295.3-100.3c4-4.6,6-9.7,6-15.3c0-12.8-10.5-23.2-23.3-23.2c-6.3,0-12.1,2.3-16.3,6.6l-0.5,0.3c-76.4,56.2-166.5,86-260.6,86c-242.9,0-440.6-197.6-440.6-440.6c0-243.1,197.6-440.7,440.6-440.7c243,0,440.7,197.7,440.7,440.7c0,73.9-16.8,143.1-50,205.7l-0.3,1.3c-0.5,1.9-1.1,3.9-1.1,6c0,12.9,10.4,23.3,23.2,23.3c7.5,0,14.2-3.6,18.5-9.4v0.5l1-2c0.7-1.1,1.3-2.2,1.7-3.3l0.3-0.6C971.3,653.7,990,578.1,990,500C990,229.8,770.2,10,500,10z"}}),n("path",{attrs:{d:"M630,609.2l4.5-0.1c23.1-1.2,44.4-11.4,59.9-28.5c15.5-17.2,23.4-39.4,22.2-62.6c-2.4-46.8-41.4-82.1-91.1-82.1c-23.1,1.2-44.4,11.4-59.9,28.5c-2.3,2.5-4.1,5.3-5.9,7.9l-0.5,0.7l-112.6-10.4c-2.6-20.3-12.2-38.8-27.1-52.2l46.8-84.2c5.7,1.1,11.4,1.7,16.9,1.7c47.8,0,86.7-38.9,86.7-86.7c0-47.8-38.9-86.7-86.7-86.7c-47.8,0-86.7,38.9-86.7,86.7c0,22.4,8.6,43.6,24.1,59.8l-48.5,87.2c-5.7-0.9-10.7-1.4-15.7-1.4c-23.1,1.3-44.4,11.4-59.9,28.6c-15.5,17.2-23.4,39.3-22.1,62.5c2.3,46.1,40.3,82.2,86.5,82.2l4.5-0.1c23.1-1.2,44.4-11.4,59.9-28.5c4.4-4.8,8.2-10.4,11.9-17.5l106.3,9.8c0,0.1,0,0.2,0,0.3c-0.1,0.9-0.1,1.8-0.1,2.7c0.8,16.6,6.4,32.5,16.2,46.1L520,644.2c-0.5-0.1-1-0.1-1.5-0.2c-1.5-0.2-3.1-0.4-4.7-0.4c-47.8,0-86.7,38.9-86.7,86.7c0,47.8,38.9,86.7,86.7,86.7c47.8,0,86.7-38.9,86.7-86.7c0-25.7-11.6-49.8-31.8-66.5l33.2-59.5C611.3,607.5,620.8,609.2,630,609.2z M395.4,471.8c0.5,9.3-2.7,18.1-8.8,24.9c-6.2,6.8-14.7,10.9-23.9,11.3l-1.9,0c-18.4,0-33.5-14.4-34.4-32.7c-0.4-9.2,2.7-18,8.8-24.9c6.5-7.1,15.1-10.9,25.8-11.4C379.4,439.1,394.5,453.5,395.4,471.8z M483.3,275.8c-19,0-34.5-15.5-34.5-34.6c0-19,15.5-34.5,34.5-34.5c19,0,34.5,15.5,34.5,34.5C517.8,260.3,502.3,275.8,483.3,275.8z M513.8,695.8c19,0,34.5,15.5,34.5,34.6c0,19-15.5,34.5-34.5,34.5c-19,0-34.5-15.5-34.5-34.5C479.3,711.3,494.8,695.8,513.8,695.8z M595.5,524.2c-0.5-9.2,2.7-18.1,8.8-24.9c6.4-7.1,15.1-10.9,25.8-11.4c18.4,0,33.5,14.4,34.4,32.8c0.5,9.3-2.7,18.1-8.8,24.9c-6.2,6.9-14.7,10.9-23.9,11.3L630,557C611.6,557,596.5,542.6,595.5,524.2z"}})])],1)])},$=[],A={props:["x","y","width","height"]},U=A,F=Object(g["a"])(U,V,$,!1,null,null,null);F.options.__file="subflow.vue";var q=F.exports;h.useExtends();var J={select:"select",connect:"connect",addNode_task:"addNode-task",addNode_parallel:"addNode-parallel",addNode_merge:"addNode-merge",addNode_subflow:"addNode-subflow"},G={start:"start",stop:"stop",task:"task",parallel:"parallel",merge:"merge",subflow:"subflow"},Q={node:"node",line:"line"},R={components:{TaskNode:w,StartNode:k,StopNode:T,ParallelNode:W,MergeNode:B,SubflowNode:q},data:function(){return{enums:{mode:J,nodeType:G,eleType:Q},tempData:{dragData:{nodeid:null,sourceMouseX:null,sourceMouseY:null,prevMouseX:null,prevMouseY:null},connectLine:{path:null,nodeId:null},currentSelect:{type:null,id:null},mode:{current:"select"},historyData:[],clipboard:{nodeId:null}},flowData:{paperWidth:1e3,paperHeight:600,nodes:[{id:"1",type:G.start,text:"开始",x:150,y:50,nodeWidth:100,nodeHeight:50},{id:"2",type:G.task,text:"经理审批",x:300,y:150,nodeWidth:100,nodeHeight:50},{id:"3",type:G.parallel,text:"总监审批",x:500,y:50,nodeWidth:100,nodeHeight:50},{id:"4",type:G.merge,text:"董事长审批啊啊啊啊啊啊",x:500,y:200,nodeWidth:100,nodeHeight:50},{id:"5",type:G.stop,text:"结束",x:500,y:300,nodeWidth:100,nodeHeight:50}],lines:[{id:"1",from:"1",to:"2",text:"开始到经理"},{id:"2",from:"2",to:"3",text:"经理到总监"},{id:"3",from:"3",to:"4",text:"总监到董事长"},{id:"4",from:"4",to:"5",text:"董事长到结束"}]}}},created:function(){h.readonly(this.enums)},mounted:function(){document.getElementById("designer").onselectstart=function(){return!1}},methods:{getLineInfo:function(t){for(var e=this.flowData.nodes.find(function(e){return e.id==t.from}),n=this.flowData.nodes.find(function(e){return e.id==t.to}),a=[{x:e.x,y:e.y-e.nodeHeight/2},{x:e.x,y:e.y+e.nodeHeight/2},{x:e.x-e.nodeWidth/2,y:e.y},{x:e.x+e.nodeWidth/2,y:e.y}],o=[{x:n.x,y:n.y-n.nodeHeight/2},{x:n.x,y:n.y+n.nodeHeight/2},{x:n.x-n.nodeWidth/2,y:n.y},{x:n.x+n.nodeWidth/2,y:n.y}],r=[],i=0;i<4;i++)for(var s=a[i],c=0;c<4;c++){var d=o[c],l=Math.sqrt(Math.pow(Math.abs(d.x-s.x),2)+Math.pow(Math.abs(d.y-s.y),2));r.push({fromIndex:i,toIndex:c,length:l})}r=r.sort(function(t,e){return t.length-e.length});var h=r[0],u=a[h.fromIndex].x,p=a[h.fromIndex].y,f=o[h.toIndex].x,m=o[h.toIndex].y,g=(f+u)/2,x=(m+p)/2;return{path:"M".concat(u," ").concat(p,"L").concat(f," ").concat(m),textx:g,texty:x,fromx:u,fromy:p,tox:f,toy:m}},beginMove:function(t){this.tempData.mode.current==J.select?this.beginDrag(t):this.tempData.mode.current==J.connect&&this.beginConnect(t)},moving:function(t){this.tempData.mode.current==J.select?this.dragMoving(t):this.tempData.mode.current==J.connect&&this.connectMoving(t)},drop:function(t){this.tempData.mode.current==J.select?this.dragDrop(t):this.tempData.mode.current==J.connect&&this.connectDrop(t)},beginDrag:function(t){var e=this.getMousePointNode(t);e||console.error(t),this.tempData.historyData.push(h.clone(this.flowData)),this.tempData.dragData.nodeid=this.getMousePointNode(t).id,this.tempData.dragData.sourceMouseX=t.screenX,this.tempData.dragData.sourceMouseY=t.screenY,this.tempData.dragData.prevMouseX=t.screenX,this.tempData.dragData.prevMouseY=t.screenY},beginConnect:function(t){this.tempData.connectLine.nodeId=this.getMousePointNode(t).id},dragMoving:function(t){var e=this;if(this.tempData.dragData.nodeid){var n=t.screenX-this.tempData.dragData.prevMouseX,a=t.screenY-this.tempData.dragData.prevMouseY;if(!(Math.abs(n)+Math.abs(a)<5)){var o=this.flowData.nodes.find(function(t){return t.id==e.tempData.dragData.nodeid});o&&(o.x+=n,o.y+=a,this.extendPaperIfNeed(o),this.tempData.dragData.prevMouseX=t.screenX,this.tempData.dragData.prevMouseY=t.screenY)}}},dragDrop:function(){this.tempData.dragData.nodeid=null,this.tempData.dragData.sourceMouseX=null,this.tempData.dragData.sourceMouseY=null,this.tempData.dragData.prevMouseX=null,this.tempData.dragData.prevMouseY=null},connectMoving:function(t){var e=this,n=this.flowData.nodes.find(function(t){return t.id==e.tempData.connectLine.nodeId});if(n){for(var a=n,o=[{x:a.x,y:a.y-a.nodeHeight/2},{x:a.x,y:a.y+a.nodeHeight/2},{x:a.x-a.nodeWidth/2,y:a.y},{x:a.x+a.nodeWidth/2,y:a.y}],r=[{x:t.offsetX,y:t.offsetY}],i=[],s=0;s<4;s++)for(var c=o[s],d=0;d<1;d++){var l=r[d],h=Math.sqrt(Math.pow(Math.abs(l.x-c.x),2)+Math.pow(Math.abs(l.y-c.y),2));i.push({fromIndex:s,toIndex:d,length:h})}i=i.sort(function(t,e){return t.length-e.length});var u=i[0],p=o[u.fromIndex].x,f=o[u.fromIndex].y,m=r[u.toIndex].x,g=r[u.toIndex].y;this.tempData.connectLine.path="M".concat(p," ").concat(f,"L").concat(m," ").concat(g)}},connectDrop:function(t){var e=this,n=this.getMousePointNode(t);if(n){var a=this.flowData.lines.some(function(t){return t.from==e.tempData.connectLine.nodeId&&t.to==n.id});a||this.tempData.connectLine.nodeId==n.id||(this.tempData.historyData.push(h.clone(this.flowData)),this.flowData.lines.push({id:h.guid(),from:this.tempData.connectLine.nodeId,to:n.id,text:""}),this.tempData.connectLine={path:null,nodeId:null})}},nodeDblClick:function(t){alert("nodeid:"+t.id)},lineDblClick:function(t){alert("lineid:"+t.id)},getMousePointNode:function(t){var e=t.offsetX,n=t.offsetY;return this.flowData.nodes.find(function(t){return e>=t.x-t.nodeWidth/2&&e<=t.x+t.nodeWidth/2&&n>=t.y-t.nodeHeight/2&&n<=t.y+t.nodeHeight/2})},extendPaperIfNeed:function(t){t.x+t.nodeWidth>this.flowData.paperWidth&&(this.flowData.paperWidth*=2),t.y+t.nodeHeight>this.flowData.paperHeight&&(this.flowData.paperHeight*=2)},select:function(t,e,n){this.tempData.dragData.sourceMouseX&&this.tempData.dragData.sourceMouseY&&(n.screenX!=this.tempData.dragData.sourceMouseX||n.screenY!=this.tempData.dragData.sourceMouseY)||(this.switchMode(J.select),this.tempData.currentSelect.type=t,this.tempData.currentSelect.id=e)},paperClick:function(t){if("paper"==t.target.id&&(this.tempData.currentSelect.type=null,this.tempData.currentSelect.id=null,this.tempData.mode.current==J.addNode_task||this.tempData.mode.current==J.addNode_parallel||this.tempData.mode.current==J.addNode_merge||this.tempData.mode.current==J.addNode_subflow)){var e=document.getElementById(this.tempData.mode.current),n=e.getElementsByTagName("p")[0].innerText,a=e.getAttribute("nodetype");this.tempData.historyData.push(h.clone(this.flowData)),this.flowData.nodes.push({id:h.guid(),type:a,text:n,x:t.offsetX,y:t.offsetY,nodeWidth:100,nodeHeight:50})}},remove:function(){var t=this;this.tempData.currentSelect.id&&this.tempData.currentSelect.type&&(this.tempData.historyData.push(h.clone(this.flowData)),this.tempData.currentSelect.type==Q.node?(this.flowData.lines.remove(function(e){return e.from==t.tempData.currentSelect.id}),this.flowData.lines.remove(function(e){return e.to==t.tempData.currentSelect.id}),this.flowData.nodes.remove(function(e){return e.id==t.tempData.currentSelect.id})):this.tempData.currentSelect.type==Q.line&&this.flowData.lines.remove(function(e){return e.id==t.tempData.currentSelect.id}))},switchMode:function(t){this.tempData.mode.current=t},copy:function(){this.tempData.currentSelect.type==Q.node&&(this.tempData.clipboard.nodeId=this.tempData.currentSelect.id)},paste:function(){var t=this;if(this.tempData.clipboard.nodeId){var e=this.flowData.nodes.find(function(e){return e.id==t.tempData.clipboard.nodeId}),n=h.clone(e);n.x+=20,n.y+=20,n.id=h.guid(),this.tempData.historyData.push(h.clone(this.flowData)),this.flowData.nodes.push(n)}},undo:function(){if(this.tempData.historyData.length){var t=this.tempData.historyData.last();t&&(this.flowData=h.clone(t),this.tempData.historyData.pop())}}}},Z=R,tt=(n("7aff"),Object(g["a"])(Z,i,s,!1,null,"93d04146",null));tt.options.__file="FlowDesigner.vue";var et=tt.exports,nt={name:"app",components:{FlowDesigner:et}},at=nt,ot=(n("034f"),Object(g["a"])(at,o,r,!1,null,null,null));ot.options.__file="App.vue";var rt=ot.exports;a["a"].config.productionTip=!1,a["a"].config.devtools=!0,new a["a"]({render:function(t){return t(rt)}}).$mount("#app")},"7aff":function(t,e,n){"use strict";var a=n("2d47"),o=n.n(a);o.a},"8e81":function(t,e,n){t.exports=n.p+"img/subflow.8593dce6.svg"},"9a6e":function(t,e,n){t.exports=n.p+"img/connect.57f5058c.svg"},beac:function(t,e,n){t.exports=n.p+"img/mouse.92728ebf.svg"},c21b:function(t,e,n){},f4b6:function(t,e,n){t.exports=n.p+"img/merge.b1bd56ce.svg"},f573:function(t,e,n){t.exports=n.p+"img/branch.bf549f10.svg"}});
//# sourceMappingURL=app.2e21bb4f.js.map