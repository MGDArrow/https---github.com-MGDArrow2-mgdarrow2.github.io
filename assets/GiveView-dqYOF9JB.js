import{c,e as n,w as M,f as $,a as x,g as r,h as v,b as d,m as i,t as g,G as H,l as I,o as y}from"./index-SP2z9WD4.js";import{_ as w,a as T}from"./VButton-3enoblqL.js";import{_ as N}from"./VList-X4Vqv6aF.js";import{u as C}from"./boxes-ZcsXpuKf.js";import{u as B}from"./givers-75ZRG54n.js";import{u as U}from"./history-biYwz7md.js";const D=d("h1",null,"Отдать позицию",-1),j={key:0,class:"give__info"},O={__name:"GiveView",setup(E){const b=c(()=>B().givers),o=n(""),m=c(()=>C().boxes),s=n(""),_=n(""),l=c(()=>m.value.find(t=>t.id===_.value)),u=n(""),f=n(!1),p=n(!1);M(u,t=>{var e;t>=+((e=l.value)==null?void 0:e.count)&&(u.value=+l.value.count)});function L(t){s.value=t[0],_.value=t[1]}async function G(){f.value=!0,p.value=!1;try{if(!m.value.find(e=>e.name.toLowerCase()===s.value.toLowerCase()))return;await V(),await C().editBoxCount(l.value,+l.value.count-+u.value),await U().postHistoryGive(l.value,+u.value,o.value),o.value="",s.value="",u.value=""}catch{p.value=!0}f.value=!1}async function V(){if(!b.value.find(e=>e.name.toLowerCase()===o.value.toLowerCase()))try{await B().postGiver(o.value),V()}catch{throw"Ошибка добавления получателя"}}function k(t){return t==="2000-01-01"?"∞":t.split("-").reverse().join("-")}return(t,e)=>{const S=$("router-link");return y(),x("form",{class:"give",onSubmit:e[5]||(e[5]=I(a=>G(),["prevent"]))},[r(S,{to:{name:"Home"}},{default:v(()=>[D]),_:1}),r(w,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=a=>o.value=a),modelModifiers:{trim:!0}},{default:v(()=>[i("Куда")]),_:1},8,["modelValue"]),r(N,{list:b.value,tab:o.value,onTabList:e[1]||(e[1]=a=>o.value=a[0])},null,8,["list","tab"]),r(w,{modelValue:s.value,"onUpdate:modelValue":e[2]||(e[2]=a=>s.value=a),modelModifiers:{trim:!0}},{default:v(()=>[i("Название")]),_:1},8,["modelValue"]),r(N,{list:m.value,tab:s.value,onTabList:e[3]||(e[3]=a=>L(a))},null,8,["list","tab"]),l.value?(y(),x("div",j,[d("div",null,[i(" Срок годности: "),d("span",null,g(k(l.value.dateLife)),1)]),d("div",null,[i(" Количетсво: "),d("span",null,g(l.value.count),1)])])):H("",!0),r(w,{modelValue:u.value,"onUpdate:modelValue":e[4]||(e[4]=a=>u.value=a),modelModifiers:{trim:!0,number:!0},type:"number"},{default:v(()=>[i("Количество")]),_:1},8,["modelValue"]),r(T,{disabled:f.value,error:p.value},{default:v(()=>[i("Отдать")]),_:1},8,["disabled","error"])],32)}}};export{O as default};
