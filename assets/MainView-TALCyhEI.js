import{r,o as T,a as s,c as o,b as t,d as $,t as g,F as I,n as P,e as v,w,g as N,f as S,h as z,i as C,u as M,j as D}from"./index-_dT4aS4x.js";import{M as j,_ as B,a as V}from"./navComponent-477cz-uU.js";const W={class:"rounded-circle story m-1 flex-shrink-0 p-1"},F=["src"],R={__name:"storyComponent",props:{ownerItem:Object},setup(f){const y=f,i=r(null),u=function(){if(i.value.getContext){const a=i.value.getContext("2d");a.beginPath();var d=a.createLinearGradient(0,0,175,0);d.addColorStop(0,"red"),d.addColorStop(.5,"yellow"),a.arc(39,39,36,0,2*Math.PI,!0),y.ownerItem.isWatched?a.fillStyle="rgb(224,224,224)":a.fillStyle=d,a.fill(),a.beginPath(),a.arc(39,39,34,0,2*Math.PI,!0),a.fillStyle="white",a.fill()}};return T(()=>{u()}),(d,a)=>(s(),o("div",null,[t("canvas",{width:"78",height:"78",ref_key:"canvas",ref:i,class:"position-absolute"},null,512),t("div",W,[t("img",{src:f.ownerItem.storyOwnerPic,alt:""},null,8,F)])]))}},A={class:"card-header bg-body px-1 d-flex align-items-center px-2 px-md-0"},E={class:"rounded-circle user-pic"},G=["src"],q={class:"ms-2 fw-bold"},H=["id"],J={key:0,class:"carousel-indicators"},K=["data-bs-target","data-bs-slide-to","aria-current","aria-label"],Q=["src"],U=["data-bs-target"],X=t("span",{class:"carousel-control-prev-icon","aria-hidden":"true"},null,-1),Y=t("span",{class:"visually-hidden"},"Previous",-1),Z=[X,Y],tt=["data-bs-target"],et=t("span",{class:"carousel-control-next-icon","aria-hidden":"true"},null,-1),st=t("span",{class:"visually-hidden"},"Next",-1),ot=[et,st],at={class:"card-body px-md-0 py-1 mb-3"},nt={href:""},lt=["onClick"],rt=["onClick"],it={class:"card-text mb-2"},ct={class:"card-text d-inline fw-bold"},dt={key:0,class:"card-text ms-2 d-inline"},ut={key:2,class:"card-text ms-2 d-inline"},_t={__name:"postComponent",setup(f){const{proxy:y}=N(),i=r([]);y.$axios({url:"/getPost",method:"post"},{userId:"123"}).then(a=>{i.value=a.data.dataList});const u=r(!1),d=function(){u.value=!0};return(a,b)=>(s(!0),o(I,null,$(i.value,e=>(s(),o("div",{class:"card mt-3 post-card w-100 border-0",key:e.postId},[t("div",A,[t("div",E,[t("img",{src:e.postOwnerPic,alt:""},null,8,G)]),t("div",q,g(e.postOwnerName),1)]),t("div",{id:"post"+e.postId,class:"carousel slide post-pic-area position-relative"},[e.imgs.length>1?(s(),o("div",J,[(s(!0),o(I,null,$(e.imgs.length,(m,n)=>(s(),o("div",{key:n},[t("button",{class:P({active:n===0}),type:"button","data-bs-target":"#post"+e.postId,"data-bs-slide-to":n,"aria-current":n===1,"aria-label":"Slide"+n},null,10,K)]))),128))])):v("",!0),t("div",{class:"carousel-inner position-relative",ref_for:!0,ref:"postImg"},[(s(!0),o(I,null,$(e.imgs,(m,n)=>(s(),o("div",{class:P(["carousel-item",{active:n===0}]),key:n},[t("img",{src:m,class:"d-block w-100",alt:"..."},null,8,Q)],2))),128))],512),e.imgs.length>1?(s(),o("button",{key:1,class:"carousel-control-prev",type:"button","data-bs-target":"#post"+e.postId,"data-bs-slide":"prev"},Z,8,U)):v("",!0),e.imgs.length>1?(s(),o("button",{key:2,class:"carousel-control-next",type:"button","data-bs-target":"#post"+e.postId,"data-bs-slide":"next"},ot,8,tt)):v("",!0)],8,H),t("div",at,[t("a",nt,[e.isThumb?v("",!0):(s(),o("i",{key:0,class:"bi bi-heart icon-size text-danger",onClick:w(m=>e.isThumb=!0,["prevent"])},null,8,lt)),e.isThumb?(s(),o("i",{key:1,class:"bi bi-heart-fill icon-size text-danger",onClick:w(m=>e.isThumb=!1,["prevent"])},null,8,rt)):v("",!0)]),t("p",it,g(e.thumbNum)+"個讚",1),t("div",null,[t("span",ct,g(e.postOwnerName),1),u.value?v("",!0):(s(),o("div",dt,g(e.description.slice(0,20))+"...",1)),u.value?v("",!0):(s(),o("a",{key:1,class:"text-decoration-none text-secondary fs-6",onClick:d,href:"#"}," 更多 ")),u.value?(s(),o("div",ut,g(e.description),1)):v("",!0)])])]))),128))}},mt={class:"modal-dialog modal-fullscreen-sm-down"},ht={class:"modal-content bg-transparent b-0"},vt={class:"progress",style:{height:"2px"}},pt={class:"d-flex mt-2 justify-content-between align-items-center"},yt=t("div",{class:"rounded-circle user-pic"},[t("img",{src:B,alt:""})],-1),bt={class:"text-light flex-grow-1 text-start ps-2"},ft={class:"rounded story-pic-area"},gt=["src"],wt={__name:"storyModalComponent",props:{storyOwnerId:String},setup(f,{expose:y}){const i=r(null),u=r(null),d=r(0);let a;const b=function(){d.value=0,i.value.show();const l=new Date;a=setInterval(()=>{const c=new Date,_=k.value[0].duration;c-l>=_&&m();const L=Math.round((c-l)/_*100);d.value=L},100)},e=S(()=>({width:d.value+"%"})),m=function(){a&&clearInterval(a),i.value.hide()};y({showModal:b}),T(()=>{i.value=new j(u.value)});const n=f,{proxy:h}=N(),x=r([]);h.$axios({url:"/getStories",method:"post"},{storyOwnerId:n.storyOwnerId}).then(l=>{x.value=l.data.dataList});const k=S(()=>x.value.filter(l=>l.storyOwnerId===n.storyOwnerId));return(l,c)=>(s(),o("div",{class:"modal fade custom-modal",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref_key:"storyModal",ref:u},[t("div",mt,[t("div",ht,[(s(!0),o(I,null,$(k.value,_=>(s(),o("div",{class:"modal-body text-end story-modal-body",key:_.storyId},[t("div",vt,[t("div",{class:"progress-bar",role:"progressbar","aria-valuenow":"0","aria-valuemin":"0","aria-valuemax":"100",style:z(e.value)},null,4)]),t("div",pt,[yt,t("div",bt,g(_.storyOwnerName),1),t("button",{type:"button",class:"btn-close btn-close-white position-relative","data-bs-dismiss":"modal","aria-label":"Close",onClick:w(m,["prevent"])})]),t("div",ft,[t("img",{src:_.img,class:"story-content-pic",alt:""},null,8,gt)])]))),128))])])],512))}},xt={class:"row mx-0"},$t={class:"col m-0 border-start min-vh-100"},It={class:"stories overflow-scroll w-md-75 mx-auto flex-nowrap mt-md-2 position-relative"},kt={class:"d-flex justify-content-start align-items-center"},Ct=t("i",{class:"bi bi-arrow-left-circle-fill icon-size text-light"},null,-1),Mt=[Ct],Ot=t("i",{class:"bi bi-arrow-right-circle-fill icon-size text-light"},null,-1),St=[Ot],Nt={class:"d-flex flex-column justify-content-center align-items-center mb-5"},p=3,O=78,Tt={__name:"MainView",setup(f){const{proxy:y}=N(),i=r([]);y.$axios({url:"/getStoryOwner",method:"post"},{userId:"123"}).then(l=>{i.value=l.data.dataList});const u=r(null);let d=r("");const a=function(l){d.value=l.storyOwnerId,u.value.showModal()};let b=r(0),e=r(!1),m=r(!0),n=1,h=7;const x=function(l){const c=i.value.length;c-h<p&&l===-1?(b.value+=l*(c-h)*O,n+=c-h,h+=c-h):n-p<0&&l===1?(b.value+=l*(p-n)*O,h+=n-p,n+=n-p):(b.value+=l*p*O,n+=l*-p,h+=l*-p),e=r(n!==1),m=r(h<c)},k=S(()=>({transform:`translate(${b.value}px)`}));return(l,c)=>(s(),o("div",xt,[C(V),t("main",$t,[t("div",It,[t("div",kt,[(s(!0),o(I,null,$(i.value,_=>(s(),D(R,{onClick:w(L=>a(_),["prevent"]),key:_.storyOwnerId,ownerItem:_,style:z(k.value)},null,8,["onClick","ownerItem","style"]))),128))]),M(e)?(s(),o("button",{key:0,type:"button",class:"position-absolute top-50 start-0 translate-middle-y btn",onClick:c[0]||(c[0]=w(_=>x(1),["prevent"]))},Mt)):v("",!0),M(m)?(s(),o("button",{key:1,type:"button",class:"position-absolute top-50 end-0 translate-middle-y btn",onClick:c[1]||(c[1]=w(_=>x(-1),["prevent"]))},St)):v("",!0)]),C(wt,{ref_key:"storyModal",ref:u,storyOwnerId:M(d)},null,8,["storyOwnerId"]),t("div",Nt,[C(_t)])])]))}};export{Tt as default};