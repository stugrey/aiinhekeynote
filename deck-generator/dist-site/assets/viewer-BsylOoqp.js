(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const qc={transparency:{short:"T",label:"Transparency"},distortion:{short:"D",label:"Distortion"},extraction:{short:"E",label:"Extraction"}};function yA(A){return`<div class="lens-marker-group" aria-label="Applied lenses">${Array.isArray(A.lenses)&&A.lenses.length>0?A.lenses.filter(n=>qc[n]).map(n=>{const i=qc[n];return`<span class="lens-marker lens-marker--${n} lens-marker--droplet" title="${i.label}"><canvas class="lens-droplet-canvas" data-lens="${n}"></canvas><span class="lens-droplet-letter">${i.short}</span></span>`}).join(""):""}</div>`}function jd(A){return`
    <div class="slide-inner cover-bold-full">
      <div class="cover-title">${A.title}</div>
      ${A.subtitle?`<div class="cover-subtitle">${A.subtitle}</div>`:""}
      <div class="cover-bottom">
        <div class="cover-author">${A.author||""}</div>
        <div class="cover-date-pill">${A.date||""}</div>
      </div>
      ${yA(A)}
    </div>
  `}function eh(A){return`
    <div class="slide-inner cover-dark-minimal">
      <div class="cover-top">
        <div class="cover-badge">${A.badge||""}</div>
        <div class="cover-date-pill">${A.date||""}</div>
      </div>
      <div class="cover-title">${A.title}</div>
      <div class="cover-subtitle">${A.subtitle||""}</div>
      ${yA(A)}
    </div>
  `}function th(A,e){return`
    <div class="slide-inner divider-color-burst">
      <div class="divider-center">
        ${A.section_number!=null?`<div class="divider-badge">Section ${A.section_number}</div>`:""}
        <div class="divider-title">${A.title}</div>
      </div>
      <div class="divider-footer">
        <span class="divider-page">${String(e).padStart(2,"0")}</span>
        ${yA(A)}
      </div>
    </div>
  `}function Ah(A,e){return`
    <div class="slide-inner divider-dark-cinematic">
      <div class="divider-top">
        ${A.section_number!=null?`<div class="divider-badge">Section ${A.section_number}</div>`:"<span></span>"}
        <div class="divider-page">${String(e).padStart(2,"0")}</div>
      </div>
      <div class="divider-title">${A.title}</div>
      ${A.subtitle?`<div class="divider-subtitle">${A.subtitle}</div>`:""}
      ${yA(A)}
    </div>
  `}function nh(A,e){const t=["var(--color-accent-1)","var(--color-accent-2)","var(--color-accent-3)","var(--color-accent-4)"],n=(A.points||[]).map((i,r)=>`
    <div class="evidence-card">
      <div class="card-icon" style="background: ${t[r%t.length]}"></div>
      <div class="card-text">
        <h3>${i.title}</h3>
      </div>
    </div>
  `).join("");return`
    <div class="slide-inner content-split-cards">
      <div class="content-nav">${A.section||""}</div>
      <div class="content-body-area">
        <div class="content-left">
          <h2>${A.heading}</h2>
          ${A.body?`<p>${A.body}</p>`:""}
        </div>
        <div class="content-right">
          ${n}
        </div>
      </div>
      <div class="content-footer">
        <span class="page-number">${String(e).padStart(2,"0")}</span>
        ${yA(A)}
      </div>
    </div>
  `}function ih(A,e){const t=["var(--color-accent-1)","var(--color-accent-2)","var(--color-accent-3)","var(--color-accent-4)"],n=(A.points||[]).map((i,r)=>`
    <div class="visual-card">
      <div class="card-accent" style="background: ${t[r%t.length]}"></div>
      <h3>${i.title}</h3>
      <p>${i.description}</p>
    </div>
  `).join("");return`
    <div class="slide-inner content-wide-visual">
      <div class="content-nav">${A.section||""}</div>
      <div class="content-body-area">
        <div class="content-left">
          <h2>${A.heading}</h2>
          ${A.body?`<p>${A.body}</p>`:""}
        </div>
        <div class="content-right">
          ${n}
        </div>
      </div>
      ${yA(A)}
    </div>
  `}function rh(A,e){const t=["var(--color-accent-1)","var(--color-accent-2)","var(--color-accent-3)","var(--color-accent-4)"],n=(A.stats||[]).map((i,r)=>`
    <div class="stat-block" data-accent="${r%t.length}" style="background: ${t[r%t.length]}">
      <div class="stat-value">${i.value}</div>
      <div class="stat-label">${i.label}</div>
    </div>
  `).join("");return`
    <div class="slide-inner data-big-numbers">
      <div class="data-nav">${A.section||""}</div>
      <div class="data-body">
        <div class="data-left">
          <h2>${A.heading}</h2>
          ${A.body?`<p>${A.body}</p>`:""}
        </div>
        <div class="data-right">
          ${n}
        </div>
      </div>
      <div class="data-footer">
        <span class="data-page">${String(e).padStart(2,"0")}</span>
        ${yA(A)}
      </div>
    </div>
  `}function sh(A,e){const t=["var(--color-shape-1)","var(--color-shape-2)","var(--color-shape-3)","var(--color-accent-4)"];return`
    <div class="slide-inner data-full-bleed">
      ${(A.stats||[]).map((i,r)=>`
    <div class="stat-block" style="background: ${t[r%t.length]}; color: var(--color-text-on-dark);">
      <div class="stat-year">${i.year||""}</div>
      <div class="stat-value">${i.value}</div>
      <div class="stat-label">${i.label}</div>
    </div>
  `).join("")}
      ${yA(A)}
    </div>
  `}function ah(A){const e=A.text.replace(new RegExp(`(${mc(A.highlight)})`,"gi"),'<span class="highlight">$1</span>');return`
    <div class="slide-inner statement-centered">
      <div class="statement-label">${A.section||""}</div>
      <div class="statement-text">${e}</div>
      ${A.attribution?`<div class="statement-attribution">${A.attribution}</div>`:""}
      ${yA(A)}
    </div>
  `}function oh(A){const e=A.text.replace(new RegExp(`(${mc(A.highlight)})`,"gi"),'<span class="highlight">$1</span>');return`
    <div class="slide-inner statement-editorial">
      <div class="statement-label">${A.section||""}</div>
      <div class="statement-text">${e}</div>
      ${A.attribution?`<div class="statement-attribution">${A.attribution}</div>`:""}
      ${yA(A)}
    </div>
  `}function ch(A,e){const n=(Array.isArray(A.books)?A.books:[]).map(a=>`
    <figure class="reading-book">
      ${a.cover?`<img class="reading-book-cover" src="/${a.cover}" alt="${(a.title||"").replace(/"/g,"&quot;")} cover">`:""}
      <figcaption>
        <div class="reading-book-title">${a.title||""}</div>
        <div class="reading-book-authors">${a.authors||""}</div>
      </figcaption>
    </figure>
  `).join(""),i=A.closing_question?A.closing_question.replace(new RegExp(`(${mc(A.closing_highlight)})`,"gi"),'<span class="highlight">$1</span>'):"",r=A.qr||{},s=r.image?`
    <div class="reading-qr">
      <img src="/${r.image}" alt="${(r.label||r.name||"QR code").replace(/"/g,"&quot;")}">
      ${r.label?`<div class="reading-qr-label">${r.label}</div>`:""}
      ${r.name?`<div class="reading-qr-name">${r.name}</div>`:""}
    </div>
  `:"";return`
    <div class="slide-inner reading-grid-covers">
      <div class="reading-top">
        <div class="reading-quote">${i}</div>
        ${s}
      </div>
      <div class="reading-books-section">
        <div class="reading-books-label">
          <div class="reading-books-kicker">${A.section||""}</div>
          ${A.section_subtitle?`<div class="reading-books-sub">${A.section_subtitle}</div>`:""}
        </div>
        <div class="reading-books">${n}</div>
      </div>
    </div>
  `}function mc(A){return A?A.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):""}const lh={"cover-bold-full":jd,"cover-dark-minimal":eh,"divider-color-burst":th,"divider-dark-cinematic":Ah,"content-split-cards":nh,"content-wide-visual":ih,"data-big-numbers":rh,"data-full-bleed":sh,"statement-centered":ah,"statement-editorial":oh,"reading-grid-covers":ch};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bc="183",uh=0,Zc=1,fh=2,ls=1,dh=2,Pi=3,Bn=0,Wt=1,GA=2,KA=0,di=1,$c=2,jc=3,el=4,hh=5,Tn=100,ph=101,gh=102,mh=103,Bh=104,vh=200,wh=201,_h=202,Ch=203,to=204,Ao=205,xh=206,Eh=207,Uh=208,Sh=209,Fh=210,yh=211,Mh=212,bh=213,Th=214,no=0,io=1,ro=2,gi=3,so=4,ao=5,oo=6,co=7,Zu=0,Qh=1,Ih=2,EA=0,$u=1,ju=2,ef=3,tf=4,Af=5,nf=6,rf=7,sf=300,Pn=301,mi=302,us=303,ta=304,Hs=306,_s=1e3,sA=1001,lo=1002,It=1003,Rh=1004,mr=1005,Je=1006,Aa=1007,un=1008,rA=1009,af=1010,of=1011,$i=1012,vc=1013,FA=1014,$t=1015,jt=1016,wc=1017,_c=1018,ji=1020,cf=35902,lf=35899,uf=1021,ff=1022,gA=1023,XA=1026,Rn=1027,df=1028,Cc=1029,Bi=1030,xc=1031,Ec=1033,fs=33776,ds=33777,hs=33778,ps=33779,uo=35840,fo=35841,ho=35842,po=35843,go=36196,mo=37492,Bo=37496,vo=37488,wo=37489,_o=37490,Co=37491,xo=37808,Eo=37809,Uo=37810,So=37811,Fo=37812,yo=37813,Mo=37814,bo=37815,To=37816,Qo=37817,Io=37818,Ro=37819,Lo=37820,Do=37821,Ho=36492,Po=36494,No=36495,Oo=36283,Go=36284,Vo=36285,Ko=36286,Lh=3200,Dh=0,Hh=1,ln="",nA="srgb",Nn="srgb-linear",Cs="linear",At="srgb",kn=7680,tl=519,Ph=512,Nh=513,Oh=514,Uc=515,Gh=516,Vh=517,Sc=518,Kh=519,Al=35044,nl="300 es",xA=2e3,xs=2001;function kh(A){for(let e=A.length-1;e>=0;--e)if(A[e]>=65535)return!0;return!1}function Es(A){return document.createElementNS("http://www.w3.org/1999/xhtml",A)}function zh(){const A=Es("canvas");return A.style.display="block",A}const il={};function rl(...A){const e="THREE."+A.shift();console.log(e,...A)}function hf(A){const e=A[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=A[1];t&&t.isStackTrace?A[0]+=" "+t.getLocation():A[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return A}function Qe(...A){A=hf(A);const e="THREE."+A.shift();{const t=A[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...A)}}function Ze(...A){A=hf(A);const e="THREE."+A.shift();{const t=A[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...A)}}function Us(...A){const e=A.join(" ");e in il||(il[e]=!0,Qe(...A))}function Wh(A,e,t){return new Promise(function(n,i){function r(){switch(A.clientWaitSync(e,A.SYNC_FLUSH_COMMANDS_BIT,0)){case A.WAIT_FAILED:i();break;case A.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Xh={[no]:io,[ro]:oo,[so]:co,[gi]:ao,[io]:no,[oo]:ro,[co]:so,[ao]:gi};class xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],na=Math.PI/180,ko=180/Math.PI;function rr(){const A=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[A&255]+Dt[A>>8&255]+Dt[A>>16&255]+Dt[A>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function ke(A,e,t){return Math.max(e,Math.min(t,A))}function Yh(A,e){return(A%e+e)%e}function ia(A,e,t){return(1-t)*A+t*e}function Fi(A,e){switch(e.constructor){case Float32Array:return A;case Uint32Array:return A/4294967295;case Uint16Array:return A/65535;case Uint8Array:return A/255;case Int32Array:return Math.max(A/2147483647,-1);case Int16Array:return Math.max(A/32767,-1);case Int8Array:return Math.max(A/127,-1);default:throw new Error("Invalid component type.")}}function kt(A,e){switch(e.constructor){case Float32Array:return A;case Uint32Array:return Math.round(A*4294967295);case Uint16Array:return Math.round(A*65535);case Uint8Array:return Math.round(A*255);case Int32Array:return Math.round(A*2147483647);case Int16Array:return Math.round(A*32767);case Int8Array:return Math.round(A*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ei{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,s,a){let o=n[i+0],c=n[i+1],l=n[i+2],f=n[i+3],u=r[s+0],h=r[s+1],g=r[s+2],v=r[s+3];if(f!==v||o!==u||c!==h||l!==g){let p=o*u+c*h+l*g+f*v;p<0&&(u=-u,h=-h,g=-g,v=-v,p=-p);let d=1-a;if(p<.9995){const w=Math.acos(p),U=Math.sin(w);d=Math.sin(d*w)/U,a=Math.sin(a*w)/U,o=o*d+u*a,c=c*d+h*a,l=l*d+g*a,f=f*d+v*a}else{o=o*d+u*a,c=c*d+h*a,l=l*d+g*a,f=f*d+v*a;const w=1/Math.sqrt(o*o+c*c+l*l+f*f);o*=w,c*=w,l*=w,f*=w}}e[t]=o,e[t+1]=c,e[t+2]=l,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,s){const a=n[i],o=n[i+1],c=n[i+2],l=n[i+3],f=r[s],u=r[s+1],h=r[s+2],g=r[s+3];return e[t]=a*g+l*f+o*h-c*u,e[t+1]=o*g+l*u+c*f-a*h,e[t+2]=c*g+l*h+a*u-o*f,e[t+3]=l*g-a*f-o*u-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,s=e._order,a=Math.cos,o=Math.sin,c=a(n/2),l=a(i/2),f=a(r/2),u=o(n/2),h=o(i/2),g=o(r/2);switch(s){case"XYZ":this._x=u*l*f+c*h*g,this._y=c*h*f-u*l*g,this._z=c*l*g+u*h*f,this._w=c*l*f-u*h*g;break;case"YXZ":this._x=u*l*f+c*h*g,this._y=c*h*f-u*l*g,this._z=c*l*g-u*h*f,this._w=c*l*f+u*h*g;break;case"ZXY":this._x=u*l*f-c*h*g,this._y=c*h*f+u*l*g,this._z=c*l*g+u*h*f,this._w=c*l*f-u*h*g;break;case"ZYX":this._x=u*l*f-c*h*g,this._y=c*h*f+u*l*g,this._z=c*l*g-u*h*f,this._w=c*l*f+u*h*g;break;case"YZX":this._x=u*l*f+c*h*g,this._y=c*h*f+u*l*g,this._z=c*l*g-u*h*f,this._w=c*l*f-u*h*g;break;case"XZY":this._x=u*l*f-c*h*g,this._y=c*h*f-u*l*g,this._z=c*l*g+u*h*f,this._w=c*l*f+u*h*g;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],a=t[5],o=t[9],c=t[2],l=t[6],f=t[10],u=n+a+f;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(l-o)*h,this._y=(r-c)*h,this._z=(s-i)*h}else if(n>a&&n>f){const h=2*Math.sqrt(1+n-a-f);this._w=(l-o)/h,this._x=.25*h,this._y=(i+s)/h,this._z=(r+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-n-f);this._w=(r-c)/h,this._x=(i+s)/h,this._y=.25*h,this._z=(o+l)/h}else{const h=2*Math.sqrt(1+f-n-a);this._w=(s-i)/h,this._x=(r+c)/h,this._y=(o+l)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,a=t._x,o=t._y,c=t._z,l=t._w;return this._x=n*l+s*a+i*c-r*o,this._y=i*l+s*o+r*a-n*c,this._z=r*l+s*c+n*o-i*a,this._w=s*l-n*a-i*o-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,s=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,s=-s,a=-a);let o=1-t;if(a<.9995){const c=Math.acos(a),l=Math.sin(c);o=Math.sin(o*c)/l,t=Math.sin(t*c)/l,this._x=this._x*o+n*t,this._y=this._y*o+i*t,this._z=this._z*o+r*t,this._w=this._w*o+s*t,this._onChangeCallback()}else this._x=this._x*o+n*t,this._y=this._y*o+i*t,this._z=this._z*o+r*t,this._w=this._w*o+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,n=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,a=e.z,o=e.w,c=2*(s*i-a*n),l=2*(a*t-r*i),f=2*(r*n-s*t);return this.x=t+o*c+s*f-a*l,this.y=n+o*l+a*c-r*f,this.z=i+o*f+r*l-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,s=t.x,a=t.y,o=t.z;return this.x=i*o-r*a,this.y=r*s-n*o,this.z=n*a-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ra.copy(this).projectOnVector(e),this.sub(ra)}reflect(e){return this.sub(ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ra=new G,sl=new Ei;class He{constructor(e,t,n,i,r,s,a,o,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,s,a,o,c)}set(e,t,n,i,r,s,a,o,c){const l=this.elements;return l[0]=e,l[1]=i,l[2]=a,l[3]=t,l[4]=r,l[5]=o,l[6]=n,l[7]=s,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],a=n[3],o=n[6],c=n[1],l=n[4],f=n[7],u=n[2],h=n[5],g=n[8],v=i[0],p=i[3],d=i[6],w=i[1],U=i[4],x=i[7],F=i[2],E=i[5],M=i[8];return r[0]=s*v+a*w+o*F,r[3]=s*p+a*U+o*E,r[6]=s*d+a*x+o*M,r[1]=c*v+l*w+f*F,r[4]=c*p+l*U+f*E,r[7]=c*d+l*x+f*M,r[2]=u*v+h*w+g*F,r[5]=u*p+h*U+g*E,r[8]=u*d+h*x+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],o=e[6],c=e[7],l=e[8];return t*s*l-t*a*c-n*r*l+n*a*o+i*r*c-i*s*o}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],o=e[6],c=e[7],l=e[8],f=l*s-a*c,u=a*o-l*r,h=c*r-s*o,g=t*f+n*u+i*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(i*c-l*n)*v,e[2]=(a*n-i*s)*v,e[3]=u*v,e[4]=(l*t-i*o)*v,e[5]=(i*r-a*t)*v,e[6]=h*v,e[7]=(n*o-c*t)*v,e[8]=(s*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,a){const o=Math.cos(r),c=Math.sin(r);return this.set(n*o,n*c,-n*(o*s+c*a)+s+e,-i*c,i*o,-i*(-c*s+o*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(sa.makeScale(e,t)),this}rotate(e){return this.premultiply(sa.makeRotation(-e)),this}translate(e,t){return this.premultiply(sa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sa=new He,al=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ol=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jh(){const A={enabled:!0,workingColorSpace:Nn,spaces:{},convert:function(i,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===At&&(i.r=kA(i.r),i.g=kA(i.g),i.b=kA(i.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===At&&(i.r=hi(i.r),i.g=hi(i.g),i.b=hi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ln?Cs:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,s){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Us("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),A.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Us("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),A.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return A.define({[Nn]:{primaries:e,whitePoint:n,transfer:Cs,toXYZ:al,fromXYZ:ol,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nA},outputColorSpaceConfig:{drawingBufferColorSpace:nA}},[nA]:{primaries:e,whitePoint:n,transfer:At,toXYZ:al,fromXYZ:ol,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nA}}}),A}const Ye=Jh();function kA(A){return A<.04045?A*.0773993808:Math.pow(A*.9478672986+.0521327014,2.4)}function hi(A){return A<.0031308?A*12.92:1.055*Math.pow(A,.41666)-.055}let zn;class qh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zn===void 0&&(zn=Es("canvas")),zn.width=e.width,zn.height=e.height;const i=zn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=zn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Es("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=kA(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(kA(t[n]/255)*255):t[n]=kA(t[n]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zh=0;class Fc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=rr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(aa(i[s].image)):r.push(aa(i[s]))}else r=aa(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function aa(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap?qh.getDataURL(A):A.data?{data:Array.from(A.data),width:A.width,height:A.height,type:A.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}let $h=0;const oa=new G;class Ot extends xi{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=sA,i=sA,r=Je,s=un,a=gA,o=rA,c=Ot.DEFAULT_ANISOTROPY,l=ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=rr(),this.name="",this.source=new Fc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=o,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(oa).x}get height(){return this.source.getSize(oa).y}get depth(){return this.source.getSize(oa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _s:e.x=e.x-Math.floor(e.x);break;case sA:e.x=e.x<0?0:1;break;case lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _s:e.y=e.y-Math.floor(e.y);break;case sA:e.y=e.y<0?0:1;break;case lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=sf;Ot.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,n=0,i=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const o=e.elements,c=o[0],l=o[4],f=o[8],u=o[1],h=o[5],g=o[9],v=o[2],p=o[6],d=o[10];if(Math.abs(l-u)<.01&&Math.abs(f-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(l+u)<.1&&Math.abs(f+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+h+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const U=(c+1)/2,x=(h+1)/2,F=(d+1)/2,E=(l+u)/4,M=(f+v)/4,m=(g+p)/4;return U>x&&U>F?U<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(U),i=E/n,r=M/n):x>F?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=E/i,r=m/i):F<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(F),n=M/r,i=m/r),this.set(n,i,r,t),this}let w=Math.sqrt((p-g)*(p-g)+(f-v)*(f-v)+(u-l)*(u-l));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(f-v)/w,this.z=(u-l)/w,this.w=Math.acos((c+h+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jh extends xi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new Ot(i),s=n.count;for(let a=0;a<s;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Je,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Fc(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class UA extends jh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class pf extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=It,this.minFilter=It,this.wrapR=sA,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ep extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=It,this.minFilter=It,this.wrapR=sA,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xt{constructor(e,t,n,i,r,s,a,o,c,l,f,u,h,g,v,p){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,s,a,o,c,l,f,u,h,g,v,p)}set(e,t,n,i,r,s,a,o,c,l,f,u,h,g,v,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=r,d[5]=s,d[9]=a,d[13]=o,d[2]=c,d[6]=l,d[10]=f,d[14]=u,d[3]=h,d[7]=g,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Wn.setFromMatrixColumn(e,0).length(),r=1/Wn.setFromMatrixColumn(e,1).length(),s=1/Wn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),a=Math.sin(n),o=Math.cos(i),c=Math.sin(i),l=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const u=s*l,h=s*f,g=a*l,v=a*f;t[0]=o*l,t[4]=-o*f,t[8]=c,t[1]=h+g*c,t[5]=u-v*c,t[9]=-a*o,t[2]=v-u*c,t[6]=g+h*c,t[10]=s*o}else if(e.order==="YXZ"){const u=o*l,h=o*f,g=c*l,v=c*f;t[0]=u+v*a,t[4]=g*a-h,t[8]=s*c,t[1]=s*f,t[5]=s*l,t[9]=-a,t[2]=h*a-g,t[6]=v+u*a,t[10]=s*o}else if(e.order==="ZXY"){const u=o*l,h=o*f,g=c*l,v=c*f;t[0]=u-v*a,t[4]=-s*f,t[8]=g+h*a,t[1]=h+g*a,t[5]=s*l,t[9]=v-u*a,t[2]=-s*c,t[6]=a,t[10]=s*o}else if(e.order==="ZYX"){const u=s*l,h=s*f,g=a*l,v=a*f;t[0]=o*l,t[4]=g*c-h,t[8]=u*c+v,t[1]=o*f,t[5]=v*c+u,t[9]=h*c-g,t[2]=-c,t[6]=a*o,t[10]=s*o}else if(e.order==="YZX"){const u=s*o,h=s*c,g=a*o,v=a*c;t[0]=o*l,t[4]=v-u*f,t[8]=g*f+h,t[1]=f,t[5]=s*l,t[9]=-a*l,t[2]=-c*l,t[6]=h*f+g,t[10]=u-v*f}else if(e.order==="XZY"){const u=s*o,h=s*c,g=a*o,v=a*c;t[0]=o*l,t[4]=-f,t[8]=c*l,t[1]=u*f+v,t[5]=s*l,t[9]=h*f-g,t[2]=g*f-h,t[6]=a*l,t[10]=v*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tp,e,Ap)}lookAt(e,t,n){const i=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),en.crossVectors(n,Jt),en.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),en.crossVectors(n,Jt)),en.normalize(),Br.crossVectors(Jt,en),i[0]=en.x,i[4]=Br.x,i[8]=Jt.x,i[1]=en.y,i[5]=Br.y,i[9]=Jt.y,i[2]=en.z,i[6]=Br.z,i[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],a=n[4],o=n[8],c=n[12],l=n[1],f=n[5],u=n[9],h=n[13],g=n[2],v=n[6],p=n[10],d=n[14],w=n[3],U=n[7],x=n[11],F=n[15],E=i[0],M=i[4],m=i[8],_=i[12],O=i[1],y=i[5],P=i[9],Q=i[13],H=i[2],N=i[6],L=i[10],R=i[14],Z=i[3],J=i[7],Ae=i[11],de=i[15];return r[0]=s*E+a*O+o*H+c*Z,r[4]=s*M+a*y+o*N+c*J,r[8]=s*m+a*P+o*L+c*Ae,r[12]=s*_+a*Q+o*R+c*de,r[1]=l*E+f*O+u*H+h*Z,r[5]=l*M+f*y+u*N+h*J,r[9]=l*m+f*P+u*L+h*Ae,r[13]=l*_+f*Q+u*R+h*de,r[2]=g*E+v*O+p*H+d*Z,r[6]=g*M+v*y+p*N+d*J,r[10]=g*m+v*P+p*L+d*Ae,r[14]=g*_+v*Q+p*R+d*de,r[3]=w*E+U*O+x*H+F*Z,r[7]=w*M+U*y+x*N+F*J,r[11]=w*m+U*P+x*L+F*Ae,r[15]=w*_+U*Q+x*R+F*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],a=e[5],o=e[9],c=e[13],l=e[2],f=e[6],u=e[10],h=e[14],g=e[3],v=e[7],p=e[11],d=e[15],w=o*h-c*u,U=a*h-c*f,x=a*u-o*f,F=s*h-c*l,E=s*u-o*l,M=s*f-a*l;return t*(v*w-p*U+d*x)-n*(g*w-p*F+d*E)+i*(g*U-v*F+d*M)-r*(g*x-v*E+p*M)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],o=e[6],c=e[7],l=e[8],f=e[9],u=e[10],h=e[11],g=e[12],v=e[13],p=e[14],d=e[15],w=t*a-n*s,U=t*o-i*s,x=t*c-r*s,F=n*o-i*a,E=n*c-r*a,M=i*c-r*o,m=l*v-f*g,_=l*p-u*g,O=l*d-h*g,y=f*p-u*v,P=f*d-h*v,Q=u*d-h*p,H=w*Q-U*P+x*y+F*O-E*_+M*m;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/H;return e[0]=(a*Q-o*P+c*y)*N,e[1]=(i*P-n*Q-r*y)*N,e[2]=(v*M-p*E+d*F)*N,e[3]=(u*E-f*M-h*F)*N,e[4]=(o*O-s*Q-c*_)*N,e[5]=(t*Q-i*O+r*_)*N,e[6]=(p*x-g*M-d*U)*N,e[7]=(l*M-u*x+h*U)*N,e[8]=(s*P-a*O+c*m)*N,e[9]=(n*O-t*P-r*m)*N,e[10]=(g*E-v*x+d*w)*N,e[11]=(f*x-l*E-h*w)*N,e[12]=(a*_-s*y-o*m)*N,e[13]=(t*y-n*_+i*m)*N,e[14]=(v*U-g*F-p*w)*N,e[15]=(l*F-f*U+u*w)*N,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,a=e.y,o=e.z,c=r*s,l=r*a;return this.set(c*s+n,c*a-i*o,c*o+i*a,0,c*a+i*o,l*a+n,l*o-i*s,0,c*o-i*a,l*o+i*s,r*o*o+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,s=t._y,a=t._z,o=t._w,c=r+r,l=s+s,f=a+a,u=r*c,h=r*l,g=r*f,v=s*l,p=s*f,d=a*f,w=o*c,U=o*l,x=o*f,F=n.x,E=n.y,M=n.z;return i[0]=(1-(v+d))*F,i[1]=(h+x)*F,i[2]=(g-U)*F,i[3]=0,i[4]=(h-x)*E,i[5]=(1-(u+d))*E,i[6]=(p+w)*E,i[7]=0,i[8]=(g+U)*M,i[9]=(p-w)*M,i[10]=(1-(u+v))*M,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let s=Wn.set(i[0],i[1],i[2]).length();const a=Wn.set(i[4],i[5],i[6]).length(),o=Wn.set(i[8],i[9],i[10]).length();r<0&&(s=-s),lA.copy(this);const c=1/s,l=1/a,f=1/o;return lA.elements[0]*=c,lA.elements[1]*=c,lA.elements[2]*=c,lA.elements[4]*=l,lA.elements[5]*=l,lA.elements[6]*=l,lA.elements[8]*=f,lA.elements[9]*=f,lA.elements[10]*=f,t.setFromRotationMatrix(lA),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,s,a=xA,o=!1){const c=this.elements,l=2*r/(t-e),f=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i);let g,v;if(o)g=r/(s-r),v=s*r/(s-r);else if(a===xA)g=-(s+r)/(s-r),v=-2*s*r/(s-r);else if(a===xs)g=-s/(s-r),v=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,s,a=xA,o=!1){const c=this.elements,l=2/(t-e),f=2/(n-i),u=-(t+e)/(t-e),h=-(n+i)/(n-i);let g,v;if(o)g=1/(s-r),v=s/(s-r);else if(a===xA)g=-2/(s-r),v=-(s+r)/(s-r);else if(a===xs)g=-1/(s-r),v=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Wn=new G,lA=new xt,tp=new G(0,0,0),Ap=new G(1,1,1),en=new G,Br=new G,Jt=new G,cl=new xt,ll=new Ei;class YA{constructor(e=0,t=0,n=0,i=YA.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],s=i[4],a=i[8],o=i[1],c=i[5],l=i[9],f=i[2],u=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,h),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(o,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-ke(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-l,h),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return cl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ll.setFromEuler(this),this.setFromQuaternion(ll,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}YA.DEFAULT_ORDER="XYZ";class gf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let np=0;const ul=new G,Xn=new Ei,IA=new xt,vr=new G,yi=new G,ip=new G,rp=new Ei,fl=new G(1,0,0),dl=new G(0,1,0),hl=new G(0,0,1),pl={type:"added"},sp={type:"removed"},Yn={type:"childadded",child:null},ca={type:"childremoved",child:null};class eA extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=eA.DEFAULT_UP.clone();const e=new G,t=new YA,n=new Ei,i=new G(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new xt},normalMatrix:{value:new He}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=eA.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=eA.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xn.setFromAxisAngle(e,t),this.quaternion.multiply(Xn),this}rotateOnWorldAxis(e,t){return Xn.setFromAxisAngle(e,t),this.quaternion.premultiply(Xn),this}rotateX(e){return this.rotateOnAxis(fl,e)}rotateY(e){return this.rotateOnAxis(dl,e)}rotateZ(e){return this.rotateOnAxis(hl,e)}translateOnAxis(e,t){return ul.copy(e).applyQuaternion(this.quaternion),this.position.add(ul.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fl,e)}translateY(e){return this.translateOnAxis(dl,e)}translateZ(e){return this.translateOnAxis(hl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(IA.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vr.copy(e):vr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?IA.lookAt(yi,vr,this.up):IA.lookAt(vr,yi,this.up),this.quaternion.setFromRotationMatrix(IA),i&&(IA.extractRotation(i.matrixWorld),Xn.setFromRotationMatrix(IA),this.quaternion.premultiply(Xn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pl),Yn.child=e,this.dispatchEvent(Yn),Yn.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sp),ca.child=e,this.dispatchEvent(ca),ca.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),IA.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),IA.multiply(e.parent.matrixWorld)),e.applyMatrix4(IA),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pl),Yn.child=e,this.dispatchEvent(Yn),Yn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,e,ip),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,rp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,o){return a[o.uuid]===void 0&&(a[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const o=a.shapes;if(Array.isArray(o))for(let c=0,l=o.length;c<l;c++){const f=o[c];r(e.shapes,f)}else r(e.shapes,o)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let o=0,c=this.material.length;o<c;o++)a.push(r(e.materials,this.material[o]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const o=this.animations[a];i.animations.push(r(e.animations,o))}}if(t){const a=s(e.geometries),o=s(e.materials),c=s(e.textures),l=s(e.images),f=s(e.shapes),u=s(e.skeletons),h=s(e.animations),g=s(e.nodes);a.length>0&&(n.geometries=a),o.length>0&&(n.materials=o),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=i,n;function s(a){const o=[];for(const c in a){const l=a[c];delete l.metadata,o.push(l)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}eA.DEFAULT_UP=new G(0,1,0);eA.DEFAULT_MATRIX_AUTO_UPDATE=!0;eA.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class wr extends eA{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ap={type:"move"};class la{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null;const a=this._targetRay,o=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),d=this._getHandJoint(c,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const l=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=l.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&u>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ap)))}return a!==null&&(a.visible=i!==null),o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new wr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const mf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tn={h:0,s:0,l:0},_r={h:0,s:0,l:0};function ua(A,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?A+(e-A)*6*t:t<1/2?e:t<2/3?A+(e-A)*6*(2/3-t):A}class rt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nA){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ye.workingColorSpace){if(e=Yh(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=ua(s,r,e+1/3),this.g=ua(s,r,e),this.b=ua(s,r,e-1/3)}return Ye.colorSpaceToWorking(this,i),this}setStyle(e,t=nA){function n(r){r!==void 0&&parseFloat(r)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nA){const n=mf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kA(e.r),this.g=kA(e.g),this.b=kA(e.b),this}copyLinearToSRGB(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nA){return Ye.workingToColorSpace(Ht.copy(this),e),Math.round(ke(Ht.r*255,0,255))*65536+Math.round(ke(Ht.g*255,0,255))*256+Math.round(ke(Ht.b*255,0,255))}getHexString(e=nA){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(Ht.copy(this),t);const n=Ht.r,i=Ht.g,r=Ht.b,s=Math.max(n,i,r),a=Math.min(n,i,r);let o,c;const l=(a+s)/2;if(a===s)o=0,c=0;else{const f=s-a;switch(c=l<=.5?f/(s+a):f/(2-s-a),s){case n:o=(i-r)/f+(i<r?6:0);break;case i:o=(r-n)/f+2;break;case r:o=(n-i)/f+4;break}o/=6}return e.h=o,e.s=c,e.l=l,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=nA){Ye.workingToColorSpace(Ht.copy(this),e);const t=Ht.r,n=Ht.g,i=Ht.b;return e!==nA?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(tn),this.setHSL(tn.h+e,tn.s+t,tn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(tn),e.getHSL(_r);const n=ia(tn.h,_r.h,t),i=ia(tn.s,_r.s,t),r=ia(tn.l,_r.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new rt;rt.NAMES=mf;class sr extends eA{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new YA,this.environmentIntensity=1,this.environmentRotation=new YA,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const uA=new G,RA=new G,fa=new G,LA=new G,Jn=new G,qn=new G,gl=new G,da=new G,ha=new G,pa=new G,ga=new Bt,ma=new Bt,Ba=new Bt;class pA{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),uA.subVectors(e,t),i.cross(uA);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){uA.subVectors(i,t),RA.subVectors(n,t),fa.subVectors(e,t);const s=uA.dot(uA),a=uA.dot(RA),o=uA.dot(fa),c=RA.dot(RA),l=RA.dot(fa),f=s*c-a*a;if(f===0)return r.set(0,0,0),null;const u=1/f,h=(c*o-a*l)*u,g=(s*l-a*o)*u;return r.set(1-h-g,g,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,LA)===null?!1:LA.x>=0&&LA.y>=0&&LA.x+LA.y<=1}static getInterpolation(e,t,n,i,r,s,a,o){return this.getBarycoord(e,t,n,i,LA)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,LA.x),o.addScaledVector(s,LA.y),o.addScaledVector(a,LA.z),o)}static getInterpolatedAttribute(e,t,n,i,r,s){return ga.setScalar(0),ma.setScalar(0),Ba.setScalar(0),ga.fromBufferAttribute(e,t),ma.fromBufferAttribute(e,n),Ba.fromBufferAttribute(e,i),s.setScalar(0),s.addScaledVector(ga,r.x),s.addScaledVector(ma,r.y),s.addScaledVector(Ba,r.z),s}static isFrontFacing(e,t,n,i){return uA.subVectors(n,t),RA.subVectors(e,t),uA.cross(RA).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return uA.subVectors(this.c,this.b),RA.subVectors(this.a,this.b),uA.cross(RA).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pA.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pA.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return pA.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return pA.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pA.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let s,a;Jn.subVectors(i,n),qn.subVectors(r,n),da.subVectors(e,n);const o=Jn.dot(da),c=qn.dot(da);if(o<=0&&c<=0)return t.copy(n);ha.subVectors(e,i);const l=Jn.dot(ha),f=qn.dot(ha);if(l>=0&&f<=l)return t.copy(i);const u=o*f-l*c;if(u<=0&&o>=0&&l<=0)return s=o/(o-l),t.copy(n).addScaledVector(Jn,s);pa.subVectors(e,r);const h=Jn.dot(pa),g=qn.dot(pa);if(g>=0&&h<=g)return t.copy(r);const v=h*c-o*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(qn,a);const p=l*g-h*f;if(p<=0&&f-l>=0&&h-g>=0)return gl.subVectors(r,i),a=(f-l)/(f-l+(h-g)),t.copy(i).addScaledVector(gl,a);const d=1/(p+v+u);return s=v*d,a=u*d,t.copy(n).addScaledVector(Jn,s).addScaledVector(qn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ar{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fA.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fA.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fA.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,fA):fA.fromBufferAttribute(r,s),fA.applyMatrix4(e.matrixWorld),this.expandByPoint(fA);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox)),Cr.applyMatrix4(e.matrixWorld),this.union(Cr)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fA),fA.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mi),xr.subVectors(this.max,Mi),Zn.subVectors(e.a,Mi),$n.subVectors(e.b,Mi),jn.subVectors(e.c,Mi),An.subVectors($n,Zn),nn.subVectors(jn,$n),Cn.subVectors(Zn,jn);let t=[0,-An.z,An.y,0,-nn.z,nn.y,0,-Cn.z,Cn.y,An.z,0,-An.x,nn.z,0,-nn.x,Cn.z,0,-Cn.x,-An.y,An.x,0,-nn.y,nn.x,0,-Cn.y,Cn.x,0];return!va(t,Zn,$n,jn,xr)||(t=[1,0,0,0,1,0,0,0,1],!va(t,Zn,$n,jn,xr))?!1:(Er.crossVectors(An,nn),t=[Er.x,Er.y,Er.z],va(t,Zn,$n,jn,xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fA).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fA).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(DA[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),DA[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),DA[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),DA[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),DA[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),DA[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),DA[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),DA[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(DA),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const DA=[new G,new G,new G,new G,new G,new G,new G,new G],fA=new G,Cr=new ar,Zn=new G,$n=new G,jn=new G,An=new G,nn=new G,Cn=new G,Mi=new G,xr=new G,Er=new G,xn=new G;function va(A,e,t,n,i){for(let r=0,s=A.length-3;r<=s;r+=3){xn.fromArray(A,r);const a=i.x*Math.abs(xn.x)+i.y*Math.abs(xn.y)+i.z*Math.abs(xn.z),o=e.dot(xn),c=t.dot(xn),l=n.dot(xn);if(Math.max(-Math.max(o,c,l),Math.min(o,c,l))>a)return!1}return!0}const VA=op();function op(){const A=new ArrayBuffer(4),e=new Float32Array(A),t=new Uint32Array(A),n=new Uint32Array(512),i=new Uint32Array(512);for(let o=0;o<256;++o){const c=o-127;c<-27?(n[o]=0,n[o|256]=32768,i[o]=24,i[o|256]=24):c<-14?(n[o]=1024>>-c-14,n[o|256]=1024>>-c-14|32768,i[o]=-c-1,i[o|256]=-c-1):c<=15?(n[o]=c+15<<10,n[o|256]=c+15<<10|32768,i[o]=13,i[o|256]=13):c<128?(n[o]=31744,n[o|256]=64512,i[o]=24,i[o|256]=24):(n[o]=31744,n[o|256]=64512,i[o]=13,i[o|256]=13)}const r=new Uint32Array(2048),s=new Uint32Array(64),a=new Uint32Array(64);for(let o=1;o<1024;++o){let c=o<<13,l=0;for(;(c&8388608)===0;)c<<=1,l-=8388608;c&=-8388609,l+=947912704,r[o]=c|l}for(let o=1024;o<2048;++o)r[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)s[o]=o<<23;s[31]=1199570944,s[32]=2147483648;for(let o=33;o<63;++o)s[o]=2147483648+(o-32<<23);s[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(a[o]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:s,offsetTable:a}}function cp(A){Math.abs(A)>65504&&Qe("DataUtils.toHalfFloat(): Value out of range."),A=ke(A,-65504,65504),VA.floatView[0]=A;const e=VA.uint32View[0],t=e>>23&511;return VA.baseTable[t]+((e&8388607)>>VA.shiftTable[t])}function lp(A){const e=A>>10;return VA.uint32View[0]=VA.mantissaTable[VA.offsetTable[e]+(A&1023)]+VA.exponentTable[e],VA.floatView[0]}class Ur{static toHalfFloat(e){return cp(e)}static fromHalfFloat(e){return lp(e)}}const wt=new G,Sr=new Ve;let up=0;class SA{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:up++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Al,this.updateRanges=[],this.gpuType=$t,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sr.fromBufferAttribute(this,t),Sr.applyMatrix3(e),this.setXY(t,Sr.x,Sr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),i=kt(i,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Al&&(e.usage=this.usage),e}}class Bf extends SA{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vf extends SA{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class zA extends SA{constructor(e,t,n){super(new Float32Array(e),t,n)}}const fp=new ar,bi=new G,wa=new G;class yc{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):fp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bi.subVectors(e,this.center);const t=bi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(bi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bi.copy(e.center).add(wa)),this.expandByPoint(bi.copy(e.center).sub(wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let dp=0;const tA=new xt,_a=new eA,ei=new G,qt=new ar,Ti=new ar,Mt=new G;class qA extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kh(e)?vf:Bf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tA.makeRotationFromQuaternion(e),this.applyMatrix4(tA),this}rotateX(e){return tA.makeRotationX(e),this.applyMatrix4(tA),this}rotateY(e){return tA.makeRotationY(e),this.applyMatrix4(tA),this}rotateZ(e){return tA.makeRotationZ(e),this.applyMatrix4(tA),this}translate(e,t,n){return tA.makeTranslation(e,t,n),this.applyMatrix4(tA),this}scale(e,t,n){return tA.makeScale(e,t,n),this.applyMatrix4(tA),this}lookAt(e){return _a.lookAt(e),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new zA(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const a=t[r];Ti.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(qt.min,Ti.min),qt.expandByPoint(Mt),Mt.addVectors(qt.max,Ti.max),qt.expandByPoint(Mt)):(qt.expandByPoint(Ti.min),qt.expandByPoint(Ti.max))}qt.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)Mt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Mt));if(t)for(let r=0,s=t.length;r<s;r++){const a=t[r],o=this.morphTargetsRelative;for(let c=0,l=a.count;c<l;c++)Mt.fromBufferAttribute(a,c),o&&(ei.fromBufferAttribute(e,c),Mt.add(ei)),i=Math.max(i,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new SA(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),a=[],o=[];for(let m=0;m<n.count;m++)a[m]=new G,o[m]=new G;const c=new G,l=new G,f=new G,u=new Ve,h=new Ve,g=new Ve,v=new G,p=new G;function d(m,_,O){c.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),f.fromBufferAttribute(n,O),u.fromBufferAttribute(r,m),h.fromBufferAttribute(r,_),g.fromBufferAttribute(r,O),l.sub(c),f.sub(c),h.sub(u),g.sub(u);const y=1/(h.x*g.y-g.x*h.y);isFinite(y)&&(v.copy(l).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(y),p.copy(f).multiplyScalar(h.x).addScaledVector(l,-g.x).multiplyScalar(y),a[m].add(v),a[_].add(v),a[O].add(v),o[m].add(p),o[_].add(p),o[O].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let m=0,_=w.length;m<_;++m){const O=w[m],y=O.start,P=O.count;for(let Q=y,H=y+P;Q<H;Q+=3)d(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const U=new G,x=new G,F=new G,E=new G;function M(m){F.fromBufferAttribute(i,m),E.copy(F);const _=a[m];U.copy(_),U.sub(F.multiplyScalar(F.dot(_))).normalize(),x.crossVectors(E,_);const y=x.dot(o[m])<0?-1:1;s.setXYZW(m,U.x,U.y,U.z,y)}for(let m=0,_=w.length;m<_;++m){const O=w[m],y=O.start,P=O.count;for(let Q=y,H=y+P;Q<H;Q+=3)M(e.getX(Q+0)),M(e.getX(Q+1)),M(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new SA(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,h=n.count;u<h;u++)n.setXYZ(u,0,0,0);const i=new G,r=new G,s=new G,a=new G,o=new G,c=new G,l=new G,f=new G;if(e)for(let u=0,h=e.count;u<h;u+=3){const g=e.getX(u+0),v=e.getX(u+1),p=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,p),l.subVectors(s,r),f.subVectors(i,r),l.cross(f),a.fromBufferAttribute(n,g),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(l),o.add(l),c.add(l),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,h=t.count;u<h;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),l.subVectors(s,r),f.subVectors(i,r),l.cross(f),n.setXYZ(u+0,l.x,l.y,l.z),n.setXYZ(u+1,l.x,l.y,l.z),n.setXYZ(u+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,o){const c=a.array,l=a.itemSize,f=a.normalized,u=new c.constructor(o.length*l);let h=0,g=0;for(let v=0,p=o.length;v<p;v++){a.isInterleavedBufferAttribute?h=o[v]*a.data.stride+a.offset:h=o[v]*l;for(let d=0;d<l;d++)u[g++]=c[h++]}return new SA(u,l,f)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qA,n=this.index.array,i=this.attributes;for(const a in i){const o=i[a],c=e(o,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const o=[],c=r[a];for(let l=0,f=c.length;l<f;l++){const u=c[l],h=e(u,n);o.push(h)}t.morphAttributes[a]=o}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,o=s.length;a<o;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const c in o)o[c]!==void 0&&(e[c]=o[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const o in n){const c=n[o];e.data.attributes[o]=c.toJSON(e.data)}const i={};let r=!1;for(const o in this.morphAttributes){const c=this.morphAttributes[o],l=[];for(let f=0,u=c.length;f<u;f++){const h=c[f];l.push(h.toJSON(e.data))}l.length>0&&(i[o]=l,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const l=i[c];this.setAttribute(c,l.clone(t))}const r=e.morphAttributes;for(const c in r){const l=[],f=r[c];for(let u=0,h=f.length;u<h;u++)l.push(f[u].clone(t));this.morphAttributes[c]=l}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,l=s.length;c<l;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let hp=0;class Ps extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=di,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=to,this.blendDst=Ao,this.blendEquation=Tn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kn,this.stencilZFail=kn,this.stencilZPass=kn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==to&&(n.blendSrc=this.blendSrc),this.blendDst!==Ao&&(n.blendDst=this.blendDst),this.blendEquation!==Tn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==kn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==kn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const a in r){const o=r[a];delete o.metadata,s.push(o)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const HA=new G,Ca=new G,Fr=new G,rn=new G,xa=new G,yr=new G,Ea=new G;class pp{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,HA)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=HA.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(HA.copy(this.origin).addScaledVector(this.direction,t),HA.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ca.copy(e).add(t).multiplyScalar(.5),Fr.copy(t).sub(e).normalize(),rn.copy(this.origin).sub(Ca);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Fr),a=rn.dot(this.direction),o=-rn.dot(Fr),c=rn.lengthSq(),l=Math.abs(1-s*s);let f,u,h,g;if(l>0)if(f=s*o-a,u=s*a-o,g=r*l,f>=0)if(u>=-g)if(u<=g){const v=1/l;f*=v,u*=v,h=f*(f+s*u+2*a)+u*(s*f+u+2*o)+c}else u=r,f=Math.max(0,-(s*u+a)),h=-f*f+u*(u+2*o)+c;else u=-r,f=Math.max(0,-(s*u+a)),h=-f*f+u*(u+2*o)+c;else u<=-g?(f=Math.max(0,-(-s*r+a)),u=f>0?-r:Math.min(Math.max(-r,-o),r),h=-f*f+u*(u+2*o)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-o),r),h=u*(u+2*o)+c):(f=Math.max(0,-(s*r+a)),u=f>0?r:Math.min(Math.max(-r,-o),r),h=-f*f+u*(u+2*o)+c);else u=s>0?-r:r,f=Math.max(0,-(s*u+a)),h=-f*f+u*(u+2*o)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Ca).addScaledVector(Fr,u),h}intersectSphere(e,t){HA.subVectors(e.center,this.origin);const n=HA.dot(this.direction),i=HA.dot(HA)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=n-s,o=n+s;return o<0?null:a<0?this.at(o,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,a,o;const c=1/this.direction.x,l=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),l>=0?(r=(e.min.y-u.y)*l,s=(e.max.y-u.y)*l):(r=(e.max.y-u.y)*l,s=(e.min.y-u.y)*l),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),f>=0?(a=(e.min.z-u.z)*f,o=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,o=(e.min.z-u.z)*f),n>o||a>i)||((a>n||n!==n)&&(n=a),(o<i||i!==i)&&(i=o),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,HA)!==null}intersectTriangle(e,t,n,i,r){xa.subVectors(t,e),yr.subVectors(n,e),Ea.crossVectors(xa,yr);let s=this.direction.dot(Ea),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;rn.subVectors(this.origin,e);const o=a*this.direction.dot(yr.crossVectors(rn,yr));if(o<0)return null;const c=a*this.direction.dot(xa.cross(rn));if(c<0||o+c>s)return null;const l=-a*rn.dot(Ea);return l<0?null:this.at(l/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wf extends Ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new YA,this.combine=Zu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ml=new xt,En=new pp,Mr=new yc,Bl=new G,br=new G,Tr=new G,Qr=new G,Ua=new G,Ir=new G,vl=new G,Rr=new G;class Xt extends eA{constructor(e=new qA,t=new wf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Ir.set(0,0,0);for(let o=0,c=r.length;o<c;o++){const l=a[o],f=r[o];l!==0&&(Ua.fromBufferAttribute(f,e),s?Ir.addScaledVector(Ua,l):Ir.addScaledVector(Ua.sub(t),l))}t.add(Ir)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(r),En.copy(e.ray).recast(e.near),!(Mr.containsPoint(En.origin)===!1&&(En.intersectSphere(Mr,Bl)===null||En.origin.distanceToSquared(Bl)>(e.far-e.near)**2))&&(ml.copy(r).invert(),En.copy(e.ray).applyMatrix4(ml),!(n.boundingBox!==null&&En.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,En)))}_computeIntersections(e,t,n){let i;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,c=r.attributes.uv,l=r.attributes.uv1,f=r.attributes.normal,u=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,v=u.length;g<v;g++){const p=u[g],d=s[p.materialIndex],w=Math.max(p.start,h.start),U=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let x=w,F=U;x<F;x+=3){const E=a.getX(x),M=a.getX(x+1),m=a.getX(x+2);i=Lr(this,d,e,n,c,l,f,E,M,m),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let p=g,d=v;p<d;p+=3){const w=a.getX(p),U=a.getX(p+1),x=a.getX(p+2);i=Lr(this,s,e,n,c,l,f,w,U,x),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(o!==void 0)if(Array.isArray(s))for(let g=0,v=u.length;g<v;g++){const p=u[g],d=s[p.materialIndex],w=Math.max(p.start,h.start),U=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let x=w,F=U;x<F;x+=3){const E=x,M=x+1,m=x+2;i=Lr(this,d,e,n,c,l,f,E,M,m),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let p=g,d=v;p<d;p+=3){const w=p,U=p+1,x=p+2;i=Lr(this,s,e,n,c,l,f,w,U,x),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function gp(A,e,t,n,i,r,s,a){let o;if(e.side===Wt?o=n.intersectTriangle(s,r,i,!0,a):o=n.intersectTriangle(i,r,s,e.side===Bn,a),o===null)return null;Rr.copy(a),Rr.applyMatrix4(A.matrixWorld);const c=t.ray.origin.distanceTo(Rr);return c<t.near||c>t.far?null:{distance:c,point:Rr.clone(),object:A}}function Lr(A,e,t,n,i,r,s,a,o,c){A.getVertexPosition(a,br),A.getVertexPosition(o,Tr),A.getVertexPosition(c,Qr);const l=gp(A,e,t,n,br,Tr,Qr,vl);if(l){const f=new G;pA.getBarycoord(vl,br,Tr,Qr,f),i&&(l.uv=pA.getInterpolatedAttribute(i,a,o,c,f,new Ve)),r&&(l.uv1=pA.getInterpolatedAttribute(r,a,o,c,f,new Ve)),s&&(l.normal=pA.getInterpolatedAttribute(s,a,o,c,f,new G),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const u={a,b:o,c,normal:new G,materialIndex:0};pA.getNormal(br,Tr,Qr,u.normal),l.face=u,l.barycoord=f}return l}class _f extends Ot{constructor(e=null,t=1,n=1,i,r,s,a,o,c=It,l=It,f,u){super(null,s,a,o,c,l,i,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sa=new G,mp=new G,Bp=new He;class Mn{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Sa.subVectors(n,t).cross(mp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Sa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Bp.getNormalMatrix(e),i=this.coplanarPoint(Sa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Un=new yc,vp=new Ve(.5,.5),Dr=new G;class Cf{constructor(e=new Mn,t=new Mn,n=new Mn,i=new Mn,r=new Mn,s=new Mn){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xA,n=!1){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],f=r[5],u=r[6],h=r[7],g=r[8],v=r[9],p=r[10],d=r[11],w=r[12],U=r[13],x=r[14],F=r[15];if(i[0].setComponents(c-s,h-l,d-g,F-w).normalize(),i[1].setComponents(c+s,h+l,d+g,F+w).normalize(),i[2].setComponents(c+a,h+f,d+v,F+U).normalize(),i[3].setComponents(c-a,h-f,d-v,F-U).normalize(),n)i[4].setComponents(o,u,p,x).normalize(),i[5].setComponents(c-o,h-u,d-p,F-x).normalize();else if(i[4].setComponents(c-o,h-u,d-p,F-x).normalize(),t===xA)i[5].setComponents(c+o,h+u,d+p,F+x).normalize();else if(t===xs)i[5].setComponents(o,u,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Un.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Un.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Un)}intersectsSprite(e){Un.center.set(0,0,0);const t=vp.distanceTo(e.center);return Un.radius=.7071067811865476+t,Un.applyMatrix4(e.matrixWorld),this.intersectsSphere(Un)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Dr.x=i.normal.x>0?e.max.x:e.min.x,Dr.y=i.normal.y>0?e.max.y:e.min.y,Dr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xf extends Ot{constructor(e=[],t=Pn,n,i,r,s,a,o,c,l){super(e,t,n,i,r,s,a,o,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class or extends Ot{constructor(e,t,n,i,r,s,a,o,c){super(e,t,n,i,r,s,a,o,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class er extends Ot{constructor(e,t,n=FA,i,r,s,a=It,o=It,c,l=XA,f=1){if(l!==XA&&l!==Rn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,i,r,s,a,o,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wp extends er{constructor(e,t=FA,n=Pn,i,r,s=It,a=It,o,c=XA){const l={width:e,height:e,depth:1},f=[l,l,l,l,l,l];super(e,e,t,n,i,r,s,a,o,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ef extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class cr extends qA{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const o=[],c=[],l=[],f=[];let u=0,h=0;g("z","y","x",-1,-1,n,t,e,s,r,0),g("z","y","x",1,-1,n,t,-e,s,r,1),g("x","z","y",1,1,e,n,t,i,s,2),g("x","z","y",1,-1,e,n,-t,i,s,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(o),this.setAttribute("position",new zA(c,3)),this.setAttribute("normal",new zA(l,3)),this.setAttribute("uv",new zA(f,2));function g(v,p,d,w,U,x,F,E,M,m,_){const O=x/M,y=F/m,P=x/2,Q=F/2,H=E/2,N=M+1,L=m+1;let R=0,Z=0;const J=new G;for(let Ae=0;Ae<L;Ae++){const de=Ae*y-Q;for(let ne=0;ne<N;ne++){const Ce=ne*O-P;J[v]=Ce*w,J[p]=de*U,J[d]=H,c.push(J.x,J.y,J.z),J[v]=0,J[p]=0,J[d]=E>0?1:-1,l.push(J.x,J.y,J.z),f.push(ne/M),f.push(1-Ae/m),R+=1}}for(let Ae=0;Ae<m;Ae++)for(let de=0;de<M;de++){const ne=u+de+N*Ae,Ce=u+de+N*(Ae+1),ze=u+(de+1)+N*(Ae+1),We=u+(de+1)+N*Ae;o.push(ne,Ce,We),o.push(Ce,ze,We),Z+=6}a.addGroup(h,Z,_),h+=Z,u+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ZA extends qA{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,s=t/2,a=Math.floor(n),o=Math.floor(i),c=a+1,l=o+1,f=e/a,u=t/o,h=[],g=[],v=[],p=[];for(let d=0;d<l;d++){const w=d*u-s;for(let U=0;U<c;U++){const x=U*f-r;g.push(x,-w,0),v.push(0,0,1),p.push(U/a),p.push(1-d/o)}}for(let d=0;d<o;d++)for(let w=0;w<a;w++){const U=w+c*d,x=w+c*(d+1),F=w+1+c*(d+1),E=w+1+c*d;h.push(U,x,E),h.push(x,F,E)}this.setIndex(h),this.setAttribute("position",new zA(g,3)),this.setAttribute("normal",new zA(v,3)),this.setAttribute("uv",new zA(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ZA(e.width,e.height,e.widthSegments,e.heightSegments)}}function vi(A){const e={};for(const t in A){e[t]={};for(const n in A[t]){const i=A[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Gt(A){const e={};for(let t=0;t<A.length;t++){const n=vi(A[t]);for(const i in n)e[i]=n[i]}return e}function _p(A){const e=[];for(let t=0;t<A.length;t++)e.push(A[t].clone());return e}function Uf(A){const e=A.getRenderTarget();return e===null?A.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const Cp={clone:vi,merge:Gt};var xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kt extends Ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xp,this.fragmentShader=Ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vi(e.uniforms),this.uniformsGroups=_p(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Up extends Kt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Sp extends Ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fp extends Ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wl={enabled:!1,files:{},add:function(A,e){this.enabled!==!1&&(_l(A)||(this.files[A]=e))},get:function(A){if(this.enabled!==!1&&!_l(A))return this.files[A]},remove:function(A){delete this.files[A]},clear:function(){this.files={}}};function _l(A){try{const e=A.slice(A.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class yp{constructor(e,t,n){const i=this;let r=!1,s=0,a=0,o;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(l){a++,r===!1&&i.onStart!==void 0&&i.onStart(l,s,a),r=!0},this.itemEnd=function(l){s++,i.onProgress!==void 0&&i.onProgress(l,s,a),s===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return o?o(l):l},this.setURLModifier=function(l){return o=l,this},this.addHandler=function(l,f){return c.push(l,f),this},this.removeHandler=function(l){const f=c.indexOf(l);return f!==-1&&c.splice(f,2),this},this.getHandler=function(l){for(let f=0,u=c.length;f<u;f+=2){const h=c[f],g=c[f+1];if(h.global&&(h.lastIndex=0),h.test(l))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Mp=new yp;class Mc{constructor(e){this.manager=e!==void 0?e:Mp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Mc.DEFAULT_MATERIAL_NAME="__DEFAULT";const PA={};class bp extends Error{constructor(e,t){super(e),this.response=t}}class Tp extends Mc{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=wl.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(PA[e]!==void 0){PA[e].push({onLoad:t,onProgress:n,onError:i});return}PA[e]=[],PA[e].push({onLoad:t,onProgress:n,onError:i});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,o=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Qe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const l=PA[e],f=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),h=u?parseInt(u):0,g=h!==0;let v=0;const p=new ReadableStream({start(d){w();function w(){f.read().then(({done:U,value:x})=>{if(U)d.close();else{v+=x.byteLength;const F=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:h});for(let E=0,M=l.length;E<M;E++){const m=l[E];m.onProgress&&m.onProgress(F)}d.enqueue(x),w()}},U=>{d.error(U)})}}});return new Response(p)}else throw new bp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(o){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(l=>new DOMParser().parseFromString(l,a));case"json":return c.json();default:if(a==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),u=f&&f[1]?f[1].toLowerCase():void 0,h=new TextDecoder(u);return c.arrayBuffer().then(g=>h.decode(g))}}}).then(c=>{wl.add(`file:${e}`,c);const l=PA[e];delete PA[e];for(let f=0,u=l.length;f<u;f++){const h=l[f];h.onLoad&&h.onLoad(c)}}).catch(c=>{const l=PA[e];if(l===void 0)throw this.manager.itemError(e),c;delete PA[e];for(let f=0,u=l.length;f<u;f++){const h=l[f];h.onError&&h.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Qp extends Mc{constructor(e){super(e)}load(e,t,n,i){const r=this,s=new _f,a=new Tp(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(o){let c;try{c=r.parse(o)}catch(l){if(i!==void 0)i(l);else{l(l);return}}c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:sA,s.wrapT=c.wrapT!==void 0?c.wrapT:sA,s.magFilter=c.magFilter!==void 0?c.magFilter:Je,s.minFilter=c.minFilter!==void 0?c.minFilter:Je,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(s.colorSpace=c.colorSpace),c.flipY!==void 0&&(s.flipY=c.flipY),c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=un),c.mipmapCount===1&&(s.minFilter=Je),c.generateMipmaps!==void 0&&(s.generateMipmaps=c.generateMipmaps),s.needsUpdate=!0,t&&t(s,c)},n,i),s}}const Hr=new G,Pr=new Ei,vA=new G;class Sf extends eA{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=xA,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hr,Pr,vA),vA.x===1&&vA.y===1&&vA.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hr,Pr,vA.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Hr,Pr,vA),vA.x===1&&vA.y===1&&vA.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hr,Pr,vA.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const sn=new G,Cl=new Ve,xl=new Ve;class hA extends Sf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ko*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ko*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){sn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(sn.x,sn.y).multiplyScalar(-e/sn.z),sn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(sn.x,sn.y).multiplyScalar(-e/sn.z)}getViewSize(e,t){return this.getViewBounds(e,Cl,xl),t.subVectors(xl,Cl)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(na*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/o,t-=s.offsetY*n/c,i*=s.width/o,n*=s.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Gn extends Sf{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,a=i+t,o=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,a-=l*this.view.offsetY,o=a-l*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ti=-90,Ai=1;class Ip extends eA{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new hA(ti,Ai,e,t);i.layers=this.layers,this.add(i);const r=new hA(ti,Ai,e,t);r.layers=this.layers,this.add(r);const s=new hA(ti,Ai,e,t);s.layers=this.layers,this.add(s);const a=new hA(ti,Ai,e,t);a.layers=this.layers,this.add(a);const o=new hA(ti,Ai,e,t);o.layers=this.layers,this.add(o);const c=new hA(ti,Ai,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,s,a,o]=t;for(const c of t)this.remove(c);if(e===xA)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,c,l]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(f,u,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Rp extends hA{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function El(A,e,t,n){const i=Lp(n);switch(t){case uf:return A*e;case df:return A*e/i.components*i.byteLength;case Cc:return A*e/i.components*i.byteLength;case Bi:return A*e*2/i.components*i.byteLength;case xc:return A*e*2/i.components*i.byteLength;case ff:return A*e*3/i.components*i.byteLength;case gA:return A*e*4/i.components*i.byteLength;case Ec:return A*e*4/i.components*i.byteLength;case fs:case ds:return Math.floor((A+3)/4)*Math.floor((e+3)/4)*8;case hs:case ps:return Math.floor((A+3)/4)*Math.floor((e+3)/4)*16;case fo:case po:return Math.max(A,16)*Math.max(e,8)/4;case uo:case ho:return Math.max(A,8)*Math.max(e,8)/2;case go:case mo:case vo:case wo:return Math.floor((A+3)/4)*Math.floor((e+3)/4)*8;case Bo:case _o:case Co:return Math.floor((A+3)/4)*Math.floor((e+3)/4)*16;case xo:return Math.floor((A+3)/4)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((A+4)/5)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((A+4)/5)*Math.floor((e+4)/5)*16;case So:return Math.floor((A+5)/6)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((A+5)/6)*Math.floor((e+5)/6)*16;case yo:return Math.floor((A+7)/8)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((A+7)/8)*Math.floor((e+5)/6)*16;case bo:return Math.floor((A+7)/8)*Math.floor((e+7)/8)*16;case To:return Math.floor((A+9)/10)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((A+9)/10)*Math.floor((e+5)/6)*16;case Io:return Math.floor((A+9)/10)*Math.floor((e+7)/8)*16;case Ro:return Math.floor((A+9)/10)*Math.floor((e+9)/10)*16;case Lo:return Math.floor((A+11)/12)*Math.floor((e+9)/10)*16;case Do:return Math.floor((A+11)/12)*Math.floor((e+11)/12)*16;case Ho:case Po:case No:return Math.ceil(A/4)*Math.ceil(e/4)*16;case Oo:case Go:return Math.ceil(A/4)*Math.ceil(e/4)*8;case Vo:case Ko:return Math.ceil(A/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Lp(A){switch(A){case rA:case af:return{byteLength:1,components:1};case $i:case of:case jt:return{byteLength:2,components:1};case wc:case _c:return{byteLength:2,components:4};case FA:case vc:case $t:return{byteLength:4,components:1};case cf:case lf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${A}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bc}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ff(){let A=null,e=!1,t=null,n=null;function i(r,s){t(r,s),n=A.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=A.requestAnimationFrame(i),e=!0)},stop:function(){A.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){A=r}}}function Dp(A){const e=new WeakMap;function t(a,o){const c=a.array,l=a.usage,f=c.byteLength,u=A.createBuffer();A.bindBuffer(o,u),A.bufferData(o,c,l),a.onUploadCallback();let h;if(c instanceof Float32Array)h=A.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=A.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=A.HALF_FLOAT:h=A.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=A.SHORT;else if(c instanceof Uint32Array)h=A.UNSIGNED_INT;else if(c instanceof Int32Array)h=A.INT;else if(c instanceof Int8Array)h=A.BYTE;else if(c instanceof Uint8Array)h=A.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=A.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,o,c){const l=o.array,f=o.updateRanges;if(A.bindBuffer(c,a),f.length===0)A.bufferSubData(c,0,l);else{f.sort((h,g)=>h.start-g.start);let u=0;for(let h=1;h<f.length;h++){const g=f[u],v=f[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,f[u]=v)}f.length=u+1;for(let h=0,g=f.length;h<g;h++){const v=f[h];A.bufferSubData(c,v.start*l.BYTES_PER_ELEMENT,l,v.start,v.count)}o.clearUpdateRanges()}o.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const o=e.get(a);o&&(A.deleteBuffer(o.buffer),e.delete(a))}function s(a,o){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const l=e.get(a);(!l||l.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,o));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,o),c.version=a.version}}return{get:i,remove:r,update:s}}var Hp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Np=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Op=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Wp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ag=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ng=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ig=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,sg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ag=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,og=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ug=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dg="gl_FragColor = linearToOutputTexel( gl_FragColor );",hg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,gg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_g=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Eg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ug=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Mg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ig=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Lg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ng=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Og=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$g=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,em=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,im=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,am=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,om=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,um=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,vm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_m=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Em=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Um=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ym=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Km=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,km=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$m=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,t0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,n0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,i0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,a0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,u0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,f0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,p0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pe={alphahash_fragment:Hp,alphahash_pars_fragment:Pp,alphamap_fragment:Np,alphamap_pars_fragment:Op,alphatest_fragment:Gp,alphatest_pars_fragment:Vp,aomap_fragment:Kp,aomap_pars_fragment:kp,batching_pars_vertex:zp,batching_vertex:Wp,begin_vertex:Xp,beginnormal_vertex:Yp,bsdfs:Jp,iridescence_fragment:qp,bumpmap_pars_fragment:Zp,clipping_planes_fragment:$p,clipping_planes_pars_fragment:jp,clipping_planes_pars_vertex:eg,clipping_planes_vertex:tg,color_fragment:Ag,color_pars_fragment:ng,color_pars_vertex:ig,color_vertex:rg,common:sg,cube_uv_reflection_fragment:ag,defaultnormal_vertex:og,displacementmap_pars_vertex:cg,displacementmap_vertex:lg,emissivemap_fragment:ug,emissivemap_pars_fragment:fg,colorspace_fragment:dg,colorspace_pars_fragment:hg,envmap_fragment:pg,envmap_common_pars_fragment:gg,envmap_pars_fragment:mg,envmap_pars_vertex:Bg,envmap_physical_pars_fragment:Mg,envmap_vertex:vg,fog_vertex:wg,fog_pars_vertex:_g,fog_fragment:Cg,fog_pars_fragment:xg,gradientmap_pars_fragment:Eg,lightmap_pars_fragment:Ug,lights_lambert_fragment:Sg,lights_lambert_pars_fragment:Fg,lights_pars_begin:yg,lights_toon_fragment:bg,lights_toon_pars_fragment:Tg,lights_phong_fragment:Qg,lights_phong_pars_fragment:Ig,lights_physical_fragment:Rg,lights_physical_pars_fragment:Lg,lights_fragment_begin:Dg,lights_fragment_maps:Hg,lights_fragment_end:Pg,logdepthbuf_fragment:Ng,logdepthbuf_pars_fragment:Og,logdepthbuf_pars_vertex:Gg,logdepthbuf_vertex:Vg,map_fragment:Kg,map_pars_fragment:kg,map_particle_fragment:zg,map_particle_pars_fragment:Wg,metalnessmap_fragment:Xg,metalnessmap_pars_fragment:Yg,morphinstance_vertex:Jg,morphcolor_vertex:qg,morphnormal_vertex:Zg,morphtarget_pars_vertex:$g,morphtarget_vertex:jg,normal_fragment_begin:em,normal_fragment_maps:tm,normal_pars_fragment:Am,normal_pars_vertex:nm,normal_vertex:im,normalmap_pars_fragment:rm,clearcoat_normal_fragment_begin:sm,clearcoat_normal_fragment_maps:am,clearcoat_pars_fragment:om,iridescence_pars_fragment:cm,opaque_fragment:lm,packing:um,premultiplied_alpha_fragment:fm,project_vertex:dm,dithering_fragment:hm,dithering_pars_fragment:pm,roughnessmap_fragment:gm,roughnessmap_pars_fragment:mm,shadowmap_pars_fragment:Bm,shadowmap_pars_vertex:vm,shadowmap_vertex:wm,shadowmask_pars_fragment:_m,skinbase_vertex:Cm,skinning_pars_vertex:xm,skinning_vertex:Em,skinnormal_vertex:Um,specularmap_fragment:Sm,specularmap_pars_fragment:Fm,tonemapping_fragment:ym,tonemapping_pars_fragment:Mm,transmission_fragment:bm,transmission_pars_fragment:Tm,uv_pars_fragment:Qm,uv_pars_vertex:Im,uv_vertex:Rm,worldpos_vertex:Lm,background_vert:Dm,background_frag:Hm,backgroundCube_vert:Pm,backgroundCube_frag:Nm,cube_vert:Om,cube_frag:Gm,depth_vert:Vm,depth_frag:Km,distance_vert:km,distance_frag:zm,equirect_vert:Wm,equirect_frag:Xm,linedashed_vert:Ym,linedashed_frag:Jm,meshbasic_vert:qm,meshbasic_frag:Zm,meshlambert_vert:$m,meshlambert_frag:jm,meshmatcap_vert:e0,meshmatcap_frag:t0,meshnormal_vert:A0,meshnormal_frag:n0,meshphong_vert:i0,meshphong_frag:r0,meshphysical_vert:s0,meshphysical_frag:a0,meshtoon_vert:o0,meshtoon_frag:c0,points_vert:l0,points_frag:u0,shadow_vert:f0,shadow_frag:d0,sprite_vert:h0,sprite_frag:p0},le={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},CA={basic:{uniforms:Gt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:Gt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new rt(0)},envMapIntensity:{value:1}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:Gt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:Gt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:Gt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new rt(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:Gt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:Gt([le.points,le.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:Gt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:Gt([le.common,le.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:Gt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:Gt([le.sprite,le.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distance:{uniforms:Gt([le.common,le.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distance_vert,fragmentShader:Pe.distance_frag},shadow:{uniforms:Gt([le.lights,le.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};CA.physical={uniforms:Gt([CA.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const Nr={r:0,b:0,g:0},Sn=new YA,g0=new xt;function m0(A,e,t,n,i,r){const s=new rt(0);let a=i===!0?0:1,o,c,l=null,f=0,u=null;function h(w){let U=w.isScene===!0?w.background:null;if(U&&U.isTexture){const x=w.backgroundBlurriness>0;U=e.get(U,x)}return U}function g(w){let U=!1;const x=h(w);x===null?p(s,a):x&&x.isColor&&(p(x,1),U=!0);const F=A.xr.getEnvironmentBlendMode();F==="additive"?t.buffers.color.setClear(0,0,0,1,r):F==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(A.autoClear||U)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),A.clear(A.autoClearColor,A.autoClearDepth,A.autoClearStencil))}function v(w,U){const x=h(U);x&&(x.isCubeTexture||x.mapping===Hs)?(c===void 0&&(c=new Xt(new cr(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:vi(CA.backgroundCube.uniforms),vertexShader:CA.backgroundCube.vertexShader,fragmentShader:CA.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(F,E,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Sn.copy(U.backgroundRotation),Sn.x*=-1,Sn.y*=-1,Sn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Sn.y*=-1,Sn.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(g0.makeRotationFromEuler(Sn)),c.material.toneMapped=Ye.getTransfer(x.colorSpace)!==At,(l!==x||f!==x.version||u!==A.toneMapping)&&(c.material.needsUpdate=!0,l=x,f=x.version,u=A.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(o===void 0&&(o=new Xt(new ZA(2,2),new Kt({name:"BackgroundMaterial",uniforms:vi(CA.background.uniforms),vertexShader:CA.background.vertexShader,fragmentShader:CA.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(o)),o.material.uniforms.t2D.value=x,o.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,o.material.toneMapped=Ye.getTransfer(x.colorSpace)!==At,x.matrixAutoUpdate===!0&&x.updateMatrix(),o.material.uniforms.uvTransform.value.copy(x.matrix),(l!==x||f!==x.version||u!==A.toneMapping)&&(o.material.needsUpdate=!0,l=x,f=x.version,u=A.toneMapping),o.layers.enableAll(),w.unshift(o,o.geometry,o.material,0,0,null))}function p(w,U){w.getRGB(Nr,Uf(A)),t.buffers.color.setClear(Nr.r,Nr.g,Nr.b,U,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return s},setClearColor:function(w,U=1){s.set(w),a=U,p(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(w){a=w,p(s,a)},render:g,addToRenderList:v,dispose:d}}function B0(A,e){const t=A.getParameter(A.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,s=!1;function a(y,P,Q,H,N){let L=!1;const R=f(y,H,Q,P);r!==R&&(r=R,c(r.object)),L=h(y,H,Q,N),L&&g(y,H,Q,N),N!==null&&e.update(N,A.ELEMENT_ARRAY_BUFFER),(L||s)&&(s=!1,x(y,P,Q,H),N!==null&&A.bindBuffer(A.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function o(){return A.createVertexArray()}function c(y){return A.bindVertexArray(y)}function l(y){return A.deleteVertexArray(y)}function f(y,P,Q,H){const N=H.wireframe===!0;let L=n[P.id];L===void 0&&(L={},n[P.id]=L);const R=y.isInstancedMesh===!0?y.id:0;let Z=L[R];Z===void 0&&(Z={},L[R]=Z);let J=Z[Q.id];J===void 0&&(J={},Z[Q.id]=J);let Ae=J[N];return Ae===void 0&&(Ae=u(o()),J[N]=Ae),Ae}function u(y){const P=[],Q=[],H=[];for(let N=0;N<t;N++)P[N]=0,Q[N]=0,H[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:Q,attributeDivisors:H,object:y,attributes:{},index:null}}function h(y,P,Q,H){const N=r.attributes,L=P.attributes;let R=0;const Z=Q.getAttributes();for(const J in Z)if(Z[J].location>=0){const de=N[J];let ne=L[J];if(ne===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor)),de===void 0||de.attribute!==ne||ne&&de.data!==ne.data)return!0;R++}return r.attributesNum!==R||r.index!==H}function g(y,P,Q,H){const N={},L=P.attributes;let R=0;const Z=Q.getAttributes();for(const J in Z)if(Z[J].location>=0){let de=L[J];de===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(de=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(de=y.instanceColor));const ne={};ne.attribute=de,de&&de.data&&(ne.data=de.data),N[J]=ne,R++}r.attributes=N,r.attributesNum=R,r.index=H}function v(){const y=r.newAttributes;for(let P=0,Q=y.length;P<Q;P++)y[P]=0}function p(y){d(y,0)}function d(y,P){const Q=r.newAttributes,H=r.enabledAttributes,N=r.attributeDivisors;Q[y]=1,H[y]===0&&(A.enableVertexAttribArray(y),H[y]=1),N[y]!==P&&(A.vertexAttribDivisor(y,P),N[y]=P)}function w(){const y=r.newAttributes,P=r.enabledAttributes;for(let Q=0,H=P.length;Q<H;Q++)P[Q]!==y[Q]&&(A.disableVertexAttribArray(Q),P[Q]=0)}function U(y,P,Q,H,N,L,R){R===!0?A.vertexAttribIPointer(y,P,Q,N,L):A.vertexAttribPointer(y,P,Q,H,N,L)}function x(y,P,Q,H){v();const N=H.attributes,L=Q.getAttributes(),R=P.defaultAttributeValues;for(const Z in L){const J=L[Z];if(J.location>=0){let Ae=N[Z];if(Ae===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(Ae=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(Ae=y.instanceColor)),Ae!==void 0){const de=Ae.normalized,ne=Ae.itemSize,Ce=e.get(Ae);if(Ce===void 0)continue;const ze=Ce.buffer,We=Ce.type,X=Ce.bytesPerElement,ee=We===A.INT||We===A.UNSIGNED_INT||Ae.gpuType===vc;if(Ae.isInterleavedBufferAttribute){const oe=Ae.data,De=oe.stride,be=Ae.offset;if(oe.isInstancedInterleavedBuffer){for(let Ie=0;Ie<J.locationSize;Ie++)d(J.location+Ie,oe.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ie=0;Ie<J.locationSize;Ie++)p(J.location+Ie);A.bindBuffer(A.ARRAY_BUFFER,ze);for(let Ie=0;Ie<J.locationSize;Ie++)U(J.location+Ie,ne/J.locationSize,We,de,De*X,(be+ne/J.locationSize*Ie)*X,ee)}else{if(Ae.isInstancedBufferAttribute){for(let oe=0;oe<J.locationSize;oe++)d(J.location+oe,Ae.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let oe=0;oe<J.locationSize;oe++)p(J.location+oe);A.bindBuffer(A.ARRAY_BUFFER,ze);for(let oe=0;oe<J.locationSize;oe++)U(J.location+oe,ne/J.locationSize,We,de,ne*X,ne/J.locationSize*oe*X,ee)}}else if(R!==void 0){const de=R[Z];if(de!==void 0)switch(de.length){case 2:A.vertexAttrib2fv(J.location,de);break;case 3:A.vertexAttrib3fv(J.location,de);break;case 4:A.vertexAttrib4fv(J.location,de);break;default:A.vertexAttrib1fv(J.location,de)}}}}w()}function F(){_();for(const y in n){const P=n[y];for(const Q in P){const H=P[Q];for(const N in H){const L=H[N];for(const R in L)l(L[R].object),delete L[R];delete H[N]}}delete n[y]}}function E(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const Q in P){const H=P[Q];for(const N in H){const L=H[N];for(const R in L)l(L[R].object),delete L[R];delete H[N]}}delete n[y.id]}function M(y){for(const P in n){const Q=n[P];for(const H in Q){const N=Q[H];if(N[y.id]===void 0)continue;const L=N[y.id];for(const R in L)l(L[R].object),delete L[R];delete N[y.id]}}}function m(y){for(const P in n){const Q=n[P],H=y.isInstancedMesh===!0?y.id:0,N=Q[H];if(N!==void 0){for(const L in N){const R=N[L];for(const Z in R)l(R[Z].object),delete R[Z];delete N[L]}delete Q[H],Object.keys(Q).length===0&&delete n[P]}}}function _(){O(),s=!0,r!==i&&(r=i,c(r.object))}function O(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:_,resetDefaultState:O,dispose:F,releaseStatesOfGeometry:E,releaseStatesOfObject:m,releaseStatesOfProgram:M,initAttributes:v,enableAttribute:p,disableUnusedAttributes:w}}function v0(A,e,t){let n;function i(c){n=c}function r(c,l){A.drawArrays(n,c,l),t.update(l,n,1)}function s(c,l,f){f!==0&&(A.drawArraysInstanced(n,c,l,f),t.update(l,n,f))}function a(c,l,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,f);let h=0;for(let g=0;g<f;g++)h+=l[g];t.update(h,n,1)}function o(c,l,f,u){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)s(c[g],l[g],u[g]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,l,0,u,0,f);let g=0;for(let v=0;v<f;v++)g+=l[v]*u[v];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=o}function w0(A,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=A.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){return!(M!==gA&&n.convert(M)!==A.getParameter(A.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const m=M===jt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==rA&&n.convert(M)!==A.getParameter(A.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==$t&&!m)}function o(M){if(M==="highp"){if(A.getShaderPrecisionFormat(A.VERTEX_SHADER,A.HIGH_FLOAT).precision>0&&A.getShaderPrecisionFormat(A.FRAGMENT_SHADER,A.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&A.getShaderPrecisionFormat(A.VERTEX_SHADER,A.MEDIUM_FLOAT).precision>0&&A.getShaderPrecisionFormat(A.FRAGMENT_SHADER,A.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const l=o(c);l!==c&&(Qe("WebGLRenderer:",c,"not supported, using",l,"instead."),c=l);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=A.getParameter(A.MAX_TEXTURE_IMAGE_UNITS),g=A.getParameter(A.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=A.getParameter(A.MAX_TEXTURE_SIZE),p=A.getParameter(A.MAX_CUBE_MAP_TEXTURE_SIZE),d=A.getParameter(A.MAX_VERTEX_ATTRIBS),w=A.getParameter(A.MAX_VERTEX_UNIFORM_VECTORS),U=A.getParameter(A.MAX_VARYING_VECTORS),x=A.getParameter(A.MAX_FRAGMENT_UNIFORM_VECTORS),F=A.getParameter(A.MAX_SAMPLES),E=A.getParameter(A.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:w,maxVaryings:U,maxFragmentUniforms:x,maxSamples:F,samples:E}}function _0(A){const e=this;let t=null,n=0,i=!1,r=!1;const s=new Mn,a=new He,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const h=f.length!==0||u||n!==0||i;return i=u,n=f.length,h},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=l(f,u,0)},this.setState=function(f,u,h){const g=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,d=A.get(f);if(!i||g===null||g.length===0||r&&!p)r?l(null):c();else{const w=r?0:n,U=w*4;let x=d.clippingState||null;o.value=x,x=l(g,u,U,h);for(let F=0;F!==U;++F)x[F]=t[F];d.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){o.value!==t&&(o.value=t,o.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(f,u,h,g){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=o.value,g!==!0||p===null){const d=h+v*4,w=u.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<d)&&(p=new Float32Array(d));for(let U=0,x=h;U!==v;++U,x+=4)s.copy(f[U]).applyMatrix4(w,a),s.normal.toArray(p,x),p[x+3]=s.constant}o.value=p,o.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}const fn=4,Ul=[.125,.215,.35,.446,.526,.582],Qn=20,C0=256,Qi=new Gn,Sl=new rt;let Fa=null,ya=0,Ma=0,ba=!1;const x0=new G;class Fl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:s=256,position:a=x0}=r;Fa=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,i,o,a),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ml(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Fa,ya,Ma),this._renderer.xr.enabled=ba,e.scissorTest=!1,ni(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pn||e.mapping===mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fa=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:jt,format:gA,colorSpace:Nn,depthBuffer:!1},i=yl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yl(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=E0(r)),this._blurMaterial=S0(r,e,t),this._ggxMaterial=U0(r,e,t)}return i}_compileMaterial(e){const t=new Xt(new qA,e);this._renderer.compile(t,Qi)}_sceneToCubeUV(e,t,n,i,r){const o=new hA(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,h=f.toneMapping;f.getClearColor(Sl),f.toneMapping=EA,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xt(new cr,new wf({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,p=v.material;let d=!1;const w=e.background;w?w.isColor&&(p.color.copy(w),e.background=null,d=!0):(p.color.copy(Sl),d=!0);for(let U=0;U<6;U++){const x=U%3;x===0?(o.up.set(0,c[U],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x+l[U],r.y,r.z)):x===1?(o.up.set(0,0,c[U]),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y+l[U],r.z)):(o.up.set(0,c[U],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y,r.z+l[U]));const F=this._cubeSize;ni(i,x*F,U>2?F:0,F,F),f.setRenderTarget(i),d&&f.render(v,o),f.render(e,o)}f.toneMapping=h,f.autoClear=u,e.background=w}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Pn||e.mapping===mi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=bl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ml());const r=i?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const a=r.uniforms;a.envMap.value=e;const o=this._cubeSize;ni(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(s,Qi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[n];a.material=s;const o=s.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-l*l),u=0+c*1.25,h=f*u,{_lodMax:g}=this,v=this._sizeLods[n],p=3*v*(n>g-fn?n-g+fn:0),d=4*(this._cubeSize-v);o.envMap.value=e.texture,o.roughness.value=h,o.mipInt.value=g-t,ni(r,p,d,3*v,2*v),i.setRenderTarget(r),i.render(a,Qi),o.envMap.value=r.texture,o.roughness.value=0,o.mipInt.value=g-n,ni(e,p,d,3*v,2*v),i.setRenderTarget(e),i.render(a,Qi)}_blur(e,t,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,s,a){const o=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const l=3,f=this._lodMeshes[i];f.material=c;const u=c.uniforms,h=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Qn-1),v=r/g,p=isFinite(r)?1+Math.floor(l*v):Qn;p>Qn&&Qe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Qn}`);const d=[];let w=0;for(let M=0;M<Qn;++M){const m=M/v,_=Math.exp(-m*m/2);d.push(_),M===0?w+=_:M<p&&(w+=2*_)}for(let M=0;M<d.length;M++)d[M]=d[M]/w;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=d,u.latitudinal.value=s==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:U}=this;u.dTheta.value=g,u.mipInt.value=U-n;const x=this._sizeLods[i],F=3*x*(i>U-fn?i-U+fn:0),E=4*(this._cubeSize-x);ni(t,F,E,3*x,2*x),o.setRenderTarget(t),o.render(f,Qi)}}function E0(A){const e=[],t=[],n=[];let i=A;const r=A-fn+1+Ul.length;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);let o=1/a;s>A-fn?o=Ul[s-A+fn-1]:s===0&&(o=0),t.push(o);const c=1/(a-2),l=-c,f=1+c,u=[l,l,f,l,f,f,l,l,f,f,l,f],h=6,g=6,v=3,p=2,d=1,w=new Float32Array(v*g*h),U=new Float32Array(p*g*h),x=new Float32Array(d*g*h);for(let E=0;E<h;E++){const M=E%3*2/3-1,m=E>2?0:-1,_=[M,m,0,M+2/3,m,0,M+2/3,m+1,0,M,m,0,M+2/3,m+1,0,M,m+1,0];w.set(_,v*g*E),U.set(u,p*g*E);const O=[E,E,E,E,E,E];x.set(O,d*g*E)}const F=new qA;F.setAttribute("position",new SA(w,v)),F.setAttribute("uv",new SA(U,p)),F.setAttribute("faceIndex",new SA(x,d)),n.push(new Xt(F,null)),i>fn&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function yl(A,e,t){const n=new UA(A,e,t);return n.texture.mapping=Hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ni(A,e,t,n,i){A.viewport.set(e,t,n,i),A.scissor.set(e,t,n,i)}function U0(A,e,t){return new Kt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:C0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${A}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ns(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:KA,depthTest:!1,depthWrite:!1})}function S0(A,e,t){const n=new Float32Array(Qn),i=new G(0,1,0);return new Kt({name:"SphericalGaussianBlur",defines:{n:Qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${A}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ns(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:KA,depthTest:!1,depthWrite:!1})}function Ml(){return new Kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ns(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:KA,depthTest:!1,depthWrite:!1})}function bl(){return new Kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ns(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:KA,depthTest:!1,depthWrite:!1})}function Ns(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class yf extends UA{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new xf(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new cr(5,5,5),r=new Kt({name:"CubemapFromEquirect",uniforms:vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:KA});r.uniforms.tEquirect.value=t;const s=new Xt(i,r),a=t.minFilter;return t.minFilter===un&&(t.minFilter=Je),new Ip(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}}function F0(A){let e=new WeakMap,t=new WeakMap,n=null;function i(u,h=!1){return u==null?null:h?s(u):r(u)}function r(u){if(u&&u.isTexture){const h=u.mapping;if(h===us||h===ta)if(e.has(u)){const g=e.get(u).texture;return a(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const v=new yf(g.height);return v.fromEquirectangularTexture(A,u),e.set(u,v),u.addEventListener("dispose",c),a(v.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){const h=u.mapping,g=h===us||h===ta,v=h===Pn||h===mi;if(g||v){let p=t.get(u);const d=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new Fl(A)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{const w=u.image;return g&&w&&w.height>0||v&&w&&o(w)?(n===null&&(n=new Fl(A)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",l),p.texture):null}}}return u}function a(u,h){return h===us?u.mapping=Pn:h===ta&&(u.mapping=mi),u}function o(u){let h=0;const g=6;for(let v=0;v<g;v++)u[v]!==void 0&&h++;return h===g}function c(u){const h=u.target;h.removeEventListener("dispose",c);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function l(u){const h=u.target;h.removeEventListener("dispose",l);const g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function y0(A){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=A.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Us("WebGLRenderer: "+n+" extension not supported."),i}}}function M0(A,e,t,n){const i={},r=new WeakMap;function s(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",s),delete i[u.id];const h=r.get(u);h&&(e.remove(h),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return i[u.id]===!0||(u.addEventListener("dispose",s),i[u.id]=!0,t.memory.geometries++),u}function o(f){const u=f.attributes;for(const h in u)e.update(u[h],A.ARRAY_BUFFER)}function c(f){const u=[],h=f.index,g=f.attributes.position;let v=0;if(g===void 0)return;if(h!==null){const w=h.array;v=h.version;for(let U=0,x=w.length;U<x;U+=3){const F=w[U+0],E=w[U+1],M=w[U+2];u.push(F,E,E,M,M,F)}}else{const w=g.array;v=g.version;for(let U=0,x=w.length/3-1;U<x;U+=3){const F=U+0,E=U+1,M=U+2;u.push(F,E,E,M,M,F)}}const p=new(g.count>=65535?vf:Bf)(u,1);p.version=v;const d=r.get(f);d&&e.remove(d),r.set(f,p)}function l(f){const u=r.get(f);if(u){const h=f.index;h!==null&&u.version<h.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:o,getWireframeAttribute:l}}function b0(A,e,t){let n;function i(u){n=u}let r,s;function a(u){r=u.type,s=u.bytesPerElement}function o(u,h){A.drawElements(n,h,r,u*s),t.update(h,n,1)}function c(u,h,g){g!==0&&(A.drawElementsInstanced(n,h,r,u*s,g),t.update(h,n,g))}function l(u,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,u,0,g);let p=0;for(let d=0;d<g;d++)p+=h[d];t.update(p,n,1)}function f(u,h,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<u.length;d++)c(u[d]/s,h[d],v[d]);else{p.multiDrawElementsInstancedWEBGL(n,h,0,r,u,0,v,0,g);let d=0;for(let w=0;w<g;w++)d+=h[w]*v[w];t.update(d,n,1)}}this.setMode=i,this.setIndex=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l,this.renderMultiDrawInstances=f}function T0(A){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,a){switch(t.calls++,s){case A.TRIANGLES:t.triangles+=a*(r/3);break;case A.LINES:t.lines+=a*(r/2);break;case A.LINE_STRIP:t.lines+=a*(r-1);break;case A.LINE_LOOP:t.lines+=a*r;break;case A.POINTS:t.points+=a*r;break;default:Ze("WebGLInfo: Unknown draw mode:",s);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Q0(A,e,t){const n=new WeakMap,i=new Bt;function r(s,a,o){const c=s.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=l!==void 0?l.length:0;let u=n.get(a);if(u===void 0||u.count!==f){let O=function(){m.dispose(),n.delete(a),a.removeEventListener("dispose",O)};var h=O;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],U=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),p===!0&&(x=3);let F=a.attributes.position.count*x,E=1;F>e.maxTextureSize&&(E=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const M=new Float32Array(F*E*4*f),m=new pf(M,F,E,f);m.type=$t,m.needsUpdate=!0;const _=x*4;for(let y=0;y<f;y++){const P=d[y],Q=w[y],H=U[y],N=F*E*4*y;for(let L=0;L<P.count;L++){const R=L*_;g===!0&&(i.fromBufferAttribute(P,L),M[N+R+0]=i.x,M[N+R+1]=i.y,M[N+R+2]=i.z,M[N+R+3]=0),v===!0&&(i.fromBufferAttribute(Q,L),M[N+R+4]=i.x,M[N+R+5]=i.y,M[N+R+6]=i.z,M[N+R+7]=0),p===!0&&(i.fromBufferAttribute(H,L),M[N+R+8]=i.x,M[N+R+9]=i.y,M[N+R+10]=i.z,M[N+R+11]=H.itemSize===4?i.w:1)}}u={count:f,texture:m,size:new Ve(F,E)},n.set(a,u),a.addEventListener("dispose",O)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(A,"morphTexture",s.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=a.morphTargetsRelative?1:1-g;o.getUniforms().setValue(A,"morphTargetBaseInfluence",v),o.getUniforms().setValue(A,"morphTargetInfluences",c)}o.getUniforms().setValue(A,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(A,"morphTargetsTextureSize",u.size)}return{update:r}}function I0(A,e,t,n,i){let r=new WeakMap;function s(c){const l=i.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,A.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,A.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return u}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),n.releaseStatesOfObject(l),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const R0={[$u]:"LINEAR_TONE_MAPPING",[ju]:"REINHARD_TONE_MAPPING",[ef]:"CINEON_TONE_MAPPING",[tf]:"ACES_FILMIC_TONE_MAPPING",[nf]:"AGX_TONE_MAPPING",[rf]:"NEUTRAL_TONE_MAPPING",[Af]:"CUSTOM_TONE_MAPPING"};function L0(A,e,t,n,i){const r=new UA(e,t,{type:A,depthBuffer:n,stencilBuffer:i}),s=new UA(e,t,{type:jt,depthBuffer:!1,stencilBuffer:!1}),a=new qA;a.setAttribute("position",new zA([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new zA([0,2,0,0,2,0],2));const o=new Up({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Xt(a,o),l=new Gn(-1,1,1,-1,0,1);let f=null,u=null,h=!1,g,v=null,p=[],d=!1;this.setSize=function(w,U){r.setSize(w,U),s.setSize(w,U);for(let x=0;x<p.length;x++){const F=p[x];F.setSize&&F.setSize(w,U)}},this.setEffects=function(w){p=w,d=p.length>0&&p[0].isRenderPass===!0;const U=r.width,x=r.height;for(let F=0;F<p.length;F++){const E=p[F];E.setSize&&E.setSize(U,x)}},this.begin=function(w,U){if(h||w.toneMapping===EA&&p.length===0)return!1;if(v=U,U!==null){const x=U.width,F=U.height;(r.width!==x||r.height!==F)&&this.setSize(x,F)}return d===!1&&w.setRenderTarget(r),g=w.toneMapping,w.toneMapping=EA,!0},this.hasRenderPass=function(){return d},this.end=function(w,U){w.toneMapping=g,h=!0;let x=r,F=s;for(let E=0;E<p.length;E++){const M=p[E];if(M.enabled!==!1&&(M.render(w,F,x,U),M.needsSwap!==!1)){const m=x;x=F,F=m}}if(f!==w.outputColorSpace||u!==w.toneMapping){f=w.outputColorSpace,u=w.toneMapping,o.defines={},Ye.getTransfer(f)===At&&(o.defines.SRGB_TRANSFER="");const E=R0[u];E&&(o.defines[E]=""),o.needsUpdate=!0}o.uniforms.tDiffuse.value=x.texture,w.setRenderTarget(v),w.render(c,l),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){r.dispose(),s.dispose(),a.dispose(),o.dispose()}}const Mf=new Ot,zo=new er(1,1),bf=new pf,Tf=new ep,Qf=new xf,Tl=[],Ql=[],Il=new Float32Array(16),Rl=new Float32Array(9),Ll=new Float32Array(4);function Ui(A,e,t){const n=A[0];if(n<=0||n>0)return A;const i=e*t;let r=Tl[i];if(r===void 0&&(r=new Float32Array(i),Tl[i]=r),e!==0){n.toArray(r,0);for(let s=1,a=0;s!==e;++s)a+=t,A[s].toArray(r,a)}return r}function Ut(A,e){if(A.length!==e.length)return!1;for(let t=0,n=A.length;t<n;t++)if(A[t]!==e[t])return!1;return!0}function St(A,e){for(let t=0,n=e.length;t<n;t++)A[t]=e[t]}function Os(A,e){let t=Ql[e];t===void 0&&(t=new Int32Array(e),Ql[e]=t);for(let n=0;n!==e;++n)t[n]=A.allocateTextureUnit();return t}function D0(A,e){const t=this.cache;t[0]!==e&&(A.uniform1f(this.addr,e),t[0]=e)}function H0(A,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(A.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;A.uniform2fv(this.addr,e),St(t,e)}}function P0(A,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(A.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(A.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;A.uniform3fv(this.addr,e),St(t,e)}}function N0(A,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(A.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;A.uniform4fv(this.addr,e),St(t,e)}}function O0(A,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;A.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Ut(t,n))return;Ll.set(n),A.uniformMatrix2fv(this.addr,!1,Ll),St(t,n)}}function G0(A,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;A.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Ut(t,n))return;Rl.set(n),A.uniformMatrix3fv(this.addr,!1,Rl),St(t,n)}}function V0(A,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;A.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Ut(t,n))return;Il.set(n),A.uniformMatrix4fv(this.addr,!1,Il),St(t,n)}}function K0(A,e){const t=this.cache;t[0]!==e&&(A.uniform1i(this.addr,e),t[0]=e)}function k0(A,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(A.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;A.uniform2iv(this.addr,e),St(t,e)}}function z0(A,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(A.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;A.uniform3iv(this.addr,e),St(t,e)}}function W0(A,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(A.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;A.uniform4iv(this.addr,e),St(t,e)}}function X0(A,e){const t=this.cache;t[0]!==e&&(A.uniform1ui(this.addr,e),t[0]=e)}function Y0(A,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(A.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;A.uniform2uiv(this.addr,e),St(t,e)}}function J0(A,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(A.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;A.uniform3uiv(this.addr,e),St(t,e)}}function q0(A,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(A.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;A.uniform4uiv(this.addr,e),St(t,e)}}function Z0(A,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(A.uniform1i(this.addr,i),n[0]=i);let r;this.type===A.SAMPLER_2D_SHADOW?(zo.compareFunction=t.isReversedDepthBuffer()?Sc:Uc,r=zo):r=Mf,t.setTexture2D(e||r,i)}function $0(A,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(A.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Tf,i)}function j0(A,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(A.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Qf,i)}function eB(A,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(A.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||bf,i)}function tB(A){switch(A){case 5126:return D0;case 35664:return H0;case 35665:return P0;case 35666:return N0;case 35674:return O0;case 35675:return G0;case 35676:return V0;case 5124:case 35670:return K0;case 35667:case 35671:return k0;case 35668:case 35672:return z0;case 35669:case 35673:return W0;case 5125:return X0;case 36294:return Y0;case 36295:return J0;case 36296:return q0;case 35678:case 36198:case 36298:case 36306:case 35682:return Z0;case 35679:case 36299:case 36307:return $0;case 35680:case 36300:case 36308:case 36293:return j0;case 36289:case 36303:case 36311:case 36292:return eB}}function AB(A,e){A.uniform1fv(this.addr,e)}function nB(A,e){const t=Ui(e,this.size,2);A.uniform2fv(this.addr,t)}function iB(A,e){const t=Ui(e,this.size,3);A.uniform3fv(this.addr,t)}function rB(A,e){const t=Ui(e,this.size,4);A.uniform4fv(this.addr,t)}function sB(A,e){const t=Ui(e,this.size,4);A.uniformMatrix2fv(this.addr,!1,t)}function aB(A,e){const t=Ui(e,this.size,9);A.uniformMatrix3fv(this.addr,!1,t)}function oB(A,e){const t=Ui(e,this.size,16);A.uniformMatrix4fv(this.addr,!1,t)}function cB(A,e){A.uniform1iv(this.addr,e)}function lB(A,e){A.uniform2iv(this.addr,e)}function uB(A,e){A.uniform3iv(this.addr,e)}function fB(A,e){A.uniform4iv(this.addr,e)}function dB(A,e){A.uniform1uiv(this.addr,e)}function hB(A,e){A.uniform2uiv(this.addr,e)}function pB(A,e){A.uniform3uiv(this.addr,e)}function gB(A,e){A.uniform4uiv(this.addr,e)}function mB(A,e,t){const n=this.cache,i=e.length,r=Os(t,i);Ut(n,r)||(A.uniform1iv(this.addr,r),St(n,r));let s;this.type===A.SAMPLER_2D_SHADOW?s=zo:s=Mf;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||s,r[a])}function BB(A,e,t){const n=this.cache,i=e.length,r=Os(t,i);Ut(n,r)||(A.uniform1iv(this.addr,r),St(n,r));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Tf,r[s])}function vB(A,e,t){const n=this.cache,i=e.length,r=Os(t,i);Ut(n,r)||(A.uniform1iv(this.addr,r),St(n,r));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Qf,r[s])}function wB(A,e,t){const n=this.cache,i=e.length,r=Os(t,i);Ut(n,r)||(A.uniform1iv(this.addr,r),St(n,r));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||bf,r[s])}function _B(A){switch(A){case 5126:return AB;case 35664:return nB;case 35665:return iB;case 35666:return rB;case 35674:return sB;case 35675:return aB;case 35676:return oB;case 5124:case 35670:return cB;case 35667:case 35671:return lB;case 35668:case 35672:return uB;case 35669:case 35673:return fB;case 5125:return dB;case 36294:return hB;case 36295:return pB;case 36296:return gB;case 35678:case 36198:case 36298:case 36306:case 35682:return mB;case 35679:case 36299:case 36307:return BB;case 35680:case 36300:case 36308:case 36293:return vB;case 36289:case 36303:case 36311:case 36292:return wB}}class CB{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tB(t.type)}}class xB{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_B(t.type)}}class EB{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Ta=/(\w+)(\])?(\[|\.)?/g;function Dl(A,e){A.seq.push(e),A.map[e.id]=e}function UB(A,e,t){const n=A.name,i=n.length;for(Ta.lastIndex=0;;){const r=Ta.exec(n),s=Ta.lastIndex;let a=r[1];const o=r[2]==="]",c=r[3];if(o&&(a=a|0),c===void 0||c==="["&&s+2===i){Dl(t,c===void 0?new CB(a,A,e):new xB(a,A,e));break}else{let f=t.map[a];f===void 0&&(f=new EB(a),Dl(t,f)),t=f}}}class gs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),o=e.getUniformLocation(t,a.name);UB(a,o,this)}const i=[],r=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(s):r.push(s);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){const a=t[r],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&n.push(s)}return n}}function Hl(A,e,t){const n=A.createShader(e);return A.shaderSource(n,t),A.compileShader(n),n}const SB=37297;let FB=0;function yB(A,e){const t=A.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++){const a=s+1;n.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return n.join(`
`)}const Pl=new He;function MB(A){Ye._getMatrix(Pl,Ye.workingColorSpace,A);const e=`mat3( ${Pl.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(A)){case Cs:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",A),[e,"LinearTransferOETF"]}}function Nl(A,e,t){const n=A.getShaderParameter(e,A.COMPILE_STATUS),r=(A.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+yB(A.getShaderSource(e),a)}else return r}function bB(A,e){const t=MB(e);return[`vec4 ${A}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const TB={[$u]:"Linear",[ju]:"Reinhard",[ef]:"Cineon",[tf]:"ACESFilmic",[nf]:"AgX",[rf]:"Neutral",[Af]:"Custom"};function QB(A,e){const t=TB[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+A+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+A+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Or=new G;function IB(){Ye.getLuminanceCoefficients(Or);const A=Or.x.toFixed(4),e=Or.y.toFixed(4),t=Or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${A}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RB(A){return[A.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",A.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ni).join(`
`)}function LB(A){const e=[];for(const t in A){const n=A[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function DB(A,e){const t={},n=A.getProgramParameter(e,A.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=A.getActiveAttrib(e,i),s=r.name;let a=1;r.type===A.FLOAT_MAT2&&(a=2),r.type===A.FLOAT_MAT3&&(a=3),r.type===A.FLOAT_MAT4&&(a=4),t[s]={type:r.type,location:A.getAttribLocation(e,s),locationSize:a}}return t}function Ni(A){return A!==""}function Ol(A,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return A.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gl(A,e){return A.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HB=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wo(A){return A.replace(HB,NB)}const PB=new Map;function NB(A,e){let t=Pe[e];if(t===void 0){const n=PB.get(e);if(n!==void 0)t=Pe[n],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wo(t)}const OB=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vl(A){return A.replace(OB,GB)}function GB(A,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Kl(A){let e=`precision ${A.precision} float;
	precision ${A.precision} int;
	precision ${A.precision} sampler2D;
	precision ${A.precision} samplerCube;
	precision ${A.precision} sampler3D;
	precision ${A.precision} sampler2DArray;
	precision ${A.precision} sampler2DShadow;
	precision ${A.precision} samplerCubeShadow;
	precision ${A.precision} sampler2DArrayShadow;
	precision ${A.precision} isampler2D;
	precision ${A.precision} isampler3D;
	precision ${A.precision} isamplerCube;
	precision ${A.precision} isampler2DArray;
	precision ${A.precision} usampler2D;
	precision ${A.precision} usampler3D;
	precision ${A.precision} usamplerCube;
	precision ${A.precision} usampler2DArray;
	`;return A.precision==="highp"?e+=`
#define HIGH_PRECISION`:A.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:A.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const VB={[ls]:"SHADOWMAP_TYPE_PCF",[Pi]:"SHADOWMAP_TYPE_VSM"};function KB(A){return VB[A.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const kB={[Pn]:"ENVMAP_TYPE_CUBE",[mi]:"ENVMAP_TYPE_CUBE",[Hs]:"ENVMAP_TYPE_CUBE_UV"};function zB(A){return A.envMap===!1?"ENVMAP_TYPE_CUBE":kB[A.envMapMode]||"ENVMAP_TYPE_CUBE"}const WB={[mi]:"ENVMAP_MODE_REFRACTION"};function XB(A){return A.envMap===!1?"ENVMAP_MODE_REFLECTION":WB[A.envMapMode]||"ENVMAP_MODE_REFLECTION"}const YB={[Zu]:"ENVMAP_BLENDING_MULTIPLY",[Qh]:"ENVMAP_BLENDING_MIX",[Ih]:"ENVMAP_BLENDING_ADD"};function JB(A){return A.envMap===!1?"ENVMAP_BLENDING_NONE":YB[A.combine]||"ENVMAP_BLENDING_NONE"}function qB(A){const e=A.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ZB(A,e,t,n){const i=A.getContext(),r=t.defines;let s=t.vertexShader,a=t.fragmentShader;const o=KB(t),c=zB(t),l=XB(t),f=JB(t),u=qB(t),h=RB(t),g=LB(r),v=i.createProgram();let p,d,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ni).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ni).join(`
`),d.length>0&&(d+=`
`)):(p=[Kl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ni).join(`
`),d=[Kl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==EA?"#define TONE_MAPPING":"",t.toneMapping!==EA?Pe.tonemapping_pars_fragment:"",t.toneMapping!==EA?QB("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.colorspace_pars_fragment,bB("linearToOutputTexel",t.outputColorSpace),IB(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ni).join(`
`)),s=Wo(s),s=Ol(s,t),s=Gl(s,t),a=Wo(a),a=Ol(a,t),a=Gl(a,t),s=Vl(s),a=Vl(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const U=w+p+s,x=w+d+a,F=Hl(i,i.VERTEX_SHADER,U),E=Hl(i,i.FRAGMENT_SHADER,x);i.attachShader(v,F),i.attachShader(v,E),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function M(y){if(A.debug.checkShaderErrors){const P=i.getProgramInfoLog(v)||"",Q=i.getShaderInfoLog(F)||"",H=i.getShaderInfoLog(E)||"",N=P.trim(),L=Q.trim(),R=H.trim();let Z=!0,J=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(Z=!1,typeof A.debug.onShaderError=="function")A.debug.onShaderError(i,v,F,E);else{const Ae=Nl(i,F,"vertex"),de=Nl(i,E,"fragment");Ze("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+N+`
`+Ae+`
`+de)}else N!==""?Qe("WebGLProgram: Program Info Log:",N):(L===""||R==="")&&(J=!1);J&&(y.diagnostics={runnable:Z,programLog:N,vertexShader:{log:L,prefix:p},fragmentShader:{log:R,prefix:d}})}i.deleteShader(F),i.deleteShader(E),m=new gs(i,v),_=DB(i,v)}let m;this.getUniforms=function(){return m===void 0&&M(this),m};let _;this.getAttributes=function(){return _===void 0&&M(this),_};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=i.getProgramParameter(v,SB)),O},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=FB++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=F,this.fragmentShader=E,this}let $B=0;class jB{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ev(e),t.set(e,n)),n}}class ev{constructor(e){this.id=$B++,this.code=e,this.usedTimes=0}}function tv(A,e,t,n,i,r){const s=new gf,a=new jB,o=new Set,c=[],l=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(m){return o.add(m),m===0?"uv":`uv${m}`}function v(m,_,O,y,P){const Q=y.fog,H=P.geometry,N=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?y.environment:null,L=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,R=e.get(m.envMap||N,L),Z=R&&R.mapping===Hs?R.image.height:null,J=h[m.type];m.precision!==null&&(u=n.getMaxPrecision(m.precision),u!==m.precision&&Qe("WebGLProgram.getParameters:",m.precision,"not supported, using",u,"instead."));const Ae=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,de=Ae!==void 0?Ae.length:0;let ne=0;H.morphAttributes.position!==void 0&&(ne=1),H.morphAttributes.normal!==void 0&&(ne=2),H.morphAttributes.color!==void 0&&(ne=3);let Ce,ze,We,X;if(J){const tt=CA[J];Ce=tt.vertexShader,ze=tt.fragmentShader}else Ce=m.vertexShader,ze=m.fragmentShader,a.update(m),We=a.getVertexShaderID(m),X=a.getFragmentShaderID(m);const ee=A.getRenderTarget(),oe=A.state.buffers.depth.getReversed(),De=P.isInstancedMesh===!0,be=P.isBatchedMesh===!0,Ie=!!m.map,Ft=!!m.matcap,Xe=!!R,et=!!m.aoMap,at=!!m.lightMap,Ne=!!m.bumpMap,ht=!!m.normalMap,b=!!m.displacementMap,vt=!!m.emissiveMap,$e=!!m.metalnessMap,ct=!!m.roughnessMap,Ue=m.anisotropy>0,S=m.clearcoat>0,B=m.dispersion>0,I=m.iridescence>0,Y=m.sheen>0,q=m.transmission>0,W=Ue&&!!m.anisotropyMap,ve=S&&!!m.clearcoatMap,se=S&&!!m.clearcoatNormalMap,Me=S&&!!m.clearcoatRoughnessMap,Te=I&&!!m.iridescenceMap,$=I&&!!m.iridescenceThicknessMap,ie=Y&&!!m.sheenColorMap,we=Y&&!!m.sheenRoughnessMap,xe=!!m.specularMap,ge=!!m.specularColorMap,Oe=!!m.specularIntensityMap,T=q&&!!m.transmissionMap,ae=q&&!!m.thicknessMap,re=!!m.gradientMap,Be=!!m.alphaMap,j=m.alphaTest>0,z=!!m.alphaHash,_e=!!m.extensions;let Re=EA;m.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Re=A.toneMapping);const lt={shaderID:J,shaderType:m.type,shaderName:m.name,vertexShader:Ce,fragmentShader:ze,defines:m.defines,customVertexShaderID:We,customFragmentShaderID:X,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:u,batching:be,batchingColor:be&&P._colorsTexture!==null,instancing:De,instancingColor:De&&P.instanceColor!==null,instancingMorph:De&&P.morphTexture!==null,outputColorSpace:ee===null?A.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Nn,alphaToCoverage:!!m.alphaToCoverage,map:Ie,matcap:Ft,envMap:Xe,envMapMode:Xe&&R.mapping,envMapCubeUVHeight:Z,aoMap:et,lightMap:at,bumpMap:Ne,normalMap:ht,displacementMap:b,emissiveMap:vt,normalMapObjectSpace:ht&&m.normalMapType===Hh,normalMapTangentSpace:ht&&m.normalMapType===Dh,metalnessMap:$e,roughnessMap:ct,anisotropy:Ue,anisotropyMap:W,clearcoat:S,clearcoatMap:ve,clearcoatNormalMap:se,clearcoatRoughnessMap:Me,dispersion:B,iridescence:I,iridescenceMap:Te,iridescenceThicknessMap:$,sheen:Y,sheenColorMap:ie,sheenRoughnessMap:we,specularMap:xe,specularColorMap:ge,specularIntensityMap:Oe,transmission:q,transmissionMap:T,thicknessMap:ae,gradientMap:re,opaque:m.transparent===!1&&m.blending===di&&m.alphaToCoverage===!1,alphaMap:Be,alphaTest:j,alphaHash:z,combine:m.combine,mapUv:Ie&&g(m.map.channel),aoMapUv:et&&g(m.aoMap.channel),lightMapUv:at&&g(m.lightMap.channel),bumpMapUv:Ne&&g(m.bumpMap.channel),normalMapUv:ht&&g(m.normalMap.channel),displacementMapUv:b&&g(m.displacementMap.channel),emissiveMapUv:vt&&g(m.emissiveMap.channel),metalnessMapUv:$e&&g(m.metalnessMap.channel),roughnessMapUv:ct&&g(m.roughnessMap.channel),anisotropyMapUv:W&&g(m.anisotropyMap.channel),clearcoatMapUv:ve&&g(m.clearcoatMap.channel),clearcoatNormalMapUv:se&&g(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&g(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&g(m.iridescenceMap.channel),iridescenceThicknessMapUv:$&&g(m.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&g(m.sheenColorMap.channel),sheenRoughnessMapUv:we&&g(m.sheenRoughnessMap.channel),specularMapUv:xe&&g(m.specularMap.channel),specularColorMapUv:ge&&g(m.specularColorMap.channel),specularIntensityMapUv:Oe&&g(m.specularIntensityMap.channel),transmissionMapUv:T&&g(m.transmissionMap.channel),thicknessMapUv:ae&&g(m.thicknessMap.channel),alphaMapUv:Be&&g(m.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ht||Ue),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!H.attributes.uv&&(Ie||Be),fog:!!Q,useFog:m.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||H.attributes.normal===void 0&&ht===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:oe,skinning:P.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:ne,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:m.dithering,shadowMapEnabled:A.shadowMap.enabled&&O.length>0,shadowMapType:A.shadowMap.type,toneMapping:Re,decodeVideoTexture:Ie&&m.map.isVideoTexture===!0&&Ye.getTransfer(m.map.colorSpace)===At,decodeVideoTextureEmissive:vt&&m.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(m.emissiveMap.colorSpace)===At,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===GA,flipSided:m.side===Wt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:_e&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&m.extensions.multiDraw===!0||be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return lt.vertexUv1s=o.has(1),lt.vertexUv2s=o.has(2),lt.vertexUv3s=o.has(3),o.clear(),lt}function p(m){const _=[];if(m.shaderID?_.push(m.shaderID):(_.push(m.customVertexShaderID),_.push(m.customFragmentShaderID)),m.defines!==void 0)for(const O in m.defines)_.push(O),_.push(m.defines[O]);return m.isRawShaderMaterial===!1&&(d(_,m),w(_,m),_.push(A.outputColorSpace)),_.push(m.customProgramCacheKey),_.join()}function d(m,_){m.push(_.precision),m.push(_.outputColorSpace),m.push(_.envMapMode),m.push(_.envMapCubeUVHeight),m.push(_.mapUv),m.push(_.alphaMapUv),m.push(_.lightMapUv),m.push(_.aoMapUv),m.push(_.bumpMapUv),m.push(_.normalMapUv),m.push(_.displacementMapUv),m.push(_.emissiveMapUv),m.push(_.metalnessMapUv),m.push(_.roughnessMapUv),m.push(_.anisotropyMapUv),m.push(_.clearcoatMapUv),m.push(_.clearcoatNormalMapUv),m.push(_.clearcoatRoughnessMapUv),m.push(_.iridescenceMapUv),m.push(_.iridescenceThicknessMapUv),m.push(_.sheenColorMapUv),m.push(_.sheenRoughnessMapUv),m.push(_.specularMapUv),m.push(_.specularColorMapUv),m.push(_.specularIntensityMapUv),m.push(_.transmissionMapUv),m.push(_.thicknessMapUv),m.push(_.combine),m.push(_.fogExp2),m.push(_.sizeAttenuation),m.push(_.morphTargetsCount),m.push(_.morphAttributeCount),m.push(_.numDirLights),m.push(_.numPointLights),m.push(_.numSpotLights),m.push(_.numSpotLightMaps),m.push(_.numHemiLights),m.push(_.numRectAreaLights),m.push(_.numDirLightShadows),m.push(_.numPointLightShadows),m.push(_.numSpotLightShadows),m.push(_.numSpotLightShadowsWithMaps),m.push(_.numLightProbes),m.push(_.shadowMapType),m.push(_.toneMapping),m.push(_.numClippingPlanes),m.push(_.numClipIntersection),m.push(_.depthPacking)}function w(m,_){s.disableAll(),_.instancing&&s.enable(0),_.instancingColor&&s.enable(1),_.instancingMorph&&s.enable(2),_.matcap&&s.enable(3),_.envMap&&s.enable(4),_.normalMapObjectSpace&&s.enable(5),_.normalMapTangentSpace&&s.enable(6),_.clearcoat&&s.enable(7),_.iridescence&&s.enable(8),_.alphaTest&&s.enable(9),_.vertexColors&&s.enable(10),_.vertexAlphas&&s.enable(11),_.vertexUv1s&&s.enable(12),_.vertexUv2s&&s.enable(13),_.vertexUv3s&&s.enable(14),_.vertexTangents&&s.enable(15),_.anisotropy&&s.enable(16),_.alphaHash&&s.enable(17),_.batching&&s.enable(18),_.dispersion&&s.enable(19),_.batchingColor&&s.enable(20),_.gradientMap&&s.enable(21),m.push(s.mask),s.disableAll(),_.fog&&s.enable(0),_.useFog&&s.enable(1),_.flatShading&&s.enable(2),_.logarithmicDepthBuffer&&s.enable(3),_.reversedDepthBuffer&&s.enable(4),_.skinning&&s.enable(5),_.morphTargets&&s.enable(6),_.morphNormals&&s.enable(7),_.morphColors&&s.enable(8),_.premultipliedAlpha&&s.enable(9),_.shadowMapEnabled&&s.enable(10),_.doubleSided&&s.enable(11),_.flipSided&&s.enable(12),_.useDepthPacking&&s.enable(13),_.dithering&&s.enable(14),_.transmission&&s.enable(15),_.sheen&&s.enable(16),_.opaque&&s.enable(17),_.pointsUvs&&s.enable(18),_.decodeVideoTexture&&s.enable(19),_.decodeVideoTextureEmissive&&s.enable(20),_.alphaToCoverage&&s.enable(21),m.push(s.mask)}function U(m){const _=h[m.type];let O;if(_){const y=CA[_];O=Cp.clone(y.uniforms)}else O=m.uniforms;return O}function x(m,_){let O=l.get(_);return O!==void 0?++O.usedTimes:(O=new ZB(A,_,m,i),c.push(O),l.set(_,O)),O}function F(m){if(--m.usedTimes===0){const _=c.indexOf(m);c[_]=c[c.length-1],c.pop(),l.delete(m.cacheKey),m.destroy()}}function E(m){a.remove(m)}function M(){a.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:U,acquireProgram:x,releaseProgram:F,releaseShaderCache:E,programs:c,dispose:M}}function Av(){let A=new WeakMap;function e(s){return A.has(s)}function t(s){let a=A.get(s);return a===void 0&&(a={},A.set(s,a)),a}function n(s){A.delete(s)}function i(s,a,o){A.get(s)[a]=o}function r(){A=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function nv(A,e){return A.groupOrder!==e.groupOrder?A.groupOrder-e.groupOrder:A.renderOrder!==e.renderOrder?A.renderOrder-e.renderOrder:A.material.id!==e.material.id?A.material.id-e.material.id:A.materialVariant!==e.materialVariant?A.materialVariant-e.materialVariant:A.z!==e.z?A.z-e.z:A.id-e.id}function kl(A,e){return A.groupOrder!==e.groupOrder?A.groupOrder-e.groupOrder:A.renderOrder!==e.renderOrder?A.renderOrder-e.renderOrder:A.z!==e.z?e.z-A.z:A.id-e.id}function zl(){const A=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function s(u){let h=0;return u.isInstancedMesh&&(h+=2),u.isSkinnedMesh&&(h+=1),h}function a(u,h,g,v,p,d){let w=A[e];return w===void 0?(w={id:u.id,object:u,geometry:h,material:g,materialVariant:s(u),groupOrder:v,renderOrder:u.renderOrder,z:p,group:d},A[e]=w):(w.id=u.id,w.object=u,w.geometry=h,w.material=g,w.materialVariant=s(u),w.groupOrder=v,w.renderOrder=u.renderOrder,w.z=p,w.group=d),e++,w}function o(u,h,g,v,p,d){const w=a(u,h,g,v,p,d);g.transmission>0?n.push(w):g.transparent===!0?i.push(w):t.push(w)}function c(u,h,g,v,p,d){const w=a(u,h,g,v,p,d);g.transmission>0?n.unshift(w):g.transparent===!0?i.unshift(w):t.unshift(w)}function l(u,h){t.length>1&&t.sort(u||nv),n.length>1&&n.sort(h||kl),i.length>1&&i.sort(h||kl)}function f(){for(let u=e,h=A.length;u<h;u++){const g=A[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:f,sort:l}}function iv(){let A=new WeakMap;function e(n,i){const r=A.get(n);let s;return r===void 0?(s=new zl,A.set(n,[s])):i>=r.length?(s=new zl,r.push(s)):s=r[i],s}function t(){A=new WeakMap}return{get:e,dispose:t}}function rv(){const A={};return{get:function(e){if(A[e.id]!==void 0)return A[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new rt};break;case"SpotLight":t={position:new G,direction:new G,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new G,halfWidth:new G,halfHeight:new G};break}return A[e.id]=t,t}}}function sv(){const A={};return{get:function(e){if(A[e.id]!==void 0)return A[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return A[e.id]=t,t}}}let av=0;function ov(A,e){return(e.castShadow?2:0)-(A.castShadow?2:0)+(e.map?1:0)-(A.map?1:0)}function cv(A){const e=new rv,t=sv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);const i=new G,r=new xt,s=new xt;function a(c){let l=0,f=0,u=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let h=0,g=0,v=0,p=0,d=0,w=0,U=0,x=0,F=0,E=0,M=0;c.sort(ov);for(let _=0,O=c.length;_<O;_++){const y=c[_],P=y.color,Q=y.intensity,H=y.distance;let N=null;if(y.shadow&&y.shadow.map&&(y.shadow.map.texture.format===Bi?N=y.shadow.map.texture:N=y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)l+=P.r*Q,f+=P.g*Q,u+=P.b*Q;else if(y.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(y.sh.coefficients[L],Q);M++}else if(y.isDirectionalLight){const L=e.get(y);if(L.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const R=y.shadow,Z=t.get(y);Z.shadowIntensity=R.intensity,Z.shadowBias=R.bias,Z.shadowNormalBias=R.normalBias,Z.shadowRadius=R.radius,Z.shadowMapSize=R.mapSize,n.directionalShadow[h]=Z,n.directionalShadowMap[h]=N,n.directionalShadowMatrix[h]=y.shadow.matrix,w++}n.directional[h]=L,h++}else if(y.isSpotLight){const L=e.get(y);L.position.setFromMatrixPosition(y.matrixWorld),L.color.copy(P).multiplyScalar(Q),L.distance=H,L.coneCos=Math.cos(y.angle),L.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),L.decay=y.decay,n.spot[v]=L;const R=y.shadow;if(y.map&&(n.spotLightMap[F]=y.map,F++,R.updateMatrices(y),y.castShadow&&E++),n.spotLightMatrix[v]=R.matrix,y.castShadow){const Z=t.get(y);Z.shadowIntensity=R.intensity,Z.shadowBias=R.bias,Z.shadowNormalBias=R.normalBias,Z.shadowRadius=R.radius,Z.shadowMapSize=R.mapSize,n.spotShadow[v]=Z,n.spotShadowMap[v]=N,x++}v++}else if(y.isRectAreaLight){const L=e.get(y);L.color.copy(P).multiplyScalar(Q),L.halfWidth.set(y.width*.5,0,0),L.halfHeight.set(0,y.height*.5,0),n.rectArea[p]=L,p++}else if(y.isPointLight){const L=e.get(y);if(L.color.copy(y.color).multiplyScalar(y.intensity),L.distance=y.distance,L.decay=y.decay,y.castShadow){const R=y.shadow,Z=t.get(y);Z.shadowIntensity=R.intensity,Z.shadowBias=R.bias,Z.shadowNormalBias=R.normalBias,Z.shadowRadius=R.radius,Z.shadowMapSize=R.mapSize,Z.shadowCameraNear=R.camera.near,Z.shadowCameraFar=R.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=N,n.pointShadowMatrix[g]=y.shadow.matrix,U++}n.point[g]=L,g++}else if(y.isHemisphereLight){const L=e.get(y);L.skyColor.copy(y.color).multiplyScalar(Q),L.groundColor.copy(y.groundColor).multiplyScalar(Q),n.hemi[d]=L,d++}}p>0&&(A.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=f,n.ambient[2]=u;const m=n.hash;(m.directionalLength!==h||m.pointLength!==g||m.spotLength!==v||m.rectAreaLength!==p||m.hemiLength!==d||m.numDirectionalShadows!==w||m.numPointShadows!==U||m.numSpotShadows!==x||m.numSpotMaps!==F||m.numLightProbes!==M)&&(n.directional.length=h,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=U,n.pointShadowMap.length=U,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=U,n.spotLightMatrix.length=x+F-E,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=M,m.directionalLength=h,m.pointLength=g,m.spotLength=v,m.rectAreaLength=p,m.hemiLength=d,m.numDirectionalShadows=w,m.numPointShadows=U,m.numSpotShadows=x,m.numSpotMaps=F,m.numLightProbes=M,n.version=av++)}function o(c,l){let f=0,u=0,h=0,g=0,v=0;const p=l.matrixWorldInverse;for(let d=0,w=c.length;d<w;d++){const U=c[d];if(U.isDirectionalLight){const x=n.directional[f];x.direction.setFromMatrixPosition(U.matrixWorld),i.setFromMatrixPosition(U.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),f++}else if(U.isSpotLight){const x=n.spot[h];x.position.setFromMatrixPosition(U.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(U.matrixWorld),i.setFromMatrixPosition(U.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),h++}else if(U.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(U.matrixWorld),x.position.applyMatrix4(p),s.identity(),r.copy(U.matrixWorld),r.premultiply(p),s.extractRotation(r),x.halfWidth.set(U.width*.5,0,0),x.halfHeight.set(0,U.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),g++}else if(U.isPointLight){const x=n.point[u];x.position.setFromMatrixPosition(U.matrixWorld),x.position.applyMatrix4(p),u++}else if(U.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(U.matrixWorld),x.direction.transformDirection(p),v++}}}return{setup:a,setupView:o,state:n}}function Wl(A){const e=new cv(A),t=[],n=[];function i(l){c.camera=l,t.length=0,n.length=0}function r(l){t.push(l)}function s(l){n.push(l)}function a(){e.setup(t)}function o(l){e.setupView(t,l)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:o,pushLight:r,pushShadow:s}}function lv(A){let e=new WeakMap;function t(i,r=0){const s=e.get(i);let a;return s===void 0?(a=new Wl(A),e.set(i,[a])):r>=s.length?(a=new Wl(A),s.push(a)):a=s[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const uv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,dv=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],hv=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Xl=new xt,Ii=new G,Qa=new G;function pv(A,e,t){let n=new Cf;const i=new Ve,r=new Ve,s=new Bt,a=new Sp,o=new Fp,c={},l=t.maxTextureSize,f={[Bn]:Wt,[Wt]:Bn,[GA]:GA},u=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:uv,fragmentShader:fv}),h=u.clone();h.defines.HORIZONTAL_PASS=1;const g=new qA;g.setAttribute("position",new SA(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Xt(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ls;let d=this.type;this.render=function(E,M,m){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===dh&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ls);const _=A.getRenderTarget(),O=A.getActiveCubeFace(),y=A.getActiveMipmapLevel(),P=A.state;P.setBlending(KA),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const Q=d!==this.type;Q&&M.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(N=>N.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,N=E.length;H<N;H++){const L=E[H],R=L.shadow;if(R===void 0){Qe("WebGLShadowMap:",L,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const Z=R.getFrameExtents();i.multiply(Z),r.copy(R.mapSize),(i.x>l||i.y>l)&&(i.x>l&&(r.x=Math.floor(l/Z.x),i.x=r.x*Z.x,R.mapSize.x=r.x),i.y>l&&(r.y=Math.floor(l/Z.y),i.y=r.y*Z.y,R.mapSize.y=r.y));const J=A.state.buffers.depth.getReversed();if(R.camera._reversedDepth=J,R.map===null||Q===!0){if(R.map!==null&&(R.map.depthTexture!==null&&(R.map.depthTexture.dispose(),R.map.depthTexture=null),R.map.dispose()),this.type===Pi){if(L.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}R.map=new UA(i.x,i.y,{format:Bi,type:jt,minFilter:Je,magFilter:Je,generateMipmaps:!1}),R.map.texture.name=L.name+".shadowMap",R.map.depthTexture=new er(i.x,i.y,$t),R.map.depthTexture.name=L.name+".shadowMapDepth",R.map.depthTexture.format=XA,R.map.depthTexture.compareFunction=null,R.map.depthTexture.minFilter=It,R.map.depthTexture.magFilter=It}else L.isPointLight?(R.map=new yf(i.x),R.map.depthTexture=new wp(i.x,FA)):(R.map=new UA(i.x,i.y),R.map.depthTexture=new er(i.x,i.y,FA)),R.map.depthTexture.name=L.name+".shadowMap",R.map.depthTexture.format=XA,this.type===ls?(R.map.depthTexture.compareFunction=J?Sc:Uc,R.map.depthTexture.minFilter=Je,R.map.depthTexture.magFilter=Je):(R.map.depthTexture.compareFunction=null,R.map.depthTexture.minFilter=It,R.map.depthTexture.magFilter=It);R.camera.updateProjectionMatrix()}const Ae=R.map.isWebGLCubeRenderTarget?6:1;for(let de=0;de<Ae;de++){if(R.map.isWebGLCubeRenderTarget)A.setRenderTarget(R.map,de),A.clear();else{de===0&&(A.setRenderTarget(R.map),A.clear());const ne=R.getViewport(de);s.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),P.viewport(s)}if(L.isPointLight){const ne=R.camera,Ce=R.matrix,ze=L.distance||ne.far;ze!==ne.far&&(ne.far=ze,ne.updateProjectionMatrix()),Ii.setFromMatrixPosition(L.matrixWorld),ne.position.copy(Ii),Qa.copy(ne.position),Qa.add(dv[de]),ne.up.copy(hv[de]),ne.lookAt(Qa),ne.updateMatrixWorld(),Ce.makeTranslation(-Ii.x,-Ii.y,-Ii.z),Xl.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),R._frustum.setFromProjectionMatrix(Xl,ne.coordinateSystem,ne.reversedDepth)}else R.updateMatrices(L);n=R.getFrustum(),x(M,m,R.camera,L,this.type)}R.isPointLightShadow!==!0&&this.type===Pi&&w(R,m),R.needsUpdate=!1}d=this.type,p.needsUpdate=!1,A.setRenderTarget(_,O,y)};function w(E,M){const m=e.update(v);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new UA(i.x,i.y,{format:Bi,type:jt})),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,A.setRenderTarget(E.mapPass),A.clear(),A.renderBufferDirect(M,null,m,u,v,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,A.setRenderTarget(E.map),A.clear(),A.renderBufferDirect(M,null,m,h,v,null)}function U(E,M,m,_){let O=null;const y=m.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(y!==void 0)O=y;else if(O=m.isPointLight===!0?o:a,A.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const P=O.uuid,Q=M.uuid;let H=c[P];H===void 0&&(H={},c[P]=H);let N=H[Q];N===void 0&&(N=O.clone(),H[Q]=N,M.addEventListener("dispose",F)),O=N}if(O.visible=M.visible,O.wireframe=M.wireframe,_===Pi?O.side=M.shadowSide!==null?M.shadowSide:M.side:O.side=M.shadowSide!==null?M.shadowSide:f[M.side],O.alphaMap=M.alphaMap,O.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,O.map=M.map,O.clipShadows=M.clipShadows,O.clippingPlanes=M.clippingPlanes,O.clipIntersection=M.clipIntersection,O.displacementMap=M.displacementMap,O.displacementScale=M.displacementScale,O.displacementBias=M.displacementBias,O.wireframeLinewidth=M.wireframeLinewidth,O.linewidth=M.linewidth,m.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const P=A.properties.get(O);P.light=m}return O}function x(E,M,m,_,O){if(E.visible===!1)return;if(E.layers.test(M.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&O===Pi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,E.matrixWorld);const Q=e.update(E),H=E.material;if(Array.isArray(H)){const N=Q.groups;for(let L=0,R=N.length;L<R;L++){const Z=N[L],J=H[Z.materialIndex];if(J&&J.visible){const Ae=U(E,J,_,O);E.onBeforeShadow(A,E,M,m,Q,Ae,Z),A.renderBufferDirect(m,null,Q,Ae,E,Z),E.onAfterShadow(A,E,M,m,Q,Ae,Z)}}}else if(H.visible){const N=U(E,H,_,O);E.onBeforeShadow(A,E,M,m,Q,N,null),A.renderBufferDirect(m,null,Q,N,E,null),E.onAfterShadow(A,E,M,m,Q,N,null)}}const P=E.children;for(let Q=0,H=P.length;Q<H;Q++)x(P[Q],M,m,_,O)}function F(E){E.target.removeEventListener("dispose",F);for(const m in c){const _=c[m],O=E.target.uuid;O in _&&(_[O].dispose(),delete _[O])}}}function gv(A,e){function t(){let T=!1;const ae=new Bt;let re=null;const Be=new Bt(0,0,0,0);return{setMask:function(j){re!==j&&!T&&(A.colorMask(j,j,j,j),re=j)},setLocked:function(j){T=j},setClear:function(j,z,_e,Re,lt){lt===!0&&(j*=Re,z*=Re,_e*=Re),ae.set(j,z,_e,Re),Be.equals(ae)===!1&&(A.clearColor(j,z,_e,Re),Be.copy(ae))},reset:function(){T=!1,re=null,Be.set(-1,0,0,0)}}}function n(){let T=!1,ae=!1,re=null,Be=null,j=null;return{setReversed:function(z){if(ae!==z){const _e=e.get("EXT_clip_control");z?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),ae=z;const Re=j;j=null,this.setClear(Re)}},getReversed:function(){return ae},setTest:function(z){z?ee(A.DEPTH_TEST):oe(A.DEPTH_TEST)},setMask:function(z){re!==z&&!T&&(A.depthMask(z),re=z)},setFunc:function(z){if(ae&&(z=Xh[z]),Be!==z){switch(z){case no:A.depthFunc(A.NEVER);break;case io:A.depthFunc(A.ALWAYS);break;case ro:A.depthFunc(A.LESS);break;case gi:A.depthFunc(A.LEQUAL);break;case so:A.depthFunc(A.EQUAL);break;case ao:A.depthFunc(A.GEQUAL);break;case oo:A.depthFunc(A.GREATER);break;case co:A.depthFunc(A.NOTEQUAL);break;default:A.depthFunc(A.LEQUAL)}Be=z}},setLocked:function(z){T=z},setClear:function(z){j!==z&&(j=z,ae&&(z=1-z),A.clearDepth(z))},reset:function(){T=!1,re=null,Be=null,j=null,ae=!1}}}function i(){let T=!1,ae=null,re=null,Be=null,j=null,z=null,_e=null,Re=null,lt=null;return{setTest:function(tt){T||(tt?ee(A.STENCIL_TEST):oe(A.STENCIL_TEST))},setMask:function(tt){ae!==tt&&!T&&(A.stencilMask(tt),ae=tt)},setFunc:function(tt,TA,QA){(re!==tt||Be!==TA||j!==QA)&&(A.stencilFunc(tt,TA,QA),re=tt,Be=TA,j=QA)},setOp:function(tt,TA,QA){(z!==tt||_e!==TA||Re!==QA)&&(A.stencilOp(tt,TA,QA),z=tt,_e=TA,Re=QA)},setLocked:function(tt){T=tt},setClear:function(tt){lt!==tt&&(A.clearStencil(tt),lt=tt)},reset:function(){T=!1,ae=null,re=null,Be=null,j=null,z=null,_e=null,Re=null,lt=null}}}const r=new t,s=new n,a=new i,o=new WeakMap,c=new WeakMap;let l={},f={},u=new WeakMap,h=[],g=null,v=!1,p=null,d=null,w=null,U=null,x=null,F=null,E=null,M=new rt(0,0,0),m=0,_=!1,O=null,y=null,P=null,Q=null,H=null;const N=A.getParameter(A.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,R=0;const Z=A.getParameter(A.VERSION);Z.indexOf("WebGL")!==-1?(R=parseFloat(/^WebGL (\d)/.exec(Z)[1]),L=R>=1):Z.indexOf("OpenGL ES")!==-1&&(R=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),L=R>=2);let J=null,Ae={};const de=A.getParameter(A.SCISSOR_BOX),ne=A.getParameter(A.VIEWPORT),Ce=new Bt().fromArray(de),ze=new Bt().fromArray(ne);function We(T,ae,re,Be){const j=new Uint8Array(4),z=A.createTexture();A.bindTexture(T,z),A.texParameteri(T,A.TEXTURE_MIN_FILTER,A.NEAREST),A.texParameteri(T,A.TEXTURE_MAG_FILTER,A.NEAREST);for(let _e=0;_e<re;_e++)T===A.TEXTURE_3D||T===A.TEXTURE_2D_ARRAY?A.texImage3D(ae,0,A.RGBA,1,1,Be,0,A.RGBA,A.UNSIGNED_BYTE,j):A.texImage2D(ae+_e,0,A.RGBA,1,1,0,A.RGBA,A.UNSIGNED_BYTE,j);return z}const X={};X[A.TEXTURE_2D]=We(A.TEXTURE_2D,A.TEXTURE_2D,1),X[A.TEXTURE_CUBE_MAP]=We(A.TEXTURE_CUBE_MAP,A.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[A.TEXTURE_2D_ARRAY]=We(A.TEXTURE_2D_ARRAY,A.TEXTURE_2D_ARRAY,1,1),X[A.TEXTURE_3D]=We(A.TEXTURE_3D,A.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ee(A.DEPTH_TEST),s.setFunc(gi),Ne(!1),ht(Zc),ee(A.CULL_FACE),et(KA);function ee(T){l[T]!==!0&&(A.enable(T),l[T]=!0)}function oe(T){l[T]!==!1&&(A.disable(T),l[T]=!1)}function De(T,ae){return f[T]!==ae?(A.bindFramebuffer(T,ae),f[T]=ae,T===A.DRAW_FRAMEBUFFER&&(f[A.FRAMEBUFFER]=ae),T===A.FRAMEBUFFER&&(f[A.DRAW_FRAMEBUFFER]=ae),!0):!1}function be(T,ae){let re=h,Be=!1;if(T){re=u.get(ae),re===void 0&&(re=[],u.set(ae,re));const j=T.textures;if(re.length!==j.length||re[0]!==A.COLOR_ATTACHMENT0){for(let z=0,_e=j.length;z<_e;z++)re[z]=A.COLOR_ATTACHMENT0+z;re.length=j.length,Be=!0}}else re[0]!==A.BACK&&(re[0]=A.BACK,Be=!0);Be&&A.drawBuffers(re)}function Ie(T){return g!==T?(A.useProgram(T),g=T,!0):!1}const Ft={[Tn]:A.FUNC_ADD,[ph]:A.FUNC_SUBTRACT,[gh]:A.FUNC_REVERSE_SUBTRACT};Ft[mh]=A.MIN,Ft[Bh]=A.MAX;const Xe={[vh]:A.ZERO,[wh]:A.ONE,[_h]:A.SRC_COLOR,[to]:A.SRC_ALPHA,[Fh]:A.SRC_ALPHA_SATURATE,[Uh]:A.DST_COLOR,[xh]:A.DST_ALPHA,[Ch]:A.ONE_MINUS_SRC_COLOR,[Ao]:A.ONE_MINUS_SRC_ALPHA,[Sh]:A.ONE_MINUS_DST_COLOR,[Eh]:A.ONE_MINUS_DST_ALPHA,[yh]:A.CONSTANT_COLOR,[Mh]:A.ONE_MINUS_CONSTANT_COLOR,[bh]:A.CONSTANT_ALPHA,[Th]:A.ONE_MINUS_CONSTANT_ALPHA};function et(T,ae,re,Be,j,z,_e,Re,lt,tt){if(T===KA){v===!0&&(oe(A.BLEND),v=!1);return}if(v===!1&&(ee(A.BLEND),v=!0),T!==hh){if(T!==p||tt!==_){if((d!==Tn||x!==Tn)&&(A.blendEquation(A.FUNC_ADD),d=Tn,x=Tn),tt)switch(T){case di:A.blendFuncSeparate(A.ONE,A.ONE_MINUS_SRC_ALPHA,A.ONE,A.ONE_MINUS_SRC_ALPHA);break;case $c:A.blendFunc(A.ONE,A.ONE);break;case jc:A.blendFuncSeparate(A.ZERO,A.ONE_MINUS_SRC_COLOR,A.ZERO,A.ONE);break;case el:A.blendFuncSeparate(A.DST_COLOR,A.ONE_MINUS_SRC_ALPHA,A.ZERO,A.ONE);break;default:Ze("WebGLState: Invalid blending: ",T);break}else switch(T){case di:A.blendFuncSeparate(A.SRC_ALPHA,A.ONE_MINUS_SRC_ALPHA,A.ONE,A.ONE_MINUS_SRC_ALPHA);break;case $c:A.blendFuncSeparate(A.SRC_ALPHA,A.ONE,A.ONE,A.ONE);break;case jc:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case el:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",T);break}w=null,U=null,F=null,E=null,M.set(0,0,0),m=0,p=T,_=tt}return}j=j||ae,z=z||re,_e=_e||Be,(ae!==d||j!==x)&&(A.blendEquationSeparate(Ft[ae],Ft[j]),d=ae,x=j),(re!==w||Be!==U||z!==F||_e!==E)&&(A.blendFuncSeparate(Xe[re],Xe[Be],Xe[z],Xe[_e]),w=re,U=Be,F=z,E=_e),(Re.equals(M)===!1||lt!==m)&&(A.blendColor(Re.r,Re.g,Re.b,lt),M.copy(Re),m=lt),p=T,_=!1}function at(T,ae){T.side===GA?oe(A.CULL_FACE):ee(A.CULL_FACE);let re=T.side===Wt;ae&&(re=!re),Ne(re),T.blending===di&&T.transparent===!1?et(KA):et(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),s.setFunc(T.depthFunc),s.setTest(T.depthTest),s.setMask(T.depthWrite),r.setMask(T.colorWrite);const Be=T.stencilWrite;a.setTest(Be),Be&&(a.setMask(T.stencilWriteMask),a.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),a.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),vt(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?ee(A.SAMPLE_ALPHA_TO_COVERAGE):oe(A.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(T){O!==T&&(T?A.frontFace(A.CW):A.frontFace(A.CCW),O=T)}function ht(T){T!==uh?(ee(A.CULL_FACE),T!==y&&(T===Zc?A.cullFace(A.BACK):T===fh?A.cullFace(A.FRONT):A.cullFace(A.FRONT_AND_BACK))):oe(A.CULL_FACE),y=T}function b(T){T!==P&&(L&&A.lineWidth(T),P=T)}function vt(T,ae,re){T?(ee(A.POLYGON_OFFSET_FILL),(Q!==ae||H!==re)&&(Q=ae,H=re,s.getReversed()&&(ae=-ae),A.polygonOffset(ae,re))):oe(A.POLYGON_OFFSET_FILL)}function $e(T){T?ee(A.SCISSOR_TEST):oe(A.SCISSOR_TEST)}function ct(T){T===void 0&&(T=A.TEXTURE0+N-1),J!==T&&(A.activeTexture(T),J=T)}function Ue(T,ae,re){re===void 0&&(J===null?re=A.TEXTURE0+N-1:re=J);let Be=Ae[re];Be===void 0&&(Be={type:void 0,texture:void 0},Ae[re]=Be),(Be.type!==T||Be.texture!==ae)&&(J!==re&&(A.activeTexture(re),J=re),A.bindTexture(T,ae||X[T]),Be.type=T,Be.texture=ae)}function S(){const T=Ae[J];T!==void 0&&T.type!==void 0&&(A.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function B(){try{A.compressedTexImage2D(...arguments)}catch(T){Ze("WebGLState:",T)}}function I(){try{A.compressedTexImage3D(...arguments)}catch(T){Ze("WebGLState:",T)}}function Y(){try{A.texSubImage2D(...arguments)}catch(T){Ze("WebGLState:",T)}}function q(){try{A.texSubImage3D(...arguments)}catch(T){Ze("WebGLState:",T)}}function W(){try{A.compressedTexSubImage2D(...arguments)}catch(T){Ze("WebGLState:",T)}}function ve(){try{A.compressedTexSubImage3D(...arguments)}catch(T){Ze("WebGLState:",T)}}function se(){try{A.texStorage2D(...arguments)}catch(T){Ze("WebGLState:",T)}}function Me(){try{A.texStorage3D(...arguments)}catch(T){Ze("WebGLState:",T)}}function Te(){try{A.texImage2D(...arguments)}catch(T){Ze("WebGLState:",T)}}function $(){try{A.texImage3D(...arguments)}catch(T){Ze("WebGLState:",T)}}function ie(T){Ce.equals(T)===!1&&(A.scissor(T.x,T.y,T.z,T.w),Ce.copy(T))}function we(T){ze.equals(T)===!1&&(A.viewport(T.x,T.y,T.z,T.w),ze.copy(T))}function xe(T,ae){let re=c.get(ae);re===void 0&&(re=new WeakMap,c.set(ae,re));let Be=re.get(T);Be===void 0&&(Be=A.getUniformBlockIndex(ae,T.name),re.set(T,Be))}function ge(T,ae){const Be=c.get(ae).get(T);o.get(ae)!==Be&&(A.uniformBlockBinding(ae,Be,T.__bindingPointIndex),o.set(ae,Be))}function Oe(){A.disable(A.BLEND),A.disable(A.CULL_FACE),A.disable(A.DEPTH_TEST),A.disable(A.POLYGON_OFFSET_FILL),A.disable(A.SCISSOR_TEST),A.disable(A.STENCIL_TEST),A.disable(A.SAMPLE_ALPHA_TO_COVERAGE),A.blendEquation(A.FUNC_ADD),A.blendFunc(A.ONE,A.ZERO),A.blendFuncSeparate(A.ONE,A.ZERO,A.ONE,A.ZERO),A.blendColor(0,0,0,0),A.colorMask(!0,!0,!0,!0),A.clearColor(0,0,0,0),A.depthMask(!0),A.depthFunc(A.LESS),s.setReversed(!1),A.clearDepth(1),A.stencilMask(4294967295),A.stencilFunc(A.ALWAYS,0,4294967295),A.stencilOp(A.KEEP,A.KEEP,A.KEEP),A.clearStencil(0),A.cullFace(A.BACK),A.frontFace(A.CCW),A.polygonOffset(0,0),A.activeTexture(A.TEXTURE0),A.bindFramebuffer(A.FRAMEBUFFER,null),A.bindFramebuffer(A.DRAW_FRAMEBUFFER,null),A.bindFramebuffer(A.READ_FRAMEBUFFER,null),A.useProgram(null),A.lineWidth(1),A.scissor(0,0,A.canvas.width,A.canvas.height),A.viewport(0,0,A.canvas.width,A.canvas.height),l={},J=null,Ae={},f={},u=new WeakMap,h=[],g=null,v=!1,p=null,d=null,w=null,U=null,x=null,F=null,E=null,M=new rt(0,0,0),m=0,_=!1,O=null,y=null,P=null,Q=null,H=null,Ce.set(0,0,A.canvas.width,A.canvas.height),ze.set(0,0,A.canvas.width,A.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:ee,disable:oe,bindFramebuffer:De,drawBuffers:be,useProgram:Ie,setBlending:et,setMaterial:at,setFlipSided:Ne,setCullFace:ht,setLineWidth:b,setPolygonOffset:vt,setScissorTest:$e,activeTexture:ct,bindTexture:Ue,unbindTexture:S,compressedTexImage2D:B,compressedTexImage3D:I,texImage2D:Te,texImage3D:$,updateUBOMapping:xe,uniformBlockBinding:ge,texStorage2D:se,texStorage3D:Me,texSubImage2D:Y,texSubImage3D:q,compressedTexSubImage2D:W,compressedTexSubImage3D:ve,scissor:ie,viewport:we,reset:Oe}}function mv(A,e,t,n,i,r,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,l=new WeakMap;let f;const u=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,B){return h?new OffscreenCanvas(S,B):Es("canvas")}function v(S,B,I){let Y=1;const q=Ue(S);if((q.width>I||q.height>I)&&(Y=I/Math.max(q.width,q.height)),Y<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const W=Math.floor(Y*q.width),ve=Math.floor(Y*q.height);f===void 0&&(f=g(W,ve));const se=B?g(W,ve):f;return se.width=W,se.height=ve,se.getContext("2d").drawImage(S,0,0,W,ve),Qe("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+W+"x"+ve+")."),se}else return"data"in S&&Qe("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),S;return S}function p(S){return S.generateMipmaps}function d(S){A.generateMipmap(S)}function w(S){return S.isWebGLCubeRenderTarget?A.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?A.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?A.TEXTURE_2D_ARRAY:A.TEXTURE_2D}function U(S,B,I,Y,q=!1){if(S!==null){if(A[S]!==void 0)return A[S];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let W=B;if(B===A.RED&&(I===A.FLOAT&&(W=A.R32F),I===A.HALF_FLOAT&&(W=A.R16F),I===A.UNSIGNED_BYTE&&(W=A.R8)),B===A.RED_INTEGER&&(I===A.UNSIGNED_BYTE&&(W=A.R8UI),I===A.UNSIGNED_SHORT&&(W=A.R16UI),I===A.UNSIGNED_INT&&(W=A.R32UI),I===A.BYTE&&(W=A.R8I),I===A.SHORT&&(W=A.R16I),I===A.INT&&(W=A.R32I)),B===A.RG&&(I===A.FLOAT&&(W=A.RG32F),I===A.HALF_FLOAT&&(W=A.RG16F),I===A.UNSIGNED_BYTE&&(W=A.RG8)),B===A.RG_INTEGER&&(I===A.UNSIGNED_BYTE&&(W=A.RG8UI),I===A.UNSIGNED_SHORT&&(W=A.RG16UI),I===A.UNSIGNED_INT&&(W=A.RG32UI),I===A.BYTE&&(W=A.RG8I),I===A.SHORT&&(W=A.RG16I),I===A.INT&&(W=A.RG32I)),B===A.RGB_INTEGER&&(I===A.UNSIGNED_BYTE&&(W=A.RGB8UI),I===A.UNSIGNED_SHORT&&(W=A.RGB16UI),I===A.UNSIGNED_INT&&(W=A.RGB32UI),I===A.BYTE&&(W=A.RGB8I),I===A.SHORT&&(W=A.RGB16I),I===A.INT&&(W=A.RGB32I)),B===A.RGBA_INTEGER&&(I===A.UNSIGNED_BYTE&&(W=A.RGBA8UI),I===A.UNSIGNED_SHORT&&(W=A.RGBA16UI),I===A.UNSIGNED_INT&&(W=A.RGBA32UI),I===A.BYTE&&(W=A.RGBA8I),I===A.SHORT&&(W=A.RGBA16I),I===A.INT&&(W=A.RGBA32I)),B===A.RGB&&(I===A.UNSIGNED_INT_5_9_9_9_REV&&(W=A.RGB9_E5),I===A.UNSIGNED_INT_10F_11F_11F_REV&&(W=A.R11F_G11F_B10F)),B===A.RGBA){const ve=q?Cs:Ye.getTransfer(Y);I===A.FLOAT&&(W=A.RGBA32F),I===A.HALF_FLOAT&&(W=A.RGBA16F),I===A.UNSIGNED_BYTE&&(W=ve===At?A.SRGB8_ALPHA8:A.RGBA8),I===A.UNSIGNED_SHORT_4_4_4_4&&(W=A.RGBA4),I===A.UNSIGNED_SHORT_5_5_5_1&&(W=A.RGB5_A1)}return(W===A.R16F||W===A.R32F||W===A.RG16F||W===A.RG32F||W===A.RGBA16F||W===A.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function x(S,B){let I;return S?B===null||B===FA||B===ji?I=A.DEPTH24_STENCIL8:B===$t?I=A.DEPTH32F_STENCIL8:B===$i&&(I=A.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):B===null||B===FA||B===ji?I=A.DEPTH_COMPONENT24:B===$t?I=A.DEPTH_COMPONENT32F:B===$i&&(I=A.DEPTH_COMPONENT16),I}function F(S,B){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==It&&S.minFilter!==Je?Math.log2(Math.max(B.width,B.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?B.mipmaps.length:1}function E(S){const B=S.target;B.removeEventListener("dispose",E),m(B),B.isVideoTexture&&l.delete(B)}function M(S){const B=S.target;B.removeEventListener("dispose",M),O(B)}function m(S){const B=n.get(S);if(B.__webglInit===void 0)return;const I=S.source,Y=u.get(I);if(Y){const q=Y[B.__cacheKey];q.usedTimes--,q.usedTimes===0&&_(S),Object.keys(Y).length===0&&u.delete(I)}n.remove(S)}function _(S){const B=n.get(S);A.deleteTexture(B.__webglTexture);const I=S.source,Y=u.get(I);delete Y[B.__cacheKey],s.memory.textures--}function O(S){const B=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(B.__webglFramebuffer[Y]))for(let q=0;q<B.__webglFramebuffer[Y].length;q++)A.deleteFramebuffer(B.__webglFramebuffer[Y][q]);else A.deleteFramebuffer(B.__webglFramebuffer[Y]);B.__webglDepthbuffer&&A.deleteRenderbuffer(B.__webglDepthbuffer[Y])}else{if(Array.isArray(B.__webglFramebuffer))for(let Y=0;Y<B.__webglFramebuffer.length;Y++)A.deleteFramebuffer(B.__webglFramebuffer[Y]);else A.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&A.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&A.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let Y=0;Y<B.__webglColorRenderbuffer.length;Y++)B.__webglColorRenderbuffer[Y]&&A.deleteRenderbuffer(B.__webglColorRenderbuffer[Y]);B.__webglDepthRenderbuffer&&A.deleteRenderbuffer(B.__webglDepthRenderbuffer)}const I=S.textures;for(let Y=0,q=I.length;Y<q;Y++){const W=n.get(I[Y]);W.__webglTexture&&(A.deleteTexture(W.__webglTexture),s.memory.textures--),n.remove(I[Y])}n.remove(S)}let y=0;function P(){y=0}function Q(){const S=y;return S>=i.maxTextures&&Qe("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+i.maxTextures),y+=1,S}function H(S){const B=[];return B.push(S.wrapS),B.push(S.wrapT),B.push(S.wrapR||0),B.push(S.magFilter),B.push(S.minFilter),B.push(S.anisotropy),B.push(S.internalFormat),B.push(S.format),B.push(S.type),B.push(S.generateMipmaps),B.push(S.premultiplyAlpha),B.push(S.flipY),B.push(S.unpackAlignment),B.push(S.colorSpace),B.join()}function N(S,B){const I=n.get(S);if(S.isVideoTexture&&$e(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&I.__version!==S.version){const Y=S.image;if(Y===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{X(I,S,B);return}}else S.isExternalTexture&&(I.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(A.TEXTURE_2D,I.__webglTexture,A.TEXTURE0+B)}function L(S,B){const I=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&I.__version!==S.version){X(I,S,B);return}else S.isExternalTexture&&(I.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(A.TEXTURE_2D_ARRAY,I.__webglTexture,A.TEXTURE0+B)}function R(S,B){const I=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&I.__version!==S.version){X(I,S,B);return}t.bindTexture(A.TEXTURE_3D,I.__webglTexture,A.TEXTURE0+B)}function Z(S,B){const I=n.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&I.__version!==S.version){ee(I,S,B);return}t.bindTexture(A.TEXTURE_CUBE_MAP,I.__webglTexture,A.TEXTURE0+B)}const J={[_s]:A.REPEAT,[sA]:A.CLAMP_TO_EDGE,[lo]:A.MIRRORED_REPEAT},Ae={[It]:A.NEAREST,[Rh]:A.NEAREST_MIPMAP_NEAREST,[mr]:A.NEAREST_MIPMAP_LINEAR,[Je]:A.LINEAR,[Aa]:A.LINEAR_MIPMAP_NEAREST,[un]:A.LINEAR_MIPMAP_LINEAR},de={[Ph]:A.NEVER,[Kh]:A.ALWAYS,[Nh]:A.LESS,[Uc]:A.LEQUAL,[Oh]:A.EQUAL,[Sc]:A.GEQUAL,[Gh]:A.GREATER,[Vh]:A.NOTEQUAL};function ne(S,B){if(B.type===$t&&e.has("OES_texture_float_linear")===!1&&(B.magFilter===Je||B.magFilter===Aa||B.magFilter===mr||B.magFilter===un||B.minFilter===Je||B.minFilter===Aa||B.minFilter===mr||B.minFilter===un)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),A.texParameteri(S,A.TEXTURE_WRAP_S,J[B.wrapS]),A.texParameteri(S,A.TEXTURE_WRAP_T,J[B.wrapT]),(S===A.TEXTURE_3D||S===A.TEXTURE_2D_ARRAY)&&A.texParameteri(S,A.TEXTURE_WRAP_R,J[B.wrapR]),A.texParameteri(S,A.TEXTURE_MAG_FILTER,Ae[B.magFilter]),A.texParameteri(S,A.TEXTURE_MIN_FILTER,Ae[B.minFilter]),B.compareFunction&&(A.texParameteri(S,A.TEXTURE_COMPARE_MODE,A.COMPARE_REF_TO_TEXTURE),A.texParameteri(S,A.TEXTURE_COMPARE_FUNC,de[B.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(B.magFilter===It||B.minFilter!==mr&&B.minFilter!==un||B.type===$t&&e.has("OES_texture_float_linear")===!1)return;if(B.anisotropy>1||n.get(B).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");A.texParameterf(S,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(B.anisotropy,i.getMaxAnisotropy())),n.get(B).__currentAnisotropy=B.anisotropy}}}function Ce(S,B){let I=!1;S.__webglInit===void 0&&(S.__webglInit=!0,B.addEventListener("dispose",E));const Y=B.source;let q=u.get(Y);q===void 0&&(q={},u.set(Y,q));const W=H(B);if(W!==S.__cacheKey){q[W]===void 0&&(q[W]={texture:A.createTexture(),usedTimes:0},s.memory.textures++,I=!0),q[W].usedTimes++;const ve=q[S.__cacheKey];ve!==void 0&&(q[S.__cacheKey].usedTimes--,ve.usedTimes===0&&_(B)),S.__cacheKey=W,S.__webglTexture=q[W].texture}return I}function ze(S,B,I){return Math.floor(Math.floor(S/I)/B)}function We(S,B,I,Y){const W=S.updateRanges;if(W.length===0)t.texSubImage2D(A.TEXTURE_2D,0,0,0,B.width,B.height,I,Y,B.data);else{W.sort(($,ie)=>$.start-ie.start);let ve=0;for(let $=1;$<W.length;$++){const ie=W[ve],we=W[$],xe=ie.start+ie.count,ge=ze(we.start,B.width,4),Oe=ze(ie.start,B.width,4);we.start<=xe+1&&ge===Oe&&ze(we.start+we.count-1,B.width,4)===ge?ie.count=Math.max(ie.count,we.start+we.count-ie.start):(++ve,W[ve]=we)}W.length=ve+1;const se=A.getParameter(A.UNPACK_ROW_LENGTH),Me=A.getParameter(A.UNPACK_SKIP_PIXELS),Te=A.getParameter(A.UNPACK_SKIP_ROWS);A.pixelStorei(A.UNPACK_ROW_LENGTH,B.width);for(let $=0,ie=W.length;$<ie;$++){const we=W[$],xe=Math.floor(we.start/4),ge=Math.ceil(we.count/4),Oe=xe%B.width,T=Math.floor(xe/B.width),ae=ge,re=1;A.pixelStorei(A.UNPACK_SKIP_PIXELS,Oe),A.pixelStorei(A.UNPACK_SKIP_ROWS,T),t.texSubImage2D(A.TEXTURE_2D,0,Oe,T,ae,re,I,Y,B.data)}S.clearUpdateRanges(),A.pixelStorei(A.UNPACK_ROW_LENGTH,se),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Me),A.pixelStorei(A.UNPACK_SKIP_ROWS,Te)}}function X(S,B,I){let Y=A.TEXTURE_2D;(B.isDataArrayTexture||B.isCompressedArrayTexture)&&(Y=A.TEXTURE_2D_ARRAY),B.isData3DTexture&&(Y=A.TEXTURE_3D);const q=Ce(S,B),W=B.source;t.bindTexture(Y,S.__webglTexture,A.TEXTURE0+I);const ve=n.get(W);if(W.version!==ve.__version||q===!0){t.activeTexture(A.TEXTURE0+I);const se=Ye.getPrimaries(Ye.workingColorSpace),Me=B.colorSpace===ln?null:Ye.getPrimaries(B.colorSpace),Te=B.colorSpace===ln||se===Me?A.NONE:A.BROWSER_DEFAULT_WEBGL;A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,B.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,B.unpackAlignment),A.pixelStorei(A.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let $=v(B.image,!1,i.maxTextureSize);$=ct(B,$);const ie=r.convert(B.format,B.colorSpace),we=r.convert(B.type);let xe=U(B.internalFormat,ie,we,B.colorSpace,B.isVideoTexture);ne(Y,B);let ge;const Oe=B.mipmaps,T=B.isVideoTexture!==!0,ae=ve.__version===void 0||q===!0,re=W.dataReady,Be=F(B,$);if(B.isDepthTexture)xe=x(B.format===Rn,B.type),ae&&(T?t.texStorage2D(A.TEXTURE_2D,1,xe,$.width,$.height):t.texImage2D(A.TEXTURE_2D,0,xe,$.width,$.height,0,ie,we,null));else if(B.isDataTexture)if(Oe.length>0){T&&ae&&t.texStorage2D(A.TEXTURE_2D,Be,xe,Oe[0].width,Oe[0].height);for(let j=0,z=Oe.length;j<z;j++)ge=Oe[j],T?re&&t.texSubImage2D(A.TEXTURE_2D,j,0,0,ge.width,ge.height,ie,we,ge.data):t.texImage2D(A.TEXTURE_2D,j,xe,ge.width,ge.height,0,ie,we,ge.data);B.generateMipmaps=!1}else T?(ae&&t.texStorage2D(A.TEXTURE_2D,Be,xe,$.width,$.height),re&&We(B,$,ie,we)):t.texImage2D(A.TEXTURE_2D,0,xe,$.width,$.height,0,ie,we,$.data);else if(B.isCompressedTexture)if(B.isCompressedArrayTexture){T&&ae&&t.texStorage3D(A.TEXTURE_2D_ARRAY,Be,xe,Oe[0].width,Oe[0].height,$.depth);for(let j=0,z=Oe.length;j<z;j++)if(ge=Oe[j],B.format!==gA)if(ie!==null)if(T){if(re)if(B.layerUpdates.size>0){const _e=El(ge.width,ge.height,B.format,B.type);for(const Re of B.layerUpdates){const lt=ge.data.subarray(Re*_e/ge.data.BYTES_PER_ELEMENT,(Re+1)*_e/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(A.TEXTURE_2D_ARRAY,j,0,0,Re,ge.width,ge.height,1,ie,lt)}B.clearLayerUpdates()}else t.compressedTexSubImage3D(A.TEXTURE_2D_ARRAY,j,0,0,0,ge.width,ge.height,$.depth,ie,ge.data)}else t.compressedTexImage3D(A.TEXTURE_2D_ARRAY,j,xe,ge.width,ge.height,$.depth,0,ge.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else T?re&&t.texSubImage3D(A.TEXTURE_2D_ARRAY,j,0,0,0,ge.width,ge.height,$.depth,ie,we,ge.data):t.texImage3D(A.TEXTURE_2D_ARRAY,j,xe,ge.width,ge.height,$.depth,0,ie,we,ge.data)}else{T&&ae&&t.texStorage2D(A.TEXTURE_2D,Be,xe,Oe[0].width,Oe[0].height);for(let j=0,z=Oe.length;j<z;j++)ge=Oe[j],B.format!==gA?ie!==null?T?re&&t.compressedTexSubImage2D(A.TEXTURE_2D,j,0,0,ge.width,ge.height,ie,ge.data):t.compressedTexImage2D(A.TEXTURE_2D,j,xe,ge.width,ge.height,0,ge.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):T?re&&t.texSubImage2D(A.TEXTURE_2D,j,0,0,ge.width,ge.height,ie,we,ge.data):t.texImage2D(A.TEXTURE_2D,j,xe,ge.width,ge.height,0,ie,we,ge.data)}else if(B.isDataArrayTexture)if(T){if(ae&&t.texStorage3D(A.TEXTURE_2D_ARRAY,Be,xe,$.width,$.height,$.depth),re)if(B.layerUpdates.size>0){const j=El($.width,$.height,B.format,B.type);for(const z of B.layerUpdates){const _e=$.data.subarray(z*j/$.data.BYTES_PER_ELEMENT,(z+1)*j/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(A.TEXTURE_2D_ARRAY,0,0,0,z,$.width,$.height,1,ie,we,_e)}B.clearLayerUpdates()}else t.texSubImage3D(A.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ie,we,$.data)}else t.texImage3D(A.TEXTURE_2D_ARRAY,0,xe,$.width,$.height,$.depth,0,ie,we,$.data);else if(B.isData3DTexture)T?(ae&&t.texStorage3D(A.TEXTURE_3D,Be,xe,$.width,$.height,$.depth),re&&t.texSubImage3D(A.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ie,we,$.data)):t.texImage3D(A.TEXTURE_3D,0,xe,$.width,$.height,$.depth,0,ie,we,$.data);else if(B.isFramebufferTexture){if(ae)if(T)t.texStorage2D(A.TEXTURE_2D,Be,xe,$.width,$.height);else{let j=$.width,z=$.height;for(let _e=0;_e<Be;_e++)t.texImage2D(A.TEXTURE_2D,_e,xe,j,z,0,ie,we,null),j>>=1,z>>=1}}else if(Oe.length>0){if(T&&ae){const j=Ue(Oe[0]);t.texStorage2D(A.TEXTURE_2D,Be,xe,j.width,j.height)}for(let j=0,z=Oe.length;j<z;j++)ge=Oe[j],T?re&&t.texSubImage2D(A.TEXTURE_2D,j,0,0,ie,we,ge):t.texImage2D(A.TEXTURE_2D,j,xe,ie,we,ge);B.generateMipmaps=!1}else if(T){if(ae){const j=Ue($);t.texStorage2D(A.TEXTURE_2D,Be,xe,j.width,j.height)}re&&t.texSubImage2D(A.TEXTURE_2D,0,0,0,ie,we,$)}else t.texImage2D(A.TEXTURE_2D,0,xe,ie,we,$);p(B)&&d(Y),ve.__version=W.version,B.onUpdate&&B.onUpdate(B)}S.__version=B.version}function ee(S,B,I){if(B.image.length!==6)return;const Y=Ce(S,B),q=B.source;t.bindTexture(A.TEXTURE_CUBE_MAP,S.__webglTexture,A.TEXTURE0+I);const W=n.get(q);if(q.version!==W.__version||Y===!0){t.activeTexture(A.TEXTURE0+I);const ve=Ye.getPrimaries(Ye.workingColorSpace),se=B.colorSpace===ln?null:Ye.getPrimaries(B.colorSpace),Me=B.colorSpace===ln||ve===se?A.NONE:A.BROWSER_DEFAULT_WEBGL;A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,B.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,B.unpackAlignment),A.pixelStorei(A.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Te=B.isCompressedTexture||B.image[0].isCompressedTexture,$=B.image[0]&&B.image[0].isDataTexture,ie=[];for(let z=0;z<6;z++)!Te&&!$?ie[z]=v(B.image[z],!0,i.maxCubemapSize):ie[z]=$?B.image[z].image:B.image[z],ie[z]=ct(B,ie[z]);const we=ie[0],xe=r.convert(B.format,B.colorSpace),ge=r.convert(B.type),Oe=U(B.internalFormat,xe,ge,B.colorSpace),T=B.isVideoTexture!==!0,ae=W.__version===void 0||Y===!0,re=q.dataReady;let Be=F(B,we);ne(A.TEXTURE_CUBE_MAP,B);let j;if(Te){T&&ae&&t.texStorage2D(A.TEXTURE_CUBE_MAP,Be,Oe,we.width,we.height);for(let z=0;z<6;z++){j=ie[z].mipmaps;for(let _e=0;_e<j.length;_e++){const Re=j[_e];B.format!==gA?xe!==null?T?re&&t.compressedTexSubImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+z,_e,0,0,Re.width,Re.height,xe,Re.data):t.compressedTexImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+z,_e,Oe,Re.width,Re.height,0,Re.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):T?re&&t.texSubImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+z,_e,0,0,Re.width,Re.height,xe,ge,Re.data):t.texImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+z,_e,Oe,Re.width,Re.height,0,xe,ge,Re.data)}}}else{if(j=B.mipmaps,T&&ae){j.length>0&&Be++;const z=Ue(ie[0]);t.texStorage2D(A.TEXTURE_CUBE_MAP,Be,Oe,z.width,z.height)}for(let z=0;z<6;z++)if($){T?re&&t.texSubImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,ie[z].width,ie[z].height,xe,ge,ie[z].data):t.texImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,Oe,ie[z].width,ie[z].height,0,xe,ge,ie[z].data);for(let _e=0;_e<j.length;_e++){const lt=j[_e].image[z].image;T?re&&t.texSubImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+z,_e+1,0,0,lt.width,lt.height,xe,ge,lt.data):t.texImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+z,_e+1,Oe,lt.width,lt.height,0,xe,ge,lt.data)}}else{T?re&&t.texSubImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,xe,ge,ie[z]):t.texImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,Oe,xe,ge,ie[z]);for(let _e=0;_e<j.length;_e++){const Re=j[_e];T?re&&t.texSubImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+z,_e+1,0,0,xe,ge,Re.image[z]):t.texImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+z,_e+1,Oe,xe,ge,Re.image[z])}}}p(B)&&d(A.TEXTURE_CUBE_MAP),W.__version=q.version,B.onUpdate&&B.onUpdate(B)}S.__version=B.version}function oe(S,B,I,Y,q,W){const ve=r.convert(I.format,I.colorSpace),se=r.convert(I.type),Me=U(I.internalFormat,ve,se,I.colorSpace),Te=n.get(B),$=n.get(I);if($.__renderTarget=B,!Te.__hasExternalTextures){const ie=Math.max(1,B.width>>W),we=Math.max(1,B.height>>W);q===A.TEXTURE_3D||q===A.TEXTURE_2D_ARRAY?t.texImage3D(q,W,Me,ie,we,B.depth,0,ve,se,null):t.texImage2D(q,W,Me,ie,we,0,ve,se,null)}t.bindFramebuffer(A.FRAMEBUFFER,S),vt(B)?a.framebufferTexture2DMultisampleEXT(A.FRAMEBUFFER,Y,q,$.__webglTexture,0,b(B)):(q===A.TEXTURE_2D||q>=A.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=A.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&A.framebufferTexture2D(A.FRAMEBUFFER,Y,q,$.__webglTexture,W),t.bindFramebuffer(A.FRAMEBUFFER,null)}function De(S,B,I){if(A.bindRenderbuffer(A.RENDERBUFFER,S),B.depthBuffer){const Y=B.depthTexture,q=Y&&Y.isDepthTexture?Y.type:null,W=x(B.stencilBuffer,q),ve=B.stencilBuffer?A.DEPTH_STENCIL_ATTACHMENT:A.DEPTH_ATTACHMENT;vt(B)?a.renderbufferStorageMultisampleEXT(A.RENDERBUFFER,b(B),W,B.width,B.height):I?A.renderbufferStorageMultisample(A.RENDERBUFFER,b(B),W,B.width,B.height):A.renderbufferStorage(A.RENDERBUFFER,W,B.width,B.height),A.framebufferRenderbuffer(A.FRAMEBUFFER,ve,A.RENDERBUFFER,S)}else{const Y=B.textures;for(let q=0;q<Y.length;q++){const W=Y[q],ve=r.convert(W.format,W.colorSpace),se=r.convert(W.type),Me=U(W.internalFormat,ve,se,W.colorSpace);vt(B)?a.renderbufferStorageMultisampleEXT(A.RENDERBUFFER,b(B),Me,B.width,B.height):I?A.renderbufferStorageMultisample(A.RENDERBUFFER,b(B),Me,B.width,B.height):A.renderbufferStorage(A.RENDERBUFFER,Me,B.width,B.height)}}A.bindRenderbuffer(A.RENDERBUFFER,null)}function be(S,B,I){const Y=B.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(A.FRAMEBUFFER,S),!(B.depthTexture&&B.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(B.depthTexture);if(q.__renderTarget=B,(!q.__webglTexture||B.depthTexture.image.width!==B.width||B.depthTexture.image.height!==B.height)&&(B.depthTexture.image.width=B.width,B.depthTexture.image.height=B.height,B.depthTexture.needsUpdate=!0),Y){if(q.__webglInit===void 0&&(q.__webglInit=!0,B.depthTexture.addEventListener("dispose",E)),q.__webglTexture===void 0){q.__webglTexture=A.createTexture(),t.bindTexture(A.TEXTURE_CUBE_MAP,q.__webglTexture),ne(A.TEXTURE_CUBE_MAP,B.depthTexture);const Te=r.convert(B.depthTexture.format),$=r.convert(B.depthTexture.type);let ie;B.depthTexture.format===XA?ie=A.DEPTH_COMPONENT24:B.depthTexture.format===Rn&&(ie=A.DEPTH24_STENCIL8);for(let we=0;we<6;we++)A.texImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ie,B.width,B.height,0,Te,$,null)}}else N(B.depthTexture,0);const W=q.__webglTexture,ve=b(B),se=Y?A.TEXTURE_CUBE_MAP_POSITIVE_X+I:A.TEXTURE_2D,Me=B.depthTexture.format===Rn?A.DEPTH_STENCIL_ATTACHMENT:A.DEPTH_ATTACHMENT;if(B.depthTexture.format===XA)vt(B)?a.framebufferTexture2DMultisampleEXT(A.FRAMEBUFFER,Me,se,W,0,ve):A.framebufferTexture2D(A.FRAMEBUFFER,Me,se,W,0);else if(B.depthTexture.format===Rn)vt(B)?a.framebufferTexture2DMultisampleEXT(A.FRAMEBUFFER,Me,se,W,0,ve):A.framebufferTexture2D(A.FRAMEBUFFER,Me,se,W,0);else throw new Error("Unknown depthTexture format")}function Ie(S){const B=n.get(S),I=S.isWebGLCubeRenderTarget===!0;if(B.__boundDepthTexture!==S.depthTexture){const Y=S.depthTexture;if(B.__depthDisposeCallback&&B.__depthDisposeCallback(),Y){const q=()=>{delete B.__boundDepthTexture,delete B.__depthDisposeCallback,Y.removeEventListener("dispose",q)};Y.addEventListener("dispose",q),B.__depthDisposeCallback=q}B.__boundDepthTexture=Y}if(S.depthTexture&&!B.__autoAllocateDepthBuffer)if(I)for(let Y=0;Y<6;Y++)be(B.__webglFramebuffer[Y],S,Y);else{const Y=S.texture.mipmaps;Y&&Y.length>0?be(B.__webglFramebuffer[0],S,0):be(B.__webglFramebuffer,S,0)}else if(I){B.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(A.FRAMEBUFFER,B.__webglFramebuffer[Y]),B.__webglDepthbuffer[Y]===void 0)B.__webglDepthbuffer[Y]=A.createRenderbuffer(),De(B.__webglDepthbuffer[Y],S,!1);else{const q=S.stencilBuffer?A.DEPTH_STENCIL_ATTACHMENT:A.DEPTH_ATTACHMENT,W=B.__webglDepthbuffer[Y];A.bindRenderbuffer(A.RENDERBUFFER,W),A.framebufferRenderbuffer(A.FRAMEBUFFER,q,A.RENDERBUFFER,W)}}else{const Y=S.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(A.FRAMEBUFFER,B.__webglFramebuffer[0]):t.bindFramebuffer(A.FRAMEBUFFER,B.__webglFramebuffer),B.__webglDepthbuffer===void 0)B.__webglDepthbuffer=A.createRenderbuffer(),De(B.__webglDepthbuffer,S,!1);else{const q=S.stencilBuffer?A.DEPTH_STENCIL_ATTACHMENT:A.DEPTH_ATTACHMENT,W=B.__webglDepthbuffer;A.bindRenderbuffer(A.RENDERBUFFER,W),A.framebufferRenderbuffer(A.FRAMEBUFFER,q,A.RENDERBUFFER,W)}}t.bindFramebuffer(A.FRAMEBUFFER,null)}function Ft(S,B,I){const Y=n.get(S);B!==void 0&&oe(Y.__webglFramebuffer,S,S.texture,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,0),I!==void 0&&Ie(S)}function Xe(S){const B=S.texture,I=n.get(S),Y=n.get(B);S.addEventListener("dispose",M);const q=S.textures,W=S.isWebGLCubeRenderTarget===!0,ve=q.length>1;if(ve||(Y.__webglTexture===void 0&&(Y.__webglTexture=A.createTexture()),Y.__version=B.version,s.memory.textures++),W){I.__webglFramebuffer=[];for(let se=0;se<6;se++)if(B.mipmaps&&B.mipmaps.length>0){I.__webglFramebuffer[se]=[];for(let Me=0;Me<B.mipmaps.length;Me++)I.__webglFramebuffer[se][Me]=A.createFramebuffer()}else I.__webglFramebuffer[se]=A.createFramebuffer()}else{if(B.mipmaps&&B.mipmaps.length>0){I.__webglFramebuffer=[];for(let se=0;se<B.mipmaps.length;se++)I.__webglFramebuffer[se]=A.createFramebuffer()}else I.__webglFramebuffer=A.createFramebuffer();if(ve)for(let se=0,Me=q.length;se<Me;se++){const Te=n.get(q[se]);Te.__webglTexture===void 0&&(Te.__webglTexture=A.createTexture(),s.memory.textures++)}if(S.samples>0&&vt(S)===!1){I.__webglMultisampledFramebuffer=A.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(A.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let se=0;se<q.length;se++){const Me=q[se];I.__webglColorRenderbuffer[se]=A.createRenderbuffer(),A.bindRenderbuffer(A.RENDERBUFFER,I.__webglColorRenderbuffer[se]);const Te=r.convert(Me.format,Me.colorSpace),$=r.convert(Me.type),ie=U(Me.internalFormat,Te,$,Me.colorSpace,S.isXRRenderTarget===!0),we=b(S);A.renderbufferStorageMultisample(A.RENDERBUFFER,we,ie,S.width,S.height),A.framebufferRenderbuffer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+se,A.RENDERBUFFER,I.__webglColorRenderbuffer[se])}A.bindRenderbuffer(A.RENDERBUFFER,null),S.depthBuffer&&(I.__webglDepthRenderbuffer=A.createRenderbuffer(),De(I.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(A.FRAMEBUFFER,null)}}if(W){t.bindTexture(A.TEXTURE_CUBE_MAP,Y.__webglTexture),ne(A.TEXTURE_CUBE_MAP,B);for(let se=0;se<6;se++)if(B.mipmaps&&B.mipmaps.length>0)for(let Me=0;Me<B.mipmaps.length;Me++)oe(I.__webglFramebuffer[se][Me],S,B,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me);else oe(I.__webglFramebuffer[se],S,B,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);p(B)&&d(A.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let se=0,Me=q.length;se<Me;se++){const Te=q[se],$=n.get(Te);let ie=A.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ie=S.isWebGL3DRenderTarget?A.TEXTURE_3D:A.TEXTURE_2D_ARRAY),t.bindTexture(ie,$.__webglTexture),ne(ie,Te),oe(I.__webglFramebuffer,S,Te,A.COLOR_ATTACHMENT0+se,ie,0),p(Te)&&d(ie)}t.unbindTexture()}else{let se=A.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(se=S.isWebGL3DRenderTarget?A.TEXTURE_3D:A.TEXTURE_2D_ARRAY),t.bindTexture(se,Y.__webglTexture),ne(se,B),B.mipmaps&&B.mipmaps.length>0)for(let Me=0;Me<B.mipmaps.length;Me++)oe(I.__webglFramebuffer[Me],S,B,A.COLOR_ATTACHMENT0,se,Me);else oe(I.__webglFramebuffer,S,B,A.COLOR_ATTACHMENT0,se,0);p(B)&&d(se),t.unbindTexture()}S.depthBuffer&&Ie(S)}function et(S){const B=S.textures;for(let I=0,Y=B.length;I<Y;I++){const q=B[I];if(p(q)){const W=w(S),ve=n.get(q).__webglTexture;t.bindTexture(W,ve),d(W),t.unbindTexture()}}}const at=[],Ne=[];function ht(S){if(S.samples>0){if(vt(S)===!1){const B=S.textures,I=S.width,Y=S.height;let q=A.COLOR_BUFFER_BIT;const W=S.stencilBuffer?A.DEPTH_STENCIL_ATTACHMENT:A.DEPTH_ATTACHMENT,ve=n.get(S),se=B.length>1;if(se)for(let Te=0;Te<B.length;Te++)t.bindFramebuffer(A.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),A.framebufferRenderbuffer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Te,A.RENDERBUFFER,null),t.bindFramebuffer(A.FRAMEBUFFER,ve.__webglFramebuffer),A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0+Te,A.TEXTURE_2D,null,0);t.bindFramebuffer(A.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const Me=S.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(A.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(A.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Te=0;Te<B.length;Te++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(q|=A.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(q|=A.STENCIL_BUFFER_BIT)),se){A.framebufferRenderbuffer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.RENDERBUFFER,ve.__webglColorRenderbuffer[Te]);const $=n.get(B[Te]).__webglTexture;A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,$,0)}A.blitFramebuffer(0,0,I,Y,0,0,I,Y,q,A.NEAREST),o===!0&&(at.length=0,Ne.length=0,at.push(A.COLOR_ATTACHMENT0+Te),S.depthBuffer&&S.resolveDepthBuffer===!1&&(at.push(W),Ne.push(W),A.invalidateFramebuffer(A.DRAW_FRAMEBUFFER,Ne)),A.invalidateFramebuffer(A.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(A.READ_FRAMEBUFFER,null),t.bindFramebuffer(A.DRAW_FRAMEBUFFER,null),se)for(let Te=0;Te<B.length;Te++){t.bindFramebuffer(A.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),A.framebufferRenderbuffer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Te,A.RENDERBUFFER,ve.__webglColorRenderbuffer[Te]);const $=n.get(B[Te]).__webglTexture;t.bindFramebuffer(A.FRAMEBUFFER,ve.__webglFramebuffer),A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0+Te,A.TEXTURE_2D,$,0)}t.bindFramebuffer(A.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&o){const B=S.stencilBuffer?A.DEPTH_STENCIL_ATTACHMENT:A.DEPTH_ATTACHMENT;A.invalidateFramebuffer(A.DRAW_FRAMEBUFFER,[B])}}}function b(S){return Math.min(i.maxSamples,S.samples)}function vt(S){const B=n.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&B.__useRenderToTexture!==!1}function $e(S){const B=s.render.frame;l.get(S)!==B&&(l.set(S,B),S.update())}function ct(S,B){const I=S.colorSpace,Y=S.format,q=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||I!==Nn&&I!==ln&&(Ye.getTransfer(I)===At?(Y!==gA||q!==rA)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",I)),B}function Ue(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=P,this.setTexture2D=N,this.setTexture2DArray=L,this.setTexture3D=R,this.setTextureCube=Z,this.rebindTextures=Ft,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=vt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Bv(A,e){function t(n,i=ln){let r;const s=Ye.getTransfer(i);if(n===rA)return A.UNSIGNED_BYTE;if(n===wc)return A.UNSIGNED_SHORT_4_4_4_4;if(n===_c)return A.UNSIGNED_SHORT_5_5_5_1;if(n===cf)return A.UNSIGNED_INT_5_9_9_9_REV;if(n===lf)return A.UNSIGNED_INT_10F_11F_11F_REV;if(n===af)return A.BYTE;if(n===of)return A.SHORT;if(n===$i)return A.UNSIGNED_SHORT;if(n===vc)return A.INT;if(n===FA)return A.UNSIGNED_INT;if(n===$t)return A.FLOAT;if(n===jt)return A.HALF_FLOAT;if(n===uf)return A.ALPHA;if(n===ff)return A.RGB;if(n===gA)return A.RGBA;if(n===XA)return A.DEPTH_COMPONENT;if(n===Rn)return A.DEPTH_STENCIL;if(n===df)return A.RED;if(n===Cc)return A.RED_INTEGER;if(n===Bi)return A.RG;if(n===xc)return A.RG_INTEGER;if(n===Ec)return A.RGBA_INTEGER;if(n===fs||n===ds||n===hs||n===ps)if(s===At)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ds)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ps)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===uo||n===fo||n===ho||n===po)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===uo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ho)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===po)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===go||n===mo||n===Bo||n===vo||n===wo||n===_o||n===Co)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===go||n===mo)return s===At?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Bo)return s===At?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===vo)return r.COMPRESSED_R11_EAC;if(n===wo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===_o)return r.COMPRESSED_RG11_EAC;if(n===Co)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===xo||n===Eo||n===Uo||n===So||n===Fo||n===yo||n===Mo||n===bo||n===To||n===Qo||n===Io||n===Ro||n===Lo||n===Do)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xo)return s===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eo)return s===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Uo)return s===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===So)return s===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fo)return s===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yo)return s===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mo)return s===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bo)return s===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===To)return s===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qo)return s===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Io)return s===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ro)return s===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lo)return s===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Do)return s===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ho||n===Po||n===No)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ho)return s===At?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Po)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===No)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oo||n===Go||n===Vo||n===Ko)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Oo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Go)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ko)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ji?A.UNSIGNED_INT_24_8:A[n]!==void 0?A[n]:null}return{convert:t}}const vv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _v{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ef(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Kt({vertexShader:vv,fragmentShader:wv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xt(new ZA(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cv extends xi{constructor(e,t){super();const n=this;let i=null,r=1,s=null,a="local-floor",o=1,c=null,l=null,f=null,u=null,h=null,g=null;const v=typeof XRWebGLBinding<"u",p=new _v,d={},w=t.getContextAttributes();let U=null,x=null;const F=[],E=[],M=new Ve;let m=null;const _=new hA;_.viewport=new Bt;const O=new hA;O.viewport=new Bt;const y=[_,O],P=new Rp;let Q=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ee=F[X];return ee===void 0&&(ee=new la,F[X]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(X){let ee=F[X];return ee===void 0&&(ee=new la,F[X]=ee),ee.getGripSpace()},this.getHand=function(X){let ee=F[X];return ee===void 0&&(ee=new la,F[X]=ee),ee.getHandSpace()};function N(X){const ee=E.indexOf(X.inputSource);if(ee===-1)return;const oe=F[ee];oe!==void 0&&(oe.update(X.inputSource,X.frame,c||s),oe.dispatchEvent({type:X.type,data:X.inputSource}))}function L(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",R);for(let X=0;X<F.length;X++){const ee=E[X];ee!==null&&(E[X]=null,F[X].disconnect(ee))}Q=null,H=null,p.reset();for(const X in d)delete d[X];e.setRenderTarget(U),h=null,u=null,f=null,i=null,x=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(m),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(U=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",L),i.addEventListener("inputsourceschange",R),w.xrCompatible!==!0&&await t.makeXRCompatible(),m=e.getPixelRatio(),e.getSize(M),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,De=null,be=null;w.depth&&(be=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=w.stencil?Rn:XA,De=w.stencil?ji:FA);const Ie={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Ie),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new UA(u.textureWidth,u.textureHeight,{format:gA,type:rA,depthTexture:new er(u.textureWidth,u.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const oe={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(i,t,oe),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new UA(h.framebufferWidth,h.framebufferHeight,{format:gA,type:rA,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(o),c=null,s=await i.requestReferenceSpace(a),We.setContext(i),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function R(X){for(let ee=0;ee<X.removed.length;ee++){const oe=X.removed[ee],De=E.indexOf(oe);De>=0&&(E[De]=null,F[De].disconnect(oe))}for(let ee=0;ee<X.added.length;ee++){const oe=X.added[ee];let De=E.indexOf(oe);if(De===-1){for(let Ie=0;Ie<F.length;Ie++)if(Ie>=E.length){E.push(oe),De=Ie;break}else if(E[Ie]===null){E[Ie]=oe,De=Ie;break}if(De===-1)break}const be=F[De];be&&be.connect(oe)}}const Z=new G,J=new G;function Ae(X,ee,oe){Z.setFromMatrixPosition(ee.matrixWorld),J.setFromMatrixPosition(oe.matrixWorld);const De=Z.distanceTo(J),be=ee.projectionMatrix.elements,Ie=oe.projectionMatrix.elements,Ft=be[14]/(be[10]-1),Xe=be[14]/(be[10]+1),et=(be[9]+1)/be[5],at=(be[9]-1)/be[5],Ne=(be[8]-1)/be[0],ht=(Ie[8]+1)/Ie[0],b=Ft*Ne,vt=Ft*ht,$e=De/(-Ne+ht),ct=$e*-Ne;if(ee.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ct),X.translateZ($e),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),be[10]===-1)X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Ue=Ft+$e,S=Xe+$e,B=b-ct,I=vt+(De-ct),Y=et*Xe/S*Ue,q=at*Xe/S*Ue;X.projectionMatrix.makePerspective(B,I,Y,q,Ue,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function de(X,ee){ee===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ee.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let ee=X.near,oe=X.far;p.texture!==null&&(p.depthNear>0&&(ee=p.depthNear),p.depthFar>0&&(oe=p.depthFar)),P.near=O.near=_.near=ee,P.far=O.far=_.far=oe,(Q!==P.near||H!==P.far)&&(i.updateRenderState({depthNear:P.near,depthFar:P.far}),Q=P.near,H=P.far),P.layers.mask=X.layers.mask|6,_.layers.mask=P.layers.mask&-5,O.layers.mask=P.layers.mask&-3;const De=X.parent,be=P.cameras;de(P,De);for(let Ie=0;Ie<be.length;Ie++)de(be[Ie],De);be.length===2?Ae(P,_,O):P.projectionMatrix.copy(_.projectionMatrix),ne(X,P,De)};function ne(X,ee,oe){oe===null?X.matrix.copy(ee.matrixWorld):(X.matrix.copy(oe.matrixWorld),X.matrix.invert(),X.matrix.multiply(ee.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ko*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(u===null&&h===null))return o},this.setFoveation=function(X){o=X,u!==null&&(u.fixedFoveation=X),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=X)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(P)},this.getCameraTexture=function(X){return d[X]};let Ce=null;function ze(X,ee){if(l=ee.getViewerPose(c||s),g=ee,l!==null){const oe=l.views;h!==null&&(e.setRenderTargetFramebuffer(x,h.framebuffer),e.setRenderTarget(x));let De=!1;oe.length!==P.cameras.length&&(P.cameras.length=0,De=!0);for(let Xe=0;Xe<oe.length;Xe++){const et=oe[Xe];let at=null;if(h!==null)at=h.getViewport(et);else{const ht=f.getViewSubImage(u,et);at=ht.viewport,Xe===0&&(e.setRenderTargetTextures(x,ht.colorTexture,ht.depthStencilTexture),e.setRenderTarget(x))}let Ne=y[Xe];Ne===void 0&&(Ne=new hA,Ne.layers.enable(Xe),Ne.viewport=new Bt,y[Xe]=Ne),Ne.matrix.fromArray(et.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(et.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(at.x,at.y,at.width,at.height),Xe===0&&(P.matrix.copy(Ne.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),De===!0&&P.cameras.push(Ne)}const be=i.enabledFeatures;if(be&&be.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){f=n.getBinding();const Xe=f.getDepthInformation(oe[0]);Xe&&Xe.isValid&&Xe.texture&&p.init(Xe,i.renderState)}if(be&&be.includes("camera-access")&&v){e.state.unbindTexture(),f=n.getBinding();for(let Xe=0;Xe<oe.length;Xe++){const et=oe[Xe].camera;if(et){let at=d[et];at||(at=new Ef,d[et]=at);const Ne=f.getCameraImage(et);at.sourceTexture=Ne}}}}for(let oe=0;oe<F.length;oe++){const De=E[oe],be=F[oe];De!==null&&be!==void 0&&be.update(De,ee,c||s)}Ce&&Ce(X,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const We=new Ff;We.setAnimationLoop(ze),this.setAnimationLoop=function(X){Ce=X},this.dispose=function(){}}}const Fn=new YA,xv=new xt;function Ev(A,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Uf(A)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,w,U,x){d.isMeshBasicMaterial?r(p,d):d.isMeshLambertMaterial?(r(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(p,d),f(p,d)):d.isMeshPhongMaterial?(r(p,d),l(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(p,d),u(p,d),d.isMeshPhysicalMaterial&&h(p,d,x)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),v(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?o(p,d,w,U):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Wt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Wt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const w=e.get(d),U=w.envMap,x=w.envMapRotation;U&&(p.envMap.value=U,Fn.copy(x),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),p.envMapRotation.value.setFromMatrix4(xv.makeRotationFromEuler(Fn)),p.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function o(p,d,w,U){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*w,p.scale.value=U*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function u(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,w){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Wt&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){const w=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Uv(A,e,t,n){let i={},r={},s=[];const a=A.getParameter(A.MAX_UNIFORM_BUFFER_BINDINGS);function o(w,U){const x=U.program;n.uniformBlockBinding(w,x)}function c(w,U){let x=i[w.id];x===void 0&&(g(w),x=l(w),i[w.id]=x,w.addEventListener("dispose",p));const F=U.program;n.updateUBOMapping(w,F);const E=e.render.frame;r[w.id]!==E&&(u(w),r[w.id]=E)}function l(w){const U=f();w.__bindingPointIndex=U;const x=A.createBuffer(),F=w.__size,E=w.usage;return A.bindBuffer(A.UNIFORM_BUFFER,x),A.bufferData(A.UNIFORM_BUFFER,F,E),A.bindBuffer(A.UNIFORM_BUFFER,null),A.bindBufferBase(A.UNIFORM_BUFFER,U,x),x}function f(){for(let w=0;w<a;w++)if(s.indexOf(w)===-1)return s.push(w),w;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){const U=i[w.id],x=w.uniforms,F=w.__cache;A.bindBuffer(A.UNIFORM_BUFFER,U);for(let E=0,M=x.length;E<M;E++){const m=Array.isArray(x[E])?x[E]:[x[E]];for(let _=0,O=m.length;_<O;_++){const y=m[_];if(h(y,E,_,F)===!0){const P=y.__offset,Q=Array.isArray(y.value)?y.value:[y.value];let H=0;for(let N=0;N<Q.length;N++){const L=Q[N],R=v(L);typeof L=="number"||typeof L=="boolean"?(y.__data[0]=L,A.bufferSubData(A.UNIFORM_BUFFER,P+H,y.__data)):L.isMatrix3?(y.__data[0]=L.elements[0],y.__data[1]=L.elements[1],y.__data[2]=L.elements[2],y.__data[3]=0,y.__data[4]=L.elements[3],y.__data[5]=L.elements[4],y.__data[6]=L.elements[5],y.__data[7]=0,y.__data[8]=L.elements[6],y.__data[9]=L.elements[7],y.__data[10]=L.elements[8],y.__data[11]=0):(L.toArray(y.__data,H),H+=R.storage/Float32Array.BYTES_PER_ELEMENT)}A.bufferSubData(A.UNIFORM_BUFFER,P,y.__data)}}}A.bindBuffer(A.UNIFORM_BUFFER,null)}function h(w,U,x,F){const E=w.value,M=U+"_"+x;if(F[M]===void 0)return typeof E=="number"||typeof E=="boolean"?F[M]=E:F[M]=E.clone(),!0;{const m=F[M];if(typeof E=="number"||typeof E=="boolean"){if(m!==E)return F[M]=E,!0}else if(m.equals(E)===!1)return m.copy(E),!0}return!1}function g(w){const U=w.uniforms;let x=0;const F=16;for(let M=0,m=U.length;M<m;M++){const _=Array.isArray(U[M])?U[M]:[U[M]];for(let O=0,y=_.length;O<y;O++){const P=_[O],Q=Array.isArray(P.value)?P.value:[P.value];for(let H=0,N=Q.length;H<N;H++){const L=Q[H],R=v(L),Z=x%F,J=Z%R.boundary,Ae=Z+J;x+=J,Ae!==0&&F-Ae<R.storage&&(x+=F-Ae),P.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=x,x+=R.storage}}}const E=x%F;return E>0&&(x+=F-E),w.__size=x,w.__cache={},this}function v(w){const U={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(U.boundary=4,U.storage=4):w.isVector2?(U.boundary=8,U.storage=8):w.isVector3||w.isColor?(U.boundary=16,U.storage=12):w.isVector4?(U.boundary=16,U.storage=16):w.isMatrix3?(U.boundary=48,U.storage=48):w.isMatrix4?(U.boundary=64,U.storage=64):w.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Qe("WebGLRenderer: Unsupported uniform value type.",w),U}function p(w){const U=w.target;U.removeEventListener("dispose",p);const x=s.indexOf(U.__bindingPointIndex);s.splice(x,1),A.deleteBuffer(i[U.id]),delete i[U.id],delete r[U.id]}function d(){for(const w in i)A.deleteBuffer(i[w]);s=[],i={},r={}}return{bind:o,update:c,dispose:d}}const Sv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wA=null;function Fv(){return wA===null&&(wA=new _f(Sv,16,16,Bi,jt),wA.name="DFG_LUT",wA.minFilter=Je,wA.magFilter=Je,wA.wrapS=sA,wA.wrapT=sA,wA.generateMipmaps=!1,wA.needsUpdate=!0),wA}class lr{constructor(e={}){const{canvas:t=zh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:h=rA}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=s;const v=h,p=new Set([Ec,xc,Cc]),d=new Set([rA,FA,$i,ji,wc,_c]),w=new Uint32Array(4),U=new Int32Array(4);let x=null,F=null;const E=[],M=[];let m=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=EA,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let O=!1;this._outputColorSpace=nA;let y=0,P=0,Q=null,H=-1,N=null;const L=new Bt,R=new Bt;let Z=null;const J=new rt(0);let Ae=0,de=t.width,ne=t.height,Ce=1,ze=null,We=null;const X=new Bt(0,0,de,ne),ee=new Bt(0,0,de,ne);let oe=!1;const De=new Cf;let be=!1,Ie=!1;const Ft=new xt,Xe=new G,et=new Bt,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function ht(){return Q===null?Ce:1}let b=n;function vt(C,D){return t.getContext(C,D)}try{const C={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bc}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",lt,!1),b===null){const D="webgl2";if(b=vt(D,C),b===null)throw vt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Ze("WebGLRenderer: "+C.message),C}let $e,ct,Ue,S,B,I,Y,q,W,ve,se,Me,Te,$,ie,we,xe,ge,Oe,T,ae,re,Be;function j(){$e=new y0(b),$e.init(),ae=new Bv(b,$e),ct=new w0(b,$e,e,ae),Ue=new gv(b,$e),ct.reversedDepthBuffer&&u&&Ue.buffers.depth.setReversed(!0),S=new T0(b),B=new Av,I=new mv(b,$e,Ue,B,ct,ae,S),Y=new F0(_),q=new Dp(b),re=new B0(b,q),W=new M0(b,q,S,re),ve=new I0(b,W,q,re,S),ge=new Q0(b,ct,I),ie=new _0(B),se=new tv(_,Y,$e,ct,re,ie),Me=new Ev(_,B),Te=new iv,$=new lv($e),xe=new m0(_,Y,Ue,ve,g,o),we=new pv(_,ve,ct),Be=new Uv(b,S,ct,Ue),Oe=new v0(b,$e,S),T=new b0(b,$e,S),S.programs=se.programs,_.capabilities=ct,_.extensions=$e,_.properties=B,_.renderLists=Te,_.shadowMap=we,_.state=Ue,_.info=S}j(),v!==rA&&(m=new L0(v,t.width,t.height,i,r));const z=new Cv(_,b);this.xr=z,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const C=$e.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=$e.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(C){C!==void 0&&(Ce=C,this.setSize(de,ne,!1))},this.getSize=function(C){return C.set(de,ne)},this.setSize=function(C,D,k=!0){if(z.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}de=C,ne=D,t.width=Math.floor(C*Ce),t.height=Math.floor(D*Ce),k===!0&&(t.style.width=C+"px",t.style.height=D+"px"),m!==null&&m.setSize(t.width,t.height),this.setViewport(0,0,C,D)},this.getDrawingBufferSize=function(C){return C.set(de*Ce,ne*Ce).floor()},this.setDrawingBufferSize=function(C,D,k){de=C,ne=D,Ce=k,t.width=Math.floor(C*k),t.height=Math.floor(D*k),this.setViewport(0,0,C,D)},this.setEffects=function(C){if(v===rA){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let D=0;D<C.length;D++)if(C[D].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}m.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(L)},this.getViewport=function(C){return C.copy(X)},this.setViewport=function(C,D,k,K){C.isVector4?X.set(C.x,C.y,C.z,C.w):X.set(C,D,k,K),Ue.viewport(L.copy(X).multiplyScalar(Ce).round())},this.getScissor=function(C){return C.copy(ee)},this.setScissor=function(C,D,k,K){C.isVector4?ee.set(C.x,C.y,C.z,C.w):ee.set(C,D,k,K),Ue.scissor(R.copy(ee).multiplyScalar(Ce).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(C){Ue.setScissorTest(oe=C)},this.setOpaqueSort=function(C){ze=C},this.setTransparentSort=function(C){We=C},this.getClearColor=function(C){return C.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(C=!0,D=!0,k=!0){let K=0;if(C){let V=!1;if(Q!==null){const ue=Q.texture.format;V=p.has(ue)}if(V){const ue=Q.texture.type,me=d.has(ue),fe=xe.getClearColor(),Ee=xe.getClearAlpha(),Fe=fe.r,Le=fe.g,Ge=fe.b;me?(w[0]=Fe,w[1]=Le,w[2]=Ge,w[3]=Ee,b.clearBufferuiv(b.COLOR,0,w)):(U[0]=Fe,U[1]=Le,U[2]=Ge,U[3]=Ee,b.clearBufferiv(b.COLOR,0,U))}else K|=b.COLOR_BUFFER_BIT}D&&(K|=b.DEPTH_BUFFER_BIT),k&&(K|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&b.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",lt,!1),xe.dispose(),Te.dispose(),$.dispose(),B.dispose(),Y.dispose(),ve.dispose(),re.dispose(),Be.dispose(),se.dispose(),z.dispose(),z.removeEventListener("sessionstart",Vc),z.removeEventListener("sessionend",Kc),wn.stop()};function _e(C){C.preventDefault(),rl("WebGLRenderer: Context Lost."),O=!0}function Re(){rl("WebGLRenderer: Context Restored."),O=!1;const C=S.autoReset,D=we.enabled,k=we.autoUpdate,K=we.needsUpdate,V=we.type;j(),S.autoReset=C,we.enabled=D,we.autoUpdate=k,we.needsUpdate=K,we.type=V}function lt(C){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function tt(C){const D=C.target;D.removeEventListener("dispose",tt),TA(D)}function TA(C){QA(C),B.remove(C)}function QA(C){const D=B.get(C).programs;D!==void 0&&(D.forEach(function(k){se.releaseProgram(k)}),C.isShaderMaterial&&se.releaseShaderCache(C))}this.renderBufferDirect=function(C,D,k,K,V,ue){D===null&&(D=at);const me=V.isMesh&&V.matrixWorld.determinant()<0,fe=Xd(C,D,k,K,V);Ue.setMaterial(K,me);let Ee=k.index,Fe=1;if(K.wireframe===!0){if(Ee=W.getWireframeAttribute(k),Ee===void 0)return;Fe=2}const Le=k.drawRange,Ge=k.attributes.position;let ye=Le.start*Fe,nt=(Le.start+Le.count)*Fe;ue!==null&&(ye=Math.max(ye,ue.start*Fe),nt=Math.min(nt,(ue.start+ue.count)*Fe)),Ee!==null?(ye=Math.max(ye,0),nt=Math.min(nt,Ee.count)):Ge!=null&&(ye=Math.max(ye,0),nt=Math.min(nt,Ge.count));const pt=nt-ye;if(pt<0||pt===1/0)return;re.setup(V,K,fe,k,Ee);let dt,it=Oe;if(Ee!==null&&(dt=q.get(Ee),it=T,it.setIndex(dt)),V.isMesh)K.wireframe===!0?(Ue.setLineWidth(K.wireframeLinewidth*ht()),it.setMode(b.LINES)):it.setMode(b.TRIANGLES);else if(V.isLine){let Lt=K.linewidth;Lt===void 0&&(Lt=1),Ue.setLineWidth(Lt*ht()),V.isLineSegments?it.setMode(b.LINES):V.isLineLoop?it.setMode(b.LINE_LOOP):it.setMode(b.LINE_STRIP)}else V.isPoints?it.setMode(b.POINTS):V.isSprite&&it.setMode(b.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Us("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))it.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Lt=V._multiDrawStarts,Se=V._multiDrawCounts,Yt=V._multiDrawCount,qe=Ee?q.get(Ee).bytesPerElement:1,cA=B.get(K).currentProgram.getUniforms();for(let BA=0;BA<Yt;BA++)cA.setValue(b,"_gl_DrawID",BA),it.render(Lt[BA]/qe,Se[BA])}else if(V.isInstancedMesh)it.renderInstances(ye,pt,V.count);else if(k.isInstancedBufferGeometry){const Lt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Se=Math.min(k.instanceCount,Lt);it.renderInstances(ye,pt,Se)}else it.render(ye,pt)};function Gc(C,D,k){C.transparent===!0&&C.side===GA&&C.forceSinglePass===!1?(C.side=Wt,C.needsUpdate=!0,gr(C,D,k),C.side=Bn,C.needsUpdate=!0,gr(C,D,k),C.side=GA):gr(C,D,k)}this.compile=function(C,D,k=null){k===null&&(k=C),F=$.get(k),F.init(D),M.push(F),k.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(F.pushLight(V),V.castShadow&&F.pushShadow(V))}),C!==k&&C.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(F.pushLight(V),V.castShadow&&F.pushShadow(V))}),F.setupLights();const K=new Set;return C.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ue=V.material;if(ue)if(Array.isArray(ue))for(let me=0;me<ue.length;me++){const fe=ue[me];Gc(fe,k,V),K.add(fe)}else Gc(ue,k,V),K.add(ue)}),F=M.pop(),K},this.compileAsync=function(C,D,k=null){const K=this.compile(C,D,k);return new Promise(V=>{function ue(){if(K.forEach(function(me){B.get(me).currentProgram.isReady()&&K.delete(me)}),K.size===0){V(C);return}setTimeout(ue,10)}$e.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let js=null;function Wd(C){js&&js(C)}function Vc(){wn.stop()}function Kc(){wn.start()}const wn=new Ff;wn.setAnimationLoop(Wd),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(C){js=C,z.setAnimationLoop(C),C===null?wn.stop():wn.start()},z.addEventListener("sessionstart",Vc),z.addEventListener("sessionend",Kc),this.render=function(C,D){if(D!==void 0&&D.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;const k=z.enabled===!0&&z.isPresenting===!0,K=m!==null&&(Q===null||k)&&m.begin(_,Q);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(m===null||m.isCompositing()===!1)&&(z.cameraAutoUpdate===!0&&z.updateCamera(D),D=z.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,D,Q),F=$.get(C,M.length),F.init(D),M.push(F),Ft.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),De.setFromProjectionMatrix(Ft,xA,D.reversedDepth),Ie=this.localClippingEnabled,be=ie.init(this.clippingPlanes,Ie),x=Te.get(C,E.length),x.init(),E.push(x),z.enabled===!0&&z.isPresenting===!0){const me=_.xr.getDepthSensingMesh();me!==null&&ea(me,D,-1/0,_.sortObjects)}ea(C,D,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(ze,We),Ne=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,Ne&&xe.addToRenderList(x,C),this.info.render.frame++,be===!0&&ie.beginShadows();const V=F.state.shadowsArray;if(we.render(V,C,D),be===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),(K&&m.hasRenderPass())===!1){const me=x.opaque,fe=x.transmissive;if(F.setupLights(),D.isArrayCamera){const Ee=D.cameras;if(fe.length>0)for(let Fe=0,Le=Ee.length;Fe<Le;Fe++){const Ge=Ee[Fe];zc(me,fe,C,Ge)}Ne&&xe.render(C);for(let Fe=0,Le=Ee.length;Fe<Le;Fe++){const Ge=Ee[Fe];kc(x,C,Ge,Ge.viewport)}}else fe.length>0&&zc(me,fe,C,D),Ne&&xe.render(C),kc(x,C,D)}Q!==null&&P===0&&(I.updateMultisampleRenderTarget(Q),I.updateRenderTargetMipmap(Q)),K&&m.end(_),C.isScene===!0&&C.onAfterRender(_,C,D),re.resetDefaultState(),H=-1,N=null,M.pop(),M.length>0?(F=M[M.length-1],be===!0&&ie.setGlobalState(_.clippingPlanes,F.state.camera)):F=null,E.pop(),E.length>0?x=E[E.length-1]:x=null};function ea(C,D,k,K){if(C.visible===!1)return;if(C.layers.test(D.layers)){if(C.isGroup)k=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(D);else if(C.isLight)F.pushLight(C),C.castShadow&&F.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||De.intersectsSprite(C)){K&&et.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ft);const me=ve.update(C),fe=C.material;fe.visible&&x.push(C,me,fe,k,et.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||De.intersectsObject(C))){const me=ve.update(C),fe=C.material;if(K&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),et.copy(C.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),et.copy(me.boundingSphere.center)),et.applyMatrix4(C.matrixWorld).applyMatrix4(Ft)),Array.isArray(fe)){const Ee=me.groups;for(let Fe=0,Le=Ee.length;Fe<Le;Fe++){const Ge=Ee[Fe],ye=fe[Ge.materialIndex];ye&&ye.visible&&x.push(C,me,ye,k,et.z,Ge)}}else fe.visible&&x.push(C,me,fe,k,et.z,null)}}const ue=C.children;for(let me=0,fe=ue.length;me<fe;me++)ea(ue[me],D,k,K)}function kc(C,D,k,K){const{opaque:V,transmissive:ue,transparent:me}=C;F.setupLightsView(k),be===!0&&ie.setGlobalState(_.clippingPlanes,k),K&&Ue.viewport(L.copy(K)),V.length>0&&pr(V,D,k),ue.length>0&&pr(ue,D,k),me.length>0&&pr(me,D,k),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function zc(C,D,k,K){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[K.id]===void 0){const ye=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[K.id]=new UA(1,1,{generateMipmaps:!0,type:ye?jt:rA,minFilter:un,samples:Math.max(4,ct.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const ue=F.state.transmissionRenderTarget[K.id],me=K.viewport||L;ue.setSize(me.z*_.transmissionResolutionScale,me.w*_.transmissionResolutionScale);const fe=_.getRenderTarget(),Ee=_.getActiveCubeFace(),Fe=_.getActiveMipmapLevel();_.setRenderTarget(ue),_.getClearColor(J),Ae=_.getClearAlpha(),Ae<1&&_.setClearColor(16777215,.5),_.clear(),Ne&&xe.render(k);const Le=_.toneMapping;_.toneMapping=EA;const Ge=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),F.setupLightsView(K),be===!0&&ie.setGlobalState(_.clippingPlanes,K),pr(C,k,K),I.updateMultisampleRenderTarget(ue),I.updateRenderTargetMipmap(ue),$e.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let nt=0,pt=D.length;nt<pt;nt++){const dt=D[nt],{object:it,geometry:Lt,material:Se,group:Yt}=dt;if(Se.side===GA&&it.layers.test(K.layers)){const qe=Se.side;Se.side=Wt,Se.needsUpdate=!0,Wc(it,k,K,Lt,Se,Yt),Se.side=qe,Se.needsUpdate=!0,ye=!0}}ye===!0&&(I.updateMultisampleRenderTarget(ue),I.updateRenderTargetMipmap(ue))}_.setRenderTarget(fe,Ee,Fe),_.setClearColor(J,Ae),Ge!==void 0&&(K.viewport=Ge),_.toneMapping=Le}function pr(C,D,k){const K=D.isScene===!0?D.overrideMaterial:null;for(let V=0,ue=C.length;V<ue;V++){const me=C[V],{object:fe,geometry:Ee,group:Fe}=me;let Le=me.material;Le.allowOverride===!0&&K!==null&&(Le=K),fe.layers.test(k.layers)&&Wc(fe,D,k,Ee,Le,Fe)}}function Wc(C,D,k,K,V,ue){C.onBeforeRender(_,D,k,K,V,ue),C.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),V.onBeforeRender(_,D,k,K,C,ue),V.transparent===!0&&V.side===GA&&V.forceSinglePass===!1?(V.side=Wt,V.needsUpdate=!0,_.renderBufferDirect(k,D,K,V,C,ue),V.side=Bn,V.needsUpdate=!0,_.renderBufferDirect(k,D,K,V,C,ue),V.side=GA):_.renderBufferDirect(k,D,K,V,C,ue),C.onAfterRender(_,D,k,K,V,ue)}function gr(C,D,k){D.isScene!==!0&&(D=at);const K=B.get(C),V=F.state.lights,ue=F.state.shadowsArray,me=V.state.version,fe=se.getParameters(C,V.state,ue,D,k),Ee=se.getProgramCacheKey(fe);let Fe=K.programs;K.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?D.environment:null,K.fog=D.fog;const Le=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;K.envMap=Y.get(C.envMap||K.environment,Le),K.envMapRotation=K.environment!==null&&C.envMap===null?D.environmentRotation:C.envMapRotation,Fe===void 0&&(C.addEventListener("dispose",tt),Fe=new Map,K.programs=Fe);let Ge=Fe.get(Ee);if(Ge!==void 0){if(K.currentProgram===Ge&&K.lightsStateVersion===me)return Yc(C,fe),Ge}else fe.uniforms=se.getUniforms(C),C.onBeforeCompile(fe,_),Ge=se.acquireProgram(fe,Ee),Fe.set(Ee,Ge),K.uniforms=fe.uniforms;const ye=K.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ye.clippingPlanes=ie.uniform),Yc(C,fe),K.needsLights=Jd(C),K.lightsStateVersion=me,K.needsLights&&(ye.ambientLightColor.value=V.state.ambient,ye.lightProbe.value=V.state.probe,ye.directionalLights.value=V.state.directional,ye.directionalLightShadows.value=V.state.directionalShadow,ye.spotLights.value=V.state.spot,ye.spotLightShadows.value=V.state.spotShadow,ye.rectAreaLights.value=V.state.rectArea,ye.ltc_1.value=V.state.rectAreaLTC1,ye.ltc_2.value=V.state.rectAreaLTC2,ye.pointLights.value=V.state.point,ye.pointLightShadows.value=V.state.pointShadow,ye.hemisphereLights.value=V.state.hemi,ye.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ye.spotLightMatrix.value=V.state.spotLightMatrix,ye.spotLightMap.value=V.state.spotLightMap,ye.pointShadowMatrix.value=V.state.pointShadowMatrix),K.currentProgram=Ge,K.uniformsList=null,Ge}function Xc(C){if(C.uniformsList===null){const D=C.currentProgram.getUniforms();C.uniformsList=gs.seqWithValue(D.seq,C.uniforms)}return C.uniformsList}function Yc(C,D){const k=B.get(C);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.batchingColor=D.batchingColor,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.instancingMorph=D.instancingMorph,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function Xd(C,D,k,K,V){D.isScene!==!0&&(D=at),I.resetTextureUnits();const ue=D.fog,me=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?D.environment:null,fe=Q===null?_.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Nn,Ee=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Fe=Y.get(K.envMap||me,Ee),Le=K.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ge=!!k.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),ye=!!k.morphAttributes.position,nt=!!k.morphAttributes.normal,pt=!!k.morphAttributes.color;let dt=EA;K.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(dt=_.toneMapping);const it=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Lt=it!==void 0?it.length:0,Se=B.get(K),Yt=F.state.lights;if(be===!0&&(Ie===!0||C!==N)){const yt=C===N&&K.id===H;ie.setState(K,C,yt)}let qe=!1;K.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Yt.state.version||Se.outputColorSpace!==fe||V.isBatchedMesh&&Se.batching===!1||!V.isBatchedMesh&&Se.batching===!0||V.isBatchedMesh&&Se.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Se.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Se.instancing===!1||!V.isInstancedMesh&&Se.instancing===!0||V.isSkinnedMesh&&Se.skinning===!1||!V.isSkinnedMesh&&Se.skinning===!0||V.isInstancedMesh&&Se.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Se.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Se.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Se.instancingMorph===!1&&V.morphTexture!==null||Se.envMap!==Fe||K.fog===!0&&Se.fog!==ue||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==ie.numPlanes||Se.numIntersection!==ie.numIntersection)||Se.vertexAlphas!==Le||Se.vertexTangents!==Ge||Se.morphTargets!==ye||Se.morphNormals!==nt||Se.morphColors!==pt||Se.toneMapping!==dt||Se.morphTargetsCount!==Lt)&&(qe=!0):(qe=!0,Se.__version=K.version);let cA=Se.currentProgram;qe===!0&&(cA=gr(K,D,V));let BA=!1,_n=!1,Vn=!1;const ot=cA.getUniforms(),Tt=Se.uniforms;if(Ue.useProgram(cA.program)&&(BA=!0,_n=!0,Vn=!0),K.id!==H&&(H=K.id,_n=!0),BA||N!==C){Ue.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),ot.setValue(b,"projectionMatrix",C.projectionMatrix),ot.setValue(b,"viewMatrix",C.matrixWorldInverse);const jA=ot.map.cameraPosition;jA!==void 0&&jA.setValue(b,Xe.setFromMatrixPosition(C.matrixWorld)),ct.logarithmicDepthBuffer&&ot.setValue(b,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&ot.setValue(b,"isOrthographic",C.isOrthographicCamera===!0),N!==C&&(N=C,_n=!0,Vn=!0)}if(Se.needsLights&&(Yt.state.directionalShadowMap.length>0&&ot.setValue(b,"directionalShadowMap",Yt.state.directionalShadowMap,I),Yt.state.spotShadowMap.length>0&&ot.setValue(b,"spotShadowMap",Yt.state.spotShadowMap,I),Yt.state.pointShadowMap.length>0&&ot.setValue(b,"pointShadowMap",Yt.state.pointShadowMap,I)),V.isSkinnedMesh){ot.setOptional(b,V,"bindMatrix"),ot.setOptional(b,V,"bindMatrixInverse");const yt=V.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),ot.setValue(b,"boneTexture",yt.boneTexture,I))}V.isBatchedMesh&&(ot.setOptional(b,V,"batchingTexture"),ot.setValue(b,"batchingTexture",V._matricesTexture,I),ot.setOptional(b,V,"batchingIdTexture"),ot.setValue(b,"batchingIdTexture",V._indirectTexture,I),ot.setOptional(b,V,"batchingColorTexture"),V._colorsTexture!==null&&ot.setValue(b,"batchingColorTexture",V._colorsTexture,I));const $A=k.morphAttributes;if(($A.position!==void 0||$A.normal!==void 0||$A.color!==void 0)&&ge.update(V,k,cA),(_n||Se.receiveShadow!==V.receiveShadow)&&(Se.receiveShadow=V.receiveShadow,ot.setValue(b,"receiveShadow",V.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&D.environment!==null&&(Tt.envMapIntensity.value=D.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=Fv()),_n&&(ot.setValue(b,"toneMappingExposure",_.toneMappingExposure),Se.needsLights&&Yd(Tt,Vn),ue&&K.fog===!0&&Me.refreshFogUniforms(Tt,ue),Me.refreshMaterialUniforms(Tt,K,Ce,ne,F.state.transmissionRenderTarget[C.id]),gs.upload(b,Xc(Se),Tt,I)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(gs.upload(b,Xc(Se),Tt,I),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&ot.setValue(b,"center",V.center),ot.setValue(b,"modelViewMatrix",V.modelViewMatrix),ot.setValue(b,"normalMatrix",V.normalMatrix),ot.setValue(b,"modelMatrix",V.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const yt=K.uniformsGroups;for(let jA=0,Kn=yt.length;jA<Kn;jA++){const Jc=yt[jA];Be.update(Jc,cA),Be.bind(Jc,cA)}}return cA}function Yd(C,D){C.ambientLightColor.needsUpdate=D,C.lightProbe.needsUpdate=D,C.directionalLights.needsUpdate=D,C.directionalLightShadows.needsUpdate=D,C.pointLights.needsUpdate=D,C.pointLightShadows.needsUpdate=D,C.spotLights.needsUpdate=D,C.spotLightShadows.needsUpdate=D,C.rectAreaLights.needsUpdate=D,C.hemisphereLights.needsUpdate=D}function Jd(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(C,D,k){const K=B.get(C);K.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),B.get(C.texture).__webglTexture=D,B.get(C.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:k,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,D){const k=B.get(C);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0};const qd=b.createFramebuffer();this.setRenderTarget=function(C,D=0,k=0){Q=C,y=D,P=k;let K=null,V=!1,ue=!1;if(C){const fe=B.get(C);if(fe.__useDefaultFramebuffer!==void 0){Ue.bindFramebuffer(b.FRAMEBUFFER,fe.__webglFramebuffer),L.copy(C.viewport),R.copy(C.scissor),Z=C.scissorTest,Ue.viewport(L),Ue.scissor(R),Ue.setScissorTest(Z),H=-1;return}else if(fe.__webglFramebuffer===void 0)I.setupRenderTarget(C);else if(fe.__hasExternalTextures)I.rebindTextures(C,B.get(C.texture).__webglTexture,B.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Le=C.depthTexture;if(fe.__boundDepthTexture!==Le){if(Le!==null&&B.has(Le)&&(C.width!==Le.image.width||C.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(C)}}const Ee=C.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ue=!0);const Fe=B.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Fe[D])?K=Fe[D][k]:K=Fe[D],V=!0):C.samples>0&&I.useMultisampledRTT(C)===!1?K=B.get(C).__webglMultisampledFramebuffer:Array.isArray(Fe)?K=Fe[k]:K=Fe,L.copy(C.viewport),R.copy(C.scissor),Z=C.scissorTest}else L.copy(X).multiplyScalar(Ce).floor(),R.copy(ee).multiplyScalar(Ce).floor(),Z=oe;if(k!==0&&(K=qd),Ue.bindFramebuffer(b.FRAMEBUFFER,K)&&Ue.drawBuffers(C,K),Ue.viewport(L),Ue.scissor(R),Ue.setScissorTest(Z),V){const fe=B.get(C.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+D,fe.__webglTexture,k)}else if(ue){const fe=D;for(let Ee=0;Ee<C.textures.length;Ee++){const Fe=B.get(C.textures[Ee]);b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0+Ee,Fe.__webglTexture,k,fe)}}else if(C!==null&&k!==0){const fe=B.get(C.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,fe.__webglTexture,k)}H=-1},this.readRenderTargetPixels=function(C,D,k,K,V,ue,me,fe=0){if(!(C&&C.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=B.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&me!==void 0&&(Ee=Ee[me]),Ee){Ue.bindFramebuffer(b.FRAMEBUFFER,Ee);try{const Fe=C.textures[fe],Le=Fe.format,Ge=Fe.type;if(C.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+fe),!ct.textureFormatReadable(Le)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Ge)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=C.width-K&&k>=0&&k<=C.height-V&&b.readPixels(D,k,K,V,ae.convert(Le),ae.convert(Ge),ue)}finally{const Fe=Q!==null?B.get(Q).__webglFramebuffer:null;Ue.bindFramebuffer(b.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(C,D,k,K,V,ue,me,fe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=B.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&me!==void 0&&(Ee=Ee[me]),Ee)if(D>=0&&D<=C.width-K&&k>=0&&k<=C.height-V){Ue.bindFramebuffer(b.FRAMEBUFFER,Ee);const Fe=C.textures[fe],Le=Fe.format,Ge=Fe.type;if(C.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+fe),!ct.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,ye),b.bufferData(b.PIXEL_PACK_BUFFER,ue.byteLength,b.STREAM_READ),b.readPixels(D,k,K,V,ae.convert(Le),ae.convert(Ge),0);const nt=Q!==null?B.get(Q).__webglFramebuffer:null;Ue.bindFramebuffer(b.FRAMEBUFFER,nt);const pt=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await Wh(b,pt,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,ye),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,ue),b.deleteBuffer(ye),b.deleteSync(pt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,D=null,k=0){const K=Math.pow(2,-k),V=Math.floor(C.image.width*K),ue=Math.floor(C.image.height*K),me=D!==null?D.x:0,fe=D!==null?D.y:0;I.setTexture2D(C,0),b.copyTexSubImage2D(b.TEXTURE_2D,k,0,0,me,fe,V,ue),Ue.unbindTexture()};const Zd=b.createFramebuffer(),$d=b.createFramebuffer();this.copyTextureToTexture=function(C,D,k=null,K=null,V=0,ue=0){let me,fe,Ee,Fe,Le,Ge,ye,nt,pt;const dt=C.isCompressedTexture?C.mipmaps[ue]:C.image;if(k!==null)me=k.max.x-k.min.x,fe=k.max.y-k.min.y,Ee=k.isBox3?k.max.z-k.min.z:1,Fe=k.min.x,Le=k.min.y,Ge=k.isBox3?k.min.z:0;else{const Tt=Math.pow(2,-V);me=Math.floor(dt.width*Tt),fe=Math.floor(dt.height*Tt),C.isDataArrayTexture?Ee=dt.depth:C.isData3DTexture?Ee=Math.floor(dt.depth*Tt):Ee=1,Fe=0,Le=0,Ge=0}K!==null?(ye=K.x,nt=K.y,pt=K.z):(ye=0,nt=0,pt=0);const it=ae.convert(D.format),Lt=ae.convert(D.type);let Se;D.isData3DTexture?(I.setTexture3D(D,0),Se=b.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(I.setTexture2DArray(D,0),Se=b.TEXTURE_2D_ARRAY):(I.setTexture2D(D,0),Se=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,D.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,D.unpackAlignment);const Yt=b.getParameter(b.UNPACK_ROW_LENGTH),qe=b.getParameter(b.UNPACK_IMAGE_HEIGHT),cA=b.getParameter(b.UNPACK_SKIP_PIXELS),BA=b.getParameter(b.UNPACK_SKIP_ROWS),_n=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,dt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,dt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Fe),b.pixelStorei(b.UNPACK_SKIP_ROWS,Le),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ge);const Vn=C.isDataArrayTexture||C.isData3DTexture,ot=D.isDataArrayTexture||D.isData3DTexture;if(C.isDepthTexture){const Tt=B.get(C),$A=B.get(D),yt=B.get(Tt.__renderTarget),jA=B.get($A.__renderTarget);Ue.bindFramebuffer(b.READ_FRAMEBUFFER,yt.__webglFramebuffer),Ue.bindFramebuffer(b.DRAW_FRAMEBUFFER,jA.__webglFramebuffer);for(let Kn=0;Kn<Ee;Kn++)Vn&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,B.get(C).__webglTexture,V,Ge+Kn),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,B.get(D).__webglTexture,ue,pt+Kn)),b.blitFramebuffer(Fe,Le,me,fe,ye,nt,me,fe,b.DEPTH_BUFFER_BIT,b.NEAREST);Ue.bindFramebuffer(b.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(V!==0||C.isRenderTargetTexture||B.has(C)){const Tt=B.get(C),$A=B.get(D);Ue.bindFramebuffer(b.READ_FRAMEBUFFER,Zd),Ue.bindFramebuffer(b.DRAW_FRAMEBUFFER,$d);for(let yt=0;yt<Ee;yt++)Vn?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Tt.__webglTexture,V,Ge+yt):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Tt.__webglTexture,V),ot?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,$A.__webglTexture,ue,pt+yt):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,$A.__webglTexture,ue),V!==0?b.blitFramebuffer(Fe,Le,me,fe,ye,nt,me,fe,b.COLOR_BUFFER_BIT,b.NEAREST):ot?b.copyTexSubImage3D(Se,ue,ye,nt,pt+yt,Fe,Le,me,fe):b.copyTexSubImage2D(Se,ue,ye,nt,Fe,Le,me,fe);Ue.bindFramebuffer(b.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else ot?C.isDataTexture||C.isData3DTexture?b.texSubImage3D(Se,ue,ye,nt,pt,me,fe,Ee,it,Lt,dt.data):D.isCompressedArrayTexture?b.compressedTexSubImage3D(Se,ue,ye,nt,pt,me,fe,Ee,it,dt.data):b.texSubImage3D(Se,ue,ye,nt,pt,me,fe,Ee,it,Lt,dt):C.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,ue,ye,nt,me,fe,it,Lt,dt.data):C.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,ue,ye,nt,dt.width,dt.height,it,dt.data):b.texSubImage2D(b.TEXTURE_2D,ue,ye,nt,me,fe,it,Lt,dt);b.pixelStorei(b.UNPACK_ROW_LENGTH,Yt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,qe),b.pixelStorei(b.UNPACK_SKIP_PIXELS,cA),b.pixelStorei(b.UNPACK_SKIP_ROWS,BA),b.pixelStorei(b.UNPACK_SKIP_IMAGES,_n),ue===0&&D.generateMipmaps&&b.generateMipmap(Se),Ue.unbindTexture()},this.initRenderTarget=function(C){B.get(C).__webglFramebuffer===void 0&&I.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?I.setTextureCube(C,0):C.isData3DTexture?I.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?I.setTexture2DArray(C,0):I.setTexture2D(C,0),Ue.unbindTexture()},this.resetState=function(){y=0,P=0,Q=null,Ue.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xA}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}class yv extends Qp{constructor(e){super(e),this.type=jt}parse(e){const s=function(m,_){switch(m){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(_||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(_||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(_||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(_||""))}},f=function(m,_,O){_=_||1024;let P=m.pos,Q=-1,H=0,N="",L=String.fromCharCode.apply(null,new Uint16Array(m.subarray(P,P+128)));for(;0>(Q=L.indexOf(`
`))&&H<_&&P<m.byteLength;)N+=L,H+=L.length,P+=128,L+=String.fromCharCode.apply(null,new Uint16Array(m.subarray(P,P+128)));return-1<Q?(m.pos+=H+Q+1,N+L.slice(0,Q)):!1},u=function(m){const _=/^#\?(\S+)/,O=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,y=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*FORMAT=(\S+)\s*$/,Q=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,H={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let N,L;for((m.pos>=m.byteLength||!(N=f(m)))&&s(1,"no header found"),(L=N.match(_))||s(3,"bad initial token"),H.valid|=1,H.programtype=L[1],H.string+=N+`
`;N=f(m),N!==!1;){if(H.string+=N+`
`,N.charAt(0)==="#"){H.comments+=N+`
`;continue}if((L=N.match(O))&&(H.gamma=parseFloat(L[1])),(L=N.match(y))&&(H.exposure=parseFloat(L[1])),(L=N.match(P))&&(H.valid|=2,H.format=L[1]),(L=N.match(Q))&&(H.valid|=4,H.height=parseInt(L[1],10),H.width=parseInt(L[2],10)),H.valid&2&&H.valid&4)break}return H.valid&2||s(3,"missing format specifier"),H.valid&4||s(3,"missing image size specifier"),H},h=function(m,_,O){const y=_;if(y<8||y>32767||m[0]!==2||m[1]!==2||m[2]&128)return new Uint8Array(m);y!==(m[2]<<8|m[3])&&s(3,"wrong scanline width");const P=new Uint8Array(4*_*O);P.length||s(4,"unable to allocate buffer space");let Q=0,H=0;const N=4*y,L=new Uint8Array(4),R=new Uint8Array(N);let Z=O;for(;Z>0&&H<m.byteLength;){H+4>m.byteLength&&s(1),L[0]=m[H++],L[1]=m[H++],L[2]=m[H++],L[3]=m[H++],(L[0]!=2||L[1]!=2||(L[2]<<8|L[3])!=y)&&s(3,"bad rgbe scanline format");let J=0,Ae;for(;J<N&&H<m.byteLength;){Ae=m[H++];const ne=Ae>128;if(ne&&(Ae-=128),(Ae===0||J+Ae>N)&&s(3,"bad scanline data"),ne){const Ce=m[H++];for(let ze=0;ze<Ae;ze++)R[J++]=Ce}else R.set(m.subarray(H,H+Ae),J),J+=Ae,H+=Ae}const de=y;for(let ne=0;ne<de;ne++){let Ce=0;P[Q]=R[ne+Ce],Ce+=y,P[Q+1]=R[ne+Ce],Ce+=y,P[Q+2]=R[ne+Ce],Ce+=y,P[Q+3]=R[ne+Ce],Q+=4}Z--}return P},g=function(m,_,O,y){const P=m[_+3],Q=Math.pow(2,P-128)/255;O[y+0]=m[_+0]*Q,O[y+1]=m[_+1]*Q,O[y+2]=m[_+2]*Q,O[y+3]=1},v=function(m,_,O,y){const P=m[_+3],Q=Math.pow(2,P-128)/255;O[y+0]=Ur.toHalfFloat(Math.min(m[_+0]*Q,65504)),O[y+1]=Ur.toHalfFloat(Math.min(m[_+1]*Q,65504)),O[y+2]=Ur.toHalfFloat(Math.min(m[_+2]*Q,65504)),O[y+3]=Ur.toHalfFloat(1)},p=new Uint8Array(e);p.pos=0;const d=u(p),w=d.width,U=d.height,x=h(p.subarray(p.pos),w,U);let F,E,M;switch(this.type){case $t:M=x.length/4;const m=new Float32Array(M*4);for(let O=0;O<M;O++)g(x,O*4,m,O*4);F=m,E=$t;break;case jt:M=x.length/4;const _=new Uint16Array(M*4);for(let O=0;O<M;O++)v(x,O*4,_,O*4);F=_,E=jt;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:w,height:U,data:F,header:d.string,gamma:d.gamma,exposure:d.exposure,type:E}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(s,a){switch(s.type){case $t:case jt:s.colorSpace=Nn,s.minFilter=Je,s.magFilter=Je,s.generateMipmaps=!1,s.flipY=!0;break}t&&t(s,a)}return super.load(e,r,n,i)}}class Mv extends yv{constructor(e){console.warn("RGBELoader has been deprecated. Please use HDRLoader instead."),super(e)}}/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Xo=function(A,e){return Xo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Xo(A,e)};function mA(A,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Xo(A,e);function t(){this.constructor=A}A.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Yo=function(){return Yo=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Yo.apply(this,arguments)};function Vt(A,e,t,n){function i(r){return r instanceof t?r:new t(function(s){s(r)})}return new(t||(t=Promise))(function(r,s){function a(l){try{c(n.next(l))}catch(f){s(f)}}function o(l){try{c(n.throw(l))}catch(f){s(f)}}function c(l){l.done?r(l.value):i(l.value).then(a,o)}c((n=n.apply(A,[])).next())})}function Pt(A,e){var t={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,i,r,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(c){return function(l){return o([c,l])}}function o(c){if(n)throw new TypeError("Generator is already executing.");for(;t;)try{if(n=1,i&&(r=c[0]&2?i.return:c[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,c[1])).done)return r;switch(i=0,r&&(c=[c[0]&2,r.value]),c[0]){case 0:case 1:r=c;break;case 4:return t.label++,{value:c[1],done:!1};case 5:t.label++,i=c[1],c=[0];continue;case 7:c=t.ops.pop(),t.trys.pop();continue;default:if(r=t.trys,!(r=r.length>0&&r[r.length-1])&&(c[0]===6||c[0]===2)){t=0;continue}if(c[0]===3&&(!r||c[1]>r[0]&&c[1]<r[3])){t.label=c[1];break}if(c[0]===6&&t.label<r[1]){t.label=r[1],r=c;break}if(r&&t.label<r[2]){t.label=r[2],t.ops.push(c);break}r[2]&&t.ops.pop(),t.trys.pop();continue}c=e.call(A,t)}catch(l){c=[6,l],i=0}finally{n=r=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function Gr(A,e,t){if(arguments.length===2)for(var n=0,i=e.length,r;n<i;n++)(r||!(n in e))&&(r||(r=Array.prototype.slice.call(e,0,n)),r[n]=e[n]);return A.concat(r||e)}var JA=(function(){function A(e,t,n,i){this.left=e,this.top=t,this.width=n,this.height=i}return A.prototype.add=function(e,t,n,i){return new A(this.left+e,this.top+t,this.width+n,this.height+i)},A.fromClientRect=function(e,t){return new A(t.left+e.windowBounds.left,t.top+e.windowBounds.top,t.width,t.height)},A.fromDOMRectList=function(e,t){var n=Array.from(t).find(function(i){return i.width!==0});return n?new A(n.left+e.windowBounds.left,n.top+e.windowBounds.top,n.width,n.height):A.EMPTY},A.EMPTY=new A(0,0,0,0),A})(),Gs=function(A,e){return JA.fromClientRect(A,e.getBoundingClientRect())},bv=function(A){var e=A.body,t=A.documentElement;if(!e||!t)throw new Error("Unable to get document size");var n=Math.max(Math.max(e.scrollWidth,t.scrollWidth),Math.max(e.offsetWidth,t.offsetWidth),Math.max(e.clientWidth,t.clientWidth)),i=Math.max(Math.max(e.scrollHeight,t.scrollHeight),Math.max(e.offsetHeight,t.offsetHeight),Math.max(e.clientHeight,t.clientHeight));return new JA(0,0,n,i)},Vs=function(A){for(var e=[],t=0,n=A.length;t<n;){var i=A.charCodeAt(t++);if(i>=55296&&i<=56319&&t<n){var r=A.charCodeAt(t++);(r&64512)===56320?e.push(((i&1023)<<10)+(r&1023)+65536):(e.push(i),t--)}else e.push(i)}return e},mt=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,A);var t=A.length;if(!t)return"";for(var n=[],i=-1,r="";++i<t;){var s=A[i];s<=65535?n.push(s):(s-=65536,n.push((s>>10)+55296,s%1024+56320)),(i+1===t||n.length>16384)&&(r+=String.fromCharCode.apply(String,n),n.length=0)}return r},Yl="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Tv=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Vr=0;Vr<Yl.length;Vr++)Tv[Yl.charCodeAt(Vr)]=Vr;var Jl="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Oi=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Kr=0;Kr<Jl.length;Kr++)Oi[Jl.charCodeAt(Kr)]=Kr;var Qv=function(A){var e=A.length*.75,t=A.length,n,i=0,r,s,a,o;A[A.length-1]==="="&&(e--,A[A.length-2]==="="&&e--);var c=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(e):new Array(e),l=Array.isArray(c)?c:new Uint8Array(c);for(n=0;n<t;n+=4)r=Oi[A.charCodeAt(n)],s=Oi[A.charCodeAt(n+1)],a=Oi[A.charCodeAt(n+2)],o=Oi[A.charCodeAt(n+3)],l[i++]=r<<2|s>>4,l[i++]=(s&15)<<4|a>>2,l[i++]=(a&3)<<6|o&63;return c},Iv=function(A){for(var e=A.length,t=[],n=0;n<e;n+=2)t.push(A[n+1]<<8|A[n]);return t},Rv=function(A){for(var e=A.length,t=[],n=0;n<e;n+=4)t.push(A[n+3]<<24|A[n+2]<<16|A[n+1]<<8|A[n]);return t},Dn=5,bc=11,Ia=2,Lv=bc-Dn,If=65536>>Dn,Dv=1<<Dn,Ra=Dv-1,Hv=1024>>Dn,Pv=If+Hv,Nv=Pv,Ov=32,Gv=Nv+Ov,Vv=65536>>bc,Kv=1<<Lv,kv=Kv-1,ql=function(A,e,t){return A.slice?A.slice(e,t):new Uint16Array(Array.prototype.slice.call(A,e,t))},zv=function(A,e,t){return A.slice?A.slice(e,t):new Uint32Array(Array.prototype.slice.call(A,e,t))},Wv=function(A,e){var t=Qv(A),n=Array.isArray(t)?Rv(t):new Uint32Array(t),i=Array.isArray(t)?Iv(t):new Uint16Array(t),r=24,s=ql(i,r/2,n[4]/2),a=n[5]===2?ql(i,(r+n[4])/2):zv(n,Math.ceil((r+n[4])/4));return new Xv(n[0],n[1],n[2],n[3],s,a)},Xv=(function(){function A(e,t,n,i,r,s){this.initialValue=e,this.errorValue=t,this.highStart=n,this.highValueIndex=i,this.index=r,this.data=s}return A.prototype.get=function(e){var t;if(e>=0){if(e<55296||e>56319&&e<=65535)return t=this.index[e>>Dn],t=(t<<Ia)+(e&Ra),this.data[t];if(e<=65535)return t=this.index[If+(e-55296>>Dn)],t=(t<<Ia)+(e&Ra),this.data[t];if(e<this.highStart)return t=Gv-Vv+(e>>bc),t=this.index[t],t+=e>>Dn&kv,t=this.index[t],t=(t<<Ia)+(e&Ra),this.data[t];if(e<=1114111)return this.data[this.highValueIndex]}return this.errorValue},A})(),Zl="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Yv=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var kr=0;kr<Zl.length;kr++)Yv[Zl.charCodeAt(kr)]=kr;var Jv="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",$l=50,qv=1,Rf=2,Lf=3,Zv=4,$v=5,jl=7,Df=8,eu=9,dn=10,Jo=11,tu=12,qo=13,jv=14,Gi=15,Zo=16,zr=17,Ri=18,ew=19,Au=20,$o=21,Li=22,La=23,ii=24,Zt=25,Vi=26,Ki=27,ri=28,tw=29,In=30,Aw=31,Wr=32,Xr=33,jo=34,ec=35,tc=36,tr=37,Ac=38,ms=39,Bs=40,Da=41,Hf=42,nw=43,iw=[9001,65288],Pf="!",Ke="×",Yr="÷",nc=Wv(Jv),NA=[In,tc],ic=[qv,Rf,Lf,$v],Nf=[dn,Df],nu=[Ki,Vi],rw=ic.concat(Nf),iu=[Ac,ms,Bs,jo,ec],sw=[Gi,qo],aw=function(A,e){e===void 0&&(e="strict");var t=[],n=[],i=[];return A.forEach(function(r,s){var a=nc.get(r);if(a>$l?(i.push(!0),a-=$l):i.push(!1),["normal","auto","loose"].indexOf(e)!==-1&&[8208,8211,12316,12448].indexOf(r)!==-1)return n.push(s),t.push(Zo);if(a===Zv||a===Jo){if(s===0)return n.push(s),t.push(In);var o=t[s-1];return rw.indexOf(o)===-1?(n.push(n[s-1]),t.push(o)):(n.push(s),t.push(In))}if(n.push(s),a===Aw)return t.push(e==="strict"?$o:tr);if(a===Hf||a===tw)return t.push(In);if(a===nw)return r>=131072&&r<=196605||r>=196608&&r<=262141?t.push(tr):t.push(In);t.push(a)}),[n,t,i]},Ha=function(A,e,t,n){var i=n[t];if(Array.isArray(A)?A.indexOf(i)!==-1:A===i)for(var r=t;r<=n.length;){r++;var s=n[r];if(s===e)return!0;if(s!==dn)break}if(i===dn)for(var r=t;r>0;){r--;var a=n[r];if(Array.isArray(A)?A.indexOf(a)!==-1:A===a)for(var o=t;o<=n.length;){o++;var s=n[o];if(s===e)return!0;if(s!==dn)break}if(a!==dn)break}return!1},ru=function(A,e){for(var t=A;t>=0;){var n=e[t];if(n===dn)t--;else return n}return 0},ow=function(A,e,t,n,i){if(t[n]===0)return Ke;var r=n-1;if(Array.isArray(i)&&i[r]===!0)return Ke;var s=r-1,a=r+1,o=e[r],c=s>=0?e[s]:0,l=e[a];if(o===Rf&&l===Lf)return Ke;if(ic.indexOf(o)!==-1)return Pf;if(ic.indexOf(l)!==-1||Nf.indexOf(l)!==-1)return Ke;if(ru(r,e)===Df)return Yr;if(nc.get(A[r])===Jo||(o===Wr||o===Xr)&&nc.get(A[a])===Jo||o===jl||l===jl||o===eu||[dn,qo,Gi].indexOf(o)===-1&&l===eu||[zr,Ri,ew,ii,ri].indexOf(l)!==-1||ru(r,e)===Li||Ha(La,Li,r,e)||Ha([zr,Ri],$o,r,e)||Ha(tu,tu,r,e))return Ke;if(o===dn)return Yr;if(o===La||l===La)return Ke;if(l===Zo||o===Zo)return Yr;if([qo,Gi,$o].indexOf(l)!==-1||o===jv||c===tc&&sw.indexOf(o)!==-1||o===ri&&l===tc||l===Au||NA.indexOf(l)!==-1&&o===Zt||NA.indexOf(o)!==-1&&l===Zt||o===Ki&&[tr,Wr,Xr].indexOf(l)!==-1||[tr,Wr,Xr].indexOf(o)!==-1&&l===Vi||NA.indexOf(o)!==-1&&nu.indexOf(l)!==-1||nu.indexOf(o)!==-1&&NA.indexOf(l)!==-1||[Ki,Vi].indexOf(o)!==-1&&(l===Zt||[Li,Gi].indexOf(l)!==-1&&e[a+1]===Zt)||[Li,Gi].indexOf(o)!==-1&&l===Zt||o===Zt&&[Zt,ri,ii].indexOf(l)!==-1)return Ke;if([Zt,ri,ii,zr,Ri].indexOf(l)!==-1)for(var f=r;f>=0;){var u=e[f];if(u===Zt)return Ke;if([ri,ii].indexOf(u)!==-1)f--;else break}if([Ki,Vi].indexOf(l)!==-1)for(var f=[zr,Ri].indexOf(o)!==-1?s:r;f>=0;){var u=e[f];if(u===Zt)return Ke;if([ri,ii].indexOf(u)!==-1)f--;else break}if(Ac===o&&[Ac,ms,jo,ec].indexOf(l)!==-1||[ms,jo].indexOf(o)!==-1&&[ms,Bs].indexOf(l)!==-1||[Bs,ec].indexOf(o)!==-1&&l===Bs||iu.indexOf(o)!==-1&&[Au,Vi].indexOf(l)!==-1||iu.indexOf(l)!==-1&&o===Ki||NA.indexOf(o)!==-1&&NA.indexOf(l)!==-1||o===ii&&NA.indexOf(l)!==-1||NA.concat(Zt).indexOf(o)!==-1&&l===Li&&iw.indexOf(A[a])===-1||NA.concat(Zt).indexOf(l)!==-1&&o===Ri)return Ke;if(o===Da&&l===Da){for(var h=t[r],g=1;h>0&&(h--,e[h]===Da);)g++;if(g%2!==0)return Ke}return o===Wr&&l===Xr?Ke:Yr},cw=function(A,e){e||(e={lineBreak:"normal",wordBreak:"normal"});var t=aw(A,e.lineBreak),n=t[0],i=t[1],r=t[2];(e.wordBreak==="break-all"||e.wordBreak==="break-word")&&(i=i.map(function(a){return[Zt,In,Hf].indexOf(a)!==-1?tr:a}));var s=e.wordBreak==="keep-all"?r.map(function(a,o){return a&&A[o]>=19968&&A[o]<=40959}):void 0;return[n,i,s]},lw=(function(){function A(e,t,n,i){this.codePoints=e,this.required=t===Pf,this.start=n,this.end=i}return A.prototype.slice=function(){return mt.apply(void 0,this.codePoints.slice(this.start,this.end))},A})(),uw=function(A,e){var t=Vs(A),n=cw(t,e),i=n[0],r=n[1],s=n[2],a=t.length,o=0,c=0;return{next:function(){if(c>=a)return{done:!0,value:null};for(var l=Ke;c<a&&(l=ow(t,r,i,++c,s))===Ke;);if(l!==Ke||c===a){var f=new lw(t,l,o,c);return o=c,{value:f,done:!1}}return{done:!0,value:null}}}},fw=1,dw=2,ur=4,su=8,Ss=10,au=47,Xi=92,hw=9,pw=32,Jr=34,Di=61,gw=35,mw=36,Bw=37,qr=39,Zr=40,Hi=41,vw=95,zt=45,ww=33,_w=60,Cw=62,xw=64,Ew=91,Uw=93,Sw=61,Fw=123,$r=63,yw=125,ou=124,Mw=126,bw=128,cu=65533,Pa=42,Ln=43,Tw=44,Qw=58,Iw=59,Ar=46,Rw=0,Lw=8,Dw=11,Hw=14,Pw=31,Nw=127,_A=-1,Of=48,Gf=97,Vf=101,Ow=102,Gw=117,Vw=122,Kf=65,kf=69,zf=70,Kw=85,kw=90,Nt=function(A){return A>=Of&&A<=57},zw=function(A){return A>=55296&&A<=57343},si=function(A){return Nt(A)||A>=Kf&&A<=zf||A>=Gf&&A<=Ow},Ww=function(A){return A>=Gf&&A<=Vw},Xw=function(A){return A>=Kf&&A<=kw},Yw=function(A){return Ww(A)||Xw(A)},Jw=function(A){return A>=bw},jr=function(A){return A===Ss||A===hw||A===pw},Fs=function(A){return Yw(A)||Jw(A)||A===vw},lu=function(A){return Fs(A)||Nt(A)||A===zt},qw=function(A){return A>=Rw&&A<=Lw||A===Dw||A>=Hw&&A<=Pw||A===Nw},cn=function(A,e){return A!==Xi?!1:e!==Ss},es=function(A,e,t){return A===zt?Fs(e)||cn(e,t):Fs(A)?!0:!!(A===Xi&&cn(A,e))},Na=function(A,e,t){return A===Ln||A===zt?Nt(e)?!0:e===Ar&&Nt(t):Nt(A===Ar?e:A)},Zw=function(A){var e=0,t=1;(A[e]===Ln||A[e]===zt)&&(A[e]===zt&&(t=-1),e++);for(var n=[];Nt(A[e]);)n.push(A[e++]);var i=n.length?parseInt(mt.apply(void 0,n),10):0;A[e]===Ar&&e++;for(var r=[];Nt(A[e]);)r.push(A[e++]);var s=r.length,a=s?parseInt(mt.apply(void 0,r),10):0;(A[e]===kf||A[e]===Vf)&&e++;var o=1;(A[e]===Ln||A[e]===zt)&&(A[e]===zt&&(o=-1),e++);for(var c=[];Nt(A[e]);)c.push(A[e++]);var l=c.length?parseInt(mt.apply(void 0,c),10):0;return t*(i+a*Math.pow(10,-s))*Math.pow(10,o*l)},$w={type:2},jw={type:3},e_={type:4},t_={type:13},A_={type:8},n_={type:21},i_={type:9},r_={type:10},s_={type:11},a_={type:12},o_={type:14},ts={type:23},c_={type:1},l_={type:25},u_={type:24},f_={type:26},d_={type:27},h_={type:28},p_={type:29},g_={type:31},rc={type:32},Wf=(function(){function A(){this._value=[]}return A.prototype.write=function(e){this._value=this._value.concat(Vs(e))},A.prototype.read=function(){for(var e=[],t=this.consumeToken();t!==rc;)e.push(t),t=this.consumeToken();return e},A.prototype.consumeToken=function(){var e=this.consumeCodePoint();switch(e){case Jr:return this.consumeStringToken(Jr);case gw:var t=this.peekCodePoint(0),n=this.peekCodePoint(1),i=this.peekCodePoint(2);if(lu(t)||cn(n,i)){var r=es(t,n,i)?dw:fw,s=this.consumeName();return{type:5,value:s,flags:r}}break;case mw:if(this.peekCodePoint(0)===Di)return this.consumeCodePoint(),t_;break;case qr:return this.consumeStringToken(qr);case Zr:return $w;case Hi:return jw;case Pa:if(this.peekCodePoint(0)===Di)return this.consumeCodePoint(),o_;break;case Ln:if(Na(e,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(e),this.consumeNumericToken();break;case Tw:return e_;case zt:var a=e,o=this.peekCodePoint(0),c=this.peekCodePoint(1);if(Na(a,o,c))return this.reconsumeCodePoint(e),this.consumeNumericToken();if(es(a,o,c))return this.reconsumeCodePoint(e),this.consumeIdentLikeToken();if(o===zt&&c===Cw)return this.consumeCodePoint(),this.consumeCodePoint(),u_;break;case Ar:if(Na(e,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(e),this.consumeNumericToken();break;case au:if(this.peekCodePoint(0)===Pa)for(this.consumeCodePoint();;){var l=this.consumeCodePoint();if(l===Pa&&(l=this.consumeCodePoint(),l===au))return this.consumeToken();if(l===_A)return this.consumeToken()}break;case Qw:return f_;case Iw:return d_;case _w:if(this.peekCodePoint(0)===ww&&this.peekCodePoint(1)===zt&&this.peekCodePoint(2)===zt)return this.consumeCodePoint(),this.consumeCodePoint(),l_;break;case xw:var f=this.peekCodePoint(0),u=this.peekCodePoint(1),h=this.peekCodePoint(2);if(es(f,u,h)){var s=this.consumeName();return{type:7,value:s}}break;case Ew:return h_;case Xi:if(cn(e,this.peekCodePoint(0)))return this.reconsumeCodePoint(e),this.consumeIdentLikeToken();break;case Uw:return p_;case Sw:if(this.peekCodePoint(0)===Di)return this.consumeCodePoint(),A_;break;case Fw:return s_;case yw:return a_;case Gw:case Kw:var g=this.peekCodePoint(0),v=this.peekCodePoint(1);return g===Ln&&(si(v)||v===$r)&&(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(e),this.consumeIdentLikeToken();case ou:if(this.peekCodePoint(0)===Di)return this.consumeCodePoint(),i_;if(this.peekCodePoint(0)===ou)return this.consumeCodePoint(),n_;break;case Mw:if(this.peekCodePoint(0)===Di)return this.consumeCodePoint(),r_;break;case _A:return rc}return jr(e)?(this.consumeWhiteSpace(),g_):Nt(e)?(this.reconsumeCodePoint(e),this.consumeNumericToken()):Fs(e)?(this.reconsumeCodePoint(e),this.consumeIdentLikeToken()):{type:6,value:mt(e)}},A.prototype.consumeCodePoint=function(){var e=this._value.shift();return typeof e>"u"?-1:e},A.prototype.reconsumeCodePoint=function(e){this._value.unshift(e)},A.prototype.peekCodePoint=function(e){return e>=this._value.length?-1:this._value[e]},A.prototype.consumeUnicodeRangeToken=function(){for(var e=[],t=this.consumeCodePoint();si(t)&&e.length<6;)e.push(t),t=this.consumeCodePoint();for(var n=!1;t===$r&&e.length<6;)e.push(t),t=this.consumeCodePoint(),n=!0;if(n){var i=parseInt(mt.apply(void 0,e.map(function(o){return o===$r?Of:o})),16),r=parseInt(mt.apply(void 0,e.map(function(o){return o===$r?zf:o})),16);return{type:30,start:i,end:r}}var s=parseInt(mt.apply(void 0,e),16);if(this.peekCodePoint(0)===zt&&si(this.peekCodePoint(1))){this.consumeCodePoint(),t=this.consumeCodePoint();for(var a=[];si(t)&&a.length<6;)a.push(t),t=this.consumeCodePoint();var r=parseInt(mt.apply(void 0,a),16);return{type:30,start:s,end:r}}else return{type:30,start:s,end:s}},A.prototype.consumeIdentLikeToken=function(){var e=this.consumeName();return e.toLowerCase()==="url"&&this.peekCodePoint(0)===Zr?(this.consumeCodePoint(),this.consumeUrlToken()):this.peekCodePoint(0)===Zr?(this.consumeCodePoint(),{type:19,value:e}):{type:20,value:e}},A.prototype.consumeUrlToken=function(){var e=[];if(this.consumeWhiteSpace(),this.peekCodePoint(0)===_A)return{type:22,value:""};var t=this.peekCodePoint(0);if(t===qr||t===Jr){var n=this.consumeStringToken(this.consumeCodePoint());return n.type===0&&(this.consumeWhiteSpace(),this.peekCodePoint(0)===_A||this.peekCodePoint(0)===Hi)?(this.consumeCodePoint(),{type:22,value:n.value}):(this.consumeBadUrlRemnants(),ts)}for(;;){var i=this.consumeCodePoint();if(i===_A||i===Hi)return{type:22,value:mt.apply(void 0,e)};if(jr(i))return this.consumeWhiteSpace(),this.peekCodePoint(0)===_A||this.peekCodePoint(0)===Hi?(this.consumeCodePoint(),{type:22,value:mt.apply(void 0,e)}):(this.consumeBadUrlRemnants(),ts);if(i===Jr||i===qr||i===Zr||qw(i))return this.consumeBadUrlRemnants(),ts;if(i===Xi)if(cn(i,this.peekCodePoint(0)))e.push(this.consumeEscapedCodePoint());else return this.consumeBadUrlRemnants(),ts;else e.push(i)}},A.prototype.consumeWhiteSpace=function(){for(;jr(this.peekCodePoint(0));)this.consumeCodePoint()},A.prototype.consumeBadUrlRemnants=function(){for(;;){var e=this.consumeCodePoint();if(e===Hi||e===_A)return;cn(e,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},A.prototype.consumeStringSlice=function(e){for(var t=5e4,n="";e>0;){var i=Math.min(t,e);n+=mt.apply(void 0,this._value.splice(0,i)),e-=i}return this._value.shift(),n},A.prototype.consumeStringToken=function(e){var t="",n=0;do{var i=this._value[n];if(i===_A||i===void 0||i===e)return t+=this.consumeStringSlice(n),{type:0,value:t};if(i===Ss)return this._value.splice(0,n),c_;if(i===Xi){var r=this._value[n+1];r!==_A&&r!==void 0&&(r===Ss?(t+=this.consumeStringSlice(n),n=-1,this._value.shift()):cn(i,r)&&(t+=this.consumeStringSlice(n),t+=mt(this.consumeEscapedCodePoint()),n=-1))}n++}while(!0)},A.prototype.consumeNumber=function(){var e=[],t=ur,n=this.peekCodePoint(0);for((n===Ln||n===zt)&&e.push(this.consumeCodePoint());Nt(this.peekCodePoint(0));)e.push(this.consumeCodePoint());n=this.peekCodePoint(0);var i=this.peekCodePoint(1);if(n===Ar&&Nt(i))for(e.push(this.consumeCodePoint(),this.consumeCodePoint()),t=su;Nt(this.peekCodePoint(0));)e.push(this.consumeCodePoint());n=this.peekCodePoint(0),i=this.peekCodePoint(1);var r=this.peekCodePoint(2);if((n===kf||n===Vf)&&((i===Ln||i===zt)&&Nt(r)||Nt(i)))for(e.push(this.consumeCodePoint(),this.consumeCodePoint()),t=su;Nt(this.peekCodePoint(0));)e.push(this.consumeCodePoint());return[Zw(e),t]},A.prototype.consumeNumericToken=function(){var e=this.consumeNumber(),t=e[0],n=e[1],i=this.peekCodePoint(0),r=this.peekCodePoint(1),s=this.peekCodePoint(2);if(es(i,r,s)){var a=this.consumeName();return{type:15,number:t,flags:n,unit:a}}return i===Bw?(this.consumeCodePoint(),{type:16,number:t,flags:n}):{type:17,number:t,flags:n}},A.prototype.consumeEscapedCodePoint=function(){var e=this.consumeCodePoint();if(si(e)){for(var t=mt(e);si(this.peekCodePoint(0))&&t.length<6;)t+=mt(this.consumeCodePoint());jr(this.peekCodePoint(0))&&this.consumeCodePoint();var n=parseInt(t,16);return n===0||zw(n)||n>1114111?cu:n}return e===_A?cu:e},A.prototype.consumeName=function(){for(var e="";;){var t=this.consumeCodePoint();if(lu(t))e+=mt(t);else if(cn(t,this.peekCodePoint(0)))e+=mt(this.consumeEscapedCodePoint());else return this.reconsumeCodePoint(t),e}},A})(),Xf=(function(){function A(e){this._tokens=e}return A.create=function(e){var t=new Wf;return t.write(e),new A(t.read())},A.parseValue=function(e){return A.create(e).parseComponentValue()},A.parseValues=function(e){return A.create(e).parseComponentValues()},A.prototype.parseComponentValue=function(){for(var e=this.consumeToken();e.type===31;)e=this.consumeToken();if(e.type===32)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(e);var t=this.consumeComponentValue();do e=this.consumeToken();while(e.type===31);if(e.type===32)return t;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},A.prototype.parseComponentValues=function(){for(var e=[];;){var t=this.consumeComponentValue();if(t.type===32)return e;e.push(t),e.push()}},A.prototype.consumeComponentValue=function(){var e=this.consumeToken();switch(e.type){case 11:case 28:case 2:return this.consumeSimpleBlock(e.type);case 19:return this.consumeFunction(e)}return e},A.prototype.consumeSimpleBlock=function(e){for(var t={type:e,values:[]},n=this.consumeToken();;){if(n.type===32||B_(n,e))return t;this.reconsumeToken(n),t.values.push(this.consumeComponentValue()),n=this.consumeToken()}},A.prototype.consumeFunction=function(e){for(var t={name:e.value,values:[],type:18};;){var n=this.consumeToken();if(n.type===32||n.type===3)return t;this.reconsumeToken(n),t.values.push(this.consumeComponentValue())}},A.prototype.consumeToken=function(){var e=this._tokens.shift();return typeof e>"u"?rc:e},A.prototype.reconsumeToken=function(e){this._tokens.unshift(e)},A})(),fr=function(A){return A.type===15},Si=function(A){return A.type===17},st=function(A){return A.type===20},m_=function(A){return A.type===0},sc=function(A,e){return st(A)&&A.value===e},Yf=function(A){return A.type!==31},wi=function(A){return A.type!==31&&A.type!==4},MA=function(A){var e=[],t=[];return A.forEach(function(n){if(n.type===4){if(t.length===0)throw new Error("Error parsing function args, zero tokens for arg");e.push(t),t=[];return}n.type!==31&&t.push(n)}),t.length&&e.push(t),e},B_=function(A,e){return e===11&&A.type===12||e===28&&A.type===29?!0:e===2&&A.type===3},vn=function(A){return A.type===17||A.type===15},Ct=function(A){return A.type===16||vn(A)},Jf=function(A){return A.length>1?[A[0],A[1]]:[A[0]]},Rt={type:17,number:0,flags:ur},Tc={type:16,number:50,flags:ur},hn={type:16,number:100,flags:ur},ki=function(A,e,t){var n=A[0],i=A[1];return[ut(n,e),ut(typeof i<"u"?i:n,t)]},ut=function(A,e){if(A.type===16)return A.number/100*e;if(fr(A))switch(A.unit){case"rem":case"em":return 16*A.number;case"px":default:return A.number}return A.number},qf="deg",Zf="grad",$f="rad",jf="turn",Ks={name:"angle",parse:function(A,e){if(e.type===15)switch(e.unit){case qf:return Math.PI*e.number/180;case Zf:return Math.PI/200*e.number;case $f:return e.number;case jf:return Math.PI*2*e.number}throw new Error("Unsupported angle type")}},ed=function(A){return A.type===15&&(A.unit===qf||A.unit===Zf||A.unit===$f||A.unit===jf)},td=function(A){var e=A.filter(st).map(function(t){return t.value}).join(" ");switch(e){case"to bottom right":case"to right bottom":case"left top":case"top left":return[Rt,Rt];case"to top":case"bottom":return aA(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[Rt,hn];case"to right":case"left":return aA(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[hn,hn];case"to bottom":case"top":return aA(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[hn,Rt];case"to left":case"right":return aA(270)}return 0},aA=function(A){return Math.PI*A/180},gn={name:"color",parse:function(A,e){if(e.type===18){var t=v_[e.name];if(typeof t>"u")throw new Error('Attempting to parse an unsupported color function "'+e.name+'"');return t(A,e.values)}if(e.type===5){if(e.value.length===3){var n=e.value.substring(0,1),i=e.value.substring(1,2),r=e.value.substring(2,3);return pn(parseInt(n+n,16),parseInt(i+i,16),parseInt(r+r,16),1)}if(e.value.length===4){var n=e.value.substring(0,1),i=e.value.substring(1,2),r=e.value.substring(2,3),s=e.value.substring(3,4);return pn(parseInt(n+n,16),parseInt(i+i,16),parseInt(r+r,16),parseInt(s+s,16)/255)}if(e.value.length===6){var n=e.value.substring(0,2),i=e.value.substring(2,4),r=e.value.substring(4,6);return pn(parseInt(n,16),parseInt(i,16),parseInt(r,16),1)}if(e.value.length===8){var n=e.value.substring(0,2),i=e.value.substring(2,4),r=e.value.substring(4,6),s=e.value.substring(6,8);return pn(parseInt(n,16),parseInt(i,16),parseInt(r,16),parseInt(s,16)/255)}}if(e.type===20){var a=WA[e.value.toUpperCase()];if(typeof a<"u")return a}return WA.TRANSPARENT}},mn=function(A){return(255&A)===0},bt=function(A){var e=255&A,t=255&A>>8,n=255&A>>16,i=255&A>>24;return e<255?"rgba("+i+","+n+","+t+","+e/255+")":"rgb("+i+","+n+","+t+")"},pn=function(A,e,t,n){return(A<<24|e<<16|t<<8|Math.round(n*255)<<0)>>>0},uu=function(A,e){if(A.type===17)return A.number;if(A.type===16){var t=e===3?1:255;return e===3?A.number/100*t:Math.round(A.number/100*t)}return 0},fu=function(A,e){var t=e.filter(wi);if(t.length===3){var n=t.map(uu),i=n[0],r=n[1],s=n[2];return pn(i,r,s,1)}if(t.length===4){var a=t.map(uu),i=a[0],r=a[1],s=a[2],o=a[3];return pn(i,r,s,o)}return 0};function Oa(A,e,t){return t<0&&(t+=1),t>=1&&(t-=1),t<1/6?(e-A)*t*6+A:t<1/2?e:t<2/3?(e-A)*6*(2/3-t)+A:A}var du=function(A,e){var t=e.filter(wi),n=t[0],i=t[1],r=t[2],s=t[3],a=(n.type===17?aA(n.number):Ks.parse(A,n))/(Math.PI*2),o=Ct(i)?i.number/100:0,c=Ct(r)?r.number/100:0,l=typeof s<"u"&&Ct(s)?ut(s,1):1;if(o===0)return pn(c*255,c*255,c*255,1);var f=c<=.5?c*(o+1):c+o-c*o,u=c*2-f,h=Oa(u,f,a+1/3),g=Oa(u,f,a),v=Oa(u,f,a-1/3);return pn(h*255,g*255,v*255,l)},v_={hsl:du,hsla:du,rgb:fu,rgba:fu},Yi=function(A,e){return gn.parse(A,Xf.create(e).parseComponentValue())},WA={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},w_={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(A,e){return e.map(function(t){if(st(t))switch(t.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},__={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},ks=function(A,e){var t=gn.parse(A,e[0]),n=e[1];return n&&Ct(n)?{color:t,stop:n}:{color:t,stop:null}},hu=function(A,e){var t=A[0],n=A[A.length-1];t.stop===null&&(t.stop=Rt),n.stop===null&&(n.stop=hn);for(var i=[],r=0,s=0;s<A.length;s++){var a=A[s].stop;if(a!==null){var o=ut(a,e);o>r?i.push(o):i.push(r),r=o}else i.push(null)}for(var c=null,s=0;s<i.length;s++){var l=i[s];if(l===null)c===null&&(c=s);else if(c!==null){for(var f=s-c,u=i[c-1],h=(l-u)/(f+1),g=1;g<=f;g++)i[c+g-1]=h*g;c=null}}return A.map(function(v,p){var d=v.color;return{color:d,stop:Math.max(Math.min(1,i[p]/e),0)}})},C_=function(A,e,t){var n=e/2,i=t/2,r=ut(A[0],e)-n,s=i-ut(A[1],t);return(Math.atan2(s,r)+Math.PI*2)%(Math.PI*2)},x_=function(A,e,t){var n=typeof A=="number"?A:C_(A,e,t),i=Math.abs(e*Math.sin(n))+Math.abs(t*Math.cos(n)),r=e/2,s=t/2,a=i/2,o=Math.sin(n-Math.PI/2)*a,c=Math.cos(n-Math.PI/2)*a;return[i,r-c,r+c,s-o,s+o]},dA=function(A,e){return Math.sqrt(A*A+e*e)},pu=function(A,e,t,n,i){var r=[[0,0],[0,e],[A,0],[A,e]];return r.reduce(function(s,a){var o=a[0],c=a[1],l=dA(t-o,n-c);return(i?l<s.optimumDistance:l>s.optimumDistance)?{optimumCorner:a,optimumDistance:l}:s},{optimumDistance:i?1/0:-1/0,optimumCorner:null}).optimumCorner},E_=function(A,e,t,n,i){var r=0,s=0;switch(A.size){case 0:A.shape===0?r=s=Math.min(Math.abs(e),Math.abs(e-n),Math.abs(t),Math.abs(t-i)):A.shape===1&&(r=Math.min(Math.abs(e),Math.abs(e-n)),s=Math.min(Math.abs(t),Math.abs(t-i)));break;case 2:if(A.shape===0)r=s=Math.min(dA(e,t),dA(e,t-i),dA(e-n,t),dA(e-n,t-i));else if(A.shape===1){var a=Math.min(Math.abs(t),Math.abs(t-i))/Math.min(Math.abs(e),Math.abs(e-n)),o=pu(n,i,e,t,!0),c=o[0],l=o[1];r=dA(c-e,(l-t)/a),s=a*r}break;case 1:A.shape===0?r=s=Math.max(Math.abs(e),Math.abs(e-n),Math.abs(t),Math.abs(t-i)):A.shape===1&&(r=Math.max(Math.abs(e),Math.abs(e-n)),s=Math.max(Math.abs(t),Math.abs(t-i)));break;case 3:if(A.shape===0)r=s=Math.max(dA(e,t),dA(e,t-i),dA(e-n,t),dA(e-n,t-i));else if(A.shape===1){var a=Math.max(Math.abs(t),Math.abs(t-i))/Math.max(Math.abs(e),Math.abs(e-n)),f=pu(n,i,e,t,!1),c=f[0],l=f[1];r=dA(c-e,(l-t)/a),s=a*r}break}return Array.isArray(A.size)&&(r=ut(A.size[0],n),s=A.size.length===2?ut(A.size[1],i):r),[r,s]},U_=function(A,e){var t=aA(180),n=[];return MA(e).forEach(function(i,r){if(r===0){var s=i[0];if(s.type===20&&s.value==="to"){t=td(i);return}else if(ed(s)){t=Ks.parse(A,s);return}}var a=ks(A,i);n.push(a)}),{angle:t,stops:n,type:1}},As=function(A,e){var t=aA(180),n=[];return MA(e).forEach(function(i,r){if(r===0){var s=i[0];if(s.type===20&&["top","left","right","bottom"].indexOf(s.value)!==-1){t=td(i);return}else if(ed(s)){t=(Ks.parse(A,s)+aA(270))%aA(360);return}}var a=ks(A,i);n.push(a)}),{angle:t,stops:n,type:1}},S_=function(A,e){var t=aA(180),n=[],i=1,r=0,s=3,a=[];return MA(e).forEach(function(o,c){var l=o[0];if(c===0){if(st(l)&&l.value==="linear"){i=1;return}else if(st(l)&&l.value==="radial"){i=2;return}}if(l.type===18){if(l.name==="from"){var f=gn.parse(A,l.values[0]);n.push({stop:Rt,color:f})}else if(l.name==="to"){var f=gn.parse(A,l.values[0]);n.push({stop:hn,color:f})}else if(l.name==="color-stop"){var u=l.values.filter(wi);if(u.length===2){var f=gn.parse(A,u[1]),h=u[0];Si(h)&&n.push({stop:{type:16,number:h.number*100,flags:h.flags},color:f})}}}}),i===1?{angle:(t+aA(180))%aA(360),stops:n,type:i}:{size:s,shape:r,stops:n,position:a,type:i}},Ad="closest-side",nd="farthest-side",id="closest-corner",rd="farthest-corner",sd="circle",ad="ellipse",od="cover",cd="contain",F_=function(A,e){var t=0,n=3,i=[],r=[];return MA(e).forEach(function(s,a){var o=!0;if(a===0){var c=!1;o=s.reduce(function(f,u){if(c)if(st(u))switch(u.value){case"center":return r.push(Tc),f;case"top":case"left":return r.push(Rt),f;case"right":case"bottom":return r.push(hn),f}else(Ct(u)||vn(u))&&r.push(u);else if(st(u))switch(u.value){case sd:return t=0,!1;case ad:return t=1,!1;case"at":return c=!0,!1;case Ad:return n=0,!1;case od:case nd:return n=1,!1;case cd:case id:return n=2,!1;case rd:return n=3,!1}else if(vn(u)||Ct(u))return Array.isArray(n)||(n=[]),n.push(u),!1;return f},o)}if(o){var l=ks(A,s);i.push(l)}}),{size:n,shape:t,stops:i,position:r,type:2}},ns=function(A,e){var t=0,n=3,i=[],r=[];return MA(e).forEach(function(s,a){var o=!0;if(a===0?o=s.reduce(function(l,f){if(st(f))switch(f.value){case"center":return r.push(Tc),!1;case"top":case"left":return r.push(Rt),!1;case"right":case"bottom":return r.push(hn),!1}else if(Ct(f)||vn(f))return r.push(f),!1;return l},o):a===1&&(o=s.reduce(function(l,f){if(st(f))switch(f.value){case sd:return t=0,!1;case ad:return t=1,!1;case cd:case Ad:return n=0,!1;case nd:return n=1,!1;case id:return n=2,!1;case od:case rd:return n=3,!1}else if(vn(f)||Ct(f))return Array.isArray(n)||(n=[]),n.push(f),!1;return l},o)),o){var c=ks(A,s);i.push(c)}}),{size:n,shape:t,stops:i,position:r,type:2}},y_=function(A){return A.type===1},M_=function(A){return A.type===2},Qc={name:"image",parse:function(A,e){if(e.type===22){var t={url:e.value,type:0};return A.cache.addImage(e.value),t}if(e.type===18){var n=ld[e.name];if(typeof n>"u")throw new Error('Attempting to parse an unsupported image function "'+e.name+'"');return n(A,e.values)}throw new Error("Unsupported image type "+e.type)}};function b_(A){return!(A.type===20&&A.value==="none")&&(A.type!==18||!!ld[A.name])}var ld={"linear-gradient":U_,"-moz-linear-gradient":As,"-ms-linear-gradient":As,"-o-linear-gradient":As,"-webkit-linear-gradient":As,"radial-gradient":F_,"-moz-radial-gradient":ns,"-ms-radial-gradient":ns,"-o-radial-gradient":ns,"-webkit-radial-gradient":ns,"-webkit-gradient":S_},T_={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(A,e){if(e.length===0)return[];var t=e[0];return t.type===20&&t.value==="none"?[]:e.filter(function(n){return wi(n)&&b_(n)}).map(function(n){return Qc.parse(A,n)})}},Q_={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(A,e){return e.map(function(t){if(st(t))switch(t.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},I_={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(A,e){return MA(e).map(function(t){return t.filter(Ct)}).map(Jf)}},R_={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(A,e){return MA(e).map(function(t){return t.filter(st).map(function(n){return n.value}).join(" ")}).map(L_)}},L_=function(A){switch(A){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;case"repeat":default:return 0}},pi;(function(A){A.AUTO="auto",A.CONTAIN="contain",A.COVER="cover"})(pi||(pi={}));var D_={name:"background-size",initialValue:"0",prefix:!1,type:1,parse:function(A,e){return MA(e).map(function(t){return t.filter(H_)})}},H_=function(A){return st(A)||Ct(A)},zs=function(A){return{name:"border-"+A+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},P_=zs("top"),N_=zs("right"),O_=zs("bottom"),G_=zs("left"),Ws=function(A){return{name:"border-radius-"+A,initialValue:"0 0",prefix:!1,type:1,parse:function(e,t){return Jf(t.filter(Ct))}}},V_=Ws("top-left"),K_=Ws("top-right"),k_=Ws("bottom-right"),z_=Ws("bottom-left"),Xs=function(A){return{name:"border-"+A+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(e,t){switch(t){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},W_=Xs("top"),X_=Xs("right"),Y_=Xs("bottom"),J_=Xs("left"),Ys=function(A){return{name:"border-"+A+"-width",initialValue:"0",type:0,prefix:!1,parse:function(e,t){return fr(t)?t.number:0}}},q_=Ys("top"),Z_=Ys("right"),$_=Ys("bottom"),j_=Ys("left"),eC={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},tC={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(A,e){switch(e){case"rtl":return 1;case"ltr":default:return 0}}},AC={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(A,e){return e.filter(st).reduce(function(t,n){return t|nC(n.value)},0)}},nC=function(A){switch(A){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},iC={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},rC={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(A,e){return e.type===20&&e.value==="normal"?0:e.type===17||e.type===15?e.number:0}},ys;(function(A){A.NORMAL="normal",A.STRICT="strict"})(ys||(ys={}));var sC={name:"line-break",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"strict":return ys.STRICT;case"normal":default:return ys.NORMAL}}},aC={name:"line-height",initialValue:"normal",prefix:!1,type:4},gu=function(A,e){return st(A)&&A.value==="normal"?1.2*e:A.type===17?e*A.number:Ct(A)?ut(A,e):e},oC={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(A,e){return e.type===20&&e.value==="none"?null:Qc.parse(A,e)}},cC={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(A,e){switch(e){case"inside":return 0;case"outside":default:return 1}}},ac={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":return 22;case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;case"none":default:return-1}}},Js=function(A){return{name:"margin-"+A,initialValue:"0",prefix:!1,type:4}},lC=Js("top"),uC=Js("right"),fC=Js("bottom"),dC=Js("left"),hC={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(A,e){return e.filter(st).map(function(t){switch(t.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;case"visible":default:return 0}})}},pC={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"break-word":return"break-word";case"normal":default:return"normal"}}},qs=function(A){return{name:"padding-"+A,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},gC=qs("top"),mC=qs("right"),BC=qs("bottom"),vC=qs("left"),wC={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(A,e){switch(e){case"right":return 2;case"center":case"justify":return 1;case"left":default:return 0}}},_C={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(A,e){switch(e){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},CC={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(A,e){return e.length===1&&sc(e[0],"none")?[]:MA(e).map(function(t){for(var n={color:WA.TRANSPARENT,offsetX:Rt,offsetY:Rt,blur:Rt},i=0,r=0;r<t.length;r++){var s=t[r];vn(s)?(i===0?n.offsetX=s:i===1?n.offsetY=s:n.blur=s,i++):n.color=gn.parse(A,s)}return n})}},xC={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},EC={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(A,e){if(e.type===20&&e.value==="none")return null;if(e.type===18){var t=FC[e.name];if(typeof t>"u")throw new Error('Attempting to parse an unsupported transform function "'+e.name+'"');return t(e.values)}return null}},UC=function(A){var e=A.filter(function(t){return t.type===17}).map(function(t){return t.number});return e.length===6?e:null},SC=function(A){var e=A.filter(function(o){return o.type===17}).map(function(o){return o.number}),t=e[0],n=e[1];e[2],e[3];var i=e[4],r=e[5];e[6],e[7],e[8],e[9],e[10],e[11];var s=e[12],a=e[13];return e[14],e[15],e.length===16?[t,n,i,r,s,a]:null},FC={matrix:UC,matrix3d:SC},mu={type:16,number:50,flags:ur},yC=[mu,mu],MC={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(A,e){var t=e.filter(Ct);return t.length!==2?yC:[t[0],t[1]]}},bC={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"hidden":return 1;case"collapse":return 2;case"visible":default:return 0}}},Ji;(function(A){A.NORMAL="normal",A.BREAK_ALL="break-all",A.KEEP_ALL="keep-all"})(Ji||(Ji={}));var TC={name:"word-break",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"break-all":return Ji.BREAK_ALL;case"keep-all":return Ji.KEEP_ALL;case"normal":default:return Ji.NORMAL}}},QC={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(A,e){if(e.type===20)return{auto:!0,order:0};if(Si(e))return{auto:!1,order:e.number};throw new Error("Invalid z-index number parsed")}},ud={name:"time",parse:function(A,e){if(e.type===15)switch(e.unit.toLowerCase()){case"s":return 1e3*e.number;case"ms":return e.number}throw new Error("Unsupported time type")}},IC={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(A,e){return Si(e)?e.number:1}},RC={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},LC={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(A,e){return e.filter(st).map(function(t){switch(t.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(t){return t!==0})}},DC={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(A,e){var t=[],n=[];return e.forEach(function(i){switch(i.type){case 20:case 0:t.push(i.value);break;case 17:t.push(i.number.toString());break;case 4:n.push(t.join(" ")),t.length=0;break}}),t.length&&n.push(t.join(" ")),n.map(function(i){return i.indexOf(" ")===-1?i:"'"+i+"'"})}},HC={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},PC={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(A,e){if(Si(e))return e.number;if(st(e))switch(e.value){case"bold":return 700;case"normal":default:return 400}return 400}},NC={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(A,e){return e.filter(st).map(function(t){return t.value})}},OC={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"oblique":return"oblique";case"italic":return"italic";case"normal":default:return"normal"}}},Et=function(A,e){return(A&e)!==0},GC={name:"content",initialValue:"none",type:1,prefix:!1,parse:function(A,e){if(e.length===0)return[];var t=e[0];return t.type===20&&t.value==="none"?[]:e}},VC={name:"counter-increment",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(e.length===0)return null;var t=e[0];if(t.type===20&&t.value==="none")return null;for(var n=[],i=e.filter(Yf),r=0;r<i.length;r++){var s=i[r],a=i[r+1];if(s.type===20){var o=a&&Si(a)?a.number:1;n.push({counter:s.value,increment:o})}}return n}},KC={name:"counter-reset",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(e.length===0)return[];for(var t=[],n=e.filter(Yf),i=0;i<n.length;i++){var r=n[i],s=n[i+1];if(st(r)&&r.value!=="none"){var a=s&&Si(s)?s.number:0;t.push({counter:r.value,reset:a})}}return t}},kC={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(A,e){return e.filter(fr).map(function(t){return ud.parse(A,t)})}},zC={name:"quotes",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(e.length===0)return null;var t=e[0];if(t.type===20&&t.value==="none")return null;var n=[],i=e.filter(m_);if(i.length%2!==0)return null;for(var r=0;r<i.length;r+=2){var s=i[r].value,a=i[r+1].value;n.push({open:s,close:a})}return n}},Bu=function(A,e,t){if(!A)return"";var n=A[Math.min(e,A.length-1)];return n?t?n.open:n.close:""},WC={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(A,e){return e.length===1&&sc(e[0],"none")?[]:MA(e).map(function(t){for(var n={color:255,offsetX:Rt,offsetY:Rt,blur:Rt,spread:Rt,inset:!1},i=0,r=0;r<t.length;r++){var s=t[r];sc(s,"inset")?n.inset=!0:vn(s)?(i===0?n.offsetX=s:i===1?n.offsetY=s:i===2?n.blur=s:n.spread=s,i++):n.color=gn.parse(A,s)}return n})}},XC={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(A,e){var t=[0,1,2],n=[];return e.filter(st).forEach(function(i){switch(i.value){case"stroke":n.push(1);break;case"fill":n.push(0);break;case"markers":n.push(2);break}}),t.forEach(function(i){n.indexOf(i)===-1&&n.push(i)}),n}},YC={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},JC={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(A,e){return fr(e)?e.number:0}},qC=(function(){function A(e,t){var n,i;this.animationDuration=pe(e,kC,t.animationDuration),this.backgroundClip=pe(e,w_,t.backgroundClip),this.backgroundColor=pe(e,__,t.backgroundColor),this.backgroundImage=pe(e,T_,t.backgroundImage),this.backgroundOrigin=pe(e,Q_,t.backgroundOrigin),this.backgroundPosition=pe(e,I_,t.backgroundPosition),this.backgroundRepeat=pe(e,R_,t.backgroundRepeat),this.backgroundSize=pe(e,D_,t.backgroundSize),this.borderTopColor=pe(e,P_,t.borderTopColor),this.borderRightColor=pe(e,N_,t.borderRightColor),this.borderBottomColor=pe(e,O_,t.borderBottomColor),this.borderLeftColor=pe(e,G_,t.borderLeftColor),this.borderTopLeftRadius=pe(e,V_,t.borderTopLeftRadius),this.borderTopRightRadius=pe(e,K_,t.borderTopRightRadius),this.borderBottomRightRadius=pe(e,k_,t.borderBottomRightRadius),this.borderBottomLeftRadius=pe(e,z_,t.borderBottomLeftRadius),this.borderTopStyle=pe(e,W_,t.borderTopStyle),this.borderRightStyle=pe(e,X_,t.borderRightStyle),this.borderBottomStyle=pe(e,Y_,t.borderBottomStyle),this.borderLeftStyle=pe(e,J_,t.borderLeftStyle),this.borderTopWidth=pe(e,q_,t.borderTopWidth),this.borderRightWidth=pe(e,Z_,t.borderRightWidth),this.borderBottomWidth=pe(e,$_,t.borderBottomWidth),this.borderLeftWidth=pe(e,j_,t.borderLeftWidth),this.boxShadow=pe(e,WC,t.boxShadow),this.color=pe(e,eC,t.color),this.direction=pe(e,tC,t.direction),this.display=pe(e,AC,t.display),this.float=pe(e,iC,t.cssFloat),this.fontFamily=pe(e,DC,t.fontFamily),this.fontSize=pe(e,HC,t.fontSize),this.fontStyle=pe(e,OC,t.fontStyle),this.fontVariant=pe(e,NC,t.fontVariant),this.fontWeight=pe(e,PC,t.fontWeight),this.letterSpacing=pe(e,rC,t.letterSpacing),this.lineBreak=pe(e,sC,t.lineBreak),this.lineHeight=pe(e,aC,t.lineHeight),this.listStyleImage=pe(e,oC,t.listStyleImage),this.listStylePosition=pe(e,cC,t.listStylePosition),this.listStyleType=pe(e,ac,t.listStyleType),this.marginTop=pe(e,lC,t.marginTop),this.marginRight=pe(e,uC,t.marginRight),this.marginBottom=pe(e,fC,t.marginBottom),this.marginLeft=pe(e,dC,t.marginLeft),this.opacity=pe(e,IC,t.opacity);var r=pe(e,hC,t.overflow);this.overflowX=r[0],this.overflowY=r[r.length>1?1:0],this.overflowWrap=pe(e,pC,t.overflowWrap),this.paddingTop=pe(e,gC,t.paddingTop),this.paddingRight=pe(e,mC,t.paddingRight),this.paddingBottom=pe(e,BC,t.paddingBottom),this.paddingLeft=pe(e,vC,t.paddingLeft),this.paintOrder=pe(e,XC,t.paintOrder),this.position=pe(e,_C,t.position),this.textAlign=pe(e,wC,t.textAlign),this.textDecorationColor=pe(e,RC,(n=t.textDecorationColor)!==null&&n!==void 0?n:t.color),this.textDecorationLine=pe(e,LC,(i=t.textDecorationLine)!==null&&i!==void 0?i:t.textDecoration),this.textShadow=pe(e,CC,t.textShadow),this.textTransform=pe(e,xC,t.textTransform),this.transform=pe(e,EC,t.transform),this.transformOrigin=pe(e,MC,t.transformOrigin),this.visibility=pe(e,bC,t.visibility),this.webkitTextStrokeColor=pe(e,YC,t.webkitTextStrokeColor),this.webkitTextStrokeWidth=pe(e,JC,t.webkitTextStrokeWidth),this.wordBreak=pe(e,TC,t.wordBreak),this.zIndex=pe(e,QC,t.zIndex)}return A.prototype.isVisible=function(){return this.display>0&&this.opacity>0&&this.visibility===0},A.prototype.isTransparent=function(){return mn(this.backgroundColor)},A.prototype.isTransformed=function(){return this.transform!==null},A.prototype.isPositioned=function(){return this.position!==0},A.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},A.prototype.isFloating=function(){return this.float!==0},A.prototype.isInlineLevel=function(){return Et(this.display,4)||Et(this.display,33554432)||Et(this.display,268435456)||Et(this.display,536870912)||Et(this.display,67108864)||Et(this.display,134217728)},A})(),ZC=(function(){function A(e,t){this.content=pe(e,GC,t.content),this.quotes=pe(e,zC,t.quotes)}return A})(),vu=(function(){function A(e,t){this.counterIncrement=pe(e,VC,t.counterIncrement),this.counterReset=pe(e,KC,t.counterReset)}return A})(),pe=function(A,e,t){var n=new Wf,i=t!==null&&typeof t<"u"?t.toString():e.initialValue;n.write(i);var r=new Xf(n.read());switch(e.type){case 2:var s=r.parseComponentValue();return e.parse(A,st(s)?s.value:e.initialValue);case 0:return e.parse(A,r.parseComponentValue());case 1:return e.parse(A,r.parseComponentValues());case 4:return r.parseComponentValue();case 3:switch(e.format){case"angle":return Ks.parse(A,r.parseComponentValue());case"color":return gn.parse(A,r.parseComponentValue());case"image":return Qc.parse(A,r.parseComponentValue());case"length":var a=r.parseComponentValue();return vn(a)?a:Rt;case"length-percentage":var o=r.parseComponentValue();return Ct(o)?o:Rt;case"time":return ud.parse(A,r.parseComponentValue())}break}},$C="data-html2canvas-debug",jC=function(A){var e=A.getAttribute($C);switch(e){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}},oc=function(A,e){var t=jC(A);return t===1||e===t},bA=(function(){function A(e,t){if(this.context=e,this.textNodes=[],this.elements=[],this.flags=0,oc(t,3))debugger;this.styles=new qC(e,window.getComputedStyle(t,null)),uc(t)&&(this.styles.animationDuration.some(function(n){return n>0})&&(t.style.animationDuration="0s"),this.styles.transform!==null&&(t.style.transform="none")),this.bounds=Gs(this.context,t),oc(t,4)&&(this.flags|=16)}return A})(),ex="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",wu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",zi=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var is=0;is<wu.length;is++)zi[wu.charCodeAt(is)]=is;var tx=function(A){var e=A.length*.75,t=A.length,n,i=0,r,s,a,o;A[A.length-1]==="="&&(e--,A[A.length-2]==="="&&e--);var c=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(e):new Array(e),l=Array.isArray(c)?c:new Uint8Array(c);for(n=0;n<t;n+=4)r=zi[A.charCodeAt(n)],s=zi[A.charCodeAt(n+1)],a=zi[A.charCodeAt(n+2)],o=zi[A.charCodeAt(n+3)],l[i++]=r<<2|s>>4,l[i++]=(s&15)<<4|a>>2,l[i++]=(a&3)<<6|o&63;return c},Ax=function(A){for(var e=A.length,t=[],n=0;n<e;n+=2)t.push(A[n+1]<<8|A[n]);return t},nx=function(A){for(var e=A.length,t=[],n=0;n<e;n+=4)t.push(A[n+3]<<24|A[n+2]<<16|A[n+1]<<8|A[n]);return t},Hn=5,Ic=11,Ga=2,ix=Ic-Hn,fd=65536>>Hn,rx=1<<Hn,Va=rx-1,sx=1024>>Hn,ax=fd+sx,ox=ax,cx=32,lx=ox+cx,ux=65536>>Ic,fx=1<<ix,dx=fx-1,_u=function(A,e,t){return A.slice?A.slice(e,t):new Uint16Array(Array.prototype.slice.call(A,e,t))},hx=function(A,e,t){return A.slice?A.slice(e,t):new Uint32Array(Array.prototype.slice.call(A,e,t))},px=function(A,e){var t=tx(A),n=Array.isArray(t)?nx(t):new Uint32Array(t),i=Array.isArray(t)?Ax(t):new Uint16Array(t),r=24,s=_u(i,r/2,n[4]/2),a=n[5]===2?_u(i,(r+n[4])/2):hx(n,Math.ceil((r+n[4])/4));return new gx(n[0],n[1],n[2],n[3],s,a)},gx=(function(){function A(e,t,n,i,r,s){this.initialValue=e,this.errorValue=t,this.highStart=n,this.highValueIndex=i,this.index=r,this.data=s}return A.prototype.get=function(e){var t;if(e>=0){if(e<55296||e>56319&&e<=65535)return t=this.index[e>>Hn],t=(t<<Ga)+(e&Va),this.data[t];if(e<=65535)return t=this.index[fd+(e-55296>>Hn)],t=(t<<Ga)+(e&Va),this.data[t];if(e<this.highStart)return t=lx-ux+(e>>Ic),t=this.index[t],t+=e>>Hn&dx,t=this.index[t],t=(t<<Ga)+(e&Va),this.data[t];if(e<=1114111)return this.data[this.highValueIndex]}return this.errorValue},A})(),Cu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",mx=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var rs=0;rs<Cu.length;rs++)mx[Cu.charCodeAt(rs)]=rs;var Bx=1,Ka=2,ka=3,xu=4,Eu=5,vx=7,Uu=8,za=9,Wa=10,Su=11,Fu=12,yu=13,Mu=14,Xa=15,wx=function(A){for(var e=[],t=0,n=A.length;t<n;){var i=A.charCodeAt(t++);if(i>=55296&&i<=56319&&t<n){var r=A.charCodeAt(t++);(r&64512)===56320?e.push(((i&1023)<<10)+(r&1023)+65536):(e.push(i),t--)}else e.push(i)}return e},_x=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,A);var t=A.length;if(!t)return"";for(var n=[],i=-1,r="";++i<t;){var s=A[i];s<=65535?n.push(s):(s-=65536,n.push((s>>10)+55296,s%1024+56320)),(i+1===t||n.length>16384)&&(r+=String.fromCharCode.apply(String,n),n.length=0)}return r},Cx=px(ex),AA="×",Ya="÷",xx=function(A){return Cx.get(A)},Ex=function(A,e,t){var n=t-2,i=e[n],r=e[t-1],s=e[t];if(r===Ka&&s===ka)return AA;if(r===Ka||r===ka||r===xu||s===Ka||s===ka||s===xu)return Ya;if(r===Uu&&[Uu,za,Su,Fu].indexOf(s)!==-1||(r===Su||r===za)&&(s===za||s===Wa)||(r===Fu||r===Wa)&&s===Wa||s===yu||s===Eu||s===vx||r===Bx)return AA;if(r===yu&&s===Mu){for(;i===Eu;)i=e[--n];if(i===Mu)return AA}if(r===Xa&&s===Xa){for(var a=0;i===Xa;)a++,i=e[--n];if(a%2===0)return AA}return Ya},Ux=function(A){var e=wx(A),t=e.length,n=0,i=0,r=e.map(xx);return{next:function(){if(n>=t)return{done:!0,value:null};for(var s=AA;n<t&&(s=Ex(e,r,++n))===AA;);if(s!==AA||n===t){var a=_x.apply(null,e.slice(i,n));return i=n,{value:a,done:!1}}return{done:!0,value:null}}}},Sx=function(A){for(var e=Ux(A),t=[],n;!(n=e.next()).done;)n.value&&t.push(n.value.slice());return t},Fx=function(A){var e=123;if(A.createRange){var t=A.createRange();if(t.getBoundingClientRect){var n=A.createElement("boundtest");n.style.height=e+"px",n.style.display="block",A.body.appendChild(n),t.selectNode(n);var i=t.getBoundingClientRect(),r=Math.round(i.height);if(A.body.removeChild(n),r===e)return!0}}return!1},yx=function(A){var e=A.createElement("boundtest");e.style.width="50px",e.style.display="block",e.style.fontSize="12px",e.style.letterSpacing="0px",e.style.wordSpacing="0px",A.body.appendChild(e);var t=A.createRange();e.innerHTML=typeof"".repeat=="function"?"&#128104;".repeat(10):"";var n=e.firstChild,i=Vs(n.data).map(function(o){return mt(o)}),r=0,s={},a=i.every(function(o,c){t.setStart(n,r),t.setEnd(n,r+o.length);var l=t.getBoundingClientRect();r+=o.length;var f=l.x>s.x||l.y>s.y;return s=l,c===0?!0:f});return A.body.removeChild(e),a},Mx=function(){return typeof new Image().crossOrigin<"u"},bx=function(){return typeof new XMLHttpRequest().responseType=="string"},Tx=function(A){var e=new Image,t=A.createElement("canvas"),n=t.getContext("2d");if(!n)return!1;e.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{n.drawImage(e,0,0),t.toDataURL()}catch{return!1}return!0},bu=function(A){return A[0]===0&&A[1]===255&&A[2]===0&&A[3]===255},Qx=function(A){var e=A.createElement("canvas"),t=100;e.width=t,e.height=t;var n=e.getContext("2d");if(!n)return Promise.reject(!1);n.fillStyle="rgb(0, 255, 0)",n.fillRect(0,0,t,t);var i=new Image,r=e.toDataURL();i.src=r;var s=cc(t,t,0,0,i);return n.fillStyle="red",n.fillRect(0,0,t,t),Tu(s).then(function(a){n.drawImage(a,0,0);var o=n.getImageData(0,0,t,t).data;n.fillStyle="red",n.fillRect(0,0,t,t);var c=A.createElement("div");return c.style.backgroundImage="url("+r+")",c.style.height=t+"px",bu(o)?Tu(cc(t,t,0,0,c)):Promise.reject(!1)}).then(function(a){return n.drawImage(a,0,0),bu(n.getImageData(0,0,t,t).data)}).catch(function(){return!1})},cc=function(A,e,t,n,i){var r="http://www.w3.org/2000/svg",s=document.createElementNS(r,"svg"),a=document.createElementNS(r,"foreignObject");return s.setAttributeNS(null,"width",A.toString()),s.setAttributeNS(null,"height",e.toString()),a.setAttributeNS(null,"width","100%"),a.setAttributeNS(null,"height","100%"),a.setAttributeNS(null,"x",t.toString()),a.setAttributeNS(null,"y",n.toString()),a.setAttributeNS(null,"externalResourcesRequired","true"),s.appendChild(a),a.appendChild(i),s},Tu=function(A){return new Promise(function(e,t){var n=new Image;n.onload=function(){return e(n)},n.onerror=t,n.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(A))})},Qt={get SUPPORT_RANGE_BOUNDS(){var A=Fx(document);return Object.defineProperty(Qt,"SUPPORT_RANGE_BOUNDS",{value:A}),A},get SUPPORT_WORD_BREAKING(){var A=Qt.SUPPORT_RANGE_BOUNDS&&yx(document);return Object.defineProperty(Qt,"SUPPORT_WORD_BREAKING",{value:A}),A},get SUPPORT_SVG_DRAWING(){var A=Tx(document);return Object.defineProperty(Qt,"SUPPORT_SVG_DRAWING",{value:A}),A},get SUPPORT_FOREIGNOBJECT_DRAWING(){var A=typeof Array.from=="function"&&typeof window.fetch=="function"?Qx(document):Promise.resolve(!1);return Object.defineProperty(Qt,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:A}),A},get SUPPORT_CORS_IMAGES(){var A=Mx();return Object.defineProperty(Qt,"SUPPORT_CORS_IMAGES",{value:A}),A},get SUPPORT_RESPONSE_TYPE(){var A=bx();return Object.defineProperty(Qt,"SUPPORT_RESPONSE_TYPE",{value:A}),A},get SUPPORT_CORS_XHR(){var A="withCredentials"in new XMLHttpRequest;return Object.defineProperty(Qt,"SUPPORT_CORS_XHR",{value:A}),A},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var A=!!(typeof Intl<"u"&&Intl.Segmenter);return Object.defineProperty(Qt,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:A}),A}},qi=(function(){function A(e,t){this.text=e,this.bounds=t}return A})(),Ix=function(A,e,t,n){var i=Dx(e,t),r=[],s=0;return i.forEach(function(a){if(t.textDecorationLine.length||a.trim().length>0)if(Qt.SUPPORT_RANGE_BOUNDS){var o=Qu(n,s,a.length).getClientRects();if(o.length>1){var c=Rc(a),l=0;c.forEach(function(u){r.push(new qi(u,JA.fromDOMRectList(A,Qu(n,l+s,u.length).getClientRects()))),l+=u.length})}else r.push(new qi(a,JA.fromDOMRectList(A,o)))}else{var f=n.splitText(a.length);r.push(new qi(a,Rx(A,n))),n=f}else Qt.SUPPORT_RANGE_BOUNDS||(n=n.splitText(a.length));s+=a.length}),r},Rx=function(A,e){var t=e.ownerDocument;if(t){var n=t.createElement("html2canvaswrapper");n.appendChild(e.cloneNode(!0));var i=e.parentNode;if(i){i.replaceChild(n,e);var r=Gs(A,n);return n.firstChild&&i.replaceChild(n.firstChild,n),r}}return JA.EMPTY},Qu=function(A,e,t){var n=A.ownerDocument;if(!n)throw new Error("Node has no owner document");var i=n.createRange();return i.setStart(A,e),i.setEnd(A,e+t),i},Rc=function(A){if(Qt.SUPPORT_NATIVE_TEXT_SEGMENTATION){var e=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(e.segment(A)).map(function(t){return t.segment})}return Sx(A)},Lx=function(A,e){if(Qt.SUPPORT_NATIVE_TEXT_SEGMENTATION){var t=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(t.segment(A)).map(function(n){return n.segment})}return Px(A,e)},Dx=function(A,e){return e.letterSpacing!==0?Rc(A):Lx(A,e)},Hx=[32,160,4961,65792,65793,4153,4241],Px=function(A,e){for(var t=uw(A,{lineBreak:e.lineBreak,wordBreak:e.overflowWrap==="break-word"?"break-word":e.wordBreak}),n=[],i,r=function(){if(i.value){var s=i.value.slice(),a=Vs(s),o="";a.forEach(function(c){Hx.indexOf(c)===-1?o+=mt(c):(o.length&&n.push(o),n.push(mt(c)),o="")}),o.length&&n.push(o)}};!(i=t.next()).done;)r();return n},Nx=(function(){function A(e,t,n){this.text=Ox(t.data,n.textTransform),this.textBounds=Ix(e,this.text,n,t)}return A})(),Ox=function(A,e){switch(e){case 1:return A.toLowerCase();case 3:return A.replace(Gx,Vx);case 2:return A.toUpperCase();default:return A}},Gx=/(^|\s|:|-|\(|\))([a-z])/g,Vx=function(A,e,t){return A.length>0?e+t.toUpperCase():A},dd=(function(A){mA(e,A);function e(t,n){var i=A.call(this,t,n)||this;return i.src=n.currentSrc||n.src,i.intrinsicWidth=n.naturalWidth,i.intrinsicHeight=n.naturalHeight,i.context.cache.addImage(i.src),i}return e})(bA),hd=(function(A){mA(e,A);function e(t,n){var i=A.call(this,t,n)||this;return i.canvas=n,i.intrinsicWidth=n.width,i.intrinsicHeight=n.height,i}return e})(bA),pd=(function(A){mA(e,A);function e(t,n){var i=A.call(this,t,n)||this,r=new XMLSerializer,s=Gs(t,n);return n.setAttribute("width",s.width+"px"),n.setAttribute("height",s.height+"px"),i.svg="data:image/svg+xml,"+encodeURIComponent(r.serializeToString(n)),i.intrinsicWidth=n.width.baseVal.value,i.intrinsicHeight=n.height.baseVal.value,i.context.cache.addImage(i.svg),i}return e})(bA),gd=(function(A){mA(e,A);function e(t,n){var i=A.call(this,t,n)||this;return i.value=n.value,i}return e})(bA),lc=(function(A){mA(e,A);function e(t,n){var i=A.call(this,t,n)||this;return i.start=n.start,i.reversed=typeof n.reversed=="boolean"&&n.reversed===!0,i}return e})(bA),Kx=[{type:15,flags:0,unit:"px",number:3}],kx=[{type:16,flags:0,number:50}],zx=function(A){return A.width>A.height?new JA(A.left+(A.width-A.height)/2,A.top,A.height,A.height):A.width<A.height?new JA(A.left,A.top+(A.height-A.width)/2,A.width,A.width):A},Wx=function(A){var e=A.type===Xx?new Array(A.value.length+1).join("•"):A.value;return e.length===0?A.placeholder||"":e},Ms="checkbox",bs="radio",Xx="password",Iu=707406591,Lc=(function(A){mA(e,A);function e(t,n){var i=A.call(this,t,n)||this;switch(i.type=n.type.toLowerCase(),i.checked=n.checked,i.value=Wx(n),(i.type===Ms||i.type===bs)&&(i.styles.backgroundColor=3739148031,i.styles.borderTopColor=i.styles.borderRightColor=i.styles.borderBottomColor=i.styles.borderLeftColor=2779096575,i.styles.borderTopWidth=i.styles.borderRightWidth=i.styles.borderBottomWidth=i.styles.borderLeftWidth=1,i.styles.borderTopStyle=i.styles.borderRightStyle=i.styles.borderBottomStyle=i.styles.borderLeftStyle=1,i.styles.backgroundClip=[0],i.styles.backgroundOrigin=[0],i.bounds=zx(i.bounds)),i.type){case Ms:i.styles.borderTopRightRadius=i.styles.borderTopLeftRadius=i.styles.borderBottomRightRadius=i.styles.borderBottomLeftRadius=Kx;break;case bs:i.styles.borderTopRightRadius=i.styles.borderTopLeftRadius=i.styles.borderBottomRightRadius=i.styles.borderBottomLeftRadius=kx;break}return i}return e})(bA),md=(function(A){mA(e,A);function e(t,n){var i=A.call(this,t,n)||this,r=n.options[n.selectedIndex||0];return i.value=r&&r.text||"",i}return e})(bA),Bd=(function(A){mA(e,A);function e(t,n){var i=A.call(this,t,n)||this;return i.value=n.value,i}return e})(bA),vd=(function(A){mA(e,A);function e(t,n){var i=A.call(this,t,n)||this;i.src=n.src,i.width=parseInt(n.width,10)||0,i.height=parseInt(n.height,10)||0,i.backgroundColor=i.styles.backgroundColor;try{if(n.contentWindow&&n.contentWindow.document&&n.contentWindow.document.documentElement){i.tree=_d(t,n.contentWindow.document.documentElement);var r=n.contentWindow.document.documentElement?Yi(t,getComputedStyle(n.contentWindow.document.documentElement).backgroundColor):WA.TRANSPARENT,s=n.contentWindow.document.body?Yi(t,getComputedStyle(n.contentWindow.document.body).backgroundColor):WA.TRANSPARENT;i.backgroundColor=mn(r)?mn(s)?i.styles.backgroundColor:s:r}}catch{}return i}return e})(bA),Yx=["OL","UL","MENU"],vs=function(A,e,t,n){for(var i=e.firstChild,r=void 0;i;i=r)if(r=i.nextSibling,Cd(i)&&i.data.trim().length>0)t.textNodes.push(new Nx(A,i,t.styles));else if(fi(i))if(Sd(i)&&i.assignedNodes)i.assignedNodes().forEach(function(a){return vs(A,a,t,n)});else{var s=wd(A,i);s.styles.isVisible()&&(Jx(i,s,n)?s.flags|=4:qx(s.styles)&&(s.flags|=2),Yx.indexOf(i.tagName)!==-1&&(s.flags|=8),t.elements.push(s),i.slot,i.shadowRoot?vs(A,i.shadowRoot,s,n):!Ts(i)&&!xd(i)&&!Qs(i)&&vs(A,i,s,n))}},wd=function(A,e){return fc(e)?new dd(A,e):Ed(e)?new hd(A,e):xd(e)?new pd(A,e):Zx(e)?new gd(A,e):$x(e)?new lc(A,e):jx(e)?new Lc(A,e):Qs(e)?new md(A,e):Ts(e)?new Bd(A,e):Ud(e)?new vd(A,e):new bA(A,e)},_d=function(A,e){var t=wd(A,e);return t.flags|=4,vs(A,e,t,t),t},Jx=function(A,e,t){return e.styles.isPositionedWithZIndex()||e.styles.opacity<1||e.styles.isTransformed()||Dc(A)&&t.styles.isTransparent()},qx=function(A){return A.isPositioned()||A.isFloating()},Cd=function(A){return A.nodeType===Node.TEXT_NODE},fi=function(A){return A.nodeType===Node.ELEMENT_NODE},uc=function(A){return fi(A)&&typeof A.style<"u"&&!ws(A)},ws=function(A){return typeof A.className=="object"},Zx=function(A){return A.tagName==="LI"},$x=function(A){return A.tagName==="OL"},jx=function(A){return A.tagName==="INPUT"},eE=function(A){return A.tagName==="HTML"},xd=function(A){return A.tagName==="svg"},Dc=function(A){return A.tagName==="BODY"},Ed=function(A){return A.tagName==="CANVAS"},Ru=function(A){return A.tagName==="VIDEO"},fc=function(A){return A.tagName==="IMG"},Ud=function(A){return A.tagName==="IFRAME"},Lu=function(A){return A.tagName==="STYLE"},tE=function(A){return A.tagName==="SCRIPT"},Ts=function(A){return A.tagName==="TEXTAREA"},Qs=function(A){return A.tagName==="SELECT"},Sd=function(A){return A.tagName==="SLOT"},Du=function(A){return A.tagName.indexOf("-")>0},AE=(function(){function A(){this.counters={}}return A.prototype.getCounterValue=function(e){var t=this.counters[e];return t&&t.length?t[t.length-1]:1},A.prototype.getCounterValues=function(e){var t=this.counters[e];return t||[]},A.prototype.pop=function(e){var t=this;e.forEach(function(n){return t.counters[n].pop()})},A.prototype.parse=function(e){var t=this,n=e.counterIncrement,i=e.counterReset,r=!0;n!==null&&n.forEach(function(a){var o=t.counters[a.counter];o&&a.increment!==0&&(r=!1,o.length||o.push(1),o[Math.max(0,o.length-1)]+=a.increment)});var s=[];return r&&i.forEach(function(a){var o=t.counters[a.counter];s.push(a.counter),o||(o=t.counters[a.counter]=[]),o.push(a.reset)}),s},A})(),Hu={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},Pu={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},nE={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},iE={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},ai=function(A,e,t,n,i,r){return A<e||A>t?nr(A,i,r.length>0):n.integers.reduce(function(s,a,o){for(;A>=a;)A-=a,s+=n.values[o];return s},"")+r},Fd=function(A,e,t,n){var i="";do t||A--,i=n(A)+i,A/=e;while(A*e>=e);return i},gt=function(A,e,t,n,i){var r=t-e+1;return(A<0?"-":"")+(Fd(Math.abs(A),r,n,function(s){return mt(Math.floor(s%r)+e)})+i)},yn=function(A,e,t){t===void 0&&(t=". ");var n=e.length;return Fd(Math.abs(A),n,!1,function(i){return e[Math.floor(i%n)]})+t},li=1,an=2,on=4,Wi=8,OA=function(A,e,t,n,i,r){if(A<-9999||A>9999)return nr(A,4,i.length>0);var s=Math.abs(A),a=i;if(s===0)return e[0]+a;for(var o=0;s>0&&o<=4;o++){var c=s%10;c===0&&Et(r,li)&&a!==""?a=e[c]+a:c>1||c===1&&o===0||c===1&&o===1&&Et(r,an)||c===1&&o===1&&Et(r,on)&&A>100||c===1&&o>1&&Et(r,Wi)?a=e[c]+(o>0?t[o-1]:"")+a:c===1&&o>0&&(a=t[o-1]+a),s=Math.floor(s/10)}return(A<0?n:"")+a},Nu="十百千萬",Ou="拾佰仟萬",Gu="マイナス",Ja="마이너스",nr=function(A,e,t){var n=t?". ":"",i=t?"、":"",r=t?", ":"",s=t?" ":"";switch(e){case 0:return"•"+s;case 1:return"◦"+s;case 2:return"◾"+s;case 5:var a=gt(A,48,57,!0,n);return a.length<4?"0"+a:a;case 4:return yn(A,"〇一二三四五六七八九",i);case 6:return ai(A,1,3999,Hu,3,n).toLowerCase();case 7:return ai(A,1,3999,Hu,3,n);case 8:return gt(A,945,969,!1,n);case 9:return gt(A,97,122,!1,n);case 10:return gt(A,65,90,!1,n);case 11:return gt(A,1632,1641,!0,n);case 12:case 49:return ai(A,1,9999,Pu,3,n);case 35:return ai(A,1,9999,Pu,3,n).toLowerCase();case 13:return gt(A,2534,2543,!0,n);case 14:case 30:return gt(A,6112,6121,!0,n);case 15:return yn(A,"子丑寅卯辰巳午未申酉戌亥",i);case 16:return yn(A,"甲乙丙丁戊己庚辛壬癸",i);case 17:case 48:return OA(A,"零一二三四五六七八九",Nu,"負",i,an|on|Wi);case 47:return OA(A,"零壹貳參肆伍陸柒捌玖",Ou,"負",i,li|an|on|Wi);case 42:return OA(A,"零一二三四五六七八九",Nu,"负",i,an|on|Wi);case 41:return OA(A,"零壹贰叁肆伍陆柒捌玖",Ou,"负",i,li|an|on|Wi);case 26:return OA(A,"〇一二三四五六七八九","十百千万",Gu,i,0);case 25:return OA(A,"零壱弐参四伍六七八九","拾百千万",Gu,i,li|an|on);case 31:return OA(A,"영일이삼사오육칠팔구","십백천만",Ja,r,li|an|on);case 33:return OA(A,"零一二三四五六七八九","十百千萬",Ja,r,0);case 32:return OA(A,"零壹貳參四五六七八九","拾百千",Ja,r,li|an|on);case 18:return gt(A,2406,2415,!0,n);case 20:return ai(A,1,19999,iE,3,n);case 21:return gt(A,2790,2799,!0,n);case 22:return gt(A,2662,2671,!0,n);case 22:return ai(A,1,10999,nE,3,n);case 23:return yn(A,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return yn(A,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return gt(A,3302,3311,!0,n);case 28:return yn(A,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",i);case 29:return yn(A,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",i);case 34:return gt(A,3792,3801,!0,n);case 37:return gt(A,6160,6169,!0,n);case 38:return gt(A,4160,4169,!0,n);case 39:return gt(A,2918,2927,!0,n);case 40:return gt(A,1776,1785,!0,n);case 43:return gt(A,3046,3055,!0,n);case 44:return gt(A,3174,3183,!0,n);case 45:return gt(A,3664,3673,!0,n);case 46:return gt(A,3872,3881,!0,n);case 3:default:return gt(A,48,57,!0,n)}},yd="data-html2canvas-ignore",Vu=(function(){function A(e,t,n){if(this.context=e,this.options=n,this.scrolledElements=[],this.referenceElement=t,this.counters=new AE,this.quoteDepth=0,!t.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(t.ownerDocument.documentElement,!1)}return A.prototype.toIFrame=function(e,t){var n=this,i=rE(e,t);if(!i.contentWindow)return Promise.reject("Unable to find iframe window");var r=e.defaultView.pageXOffset,s=e.defaultView.pageYOffset,a=i.contentWindow,o=a.document,c=oE(i).then(function(){return Vt(n,void 0,void 0,function(){var l,f;return Pt(this,function(u){switch(u.label){case 0:return this.scrolledElements.forEach(fE),a&&(a.scrollTo(t.left,t.top),/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&(a.scrollY!==t.top||a.scrollX!==t.left)&&(this.context.logger.warn("Unable to restore scroll position for cloned document"),this.context.windowBounds=this.context.windowBounds.add(a.scrollX-t.left,a.scrollY-t.top,0,0))),l=this.options.onclone,f=this.clonedReferenceElement,typeof f>"u"?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:o.fonts&&o.fonts.ready?[4,o.fonts.ready]:[3,2];case 1:u.sent(),u.label=2;case 2:return/(AppleWebKit)/g.test(navigator.userAgent)?[4,aE(o)]:[3,4];case 3:u.sent(),u.label=4;case 4:return typeof l=="function"?[2,Promise.resolve().then(function(){return l(o,f)}).then(function(){return i})]:[2,i]}})})});return o.open(),o.write(lE(document.doctype)+"<html></html>"),uE(this.referenceElement.ownerDocument,r,s),o.replaceChild(o.adoptNode(this.documentElement),o.documentElement),o.close(),c},A.prototype.createElementClone=function(e){if(oc(e,2))debugger;if(Ed(e))return this.createCanvasClone(e);if(Ru(e))return this.createVideoClone(e);if(Lu(e))return this.createStyleClone(e);var t=e.cloneNode(!1);return fc(t)&&(fc(e)&&e.currentSrc&&e.currentSrc!==e.src&&(t.src=e.currentSrc,t.srcset=""),t.loading==="lazy"&&(t.loading="eager")),Du(t)?this.createCustomElementClone(t):t},A.prototype.createCustomElementClone=function(e){var t=document.createElement("html2canvascustomelement");return qa(e.style,t),t},A.prototype.createStyleClone=function(e){try{var t=e.sheet;if(t&&t.cssRules){var n=[].slice.call(t.cssRules,0).reduce(function(r,s){return s&&typeof s.cssText=="string"?r+s.cssText:r},""),i=e.cloneNode(!1);return i.textContent=n,i}}catch(r){if(this.context.logger.error("Unable to access cssRules property",r),r.name!=="SecurityError")throw r}return e.cloneNode(!1)},A.prototype.createCanvasClone=function(e){var t;if(this.options.inlineImages&&e.ownerDocument){var n=e.ownerDocument.createElement("img");try{return n.src=e.toDataURL(),n}catch{this.context.logger.info("Unable to inline canvas contents, canvas is tainted",e)}}var i=e.cloneNode(!1);try{i.width=e.width,i.height=e.height;var r=e.getContext("2d"),s=i.getContext("2d");if(s)if(!this.options.allowTaint&&r)s.putImageData(r.getImageData(0,0,e.width,e.height),0,0);else{var a=(t=e.getContext("webgl2"))!==null&&t!==void 0?t:e.getContext("webgl");if(a){var o=a.getContextAttributes();o?.preserveDrawingBuffer===!1&&this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false",e)}s.drawImage(e,0,0)}return i}catch{this.context.logger.info("Unable to clone canvas as it is tainted",e)}return i},A.prototype.createVideoClone=function(e){var t=e.ownerDocument.createElement("canvas");t.width=e.offsetWidth,t.height=e.offsetHeight;var n=t.getContext("2d");try{return n&&(n.drawImage(e,0,0,t.width,t.height),this.options.allowTaint||n.getImageData(0,0,t.width,t.height)),t}catch{this.context.logger.info("Unable to clone video as it is tainted",e)}var i=e.ownerDocument.createElement("canvas");return i.width=e.offsetWidth,i.height=e.offsetHeight,i},A.prototype.appendChildNode=function(e,t,n){(!fi(t)||!tE(t)&&!t.hasAttribute(yd)&&(typeof this.options.ignoreElements!="function"||!this.options.ignoreElements(t)))&&(!this.options.copyStyles||!fi(t)||!Lu(t))&&e.appendChild(this.cloneNode(t,n))},A.prototype.cloneChildNodes=function(e,t,n){for(var i=this,r=e.shadowRoot?e.shadowRoot.firstChild:e.firstChild;r;r=r.nextSibling)if(fi(r)&&Sd(r)&&typeof r.assignedNodes=="function"){var s=r.assignedNodes();s.length&&s.forEach(function(a){return i.appendChildNode(t,a,n)})}else this.appendChildNode(t,r,n)},A.prototype.cloneNode=function(e,t){if(Cd(e))return document.createTextNode(e.data);if(!e.ownerDocument)return e.cloneNode(!1);var n=e.ownerDocument.defaultView;if(n&&fi(e)&&(uc(e)||ws(e))){var i=this.createElementClone(e);i.style.transitionProperty="none";var r=n.getComputedStyle(e),s=n.getComputedStyle(e,":before"),a=n.getComputedStyle(e,":after");this.referenceElement===e&&uc(i)&&(this.clonedReferenceElement=i),Dc(i)&&pE(i);var o=this.counters.parse(new vu(this.context,r)),c=this.resolvePseudoContent(e,i,s,Zi.BEFORE);Du(e)&&(t=!0),Ru(e)||this.cloneChildNodes(e,i,t),c&&i.insertBefore(c,i.firstChild);var l=this.resolvePseudoContent(e,i,a,Zi.AFTER);return l&&i.appendChild(l),this.counters.pop(o),(r&&(this.options.copyStyles||ws(e))&&!Ud(e)||t)&&qa(r,i),(e.scrollTop!==0||e.scrollLeft!==0)&&this.scrolledElements.push([i,e.scrollLeft,e.scrollTop]),(Ts(e)||Qs(e))&&(Ts(i)||Qs(i))&&(i.value=e.value),i}return e.cloneNode(!1)},A.prototype.resolvePseudoContent=function(e,t,n,i){var r=this;if(n){var s=n.content,a=t.ownerDocument;if(!(!a||!s||s==="none"||s==="-moz-alt-content"||n.display==="none")){this.counters.parse(new vu(this.context,n));var o=new ZC(this.context,n),c=a.createElement("html2canvaspseudoelement");qa(n,c),o.content.forEach(function(f){if(f.type===0)c.appendChild(a.createTextNode(f.value));else if(f.type===22){var u=a.createElement("img");u.src=f.value,u.style.opacity="1",c.appendChild(u)}else if(f.type===18){if(f.name==="attr"){var h=f.values.filter(st);h.length&&c.appendChild(a.createTextNode(e.getAttribute(h[0].value)||""))}else if(f.name==="counter"){var g=f.values.filter(wi),v=g[0],p=g[1];if(v&&st(v)){var d=r.counters.getCounterValue(v.value),w=p&&st(p)?ac.parse(r.context,p.value):3;c.appendChild(a.createTextNode(nr(d,w,!1)))}}else if(f.name==="counters"){var U=f.values.filter(wi),v=U[0],x=U[1],p=U[2];if(v&&st(v)){var F=r.counters.getCounterValues(v.value),E=p&&st(p)?ac.parse(r.context,p.value):3,M=x&&x.type===0?x.value:"",m=F.map(function(y){return nr(y,E,!1)}).join(M);c.appendChild(a.createTextNode(m))}}}else if(f.type===20)switch(f.value){case"open-quote":c.appendChild(a.createTextNode(Bu(o.quotes,r.quoteDepth++,!0)));break;case"close-quote":c.appendChild(a.createTextNode(Bu(o.quotes,--r.quoteDepth,!1)));break;default:c.appendChild(a.createTextNode(f.value))}}),c.className=dc+" "+hc;var l=i===Zi.BEFORE?" "+dc:" "+hc;return ws(t)?t.className.baseValue+=l:t.className+=l,c}}},A.destroy=function(e){return e.parentNode?(e.parentNode.removeChild(e),!0):!1},A})(),Zi;(function(A){A[A.BEFORE=0]="BEFORE",A[A.AFTER=1]="AFTER"})(Zi||(Zi={}));var rE=function(A,e){var t=A.createElement("iframe");return t.className="html2canvas-container",t.style.visibility="hidden",t.style.position="fixed",t.style.left="-10000px",t.style.top="0px",t.style.border="0",t.width=e.width.toString(),t.height=e.height.toString(),t.scrolling="no",t.setAttribute(yd,"true"),A.body.appendChild(t),t},sE=function(A){return new Promise(function(e){if(A.complete){e();return}if(!A.src){e();return}A.onload=e,A.onerror=e})},aE=function(A){return Promise.all([].slice.call(A.images,0).map(sE))},oE=function(A){return new Promise(function(e,t){var n=A.contentWindow;if(!n)return t("No window assigned for iframe");var i=n.document;n.onload=A.onload=function(){n.onload=A.onload=null;var r=setInterval(function(){i.body.childNodes.length>0&&i.readyState==="complete"&&(clearInterval(r),e(A))},50)}})},cE=["all","d","content"],qa=function(A,e){for(var t=A.length-1;t>=0;t--){var n=A.item(t);cE.indexOf(n)===-1&&e.style.setProperty(n,A.getPropertyValue(n))}return e},lE=function(A){var e="";return A&&(e+="<!DOCTYPE ",A.name&&(e+=A.name),A.internalSubset&&(e+=A.internalSubset),A.publicId&&(e+='"'+A.publicId+'"'),A.systemId&&(e+='"'+A.systemId+'"'),e+=">"),e},uE=function(A,e,t){A&&A.defaultView&&(e!==A.defaultView.pageXOffset||t!==A.defaultView.pageYOffset)&&A.defaultView.scrollTo(e,t)},fE=function(A){var e=A[0],t=A[1],n=A[2];e.scrollLeft=t,e.scrollTop=n},dE=":before",hE=":after",dc="___html2canvas___pseudoelement_before",hc="___html2canvas___pseudoelement_after",Ku=`{
    content: "" !important;
    display: none !important;
}`,pE=function(A){gE(A,"."+dc+dE+Ku+`
         .`+hc+hE+Ku)},gE=function(A,e){var t=A.ownerDocument;if(t){var n=t.createElement("style");n.textContent=e,A.appendChild(n)}},Md=(function(){function A(){}return A.getOrigin=function(e){var t=A._link;return t?(t.href=e,t.href=t.href,t.protocol+t.hostname+t.port):"about:blank"},A.isSameOrigin=function(e){return A.getOrigin(e)===A._origin},A.setContext=function(e){A._link=e.document.createElement("a"),A._origin=A.getOrigin(e.location.href)},A._origin="about:blank",A})(),mE=(function(){function A(e,t){this.context=e,this._options=t,this._cache={}}return A.prototype.addImage=function(e){var t=Promise.resolve();return this.has(e)||($a(e)||_E(e))&&(this._cache[e]=this.loadImage(e)).catch(function(){}),t},A.prototype.match=function(e){return this._cache[e]},A.prototype.loadImage=function(e){return Vt(this,void 0,void 0,function(){var t,n,i,r,s=this;return Pt(this,function(a){switch(a.label){case 0:return t=Md.isSameOrigin(e),n=!Za(e)&&this._options.useCORS===!0&&Qt.SUPPORT_CORS_IMAGES&&!t,i=!Za(e)&&!t&&!$a(e)&&typeof this._options.proxy=="string"&&Qt.SUPPORT_CORS_XHR&&!n,!t&&this._options.allowTaint===!1&&!Za(e)&&!$a(e)&&!i&&!n?[2]:(r=e,i?[4,this.proxy(r)]:[3,2]);case 1:r=a.sent(),a.label=2;case 2:return this.context.logger.debug("Added image "+e.substring(0,256)),[4,new Promise(function(o,c){var l=new Image;l.onload=function(){return o(l)},l.onerror=c,(CE(r)||n)&&(l.crossOrigin="anonymous"),l.src=r,l.complete===!0&&setTimeout(function(){return o(l)},500),s._options.imageTimeout>0&&setTimeout(function(){return c("Timed out ("+s._options.imageTimeout+"ms) loading image")},s._options.imageTimeout)})];case 3:return[2,a.sent()]}})})},A.prototype.has=function(e){return typeof this._cache[e]<"u"},A.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},A.prototype.proxy=function(e){var t=this,n=this._options.proxy;if(!n)throw new Error("No proxy defined");var i=e.substring(0,256);return new Promise(function(r,s){var a=Qt.SUPPORT_RESPONSE_TYPE?"blob":"text",o=new XMLHttpRequest;o.onload=function(){if(o.status===200)if(a==="text")r(o.response);else{var f=new FileReader;f.addEventListener("load",function(){return r(f.result)},!1),f.addEventListener("error",function(u){return s(u)},!1),f.readAsDataURL(o.response)}else s("Failed to proxy resource "+i+" with status code "+o.status)},o.onerror=s;var c=n.indexOf("?")>-1?"&":"?";if(o.open("GET",""+n+c+"url="+encodeURIComponent(e)+"&responseType="+a),a!=="text"&&o instanceof XMLHttpRequest&&(o.responseType=a),t._options.imageTimeout){var l=t._options.imageTimeout;o.timeout=l,o.ontimeout=function(){return s("Timed out ("+l+"ms) proxying "+i)}}o.send()})},A})(),BE=/^data:image\/svg\+xml/i,vE=/^data:image\/.*;base64,/i,wE=/^data:image\/.*/i,_E=function(A){return Qt.SUPPORT_SVG_DRAWING||!xE(A)},Za=function(A){return wE.test(A)},CE=function(A){return vE.test(A)},$a=function(A){return A.substr(0,4)==="blob"},xE=function(A){return A.substr(-3).toLowerCase()==="svg"||BE.test(A)},he=(function(){function A(e,t){this.type=0,this.x=e,this.y=t}return A.prototype.add=function(e,t){return new A(this.x+e,this.y+t)},A})(),oi=function(A,e,t){return new he(A.x+(e.x-A.x)*t,A.y+(e.y-A.y)*t)},ss=(function(){function A(e,t,n,i){this.type=1,this.start=e,this.startControl=t,this.endControl=n,this.end=i}return A.prototype.subdivide=function(e,t){var n=oi(this.start,this.startControl,e),i=oi(this.startControl,this.endControl,e),r=oi(this.endControl,this.end,e),s=oi(n,i,e),a=oi(i,r,e),o=oi(s,a,e);return t?new A(this.start,n,s,o):new A(o,a,r,this.end)},A.prototype.add=function(e,t){return new A(this.start.add(e,t),this.startControl.add(e,t),this.endControl.add(e,t),this.end.add(e,t))},A.prototype.reverse=function(){return new A(this.end,this.endControl,this.startControl,this.start)},A})(),iA=function(A){return A.type===1},EE=(function(){function A(e){var t=e.styles,n=e.bounds,i=ki(t.borderTopLeftRadius,n.width,n.height),r=i[0],s=i[1],a=ki(t.borderTopRightRadius,n.width,n.height),o=a[0],c=a[1],l=ki(t.borderBottomRightRadius,n.width,n.height),f=l[0],u=l[1],h=ki(t.borderBottomLeftRadius,n.width,n.height),g=h[0],v=h[1],p=[];p.push((r+o)/n.width),p.push((g+f)/n.width),p.push((s+v)/n.height),p.push((c+u)/n.height);var d=Math.max.apply(Math,p);d>1&&(r/=d,s/=d,o/=d,c/=d,f/=d,u/=d,g/=d,v/=d);var w=n.width-o,U=n.height-u,x=n.width-f,F=n.height-v,E=t.borderTopWidth,M=t.borderRightWidth,m=t.borderBottomWidth,_=t.borderLeftWidth,O=ut(t.paddingTop,e.bounds.width),y=ut(t.paddingRight,e.bounds.width),P=ut(t.paddingBottom,e.bounds.width),Q=ut(t.paddingLeft,e.bounds.width);this.topLeftBorderDoubleOuterBox=r>0||s>0?ft(n.left+_/3,n.top+E/3,r-_/3,s-E/3,je.TOP_LEFT):new he(n.left+_/3,n.top+E/3),this.topRightBorderDoubleOuterBox=r>0||s>0?ft(n.left+w,n.top+E/3,o-M/3,c-E/3,je.TOP_RIGHT):new he(n.left+n.width-M/3,n.top+E/3),this.bottomRightBorderDoubleOuterBox=f>0||u>0?ft(n.left+x,n.top+U,f-M/3,u-m/3,je.BOTTOM_RIGHT):new he(n.left+n.width-M/3,n.top+n.height-m/3),this.bottomLeftBorderDoubleOuterBox=g>0||v>0?ft(n.left+_/3,n.top+F,g-_/3,v-m/3,je.BOTTOM_LEFT):new he(n.left+_/3,n.top+n.height-m/3),this.topLeftBorderDoubleInnerBox=r>0||s>0?ft(n.left+_*2/3,n.top+E*2/3,r-_*2/3,s-E*2/3,je.TOP_LEFT):new he(n.left+_*2/3,n.top+E*2/3),this.topRightBorderDoubleInnerBox=r>0||s>0?ft(n.left+w,n.top+E*2/3,o-M*2/3,c-E*2/3,je.TOP_RIGHT):new he(n.left+n.width-M*2/3,n.top+E*2/3),this.bottomRightBorderDoubleInnerBox=f>0||u>0?ft(n.left+x,n.top+U,f-M*2/3,u-m*2/3,je.BOTTOM_RIGHT):new he(n.left+n.width-M*2/3,n.top+n.height-m*2/3),this.bottomLeftBorderDoubleInnerBox=g>0||v>0?ft(n.left+_*2/3,n.top+F,g-_*2/3,v-m*2/3,je.BOTTOM_LEFT):new he(n.left+_*2/3,n.top+n.height-m*2/3),this.topLeftBorderStroke=r>0||s>0?ft(n.left+_/2,n.top+E/2,r-_/2,s-E/2,je.TOP_LEFT):new he(n.left+_/2,n.top+E/2),this.topRightBorderStroke=r>0||s>0?ft(n.left+w,n.top+E/2,o-M/2,c-E/2,je.TOP_RIGHT):new he(n.left+n.width-M/2,n.top+E/2),this.bottomRightBorderStroke=f>0||u>0?ft(n.left+x,n.top+U,f-M/2,u-m/2,je.BOTTOM_RIGHT):new he(n.left+n.width-M/2,n.top+n.height-m/2),this.bottomLeftBorderStroke=g>0||v>0?ft(n.left+_/2,n.top+F,g-_/2,v-m/2,je.BOTTOM_LEFT):new he(n.left+_/2,n.top+n.height-m/2),this.topLeftBorderBox=r>0||s>0?ft(n.left,n.top,r,s,je.TOP_LEFT):new he(n.left,n.top),this.topRightBorderBox=o>0||c>0?ft(n.left+w,n.top,o,c,je.TOP_RIGHT):new he(n.left+n.width,n.top),this.bottomRightBorderBox=f>0||u>0?ft(n.left+x,n.top+U,f,u,je.BOTTOM_RIGHT):new he(n.left+n.width,n.top+n.height),this.bottomLeftBorderBox=g>0||v>0?ft(n.left,n.top+F,g,v,je.BOTTOM_LEFT):new he(n.left,n.top+n.height),this.topLeftPaddingBox=r>0||s>0?ft(n.left+_,n.top+E,Math.max(0,r-_),Math.max(0,s-E),je.TOP_LEFT):new he(n.left+_,n.top+E),this.topRightPaddingBox=o>0||c>0?ft(n.left+Math.min(w,n.width-M),n.top+E,w>n.width+M?0:Math.max(0,o-M),Math.max(0,c-E),je.TOP_RIGHT):new he(n.left+n.width-M,n.top+E),this.bottomRightPaddingBox=f>0||u>0?ft(n.left+Math.min(x,n.width-_),n.top+Math.min(U,n.height-m),Math.max(0,f-M),Math.max(0,u-m),je.BOTTOM_RIGHT):new he(n.left+n.width-M,n.top+n.height-m),this.bottomLeftPaddingBox=g>0||v>0?ft(n.left+_,n.top+Math.min(F,n.height-m),Math.max(0,g-_),Math.max(0,v-m),je.BOTTOM_LEFT):new he(n.left+_,n.top+n.height-m),this.topLeftContentBox=r>0||s>0?ft(n.left+_+Q,n.top+E+O,Math.max(0,r-(_+Q)),Math.max(0,s-(E+O)),je.TOP_LEFT):new he(n.left+_+Q,n.top+E+O),this.topRightContentBox=o>0||c>0?ft(n.left+Math.min(w,n.width+_+Q),n.top+E+O,w>n.width+_+Q?0:o-_+Q,c-(E+O),je.TOP_RIGHT):new he(n.left+n.width-(M+y),n.top+E+O),this.bottomRightContentBox=f>0||u>0?ft(n.left+Math.min(x,n.width-(_+Q)),n.top+Math.min(U,n.height+E+O),Math.max(0,f-(M+y)),u-(m+P),je.BOTTOM_RIGHT):new he(n.left+n.width-(M+y),n.top+n.height-(m+P)),this.bottomLeftContentBox=g>0||v>0?ft(n.left+_+Q,n.top+F,Math.max(0,g-(_+Q)),v-(m+P),je.BOTTOM_LEFT):new he(n.left+_+Q,n.top+n.height-(m+P))}return A})(),je;(function(A){A[A.TOP_LEFT=0]="TOP_LEFT",A[A.TOP_RIGHT=1]="TOP_RIGHT",A[A.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",A[A.BOTTOM_LEFT=3]="BOTTOM_LEFT"})(je||(je={}));var ft=function(A,e,t,n,i){var r=4*((Math.sqrt(2)-1)/3),s=t*r,a=n*r,o=A+t,c=e+n;switch(i){case je.TOP_LEFT:return new ss(new he(A,c),new he(A,c-a),new he(o-s,e),new he(o,e));case je.TOP_RIGHT:return new ss(new he(A,e),new he(A+s,e),new he(o,c-a),new he(o,c));case je.BOTTOM_RIGHT:return new ss(new he(o,e),new he(o,e+a),new he(A+s,c),new he(A,c));case je.BOTTOM_LEFT:default:return new ss(new he(o,c),new he(o-s,c),new he(A,e+a),new he(A,e))}},Is=function(A){return[A.topLeftBorderBox,A.topRightBorderBox,A.bottomRightBorderBox,A.bottomLeftBorderBox]},UE=function(A){return[A.topLeftContentBox,A.topRightContentBox,A.bottomRightContentBox,A.bottomLeftContentBox]},Rs=function(A){return[A.topLeftPaddingBox,A.topRightPaddingBox,A.bottomRightPaddingBox,A.bottomLeftPaddingBox]},SE=(function(){function A(e,t,n){this.offsetX=e,this.offsetY=t,this.matrix=n,this.type=0,this.target=6}return A})(),as=(function(){function A(e,t){this.path=e,this.target=t,this.type=1}return A})(),FE=(function(){function A(e){this.opacity=e,this.type=2,this.target=6}return A})(),yE=function(A){return A.type===0},bd=function(A){return A.type===1},ME=function(A){return A.type===2},ku=function(A,e){return A.length===e.length?A.some(function(t,n){return t===e[n]}):!1},bE=function(A,e,t,n,i){return A.map(function(r,s){switch(s){case 0:return r.add(e,t);case 1:return r.add(e+n,t);case 2:return r.add(e+n,t+i);case 3:return r.add(e,t+i)}return r})},Td=(function(){function A(e){this.element=e,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]}return A})(),Qd=(function(){function A(e,t){if(this.container=e,this.parent=t,this.effects=[],this.curves=new EE(this.container),this.container.styles.opacity<1&&this.effects.push(new FE(this.container.styles.opacity)),this.container.styles.transform!==null){var n=this.container.bounds.left+this.container.styles.transformOrigin[0].number,i=this.container.bounds.top+this.container.styles.transformOrigin[1].number,r=this.container.styles.transform;this.effects.push(new SE(n,i,r))}if(this.container.styles.overflowX!==0){var s=Is(this.curves),a=Rs(this.curves);ku(s,a)?this.effects.push(new as(s,6)):(this.effects.push(new as(s,2)),this.effects.push(new as(a,4)))}}return A.prototype.getEffects=function(e){for(var t=[2,3].indexOf(this.container.styles.position)===-1,n=this.parent,i=this.effects.slice(0);n;){var r=n.effects.filter(function(o){return!bd(o)});if(t||n.container.styles.position!==0||!n.parent){if(i.unshift.apply(i,r),t=[2,3].indexOf(n.container.styles.position)===-1,n.container.styles.overflowX!==0){var s=Is(n.curves),a=Rs(n.curves);ku(s,a)||i.unshift(new as(a,6))}}else i.unshift.apply(i,r);n=n.parent}return i.filter(function(o){return Et(o.target,e)})},A})(),pc=function(A,e,t,n){A.container.elements.forEach(function(i){var r=Et(i.flags,4),s=Et(i.flags,2),a=new Qd(i,A);Et(i.styles.display,2048)&&n.push(a);var o=Et(i.flags,8)?[]:n;if(r||s){var c=r||i.styles.isPositioned()?t:e,l=new Td(a);if(i.styles.isPositioned()||i.styles.opacity<1||i.styles.isTransformed()){var f=i.styles.zIndex.order;if(f<0){var u=0;c.negativeZIndex.some(function(g,v){return f>g.element.container.styles.zIndex.order?(u=v,!1):u>0}),c.negativeZIndex.splice(u,0,l)}else if(f>0){var h=0;c.positiveZIndex.some(function(g,v){return f>=g.element.container.styles.zIndex.order?(h=v+1,!1):h>0}),c.positiveZIndex.splice(h,0,l)}else c.zeroOrAutoZIndexOrTransformedOrOpacity.push(l)}else i.styles.isFloating()?c.nonPositionedFloats.push(l):c.nonPositionedInlineLevel.push(l);pc(a,l,r?l:t,o)}else i.styles.isInlineLevel()?e.inlineLevel.push(a):e.nonInlineLevel.push(a),pc(a,e,t,o);Et(i.flags,8)&&Id(i,o)})},Id=function(A,e){for(var t=A instanceof lc?A.start:1,n=A instanceof lc?A.reversed:!1,i=0;i<e.length;i++){var r=e[i];r.container instanceof gd&&typeof r.container.value=="number"&&r.container.value!==0&&(t=r.container.value),r.listValue=nr(t,r.container.styles.listStyleType,!0),t+=n?-1:1}},TE=function(A){var e=new Qd(A,null),t=new Td(e),n=[];return pc(e,t,t,n),Id(e.container,n),t},zu=function(A,e){switch(e){case 0:return oA(A.topLeftBorderBox,A.topLeftPaddingBox,A.topRightBorderBox,A.topRightPaddingBox);case 1:return oA(A.topRightBorderBox,A.topRightPaddingBox,A.bottomRightBorderBox,A.bottomRightPaddingBox);case 2:return oA(A.bottomRightBorderBox,A.bottomRightPaddingBox,A.bottomLeftBorderBox,A.bottomLeftPaddingBox);case 3:default:return oA(A.bottomLeftBorderBox,A.bottomLeftPaddingBox,A.topLeftBorderBox,A.topLeftPaddingBox)}},QE=function(A,e){switch(e){case 0:return oA(A.topLeftBorderBox,A.topLeftBorderDoubleOuterBox,A.topRightBorderBox,A.topRightBorderDoubleOuterBox);case 1:return oA(A.topRightBorderBox,A.topRightBorderDoubleOuterBox,A.bottomRightBorderBox,A.bottomRightBorderDoubleOuterBox);case 2:return oA(A.bottomRightBorderBox,A.bottomRightBorderDoubleOuterBox,A.bottomLeftBorderBox,A.bottomLeftBorderDoubleOuterBox);case 3:default:return oA(A.bottomLeftBorderBox,A.bottomLeftBorderDoubleOuterBox,A.topLeftBorderBox,A.topLeftBorderDoubleOuterBox)}},IE=function(A,e){switch(e){case 0:return oA(A.topLeftBorderDoubleInnerBox,A.topLeftPaddingBox,A.topRightBorderDoubleInnerBox,A.topRightPaddingBox);case 1:return oA(A.topRightBorderDoubleInnerBox,A.topRightPaddingBox,A.bottomRightBorderDoubleInnerBox,A.bottomRightPaddingBox);case 2:return oA(A.bottomRightBorderDoubleInnerBox,A.bottomRightPaddingBox,A.bottomLeftBorderDoubleInnerBox,A.bottomLeftPaddingBox);case 3:default:return oA(A.bottomLeftBorderDoubleInnerBox,A.bottomLeftPaddingBox,A.topLeftBorderDoubleInnerBox,A.topLeftPaddingBox)}},RE=function(A,e){switch(e){case 0:return os(A.topLeftBorderStroke,A.topRightBorderStroke);case 1:return os(A.topRightBorderStroke,A.bottomRightBorderStroke);case 2:return os(A.bottomRightBorderStroke,A.bottomLeftBorderStroke);case 3:default:return os(A.bottomLeftBorderStroke,A.topLeftBorderStroke)}},os=function(A,e){var t=[];return iA(A)?t.push(A.subdivide(.5,!1)):t.push(A),iA(e)?t.push(e.subdivide(.5,!0)):t.push(e),t},oA=function(A,e,t,n){var i=[];return iA(A)?i.push(A.subdivide(.5,!1)):i.push(A),iA(t)?i.push(t.subdivide(.5,!0)):i.push(t),iA(n)?i.push(n.subdivide(.5,!0).reverse()):i.push(n),iA(e)?i.push(e.subdivide(.5,!1).reverse()):i.push(e),i},Rd=function(A){var e=A.bounds,t=A.styles;return e.add(t.borderLeftWidth,t.borderTopWidth,-(t.borderRightWidth+t.borderLeftWidth),-(t.borderTopWidth+t.borderBottomWidth))},Ls=function(A){var e=A.styles,t=A.bounds,n=ut(e.paddingLeft,t.width),i=ut(e.paddingRight,t.width),r=ut(e.paddingTop,t.width),s=ut(e.paddingBottom,t.width);return t.add(n+e.borderLeftWidth,r+e.borderTopWidth,-(e.borderRightWidth+e.borderLeftWidth+n+i),-(e.borderTopWidth+e.borderBottomWidth+r+s))},LE=function(A,e){return A===0?e.bounds:A===2?Ls(e):Rd(e)},DE=function(A,e){return A===0?e.bounds:A===2?Ls(e):Rd(e)},ja=function(A,e,t){var n=LE(ui(A.styles.backgroundOrigin,e),A),i=DE(ui(A.styles.backgroundClip,e),A),r=HE(ui(A.styles.backgroundSize,e),t,n),s=r[0],a=r[1],o=ki(ui(A.styles.backgroundPosition,e),n.width-s,n.height-a),c=PE(ui(A.styles.backgroundRepeat,e),o,r,n,i),l=Math.round(n.left+o[0]),f=Math.round(n.top+o[1]);return[c,l,f,s,a]},ci=function(A){return st(A)&&A.value===pi.AUTO},cs=function(A){return typeof A=="number"},HE=function(A,e,t){var n=e[0],i=e[1],r=e[2],s=A[0],a=A[1];if(!s)return[0,0];if(Ct(s)&&a&&Ct(a))return[ut(s,t.width),ut(a,t.height)];var o=cs(r);if(st(s)&&(s.value===pi.CONTAIN||s.value===pi.COVER)){if(cs(r)){var c=t.width/t.height;return c<r!=(s.value===pi.COVER)?[t.width,t.width/r]:[t.height*r,t.height]}return[t.width,t.height]}var l=cs(n),f=cs(i),u=l||f;if(ci(s)&&(!a||ci(a))){if(l&&f)return[n,i];if(!o&&!u)return[t.width,t.height];if(u&&o){var h=l?n:i*r,g=f?i:n/r;return[h,g]}var v=l?n:t.width,p=f?i:t.height;return[v,p]}if(o){var d=0,w=0;return Ct(s)?d=ut(s,t.width):Ct(a)&&(w=ut(a,t.height)),ci(s)?d=w*r:(!a||ci(a))&&(w=d/r),[d,w]}var U=null,x=null;if(Ct(s)?U=ut(s,t.width):a&&Ct(a)&&(x=ut(a,t.height)),U!==null&&(!a||ci(a))&&(x=l&&f?U/n*i:t.height),x!==null&&ci(s)&&(U=l&&f?x/i*n:t.width),U!==null&&x!==null)return[U,x];throw new Error("Unable to calculate background-size for element")},ui=function(A,e){var t=A[e];return typeof t>"u"?A[0]:t},PE=function(A,e,t,n,i){var r=e[0],s=e[1],a=t[0],o=t[1];switch(A){case 2:return[new he(Math.round(n.left),Math.round(n.top+s)),new he(Math.round(n.left+n.width),Math.round(n.top+s)),new he(Math.round(n.left+n.width),Math.round(o+n.top+s)),new he(Math.round(n.left),Math.round(o+n.top+s))];case 3:return[new he(Math.round(n.left+r),Math.round(n.top)),new he(Math.round(n.left+r+a),Math.round(n.top)),new he(Math.round(n.left+r+a),Math.round(n.height+n.top)),new he(Math.round(n.left+r),Math.round(n.height+n.top))];case 1:return[new he(Math.round(n.left+r),Math.round(n.top+s)),new he(Math.round(n.left+r+a),Math.round(n.top+s)),new he(Math.round(n.left+r+a),Math.round(n.top+s+o)),new he(Math.round(n.left+r),Math.round(n.top+s+o))];default:return[new he(Math.round(i.left),Math.round(i.top)),new he(Math.round(i.left+i.width),Math.round(i.top)),new he(Math.round(i.left+i.width),Math.round(i.height+i.top)),new he(Math.round(i.left),Math.round(i.height+i.top))]}},NE="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",Wu="Hidden Text",OE=(function(){function A(e){this._data={},this._document=e}return A.prototype.parseMetrics=function(e,t){var n=this._document.createElement("div"),i=this._document.createElement("img"),r=this._document.createElement("span"),s=this._document.body;n.style.visibility="hidden",n.style.fontFamily=e,n.style.fontSize=t,n.style.margin="0",n.style.padding="0",n.style.whiteSpace="nowrap",s.appendChild(n),i.src=NE,i.width=1,i.height=1,i.style.margin="0",i.style.padding="0",i.style.verticalAlign="baseline",r.style.fontFamily=e,r.style.fontSize=t,r.style.margin="0",r.style.padding="0",r.appendChild(this._document.createTextNode(Wu)),n.appendChild(r),n.appendChild(i);var a=i.offsetTop-r.offsetTop+2;n.removeChild(r),n.appendChild(this._document.createTextNode(Wu)),n.style.lineHeight="normal",i.style.verticalAlign="super";var o=i.offsetTop-n.offsetTop+2;return s.removeChild(n),{baseline:a,middle:o}},A.prototype.getMetrics=function(e,t){var n=e+" "+t;return typeof this._data[n]>"u"&&(this._data[n]=this.parseMetrics(e,t)),this._data[n]},A})(),Ld=(function(){function A(e,t){this.context=e,this.options=t}return A})(),GE=1e4,VE=(function(A){mA(e,A);function e(t,n){var i=A.call(this,t,n)||this;return i._activeEffects=[],i.canvas=n.canvas?n.canvas:document.createElement("canvas"),i.ctx=i.canvas.getContext("2d"),n.canvas||(i.canvas.width=Math.floor(n.width*n.scale),i.canvas.height=Math.floor(n.height*n.scale),i.canvas.style.width=n.width+"px",i.canvas.style.height=n.height+"px"),i.fontMetrics=new OE(document),i.ctx.scale(i.options.scale,i.options.scale),i.ctx.translate(-n.x,-n.y),i.ctx.textBaseline="bottom",i._activeEffects=[],i.context.logger.debug("Canvas renderer initialized ("+n.width+"x"+n.height+") with scale "+n.scale),i}return e.prototype.applyEffects=function(t){for(var n=this;this._activeEffects.length;)this.popEffect();t.forEach(function(i){return n.applyEffect(i)})},e.prototype.applyEffect=function(t){this.ctx.save(),ME(t)&&(this.ctx.globalAlpha=t.opacity),yE(t)&&(this.ctx.translate(t.offsetX,t.offsetY),this.ctx.transform(t.matrix[0],t.matrix[1],t.matrix[2],t.matrix[3],t.matrix[4],t.matrix[5]),this.ctx.translate(-t.offsetX,-t.offsetY)),bd(t)&&(this.path(t.path),this.ctx.clip()),this._activeEffects.push(t)},e.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},e.prototype.renderStack=function(t){return Vt(this,void 0,void 0,function(){var n;return Pt(this,function(i){switch(i.label){case 0:return n=t.element.container.styles,n.isVisible()?[4,this.renderStackContent(t)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2]}})})},e.prototype.renderNode=function(t){return Vt(this,void 0,void 0,function(){return Pt(this,function(n){switch(n.label){case 0:if(Et(t.container.flags,16))debugger;return t.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(t)]:[3,3];case 1:return n.sent(),[4,this.renderNodeContent(t)];case 2:n.sent(),n.label=3;case 3:return[2]}})})},e.prototype.renderTextWithLetterSpacing=function(t,n,i){var r=this;if(n===0)this.ctx.fillText(t.text,t.bounds.left,t.bounds.top+i);else{var s=Rc(t.text);s.reduce(function(a,o){return r.ctx.fillText(o,a,t.bounds.top+i),a+r.ctx.measureText(o).width},t.bounds.left)}},e.prototype.createFontStyle=function(t){var n=t.fontVariant.filter(function(s){return s==="normal"||s==="small-caps"}).join(""),i=XE(t.fontFamily).join(", "),r=fr(t.fontSize)?""+t.fontSize.number+t.fontSize.unit:t.fontSize.number+"px";return[[t.fontStyle,n,t.fontWeight,r,i].join(" "),i,r]},e.prototype.renderTextNode=function(t,n){return Vt(this,void 0,void 0,function(){var i,r,s,a,o,c,l,f,u=this;return Pt(this,function(h){return i=this.createFontStyle(n),r=i[0],s=i[1],a=i[2],this.ctx.font=r,this.ctx.direction=n.direction===1?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",o=this.fontMetrics.getMetrics(s,a),c=o.baseline,l=o.middle,f=n.paintOrder,t.textBounds.forEach(function(g){f.forEach(function(v){switch(v){case 0:u.ctx.fillStyle=bt(n.color),u.renderTextWithLetterSpacing(g,n.letterSpacing,c);var p=n.textShadow;p.length&&g.text.trim().length&&(p.slice(0).reverse().forEach(function(d){u.ctx.shadowColor=bt(d.color),u.ctx.shadowOffsetX=d.offsetX.number*u.options.scale,u.ctx.shadowOffsetY=d.offsetY.number*u.options.scale,u.ctx.shadowBlur=d.blur.number,u.renderTextWithLetterSpacing(g,n.letterSpacing,c)}),u.ctx.shadowColor="",u.ctx.shadowOffsetX=0,u.ctx.shadowOffsetY=0,u.ctx.shadowBlur=0),n.textDecorationLine.length&&(u.ctx.fillStyle=bt(n.textDecorationColor||n.color),n.textDecorationLine.forEach(function(d){switch(d){case 1:u.ctx.fillRect(g.bounds.left,Math.round(g.bounds.top+c),g.bounds.width,1);break;case 2:u.ctx.fillRect(g.bounds.left,Math.round(g.bounds.top),g.bounds.width,1);break;case 3:u.ctx.fillRect(g.bounds.left,Math.ceil(g.bounds.top+l),g.bounds.width,1);break}}));break;case 1:n.webkitTextStrokeWidth&&g.text.trim().length&&(u.ctx.strokeStyle=bt(n.webkitTextStrokeColor),u.ctx.lineWidth=n.webkitTextStrokeWidth,u.ctx.lineJoin=window.chrome?"miter":"round",u.ctx.strokeText(g.text,g.bounds.left,g.bounds.top+c)),u.ctx.strokeStyle="",u.ctx.lineWidth=0,u.ctx.lineJoin="miter";break}})}),[2]})})},e.prototype.renderReplacedElement=function(t,n,i){if(i&&t.intrinsicWidth>0&&t.intrinsicHeight>0){var r=Ls(t),s=Rs(n);this.path(s),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(i,0,0,t.intrinsicWidth,t.intrinsicHeight,r.left,r.top,r.width,r.height),this.ctx.restore()}},e.prototype.renderNodeContent=function(t){return Vt(this,void 0,void 0,function(){var n,i,r,s,a,o,w,w,c,l,f,u,x,h,g,F,v,p,d,w,U,x,F;return Pt(this,function(E){switch(E.label){case 0:this.applyEffects(t.getEffects(4)),n=t.container,i=t.curves,r=n.styles,s=0,a=n.textNodes,E.label=1;case 1:return s<a.length?(o=a[s],[4,this.renderTextNode(o,r)]):[3,4];case 2:E.sent(),E.label=3;case 3:return s++,[3,1];case 4:if(!(n instanceof dd))return[3,8];E.label=5;case 5:return E.trys.push([5,7,,8]),[4,this.context.cache.match(n.src)];case 6:return w=E.sent(),this.renderReplacedElement(n,i,w),[3,8];case 7:return E.sent(),this.context.logger.error("Error loading image "+n.src),[3,8];case 8:if(n instanceof hd&&this.renderReplacedElement(n,i,n.canvas),!(n instanceof pd))return[3,12];E.label=9;case 9:return E.trys.push([9,11,,12]),[4,this.context.cache.match(n.svg)];case 10:return w=E.sent(),this.renderReplacedElement(n,i,w),[3,12];case 11:return E.sent(),this.context.logger.error("Error loading svg "+n.svg.substring(0,255)),[3,12];case 12:return n instanceof vd&&n.tree?(c=new e(this.context,{scale:this.options.scale,backgroundColor:n.backgroundColor,x:0,y:0,width:n.width,height:n.height}),[4,c.render(n.tree)]):[3,14];case 13:l=E.sent(),n.width&&n.height&&this.ctx.drawImage(l,0,0,n.width,n.height,n.bounds.left,n.bounds.top,n.bounds.width,n.bounds.height),E.label=14;case 14:if(n instanceof Lc&&(f=Math.min(n.bounds.width,n.bounds.height),n.type===Ms?n.checked&&(this.ctx.save(),this.path([new he(n.bounds.left+f*.39363,n.bounds.top+f*.79),new he(n.bounds.left+f*.16,n.bounds.top+f*.5549),new he(n.bounds.left+f*.27347,n.bounds.top+f*.44071),new he(n.bounds.left+f*.39694,n.bounds.top+f*.5649),new he(n.bounds.left+f*.72983,n.bounds.top+f*.23),new he(n.bounds.left+f*.84,n.bounds.top+f*.34085),new he(n.bounds.left+f*.39363,n.bounds.top+f*.79)]),this.ctx.fillStyle=bt(Iu),this.ctx.fill(),this.ctx.restore()):n.type===bs&&n.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(n.bounds.left+f/2,n.bounds.top+f/2,f/4,0,Math.PI*2,!0),this.ctx.fillStyle=bt(Iu),this.ctx.fill(),this.ctx.restore())),KE(n)&&n.value.length){switch(u=this.createFontStyle(r),x=u[0],h=u[1],g=this.fontMetrics.getMetrics(x,h).baseline,this.ctx.font=x,this.ctx.fillStyle=bt(r.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=zE(n.styles.textAlign),F=Ls(n),v=0,n.styles.textAlign){case 1:v+=F.width/2;break;case 2:v+=F.width;break}p=F.add(v,0,0,-F.height/2+1),this.ctx.save(),this.path([new he(F.left,F.top),new he(F.left+F.width,F.top),new he(F.left+F.width,F.top+F.height),new he(F.left,F.top+F.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new qi(n.value,p),r.letterSpacing,g),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(!Et(n.styles.display,2048))return[3,20];if(n.styles.listStyleImage===null)return[3,19];if(d=n.styles.listStyleImage,d.type!==0)return[3,18];w=void 0,U=d.url,E.label=15;case 15:return E.trys.push([15,17,,18]),[4,this.context.cache.match(U)];case 16:return w=E.sent(),this.ctx.drawImage(w,n.bounds.left-(w.width+10),n.bounds.top),[3,18];case 17:return E.sent(),this.context.logger.error("Error loading list-style-image "+U),[3,18];case 18:return[3,20];case 19:t.listValue&&n.styles.listStyleType!==-1&&(x=this.createFontStyle(r)[0],this.ctx.font=x,this.ctx.fillStyle=bt(r.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",F=new JA(n.bounds.left,n.bounds.top+ut(n.styles.paddingTop,n.bounds.width),n.bounds.width,gu(r.lineHeight,r.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new qi(t.listValue,F),r.letterSpacing,gu(r.lineHeight,r.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),E.label=20;case 20:return[2]}})})},e.prototype.renderStackContent=function(t){return Vt(this,void 0,void 0,function(){var n,i,d,r,s,d,a,o,d,c,l,d,f,u,d,h,g,d,v,p,d;return Pt(this,function(w){switch(w.label){case 0:if(Et(t.element.container.flags,16))debugger;return[4,this.renderNodeBackgroundAndBorders(t.element)];case 1:w.sent(),n=0,i=t.negativeZIndex,w.label=2;case 2:return n<i.length?(d=i[n],[4,this.renderStack(d)]):[3,5];case 3:w.sent(),w.label=4;case 4:return n++,[3,2];case 5:return[4,this.renderNodeContent(t.element)];case 6:w.sent(),r=0,s=t.nonInlineLevel,w.label=7;case 7:return r<s.length?(d=s[r],[4,this.renderNode(d)]):[3,10];case 8:w.sent(),w.label=9;case 9:return r++,[3,7];case 10:a=0,o=t.nonPositionedFloats,w.label=11;case 11:return a<o.length?(d=o[a],[4,this.renderStack(d)]):[3,14];case 12:w.sent(),w.label=13;case 13:return a++,[3,11];case 14:c=0,l=t.nonPositionedInlineLevel,w.label=15;case 15:return c<l.length?(d=l[c],[4,this.renderStack(d)]):[3,18];case 16:w.sent(),w.label=17;case 17:return c++,[3,15];case 18:f=0,u=t.inlineLevel,w.label=19;case 19:return f<u.length?(d=u[f],[4,this.renderNode(d)]):[3,22];case 20:w.sent(),w.label=21;case 21:return f++,[3,19];case 22:h=0,g=t.zeroOrAutoZIndexOrTransformedOrOpacity,w.label=23;case 23:return h<g.length?(d=g[h],[4,this.renderStack(d)]):[3,26];case 24:w.sent(),w.label=25;case 25:return h++,[3,23];case 26:v=0,p=t.positiveZIndex,w.label=27;case 27:return v<p.length?(d=p[v],[4,this.renderStack(d)]):[3,30];case 28:w.sent(),w.label=29;case 29:return v++,[3,27];case 30:return[2]}})})},e.prototype.mask=function(t){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(t.slice(0).reverse()),this.ctx.closePath()},e.prototype.path=function(t){this.ctx.beginPath(),this.formatPath(t),this.ctx.closePath()},e.prototype.formatPath=function(t){var n=this;t.forEach(function(i,r){var s=iA(i)?i.start:i;r===0?n.ctx.moveTo(s.x,s.y):n.ctx.lineTo(s.x,s.y),iA(i)&&n.ctx.bezierCurveTo(i.startControl.x,i.startControl.y,i.endControl.x,i.endControl.y,i.end.x,i.end.y)})},e.prototype.renderRepeat=function(t,n,i,r){this.path(t),this.ctx.fillStyle=n,this.ctx.translate(i,r),this.ctx.fill(),this.ctx.translate(-i,-r)},e.prototype.resizeImage=function(t,n,i){var r;if(t.width===n&&t.height===i)return t;var s=(r=this.canvas.ownerDocument)!==null&&r!==void 0?r:document,a=s.createElement("canvas");a.width=Math.max(1,n),a.height=Math.max(1,i);var o=a.getContext("2d");return o.drawImage(t,0,0,t.width,t.height,0,0,n,i),a},e.prototype.renderBackgroundImage=function(t){return Vt(this,void 0,void 0,function(){var n,i,r,s,a,o;return Pt(this,function(c){switch(c.label){case 0:n=t.styles.backgroundImage.length-1,i=function(l){var f,u,h,O,L,R,Q,H,m,g,O,L,R,Q,H,v,p,d,w,U,x,F,E,M,m,_,O,y,P,Q,H,N,L,R,Z,J,Ae,de,ne,Ce,ze,We;return Pt(this,function(X){switch(X.label){case 0:if(l.type!==0)return[3,5];f=void 0,u=l.url,X.label=1;case 1:return X.trys.push([1,3,,4]),[4,r.context.cache.match(u)];case 2:return f=X.sent(),[3,4];case 3:return X.sent(),r.context.logger.error("Error loading background-image "+u),[3,4];case 4:return f&&(h=ja(t,n,[f.width,f.height,f.width/f.height]),O=h[0],L=h[1],R=h[2],Q=h[3],H=h[4],m=r.ctx.createPattern(r.resizeImage(f,Q,H),"repeat"),r.renderRepeat(O,m,L,R)),[3,6];case 5:y_(l)?(g=ja(t,n,[null,null,null]),O=g[0],L=g[1],R=g[2],Q=g[3],H=g[4],v=x_(l.angle,Q,H),p=v[0],d=v[1],w=v[2],U=v[3],x=v[4],F=document.createElement("canvas"),F.width=Q,F.height=H,E=F.getContext("2d"),M=E.createLinearGradient(d,U,w,x),hu(l.stops,p).forEach(function(ee){return M.addColorStop(ee.stop,bt(ee.color))}),E.fillStyle=M,E.fillRect(0,0,Q,H),Q>0&&H>0&&(m=r.ctx.createPattern(F,"repeat"),r.renderRepeat(O,m,L,R))):M_(l)&&(_=ja(t,n,[null,null,null]),O=_[0],y=_[1],P=_[2],Q=_[3],H=_[4],N=l.position.length===0?[Tc]:l.position,L=ut(N[0],Q),R=ut(N[N.length-1],H),Z=E_(l,L,R,Q,H),J=Z[0],Ae=Z[1],J>0&&Ae>0&&(de=r.ctx.createRadialGradient(y+L,P+R,0,y+L,P+R,J),hu(l.stops,J*2).forEach(function(ee){return de.addColorStop(ee.stop,bt(ee.color))}),r.path(O),r.ctx.fillStyle=de,J!==Ae?(ne=t.bounds.left+.5*t.bounds.width,Ce=t.bounds.top+.5*t.bounds.height,ze=Ae/J,We=1/ze,r.ctx.save(),r.ctx.translate(ne,Ce),r.ctx.transform(1,0,0,ze,0,0),r.ctx.translate(-ne,-Ce),r.ctx.fillRect(y,We*(P-Ce)+Ce,Q,H*We),r.ctx.restore()):r.ctx.fill())),X.label=6;case 6:return n--,[2]}})},r=this,s=0,a=t.styles.backgroundImage.slice(0).reverse(),c.label=1;case 1:return s<a.length?(o=a[s],[5,i(o)]):[3,4];case 2:c.sent(),c.label=3;case 3:return s++,[3,1];case 4:return[2]}})})},e.prototype.renderSolidBorder=function(t,n,i){return Vt(this,void 0,void 0,function(){return Pt(this,function(r){return this.path(zu(i,n)),this.ctx.fillStyle=bt(t),this.ctx.fill(),[2]})})},e.prototype.renderDoubleBorder=function(t,n,i,r){return Vt(this,void 0,void 0,function(){var s,a;return Pt(this,function(o){switch(o.label){case 0:return n<3?[4,this.renderSolidBorder(t,i,r)]:[3,2];case 1:return o.sent(),[2];case 2:return s=QE(r,i),this.path(s),this.ctx.fillStyle=bt(t),this.ctx.fill(),a=IE(r,i),this.path(a),this.ctx.fill(),[2]}})})},e.prototype.renderNodeBackgroundAndBorders=function(t){return Vt(this,void 0,void 0,function(){var n,i,r,s,a,o,c,l,f=this;return Pt(this,function(u){switch(u.label){case 0:return this.applyEffects(t.getEffects(2)),n=t.container.styles,i=!mn(n.backgroundColor)||n.backgroundImage.length,r=[{style:n.borderTopStyle,color:n.borderTopColor,width:n.borderTopWidth},{style:n.borderRightStyle,color:n.borderRightColor,width:n.borderRightWidth},{style:n.borderBottomStyle,color:n.borderBottomColor,width:n.borderBottomWidth},{style:n.borderLeftStyle,color:n.borderLeftColor,width:n.borderLeftWidth}],s=kE(ui(n.backgroundClip,0),t.curves),i||n.boxShadow.length?(this.ctx.save(),this.path(s),this.ctx.clip(),mn(n.backgroundColor)||(this.ctx.fillStyle=bt(n.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(t.container)]):[3,2];case 1:u.sent(),this.ctx.restore(),n.boxShadow.slice(0).reverse().forEach(function(h){f.ctx.save();var g=Is(t.curves),v=h.inset?0:GE,p=bE(g,-v+(h.inset?1:-1)*h.spread.number,(h.inset?1:-1)*h.spread.number,h.spread.number*(h.inset?-2:2),h.spread.number*(h.inset?-2:2));h.inset?(f.path(g),f.ctx.clip(),f.mask(p)):(f.mask(g),f.ctx.clip(),f.path(p)),f.ctx.shadowOffsetX=h.offsetX.number+v,f.ctx.shadowOffsetY=h.offsetY.number,f.ctx.shadowColor=bt(h.color),f.ctx.shadowBlur=h.blur.number,f.ctx.fillStyle=h.inset?bt(h.color):"rgba(0,0,0,1)",f.ctx.fill(),f.ctx.restore()}),u.label=2;case 2:a=0,o=0,c=r,u.label=3;case 3:return o<c.length?(l=c[o],l.style!==0&&!mn(l.color)&&l.width>0?l.style!==2?[3,5]:[4,this.renderDashedDottedBorder(l.color,l.width,a,t.curves,2)]:[3,11]):[3,13];case 4:return u.sent(),[3,11];case 5:return l.style!==3?[3,7]:[4,this.renderDashedDottedBorder(l.color,l.width,a,t.curves,3)];case 6:return u.sent(),[3,11];case 7:return l.style!==4?[3,9]:[4,this.renderDoubleBorder(l.color,l.width,a,t.curves)];case 8:return u.sent(),[3,11];case 9:return[4,this.renderSolidBorder(l.color,a,t.curves)];case 10:u.sent(),u.label=11;case 11:a++,u.label=12;case 12:return o++,[3,3];case 13:return[2]}})})},e.prototype.renderDashedDottedBorder=function(t,n,i,r,s){return Vt(this,void 0,void 0,function(){var a,o,c,l,f,u,h,g,v,p,d,w,U,x,F,E,F,E;return Pt(this,function(M){return this.ctx.save(),a=RE(r,i),o=zu(r,i),s===2&&(this.path(o),this.ctx.clip()),iA(o[0])?(c=o[0].start.x,l=o[0].start.y):(c=o[0].x,l=o[0].y),iA(o[1])?(f=o[1].end.x,u=o[1].end.y):(f=o[1].x,u=o[1].y),i===0||i===2?h=Math.abs(c-f):h=Math.abs(l-u),this.ctx.beginPath(),s===3?this.formatPath(a):this.formatPath(o.slice(0,2)),g=n<3?n*3:n*2,v=n<3?n*2:n,s===3&&(g=n,v=n),p=!0,h<=g*2?p=!1:h<=g*2+v?(d=h/(2*g+v),g*=d,v*=d):(w=Math.floor((h+v)/(g+v)),U=(h-w*g)/(w-1),x=(h-(w+1)*g)/w,v=x<=0||Math.abs(v-U)<Math.abs(v-x)?U:x),p&&(s===3?this.ctx.setLineDash([0,g+v]):this.ctx.setLineDash([g,v])),s===3?(this.ctx.lineCap="round",this.ctx.lineWidth=n):this.ctx.lineWidth=n*2+1.1,this.ctx.strokeStyle=bt(t),this.ctx.stroke(),this.ctx.setLineDash([]),s===2&&(iA(o[0])&&(F=o[3],E=o[0],this.ctx.beginPath(),this.formatPath([new he(F.end.x,F.end.y),new he(E.start.x,E.start.y)]),this.ctx.stroke()),iA(o[1])&&(F=o[1],E=o[2],this.ctx.beginPath(),this.formatPath([new he(F.end.x,F.end.y),new he(E.start.x,E.start.y)]),this.ctx.stroke())),this.ctx.restore(),[2]})})},e.prototype.render=function(t){return Vt(this,void 0,void 0,function(){var n;return Pt(this,function(i){switch(i.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=bt(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),n=TE(t),[4,this.renderStack(n)];case 1:return i.sent(),this.applyEffects([]),[2,this.canvas]}})})},e})(Ld),KE=function(A){return A instanceof Bd||A instanceof md?!0:A instanceof Lc&&A.type!==bs&&A.type!==Ms},kE=function(A,e){switch(A){case 0:return Is(e);case 2:return UE(e);case 1:default:return Rs(e)}},zE=function(A){switch(A){case 1:return"center";case 2:return"right";case 0:default:return"left"}},WE=["-apple-system","system-ui"],XE=function(A){return/iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?A.filter(function(e){return WE.indexOf(e)===-1}):A},YE=(function(A){mA(e,A);function e(t,n){var i=A.call(this,t,n)||this;return i.canvas=n.canvas?n.canvas:document.createElement("canvas"),i.ctx=i.canvas.getContext("2d"),i.options=n,i.canvas.width=Math.floor(n.width*n.scale),i.canvas.height=Math.floor(n.height*n.scale),i.canvas.style.width=n.width+"px",i.canvas.style.height=n.height+"px",i.ctx.scale(i.options.scale,i.options.scale),i.ctx.translate(-n.x,-n.y),i.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+n.width+"x"+n.height+" at "+n.x+","+n.y+") with scale "+n.scale),i}return e.prototype.render=function(t){return Vt(this,void 0,void 0,function(){var n,i;return Pt(this,function(r){switch(r.label){case 0:return n=cc(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,t),[4,JE(n)];case 1:return i=r.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=bt(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(i,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},e})(Ld),JE=function(A){return new Promise(function(e,t){var n=new Image;n.onload=function(){e(n)},n.onerror=t,n.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(A))})},qE=(function(){function A(e){var t=e.id,n=e.enabled;this.id=t,this.enabled=n,this.start=Date.now()}return A.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window<"u"&&window.console&&typeof console.debug=="function"?console.debug.apply(console,Gr([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},A.prototype.getTime=function(){return Date.now()-this.start},A.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&typeof window<"u"&&window.console&&typeof console.info=="function"&&console.info.apply(console,Gr([this.id,this.getTime()+"ms"],e))},A.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window<"u"&&window.console&&typeof console.warn=="function"?console.warn.apply(console,Gr([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},A.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window<"u"&&window.console&&typeof console.error=="function"?console.error.apply(console,Gr([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},A.instances={},A})(),ZE=(function(){function A(e,t){var n;this.windowBounds=t,this.instanceName="#"+A.instanceCount++,this.logger=new qE({id:this.instanceName,enabled:e.logging}),this.cache=(n=e.cache)!==null&&n!==void 0?n:new mE(this,e)}return A.instanceCount=1,A})(),Zs=function(A,e){return e===void 0&&(e={}),$E(A,e)};typeof window<"u"&&Md.setContext(window);var $E=function(A,e){return Vt(void 0,void 0,void 0,function(){var t,n,i,r,s,a,o,c,l,f,u,h,g,v,p,d,w,U,x,F,M,E,M,m,_,O,y,P,Q,H,N,L,R,Z,J,Ae,de,ne,Ce,ze;return Pt(this,function(We){switch(We.label){case 0:if(!A||typeof A!="object")return[2,Promise.reject("Invalid element provided as first argument")];if(t=A.ownerDocument,!t)throw new Error("Element is not attached to a Document");if(n=t.defaultView,!n)throw new Error("Document is not attached to a Window");return i={allowTaint:(m=e.allowTaint)!==null&&m!==void 0?m:!1,imageTimeout:(_=e.imageTimeout)!==null&&_!==void 0?_:15e3,proxy:e.proxy,useCORS:(O=e.useCORS)!==null&&O!==void 0?O:!1},r=Yo({logging:(y=e.logging)!==null&&y!==void 0?y:!0,cache:e.cache},i),s={windowWidth:(P=e.windowWidth)!==null&&P!==void 0?P:n.innerWidth,windowHeight:(Q=e.windowHeight)!==null&&Q!==void 0?Q:n.innerHeight,scrollX:(H=e.scrollX)!==null&&H!==void 0?H:n.pageXOffset,scrollY:(N=e.scrollY)!==null&&N!==void 0?N:n.pageYOffset},a=new JA(s.scrollX,s.scrollY,s.windowWidth,s.windowHeight),o=new ZE(r,a),c=(L=e.foreignObjectRendering)!==null&&L!==void 0?L:!1,l={allowTaint:(R=e.allowTaint)!==null&&R!==void 0?R:!1,onclone:e.onclone,ignoreElements:e.ignoreElements,inlineImages:c,copyStyles:c},o.logger.debug("Starting document clone with size "+a.width+"x"+a.height+" scrolled to "+-a.left+","+-a.top),f=new Vu(o,A,l),u=f.clonedReferenceElement,u?[4,f.toIFrame(t,a)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return h=We.sent(),g=Dc(u)||eE(u)?bv(u.ownerDocument):Gs(o,u),v=g.width,p=g.height,d=g.left,w=g.top,U=jE(o,u,e.backgroundColor),x={canvas:e.canvas,backgroundColor:U,scale:(J=(Z=e.scale)!==null&&Z!==void 0?Z:n.devicePixelRatio)!==null&&J!==void 0?J:1,x:((Ae=e.x)!==null&&Ae!==void 0?Ae:0)+d,y:((de=e.y)!==null&&de!==void 0?de:0)+w,width:(ne=e.width)!==null&&ne!==void 0?ne:Math.ceil(v),height:(Ce=e.height)!==null&&Ce!==void 0?Ce:Math.ceil(p)},c?(o.logger.debug("Document cloned, using foreign object rendering"),M=new YE(o,x),[4,M.render(u)]):[3,3];case 2:return F=We.sent(),[3,5];case 3:return o.logger.debug("Document cloned, element located at "+d+","+w+" with size "+v+"x"+p+" using computed rendering"),o.logger.debug("Starting DOM parsing"),E=_d(o,u),U===E.styles.backgroundColor&&(E.styles.backgroundColor=WA.TRANSPARENT),o.logger.debug("Starting renderer for element at "+x.x+","+x.y+" with size "+x.width+"x"+x.height),M=new VE(o,x),[4,M.render(E)];case 4:F=We.sent(),We.label=5;case 5:return(!((ze=e.removeContainer)!==null&&ze!==void 0)||ze)&&(Vu.destroy(h)||o.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),o.logger.debug("Finished rendering"),[2,F]}})})},jE=function(A,e,t){var n=e.ownerDocument,i=n.documentElement?Yi(A,getComputedStyle(n.documentElement).backgroundColor):WA.TRANSPARENT,r=n.body?Yi(A,getComputedStyle(n.body).backgroundColor):WA.TRANSPARENT,s=typeof t=="string"?Yi(A,t):t===null?WA.TRANSPARENT:4294967295;return e===n.documentElement?mn(i)?mn(r)?s:r:i:s};const _t=96,eU="/env-theater.hdr";let eo=null;function dr(){return eo||(eo=new Promise((A,e)=>{new Mv().load(eU,t=>{t.mapping=us,t.wrapS=_s,t.wrapT=sA,t.minFilter=Je,t.magFilter=Je,A(t)},void 0,e)})),eo}const hr=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Hc=`
  precision highp float;
  varying vec2 vUv;

  uniform vec2 uResolution;
  uniform sampler2D uContentTex;              // captured slide content
  uniform sampler2D uEnvMap;                  // equirectangular environment map
  uniform vec3 uDroplets[${_t}];    // .xy = centre (UV), .z = radius
  uniform vec2 uLightPos;                     // light position (UV space)

  const float THRESHOLD = 0.45;
  const float R0 = 0.02;   // Schlick's R₀ for water: ((1.33-1)/(1.33+1))²

  // ── Metaball field (Gaussian kernel) ──
  float field(vec2 p, float aspect) {
    float sum = 0.0;
    for (int i = 0; i < ${_t}; i++) {
      vec2 centre = uDroplets[i].xy;
      float radius = uDroplets[i].z;
      if (radius < 0.001) continue;
      vec2 diff = p - centre;
      diff.x *= aspect;
      sum += exp(-dot(diff, diff) / (2.0 * radius * radius));
    }
    return sum;
  }

  // ── Surface normal ──
  // Real meniscus: exponential decay from the contact line inward,
  // matching h(x) = h₀(1 - e^(-x/λ_c)). The interior is dead flat;
  // curvature lives only in a narrow rim at the edge.
  vec3 getNormal(vec2 p, float f, float aspect) {
    float e = 0.004;
    float l = field(p - vec2(e, 0.0), aspect);
    float r = field(p + vec2(e, 0.0), aspect);
    float d = field(p - vec2(0.0, e), aspect);
    float u = field(p + vec2(0.0, e), aspect);

    // Exponential meniscus profile: steep at contact line, rapid decay inward
    float distFromEdge = max(f - THRESHOLD, 0.0);
    float meniscus = exp(-distFromEdge * 8.0);

    return normalize(vec3((l - r) * meniscus, (d - u) * meniscus, e * 55.0));
  }

  // ── Equirectangular environment map lookup ──
  vec3 envMap(vec3 dir) {
    float phi   = atan(dir.z, dir.x);
    float theta = asin(clamp(dir.y, -1.0, 1.0));
    vec2 envUV  = vec2(phi / 6.28318 + 0.5, theta / 3.14159 + 0.5);
    vec3 hdr    = texture2D(uEnvMap, envUV).rgb;
    // Reinhard tonemap with slight exposure boost to keep bright sources visible
    hdr *= 1.5;
    return hdr / (hdr + 1.0);
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / uResolution.y;
    float f = field(uv, aspect);

    // ── Outside: caustic light band ──
    // The meniscus focuses transmitted light just outside the contact line,
    // creating a thin bright caustic on the surface.
    if (f < THRESHOLD) {
      float caustic = smoothstep(THRESHOLD * 0.65, THRESHOLD * 0.92, f)
                    * (1.0 - smoothstep(THRESHOLD * 0.92, THRESHOLD, f));
      gl_FragColor = vec4(vec3(1.0), caustic * 0.07);
      return;
    }

    // ── Inside the water ──
    vec3 N = getNormal(uv, f, aspect);

    // Meniscus factor: 1 at contact line, 0 in flat interior
    float distFromEdge = max(f - THRESHOLD, 0.0);
    float meniscus = exp(-distFromEdge * 8.0);

    // ── Refraction ──
    // Flat interior: water is ~5mm thick, negligible offset at normal incidence.
    // Meniscus: curved surface bends light — refraction concentrates here.
    float refractionStrength = 0.012 * meniscus;
    vec2 refractedUV = clamp(uv + N.xy * refractionStrength, 0.0, 1.0);

    // ── Chromatic dispersion ──
    // Δn ≈ 0.006 between red and blue in water.
    // Only visible where there's curvature (the meniscus).
    float chromatic = 0.015 * meniscus;
    vec3 contentColor;
    contentColor.r = texture2D(uContentTex, clamp(refractedUV + N.xy * chromatic, 0.0, 1.0)).r;
    contentColor.g = texture2D(uContentTex, refractedUV).g;
    contentColor.b = texture2D(uContentTex, clamp(refractedUV - N.xy * chromatic, 0.0, 1.0)).b;

    // ── Caustic brightening inside the meniscus ──
    // The curved meniscus acts as a lens, focusing light into a bright
    // band just inward of the contact line.
    float causticInner = meniscus * (1.0 - meniscus) * 4.0;
    contentColor *= 1.0 + causticInner * 0.15;

    // ── Perspective view direction ──
    vec3 V = normalize(vec3((uv - 0.5) * vec2(aspect, 1.0) * 0.7, -1.0));

    // ── Fresnel (Schlick's approximation for water n=1.33) ──
    float NdV = max(dot(N, -V), 0.0);
    float fresnel = R0 + (1.0 - R0) * pow(1.0 - NdV, 5.0);

    // ── Environment reflection ──
    vec3 R = reflect(V, N);
    vec3 envColor = envMap(R);

    // ── Specular ──
    vec3 L = normalize(vec3((uLightPos - uv) * vec2(aspect, 1.0), 0.85));
    vec3 H = normalize(L - V);
    float NdH = max(dot(N, H), 0.0);
    // Flat interior: mirror-tight specular (very high power)
    float specMirror = pow(NdH, 512.0);
    // Meniscus: broader spread from curved surface
    float specBroad = pow(NdH, 40.0) * meniscus;

    // ── Composite ──
    vec3 color = contentColor;

    // Fresnel reflection — physically: 2% on flat interior, up to 100% at rim
    color = mix(color, envColor, fresnel);

    // Specular highlights — subdued point light
    color += specMirror * 0.25;
    color += specBroad * 0.03;

    // ── Alpha: water film tapers to zero thickness at the contact line ──
    float alpha = smoothstep(THRESHOLD, THRESHOLD + 0.045, f);

    gl_FragColor = vec4(color, alpha);
  }
`;function tU(A){return function(){A|=0,A=A+1831565813|0;let e=Math.imul(A^A>>>15,1|A);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function $s(A){const e=tU(A*13397+7),t=[],n=s=>Math.max(.03,Math.min(.97,s)),i=3+Math.floor(e()*3);for(let s=0;s<i&&!(t.length>=_t);s++){const a=.15+e()*.7,o=.15+e()*.7,c=3+Math.floor(e()*2);for(let u=0;u<c&&!(t.length>=_t);u++){const h=e()*Math.PI*2,g=e()*.045;t.push(new G(n(a+Math.cos(h)*g),n(o+Math.sin(h)*g),.04+e()*.03))}const l=3+Math.floor(e()*3);for(let u=0;u<l&&!(t.length>=_t);u++){const h=e()*Math.PI*2,g=2+Math.floor(e()*2);let v=a,p=o,d=.03+e()*.02;for(let w=0;w<g&&!(t.length>=_t);w++){const U=d*(1+e()*.6),x=(e()-.5)*.5;v+=Math.cos(h+x)*U,p+=Math.sin(h+x)*U,d*=.75+e()*.15,t.push(new G(n(v),n(p),Math.max(.012,d)))}}const f=1+Math.floor(e()*2);for(let u=0;u<f&&!(t.length>=_t);u++){const h=e()*Math.PI*2,g=.06+e()*.06;t.push(new G(n(a+Math.cos(h)*g),n(o+Math.sin(h)*g),.008+e()*.012))}}const r=15+Math.floor(e()*10);for(let s=0;s<r&&!(t.length>=_t);s++)t.push(new G(.04+e()*.92,.04+e()*.92,.004+e()*.01));for(;t.length<_t;)t.push(new G(0,0,0));return t}const AU=`
  precision highp float;
  varying vec2 vUv;

  uniform vec2 uResolution;
  uniform sampler2D uContentTex;
  uniform sampler2D uEnvMap;
  uniform vec3 uDroplets[${_t}];
  uniform vec2 uLightPos;
  uniform vec3 uWaterColor;

  const float THRESHOLD = 0.45;
  const float R0 = 0.02;

  float field(vec2 p, float aspect) {
    float sum = 0.0;
    for (int i = 0; i < ${_t}; i++) {
      vec2 centre = uDroplets[i].xy;
      float radius = uDroplets[i].z;
      if (radius < 0.001) continue;
      vec2 diff = p - centre;
      diff.x *= aspect;
      sum += exp(-dot(diff, diff) / (2.0 * radius * radius));
    }
    return sum;
  }

  vec3 getNormal(vec2 p, float f, float aspect) {
    float e = 0.004;
    float l = field(p - vec2(e, 0.0), aspect);
    float r = field(p + vec2(e, 0.0), aspect);
    float d = field(p - vec2(0.0, e), aspect);
    float u = field(p + vec2(0.0, e), aspect);
    float distFromEdge = max(f - THRESHOLD, 0.0);
    float meniscus = exp(-distFromEdge * 8.0);
    return normalize(vec3((l - r) * meniscus, (d - u) * meniscus, e * 55.0));
  }

  vec3 envMap(vec3 dir) {
    float phi   = atan(dir.z, dir.x);
    float theta = asin(clamp(dir.y, -1.0, 1.0));
    vec2 envUV  = vec2(phi / 6.28318 + 0.5, theta / 3.14159 + 0.5);
    vec3 hdr    = texture2D(uEnvMap, envUV).rgb;
    hdr *= 1.5;
    return hdr / (hdr + 1.0);
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / uResolution.y;
    float f = field(uv, aspect);

    // Outside: caustic band picks up a faint water colour
    if (f < THRESHOLD) {
      float caustic = smoothstep(THRESHOLD * 0.65, THRESHOLD * 0.92, f)
                    * (1.0 - smoothstep(THRESHOLD * 0.92, THRESHOLD, f));
      vec3 causticColor = mix(vec3(1.0), uWaterColor, 0.3);
      gl_FragColor = vec4(causticColor, caustic * 0.09);
      return;
    }

    vec3 N = getNormal(uv, f, aspect);
    float distFromEdge = max(f - THRESHOLD, 0.0);
    float meniscus = exp(-distFromEdge * 8.0);

    // Refraction
    float refractionStrength = 0.012 * meniscus;
    vec2 refractedUV = clamp(uv + N.xy * refractionStrength, 0.0, 1.0);

    // Chromatic dispersion
    float chromatic = 0.015 * meniscus;
    vec3 contentColor;
    contentColor.r = texture2D(uContentTex, clamp(refractedUV + N.xy * chromatic, 0.0, 1.0)).r;
    contentColor.g = texture2D(uContentTex, refractedUV).g;
    contentColor.b = texture2D(uContentTex, clamp(refractedUV - N.xy * chromatic, 0.0, 1.0)).b;

    // Caustic brightening
    float causticInner = meniscus * (1.0 - meniscus) * 4.0;
    contentColor *= 1.0 + causticInner * 0.15;

    // Beer-Lambert absorption through tinted water
    // Depth increases toward the centre of each puddle
    float waterDepth = smoothstep(THRESHOLD, THRESHOLD + 0.2, f);
    // Wavelengths complementary to uWaterColor are absorbed exponentially
    vec3 absorption = exp(-((1.0 - uWaterColor) * waterDepth * 2.5));
    contentColor *= absorption;
    // Subtle forward-scattering adds the water's own hue
    contentColor += uWaterColor * waterDepth * 0.06;

    // Perspective view direction
    vec3 V = normalize(vec3((uv - 0.5) * vec2(aspect, 1.0) * 0.7, -1.0));

    // Fresnel
    float NdV = max(dot(N, -V), 0.0);
    float fresnel = R0 + (1.0 - R0) * pow(1.0 - NdV, 5.0);

    // Environment reflection — lightly tinted by the water
    vec3 R = reflect(V, N);
    vec3 envColor = envMap(R);
    envColor = mix(envColor, envColor * uWaterColor, 0.2);

    // Specular
    vec3 L = normalize(vec3((uLightPos - uv) * vec2(aspect, 1.0), 0.85));
    vec3 H = normalize(L - V);
    float NdH = max(dot(N, H), 0.0);
    float specMirror = pow(NdH, 512.0);
    float specBroad = pow(NdH, 40.0) * meniscus;

    // Composite
    vec3 color = contentColor;
    color = mix(color, envColor, fresnel);
    color += specMirror * 0.25;
    color += specBroad * 0.03;

    float alpha = smoothstep(THRESHOLD, THRESHOLD + 0.045, f);
    gl_FragColor = vec4(color, alpha);
  }
`,Dd=`
  precision highp float;
  varying vec2 vUv;

  uniform vec2 uResolution;
  uniform sampler2D uContentTex;
  uniform sampler2D uEnvMap;
  uniform vec3 uDroplets[${_t}];
  uniform vec2 uLightPos;

  const float THRESHOLD = 0.45;
  // Schlick R₀ for oil n ≈ 1.5: ((1.5-1)/(1.5+1))² ≈ 0.04
  const float R0 = 0.04;
  const vec3 OIL_COLOR = vec3(0.04, 0.03, 0.02); // near-black with warm undertone

  float field(vec2 p, float aspect) {
    float sum = 0.0;
    for (int i = 0; i < ${_t}; i++) {
      vec2 centre = uDroplets[i].xy;
      float radius = uDroplets[i].z;
      if (radius < 0.001) continue;
      vec2 diff = p - centre;
      diff.x *= aspect;
      sum += exp(-dot(diff, diff) / (2.0 * radius * radius));
    }
    return sum;
  }

  vec3 getNormal(vec2 p, float f, float aspect) {
    float e = 0.004;
    float l = field(p - vec2(e, 0.0), aspect);
    float r = field(p + vec2(e, 0.0), aspect);
    float d = field(p - vec2(0.0, e), aspect);
    float u = field(p + vec2(0.0, e), aspect);
    float distFromEdge = max(f - THRESHOLD, 0.0);
    float meniscus = exp(-distFromEdge * 8.0);
    return normalize(vec3((l - r) * meniscus, (d - u) * meniscus, e * 55.0));
  }

  vec3 envMap(vec3 dir) {
    float phi   = atan(dir.z, dir.x);
    float theta = asin(clamp(dir.y, -1.0, 1.0));
    vec2 envUV  = vec2(phi / 6.28318 + 0.5, theta / 3.14159 + 0.5);
    vec3 hdr    = texture2D(uEnvMap, envUV).rgb;
    hdr *= 1.5;
    return hdr / (hdr + 1.0);
  }

  // Thin-film interference — oil slick rainbow at the meniscus
  // Film thickness varies with depth; visible colour cycles through
  // the spectrum as optical path difference changes.
  vec3 thinFilm(float thickness) {
    // Approximate spectral interference for a ~300-600nm oil film
    // by cycling RGB at different rates
    float d = thickness * 12.0; // scale to visible cycles
    return vec3(
      0.5 + 0.5 * cos(6.28318 * (d + 0.0)),
      0.5 + 0.5 * cos(6.28318 * (d + 0.33)),
      0.5 + 0.5 * cos(6.28318 * (d + 0.67))
    );
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / uResolution.y;
    float f = field(uv, aspect);

    // Outside: dark caustic shadow at contact line
    if (f < THRESHOLD) {
      float caustic = smoothstep(THRESHOLD * 0.7, THRESHOLD * 0.95, f)
                    * (1.0 - smoothstep(THRESHOLD * 0.95, THRESHOLD, f));
      gl_FragColor = vec4(vec3(0.0), caustic * 0.12);
      return;
    }

    vec3 N = getNormal(uv, f, aspect);
    float distFromEdge = max(f - THRESHOLD, 0.0);
    float meniscus = exp(-distFromEdge * 8.0);

    // Refraction — stronger than water (higher n)
    float refractionStrength = 0.018 * meniscus;
    vec2 refractedUV = clamp(uv + N.xy * refractionStrength, 0.0, 1.0);

    // Content beneath the oil — chromatic dispersion is stronger in oil
    float chromatic = 0.022 * meniscus;
    vec3 contentColor;
    contentColor.r = texture2D(uContentTex, clamp(refractedUV + N.xy * chromatic, 0.0, 1.0)).r;
    contentColor.g = texture2D(uContentTex, refractedUV).g;
    contentColor.b = texture2D(uContentTex, clamp(refractedUV - N.xy * chromatic, 0.0, 1.0)).b;

    // Heavy Beer-Lambert absorption — oil is nearly opaque
    float oilDepth = smoothstep(THRESHOLD, THRESHOLD + 0.15, f);
    vec3 absorption = exp(-vec3(8.0, 9.0, 10.0) * oilDepth);
    contentColor *= absorption;
    // At depth, content fades entirely to the oil body colour
    contentColor = mix(contentColor, OIL_COLOR, oilDepth * 0.92);

    // Perspective view direction
    vec3 V = normalize(vec3((uv - 0.5) * vec2(aspect, 1.0) * 0.7, -1.0));

    // Fresnel
    float NdV = max(dot(N, -V), 0.0);
    float fresnel = R0 + (1.0 - R0) * pow(1.0 - NdV, 5.0);

    // Environment reflection — oil is glossy
    vec3 R = reflect(V, N);
    vec3 envColor = envMap(R);

    // Thin-film iridescence — strongest at meniscus where film is thinnest
    vec3 iridescence = thinFilm(meniscus * 0.8 + oilDepth * 0.2);
    // Iridescence modulates the reflection, visible mainly at glancing angles
    float iriStrength = meniscus * fresnel * 1.8;
    envColor = mix(envColor, envColor * iridescence, clamp(iriStrength, 0.0, 0.7));

    // Specular — oil has a tighter, brighter highlight
    vec3 L = normalize(vec3((uLightPos - uv) * vec2(aspect, 1.0), 0.85));
    vec3 H = normalize(L - V);
    float NdH = max(dot(N, H), 0.0);
    float specMirror = pow(NdH, 600.0);
    float specBroad = pow(NdH, 50.0) * meniscus;

    // Composite
    vec3 color = contentColor;
    color = mix(color, envColor, fresnel);
    color += specMirror * 0.35;
    color += specBroad * 0.05;

    float alpha = smoothstep(THRESHOLD, THRESHOLD + 0.045, f);
    gl_FragColor = vec4(color, alpha);
  }
`,Hd=`
  precision highp float;
  varying vec2 vUv;

  uniform vec2 uResolution;
  uniform sampler2D uContentTex;
  uniform sampler2D uEnvMap;
  uniform vec3 uDroplets[${_t}];
  uniform vec2 uLightPos;

  const float THRESHOLD = 0.45;
  // Per-channel R₀ from measured spectral reflectance of mercury
  const vec3 R0 = vec3(0.78, 0.82, 0.85);

  float field(vec2 p, float aspect) {
    float sum = 0.0;
    for (int i = 0; i < ${_t}; i++) {
      vec2 centre = uDroplets[i].xy;
      float radius = uDroplets[i].z;
      if (radius < 0.001) continue;
      vec2 diff = p - centre;
      diff.x *= aspect;
      sum += exp(-dot(diff, diff) / (2.0 * radius * radius));
    }
    return sum;
  }

  vec3 getNormal(vec2 p, float f, float aspect) {
    float e = 0.004;
    float l = field(p - vec2(e, 0.0), aspect);
    float r = field(p + vec2(e, 0.0), aspect);
    float d = field(p - vec2(0.0, e), aspect);
    float u = field(p + vec2(0.0, e), aspect);
    float distFromEdge = max(f - THRESHOLD, 0.0);
    float meniscus = exp(-distFromEdge * 8.0);
    return normalize(vec3((l - r) * meniscus, (d - u) * meniscus, e * 55.0));
  }

  vec3 envMap(vec3 dir) {
    float phi   = atan(dir.z, dir.x);
    float theta = asin(clamp(dir.y, -1.0, 1.0));
    vec2 envUV  = vec2(phi / 6.28318 + 0.5, theta / 3.14159 + 0.5);
    vec3 hdr    = texture2D(uEnvMap, envUV).rgb;
    hdr *= 2.5;
    return hdr / (hdr + 1.0);
  }

  // Schlick Fresnel for metals — per-channel R₀, power ~3 for conductors
  vec3 fresnelMetal(float NdV) {
    return R0 + (1.0 - R0) * pow(1.0 - NdV, 3.0);
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / uResolution.y;
    float f = field(uv, aspect);

    // Outside: bright silver caustic at contact line
    if (f < THRESHOLD) {
      float caustic = smoothstep(THRESHOLD * 0.75, THRESHOLD * 0.95, f)
                    * (1.0 - smoothstep(THRESHOLD * 0.95, THRESHOLD, f));
      gl_FragColor = vec4(vec3(0.92), caustic * 0.15);
      return;
    }

    vec3 N = getNormal(uv, f, aspect);
    float distFromEdge = max(f - THRESHOLD, 0.0);
    float meniscus = exp(-distFromEdge * 8.0);
    // Simulate perspective view — viewer at finite distance above the surface
    // so different points on the mercury reflect different parts of the environment
    vec3 V = normalize(vec3((uv - 0.5) * vec2(aspect, 1.0) * 0.7, -1.0));
    float NdV = max(dot(N, -V), 0.0);

    // Spectral Fresnel — mercury is 78-85% reflective even at normal incidence
    vec3 F = fresnelMetal(NdV);

    vec3 R = reflect(V, N);
    vec3 envColor = envMap(R);

    // Desaturate the environment to get neutral silver — mercury's flat spectral
    // reflectance (0.78-0.85) means it reflects all wavelengths nearly equally,
    // so coloured surroundings appear muted on its surface
    float envLuma = dot(envColor, vec3(0.2126, 0.7152, 0.0722));
    envColor = mix(vec3(envLuma), envColor, 0.25);

    // Mercury is completely opaque — colour comes entirely from reflection
    vec3 color = envColor * F;

    // Specular highlights — with perspective view direction
    vec3 L = normalize(vec3((uLightPos - uv) * vec2(aspect, 1.0), 0.85));
    vec3 H = normalize(L - V);
    float NdH = max(dot(N, H), 0.0);
    // GGX-like distribution: very tight core + broader meniscus lobe
    float specMirror = pow(NdH, 1024.0);
    float specBroad  = pow(NdH, 80.0) * meniscus;
    color += vec3(1.0) * specMirror * 0.7;
    color += vec3(1.0) * specBroad * 0.06;

    float alpha = smoothstep(THRESHOLD, THRESHOLD + 0.045, f);
    gl_FragColor = vec4(color, alpha);
  }
`,nU=`
  precision highp float;
  varying vec2 vUv;

  uniform vec2 uResolution;
  uniform sampler2D uContentTex;
  uniform sampler2D uEnvMap;
  uniform vec3 uDroplets[${_t}];
  uniform vec2 uLightPos;

  const float THRESHOLD = 0.45;
  const float R0 = 0.04;  // glass n ≈ 1.5
  const float PI = 3.14159265;
  const float GOLDEN_ANGLE = 2.39996323;  // π(3 - √5)
  const int BLUR_SAMPLES = 37;

  float field(vec2 p, float aspect) {
    float sum = 0.0;
    for (int i = 0; i < ${_t}; i++) {
      vec2 centre = uDroplets[i].xy;
      float radius = uDroplets[i].z;
      if (radius < 0.001) continue;
      vec2 diff = p - centre;
      diff.x *= aspect;
      sum += exp(-dot(diff, diff) / (2.0 * radius * radius));
    }
    return sum;
  }

  vec3 getNormal(vec2 p, float f, float aspect) {
    float e = 0.004;
    float l = field(p - vec2(e, 0.0), aspect);
    float r = field(p + vec2(e, 0.0), aspect);
    float d = field(p - vec2(0.0, e), aspect);
    float u = field(p + vec2(0.0, e), aspect);
    float distFromEdge = max(f - THRESHOLD, 0.0);
    float meniscus = exp(-distFromEdge * 8.0);
    return normalize(vec3((l - r) * meniscus, (d - u) * meniscus, e * 55.0));
  }

  vec3 envMap(vec3 dir) {
    float phi   = atan(dir.z, dir.x);
    float theta = asin(clamp(dir.y, -1.0, 1.0));
    vec2 envUV  = vec2(phi / 6.28318 + 0.5, theta / 3.14159 + 0.5);
    vec3 hdr    = texture2D(uEnvMap, envUV).rgb;
    hdr *= 1.5;
    return hdr / (hdr + 1.0);
  }

  // Gaussian-weighted golden-angle spiral blur
  // Physically models the PSF of a rough surface scatterer
  vec3 gaussianDiscBlur(vec2 centre, float sigma) {
    vec2 px = 1.0 / uResolution;
    vec3 totalColor = vec3(0.0);
    float totalWeight = 0.0;

    for (int i = 0; i < BLUR_SAMPLES; i++) {
      float fi = float(i);
      // Golden-angle spiral: r = √(i/N) gives uniform disc distribution
      float r = sqrt(fi / float(BLUR_SAMPLES));
      float theta = fi * GOLDEN_ANGLE;
      vec2 offset = vec2(cos(theta), sin(theta)) * r * sigma;

      // Gaussian weight: w = exp(-r² / 2) — heavier at centre
      float w = exp(-r * r * 0.5);

      vec2 sampleUV = clamp(centre + offset * px, 0.0, 1.0);
      totalColor += texture2D(uContentTex, sampleUV).rgb * w;
      totalWeight += w;
    }
    return totalColor / totalWeight;
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / uResolution.y;
    float f = field(uv, aspect);

    // Outside: soft scattered light at contact line
    if (f < THRESHOLD) {
      float caustic = smoothstep(THRESHOLD * 0.7, THRESHOLD * 0.95, f)
                    * (1.0 - smoothstep(THRESHOLD * 0.95, THRESHOLD, f));
      gl_FragColor = vec4(vec3(1.0), caustic * 0.05);
      return;
    }

    vec3 N = getNormal(uv, f, aspect);
    float distFromEdge = max(f - THRESHOLD, 0.0);
    float meniscus = exp(-distFromEdge * 8.0);

    // Depth into the frosted volume (for random-walk blur scaling)
    float depth = smoothstep(THRESHOLD, THRESHOLD + 0.25, f);

    // Blur sigma ∝ √(depth) — random walk in angle space
    // Plus a meniscus contribution (edge refraction still scatters)
    float sigma = sqrt(depth) * 40.0 + meniscus * 6.0;

    // Slight macroscopic refraction at the meniscus
    float refractionStrength = 0.008 * meniscus;
    vec2 refractedUV = clamp(uv + N.xy * refractionStrength, 0.0, 1.0);

    // Gaussian-blurred content — no chromatic split (roughness >> λ)
    vec3 contentColor = gaussianDiscBlur(refractedUV, sigma);

    // Mie scattering veil: micro-features scatter a fraction of light
    // isotropically, adding a white haze proportional to depth
    float veil = depth * 0.3 + meniscus * 0.08;
    contentColor = mix(contentColor, vec3(1.0), veil);

    // Perspective view direction
    vec3 V = normalize(vec3((uv - 0.5) * vec2(aspect, 1.0) * 0.7, -1.0));

    // Fresnel reflection — also scattered by the rough surface
    float NdV = max(dot(N, -V), 0.0);
    float fresnel = R0 + (1.0 - R0) * pow(1.0 - NdV, 5.0);

    // Environment reflection is diffused (rough surface scatters it)
    vec3 R = reflect(V, N);
    vec3 envColor = envMap(R);

    // Specular: very broad lobe from the micro-facet distribution
    // No tight mirror peak — the surface is too rough
    vec3 L = normalize(vec3((uLightPos - uv) * vec2(aspect, 1.0), 0.85));
    vec3 H = normalize(L - V);
    float NdH = max(dot(N, H), 0.0);
    float specBroad = pow(NdH, 8.0) * 0.15;
    float specMid   = pow(NdH, 40.0) * meniscus * 0.08;

    // Composite
    vec3 color = contentColor;
    color = mix(color, envColor, fresnel);
    color += specBroad + specMid;

    float alpha = smoothstep(THRESHOLD, THRESHOLD + 0.045, f);
    gl_FragColor = vec4(color, alpha);
  }
`,iU=`
  precision highp float;
  varying vec2 vUv;

  uniform vec2 uResolution;
  uniform sampler2D uContentTex;
  uniform sampler2D uEnvMap;
  uniform vec3 uDroplets[${_t}];
  uniform vec2 uLightPos;

  const float THRESHOLD = 0.45;
  const float R0 = 0.018;
  const float PI = 3.14159265;

  // Measured Beer-Lambert coefficients for ice (per unit depth, scaled for our geometry)
  const vec3 ICE_ABSORPTION = vec3(0.6, 0.1, 0.01);  // red, green, blue per metre
  // Forward-scattering asymmetry parameter
  const float HG_G = 0.89;

  float field(vec2 p, float aspect) {
    float sum = 0.0;
    for (int i = 0; i < ${_t}; i++) {
      vec2 centre = uDroplets[i].xy;
      float radius = uDroplets[i].z;
      if (radius < 0.001) continue;
      vec2 diff = p - centre;
      diff.x *= aspect;
      sum += exp(-dot(diff, diff) / (2.0 * radius * radius));
    }
    return sum;
  }

  vec3 getNormal(vec2 p, float f, float aspect) {
    float e = 0.004;
    float l = field(p - vec2(e, 0.0), aspect);
    float r = field(p + vec2(e, 0.0), aspect);
    float d = field(p - vec2(0.0, e), aspect);
    float u = field(p + vec2(0.0, e), aspect);
    float distFromEdge = max(f - THRESHOLD, 0.0);
    float meniscus = exp(-distFromEdge * 8.0);
    return normalize(vec3((l - r) * meniscus, (d - u) * meniscus, e * 55.0));
  }

  vec3 envMap(vec3 dir) {
    float phi   = atan(dir.z, dir.x);
    float theta = asin(clamp(dir.y, -1.0, 1.0));
    vec2 envUV  = vec2(phi / 6.28318 + 0.5, theta / 3.14159 + 0.5);
    vec3 hdr    = texture2D(uEnvMap, envUV).rgb;
    hdr *= 1.8;
    return hdr / (hdr + 1.0);
  }

  // ── Hash functions for procedural patterns ──
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }
  vec2 hash2(vec2 p) {
    return vec2(
      fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453),
      fract(sin(dot(p, vec2(269.5, 183.3))) * 43758.5453)
    );
  }

  // ── Voronoi grain boundaries ──
  // Polycrystalline ice: each grain has a different crystal axis.
  // Light scatters at the boundaries between grains.
  // Returns: x = distance to nearest boundary, y = cell hash
  vec2 voronoi(vec2 p, float scale) {
    vec2 sp = p * scale;
    vec2 n = floor(sp);
    vec2 f = fract(sp);
    float minDist = 10.0;
    float secondDist = 10.0;
    float cellId = 0.0;
    for (int j = -1; j <= 1; j++) {
      for (int i = -1; i <= 1; i++) {
        vec2 g = vec2(float(i), float(j));
        vec2 o = hash2(n + g);
        vec2 r = g + o - f;
        float d = dot(r, r);
        if (d < minDist) {
          secondDist = minDist;
          minDist = d;
          cellId = hash(n + g);
        } else if (d < secondDist) {
          secondDist = d;
        }
      }
    }
    // Boundary proximity: small when close to a grain boundary
    float boundary = sqrt(secondDist) - sqrt(minDist);
    return vec2(boundary, cellId);
  }

  // ── Air bubble inclusions ──
  // Trapped air appears as bright white points from TIR at ice-air boundary
  float airBubbles(vec2 p, float depth) {
    float bubbles = 0.0;
    // Two scales of bubbles
    for (int s = 0; s < 2; s++) {
      float scale = (s == 0) ? 60.0 : 120.0;
      vec2 g = floor(p * scale);
      float h = hash(g + float(s) * 100.0);
      vec2 centre = (g + hash2(g + float(s) * 50.0)) / scale;
      float d = length(p - centre) * scale;
      float radius = (s == 0) ? 0.4 : 0.25;
      // Only some cells have bubbles, and only where there's depth
      float bubble = (1.0 - smoothstep(0.0, radius, d)) * step(0.82, h) * depth;
      bubbles += bubble;
    }
    return clamp(bubbles, 0.0, 1.0);
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / uResolution.y;
    float f = field(uv, aspect);

    // ── Outside: caustic band with blue tint ──
    if (f < THRESHOLD) {
      float caustic = smoothstep(THRESHOLD * 0.65, THRESHOLD * 0.92, f)
                    * (1.0 - smoothstep(THRESHOLD * 0.92, THRESHOLD, f));
      gl_FragColor = vec4(vec3(0.75, 0.88, 0.98), caustic * 0.08);
      return;
    }

    vec3 N = getNormal(uv, f, aspect);
    float distFromEdge = max(f - THRESHOLD, 0.0);
    float meniscus = exp(-distFromEdge * 8.0);
    float iceDepth = smoothstep(THRESHOLD, THRESHOLD + 0.2, f);

    // ── Chromatic dispersion (measured Δn ≈ 0.011 across visible) ──
    // n_red = 1.306, n_green = 1.311, n_blue = 1.317
    // Blue refracts more → larger offset; red less → smaller offset
    float baseRefraction = 0.012 * meniscus;
    float dispersion = 0.006 * meniscus;  // half of Δn/n scaled
    vec2 uvR = clamp(uv + N.xy * (baseRefraction - dispersion), 0.0, 1.0);
    vec2 uvG = clamp(uv + N.xy * baseRefraction, 0.0, 1.0);
    vec2 uvB = clamp(uv + N.xy * (baseRefraction + dispersion), 0.0, 1.0);

    // ── Birefringence (Δn ≈ 0.0014) ──
    // Ordinary and extraordinary rays travel at slightly different speeds,
    // creating a faint double image. We blend two slightly offset samples.
    float birefringence = 0.002 * iceDepth;
    // The extraordinary ray offset depends on crystal axis — use a per-grain direction
    vec2 vor = voronoi(uv, 18.0);
    float grainAngle = vor.y * PI * 2.0;
    vec2 birefDir = vec2(cos(grainAngle), sin(grainAngle)) * birefringence;

    vec3 contentColor;
    // Ordinary ray
    vec3 ordinary;
    ordinary.r = texture2D(uContentTex, uvR).r;
    ordinary.g = texture2D(uContentTex, uvG).g;
    ordinary.b = texture2D(uContentTex, uvB).b;
    // Extraordinary ray (offset by birefringence along grain c-axis)
    vec3 extraordinary;
    extraordinary.r = texture2D(uContentTex, clamp(uvR + birefDir, 0.0, 1.0)).r;
    extraordinary.g = texture2D(uContentTex, clamp(uvG + birefDir, 0.0, 1.0)).g;
    extraordinary.b = texture2D(uContentTex, clamp(uvB + birefDir, 0.0, 1.0)).b;
    // Equal power split between o-ray and e-ray
    contentColor = mix(ordinary, extraordinary, 0.5);

    // ── Beer-Lambert spectral absorption ──
    // Depth-dependent: red absorbed most, blue least → blue colour emerges
    vec3 absorption = exp(-ICE_ABSORPTION * iceDepth * 4.5);
    contentColor *= absorption;

    // ── Subsurface scattering (Henyey-Greenstein forward scatter) ──
    // Light that enters the ice bounces off grain boundaries and bubbles.
    // With g=0.89, most continues forward but with slight spreading.
    // We approximate this as a depth-dependent luminance contribution
    // from the average scene colour, tinted by the ice absorption.
    vec3 scatterColor = vec3(0.6, 0.78, 0.92); // blue-shifted scattered light
    float scatterStrength = iceDepth * 0.15 * (1.0 - HG_G);  // small because g is high
    contentColor += scatterColor * scatterStrength;

    // ── Grain boundary scattering (Voronoi edges) ──
    float boundary = vor.x;
    // Thin bright lines at grain boundaries where light is redirected
    float grainScatter = (1.0 - smoothstep(0.0, 0.08, boundary)) * iceDepth;
    contentColor += vec3(0.55, 0.72, 0.88) * grainScatter * 0.25;

    // ── Air bubble inclusions ──
    float bubbles = airBubbles(uv, iceDepth);
    contentColor = mix(contentColor, vec3(0.92, 0.96, 1.0), bubbles * 0.6);

    // ── Surface frost at meniscus ──
    // Where ice is thinnest, dendritic microcrystals scatter light broadly
    // creating a white frost appearance
    float frost = meniscus * 0.35;
    // Add some spatial variation to the frost using a high-frequency hash
    float frostNoise = hash(floor(uv * 200.0)) * 0.3 + 0.7;
    frost *= frostNoise;
    contentColor = mix(contentColor, vec3(0.92, 0.95, 1.0), frost);

    // ── Perspective view direction ──
    vec3 V = normalize(vec3((uv - 0.5) * vec2(aspect, 1.0) * 0.7, -1.0));

    // ── Fresnel reflection ──
    float NdV = max(dot(N, -V), 0.0);
    float fresnel = R0 + (1.0 - R0) * pow(1.0 - NdV, 5.0);

    // Environment reflection — tinted by absorption through the surface
    vec3 R = reflect(V, N);
    vec3 envColor = envMap(R);
    // Ice surface is smooth at the macro scale → sharp reflection
    envColor *= vec3(0.85, 0.92, 1.0);  // slight blue tint from surface

    // ── Specular ──
    vec3 L = normalize(vec3((uLightPos - uv) * vec2(aspect, 1.0), 0.85));
    vec3 H = normalize(L - V);
    float NdH = max(dot(N, H), 0.0);
    // Sharp crystalline highlight — ice surface is smooth
    float specMirror = pow(NdH, 800.0);
    // Broader lobe from the meniscus curvature
    float specBroad = pow(NdH, 50.0) * meniscus;

    // ── Composite ──
    vec3 color = contentColor;
    color = mix(color, envColor, fresnel);
    color += specMirror * 0.35;
    color += specBroad * 0.04;

    float alpha = smoothstep(THRESHOLD, THRESHOLD + 0.045, f);
    gl_FragColor = vec4(color, alpha);
  }
`,On=[];function rU(){for(const A of On)A.renderer.dispose(),A.material.dispose(),A.geometry.dispose(),A.contentTex&&A.contentTex.dispose();On.length=0}async function sU(A,e){const t=A.querySelector(".slide-inner"),n=t?.querySelector(".droplet-canvas");if(n){n.style.visibility="hidden";try{if(await document.fonts.ready,!document.contains(n))return;const i=t.getBoundingClientRect(),r=Math.min(window.devicePixelRatio||1,2),s=await Zs(t,{backgroundColor:null,scale:r,logging:!1,useCORS:!0,ignoreElements:v=>v.classList.contains("droplet-canvas")});if(!document.contains(n))return;const a=new or(s);a.minFilter=Je,a.magFilter=Je;const o=await dr();if(!document.contains(n))return;n.style.visibility="visible";const c=$s(e),l=new lr({canvas:n,alpha:!0,antialias:!0,premultipliedAlpha:!1,preserveDrawingBuffer:!0});l.setPixelRatio(r),l.setSize(i.width,i.height,!1);const f=new sr,u=new Gn(-1,1,1,-1,0,1),h=new ZA(2,2),g=new Kt({vertexShader:hr,fragmentShader:Hc,transparent:!0,depthTest:!1,uniforms:{uResolution:{value:new Ve(i.width*r,i.height*r)},uContentTex:{value:a},uEnvMap:{value:o},uDroplets:{value:c},uLightPos:{value:new Ve(.72,.78)}}});f.add(new Xt(h,g)),l.render(f,u),On.push({renderer:l,material:g,geometry:h,contentTex:a})}catch(i){console.warn("Droplet init failed:",i),n.style.visibility="visible"}}}async function Pd(A,e,t){const n=A.querySelector(".slide-inner"),i=n?.querySelector(".droplet-canvas");if(i){i.style.visibility="hidden";try{if(await document.fonts.ready,!document.contains(i))return;const r=n.getBoundingClientRect(),s=Math.min(window.devicePixelRatio||1,2),a=await Zs(n,{backgroundColor:null,scale:s,logging:!1,useCORS:!0,ignoreElements:p=>p.classList.contains("droplet-canvas")});if(!document.contains(i))return;const o=new or(a);o.minFilter=Je,o.magFilter=Je;const c=await dr();if(!document.contains(i))return;i.style.visibility="visible";const l=$s(e),f=new lr({canvas:i,alpha:!0,antialias:!0,premultipliedAlpha:!1,preserveDrawingBuffer:!0});f.setPixelRatio(s),f.setSize(r.width,r.height,!1);const u=new sr,h=new Gn(-1,1,1,-1,0,1),g=new ZA(2,2),v=new Kt({vertexShader:hr,fragmentShader:AU,transparent:!0,depthTest:!1,uniforms:{uResolution:{value:new Ve(r.width*s,r.height*s)},uContentTex:{value:o},uEnvMap:{value:c},uDroplets:{value:l},uLightPos:{value:new Ve(.72,.78)},uWaterColor:{value:new G(t[0],t[1],t[2])}}});u.add(new Xt(g,v)),f.render(u,h),On.push({renderer:f,material:v,geometry:g,contentTex:o})}catch(r){console.warn("Tinted droplet init failed:",r),i.style.visibility="visible"}}}async function aU(A,e){const t=A.querySelector(".slide-inner"),n=t?.querySelector(".droplet-canvas");if(n){n.style.visibility="hidden";try{if(await document.fonts.ready,!document.contains(n))return;const i=t.getBoundingClientRect(),r=Math.min(window.devicePixelRatio||1,2),s=await Zs(t,{backgroundColor:null,scale:r,logging:!1,useCORS:!0,ignoreElements:v=>v.classList.contains("droplet-canvas")});if(!document.contains(n))return;const a=new or(s);a.minFilter=Je,a.magFilter=Je;const o=await dr();if(!document.contains(n))return;n.style.visibility="visible";const c=$s(e),l=new lr({canvas:n,alpha:!0,antialias:!0,premultipliedAlpha:!1,preserveDrawingBuffer:!0});l.setPixelRatio(r),l.setSize(i.width,i.height,!1);const f=new sr,u=new Gn(-1,1,1,-1,0,1),h=new ZA(2,2),g=new Kt({vertexShader:hr,fragmentShader:Dd,transparent:!0,depthTest:!1,uniforms:{uResolution:{value:new Ve(i.width*r,i.height*r)},uContentTex:{value:a},uEnvMap:{value:o},uDroplets:{value:c},uLightPos:{value:new Ve(.72,.78)}}});f.add(new Xt(h,g)),l.render(f,u),On.push({renderer:l,material:g,geometry:h,contentTex:a})}catch(i){console.warn("Oil droplet init failed:",i),n.style.visibility="visible"}}}async function Pc(A,e,t,n){const i=A.querySelector(".slide-inner"),r=i?.querySelector(".droplet-canvas");if(r){r.style.visibility="hidden";try{if(await document.fonts.ready,!document.contains(r))return;const s=i.getBoundingClientRect(),a=Math.min(window.devicePixelRatio||1,2),o=await Zs(i,{backgroundColor:null,scale:a,logging:!1,useCORS:!0,ignoreElements:d=>d.classList.contains("droplet-canvas")});if(!document.contains(r))return;const c=new or(o);c.minFilter=Je,c.magFilter=Je;const l=await dr();if(!document.contains(r))return;r.style.visibility="visible";const f=$s(e),u=new lr({canvas:r,alpha:!0,antialias:!0,premultipliedAlpha:!1,preserveDrawingBuffer:!0});u.setPixelRatio(a),u.setSize(s.width,s.height,!1);const h=new sr,g=new Gn(-1,1,1,-1,0,1),v=new ZA(2,2),p=new Kt({vertexShader:hr,fragmentShader:t,transparent:!0,depthTest:!1,uniforms:{uResolution:{value:new Ve(s.width*a,s.height*a)},uContentTex:{value:c},uEnvMap:{value:l},uDroplets:{value:f},uLightPos:{value:new Ve(.72,.78)}}});h.add(new Xt(v,p)),u.render(h,g),On.push({renderer:u,material:p,geometry:v,contentTex:c})}catch(s){console.warn(`${n} droplet init failed:`,s),r.style.visibility="visible"}}}async function oU(A,e){return Pc(A,e,Hd,"Mercury")}async function cU(A,e){return Pc(A,e,nU,"Frosted")}async function lU(A,e){return Pc(A,e,iU,"Ice")}const bn=64,uU={transparency:Hc,distortion:Hd,extraction:Dd};function fU(){const A=[new G(.5,.5,.22),new G(.38,.44,.1),new G(.62,.55,.09),new G(.46,.62,.08),new G(.55,.38,.08)];for(;A.length<_t;)A.push(new G(0,0,0));return A}function dU(A){const e=bn*2,t=document.createElement("canvas");t.width=e,t.height=e;const n=t.getContext("2d");return n.fillStyle=A,n.fillRect(0,0,e,e),t}async function hU(){const A=document.querySelectorAll(".lens-droplet-canvas");if(!A.length)return;await document.fonts.ready;let e;try{e=await dr()}catch(n){console.warn("Lens badge env load failed:",n);return}const t=fU();for(const n of A)if(document.contains(n))try{const i=n.dataset.lens||"transparency",r=uU[i]||Hc,s=n.closest(".slide-inner"),a=s?getComputedStyle(s).backgroundColor:"#ffffff",o=dU(a),c=new or(o);c.minFilter=Je,c.magFilter=Je;const l=Math.min(window.devicePixelRatio||1,2);n.width=bn*l,n.height=bn*l;const f=new lr({canvas:n,alpha:!0,antialias:!0,premultipliedAlpha:!1,preserveDrawingBuffer:!0});f.setPixelRatio(1),f.setSize(bn*l,bn*l,!1);const u=new sr,h=new Gn(-1,1,1,-1,0,1),g=new ZA(2,2),v=new Kt({vertexShader:hr,fragmentShader:r,transparent:!0,depthTest:!1,uniforms:{uResolution:{value:new Ve(bn*l,bn*l)},uContentTex:{value:c},uEnvMap:{value:e},uDroplets:{value:t},uLightPos:{value:new Ve(.72,.78)}}});u.add(new Xt(g,v)),f.render(u,h),On.push({renderer:f,material:v,geometry:g,contentTex:c})}catch(i){console.warn("Lens badge droplet init failed:",i)}}function pU(){rU()}function gU(){return""}function mU(A){const e=A||["var(--color-shape-1)","var(--color-shape-2)","var(--color-shape-3)"];return`
    <div class="shape-overlay" style="
      top: -4%; right: 8%;
      width: 9rem; height: 3.2rem;
      background: ${e[0]};
      border-radius: 100px;
      transform: rotate(-15deg);
      opacity: 0.7;
    "></div>
    <div class="shape-overlay" style="
      bottom: 12%; right: -2%;
      width: 7rem; height: 2.6rem;
      background: ${e[1]};
      border-radius: 100px;
      transform: rotate(25deg);
      opacity: 0.6;
    "></div>
    <div class="shape-overlay" style="
      top: 30%; right: 3%;
      width: 2.2rem; height: 2.2rem;
      background: ${e[2]};
      border-radius: 50%;
      opacity: 0.5;
    "></div>
    <div class="shape-overlay" style="
      bottom: 5%; left: 15%;
      width: 6rem; height: 2.2rem;
      background: ${e[0]};
      border-radius: 100px;
      transform: rotate(40deg);
      opacity: 0.35;
    "></div>
  `}function BU(A){const e=A||["var(--color-shape-1)","var(--color-shape-2)","var(--color-shape-3)"];return`
    <svg class="shape-overlay" style="top: -15%; right: -10%; width: 45%; height: 60%; opacity: 0.25;"
         viewBox="0 0 200 200" preserveAspectRatio="none">
      <path d="M 45,-10 C 100,-20 170,30 180,90 C 190,150 140,200 80,190 C 20,180 -10,120 10,70 C 25,30 20,5 45,-10 Z"
            fill="${e[0]}" />
    </svg>
    <svg class="shape-overlay" style="bottom: -20%; left: -8%; width: 35%; height: 50%; opacity: 0.2;"
         viewBox="0 0 200 200" preserveAspectRatio="none">
      <path d="M 30,20 C 80,-10 160,20 170,80 C 180,140 130,190 70,180 C 10,170 -20,110 10,60 C 25,35 10,30 30,20 Z"
            fill="${e[1]}" />
    </svg>
  `}function vU(A){const e=A||["var(--color-shape-1)","var(--color-shape-2)","var(--color-shape-3)"];return`
    <div class="shape-overlay" style="
      top: 0; right: 0;
      width: 18%; height: 35%;
      background: ${e[0]};
      opacity: 0.9;
    "></div>
    <div class="shape-overlay" style="
      top: 0; right: 19.5%;
      width: 12%; height: 20%;
      background: ${e[1]};
      opacity: 0.9;
    "></div>
    <div class="shape-overlay" style="
      bottom: 0; right: 0;
      width: 25%; height: 25%;
      background: ${e[2]};
      opacity: 0.9;
    "></div>
  `}function wU(A){return`
    <svg class="shape-overlay" style="top: 5%; right: 5%; width: 40%; height: 80%; opacity: 0.12;"
         viewBox="0 0 200 320" fill="none" stroke="${(A||["var(--color-shape-1)"])[0]}" stroke-width="1">
      <rect x="10" y="10" width="180" height="290" rx="0" />
      <rect x="10" y="10" width="180" height="180" rx="0" />
      <line x1="10" y1="190" x2="190" y2="190" />
      <path d="M 10,190 A 180,180 0 0,1 190,10" />
      <circle cx="100" cy="100" r="55" />
    </svg>
  `}function _U(A){return{html:'<canvas class="droplet-canvas shape-overlay"></canvas>',init:e=>sU(e,A)}}function CU(A){return{html:'<canvas class="droplet-canvas shape-overlay"></canvas>',init:e=>Pd(e,A,[.784,.941,.847])}}function xU(A){return{html:'<canvas class="droplet-canvas shape-overlay"></canvas>',init:e=>Pd(e,A,[1,.361,.341])}}function EU(A){return{html:'<canvas class="droplet-canvas shape-overlay"></canvas>',init:e=>aU(e,A)}}function UU(A){return{html:'<canvas class="droplet-canvas shape-overlay"></canvas>',init:e=>oU(e,A)}}function SU(A){return{html:'<canvas class="droplet-canvas shape-overlay"></canvas>',init:e=>cU(e,A)}}function FU(A){return{html:'<canvas class="droplet-canvas shape-overlay"></canvas>',init:e=>lU(e,A)}}const Xu={none:gU,pills:mU,blobs:BU,blocks:vU,"golden-rect":wU,droplets:_U,"droplets-tinted":CU,"droplets-coral":xU,"droplets-oil":EU,"droplets-mercury":UU,"droplets-frosted":SU,"droplets-ice":FU};function yU(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),n=t.createImageData(512,512);for(let i=0;i<n.data.length;i+=4){const r=Math.floor(Math.random()*255);n.data[i]=r,n.data[i+1]=r,n.data[i+2]=r,n.data[i+3]=255}return t.putImageData(n,0,0),e.toDataURL("image/png")}function MU(A,e){const t=document.createElement("canvas"),n=t.getContext("2d");return A==="diagonal"?(t.width=8,t.height=8,n.strokeStyle=e,n.lineWidth=1,n.beginPath(),n.moveTo(8,0),n.lineTo(0,8),n.stroke(),n.beginPath(),n.moveTo(16,0),n.lineTo(0,16),n.stroke()):(t.width=A==="vertical"?9:1,t.height=A==="vertical"?1:9,n.fillStyle=e,A==="vertical"?n.fillRect(8,0,1,1):n.fillRect(0,8,1,1)),t.toDataURL("image/png")}function Yu(A){const e=A.match(/(\d+),\s*(\d+),\s*(\d+)/);if(!e)return 0;const[t,n,i]=[e[1],e[2],e[3]].map(r=>{const s=Number(r)/255;return s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4)});return .2126*t+.7152*n+.0722*i}function bU(A=document){A.querySelectorAll(".stat-block").forEach(e=>{const t=Yu(getComputedStyle(e).backgroundColor);e.style.color=t>.18?"#1B2A3D":"#FFFFFF";const n=e.closest(".slide-inner");if(n){const i=Yu(getComputedStyle(n).backgroundColor),r=Math.abs(t-i);e.style.outline=r<.1?"1px solid rgba(255,255,255,0.15)":"",e.style.outlineOffset=r<.1?"-1px":""}})}function TU(A=document){A.querySelectorAll(".data-big-numbers").forEach(e=>{const t=e.querySelectorAll(".stat-value");if(t.length===0)return;t.forEach(i=>{i.style.fontSize="",i.style.whiteSpace="nowrap"});let n=1/0;if(t.forEach(i=>{const r=i.closest(".stat-block"),s=parseFloat(getComputedStyle(r).paddingLeft),a=parseFloat(getComputedStyle(r).paddingRight),o=r.clientWidth-s-a,c=parseFloat(getComputedStyle(i).fontSize),l=i.scrollWidth;l>0&&(n=Math.min(n,c*(o/l)))}),n!==1/0){const i=t[0].closest(".stat-block"),r=i.clientHeight-parseFloat(getComputedStyle(i).paddingTop)-parseFloat(getComputedStyle(i).paddingBottom),s=Math.min(n,r*.55);t.forEach(a=>a.style.fontSize=`${s}px`)}})}function QU(A=document){A.querySelectorAll(".texture-pinstripes").forEach(e=>{const t=e.closest(".slide");if(!t)return;const n=t.dataset.pinstripes;if(!n||n==="none")return;const i=getComputedStyle(e).color,r=MU(n,i);e.style.background=`url(${r}) repeat`})}function IU(A,e,{config:t,noiseDataURL:n,postInits:i,slideIndex:r}){const s=typeof r=="number"?r:e-1,a=t.layouts[A.type]||Object.values(t.layouts)[0],o=lh[a],c=document.createElement("div");if(c.className="slide",c.id=`slide-${e}`,c.dataset.palette=t.palette,c.dataset.typography=t.typography,c.dataset.pinstripes=t.pinstripes,c.dataset.shape=(t.slideShapes&&t.slideShapes[s])??t.shapes??"none",!o)return console.warn(`Layout "${a}" not found for slide type "${A.type}"`),c;c.innerHTML=o(A,e);const l=c.querySelector(".slide-inner"),f=c.dataset.shape,h=(Xu[f]||Xu.none)(s);if(h&&l){const g=typeof h=="string"?h:h.html;g&&l.insertAdjacentHTML("afterbegin",g),typeof h=="object"&&h.init&&Array.isArray(i)&&i.push(()=>h.init(c,s))}return l&&(t.pinstripes&&t.pinstripes!=="none"&&l.insertAdjacentHTML("afterbegin",'<div class="shape-overlay texture-pinstripes"></div>'),l.insertAdjacentHTML("afterbegin",`<div class="shape-overlay texture-noise" style="background-image:url(${n});opacity:${(t.noise||0)/100}"></div>`)),c}function RU(A){return new Promise(e=>{requestAnimationFrame(async()=>{for(const t of A)try{await t()}catch(n){console.warn("postInit failed:",n)}try{await hU()}catch(t){console.warn("initLensBadgeDroplets failed:",t)}e()})})}function LU(A){pU()}const DU="config.json",HU="content.json",Nd=[{suffix:".webm",type:"audio/webm; codecs=opus"},{suffix:".m4a",type:'audio/mp4; codecs="mp4a.40.2"'}],PU=600,NU=100,ce={slides:[],config:null,noiseDataURL:"",index:0,gestured:!1,captionsOn:!0,autoAdvanceOn:!0,muted:!1,reducedMotion:!1,lowPower:!1,captionStarts:null,captionWordEls:null,captionActiveIdx:-1,preloadCache:new Map,advanceTimer:null},te={};async function OU(){KU(),ce.reducedMotion=matchMedia("(prefers-reduced-motion: reduce)").matches,ce.lowPower=VU(),ce.noiseDataURL=yU(),GU();let A,e;try{[A,e]=await Promise.all([fetch(HU,{cache:"no-cache"}).then(Ju).then(n=>n.json()),fetch(DU,{cache:"no-cache"}).then(Ju).then(n=>n.json())])}catch(n){console.error("Failed to load presentation data:",n),te.loadError.hidden=!1;return}(ce.lowPower||ce.reducedMotion)&&(e.shapes="none",e.slideShapes={}),ce.slides=A.slides||[],ce.config=e;const t=kd();t!=null&&(ce.index=zd(t)),kU(),iS()}function Ju(A){if(!A.ok)throw new Error(`${A.url} ${A.status}`);return A}async function GU(){try{(await fetch("pdf/presentation.pdf",{method:"HEAD"})).ok||qu()}catch{qu()}}function qu(){document.querySelectorAll('a[href$="presentation.pdf"], #btn-pdf').forEach(A=>{A.hidden=!0})}function VU(){const A=matchMedia("(pointer: coarse)").matches,e=(navigator.hardwareConcurrency||8)<4;return A||e}function KU(){te.stage=document.getElementById("slide-stage"),te.captions=document.getElementById("captions"),te.slideTranscript=document.getElementById("slide-transcript"),te.announcer=document.getElementById("slide-announcer"),te.controls=document.getElementById("controls-bar"),te.btnPrev=document.getElementById("btn-prev"),te.btnNext=document.getElementById("btn-next"),te.btnPlayPause=document.getElementById("btn-playpause"),te.btnCaptions=document.getElementById("btn-captions"),te.btnAutoadvance=document.getElementById("btn-autoadvance"),te.btnMute=document.getElementById("btn-mute"),te.btnFullscreen=document.getElementById("btn-fullscreen"),te.counter=document.getElementById("slide-counter"),te.progress=document.getElementById("audio-progress"),te.audio=document.getElementById("vo"),te.startOverlay=document.getElementById("start-overlay"),te.startBtn=document.getElementById("start-btn"),te.loadError=document.getElementById("load-error"),te.iconPlay=te.btnPlayPause.querySelector(".icon-play"),te.iconPause=te.btnPlayPause.querySelector(".icon-pause"),te.iconVol=te.btnMute.querySelector(".icon-vol"),te.iconMuted=te.btnMute.querySelector(".icon-mute")}function kU(){te.startOverlay.hidden=!1,te.startBtn.focus();const A=te.startOverlay.querySelectorAll("button, [href]"),e=A[0],t=A[A.length-1];te.startOverlay.addEventListener("keydown",n=>{n.key==="Tab"&&(n.shiftKey&&document.activeElement===e?(n.preventDefault(),t.focus()):!n.shiftKey&&document.activeElement===t&&(n.preventDefault(),e.focus()))}),te.startBtn.addEventListener("click",zU,{once:!0})}async function zU(){ce.gestured=!0,te.startOverlay.hidden=!0,te.controls.hidden=!1,$U(),await _i(ce.index),Ci()}async function _i(A){Nc();const e=te.stage.firstElementChild;e&&(LU(),e.remove()),ce.index=A;const t=ce.slides[A],n=A+1,i=[],r=IU(t,n,{config:ce.config,noiseDataURL:ce.noiseDataURL,postInits:i,slideIndex:A});te.stage.appendChild(r),bU(r),TU(r),QU(r),await RU(i),WU(t),XU(t),YU(t,A),qU(t),tS(),AS(),history.replaceState(null,"",`#slide=${n}`),ZU(A+1)}function WU(A){te.captions.innerHTML="",ce.captionStarts=null,ce.captionWordEls=null,ce.captionActiveIdx=-1;const e=A.voiceover?.words;if(Array.isArray(e)&&e.length>0){const t=document.createDocumentFragment(),n=new Float32Array(e.length),i=new Array(e.length);e.forEach((r,s)=>{const a=document.createElement("span");a.className="caption-word",a.dataset.start=String(r.start),a.dataset.end=String(r.end),a.textContent=r.word,t.appendChild(a),t.appendChild(document.createTextNode(" ")),n[s]=r.start,i[s]=a}),te.captions.appendChild(t),ce.captionStarts=n,ce.captionWordEls=i}else if(A.voiceover?.transcript){const t=document.createElement("p");t.textContent=A.voiceover.transcript,te.captions.appendChild(t)}te.captions.hidden=!ce.captionsOn||te.captions.childElementCount===0}function XU(A){te.slideTranscript.textContent=A.voiceover?.transcript||""}function YU(A,e){const t=ce.slides.length,n=A.heading||A.title||A.text||A.type;te.announcer.textContent="",requestAnimationFrame(()=>{te.announcer.textContent=`Slide ${e+1} of ${t}: ${n}`})}function JU(A){if(!ce.captionsOn||!ce.captionStarts||!ce.captionWordEls)return;const e=ce.captionStarts;let t=0,n=e.length-1,i=-1;for(;t<=n;){const r=t+n>>1;e[r]<=A?(i=r,t=r+1):n=r-1}if(i!==ce.captionActiveIdx){if(ce.captionActiveIdx>=0&&ce.captionWordEls[ce.captionActiveIdx]?.classList.remove("is-active"),i>=0){const r=ce.captionWordEls[i];r?.classList.add("is-active"),r?.scrollIntoView({block:"nearest",inline:"nearest"})}ce.captionActiveIdx=i}}function qU(A){const e=te.audio;for(e.pause(),e.removeAttribute("src");e.firstChild;)e.removeChild(e.firstChild);const t=A.voiceover?.file;if(!t){e.load(),te.progress.value=0,te.btnPlayPause.disabled=!0,gc(!1);return}te.btnPlayPause.disabled=!1;const n=t.replace(/\.[a-z0-9]+$/i,"");Nd.forEach(i=>{const r=document.createElement("source");r.src=`${n}${i.suffix}`,r.type=i.type,e.appendChild(r)}),e.load(),e.muted=ce.muted}function Ci(){ce.gestured&&te.audio.querySelector("source")&&te.audio.play().catch(()=>{})}function ZU(A){if(A<0||A>=ce.slides.length)return;const e=ce.slides[A]?.voiceover?.file;if(!e||ce.preloadCache.has(A))return;const t=e.replace(/\.[a-z0-9]+$/i,""),n=new Audio;n.preload="auto",n.src=`${t}${Nd[0].suffix}`,ce.preloadCache.set(A,n);for(const i of ce.preloadCache.keys())Math.abs(i-ce.index)>2&&ce.preloadCache.delete(i)}function $U(){te.btnPrev.addEventListener("click",Ds),te.btnNext.addEventListener("click",ir),te.btnPlayPause.addEventListener("click",Oc),te.btnCaptions.addEventListener("click",Od),te.btnAutoadvance.addEventListener("click",Gd),te.btnMute.addEventListener("click",Vd),te.btnFullscreen.addEventListener("click",Kd),te.progress.addEventListener("input",()=>{const A=te.audio;isFinite(A.duration)&&(A.currentTime=Number(te.progress.value)/1e3*A.duration)}),te.audio.addEventListener("play",()=>{gc(!0)}),te.audio.addEventListener("pause",()=>{gc(!1)}),te.audio.addEventListener("timeupdate",jU),te.audio.addEventListener("ended",eS),te.audio.addEventListener("loadedmetadata",()=>{te.progress.value=0}),document.addEventListener("fullscreenchange",()=>{const A=!!document.fullscreenElement;te.btnFullscreen.setAttribute("aria-pressed",A?"true":"false")}),nS(),rS()}function jU(){const A=te.audio;isFinite(A.duration)&&A.duration>0&&(te.progress.value=String(Math.round(A.currentTime/A.duration*1e3))),JU(A.currentTime)}function eS(){if(!ce.autoAdvanceOn||ce.index>=ce.slides.length-1)return;Nc();const A=ce.reducedMotion?NU:PU;ce.advanceTimer=setTimeout(()=>{ce.advanceTimer=null,ir()},A)}function Nc(){ce.advanceTimer!=null&&(clearTimeout(ce.advanceTimer),ce.advanceTimer=null)}function Ds(){ce.index>0&&_i(ce.index-1).then(Ci)}function ir(){ce.index<ce.slides.length-1&&_i(ce.index+1).then(Ci)}function Oc(){const A=te.audio;A.querySelector("source")&&(A.paused?A.play().catch(e=>console.warn("play failed:",e)):A.pause())}function Od(){ce.captionsOn=!ce.captionsOn,te.btnCaptions.setAttribute("aria-pressed",ce.captionsOn?"true":"false"),te.captions.hidden=!ce.captionsOn||te.captions.childElementCount===0}function Gd(){ce.autoAdvanceOn=!ce.autoAdvanceOn,te.btnAutoadvance.setAttribute("aria-pressed",ce.autoAdvanceOn?"true":"false"),ce.autoAdvanceOn||Nc()}function Vd(){ce.muted=!ce.muted,te.audio.muted=ce.muted,te.btnMute.setAttribute("aria-pressed",ce.muted?"true":"false"),te.iconVol.hidden=ce.muted,te.iconMuted.hidden=!ce.muted}function Kd(){document.fullscreenElement?document.exitFullscreen?.():document.documentElement.requestFullscreen?.().catch(()=>{})}function gc(A){te.iconPlay.hidden=A,te.iconPause.hidden=!A,te.btnPlayPause.setAttribute("aria-label",A?"Pause narration":"Play narration")}function tS(){te.counter.value=`${ce.index+1} / ${ce.slides.length}`}function AS(){te.btnPrev.disabled=ce.index===0,te.btnNext.disabled=ce.index>=ce.slides.length-1}function nS(){let A=0,e=0,t=0;te.stage.addEventListener("pointerdown",n=>{A=n.clientX,e=n.clientY,t=performance.now()}),te.stage.addEventListener("pointerup",n=>{const i=n.clientX-A,r=n.clientY-e,s=performance.now()-t;if(s<400&&Math.abs(i)>50&&Math.abs(i)>Math.abs(r)*1.4){i<0?ir():Ds();return}if(s<400&&Math.abs(i)<10&&Math.abs(r)<10){const a=te.stage.getBoundingClientRect(),c=(n.clientX-a.left)/a.width;c<.35?Ds():c>.65?ir():Oc()}})}function iS(){window.addEventListener("keydown",A=>{const e=A.target.tagName;if(!(e==="INPUT"||e==="TEXTAREA"||e==="SELECT")&&!(!te.startOverlay.hidden&&A.key!=="Enter"))switch(A.key){case"ArrowRight":case"PageDown":A.preventDefault(),ir();break;case"ArrowLeft":case"PageUp":A.preventDefault(),Ds();break;case"Home":A.preventDefault(),_i(0).then(Ci);break;case"End":A.preventDefault(),_i(ce.slides.length-1).then(Ci);break;case" ":case"Spacebar":case"k":case"p":A.preventDefault(),Oc();break;case"c":case"C":Od();break;case"a":case"A":Gd();break;case"m":case"M":Vd();break;case"f":case"F":Kd();break;case"Escape":document.fullscreenElement&&document.exitFullscreen?.();break}})}function kd(){const A=location.hash.match(/#slide=(\d+)/);return A?Number(A[1])-1:null}function zd(A){return!Number.isFinite(A)||A<0?0:A>=ce.slides.length?ce.slides.length-1:A}function rS(){window.addEventListener("hashchange",()=>{const A=kd();if(A==null)return;const e=zd(A);e!==ce.index&&_i(e).then(Ci)})}OU();
