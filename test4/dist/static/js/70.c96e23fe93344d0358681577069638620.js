webpackJsonp([70],{en0n:function(t,e){},yOMo:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("3cXf"),n=a.n(i),s=a("fYFQ"),o=a.n(s),l=(a("Kmkn"),a("VU7F")),r=a("7BoK"),c={components:{Treeselect:o.a,processMessage:l.a,assessDetailPro:r.a},created:function(){var t=this;this.getExtractDic(),this.handleSubmit("formValidate","1","name1"==this.tabname?"0":"1"),this.axios.post("/system/unit/getExtractUnit").then(function(e){"200"==e.code&&(t.data1=e.data,t.selectTreeCleanUp(t.data1))}).catch(function(t){}),this.axios.post("/system/unit/getExtractUnit").then(function(e){"200"==e.code&&(t.data2=e.data,t.selectTreeCleanUp(t.data2))}).catch(function(t){})},data:function(){var t=this;return{columns1:[{title:"文件名",key:"name"},{title:"上传人",key:"creatorName"},{title:"操作",key:"",width:150,align:"center",render:function(e,a){return e("div",[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.fileDownload(a.index)}}},"下载")])}}],modal1:!1,fileList:[],batchId:"",showModal:!1,tabview:"processMessage",dataObj:{},dataObjj:{},type:"",data1:[],data2:[],busiSelect:[],extendFlaf:"1",flagSlect:"1",rowCount:0,pageSize:10,pageNum:1,rowCount2:0,pageSize2:10,pageNum2:1,tabname:"name1",busiSCodes:[],queryData:{},tableHeader:[{name:"序"},{name:"任务名称"},{name:"业务部门"},{name:"申请人"},{name:"申请时间"},{name:"操作"}],tableBody:[],tableBody2:[],formValidate:{extraApplicantUnit:[],formname:"",permissionTime:""},formValidate1:{extraApplicantUnit:[],formname:"",permissionTime:""},ruleValidate:{extraApplicantUnit:[{required:!1,message:"请选择业务",trigger:"change"}],formname:[{required:!1,message:"请输入",trigger:"blur"}],permissionTime:[{required:!1,message:"请选择时间",trigger:"change"}]},ruleValidate1:{extraApplicantUnit:[{required:!1,message:"请选择业务",trigger:"change"}],formname:[{required:!1,message:"请输入",trigger:"blur"}],permissionTime:[{required:!1,message:"请选择时间",trigger:"change"}]}}},methods:{fileDownload:function(t){var e=this,a=new FormData,i=this.fileList[t].name;a.append("fileId",this.fileList[t].id),this.axios.post("/bpm/download",a,{headers:{"Content-Type":"multipart/form-data"},responseType:"blob"}).then(function(t){e.download(t,i)}).catch(function(t){})},download:function(t,e){if(t){var a=window.URL.createObjectURL(new Blob([t])),i=document.createElement("a");i.style.display="none",i.href=a,i.setAttribute("download",e),document.body.appendChild(i),i.click()}},watchFiles:function(t){var e=this,a=new FormData;a.append("documentId",t),this.axios.post("/bpm/list",a,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){"200"==t.code&&(e.modal1=!0,e.fileList=t.data.dataVo.files)}).catch(function(t){})},cancel:function(){},pageSizefun:function(t){this.pageSize=1*t,1==this.pageNum&&this.pageChange(1)},pageSizefun2:function(t){this.pageSize2=1*t,1==this.pageNum2&&this.pageChange2(1)},showDialog:function(t){console.log("item",t),this.showModal=!0,this.tabview="assessDetailPro",this.batchId=t.proId,this.dataObjj={proId:t.proId,newProId:"",type:"",evalBusinessId:"",adjBusinessId:""}},selectTreeCleanUp:function(t){for(var e=0;e<t.length;e++)t[e].children&&t[e].children.length>0?this.selectTreeCleanUp(t[e].children):this.$delete(t[e],"children")},getExtractDic:function(){var t=this;this.axios.get("/extract/getExtractDic/EXTRACT_UNIT,BUSI_SCOPE,EXECU_STATUS").then(function(e){"200"==e.code&&(t.busiSelect=e.data.BUSI_SCOPE)}).catch(function(t){})},verifyDetail:function(t){var e=this.$router.resolve({name:"proAuditExtrackAdjustDetail",query:{documentId:t}}).href;window.open(e,"_blank")},flowDetail:function(t){this.batchId=t,this.dataObj={documentId:t,name:"业务洗钱风险"},this.tabview="processMessage",this.showModal=!0},handleSubmit:function(t,e,a){this.flagSlect=e;var i=this,s={extend:a,pageNum:1,pageSize:"0"==a?this.pageSize:this.pageSize2,flag:e,department:n()(this[t].extraApplicantUnit),applicant:this[t].formname.trim(),applyTime:this[t].permissionTime[0],applyTime1:this[t].permissionTime[1]};s=n()(s),this.axios.post("/risk/pro/adj/doProRiskAdjustTaskList",s,{headers:{"Content-Type":"application/json"}}).then(function(t){t.data&&t.data.records&&(0==a?(i.rowCount=t.data.total,i.tableBody=t.data.records):1==a&&(i.rowCount2=t.data.total,i.tableBody2=t.data.records))}).catch(function(t){})},resetRequest:function(t){"name1"==t?(this.pageSize=10,this.handleSubmit("formValidate","1","0")):"name2"==t&&(this.pageSize2=10,this.handleSubmit("formValidate1","1","1"))},pageChange:function(t){var e=this;this.pageNum=t;var a={extend:"0",pageNum:t,pageSize:this.pageSize,flag:this.flagSlect,department:n()(this.formValidate.extraApplicantUnit),applicant:this.formValidate.formname.trim(),applyTime:this.formValidate.permissionTime[0],applyTime1:this.formValidate.permissionTime[1]};this.axios.post("/risk/pro/adj/doProRiskAdjustTaskList",n()(a),{headers:{"Content-Type":"application/json"}}).then(function(t){t.data&&(e.rowCount=t.data.total),t.data.records&&(e.tableBody=t.data.records)}).catch(function(t){})},pageChange2:function(t){var e=this;this.pageNum2=t;var a={extend:"1",pageNum:t,pageSize:this.pageSize2,flag:this.flagSlect,department:n()(this.formValidate1.extraApplicantUnit),applicant:this.formValidate1.formname.trim(),applyTime:this.formValidate1.permissionTime[0],applyTime1:this.formValidate1.permissionTime[1]};this.axios.post("/risk/pro/adj/doProRiskAdjustTaskList",n()(a),{headers:{"Content-Type":"application/json"}}).then(function(t){t.data&&(e.rowCount2=t.data.total),t.data.records&&(e.tableBody2=t.data.records)}).catch(function(t){})}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dataAuditExtrackApply "},[t._m(0),t._v(" "),a("div",{staticClass:"contentCellBox"},[a("Tabs",{on:{"on-click":t.resetRequest},model:{value:t.tabname,callback:function(e){t.tabname=e},expression:"tabname"}},[a("TabPane",{attrs:{label:"待审核",name:"name1"}},[a("div",{staticClass:"contentCellBox"},[a("div",{staticClass:"contentCellBody1"},[a("Form",{ref:"formValidate",attrs:{model:t.formValidate,rules:t.ruleValidate,"label-width":120,inline:""}},[a("Row",[a("FormItem",{attrs:{label:"业务部门：",prop:"extraApplicantUnit"}},[a("treeselect",{staticStyle:{width:"200px"},attrs:{valueConsistsOf:"ALL",limit:3,multiple:!0,options:t.data1,placeholder:""},model:{value:t.formValidate.extraApplicantUnit,callback:function(e){t.$set(t.formValidate,"extraApplicantUnit",e)},expression:"formValidate.extraApplicantUnit"}})],1),t._v(" "),a("FormItem",{attrs:{label:"申请人：",prop:"formname"}},[a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入申请人"},model:{value:t.formValidate.formname,callback:function(e){t.$set(t.formValidate,"formname",e)},expression:"formValidate.formname"}})],1),t._v(" "),a("FormItem",{attrs:{label:"申请时间："}},[a("DatePicker",{staticStyle:{width:"200px"},attrs:{type:"daterange",placeholder:"请选择申请时间",value:t.formValidate.permissionTime},on:{"on-change":function(e){t.formValidate.permissionTime=e}}})],1)],1),t._v(" "),a("Row",[a("div",{staticClass:"btnClass"},[a("Button",{staticStyle:{width:"89px"},attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit("formValidate","1","0")}}},[t._v("查询")]),t._v(" "),a("Button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit("formValidate","2","0")}}},[t._v("精确查询")])],1)])],1)],1)]),t._v(" "),a("div",{staticClass:"contentCellBox"},[a("div",{staticClass:"contentCellTitle"},[a("div",{staticClass:"contentCellTitle-1"}),t._v("数据列表\n          ")]),t._v(" "),a("div",{staticClass:"contentCellBody"},[a("Row",[a("table",{staticClass:"tableBox"},[a("thead",[a("tr",t._l(t.tableHeader,function(e,i){return a("td",[t._v(t._s(e.name))])}),0)]),t._v(" "),a("tbody",t._l(t.tableBody,function(e,i){return a("tr",{attrs:{id:e.documentId}},[a("td",[t._v("\n                      "+t._s(t.pageSize*(t.pageNum-1)+i+1)+"\n                    ")]),t._v(" "),a("td",[a("span",{staticClass:"spanBox textMaxWidth textOverflow",attrs:{title:e.taskname},on:{click:function(a){return t.showDialog(e)}}},[t._v(t._s(e.taskname))])]),t._v(" "),a("td",[t._v(t._s(e.department))]),t._v(" "),a("td",[t._v(t._s(e.applicant))]),t._v(" "),a("td",[t._v(t._s(e.applyTime?e.applyTime.substr(0,19):""))]),t._v(" "),a("td",[a("span",{staticClass:"operationSpan",on:{click:function(a){return t.verifyDetail(e.documentId)}}},[t._v("审核")]),t._v(" "),a("span",{staticClass:"operationSpan",on:{click:function(a){return t.watchFiles(e.documentId)}}},[t._v("查看")]),t._v(" "),a("span",{staticClass:"operationSpan",on:{click:function(a){return t.flowDetail(e.documentId)}}},[t._v("流程详情")])])])}),0)])])],1),t._v(" "),a("div",{staticClass:"flexCenter pageBox"},[a("Page",{attrs:{current:t.pageNum,total:t.rowCount,"page-size":t.pageSize,"show-elevator":"","show-sizer":"",placement:"top"},on:{"update:current":function(e){t.pageNum=e},"on-change":t.pageChange,"on-page-size-change":t.pageSizefun}})],1)])]),t._v(" "),a("TabPane",{attrs:{label:"已审核",name:"name2"}},[a("div",{staticClass:"contentCellBox"},[a("div",{staticClass:"contentCellBody1"},[a("Form",{ref:"formValidate1",attrs:{model:t.formValidate1,rules:t.ruleValidate1,"label-width":120,inline:""}},[a("Row",[a("FormItem",{attrs:{label:"业务部门：",prop:"extraApplicantUnit"}},[a("treeselect",{staticStyle:{width:"200px"},attrs:{valueConsistsOf:"ALL",limit:3,multiple:!0,options:t.data2,placeholder:""},model:{value:t.formValidate1.extraApplicantUnit,callback:function(e){t.$set(t.formValidate1,"extraApplicantUnit",e)},expression:"formValidate1.extraApplicantUnit"}})],1),t._v(" "),a("FormItem",{attrs:{label:"申请人：",prop:"formname"}},[a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入申请人"},model:{value:t.formValidate1.formname,callback:function(e){t.$set(t.formValidate1,"formname",e)},expression:"formValidate1.formname"}})],1),t._v(" "),a("FormItem",{attrs:{label:"申请时间："}},[a("DatePicker",{attrs:{type:"daterange",placeholder:"请选择申请时间",value:t.formValidate1.permissionTime},on:{"on-change":function(e){t.formValidate1.permissionTime=e}}})],1)],1),t._v(" "),a("Row",[a("div",{staticClass:"btnClass"},[a("Button",{staticStyle:{width:"89px"},attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit("formValidate1","1","1")}}},[t._v("查询")]),t._v(" "),a("Button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit("formValidate1","2","1")}}},[t._v("精确查询")])],1)])],1)],1)]),t._v(" "),a("div",{staticClass:"contentCellBox"},[a("div",{staticClass:"contentCellTitle"},[a("div",{staticClass:"contentCellTitle-1"}),t._v("数据列表\n          ")]),t._v(" "),a("div",{staticClass:"contentCellBody"},[a("Row",[a("table",{staticClass:"tableBox"},[a("thead",[a("tr",t._l(t.tableHeader,function(e,i){return a("td",[t._v(t._s(e.name))])}),0)]),t._v(" "),a("tbody",t._l(t.tableBody2,function(e,i){return a("tr",{attrs:{id:e.documentId}},[a("td",[t._v("\n                      "+t._s(t.pageSize2*(t.pageNum2-1)+i+1)+"\n                    ")]),t._v(" "),a("td",[a("span",{staticClass:"spanBox textMaxWidth textOverflow",attrs:{title:e.taskname},on:{click:function(a){return t.showDialog(e)}}},[t._v(t._s(e.taskname))])]),t._v(" "),a("td",[t._v(t._s(e.department))]),t._v(" "),a("td",[t._v(t._s(e.applicant))]),t._v(" "),a("td",[t._v(t._s(e.applyTime?e.applyTime.substr(0,19):""))]),t._v(" "),a("td",[a("span",{staticClass:"operationSpan",on:{click:function(a){return t.watchFiles(e.documentId)}}},[t._v("查看")]),t._v(" "),a("span",{staticClass:"operationSpan",on:{click:function(a){return t.flowDetail(e.documentId)}}},[t._v("流程详情")])])])}),0)])])],1),t._v(" "),a("div",{staticClass:"flexCenter pageBox"},[a("Page",{attrs:{total:t.rowCount2,current:t.pageNum2,"page-size":t.pageSize2,"show-elevator":"","show-sizer":"",placement:"top"},on:{"update:current":function(e){t.pageNum2=e},"on-change":t.pageChange2,"on-page-size-change":t.pageSizefun2}})],1)])])],1),t._v(" "),a("Modal",{staticClass:"dialog",attrs:{"mask-closable":!1,title:"任务详情",styles:{width:"80%"}},on:{"on-cancel":t.cancel},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[a(t.tabview,{key:t.batchId,tag:"component",attrs:{"data-objj":t.dataObjj,dataObj:t.dataObj,width:"80%"}}),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"})],1),t._v(" "),a("Modal",{attrs:{"mask-closable":!1,title:"文件列表",styles:{width:"40%"}},model:{value:t.modal1,callback:function(e){t.modal1=e},expression:"modal1"}},[a("Table",{attrs:{border:"",columns:t.columns1,data:t.fileList}}),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"})],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"topTitle"},[e("span",{staticClass:"topTitle-span1"},[this._v("审核任务")]),this._v(" "),e("span",{staticClass:"topTitle-span1"},[e("img",{attrs:{src:a("Dh6M"),alt:""}})]),this._v(" "),e("span",{staticClass:"topTitle-span1"},[this._v("产品洗钱风险审核任务")]),this._v(" "),e("span",{staticClass:"topTitle-span1"},[e("img",{attrs:{src:a("Dh6M"),alt:""}})]),this._v(" "),e("span",{staticClass:"topTitle-span1"},[this._v("调整待审核")])])}]};var p=a("C7Lr")(c,d,!1,function(t){a("en0n")},"data-v-75b74ab4",null);e.default=p.exports}});
//# sourceMappingURL=70.c96e23fe93344d0358681577069638620.js.map