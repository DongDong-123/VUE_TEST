webpackJsonp([135],{TCYZ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={components:{},created:function(){this.formValidate.warn_date[0]=this.getCurrDate(),this.formValidate.warn_date[1]=this.formValidate.warn_date[0]},mounted:function(){this.doSearch()},computed:{},watch:{},data:function(){return{pageNo:1,rowCount:0,pageSize:10,tableHeader:[{name:"序"},{name:"预测日期"},{name:"所属部门"},{name:"客户号"},{name:"客户名称"},{name:"预测结果"}],tableBody:[],formValidate:{warn_date:["20190101","20190101"],pageSize:10,pageNo:1},ruleValidate:{}}},methods:{doSearch:function(){var t=this,e={warn_date1:this.formValidate.warn_date[0],warn_date2:this.formValidate.warn_date[1],pageSize:this.pageSize,pageNo:this.pageNo};this.axios.post("/prediction/amlCtif",e,{headers:{"Content-Type":"application/json"}}).then(function(e){t.rowCount=e.data.page.rowCount,t.tableBody=e.data.datas}).catch(function(t){})},doPageSize:function(t){this.pageSize=1*t,1==this.pageNo&&this.doSearch()},doPageNo:function(t){this.pageNo=1*t,this.doSearch()},getCurrDate:function(){var t=new Date,e=new Date(t.getTime()+2592e6),a=e.getFullYear(),n=e.getMonth()+1,i=e.getDate();return a+""+(n=n<10?"0"+n:n)+(i=i<10?"0"+i:i)}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),t._v(" "),a("div",{staticClass:"contentCellBox"},[a("div",{staticClass:"contentCellBox"},[t._m(1),t._v(" "),a("div",{staticClass:"contentCellBody"},[a("Form",{attrs:{model:t.formValidate,"label-width":120,inline:""}},[a("Row",[a("FormItem",{attrs:{label:"预测日期",prop:"username"}},[a("DatePicker",{staticStyle:{width:"200px"},attrs:{value:t.formValidate.warn_date,format:"yyyyMMdd",type:"daterange",placeholder:"选择日期"},on:{"on-change":function(e){t.formValidate.warn_date=e}}})],1)],1),t._v(" "),a("Row",[a("div",{staticClass:"btnClass"},[a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.doSearch()}}},[t._v("查询")])],1)])],1)],1)]),t._v(" "),a("div",{staticClass:"contentCellBox"},[t._m(2),t._v(" "),a("div",{staticClass:"contentCellBody"},[a("Row",[a("table",{staticClass:"tableBox"},[a("thead",[a("tr",t._l(t.tableHeader,function(e,n){return a("td",[t._v(t._s(e.name))])}),0)]),t._v(" "),a("tbody",[t._l(t.tableBody,function(e,n){return[a("tr",[a("td",[t._v(t._s(t.pageSize*(t.pageNo-1)+n+1))]),t._v(" "),a("td",[t._v(t._s(e.warn_date))]),t._v(" "),a("td",[t._v(t._s(e.mbrc))]),t._v(" "),a("td",[t._v(t._s(e.csnm))]),t._v(" "),a("td",[t._v(t._s(e.ctnm))]),t._v(" "),a("td",[t._v(t._s(e.prediction))])])]})],2)])]),t._v(" "),a("div",{staticClass:"flexCenter pageBox"},[a("Page",{attrs:{current:t.pageNo,total:t.rowCount,"page-size":t.pageSize,"show-elevator":"","show-sizer":""},on:{"update:current":function(e){t.pageNo=e},"on-change":t.doPageNo,"on-page-size-change":t.doPageSize}})],1)],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"topTitle"},[e("span",{staticClass:"topTitle-span1"},[this._v("机器学习")]),this._v(" "),e("span",{staticClass:"topTitle-span1"},[e("img",{attrs:{src:a("Dh6M"),alt:""}})]),this._v(" "),e("span",{staticClass:"topTitle-span1"},[this._v("AML预测结果")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contentCellTitle"},[e("div",{staticClass:"contentCellTitle-1"}),this._v("查询条件\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contentCellTitle"},[e("div",{staticClass:"contentCellTitle-1"}),this._v("数据列表\n      ")])}]},s=a("C7Lr")(n,i,!1,null,null,null);e.default=s.exports}});
//# sourceMappingURL=135.720aa3097213487a94be1577069638620.js.map