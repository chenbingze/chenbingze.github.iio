"use strict";(self["webpackChunkai_livestock_fronted"]=self["webpackChunkai_livestock_fronted"]||[]).push([[38],{54278:function(e,a,n){n.d(a,{Xk:function(){return l}});var t=n(36026);const l=e=>(0,t.Z)({url:"/enclosure/select",method:"POST",data:e})},89341:function(e,a,n){n.d(a,{O:function(){return l}});var t=n(36026);const l=e=>(0,t.Z)({url:"/farmowner/select",method:"POST",data:e})},35038:function(e,a,n){n.r(a),n.d(a,{default:function(){return H}});var t=n(384),l=(n(59853),n(24907)),o=(n(40121),n(37336)),i=(n(48504),n(77049)),u=(n(75915),n(20837),n(69992)),r=(n(84948),n(33618),n(54788)),c=(n(37903),n(88464)),d=(n(45177),n(29491)),s=(n(50657),n(60096),n(86660)),p=(n(28475),n(66252)),f=n(49963),m=n(3577);const g=e=>((0,p.dD)("data-v-2b2e338e"),e=e(),(0,p.Cn)(),e),w={class:"app-container"},v=g((()=>(0,p._)("span",{class:"top"},"牧场名称：",-1))),_={class:"cell-item"},h=(0,p.Uk)(" 建立/修改时间 "),k={class:"cell-item"},W=(0,p.Uk)(" 所在地 "),b={class:"app-container"},z=["textContent"],y=(0,p.Uk)("详情"),C=(0,p.Uk)("进入圈舍"),I={class:"pagination"};function S(e,a,n,g,S,x){const P=(0,p.up)("Plus"),F=s.gn,U=d.BT,D=d.km,T=c.dq,H=(0,p.up)("tickets"),O=r.Ks,j=u.QQ,Q=(0,p.up)("location"),q=u.Lf,L=o.$Y,K=i.mi,V=(0,p.up)("router-link"),Z=o.eI,R=l.R,X=t.t;return(0,p.wg)(),(0,p.iD)("div",w,[(0,p.Wm)(F,null,{default:(0,p.w5)((()=>[(0,p.Wm)(P)])),_:1}),(0,p.Wm)(T,null,{default:(0,p.w5)((()=>[v,(0,p.Wm)(D,{modelValue:g.enclosureSelectQuery.farm,"onUpdate:modelValue":a[1]||(a[1]=e=>g.enclosureSelectQuery.farm=e),placeholder:"选择养殖场",onChange:g.onOptionChanged,style:{width:"160px"}},{default:(0,p.w5)((()=>[(0,p.Wm)(U,{key:"0",label:"默认",value:""}),((0,p.wg)(!0),(0,p.iD)(p.HY,null,(0,p.Ko)(g.farmList,(n=>((0,p.wg)(),(0,p.j4)(U,{key:n.pk,label:n.fields.name,value:n.pk,onKeyup:a[0]||(a[0]=(0,f.D2)((a=>e.handleSearch()),["enter"]))},null,8,["label","value"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1}),(0,p._)("div",null,[(0,p.wy)((0,p.Wm)(q,{class:"margin-top",border:""},{default:(0,p.w5)((()=>[(0,p.Wm)(j,null,{label:(0,p.w5)((()=>[(0,p._)("div",_,[(0,p.Wm)(F,null,{default:(0,p.w5)((()=>[(0,p.Wm)(H)])),_:1}),h])])),default:(0,p.w5)((()=>[(0,p._)("div",null,[(0,p.Wm)(O,{size:"small"},{default:(0,p.w5)((()=>[(0,p.Uk)((0,m.zw)(g.oneFarmInfo.create_time),1)])),_:1}),(0,p.Wm)(O,{size:"small"},{default:(0,p.w5)((()=>[(0,p.Uk)((0,m.zw)(g.oneFarmInfo.update_time),1)])),_:1})])])),_:1}),(0,p.Wm)(j,null,{label:(0,p.w5)((()=>[(0,p._)("div",k,[(0,p.Wm)(F,null,{default:(0,p.w5)((()=>[(0,p.Wm)(Q)])),_:1}),W])])),default:(0,p.w5)((()=>[(0,p.Uk)(" "+(0,m.zw)(g.oneFarmInfo.location),1)])),_:1})])),_:1},512),[[f.F8,g.oneFarmInfo.showFlag]])]),(0,p._)("div",b,[(0,p.wy)(((0,p.wg)(),(0,p.j4)(Z,{data:g.tableData,style:{width:"100%"},border:!0},{default:(0,p.w5)((()=>[(0,p.Wm)(L,{label:"序号",width:"50",type:"index",align:"center"},{default:(0,p.w5)((e=>[(0,p._)("span",{textContent:(0,m.zw)(g.getIndex(e.$index))},null,8,z)])),_:1}),(0,p.Wm)(L,{label:"圈舍名",align:"center",prop:"fields.name","show-overflow-tooltip":!0}),(0,p.Wm)(L,{label:"牲畜类型",align:"center",prop:"fields.livestock_type","show-overflow-tooltip":!0}),(0,p.Wm)(L,{label:"牲畜数量",align:"center",prop:"fields.livestock_number","show-overflow-tooltip":!0}),(0,p.Wm)(L,{label:"项圈数量",align:"center",prop:"fields.necklace_number","show-overflow-tooltip":!0}),(0,p.Wm)(L,{label:"建立时间",align:"center",prop:"fields.create_time","show-overflow-tooltip":!0}),(0,p.Wm)(L,{label:"操作",align:"center",width:"160px","class-name":"small-padding fixed-width"},{default:(0,p.w5)((a=>[(0,p.Wm)(K,{link:"",type:"primary",icon:"Tickets",onClick:n=>e.handleDetail(a.row)},{default:(0,p.w5)((()=>[y])),_:2},1032,["onClick"]),(0,p.Wm)(V,{to:{name:"圈舍牛只",params:{farmId:a.row.fields.farm,enclosureId:a.row.pk}}},{default:(0,p.w5)((()=>[(0,p.Wm)(K,{link:"",type:"primary",icon:"DArrowRight"},{default:(0,p.w5)((()=>[C])),_:1})])),_:2},1032,["to"])])),_:1})])),_:1},8,["data"])),[[X,g.loading]]),(0,p._)("div",I,[(0,p.Wm)(R,{background:"",layout:"total, sizes, prev, pager, next","current-page":g.pageParams.pageIndex,"onUpdate:current-page":a[2]||(a[2]=e=>g.pageParams.pageIndex=e),"page-size":g.pageParams.pageSize,"onUpdate:page-size":a[3]||(a[3]=e=>g.pageParams.pageSize=e),total:g.pageParams.pageTotal,"page-sizes":[1,5,10,20,30,50,100],onCurrentChange:g.handlePageChange,onSizeChange:g.handleSizeChange},null,8,["current-page","page-size","total","onCurrentChange","onSizeChange"])])])])}var x=n(2262),P=n(54278),F=n(89341),U={setup(){const e=(0,x.qj)({}),a=(0,x.iH)([]),n=(0,x.iH)({showFlag:!1,create_time:"",update_time:"",location:""}),t=(0,x.qj)({}),l=(0,x.iH)(!1),o=(0,x.iH)([]),i=(0,x.iH)([]),u=(0,x.qj)({pageIndex:1,pageSize:5,pageTotal:0});async function r(){await(0,F.O)(e).then((e=>{a.value=e.data}))}async function c(){await(0,P.Xk)(t).then((e=>{o.value=e.data,console.log("enclosureList.value",o.value)})),o.value?(u.pageTotal=o.value.length,d(u.pageIndex,u.pageSize)):(u.pageTotal=0,i.value=[])}function d(e,a){const n=(e-1)*a,t=n+a;i.value=o.value.slice(n,t)}function s(e){u.pageIndex=e,d(u.pageIndex,u.pageSize)}function p(e){u.pageSize=e,d(1,u.pageSize)}function f(e){return(u.pageIndex-1)*u.pageSize+e+1}function m(e){return e.provience+" "+e.city+" "+e.county}function g(e){const l=a.value.find((a=>a.pk===e));l?(n.value.create_time=l.fields.create_time,n.value.update_time=l.fields.update_time,n.value.location=m(l.fields),n.value.showFlag=!0):(n.value.showFlag=!1,n.value.create_time="",n.value.update_time="",n.value.location=""),t.farm=e,c()}return r(),c(),{loading:l,farmList:a,oneFarmInfo:n,enclosureSelectQuery:t,tableData:i,pageParams:u,handlePageChange:s,handleSizeChange:p,getIndex:f,onOptionChanged:g}}},D=n(83744);const T=(0,D.Z)(U,[["render",S],["__scopeId","data-v-2b2e338e"]]);var H=T},75915:function(e,a,n){n(235)},13171:function(e,a,n){n(3392)},33618:function(e,a,n){n(54081)},54081:function(e,a,n){n(3392)},84948:function(e,a,n){n(3392),n(54081)},93979:function(e,a,n){n(3392)},59853:function(e,a,n){n(3392)},60096:function(e,a,n){n(56450)},56450:function(e,a,n){n(3392)},40121:function(e,a,n){n(3392),n(40109)},45177:function(e,a,n){n(3392)},81748:function(e,a,n){n(3392)},50657:function(e,a,n){n(40109)},40109:function(e,a,n){n(3392),n(93979),n(45705),n(56450),n(81748),n(30942)},20837:function(e,a,n){n(3392),n(13171),n(45705)},48504:function(e,a,n){n(3392),n(13171),n(45705),n(39777),n(81748)},37903:function(e,a,n){n(45705)},45705:function(e,a,n){n(3392)}}]);