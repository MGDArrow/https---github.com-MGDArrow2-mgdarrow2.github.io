import{_ as B,a as y}from"./VButton-PW1qBemq.js";import{u as r}from"./organizations-w_PCBs0P.js";import{c as M,e as d,f as u,a as _,b as c,g as v,h as s,F as S,r as E,o as a,m,i as p,t as I}from"./index-F1vNAxrB.js";const L={class:"сategories"},N={class:"title"},b={class:"height__body"},F={class:"сategories__item"},R={key:0},D={key:1},q={__name:"OrganizationsView",setup(H){const k=M(()=>r().organizations),i=d(!1),n=d(""),g=d(""),l=d(!1);function C(o){i.value=!0,l.value=!0,n.value=o.name,g.value=o.id}function f(){i.value=!1,l.value=!1,n.value=""}async function $(o){await r().postOrganization(o),f()}async function w(){await r().updateOrganization(n.value,g.value),f()}async function V(o){await r().deleteOrganization(o)}return(o,e)=>{const h=u("router-link"),z=u("GIcon"),G=u("GSwiper"),O=u("GModal");return a(),_("div",L,[c("div",N,[v(h,{to:{name:"Home"},class:"title__h1"},{default:s(()=>[m(" Организации ")]),_:1}),c("div",{class:"title__add",onClick:e[0]||(e[0]=t=>i.value=!0)},[v(z,{name:"add"})])]),c("div",b,[(a(!0),_(S,null,E(k.value,t=>(a(),p(G,{key:t.id,onRight:x=>V(t.id),onLeft:x=>C(t)},{default:s(()=>[c("div",F,I(t.name),1)]),_:2},1032,["onRight","onLeft"]))),128)),v(O,{open:i.value,onClose:e[4]||(e[4]=t=>f())},{default:s(()=>[l.value?(a(),_("h2",D,"Изменить организацию")):(a(),_("h2",R,"Добавить организацию")),v(B,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=t=>n.value=t)},{default:s(()=>[m("Название организации")]),_:1},8,["modelValue"]),l.value?(a(),p(y,{key:3,onClick:e[3]||(e[3]=t=>w())},{default:s(()=>[m("Изменить")]),_:1})):(a(),p(y,{key:2,onClick:e[2]||(e[2]=t=>$(n.value))},{default:s(()=>[m("Добавить")]),_:1}))]),_:1},8,["open"])])])}}};export{q as default};
