webpackJsonp([22],{XmPQ:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={props:["dataObj"],data:function(){return{fileObj:{},uploadList:[],fileId:"",disableFlg:!1,formValidate:{step_num:"",system_num:"",task_dependence:"",date_from:"",date_to:"",service:"",args:""},index:1,ruleValidate:{step_num:[{required:!0,message:"任务编号不能为空！",trigger:"blur"},{validator:function(e,t,a){t&&(/[^\d]/g.test(t)?a(new Error("任务编号只能为数字")):a()),a()},trigger:"blur"}],system_num:[{required:!0,message:"调度系统编号不能为空！",trigger:"blur"},{validator:function(e,t,a){t&&(/[^\d]/g.test(t)?a(new Error("调度系统编号只能为数字")):a()),a()},trigger:"blur"}],task_dependence:[{required:!1,message:"任务依赖不能为空！",trigger:"blur"},{validator:function(e,t,a){t&&(/[^\d]/g.test(t)?a(new Error("任务依赖只能为数字")):a()),a()},trigger:"blur"}],date_from:[{required:!1,message:"执行开始时间不能为空！",trigger:"change"}],date_to:[{required:!1,message:"执行结束时间不能为空！",trigger:"change"}],service:[{required:!1,message:"服务方法不能超过一千字",trigger:"blur"},{validator:function(e,t,a){t&&(/[\u4E00-\u9FA5]/g.test(t)?a(new Error("服务方法只能为数字或字母")):a()),a()},trigger:"blur"}],args:[{required:!1,message:"参数方法不能超过一千字",trigger:"blur"},{validator:function(e,t,a){t&&(/[\u4E00-\u9FA5]/g.test(t)?a(new Error("参数方法只能为数字或字母")):a()),a()},trigger:"blur"}]}}},created:function(){if("2"==this.dataObj.type){this.disableFlg=!0;var e=this.dataObj.data;e&&e.step_num&&this.getInfInfoRow(e)}},mounted:function(){},methods:{getInfInfoRow:function(e){this.formValidate={step_num:e.step_num,system_num:e.system_num,task_dependence:e.task_dependence,date_from:e.date_from,date_to:e.date_to,service:e.service,args:e.args}},changeUseSts:function(e){this.formValidate.ifShow=e},handleSubmit:function(e){var t=this;console.log(this.formValidate),this.$refs[e].validate(function(e){e&&("1"==t.dataObj.type?t.axios.post("/system/taskInfo2/save",t.formValidate,{headers:{"Content-Type":"application/json"}}).then(function(e){"200"==e.code&&(t.$emit("save"),t.$Message.success("保存成功！"))}).catch(function(e){}):t.axios.post("/system/taskInfo2/update/"+t.formValidate.step_num+"/"+t.formValidate.system_num,t.formValidate,{headers:{"Content-Type":"application/json"}}).then(function(e){"200"==e.code&&(t.$Message.success("修改成功！"),t.$emit("save"))}).catch(function(e){}))})},handleCancel:function(e){this.$emit("cancel",!1)}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"add-reg-manage"},[a("Form",{ref:"formValidate",staticClass:"form-content",attrs:{model:e.formValidate,rules:e.ruleValidate,"label-width":120}},[a("FormItem",{attrs:{label:"任务编号",prop:"step_num"}},[a("Input",{attrs:{placeholder:"请输入任务编号",disabled:e.disableFlg},model:{value:e.formValidate.step_num,callback:function(t){e.$set(e.formValidate,"step_num",t)},expression:"formValidate.step_num"}})],1),e._v(" "),a("FormItem",{attrs:{label:"调度系统编号",prop:"system_num"}},[a("Input",{attrs:{placeholder:"请输入调度系统编号"},model:{value:e.formValidate.system_num,callback:function(t){e.$set(e.formValidate,"system_num",t)},expression:"formValidate.system_num"}})],1),e._v(" "),a("FormItem",{attrs:{label:"任务依赖",prop:"task_dependence"}},[a("Input",{attrs:{placeholder:"请输入任务依赖",disabled:e.disableFlg},model:{value:e.formValidate.task_dependence,callback:function(t){e.$set(e.formValidate,"task_dependence",t)},expression:"formValidate.task_dependence"}})],1),e._v(" "),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:!e.disableFlg,expression:"!disableFlg"}],attrs:{label:"执行开始时间",prop:"date_from"}},[a("DatePicker",{attrs:{type:"date",placeholder:"请选择执行开始时间",value:e.formValidate.date_from},on:{"on-change":function(t){e.formValidate.date_from=t}}})],1),e._v(" "),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:!e.disableFlg,expression:"!disableFlg"}],attrs:{label:"执行结束时间",prop:"date_to"}},[a("DatePicker",{attrs:{type:"date",placeholder:"请选择执行结束时间",value:e.formValidate.date_to},on:{"on-change":function(t){e.formValidate.date_to=t}}})],1),e._v(" "),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:!e.disableFlg,expression:"!disableFlg"}],attrs:{label:"服务方法",prop:"service"}},[a("Input",{attrs:{placeholder:"请输入服务方法"},model:{value:e.formValidate.service,callback:function(t){e.$set(e.formValidate,"service",t)},expression:"formValidate.service"}})],1),e._v(" "),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:!e.disableFlg,expression:"!disableFlg"}],attrs:{label:"参数方法",prop:"args"}},[a("Input",{attrs:{placeholder:"请输入参数方法"},model:{value:e.formValidate.args,callback:function(t){e.$set(e.formValidate,"args",t)},expression:"formValidate.args"}})],1),e._v(" "),a("FormItem",[a("div",{staticClass:"button-content"},[a("Button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("formValidate")}}},[e._v("保存")]),e._v(" "),a("Button",{on:{click:e.handleCancel}},[e._v("取消")])],1)])],1)],1)},staticRenderFns:[]};var i={components:{addProcessCompanyManage:a("C7Lr")(s,n,!1,function(e){a("h7tO")},null,null).exports},mounted:function(){this.handleSubmit(0,1)},data:function(){return{tableHeader:[{name:"序"},{name:"操作"},{name:"任务编号"},{name:"调度系统编号"},{name:"任务名称"},{name:"任务依赖"},{name:"执行开始时间"},{name:"执行结束时间"},{name:"服务方法"},{name:"参数方法"}],tableBody:[],pageSize:10,pageNum:1,rowCount:0,currentpage:1,keyId:"",modelTitle:"新增",tabview:"",showModal:!1,dataObj:{type:"1"},stepNameList:[],formValidate:{stepNum:"",stepName:""},ruleValidate:{stepNum:[{required:!1,validator:function(e,t,a){t&&(/[^\d]/g.test(t)?a(new Error("任务编号只能为数字")):a()),a()},trigger:"blur"}]}}},methods:{getDic:function(){var e=this;this.axios.get("/system/getDic/STEP_STATUS").then(function(t){"200"==t.code&&(e.stepNameList=t.data.STEP_STATUS)}).catch(function(e){})},handleSubmit:function(e,t){var a=this,s={ifExacte:e,stepNum:this.formValidate.stepNum,stepName:this.formValidate.stepName,pageNum:t,pageSize:this.pageSize};this.$refs.formValidate.validate(function(e){e&&a.axios.post("/system/taskInfo2/listSearch",s,{headers:{"Content-Type":"application/json"}}).then(function(e){"200"==e.code&&(a.tableBody=e.data.records,a.rowCount=e.data.total)}).catch(function(e){})})},pageSizefun:function(e){this.pageSize=1*e,this.handleSubmit(0,1)},pageChange:function(e){this.pageNum=e,this.handleSubmit(0,e)},operate:function(e,t){var a=this;switch(console.log("item",t),e){case"1":this.keyId=!this.keyId,this.modelTitle="新增",this.showModal=!0,this.dataObj={type:1,data:[]};break;case"2":this.keyId=t.step_num,this.modelTitle="修改",this.dataObj={type:2,data:t},this.showModal=!0;break;case"3":this.$Modal.confirm({title:"是否删除？",okText:"确认",cancelText:"取消",onOk:function(){a.deleteItem(t)},onCancel:function(){}})}},deleteItem:function(e){var t=this;console.log("item",e),e.step_num&&this.axios.post("/system/taskInfo2/delete/"+e.step_num,{headers:{"Content-Type":"application/json"}}).then(function(e){t.$Message.success("删除成功！"),t.handleSubmit(0,1),t.currentpage=1,t.pageNum=1}).catch(function(e){console.log(e)})},saveDatas:function(){this.showModal=!1,this.pageNum=1,this.currentpage=1,this.handleSubmit(0,1)},cancelDialog:function(e){this.showModal=e,this.cancel()},cancel:function(){this.$refs.dialogModal.$refs.formValidate&&this.$refs.dialogModal.$refs.formValidate.resetFields()}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),e._v(" "),a("div",{staticClass:"contentCellBox"},[a("div",{staticClass:"contentCellBox"},[e._m(1),e._v(" "),a("div",{staticClass:"contentCellBody1"},[a("Form",{ref:"formValidate",attrs:{model:e.formValidate,rules:e.ruleValidate,"label-width":120,inline:""}},[a("Row",[a("FormItem",{attrs:{label:"任务编号：",prop:"stepNum"}},[a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入任务编号"},model:{value:e.formValidate.stepNum,callback:function(t){e.$set(e.formValidate,"stepNum",t)},expression:"formValidate.stepNum"}})],1),e._v(" "),a("FormItem",{attrs:{label:"任务名称：",prop:"stepName"}},[a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入任务名称"},model:{value:e.formValidate.stepName,callback:function(t){e.$set(e.formValidate,"stepName",t)},expression:"formValidate.stepName"}})],1),e._v(" "),a("Row",[a("div",{staticClass:"btnClass"},[a("Button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit(0,1)}}},[e._v("查询")])],1)])],1)],1),e._v(" "),a("div",{staticClass:"contentCellBody"},[e._m(2),e._v(" "),a("Row",[a("table",{staticClass:"tableBox"},[a("thead",[a("tr",e._l(e.tableHeader,function(t,s){return a("td",[e._v(e._s(t.name))])}),0)]),e._v(" "),a("tbody",[e._l(e.tableBody,function(t,s){return a("tr",{attrs:{id:t.documentId}},[a("td",[e._v("\n                      "+e._s(e.pageSize*(e.pageNum-1)+s+1)+"\n                    ")]),e._v(" "),a("td",{staticClass:"noWrap"},[a("span",{staticClass:"spanBox",on:{click:function(a){return e.operate("2",t)}}},[e._v("修改")]),e._v(" "),a("span",{staticClass:"spanBox",on:{click:function(a){return e.operate("3",t)}}},[e._v("删除")])]),e._v(" "),a("td",[e._v(e._s(t.step_num))]),e._v(" "),a("td",[e._v(e._s(t.system_num))]),e._v(" "),a("td",[e._v(e._s(t.step_name))]),e._v(" "),a("td",[e._v(e._s(t.task_dependence))]),e._v(" "),a("td",[e._v(e._s(t.date_from))]),e._v(" "),a("td",[e._v(e._s(t.date_to))]),e._v(" "),a("td",[e._v(e._s(t.service))]),e._v(" "),a("td",[e._v(e._s(t.args))])])})],2)])])],1),e._v(" "),a("div",{staticClass:"flexCenter pageBox"},[a("Page",{attrs:{total:e.rowCount,"page-size":e.pageSize,current:e.currentpage,"show-elevator":"","show-sizer":""},on:{"on-change":e.pageChange,"on-page-size-change":e.pageSizefun,"update:current":function(t){e.currentpage=t}}})],1)],1)])]),e._v(" "),a("Modal",{staticClass:"dialog",attrs:{"mask-closable":!1,title:e.modelTitle,styles:{width:"60%"}},on:{"on-cancel":e.cancel},model:{value:e.showModal,callback:function(t){e.showModal=t},expression:"showModal"}},[a("addProcessCompanyManage",{key:e.keyId,ref:"dialogModal",attrs:{dataObj:e.dataObj,width:"80%"},on:{cancel:e.cancelDialog,save:e.saveDatas}}),e._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"})],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"topTitle"},[t("span",{staticClass:"topTitle-span1"},[this._v("系统管理")]),this._v(" "),t("span",{staticClass:"topTitle-span1"},[t("img",{attrs:{src:a("Dh6M"),alt:""}})]),this._v(" "),t("span",{staticClass:"topTitle-span1"},[this._v("数据集成")]),this._v(" "),t("span",{staticClass:"topTitle-span1"},[t("img",{attrs:{src:a("Dh6M"),alt:""}})]),this._v(" "),t("span",{staticClass:"topTitle-span1"},[this._v("全公司流程管理")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"contentCellTitle"},[t("div",{staticClass:"contentCellTitle-1"}),this._v("查询条件\n      ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"contentCellTitle"},[t("div",{staticClass:"contentCellTitle-1"}),this._v("数据列表\n          ")])}]};var r=a("C7Lr")(i,o,!1,function(e){a("sacT")},"data-v-7c3a8be5",null);t.default=r.exports},h7tO:function(e,t){},sacT:function(e,t){}});
//# sourceMappingURL=22.1239692fb39e7f45e2621577069638620.js.map