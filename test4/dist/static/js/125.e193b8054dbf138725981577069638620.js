webpackJsonp([125],{IG4e:function(t,e){},gNkU:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("a3Yh"),i=a.n(s),l=a("fYFQ"),n=a.n(l),o=(a("Kmkn"),a("lvfI")),r=a("tE5u"),c=a("3cXf"),d=a.n(c),h={props:["dataObj"],components:{showUsualFiles:o.a},data:function(){return{addPeopleArr:[],watchTableCell:{val1:"",val2:"",val3:"",val4:"",val5:"",val6:"",val7:"",val8:"",val9:"",val10:"",val11:""},fileId4:"",fileId5:"",dataObj4:{},dataObj5:{}}},created:function(){var t=this.dataObj.data;t&&this.watchTableCellFun(t,t.busId,t.id)},methods:{watchTableCellFun:function(t,e,a){var s=this;this.axios.post("/process/infReportMaterial/getEntityRow/"+a+"?infViewNum=1").then(function(t){"200"==t.code&&(s.watchTableCell.val1=t.data.title,s.watchTableCell.val2=JSON.parse(t.data.ifShow),s.watchTableCell.val3=t.data.content,s.dataObj4={data:t.data,showFlag:!1,disabled:!1},s.fileId4=!s.fileId4)}).catch(function(t){});var i={relationBusId:e};i=d()(i),this.axios.post("/process/infProcessAppend/getInfProcessAppendRows",i,{headers:{"Content-Type":"application/json"}}).then(function(t){"200"==t.code&&(s.appendId=t.data.id,s.watchTableCell.val11=t.data.content,s.dataObj5={data:t.data,showFlag:!1,disabled:!1},s.fileId5=!s.fileId5)}).catch(function(t){})}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"common-detail"},[a("div",{staticClass:"content"},[a("Form",{attrs:{"label-width":120}},[a("FormItem",{attrs:{label:"标题："}},[a("label",[t._v(t._s(t.watchTableCell.val1))])]),t._v(" "),a("FormItem",{attrs:{label:"是否公开："}},[a("label",[t._v(t._s(t.watchTableCell.val2?"是":"否"))])]),t._v(" "),a("FormItem",{attrs:{label:"编辑内容："}},[a("label",[a("el-popover",{attrs:{placement:"top-start",title:"",width:"200",trigger:"hover",content:t.watchTableCell.val3}},[a("p",{staticClass:"textMaxWidth2 disBlock textOverflow",attrs:{slot:"reference"},slot:"reference"},[t._v(t._s(t.watchTableCell.val3))])])],1)]),t._v(" "),a("FormItem",{attrs:{label:"附件："}},[a("showUsualFiles",{key:t.fileId4,attrs:{"file-obj":t.dataObj4}})],1),t._v(" "),a("FormItem",{attrs:{label:"追加附件："}},[a("showUsualFiles",{key:t.fileId5,attrs:{"file-obj":t.dataObj5}})],1),t._v(" "),a("FormItem",{attrs:{label:"追加内容："}},[a("label",[a("el-popover",{attrs:{placement:"top-start",title:"",width:"200",trigger:"hover",content:t.watchTableCell.val11}},[a("p",{staticClass:"textMaxWidth2 disBlock textOverflow",attrs:{slot:"reference"},slot:"reference"},[t._v(t._s(t.watchTableCell.val11))])])],1)])],1)],1)])},staticRenderFns:[]},p=a("C7Lr")(h,v,!1,null,null,null).exports,u={components:{viewCountDialog:r.a,reportMaterialDetail:p,showUsualFiles:o.a,Treeselect:n.a},data:function(){var t;return t={data1:[],keyId:"",pubOrgDatas:[],tabview:"viewCountDialog",showModal:!1,dataObj:{type:"1",data:[]},pageSize:10,pageNum:1,currentpage:1,rowCount:0,modelTitle:""},i()(t,"pageSize",5),i()(t,"formValidate",{manager:[],title:"",permissionTime:["",""],content:"",ifShow:""}),i()(t,"cardDatas",[]),t},created:function(){this.getDic(),this.handleSubmit(0,1),this.getExtractUnit()},methods:{getExtractUnit:function(){var t=this;this.axios.post("/system/unit/getExtractUnitAll").then(function(e){"200"==e.code&&(t.selectTreeCleanUp(e.data),t.data1=e.data)}).catch(function(t){})},selectTreeCleanUp:function(t){for(var e=0;e<t.length;e++)t[e].children&&t[e].children.length>0?this.selectTreeCleanUp(t[e].children):this.$delete(t[e],"children")},watchFiles:function(t){this.modelTitle="文件列表",this.tabview="showUsualFiles",this.showModal=!0,this.keyId=t.busId,this.dataObj={data:t,showFlag:!1}},getDic:function(){var t=this;this.axios.get("/system/getDic/PROCESS_PUB_ORG").then(function(e){"200"==e.code&&(t.pubOrgDatas=e.data.PROCESS_PUB_ORG)}).catch(function(t){})},handleSubmit:function(t,e){var a=this,s={title:this.formValidate.title,content:this.formValidate.content,manager:this.formValidate.manager,ifShow:this.formValidate.ifShow,ifExacte:t,minPubTime:this.formValidate.permissionTime[0],maxPubTime:this.formValidate.permissionTime[1],pageNum:e,pageSize:this.pageSize};this.axios.post("/process/infReportMaterial/getInfReportMaterialList?infViewNum=1",s,{headers:{"Content-Type":"application/json"}}).then(function(t){"200"==t.code&&(a.cardDatas=t.data.records,a.cardDatas.forEach(function(t){t.updateTime=t.updateTime.substr(0,10)}),a.rowCount=t.data.total)}).catch(function(t){})},pageSizefun:function(t){this.pageSize=1*t,this.handleSubmit(0,1)},pageChange:function(t){this.pageNum=t,this.handleSubmit(0,t)},showViewCount:function(t){this.dataObj={data:t},this.keyId=!this.keyId,this.modelTitle="浏览次数",this.showModal=!0,this.tabview="viewCountDialog"},cancel:function(){"详情"==this.modelTitle&&this.handleSubmit(0,this.pageNum)},cancelDialog:function(t){this.showModal=t},showDetail:function(t){this.modelTitle="详情",this.dataObj={data:t,showFlag:!1},this.tabview="reportMaterialDetail",this.keyId=!this.keyId,this.showModal=!0}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"show-common-manage"},[t._m(0),t._v(" "),a("div",{staticClass:"contentCellBox"},[a("div",{staticClass:"contentCellBox"},[t._m(1),t._v(" "),a("div",{staticClass:"contentCellBody1"},[a("Form",{ref:"formValidate",attrs:{model:t.formValidate,"label-width":120,inline:""}},[a("Row",[a("FormItem",{attrs:{label:"制定单位：",prop:"extraUnit"}},[a("treeselect",{staticStyle:{width:"200px"},attrs:{valueConsistsOf:"ALL",limit:3,multiple:!0,options:t.data1,placeholder:"请选择制定单位","max-height":100},model:{value:t.formValidate.manager,callback:function(e){t.$set(t.formValidate,"manager",e)},expression:"formValidate.manager"}})],1),t._v(" "),a("FormItem",{attrs:{label:"标题：",prop:"title"}},[a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入标题"},model:{value:t.formValidate.title,callback:function(e){t.$set(t.formValidate,"title",e)},expression:"formValidate.title"}})],1),t._v(" "),a("FormItem",{attrs:{label:"发布时间："}},[a("DatePicker",{staticStyle:{width:"200px"},attrs:{type:"daterange",placeholder:"请选择发布时间",value:t.formValidate.permissionTime},on:{"on-change":function(e){t.formValidate.permissionTime=e}}})],1),t._v(" "),a("FormItem",{attrs:{label:"编辑内容："}},[a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入内容"},model:{value:t.formValidate.content,callback:function(e){t.$set(t.formValidate,"content",e)},expression:"formValidate.content"}})],1)],1),t._v(" "),a("Row",[a("div",{staticClass:"btnClass"},[a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit(0,1)}}},[t._v("查询")])],1)])],1)],1)])]),t._v(" "),t._m(2),t._v(" "),t._l(t.cardDatas,function(e){return a("div",{key:e.id,staticClass:"file-content"},[a("div",{staticClass:"file-detail"},[a("div",{staticClass:"left-detail"},[t._m(3,!0),t._v(" "),a("div",{staticClass:"header-content"},[a("div",{staticClass:"title mr50"},[a("el-popover",{attrs:{placement:"top-start",title:"",width:"200",trigger:"hover",content:e.title}},[a("span",{attrs:{slot:"reference"},slot:"reference"},[t._v(t._s(e.title))])])],1),t._v(" "),a("span",{staticClass:"date"},[a("span",{staticClass:"fontWeight"},[t._v("制定单位：")]),t._v(t._s(e.manager))]),t._v(" "),a("span",{staticClass:"date"},[a("span",{staticClass:"fontWeight"},[t._v("发布时间：")]),t._v(t._s(e.updateTime))]),t._v(" "),a("span",{staticClass:"date"},[a("span",{staticClass:"fontWeight"},[t._v("发布人：")]),t._v(t._s(e.pubUser))]),t._v(" "),a("span",{staticClass:"date"},[a("span",{staticClass:"fontWeight"},[t._v("浏览次数：")]),t._v(" "),a("label",{staticClass:"spanBox",on:{click:function(a){return t.showViewCount(e)}}},[t._v(t._s(e.infViewNum))])])]),t._v(" "),a("div",{staticClass:"content-detail"},[a("SPAN",{staticClass:"fontWeight"},[t._v("内容：")]),t._v(" "),a("el-popover",{attrs:{placement:"top-start",title:"",width:"200",trigger:"hover",content:e.content}},[a("span",{attrs:{slot:"reference"},slot:"reference"},[t._v(t._s(e.content))])])],1)]),t._v(" "),a("div",{staticClass:"right-detail"},[a("div",{class:"true"==e.ifShow?"status":"status2"},[a("span",[t._v(t._s("true"==e.ifShow?"公开":"未公开"))])]),t._v(" "),a("Button",{on:{click:function(a){return t.showDetail(e)}}},[t._v("查看详情")]),t._v(" "),a("Button",{on:{click:function(a){return t.watchFiles(e)}}},[t._v("查看文件")])],1)])])}),t._v(" "),a("div",{staticClass:"flexCenter pageBox"},[a("Page",{attrs:{total:t.rowCount,"page-size":t.pageSize,current:t.currentpage,"show-elevator":"","show-sizer":""},on:{"on-change":t.pageChange,"on-page-size-change":t.pageSizefun,"update:current":function(e){t.currentpage=e}}})],1),t._v(" "),a("Modal",{staticClass:"dialog",attrs:{"mask-closable":!1,title:t.modelTitle,styles:{width:"60%"}},on:{"on-cancel":t.cancel},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[a(t.tabview,{key:t.keyId,tag:"component",attrs:{dataObj:t.dataObj,width:"80%","file-obj":t.dataObj},on:{cancel:t.cancelDialog}}),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"})],1)],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"topTitle"},[e("span",{staticClass:"topTitle-span1"},[this._v("反洗钱信息")]),this._v(" "),e("span",{staticClass:"topTitle-span1"},[e("img",{attrs:{src:a("Dh6M"),alt:""}})]),this._v(" "),e("span",{staticClass:"topTitle-span1"},[this._v("过程内容信息")]),this._v(" "),e("span",{staticClass:"topTitle-span1"},[e("img",{attrs:{src:a("Dh6M"),alt:""}})]),this._v(" "),e("span",{staticClass:"topTitle-span1"},[this._v("反洗钱报告资料")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contentCellTitle"},[e("div",{staticClass:"contentCellTitle-1"}),this._v("查询条件\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"padding-left":"20px"}},[e("div",{staticClass:"contentCellTitle"},[e("div",{staticClass:"contentCellTitle-1"}),this._v("文件展示\n    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("img",{attrs:{src:a("RAvV"),alt:""}}),this._v(" "),e("span",{staticClass:"info"},[this._v("资料")])])}]};var m=a("C7Lr")(u,f,!1,function(t){a("IG4e")},"data-v-130a45b6",null);e.default=m.exports}});
//# sourceMappingURL=125.e193b8054dbf138725981577069638620.js.map