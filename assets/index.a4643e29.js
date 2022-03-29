import{o as q,r as i,a as r,c as b,b as G,d as K,e as k,w as o,f as e,g as u,h as O,u as p,F as N,i as s,j as _,t as S,p as y,k as $,l as z,m as J,n as j,q as Q,s as R,v as X,x as Y,C as Z,y as ee,U as F,z as te,A as se,B as ae,D as oe}from"./vendor.869d5c25.js";const ne=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const d of a)if(d.type==="childList")for(const v of d.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&l(v)}).observe(document,{childList:!0,subtree:!0});function c(a){const d={};return a.integrity&&(d.integrity=a.integrity),a.referrerpolicy&&(d.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?d.credentials="include":a.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(a){if(a.ep)return;a.ep=!0;const d=c(a);fetch(a.href,d)}};ne();const ce={setup(t){function n(){const c=document.documentElement.clientWidth;document.documentElement.style.fontSize=`${c/1920}px`}return q(n),(c,l)=>{const a=i("RouterView");return r(),b(a)}}};var ie="/TestPage/images/logo.png";let P;function re(){return{canConnect:window.localStorage.getItem("canConnect")==="true"}}function L(t){window.localStorage.setItem("canConnect",String(t.canConnect))}const g=G({state(){const t=re(),n={account:"",canConnect:t.canConnect,hasProvider:!1};return L(n),n},mutations:{update(t,n){t.account=n.account,t.canConnect=n.canConnect,L(n)},updateProvider(t,n){t.hasProvider=n}}});async function le(){return P=await K(),g.commit("updateProvider",!!P),!!P}async function V(){return P?!0:await le()}async function M(){g.state.canConnect&&await D()}async function D(){if(!P&&!await V())return!1;const t=await P.request({method:"eth_requestAccounts"});return g.commit("update",{account:t[0],canConnect:!0}),!0}async function de(){g.commit("update",{account:"",canConnect:!1})}var h=(t,n)=>{const c=t.__vccOpts||t;for(const[l,a]of n)c[l]=a;return c};const A=t=>(y("data-v-4e94d930"),t=t(),$(),t),_e=A(()=>e("img",{src:ie,class:"logo"},null,-1)),ue={class:"nav"},pe={class:"end"},fe=_("language"),he=A(()=>e("br",null,null,-1)),me=A(()=>e("br",null,null,-1)),ve=_(" Click to disconnected. "),ge=_(" Connected "),be={key:1},ye=["disabled"],$e=k({setup(t){const n=[{name:"HOME",path:"/"},{name:"PUBLISH",path:"/publish"},{name:"COLLECTION",path:"/collection"},{name:"WIKI",path:"/wiki"},{name:"MARKET",path:"/market"}];function c(){D()}function l(){de()}return(a,d)=>{const v=i("router-link"),w=i("el-button"),f=i("el-tooltip"),I=i("el-header");return r(),b(I,{class:"header"},{default:o(()=>[_e,e("div",ue,[(r(!0),u(N,null,O(p(n),C=>(r(),b(v,{key:C.name,to:C.path},{default:o(()=>[_(S(C.name),1)]),_:2},1032,["to"]))),128))]),e("div",pe,[s(w,{type:"text",class:"lang-btn"},{default:o(()=>[fe]),_:1}),p(g).state.account?(r(),b(f,{key:0},{content:o(()=>[_(" Address: "+S(p(g).state.account)+" ",1),he,me,ve]),default:o(()=>[s(w,{type:"text",class:"connected-info",onClick:l},{default:o(()=>[ge]),_:1})]),_:1})):p(g).state.canConnect?(r(),u("span",be,"Connecting...")):(r(),u("button",{key:2,type:"primary",disabled:!p(g).state.hasProvider,class:"connect-btn",onClick:c}," CONNECT WALLET ",8,ye))])]),_:1})}}});var we=h($e,[["__scopeId","data-v-4e94d930"]]),ke="/TestPage/images/color-logo.png";const T=t=>(y("data-v-3d3b788c"),t=t(),$(),t),Pe=T(()=>e("section",{class:"item description"},[e("img",{src:ke,class:"logo"}),e("p",{class:"description-text"}," Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non nisi, placerat. ")],-1)),xe={class:"item navigation"},Ce=T(()=>e("h5",{class:"title"},"NAVIGATION",-1)),Te=T(()=>e("section",{class:"item resources"},[e("h5",{class:"title"},"RESOURCES"),e("a",null,"Conditions"),e("a",null,"Privacy Policy"),e("a",null,"People")],-1)),Ie=T(()=>e("section",{class:"item market"},[e("h5",{class:"title"},"MARKET"),e("a",null,"Easeshare-Markey"),e("a",null,"OpenSea")],-1)),Se={class:"email-container"},Ne=_("Send"),Ae=T(()=>e("p",{class:"right"}," \xA9 2020 Landify UI Kit. All rights reserved ",-1)),Ee=k({setup(t){const n=[{name:"Home",path:"/"},{name:"Publish",path:"/publish"},{name:"Collection",path:"/collection"},{name:"Wiki",path:"/wiki"}];let c=z("");return(l,a)=>{const d=i("router-link"),v=i("el-input"),w=i("el-button");return r(),u("footer",null,[Pe,e("section",xe,[Ce,(r(!0),u(N,null,O(p(n),f=>(r(),b(d,{key:f.name,to:f.path},{default:o(()=>[_(S(f.name),1)]),_:2},1032,["to"]))),128))]),Te,Ie,e("div",Se,[s(v,{modelValue:p(c),"onUpdate:modelValue":a[0]||(a[0]=f=>J(c)?c.value=f:c=f),placeholder:"info@sparklink.io"},null,8,["modelValue"]),s(w,{type:"warning",class:"send"},{default:o(()=>[Ne]),_:1})]),Ae])}}});var Fe=h(Ee,[["__scopeId","data-v-3d3b788c"]]);const W=t=>(y("data-v-9c4cc426"),t=t(),$(),t),Le=W(()=>e("section",{class:"background"},null,-1)),Me={class:"main"},Be={key:0,class:"notification"},Oe=W(()=>e("span",null,"This Site need MetaMask to be installed.",-1)),Re=[Oe],Ve=k({setup(t){return V(),M(),j(()=>M()),(n,c)=>{const l=i("RouterView"),a=i("el-container");return r(),b(a,{direction:"vertical"},{default:o(()=>[Le,s(we),e("main",Me,[p(g).state.hasProvider?Q("",!0):(r(),u("div",Be,Re)),s(l)]),s(Fe)]),_:1})}}});var De=h(Ve,[["__scopeId","data-v-9c4cc426"]]),We="/TestPage/images/credit-card.png",Ue="/TestPage/images/file-new.png",He="/TestPage/images/cloud-up.png",qe="/TestPage/images/transfer.png";const Ge={},Ke={class:"how-to-start"},ze=R('<h1 class="title" data-v-4f4ef982>Simple to start</h1><h5 class="sub-title" data-v-4f4ef982>No need middlemen, publish and spread becomes in seconds.</h5><div class="card-container" data-v-4f4ef982><div class="card" data-v-4f4ef982><img src="'+We+'" class="head" data-v-4f4ef982><div class="title-container" data-v-4f4ef982><h5 class="title" data-v-4f4ef982> Set up your wallet </h5></div><p class="info" data-v-4f4ef982> Connect the crypto wallet to start </p></div><div class="card" data-v-4f4ef982><img src="'+Ue+'" class="head" data-v-4f4ef982><div class="title-container" data-v-4f4ef982><h5 class="title" data-v-4f4ef982> Publish your content </h5></div><p class="info" data-v-4f4ef982> Upload your work(image, video, </p><p class="info" data-v-4f4ef982> audio, or 3Dart) </p></div><div class="card" data-v-4f4ef982><img src="'+He+'" class="head" data-v-4f4ef982><div class="title-container" data-v-4f4ef982><h5 class="title" data-v-4f4ef982> Generate share </h5><h5 class="title" data-v-4f4ef982> posters or links </h5></div><p class="info" data-v-4f4ef982> Generate exclusive sharing posters </p><p class="info" data-v-4f4ef982> and links of NFT works, share and </p><p class="info" data-v-4f4ef982> sell freely </p></div><div class="card" data-v-4f4ef982><img src="'+qe+'" class="head" data-v-4f4ef982><div class="title-container" data-v-4f4ef982><h5 class="title" data-v-4f4ef982> Distribute works to </h5><h5 class="title" data-v-4f4ef982> obtain revenue </h5></div><p class="info" data-v-4f4ef982> Creators get royalties and node income </p><p class="info" data-v-4f4ef982> permanently by selling the subordinate </p><p class="info" data-v-4f4ef982> nodes of their own works, sharers get </p><p class="info" data-v-4f4ef982> the income permanently by selling the </p><p class="info" data-v-4f4ef982> subordinate nodes of their bought. </p></div></div>',3),Je=[ze];function je(t,n){return r(),u("section",Ke,Je)}var Qe=h(Ge,[["render",je],["__scopeId","data-v-4f4ef982"]]),Xe="/TestPage/images/file.png",Ye="/TestPage/images/edit-pencil-line.png",Ze="/TestPage/images/book-open.png",et="/TestPage/images/leaf.png",tt="/TestPage/images/command.png",st="/TestPage/images/building.png",at="/TestPage/images/head-phones.png",ot="/TestPage/images/camera.png",nt="/TestPage/images/alt.png";const ct={},U=t=>(y("data-v-0c245fbc"),t=t(),$(),t),it={class:"freely-publish"},rt=U(()=>e("div",{class:"description"},[e("h1",{class:"title"}," Freely publish what you love "),e("p",{class:"text",style:{"margin-bottom":"16rem"}}," No restrictions on the format and content of the publication, "),e("p",{class:"text"}," everything is stored permanently distributed in NFT. "),e("button",{class:"start-to-publish"}," Start to publish ")],-1)),lt=U(()=>e("div",{class:"types"},[e("div",{class:"row"},[e("div",{class:"item"},[e("img",{src:Xe,class:"head"}),e("p",{class:"info"}," Art Works ")]),e("div",{class:"item"},[e("img",{src:Ye,class:"head"}),e("p",{class:"info"}," Illustration ")]),e("div",{class:"item"},[e("img",{src:Ze,class:"head"}),e("p",{class:"info"}," Books ")])]),e("div",{class:"row"},[e("div",{class:"item"},[e("img",{src:et,class:"head"}),e("p",{class:"info"}," Nature ")]),e("div",{class:"item"},[e("img",{src:tt,class:"head"}),e("p",{class:"info"}," 3D Art ")]),e("div",{class:"item"},[e("img",{src:st,class:"head"}),e("p",{class:"info"}," 3D Modeling ")])]),e("div",{class:"row"},[e("div",{class:"item"},[e("img",{src:at,class:"head"}),e("p",{class:"info"}," Music ")]),e("div",{class:"item"},[e("img",{src:ot,class:"head"}),e("p",{class:"info"}," Discovery ")]),e("div",{class:"item"},[e("img",{src:nt,class:"head"}),e("p",{class:"info"}," Animation ")])])],-1));function dt(t,n){const c=i("el-col"),l=i("el-row");return r(),u("section",it,[s(l,null,{default:o(()=>[s(c,{span:12},{default:o(()=>[rt]),_:1}),s(c,{span:12},{default:o(()=>[lt]),_:1})]),_:1})])}var _t=h(ct,[["render",dt],["__scopeId","data-v-0c245fbc"]]),ut="/TestPage/images/nodes.png";const pt={},ft={class:"differences"},ht=R('<img src="'+ut+'" class="nodes" data-v-6df6ab61><div class="web3" data-v-6df6ab61><h1 class="title" data-v-6df6ab61> Pure Web3 creator economy, </h1><h1 class="title" style="margin-bottom:56rem;margin-top:34rem;" data-v-6df6ab61> We are So different from others </h1><p class="text" data-v-6df6ab61> unique tree-shaped sharing economy structure </p><p class="text" data-v-6df6ab61> allows everyone to share and sell node NFT </p></div>',2),mt=[ht];function vt(t,n){return r(),u("section",ft,mt)}var gt=h(pt,[["render",vt],["__scopeId","data-v-6df6ab61"]]);const x=t=>(y("data-v-3b8f9880"),t=t(),$(),t),bt={id:"main-block"},yt=x(()=>e("h2",{class:"main-text"},"Publishing and distribution,",-1)),$t=x(()=>e("h2",{class:"main-text"},"are redefined by us.",-1)),wt=x(()=>e("p",{class:"sub-text"},"Publish your love, share your love, spread your love",-1)),kt=x(()=>e("p",{class:"sub-text"},"link all creators and sharers together,that is what we doing.",-1)),Pt=_("Publish"),xt=x(()=>e("br",null,null,-1)),Ct=x(()=>e("a",{id:"learn-more-btn"},"Learn more",-1)),Tt=k({setup(t){const n=X();function c(){n.push("/publish")}return(l,a)=>{const d=i("el-button");return r(),u(N,null,[e("section",bt,[yt,$t,wt,kt,s(d,{id:"publish-btn",type:"primary",onClick:c},{default:o(()=>[Pt]),_:1}),xt,Ct]),s(Qe),s(_t),s(gt)],64)}}});var It=h(Tt,[["__scopeId","data-v-3b8f9880"]]);const B=k({setup(t){return(n,c)=>(r(),b(It))}});const St={},Nt=t=>(y("data-v-61f05d02"),t=t(),$(),t),At={class:"container"},Et=Nt(()=>e("div",{class:"vertical-line"},null,-1)),Ft={class:"title"};function Lt(t,n){return r(),u("div",At,[Et,e("h1",Ft,[Y(t.$slots,"default",{},void 0,!0)])])}var Mt=h(St,[["render",Lt],["__scopeId","data-v-61f05d02"]]);const m=t=>(y("data-v-411210ae"),t=t(),$(),t),Bt=m(()=>e("p",{class:"description"}," When your item is shared and profited by others,what percentage of the profits you want from the share of the profits. ",-1)),Ot=m(()=>e("p",{class:"description"}," Please select the payment currency of your support (enter token symbol or address). ",-1)),Rt=m(()=>e("p",{class:"description"}," How many times do you want each user to help you spread? ",-1)),Vt=_("Allow secondary creation "),Dt=_("Allow commercial use"),Wt=_("First-class nodes are allowed to be cast free of charge "),Ut={class:"switch-wrapper"},Ht=m(()=>e("span",{class:"description"}," Choose open source release by default, users can download and view the content of the work regardless of whether the work is purchased or not. ",-1)),qt=m(()=>e("p",{class:"description"}," Please describe your work in simple words. Accurate and effective description can help other users to understand your work more accurately. ",-1)),Gt=m(()=>e("p",{class:"description"}," Please upload your cover image in the area below. Cover files support these formats: JPEG/JPG/PNG. ",-1)),Kt=m(()=>e("div",{class:"el-upload__text"},[_(" Drop file here or "),e("em",null,"click to upload")],-1)),zt=m(()=>e("p",{class:"description"}," Please upload your work file in the area below. ",-1)),Jt=m(()=>e("div",{class:"el-upload__text"},[_(" Drop file here or "),e("em",null,"click to upload")],-1)),jt=m(()=>e("div",{class:"el-upload__tip"}," Multiple file upload is supported,and multiple types of files are supported. ",-1)),Qt=m(()=>e("div",{class:"divider-line"},null,-1)),Xt={class:"btn-area"},Yt=_("Publish"),Zt=k({setup(t){return(n,c)=>{const l=i("el-input"),a=i("el-form-item"),d=i("el-checkbox"),v=i("el-switch"),w=i("el-icon"),f=i("el-upload"),I=i("el-button"),C=i("el-form"),H=i("el-card");return r(),b(H,null,{default:o(()=>[s(C,{"label-position":"top",class:"form"},{default:o(()=>[s(a,{label:"Item name",class:"single-label"},{default:o(()=>[s(l,{name:"itemName"})]),_:1}),s(a,{label:"Percentage of earnings"},{default:o(()=>[Bt,s(l,{name:"percentageOfEarnings"})]),_:1}),s(a,{label:"Payment currency"},{default:o(()=>[Ot,s(l,{name:"paymentCurrency"})]),_:1}),s(a,{label:"Selling price",class:"single-label"},{default:o(()=>[s(l,{name:"sellingPrice"})]),_:1}),s(a,{label:"Maximum number of shares"},{default:o(()=>[Rt,s(l,{name:"maximum number of shares",placeholder:"Up to 65535"})]),_:1}),s(a,{label:"Work authority",class:"single-label"},{default:o(()=>[s(d,{border:"",class:"checkbox"},{default:o(()=>[Vt]),_:1}),s(d,{border:"",class:"checkbox"},{default:o(()=>[Dt]),_:1}),s(d,{border:"",class:"checkbox"},{default:o(()=>[Wt]),_:1})]),_:1}),s(a,{label:"Encrypt publish",class:"single-label"},{default:o(()=>[e("div",Ut,[s(v,{"active-icon":p(Z),"inactive-icon":p(ee)},null,8,["active-icon","inactive-icon"]),Ht])]),_:1}),s(a,{label:"Item description"},{default:o(()=>[qt,s(l,{type:"textarea",autosize:"",name:"itemDescription"})]),_:1}),s(a,{label:"Cover picture"},{default:o(()=>[Gt,s(f,{drag:"",multiple:""},{default:o(()=>[s(w,{class:"el-icon--upload"},{default:o(()=>[s(p(F))]),_:1}),Kt]),_:1})]),_:1}),s(a,{label:"Item file"},{default:o(()=>[zt,s(f,{class:"upload-demo",drag:"",multiple:""},{tip:o(()=>[jt]),default:o(()=>[s(w,{class:"el-icon--upload"},{default:o(()=>[s(p(F))]),_:1}),Jt]),_:1})]),_:1}),Qt,e("div",Xt,[s(I,{type:"primary"},{default:o(()=>[Yt]),_:1})])]),_:1})]),_:1})}}});var es=h(Zt,[["__scopeId","data-v-411210ae"]]);const E=t=>(y("data-v-2aa8ea38"),t=t(),$(),t),ts={class:"form-container"},ss=E(()=>e("div",{class:"divider"},null,-1)),as=_("Publish Art"),os=E(()=>e("div",{class:"divider"},null,-1)),ns=E(()=>e("div",{class:"divider"},null,-1)),cs=k({setup(t){return(n,c)=>(r(),u("div",ts,[ss,s(Mt,null,{default:o(()=>[as]),_:1}),os,s(es),ns]))}});var is=h(cs,[["__scopeId","data-v-2aa8ea38"]]);const rs={},ls={class:"collection-container"};function ds(t,n){return r(),u("div",ls)}var _s=h(rs,[["render",ds],["__scopeId","data-v-7f59f07c"]]);const us=[{path:"/",component:De,children:[{path:"",component:B},{path:"publish",component:is},{path:"collection",component:_s},{path:"wiki",component:B,beforeEnter(){return window.location.replace("https://docs.sparklink.io/"),!1}}]}],ps=te({history:se(),routes:us});ae(ce).use(ps).use(oe).mount("#app");
