webpackJsonp([113],{ajor:function(t,e){},jGVo:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("3cXf"),n=a.n(l),i=a("fYFQ"),s=a.n(i),o=(a("Kmkn"),{components:{Treeselect:s.a},created:function(){this.tableList();var t=this;this.axios.post("/system/unit/getExtractUnit").then(function(e){"200"==e.code&&(t.selectTreeCleanUp(e.data),t.data1=e.data)}).catch(function(t){}),this.axios.get("/system/getDic/idKind").then(function(e){"200"==e.code&&(t.idKind=e.data.idKind)}).catch(function(t){}),this.axios.get("/system/getDic/clientStatus").then(function(e){"200"==e.code&&(t.clientStatus=e.data.clientStatus)}).catch(function(t){}),this.axios.get("/system/getDic/entrustWay").then(function(e){"200"==e.code&&(t.entrustWay=e.data.entrustWay)}).catch(function(t){}),this.axios.get("/system/getDic/organFlag").then(function(e){"200"==e.code&&(t.organFlag=e.data.organFlag)}).catch(function(t){}),this.axios.get("/system/getDic/branch").then(function(e){"200"==e.code&&(t.branch=e.data.branch)}).catch(function(t){})},data:function(){return{organFlag:[],entrustWay:[],clientStatus:[],idKind:[],data1:[],pageSize:10,total:0,branch:"",pageNum:1,tabname:"",formValidate1:{val1:"",val2:"",val3:"",val4:"",val5:["",""],val6:"",val7:"",val8:"",val9:""},ruleValidate:{},tableHeader1:[{name:"序"},{name:"分支机构"},{name:"客户号"},{name:"客户姓名"},{name:"客户状态"},{name:"证件类型"},{name:"证件号码"},{name:"证件有效期起始日期"},{name:"证件有效期到期日期"},{name:"开户日期"},{name:"销户日期"},{name:"是否机构户标志"},{name:"行业代码"},{name:"国籍"},{name:"证件地址"},{name:"地址"},{name:"电话号码"},{name:"手机号码"},{name:"传真"}],tableBody1:[]}},methods:{download:function(t,e){if(t){var a=window.URL.createObjectURL(new Blob([t])),l=document.createElement("a");l.style.display="none",l.href=a,l.setAttribute("download",e),document.body.appendChild(l),l.click()}},exportFn:function(){var t=this,e={organ_flag:"3",CLIENT_ID:this.formValidate1.val1,CLIENT_NAME:this.formValidate1.val2,ID_KIND:this.formValidate1.val3,ID_NO:this.formValidate1.val4,ID_ENDDATE:n()(this.formValidate1.val5),BRANCH_NO:this.formValidate1.val6,CLIENT_STATUS:this.formValidate1.val7};e=n()(e),this.axios.post("/client/patch/list/export/"+this.pageNum+"/"+this.pageSize,e,{headers:{"Content-Type":"application/json"},responseType:"blob"}).then(function(e){t.download(e,"导出文档.xls")}).catch(function(t){})},CLIENTFn:function(t){var e=this.$router.resolve({path:"/baseinfo",query:{CLIENT_ID:t,type:"3"}});window.open(e.href,"_blank")},searchFun:function(){this.pageNum=1,this.tableList()},pageChangeFun:function(t){this.pageNum=1*t,this.tableList()},pageSizeChange:function(t){this.pageSize=1*t,this.tableList()},tableList:function(){var t=this,e={organ_flag:"3",CLIENT_ID:this.formValidate1.val1,CLIENT_NAME:this.formValidate1.val2,ID_KIND:this.formValidate1.val3,ID_NO:this.formValidate1.val4,ID_ENDDATE:n()(this.formValidate1.val5),BRANCH_NO:this.formValidate1.val6,CLIENT_STATUS:this.formValidate1.val7};e=n()(e),this.axios.post("/client/patch/list/"+this.pageNum+"/"+this.pageSize,e,{headers:{"Content-Type":"application/json"}}).then(function(e){"200"==e.code&&(t.tableBody1=e.data.content,t.total=e.data.totalSize)}).catch(function(t){})},selectTreeCleanUp:function(t){for(var e=0;e<t.length;e++)t[e].children&&t[e].children.length>0?this.selectTreeCleanUp(t[e].children):this.$delete(t[e],"children")}}}),r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dataAuditExtrackApply"},[a("div",{staticClass:"topTitle"},[a("span",{staticClass:"topTitle-span1"},[t._v("客户管理")]),t._v(" "),t._m(0),t._v(" "),a("span",{staticClass:"topTitle-span1"},[t._v("产品客户")]),t._v(" "),a("div",{staticClass:"button-content"},[a("Button",{attrs:{type:"primary"},on:{click:t.exportFn}},[a("i",{staticClass:"ivu-icon ivu-icon-md-arrow-up"}),t._v("导出\n      ")])],1)]),t._v(" "),a("div",{staticClass:"contentCellBox"},[t._m(1),t._v(" "),a("div",{staticClass:"contentCellBox"},[a("div",{staticClass:"contentCellBody1"},[a("Form",{ref:"formValidate1",attrs:{model:t.formValidate1,rules:t.ruleValidate,"label-width":160,inline:""}},[a("Row",[a("FormItem",{attrs:{label:"客户号："}},[a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入客户号"},model:{value:t.formValidate1.val1,callback:function(e){t.$set(t.formValidate1,"val1",e)},expression:"formValidate1.val1"}})],1),t._v(" "),a("FormItem",{attrs:{label:"客户名称："}},[a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入客户名称"},model:{value:t.formValidate1.val2,callback:function(e){t.$set(t.formValidate1,"val2",e)},expression:"formValidate1.val2"}})],1),t._v(" "),a("FormItem",{attrs:{label:"证件类型："}},[a("Select",{staticStyle:{width:"200px"},model:{value:t.formValidate1.val3,callback:function(e){t.$set(t.formValidate1,"val3",e)},expression:"formValidate1.val3"}},[a("Option",{attrs:{value:""}},[t._v("请选择")]),t._v(" "),t._l(t.idKind,function(e,l){return a("Option",{key:e.code,attrs:{value:e.code}},[t._v(t._s(e.name))])})],2)],1)],1),t._v(" "),a("Row",[a("FormItem",{attrs:{label:"证件号码："}},[a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入证件号码"},model:{value:t.formValidate1.val4,callback:function(e){t.$set(t.formValidate1,"val4",e)},expression:"formValidate1.val4"}})],1),t._v(" "),a("FormItem",{attrs:{label:"证件有效期："}},[a("DatePicker",{staticStyle:{width:"200px"},attrs:{value:t.formValidate1.val5,format:"yyyyMMdd",type:"daterange",placement:"bottom-end",placeholder:"请选择时间"},on:{"on-change":function(e){t.formValidate1.val5=e}}})],1),t._v(" "),a("FormItem",{attrs:{label:"分支机构："}},[a("Select",{staticStyle:{width:"200px"},attrs:{filterable:""},model:{value:t.formValidate1.val6,callback:function(e){t.$set(t.formValidate1,"val6",e)},expression:"formValidate1.val6"}},[a("Option",{attrs:{value:""}},[t._v("请选择")]),t._v(" "),t._l(t.branch,function(e){return a("Option",{key:e.code,attrs:{value:e.code}},[t._v(t._s(e.name))])})],2)],1)],1),t._v(" "),a("Row",[a("FormItem",{attrs:{label:"客户状态："}},[a("Select",{staticStyle:{width:"200px"},attrs:{filterable:""},model:{value:t.formValidate1.val7,callback:function(e){t.$set(t.formValidate1,"val7",e)},expression:"formValidate1.val7"}},[a("Option",{attrs:{value:""}},[t._v("请选择")]),t._v(" "),t._l(t.clientStatus,function(e){return a("Option",{key:e.code,attrs:{value:e.code}},[t._v(t._s(e.name))])})],2)],1)],1),t._v(" "),a("Row",[a("div",{staticClass:"btnClass"},[a("Button",{staticStyle:{width:"89px"},attrs:{type:"primary"},on:{click:t.searchFun}},[t._v("查询")])],1)])],1)],1)]),t._v(" "),a("div",{staticClass:"contentCellBox"},[t._m(2),t._v(" "),a("div",{staticClass:"contentCellBody"},[a("Row",[a("table",{staticClass:"tableBox"},[a("thead",[a("tr",t._l(t.tableHeader1,function(e,l){return a("td",[t._v(t._s(e.name))])}),0)]),t._v(" "),a("tbody",t._l(t.tableBody1,function(e,l){return a("tr",[a("td",[t._v(t._s(t.pageSize*(t.pageNum-1)+l+1))]),t._v(" "),a("td",[a("el-popover",{attrs:{placement:"top-start",title:"",width:"200",trigger:"hover",content:e.BRANCH_NO}},[a("p",{staticClass:"textOverflow textMaxWidth",attrs:{slot:"reference"},slot:"reference"},[t._v(t._s(e.BRANCH_NO))])])],1),t._v(" "),a("td",{staticClass:"spanBox",on:{click:function(a){return t.CLIENTFn(e.CLIENT_ID)}}},[t._v(t._s(e.CLIENT_ID))]),t._v(" "),a("td",[a("el-popover",{attrs:{placement:"top-start",title:"",width:"200",trigger:"hover",content:e.CLIENT_NAME}},[a("p",{staticClass:"textOverflow textMaxWidth",attrs:{slot:"reference"},slot:"reference"},[t._v(t._s(e.CLIENT_NAME))])])],1),t._v(" "),a("td",[t._v(t._s(e.CLIENT_STATUS))]),t._v(" "),a("td",[t._v(t._s(e.ID_KIND))]),t._v(" "),a("td",[t._v(t._s(e.ID_NO))]),t._v(" "),a("td",[t._v(t._s(e.ID_BEGINDATE))]),t._v(" "),a("td",[t._v(t._s(e.ID_ENDDATE))]),t._v(" "),a("td",[t._v(t._s(e.OPEN_DATE))]),t._v(" "),a("td",[t._v(t._s(e.CANCEL_DATE))]),t._v(" "),a("td",[t._v(t._s(e.ORGAN_FLAG))]),t._v(" "),a("td",[t._v(t._s(e.PROFESSION_CODE))]),t._v(" "),a("td",[t._v(t._s(e.NATIONALITY))]),t._v(" "),a("td",[a("el-popover",{attrs:{placement:"top-start",title:"",width:"200",trigger:"hover",content:e.ID_ADDRESS}},[a("p",{staticClass:"textOverflow textMaxWidth",attrs:{slot:"reference"},slot:"reference"},[t._v(t._s(e.ID_ADDRESS))])])],1),t._v(" "),a("td",[a("el-popover",{attrs:{placement:"top-start",title:"",width:"200",trigger:"hover",content:e.ADDRESS}},[a("p",{staticClass:"textOverflow textMaxWidth",attrs:{slot:"reference"},slot:"reference"},[t._v(t._s(e.ADDRESS))])])],1),t._v(" "),a("td",[t._v(t._s(e.PHONECODE))]),t._v(" "),a("td",[t._v(t._s(e.MOBILETELEPHONE))]),t._v(" "),a("td",[t._v(t._s(e.FAX))])])}),0)])])],1),t._v(" "),a("div",{staticClass:"flexCenter pageBox"},[a("Page",{attrs:{total:t.total,current:t.pageNum,"show-elevator":"","show-sizer":""},on:{"update:current":function(e){t.pageNum=e},"on-change":t.pageChangeFun,"on-page-size-change":t.pageSizeChange}})],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"topTitle-span1"},[e("img",{attrs:{src:a("Dh6M"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contentCellTitle"},[e("div",{staticClass:"contentCellTitle-1"}),this._v("查询条件\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contentCellTitle"},[e("div",{staticClass:"contentCellTitle-1"}),this._v("数据列表\n      ")])}]};var c=a("C7Lr")(o,r,!1,function(t){a("ajor")},"data-v-23ede224",null);e.default=c.exports}});
//# sourceMappingURL=113.1f274135a68ef95ad8581577069638620.js.map