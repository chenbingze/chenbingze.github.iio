"use strict";(self["webpackChunkai_livestock_fronted"]=self["webpackChunkai_livestock_fronted"]||[]).push([[524],{54725:function(e,l,a){a.d(l,{Qe:function(){return t},Z_:function(){return o},ln:function(){return u}});var n=a(36026);const t=e=>(0,n.Z)({url:"/livestock/select",method:"POST",data:e}),o=e=>(0,n.Z)({url:"/livestock/updateencl",method:"PUT",data:e}),u=e=>(0,n.Z)({url:"/livestocktype/select",method:"POST",data:e})},82649:function(e,l,a){a.r(l),a.d(l,{default:function(){return H}});var n=a(384),t=(a(59853),a(24907)),o=(a(40121),a(37336)),u=(a(48504),a(20837),a(77049)),i=(a(75915),a(88464)),d=(a(45177),a(29491)),p=(a(50657),a(60096),a(6556)),r=(a(87228),a(94035)),c=(a(96152),a(66252)),s=a(49963),m=a(3577),h=a(54725),f=a(2262),w=a(70523);const g=(0,c._)("span",null,"牲畜编号：",-1),_=(0,c._)("span",null,"牲畜类型：",-1),k=(0,c._)("span",null,"体重范围：",-1),y=(0,c._)("span",null,"-",-1),W=(0,c._)("span",null,"体尺范围：",-1),v=(0,c._)("span",null,"-",-1),V=(0,c._)("span",null,"选择圈舍：",-1),x=(0,c._)("span",null,"项圈编号：",-1),b=(0,c._)("span",null,"特征图",-1),C=(0,c.Uk)("搜索"),S=(0,c.Uk)("重置"),z=["textContent"],D=(0,c.Uk)("详情"),U=(0,c.Uk)("进入圈舍"),I={class:"pagination"};var K={name:"LivestockManage",setup(e){(new w.EluiChinaAreaDht.ChinaArea).chinaAreaflat;const l=(0,f.qj)({}),a=((0,f.iH)([]),(0,f.iH)([])),K=(0,f.iH)([]),T=((0,f.iH)(!0),(0,f.qj)({srcData:null,pageIndex:1,pageSize:10,pageTotal:0}));function H(e,l){const a=(e-1)*l,n=a+l;K.value=T.srcData.slice(a,n)}function j(e){T.pageIndex=e,H(T.pageIndex,T.pageSize)}function Z(e){T.pageSize=e,H(1,T.pageSize)}function A(e){return(T.pageIndex-1)*T.pageSize+e+1}async function L(){await(0,h.Qe)(l).then((e=>{a.value=e.data,console.log("livestockList",a.value)}))}return L(),(e,a)=>{const h=r.EZ,f=p.Dv,w=d.BT,H=d.km,L=i.dq,O=u.mi,q=o.$Y,P=(0,c.up)("router-link"),Q=o.eI,R=t.R,Y=n.t;return(0,c.wg)(),(0,c.iD)("div",null,[(0,c.Wm)(L,null,{default:(0,c.w5)((()=>[(0,c.Wm)(f,{span:6},{default:(0,c.w5)((()=>[g,(0,c.Wm)(h,{modelValue:l.id,"onUpdate:modelValue":a[0]||(a[0]=e=>l.id=e),placeholder:"请输入牲畜编号",clearable:"",onKeyup:a[1]||(a[1]=(0,s.D2)((l=>e.handleSearch()),["enter"])),style:{width:"200px"}},null,8,["modelValue"])])),_:1}),(0,c.Wm)(f,{span:6},{default:(0,c.w5)((()=>[_,(0,c.Wm)(H,{modelValue:l.livestock_type,"onUpdate:modelValue":a[2]||(a[2]=e=>l.livestock_type=e),onChange:e.onOptionChanged,placeholder:"选择养殖场",style:{width:"200px"}},{default:(0,c.w5)((()=>[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(e.livestockTypeList,(e=>((0,c.wg)(),(0,c.j4)(w,{key:e.pk,label:e.fields.name,value:e.pk},null,8,["label","value"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1}),(0,c.Wm)(f,{span:6},{default:(0,c.w5)((()=>[k,(0,c.Wm)(h,{modelValue:l.weight_min,"onUpdate:modelValue":a[3]||(a[3]=e=>l.weight_min=e),placeholder:"最小体重",clearable:"",onKeyup:a[4]||(a[4]=(0,s.D2)((l=>e.handleSearch()),["enter"])),style:{width:"98px"}},null,8,["modelValue"]),y,(0,c.Wm)(h,{modelValue:l.weight_max,"onUpdate:modelValue":a[5]||(a[5]=e=>l.weight_max=e),placeholder:"最大体重",clearable:"",onKeyup:a[6]||(a[6]=(0,s.D2)((l=>e.handleSearch()),["enter"])),style:{width:"98px"}},null,8,["modelValue"])])),_:1}),(0,c.Wm)(f,{span:6},{default:(0,c.w5)((()=>[W,(0,c.Wm)(h,{modelValue:l.size_min,"onUpdate:modelValue":a[7]||(a[7]=e=>l.size_min=e),placeholder:"最小体尺",clearable:"",onKeyup:a[8]||(a[8]=(0,s.D2)((l=>e.handleSearch()),["enter"])),style:{width:"98px"}},null,8,["modelValue"]),v,(0,c.Wm)(h,{modelValue:l.size_max,"onUpdate:modelValue":a[9]||(a[9]=e=>l.size_max=e),placeholder:"最大体尺",clearable:"",onKeyup:a[10]||(a[10]=(0,s.D2)((l=>e.handleSearch()),["enter"])),style:{width:"98px"}},null,8,["modelValue"])])),_:1})])),_:1}),(0,c.Wm)(L,null,{default:(0,c.w5)((()=>[(0,c.Wm)(f,{span:6},{default:(0,c.w5)((()=>[V,(0,c.Wm)(H,{modelValue:l.enclosure,"onUpdate:modelValue":a[11]||(a[11]=e=>l.enclosure=e),onChange:e.onOptionChanged,placeholder:"选择圈舍",style:{width:"200px"}},{default:(0,c.w5)((()=>[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(e.optionList,(e=>((0,c.wg)(),(0,c.j4)(w,{key:e.pk,label:e.name,value:e.pk},null,8,["label","value"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1}),(0,c.Wm)(f,{span:6},{default:(0,c.w5)((()=>[x,(0,c.Wm)(h,{modelValue:l.necklace_id,"onUpdate:modelValue":a[12]||(a[12]=e=>l.necklace_id=e),placeholder:"请输入项圈ID",clearable:"",onKeyup:a[13]||(a[13]=(0,s.D2)((l=>e.handleSearch()),["enter"])),style:{width:"200px"}},null,8,["modelValue"])])),_:1}),(0,c.Wm)(f,{span:6},{default:(0,c.w5)((()=>[b,(0,c.Wm)(h,{modelValue:l.features,"onUpdate:modelValue":a[14]||(a[14]=e=>l.features=e),placeholder:"请输入特征图",clearable:"",onKeyup:a[15]||(a[15]=(0,s.D2)((l=>e.handleSearch()),["enter"])),style:{width:"200px"}},null,8,["modelValue"])])),_:1}),(0,c.Wm)(f,{span:6},{default:(0,c.w5)((()=>[(0,c.Wm)(O,{type:"primary",icon:"Search",onClick:a[16]||(a[16]=l=>e.handleSearch())},{default:(0,c.w5)((()=>[C])),_:1}),(0,c.Wm)(O,{icon:"Refresh",onClick:a[17]||(a[17]=l=>e.resetQuery())},{default:(0,c.w5)((()=>[S])),_:1})])),_:1})])),_:1}),(0,c.wy)(((0,c.wg)(),(0,c.j4)(Q,{data:K.value,style:{width:"100%"},border:!0},{default:(0,c.w5)((()=>[(0,c.Wm)(q,{label:"序号",width:"50",type:"index",align:"center"},{default:(0,c.w5)((e=>[(0,c._)("span",{textContent:(0,m.zw)(A(e.$index))},null,8,z)])),_:1}),(0,c.Wm)(q,{label:"圈舍名",align:"center",prop:"","show-overflow-tooltip":!0}),(0,c.Wm)(q,{label:"牲畜类型",align:"center",prop:"","show-overflow-tooltip":!0}),(0,c.Wm)(q,{label:"牲畜数量",align:"center",prop:"","show-overflow-tooltip":!0}),(0,c.Wm)(q,{label:"项圈数量",align:"center",prop:"","show-overflow-tooltip":!0}),(0,c.Wm)(q,{label:"建立时间",align:"center",prop:"","show-overflow-tooltip":!0}),(0,c.Wm)(q,{label:"操作",align:"center",width:"160px","class-name":"small-padding fixed-width"},{default:(0,c.w5)((l=>[(0,c.Wm)(O,{link:"",type:"primary",icon:"Tickets",onClick:a=>e.handleDetail(l.row)},{default:(0,c.w5)((()=>[D])),_:2},1032,["onClick"]),(0,c.Wm)(P,{to:{name:"圈舍牛只",params:{farmId:l.row.fields.farm,enclosureId:l.row.pk}}},{default:(0,c.w5)((()=>[(0,c.Wm)(O,{link:"",type:"primary",icon:"DArrowRight"},{default:(0,c.w5)((()=>[U])),_:1})])),_:2},1032,["to"])])),_:1})])),_:1},8,["data"])),[[Y,e.loading]]),(0,c._)("div",I,[(0,c.Wm)(R,{background:"",layout:"total, sizes, prev, pager, next","current-page":T.pageIndex,"onUpdate:current-page":a[18]||(a[18]=e=>T.pageIndex=e),"page-size":T.pageSize,"onUpdate:page-size":a[19]||(a[19]=e=>T.pageSize=e),total:T.pageTotal,"page-sizes":[1,5,10,20,30,50,100],onCurrentChange:j,onSizeChange:Z},null,8,["current-page","page-size","total"])])])}}};const T=K;var H=T},75915:function(e,l,a){a(235)},13171:function(e,l,a){a(3392)},87228:function(e,l,a){a(3392)},96152:function(e,l,a){a(93979)},93979:function(e,l,a){a(3392)},60096:function(e,l,a){a(56450)},56450:function(e,l,a){a(3392)},40121:function(e,l,a){a(3392),a(40109)},45177:function(e,l,a){a(3392)},81748:function(e,l,a){a(3392)},50657:function(e,l,a){a(40109)},40109:function(e,l,a){a(3392),a(93979),a(45705),a(56450),a(81748),a(30942)},20837:function(e,l,a){a(3392),a(13171),a(45705)},48504:function(e,l,a){a(3392),a(13171),a(45705),a(39777),a(81748)},45705:function(e,l,a){a(3392)}}]);