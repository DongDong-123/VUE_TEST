webpackJsonp([95],{"+OZE":function(t,e){},ZqJk:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("3cXf"),i=a.n(l),o=a("a3Yh"),s=a.n(o),n=a("VU7F"),d=a("lvfI"),r=a("fYFQ"),c=a.n(r),p=(a("Kmkn"),{components:{Treeselect:c.a,showUsualFiles:d.a,processMessage:n.a},created:function(){this.tableList();var t=this;this.axios.post("/system/unit/getExtractUnit").then(function(e){"200"==e.code&&(t.selectTreeCleanUp(e.data),t.data1=e.data)}).catch(function(t){}),this.axios.get("/system/getDic/PROCESS_CHECK_STATE").then(function(e){"200"==e.code&&(t.PROCESS_CHECK_STATE=e.data.PROCESS_CHECK_STATE)}).catch(function(t){})},watch:{modal1:function(t){0==t&&(this.$refs.formValidateModel1.resetFields(),this.taskPeipleModel=!1,this.fileId=!this.fileId,this.taskPeipleModel=!1)},"$store.state.firstLoginFlag":{handler:function(t){this.firstLoginFlag=t}}},data:function(){var t,e=this;return t={buttonDisabled:!1,firstLoginFlag:this.$store.state.firstLoginFlag,showModal:!1,delateId:"",taskPeipleModel2:!1,taskPeipleModelData2:{nextUser:""},ruleValidate2:{nextUser:[{required:!1,validator:function(t,a,l){if(""==e.taskPeipleModelData2.nextUser&&e.taskPeipleModel2)return l(new Error("请选择一个人"));l()},trigger:"on-check-change"}]},tableHeaderAppend:[{name:"序"},{name:"追加内容"},{name:"追加附件"},{name:"所属部门"},{name:"操作时间"},{name:"操作人员"}],tableBodyAppend:[{content:"",dept:"",createTime:"",creator:""}],watchAppenModelAppendFileModel:!1,watchAppenModel:!1,watchTableCell:{bpmTitle:"",val1:"",val2:"",val3:"",val4:"",val5:"",val6:"",val7:"",val8:"",val9:"",val10:"",val11:""},bpmName:"",appendId:"",appendbusId:"",fileId6:!0,dataObj6:{},fileId5:!0,dataObj5:{},fileId4:!0,dataObj4:{},watchTableCellDitalModel:!1,fileId3:!0,dataObj3:{},watchFileModel:!1,fileId2:!0,dataObj2:{},buttonVal:"",modifyid:"",fileId:!0,dataObj:{},uploadList6:[],uploadList5:[],uploadList4:[],uploadList3:[],uploadList2:[],uploadList:[],defaultList:[],data2:[],taskPeipleModel:!1,PROCESS_CHECK_STATE:[],data1:[],ifExacte:"0",minPubTime:"",maxPubTime:"",pageSize:10,total:0,pageNum:1,addFlag:!1,modifyFlag:!1},s()(t,"modifyFlag",!1),s()(t,"appendFlag",!1),s()(t,"addFlagShow",!1),s()(t,"modifyFlagShow",!1),s()(t,"modal1",!1),s()(t,"modalDisableFlag",!0),s()(t,"formValidateModel1",{bpmTitle:"",val1:"",val2:!0,val3:"",val4:"",val5:"",val6:"",val7:"",val8:"",val9:"open",val10:"",val11:"",nextUser:"",appendAttachId:""}),s()(t,"tableHeader",[{name:"序"},{name:"操作"},{name:"标题"},{name:"状态"},{name:"是否公开"},{name:"管理部门"},{name:"追加信息"},{name:"附件"},{name:"发布人"},{name:"发布时间"},{name:"更新人"},{name:"更新时间"}]),s()(t,"tableBody",[]),s()(t,"formValidate",{value2:"",val1:"",val2:"",val3:"",val4:"",val5:"",val6:[]}),s()(t,"ruleValidate",{bpmTitle:[{required:!0,message:"此项不能为空",trigger:"blur"},{type:"string",max:50,message:"最大输入长度不能超过50字",trigger:"blur"}],val10:[{type:"string",max:1e3,message:"您超出了范围",trigger:"blur"}],nextUser:[{required:!1,validator:function(t,a,l){if(""==e.formValidateModel1.nextUser&&e.taskPeipleModel)return l(new Error("请选择一个人"));l()},trigger:"on-check-change"},{max:250,message:"输入长度过长",trigger:"blur"}],val1:[{required:!0,message:"此项不能为空",trigger:"blur"},{max:125,message:"输入长度过长",trigger:"blur"}],val2:[{required:!0,message:"此项不能为空",trigger:"change"}],val3:[{max:1e3,message:"输入长度过长",trigger:"blur"}],val11:[{max:1e3,message:"输入长度过长",trigger:"blur"}],val4:[{required:!0,message:"此项不能为空",trigger:"change"}],val5:[{required:!0,message:"此项不能为空",trigger:"change"}],val6:[{required:!0,message:"此项不能为空",trigger:"change"}],val7:[{required:!0,message:"此项不能为空",trigger:"change"}],val8:[{required:!0,message:"此项不能为空",trigger:"change"}],val9:[{required:!1,message:"此项不能为空",trigger:"change"}],Inputvalue1:[{required:!1,message:"",trigger:"blur"}],Inputvalue2:[{required:!1,message:"",trigger:"blur"}]}),t},methods:{download:function(t,e){if(t){var a=window.URL.createObjectURL(new Blob([t])),l=document.createElement("a");l.style.display="none",l.href=a,l.setAttribute("download",e),document.body.appendChild(l),l.click()}},exportFn:function(){var t=this,e={title:this.formValidate.val1,flag:this.formValidate.val3,ifExacte:this.ifExacte,minPubTime:this.minPubTime,maxPubTime:this.maxPubTime,pageNum:this.pageNum,pageSize:this.pageSize};e=i()(e),this.axios.post("/process/infPublicOpinionMonitoring/getInfPublicOpinionMonitoringExcelList",e,{headers:{"Content-Type":"application/json"},responseType:"blob"}).then(function(e){t.download(e,"导出文档.xls")}).catch(function(t){})},showProcess:function(t){this.showModal=!0,this.dataObj={businessId:t.bpmBusId,name:"过程管理"}},treeNLeafNodeDisable:function(t){for(var e=0;e<t.length;e++)t[e].children&&(this.$set(t[e],"expand",!0),this.$set(t[e],"disabled",!0),this.treeNLeafNodeDisable(t[e].children))},watchAppenModelAppendFile:function(t){this.dataObj6={data:t,showFlag:!1,disabled:!1},this.fileId6=t.busId,this.watchAppenModelAppendFileModel=!0},watchAppendFun:function(t,e,a){var l=this,o={id:a,relationBusId:e};o=i()(o),this.axios.post("/process/infProcessAppend/getInfProcessAppendList",o,{headers:{"Content-Type":"application/json"}}).then(function(t){"200"==t.code&&(l.tableBodyAppend=t.data)}).catch(function(t){}),this.watchAppenModel=!0},watchTableCellFun:function(t,e,a){var l=this;this.axios.post("/process/infPublicOpinionMonitoring/getEntityRow/"+a).then(function(t){"200"==t.code&&(l.watchTableCell.bpmTitle=t.data.bpmTitle,l.watchTableCell.val1=t.data.title,l.watchTableCell.val2=t.data.ifShow,l.watchTableCell.val3=t.data.content,l.dataObj4={data:t.data,showFlag:!1,disabled:!1},l.fileId4=t.data.busId)}).catch(function(t){});var o={relationBusId:e};o=i()(o),this.axios.post("/process/infProcessAppend/getInfProcessAppendRows",o,{headers:{"Content-Type":"application/json"}}).then(function(t){"200"==t.code&&(l.appendId=t.data.id,l.watchTableCell.val11=t.data.content,l.dataObj5={data:t.data,showFlag:!1,disabled:!1},l.fileId5=t.data.busId)}).catch(function(t){}),this.watchTableCellDitalModel=!0},watchFileFun:function(t,e,a){this.dataObj3={showFlag:!1,data:a,disabled:!1},this.fileId3=t,this.watchFileModel=!0},receiveUploadList:function(t){var e=this;this.uploadList=[],t.forEach(function(t){e.uploadList.push(t.url)}),this.formValidateModel1.attachId=this.uploadList},receiveUploadList2:function(t){var e=this;this.uploadList2=[],t.forEach(function(t){e.uploadList2.push(t.url)}),this.formValidateModel1.appendAttachId=this.uploadList2},receiveUploadList3:function(t){var e=this;this.uploadList3=[],t.forEach(function(t){e.uploadList3.push(t.url)}),this.formValidateModel1.attachId=this.uploadList3},receiveUploadList4:function(t){var e=this;this.uploadList4=[],t.forEach(function(t){e.uploadList4.push(t.url)}),this.formValidateModel1.attachId=this.uploadList4},receiveUploadList5:function(t){var e=this;this.uploadList5=[],t.forEach(function(t){e.uploadList5.push(t.url)})},receiveUploadList6:function(t){var e=this;this.uploadList6=[],t.forEach(function(t){e.uploadList6.push(t.url)})},handleSubmitLast2:function(t){var e=this,a={id:t};a=i()(a),this.axios.post("/process/infPublicOpinionMonitoring/deleteInfPublicOpinionMonitoring",a,{headers:{"Content-Type":"application/json"}}).then(function(t){"200"==t.code&&(e.$Message.info("保存成功"),e.taskPeipleModel2=!1,e.tableList())}).catch(function(t){})},handleSubmitLast:function(t){var e=this;this.$refs[t].validate(function(t){if(t)if(0==e.addFlagShow&&0==e.modifyFlagShow&&0==e.addFlag){e.buttonDisabled=!0;var a={bpmTitle:e.formValidateModel1.bpmTitle,bpmName:e.bpmName,title:e.formValidateModel1.val1,ifShow:e.formValidateModel1.val2,content:e.formValidateModel1.val3,nextUser:e.formValidateModel1.nextUser,attachId:e.formValidateModel1.attachId};a=i()(a),e.axios.post("/process/infPublicOpinionMonitoring/addInfPublicOpinionMonitoring",a,{headers:{"Content-Type":"application/json"}}).then(function(t){"200"==t.code&&(e.$Message.info("保存成功"),e.buttonDisabled=!1,e.modal1=!1,e.taskPeipleModel=!1,e.tableList())}).catch(function(t){e.buttonDisabled=!1})}else if(0==e.addFlagShow&&1==e.modifyFlagShow&&0==e.addFlag){e.buttonDisabled=!0;var l={bpmTitle:e.formValidateModel1.bpmTitle,bpmName:e.bpmName,title:e.formValidateModel1.val1,ifShow:e.formValidateModel1.val2,content:e.formValidateModel1.val3,nextUser:e.formValidateModel1.nextUser,attachId:e.formValidateModel1.attachId,id:e.modifyid};l=i()(l),e.axios.post("/process/infPublicOpinionMonitoring/updateInfPublicOpinionMonitoring",l,{headers:{"Content-Type":"application/json"}}).then(function(t){"200"==t.code&&(e.$Message.info("保存成功"),e.buttonDisabled=!1,e.modal1=!1,e.taskPeipleModel=!1,e.tableList())}).catch(function(t){e.buttonDisabled=!1})}})},datechange2:function(t){this.formValidateModel1.val2=t},datechange3:function(t){this.formValidateModel1.val3=t},pageSizeChange:function(t){this.pageSize=1*t,this.tableList()},pageChangeFun:function(t){this.pageNum=1*t,this.tableList()},selectTreeCleanUp:function(t){for(var e=0;e<t.length;e++)t[e].children&&t[e].children.length>0?this.selectTreeCleanUp(t[e].children):this.$delete(t[e],"children")},datechange:function(t){this.minPubTime=t[0],this.maxPubTime=t[1]},tableList:function(){var t=this,e={title:this.formValidate.val1,flag:this.formValidate.val3,ifExacte:this.ifExacte,minPubTime:this.minPubTime,maxPubTime:this.maxPubTime,pageNum:this.pageNum,pageSize:this.pageSize};e=i()(e),this.axios.post("/process/infPublicOpinionMonitoring/getInfPublicOpinionMonitoringList",e,{headers:{"Content-Type":"application/json"}}).then(function(e){"200"==e.code&&(t.tableBody=e.data.records,t.total=e.data.total)}).catch(function(t){})},delItem:function(t,e){var a=this;"1"==e||"4"==e||"7"==e?this.$Message.info("此状态不能操作"):"6"==e||"3"==e?this.$Message.info("此状态不能操作"):this.$Modal.confirm({title:"是否删除？",okText:"确认",cancelText:"取消",onOk:function(){a.handleSubmitLast2(t)},onCancel:function(){}})},addfun:function(t,e,a,l){var o=this;if(this.appendbusId=e,this.appendId="","addFlag"==t)this.buttonVal="下一步",this.formValidateModel1.val2=!0,this.modal1=!0,this.fileId=!this.fileId,this.addFlagShow=!1,this.modifyFlagShow=!1,this.addFlag=!1,this.dataObj={data:[],showFlag:!0,disabled:!1};else if("modifyFlag"==t)"1"==l||"4"==l||"7"==l?this.$Message.info("此状态不允许操作"):(this.buttonVal="下一步",this.modal1=!0,this.addFlagShow=!1,this.modifyFlagShow=!0,this.addFlag=!1,this.modifyid=a,this.axios.post("/process/infPublicOpinionMonitoring/getEntityRow/"+a).then(function(t){"200"==t.code&&(o.formValidateModel1.attachId=t.data.attachId,o.formValidateModel1.val1=t.data.title,o.formValidateModel1.val2=JSON.parse(t.data.ifShow),o.formValidateModel1.val3=t.data.content,o.formValidateModel1.bpmTitle=t.data.bpmTitle,o.dataObj={data:t.data,showFlag:!0,disabled:!1,worfFlow:!0},o.fileId=t.data.busId)}).catch(function(t){}));else if("appendFlag"==t){this.buttonVal="保存",this.modal1=!0,this.addFlagShow=!0,this.addFlag=!0,this.modifyFlagShow=!0,this.axios.post("/process/infPublicOpinionMonitoring/getEntityRow/"+a).then(function(t){"200"==t.code&&(o.formValidateModel1.attachId=t.data.attachId,o.formValidateModel1.bpmTitle=t.data.bpmTitle,o.formValidateModel1.val1=t.data.title,o.formValidateModel1.val2=JSON.parse(t.data.ifShow),o.formValidateModel1.val3=t.data.content,o.dataObj={data:t.data,showFlag:!0,disabled:!0,worfFlow:!0},o.fileId=t.data.busId)}).catch(function(t){});var s={relationBusId:e};s=i()(s),this.axios.post("/process/infProcessAppend/getInfProcessAppendRows",s,{headers:{"Content-Type":"application/json"}}).then(function(t){"200"==t.code&&(o.appendId=t.data.id,o.formValidateModel1.val11=t.data.content,o.dataObj2={data:t.data,showFlag:!0,disabled:!1,worfFlow:!0},o.fileId2=t.data.busId)}).catch(function(t){})}},updateNextUser:function(t,e){var a=this;t.forEach(function(t){t.nodeKey!=e.nodeKey&&(t.checked=!1)}),this.formValidateModel1.nextUser="",t.forEach(function(t){1==t.checked&&(a.formValidateModel1.nextUser=t.code)}),this.$refs.formValidateModel1.validateField("nextUser")},updateNextUser2:function(t,e){var a=this;t.forEach(function(t){t.nodeKey!=e.nodeKey&&(t.checked=!1)}),this.taskPeipleModelData2.nextUser="",t.forEach(function(t){1==t.checked&&(a.taskPeipleModelData2.nextUser=t.code)}),this.$refs.taskPeipleModelData2.validateField("nextUser")},save1:function(t){var e=this;this.$refs[t].validate(function(t){if(t)if(1==e.addFlagShow&&1==e.addFlag&&1==e.modifyFlagShow){var a={id:e.appendId,relationBusId:e.appendbusId,content:e.formValidateModel1.val11,attachId:e.formValidateModel1.appendAttachId,busId:e.busId};a=i()(a),e.axios.post("/process/infProcessAppend/updateInfProcessAppend",a,{headers:{"Content-Type":"application/json"}}).then(function(t){"200"==t.code&&(e.$Message.info("保存成功"),e.modal1=!1)}).catch(function(t){})}else e.axios.get("/bpm/getNodeDefDetail?bpmType=process").then(function(t){e.bpmName=t.data[1].bpmName;var a={bpmName:t.data[1].bpmName,nodeId:t.data[1].nodeId,roleName:t.data[1].roleName,bpmType:"process"};a=i()(a),e.axios.post("/bpm/getNextRole",a,{headers:{"Content-Type":"application/json"}}).then(function(t){"200"==t.code&&(e.data2=t.data,e.treeNLeafNodeDisable(e.data2),e.taskPeipleModel=!0)}).catch(function(t){})}).catch(function(t){}),e.taskPeipleModel=!0})},rolefun:function(){},handleSubmit:function(t,e){var a=this;this.$refs[t].validate(function(t){t&&(a.ifExacte=e,a.pageNum=1,a.tableList())})}}}),u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"operate-task-log"},[a("div",{staticClass:"topTitle"},[a("span",{staticClass:"topTitle-span1"},[t._v("过程管理")]),t._v(" "),t._m(0),t._v(" "),a("span",{staticClass:"topTitle-span1"},[t._v("过程内容")]),t._v(" "),t._m(1),t._v(" "),a("span",{staticClass:"topTitle-span1"},[t._v("反洗钱舆情监测及应急处理")]),t._v(" "),a("div",{staticClass:"button-content"},[t.firstLoginFlag?a("Button",{directives:[{name:"authcontrol",rawName:"v-authcontrol",value:{menuCode:"108001002014001"},expression:"{menuCode:'108001002014001'}"}],attrs:{type:"primary"},on:{click:function(e){return t.addfun("addFlag")}}},[a("i",{staticClass:"ivu-icon ivu-icon-md-add"}),t._v("新增\n      ")]):t._e(),t._v(" "),t.firstLoginFlag?a("Button",{directives:[{name:"authcontrol",rawName:"v-authcontrol",value:{menuCode:"108001002014004"},expression:"{menuCode:'108001002014004'}"}],attrs:{type:"primary"},on:{click:t.exportFn}},[a("i",{staticClass:"ivu-icon ivu-icon-md-arrow-up"}),t._v("导出\n      ")]):t._e()],1)]),t._v(" "),a("div",{staticClass:"contentCellBox"},[a("div",{staticClass:"contentCellBox"},[t._m(2),t._v(" "),a("div",{staticClass:"contentCellBody1"},[a("Form",{ref:"formValidate",attrs:{model:t.formValidate,"label-width":120,inline:""}},[a("Row",[a("FormItem",{attrs:{label:"标题：",prop:""}},[a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入"},model:{value:t.formValidate.val1,callback:function(e){t.$set(t.formValidate,"val1",e)},expression:"formValidate.val1"}})],1),t._v(" "),a("FormItem",{attrs:{label:"发布时间："}},[a("DatePicker",{staticStyle:{width:"200px"},attrs:{value:t.formValidate.val2,format:"yyyy-MM-dd",type:"daterange",placement:"bottom-end",placeholder:"请选择时间"},on:{"on-change":t.datechange}})],1),t._v(" "),a("FormItem",{attrs:{label:"状态：",prop:"extraUnit"}},[a("Select",{staticStyle:{width:"200px"},attrs:{filterable:""},model:{value:t.formValidate.val3,callback:function(e){t.$set(t.formValidate,"val3",e)},expression:"formValidate.val3"}},[a("Option",{attrs:{value:""}},[t._v("请选择")]),t._v(" "),t._l(t.PROCESS_CHECK_STATE,function(e,l){return a("Option",{key:l,attrs:{value:e.code}},[t._v(t._s(e.name))])})],2)],1)],1),t._v(" "),a("Row",[a("div",{staticClass:"btnClass"},[a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit("formValidate","0")}}},[t._v("查询")]),t._v(" "),a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit("formValidate","1")}}},[t._v("精确查询")])],1)])],1)],1)]),t._v(" "),a("div",{staticClass:"contentCellBox"},[t._m(3),t._v(" "),a("div",{staticClass:"contentCellBody"},[a("Row",[a("table",{staticClass:"tableBox"},[a("thead",[a("tr",t._l(t.tableHeader,function(e,l){return a("td",[t._v(t._s(e.name))])}),0)]),t._v(" "),a("tbody",t._l(t.tableBody,function(e,l){return a("tr",[a("td",[t._v(t._s(t.pageSize*(t.pageNum-1)+l+1))]),t._v(" "),a("td",{staticStyle:{width:"100px"}},[t.firstLoginFlag?a("span",{directives:[{name:"authcontrol",rawName:"v-authcontrol",value:{menuCode:"108001002014002"},expression:"{menuCode:'108001002014002'}"}],staticClass:"spanBox",on:{click:function(a){return t.addfun("modifyFlag",e.busId,e.id,e.extraCode)}}},[t._v("修改")]):t._e(),t._v(" "),t.firstLoginFlag?a("span",{directives:[{name:"authcontrol",rawName:"v-authcontrol",value:{menuCode:"108001002014003"},expression:"{menuCode:'108001002014003'}"}],staticClass:"spanBox",on:{click:function(a){return t.delItem(e.id,e.extraCode)}}},[t._v("删除")]):t._e(),t._v(" "),t.firstLoginFlag?a("span",{directives:[{name:"authcontrol",rawName:"v-authcontrol",value:{menuCode:"108001002014007"},expression:"{menuCode:'108001002014007'}"}],staticClass:"spanBox",on:{click:function(a){return t.addfun("appendFlag",e.busId,e.id,e.flag)}}},[t._v("追加")]):t._e()]),t._v(" "),a("td",[a("el-popover",{attrs:{placement:"top-start",title:"",width:"200",trigger:"hover",content:e.title}},[a("p",{staticClass:"spanBox textOverflow disBlock textMaxWidth",attrs:{slot:"reference"},on:{click:function(a){return t.watchTableCellFun(e,e.busId,e.id)}},slot:"reference"},[t._v(t._s(e.title))])])],1),t._v(" "),a("td",{staticClass:"spanBox",on:{click:function(a){return t.showProcess(e)}}},[t._v(t._s(e.flag))]),t._v(" "),a("td",[t._v(t._s("true"==e.ifShow?"是":"否"))]),t._v(" "),a("td",[t._v(t._s(e.manager))]),t._v(" "),a("td",{staticClass:"spanBox",on:{click:function(a){return t.watchAppendFun(e,e.busId,e.id)}}},[t._v("查看")]),t._v(" "),a("td",{staticClass:"spanBox",on:{click:function(a){return t.watchFileFun(e.busId,e.id,e)}}},[t._v("查看")]),t._v(" "),a("td",[t._v(t._s(e.pubUser))]),t._v(" "),a("td",[t._v(t._s(e.pubTime))]),t._v(" "),a("td",[t._v(t._s(e.updater))]),t._v(" "),a("td",[t._v(t._s(e.updateTime))])])}),0)])])],1),t._v(" "),a("div",{staticClass:"flexCenter pageBox"},[a("Page",{attrs:{total:t.total,current:t.pageNum,"show-elevator":"","show-sizer":""},on:{"update:current":function(e){t.pageNum=e},"on-change":t.pageChangeFun,"on-page-size-change":t.pageSizeChange}})],1)])]),t._v(" "),a("Modal",{staticClass:"dialog",attrs:{"mask-closable":!1,width:"1000",title:"设置"},model:{value:t.modal1,callback:function(e){t.modal1=e},expression:"modal1"}},[a("div",{staticClass:"modelSonDiv",staticStyle:{height:"400px","overflow-y":"auto"}},[a("Form",{ref:"formValidateModel1",attrs:{model:t.formValidateModel1,rules:t.ruleValidate,"label-width":120}},[a("FormItem",{attrs:{label:"流程标题",prop:"bpmTitle"}},[a("Input",{attrs:{placeholder:"请输入",disabled:this.addFlag},model:{value:t.formValidateModel1.bpmTitle,callback:function(e){t.$set(t.formValidateModel1,"bpmTitle",e)},expression:"formValidateModel1.bpmTitle"}})],1),t._v(" "),a("FormItem",{attrs:{label:"标题",prop:"val1"}},[a("Input",{attrs:{placeholder:"请输入",disabled:this.addFlag},model:{value:t.formValidateModel1.val1,callback:function(e){t.$set(t.formValidateModel1,"val1",e)},expression:"formValidateModel1.val1"}})],1),t._v(" "),a("FormItem",{attrs:{label:"是否公开",prop:""}},[a("i-switch",{attrs:{size:"large",disabled:this.addFlag},model:{value:t.formValidateModel1.val2,callback:function(e){t.$set(t.formValidateModel1,"val2",e)},expression:"formValidateModel1.val2"}},[a("span",{attrs:{slot:"true"},slot:"true"},[t._v("On")]),t._v(" "),a("span",{attrs:{slot:"false"},slot:"false"},[t._v("Off")])])],1),t._v(" "),a("FormItem",{attrs:{label:"编辑内容",prop:"val3"}},[a("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"请输入",disabled:this.addFlag},model:{value:t.formValidateModel1.val3,callback:function(e){t.$set(t.formValidateModel1,"val3",e)},expression:"formValidateModel1.val3"}})],1),t._v(" "),a("FormItem",{attrs:{label:"上传附件"}},[a("showUsualFiles",{key:t.fileId,attrs:{"file-obj":t.dataObj},on:{requestUploadList:t.receiveUploadList}})],1),t._v(" "),t.addFlagShow?a("Row",[a("Row",{staticStyle:{"text-again":"left","border-bottom":"1px dashed #E8EAEC","margin-bottom":"20px"}},[t._v("追加信息")]),t._v(" "),a("FormItem",{attrs:{label:"上传附件"}},[a("showUsualFiles",{key:t.fileId2,attrs:{"file-obj":t.dataObj2},on:{requestUploadList:t.receiveUploadList2}})],1),t._v(" "),a("FormItem",{attrs:{label:"追加内容"}},[a("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"请输入"},model:{value:t.formValidateModel1.val11,callback:function(e){t.$set(t.formValidateModel1,"val11",e)},expression:"formValidateModel1.val11"}})],1)],1):t._e(),t._v(" "),a("Modal",{staticClass:"treeBoxModel",attrs:{"mask-closable":!1,width:"360"},model:{value:t.taskPeipleModel,callback:function(e){t.taskPeipleModel=e},expression:"taskPeipleModel"}},[a("p",{staticStyle:{color:"#f60","text-align":"center"},attrs:{slot:"header"},slot:"header"},[a("span",[t._v("审核人信息")])]),t._v(" "),a("div",{staticStyle:{"text-align":"left","overflow-y":"auto",height:"300px"}},[a("FormItem",{attrs:{prop:"nextUser","label-width":10}},[a("Tree",{ref:"treeRef",attrs:{data:t.data2,"show-checkbox":"",multiple:""},on:{"on-check-change":t.updateNextUser}})],1)],1),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"primary",size:"large",long:"",disabled:t.buttonDisabled},on:{click:function(e){return t.handleSubmitLast("formValidateModel1")}}},[t._v("立即申请")])],1)])],1)],1),t._v(" "),a("div",{staticClass:"flexCenter",attrs:{slot:"footer"},slot:"footer"},[a("div",{staticClass:"button-content"},[a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.save1("formValidateModel1")}}},[t._v(t._s(t.buttonVal))]),t._v(" "),a("Button",{on:{click:function(e){t.modal1=!1}}},[t._v("取消")])],1)])]),t._v(" "),a("Modal",{attrs:{"mask-closable":!1,width:"90%",title:"查看"},model:{value:t.watchFileModel,callback:function(e){t.watchFileModel=e},expression:"watchFileModel"}},[a("showUsualFiles",{key:t.fileId3,attrs:{"file-obj":t.dataObj3},on:{requestUploadList:t.receiveUploadList3}})],1),t._v(" "),a("Modal",{attrs:{"mask-closable":!1,width:"90%",title:"查看"},model:{value:t.watchTableCellDitalModel,callback:function(e){t.watchTableCellDitalModel=e},expression:"watchTableCellDitalModel"}},[a("div",{staticClass:"content"},[a("Form",{attrs:{"label-width":120}},[a("FormItem",{attrs:{label:"流程标题："}},[a("label",[t._v(t._s(t.watchTableCell.bpmTitle))])]),t._v(" "),a("FormItem",{attrs:{label:"标题："}},[a("label",[t._v(t._s(t.watchTableCell.val1))])]),t._v(" "),a("FormItem",{attrs:{label:"是否公开："}},[a("label",[t._v(t._s("true"==t.watchTableCell.val2?"是":"否"))])]),t._v(" "),a("FormItem",{attrs:{label:"编辑内容："}},[a("label",[a("el-popover",{attrs:{placement:"top-start",title:"",width:"200",trigger:"hover",content:t.watchTableCell.val3}},[a("p",{staticClass:"textMaxWidth2 textOverflow",attrs:{slot:"reference"},slot:"reference"},[t._v(t._s(t.watchTableCell.val3))])])],1)]),t._v(" "),a("FormItem",{attrs:{label:"附件："}},[a("showUsualFiles",{key:t.fileId4,attrs:{"file-obj":t.dataObj4},on:{requestUploadList:t.receiveUploadList4}})],1),t._v(" "),a("FormItem",{attrs:{label:"追加附件："}},[a("showUsualFiles",{key:t.fileId5,attrs:{"file-obj":t.dataObj5},on:{requestUploadList:t.receiveUploadList5}})],1),t._v(" "),a("FormItem",{attrs:{label:"追加内容："}},[a("label",[a("el-popover",{attrs:{placement:"top-start",title:"",width:"200",trigger:"hover",content:t.watchTableCell.val11}},[a("p",{staticClass:"textMaxWidth2 textOverflow",attrs:{slot:"reference"},slot:"reference"},[t._v(t._s(t.watchTableCell.val11))])])],1)])],1)],1)]),t._v(" "),a("Modal",{attrs:{"mask-closable":!1,width:"99%",title:"查看"},model:{value:t.watchAppenModel,callback:function(e){t.watchAppenModel=e},expression:"watchAppenModel"}},[a("div",{staticClass:"content"},[a("Row",[a("table",{staticClass:"tableBox"},[a("thead",[a("tr",t._l(t.tableHeaderAppend,function(e,l){return a("td",[t._v(t._s(e.name))])}),0)]),t._v(" "),a("tbody",t._l(t.tableBodyAppend,function(e,l){return a("tr",[a("td",[t._v(t._s(l+1))]),t._v(" "),a("td",[a("el-popover",{attrs:{placement:"top-start",title:"",width:"200",trigger:"hover",content:e.content}},[a("p",{staticClass:"textOverflow textMaxWidth",attrs:{slot:"reference"},slot:"reference"},[t._v(t._s(e.content))])])],1),t._v(" "),a("td",{staticClass:"spanBox",on:{click:function(a){return t.watchAppenModelAppendFile(e)}}},[t._v("查看")]),t._v(" "),a("td",[t._v(t._s(e.dept))]),t._v(" "),a("td",[t._v(t._s(e.createTime))]),t._v(" "),a("td",[t._v(t._s(e.creator))])])}),0)])])],1)]),t._v(" "),a("Modal",{attrs:{"mask-closable":!1,width:"80%",title:"查看"},model:{value:t.watchAppenModelAppendFileModel,callback:function(e){t.watchAppenModelAppendFileModel=e},expression:"watchAppenModelAppendFileModel"}},[a("showUsualFiles",{key:t.fileId6,attrs:{"file-obj":t.dataObj6},on:{requestUploadList:t.receiveUploadList6}})],1),t._v(" "),a("Modal",{staticClass:"treeBoxModel",attrs:{"mask-closable":!1,width:"360"},model:{value:t.taskPeipleModel2,callback:function(e){t.taskPeipleModel2=e},expression:"taskPeipleModel2"}},[a("p",{staticStyle:{color:"#f60","text-align":"center"},attrs:{slot:"header"},slot:"header"},[a("span",[t._v("审核人信息")])]),t._v(" "),a("div",{staticStyle:{"text-align":"left","overflow-y":"auto",height:"300px"}},[a("Form",{ref:"taskPeipleModelData2",attrs:{model:t.taskPeipleModelData2,rules:t.ruleValidate2}},[a("FormItem",{attrs:{prop:"nextUser","label-width":10}},[a("Tree",{ref:"treeRef2",attrs:{data:t.data2,"show-checkbox":"",multiple:""},on:{"on-check-change":t.updateNextUser2}})],1)],1)],1),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"primary",size:"large",long:""},on:{click:function(e){return t.handleSubmitLast2("taskPeipleModelData2")}}},[t._v("立即申请")])],1)]),t._v(" "),a("Modal",{staticClass:"dialog",attrs:{"mask-closable":!1,title:"流程详情",width:"80%"},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[t.showModal?a("processMessage",{attrs:{"data-obj":t.dataObj}}):t._e(),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"topTitle-span1"},[e("img",{attrs:{src:a("Dh6M"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"topTitle-span1"},[e("img",{attrs:{src:a("Dh6M"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contentCellTitle"},[e("div",{staticClass:"contentCellTitle-1"}),this._v("查询条件\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contentCellTitle"},[e("div",{staticClass:"contentCellTitle-1"}),this._v("数据列表\n      ")])}]};var h=a("C7Lr")(p,u,!1,function(t){a("+OZE")},"data-v-467a264c",null);e.default=h.exports}});
//# sourceMappingURL=95.187db0c2051c17bca56b1577069638620.js.map