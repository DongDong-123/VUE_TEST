webpackJsonp([32],{"Bei+":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("a3Yh"),i=a.n(s),n=a("lvfI"),o=a("tE5u"),l=a("iymK"),r={components:{viewCountDialog:o.a,problemBankManageDetail:l.a,showUsualFiles:n.a},data:function(){var t;return t={keyId:"",pubOrgDatas:[],tabview:"viewCountDialog",showModal:!1,dataObj:{type:"1",data:[]},pageSize:10,pageNum:1,currentpage:1,rowCount:0,modelTitle:""},i()(t,"pageSize",5),i()(t,"formValidate",{content:"",title:"",permissionTime:["",""]}),i()(t,"cardDatas",[]),t},created:function(){this.getDic(),this.handleSubmit(0,1)},methods:{watchFiles:function(t){this.percentWidth="40%",this.modelTitle="文件列表",this.tabview="showUsualFiles",this.showModal=!0,this.keyId=t.busId,this.dataObj={data:t,showFlag:!1}},getDic:function(){var t=this;this.axios.get("/system/getDic/PROCESS_PUB_ORG").then(function(e){"200"==e.code&&(t.pubOrgDatas=e.data.PROCESS_PUB_ORG)}).catch(function(t){})},handleSubmit:function(t,e){var a=this,s={ifExacte:t,content:this.formValidate.content,minPubTime:this.formValidate.permissionTime[0],maxPubTime:this.formValidate.permissionTime[1],pageNum:e,title:this.formValidate.title.trim(),pageSize:this.pageSize};console.log("data",s),this.axios.post("/process/infQuestion/getInfQuestionList?infViewNum=1",s,{headers:{"Content-Type":"application/json"}}).then(function(t){"200"==t.code&&(a.cardDatas=t.data.records,a.cardDatas.forEach(function(t){t.createTime=t.createTime.substr(0,10),t.updateTime=t.updateTime.substr(0,10)}),a.rowCount=t.data.total)}).catch(function(t){})},pageSizefun:function(t){this.pageSize=1*t,this.handleSubmit(0,1)},pageChange:function(t){this.pageNum=t,this.handleSubmit(0,t)},showViewCount:function(t){this.dataObj={data:t},this.keyId=!this.keyId,this.modelTitle="浏览次数",this.showModal=!0,this.tabview="viewCountDialog"},cancel:function(){"详情"==this.modelTitle&&this.handleSubmit(0,this.pageNum)},cancelDialog:function(t){this.showModal=t},showDetail:function(t){this.modelTitle="详情",this.dataObj={data:t,showFlag:!1,infViewNum:1},this.keyId=!this.keyId,this.tabview="problemBankManageDetail",this.showModal=!0}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"show-common-manage"},[t._m(0),t._v(" "),a("div",{staticClass:"contentCellBox"},[a("div",{staticClass:"contentCellBox"},[t._m(1),t._v(" "),a("div",{staticClass:"contentCellBody1"},[a("Form",{ref:"formValidate",attrs:{model:t.formValidate,"label-width":120,inline:""}},[a("Row",[a("FormItem",{attrs:{label:"标题："}},[a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入标题"},model:{value:t.formValidate.title,callback:function(e){t.$set(t.formValidate,"title",e)},expression:"formValidate.title"}})],1),t._v(" "),a("FormItem",{attrs:{label:"发布时间："}},[a("DatePicker",{staticStyle:{width:"200px"},attrs:{type:"daterange",placeholder:"请选择发布时间",value:t.formValidate.permissionTime},on:{"on-change":function(e){t.formValidate.permissionTime=e}}})],1),t._v(" "),a("FormItem",{attrs:{label:"编辑内容："}},[a("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入内容"},model:{value:t.formValidate.content,callback:function(e){t.$set(t.formValidate,"content",e)},expression:"formValidate.content"}})],1)],1),t._v(" "),a("Row",[a("div",{staticClass:"btnClass"},[a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit(0,1)}}},[t._v("查询")])],1)])],1)],1)])]),t._v(" "),t._m(2),t._v(" "),t._l(t.cardDatas,function(e){return a("div",{key:e.id,staticClass:"file-content"},[a("div",{staticClass:"file-detail"},[a("div",{staticClass:"left-detail"},[t._m(3,!0),t._v(" "),a("div",{staticClass:"header-content"},[a("div",{staticClass:"title mr50"},[a("el-popover",{attrs:{placement:"top-start",title:"",width:"200",trigger:"hover",content:e.title}},[a("span",{attrs:{slot:"reference"},slot:"reference"},[t._v(t._s(e.title))])])],1),t._v(" "),a("span",{staticClass:"date"},[a("span",{staticClass:"fontWeight"},[t._v("制定单位：")]),t._v(t._s(e.manager))]),t._v(" "),a("span",{staticClass:"date"},[a("span",{staticClass:"fontWeight"},[t._v("发布时间：")]),t._v(t._s(e.updateTime))]),t._v(" "),a("span",{staticClass:"date"},[a("span",{staticClass:"fontWeight"},[t._v("发布人：")]),t._v(t._s(e.pubUser))]),t._v(" "),a("span",{staticClass:"date"},[a("span",{staticClass:"fontWeight"},[t._v("浏览次数：")]),t._v(" "),a("label",{staticClass:"spanBox",on:{click:function(a){return t.showViewCount(e)}}},[t._v(t._s(e.infViewNum))])])]),t._v(" "),a("div",{staticClass:"content-detail"},[a("span",{staticClass:"fontWeight"},[t._v("内容：")]),t._v(" "),a("el-popover",{attrs:{placement:"top-start",title:"",width:"200",trigger:"hover",content:e.content}},[a("span",{attrs:{slot:"reference"},slot:"reference"},[t._v(t._s(e.content))])])],1)]),t._v(" "),a("div",{staticClass:"right-detail"},[a("div",{class:"true"==e.ifShow?"status":"status2"},[a("span",[t._v(t._s("true"==e.ifShow?"公开":"未公开"))])]),t._v(" "),a("Button",{on:{click:function(a){return t.showDetail(e)}}},[t._v("查看详情")]),t._v(" "),a("Button",{on:{click:function(a){return t.watchFiles(e)}}},[t._v("查看文件")])],1)])])}),t._v(" "),a("div",{staticClass:"flexCenter pageBox"},[a("Page",{attrs:{total:t.rowCount,"page-size":t.pageSize,current:t.currentpage,"show-elevator":"","show-sizer":""},on:{"on-change":t.pageChange,"on-page-size-change":t.pageSizefun,"update:current":function(e){t.currentpage=e}}})],1),t._v(" "),a("Modal",{staticClass:"dialog",attrs:{"mask-closable":!1,title:t.modelTitle,styles:{width:"60%"}},on:{"on-cancel":t.cancel},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[a(t.tabview,{key:t.keyId,tag:"component",attrs:{dataObj:t.dataObj,width:"80%","file-obj":t.dataObj},on:{cancel:t.cancelDialog}}),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"})],1)],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"topTitle"},[e("span",{staticClass:"topTitle-span1"},[this._v("反洗钱信息")]),this._v(" "),e("span",{staticClass:"topTitle-span1"},[e("img",{attrs:{src:a("Dh6M"),alt:""}})]),this._v(" "),e("span",{staticClass:"topTitle-span1"},[this._v("问题库")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contentCellTitle"},[e("div",{staticClass:"contentCellTitle-1"}),this._v("查询条件\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"padding-left":"20px"}},[e("div",{staticClass:"contentCellTitle"},[e("div",{staticClass:"contentCellTitle-1"}),this._v("文件展示\n    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("img",{attrs:{src:a("RAvV"),alt:""}}),this._v(" "),e("span",{staticClass:"info"},[this._v("问题库")])])}]};var d=a("C7Lr")(r,c,!1,function(t){a("FhMR")},"data-v-41e51864",null);e.default=d.exports},FhMR:function(t,e){},iymK:function(t,e,a){"use strict";var s=a("ZLEe"),i=a.n(s),n={props:["dataObj"],components:{showUsualFiles:a("lvfI").a},data:function(){return{keyId:"",resData:{},fileObj:{}}},created:function(){if(i()(this.dataObj.data).length>0){var t=this.dataObj.data;t&&t.id&&(this.dataObj&&this.dataObj.infViewNum?this.getInfInfoRowNum(t.id):this.getInfInfoRow(t.id))}},methods:{getInfInfoRowNum:function(t){var e=this;this.axios.post("/process/infQuestion/getInfQuestionRow/"+t+"?infViewNum=1",{headers:{"Content-Type":"application/json"}}).then(function(t){"200"==t.code&&(e.resData=t.data,e.resData.createTime=e.resData.createTime.substr(0,19),e.keyId=t.data.busId,e.fileObj={data:t.data,showFlag:!1})}).catch(function(t){})},getInfInfoRow:function(t){var e=this;this.axios.post("/process/infQuestion/getInfQuestionRow/"+t+"?decode=1",{headers:{"Content-Type":"application/json"}}).then(function(t){"200"==t.code&&(e.resData=t.data,e.resData.createTime=e.resData.createTime.substr(0,19),e.keyId=t.data.busId,e.fileObj={data:t.data,showFlag:!1})}).catch(function(t){})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"common-detail"},[a("div",{staticClass:"content"},[a("Form",{attrs:{"label-width":120}},[a("FormItem",{attrs:{label:"标题："}},[a("label",[t._v(t._s(t.resData.title))])]),t._v(" "),a("FormItem",{attrs:{label:"是否公开："}},[a("label",[t._v(t._s("true"==t.resData.ifShow?"是":"否"))])]),t._v(" "),a("FormItem",{attrs:{label:"问题整改机构："}},[a("label",[t._v(t._s(t.resData.reformedOrg))])]),t._v(" "),a("FormItem",{attrs:{label:"发布机构："}},[a("label",[t._v(t._s(t.resData.pubOrg))])]),t._v(" "),a("FormItem",{attrs:{label:"发布时间："}},[a("label",[t._v(t._s(t.resData.createTime))])]),t._v(" "),a("FormItem",{attrs:{label:"编辑内容："}},[a("label",[t._v(t._s(t.resData.content))])]),t._v(" "),a("FormItem",{attrs:{label:"附件："}},[a("showUsualFiles",{key:t.keyId,attrs:{"file-obj":t.fileObj}})],1)],1)],1)])},staticRenderFns:[]},l=a("C7Lr")(n,o,!1,null,null,null);e.a=l.exports}});
//# sourceMappingURL=32.0407891adea50edec8a51577069638620.js.map