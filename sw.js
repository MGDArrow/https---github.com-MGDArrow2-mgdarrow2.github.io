if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const t=s=>i(s,n),o={module:{uri:n},exports:u,require:t};e[n]=Promise.all(l.map((s=>o[s]||t(s)))).then((s=>(r(...s),u)))}}define(["./workbox-7cfec069"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/AcceptView-2DnIxNHV.js",revision:null},{url:"assets/AcceptView-gU7M6aF4.css",revision:null},{url:"assets/AuthLogin-x0iMJ42x.js",revision:null},{url:"assets/AuthRegistration-udZA50mb.js",revision:null},{url:"assets/boxes-sp224Z4Y.js",revision:null},{url:"assets/browser-Q6OzlgWg.js",revision:null},{url:"assets/categories-rfuz-_Hf.js",revision:null},{url:"assets/givers-FRYpSz3-.js",revision:null},{url:"assets/GiversView-TEWIyYwt.js",revision:null},{url:"assets/GiveView-0lPWcJJP.css",revision:null},{url:"assets/GiveView-SmAXVsAo.js",revision:null},{url:"assets/history-Zpod3fHF.js",revision:null},{url:"assets/HistoryView-hXqhzFHT.js",revision:null},{url:"assets/HistoryView-Wghn7EZM.css",revision:null},{url:"assets/HomeView-ItuAAK4W.css",revision:null},{url:"assets/HomeView-OmxGg823.js",revision:null},{url:"assets/index-Bwb__tTT.css",revision:null},{url:"assets/index-F1vNAxrB.js",revision:null},{url:"assets/index-j01HK2U5.js",revision:null},{url:"assets/index-YlTY7-5I.css",revision:null},{url:"assets/LayoutAuth-3afaQQTA.js",revision:null},{url:"assets/LayoutAuth-SSmkm-CT.css",revision:null},{url:"assets/LayoutBasic--rgAL4tu.js",revision:null},{url:"assets/organizations-w_PCBs0P.js",revision:null},{url:"assets/OrganizationsView-aOkre3MR.js",revision:null},{url:"assets/StorageView-BWXvHZLD.css",revision:null},{url:"assets/StorageView-EsRKhkP6.js",revision:null},{url:"assets/VButton-1nmV7sdu.css",revision:null},{url:"assets/VButton-PW1qBemq.js",revision:null},{url:"assets/VCheck-av9r10Oq.js",revision:null},{url:"assets/VCheck-dfN_vjqP.css",revision:null},{url:"assets/VList-7FpcO2oJ.js",revision:null},{url:"assets/VList-wBfi4h2A.css",revision:null},{url:"assets/СategoriesView-RZub-SoZ.css",revision:null},{url:"assets/СategoriesView-uZN06TZY.js",revision:null},{url:"index.html",revision:"d8aa98689b42dc8dfc61b31961f5b395"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"android-chrome-192x192.png",revision:"1363456b0df1b29ad4d9471a13353e58"},{url:"android-chrome-512x512.png",revision:"6722bf5828fea6bcf598bb6d5efe87f1"},{url:"manifest.webmanifest",revision:"9a96e59d590aeea3e84d0c6f46a006ea"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
