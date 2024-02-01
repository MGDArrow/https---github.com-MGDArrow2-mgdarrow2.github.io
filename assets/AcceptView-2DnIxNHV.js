import{e as i,w as h,o as d,a as c,F as k,r as $,b as C,t as b,y as T,c as N,f as S,g as n,h as v,i as E,G as I,l as X,m as p}from"./index-F1vNAxrB.js";import{_ as y,a as Z}from"./VButton-PW1qBemq.js";import{_ as j}from"./VCheck-av9r10Oq.js";import{_ as z}from"./VList-7FpcO2oJ.js";import{u as U}from"./categories-rfuz-_Hf.js";import{u as A}from"./organizations-w_PCBs0P.js";import{u as x}from"./boxes-sp224Z4Y.js";import{u as D}from"./history-Zpod3fHF.js";const q={class:"date"},J={key:0,class:"date__year"},K=["onClick"],P={key:1,class:"date__month"},Q=["onClick"],R={key:2,class:"date__day"},W=["onClick"],Y={__name:"VDate",emits:["getDate"],setup(G,{emit:w}){const u=w,g=[2021,2022,2023,2024,2025,2026,2027,2028,2029],m=["Январь","Февраль","Март","Апрель","Май","Июль","Июнь","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],V=Array.from(Array(32).keys()).slice(1),a=i("");function f(s){return s<10?`0${s}`:s}return h(a,s=>{s.length===10&&u("getDate",a.value)}),(s,r)=>(d(),c("div",q,[a.value.length===0?(d(),c("div",J,[(d(),c(k,null,$(g,o=>C("div",{class:"date__year--point",key:o,onClick:_=>a.value=`${o}-`},b(o),9,K)),64))])):a.value.length===5?(d(),c("div",P,[(d(),c(k,null,$(m,(o,_)=>C("div",{class:"date__month--point",key:o,onClick:B=>a.value=`${a.value}${f(_+1)}-`},b(o),9,Q)),64))])):(d(),c("div",R,[(d(!0),c(k,null,$(T(V),o=>(d(),c("div",{class:"date__day--point",key:o,onClick:_=>a.value=`${a.value}${f(o)}`},b(o),9,W))),128))]))]))}},ee=C("h1",null,"Добавить позицию",-1),ie={__name:"AcceptView",setup(G){const w=N(()=>A().organizations),u=i(""),g=N(()=>U().categories),m=i(""),V=i(""),a=i(""),f=i(""),s=i(!1),r=i("2000-01-01"),o=i(!1),_=i(!1);h(s,l=>{l?r.value="20000-01-01":r.value="2000-01-01"});async function B(){o.value=!0,_.value=!1;try{if(await L(),await M(),await H()){let e={category:V.value,name:a.value,count:f.value,dateLife:r.value};await x().postBox(e),await D().postHistoryAccept(e,u.value)}m.value="",a.value="",f.value="",s.value=!1,r.value="2000-01-01"}catch{_.value=!0}o.value=!1}async function L(){if(!w.value.find(e=>e.name.toLowerCase()===u.value.toLowerCase()))try{await A().postOrganization(u.value),L()}catch{throw"Ошибка добавления организации"}}async function M(){let l=g.value.find(e=>e.name.toLowerCase()===m.value.toLowerCase());if(l)V.value=l.id;else try{await U().postCategory(m.value),M()}catch{throw"Ошибка добавления категории"}}async function H(){let l=await x().getBoxFilt(a.value,r.value);return l[0]?(console.log(l[0]),await x().editBoxCount(l[0],+l[0].count+ +f.value),await D().postHistoryAccept(l[0],u.value),!1):!0}return(l,e)=>{const O=S("router-link"),F=S("GModal");return d(),c(k,null,[C("form",{class:"accept",onSubmit:e[8]||(e[8]=X(t=>B(),["prevent"]))},[n(O,{to:{name:"Home"}},{default:v(()=>[ee]),_:1}),n(y,{modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=t=>u.value=t),modelModifiers:{trim:!0}},{default:v(()=>[p("Откуда")]),_:1},8,["modelValue"]),n(z,{list:w.value,tab:u.value,onTabList:e[1]||(e[1]=t=>u.value=t[0])},null,8,["list","tab"]),n(y,{modelValue:a.value,"onUpdate:modelValue":e[2]||(e[2]=t=>a.value=t),modelModifiers:{trim:!0}},{default:v(()=>[p("Название")]),_:1},8,["modelValue"]),n(y,{modelValue:m.value,"onUpdate:modelValue":e[3]||(e[3]=t=>m.value=t),modelModifiers:{trim:!0}},{default:v(()=>[p("Категория")]),_:1},8,["modelValue"]),n(z,{list:g.value,tab:m.value,onTabList:e[4]||(e[4]=t=>m.value=t[0])},null,8,["list","tab"]),n(y,{modelValue:f.value,"onUpdate:modelValue":e[5]||(e[5]=t=>f.value=t),modelModifiers:{trim:!0,number:!0},type:"number"},{default:v(()=>[p("Количество")]),_:1},8,["modelValue"]),n(j,{modelValue:s.value,"onUpdate:modelValue":e[6]||(e[6]=t=>s.value=t),modelModifiers:{trim:!0}},{default:v(()=>[p("Имеет срок годности")]),_:1},8,["modelValue"]),s.value?(d(),E(y,{key:0,modelValue:r.value,"onUpdate:modelValue":e[7]||(e[7]=t=>r.value=t),type:"date"},{default:v(()=>[p(" Срок годности ")]),_:1},8,["modelValue"])):I("",!0),n(Z,{disabled:o.value,error:_.value},{default:v(()=>[p("Добавить")]),_:1},8,["disabled","error"])],32),n(F,{open:r.value.length!==10,onClose:e[10]||(e[10]=t=>s.value=!1)},{default:v(()=>[n(Y,{onGetDate:e[9]||(e[9]=t=>r.value=t)})]),_:1},8,["open"])],64)}}};export{ie as default};
