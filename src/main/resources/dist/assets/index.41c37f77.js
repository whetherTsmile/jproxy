import{u as E,q as F,i as B,j as N}from"./index.e8474039.js";/* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css              */import{d as T,a as A,r as b,aI as w,A as G,B as j,aF as e,aE as t,E as z,aK as $,aL as I,u as P,aQ as K,b2 as H,aX as Z,aY as D,bC as O,bB as Y,bw as M,by as X,a$ as x,b1 as J}from"./arco.f2670ebc.js";import{u as Q}from"./loading.e9d2a33f.js";import"./vue.758b0c86.js";const W={class:"container"},ee={class:"actions"},ce=T({__name:"index",setup(ae){const{t:L}=E(),S=A(),{loading:q,setLoading:k}=Q(),h=["af-ZA","ar-AE","ar-SA","be-BY","bg-BG","bn-BD","ca-ES","ch-GU","cn-CN","cs-CZ","cy-GB","da-DK","de-AT","de-CH","de-DE","el-GR","en-AU","en-CA","en-GB","en-IE","en-NZ","en-US","eo-EO","es-ES","es-MX","et-EE","eu-ES","fa-IR","fi-FI","fr-CA","fr-FR","ga-IE","gd-GB","gl-ES","he-IL","hi-IN","hr-HR","hu-HU","id-ID","it-IT","ja-JP","ka-GE","kk-KZ","kn-IN","ko-KR","ky-KG","lt-LT","lv-LV","ml-IN","mr-IN","ms-MY","ms-SG","nb-NO","nl-BE","nl-NL","no-NO","pa-IN","pl-PL","pt-BR","pt-PT","ro-RO","ru-RU","si-LK","sk-SK","sl-SI","sq-AL","sr-RS","sv-SE","ta-IN","te-IN","th-TH","tl-PH","tr-TR","uk-UA","vi-VN","zh-CN","zh-HK","zh-SG","zh-TW","zu-ZA"],r=b({sonarrUrl:"",sonarrApikey:"",sonarrIndexerFormat:"",sonarrLanguage1:"",sonarrLanguage2:"",radarrUrl:"",radarrApikey:"",radarrIndexerFormat:"",jackettUrl:"",prowlarrUrl:"",qbittorrentUrl:"",qbittorrentUsername:"",qbittorrentPassword:"",transmissionUrl:"",tmdbUrl:"",tmdbApikey:"",cleanTitleRegex:"",ruleSyncAuthors:[]}),d=b({sonarrUrl:"validating",sonarrApikey:"validating",sonarrIndexerFormat:"validating",radarrUrl:"validating",radarrApikey:"validating",radarrIndexerFormat:"validating",jackettUrl:"validating",prowlarrUrl:"validating",qbittorrentUrl:"validating",qbittorrentUsername:"validating",qbittorrentPassword:"validating",transmissionUrl:"validating",tmdbUrl:"validating",tmdbApikey:"validating",cleanTitleRegex:"validating"}),v=b({sonarrUrl:-1}),c=A(["ALL","LuckyPuppy514"]),g=async()=>{await F().then(a=>{a.data.forEach(l=>{v[l.key]=l.id,r[l.key]=void 0,d[l.key]=void 0,l.value&&(l.key==="ruleSyncAuthors"?r[l.key]=l.value?l.value.split(","):[]:r[l.key]=l.value,d[l.key]=l.validStatus===1?"success":"error")})}),await B().then(a=>{c.value=a.data,c.value.push("ALL")})},C=a=>{if(a)if(a[a.length-1]==="ALL")r.ruleSyncAuthors=["ALL"];else{const l=[];a.forEach(i=>{i!=="ALL"&&l.push(i)}),r.ruleSyncAuthors=l}},R=async()=>{k(!0);const a=[];let l=0;Object.keys(r).forEach(i=>{a[l]={id:v[i],key:i,value:r[i],validStatus:1},a[l].key==="ruleSyncAuthors"&&(a[l].value=a[l].value?a[l].value.map(String).join(","):""),l+=1}),await N(a).then(()=>{K.success(L("system.config.save.success")),g()}).finally(()=>{k(!1)})};return g(),(a,l)=>{const i=w("Breadcrumb"),u=w("icon-question-circle"),m=H,n=Z,s=D,y=O,p=Y,f=M,U=X,V=x,_=J;return G(),j("div",W,[e(i,{items:["menu.system","menu.system.config"]},null,8,["items"]),e(_,{ref_key:"systemConfigRef",ref:S,model:r,"label-col-props":{span:6},"wrapper-col-props":{span:18}},{default:t(()=>[e(U,{gutter:20},{default:t(()=>[e(f,{span:12},{default:t(()=>[e(p,{hoverable:"",class:"form-card",title:a.$t("system.config.sonarr")},{extra:t(()=>[e(m,{href:"https://kutt.lckp.top/80i41c",target:"_blank"},{default:t(()=>[e(u,{size:"large"})]),_:1})]),default:t(()=>[e(s,{class:"form-item",field:"sonarrUrl",label:a.$t("system.config.url"),"validate-status":d.sonarrUrl,feedback:""},{default:t(()=>[e(n,{modelValue:r.sonarrUrl,"onUpdate:modelValue":l[0]||(l[0]=o=>r.sonarrUrl=o),"allow-clear":"",placeholder:a.$t("system.config.url.placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label","validate-status"]),e(s,{class:"form-item",field:"sonarrApikey",label:a.$t("system.config.apikey"),"validate-status":d.sonarrApikey,feedback:""},{default:t(()=>[e(n,{modelValue:r.sonarrApikey,"onUpdate:modelValue":l[1]||(l[1]=o=>r.sonarrApikey=o),"allow-clear":"",type:"password",placeholder:a.$t("system.config.apikey.placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label","validate-status"]),e(s,{class:"form-item",field:"sonarrIndexerFormat",label:a.$t("system.config.indexerFormat"),"validate-status":d.sonarrIndexerFormat,feedback:""},{default:t(()=>[e(n,{modelValue:r.sonarrIndexerFormat,"onUpdate:modelValue":l[2]||(l[2]=o=>r.sonarrIndexerFormat=o),placeholder:a.$t("system.config.indexerFormat.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label","validate-status"]),e(s,{class:"form-item",field:"sonarrLanguage1",label:a.$t("system.config.language1")},{default:t(()=>[e(y,{modelValue:r.sonarrLanguage1,"onUpdate:modelValue":l[3]||(l[3]=o=>r.sonarrLanguage1=o),placeholder:a.$t("system.config.language1.placeholder"),options:h,"allow-search":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(s,{class:"form-item",field:"sonarrLanguage2",label:a.$t("system.config.language2")},{default:t(()=>[e(y,{modelValue:r.sonarrLanguage2,"onUpdate:modelValue":l[4]||(l[4]=o=>r.sonarrLanguage2=o),placeholder:a.$t("system.config.language2.placeholder"),options:h,"allow-search":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["title"]),e(p,{hoverable:"",class:"form-card",title:a.$t("system.config.indexer"),style:{padding:"0 0 52px 0"}},{extra:t(()=>[e(m,{href:"https://kutt.lckp.top/pVIb3w",target:"_blank"},{default:t(()=>[e(u,{size:"large"})]),_:1})]),default:t(()=>[e(s,{class:"form-item",field:"jackettUrl",label:a.$t("system.config.jackett"),"validate-status":d.jackettUrl,feedback:""},{default:t(()=>[e(n,{modelValue:r.jackettUrl,"onUpdate:modelValue":l[5]||(l[5]=o=>r.jackettUrl=o),"allow-clear":"",placeholder:a.$t("system.config.url.placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label","validate-status"]),e(s,{class:"form-item",field:"prowlarrUrl",label:a.$t("system.config.prowlarr"),"validate-status":d.prowlarrUrl,feedback:""},{default:t(()=>[e(n,{modelValue:r.prowlarrUrl,"onUpdate:modelValue":l[6]||(l[6]=o=>r.prowlarrUrl=o),"allow-clear":"",placeholder:a.$t("system.config.url.placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label","validate-status"])]),_:1},8,["title"])]),_:1}),e(f,{span:12},{default:t(()=>[e(p,{hoverable:"",class:"form-card",title:a.$t("system.config.radarr"),style:{padding:"0 0 103px 0"}},{extra:t(()=>[e(m,{href:"https://kutt.lckp.top/YR2UK2",target:"_blank"},{default:t(()=>[e(u,{size:"large"})]),_:1})]),default:t(()=>[e(s,{class:"form-item",field:"radarrUrl",label:a.$t("system.config.url"),"validate-status":d.radarrUrl,feedback:""},{default:t(()=>[e(n,{modelValue:r.radarrUrl,"onUpdate:modelValue":l[7]||(l[7]=o=>r.radarrUrl=o),"allow-clear":"",placeholder:a.$t("system.config.url.placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label","validate-status"]),e(s,{class:"form-item",field:"radarrApikey",label:a.$t("system.config.apikey"),"validate-status":d.radarrApikey,feedback:""},{default:t(()=>[e(n,{modelValue:r.radarrApikey,"onUpdate:modelValue":l[8]||(l[8]=o=>r.radarrApikey=o),"allow-clear":"",type:"password",placeholder:a.$t("system.config.apikey.placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label","validate-status"]),e(s,{class:"form-item",field:"radarrIndexerFormat",label:a.$t("system.config.indexerFormat"),"validate-status":d.radarrIndexerFormat,feedback:""},{default:t(()=>[e(n,{modelValue:r.radarrIndexerFormat,"onUpdate:modelValue":l[9]||(l[9]=o=>r.radarrIndexerFormat=o),"allow-clear":"",placeholder:a.$t("system.config.indexerFormat.placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label","validate-status"])]),_:1},8,["title"]),e(p,{hoverable:"",class:"form-card",title:a.$t("system.config.qbittorrent")},{extra:t(()=>[e(m,{href:"https://kutt.lckp.top/EGZxGR",target:"_blank"},{default:t(()=>[e(u,{size:"large"})]),_:1})]),default:t(()=>[e(s,{class:"form-item",field:"qbittorrentUrl",label:a.$t("system.config.url"),"validate-status":d.qbittorrentUrl,feedback:""},{default:t(()=>[e(n,{modelValue:r.qbittorrentUrl,"onUpdate:modelValue":l[10]||(l[10]=o=>r.qbittorrentUrl=o),"allow-clear":"",placeholder:a.$t("system.config.url.placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label","validate-status"]),e(s,{class:"form-item",field:"qbittorrentUsername",label:a.$t("system.config.username"),"validate-status":d.qbittorrentUsername,feedback:""},{default:t(()=>[e(n,{modelValue:r.qbittorrentUsername,"onUpdate:modelValue":l[11]||(l[11]=o=>r.qbittorrentUsername=o),"allow-clear":"",placeholder:a.$t("system.config.username.placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label","validate-status"]),e(s,{class:"form-item",field:"qbittorrentPassword",label:a.$t("system.config.password"),"validate-status":d.qbittorrentPassword,feedback:""},{default:t(()=>[e(n,{modelValue:r.qbittorrentPassword,"onUpdate:modelValue":l[12]||(l[12]=o=>r.qbittorrentPassword=o),type:"password","allow-clear":"",placeholder:a.$t("system.config.password.placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label","validate-status"])]),_:1},8,["title"])]),_:1})]),_:1}),e(U,{gutter:20},{default:t(()=>[e(f,{span:12},{default:t(()=>[e(p,{hoverable:"",class:"form-card",title:a.$t("system.config.tmdb")},{extra:t(()=>[e(m,{href:"https://kutt.lckp.top/5mekxe",target:"_blank"},{default:t(()=>[e(u,{size:"large"})]),_:1})]),default:t(()=>[e(s,{class:"form-item",field:"tmdbUrl",label:a.$t("system.config.url"),"validate-status":d.tmdbUrl,feedback:""},{default:t(()=>[e(n,{modelValue:r.tmdbUrl,"onUpdate:modelValue":l[13]||(l[13]=o=>r.tmdbUrl=o),"allow-clear":"",placeholder:a.$t("system.config.url.placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label","validate-status"]),e(s,{class:"form-item",field:"tmdbApikey",label:a.$t("system.config.apikey"),"validate-status":d.tmdbApikey,feedback:""},{default:t(()=>[e(n,{modelValue:r.tmdbApikey,"onUpdate:modelValue":l[14]||(l[14]=o=>r.tmdbApikey=o),"allow-clear":"",type:"password",placeholder:a.$t("system.config.apikey.placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label","validate-status"])]),_:1},8,["title"])]),_:1}),e(f,{span:12},{default:t(()=>[e(p,{hoverable:"",class:"form-card",title:a.$t("system.config.other")},{extra:t(()=>[e(m,{href:"https://kutt.lckp.top/BqV9HI",target:"_blank"},{default:t(()=>[e(u,{size:"large"})]),_:1})]),default:t(()=>[e(s,{class:"form-item",field:"cleanTitleRegex",label:a.$t("system.config.cleanTitleRegex"),"validate-status":d.cleanTitleRegex,feedback:""},{default:t(()=>[e(n,{modelValue:r.cleanTitleRegex,"onUpdate:modelValue":l[15]||(l[15]=o=>r.cleanTitleRegex=o),"allow-clear":"",placeholder:a.$t("system.config.cleanTitleRegex.placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label","validate-status"]),e(s,{class:"form-item",field:"ruleSyncAuthors",label:a.$t("system.config.ruleSyncAuthors")},{default:t(()=>[e(y,{modelValue:r.ruleSyncAuthors,"onUpdate:modelValue":l[16]||(l[16]=o=>r.ruleSyncAuthors=o),multiple:"","default-value":["ALL"],options:c.value,scrollbar:!0,placeholder:a.$t("system.config.ruleSyncAuthors.placeholder"),onChange:C},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1},8,["title"])]),_:1})]),_:1}),z("div",ee,[e(V,{onClick:g},{default:t(()=>[$(I(a.$t("system.config.reset")),1)]),_:1}),e(V,{type:"primary",loading:P(q),onClick:R},{default:t(()=>[$(I(a.$t("system.config.save")),1)]),_:1},8,["loading"])])]),_:1},8,["model"])])}}});export{ce as default};