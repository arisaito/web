var Cd=Object.defineProperty;var Pd=(r,e,t)=>e in r?Cd(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Sn=(r,e,t)=>Pd(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zl="176",Ld=0,Xc=1,Dd=2,wf=1,Id=2,Zn=3,ni=0,Yt=1,In=2,vi=0,Lr=1,qc=2,Yc=3,jc=4,Ud=5,Vi=100,Fd=101,Nd=102,Od=103,Bd=104,kd=200,zd=201,Hd=202,Vd=203,Wo=204,Xo=205,Gd=206,Wd=207,Xd=208,qd=209,Yd=210,jd=211,$d=212,Zd=213,Kd=214,qo=0,Yo=1,jo=2,Nr=3,$o=4,Zo=5,Ko=6,Jo=7,Kl=0,Jd=1,Qd=2,xi=0,ep=1,tp=2,np=3,ip=4,rp=5,sp=6,ap=7,Af=300,Or=301,Br=302,Qo=303,el=304,Wa=306,Aa=1e3,Gi=1001,tl=1002,Cn=1003,op=1004,zs=1005,vn=1006,Ja=1007,Wi=1008,zn=1009,Rf=1010,Cf=1011,_s=1012,Jl=1013,Ki=1014,Qn=1015,Is=1016,Ql=1017,ec=1018,gs=1020,Pf=35902,Lf=1021,Df=1022,Rn=1023,vs=1026,xs=1027,If=1028,tc=1029,Uf=1030,nc=1031,ic=1033,ma=33776,_a=33777,ga=33778,va=33779,nl=35840,il=35841,rl=35842,sl=35843,al=36196,ol=37492,ll=37496,cl=37808,ul=37809,fl=37810,hl=37811,dl=37812,pl=37813,ml=37814,_l=37815,gl=37816,vl=37817,xl=37818,yl=37819,Ml=37820,Sl=37821,xa=36492,El=36494,Tl=36495,Ff=36283,bl=36284,wl=36285,Al=36286,lp=3200,cp=3201,rc=0,up=1,hi="",Lt="srgb",kr="srgb-linear",Ra="linear",Je="srgb",ar=7680,$c=519,fp=512,hp=513,dp=514,Nf=515,pp=516,mp=517,_p=518,gp=519,Zc=35044,Kc="300 es",ei=2e3,Ca=2001;class Yr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qa=Math.PI/180,Rl=180/Math.PI;function Us(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[r&255]+Ut[r>>8&255]+Ut[r>>16&255]+Ut[r>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function Oe(r,e,t){return Math.max(e,Math.min(t,r))}function vp(r,e){return(r%e+e)%e}function eo(r,e,t){return(1-t)*r+t*e}function Jr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Wt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Oe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class De{constructor(e,t,n,i,s,o,l,c,f){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,l,c,f)}set(e,t,n,i,s,o,l,c,f){const d=this.elements;return d[0]=e,d[1]=i,d[2]=l,d[3]=t,d[4]=s,d[5]=c,d[6]=n,d[7]=o,d[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],l=n[3],c=n[6],f=n[1],d=n[4],a=n[7],u=n[2],h=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],M=i[4],x=i[7],A=i[2],b=i[5],w=i[8];return s[0]=o*_+l*v+c*A,s[3]=o*m+l*M+c*b,s[6]=o*p+l*x+c*w,s[1]=f*_+d*v+a*A,s[4]=f*m+d*M+a*b,s[7]=f*p+d*x+a*w,s[2]=u*_+h*v+g*A,s[5]=u*m+h*M+g*b,s[8]=u*p+h*x+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],l=e[5],c=e[6],f=e[7],d=e[8];return t*o*d-t*l*f-n*s*d+n*l*c+i*s*f-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],l=e[5],c=e[6],f=e[7],d=e[8],a=d*o-l*f,u=l*c-d*s,h=f*s-o*c,g=t*a+n*u+i*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=a*_,e[1]=(i*f-d*n)*_,e[2]=(l*n-i*o)*_,e[3]=u*_,e[4]=(d*t-i*c)*_,e[5]=(i*s-l*t)*_,e[6]=h*_,e[7]=(n*c-f*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,l){const c=Math.cos(s),f=Math.sin(s);return this.set(n*c,n*f,-n*(c*o+f*l)+o+e,-i*f,i*c,-i*(-f*o+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(to.makeScale(e,t)),this}rotate(e){return this.premultiply(to.makeRotation(-e)),this}translate(e,t){return this.premultiply(to.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const to=new De;function Of(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ys(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function xp(){const r=ys("canvas");return r.style.display="block",r}const Jc={};function ya(r){r in Jc||(Jc[r]=!0)}function yp(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Mp(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Sp(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qc=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eu=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ep(){const r={enabled:!0,workingColorSpace:kr,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Je&&(i.r=ti(i.r),i.g=ti(i.g),i.b=ti(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Je&&(i.r=Dr(i.r),i.g=Dr(i.g),i.b=Dr(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===hi?Ra:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[kr]:{primaries:e,whitePoint:n,transfer:Ra,toXYZ:Qc,fromXYZ:eu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:Qc,fromXYZ:eu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),r}const Ne=Ep();function ti(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Dr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let or;class Tp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{or===void 0&&(or=ys("canvas")),or.width=e.width,or.height=e.height;const i=or.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=or}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ys("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ti(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ti(t[n]/255)*255):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}else return e}}let bp=0;class sc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Us(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,l=i.length;o<l;o++)i[o].isDataTexture?s.push(no(i[o].image)):s.push(no(i[o]))}else s=no(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function no(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Tp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:{}}let wp=0;class Bt extends Yr{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=Gi,i=Gi,s=vn,o=Wi,l=Rn,c=zn,f=Bt.DEFAULT_ANISOTROPY,d=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Us(),this.name="",this.source=new sc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=f,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Af)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Aa:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case tl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Aa:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case tl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Af;Bt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,i=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,f=c[0],d=c[4],a=c[8],u=c[1],h=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(d-u)<.01&&Math.abs(a-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(a+_)<.1&&Math.abs(g+m)<.1&&Math.abs(f+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(f+1)/2,x=(h+1)/2,A=(p+1)/2,b=(d+u)/4,w=(a+_)/4,P=(g+m)/4;return M>x&&M>A?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=b/n,s=w/n):x>A?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=b/i,s=P/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=w/s,i=P/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(a-_)*(a-_)+(u-d)*(u-d));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(a-_)/v,this.z=(u-d)/v,this.w=Math.acos((f+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this.w=Oe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this.w=Oe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ap extends Yr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth?n.depth:1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const i={width:e,height:t,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);const s=new Bt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let l=0;l<o;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new sc(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends Ap{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Bf extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rp extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fs{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,l){let c=n[i+0],f=n[i+1],d=n[i+2],a=n[i+3];const u=s[o+0],h=s[o+1],g=s[o+2],_=s[o+3];if(l===0){e[t+0]=c,e[t+1]=f,e[t+2]=d,e[t+3]=a;return}if(l===1){e[t+0]=u,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(a!==_||c!==u||f!==h||d!==g){let m=1-l;const p=c*u+f*h+d*g+a*_,v=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const A=Math.sqrt(M),b=Math.atan2(A,p*v);m=Math.sin(m*b)/A,l=Math.sin(l*b)/A}const x=l*v;if(c=c*m+u*x,f=f*m+h*x,d=d*m+g*x,a=a*m+_*x,m===1-l){const A=1/Math.sqrt(c*c+f*f+d*d+a*a);c*=A,f*=A,d*=A,a*=A}}e[t]=c,e[t+1]=f,e[t+2]=d,e[t+3]=a}static multiplyQuaternionsFlat(e,t,n,i,s,o){const l=n[i],c=n[i+1],f=n[i+2],d=n[i+3],a=s[o],u=s[o+1],h=s[o+2],g=s[o+3];return e[t]=l*g+d*a+c*h-f*u,e[t+1]=c*g+d*u+f*a-l*h,e[t+2]=f*g+d*h+l*u-c*a,e[t+3]=d*g-l*a-c*u-f*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,l=Math.cos,c=Math.sin,f=l(n/2),d=l(i/2),a=l(s/2),u=c(n/2),h=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=u*d*a+f*h*g,this._y=f*h*a-u*d*g,this._z=f*d*g+u*h*a,this._w=f*d*a-u*h*g;break;case"YXZ":this._x=u*d*a+f*h*g,this._y=f*h*a-u*d*g,this._z=f*d*g-u*h*a,this._w=f*d*a+u*h*g;break;case"ZXY":this._x=u*d*a-f*h*g,this._y=f*h*a+u*d*g,this._z=f*d*g+u*h*a,this._w=f*d*a-u*h*g;break;case"ZYX":this._x=u*d*a-f*h*g,this._y=f*h*a+u*d*g,this._z=f*d*g-u*h*a,this._w=f*d*a+u*h*g;break;case"YZX":this._x=u*d*a+f*h*g,this._y=f*h*a+u*d*g,this._z=f*d*g-u*h*a,this._w=f*d*a-u*h*g;break;case"XZY":this._x=u*d*a-f*h*g,this._y=f*h*a-u*d*g,this._z=f*d*g+u*h*a,this._w=f*d*a+u*h*g;break;default:}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],l=t[5],c=t[9],f=t[2],d=t[6],a=t[10],u=n+l+a;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(d-c)*h,this._y=(s-f)*h,this._z=(o-i)*h}else if(n>l&&n>a){const h=2*Math.sqrt(1+n-l-a);this._w=(d-c)/h,this._x=.25*h,this._y=(i+o)/h,this._z=(s+f)/h}else if(l>a){const h=2*Math.sqrt(1+l-n-a);this._w=(s-f)/h,this._x=(i+o)/h,this._y=.25*h,this._z=(c+d)/h}else{const h=2*Math.sqrt(1+a-n-l);this._w=(o-i)/h,this._x=(s+f)/h,this._y=(c+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Oe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,l=t._x,c=t._y,f=t._z,d=t._w;return this._x=n*d+o*l+i*f-s*c,this._y=i*d+o*c+s*l-n*f,this._z=s*d+o*f+n*c-i*l,this._w=o*d-n*l-i*c-s*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let l=o*e._w+n*e._x+i*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-l*l;if(c<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*n+t*this._x,this._y=h*i+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const f=Math.sqrt(c),d=Math.atan2(f,l),a=Math.sin((1-t)*d)/f,u=Math.sin(t*d)/f;return this._w=o*a+this._w*u,this._x=n*a+this._x*u,this._y=i*a+this._y*u,this._z=s*a+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,l=e.z,c=e.w,f=2*(o*i-l*n),d=2*(l*t-s*i),a=2*(s*n-o*t);return this.x=t+c*f+o*a-l*d,this.y=n+c*d+l*f-s*a,this.z=i+c*a+s*d-o*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,l=t.y,c=t.z;return this.x=i*c-s*l,this.y=s*o-n*c,this.z=n*l-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return io.copy(this).projectOnVector(e),this.sub(io)}reflect(e){return this.sub(io.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Oe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const io=new C,tu=new Fs;class Ei{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=s.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,En):En.fromBufferAttribute(s,o),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hs.copy(n.boundingBox)),Hs.applyMatrix4(e.matrixWorld),this.union(Hs)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qr),Vs.subVectors(this.max,Qr),lr.subVectors(e.a,Qr),cr.subVectors(e.b,Qr),ur.subVectors(e.c,Qr),si.subVectors(cr,lr),ai.subVectors(ur,cr),Pi.subVectors(lr,ur);let t=[0,-si.z,si.y,0,-ai.z,ai.y,0,-Pi.z,Pi.y,si.z,0,-si.x,ai.z,0,-ai.x,Pi.z,0,-Pi.x,-si.y,si.x,0,-ai.y,ai.x,0,-Pi.y,Pi.x,0];return!ro(t,lr,cr,ur,Vs)||(t=[1,0,0,0,1,0,0,0,1],!ro(t,lr,cr,ur,Vs))?!1:(Gs.crossVectors(si,ai),t=[Gs.x,Gs.y,Gs.z],ro(t,lr,cr,ur,Vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wn=[new C,new C,new C,new C,new C,new C,new C,new C],En=new C,Hs=new Ei,lr=new C,cr=new C,ur=new C,si=new C,ai=new C,Pi=new C,Qr=new C,Vs=new C,Gs=new C,Li=new C;function ro(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Li.fromArray(r,s);const l=i.x*Math.abs(Li.x)+i.y*Math.abs(Li.y)+i.z*Math.abs(Li.z),c=e.dot(Li),f=t.dot(Li),d=n.dot(Li);if(Math.max(-Math.max(c,f,d),Math.min(c,f,d))>l)return!1}return!0}const Cp=new Ei,es=new C,so=new C;class Ns{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Cp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;es.subVectors(e,this.center);const t=es.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(es,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(so.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(es.copy(e.center).add(so)),this.expandByPoint(es.copy(e.center).sub(so))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new C,ao=new C,Ws=new C,oi=new C,oo=new C,Xs=new C,lo=new C;class ac{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ao.copy(e).add(t).multiplyScalar(.5),Ws.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(ao);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ws),l=oi.dot(this.direction),c=-oi.dot(Ws),f=oi.lengthSq(),d=Math.abs(1-o*o);let a,u,h,g;if(d>0)if(a=o*c-l,u=o*l-c,g=s*d,a>=0)if(u>=-g)if(u<=g){const _=1/d;a*=_,u*=_,h=a*(a+o*u+2*l)+u*(o*a+u+2*c)+f}else u=s,a=Math.max(0,-(o*u+l)),h=-a*a+u*(u+2*c)+f;else u=-s,a=Math.max(0,-(o*u+l)),h=-a*a+u*(u+2*c)+f;else u<=-g?(a=Math.max(0,-(-o*s+l)),u=a>0?-s:Math.min(Math.max(-s,-c),s),h=-a*a+u*(u+2*c)+f):u<=g?(a=0,u=Math.min(Math.max(-s,-c),s),h=u*(u+2*c)+f):(a=Math.max(0,-(o*s+l)),u=a>0?s:Math.min(Math.max(-s,-c),s),h=-a*a+u*(u+2*c)+f);else u=o>0?-s:s,a=Math.max(0,-(o*u+l)),h=-a*a+u*(u+2*c)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,a),i&&i.copy(ao).addScaledVector(Ws,u),h}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const n=Xn.dot(this.direction),i=Xn.dot(Xn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),l=n-o,c=n+o;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,l,c;const f=1/this.direction.x,d=1/this.direction.y,a=1/this.direction.z,u=this.origin;return f>=0?(n=(e.min.x-u.x)*f,i=(e.max.x-u.x)*f):(n=(e.max.x-u.x)*f,i=(e.min.x-u.x)*f),d>=0?(s=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),a>=0?(l=(e.min.z-u.z)*a,c=(e.max.z-u.z)*a):(l=(e.max.z-u.z)*a,c=(e.min.z-u.z)*a),n>c||l>i)||((l>n||n!==n)&&(n=l),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,i,s){oo.subVectors(t,e),Xs.subVectors(n,e),lo.crossVectors(oo,Xs);let o=this.direction.dot(lo),l;if(o>0){if(i)return null;l=1}else if(o<0)l=-1,o=-o;else return null;oi.subVectors(this.origin,e);const c=l*this.direction.dot(Xs.crossVectors(oi,Xs));if(c<0)return null;const f=l*this.direction.dot(oo.cross(oi));if(f<0||c+f>o)return null;const d=-l*oi.dot(lo);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,n,i,s,o,l,c,f,d,a,u,h,g,_,m){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,l,c,f,d,a,u,h,g,_,m)}set(e,t,n,i,s,o,l,c,f,d,a,u,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=l,p[13]=c,p[2]=f,p[6]=d,p[10]=a,p[14]=u,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/fr.setFromMatrixColumn(e,0).length(),s=1/fr.setFromMatrixColumn(e,1).length(),o=1/fr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),l=Math.sin(n),c=Math.cos(i),f=Math.sin(i),d=Math.cos(s),a=Math.sin(s);if(e.order==="XYZ"){const u=o*d,h=o*a,g=l*d,_=l*a;t[0]=c*d,t[4]=-c*a,t[8]=f,t[1]=h+g*f,t[5]=u-_*f,t[9]=-l*c,t[2]=_-u*f,t[6]=g+h*f,t[10]=o*c}else if(e.order==="YXZ"){const u=c*d,h=c*a,g=f*d,_=f*a;t[0]=u+_*l,t[4]=g*l-h,t[8]=o*f,t[1]=o*a,t[5]=o*d,t[9]=-l,t[2]=h*l-g,t[6]=_+u*l,t[10]=o*c}else if(e.order==="ZXY"){const u=c*d,h=c*a,g=f*d,_=f*a;t[0]=u-_*l,t[4]=-o*a,t[8]=g+h*l,t[1]=h+g*l,t[5]=o*d,t[9]=_-u*l,t[2]=-o*f,t[6]=l,t[10]=o*c}else if(e.order==="ZYX"){const u=o*d,h=o*a,g=l*d,_=l*a;t[0]=c*d,t[4]=g*f-h,t[8]=u*f+_,t[1]=c*a,t[5]=_*f+u,t[9]=h*f-g,t[2]=-f,t[6]=l*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,h=o*f,g=l*c,_=l*f;t[0]=c*d,t[4]=_-u*a,t[8]=g*a+h,t[1]=a,t[5]=o*d,t[9]=-l*d,t[2]=-f*d,t[6]=h*a+g,t[10]=u-_*a}else if(e.order==="XZY"){const u=o*c,h=o*f,g=l*c,_=l*f;t[0]=c*d,t[4]=-a,t[8]=f*d,t[1]=u*a+_,t[5]=o*d,t[9]=h*a-g,t[2]=g*a-h,t[6]=l*d,t[10]=_*a+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pp,e,Lp)}lookAt(e,t,n){const i=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),li.crossVectors(n,en),li.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),li.crossVectors(n,en)),li.normalize(),qs.crossVectors(en,li),i[0]=li.x,i[4]=qs.x,i[8]=en.x,i[1]=li.y,i[5]=qs.y,i[9]=en.y,i[2]=li.z,i[6]=qs.z,i[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],l=n[4],c=n[8],f=n[12],d=n[1],a=n[5],u=n[9],h=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],M=n[7],x=n[11],A=n[15],b=i[0],w=i[4],P=i[8],y=i[12],E=i[1],L=i[5],O=i[9],U=i[13],G=i[2],q=i[6],V=i[10],Y=i[14],H=i[3],te=i[7],ie=i[11],pe=i[15];return s[0]=o*b+l*E+c*G+f*H,s[4]=o*w+l*L+c*q+f*te,s[8]=o*P+l*O+c*V+f*ie,s[12]=o*y+l*U+c*Y+f*pe,s[1]=d*b+a*E+u*G+h*H,s[5]=d*w+a*L+u*q+h*te,s[9]=d*P+a*O+u*V+h*ie,s[13]=d*y+a*U+u*Y+h*pe,s[2]=g*b+_*E+m*G+p*H,s[6]=g*w+_*L+m*q+p*te,s[10]=g*P+_*O+m*V+p*ie,s[14]=g*y+_*U+m*Y+p*pe,s[3]=v*b+M*E+x*G+A*H,s[7]=v*w+M*L+x*q+A*te,s[11]=v*P+M*O+x*V+A*ie,s[15]=v*y+M*U+x*Y+A*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],l=e[5],c=e[9],f=e[13],d=e[2],a=e[6],u=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*a-i*f*a-s*l*u+n*f*u+i*l*h-n*c*h)+_*(+t*c*h-t*f*u+s*o*u-i*o*h+i*f*d-s*c*d)+m*(+t*f*a-t*l*h-s*o*a+n*o*h+s*l*d-n*f*d)+p*(-i*l*d-t*c*a+t*l*u+i*o*a-n*o*u+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],l=e[5],c=e[6],f=e[7],d=e[8],a=e[9],u=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=a*m*f-_*u*f+_*c*h-l*m*h-a*c*p+l*u*p,M=g*u*f-d*m*f-g*c*h+o*m*h+d*c*p-o*u*p,x=d*_*f-g*a*f+g*l*h-o*_*h-d*l*p+o*a*p,A=g*a*c-d*_*c-g*l*u+o*_*u+d*l*m-o*a*m,b=t*v+n*M+i*x+s*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=v*w,e[1]=(_*u*s-a*m*s-_*i*h+n*m*h+a*i*p-n*u*p)*w,e[2]=(l*m*s-_*c*s+_*i*f-n*m*f-l*i*p+n*c*p)*w,e[3]=(a*c*s-l*u*s-a*i*f+n*u*f+l*i*h-n*c*h)*w,e[4]=M*w,e[5]=(d*m*s-g*u*s+g*i*h-t*m*h-d*i*p+t*u*p)*w,e[6]=(g*c*s-o*m*s-g*i*f+t*m*f+o*i*p-t*c*p)*w,e[7]=(o*u*s-d*c*s+d*i*f-t*u*f-o*i*h+t*c*h)*w,e[8]=x*w,e[9]=(g*a*s-d*_*s-g*n*h+t*_*h+d*n*p-t*a*p)*w,e[10]=(o*_*s-g*l*s+g*n*f-t*_*f-o*n*p+t*l*p)*w,e[11]=(d*l*s-o*a*s-d*n*f+t*a*f+o*n*h-t*l*h)*w,e[12]=A*w,e[13]=(d*_*i-g*a*i+g*n*u-t*_*u-d*n*m+t*a*m)*w,e[14]=(g*l*i-o*_*i-g*n*c+t*_*c+o*n*m-t*l*m)*w,e[15]=(o*a*i-d*l*i+d*n*c-t*a*c-o*n*u+t*l*u)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,l=e.y,c=e.z,f=s*o,d=s*l;return this.set(f*o+n,f*l-i*c,f*c+i*l,0,f*l+i*c,d*l+n,d*c-i*o,0,f*c-i*l,d*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,l=t._z,c=t._w,f=s+s,d=o+o,a=l+l,u=s*f,h=s*d,g=s*a,_=o*d,m=o*a,p=l*a,v=c*f,M=c*d,x=c*a,A=n.x,b=n.y,w=n.z;return i[0]=(1-(_+p))*A,i[1]=(h+x)*A,i[2]=(g-M)*A,i[3]=0,i[4]=(h-x)*b,i[5]=(1-(u+p))*b,i[6]=(m+v)*b,i[7]=0,i[8]=(g+M)*w,i[9]=(m-v)*w,i[10]=(1-(u+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=fr.set(i[0],i[1],i[2]).length();const o=fr.set(i[4],i[5],i[6]).length(),l=fr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Tn.copy(this);const f=1/s,d=1/o,a=1/l;return Tn.elements[0]*=f,Tn.elements[1]*=f,Tn.elements[2]*=f,Tn.elements[4]*=d,Tn.elements[5]*=d,Tn.elements[6]*=d,Tn.elements[8]*=a,Tn.elements[9]*=a,Tn.elements[10]*=a,t.setFromRotationMatrix(Tn),n.x=s,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,o,l=ei){const c=this.elements,f=2*s/(t-e),d=2*s/(n-i),a=(t+e)/(t-e),u=(n+i)/(n-i);let h,g;if(l===ei)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(l===Ca)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=f,c[4]=0,c[8]=a,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,l=ei){const c=this.elements,f=1/(t-e),d=1/(n-i),a=1/(o-s),u=(t+e)*f,h=(n+i)*d;let g,_;if(l===ei)g=(o+s)*a,_=-2*a;else if(l===Ca)g=s*a,_=-1*a;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*f,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-h,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fr=new C,Tn=new st,Pp=new C(0,0,0),Lp=new C(1,1,1),li=new C,qs=new C,en=new C,nu=new st,iu=new Fs;class Pe{constructor(e=0,t=0,n=0,i=Pe.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],l=i[8],c=i[1],f=i[5],d=i[9],a=i[2],u=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,h),this._z=Math.atan2(c,f)):(this._y=Math.atan2(-a,s),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-a,h),this._z=Math.atan2(-o,f)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,f));break;case"YZX":this._z=Math.asin(Oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,f),this._y=Math.atan2(-a,s)):(this._x=0,this._y=Math.atan2(l,h));break;case"XZY":this._z=Math.asin(-Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,f),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-d,h),this._y=0);break;default:}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return iu.setFromEuler(this),this.setFromQuaternion(iu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pe.DEFAULT_ORDER="XYZ";class kf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dp=0;const ru=new C,hr=new Fs,qn=new st,Ys=new C,ts=new C,Ip=new C,Up=new Fs,su=new C(1,0,0),au=new C(0,1,0),ou=new C(0,0,1),lu={type:"added"},Fp={type:"removed"},dr={type:"childadded",child:null},co={type:"childremoved",child:null};class Rt extends Yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new C,t=new Pe,n=new Fs,i=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new st},normalMatrix:{value:new De}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(su,e)}rotateY(e){return this.rotateOnAxis(au,e)}rotateZ(e){return this.rotateOnAxis(ou,e)}translateOnAxis(e,t){return ru.copy(e).applyQuaternion(this.quaternion),this.position.add(ru.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(su,e)}translateY(e){return this.translateOnAxis(au,e)}translateZ(e){return this.translateOnAxis(ou,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ys.copy(e):Ys.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(ts,Ys,this.up):qn.lookAt(Ys,ts,this.up),this.quaternion.setFromRotationMatrix(qn),i&&(qn.extractRotation(i.matrixWorld),hr.setFromRotationMatrix(qn),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?this:(e&&e.isObject3D&&(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lu),dr.child=e,this.dispatchEvent(dr),dr.child=null),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fp),co.child=e,this.dispatchEvent(co),co.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lu),dr.child=e,this.dispatchEvent(dr),dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,e,Ip),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,Up,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?{min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}:void 0,boundingSphere:l.boundingSphere?{radius:l.boundingSphere.radius,center:l.boundingSphere.center.toArray()}:void 0})),i.instanceInfo=this._instanceInfo.map(l=>({...l})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let f=0,d=c.length;f<d;f++){const a=c[f];s(e.shapes,a)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,f=this.material.length;c<f;c++)l.push(s(e.materials,this.material[c]));i.material=l}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];i.animations.push(s(e.animations,c))}}if(t){const l=o(e.geometries),c=o(e.materials),f=o(e.textures),d=o(e.images),a=o(e.shapes),u=o(e.skeletons),h=o(e.animations),g=o(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),f.length>0&&(n.textures=f),d.length>0&&(n.images=d),a.length>0&&(n.shapes=a),u.length>0&&(n.skeletons=u),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Rt.DEFAULT_UP=new C(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new C,Yn=new C,uo=new C,jn=new C,pr=new C,mr=new C,cu=new C,fo=new C,ho=new C,po=new C,mo=new dt,_o=new dt,go=new dt;class An{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),bn.subVectors(e,t),i.cross(bn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){bn.subVectors(i,t),Yn.subVectors(n,t),uo.subVectors(e,t);const o=bn.dot(bn),l=bn.dot(Yn),c=bn.dot(uo),f=Yn.dot(Yn),d=Yn.dot(uo),a=o*f-l*l;if(a===0)return s.set(0,0,0),null;const u=1/a,h=(f*c-l*d)*u,g=(o*d-l*c)*u;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,t,n,i,s,o,l,c){return this.getBarycoord(e,t,n,i,jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,jn.x),c.addScaledVector(o,jn.y),c.addScaledVector(l,jn.z),c)}static getInterpolatedAttribute(e,t,n,i,s,o){return mo.setScalar(0),_o.setScalar(0),go.setScalar(0),mo.fromBufferAttribute(e,t),_o.fromBufferAttribute(e,n),go.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(mo,s.x),o.addScaledVector(_o,s.y),o.addScaledVector(go,s.z),o}static isFrontFacing(e,t,n,i){return bn.subVectors(n,t),Yn.subVectors(e,t),bn.cross(Yn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),bn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return An.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,l;pr.subVectors(i,n),mr.subVectors(s,n),fo.subVectors(e,n);const c=pr.dot(fo),f=mr.dot(fo);if(c<=0&&f<=0)return t.copy(n);ho.subVectors(e,i);const d=pr.dot(ho),a=mr.dot(ho);if(d>=0&&a<=d)return t.copy(i);const u=c*a-d*f;if(u<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(n).addScaledVector(pr,o);po.subVectors(e,s);const h=pr.dot(po),g=mr.dot(po);if(g>=0&&h<=g)return t.copy(s);const _=h*f-c*g;if(_<=0&&f>=0&&g<=0)return l=f/(f-g),t.copy(n).addScaledVector(mr,l);const m=d*g-h*a;if(m<=0&&a-d>=0&&h-g>=0)return cu.subVectors(s,i),l=(a-d)/(a-d+(h-g)),t.copy(i).addScaledVector(cu,l);const p=1/(m+_+u);return o=_*p,l=u*p,t.copy(n).addScaledVector(pr,o).addScaledVector(mr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},js={h:0,s:0,l:0};function vo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ne.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ne.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ne.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ne.workingColorSpace){if(e=vp(e,1),t=Oe(t,0,1),n=Oe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=vo(o,s,e+1/3),this.g=vo(o,s,e),this.b=vo(o,s,e-1/3)}return Ne.toWorkingColorSpace(this,i),this}setStyle(e,t=Lt){function n(s){s!==void 0&&parseFloat(s)<1}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],l=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){const n=zf[e.toLowerCase()];return n!==void 0&&this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return Ne.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Oe(Ft.r*255,0,255))*65536+Math.round(Oe(Ft.g*255,0,255))*256+Math.round(Oe(Ft.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ne.workingColorSpace){Ne.fromWorkingColorSpace(Ft.copy(this),t);const n=Ft.r,i=Ft.g,s=Ft.b,o=Math.max(n,i,s),l=Math.min(n,i,s);let c,f;const d=(l+o)/2;if(l===o)c=0,f=0;else{const a=o-l;switch(f=d<=.5?a/(o+l):a/(2-o-l),o){case n:c=(i-s)/a+(i<s?6:0);break;case i:c=(s-n)/a+2;break;case s:c=(n-i)/a+4;break}c/=6}return e.h=c,e.s=f,e.l=d,e}getRGB(e,t=Ne.workingColorSpace){return Ne.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Lt){Ne.fromWorkingColorSpace(Ft.copy(this),e);const t=Ft.r,n=Ft.g,i=Ft.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(js);const n=eo(ci.h,js.h,t),i=eo(ci.s,js.s,t),s=eo(ci.l,js.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Ie;Ie.NAMES=zf;let Np=0;class Hn extends Yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=Us(),this.name="",this.type="Material",this.blending=Lr,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wo,this.blendDst=Xo,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ar,this.stencilZFail=ar,this.stencilZPass=ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0)continue;const i=this[t];i!==void 0&&(i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n)}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wo&&(n.blendSrc=this.blendSrc),this.blendDst!==Xo&&(n.blendDst=this.blendDst),this.blendEquation!==Vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Nr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$c&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ar&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ar&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ar&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const l in s){const c=s[l];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qi extends Hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pe,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new C,$s=new Ge;let Op=0;class On{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Op++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zc,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$s.fromBufferAttribute(this,t),$s.applyMatrix3(e),this.setXY(t,$s.x,$s.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Jr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),i=Wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),i=Wt(i,this.array),s=Wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zc&&(e.usage=this.usage),e}}class Hf extends On{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vf extends On{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class xt extends On{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Bp=0;const dn=new st,xo=new Rt,_r=new C,tn=new Ei,ns=new Ei,At=new C;class on extends Yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Of(e)?Vf:Hf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new De().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return xo.lookAt(e),xo.updateMatrix(),this.applyMatrix4(xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count,t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];ns.setFromBufferAttribute(l),this.morphTargetsRelative?(At.addVectors(tn.min,ns.min),tn.expandByPoint(At),At.addVectors(tn.max,ns.max),tn.expandByPoint(At)):(tn.expandByPoint(ns.min),tn.expandByPoint(ns.max))}tn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)At.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(At));if(t)for(let s=0,o=t.length;s<o;s++){const l=t[s],c=this.morphTargetsRelative;for(let f=0,d=l.count;f<d;f++)At.fromBufferAttribute(l,f),c&&(_r.fromBufferAttribute(e,f),At.add(_r)),i=Math.max(i,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return;const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),l=[],c=[];for(let P=0;P<n.count;P++)l[P]=new C,c[P]=new C;const f=new C,d=new C,a=new C,u=new Ge,h=new Ge,g=new Ge,_=new C,m=new C;function p(P,y,E){f.fromBufferAttribute(n,P),d.fromBufferAttribute(n,y),a.fromBufferAttribute(n,E),u.fromBufferAttribute(s,P),h.fromBufferAttribute(s,y),g.fromBufferAttribute(s,E),d.sub(f),a.sub(f),h.sub(u),g.sub(u);const L=1/(h.x*g.y-g.x*h.y);isFinite(L)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(a,-h.y).multiplyScalar(L),m.copy(a).multiplyScalar(h.x).addScaledVector(d,-g.x).multiplyScalar(L),l[P].add(_),l[y].add(_),l[E].add(_),c[P].add(m),c[y].add(m),c[E].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,y=v.length;P<y;++P){const E=v[P],L=E.start,O=E.count;for(let U=L,G=L+O;U<G;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const M=new C,x=new C,A=new C,b=new C;function w(P){A.fromBufferAttribute(i,P),b.copy(A);const y=l[P];M.copy(y),M.sub(A.multiplyScalar(A.dot(y))).normalize(),x.crossVectors(b,y);const L=x.dot(c[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,L)}for(let P=0,y=v.length;P<y;++P){const E=v[P],L=E.start,O=E.count;for(let U=L,G=L+O;U<G;U+=3)w(e.getX(U+0)),w(e.getX(U+1)),w(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new On(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,h=n.count;u<h;u++)n.setXYZ(u,0,0,0);const i=new C,s=new C,o=new C,l=new C,c=new C,f=new C,d=new C,a=new C;if(e)for(let u=0,h=e.count;u<h;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),d.subVectors(o,s),a.subVectors(i,s),d.cross(a),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),f.fromBufferAttribute(n,m),l.add(d),c.add(d),f.add(d),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,f.x,f.y,f.z)}else for(let u=0,h=t.count;u<h;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,s),a.subVectors(i,s),d.cross(a),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(l,c){const f=l.array,d=l.itemSize,a=l.normalized,u=new f.constructor(c.length*d);let h=0,g=0;for(let _=0,m=c.length;_<m;_++){l.isInterleavedBufferAttribute?h=c[_]*l.data.stride+l.offset:h=c[_]*d;for(let p=0;p<d;p++)u[g++]=f[h++]}return new On(u,d,a)}if(this.index===null)return this;const t=new on,n=this.index.array,i=this.attributes;for(const l in i){const c=i[l],f=e(c,n);t.setAttribute(l,f)}const s=this.morphAttributes;for(const l in s){const c=[],f=s[l];for(let d=0,a=f.length;d<a;d++){const u=f[d],h=e(u,n);c.push(h)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,c=o.length;l<c;l++){const f=o[l];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const f in c)c[f]!==void 0&&(e[f]=c[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const f=n[c];e.data.attributes[c]=f.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const f=this.morphAttributes[c],d=[];for(let a=0,u=f.length;a<u;a++){const h=f[a];d.push(h.toJSON(e.data))}d.length>0&&(i[c]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const f in i){const d=i[f];this.setAttribute(f,d.clone(t))}const s=e.morphAttributes;for(const f in s){const d=[],a=s[f];for(let u=0,h=a.length;u<h;u++)d.push(a[u].clone(t));this.morphAttributes[f]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let f=0,d=o.length;f<d;f++){const a=o[f];this.addGroup(a.start,a.count,a.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uu=new st,Di=new ac,Zs=new Ns,fu=new C,Ks=new C,Js=new C,Qs=new C,yo=new C,ea=new C,hu=new C,ta=new C;class pt extends Rt{constructor(e=new on,t=new Qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const l=this.morphTargetInfluences;if(s&&l){ea.set(0,0,0);for(let c=0,f=s.length;c<f;c++){const d=l[c],a=s[c];d!==0&&(yo.fromBufferAttribute(a,e),o?ea.addScaledVector(yo,d):ea.addScaledVector(yo.sub(t),d))}t.add(ea)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(s),Di.copy(e.ray).recast(e.near),!(Zs.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Zs,fu)===null||Di.origin.distanceToSquared(fu)>(e.far-e.near)**2))&&(uu.copy(s).invert(),Di.copy(e.ray).applyMatrix4(uu),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,l=s.index,c=s.attributes.position,f=s.attributes.uv,d=s.attributes.uv1,a=s.attributes.normal,u=s.groups,h=s.drawRange;if(l!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],v=Math.max(m.start,h.start),M=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let x=v,A=M;x<A;x+=3){const b=l.getX(x),w=l.getX(x+1),P=l.getX(x+2);i=na(this,p,e,n,f,d,a,b,w,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const v=l.getX(m),M=l.getX(m+1),x=l.getX(m+2);i=na(this,o,e,n,f,d,a,v,M,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],v=Math.max(m.start,h.start),M=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let x=v,A=M;x<A;x+=3){const b=x,w=x+1,P=x+2;i=na(this,p,e,n,f,d,a,b,w,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),_=Math.min(c.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const v=m,M=m+1,x=m+2;i=na(this,o,e,n,f,d,a,v,M,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function kp(r,e,t,n,i,s,o,l){let c;if(e.side===Yt?c=n.intersectTriangle(o,s,i,!0,l):c=n.intersectTriangle(i,s,o,e.side===ni,l),c===null)return null;ta.copy(l),ta.applyMatrix4(r.matrixWorld);const f=t.ray.origin.distanceTo(ta);return f<t.near||f>t.far?null:{distance:f,point:ta.clone(),object:r}}function na(r,e,t,n,i,s,o,l,c,f){r.getVertexPosition(l,Ks),r.getVertexPosition(c,Js),r.getVertexPosition(f,Qs);const d=kp(r,e,t,n,Ks,Js,Qs,hu);if(d){const a=new C;An.getBarycoord(hu,Ks,Js,Qs,a),i&&(d.uv=An.getInterpolatedAttribute(i,l,c,f,a,new Ge)),s&&(d.uv1=An.getInterpolatedAttribute(s,l,c,f,a,new Ge)),o&&(d.normal=An.getInterpolatedAttribute(o,l,c,f,a,new C),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:l,b:c,c:f,normal:new C,materialIndex:0};An.getNormal(Ks,Js,Qs,u.normal),d.face=u,d.barycoord=a}return d}class Ze extends on{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const l=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],f=[],d=[],a=[];let u=0,h=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new xt(f,3)),this.setAttribute("normal",new xt(d,3)),this.setAttribute("uv",new xt(a,2));function g(_,m,p,v,M,x,A,b,w,P,y){const E=x/w,L=A/P,O=x/2,U=A/2,G=b/2,q=w+1,V=P+1;let Y=0,H=0;const te=new C;for(let ie=0;ie<V;ie++){const pe=ie*L-U;for(let Me=0;Me<q;Me++){const ke=Me*E-O;te[_]=ke*v,te[m]=pe*M,te[p]=G,f.push(te.x,te.y,te.z),te[_]=0,te[m]=0,te[p]=b>0?1:-1,d.push(te.x,te.y,te.z),a.push(Me/w),a.push(1-ie/P),Y+=1}}for(let ie=0;ie<P;ie++)for(let pe=0;pe<w;pe++){const Me=u+pe+q*ie,ke=u+pe+q*(ie+1),W=u+(pe+1)+q*(ie+1),ee=u+(pe+1)+q*ie;c.push(Me,ke,ee),c.push(ke,W,ee),H+=6}l.addGroup(h,H,y),h+=H,u+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ze(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?e[t][n]=null:e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ht(r){const e={};for(let t=0;t<r.length;t++){const n=zr(r[t]);for(const i in n)e[i]=n[i]}return e}function zp(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Gf(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ne.workingColorSpace}const Hp={clone:zr,merge:Ht};var Vp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends Hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vp,this.fragmentShader=Gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zr(e.uniforms),this.uniformsGroups=zp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Wf extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new C,du=new Ge,pu=new Ge;class _n extends Wf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rl*2*Math.atan(Math.tan(Qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,t){return this.getViewBounds(e,du,pu),t.subVectors(pu,du)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,f=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/f,i*=o.width/c,n*=o.height/f}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gr=-90,vr=1;class Wp extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new _n(gr,vr,e,t);i.layers=this.layers,this.add(i);const s=new _n(gr,vr,e,t);s.layers=this.layers,this.add(s);const o=new _n(gr,vr,e,t);o.layers=this.layers,this.add(o);const l=new _n(gr,vr,e,t);l.layers=this.layers,this.add(l);const c=new _n(gr,vr,e,t);c.layers=this.layers,this.add(c);const f=new _n(gr,vr,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,l,c]=t;for(const f of t)this.remove(f);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,l,c,f,d]=this.children,a=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,l),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,f),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(a,u,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Xf extends Bt{constructor(e=[],t=Or,n,i,s,o,l,c,f,d){super(e,t,n,i,s,o,l,c,f,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xp extends Ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Xf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ze(5,5,5),s=new Ti({name:"CubemapFromEquirect",uniforms:zr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:vi});s.uniforms.tEquirect.value=t;const o=new pt(i,s),l=t.minFilter;return t.minFilter===Wi&&(t.minFilter=vn),new Wp(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class Fn extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qp={type:"move"};class Mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const l=this._targetRay,c=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(f,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=f.joints["index-finger-tip"],a=f.joints["thumb-tip"],u=d.position.distanceTo(a.position),h=.02,g=.005;f.inputState.pinching&&u>h+g?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&u<=h-g&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(qp)))}return l!==null&&(l.visible=i!==null),c!==null&&(c.visible=s!==null),f!==null&&(f.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Fn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Yp extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pe,this.environmentIntensity=1,this.environmentRotation=new Pe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const So=new C,jp=new C,$p=new De;class ki{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=So.subVectors(n,t).cross(jp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(So),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$p.getNormalMatrix(e),i=this.coplanarPoint(So).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new Ns,ia=new C;class oc{constructor(e=new ki,t=new ki,n=new ki,i=new ki,s=new ki,o=new ki){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(i),l[4].copy(s),l[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei){const n=this.planes,i=e.elements,s=i[0],o=i[1],l=i[2],c=i[3],f=i[4],d=i[5],a=i[6],u=i[7],h=i[8],g=i[9],_=i[10],m=i[11],p=i[12],v=i[13],M=i[14],x=i[15];if(n[0].setComponents(c-s,u-f,m-h,x-p).normalize(),n[1].setComponents(c+s,u+f,m+h,x+p).normalize(),n[2].setComponents(c+o,u+d,m+g,x+v).normalize(),n[3].setComponents(c-o,u-d,m-g,x-v).normalize(),n[4].setComponents(c-l,u-a,m-_,x-M).normalize(),t===ei)n[5].setComponents(c+l,u+a,m+_,x+M).normalize();else if(t===Ca)n[5].setComponents(l,a,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ia.x=i.normal.x>0?e.max.x:e.min.x,ia.y=i.normal.y>0?e.max.y:e.min.y,ia.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ia)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ma extends Hn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pa=new C,La=new C,mu=new st,is=new ac,ra=new Ns,Eo=new C,_u=new C;class Zp extends Rt{constructor(e=new on,t=new Ma){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Pa.fromBufferAttribute(t,i-1),La.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Pa.distanceTo(La);e.setAttribute("lineDistance",new xt(n,1))}return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(i),ra.radius+=s,e.ray.intersectsSphere(ra)===!1)return;mu.copy(i).invert(),is.copy(e.ray).applyMatrix4(mu);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,f=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const h=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=h,m=g-1;_<m;_+=f){const p=d.getX(_),v=d.getX(_+1),M=sa(this,e,is,c,p,v,_);M&&t.push(M)}if(this.isLineLoop){const _=d.getX(g-1),m=d.getX(h),p=sa(this,e,is,c,_,m,g-1);p&&t.push(p)}}else{const h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=h,m=g-1;_<m;_+=f){const p=sa(this,e,is,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=sa(this,e,is,c,g-1,h,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function sa(r,e,t,n,i,s,o){const l=r.geometry.attributes.position;if(Pa.fromBufferAttribute(l,i),La.fromBufferAttribute(l,s),t.distanceSqToSegment(Pa,La,Eo,_u)>n)return;Eo.applyMatrix4(r.matrixWorld);const f=e.ray.origin.distanceTo(Eo);if(!(f<e.near||f>e.far))return{distance:f,point:_u.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const gu=new C,vu=new C;class xu extends Zp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)gu.fromBufferAttribute(t,i),vu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+gu.distanceTo(vu);e.setAttribute("lineDistance",new xt(n,1))}return this}}class as extends Hn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const yu=new st,Cl=new ac,aa=new Ns,oa=new C;class To extends Rt{constructor(e=new on,t=new as){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(i),aa.radius+=s,e.ray.intersectsSphere(aa)===!1)return;yu.copy(i).invert(),Cl.copy(e.ray).applyMatrix4(yu);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,f=n.index,a=n.attributes.position;if(f!==null){const u=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let g=u,_=h;g<_;g++){const m=f.getX(g);oa.fromBufferAttribute(a,m),Mu(oa,m,c,i,e,t,this)}}else{const u=Math.max(0,o.start),h=Math.min(a.count,o.start+o.count);for(let g=u,_=h;g<_;g++)oa.fromBufferAttribute(a,g),Mu(oa,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function Mu(r,e,t,n,i,s,o){const l=Cl.distanceSqToPoint(r);if(l<t){const c=new C;Cl.closestPointToPoint(r,c),c.applyMatrix4(n);const f=i.ray.origin.distanceTo(c);if(f<i.near||f>i.far)return;s.push({distance:f,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Kp extends Bt{constructor(e,t,n,i,s=vn,o=vn,l,c,f){super(e,t,n,i,s,o,l,c,f),this.isVideoTexture=!0,this.generateMipmaps=!1;const d=this;function a(){d.needsUpdate=!0,e.requestVideoFrameCallback(a)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(a)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class qf extends Bt{constructor(e,t,n=Ki,i,s,o,l=Cn,c=Cn,f,d=vs){if(d!==vs&&d!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,i,s,o,l,c,d,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class lc extends on{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],l=[],c=[],f=new C,d=new Ge;o.push(0,0,0),l.push(0,0,1),c.push(.5,.5);for(let a=0,u=3;a<=t;a++,u+=3){const h=n+a/t*i;f.x=e*Math.cos(h),f.y=e*Math.sin(h),o.push(f.x,f.y,f.z),l.push(0,0,1),d.x=(o[u]/e+1)/2,d.y=(o[u+1]/e+1)/2,c.push(d.x,d.y)}for(let a=1;a<=t;a++)s.push(a,a+1,0);this.setIndex(s),this.setAttribute("position",new xt(o,3)),this.setAttribute("normal",new xt(l,3)),this.setAttribute("uv",new xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class jr extends on{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,l=Math.floor(n),c=Math.floor(i),f=l+1,d=c+1,a=e/l,u=t/c,h=[],g=[],_=[],m=[];for(let p=0;p<d;p++){const v=p*u-o;for(let M=0;M<f;M++){const x=M*a-s;g.push(x,-v,0),_.push(0,0,1),m.push(M/l),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<l;v++){const M=v+f*p,x=v+f*(p+1),A=v+1+f*(p+1),b=v+1+f*p;h.push(M,x,b),h.push(x,A,b)}this.setIndex(h),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(_,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.width,e.height,e.widthSegments,e.heightSegments)}}class cc extends on{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+l,Math.PI);let f=0;const d=[],a=new C,u=new C,h=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const v=[],M=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let A=0;A<=t;A++){const b=A/t;a.x=-e*Math.cos(i+b*s)*Math.sin(o+M*l),a.y=e*Math.cos(o+M*l),a.z=e*Math.sin(i+b*s)*Math.sin(o+M*l),g.push(a.x,a.y,a.z),u.copy(a).normalize(),_.push(u.x,u.y,u.z),m.push(b+x,1-M),v.push(f++)}d.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const M=d[p][v+1],x=d[p][v],A=d[p+1][v],b=d[p+1][v+1];(p!==0||o>0)&&h.push(M,x,b),(p!==n-1||c<Math.PI)&&h.push(x,A,b)}this.setIndex(h),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(_,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ms extends Hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rc,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yf extends Hn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ie(16777215),this.specular=new Ie(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rc,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pe,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jp extends Hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qp extends Hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Da={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class em{constructor(e,t,n){const i=this;let s=!1,o=0,l=0,c;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){l++,s===!1&&i.onStart!==void 0&&i.onStart(d,o,l),s=!0},this.itemEnd=function(d){o++,i.onProgress!==void 0&&i.onProgress(d,o,l),o===l&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,a){return f.push(d,a),this},this.removeHandler=function(d){const a=f.indexOf(d);return a!==-1&&f.splice(a,2),this},this.getHandler=function(d){for(let a=0,u=f.length;a<u;a+=2){const h=f[a],g=f[a+1];if(h.global&&(h.lastIndex=0),h.test(d))return g}return null}}}const jf=new em;class $r{constructor(e){this.manager=e!==void 0?e:jf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}$r.DEFAULT_MATERIAL_NAME="__DEFAULT";const $n={};class tm extends Error{constructor(e,t){super(e),this.response=t}}class $f extends $r{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Da.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if($n[e]!==void 0){$n[e].push({onLoad:t,onProgress:n,onError:i});return}$n[e]=[],$n[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,c=this.responseType;fetch(o).then(f=>{if(f.status===200||f.status===0){if(f.status,typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const d=$n[e],a=f.body.getReader(),u=f.headers.get("X-File-Size")||f.headers.get("Content-Length"),h=u?parseInt(u):0,g=h!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){a.read().then(({done:M,value:x})=>{if(M)p.close();else{_+=x.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:h});for(let b=0,w=d.length;b<w;b++){const P=d[b];P.onProgress&&P.onProgress(A)}p.enqueue(x),v()}},M=>{p.error(M)})}}});return new Response(m)}else throw new tm(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(c){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(d=>new DOMParser().parseFromString(d,l));case"json":return f.json();default:if(l==="")return f.text();{const a=/charset="?([^;"\s]*)"?/i.exec(l),u=a&&a[1]?a[1].toLowerCase():void 0,h=new TextDecoder(u);return f.arrayBuffer().then(g=>h.decode(g))}}}).then(f=>{Da.add(e,f);const d=$n[e];delete $n[e];for(let a=0,u=d.length;a<u;a++){const h=d[a];h.onLoad&&h.onLoad(f)}}).catch(f=>{const d=$n[e];if(d===void 0)throw this.manager.itemError(e),f;delete $n[e];for(let a=0,u=d.length;a<u;a++){const h=d[a];h.onError&&h.onError(f)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class nm extends $r{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Da.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const l=ys("img");function c(){d(),Da.add(e,this),t&&t(this),s.manager.itemEnd(e)}function f(a){d(),i&&i(a),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){l.removeEventListener("load",c,!1),l.removeEventListener("error",f,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),s.manager.itemStart(e),l.src=e,l}}class Zf extends $r{constructor(e){super(e)}load(e,t,n,i){const s=new Bt,o=new nm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){s.image=l,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class im extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const bo=new st,Su=new C,Eu=new C;class rm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=zn,this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oc,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Su.setFromMatrixPosition(e.matrixWorld),t.position.copy(Su),Eu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Eu),t.updateMatrixWorld(),bo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Kf extends Wf{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,l=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=f*this.view.offsetX,o=s+f*this.view.width,l-=d*this.view.offsetY,c=l-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class sm extends rm{constructor(){super(new Kf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class am extends im{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new sm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class om{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class lm extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Tu(r,e,t,n){const i=cm(n);switch(t){case Lf:return r*e;case If:return r*e/i.components*i.byteLength;case tc:return r*e/i.components*i.byteLength;case Uf:return r*e*2/i.components*i.byteLength;case nc:return r*e*2/i.components*i.byteLength;case Df:return r*e*3/i.components*i.byteLength;case Rn:return r*e*4/i.components*i.byteLength;case ic:return r*e*4/i.components*i.byteLength;case ma:case _a:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ga:case va:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case il:case sl:return Math.max(r,16)*Math.max(e,8)/4;case nl:case rl:return Math.max(r,8)*Math.max(e,8)/2;case al:case ol:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ll:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case cl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ul:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case fl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case hl:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case dl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case pl:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ml:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case _l:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case gl:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case vl:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case xl:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case yl:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ml:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Sl:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case xa:case El:case Tl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Ff:case bl:return Math.ceil(r/4)*Math.ceil(e/4)*8;case wl:case Al:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cm(r){switch(r){case zn:case Rf:return{byteLength:1,components:1};case _s:case Cf:case Is:return{byteLength:2,components:1};case Ql:case ec:return{byteLength:2,components:4};case Ki:case Jl:case Qn:return{byteLength:4,components:1};case Pf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zl}}));typeof window<"u"&&(window.__THREE__||(window.__THREE__=Zl));/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Jf(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function um(r){const e=new WeakMap;function t(l,c){const f=l.array,d=l.usage,a=f.byteLength,u=r.createBuffer();r.bindBuffer(c,u),r.bufferData(c,f,d),l.onUploadCallback();let h;if(f instanceof Float32Array)h=r.FLOAT;else if(f instanceof Uint16Array)l.isFloat16BufferAttribute?h=r.HALF_FLOAT:h=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)h=r.SHORT;else if(f instanceof Uint32Array)h=r.UNSIGNED_INT;else if(f instanceof Int32Array)h=r.INT;else if(f instanceof Int8Array)h=r.BYTE;else if(f instanceof Uint8Array)h=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)h=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:u,type:h,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:a}}function n(l,c,f){const d=c.array,a=c.updateRanges;if(r.bindBuffer(f,l),a.length===0)r.bufferSubData(f,0,d);else{a.sort((h,g)=>h.start-g.start);let u=0;for(let h=1;h<a.length;h++){const g=a[u],_=a[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,a[u]=_)}a.length=u+1;for(let h=0,g=a.length;h<g;h++){const _=a[h];r.bufferSubData(f,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(r.deleteBuffer(c.buffer),e.delete(l))}function o(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const d=e.get(l);(!d||d.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const f=e.get(l);if(f===void 0)e.set(l,t(l,c));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,l,c),f.version=l.version}}return{get:i,remove:s,update:o}}var fm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hm=`#ifdef USE_ALPHAHASH
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
#endif`,dm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_m=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gm=`#ifdef USE_AOMAP
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
#endif`,vm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xm=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ym=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Em=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tm=`#ifdef USE_IRIDESCENCE
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
#endif`,bm=`#ifdef USE_BUMPMAP
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
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Um=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Fm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nm=`vec3 transformedNormal = objectNormal;
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
#endif`,Om=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,km=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gm=`#ifdef USE_ENVMAP
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
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xm=`#ifdef USE_ENVMAP
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
#endif`,qm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ym=`#ifdef USE_ENVMAP
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
#endif`,jm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Km=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jm=`#ifdef USE_GRADIENTMAP
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
}`,Qm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,n_=`uniform bool receiveShadow;
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
#endif`,i_=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,r_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,s_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,o_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,c_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,u_=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,f_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,h_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,__=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,g_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,x_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,y_=`#if defined( USE_POINTS_UV )
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
#endif`,M_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,E_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w_=`#ifdef USE_MORPHTARGETS
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
#endif`,A_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,C_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,P_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,I_=`#ifdef USE_NORMALMAP
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
#endif`,U_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,F_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,O_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,B_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,k_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,z_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,q_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Y_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$_=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Z_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K_=`#ifdef USE_SKINNING
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
#endif`,J_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q_=`#ifdef USE_SKINNING
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
#endif`,eg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ng=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ig=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rg=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sg=`#ifdef USE_TRANSMISSION
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
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ug=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fg=`uniform sampler2D t2D;
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
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`#include <common>
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
}`,gg=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vg=`#define DISTANCE
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
}`,xg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`uniform float scale;
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
}`,Eg=`uniform vec3 diffuse;
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
}`,Tg=`#include <common>
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
}`,bg=`uniform vec3 diffuse;
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
}`,wg=`#define LAMBERT
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
}`,Ag=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Rg=`#define MATCAP
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
}`,Cg=`#define MATCAP
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
}`,Pg=`#define NORMAL
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
}`,Lg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dg=`#define PHONG
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
}`,Ig=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Ug=`#define STANDARD
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
}`,Fg=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Ng=`#define TOON
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
}`,Og=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Bg=`uniform float size;
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
}`,kg=`uniform vec3 diffuse;
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
}`,zg=`#include <common>
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
}`,Hg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Vg=`uniform float rotation;
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
}`,Gg=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:fm,alphahash_pars_fragment:hm,alphamap_fragment:dm,alphamap_pars_fragment:pm,alphatest_fragment:mm,alphatest_pars_fragment:_m,aomap_fragment:gm,aomap_pars_fragment:vm,batching_pars_vertex:xm,batching_vertex:ym,begin_vertex:Mm,beginnormal_vertex:Sm,bsdfs:Em,iridescence_fragment:Tm,bumpmap_pars_fragment:bm,clipping_planes_fragment:wm,clipping_planes_pars_fragment:Am,clipping_planes_pars_vertex:Rm,clipping_planes_vertex:Cm,color_fragment:Pm,color_pars_fragment:Lm,color_pars_vertex:Dm,color_vertex:Im,common:Um,cube_uv_reflection_fragment:Fm,defaultnormal_vertex:Nm,displacementmap_pars_vertex:Om,displacementmap_vertex:Bm,emissivemap_fragment:km,emissivemap_pars_fragment:zm,colorspace_fragment:Hm,colorspace_pars_fragment:Vm,envmap_fragment:Gm,envmap_common_pars_fragment:Wm,envmap_pars_fragment:Xm,envmap_pars_vertex:qm,envmap_physical_pars_fragment:i_,envmap_vertex:Ym,fog_vertex:jm,fog_pars_vertex:$m,fog_fragment:Zm,fog_pars_fragment:Km,gradientmap_pars_fragment:Jm,lightmap_pars_fragment:Qm,lights_lambert_fragment:e_,lights_lambert_pars_fragment:t_,lights_pars_begin:n_,lights_toon_fragment:r_,lights_toon_pars_fragment:s_,lights_phong_fragment:a_,lights_phong_pars_fragment:o_,lights_physical_fragment:l_,lights_physical_pars_fragment:c_,lights_fragment_begin:u_,lights_fragment_maps:f_,lights_fragment_end:h_,logdepthbuf_fragment:d_,logdepthbuf_pars_fragment:p_,logdepthbuf_pars_vertex:m_,logdepthbuf_vertex:__,map_fragment:g_,map_pars_fragment:v_,map_particle_fragment:x_,map_particle_pars_fragment:y_,metalnessmap_fragment:M_,metalnessmap_pars_fragment:S_,morphinstance_vertex:E_,morphcolor_vertex:T_,morphnormal_vertex:b_,morphtarget_pars_vertex:w_,morphtarget_vertex:A_,normal_fragment_begin:R_,normal_fragment_maps:C_,normal_pars_fragment:P_,normal_pars_vertex:L_,normal_vertex:D_,normalmap_pars_fragment:I_,clearcoat_normal_fragment_begin:U_,clearcoat_normal_fragment_maps:F_,clearcoat_pars_fragment:N_,iridescence_pars_fragment:O_,opaque_fragment:B_,packing:k_,premultiplied_alpha_fragment:z_,project_vertex:H_,dithering_fragment:V_,dithering_pars_fragment:G_,roughnessmap_fragment:W_,roughnessmap_pars_fragment:X_,shadowmap_pars_fragment:q_,shadowmap_pars_vertex:Y_,shadowmap_vertex:j_,shadowmask_pars_fragment:$_,skinbase_vertex:Z_,skinning_pars_vertex:K_,skinning_vertex:J_,skinnormal_vertex:Q_,specularmap_fragment:eg,specularmap_pars_fragment:tg,tonemapping_fragment:ng,tonemapping_pars_fragment:ig,transmission_fragment:rg,transmission_pars_fragment:sg,uv_pars_fragment:ag,uv_pars_vertex:og,uv_vertex:lg,worldpos_vertex:cg,background_vert:ug,background_frag:fg,backgroundCube_vert:hg,backgroundCube_frag:dg,cube_vert:pg,cube_frag:mg,depth_vert:_g,depth_frag:gg,distanceRGBA_vert:vg,distanceRGBA_frag:xg,equirect_vert:yg,equirect_frag:Mg,linedashed_vert:Sg,linedashed_frag:Eg,meshbasic_vert:Tg,meshbasic_frag:bg,meshlambert_vert:wg,meshlambert_frag:Ag,meshmatcap_vert:Rg,meshmatcap_frag:Cg,meshnormal_vert:Pg,meshnormal_frag:Lg,meshphong_vert:Dg,meshphong_frag:Ig,meshphysical_vert:Ug,meshphysical_frag:Fg,meshtoon_vert:Ng,meshtoon_frag:Og,points_vert:Bg,points_frag:kg,shadow_vert:zg,shadow_frag:Hg,sprite_vert:Vg,sprite_frag:Gg},ne={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Dn={basic:{uniforms:Ht([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Ht([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Ht([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Ht([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Ht([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Ht([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Ht([ne.points,ne.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Ht([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Ht([ne.common,ne.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Ht([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Ht([ne.sprite,ne.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Ht([ne.common,ne.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Ht([ne.lights,ne.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Dn.physical={uniforms:Ht([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const la={r:0,b:0,g:0},Ui=new Pe,Wg=new st;function Xg(r,e,t,n,i,s,o){const l=new Ie(0);let c=s===!0?0:1,f,d,a=null,u=0,h=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function _(M){let x=!1;const A=g(M);A===null?p(l,c):A&&A.isColor&&(p(A,1),x=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(M,x){const A=g(x);A&&(A.isCubeTexture||A.mapping===Wa)?(d===void 0&&(d=new pt(new Ze(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:zr(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(b,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),Ui.copy(x.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),d.material.uniforms.envMap.value=A,d.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Wg.makeRotationFromEuler(Ui)),d.material.toneMapped=Ne.getTransfer(A.colorSpace)!==Je,(a!==A||u!==A.version||h!==r.toneMapping)&&(d.material.needsUpdate=!0,a=A,u=A.version,h=r.toneMapping),d.layers.enableAll(),M.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(f===void 0&&(f=new pt(new jr(2,2),new Ti({name:"BackgroundMaterial",uniforms:zr(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=A,f.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,f.material.toneMapped=Ne.getTransfer(A.colorSpace)!==Je,A.matrixAutoUpdate===!0&&A.updateMatrix(),f.material.uniforms.uvTransform.value.copy(A.matrix),(a!==A||u!==A.version||h!==r.toneMapping)&&(f.material.needsUpdate=!0,a=A,u=A.version,h=r.toneMapping),f.layers.enableAll(),M.unshift(f,f.geometry,f.material,0,0,null))}function p(M,x){M.getRGB(la,Gf(r)),n.buffers.color.setClear(la.r,la.g,la.b,x,o)}function v(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return l},setClearColor:function(M,x=1){l.set(M),c=x,p(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(l,c)},render:_,addToRenderList:m,dispose:v}}function qg(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null);let s=i,o=!1;function l(E,L,O,U,G){let q=!1;const V=a(U,O,L);s!==V&&(s=V,f(s.object)),q=h(E,U,O,G),q&&g(E,U,O,G),G!==null&&e.update(G,r.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,x(E,L,O,U),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return r.createVertexArray()}function f(E){return r.bindVertexArray(E)}function d(E){return r.deleteVertexArray(E)}function a(E,L,O){const U=O.wireframe===!0;let G=n[E.id];G===void 0&&(G={},n[E.id]=G);let q=G[L.id];q===void 0&&(q={},G[L.id]=q);let V=q[U];return V===void 0&&(V=u(c()),q[U]=V),V}function u(E){const L=[],O=[],U=[];for(let G=0;G<t;G++)L[G]=0,O[G]=0,U[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:U,object:E,attributes:{},index:null}}function h(E,L,O,U){const G=s.attributes,q=L.attributes;let V=0;const Y=O.getAttributes();for(const H in Y)if(Y[H].location>=0){const ie=G[H];let pe=q[H];if(pe===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(pe=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(pe=E.instanceColor)),ie===void 0||ie.attribute!==pe||pe&&ie.data!==pe.data)return!0;V++}return s.attributesNum!==V||s.index!==U}function g(E,L,O,U){const G={},q=L.attributes;let V=0;const Y=O.getAttributes();for(const H in Y)if(Y[H].location>=0){let ie=q[H];ie===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(ie=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(ie=E.instanceColor));const pe={};pe.attribute=ie,ie&&ie.data&&(pe.data=ie.data),G[H]=pe,V++}s.attributes=G,s.attributesNum=V,s.index=U}function _(){const E=s.newAttributes;for(let L=0,O=E.length;L<O;L++)E[L]=0}function m(E){p(E,0)}function p(E,L){const O=s.newAttributes,U=s.enabledAttributes,G=s.attributeDivisors;O[E]=1,U[E]===0&&(r.enableVertexAttribArray(E),U[E]=1),G[E]!==L&&(r.vertexAttribDivisor(E,L),G[E]=L)}function v(){const E=s.newAttributes,L=s.enabledAttributes;for(let O=0,U=L.length;O<U;O++)L[O]!==E[O]&&(r.disableVertexAttribArray(O),L[O]=0)}function M(E,L,O,U,G,q,V){V===!0?r.vertexAttribIPointer(E,L,O,G,q):r.vertexAttribPointer(E,L,O,U,G,q)}function x(E,L,O,U){_();const G=U.attributes,q=O.getAttributes(),V=L.defaultAttributeValues;for(const Y in q){const H=q[Y];if(H.location>=0){let te=G[Y];if(te===void 0&&(Y==="instanceMatrix"&&E.instanceMatrix&&(te=E.instanceMatrix),Y==="instanceColor"&&E.instanceColor&&(te=E.instanceColor)),te!==void 0){const ie=te.normalized,pe=te.itemSize,Me=e.get(te);if(Me===void 0)continue;const ke=Me.buffer,W=Me.type,ee=Me.bytesPerElement,me=W===r.INT||W===r.UNSIGNED_INT||te.gpuType===Jl;if(te.isInterleavedBufferAttribute){const se=te.data,Se=se.stride,Ye=te.offset;if(se.isInstancedInterleavedBuffer){for(let we=0;we<H.locationSize;we++)p(H.location+we,se.meshPerAttribute);E.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let we=0;we<H.locationSize;we++)m(H.location+we);r.bindBuffer(r.ARRAY_BUFFER,ke);for(let we=0;we<H.locationSize;we++)M(H.location+we,pe/H.locationSize,W,ie,Se*ee,(Ye+pe/H.locationSize*we)*ee,me)}else{if(te.isInstancedBufferAttribute){for(let se=0;se<H.locationSize;se++)p(H.location+se,te.meshPerAttribute);E.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let se=0;se<H.locationSize;se++)m(H.location+se);r.bindBuffer(r.ARRAY_BUFFER,ke);for(let se=0;se<H.locationSize;se++)M(H.location+se,pe/H.locationSize,W,ie,pe*ee,pe/H.locationSize*se*ee,me)}}else if(V!==void 0){const ie=V[Y];if(ie!==void 0)switch(ie.length){case 2:r.vertexAttrib2fv(H.location,ie);break;case 3:r.vertexAttrib3fv(H.location,ie);break;case 4:r.vertexAttrib4fv(H.location,ie);break;default:r.vertexAttrib1fv(H.location,ie)}}}}v()}function A(){P();for(const E in n){const L=n[E];for(const O in L){const U=L[O];for(const G in U)d(U[G].object),delete U[G];delete L[O]}delete n[E]}}function b(E){if(n[E.id]===void 0)return;const L=n[E.id];for(const O in L){const U=L[O];for(const G in U)d(U[G].object),delete U[G];delete L[O]}delete n[E.id]}function w(E){for(const L in n){const O=n[L];if(O[E.id]===void 0)continue;const U=O[E.id];for(const G in U)d(U[G].object),delete U[G];delete O[E.id]}}function P(){y(),o=!0,s!==i&&(s=i,f(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:l,reset:P,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Yg(r,e,t){let n;function i(f){n=f}function s(f,d){r.drawArrays(n,f,d),t.update(d,n,1)}function o(f,d,a){a!==0&&(r.drawArraysInstanced(n,f,d,a),t.update(d,n,a))}function l(f,d,a){if(a===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,d,0,a);let h=0;for(let g=0;g<a;g++)h+=d[g];t.update(h,n,1)}function c(f,d,a,u){if(a===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<f.length;g++)o(f[g],d[g],u[g]);else{h.multiDrawArraysInstancedWEBGL(n,f,0,d,0,u,0,a);let g=0;for(let _=0;_<a;_++)g+=d[_]*u[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=c}function jg(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==Rn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(w){const P=w===Is&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==zn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Qn&&!P)}function c(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const d=c(f);d!==f&&(f=d);const a=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,b=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:l,precision:f,logarithmicDepthBuffer:a,reverseDepthBuffer:u,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:A,maxSamples:b}}function $g(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new ki,l=new De,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(a,u){const h=a.length!==0||u||n!==0||i;return i=u,n=a.length,h},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(a,u){t=d(a,u,0)},this.setState=function(a,u,h){const g=a.clippingPlanes,_=a.clipIntersection,m=a.clipShadows,p=r.get(a);if(!i||g===null||g.length===0||s&&!m)s?d(null):f();else{const v=s?0:n,M=v*4;let x=p.clippingState||null;c.value=x,x=d(g,u,M,h);for(let A=0;A!==M;++A)x[A]=t[A];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function f(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(a,u,h,g){const _=a!==null?a.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=h+_*4,v=u.matrixWorldInverse;l.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=h;M!==_;++M,x+=4)o.copy(a[M]).applyMatrix4(v,l),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Zg(r){let e=new WeakMap;function t(o,l){return l===Qo?o.mapping=Or:l===el&&(o.mapping=Br),o}function n(o){if(o&&o.isTexture){const l=o.mapping;if(l===Qo||l===el)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const f=new Xp(c.height);return f.fromEquirectangularTexture(r,o),e.set(o,f),o.addEventListener("dispose",i),t(f.texture,o.mapping)}else return null}}return o}function i(o){const l=o.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const br=4,bu=[.125,.215,.35,.446,.526,.582],wr=20,wo=new Kf,wu=new Ie;let Ao=null,Ro=0,Co=0,Po=!1;const zi=(1+Math.sqrt(5))/2,xr=1/zi,Au=[new C(-zi,xr,0),new C(zi,xr,0),new C(-xr,0,zi),new C(xr,0,zi),new C(0,zi,-xr),new C(0,zi,xr),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],Kg=new C;class Ru{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:l=Kg}=s;Ao=this._renderer.getRenderTarget(),Ro=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ao,Ro,Co),this._renderer.xr.enabled=Po,e.scissorTest=!1,ca(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Or||e.mapping===Br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ao=this._renderer.getRenderTarget(),Ro=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),Po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Is,format:Rn,colorSpace:kr,depthBuffer:!1},i=Cu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jg(s)),this._blurMaterial=Qg(s,e,t)}return i}_compileMaterial(e){const t=new pt(this._lodPlanes[0],e);this._renderer.compile(t,wo)}_sceneToCubeUV(e,t,n,i,s){const c=new _n(90,1,t,n),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],a=this._renderer,u=a.autoClear,h=a.toneMapping;a.getClearColor(wu),a.toneMapping=xi,a.autoClear=!1;const g=new Qi({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),_=new pt(new Ze,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(wu),m=!0);for(let v=0;v<6;v++){const M=v%3;M===0?(c.up.set(0,f[v],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+d[v],s.y,s.z)):M===1?(c.up.set(0,0,f[v]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+d[v],s.z)):(c.up.set(0,f[v],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+d[v]));const x=this._cubeSize;ca(i,M*x,v>2?x:0,x,x),a.setRenderTarget(i),m&&a.render(_,c),a.render(e,c)}_.geometry.dispose(),_.material.dispose(),a.toneMapping=h,a.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Or||e.mapping===Br;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pu());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new pt(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const c=this._cubeSize;ca(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,wo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=Au[(i-s-1)%Au.length];this._blur(e,s-1,s,o,l)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,l){const c=this._renderer,f=this._blurMaterial,d=3,a=new pt(this._lodPlanes[i],f),u=f.uniforms,h=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*wr-1),_=s/g,m=isFinite(s)?1+Math.floor(d*_):wr;m>wr;const p=[];let v=0;for(let w=0;w<wr;++w){const P=w/_,y=Math.exp(-P*P/2);p.push(y),w===0?v+=y:w<m&&(v+=2*y)}for(let w=0;w<p.length;w++)p[w]=p[w]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",l&&(u.poleAxis.value=l);const{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-n;const x=this._sizeLods[i],A=3*x*(i>M-br?i-M+br:0),b=4*(this._cubeSize-x);ca(t,A,b,3*x,2*x),c.setRenderTarget(t),c.render(a,wo)}}function Jg(r){const e=[],t=[],n=[];let i=r;const s=r-br+1+bu.length;for(let o=0;o<s;o++){const l=Math.pow(2,i);t.push(l);let c=1/l;o>r-br?c=bu[o-r+br-1]:o===0&&(c=0),n.push(c);const f=1/(l-2),d=-f,a=1+f,u=[d,d,a,d,a,a,d,d,a,a,d,a],h=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*h),M=new Float32Array(m*g*h),x=new Float32Array(p*g*h);for(let b=0;b<h;b++){const w=b%3*2/3-1,P=b>2?0:-1,y=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];v.set(y,_*g*b),M.set(u,m*g*b);const E=[b,b,b,b,b,b];x.set(E,p*g*b)}const A=new on;A.setAttribute("position",new On(v,_)),A.setAttribute("uv",new On(M,m)),A.setAttribute("faceIndex",new On(x,p)),e.push(A),i>br&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Cu(r,e,t){const n=new Ji(r,e,t);return n.texture.mapping=Wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ca(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Qg(r,e,t){const n=new Float32Array(wr),i=new C(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:uc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Pu(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Lu(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function uc(){return`

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
	`}function e0(r){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const c=l.mapping,f=c===Qo||c===el,d=c===Or||c===Br;if(f||d){let a=e.get(l);const u=a!==void 0?a.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==u)return t===null&&(t=new Ru(r)),a=f?t.fromEquirectangular(l,a):t.fromCubemap(l,a),a.texture.pmremVersion=l.pmremVersion,e.set(l,a),a.texture;if(a!==void 0)return a.texture;{const h=l.image;return f&&h&&h.height>0||d&&h&&i(h)?(t===null&&(t=new Ru(r)),a=f?t.fromEquirectangular(l):t.fromCubemap(l),a.texture.pmremVersion=l.pmremVersion,e.set(l,a),l.addEventListener("dispose",s),a.texture):null}}}return l}function i(l){let c=0;const f=6;for(let d=0;d<f;d++)l[d]!==void 0&&c++;return c===f}function s(l){const c=l.target;c.removeEventListener("dispose",s);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function t0(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ya("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function n0(r,e,t,n){const i={},s=new WeakMap;function o(a){const u=a.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete i[u.id];const h=s.get(u);h&&(e.remove(h),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function l(a,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function c(a){const u=a.attributes;for(const h in u)e.update(u[h],r.ARRAY_BUFFER)}function f(a){const u=[],h=a.index,g=a.attributes.position;let _=0;if(h!==null){const v=h.array;_=h.version;for(let M=0,x=v.length;M<x;M+=3){const A=v[M+0],b=v[M+1],w=v[M+2];u.push(A,b,b,w,w,A)}}else if(g!==void 0){const v=g.array;_=g.version;for(let M=0,x=v.length/3-1;M<x;M+=3){const A=M+0,b=M+1,w=M+2;u.push(A,b,b,w,w,A)}}else return;const m=new(Of(u)?Vf:Hf)(u,1);m.version=_;const p=s.get(a);p&&e.remove(p),s.set(a,m)}function d(a){const u=s.get(a);if(u){const h=a.index;h!==null&&u.version<h.version&&f(a)}else f(a);return s.get(a)}return{get:l,update:c,getWireframeAttribute:d}}function i0(r,e,t){let n;function i(u){n=u}let s,o;function l(u){s=u.type,o=u.bytesPerElement}function c(u,h){r.drawElements(n,h,s,u*o),t.update(h,n,1)}function f(u,h,g){g!==0&&(r.drawElementsInstanced(n,h,s,u*o,g),t.update(h,n,g))}function d(u,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,u,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,n,1)}function a(u,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)f(u[p]/o,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,s,u,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=h[v]*_[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=a}function r0(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,l){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=l*(s/3);break;case r.LINES:t.lines+=l*(s/2);break;case r.LINE_STRIP:t.lines+=l*(s-1);break;case r.LINE_LOOP:t.lines+=l*s;break;case r.POINTS:t.points+=l*s;break;default:break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function s0(r,e,t){const n=new WeakMap,i=new dt;function s(o,l,c){const f=o.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,a=d!==void 0?d.length:0;let u=n.get(l);if(u===void 0||u.count!==a){let E=function(){P.dispose(),n.delete(l),l.removeEventListener("dispose",E)};var h=E;u!==void 0&&u.texture.dispose();const g=l.morphAttributes.position!==void 0,_=l.morphAttributes.normal!==void 0,m=l.morphAttributes.color!==void 0,p=l.morphAttributes.position||[],v=l.morphAttributes.normal||[],M=l.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let A=l.attributes.position.count*x,b=1;A>e.maxTextureSize&&(b=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const w=new Float32Array(A*b*4*a),P=new Bf(w,A,b,a);P.type=Qn,P.needsUpdate=!0;const y=x*4;for(let L=0;L<a;L++){const O=p[L],U=v[L],G=M[L],q=A*b*4*L;for(let V=0;V<O.count;V++){const Y=V*y;g===!0&&(i.fromBufferAttribute(O,V),w[q+Y+0]=i.x,w[q+Y+1]=i.y,w[q+Y+2]=i.z,w[q+Y+3]=0),_===!0&&(i.fromBufferAttribute(U,V),w[q+Y+4]=i.x,w[q+Y+5]=i.y,w[q+Y+6]=i.z,w[q+Y+7]=0),m===!0&&(i.fromBufferAttribute(G,V),w[q+Y+8]=i.x,w[q+Y+9]=i.y,w[q+Y+10]=i.z,w[q+Y+11]=G.itemSize===4?i.w:1)}}u={count:a,texture:P,size:new Ge(A,b)},n.set(l,u),l.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<f.length;m++)g+=f[m];const _=l.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",_),c.getUniforms().setValue(r,"morphTargetInfluences",f)}c.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function a0(r,e,t,n){let i=new WeakMap;function s(c){const f=n.render.frame,d=c.geometry,a=e.get(c,d);if(i.get(a)!==f&&(e.update(a),i.set(a,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),i.get(c)!==f&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,f))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==f&&(u.update(),i.set(u,f))}return a}function o(){i=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:s,dispose:o}}const Qf=new Bt,Du=new qf(1,1),eh=new Bf,th=new Rp,nh=new Xf,Iu=[],Uu=[],Fu=new Float32Array(16),Nu=new Float32Array(9),Ou=new Float32Array(4);function Zr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Iu[i];if(s===void 0&&(s=new Float32Array(i),Iu[i]=s),e!==0){n.toArray(s,0);for(let o=1,l=0;o!==e;++o)l+=t,r[o].toArray(s,l)}return s}function bt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function wt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Xa(r,e){let t=Uu[e];t===void 0&&(t=new Int32Array(e),Uu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function o0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function l0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;r.uniform2fv(this.addr,e),wt(t,e)}}function c0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;r.uniform3fv(this.addr,e),wt(t,e)}}function u0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;r.uniform4fv(this.addr,e),wt(t,e)}}function f0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,n))return;Ou.set(n),r.uniformMatrix2fv(this.addr,!1,Ou),wt(t,n)}}function h0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,n))return;Nu.set(n),r.uniformMatrix3fv(this.addr,!1,Nu),wt(t,n)}}function d0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,n))return;Fu.set(n),r.uniformMatrix4fv(this.addr,!1,Fu),wt(t,n)}}function p0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function m0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;r.uniform2iv(this.addr,e),wt(t,e)}}function _0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;r.uniform3iv(this.addr,e),wt(t,e)}}function g0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;r.uniform4iv(this.addr,e),wt(t,e)}}function v0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function x0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;r.uniform2uiv(this.addr,e),wt(t,e)}}function y0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;r.uniform3uiv(this.addr,e),wt(t,e)}}function M0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;r.uniform4uiv(this.addr,e),wt(t,e)}}function S0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Du.compareFunction=Nf,s=Du):s=Qf,t.setTexture2D(e||s,i)}function E0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||th,i)}function T0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||nh,i)}function b0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||eh,i)}function w0(r){switch(r){case 5126:return o0;case 35664:return l0;case 35665:return c0;case 35666:return u0;case 35674:return f0;case 35675:return h0;case 35676:return d0;case 5124:case 35670:return p0;case 35667:case 35671:return m0;case 35668:case 35672:return _0;case 35669:case 35673:return g0;case 5125:return v0;case 36294:return x0;case 36295:return y0;case 36296:return M0;case 35678:case 36198:case 36298:case 36306:case 35682:return S0;case 35679:case 36299:case 36307:return E0;case 35680:case 36300:case 36308:case 36293:return T0;case 36289:case 36303:case 36311:case 36292:return b0}}function A0(r,e){r.uniform1fv(this.addr,e)}function R0(r,e){const t=Zr(e,this.size,2);r.uniform2fv(this.addr,t)}function C0(r,e){const t=Zr(e,this.size,3);r.uniform3fv(this.addr,t)}function P0(r,e){const t=Zr(e,this.size,4);r.uniform4fv(this.addr,t)}function L0(r,e){const t=Zr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function D0(r,e){const t=Zr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function I0(r,e){const t=Zr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function U0(r,e){r.uniform1iv(this.addr,e)}function F0(r,e){r.uniform2iv(this.addr,e)}function N0(r,e){r.uniform3iv(this.addr,e)}function O0(r,e){r.uniform4iv(this.addr,e)}function B0(r,e){r.uniform1uiv(this.addr,e)}function k0(r,e){r.uniform2uiv(this.addr,e)}function z0(r,e){r.uniform3uiv(this.addr,e)}function H0(r,e){r.uniform4uiv(this.addr,e)}function V0(r,e,t){const n=this.cache,i=e.length,s=Xa(t,i);bt(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Qf,s[o])}function G0(r,e,t){const n=this.cache,i=e.length,s=Xa(t,i);bt(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||th,s[o])}function W0(r,e,t){const n=this.cache,i=e.length,s=Xa(t,i);bt(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||nh,s[o])}function X0(r,e,t){const n=this.cache,i=e.length,s=Xa(t,i);bt(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||eh,s[o])}function q0(r){switch(r){case 5126:return A0;case 35664:return R0;case 35665:return C0;case 35666:return P0;case 35674:return L0;case 35675:return D0;case 35676:return I0;case 5124:case 35670:return U0;case 35667:case 35671:return F0;case 35668:case 35672:return N0;case 35669:case 35673:return O0;case 5125:return B0;case 36294:return k0;case 36295:return z0;case 36296:return H0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return G0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return X0}}class Y0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=w0(t.type)}}class j0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=q0(t.type)}}class $0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const l=i[s];l.setValue(e,t[l.id],n)}}}const Lo=/(\w+)(\])?(\[|\.)?/g;function Bu(r,e){r.seq.push(e),r.map[e.id]=e}function Z0(r,e,t){const n=r.name,i=n.length;for(Lo.lastIndex=0;;){const s=Lo.exec(n),o=Lo.lastIndex;let l=s[1];const c=s[2]==="]",f=s[3];if(c&&(l=l|0),f===void 0||f==="["&&o+2===i){Bu(t,f===void 0?new Y0(l,r,e):new j0(l,r,e));break}else{let a=t.map[l];a===void 0&&(a=new $0(l),Bu(t,a)),t=a}}}class Sa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Z0(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const l=t[s],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function ku(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const K0=37297;let J0=0;function Q0(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}const zu=new De;function ev(r){Ne._getMatrix(zu,Ne.workingColorSpace,r);const e=`mat3( ${zu.elements.map(t=>t.toFixed(4))} )`;switch(Ne.getTransfer(r)){case Ra:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return[e,"LinearTransferOETF"]}}function Hu(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Q0(r.getShaderSource(e),o)}else return i}function tv(r,e){const t=ev(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function nv(r,e){let t;switch(e){case ep:t="Linear";break;case tp:t="Reinhard";break;case np:t="Cineon";break;case ip:t="ACESFilmic";break;case sp:t="AgX";break;case ap:t="Neutral";break;case rp:t="Custom";break;default:t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ua=new C;function iv(){Ne.getLuminanceCoefficients(ua);const r=ua.x.toFixed(4),e=ua.y.toFixed(4),t=ua.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(os).join(`
`)}function sv(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function av(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let l=1;s.type===r.FLOAT_MAT2&&(l=2),s.type===r.FLOAT_MAT3&&(l=3),s.type===r.FLOAT_MAT4&&(l=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:l}}return t}function os(r){return r!==""}function Vu(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ov=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pl(r){return r.replace(ov,cv)}const lv=new Map;function cv(r,e){let t=Fe[e];if(t===void 0){const n=lv.get(e);if(n!==void 0)t=Fe[n];else throw new Error("Can not resolve #include <"+e+">")}return Pl(t)}const uv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wu(r){return r.replace(uv,fv)}function fv(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Xu(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hv(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===wf?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Id?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function dv(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Or:case Br:e="ENVMAP_TYPE_CUBE";break;case Wa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pv(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Br:e="ENVMAP_MODE_REFRACTION";break}return e}function mv(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Kl:e="ENVMAP_BLENDING_MULTIPLY";break;case Jd:e="ENVMAP_BLENDING_MIX";break;case Qd:e="ENVMAP_BLENDING_ADD";break}return e}function _v(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function gv(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,l=t.fragmentShader;const c=hv(t),f=dv(t),d=pv(t),a=mv(t),u=_v(t),h=rv(t),g=sv(s),_=i.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(os).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(os).join(`
`),p.length>0&&(p+=`
`)):(m=[Xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(os).join(`
`),p=[Xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",t.envMap?"#define "+a:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?Fe.tonemapping_pars_fragment:"",t.toneMapping!==xi?nv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,tv("linearToOutputTexel",t.outputColorSpace),iv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(os).join(`
`)),o=Pl(o),o=Vu(o,t),o=Gu(o,t),l=Pl(l),l=Vu(l,t),l=Gu(l,t),o=Wu(o),l=Wu(l),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=v+m+o,x=v+p+l,A=ku(i,i.VERTEX_SHADER,M),b=ku(i,i.FRAGMENT_SHADER,x);i.attachShader(_,A),i.attachShader(_,b),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(L){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(_).trim(),U=i.getShaderInfoLog(A).trim(),G=i.getShaderInfoLog(b).trim();let q=!0,V=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,b);else{const Y=Hu(i,A,"vertex"),H=Hu(i,b,"fragment")}else O!==""||(U===""||G==="")&&(V=!1);V&&(L.diagnostics={runnable:q,programLog:O,vertexShader:{log:U,prefix:m},fragmentShader:{log:G,prefix:p}})}i.deleteShader(A),i.deleteShader(b),P=new Sa(i,_),y=av(i,_)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(_,K0)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=J0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=b,this}let vv=0;class xv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new yv(e),t.set(e,n)),n}}class yv{constructor(e){this.id=vv++,this.code=e,this.usedTimes=0}}function Mv(r,e,t,n,i,s,o){const l=new kf,c=new xv,f=new Set,d=[],a=i.logarithmicDepthBuffer,u=i.vertexTextures;let h=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return f.add(y),y===0?"uv":`uv${y}`}function m(y,E,L,O,U){const G=O.fog,q=U.geometry,V=y.isMeshStandardMaterial?O.environment:null,Y=(y.isMeshStandardMaterial?t:e).get(y.envMap||V),H=Y&&Y.mapping===Wa?Y.image.height:null,te=g[y.type];y.precision!==null&&(h=i.getMaxPrecision(y.precision),y.precision);const ie=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,pe=ie!==void 0?ie.length:0;let Me=0;q.morphAttributes.position!==void 0&&(Me=1),q.morphAttributes.normal!==void 0&&(Me=2),q.morphAttributes.color!==void 0&&(Me=3);let ke,W,ee,me;if(te){const Ke=Dn[te];ke=Ke.vertexShader,W=Ke.fragmentShader}else ke=y.vertexShader,W=y.fragmentShader,c.update(y),ee=c.getVertexShaderID(y),me=c.getFragmentShaderID(y);const se=r.getRenderTarget(),Se=r.state.buffers.depth.getReversed(),Ye=U.isInstancedMesh===!0,we=U.isBatchedMesh===!0,gt=!!y.map,at=!!y.matcap,ze=!!Y,D=!!y.aoMap,un=!!y.lightMap,We=!!y.bumpMap,He=!!y.normalMap,ve=!!y.displacementMap,nt=!!y.emissiveMap,ge=!!y.metalnessMap,R=!!y.roughnessMap,S=y.anisotropy>0,B=y.clearcoat>0,$=y.dispersion>0,K=y.iridescence>0,j=y.sheen>0,_e=y.transmission>0,ae=S&&!!y.anisotropyMap,Ee=B&&!!y.clearcoatMap,Te=B&&!!y.clearcoatNormalMap,J=B&&!!y.clearcoatRoughnessMap,fe=K&&!!y.iridescenceMap,be=K&&!!y.iridescenceThicknessMap,Re=j&&!!y.sheenColorMap,he=j&&!!y.sheenRoughnessMap,Ve=!!y.specularMap,Ue=!!y.specularColorMap,tt=!!y.specularIntensityMap,N=_e&&!!y.transmissionMap,oe=_e&&!!y.thicknessMap,X=!!y.gradientMap,Z=!!y.alphaMap,ce=y.alphaTest>0,le=!!y.alphaHash,Le=!!y.extensions;let ut=xi;y.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ut=r.toneMapping);const It={shaderID:te,shaderType:y.type,shaderName:y.name,vertexShader:ke,fragmentShader:W,defines:y.defines,customVertexShaderID:ee,customFragmentShaderID:me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:we,batchingColor:we&&U._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&U.instanceColor!==null,instancingMorph:Ye&&U.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:se===null?r.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:kr,alphaToCoverage:!!y.alphaToCoverage,map:gt,matcap:at,envMap:ze,envMapMode:ze&&Y.mapping,envMapCubeUVHeight:H,aoMap:D,lightMap:un,bumpMap:We,normalMap:He,displacementMap:u&&ve,emissiveMap:nt,normalMapObjectSpace:He&&y.normalMapType===up,normalMapTangentSpace:He&&y.normalMapType===rc,metalnessMap:ge,roughnessMap:R,anisotropy:S,anisotropyMap:ae,clearcoat:B,clearcoatMap:Ee,clearcoatNormalMap:Te,clearcoatRoughnessMap:J,dispersion:$,iridescence:K,iridescenceMap:fe,iridescenceThicknessMap:be,sheen:j,sheenColorMap:Re,sheenRoughnessMap:he,specularMap:Ve,specularColorMap:Ue,specularIntensityMap:tt,transmission:_e,transmissionMap:N,thicknessMap:oe,gradientMap:X,opaque:y.transparent===!1&&y.blending===Lr&&y.alphaToCoverage===!1,alphaMap:Z,alphaTest:ce,alphaHash:le,combine:y.combine,mapUv:gt&&_(y.map.channel),aoMapUv:D&&_(y.aoMap.channel),lightMapUv:un&&_(y.lightMap.channel),bumpMapUv:We&&_(y.bumpMap.channel),normalMapUv:He&&_(y.normalMap.channel),displacementMapUv:ve&&_(y.displacementMap.channel),emissiveMapUv:nt&&_(y.emissiveMap.channel),metalnessMapUv:ge&&_(y.metalnessMap.channel),roughnessMapUv:R&&_(y.roughnessMap.channel),anisotropyMapUv:ae&&_(y.anisotropyMap.channel),clearcoatMapUv:Ee&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Te&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:be&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:he&&_(y.sheenRoughnessMap.channel),specularMapUv:Ve&&_(y.specularMap.channel),specularColorMapUv:Ue&&_(y.specularColorMap.channel),specularIntensityMapUv:tt&&_(y.specularIntensityMap.channel),transmissionMapUv:N&&_(y.transmissionMap.channel),thicknessMapUv:oe&&_(y.thicknessMap.channel),alphaMapUv:Z&&_(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(He||S),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!q.attributes.uv&&(gt||Z),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:a,reverseDepthBuffer:Se,skinning:U.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Me,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:ut,decodeVideoTexture:gt&&y.map.isVideoTexture===!0&&Ne.getTransfer(y.map.colorSpace)===Je,decodeVideoTextureEmissive:nt&&y.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(y.emissiveMap.colorSpace)===Je,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===In,flipSided:y.side===Yt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Le&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&y.extensions.multiDraw===!0||we)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return It.vertexUv1s=f.has(1),It.vertexUv2s=f.has(2),It.vertexUv3s=f.has(3),f.clear(),It}function p(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)E.push(L),E.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(v(E,y),M(E,y),E.push(r.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function v(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function M(y,E){l.disableAll(),E.supportsVertexTextures&&l.enable(0),E.instancing&&l.enable(1),E.instancingColor&&l.enable(2),E.instancingMorph&&l.enable(3),E.matcap&&l.enable(4),E.envMap&&l.enable(5),E.normalMapObjectSpace&&l.enable(6),E.normalMapTangentSpace&&l.enable(7),E.clearcoat&&l.enable(8),E.iridescence&&l.enable(9),E.alphaTest&&l.enable(10),E.vertexColors&&l.enable(11),E.vertexAlphas&&l.enable(12),E.vertexUv1s&&l.enable(13),E.vertexUv2s&&l.enable(14),E.vertexUv3s&&l.enable(15),E.vertexTangents&&l.enable(16),E.anisotropy&&l.enable(17),E.alphaHash&&l.enable(18),E.batching&&l.enable(19),E.dispersion&&l.enable(20),E.batchingColor&&l.enable(21),y.push(l.mask),l.disableAll(),E.fog&&l.enable(0),E.useFog&&l.enable(1),E.flatShading&&l.enable(2),E.logarithmicDepthBuffer&&l.enable(3),E.reverseDepthBuffer&&l.enable(4),E.skinning&&l.enable(5),E.morphTargets&&l.enable(6),E.morphNormals&&l.enable(7),E.morphColors&&l.enable(8),E.premultipliedAlpha&&l.enable(9),E.shadowMapEnabled&&l.enable(10),E.doubleSided&&l.enable(11),E.flipSided&&l.enable(12),E.useDepthPacking&&l.enable(13),E.dithering&&l.enable(14),E.transmission&&l.enable(15),E.sheen&&l.enable(16),E.opaque&&l.enable(17),E.pointsUvs&&l.enable(18),E.decodeVideoTexture&&l.enable(19),E.decodeVideoTextureEmissive&&l.enable(20),E.alphaToCoverage&&l.enable(21),y.push(l.mask)}function x(y){const E=g[y.type];let L;if(E){const O=Dn[E];L=Hp.clone(O.uniforms)}else L=y.uniforms;return L}function A(y,E){let L;for(let O=0,U=d.length;O<U;O++){const G=d[O];if(G.cacheKey===E){L=G,++L.usedTimes;break}}return L===void 0&&(L=new gv(r,E,y,s),d.push(L)),L}function b(y){if(--y.usedTimes===0){const E=d.indexOf(y);d[E]=d[d.length-1],d.pop(),y.destroy()}}function w(y){c.remove(y)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:A,releaseProgram:b,releaseShaderCache:w,programs:d,dispose:P}}function Sv(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let l=r.get(o);return l===void 0&&(l={},r.set(o,l)),l}function n(o){r.delete(o)}function i(o,l,c){r.get(o)[l]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Ev(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function qu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Yu(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(a,u,h,g,_,m){let p=r[e];return p===void 0?(p={id:a.id,object:a,geometry:u,material:h,groupOrder:g,renderOrder:a.renderOrder,z:_,group:m},r[e]=p):(p.id=a.id,p.object=a,p.geometry=u,p.material=h,p.groupOrder=g,p.renderOrder=a.renderOrder,p.z=_,p.group=m),e++,p}function l(a,u,h,g,_,m){const p=o(a,u,h,g,_,m);h.transmission>0?n.push(p):h.transparent===!0?i.push(p):t.push(p)}function c(a,u,h,g,_,m){const p=o(a,u,h,g,_,m);h.transmission>0?n.unshift(p):h.transparent===!0?i.unshift(p):t.unshift(p)}function f(a,u){t.length>1&&t.sort(a||Ev),n.length>1&&n.sort(u||qu),i.length>1&&i.sort(u||qu)}function d(){for(let a=e,u=r.length;a<u;a++){const h=r[a];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:f}}function Tv(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Yu,r.set(n,[o])):i>=s.length?(o=new Yu,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function bv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ie};break;case"SpotLight":t={position:new C,direction:new C,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new C,halfWidth:new C,halfHeight:new C};break}return r[e.id]=t,t}}}function wv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Av=0;function Rv(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Cv(r){const e=new bv,t=wv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new C);const i=new C,s=new st,o=new st;function l(f){let d=0,a=0,u=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,v=0,M=0,x=0,A=0,b=0,w=0;f.sort(Rv);for(let y=0,E=f.length;y<E;y++){const L=f[y],O=L.color,U=L.intensity,G=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=O.r*U,a+=O.g*U,u+=O.b*U;else if(L.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(L.sh.coefficients[V],U);w++}else if(L.isDirectionalLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Y=L.shadow,H=t.get(L);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.directionalShadow[h]=H,n.directionalShadowMap[h]=q,n.directionalShadowMatrix[h]=L.shadow.matrix,v++}n.directional[h]=V,h++}else if(L.isSpotLight){const V=e.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(O).multiplyScalar(U),V.distance=G,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,n.spot[_]=V;const Y=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,Y.updateMatrices(L),L.castShadow&&b++),n.spotLightMatrix[_]=Y.matrix,L.castShadow){const H=t.get(L);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=q,x++}_++}else if(L.isRectAreaLight){const V=e.get(L);V.color.copy(O).multiplyScalar(U),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=V,m++}else if(L.isPointLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){const Y=L.shadow,H=t.get(L);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=L.shadow.matrix,M++}n.point[g]=V,g++}else if(L.isHemisphereLight){const V=e.get(L);V.skyColor.copy(L.color).multiplyScalar(U),V.groundColor.copy(L.groundColor).multiplyScalar(U),n.hemi[p]=V,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=a,n.ambient[2]=u;const P=n.hash;(P.directionalLength!==h||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==v||P.numPointShadows!==M||P.numSpotShadows!==x||P.numSpotMaps!==A||P.numLightProbes!==w)&&(n.directional.length=h,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,P.directionalLength=h,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=v,P.numPointShadows=M,P.numSpotShadows=x,P.numSpotMaps=A,P.numLightProbes=w,n.version=Av++)}function c(f,d){let a=0,u=0,h=0,g=0,_=0;const m=d.matrixWorldInverse;for(let p=0,v=f.length;p<v;p++){const M=f[p];if(M.isDirectionalLight){const x=n.directional[a];x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),a++}else if(M.isSpotLight){const x=n.spot[h];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),h++}else if(M.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const x=n.point[u];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:l,setupView:c,state:n}}function ju(r){const e=new Cv(r),t=[],n=[];function i(d){f.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function o(d){n.push(d)}function l(){e.setup(t)}function c(d){e.setupView(t,d)}const f={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:f,setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function Pv(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let l;return o===void 0?(l=new ju(r),e.set(i,[l])):s>=o.length?(l=new ju(r),o.push(l)):l=o[s],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const Lv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Iv(r,e,t){let n=new oc;const i=new Ge,s=new Ge,o=new dt,l=new Jp({depthPacking:cp}),c=new Qp,f={},d=t.maxTextureSize,a={[ni]:Yt,[Yt]:ni,[In]:In},u=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:Lv,fragmentShader:Dv}),h=u.clone();h.defines.HORIZONTAL_PASS=1;const g=new on;g.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new pt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wf;let p=this.type;this.render=function(b,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const y=r.getRenderTarget(),E=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),O=r.state;O.setBlending(vi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const U=p!==Zn&&this.type===Zn,G=p===Zn&&this.type!==Zn;for(let q=0,V=b.length;q<V;q++){const Y=b[q],H=Y.shadow;if(H===void 0||H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const te=H.getFrameExtents();if(i.multiply(te),s.copy(H.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/te.x),i.x=s.x*te.x,H.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/te.y),i.y=s.y*te.y,H.mapSize.y=s.y)),H.map===null||U===!0||G===!0){const pe=this.type!==Zn?{minFilter:Cn,magFilter:Cn}:{};H.map!==null&&H.map.dispose(),H.map=new Ji(i.x,i.y,pe),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const ie=H.getViewportCount();for(let pe=0;pe<ie;pe++){const Me=H.getViewport(pe);o.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),O.viewport(o),H.updateMatrices(Y,pe),n=H.getFrustum(),x(w,P,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===Zn&&v(H,P),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(y,E,L)};function v(b,w){const P=e.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,h.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ji(i.x,i.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(w,null,P,u,_,null),h.uniforms.shadow_pass.value=b.mapPass.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(w,null,P,h,_,null)}function M(b,w,P,y){let E=null;const L=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)E=L;else if(E=P.isPointLight===!0?c:l,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const O=E.uuid,U=w.uuid;let G=f[O];G===void 0&&(G={},f[O]=G);let q=G[U];q===void 0&&(q=E.clone(),G[U]=q,w.addEventListener("dispose",A)),E=q}if(E.visible=w.visible,E.wireframe=w.wireframe,y===Zn?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:a[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const O=r.properties.get(E);O.light=P}return E}function x(b,w,P,y,E){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===Zn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const U=e.update(b),G=b.material;if(Array.isArray(G)){const q=U.groups;for(let V=0,Y=q.length;V<Y;V++){const H=q[V],te=G[H.materialIndex];if(te&&te.visible){const ie=M(b,te,y,E);b.onBeforeShadow(r,b,w,P,U,ie,H),r.renderBufferDirect(P,null,U,ie,b,H),b.onAfterShadow(r,b,w,P,U,ie,H)}}}else if(G.visible){const q=M(b,G,y,E);b.onBeforeShadow(r,b,w,P,U,q,null),r.renderBufferDirect(P,null,U,q,b,null),b.onAfterShadow(r,b,w,P,U,q,null)}}const O=b.children;for(let U=0,G=O.length;U<G;U++)x(O[U],w,P,y,E)}function A(b){b.target.removeEventListener("dispose",A);for(const P in f){const y=f[P],E=b.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}const Uv={[qo]:Yo,[jo]:Ko,[$o]:Jo,[Nr]:Zo,[Yo]:qo,[Ko]:jo,[Jo]:$o,[Zo]:Nr};function Fv(r,e){function t(){let N=!1;const oe=new dt;let X=null;const Z=new dt(0,0,0,0);return{setMask:function(ce){X!==ce&&!N&&(r.colorMask(ce,ce,ce,ce),X=ce)},setLocked:function(ce){N=ce},setClear:function(ce,le,Le,ut,It){It===!0&&(ce*=ut,le*=ut,Le*=ut),oe.set(ce,le,Le,ut),Z.equals(oe)===!1&&(r.clearColor(ce,le,Le,ut),Z.copy(oe))},reset:function(){N=!1,X=null,Z.set(-1,0,0,0)}}}function n(){let N=!1,oe=!1,X=null,Z=null,ce=null;return{setReversed:function(le){if(oe!==le){const Le=e.get("EXT_clip_control");le?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),oe=le;const ut=ce;ce=null,this.setClear(ut)}},getReversed:function(){return oe},setTest:function(le){le?se(r.DEPTH_TEST):Se(r.DEPTH_TEST)},setMask:function(le){X!==le&&!N&&(r.depthMask(le),X=le)},setFunc:function(le){if(oe&&(le=Uv[le]),Z!==le){switch(le){case qo:r.depthFunc(r.NEVER);break;case Yo:r.depthFunc(r.ALWAYS);break;case jo:r.depthFunc(r.LESS);break;case Nr:r.depthFunc(r.LEQUAL);break;case $o:r.depthFunc(r.EQUAL);break;case Zo:r.depthFunc(r.GEQUAL);break;case Ko:r.depthFunc(r.GREATER);break;case Jo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Z=le}},setLocked:function(le){N=le},setClear:function(le){ce!==le&&(oe&&(le=1-le),r.clearDepth(le),ce=le)},reset:function(){N=!1,X=null,Z=null,ce=null,oe=!1}}}function i(){let N=!1,oe=null,X=null,Z=null,ce=null,le=null,Le=null,ut=null,It=null;return{setTest:function(Ke){N||(Ke?se(r.STENCIL_TEST):Se(r.STENCIL_TEST))},setMask:function(Ke){oe!==Ke&&!N&&(r.stencilMask(Ke),oe=Ke)},setFunc:function(Ke,yn,Gn){(X!==Ke||Z!==yn||ce!==Gn)&&(r.stencilFunc(Ke,yn,Gn),X=Ke,Z=yn,ce=Gn)},setOp:function(Ke,yn,Gn){(le!==Ke||Le!==yn||ut!==Gn)&&(r.stencilOp(Ke,yn,Gn),le=Ke,Le=yn,ut=Gn)},setLocked:function(Ke){N=Ke},setClear:function(Ke){It!==Ke&&(r.clearStencil(Ke),It=Ke)},reset:function(){N=!1,oe=null,X=null,Z=null,ce=null,le=null,Le=null,ut=null,It=null}}}const s=new t,o=new n,l=new i,c=new WeakMap,f=new WeakMap;let d={},a={},u=new WeakMap,h=[],g=null,_=!1,m=null,p=null,v=null,M=null,x=null,A=null,b=null,w=new Ie(0,0,0),P=0,y=!1,E=null,L=null,O=null,U=null,G=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Y=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),V=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),V=Y>=2);let te=null,ie={};const pe=r.getParameter(r.SCISSOR_BOX),Me=r.getParameter(r.VIEWPORT),ke=new dt().fromArray(pe),W=new dt().fromArray(Me);function ee(N,oe,X,Z){const ce=new Uint8Array(4),le=r.createTexture();r.bindTexture(N,le),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Le=0;Le<X;Le++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(oe,0,r.RGBA,1,1,Z,0,r.RGBA,r.UNSIGNED_BYTE,ce):r.texImage2D(oe+Le,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ce);return le}const me={};me[r.TEXTURE_2D]=ee(r.TEXTURE_2D,r.TEXTURE_2D,1),me[r.TEXTURE_CUBE_MAP]=ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[r.TEXTURE_2D_ARRAY]=ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),me[r.TEXTURE_3D]=ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),l.setClear(0),se(r.DEPTH_TEST),o.setFunc(Nr),We(!1),He(Xc),se(r.CULL_FACE),D(vi);function se(N){d[N]!==!0&&(r.enable(N),d[N]=!0)}function Se(N){d[N]!==!1&&(r.disable(N),d[N]=!1)}function Ye(N,oe){return a[N]!==oe?(r.bindFramebuffer(N,oe),a[N]=oe,N===r.DRAW_FRAMEBUFFER&&(a[r.FRAMEBUFFER]=oe),N===r.FRAMEBUFFER&&(a[r.DRAW_FRAMEBUFFER]=oe),!0):!1}function we(N,oe){let X=h,Z=!1;if(N){X=u.get(oe),X===void 0&&(X=[],u.set(oe,X));const ce=N.textures;if(X.length!==ce.length||X[0]!==r.COLOR_ATTACHMENT0){for(let le=0,Le=ce.length;le<Le;le++)X[le]=r.COLOR_ATTACHMENT0+le;X.length=ce.length,Z=!0}}else X[0]!==r.BACK&&(X[0]=r.BACK,Z=!0);Z&&r.drawBuffers(X)}function gt(N){return g!==N?(r.useProgram(N),g=N,!0):!1}const at={[Vi]:r.FUNC_ADD,[Fd]:r.FUNC_SUBTRACT,[Nd]:r.FUNC_REVERSE_SUBTRACT};at[Od]=r.MIN,at[Bd]=r.MAX;const ze={[kd]:r.ZERO,[zd]:r.ONE,[Hd]:r.SRC_COLOR,[Wo]:r.SRC_ALPHA,[Yd]:r.SRC_ALPHA_SATURATE,[Xd]:r.DST_COLOR,[Gd]:r.DST_ALPHA,[Vd]:r.ONE_MINUS_SRC_COLOR,[Xo]:r.ONE_MINUS_SRC_ALPHA,[qd]:r.ONE_MINUS_DST_COLOR,[Wd]:r.ONE_MINUS_DST_ALPHA,[jd]:r.CONSTANT_COLOR,[$d]:r.ONE_MINUS_CONSTANT_COLOR,[Zd]:r.CONSTANT_ALPHA,[Kd]:r.ONE_MINUS_CONSTANT_ALPHA};function D(N,oe,X,Z,ce,le,Le,ut,It,Ke){if(N===vi){_===!0&&(Se(r.BLEND),_=!1);return}if(_===!1&&(se(r.BLEND),_=!0),N!==Ud){if(N!==m||Ke!==y){if((p!==Vi||x!==Vi)&&(r.blendEquation(r.FUNC_ADD),p=Vi,x=Vi),Ke)switch(N){case Lr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case qc:r.blendFunc(r.ONE,r.ONE);break;case Yc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:break}else switch(N){case Lr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case qc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Yc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:break}v=null,M=null,A=null,b=null,w.set(0,0,0),P=0,m=N,y=Ke}return}ce=ce||oe,le=le||X,Le=Le||Z,(oe!==p||ce!==x)&&(r.blendEquationSeparate(at[oe],at[ce]),p=oe,x=ce),(X!==v||Z!==M||le!==A||Le!==b)&&(r.blendFuncSeparate(ze[X],ze[Z],ze[le],ze[Le]),v=X,M=Z,A=le,b=Le),(ut.equals(w)===!1||It!==P)&&(r.blendColor(ut.r,ut.g,ut.b,It),w.copy(ut),P=It),m=N,y=!1}function un(N,oe){N.side===In?Se(r.CULL_FACE):se(r.CULL_FACE);let X=N.side===Yt;oe&&(X=!X),We(X),N.blending===Lr&&N.transparent===!1?D(vi):D(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const Z=N.stencilWrite;l.setTest(Z),Z&&(l.setMask(N.stencilWriteMask),l.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),l.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),nt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?se(r.SAMPLE_ALPHA_TO_COVERAGE):Se(r.SAMPLE_ALPHA_TO_COVERAGE)}function We(N){E!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),E=N)}function He(N){N!==Ld?(se(r.CULL_FACE),N!==L&&(N===Xc?r.cullFace(r.BACK):N===Dd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Se(r.CULL_FACE),L=N}function ve(N){N!==O&&(V&&r.lineWidth(N),O=N)}function nt(N,oe,X){N?(se(r.POLYGON_OFFSET_FILL),(U!==oe||G!==X)&&(r.polygonOffset(oe,X),U=oe,G=X)):Se(r.POLYGON_OFFSET_FILL)}function ge(N){N?se(r.SCISSOR_TEST):Se(r.SCISSOR_TEST)}function R(N){N===void 0&&(N=r.TEXTURE0+q-1),te!==N&&(r.activeTexture(N),te=N)}function S(N,oe,X){X===void 0&&(te===null?X=r.TEXTURE0+q-1:X=te);let Z=ie[X];Z===void 0&&(Z={type:void 0,texture:void 0},ie[X]=Z),(Z.type!==N||Z.texture!==oe)&&(te!==X&&(r.activeTexture(X),te=X),r.bindTexture(N,oe||me[N]),Z.type=N,Z.texture=oe)}function B(){const N=ie[te];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function $(){try{r.compressedTexImage2D(...arguments)}catch{}}function K(){try{r.compressedTexImage3D(...arguments)}catch{}}function j(){try{r.texSubImage2D(...arguments)}catch{}}function _e(){try{r.texSubImage3D(...arguments)}catch{}}function ae(){try{r.compressedTexSubImage2D(...arguments)}catch{}}function Ee(){try{r.compressedTexSubImage3D(...arguments)}catch{}}function Te(){try{r.texStorage2D(...arguments)}catch{}}function J(){try{r.texStorage3D(...arguments)}catch{}}function fe(){try{r.texImage2D(...arguments)}catch{}}function be(){try{r.texImage3D(...arguments)}catch{}}function Re(N){ke.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),ke.copy(N))}function he(N){W.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),W.copy(N))}function Ve(N,oe){let X=f.get(oe);X===void 0&&(X=new WeakMap,f.set(oe,X));let Z=X.get(N);Z===void 0&&(Z=r.getUniformBlockIndex(oe,N.name),X.set(N,Z))}function Ue(N,oe){const Z=f.get(oe).get(N);c.get(oe)!==Z&&(r.uniformBlockBinding(oe,Z,N.__bindingPointIndex),c.set(oe,Z))}function tt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},te=null,ie={},a={},u=new WeakMap,h=[],g=null,_=!1,m=null,p=null,v=null,M=null,x=null,A=null,b=null,w=new Ie(0,0,0),P=0,y=!1,E=null,L=null,O=null,U=null,G=null,ke.set(0,0,r.canvas.width,r.canvas.height),W.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),l.reset()}return{buffers:{color:s,depth:o,stencil:l},enable:se,disable:Se,bindFramebuffer:Ye,drawBuffers:we,useProgram:gt,setBlending:D,setMaterial:un,setFlipSided:We,setCullFace:He,setLineWidth:ve,setPolygonOffset:nt,setScissorTest:ge,activeTexture:R,bindTexture:S,unbindTexture:B,compressedTexImage2D:$,compressedTexImage3D:K,texImage2D:fe,texImage3D:be,updateUBOMapping:Ve,uniformBlockBinding:Ue,texStorage2D:Te,texStorage3D:J,texSubImage2D:j,texSubImage3D:_e,compressedTexSubImage2D:ae,compressedTexSubImage3D:Ee,scissor:Re,viewport:he,reset:tt}}function Nv(r,e,t,n,i,s,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Ge,d=new WeakMap;let a;const u=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return h?new OffscreenCanvas(R,S):ys("canvas")}function _(R,S,B){let $=1;const K=ge(R);if((K.width>B||K.height>B)&&($=B/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor($*K.width),_e=Math.floor($*K.height);a===void 0&&(a=g(j,_e));const ae=S?g(j,_e):a;return ae.width=j,ae.height=_e,ae.getContext("2d").drawImage(R,0,0,j,_e),ae}else return"data"in R,R;return R}function m(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(R,S,B,$,K=!1){if(R!==null&&r[R]!==void 0)return r[R];let j=S;if(S===r.RED&&(B===r.FLOAT&&(j=r.R32F),B===r.HALF_FLOAT&&(j=r.R16F),B===r.UNSIGNED_BYTE&&(j=r.R8)),S===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(j=r.R8UI),B===r.UNSIGNED_SHORT&&(j=r.R16UI),B===r.UNSIGNED_INT&&(j=r.R32UI),B===r.BYTE&&(j=r.R8I),B===r.SHORT&&(j=r.R16I),B===r.INT&&(j=r.R32I)),S===r.RG&&(B===r.FLOAT&&(j=r.RG32F),B===r.HALF_FLOAT&&(j=r.RG16F),B===r.UNSIGNED_BYTE&&(j=r.RG8)),S===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(j=r.RG8UI),B===r.UNSIGNED_SHORT&&(j=r.RG16UI),B===r.UNSIGNED_INT&&(j=r.RG32UI),B===r.BYTE&&(j=r.RG8I),B===r.SHORT&&(j=r.RG16I),B===r.INT&&(j=r.RG32I)),S===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&(j=r.RGB8UI),B===r.UNSIGNED_SHORT&&(j=r.RGB16UI),B===r.UNSIGNED_INT&&(j=r.RGB32UI),B===r.BYTE&&(j=r.RGB8I),B===r.SHORT&&(j=r.RGB16I),B===r.INT&&(j=r.RGB32I)),S===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),B===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),B===r.UNSIGNED_INT&&(j=r.RGBA32UI),B===r.BYTE&&(j=r.RGBA8I),B===r.SHORT&&(j=r.RGBA16I),B===r.INT&&(j=r.RGBA32I)),S===r.RGB&&B===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),S===r.RGBA){const _e=K?Ra:Ne.getTransfer($);B===r.FLOAT&&(j=r.RGBA32F),B===r.HALF_FLOAT&&(j=r.RGBA16F),B===r.UNSIGNED_BYTE&&(j=_e===Je?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(R,S){let B;return R?S===null||S===Ki||S===gs?B=r.DEPTH24_STENCIL8:S===Qn?B=r.DEPTH32F_STENCIL8:S===_s&&(B=r.DEPTH24_STENCIL8):S===null||S===Ki||S===gs?B=r.DEPTH_COMPONENT24:S===Qn?B=r.DEPTH_COMPONENT32F:S===_s&&(B=r.DEPTH_COMPONENT16),B}function A(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Cn&&R.minFilter!==vn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function b(R){const S=R.target;S.removeEventListener("dispose",b),P(S),S.isVideoTexture&&d.delete(S)}function w(R){const S=R.target;S.removeEventListener("dispose",w),E(S)}function P(R){const S=n.get(R);if(S.__webglInit===void 0)return;const B=R.source,$=u.get(B);if($){const K=$[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&y(R),Object.keys($).length===0&&u.delete(B)}n.remove(R)}function y(R){const S=n.get(R);r.deleteTexture(S.__webglTexture);const B=R.source,$=u.get(B);delete $[S.__cacheKey],o.memory.textures--}function E(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let K=0;K<S.__webglFramebuffer[$].length;K++)r.deleteFramebuffer(S.__webglFramebuffer[$][K]);else r.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)r.deleteFramebuffer(S.__webglFramebuffer[$]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=R.textures;for(let $=0,K=B.length;$<K;$++){const j=n.get(B[$]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(B[$])}n.remove(R)}let L=0;function O(){L=0}function U(){const R=L;return R>=i.maxTextures,L+=1,R}function G(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function q(R,S){const B=n.get(R);if(R.isVideoTexture&&ve(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const $=R.image;if($!==null){if($.complete!==!1){W(B,R,S);return}}}t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+S)}function V(R,S){const B=n.get(R);if(R.version>0&&B.__version!==R.version){W(B,R,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+S)}function Y(R,S){const B=n.get(R);if(R.version>0&&B.__version!==R.version){W(B,R,S);return}t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+S)}function H(R,S){const B=n.get(R);if(R.version>0&&B.__version!==R.version){ee(B,R,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+S)}const te={[Aa]:r.REPEAT,[Gi]:r.CLAMP_TO_EDGE,[tl]:r.MIRRORED_REPEAT},ie={[Cn]:r.NEAREST,[op]:r.NEAREST_MIPMAP_NEAREST,[zs]:r.NEAREST_MIPMAP_LINEAR,[vn]:r.LINEAR,[Ja]:r.LINEAR_MIPMAP_NEAREST,[Wi]:r.LINEAR_MIPMAP_LINEAR},pe={[fp]:r.NEVER,[gp]:r.ALWAYS,[hp]:r.LESS,[Nf]:r.LEQUAL,[dp]:r.EQUAL,[_p]:r.GEQUAL,[pp]:r.GREATER,[mp]:r.NOTEQUAL};function Me(R,S){if(S.type===Qn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===vn||S.magFilter===Ja||S.magFilter===zs||S.magFilter===Wi||S.minFilter===vn||S.minFilter===Ja||S.minFilter===zs||S.minFilter),r.texParameteri(R,r.TEXTURE_WRAP_S,te[S.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,te[S.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,te[S.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,ie[S.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,ie[S.minFilter]),S.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,pe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Cn||S.minFilter!==zs&&S.minFilter!==Wi||S.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ke(R,S){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",b));const $=S.source;let K=u.get($);K===void 0&&(K={},u.set($,K));const j=G(S);if(j!==R.__cacheKey){K[j]===void 0&&(K[j]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,B=!0),K[j].usedTimes++;const _e=K[R.__cacheKey];_e!==void 0&&(K[R.__cacheKey].usedTimes--,_e.usedTimes===0&&y(S)),R.__cacheKey=j,R.__webglTexture=K[j].texture}return B}function W(R,S,B){let $=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=r.TEXTURE_3D);const K=ke(R,S),j=S.source;t.bindTexture($,R.__webglTexture,r.TEXTURE0+B);const _e=n.get(j);if(j.version!==_e.__version||K===!0){t.activeTexture(r.TEXTURE0+B);const ae=Ne.getPrimaries(Ne.workingColorSpace),Ee=S.colorSpace===hi?null:Ne.getPrimaries(S.colorSpace),Te=S.colorSpace===hi||ae===Ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let J=_(S.image,!1,i.maxTextureSize);J=nt(S,J);const fe=s.convert(S.format,S.colorSpace),be=s.convert(S.type);let Re=M(S.internalFormat,fe,be,S.colorSpace,S.isVideoTexture);Me($,S);let he;const Ve=S.mipmaps,Ue=S.isVideoTexture!==!0,tt=_e.__version===void 0||K===!0,N=j.dataReady,oe=A(S,J);if(S.isDepthTexture)Re=x(S.format===xs,S.type),tt&&(Ue?t.texStorage2D(r.TEXTURE_2D,1,Re,J.width,J.height):t.texImage2D(r.TEXTURE_2D,0,Re,J.width,J.height,0,fe,be,null));else if(S.isDataTexture)if(Ve.length>0){Ue&&tt&&t.texStorage2D(r.TEXTURE_2D,oe,Re,Ve[0].width,Ve[0].height);for(let X=0,Z=Ve.length;X<Z;X++)he=Ve[X],Ue?N&&t.texSubImage2D(r.TEXTURE_2D,X,0,0,he.width,he.height,fe,be,he.data):t.texImage2D(r.TEXTURE_2D,X,Re,he.width,he.height,0,fe,be,he.data);S.generateMipmaps=!1}else Ue?(tt&&t.texStorage2D(r.TEXTURE_2D,oe,Re,J.width,J.height),N&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,J.width,J.height,fe,be,J.data)):t.texImage2D(r.TEXTURE_2D,0,Re,J.width,J.height,0,fe,be,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ue&&tt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,oe,Re,Ve[0].width,Ve[0].height,J.depth);for(let X=0,Z=Ve.length;X<Z;X++)if(he=Ve[X],S.format!==Rn){if(fe!==null)if(Ue){if(N)if(S.layerUpdates.size>0){const ce=Tu(he.width,he.height,S.format,S.type);for(const le of S.layerUpdates){const Le=he.data.subarray(le*ce/he.data.BYTES_PER_ELEMENT,(le+1)*ce/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,le,he.width,he.height,1,fe,Le)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,he.width,he.height,J.depth,fe,he.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,X,Re,he.width,he.height,J.depth,0,he.data,0,0)}else Ue?N&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,he.width,he.height,J.depth,fe,be,he.data):t.texImage3D(r.TEXTURE_2D_ARRAY,X,Re,he.width,he.height,J.depth,0,fe,be,he.data)}else{Ue&&tt&&t.texStorage2D(r.TEXTURE_2D,oe,Re,Ve[0].width,Ve[0].height);for(let X=0,Z=Ve.length;X<Z;X++)he=Ve[X],S.format!==Rn?fe!==null&&(Ue?N&&t.compressedTexSubImage2D(r.TEXTURE_2D,X,0,0,he.width,he.height,fe,he.data):t.compressedTexImage2D(r.TEXTURE_2D,X,Re,he.width,he.height,0,he.data)):Ue?N&&t.texSubImage2D(r.TEXTURE_2D,X,0,0,he.width,he.height,fe,be,he.data):t.texImage2D(r.TEXTURE_2D,X,Re,he.width,he.height,0,fe,be,he.data)}else if(S.isDataArrayTexture)if(Ue){if(tt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,oe,Re,J.width,J.height,J.depth),N)if(S.layerUpdates.size>0){const X=Tu(J.width,J.height,S.format,S.type);for(const Z of S.layerUpdates){const ce=J.data.subarray(Z*X/J.data.BYTES_PER_ELEMENT,(Z+1)*X/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,J.width,J.height,1,fe,be,ce)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,fe,be,J.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Re,J.width,J.height,J.depth,0,fe,be,J.data);else if(S.isData3DTexture)Ue?(tt&&t.texStorage3D(r.TEXTURE_3D,oe,Re,J.width,J.height,J.depth),N&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,fe,be,J.data)):t.texImage3D(r.TEXTURE_3D,0,Re,J.width,J.height,J.depth,0,fe,be,J.data);else if(S.isFramebufferTexture){if(tt)if(Ue)t.texStorage2D(r.TEXTURE_2D,oe,Re,J.width,J.height);else{let X=J.width,Z=J.height;for(let ce=0;ce<oe;ce++)t.texImage2D(r.TEXTURE_2D,ce,Re,X,Z,0,fe,be,null),X>>=1,Z>>=1}}else if(Ve.length>0){if(Ue&&tt){const X=ge(Ve[0]);t.texStorage2D(r.TEXTURE_2D,oe,Re,X.width,X.height)}for(let X=0,Z=Ve.length;X<Z;X++)he=Ve[X],Ue?N&&t.texSubImage2D(r.TEXTURE_2D,X,0,0,fe,be,he):t.texImage2D(r.TEXTURE_2D,X,Re,fe,be,he);S.generateMipmaps=!1}else if(Ue){if(tt){const X=ge(J);t.texStorage2D(r.TEXTURE_2D,oe,Re,X.width,X.height)}N&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,fe,be,J)}else t.texImage2D(r.TEXTURE_2D,0,Re,fe,be,J);m(S)&&p($),_e.__version=j.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ee(R,S,B){if(S.image.length!==6)return;const $=ke(R,S),K=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+B);const j=n.get(K);if(K.version!==j.__version||$===!0){t.activeTexture(r.TEXTURE0+B);const _e=Ne.getPrimaries(Ne.workingColorSpace),ae=S.colorSpace===hi?null:Ne.getPrimaries(S.colorSpace),Ee=S.colorSpace===hi||_e===ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Te=S.isCompressedTexture||S.image[0].isCompressedTexture,J=S.image[0]&&S.image[0].isDataTexture,fe=[];for(let Z=0;Z<6;Z++)!Te&&!J?fe[Z]=_(S.image[Z],!0,i.maxCubemapSize):fe[Z]=J?S.image[Z].image:S.image[Z],fe[Z]=nt(S,fe[Z]);const be=fe[0],Re=s.convert(S.format,S.colorSpace),he=s.convert(S.type),Ve=M(S.internalFormat,Re,he,S.colorSpace),Ue=S.isVideoTexture!==!0,tt=j.__version===void 0||$===!0,N=K.dataReady;let oe=A(S,be);Me(r.TEXTURE_CUBE_MAP,S);let X;if(Te){Ue&&tt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,oe,Ve,be.width,be.height);for(let Z=0;Z<6;Z++){X=fe[Z].mipmaps;for(let ce=0;ce<X.length;ce++){const le=X[ce];S.format!==Rn?Re!==null&&(Ue?N&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,0,0,le.width,le.height,Re,le.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,Ve,le.width,le.height,0,le.data)):Ue?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,0,0,le.width,le.height,Re,he,le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,Ve,le.width,le.height,0,Re,he,le.data)}}}else{if(X=S.mipmaps,Ue&&tt){X.length>0&&oe++;const Z=ge(fe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,oe,Ve,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(J){Ue?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,fe[Z].width,fe[Z].height,Re,he,fe[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ve,fe[Z].width,fe[Z].height,0,Re,he,fe[Z].data);for(let ce=0;ce<X.length;ce++){const Le=X[ce].image[Z].image;Ue?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,0,0,Le.width,Le.height,Re,he,Le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,Ve,Le.width,Le.height,0,Re,he,Le.data)}}else{Ue?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Re,he,fe[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ve,Re,he,fe[Z]);for(let ce=0;ce<X.length;ce++){const le=X[ce];Ue?N&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,0,0,Re,he,le.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,Ve,Re,he,le.image[Z])}}}m(S)&&p(r.TEXTURE_CUBE_MAP),j.__version=K.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function me(R,S,B,$,K,j){const _e=s.convert(B.format,B.colorSpace),ae=s.convert(B.type),Ee=M(B.internalFormat,_e,ae,B.colorSpace),Te=n.get(S),J=n.get(B);if(J.__renderTarget=S,!Te.__hasExternalTextures){const fe=Math.max(1,S.width>>j),be=Math.max(1,S.height>>j);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?t.texImage3D(K,j,Ee,fe,be,S.depth,0,_e,ae,null):t.texImage2D(K,j,Ee,fe,be,0,_e,ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),He(S)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,K,J.__webglTexture,0,We(S)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,K,J.__webglTexture,j),t.bindFramebuffer(r.FRAMEBUFFER,null)}function se(R,S,B){if(r.bindRenderbuffer(r.RENDERBUFFER,R),S.depthBuffer){const $=S.depthTexture,K=$&&$.isDepthTexture?$.type:null,j=x(S.stencilBuffer,K),_e=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=We(S);He(S)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ae,j,S.width,S.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,ae,j,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,j,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,R)}else{const $=S.textures;for(let K=0;K<$.length;K++){const j=$[K],_e=s.convert(j.format,j.colorSpace),ae=s.convert(j.type),Ee=M(j.internalFormat,_e,ae,j.colorSpace),Te=We(S);B&&He(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Te,Ee,S.width,S.height):He(S)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Te,Ee,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Ee,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Se(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const K=$.__webglTexture,j=We(S);if(S.depthTexture.format===vs)He(S)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0);else if(S.depthTexture.format===xs)He(S)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ye(R){const S=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const K=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",K)};$.addEventListener("dispose",K),S.__depthDisposeCallback=K}S.__boundDepthTexture=$}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const $=R.texture.mipmaps;$&&$.length>0?Se(S.__webglFramebuffer[0],R):Se(S.__webglFramebuffer,R)}else if(B){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=r.createRenderbuffer(),se(S.__webglDepthbuffer[$],R,!1);else{const K=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[$];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,j)}}else{const $=R.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),se(S.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,j)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function we(R,S,B){const $=n.get(R);S!==void 0&&me($.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&Ye(R)}function gt(R){const S=R.texture,B=n.get(R),$=n.get(S);R.addEventListener("dispose",w);const K=R.textures,j=R.isWebGLCubeRenderTarget===!0,_e=K.length>1;if(_e||($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=S.version,o.memory.textures++),j){B.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[ae]=[];for(let Ee=0;Ee<S.mipmaps.length;Ee++)B.__webglFramebuffer[ae][Ee]=r.createFramebuffer()}else B.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let ae=0;ae<S.mipmaps.length;ae++)B.__webglFramebuffer[ae]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(_e)for(let ae=0,Ee=K.length;ae<Ee;ae++){const Te=n.get(K[ae]);Te.__webglTexture===void 0&&(Te.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&He(R)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ae=0;ae<K.length;ae++){const Ee=K[ae];B.__webglColorRenderbuffer[ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[ae]);const Te=s.convert(Ee.format,Ee.colorSpace),J=s.convert(Ee.type),fe=M(Ee.internalFormat,Te,J,Ee.colorSpace,R.isXRRenderTarget===!0),be=We(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,be,fe,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,B.__webglColorRenderbuffer[ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),se(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),Me(r.TEXTURE_CUBE_MAP,S);for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ee=0;Ee<S.mipmaps.length;Ee++)me(B.__webglFramebuffer[ae][Ee],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee);else me(B.__webglFramebuffer[ae],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(S)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let ae=0,Ee=K.length;ae<Ee;ae++){const Te=K[ae],J=n.get(Te);t.bindTexture(r.TEXTURE_2D,J.__webglTexture),Me(r.TEXTURE_2D,Te),me(B.__webglFramebuffer,R,Te,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,0),m(Te)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let ae=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ae,$.__webglTexture),Me(ae,S),S.mipmaps&&S.mipmaps.length>0)for(let Ee=0;Ee<S.mipmaps.length;Ee++)me(B.__webglFramebuffer[Ee],R,S,r.COLOR_ATTACHMENT0,ae,Ee);else me(B.__webglFramebuffer,R,S,r.COLOR_ATTACHMENT0,ae,0);m(S)&&p(ae),t.unbindTexture()}R.depthBuffer&&Ye(R)}function at(R){const S=R.textures;for(let B=0,$=S.length;B<$;B++){const K=S[B];if(m(K)){const j=v(R),_e=n.get(K).__webglTexture;t.bindTexture(j,_e),p(j),t.unbindTexture()}}}const ze=[],D=[];function un(R){if(R.samples>0){if(He(R)===!1){const S=R.textures,B=R.width,$=R.height;let K=r.COLOR_BUFFER_BIT;const j=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=n.get(R),ae=S.length>1;if(ae)for(let Te=0;Te<S.length;Te++)t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const Ee=R.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Te=0;Te<S.length;Te++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,_e.__webglColorRenderbuffer[Te]);const J=n.get(S[Te]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,J,0)}r.blitFramebuffer(0,0,B,$,0,0,B,$,K,r.NEAREST),c===!0&&(ze.length=0,D.length=0,ze.push(r.COLOR_ATTACHMENT0+Te),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ze.push(j),D.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,D)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ze))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ae)for(let Te=0;Te<S.length;Te++){t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,_e.__webglColorRenderbuffer[Te]);const J=n.get(S[Te]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,J,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const S=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function We(R){return Math.min(i.maxSamples,R.samples)}function He(R){const S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ve(R){const S=o.render.frame;d.get(R)!==S&&(d.set(R,S),R.update())}function nt(R,S){const B=R.colorSpace,$=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==kr&&B!==hi&&Ne.getTransfer(B),S}function ge(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(f.width=R.naturalWidth||R.width,f.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(f.width=R.displayWidth,f.height=R.displayHeight):(f.width=R.width,f.height=R.height),f}this.allocateTextureUnit=U,this.resetTextureUnits=O,this.setTexture2D=q,this.setTexture2DArray=V,this.setTexture3D=Y,this.setTextureCube=H,this.rebindTextures=we,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=un,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=me,this.useMultisampledRTT=He}function Ov(r,e){function t(n,i=hi){let s;const o=Ne.getTransfer(i);if(n===zn)return r.UNSIGNED_BYTE;if(n===Ql)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ec)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Pf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Rf)return r.BYTE;if(n===Cf)return r.SHORT;if(n===_s)return r.UNSIGNED_SHORT;if(n===Jl)return r.INT;if(n===Ki)return r.UNSIGNED_INT;if(n===Qn)return r.FLOAT;if(n===Is)return r.HALF_FLOAT;if(n===Lf)return r.ALPHA;if(n===Df)return r.RGB;if(n===Rn)return r.RGBA;if(n===vs)return r.DEPTH_COMPONENT;if(n===xs)return r.DEPTH_STENCIL;if(n===If)return r.RED;if(n===tc)return r.RED_INTEGER;if(n===Uf)return r.RG;if(n===nc)return r.RG_INTEGER;if(n===ic)return r.RGBA_INTEGER;if(n===ma||n===_a||n===ga||n===va)if(o===Je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ma)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ma)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_a)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ga)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===va)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nl||n===il||n===rl||n===sl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===nl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===il)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===al||n===ol||n===ll)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===al||n===ol)return o===Je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ll)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===cl||n===ul||n===fl||n===hl||n===dl||n===pl||n===ml||n===_l||n===gl||n===vl||n===xl||n===yl||n===Ml||n===Sl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===cl)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ul)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fl)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hl)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dl)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pl)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ml)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_l)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gl)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vl)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xl)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yl)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ml)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sl)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xa||n===El||n===Tl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===xa)return o===Je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===El)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ff||n===bl||n===wl||n===Al)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===xa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===bl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Al)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Bv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kv=`
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

}`;class zv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Bt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ti({vertexShader:Bv,fragmentShader:kv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pt(new jr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hv extends Yr{constructor(e,t){super();const n=this;let i=null,s=1,o=null,l="local-floor",c=1,f=null,d=null,a=null,u=null,h=null,g=null;const _=new zv,m=t.getContextAttributes();let p=null,v=null;const M=[],x=[],A=new Ge;let b=null;const w=new _n;w.viewport=new dt;const P=new _n;P.viewport=new dt;const y=[w,P],E=new lm;let L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ee=M[W];return ee===void 0&&(ee=new Mo,M[W]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(W){let ee=M[W];return ee===void 0&&(ee=new Mo,M[W]=ee),ee.getGripSpace()},this.getHand=function(W){let ee=M[W];return ee===void 0&&(ee=new Mo,M[W]=ee),ee.getHandSpace()};function U(W){const ee=x.indexOf(W.inputSource);if(ee===-1)return;const me=M[ee];me!==void 0&&(me.update(W.inputSource,W.frame,f||o),me.dispatchEvent({type:W.type,data:W.inputSource}))}function G(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",q);for(let W=0;W<M.length;W++){const ee=x[W];ee!==null&&(x[W]=null,M[W].disconnect(ee))}L=null,O=null,_.reset(),e.setRenderTarget(p),h=null,u=null,a=null,i=null,v=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting},this.setReferenceSpaceType=function(W){l=W,n.isPresenting},this.getReferenceSpace=function(){return f||o},this.setReferenceSpace=function(W){f=W},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return a},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",G),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,se=null,Se=null;m.depth&&(Se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=m.stencil?xs:vs,se=m.stencil?gs:Ki);const Ye={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};a=new XRWebGLBinding(i,t),u=a.createProjectionLayer(Ye),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Ji(u.textureWidth,u.textureHeight,{format:Rn,type:zn,depthTexture:new qf(u.textureWidth,u.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,me),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new Ji(h.framebufferWidth,h.framebufferHeight,{format:Rn,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),f=null,o=await i.requestReferenceSpace(l),ke.setContext(i),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(W){for(let ee=0;ee<W.removed.length;ee++){const me=W.removed[ee],se=x.indexOf(me);se>=0&&(x[se]=null,M[se].disconnect(me))}for(let ee=0;ee<W.added.length;ee++){const me=W.added[ee];let se=x.indexOf(me);if(se===-1){for(let Ye=0;Ye<M.length;Ye++)if(Ye>=x.length){x.push(me),se=Ye;break}else if(x[Ye]===null){x[Ye]=me,se=Ye;break}if(se===-1)break}const Se=M[se];Se&&Se.connect(me)}}const V=new C,Y=new C;function H(W,ee,me){V.setFromMatrixPosition(ee.matrixWorld),Y.setFromMatrixPosition(me.matrixWorld);const se=V.distanceTo(Y),Se=ee.projectionMatrix.elements,Ye=me.projectionMatrix.elements,we=Se[14]/(Se[10]-1),gt=Se[14]/(Se[10]+1),at=(Se[9]+1)/Se[5],ze=(Se[9]-1)/Se[5],D=(Se[8]-1)/Se[0],un=(Ye[8]+1)/Ye[0],We=we*D,He=we*un,ve=se/(-D+un),nt=ve*-D;if(ee.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(nt),W.translateZ(ve),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Se[10]===-1)W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const ge=we+ve,R=gt+ve,S=We-nt,B=He+(se-nt),$=at*gt/R*ge,K=ze*gt/R*ge;W.projectionMatrix.makePerspective(S,B,$,K,ge,R),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function te(W,ee){ee===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ee.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let ee=W.near,me=W.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(me=_.depthFar)),E.near=P.near=w.near=ee,E.far=P.far=w.far=me,(L!==E.near||O!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),L=E.near,O=E.far),w.layers.mask=W.layers.mask|2,P.layers.mask=W.layers.mask|4,E.layers.mask=w.layers.mask|P.layers.mask;const se=W.parent,Se=E.cameras;te(E,se);for(let Ye=0;Ye<Se.length;Ye++)te(Se[Ye],se);Se.length===2?H(E,w,P):E.projectionMatrix.copy(w.projectionMatrix),ie(W,E,se)};function ie(W,ee,me){me===null?W.matrix.copy(ee.matrixWorld):(W.matrix.copy(me.matrixWorld),W.matrix.invert(),W.matrix.multiply(ee.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Rl*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(u===null&&h===null))return c},this.setFoveation=function(W){c=W,u!==null&&(u.fixedFoveation=W),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(E)};let pe=null;function Me(W,ee){if(d=ee.getViewerPose(f||o),g=ee,d!==null){const me=d.views;h!==null&&(e.setRenderTargetFramebuffer(v,h.framebuffer),e.setRenderTarget(v));let se=!1;me.length!==E.cameras.length&&(E.cameras.length=0,se=!0);for(let we=0;we<me.length;we++){const gt=me[we];let at=null;if(h!==null)at=h.getViewport(gt);else{const D=a.getViewSubImage(u,gt);at=D.viewport,we===0&&(e.setRenderTargetTextures(v,D.colorTexture,D.depthStencilTexture),e.setRenderTarget(v))}let ze=y[we];ze===void 0&&(ze=new _n,ze.layers.enable(we),ze.viewport=new dt,y[we]=ze),ze.matrix.fromArray(gt.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(gt.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(at.x,at.y,at.width,at.height),we===0&&(E.matrix.copy(ze.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),se===!0&&E.cameras.push(ze)}const Se=i.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&a){const we=a.getDepthInformation(me[0]);we&&we.isValid&&we.texture&&_.init(e,we,i.renderState)}}for(let me=0;me<M.length;me++){const se=x[me],Se=M[me];se!==null&&Se!==void 0&&Se.update(se,ee,f||o)}pe&&pe(W,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const ke=new Jf;ke.setAnimationLoop(Me),this.setAnimationLoop=function(W){pe=W},this.dispose=function(){}}}const Fi=new Pe,Vv=new st;function Gv(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Gf(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),a(m,p)):p.isMeshPhongMaterial?(s(m,p),d(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&h(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&l(m,p)):p.isPointsMaterial?c(m,p,v,M):p.isSpriteMaterial?f(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Yt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Yt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),M=v.envMap,x=v.envMapRotation;M&&(m.envMap.value=M,Fi.copy(x),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),m.envMapRotation.value.setFromMatrix4(Vv.makeRotationFromEuler(Fi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function l(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function a(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Wv(r,e,t,n){let i={},s={},o=[];const l=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){const x=M.program;n.uniformBlockBinding(v,x)}function f(v,M){let x=i[v.id];x===void 0&&(g(v),x=d(v),i[v.id]=x,v.addEventListener("dispose",m));const A=M.program;n.updateUBOMapping(v,A);const b=e.render.frame;s[v.id]!==b&&(u(v),s[v.id]=b)}function d(v){const M=a();v.__bindingPointIndex=M;const x=r.createBuffer(),A=v.__size,b=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,A,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,x),x}function a(){for(let v=0;v<l;v++)if(o.indexOf(v)===-1)return o.push(v),v;return 0}function u(v){const M=i[v.id],x=v.uniforms,A=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let b=0,w=x.length;b<w;b++){const P=Array.isArray(x[b])?x[b]:[x[b]];for(let y=0,E=P.length;y<E;y++){const L=P[y];if(h(L,b,y,A)===!0){const O=L.__offset,U=Array.isArray(L.value)?L.value:[L.value];let G=0;for(let q=0;q<U.length;q++){const V=U[q],Y=_(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,O+G,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,G),G+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(v,M,x,A){const b=v.value,w=M+"_"+x;if(A[w]===void 0)return typeof b=="number"||typeof b=="boolean"?A[w]=b:A[w]=b.clone(),!0;{const P=A[w];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return A[w]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function g(v){const M=v.uniforms;let x=0;const A=16;for(let w=0,P=M.length;w<P;w++){const y=Array.isArray(M[w])?M[w]:[M[w]];for(let E=0,L=y.length;E<L;E++){const O=y[E],U=Array.isArray(O.value)?O.value:[O.value];for(let G=0,q=U.length;G<q;G++){const V=U[G],Y=_(V),H=x%A,te=H%Y.boundary,ie=H+te;x+=te,ie!==0&&A-ie<Y.storage&&(x+=A-ie),O.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=Y.storage}}}const b=x%A;return b>0&&(x+=A-b),v.__size=x,v.__cache={},this}function _(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture,M}function m(v){const M=v.target;M.removeEventListener("dispose",m);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:c,update:f,dispose:p}}class Xv{constructor(e={}){const{canvas:t=xp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:f=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:a=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const v=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let A=!1;this._outputColorSpace=Lt;let b=0,w=0,P=null,y=-1,E=null;const L=new dt,O=new dt;let U=null;const G=new Ie(0);let q=0,V=t.width,Y=t.height,H=1,te=null,ie=null;const pe=new dt(0,0,V,Y),Me=new dt(0,0,V,Y);let ke=!1;const W=new oc;let ee=!1,me=!1;const se=new st,Se=new st,Ye=new C,we=new dt,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function ze(){return P===null?H:1}let D=n;function un(T,I){return t.getContext(T,I)}try{const T={alpha:!0,depth:i,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:f,powerPreference:d,failIfMajorPerformanceCaveat:a};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zl}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",le,!1),D===null){const I="webgl2";if(D=un(I,T),D===null)throw un(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw T}let We,He,ve,nt,ge,R,S,B,$,K,j,_e,ae,Ee,Te,J,fe,be,Re,he,Ve,Ue,tt,N;function oe(){We=new t0(D),We.init(),Ue=new Ov(D,We),He=new jg(D,We,e,Ue),ve=new Fv(D,We),He.reverseDepthBuffer&&u&&ve.buffers.depth.setReversed(!0),nt=new r0(D),ge=new Sv,R=new Nv(D,We,ve,ge,He,Ue,nt),S=new Zg(x),B=new e0(x),$=new um(D),tt=new qg(D,$),K=new n0(D,$,nt,tt),j=new a0(D,K,$,nt),Re=new s0(D,He,R),J=new $g(ge),_e=new Mv(x,S,B,We,He,tt,J),ae=new Gv(x,ge),Ee=new Tv,Te=new Pv(We),be=new Xg(x,S,B,ve,j,h,c),fe=new Iv(x,j,He),N=new Wv(D,nt,He,ve),he=new Yg(D,We,nt),Ve=new i0(D,We,nt),nt.programs=_e.programs,x.capabilities=He,x.extensions=We,x.properties=ge,x.renderLists=Ee,x.shadowMap=fe,x.state=ve,x.info=nt}oe();const X=new Hv(x,D);this.xr=X,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=We.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=We.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(T){T!==void 0&&(H=T,this.setSize(V,Y,!1))},this.getSize=function(T){return T.set(V,Y)},this.setSize=function(T,I,k=!0){X.isPresenting||(V=T,Y=I,t.width=Math.floor(T*H),t.height=Math.floor(I*H),k===!0&&(t.style.width=T+"px",t.style.height=I+"px"),this.setViewport(0,0,T,I))},this.getDrawingBufferSize=function(T){return T.set(V*H,Y*H).floor()},this.setDrawingBufferSize=function(T,I,k){V=T,Y=I,H=k,t.width=Math.floor(T*k),t.height=Math.floor(I*k),this.setViewport(0,0,T,I)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(pe)},this.setViewport=function(T,I,k,z){T.isVector4?pe.set(T.x,T.y,T.z,T.w):pe.set(T,I,k,z),ve.viewport(L.copy(pe).multiplyScalar(H).round())},this.getScissor=function(T){return T.copy(Me)},this.setScissor=function(T,I,k,z){T.isVector4?Me.set(T.x,T.y,T.z,T.w):Me.set(T,I,k,z),ve.scissor(O.copy(Me).multiplyScalar(H).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(T){ve.setScissorTest(ke=T)},this.setOpaqueSort=function(T){te=T},this.setTransparentSort=function(T){ie=T},this.getClearColor=function(T){return T.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(T=!0,I=!0,k=!0){let z=0;if(T){let F=!1;if(P!==null){const Q=P.texture.format;F=Q===ic||Q===nc||Q===tc}if(F){const Q=P.texture.type,re=Q===zn||Q===Ki||Q===_s||Q===gs||Q===Ql||Q===ec,ue=be.getClearColor(),de=be.getClearAlpha(),Ce=ue.r,Ae=ue.g,xe=ue.b;re?(g[0]=Ce,g[1]=Ae,g[2]=xe,g[3]=de,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Ce,_[1]=Ae,_[2]=xe,_[3]=de,D.clearBufferiv(D.COLOR,0,_))}else z|=D.COLOR_BUFFER_BIT}I&&(z|=D.DEPTH_BUFFER_BIT),k&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",le,!1),be.dispose(),Ee.dispose(),Te.dispose(),ge.dispose(),S.dispose(),B.dispose(),j.dispose(),tt.dispose(),N.dispose(),_e.dispose(),X.dispose(),X.removeEventListener("sessionstart",Bc),X.removeEventListener("sessionend",kc),Ri.stop()};function Z(T){T.preventDefault(),A=!0}function ce(){A=!1;const T=nt.autoReset,I=fe.enabled,k=fe.autoUpdate,z=fe.needsUpdate,F=fe.type;oe(),nt.autoReset=T,fe.enabled=I,fe.autoUpdate=k,fe.needsUpdate=z,fe.type=F}function le(T){}function Le(T){const I=T.target;I.removeEventListener("dispose",Le),ut(I)}function ut(T){It(T),ge.remove(T)}function It(T){const I=ge.get(T).programs;I!==void 0&&(I.forEach(function(k){_e.releaseProgram(k)}),T.isShaderMaterial&&_e.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,k,z,F,Q){I===null&&(I=gt);const re=F.isMesh&&F.matrixWorld.determinant()<0,ue=Ed(T,I,k,z,F);ve.setMaterial(z,re);let de=k.index,Ce=1;if(z.wireframe===!0){if(de=K.getWireframeAttribute(k),de===void 0)return;Ce=2}const Ae=k.drawRange,xe=k.attributes.position;let Xe=Ae.start*Ce,je=(Ae.start+Ae.count)*Ce;Q!==null&&(Xe=Math.max(Xe,Q.start*Ce),je=Math.min(je,(Q.start+Q.count)*Ce)),de!==null?(Xe=Math.max(Xe,0),je=Math.min(je,de.count)):xe!=null&&(Xe=Math.max(Xe,0),je=Math.min(je,xe.count));const yt=je-Xe;if(yt<0||yt===1/0)return;tt.setup(F,z,ue,k,de);let ft,qe=he;if(de!==null&&(ft=$.get(de),qe=Ve,qe.setIndex(ft)),F.isMesh)z.wireframe===!0?(ve.setLineWidth(z.wireframeLinewidth*ze()),qe.setMode(D.LINES)):qe.setMode(D.TRIANGLES);else if(F.isLine){let ye=z.linewidth;ye===void 0&&(ye=1),ve.setLineWidth(ye*ze()),F.isLineSegments?qe.setMode(D.LINES):F.isLineLoop?qe.setMode(D.LINE_LOOP):qe.setMode(D.LINE_STRIP)}else F.isPoints?qe.setMode(D.POINTS):F.isSprite&&qe.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ya("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),qe.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))qe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const ye=F._multiDrawStarts,Pt=F._multiDrawCounts,$e=F._multiDrawCount,Mn=de?$.get(de).bytesPerElement:1,sr=ge.get(z).currentProgram.getUniforms();for(let Qt=0;Qt<$e;Qt++)sr.setValue(D,"_gl_DrawID",Qt),qe.render(ye[Qt]/Mn,Pt[Qt])}else if(F.isInstancedMesh)qe.renderInstances(Xe,yt,F.count);else if(k.isInstancedBufferGeometry){const ye=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Pt=Math.min(k.instanceCount,ye);qe.renderInstances(Xe,yt,Pt)}else qe.render(Xe,yt)};function Ke(T,I,k){T.transparent===!0&&T.side===In&&T.forceSinglePass===!1?(T.side=Yt,T.needsUpdate=!0,ks(T,I,k),T.side=ni,T.needsUpdate=!0,ks(T,I,k),T.side=In):ks(T,I,k)}this.compile=function(T,I,k=null){k===null&&(k=T),p=Te.get(k),p.init(I),M.push(p),k.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),T!==k&&T.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const z=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const Q=F.material;if(Q)if(Array.isArray(Q))for(let re=0;re<Q.length;re++){const ue=Q[re];Ke(ue,k,F),z.add(ue)}else Ke(Q,k,F),z.add(Q)}),p=M.pop(),z},this.compileAsync=function(T,I,k=null){const z=this.compile(T,I,k);return new Promise(F=>{function Q(){if(z.forEach(function(re){ge.get(re).currentProgram.isReady()&&z.delete(re)}),z.size===0){F(T);return}setTimeout(Q,10)}We.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let yn=null;function Gn(T){yn&&yn(T)}function Bc(){Ri.stop()}function kc(){Ri.start()}const Ri=new Jf;Ri.setAnimationLoop(Gn),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(T){yn=T,X.setAnimationLoop(T),T===null?Ri.stop():Ri.start()},X.addEventListener("sessionstart",Bc),X.addEventListener("sessionend",kc),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0||A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(I),I=X.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,I,P),p=Te.get(T,M.length),p.init(I),M.push(p),Se.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),W.setFromProjectionMatrix(Se),me=this.localClippingEnabled,ee=J.init(this.clippingPlanes,me),m=Ee.get(T,v.length),m.init(),v.push(m),X.enabled===!0&&X.isPresenting===!0){const Q=x.xr.getDepthSensingMesh();Q!==null&&Za(Q,I,-1/0,x.sortObjects)}Za(T,I,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(te,ie),at=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,at&&be.addToRenderList(m,T),this.info.render.frame++,ee===!0&&J.beginShadows();const k=p.state.shadowsArray;fe.render(k,T,I),ee===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,F=m.transmissive;if(p.setupLights(),I.isArrayCamera){const Q=I.cameras;if(F.length>0)for(let re=0,ue=Q.length;re<ue;re++){const de=Q[re];Hc(z,F,T,de)}at&&be.render(T);for(let re=0,ue=Q.length;re<ue;re++){const de=Q[re];zc(m,T,de,de.viewport)}}else F.length>0&&Hc(z,F,T,I),at&&be.render(T),zc(m,T,I);P!==null&&w===0&&(R.updateMultisampleRenderTarget(P),R.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(x,T,I),tt.resetDefaultState(),y=-1,E=null,M.pop(),M.length>0?(p=M[M.length-1],ee===!0&&J.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Za(T,I,k,z){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)k=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||W.intersectsSprite(T)){z&&we.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Se);const re=j.update(T),ue=T.material;ue.visible&&m.push(T,re,ue,k,we.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||W.intersectsObject(T))){const re=j.update(T),ue=T.material;if(z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),we.copy(T.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),we.copy(re.boundingSphere.center)),we.applyMatrix4(T.matrixWorld).applyMatrix4(Se)),Array.isArray(ue)){const de=re.groups;for(let Ce=0,Ae=de.length;Ce<Ae;Ce++){const xe=de[Ce],Xe=ue[xe.materialIndex];Xe&&Xe.visible&&m.push(T,re,Xe,k,we.z,xe)}}else ue.visible&&m.push(T,re,ue,k,we.z,null)}}const Q=T.children;for(let re=0,ue=Q.length;re<ue;re++)Za(Q[re],I,k,z)}function zc(T,I,k,z){const F=T.opaque,Q=T.transmissive,re=T.transparent;p.setupLightsView(k),ee===!0&&J.setGlobalState(x.clippingPlanes,k),z&&ve.viewport(L.copy(z)),F.length>0&&Bs(F,I,k),Q.length>0&&Bs(Q,I,k),re.length>0&&Bs(re,I,k),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Hc(T,I,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new Ji(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?Is:zn,minFilter:Wi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace}));const Q=p.state.transmissionRenderTarget[z.id],re=z.viewport||L;Q.setSize(re.z*x.transmissionResolutionScale,re.w*x.transmissionResolutionScale);const ue=x.getRenderTarget();x.setRenderTarget(Q),x.getClearColor(G),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),at&&be.render(k);const de=x.toneMapping;x.toneMapping=xi;const Ce=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),ee===!0&&J.setGlobalState(x.clippingPlanes,z),Bs(T,k,z),R.updateMultisampleRenderTarget(Q),R.updateRenderTargetMipmap(Q),We.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let xe=0,Xe=I.length;xe<Xe;xe++){const je=I[xe],yt=je.object,ft=je.geometry,qe=je.material,ye=je.group;if(qe.side===In&&yt.layers.test(z.layers)){const Pt=qe.side;qe.side=Yt,qe.needsUpdate=!0,Vc(yt,k,z,ft,qe,ye),qe.side=Pt,qe.needsUpdate=!0,Ae=!0}}Ae===!0&&(R.updateMultisampleRenderTarget(Q),R.updateRenderTargetMipmap(Q))}x.setRenderTarget(ue),x.setClearColor(G,q),Ce!==void 0&&(z.viewport=Ce),x.toneMapping=de}function Bs(T,I,k){const z=I.isScene===!0?I.overrideMaterial:null;for(let F=0,Q=T.length;F<Q;F++){const re=T[F],ue=re.object,de=re.geometry,Ce=re.group;let Ae=re.material;Ae.allowOverride===!0&&z!==null&&(Ae=z),ue.layers.test(k.layers)&&Vc(ue,I,k,de,Ae,Ce)}}function Vc(T,I,k,z,F,Q){T.onBeforeRender(x,I,k,z,F,Q),T.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(x,I,k,z,T,Q),F.transparent===!0&&F.side===In&&F.forceSinglePass===!1?(F.side=Yt,F.needsUpdate=!0,x.renderBufferDirect(k,I,z,F,T,Q),F.side=ni,F.needsUpdate=!0,x.renderBufferDirect(k,I,z,F,T,Q),F.side=In):x.renderBufferDirect(k,I,z,F,T,Q),T.onAfterRender(x,I,k,z,F,Q)}function ks(T,I,k){I.isScene!==!0&&(I=gt);const z=ge.get(T),F=p.state.lights,Q=p.state.shadowsArray,re=F.state.version,ue=_e.getParameters(T,F.state,Q,I,k),de=_e.getProgramCacheKey(ue);let Ce=z.programs;z.environment=T.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(T.isMeshStandardMaterial?B:S).get(T.envMap||z.environment),z.envMapRotation=z.environment!==null&&T.envMap===null?I.environmentRotation:T.envMapRotation,Ce===void 0&&(T.addEventListener("dispose",Le),Ce=new Map,z.programs=Ce);let Ae=Ce.get(de);if(Ae!==void 0){if(z.currentProgram===Ae&&z.lightsStateVersion===re)return Wc(T,ue),Ae}else ue.uniforms=_e.getUniforms(T),T.onBeforeCompile(ue,x),Ae=_e.acquireProgram(ue,de),Ce.set(de,Ae),z.uniforms=ue.uniforms;const xe=z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(xe.clippingPlanes=J.uniform),Wc(T,ue),z.needsLights=bd(T),z.lightsStateVersion=re,z.needsLights&&(xe.ambientLightColor.value=F.state.ambient,xe.lightProbe.value=F.state.probe,xe.directionalLights.value=F.state.directional,xe.directionalLightShadows.value=F.state.directionalShadow,xe.spotLights.value=F.state.spot,xe.spotLightShadows.value=F.state.spotShadow,xe.rectAreaLights.value=F.state.rectArea,xe.ltc_1.value=F.state.rectAreaLTC1,xe.ltc_2.value=F.state.rectAreaLTC2,xe.pointLights.value=F.state.point,xe.pointLightShadows.value=F.state.pointShadow,xe.hemisphereLights.value=F.state.hemi,xe.directionalShadowMap.value=F.state.directionalShadowMap,xe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,xe.spotShadowMap.value=F.state.spotShadowMap,xe.spotLightMatrix.value=F.state.spotLightMatrix,xe.spotLightMap.value=F.state.spotLightMap,xe.pointShadowMap.value=F.state.pointShadowMap,xe.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=Ae,z.uniformsList=null,Ae}function Gc(T){if(T.uniformsList===null){const I=T.currentProgram.getUniforms();T.uniformsList=Sa.seqWithValue(I.seq,T.uniforms)}return T.uniformsList}function Wc(T,I){const k=ge.get(T);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function Ed(T,I,k,z,F){I.isScene!==!0&&(I=gt),R.resetTextureUnits();const Q=I.fog,re=z.isMeshStandardMaterial?I.environment:null,ue=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:kr,de=(z.isMeshStandardMaterial?B:S).get(z.envMap||re),Ce=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ae=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),xe=!!k.morphAttributes.position,Xe=!!k.morphAttributes.normal,je=!!k.morphAttributes.color;let yt=xi;z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(yt=x.toneMapping);const ft=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,qe=ft!==void 0?ft.length:0,ye=ge.get(z),Pt=p.state.lights;if(ee===!0&&(me===!0||T!==E)){const zt=T===E&&z.id===y;J.setState(z,T,zt)}let $e=!1;z.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Pt.state.version||ye.outputColorSpace!==ue||F.isBatchedMesh&&ye.batching===!1||!F.isBatchedMesh&&ye.batching===!0||F.isBatchedMesh&&ye.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&ye.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&ye.instancing===!1||!F.isInstancedMesh&&ye.instancing===!0||F.isSkinnedMesh&&ye.skinning===!1||!F.isSkinnedMesh&&ye.skinning===!0||F.isInstancedMesh&&ye.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&ye.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&ye.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&ye.instancingMorph===!1&&F.morphTexture!==null||ye.envMap!==de||z.fog===!0&&ye.fog!==Q||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==J.numPlanes||ye.numIntersection!==J.numIntersection)||ye.vertexAlphas!==Ce||ye.vertexTangents!==Ae||ye.morphTargets!==xe||ye.morphNormals!==Xe||ye.morphColors!==je||ye.toneMapping!==yt||ye.morphTargetsCount!==qe)&&($e=!0):($e=!0,ye.__version=z.version);let Mn=ye.currentProgram;$e===!0&&(Mn=ks(z,I,F));let sr=!1,Qt=!1,Kr=!1;const it=Mn.getUniforms(),fn=ye.uniforms;if(ve.useProgram(Mn.program)&&(sr=!0,Qt=!0,Kr=!0),z.id!==y&&(y=z.id,Qt=!0),sr||E!==T){ve.buffers.depth.getReversed()?(se.copy(T.projectionMatrix),Mp(se),Sp(se),it.setValue(D,"projectionMatrix",se)):it.setValue(D,"projectionMatrix",T.projectionMatrix),it.setValue(D,"viewMatrix",T.matrixWorldInverse);const Gt=it.map.cameraPosition;Gt!==void 0&&Gt.setValue(D,Ye.setFromMatrixPosition(T.matrixWorld)),He.logarithmicDepthBuffer&&it.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&it.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,Qt=!0,Kr=!0)}if(F.isSkinnedMesh){it.setOptional(D,F,"bindMatrix"),it.setOptional(D,F,"bindMatrixInverse");const zt=F.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),it.setValue(D,"boneTexture",zt.boneTexture,R))}F.isBatchedMesh&&(it.setOptional(D,F,"batchingTexture"),it.setValue(D,"batchingTexture",F._matricesTexture,R),it.setOptional(D,F,"batchingIdTexture"),it.setValue(D,"batchingIdTexture",F._indirectTexture,R),it.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&it.setValue(D,"batchingColorTexture",F._colorsTexture,R));const hn=k.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&Re.update(F,k,Mn),(Qt||ye.receiveShadow!==F.receiveShadow)&&(ye.receiveShadow=F.receiveShadow,it.setValue(D,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(fn.envMap.value=de,fn.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&I.environment!==null&&(fn.envMapIntensity.value=I.environmentIntensity),Qt&&(it.setValue(D,"toneMappingExposure",x.toneMappingExposure),ye.needsLights&&Td(fn,Kr),Q&&z.fog===!0&&ae.refreshFogUniforms(fn,Q),ae.refreshMaterialUniforms(fn,z,H,Y,p.state.transmissionRenderTarget[T.id]),Sa.upload(D,Gc(ye),fn,R)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Sa.upload(D,Gc(ye),fn,R),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&it.setValue(D,"center",F.center),it.setValue(D,"modelViewMatrix",F.modelViewMatrix),it.setValue(D,"normalMatrix",F.normalMatrix),it.setValue(D,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const zt=z.uniformsGroups;for(let Gt=0,Ka=zt.length;Gt<Ka;Gt++){const Ci=zt[Gt];N.update(Ci,Mn),N.bind(Ci,Mn)}}return Mn}function Td(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function bd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,I,k){const z=ge.get(T);z.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),ge.get(T.texture).__webglTexture=I,ge.get(T.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:k,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,I){const k=ge.get(T);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0};const wd=D.createFramebuffer();this.setRenderTarget=function(T,I=0,k=0){P=T,b=I,w=k;let z=!0,F=null,Q=!1,re=!1;if(T){const de=ge.get(T);if(de.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(D.FRAMEBUFFER,null),z=!1;else if(de.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(de.__hasExternalTextures)R.rebindTextures(T,ge.get(T.texture).__webglTexture,ge.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const xe=T.depthTexture;if(de.__boundDepthTexture!==xe){if(xe!==null&&ge.has(xe)&&(T.width!==xe.image.width||T.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const Ce=T.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(re=!0);const Ae=ge.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ae[I])?F=Ae[I][k]:F=Ae[I],Q=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?F=ge.get(T).__webglMultisampledFramebuffer:Array.isArray(Ae)?F=Ae[k]:F=Ae,L.copy(T.viewport),O.copy(T.scissor),U=T.scissorTest}else L.copy(pe).multiplyScalar(H).floor(),O.copy(Me).multiplyScalar(H).floor(),U=ke;if(k!==0&&(F=wd),ve.bindFramebuffer(D.FRAMEBUFFER,F)&&z&&ve.drawBuffers(T,F),ve.viewport(L),ve.scissor(O),ve.setScissorTest(U),Q){const de=ge.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,de.__webglTexture,k)}else if(re){const de=ge.get(T.texture),Ce=I;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,de.__webglTexture,k,Ce)}else if(T!==null&&k!==0){const de=ge.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,de.__webglTexture,k)}y=-1},this.readRenderTargetPixels=function(T,I,k,z,F,Q,re){if(!(T&&T.isWebGLRenderTarget))return;let ue=ge.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&re!==void 0&&(ue=ue[re]),ue){ve.bindFramebuffer(D.FRAMEBUFFER,ue);try{const de=T.texture,Ce=de.format,Ae=de.type;if(!He.textureFormatReadable(Ce)||!He.textureTypeReadable(Ae))return;I>=0&&I<=T.width-z&&k>=0&&k<=T.height-F&&D.readPixels(I,k,z,F,Ue.convert(Ce),Ue.convert(Ae),Q)}finally{const de=P!==null?ge.get(P).__webglFramebuffer:null;ve.bindFramebuffer(D.FRAMEBUFFER,de)}}},this.readRenderTargetPixelsAsync=async function(T,I,k,z,F,Q,re){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=ge.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&re!==void 0&&(ue=ue[re]),ue)if(I>=0&&I<=T.width-z&&k>=0&&k<=T.height-F){ve.bindFramebuffer(D.FRAMEBUFFER,ue);const de=T.texture,Ce=de.format,Ae=de.type;if(!He.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,xe),D.bufferData(D.PIXEL_PACK_BUFFER,Q.byteLength,D.STREAM_READ),D.readPixels(I,k,z,F,Ue.convert(Ce),Ue.convert(Ae),0);const Xe=P!==null?ge.get(P).__webglFramebuffer:null;ve.bindFramebuffer(D.FRAMEBUFFER,Xe);const je=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await yp(D,je,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,xe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Q),D.deleteBuffer(xe),D.deleteSync(je),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,I=null,k=0){const z=Math.pow(2,-k),F=Math.floor(T.image.width*z),Q=Math.floor(T.image.height*z),re=I!==null?I.x:0,ue=I!==null?I.y:0;R.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,k,0,0,re,ue,F,Q),ve.unbindTexture()};const Ad=D.createFramebuffer(),Rd=D.createFramebuffer();this.copyTextureToTexture=function(T,I,k=null,z=null,F=0,Q=null){Q===null&&(F!==0?(ya("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=F,F=0):Q=0);let re,ue,de,Ce,Ae,xe,Xe,je,yt;const ft=T.isCompressedTexture?T.mipmaps[Q]:T.image;if(k!==null)re=k.max.x-k.min.x,ue=k.max.y-k.min.y,de=k.isBox3?k.max.z-k.min.z:1,Ce=k.min.x,Ae=k.min.y,xe=k.isBox3?k.min.z:0;else{const hn=Math.pow(2,-F);re=Math.floor(ft.width*hn),ue=Math.floor(ft.height*hn),T.isDataArrayTexture?de=ft.depth:T.isData3DTexture?de=Math.floor(ft.depth*hn):de=1,Ce=0,Ae=0,xe=0}z!==null?(Xe=z.x,je=z.y,yt=z.z):(Xe=0,je=0,yt=0);const qe=Ue.convert(I.format),ye=Ue.convert(I.type);let Pt;I.isData3DTexture?(R.setTexture3D(I,0),Pt=D.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(R.setTexture2DArray(I,0),Pt=D.TEXTURE_2D_ARRAY):(R.setTexture2D(I,0),Pt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);const $e=D.getParameter(D.UNPACK_ROW_LENGTH),Mn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),sr=D.getParameter(D.UNPACK_SKIP_PIXELS),Qt=D.getParameter(D.UNPACK_SKIP_ROWS),Kr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ft.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ft.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ce),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ae),D.pixelStorei(D.UNPACK_SKIP_IMAGES,xe);const it=T.isDataArrayTexture||T.isData3DTexture,fn=I.isDataArrayTexture||I.isData3DTexture;if(T.isDepthTexture){const hn=ge.get(T),zt=ge.get(I),Gt=ge.get(hn.__renderTarget),Ka=ge.get(zt.__renderTarget);ve.bindFramebuffer(D.READ_FRAMEBUFFER,Gt.__webglFramebuffer),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ka.__webglFramebuffer);for(let Ci=0;Ci<de;Ci++)it&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ge.get(T).__webglTexture,F,xe+Ci),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ge.get(I).__webglTexture,Q,yt+Ci)),D.blitFramebuffer(Ce,Ae,re,ue,Xe,je,re,ue,D.DEPTH_BUFFER_BIT,D.NEAREST);ve.bindFramebuffer(D.READ_FRAMEBUFFER,null),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(F!==0||T.isRenderTargetTexture||ge.has(T)){const hn=ge.get(T),zt=ge.get(I);ve.bindFramebuffer(D.READ_FRAMEBUFFER,Ad),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,Rd);for(let Gt=0;Gt<de;Gt++)it?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,hn.__webglTexture,F,xe+Gt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,hn.__webglTexture,F),fn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,zt.__webglTexture,Q,yt+Gt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,zt.__webglTexture,Q),F!==0?D.blitFramebuffer(Ce,Ae,re,ue,Xe,je,re,ue,D.COLOR_BUFFER_BIT,D.NEAREST):fn?D.copyTexSubImage3D(Pt,Q,Xe,je,yt+Gt,Ce,Ae,re,ue):D.copyTexSubImage2D(Pt,Q,Xe,je,Ce,Ae,re,ue);ve.bindFramebuffer(D.READ_FRAMEBUFFER,null),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else fn?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Pt,Q,Xe,je,yt,re,ue,de,qe,ye,ft.data):I.isCompressedArrayTexture?D.compressedTexSubImage3D(Pt,Q,Xe,je,yt,re,ue,de,qe,ft.data):D.texSubImage3D(Pt,Q,Xe,je,yt,re,ue,de,qe,ye,ft):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Q,Xe,je,re,ue,qe,ye,ft.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Q,Xe,je,ft.width,ft.height,qe,ft.data):D.texSubImage2D(D.TEXTURE_2D,Q,Xe,je,re,ue,qe,ye,ft);D.pixelStorei(D.UNPACK_ROW_LENGTH,$e),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Mn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,sr),D.pixelStorei(D.UNPACK_SKIP_ROWS,Qt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Kr),Q===0&&I.generateMipmaps&&D.generateMipmap(Pt),ve.unbindTexture()},this.copyTextureToTexture3D=function(T,I,k=null,z=null,F=0){return ya('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,I,k,z,F)},this.initRenderTarget=function(T){ge.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),ve.unbindTexture()},this.resetState=function(){b=0,w=0,P=null,ve.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ne._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ne._getUnpackColorSpace()}}class qv{constructor(e,t=" .:-=+*#%@",n={}){const i=n.resolution||.15,s=n.scale||1,o=n.color||!1,l=n.alpha||!1,c=n.block||!1,f=n.invert||!1,d=n.strResolution||"low";let a,u;const h=document.createElement("div");h.style.cursor="default";const g=document.createElement("table");h.appendChild(g);let _,m,p;this.setSize=function(O,U){a=O,u=U,e.setSize(O,U),v()},this.render=function(O,U){e.render(O,U),L(g)},this.domElement=h;function v(){_=Math.floor(a*i),m=Math.floor(u*i),A.width=_,A.height=m,p=e.domElement,p.style.backgroundColor&&(g.rows[0].cells[0].style.backgroundColor=p.style.backgroundColor,g.rows[0].cells[0].style.color=p.style.color),g.cellSpacing="0",g.cellPadding="0";const O=g.style;O.whiteSpace="pre",O.margin="0px",O.padding="0px",O.letterSpacing=E+"px",O.fontFamily=M,O.fontSize=P+"px",O.lineHeight=y+"px",O.textAlign="left",O.textDecoration="none"}const M="courier new, monospace",x=e.domElement,A=document.createElement("canvas");if(!A.getContext)return;const b=A.getContext("2d");if(!b.getImageData)return;let w;if(t)w=t.split("");else{const O=" .,:;i1tfLCG08@".split(""),U=" CGO08@".split("");w=o?U:O}const P=2/i*s,y=2/i*s;let E=0;if(d=="low")switch(s){case 1:E=-1;break;case 2:case 3:E=-2.1;break;case 4:E=-3.1;break;case 5:E=-4.15;break}if(d=="medium")switch(s){case 1:E=0;break;case 2:E=-1;break;case 3:E=-1.04;break;case 4:case 5:E=-2.1;break}if(d=="high")switch(s){case 1:case 2:E=0;break;case 3:case 4:case 5:E=-1;break}function L(O){b.clearRect(0,0,_,m),b.drawImage(x,0,0,_,m);const U=b.getImageData(0,0,_,m).data;let G="";for(let q=0;q<m;q+=2){for(let V=0;V<_;V++){const Y=(q*_+V)*4,H=U[Y],te=U[Y+1],ie=U[Y+2],pe=U[Y+3];let Me,ke;ke=(.3*H+.59*te+.11*ie)/255,pe==0&&(ke=1),Me=Math.floor((1-ke)*(w.length-1)),f&&(Me=w.length-Me-1);let W=w[Me];(W===void 0||W==" ")&&(W="&nbsp;"),o?G+="<span style='color:rgb("+H+","+te+","+ie+");"+(c?"background-color:rgb("+H+","+te+","+ie+");":"")+(l?"opacity:"+pe/255+";":"")+"'>"+W+"</span>":G+=W}G+="<br/>"}O.innerHTML=`<tr><td style="display:block;width:${a}px;height:${u}px;overflow:hidden">${G}</td></tr>`}}}const Yv=/^[og]\s*(.+)?/,jv=/^mtllib /,$v=/^usemtl /,Zv=/^usemap /,$u=/\s+/,Zu=new C,Do=new C,Ku=new C,Ju=new C,pn=new C,fa=new Ie;function Kv(){const r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const l={index:this.materials.length,name:i||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const f={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return f.clone=this.clone.bind(f),f}};return this.materials.push(l),l},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),i&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const i=this.vertices,s=this.object.geometry.vertices;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[t+0],i[t+1],i[t+2]),s.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const i=this.normals,s=this.object.geometry.normals;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[t+0],i[t+1],i[t+2]),s.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){const i=this.vertices,s=this.object.geometry.normals;Zu.fromArray(i,e),Do.fromArray(i,t),Ku.fromArray(i,n),pn.subVectors(Ku,Do),Ju.subVectors(Zu,Do),pn.cross(Ju),pn.normalize(),s.push(pn.x,pn.y,pn.z),s.push(pn.x,pn.y,pn.z),s.push(pn.x,pn.y,pn.z)},addColor:function(e,t,n){const i=this.colors,s=this.object.geometry.colors;i[e]!==void 0&&s.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&s.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&s.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){const i=this.uvs,s=this.object.geometry.uvs;s.push(i[e+0],i[e+1]),s.push(i[t+0],i[t+1]),s.push(i[n+0],i[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,s,o,l,c,f){const d=this.vertices.length;let a=this.parseVertexIndex(e,d),u=this.parseVertexIndex(t,d),h=this.parseVertexIndex(n,d);if(this.addVertex(a,u,h),this.addColor(a,u,h),l!==void 0&&l!==""){const g=this.normals.length;a=this.parseNormalIndex(l,g),u=this.parseNormalIndex(c,g),h=this.parseNormalIndex(f,g),this.addNormal(a,u,h)}else this.addFaceNormal(a,u,h);if(i!==void 0&&i!==""){const g=this.uvs.length;a=this.parseUVIndex(i,g),u=this.parseUVIndex(s,g),h=this.parseUVIndex(o,g),this.addUV(a,u,h),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){const s=this.parseVertexIndex(e[n],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let s=0,o=e.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(e[s],n));for(let s=0,o=t.length;s<o;s++)this.addUVLine(this.parseUVIndex(t[s],i))}};return r.startObject("",!1),r}class ih extends $r{constructor(e){super(e),this.materials=null}load(e,t,n,i){const s=this,o=new $f(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{t(s.parse(l))}catch(c){i&&i(c),s.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){const t=new Kv;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let i=[];for(let l=0,c=n.length;l<c;l++){const f=n[l].trimStart();if(f.length===0)continue;const d=f.charAt(0);if(d!=="#"){if(d==="v"){const a=f.split($u);switch(a[0]){case"v":t.vertices.push(parseFloat(a[1]),parseFloat(a[2]),parseFloat(a[3])),a.length>=7?(fa.setRGB(parseFloat(a[4]),parseFloat(a[5]),parseFloat(a[6]),Lt),t.colors.push(fa.r,fa.g,fa.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(a[1]),parseFloat(a[2]),parseFloat(a[3]));break;case"vt":t.uvs.push(parseFloat(a[1]),parseFloat(a[2]));break}}else if(d==="f"){const u=f.slice(1).trim().split($u),h=[];for(let _=0,m=u.length;_<m;_++){const p=u[_];if(p.length>0){const v=p.split("/");h.push(v)}}const g=h[0];for(let _=1,m=h.length-1;_<m;_++){const p=h[_],v=h[_+1];t.addFace(g[0],p[0],v[0],g[1],p[1],v[1],g[2],p[2],v[2])}}else if(d==="l"){const a=f.substring(1).trim().split(" ");let u=[];const h=[];if(f.indexOf("/")===-1)u=a;else for(let g=0,_=a.length;g<_;g++){const m=a[g].split("/");m[0]!==""&&u.push(m[0]),m[1]!==""&&h.push(m[1])}t.addLineGeometry(u,h)}else if(d==="p"){const u=f.slice(1).trim().split(" ");t.addPointGeometry(u)}else if((i=Yv.exec(f))!==null){const a=(" "+i[0].slice(1).trim()).slice(1);t.startObject(a)}else if($v.test(f))t.object.startMaterial(f.substring(7).trim(),t.materialLibraries);else if(jv.test(f))t.materialLibraries.push(f.substring(7).trim());else if(!Zv.test(f)){if(d==="s"){if(i=f.split(" "),i.length>1){const u=i[1].trim().toLowerCase();t.object.smooth=u!=="0"&&u!=="off"}else t.object.smooth=!0;const a=t.object.currentMaterial();a&&(a.smooth=t.object.smooth)}else if(f==="\0")continue}}}t.finalize();const s=new Fn;if(s.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let l=0,c=t.objects.length;l<c;l++){const f=t.objects[l],d=f.geometry,a=f.materials,u=d.type==="Line",h=d.type==="Points";let g=!1;if(d.vertices.length===0)continue;const _=new on;_.setAttribute("position",new xt(d.vertices,3)),d.normals.length>0&&_.setAttribute("normal",new xt(d.normals,3)),d.colors.length>0&&(g=!0,_.setAttribute("color",new xt(d.colors,3))),d.hasUVIndices===!0&&_.setAttribute("uv",new xt(d.uvs,2));const m=[];for(let v=0,M=a.length;v<M;v++){const x=a[v],A=x.name+"_"+x.smooth+"_"+g;let b=t.materials[A];if(this.materials!==null){if(b=this.materials.create(x.name),u&&b&&!(b instanceof Ma)){const w=new Ma;Hn.prototype.copy.call(w,b),w.color.copy(b.color),b=w}else if(h&&b&&!(b instanceof as)){const w=new as({size:10,sizeAttenuation:!1});Hn.prototype.copy.call(w,b),w.color.copy(b.color),w.map=b.map,b=w}}b===void 0&&(u?b=new Ma:h?b=new as({size:1,sizeAttenuation:!1}):b=new Yf,b.name=x.name,b.flatShading=!x.smooth,b.vertexColors=g,t.materials[A]=b),m.push(b)}let p;if(m.length>1){for(let v=0,M=a.length;v<M;v++){const x=a[v];_.addGroup(x.groupStart,x.groupCount,v)}u?p=new xu(_,m):h?p=new To(_,m):p=new pt(_,m)}else u?p=new xu(_,m[0]):h?p=new To(_,m[0]):p=new pt(_,m[0]);p.name=f.name,s.add(p)}else if(t.vertices.length>0){const l=new as({size:1,sizeAttenuation:!1}),c=new on;c.setAttribute("position",new xt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new xt(t.colors,3)),l.vertexColors=!0);const f=new To(c,l);s.add(f)}return s}}class Jv extends $r{constructor(e){super(e)}load(e,t,n,i){const s=this,o=this.path===""?om.extractUrlBase(e):this.path,l=new $f(this.manager);l.setPath(this.path),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{t(s.parse(c,o))}catch(f){i&&i(f),s.manager.itemError(e)}},n,i)}setMaterialOptions(e){return this.materialOptions=e,this}parse(e,t){const n=e.split(`
`);let i={};const s=/\s+/,o={};for(let c=0;c<n.length;c++){let f=n[c];if(f=f.trim(),f.length===0||f.charAt(0)==="#")continue;const d=f.indexOf(" ");let a=d>=0?f.substring(0,d):f;a=a.toLowerCase();let u=d>=0?f.substring(d+1):"";if(u=u.trim(),a==="newmtl")i={name:u},o[u]=i;else if(a==="ka"||a==="kd"||a==="ks"||a==="ke"){const h=u.split(s,3);i[a]=[parseFloat(h[0]),parseFloat(h[1]),parseFloat(h[2])]}else i[a]=u}const l=new Qv(this.resourcePath||t,this.materialOptions);return l.setCrossOrigin(this.crossOrigin),l.setManager(this.manager),l.setMaterials(o),l}}class Qv{constructor(e="",t={}){this.baseUrl=e,this.options=t,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:ni,this.wrap=this.options.wrap!==void 0?this.options.wrap:Aa}setCrossOrigin(e){return this.crossOrigin=e,this}setManager(e){this.manager=e}setMaterials(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(e){if(!this.options)return e;const t={};for(const n in e){const i=e[n],s={};t[n]=s;for(const o in i){let l=!0,c=i[o];const f=o.toLowerCase();switch(f){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(c=[c[0]/255,c[1]/255,c[2]/255]),this.options&&this.options.ignoreZeroRGBs&&c[0]===0&&c[1]===0&&c[2]===0&&(l=!1);break}l&&(s[f]=c)}}return t}preload(){for(const e in this.materialsInfo)this.create(e)}getIndex(e){return this.nameLookup[e]}getAsArray(){let e=0;for(const t in this.materialsInfo)this.materialsArray[e]=this.create(t),this.nameLookup[t]=e,e++;return this.materialsArray}create(e){return this.materials[e]===void 0&&this.createMaterial_(e),this.materials[e]}createMaterial_(e){const t=this,n=this.materialsInfo[e],i={name:e,side:this.side};function s(l,c){return typeof c!="string"||c===""?"":/^https?:\/\//i.test(c)?c:l+c}function o(l,c){if(i[l])return;const f=t.getTextureParams(c,i),d=t.loadTexture(s(t.baseUrl,f.url));d.repeat.copy(f.scale),d.offset.copy(f.offset),d.wrapS=t.wrap,d.wrapT=t.wrap,(l==="map"||l==="emissiveMap")&&(d.colorSpace=Lt),i[l]=d}for(const l in n){const c=n[l];let f;if(c!=="")switch(l.toLowerCase()){case"kd":i.color=Ne.toWorkingColorSpace(new Ie().fromArray(c),Lt);break;case"ks":i.specular=Ne.toWorkingColorSpace(new Ie().fromArray(c),Lt);break;case"ke":i.emissive=Ne.toWorkingColorSpace(new Ie().fromArray(c),Lt);break;case"map_kd":o("map",c);break;case"map_ks":o("specularMap",c);break;case"map_ke":o("emissiveMap",c);break;case"norm":o("normalMap",c);break;case"map_bump":case"bump":o("bumpMap",c);break;case"disp":o("displacementMap",c);break;case"map_d":o("alphaMap",c),i.transparent=!0;break;case"ns":i.shininess=parseFloat(c);break;case"d":f=parseFloat(c),f<1&&(i.opacity=f,i.transparent=!0);break;case"tr":f=parseFloat(c),this.options&&this.options.invertTrProperty&&(f=1-f),f>0&&(i.opacity=1-f,i.transparent=!0);break}}return this.materials[e]=new Yf(i),this.materials[e]}getTextureParams(e,t){const n={scale:new Ge(1,1),offset:new Ge(0,0)},i=e.split(/\s+/);let s;return s=i.indexOf("-bm"),s>=0&&(t.bumpScale=parseFloat(i[s+1]),i.splice(s,2)),s=i.indexOf("-mm"),s>=0&&(t.displacementBias=parseFloat(i[s+1]),t.displacementScale=parseFloat(i[s+2]),i.splice(s,3)),s=i.indexOf("-s"),s>=0&&(n.scale.set(parseFloat(i[s+1]),parseFloat(i[s+2])),i.splice(s,4)),s=i.indexOf("-o"),s>=0&&(n.offset.set(parseFloat(i[s+1]),parseFloat(i[s+2])),i.splice(s,4)),n.url=i.join(" ").trim(),n}loadTexture(e,t,n,i,s){const o=this.manager!==void 0?this.manager:jf;let l=o.getHandler(e);l===null&&(l=new Zf(o)),l.setCrossOrigin&&l.setCrossOrigin(this.crossOrigin);const c=l.load(e,n,i,s);return t!==void 0&&(c.mapping=t),c}}function Kn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function rh(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var an={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Hr={duration:.5,overwrite:!1,delay:0},fc,Dt,rt,Bn=1e8,Ot=1/Bn,Ll=Math.PI*2,ex=Ll/4,tx=0,sh=Math.sqrt,nx=Math.cos,ix=Math.sin,Ct=function(e){return typeof e=="string"},mt=function(e){return typeof e=="function"},ii=function(e){return typeof e=="number"},hc=function(e){return typeof e>"u"},Vn=function(e){return typeof e=="object"},jt=function(e){return e!==!1},dc=function(){return typeof window<"u"},ha=function(e){return mt(e)||Ct(e)},ah=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},kt=Array.isArray,Dl=/(?:-?\.?\d|\.)+/gi,oh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ar=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Io=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,lh=/[+-]=-?[.\d]+/,ch=/[^,'"\[\]\s]+/gi,rx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ot,Ln,Il,pc,ln={},Ia={},uh,fh=function(e){return(Ia=Vr(e,ln))&&Jt},mc=function(e,t){},Ss=function(e,t){return!t&&void 0},hh=function(e,t){return e&&(ln[e]=t)&&Ia&&(Ia[e]=t)||ln},Es=function(){return 0},sx={suppressEvents:!0,isStart:!0,kill:!1},Ea={suppressEvents:!0,kill:!1},ax={suppressEvents:!0},_c={},yi=[],Ul={},dh,nn={},Uo={},Qu=30,Ta=[],gc="",vc=function(e){var t=e[0],n,i;if(Vn(t)||mt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ta.length;i--&&!Ta[i].targetTest(t););n=Ta[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Oh(e[i],n)))||e.splice(i,1);return e},qi=function(e){return e._gsap||vc(xn(e))[0]._gsap},ph=function(e,t,n){return(n=e[t])&&mt(n)?e[t]():hc(n)&&e.getAttribute&&e.getAttribute(t)||n},$t=function(e,t){return(e=e.split(",")).forEach(t)||e},vt=function(e){return Math.round(e*1e5)/1e5||0},Tt=function(e){return Math.round(e*1e7)/1e7||0},Ir=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},ox=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ua=function(){var e=yi.length,t=yi.slice(0),n,i;for(Ul={},yi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},mh=function(e,t,n,i){yi.length&&!Dt&&Ua(),e.render(t,n,Dt&&t<0&&(e._initted||e._startAt)),yi.length&&!Dt&&Ua()},_h=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ch).length<2?t:Ct(e)?e.trim():e},gh=function(e){return e},cn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},lx=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Vr=function(e,t){for(var n in t)e[n]=t[n];return e},ef=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Vn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Fa=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},hs=function(e){var t=e.parent||ot,n=e.keyframes?lx(kt(e.keyframes)):cn;if(jt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},cx=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},vh=function(e,t,n,i,s){var o=e[i],l;if(s)for(l=t[s];o&&o[s]>l;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},qa=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},bi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Yi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},ux=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Fl=function(e,t,n,i){return e._startAt&&(Dt?e._startAt.revert(Ea):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},fx=function r(e){return!e||e._ts&&r(e.parent)},tf=function(e){return e._repeat?Gr(e._tTime,e=e.duration()+e._rDelay)*e:0},Gr=function(e,t){var n=Math.floor(e=Tt(e/t));return e&&n===e?n-1:n},Na=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ya=function(e){return e._end=Tt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ot)||0))},ja=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Tt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ya(e),n._dirty||Yi(n,e)),e},xh=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Na(e.rawTime(),t),(!t._dur||Os(0,t.totalDuration(),n)-t._tTime>Ot)&&t.render(n,!0)),Yi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},Un=function(e,t,n,i){return t.parent&&bi(t),t._start=Tt((ii(n)?n:n||e!==ot?mn(e,n,t):e._time)+t._delay),t._end=Tt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),vh(e,t,"_first","_last",e._sort?"_start":0),Nl(t)||(e._recent=t),i||xh(e,t),e._ts<0&&ja(e,e._tTime),e},yh=function(e,t){return(ln.ScrollTrigger||mc("scrollTrigger",t))&&ln.ScrollTrigger.create(t,e)},Mh=function(e,t,n,i,s){if(yc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Dt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&dh!==rn.frame)return yi.push(e),e._lazy=[s,i],1},hx=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Nl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},dx=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&hx(e)&&!(!e._initted&&Nl(e))||(e._ts<0||e._dp._ts<0)&&!Nl(e))?0:1,l=e._rDelay,c=0,f,d,a;if(l&&e._repeat&&(c=Os(0,e._tDur,t),d=Gr(c,l),e._yoyo&&d&1&&(o=1-o),d!==Gr(e._tTime,l)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Dt||i||e._zTime===Ot||!t&&e._zTime){if(!e._initted&&Mh(e,t,i,n,c))return;for(a=e._zTime,e._zTime=t||(n?Ot:0),n||(n=t&&!a),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=c,f=e._pt;f;)f.r(o,f.d),f=f._next;t<0&&Fl(e,t,n,!0),e._onUpdate&&!n&&sn(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&sn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&bi(e,1),!n&&!Dt&&(sn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},px=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Wr=function(e,t,n,i){var s=e._repeat,o=Tt(t)||0,l=e._tTime/e._tDur;return l&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Tt(o*(s+1)+e._rDelay*s):o,l>0&&!i&&ja(e,e._tTime=e._tDur*l),e.parent&&Ya(e),n||Yi(e.parent,e),e},nf=function(e){return e instanceof Vt?Yi(e):Wr(e,e._dur)},mx={_start:0,endTime:Es,totalDuration:Es},mn=function r(e,t,n){var i=e.labels,s=e._recent||mx,o=e.duration()>=Bn?s.endTime(!1):e._dur,l,c,f;return Ct(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),f=t.substr(-1)==="%",l=t.indexOf("="),c==="<"||c===">"?(l>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(f?(l<0?s:n).totalDuration()/100:1)):l<0?(t in i||(i[t]=o),i[t]):(c=parseFloat(t.charAt(l-1)+t.substr(l+1)),f&&n&&(c=c/100*(kt(n)?n[0]:n).totalDuration()),l>1?r(e,t.substr(0,l-1),n)+c:o+c)):t==null?o:+t},ds=function(e,t,n){var i=ii(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],l,c;if(i&&(o.duration=t[1]),o.parent=n,e){for(l=o,c=n;c&&!("immediateRender"in l);)l=c.vars.defaults||{},c=jt(c.vars.inherit)&&c.parent;o.immediateRender=jt(l.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Et(t[0],o,t[s+1])},Ai=function(e,t){return e||e===0?t(e):t},Os=function(e,t,n){return n<e?e:n>t?t:n},Nt=function(e,t){return!Ct(e)||!(t=rx.exec(e))?"":t[1]},_x=function(e,t,n){return Ai(n,function(i){return Os(e,t,i)})},Ol=[].slice,Sh=function(e,t){return e&&Vn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Vn(e[0]))&&!e.nodeType&&e!==Ln},gx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Ct(i)&&!t||Sh(i,1)?(s=n).push.apply(s,xn(i)):n.push(i)})||n},xn=function(e,t,n){return rt&&!t&&rt.selector?rt.selector(e):Ct(e)&&!n&&(Il||!Xr())?Ol.call((t||pc).querySelectorAll(e),0):kt(e)?gx(e,n):Sh(e)?Ol.call(e,0):e?[e]:[]},Bl=function(e){return e=xn(e)[0]||Ss("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return xn(t,n.querySelectorAll?n:n===e?Ss("Invalid scope")||pc.createElement("div"):e)}},Eh=function(e){return e.sort(function(){return .5-Math.random()})},Th=function(e){if(mt(e))return e;var t=Vn(e)?e:{each:e},n=ji(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},l=i>0&&i<1,c=isNaN(i)||l,f=t.axis,d=i,a=i;return Ct(i)?d=a={center:.5,edges:.5,end:1}[i]||0:!l&&c&&(d=i[0],a=i[1]),function(u,h,g){var _=(g||t).length,m=o[_],p,v,M,x,A,b,w,P,y;if(!m){if(y=t.grid==="auto"?0:(t.grid||[1,Bn])[1],!y){for(w=-1e8;w<(w=g[y++].getBoundingClientRect().left)&&y<_;);y<_&&y--}for(m=o[_]=[],p=c?Math.min(y,_)*d-.5:i%y,v=y===Bn?0:c?_*a/y-.5:i/y|0,w=0,P=Bn,b=0;b<_;b++)M=b%y-p,x=v-(b/y|0),m[b]=A=f?Math.abs(f==="y"?x:M):sh(M*M+x*x),A>w&&(w=A),A<P&&(P=A);i==="random"&&Eh(m),m.max=w-P,m.min=P,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(y>_?_-1:f?f==="y"?_/y:y:Math.max(y,_/y))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Nt(t.amount||t.each)||0,n=n&&_<0?Uh(n):n}return _=(m[u]-m.min)/m.max||0,Tt(m.b+(n?n(_):_)*m.v)+m.u}},kl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Tt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ii(n)?0:Nt(n))}},bh=function(e,t){var n=kt(e),i,s;return!n&&Vn(e)&&(i=n=e.radius||Bn,e.values?(e=xn(e.values),(s=!ii(e[0]))&&(i*=i)):e=kl(e.increment)),Ai(t,n?mt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var l=parseFloat(s?o.x:o),c=parseFloat(s?o.y:0),f=Bn,d=0,a=e.length,u,h;a--;)s?(u=e[a].x-l,h=e[a].y-c,u=u*u+h*h):u=Math.abs(e[a]-l),u<f&&(f=u,d=a);return d=!i||f<=i?e[d]:o,s||d===o||ii(o)?d:d+Nt(o)}:kl(e))},wh=function(e,t,n,i){return Ai(kt(e)?!t:n===!0?!!(n=0):!i,function(){return kt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},vx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},xx=function(e,t){return function(n){return e(parseFloat(n))+(t||Nt(n))}},yx=function(e,t,n){return Rh(e,t,0,1,n)},Ah=function(e,t,n){return Ai(n,function(i){return e[~~t(i)]})},Mx=function r(e,t,n){var i=t-e;return kt(e)?Ah(e,r(0,e.length),t):Ai(n,function(s){return(i+(s-e)%i)%i+e})},Sx=function r(e,t,n){var i=t-e,s=i*2;return kt(e)?Ah(e,r(0,e.length-1),t):Ai(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Ts=function(e){for(var t=0,n="",i,s,o,l;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),l=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(l?ch:Dl),n+=e.substr(t,i-t)+wh(l?s:+s[0],l?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Rh=function(e,t,n,i,s){var o=t-e,l=i-n;return Ai(s,function(c){return n+((c-e)/o*l||0)})},Ex=function r(e,t,n,i){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var o=Ct(e),l={},c,f,d,a,u;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(kt(e)&&!kt(t)){for(d=[],a=e.length,u=a-2,f=1;f<a;f++)d.push(r(e[f-1],e[f]));a--,s=function(g){g*=a;var _=Math.min(u,~~g);return d[_](g-_)},n=t}else i||(e=Vr(kt(e)?[]:{},e));if(!d){for(c in t)xc.call(l,e,c,"get",t[c]);s=function(g){return Ec(g,l)||(o?e.p:e)}}}return Ai(n,s)},rf=function(e,t,n){var i=e.labels,s=Bn,o,l,c;for(o in i)l=i[o]-t,l<0==!!n&&l&&s>(l=Math.abs(l))&&(c=o,s=l);return c},sn=function(e,t,n){var i=e.vars,s=i[t],o=rt,l=e._ctx,c,f,d;if(s)return c=i[t+"Params"],f=i.callbackScope||e,n&&yi.length&&Ua(),l&&(rt=l),d=c?s.apply(f,c):s.call(f),rt=o,d},ls=function(e){return bi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Dt),e.progress()<1&&sn(e,"onInterrupt"),e},Rr,Ch=[],Ph=function(e){if(e)if(e=!e.name&&e.default||e,dc()||e.headless){var t=e.name,n=mt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Es,render:Ec,add:xc,kill:kx,modifier:Bx,rawVars:0},o={targetTest:0,get:0,getSetter:Sc,aliases:{},register:0};if(Xr(),e!==i){if(nn[t])return;cn(i,cn(Fa(e,s),o)),Vr(i.prototype,Vr(s,Fa(e,o))),nn[i.prop=t]=i,e.targetTest&&(Ta.push(i),_c[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}hh(t,i),e.register&&e.register(Jt,i,Zt)}else Ch.push(e)},Qe=255,cs={aqua:[0,Qe,Qe],lime:[0,Qe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Qe],navy:[0,0,128],white:[Qe,Qe,Qe],olive:[128,128,0],yellow:[Qe,Qe,0],orange:[Qe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Qe,0,0],pink:[Qe,192,203],cyan:[0,Qe,Qe],transparent:[Qe,Qe,Qe,0]},Fo=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Qe+.5|0},Lh=function(e,t,n){var i=e?ii(e)?[e>>16,e>>8&Qe,e&Qe]:0:cs.black,s,o,l,c,f,d,a,u,h,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),cs[e])i=cs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),l=e.charAt(3),e="#"+s+s+o+o+l+l+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Qe,i&Qe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Qe,e&Qe]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Dl),!t)c=+i[0]%360/360,f=+i[1]/100,d=+i[2]/100,o=d<=.5?d*(f+1):d+f-d*f,s=d*2-o,i.length>3&&(i[3]*=1),i[0]=Fo(c+1/3,s,o),i[1]=Fo(c,s,o),i[2]=Fo(c-1/3,s,o);else if(~e.indexOf("="))return i=e.match(oh),n&&i.length<4&&(i[3]=1),i}else i=e.match(Dl)||cs.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Qe,o=i[1]/Qe,l=i[2]/Qe,a=Math.max(s,o,l),u=Math.min(s,o,l),d=(a+u)/2,a===u?c=f=0:(h=a-u,f=d>.5?h/(2-a-u):h/(a+u),c=a===s?(o-l)/h+(o<l?6:0):a===o?(l-s)/h+2:(s-o)/h+4,c*=60),i[0]=~~(c+.5),i[1]=~~(f*100+.5),i[2]=~~(d*100+.5)),n&&i.length<4&&(i[3]=1),i},Dh=function(e){var t=[],n=[],i=-1;return e.split(Mi).forEach(function(s){var o=s.match(Ar)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},sf=function(e,t,n){var i="",s=(e+i).match(Mi),o=t?"hsla(":"rgba(",l=0,c,f,d,a;if(!s)return e;if(s=s.map(function(u){return(u=Lh(u,t,1))&&o+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(d=Dh(e),c=n.c,c.join(i)!==d.c.join(i)))for(f=e.replace(Mi,"1").split(Ar),a=f.length-1;l<a;l++)i+=f[l]+(~c.indexOf(l)?s.shift()||o+"0,0,0,0)":(d.length?d:s.length?s:n).shift());if(!f)for(f=e.split(Mi),a=f.length-1;l<a;l++)i+=f[l]+s[l];return i+f[a]},Mi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in cs)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),Tx=/hsl[a]?\(/,Ih=function(e){var t=e.join(" "),n;if(Mi.lastIndex=0,Mi.test(t))return n=Tx.test(t),e[1]=sf(e[1],n),e[0]=sf(e[0],n,Dh(e[1])),!0},bs,rn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,l=[],c,f,d,a,u,h,g=function _(m){var p=r()-i,v=m===!0,M,x,A,b;if((p>e||p<0)&&(n+=p-t),i+=p,A=i-n,M=A-o,(M>0||v)&&(b=++a.frame,u=A-a.time*1e3,a.time=A=A/1e3,o+=M+(M>=s?4:s-M),x=1),v||(c=f(_)),x)for(h=0;h<l.length;h++)l[h](A,u,b,m)};return a={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){uh&&(!Il&&dc()&&(Ln=Il=window,pc=Ln.document||{},ln.gsap=Jt,(Ln.gsapVersions||(Ln.gsapVersions=[])).push(Jt.version),fh(Ia||Ln.GreenSockGlobals||!Ln.gsap&&Ln||{}),Ch.forEach(Ph)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&a.sleep(),f=d||function(m){return setTimeout(m,o-a.time*1e3+1|0)},bs=1,g(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(c),bs=0,f=Es},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=a.time*1e3+s},add:function(m,p,v){var M=p?function(x,A,b,w){m(x,A,b,w),a.remove(M)}:m;return a.remove(m),l[v?"unshift":"push"](M),Xr(),M},remove:function(m,p){~(p=l.indexOf(m))&&l.splice(p,1)&&h>=p&&h--},_listeners:l},a}(),Xr=function(){return!bs&&rn.wake()},Be={},bx=/^[\d.\-M][\d.\-,\s]/,wx=/["']/g,Ax=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,l,c,f;s<o;s++)c=n[s],l=s!==o-1?c.lastIndexOf(","):c.length,f=c.substr(0,l),t[i]=isNaN(f)?f.replace(wx,"").trim():+f,i=c.substr(l+1).trim();return t},Rx=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Cx=function(e){var t=(e+"").split("("),n=Be[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Ax(t[1])]:Rx(e).split(",").map(_h)):Be._CE&&bx.test(e)?Be._CE("",e):n},Uh=function(e){return function(t){return 1-e(1-t)}},Fh=function r(e,t){for(var n=e._first,i;n;)n instanceof Vt?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},ji=function(e,t){return e&&(mt(e)?e:Be[e]||Cx(e))||t},rr=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return $t(e,function(l){Be[l]=ln[l]=s,Be[o=l.toLowerCase()]=n;for(var c in s)Be[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Be[l+"."+c]=s[c]}),s},Nh=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},No=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Ll*(Math.asin(1/i)||0),l=function(d){return d===1?1:i*Math.pow(2,-10*d)*ix((d-o)*s)+1},c=e==="out"?l:e==="in"?function(f){return 1-l(1-f)}:Nh(l);return s=Ll/s,c.config=function(f,d){return r(e,f,d)},c},Oo=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Nh(n);return i.config=function(s){return r(e,s)},i};$t("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;rr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Be.Linear.easeNone=Be.none=Be.Linear.easeIn;rr("Elastic",No("in"),No("out"),No());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(l){return l<t?r*l*l:l<n?r*Math.pow(l-1.5/e,2)+.75:l<i?r*(l-=2.25/e)*l+.9375:r*Math.pow(l-2.625/e,2)+.984375};rr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);rr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});rr("Circ",function(r){return-(sh(1-r*r)-1)});rr("Sine",function(r){return r===1?1:-nx(r*ex)+1});rr("Back",Oo("in"),Oo("out"),Oo());Be.SteppedEase=Be.steps=ln.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Ot;return function(l){return((i*Os(0,o,l)|0)+s)*n}}};Hr.ease=Be["quad.out"];$t("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return gc+=r+","+r+"Params,"});var Oh=function(e,t){this.id=tx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ph,this.set=t?t.getSetter:Sc},ws=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Wr(this,+t.duration,1,1),this.data=t.data,rt&&(this._ctx=rt,rt.data.push(this)),bs||rn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Wr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Xr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ja(this,n),!s._dp||s.parent||xh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Un(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ot||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),mh(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+tf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+tf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Gr(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Na(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(Os(-Math.abs(this._delay),this._tDur,s),i!==!1),Ya(this),ux(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Xr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ot&&(this._tTime-=Ot)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Un(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(jt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Na(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=ax);var i=Dt;return Dt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Dt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,nf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,nf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(mn(this,n),jt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,jt(i)),this._dur||(this._zTime=-1e-8),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ot)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=mt(n)?n:gh,l=function(){var f=i.then;i.then=null,mt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=f),s(o),i.then=f};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){ls(this)},r}();cn(ws.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Vt=function(r){rh(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=jt(n.sortChildren),ot&&Un(n.parent||ot,Kn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&yh(Kn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return ds(0,arguments,this),this},t.from=function(i,s,o){return ds(1,arguments,this),this},t.fromTo=function(i,s,o,l){return ds(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,hs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Et(i,s,mn(this,o),1),this},t.call=function(i,s,o){return Un(this,Et.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,l,c,f,d){return o.duration=s,o.stagger=o.stagger||l,o.onComplete=f,o.onCompleteParams=d,o.parent=this,new Et(i,o,mn(this,c)),this},t.staggerFrom=function(i,s,o,l,c,f,d){return o.runBackwards=1,hs(o).immediateRender=jt(o.immediateRender),this.staggerTo(i,s,o,l,c,f,d)},t.staggerFromTo=function(i,s,o,l,c,f,d,a){return l.startAt=o,hs(l).immediateRender=jt(l.immediateRender),this.staggerTo(i,s,l,c,f,d,a)},t.render=function(i,s,o){var l=this._time,c=this._dirty?this.totalDuration():this._tDur,f=this._dur,d=i<=0?0:Tt(i),a=this._zTime<0!=i<0&&(this._initted||!f),u,h,g,_,m,p,v,M,x,A,b,w;if(this!==ot&&d>c&&i>=0&&(d=c),d!==this._tTime||o||a){if(l!==this._time&&f&&(d+=this._time-l,i+=this._time-l),u=d,x=this._start,M=this._ts,p=!M,a&&(f||(l=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=f+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(u=Tt(d%m),d===c?(_=this._repeat,u=f):(A=Tt(d/m),_=~~A,_&&_===A&&(u=f,_--),u>f&&(u=f)),A=Gr(this._tTime,m),!l&&this._tTime&&A!==_&&this._tTime-A*m-this._dur<=0&&(A=_),b&&_&1&&(u=f-u,w=1),_!==A&&!this._lock){var P=b&&A&1,y=P===(b&&_&1);if(_<A&&(P=!P),l=P?0:d%f?f:d,this._lock=1,this.render(l||(w?0:Tt(_*m)),s,!f)._lock=0,this._tTime=d,!s&&this.parent&&sn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),l&&l!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(f=this._dur,c=this._tDur,y&&(this._lock=2,l=P?f:-1e-4,this.render(l,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Fh(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=px(this,Tt(l),Tt(u)),v&&(d-=u-(u=v._start))),this._tTime=d,this._time=u,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,l=0),!l&&u&&!s&&!_&&(sn(this,"onStart"),this._tTime!==d))return this;if(u>=l&&i>=0)for(h=this._first;h;){if(g=h._next,(h._act||u>=h._start)&&h._ts&&v!==h){if(h.parent!==this)return this.render(i,s,o);if(h.render(h._ts>0?(u-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(u-h._start)*h._ts,s,o),u!==this._time||!this._ts&&!p){v=0,g&&(d+=this._zTime=-1e-8);break}}h=g}else{h=this._last;for(var E=i<0?i:u;h;){if(g=h._prev,(h._act||E<=h._end)&&h._ts&&v!==h){if(h.parent!==this)return this.render(i,s,o);if(h.render(h._ts>0?(E-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(E-h._start)*h._ts,s,o||Dt&&(h._initted||h._startAt)),u!==this._time||!this._ts&&!p){v=0,g&&(d+=this._zTime=E?-1e-8:Ot);break}}h=g}}if(v&&!s&&(this.pause(),v.render(u>=l?0:-1e-8)._zTime=u>=l?1:-1,this._ts))return this._start=x,Ya(this),this.render(i,s,o);this._onUpdate&&!s&&sn(this,"onUpdate",!0),(d===c&&this._tTime>=this.totalDuration()||!d&&l)&&(x===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!f)&&(d===c&&this._ts>0||!d&&this._ts<0)&&bi(this,1),!s&&!(i<0&&!l)&&(d||l||!c)&&(sn(this,d===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(ii(s)||(s=mn(this,s,i)),!(i instanceof ws)){if(kt(i))return i.forEach(function(l){return o.add(l,s)}),this;if(Ct(i))return this.addLabel(i,s);if(mt(i))i=Et.delayedCall(0,i);else return this}return this!==i?Un(this,i,s):this},t.getChildren=function(i,s,o,l){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),l===void 0&&(l=-1e8);for(var c=[],f=this._first;f;)f._start>=l&&(f instanceof Et?s&&c.push(f):(o&&c.push(f),i&&c.push.apply(c,f.getChildren(!0,s,o)))),f=f._next;return c},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Ct(i)?this.removeLabel(i):mt(i)?this.killTweensOf(i):(i.parent===this&&qa(this,i),i===this._recent&&(this._recent=this._last),Yi(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Tt(rn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=mn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var l=Et.delayedCall(0,s||Es,o);return l.data="isPause",this._hasPause=1,Un(this,l,mn(this,i))},t.removePause=function(i){var s=this._first;for(i=mn(this,i);s;)s._start===i&&s.data==="isPause"&&bi(s),s=s._next},t.killTweensOf=function(i,s,o){for(var l=this.getTweensOf(i,o),c=l.length;c--;)di!==l[c]&&l[c].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],l=xn(i),c=this._first,f=ii(s),d;c;)c instanceof Et?ox(c._targets,l)&&(f?(!di||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&o.push(c):(d=c.getTweensOf(l,s)).length&&o.push.apply(o,d),c=c._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,l=mn(o,i),c=s,f=c.startAt,d=c.onStart,a=c.onStartParams,u=c.immediateRender,h,g=Et.to(o,cn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:l,overwrite:"auto",duration:s.duration||Math.abs((l-(f&&"time"in f?f.time:o._time))/o.timeScale())||Ot,onStart:function(){if(o.pause(),!h){var m=s.duration||Math.abs((l-(f&&"time"in f?f.time:o._time))/o.timeScale());g._dur!==m&&Wr(g,m,0,1).render(g._time,!0,!0),h=1}d&&d.apply(g,a||[])}},s));return u?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,cn({startAt:{time:mn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),rf(this,mn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),rf(this,mn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ot)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var l=this._first,c=this.labels,f;l;)l._start>=o&&(l._start+=i,l._end+=i),l=l._next;if(s)for(f in c)c[f]>=o&&(c[f]+=i);return Yi(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Yi(this)},t.totalDuration=function(i){var s=0,o=this,l=o._last,c=Bn,f,d,a;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(a=o.parent;l;)f=l._prev,l._dirty&&l.totalDuration(),d=l._start,d>c&&o._sort&&l._ts&&!o._lock?(o._lock=1,Un(o,l,d-l._delay,1)._lock=0):c=d,d<0&&l._ts&&(s-=d,(!a&&!o._dp||a&&a.smoothChildTiming)&&(o._start+=d/o._ts,o._time-=d,o._tTime-=d),o.shiftChildren(-d,!1,-1/0),c=0),l._end>s&&l._ts&&(s=l._end),l=f;Wr(o,o===ot&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(ot._ts&&(mh(ot,Na(i,ot)),dh=rn.frame),rn.frame>=Qu){Qu+=an.autoSleep||120;var s=ot._first;if((!s||!s._ts)&&an.autoSleep&&rn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||rn.sleep()}}},e}(ws);cn(Vt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Px=function(e,t,n,i,s,o,l){var c=new Zt(this._pt,e,t,0,1,Gh,null,s),f=0,d=0,a,u,h,g,_,m,p,v;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ts(i)),o&&(v=[n,i],o(v,e,t),n=v[0],i=v[1]),u=n.match(Io)||[];a=Io.exec(i);)g=a[0],_=i.substring(f,a.index),h?h=(h+1)%5:_.substr(-5)==="rgba("&&(h=1),g!==u[d++]&&(m=parseFloat(u[d-1])||0,c._pt={_next:c._pt,p:_||d===1?_:",",s:m,c:g.charAt(1)==="="?Ir(m,g)-m:parseFloat(g)-m,m:h&&h<4?Math.round:0},f=Io.lastIndex);return c.c=f<i.length?i.substring(f,i.length):"",c.fp=l,(lh.test(i)||p)&&(c.e=0),this._pt=c,c},xc=function(e,t,n,i,s,o,l,c,f,d){mt(i)&&(i=i(s||0,e,o));var a=e[t],u=n!=="get"?n:mt(a)?f?e[t.indexOf("set")||!mt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](f):e[t]():a,h=mt(a)?f?Fx:Hh:Mc,g;if(Ct(i)&&(~i.indexOf("random(")&&(i=Ts(i)),i.charAt(1)==="="&&(g=Ir(u,i)+(Nt(u)||0),(g||g===0)&&(i=g))),!d||u!==i||zl)return!isNaN(u*i)&&i!==""?(g=new Zt(this._pt,e,t,+u||0,i-(u||0),typeof a=="boolean"?Ox:Vh,0,h),f&&(g.fp=f),l&&g.modifier(l,this,e),this._pt=g):(!a&&!(t in e)&&mc(t,i),Px.call(this,e,t,u,i,h,c||an.stringFilter,f))},Lx=function(e,t,n,i,s){if(mt(e)&&(e=ps(e,s,t,n,i)),!Vn(e)||e.style&&e.nodeType||kt(e)||ah(e))return Ct(e)?ps(e,s,t,n,i):e;var o={},l;for(l in e)o[l]=ps(e[l],s,t,n,i);return o},Bh=function(e,t,n,i,s,o){var l,c,f,d;if(nn[e]&&(l=new nn[e]).init(s,l.rawVars?t[e]:Lx(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=c=new Zt(n._pt,s,e,0,1,l.render,l,0,l.priority),n!==Rr))for(f=n._ptLookup[n._targets.indexOf(s)],d=l._props.length;d--;)f[l._props[d]]=c;return l},di,zl,yc=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,l=i.immediateRender,c=i.lazy,f=i.onUpdate,d=i.runBackwards,a=i.yoyoEase,u=i.keyframes,h=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,v=p&&p.data==="nested"?p.vars.targets:m,M=e._overwrite==="auto"&&!fc,x=e.timeline,A,b,w,P,y,E,L,O,U,G,q,V,Y;if(x&&(!u||!s)&&(s="none"),e._ease=ji(s,Hr.ease),e._yEase=a?Uh(ji(a===!0?s:a,Hr.ease)):0,a&&e._yoyo&&!e._repeat&&(a=e._yEase,e._yEase=e._ease,e._ease=a),e._from=!x&&!!i.runBackwards,!x||u&&!i.stagger){if(O=m[0]?qi(m[0]).harness:0,V=O&&i[O.prop],A=Fa(i,_c),_&&(_._zTime<0&&_.progress(1),t<0&&d&&l&&!h?_.render(-1,!0):_.revert(d&&g?Ea:sx),_._lazy=0),o){if(bi(e._startAt=Et.set(m,cn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&jt(c),startAt:null,delay:0,onUpdate:f&&function(){return sn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Dt||!l&&!h)&&e._startAt.revert(Ea),l&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(d&&g&&!_){if(t&&(l=!1),w=cn({overwrite:!1,data:"isFromStart",lazy:l&&!_&&jt(c),immediateRender:l,stagger:0,parent:p},A),V&&(w[O.prop]=V),bi(e._startAt=Et.set(m,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Dt?e._startAt.revert(Ea):e._startAt.render(-1,!0)),e._zTime=t,!l)r(e._startAt,Ot,Ot);else if(!t)return}for(e._pt=e._ptCache=0,c=g&&jt(c)||c&&!g,b=0;b<m.length;b++){if(y=m[b],L=y._gsap||vc(m)[b]._gsap,e._ptLookup[b]=G={},Ul[L.id]&&yi.length&&Ua(),q=v===m?b:v.indexOf(y),O&&(U=new O).init(y,V||A,e,q,v)!==!1&&(e._pt=P=new Zt(e._pt,y,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(H){G[H]=P}),U.priority&&(E=1)),!O||V)for(w in A)nn[w]&&(U=Bh(w,A,e,q,y,v))?U.priority&&(E=1):G[w]=P=xc.call(e,y,w,"get",A[w],q,v,0,i.stringFilter);e._op&&e._op[b]&&e.kill(y,e._op[b]),M&&e._pt&&(di=e,ot.killTweensOf(y,G,e.globalTime(t)),Y=!e.parent,di=0),e._pt&&c&&(Ul[L.id]=1)}E&&Wh(e),e._onInit&&e._onInit(e)}e._onUpdate=f,e._initted=(!e._op||e._pt)&&!Y,u&&t<=0&&x.render(Bn,!0,!0)},Dx=function(e,t,n,i,s,o,l,c){var f=(e._pt&&e._ptCache||(e._ptCache={}))[t],d,a,u,h;if(!f)for(f=e._ptCache[t]=[],u=e._ptLookup,h=e._targets.length;h--;){if(d=u[h][t],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==t&&d.fp!==t;)d=d._next;if(!d)return zl=1,e.vars[t]="+=0",yc(e,l),zl=0,c?Ss(t+" not eligible for reset"):1;f.push(d)}for(h=f.length;h--;)a=f[h],d=a._pt||a,d.s=(i||i===0)&&!s?i:d.s+(i||0)+o*d.c,d.c=n-d.s,a.e&&(a.e=vt(n)+Nt(a.e)),a.b&&(a.b=d.s+Nt(a.b))},Ix=function(e,t){var n=e[0]?qi(e[0]).harness:0,i=n&&n.aliases,s,o,l,c;if(!i)return t;s=Vr({},t);for(o in i)if(o in s)for(c=i[o].split(","),l=c.length;l--;)s[c[l]]=s[o];return s},Ux=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,l;if(kt(t))l=n[e]||(n[e]=[]),t.forEach(function(c,f){return l.push({t:f/(t.length-1)*100,v:c,e:s})});else for(o in t)l=n[o]||(n[o]=[]),o==="ease"||l.push({t:parseFloat(e),v:t[o],e:s})},ps=function(e,t,n,i,s){return mt(e)?e.call(t,n,i,s):Ct(e)&&~e.indexOf("random(")?Ts(e):e},kh=gc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",zh={};$t(kh+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return zh[r]=1});var Et=function(r){rh(e,r);function e(n,i,s,o){var l;typeof i=="number"&&(s.duration=i,i=s,s=null),l=r.call(this,o?i:hs(i))||this;var c=l.vars,f=c.duration,d=c.delay,a=c.immediateRender,u=c.stagger,h=c.overwrite,g=c.keyframes,_=c.defaults,m=c.scrollTrigger,p=c.yoyoEase,v=i.parent||ot,M=(kt(n)||ah(n)?ii(n[0]):"length"in i)?[n]:xn(n),x,A,b,w,P,y,E,L;if(l._targets=M.length?vc(M):Ss("GSAP target "+n+" not found. https://gsap.com",!an.nullTargetWarn)||[],l._ptLookup=[],l._overwrite=h,g||u||ha(f)||ha(d)){if(i=l.vars,x=l.timeline=new Vt({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:M}),x.kill(),x.parent=x._dp=Kn(l),x._start=0,u||ha(f)||ha(d)){if(w=M.length,E=u&&Th(u),Vn(u))for(P in u)~kh.indexOf(P)&&(L||(L={}),L[P]=u[P]);for(A=0;A<w;A++)b=Fa(i,zh),b.stagger=0,p&&(b.yoyoEase=p),L&&Vr(b,L),y=M[A],b.duration=+ps(f,Kn(l),A,y,M),b.delay=(+ps(d,Kn(l),A,y,M)||0)-l._delay,!u&&w===1&&b.delay&&(l._delay=d=b.delay,l._start+=d,b.delay=0),x.to(y,b,E?E(A,y,M):0),x._ease=Be.none;x.duration()?f=d=0:l.timeline=0}else if(g){hs(cn(x.vars.defaults,{ease:"none"})),x._ease=ji(g.ease||i.ease||"none");var O=0,U,G,q;if(kt(g))g.forEach(function(V){return x.to(M,V,">")}),x.duration();else{b={};for(P in g)P==="ease"||P==="easeEach"||Ux(P,g[P],b,g.easeEach);for(P in b)for(U=b[P].sort(function(V,Y){return V.t-Y.t}),O=0,A=0;A<U.length;A++)G=U[A],q={ease:G.e,duration:(G.t-(A?U[A-1].t:0))/100*f},q[P]=G.v,x.to(M,q,O),O+=q.duration;x.duration()<f&&x.to({},{duration:f-x.duration()})}}f||l.duration(f=x.duration())}else l.timeline=0;return h===!0&&!fc&&(di=Kn(l),ot.killTweensOf(M),di=0),Un(v,Kn(l),s),i.reversed&&l.reverse(),i.paused&&l.paused(!0),(a||!f&&!g&&l._start===Tt(v._time)&&jt(a)&&fx(Kn(l))&&v.data!=="nested")&&(l._tTime=-1e-8,l.render(Math.max(0,-d)||0)),m&&yh(Kn(l),m),l}var t=e.prototype;return t.render=function(i,s,o){var l=this._time,c=this._tDur,f=this._dur,d=i<0,a=i>c-Ot&&!d?c:i<Ot?0:i,u,h,g,_,m,p,v,M,x;if(!f)dx(this,i,s,o);else if(a!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(u=a,M=this.timeline,this._repeat){if(_=f+this._rDelay,this._repeat<-1&&d)return this.totalTime(_*100+i,s,o);if(u=Tt(a%_),a===c?(g=this._repeat,u=f):(m=Tt(a/_),g=~~m,g&&g===m?(u=f,g--):u>f&&(u=f)),p=this._yoyo&&g&1,p&&(x=this._yEase,u=f-u),m=Gr(this._tTime,_),u===l&&!o&&this._initted&&g===m)return this._tTime=a,this;g!==m&&(M&&this._yEase&&Fh(M,p),this.vars.repeatRefresh&&!p&&!this._lock&&u!==_&&this._initted&&(this._lock=o=1,this.render(Tt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Mh(this,d?i:u,o,s,a))return this._tTime=0,this;if(l!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(f!==this._dur)return this.render(i,s,o)}if(this._tTime=a,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(x||this._ease)(u/f),this._from&&(this.ratio=v=1-v),u&&!l&&!s&&!g&&(sn(this,"onStart"),this._tTime!==a))return this;for(h=this._pt;h;)h.r(v,h.d),h=h._next;M&&M.render(i<0?i:M._dur*M._ease(u/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(d&&Fl(this,i,s,o),sn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&sn(this,"onRepeat"),(a===this._tDur||!a)&&this._tTime===a&&(d&&!this._onUpdate&&Fl(this,i,!0,!0),(i||!f)&&(a===this._tDur&&this._ts>0||!a&&this._ts<0)&&bi(this,1),!s&&!(d&&!l)&&(a||l||p)&&(sn(this,a===c?"onComplete":"onReverseComplete",!0),this._prom&&!(a<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,l,c){bs||rn.wake(),this._ts||this.play();var f=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||yc(this,f),d=this._ease(f/this._dur),Dx(this,i,s,o,l,d,f,c)?this.resetTo(i,s,o,l,1):(ja(this,0),this.parent||vh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ls(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Dt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,di&&di.vars.overwrite!==!0)._first||ls(this),this.parent&&o!==this.timeline.totalDuration()&&Wr(this,this._dur*this.timeline._tDur/o,0,1),this}var l=this._targets,c=i?xn(i):l,f=this._ptLookup,d=this._pt,a,u,h,g,_,m,p;if((!s||s==="all")&&cx(l,c))return s==="all"&&(this._pt=0),ls(this);for(a=this._op=this._op||[],s!=="all"&&(Ct(s)&&(_={},$t(s,function(v){return _[v]=1}),s=_),s=Ix(l,s)),p=l.length;p--;)if(~c.indexOf(l[p])){u=f[p],s==="all"?(a[p]=s,g=u,h={}):(h=a[p]=a[p]||{},g=s);for(_ in g)m=u&&u[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&qa(this,m,"_pt"),delete u[_]),h!=="all"&&(h[_]=1)}return this._initted&&!this._pt&&d&&ls(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ds(1,arguments)},e.delayedCall=function(i,s,o,l){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:l})},e.fromTo=function(i,s,o){return ds(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return ot.killTweensOf(i,s,o)},e}(ws);cn(Et.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});$t("staggerTo,staggerFrom,staggerFromTo",function(r){Et[r]=function(){var e=new Vt,t=Ol.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Mc=function(e,t,n){return e[t]=n},Hh=function(e,t,n){return e[t](n)},Fx=function(e,t,n,i){return e[t](i.fp,n)},Nx=function(e,t,n){return e.setAttribute(t,n)},Sc=function(e,t){return mt(e[t])?Hh:hc(e[t])&&e.setAttribute?Nx:Mc},Vh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Ox=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Gh=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ec=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Bx=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},kx=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?qa(this,t,"_pt"):t.dep||(n=1),t=i;return!n},zx=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Wh=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Zt=function(){function r(t,n,i,s,o,l,c,f,d){this.t=n,this.s=s,this.c=o,this.p=i,this.r=l||Vh,this.d=c||this,this.set=f||Mc,this.pr=d||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=zx,this.m=n,this.mt=s,this.tween=i},r}();$t(gc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return _c[r]=1});ln.TweenMax=ln.TweenLite=Et;ln.TimelineLite=ln.TimelineMax=Vt;ot=new Vt({sortChildren:!1,defaults:Hr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});an.stringFilter=Ih;var $i=[],ba={},Hx=[],af=0,Vx=0,Bo=function(e){return(ba[e]||Hx).map(function(t){return t()})},Hl=function(){var e=Date.now(),t=[];e-af>2&&(Bo("matchMediaInit"),$i.forEach(function(n){var i=n.queries,s=n.conditions,o,l,c,f;for(l in i)o=Ln.matchMedia(i[l]).matches,o&&(c=1),o!==s[l]&&(s[l]=o,f=1);f&&(n.revert(),c&&t.push(n))}),Bo("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),af=e,Bo("matchMedia"))},Xh=function(){function r(t,n){this.selector=n&&Bl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Vx++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){mt(n)&&(s=i,i=n,n=mt);var o=this,l=function(){var f=rt,d=o.selector,a;return f&&f!==o&&f.data.push(o),s&&(o.selector=Bl(s)),rt=o,a=i.apply(o,arguments),mt(a)&&o._r.push(a),rt=f,o.selector=d,o.isReverted=!1,a};return o.last=l,n===mt?l(o,function(c){return o.add(null,c)}):n?o[n]=l:l},e.ignore=function(n){var i=rt;rt=null,n(this),rt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Et&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var l=s.getTweens(),c=s.data.length,f;c--;)f=s.data[c],f.data==="isFlip"&&(f.revert(),f.getChildren(!0,!0,!1).forEach(function(d){return l.splice(l.indexOf(d),1)}));for(l.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,a){return a.g-d.g||-1/0}).forEach(function(d){return d.t.revert(n)}),c=s.data.length;c--;)f=s.data[c],f instanceof Vt?f.data!=="nested"&&(f.scrollTrigger&&f.scrollTrigger.revert(),f.kill()):!(f instanceof Et)&&f.revert&&f.revert(n);s._r.forEach(function(d){return d(n,s)}),s.isReverted=!0}():this.data.forEach(function(l){return l.kill&&l.kill()}),this.clear(),i)for(var o=$i.length;o--;)$i[o].id===this.id&&$i.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),Gx=function(){function r(t){this.contexts=[],this.scope=t,rt&&rt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Vn(n)||(n={matches:n});var o=new Xh(0,s||this.scope),l=o.conditions={},c,f,d;rt&&!o.selector&&(o.selector=rt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(f in n)f==="all"?d=1:(c=Ln.matchMedia(n[f]),c&&($i.indexOf(o)<0&&$i.push(o),(l[f]=c.matches)&&(d=1),c.addListener?c.addListener(Hl):c.addEventListener("change",Hl)));return d&&i(o,function(a){return o.add(null,a)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Oa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Ph(i)})},timeline:function(e){return new Vt(e)},getTweensOf:function(e,t){return ot.getTweensOf(e,t)},getProperty:function(e,t,n,i){Ct(e)&&(e=xn(e)[0]);var s=qi(e||{}).get,o=n?gh:_h;return n==="native"&&(n=""),e&&(t?o((nn[t]&&nn[t].get||s)(e,t,n,i)):function(l,c,f){return o((nn[l]&&nn[l].get||s)(e,l,c,f))})},quickSetter:function(e,t,n){if(e=xn(e),e.length>1){var i=e.map(function(d){return Jt.quickSetter(d,t,n)}),s=i.length;return function(d){for(var a=s;a--;)i[a](d)}}e=e[0]||{};var o=nn[t],l=qi(e),c=l.harness&&(l.harness.aliases||{})[t]||t,f=o?function(d){var a=new o;Rr._pt=0,a.init(e,n?d+n:d,Rr,0,[e]),a.render(1,a),Rr._pt&&Ec(1,Rr)}:l.set(e,c);return o?f:function(d){return f(e,c,n?d+n:d,l,1)}},quickTo:function(e,t,n){var i,s=Jt.to(e,cn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(c,f,d){return s.resetTo(t,c,f,d)};return o.tween=s,o},isTweening:function(e){return ot.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ji(e.ease,Hr.ease)),ef(Hr,e||{})},config:function(e){return ef(an,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(l){return l&&!nn[l]&&!ln[l]&&Ss(t+" effect requires "+l+" plugin.")}),Uo[t]=function(l,c,f){return n(xn(l),cn(c||{},s),f)},o&&(Vt.prototype[t]=function(l,c,f){return this.add(Uo[t](l,Vn(c)?c:(f=c)&&{},this),f)})},registerEase:function(e,t){Be[e]=ji(t)},parseEase:function(e,t){return arguments.length?ji(e,t):Be},getById:function(e){return ot.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Vt(e),i,s;for(n.smoothChildTiming=jt(e.smoothChildTiming),ot.remove(n),n._dp=0,n._time=n._tTime=ot._time,i=ot._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Et&&i.vars.onComplete===i._targets[0]))&&Un(n,i,i._start-i._delay),i=s;return Un(ot,n,0),n},context:function(e,t){return e?new Xh(e,t):rt},matchMedia:function(e){return new Gx(e)},matchMediaRefresh:function(){return $i.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Hl()},addEventListener:function(e,t){var n=ba[e]||(ba[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ba[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Mx,wrapYoyo:Sx,distribute:Th,random:wh,snap:bh,normalize:yx,getUnit:Nt,clamp:_x,splitColor:Lh,toArray:xn,selector:Bl,mapRange:Rh,pipe:vx,unitize:xx,interpolate:Ex,shuffle:Eh},install:fh,effects:Uo,ticker:rn,updateRoot:Vt.updateRoot,plugins:nn,globalTimeline:ot,core:{PropTween:Zt,globals:hh,Tween:Et,Timeline:Vt,Animation:ws,getCache:qi,_removeLinkedListItem:qa,reverting:function(){return Dt},context:function(e){return e&&rt&&(rt.data.push(e),e._ctx=rt),rt},suppressOverwrites:function(e){return fc=e}}};$t("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Oa[r]=Et[r]});rn.add(Vt.updateRoot);Rr=Oa.to({},{duration:0});var Wx=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Xx=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Wx(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},ko=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(l){var c,f;if(Ct(s)&&(c={},$t(s,function(d){return c[d]=1}),s=c),t){c={};for(f in s)c[f]=t(s[f]);s=c}Xx(l,s)}}}},Jt=Oa.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,l,c;this.tween=n;for(o in t)c=e.getAttribute(o)||"",l=this.add(e,"setAttribute",(c||0)+"",t[o],i,s,0,0,o),l.op=o,l.b=c,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Dt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ko("roundProps",kl),ko("modifiers"),ko("snap",bh))||Oa;Et.version=Vt.version=Jt.version="3.12.7";uh=1;dc()&&Xr();Be.Power0;Be.Power1;Be.Power2;Be.Power3;Be.Power4;Be.Linear;Be.Quad;Be.Cubic;Be.Quart;Be.Quint;Be.Strong;Be.Elastic;Be.Back;Be.SteppedEase;Be.Bounce;Be.Sine;Be.Expo;Be.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var of,pi,Ur,Tc,Xi,lf,bc,qx=function(){return typeof window<"u"},ri={},Hi=180/Math.PI,Fr=Math.PI/180,yr=Math.atan2,cf=1e8,wc=/([A-Z])/g,Yx=/(left|right|width|margin|padding|x)/i,jx=/[\s,\(]\S/,Nn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Vl=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},$x=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Zx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Kx=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},qh=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Yh=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Jx=function(e,t,n){return e.style[t]=n},Qx=function(e,t,n){return e.style.setProperty(t,n)},ey=function(e,t,n){return e._gsap[t]=n},ty=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},ny=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},iy=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},ct="transform",Kt=ct+"Origin",ry=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in ri&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Nn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(l){return n.tfm[l]=Jn(i,l)}):this.tfm[e]=o.x?o[e]:Jn(i,e),e===Kt&&(this.tfm.zOrigin=o.zOrigin);else return Nn.transform.split(",").forEach(function(l){return r.call(n,l,t)});if(this.props.indexOf(ct)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Kt,t,"")),e=ct}(s||t)&&this.props.push(e,t,s[e])},jh=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},sy=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(wc,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=bc(),(!s||!s.isStart)&&!n[ct]&&(jh(n),i.zOrigin&&n[Kt]&&(n[Kt]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},$h=function(e,t){var n={target:e,props:[],revert:sy,save:ry};return e._gsap||Jt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Zh,Gl=function(e,t){var n=pi.createElementNS?pi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):pi.createElement(e);return n&&n.style?n:pi.createElement(e)},kn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(wc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,qr(t)||t,1)||""},uf="O,Moz,ms,Ms,Webkit".split(","),qr=function(e,t,n){var i=t||Xi,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(uf[o]+e in s););return o<0?null:(o===3?"ms":o>=0?uf[o]:"")+e},Wl=function(){qx()&&window.document&&(of=window,pi=of.document,Ur=pi.documentElement,Xi=Gl("div")||{style:{}},Gl("div"),ct=qr(ct),Kt=ct+"Origin",Xi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Zh=!!qr("perspective"),bc=Jt.core.reverting,Tc=1)},ff=function(e){var t=e.ownerSVGElement,n=Gl("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ur.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ur.removeChild(n),s},hf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Kh=function(e){var t,n;try{t=e.getBBox()}catch{t=ff(e),n=1}return t&&(t.width||t.height)||n||(t=ff(e)),t&&!t.width&&!t.x&&!t.y?{x:+hf(e,["x","cx","x1"])||0,y:+hf(e,["y","cy","y1"])||0,width:0,height:0}:t},Jh=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Kh(e))},er=function(e,t){if(t){var n=e.style,i;t in ri&&t!==Kt&&(t=ct),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(wc,"-$1").toLowerCase())):n.removeAttribute(t)}},mi=function(e,t,n,i,s,o){var l=new Zt(e._pt,t,n,0,1,o?Yh:qh);return e._pt=l,l.b=i,l.e=s,e._props.push(n),l},df={deg:1,rad:1,turn:1},ay={grid:1,flex:1},wi=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",l=Xi.style,c=Yx.test(t),f=e.tagName.toLowerCase()==="svg",d=(f?"client":"offset")+(c?"Width":"Height"),a=100,u=i==="px",h=i==="%",g,_,m,p;if(i===o||!s||df[i]||df[o])return s;if(o!=="px"&&!u&&(s=r(e,t,n,"px")),p=e.getCTM&&Jh(e),(h||o==="%")&&(ri[t]||~t.indexOf("adius")))return g=p?e.getBBox()[c?"width":"height"]:e[d],vt(h?s/g*a:s/100*g);if(l[c?"width":"height"]=a+(u?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!f?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===pi||!_.appendChild)&&(_=pi.body),m=_._gsap,m&&h&&m.width&&c&&m.time===rn.time&&!m.uncache)return vt(s/m.width*a);if(h&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=a+i,g=e[d],v?e.style[t]=v:er(e,t)}else(h||o==="%")&&!ay[kn(_,"display")]&&(l.position=kn(e,"position")),_===e&&(l.position="static"),_.appendChild(Xi),g=Xi[d],_.removeChild(Xi),l.position="absolute";return c&&h&&(m=qi(_),m.time=rn.time,m.width=_[d]),vt(u?g*s/a:g&&s?a/g*s:0)},Jn=function(e,t,n,i){var s;return Tc||Wl(),t in Nn&&t!=="transform"&&(t=Nn[t],~t.indexOf(",")&&(t=t.split(",")[0])),ri[t]&&t!=="transform"?(s=Rs(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ka(kn(e,Kt))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ba[t]&&Ba[t](e,t,n)||kn(e,t)||ph(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?wi(e,t,s,n)+n:s},oy=function(e,t,n,i){if(!n||n==="none"){var s=qr(t,e,1),o=s&&kn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=kn(e,"borderTopColor"))}var l=new Zt(this._pt,e.style,t,0,1,Gh),c=0,f=0,d,a,u,h,g,_,m,p,v,M,x,A;if(l.b=n,l.e=i,n+="",i+="",i==="auto"&&(_=e.style[t],e.style[t]=i,i=kn(e,t)||i,_?e.style[t]=_:er(e,t)),d=[n,i],Ih(d),n=d[0],i=d[1],u=n.match(Ar)||[],A=i.match(Ar)||[],A.length){for(;a=Ar.exec(i);)m=a[0],v=i.substring(c,a.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(_=u[f++]||"")&&(h=parseFloat(_)||0,x=_.substr((h+"").length),m.charAt(1)==="="&&(m=Ir(h,m)+x),p=parseFloat(m),M=m.substr((p+"").length),c=Ar.lastIndex-M.length,M||(M=M||an.units[t]||x,c===i.length&&(i+=M,l.e+=M)),x!==M&&(h=wi(e,t,_,M)||0),l._pt={_next:l._pt,p:v||f===1?v:",",s:h,c:p-h,m:g&&g<4||t==="zIndex"?Math.round:0});l.c=c<i.length?i.substring(c,i.length):""}else l.r=t==="display"&&i==="none"?Yh:qh;return lh.test(i)&&(l.e=0),this._pt=l,l},pf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ly=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=pf[n]||n,t[1]=pf[i]||i,t.join(" ")},cy=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,l,c,f;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),f=s.length;--f>-1;)l=s[f],ri[l]&&(c=1,l=l==="transformOrigin"?Kt:ct),er(n,l);c&&(er(n,ct),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Rs(n,1),o.uncache=1,jh(i)))}},Ba={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Zt(e._pt,t,n,0,0,cy);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},As=[1,0,0,1,0,0],Qh={},ed=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},mf=function(e){var t=kn(e,ct);return ed(t)?As:t.substr(7).match(oh).map(vt)},Ac=function(e,t){var n=e._gsap||qi(e),i=e.style,s=mf(e),o,l,c,f;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?As:s):(s===As&&!e.offsetParent&&e!==Ur&&!n.svg&&(c=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(f=1,l=e.nextElementSibling,Ur.appendChild(e)),s=mf(e),c?i.display=c:er(e,"display"),f&&(l?o.insertBefore(e,l):o?o.appendChild(e):Ur.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Xl=function(e,t,n,i,s,o){var l=e._gsap,c=s||Ac(e,!0),f=l.xOrigin||0,d=l.yOrigin||0,a=l.xOffset||0,u=l.yOffset||0,h=c[0],g=c[1],_=c[2],m=c[3],p=c[4],v=c[5],M=t.split(" "),x=parseFloat(M[0])||0,A=parseFloat(M[1])||0,b,w,P,y;n?c!==As&&(w=h*m-g*_)&&(P=x*(m/w)+A*(-_/w)+(_*v-m*p)/w,y=x*(-g/w)+A*(h/w)-(h*v-g*p)/w,x=P,A=y):(b=Kh(e),x=b.x+(~M[0].indexOf("%")?x/100*b.width:x),A=b.y+(~(M[1]||M[0]).indexOf("%")?A/100*b.height:A)),i||i!==!1&&l.smooth?(p=x-f,v=A-d,l.xOffset=a+(p*h+v*_)-p,l.yOffset=u+(p*g+v*m)-v):l.xOffset=l.yOffset=0,l.xOrigin=x,l.yOrigin=A,l.smooth=!!i,l.origin=t,l.originIsAbsolute=!!n,e.style[Kt]="0px 0px",o&&(mi(o,l,"xOrigin",f,x),mi(o,l,"yOrigin",d,A),mi(o,l,"xOffset",a,l.xOffset),mi(o,l,"yOffset",u,l.yOffset)),e.setAttribute("data-svg-origin",x+" "+A)},Rs=function(e,t){var n=e._gsap||new Oh(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",l="deg",c=getComputedStyle(e),f=kn(e,Kt)||"0",d,a,u,h,g,_,m,p,v,M,x,A,b,w,P,y,E,L,O,U,G,q,V,Y,H,te,ie,pe,Me,ke,W,ee;return d=a=u=_=m=p=v=M=x=0,h=g=1,n.svg=!!(e.getCTM&&Jh(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[ct]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[ct]!=="none"?c[ct]:"")),i.scale=i.rotate=i.translate="none"),w=Ac(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),f=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),Xl(e,Y||f,!!Y||n.originIsAbsolute,n.smooth!==!1,w)),A=n.xOrigin||0,b=n.yOrigin||0,w!==As&&(L=w[0],O=w[1],U=w[2],G=w[3],d=q=w[4],a=V=w[5],w.length===6?(h=Math.sqrt(L*L+O*O),g=Math.sqrt(G*G+U*U),_=L||O?yr(O,L)*Hi:0,v=U||G?yr(U,G)*Hi+_:0,v&&(g*=Math.abs(Math.cos(v*Fr))),n.svg&&(d-=A-(A*L+b*U),a-=b-(A*O+b*G))):(ee=w[6],ke=w[7],ie=w[8],pe=w[9],Me=w[10],W=w[11],d=w[12],a=w[13],u=w[14],P=yr(ee,Me),m=P*Hi,P&&(y=Math.cos(-P),E=Math.sin(-P),Y=q*y+ie*E,H=V*y+pe*E,te=ee*y+Me*E,ie=q*-E+ie*y,pe=V*-E+pe*y,Me=ee*-E+Me*y,W=ke*-E+W*y,q=Y,V=H,ee=te),P=yr(-U,Me),p=P*Hi,P&&(y=Math.cos(-P),E=Math.sin(-P),Y=L*y-ie*E,H=O*y-pe*E,te=U*y-Me*E,W=G*E+W*y,L=Y,O=H,U=te),P=yr(O,L),_=P*Hi,P&&(y=Math.cos(P),E=Math.sin(P),Y=L*y+O*E,H=q*y+V*E,O=O*y-L*E,V=V*y-q*E,L=Y,q=H),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),h=vt(Math.sqrt(L*L+O*O+U*U)),g=vt(Math.sqrt(V*V+ee*ee)),P=yr(q,V),v=Math.abs(P)>2e-4?P*Hi:0,x=W?1/(W<0?-W:W):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!ed(kn(e,ct)),Y&&e.setAttribute("transform",Y))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(h*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=d-((n.xPercent=d&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=a-((n.yPercent=a&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-a)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=vt(h),n.scaleY=vt(g),n.rotation=vt(_)+l,n.rotationX=vt(m)+l,n.rotationY=vt(p)+l,n.skewX=v+l,n.skewY=M+l,n.transformPerspective=x+o,(n.zOrigin=parseFloat(f.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Kt]=ka(f)),n.xOffset=n.yOffset=0,n.force3D=an.force3D,n.renderTransform=n.svg?fy:Zh?td:uy,n.uncache=0,n},ka=function(e){return(e=e.split(" "))[0]+" "+e[1]},zo=function(e,t,n){var i=Nt(t);return vt(parseFloat(t)+parseFloat(wi(e,"x",n+"px",i)))+i},uy=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,td(e,t)},Ni="0deg",rs="0px",Oi=") ",td=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,l=n.y,c=n.z,f=n.rotation,d=n.rotationY,a=n.rotationX,u=n.skewX,h=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,v=n.target,M=n.zOrigin,x="",A=p==="auto"&&e&&e!==1||p===!0;if(M&&(a!==Ni||d!==Ni)){var b=parseFloat(d)*Fr,w=Math.sin(b),P=Math.cos(b),y;b=parseFloat(a)*Fr,y=Math.cos(b),o=zo(v,o,w*y*-M),l=zo(v,l,-Math.sin(b)*-M),c=zo(v,c,P*y*-M+M)}m!==rs&&(x+="perspective("+m+Oi),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(A||o!==rs||l!==rs||c!==rs)&&(x+=c!==rs||A?"translate3d("+o+", "+l+", "+c+") ":"translate("+o+", "+l+Oi),f!==Ni&&(x+="rotate("+f+Oi),d!==Ni&&(x+="rotateY("+d+Oi),a!==Ni&&(x+="rotateX("+a+Oi),(u!==Ni||h!==Ni)&&(x+="skew("+u+", "+h+Oi),(g!==1||_!==1)&&(x+="scale("+g+", "+_+Oi),v.style[ct]=x||"translate(0, 0)"},fy=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,l=n.y,c=n.rotation,f=n.skewX,d=n.skewY,a=n.scaleX,u=n.scaleY,h=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,v=n.forceCSS,M=parseFloat(o),x=parseFloat(l),A,b,w,P,y;c=parseFloat(c),f=parseFloat(f),d=parseFloat(d),d&&(d=parseFloat(d),f+=d,c+=d),c||f?(c*=Fr,f*=Fr,A=Math.cos(c)*a,b=Math.sin(c)*a,w=Math.sin(c-f)*-u,P=Math.cos(c-f)*u,f&&(d*=Fr,y=Math.tan(f-d),y=Math.sqrt(1+y*y),w*=y,P*=y,d&&(y=Math.tan(d),y=Math.sqrt(1+y*y),A*=y,b*=y)),A=vt(A),b=vt(b),w=vt(w),P=vt(P)):(A=a,P=u,b=w=0),(M&&!~(o+"").indexOf("px")||x&&!~(l+"").indexOf("px"))&&(M=wi(h,"x",o,"px"),x=wi(h,"y",l,"px")),(g||_||m||p)&&(M=vt(M+g-(g*A+_*w)+m),x=vt(x+_-(g*b+_*P)+p)),(i||s)&&(y=h.getBBox(),M=vt(M+i/100*y.width),x=vt(x+s/100*y.height)),y="matrix("+A+","+b+","+w+","+P+","+M+","+x+")",h.setAttribute("transform",y),v&&(h.style[ct]=y)},hy=function(e,t,n,i,s){var o=360,l=Ct(s),c=parseFloat(s)*(l&&~s.indexOf("rad")?Hi:1),f=c-i,d=i+f+"deg",a,u;return l&&(a=s.split("_")[1],a==="short"&&(f%=o,f!==f%(o/2)&&(f+=f<0?o:-360)),a==="cw"&&f<0?f=(f+o*cf)%o-~~(f/o)*o:a==="ccw"&&f>0&&(f=(f-o*cf)%o-~~(f/o)*o)),e._pt=u=new Zt(e._pt,t,n,i,f,$x),u.e=d,u.u="deg",e._props.push(n),u},_f=function(e,t){for(var n in t)e[n]=t[n];return e},dy=function(e,t,n){var i=_f({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,l,c,f,d,a,u,h,g;i.svg?(f=n.getAttribute("transform"),n.setAttribute("transform",""),o[ct]=t,l=Rs(n,1),er(n,ct),n.setAttribute("transform",f)):(f=getComputedStyle(n)[ct],o[ct]=t,l=Rs(n,1),o[ct]=f);for(c in ri)f=i[c],d=l[c],f!==d&&s.indexOf(c)<0&&(h=Nt(f),g=Nt(d),a=h!==g?wi(n,c,f,g):parseFloat(f),u=parseFloat(d),e._pt=new Zt(e._pt,l,c,a,u-a,Vl),e._pt.u=g||0,e._props.push(c));_f(l,i)};$t("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(l){return e<2?r+l:"border"+l+r});Ba[e>1?"border"+r:r]=function(l,c,f,d,a){var u,h;if(arguments.length<4)return u=o.map(function(g){return Jn(l,g,f)}),h=u.join(" "),h.split(u[0]).length===5?u[0]:h;u=(d+"").split(" "),h={},o.forEach(function(g,_){return h[g]=u[_]=u[_]||u[(_-1)/2|0]}),l.init(c,h,a)}});var nd={name:"css",register:Wl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,l=e.style,c=n.vars.startAt,f,d,a,u,h,g,_,m,p,v,M,x,A,b,w,P;Tc||Wl(),this.styles=this.styles||$h(e),P=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(d=t[_],!(nn[_]&&Bh(_,t,n,i,e,s)))){if(h=typeof d,g=Ba[_],h==="function"&&(d=d.call(n,i,e,s),h=typeof d),h==="string"&&~d.indexOf("random(")&&(d=Ts(d)),g)g(this,e,_,d,n)&&(w=1);else if(_.substr(0,2)==="--")f=(getComputedStyle(e).getPropertyValue(_)+"").trim(),d+="",Mi.lastIndex=0,Mi.test(f)||(m=Nt(f),p=Nt(d)),p?m!==p&&(f=wi(e,_,f,p)+p):m&&(d+=m),this.add(l,"setProperty",f,d,i,s,0,0,_),o.push(_),P.push(_,0,l[_]);else if(h!=="undefined"){if(c&&_ in c?(f=typeof c[_]=="function"?c[_].call(n,i,e,s):c[_],Ct(f)&&~f.indexOf("random(")&&(f=Ts(f)),Nt(f+"")||f==="auto"||(f+=an.units[_]||Nt(Jn(e,_))||""),(f+"").charAt(1)==="="&&(f=Jn(e,_))):f=Jn(e,_),u=parseFloat(f),v=h==="string"&&d.charAt(1)==="="&&d.substr(0,2),v&&(d=d.substr(2)),a=parseFloat(d),_ in Nn&&(_==="autoAlpha"&&(u===1&&Jn(e,"visibility")==="hidden"&&a&&(u=0),P.push("visibility",0,l.visibility),mi(this,l,"visibility",u?"inherit":"hidden",a?"inherit":"hidden",!a)),_!=="scale"&&_!=="transform"&&(_=Nn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in ri,M){if(this.styles.save(_),x||(A=e._gsap,A.renderTransform&&!t.parseTransform||Rs(e,t.parseTransform),b=t.smoothOrigin!==!1&&A.smooth,x=this._pt=new Zt(this._pt,l,ct,0,1,A.renderTransform,A,0,-1),x.dep=1),_==="scale")this._pt=new Zt(this._pt,A,"scaleY",A.scaleY,(v?Ir(A.scaleY,v+a):a)-A.scaleY||0,Vl),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(Kt,0,l[Kt]),d=ly(d),A.svg?Xl(e,d,0,b,0,this):(p=parseFloat(d.split(" ")[2])||0,p!==A.zOrigin&&mi(this,A,"zOrigin",A.zOrigin,p),mi(this,l,_,ka(f),ka(d)));continue}else if(_==="svgOrigin"){Xl(e,d,1,b,0,this);continue}else if(_ in Qh){hy(this,A,_,u,v?Ir(u,v+d):d);continue}else if(_==="smoothOrigin"){mi(this,A,"smooth",A.smooth,d);continue}else if(_==="force3D"){A[_]=d;continue}else if(_==="transform"){dy(this,d,e);continue}}else _ in l||(_=qr(_)||_);if(M||(a||a===0)&&(u||u===0)&&!jx.test(d)&&_ in l)m=(f+"").substr((u+"").length),a||(a=0),p=Nt(d)||(_ in an.units?an.units[_]:m),m!==p&&(u=wi(e,_,f,p)),this._pt=new Zt(this._pt,M?A:l,_,u,(v?Ir(u,v+a):a)-u,!M&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?Kx:Vl),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=f,this._pt.r=Zx);else if(_ in l)oy.call(this,e,_,f,v?v+d:d);else if(_ in e)this.add(e,_,f||e[_],v?v+d:d,i,s);else if(_!=="parseTransform"){mc(_,d);continue}M||(_ in l?P.push(_,0,l[_]):typeof e[_]=="function"?P.push(_,2,e[_]()):P.push(_,1,f||e[_])),o.push(_)}}w&&Wh(this)},render:function(e,t){if(t.tween._time||!bc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Jn,aliases:Nn,getSetter:function(e,t,n){var i=Nn[t];return i&&i.indexOf(",")<0&&(t=i),t in ri&&t!==Kt&&(e._gsap.x||Jn(e,"x"))?n&&lf===n?t==="scale"?ty:ey:(lf=n||{})&&(t==="scale"?ny:iy):e.style&&!hc(e.style[t])?Jx:~t.indexOf("-")?Qx:Sc(e,t)},core:{_removeProperty:er,_getMatrix:Ac}};Jt.utils.checkPrefix=qr;Jt.core.getStyleSaver=$h;(function(r,e,t,n){var i=$t(r+","+e+","+t,function(s){ri[s]=1});$t(e,function(s){an.units[s]="deg",Qh[s]=1}),Nn[i[13]]=r+","+e,$t(n,function(s){var o=s.split(":");Nn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");$t("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){an.units[r]="px"});Jt.registerPlugin(nd);var _t=Jt.registerPlugin(nd)||Jt;_t.core.Tween;const py=20;let da=null;const Rc=(r,e,t=40,n,i,s)=>{const o=[];da&&clearInterval(da),e.forEach((c,f)=>{Array.from(c).forEach((d,a)=>{o.push({row:f,col:a,char:d}),a++,n==="jp"&&a%py===0&&o.push({row:f,col:a,char:`
`})}),o.push({row:f,col:c.length,char:`
`})});let l=0;da=setInterval(()=>{if(l<o.length){i&&i.playSE("type");const c=o[l],f=`${r==null?void 0:r.innerHTML}${c.char===`
`?"<br>":c.char}`;r&&(r.innerHTML=f),l++}else clearInterval(da)},t)},my=r=>{r.innerHTML=""},et=r=>r*(Math.PI/180),Cc=()=>/iPhone|Android.+Mobile|iPod|Windows Phone/.test(navigator.userAgent);let us=0,fs=0;const _y=(r,e)=>{let t=!1,n={x:0,y:0};r.domElement.addEventListener("mousedown",s=>{t=!0,n.x=s.clientX,n.y=s.clientY}),r.domElement.addEventListener("mousemove",s=>{t&&i(s.clientX,s.clientY)}),window.addEventListener("mouseup",()=>{t=!1}),r.domElement.addEventListener("touchstart",s=>{s.preventDefault(),t=!0,n.x=s.touches[0].clientX,n.y=s.touches[0].clientY},{passive:!1}),r.domElement.addEventListener("touchmove",s=>{t&&(s.preventDefault(),i(s.touches[0].clientX,s.touches[0].clientY))},{passive:!1}),window.addEventListener("touchend",()=>{t=!1});function i(s,o){const l=s-n.x,c=o-n.y;us-=l*.005,fs-=c*.005,fs=Math.max(-Math.PI/3.5,Math.min(Math.PI/3.5,fs));const f=Math.PI/3;us=Math.max(-f,Math.min(f,us)),e.rotation.order="YXZ",e.rotation.y=us,e.rotation.x=fs,n.x=s,n.y=o}},id=r=>{us=r.y,fs=r.x},gy=r=>{_t.timeline().to(r.rotation,{x:r.rotation.x+=.2,duration:.1}).to(r.rotation,{x:r.rotation.x-=.2,duration:.1})};let _i=null;const vy=r=>{_i==null||_i.kill(),_i=_t.to(r.position,{y:"+=0.05",duration:1,repeat:-1,yoyo:!0,ease:"sine.inOut"})},xy=()=>{_i==null||_i.kill(),_i=null},yy=(r,e,t)=>{window.addEventListener("resize",()=>{const n=window.innerWidth,i=window.innerHeight;t.aspect=n/i,t.updateProjectionMatrix(),r.setSize(n,i),e.setSize(n,i),rd(r,e,t)})},rd=(r,e,t)=>{const n=window.innerWidth,i=window.innerHeight;let s,o;s=n,o=i,r.setSize(n,i),e.setSize(n,i),t.aspect=n/i,t.updateProjectionMatrix(),r.domElement.style.position="absolute",r.domElement.style.left=`${(n-s)/2}px`,r.domElement.style.top=`${(i-o)/2}px`,e.domElement.style.position="absolute",e.domElement.style.left=`${(n-s)/2}px`,e.domElement.style.top=`${(i-o)/2}px`;const l=document.getElementById("asset-wrapper");l.style.position="absolute",l.style.left=`${(n-s)/2}px`,l.style.top=`${(i-o)/2}px`,l.style.width=`${s}px`,l.style.height=`${o}px`;const c=document.getElementById("opening");c&&(c.style.position="absolute",c.style.left=`${(n-s)/2}px`,c.style.top=`${(i-o)/2}px`,c.style.width=`${s}px`,c.style.height=`${o}px`)},Ho=(r,e)=>{_t.to(r.position,{y:e?`+=${e*.2}`:"+=0.2",duration:3,yoyo:!0,repeat:-1,ease:"power1.inOut"})},gf=(r,e)=>{_t.to(r.position,{y:e?`-=${e*.2}`:"+=0.2",duration:3,yoyo:!0,repeat:-1,ease:"power1.inOut"})},vf=(r,e)=>{_t.to(r.position,{x:e?"-=0.4":"+=0.4",duration:4.2,yoyo:!0,repeat:-1,ease:"power1.inOut"})},xf=r=>{_t.to(r.scale,{y:1.5,duration:3,yoyo:!0,repeat:-1,ease:"power1.inOut"})},My=r=>{_t.to(r.scale,{x:"+=1",duration:2.5,yoyo:!0,repeat:-1,ease:"power1.inOut"})},Bi=r=>{_t.to(r.rotation,{y:"+=6.28",duration:7.5,repeat:-1,ease:"linear"})},yf=(r,e)=>{_t.to(r.scale,{x:e?`+=${e*.04}`:"+=0.04",y:e?`+=${e*.04}`:"+=0.04",z:e?`+=${e*.04}`:"+=0.04",duration:2,yoyo:!0,repeat:-1,ease:"power1.inOut"})},Sy=r=>{_t.to(r.scale,{x:.1,duration:3.4,yoyo:!0,repeat:-1,ease:"power1.inOut"}),_t.to(r.position,{x:"-=0.4",duration:3.4,yoyo:!0,repeat:-1,ease:"power1.inOut"})},sd=[[{name:"vase",objPath:"./assets/obj/vase/vase.obj",matPath:"./assets/obj/vase/vase.mtl",scale:new C(1,1,1),rotation:new Pe(0,0,0),position:new C(1.3,-1,-4),animate:r=>{My(r)}},{name:"vase",objPath:"./assets/obj/vase/vase.obj",matPath:"./assets/obj/vase/vase.mtl",scale:new C(1,.4,1),rotation:new Pe(0,0,0),position:new C(.6,.4,-3),animate:r=>{Ho(r)}},{name:"vase",objPath:"./assets/obj/vase/vase.obj",matPath:"./assets/obj/vase/vase.mtl",scale:new C(1,2.1,1),rotation:new Pe(0,0,0),position:new C(-.8,-.75,-4),animate:r=>{xf(r)}}],[{name:"chair",objPath:"./assets/obj/chair/old_chair.obj",matPath:"./assets/obj/chair/old_chair.mtl",scale:new C(.01,.01,.01),rotation:new Pe(0,et(-90),0),position:new C(1.3,-1.3,-3.5),animate:r=>{Bi(r)}},{name:"chair",objPath:"./assets/obj/chair/old_chair.obj",matPath:"./assets/obj/chair/old_chair.mtl",scale:new C(.01,.01,.01),rotation:new Pe(0,et(90),0),position:new C(.4,-1.3,-3.5),animate:r=>{Bi(r)}},{name:"chair",objPath:"./assets/obj/chair/old_chair.obj",matPath:"./assets/obj/chair/old_chair.mtl",scale:new C(.008,.018,.008),rotation:new Pe(0,0,0),position:new C(1,-.1,-3.5),animate:r=>{vf(r)}},{name:"sofa",objPath:"./assets/obj/sofa/couch.obj",matPath:"./assets/obj/sofa/couch.mtl",scale:new C(.13,.23,.23),rotation:new Pe(et(-90),0,0),position:new C(-1,-.7,-3.5),animate:r=>{vf(r,!0)}},{name:"lamp",objPath:"./assets/obj/lamp/Lamp.obj",matPath:"./assets/obj/lamp/Lamp.mtl",scale:new C(.7,1.2,.5),rotation:new Pe(0,0,0),position:new C(-1,-.9,-2.5),animate:r=>{xf(r)}},{name:"curtain",objPath:"./assets/obj/curtain/curtain.obj",matPath:"./assets/obj/curtain/curtain.mtl",scale:new C(.5,.5,.5),rotation:new Pe(0,0,0),position:new C(-.6,.2,-3),animate:r=>{Sy(r)}}],[{name:"plant1",objPath:"./assets/obj/plant1/plant1.obj",matPath:"./assets/obj/plant1/plant1.mtl",scale:new C(.5,.5,.5),rotation:new Pe(0,0,0),position:new C(0,-.1,-4),animate:r=>{Bi(r)}},{name:"plant2",objPath:"./assets/obj/plant2/pot.obj",matPath:"./assets/obj/plant2/pot.mtl",scale:new C(.4,.4,.4),rotation:new Pe(0,0,0),position:new C(-1.2,-.7,-4),animate:r=>{Ho(r,2.7),Bi(r)}},{name:"plant3",objPath:"./assets/obj/plant3/plant3.obj",matPath:"./assets/obj/plant3/plant3.mtl",scale:new C(.4,.4,.4),rotation:new Pe(0,0,0),position:new C(1.2,.5,-4),animate:r=>{gf(r,2.7),Bi(r)}}],[{name:"apple",objPath:"./assets/obj/green/Green_Apple_OBJ.obj",matPath:"./assets/obj/green/Green_Apple_OBJ.mtl",scale:new C(.005,.006,.006),rotation:new Pe(0,0,0),position:new C(1,-.2,-4),animate:r=>{Ho(r,2.3)}},{name:"apple",objPath:"./assets/obj/green/Green_Apple_OBJ.obj",matPath:"./assets/obj/green/Green_Apple_OBJ.mtl",scale:new C(.005,.005,.005),rotation:new Pe(0,0,0),position:new C(.5,-1,-4),animate:r=>{yf(r,.03)}},{name:"apple",objPath:"./assets/obj/green/Green_Apple_OBJ.obj",matPath:"./assets/obj/green/Green_Apple_OBJ.mtl",scale:new C(.006,.006,.006),rotation:new Pe(0,0,0),position:new C(-1.3,-.7,-4),animate:r=>{gf(r,2.3)}},{name:"pear",objPath:"./assets/obj/pear/pear_obj.obj",matPath:"./assets/obj/pear/pear_obj.mtl",scale:new C(.05,.05,.05),rotation:new Pe(0,0,0),position:new C(-1.6,.8,-4),animate:r=>{yf(r,1.5)}},{name:"melon",objPath:"./assets/obj/melon/melon.obj",matPath:"./assets/obj/melon/melon.mtl",scale:new C(.6,.6,.6),rotation:new Pe(0,et(90),0),position:new C(.3,1,-4),animate:r=>{Bi(r)}},{name:"melon",objPath:"./assets/obj/melon/melon.obj",matPath:"./assets/obj/melon/melon.mtl",scale:new C(.6,.6,.6),rotation:new Pe(et(180),et(90),0),position:new C(-.6,.85,-4),animate:r=>{Bi(r)}}],[{name:"juice",objPath:"./assets/obj/juice/juice.obj",matPath:"./assets/obj/juice/juice.mtl",scale:new C(.2,.2,.2),rotation:new Pe(0,0,0),position:new C(0,-.7,-2.5)},{name:"juice",objPath:"./assets/obj/juice/juice.obj",matPath:"./assets/obj/juice/juice.mtl",scale:new C(.2,.2,.2),rotation:new Pe(0,0,0),position:new C(-.5,-.7,-3)},{name:"juice",objPath:"./assets/obj/juice/juice.obj",matPath:"./assets/obj/juice/juice.mtl",scale:new C(.2,.2,.2),rotation:new Pe(0,0,0),position:new C(.4,-.7,-3)},{name:"table",objPath:"./assets/obj/table/table.obj",matPath:"./assets/obj/table/table.mtl",scale:new C(.6,.6,.6),rotation:new Pe(0,et(90),0),position:new C(0,-1.8,-3)}]],Pn=new Ms({color:"white"}),Xt=new Ms({color:11977939,emissive:new Ie("white"),emissiveIntensity:.3}),ad=[[{geo:new Ze(1,1,1),mat:Pn,scale:new C(.7,1,.1),rotation:new Pe(0,et(15),0),position:new C(1.1,.5,-2)},{geo:new Ze(1,1,1),mat:Pn,scale:new C(.5,.8,.1),rotation:new Pe(0,et(-20),0),position:new C(-.9,0,-2)}],[{geo:new Ze(1,1,1),mat:Pn,scale:new C(1.2,.4,.1),rotation:new Pe(0,0,0),position:new C(-1,0,-2.5)},{geo:new Ze(1,1,1),mat:Pn,scale:new C(.6,1.3,.1),rotation:new Pe(0,0,0),position:new C(1,.6,-2)}],[{geo:new Ze(1,1,1),mat:Pn,scale:new C(1.2,1.7,.1),rotation:new Pe(et(90),0,0),position:new C(-.1,-1,-3)},{geo:new Ze(1,1,1),mat:Pn,scale:new C(1.2,1.7,.1),rotation:new Pe(et(90),et(-20),0),position:new C(.3,-.8,-3)}],[{geo:new Ze(1,1,1),mat:Pn,scale:new C(.6,.35,.1),rotation:new Pe(0,0,0),position:new C(-.5,0,-2)},{geo:new Ze(1,1,1),mat:Pn,scale:new C(.6,.25,.1),rotation:new Pe(0,0,0),position:new C(-.8,-.1,-1.9)},{geo:new Ze(1,1,1),mat:Pn,scale:new C(.4,.9,.1),rotation:new Pe(0,0,0),position:new C(.5,.7,-2)},{geo:new Ze(1,1,1),mat:Pn,scale:new C(.5,.8,.1),rotation:new Pe(0,0,0),position:new C(.8,0,-2)}],[]],Ey=[{geo:new Ze(1,1.3,.5),mat:Xt,scale:new C(.5,1,1),position:new C(-1,-1.7,-2.3)},{geo:new Ze(.8,.6,.5),mat:Xt,scale:new C(.8,2,1),position:new C(.4,.7,-1.8)},{geo:new Ze(.5,1.1,.5),mat:Xt,scale:new C(.9,1.2,1),position:new C(-.8,1.3,-2.7)},{geo:new Ze(.9,.6,.6),mat:Xt,scale:new C(1,1,1),position:new C(.2,-.3,-1.8)},{geo:new Ze(.7,.9,.5),mat:Xt,scale:new C(1,1,1),position:new C(-1,.2,-2.9)},{geo:new Ze(1,.7,.5),mat:Xt,scale:new C(.7,1,1),position:new C(.5,1.8,-1.7)},{geo:new Ze(.6,1.7,.5),mat:Xt,scale:new C(1,1,1),position:new C(1,0,-1.2)}],Ty=[{geo:new Ze(1,1,1),mat:Xt,scale:new C(.4,.4,.5),position:new C(-.2,-1.7,-1.4)},{geo:new Ze(1,1,1),mat:Xt,scale:new C(.5,.6,.5),position:new C(.2,.7,-1.5)},{geo:new Ze(1,1,1),mat:Xt,scale:new C(.7,.6,.5),position:new C(-.3,1.3,-2.7)},{geo:new Ze(1,1,1),mat:Xt,scale:new C(.5,.5,.4),position:new C(.4,-.2,-1.8)},{geo:new Ze(1,1,1),mat:Xt,scale:new C(.8,.5,.5),position:new C(-.3,.2,-2.9)},{geo:new Ze(1,1,1),mat:Xt,scale:new C(.3,.5,.5),position:new C(-.1,-1,-1.7)},{geo:new Ze(1,1,1),mat:Xt,scale:new C(.8,2,.5),position:new C(.7,-.6,-.9)}];var ss=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Vo={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */var Mf;function by(){return Mf||(Mf=1,function(r){(function(){var e=function(){this.init()};e.prototype={init:function(){var a=this||t;return a._counter=1e3,a._html5AudioPool=[],a.html5PoolSize=10,a._codecs={},a._howls=[],a._muted=!1,a._volume=1,a._canPlayEvent="canplaythrough",a._navigator=typeof window<"u"&&window.navigator?window.navigator:null,a.masterGain=null,a.noAudio=!1,a.usingWebAudio=!0,a.autoSuspend=!0,a.ctx=null,a.autoUnlock=!0,a._setup(),a},volume:function(a){var u=this||t;if(a=parseFloat(a),u.ctx||d(),typeof a<"u"&&a>=0&&a<=1){if(u._volume=a,u._muted)return u;u.usingWebAudio&&u.masterGain.gain.setValueAtTime(a,t.ctx.currentTime);for(var h=0;h<u._howls.length;h++)if(!u._howls[h]._webAudio)for(var g=u._howls[h]._getSoundIds(),_=0;_<g.length;_++){var m=u._howls[h]._soundById(g[_]);m&&m._node&&(m._node.volume=m._volume*a)}return u}return u._volume},mute:function(a){var u=this||t;u.ctx||d(),u._muted=a,u.usingWebAudio&&u.masterGain.gain.setValueAtTime(a?0:u._volume,t.ctx.currentTime);for(var h=0;h<u._howls.length;h++)if(!u._howls[h]._webAudio)for(var g=u._howls[h]._getSoundIds(),_=0;_<g.length;_++){var m=u._howls[h]._soundById(g[_]);m&&m._node&&(m._node.muted=a?!0:m._muted)}return u},stop:function(){for(var a=this||t,u=0;u<a._howls.length;u++)a._howls[u].stop();return a},unload:function(){for(var a=this||t,u=a._howls.length-1;u>=0;u--)a._howls[u].unload();return a.usingWebAudio&&a.ctx&&typeof a.ctx.close<"u"&&(a.ctx.close(),a.ctx=null,d()),a},codecs:function(a){return(this||t)._codecs[a.replace(/^x-/,"")]},_setup:function(){var a=this||t;if(a.state=a.ctx&&a.ctx.state||"suspended",a._autoSuspend(),!a.usingWebAudio)if(typeof Audio<"u")try{var u=new Audio;typeof u.oncanplaythrough>"u"&&(a._canPlayEvent="canplay")}catch{a.noAudio=!0}else a.noAudio=!0;try{var u=new Audio;u.muted&&(a.noAudio=!0)}catch{}return a.noAudio||a._setupCodecs(),a},_setupCodecs:function(){var a=this||t,u=null;try{u=typeof Audio<"u"?new Audio:null}catch{return a}if(!u||typeof u.canPlayType!="function")return a;var h=u.canPlayType("audio/mpeg;").replace(/^no$/,""),g=a._navigator?a._navigator.userAgent:"",_=g.match(/OPR\/(\d+)/g),m=_&&parseInt(_[0].split("/")[1],10)<33,p=g.indexOf("Safari")!==-1&&g.indexOf("Chrome")===-1,v=g.match(/Version\/(.*?) /),M=p&&v&&parseInt(v[1],10)<15;return a._codecs={mp3:!!(!m&&(h||u.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!h,opus:!!u.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!u.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!u.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(u.canPlayType('audio/wav; codecs="1"')||u.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!u.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!u.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(u.canPlayType("audio/x-m4a;")||u.canPlayType("audio/m4a;")||u.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(u.canPlayType("audio/x-m4b;")||u.canPlayType("audio/m4b;")||u.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(u.canPlayType("audio/x-mp4;")||u.canPlayType("audio/mp4;")||u.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!M&&u.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!M&&u.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!u.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(u.canPlayType("audio/x-flac;")||u.canPlayType("audio/flac;")).replace(/^no$/,"")},a},_unlockAudio:function(){var a=this||t;if(!(a._audioUnlocked||!a.ctx)){a._audioUnlocked=!1,a.autoUnlock=!1,!a._mobileUnloaded&&a.ctx.sampleRate!==44100&&(a._mobileUnloaded=!0,a.unload()),a._scratchBuffer=a.ctx.createBuffer(1,1,22050);var u=function(h){for(;a._html5AudioPool.length<a.html5PoolSize;)try{var g=new Audio;g._unlocked=!0,a._releaseHtml5Audio(g)}catch{a.noAudio=!0;break}for(var _=0;_<a._howls.length;_++)if(!a._howls[_]._webAudio)for(var m=a._howls[_]._getSoundIds(),p=0;p<m.length;p++){var v=a._howls[_]._soundById(m[p]);v&&v._node&&!v._node._unlocked&&(v._node._unlocked=!0,v._node.load())}a._autoResume();var M=a.ctx.createBufferSource();M.buffer=a._scratchBuffer,M.connect(a.ctx.destination),typeof M.start>"u"?M.noteOn(0):M.start(0),typeof a.ctx.resume=="function"&&a.ctx.resume(),M.onended=function(){M.disconnect(0),a._audioUnlocked=!0,document.removeEventListener("touchstart",u,!0),document.removeEventListener("touchend",u,!0),document.removeEventListener("click",u,!0),document.removeEventListener("keydown",u,!0);for(var x=0;x<a._howls.length;x++)a._howls[x]._emit("unlock")}};return document.addEventListener("touchstart",u,!0),document.addEventListener("touchend",u,!0),document.addEventListener("click",u,!0),document.addEventListener("keydown",u,!0),a}},_obtainHtml5Audio:function(){var a=this||t;if(a._html5AudioPool.length)return a._html5AudioPool.pop();var u=new Audio().play();return u&&typeof Promise<"u"&&(u instanceof Promise||typeof u.then=="function")&&u.catch(function(){}),new Audio},_releaseHtml5Audio:function(a){var u=this||t;return a._unlocked&&u._html5AudioPool.push(a),u},_autoSuspend:function(){var a=this;if(!(!a.autoSuspend||!a.ctx||typeof a.ctx.suspend>"u"||!t.usingWebAudio)){for(var u=0;u<a._howls.length;u++)if(a._howls[u]._webAudio){for(var h=0;h<a._howls[u]._sounds.length;h++)if(!a._howls[u]._sounds[h]._paused)return a}return a._suspendTimer&&clearTimeout(a._suspendTimer),a._suspendTimer=setTimeout(function(){if(a.autoSuspend){a._suspendTimer=null,a.state="suspending";var g=function(){a.state="suspended",a._resumeAfterSuspend&&(delete a._resumeAfterSuspend,a._autoResume())};a.ctx.suspend().then(g,g)}},3e4),a}},_autoResume:function(){var a=this;if(!(!a.ctx||typeof a.ctx.resume>"u"||!t.usingWebAudio))return a.state==="running"&&a.ctx.state!=="interrupted"&&a._suspendTimer?(clearTimeout(a._suspendTimer),a._suspendTimer=null):a.state==="suspended"||a.state==="running"&&a.ctx.state==="interrupted"?(a.ctx.resume().then(function(){a.state="running";for(var u=0;u<a._howls.length;u++)a._howls[u]._emit("resume")}),a._suspendTimer&&(clearTimeout(a._suspendTimer),a._suspendTimer=null)):a.state==="suspending"&&(a._resumeAfterSuspend=!0),a}};var t=new e,n=function(a){var u=this;!a.src||a.src.length===0||u.init(a)};n.prototype={init:function(a){var u=this;return t.ctx||d(),u._autoplay=a.autoplay||!1,u._format=typeof a.format!="string"?a.format:[a.format],u._html5=a.html5||!1,u._muted=a.mute||!1,u._loop=a.loop||!1,u._pool=a.pool||5,u._preload=typeof a.preload=="boolean"||a.preload==="metadata"?a.preload:!0,u._rate=a.rate||1,u._sprite=a.sprite||{},u._src=typeof a.src!="string"?a.src:[a.src],u._volume=a.volume!==void 0?a.volume:1,u._xhr={method:a.xhr&&a.xhr.method?a.xhr.method:"GET",headers:a.xhr&&a.xhr.headers?a.xhr.headers:null,withCredentials:a.xhr&&a.xhr.withCredentials?a.xhr.withCredentials:!1},u._duration=0,u._state="unloaded",u._sounds=[],u._endTimers={},u._queue=[],u._playLock=!1,u._onend=a.onend?[{fn:a.onend}]:[],u._onfade=a.onfade?[{fn:a.onfade}]:[],u._onload=a.onload?[{fn:a.onload}]:[],u._onloaderror=a.onloaderror?[{fn:a.onloaderror}]:[],u._onplayerror=a.onplayerror?[{fn:a.onplayerror}]:[],u._onpause=a.onpause?[{fn:a.onpause}]:[],u._onplay=a.onplay?[{fn:a.onplay}]:[],u._onstop=a.onstop?[{fn:a.onstop}]:[],u._onmute=a.onmute?[{fn:a.onmute}]:[],u._onvolume=a.onvolume?[{fn:a.onvolume}]:[],u._onrate=a.onrate?[{fn:a.onrate}]:[],u._onseek=a.onseek?[{fn:a.onseek}]:[],u._onunlock=a.onunlock?[{fn:a.onunlock}]:[],u._onresume=[],u._webAudio=t.usingWebAudio&&!u._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(u),u._autoplay&&u._queue.push({event:"play",action:function(){u.play()}}),u._preload&&u._preload!=="none"&&u.load(),u},load:function(){var a=this,u=null;if(t.noAudio){a._emit("loaderror",null,"No audio support.");return}typeof a._src=="string"&&(a._src=[a._src]);for(var h=0;h<a._src.length;h++){var g,_;if(a._format&&a._format[h])g=a._format[h];else{if(_=a._src[h],typeof _!="string"){a._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}g=/^data:audio\/([^;,]+);/i.exec(_),g||(g=/\.([^.]+)$/.exec(_.split("?",1)[0])),g&&(g=g[1].toLowerCase())}if(g&&t.codecs(g)){u=a._src[h];break}}if(!u){a._emit("loaderror",null,"No codec support for selected audio sources.");return}return a._src=u,a._state="loading",window.location.protocol==="https:"&&u.slice(0,5)==="http:"&&(a._html5=!0,a._webAudio=!1),new i(a),a._webAudio&&o(a),a},play:function(a,u){var h=this,g=null;if(typeof a=="number")g=a,a=null;else{if(typeof a=="string"&&h._state==="loaded"&&!h._sprite[a])return null;if(typeof a>"u"&&(a="__default",!h._playLock)){for(var _=0,m=0;m<h._sounds.length;m++)h._sounds[m]._paused&&!h._sounds[m]._ended&&(_++,g=h._sounds[m]._id);_===1?a=null:g=null}}var p=g?h._soundById(g):h._inactiveSound();if(!p)return null;if(g&&!a&&(a=p._sprite||"__default"),h._state!=="loaded"){p._sprite=a,p._ended=!1;var v=p._id;return h._queue.push({event:"play",action:function(){h.play(v)}}),v}if(g&&!p._paused)return u||h._loadQueue("play"),p._id;h._webAudio&&t._autoResume();var M=Math.max(0,p._seek>0?p._seek:h._sprite[a][0]/1e3),x=Math.max(0,(h._sprite[a][0]+h._sprite[a][1])/1e3-M),A=x*1e3/Math.abs(p._rate),b=h._sprite[a][0]/1e3,w=(h._sprite[a][0]+h._sprite[a][1])/1e3;p._sprite=a,p._ended=!1;var P=function(){p._paused=!1,p._seek=M,p._start=b,p._stop=w,p._loop=!!(p._loop||h._sprite[a][2])};if(M>=w){h._ended(p);return}var y=p._node;if(h._webAudio){var E=function(){h._playLock=!1,P(),h._refreshBuffer(p);var G=p._muted||h._muted?0:p._volume;y.gain.setValueAtTime(G,t.ctx.currentTime),p._playStart=t.ctx.currentTime,typeof y.bufferSource.start>"u"?p._loop?y.bufferSource.noteGrainOn(0,M,86400):y.bufferSource.noteGrainOn(0,M,x):p._loop?y.bufferSource.start(0,M,86400):y.bufferSource.start(0,M,x),A!==1/0&&(h._endTimers[p._id]=setTimeout(h._ended.bind(h,p),A)),u||setTimeout(function(){h._emit("play",p._id),h._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?E():(h._playLock=!0,h.once("resume",E),h._clearTimer(p._id))}else{var L=function(){y.currentTime=M,y.muted=p._muted||h._muted||t._muted||y.muted,y.volume=p._volume*t.volume(),y.playbackRate=p._rate;try{var G=y.play();if(G&&typeof Promise<"u"&&(G instanceof Promise||typeof G.then=="function")?(h._playLock=!0,P(),G.then(function(){h._playLock=!1,y._unlocked=!0,u?h._loadQueue():h._emit("play",p._id)}).catch(function(){h._playLock=!1,h._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),p._ended=!0,p._paused=!0})):u||(h._playLock=!1,P(),h._emit("play",p._id)),y.playbackRate=p._rate,y.paused){h._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}a!=="__default"||p._loop?h._endTimers[p._id]=setTimeout(h._ended.bind(h,p),A):(h._endTimers[p._id]=function(){h._ended(p),y.removeEventListener("ended",h._endTimers[p._id],!1)},y.addEventListener("ended",h._endTimers[p._id],!1))}catch(q){h._emit("playerror",p._id,q)}};y.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(y.src=h._src,y.load());var O=window&&window.ejecta||!y.readyState&&t._navigator.isCocoonJS;if(y.readyState>=3||O)L();else{h._playLock=!0,h._state="loading";var U=function(){h._state="loaded",L(),y.removeEventListener(t._canPlayEvent,U,!1)};y.addEventListener(t._canPlayEvent,U,!1),h._clearTimer(p._id)}}return p._id},pause:function(a){var u=this;if(u._state!=="loaded"||u._playLock)return u._queue.push({event:"pause",action:function(){u.pause(a)}}),u;for(var h=u._getSoundIds(a),g=0;g<h.length;g++){u._clearTimer(h[g]);var _=u._soundById(h[g]);if(_&&!_._paused&&(_._seek=u.seek(h[g]),_._rateSeek=0,_._paused=!0,u._stopFade(h[g]),_._node))if(u._webAudio){if(!_._node.bufferSource)continue;typeof _._node.bufferSource.stop>"u"?_._node.bufferSource.noteOff(0):_._node.bufferSource.stop(0),u._cleanBuffer(_._node)}else(!isNaN(_._node.duration)||_._node.duration===1/0)&&_._node.pause();arguments[1]||u._emit("pause",_?_._id:null)}return u},stop:function(a,u){var h=this;if(h._state!=="loaded"||h._playLock)return h._queue.push({event:"stop",action:function(){h.stop(a)}}),h;for(var g=h._getSoundIds(a),_=0;_<g.length;_++){h._clearTimer(g[_]);var m=h._soundById(g[_]);m&&(m._seek=m._start||0,m._rateSeek=0,m._paused=!0,m._ended=!0,h._stopFade(g[_]),m._node&&(h._webAudio?m._node.bufferSource&&(typeof m._node.bufferSource.stop>"u"?m._node.bufferSource.noteOff(0):m._node.bufferSource.stop(0),h._cleanBuffer(m._node)):(!isNaN(m._node.duration)||m._node.duration===1/0)&&(m._node.currentTime=m._start||0,m._node.pause(),m._node.duration===1/0&&h._clearSound(m._node))),u||h._emit("stop",m._id))}return h},mute:function(a,u){var h=this;if(h._state!=="loaded"||h._playLock)return h._queue.push({event:"mute",action:function(){h.mute(a,u)}}),h;if(typeof u>"u")if(typeof a=="boolean")h._muted=a;else return h._muted;for(var g=h._getSoundIds(u),_=0;_<g.length;_++){var m=h._soundById(g[_]);m&&(m._muted=a,m._interval&&h._stopFade(m._id),h._webAudio&&m._node?m._node.gain.setValueAtTime(a?0:m._volume,t.ctx.currentTime):m._node&&(m._node.muted=t._muted?!0:a),h._emit("mute",m._id))}return h},volume:function(){var a=this,u=arguments,h,g;if(u.length===0)return a._volume;if(u.length===1||u.length===2&&typeof u[1]>"u"){var _=a._getSoundIds(),m=_.indexOf(u[0]);m>=0?g=parseInt(u[0],10):h=parseFloat(u[0])}else u.length>=2&&(h=parseFloat(u[0]),g=parseInt(u[1],10));var p;if(typeof h<"u"&&h>=0&&h<=1){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"volume",action:function(){a.volume.apply(a,u)}}),a;typeof g>"u"&&(a._volume=h),g=a._getSoundIds(g);for(var v=0;v<g.length;v++)p=a._soundById(g[v]),p&&(p._volume=h,u[2]||a._stopFade(g[v]),a._webAudio&&p._node&&!p._muted?p._node.gain.setValueAtTime(h,t.ctx.currentTime):p._node&&!p._muted&&(p._node.volume=h*t.volume()),a._emit("volume",p._id))}else return p=g?a._soundById(g):a._sounds[0],p?p._volume:0;return a},fade:function(a,u,h,g){var _=this;if(_._state!=="loaded"||_._playLock)return _._queue.push({event:"fade",action:function(){_.fade(a,u,h,g)}}),_;a=Math.min(Math.max(0,parseFloat(a)),1),u=Math.min(Math.max(0,parseFloat(u)),1),h=parseFloat(h),_.volume(a,g);for(var m=_._getSoundIds(g),p=0;p<m.length;p++){var v=_._soundById(m[p]);if(v){if(g||_._stopFade(m[p]),_._webAudio&&!v._muted){var M=t.ctx.currentTime,x=M+h/1e3;v._volume=a,v._node.gain.setValueAtTime(a,M),v._node.gain.linearRampToValueAtTime(u,x)}_._startFadeInterval(v,a,u,h,m[p],typeof g>"u")}}return _},_startFadeInterval:function(a,u,h,g,_,m){var p=this,v=u,M=h-u,x=Math.abs(M/.01),A=Math.max(4,x>0?g/x:g),b=Date.now();a._fadeTo=h,a._interval=setInterval(function(){var w=(Date.now()-b)/g;b=Date.now(),v+=M*w,v=Math.round(v*100)/100,M<0?v=Math.max(h,v):v=Math.min(h,v),p._webAudio?a._volume=v:p.volume(v,a._id,!0),m&&(p._volume=v),(h<u&&v<=h||h>u&&v>=h)&&(clearInterval(a._interval),a._interval=null,a._fadeTo=null,p.volume(h,a._id),p._emit("fade",a._id))},A)},_stopFade:function(a){var u=this,h=u._soundById(a);return h&&h._interval&&(u._webAudio&&h._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(h._interval),h._interval=null,u.volume(h._fadeTo,a),h._fadeTo=null,u._emit("fade",a)),u},loop:function(){var a=this,u=arguments,h,g,_;if(u.length===0)return a._loop;if(u.length===1)if(typeof u[0]=="boolean")h=u[0],a._loop=h;else return _=a._soundById(parseInt(u[0],10)),_?_._loop:!1;else u.length===2&&(h=u[0],g=parseInt(u[1],10));for(var m=a._getSoundIds(g),p=0;p<m.length;p++)_=a._soundById(m[p]),_&&(_._loop=h,a._webAudio&&_._node&&_._node.bufferSource&&(_._node.bufferSource.loop=h,h&&(_._node.bufferSource.loopStart=_._start||0,_._node.bufferSource.loopEnd=_._stop,a.playing(m[p])&&(a.pause(m[p],!0),a.play(m[p],!0)))));return a},rate:function(){var a=this,u=arguments,h,g;if(u.length===0)g=a._sounds[0]._id;else if(u.length===1){var _=a._getSoundIds(),m=_.indexOf(u[0]);m>=0?g=parseInt(u[0],10):h=parseFloat(u[0])}else u.length===2&&(h=parseFloat(u[0]),g=parseInt(u[1],10));var p;if(typeof h=="number"){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"rate",action:function(){a.rate.apply(a,u)}}),a;typeof g>"u"&&(a._rate=h),g=a._getSoundIds(g);for(var v=0;v<g.length;v++)if(p=a._soundById(g[v]),p){a.playing(g[v])&&(p._rateSeek=a.seek(g[v]),p._playStart=a._webAudio?t.ctx.currentTime:p._playStart),p._rate=h,a._webAudio&&p._node&&p._node.bufferSource?p._node.bufferSource.playbackRate.setValueAtTime(h,t.ctx.currentTime):p._node&&(p._node.playbackRate=h);var M=a.seek(g[v]),x=(a._sprite[p._sprite][0]+a._sprite[p._sprite][1])/1e3-M,A=x*1e3/Math.abs(p._rate);(a._endTimers[g[v]]||!p._paused)&&(a._clearTimer(g[v]),a._endTimers[g[v]]=setTimeout(a._ended.bind(a,p),A)),a._emit("rate",p._id)}}else return p=a._soundById(g),p?p._rate:a._rate;return a},seek:function(){var a=this,u=arguments,h,g;if(u.length===0)a._sounds.length&&(g=a._sounds[0]._id);else if(u.length===1){var _=a._getSoundIds(),m=_.indexOf(u[0]);m>=0?g=parseInt(u[0],10):a._sounds.length&&(g=a._sounds[0]._id,h=parseFloat(u[0]))}else u.length===2&&(h=parseFloat(u[0]),g=parseInt(u[1],10));if(typeof g>"u")return 0;if(typeof h=="number"&&(a._state!=="loaded"||a._playLock))return a._queue.push({event:"seek",action:function(){a.seek.apply(a,u)}}),a;var p=a._soundById(g);if(p)if(typeof h=="number"&&h>=0){var v=a.playing(g);v&&a.pause(g,!0),p._seek=h,p._ended=!1,a._clearTimer(g),!a._webAudio&&p._node&&!isNaN(p._node.duration)&&(p._node.currentTime=h);var M=function(){v&&a.play(g,!0),a._emit("seek",g)};if(v&&!a._webAudio){var x=function(){a._playLock?setTimeout(x,0):M()};setTimeout(x,0)}else M()}else if(a._webAudio){var A=a.playing(g)?t.ctx.currentTime-p._playStart:0,b=p._rateSeek?p._rateSeek-p._seek:0;return p._seek+(b+A*Math.abs(p._rate))}else return p._node.currentTime;return a},playing:function(a){var u=this;if(typeof a=="number"){var h=u._soundById(a);return h?!h._paused:!1}for(var g=0;g<u._sounds.length;g++)if(!u._sounds[g]._paused)return!0;return!1},duration:function(a){var u=this,h=u._duration,g=u._soundById(a);return g&&(h=u._sprite[g._sprite][1]/1e3),h},state:function(){return this._state},unload:function(){for(var a=this,u=a._sounds,h=0;h<u.length;h++)u[h]._paused||a.stop(u[h]._id),a._webAudio||(a._clearSound(u[h]._node),u[h]._node.removeEventListener("error",u[h]._errorFn,!1),u[h]._node.removeEventListener(t._canPlayEvent,u[h]._loadFn,!1),u[h]._node.removeEventListener("ended",u[h]._endFn,!1),t._releaseHtml5Audio(u[h]._node)),delete u[h]._node,a._clearTimer(u[h]._id);var g=t._howls.indexOf(a);g>=0&&t._howls.splice(g,1);var _=!0;for(h=0;h<t._howls.length;h++)if(t._howls[h]._src===a._src||a._src.indexOf(t._howls[h]._src)>=0){_=!1;break}return s&&_&&delete s[a._src],t.noAudio=!1,a._state="unloaded",a._sounds=[],a=null,null},on:function(a,u,h,g){var _=this,m=_["_on"+a];return typeof u=="function"&&m.push(g?{id:h,fn:u,once:g}:{id:h,fn:u}),_},off:function(a,u,h){var g=this,_=g["_on"+a],m=0;if(typeof u=="number"&&(h=u,u=null),u||h)for(m=0;m<_.length;m++){var p=h===_[m].id;if(u===_[m].fn&&p||!u&&p){_.splice(m,1);break}}else if(a)g["_on"+a]=[];else{var v=Object.keys(g);for(m=0;m<v.length;m++)v[m].indexOf("_on")===0&&Array.isArray(g[v[m]])&&(g[v[m]]=[])}return g},once:function(a,u,h){var g=this;return g.on(a,u,h,1),g},_emit:function(a,u,h){for(var g=this,_=g["_on"+a],m=_.length-1;m>=0;m--)(!_[m].id||_[m].id===u||a==="load")&&(setTimeout((function(p){p.call(this,u,h)}).bind(g,_[m].fn),0),_[m].once&&g.off(a,_[m].fn,_[m].id));return g._loadQueue(a),g},_loadQueue:function(a){var u=this;if(u._queue.length>0){var h=u._queue[0];h.event===a&&(u._queue.shift(),u._loadQueue()),a||h.action()}return u},_ended:function(a){var u=this,h=a._sprite;if(!u._webAudio&&a._node&&!a._node.paused&&!a._node.ended&&a._node.currentTime<a._stop)return setTimeout(u._ended.bind(u,a),100),u;var g=!!(a._loop||u._sprite[h][2]);if(u._emit("end",a._id),!u._webAudio&&g&&u.stop(a._id,!0).play(a._id),u._webAudio&&g){u._emit("play",a._id),a._seek=a._start||0,a._rateSeek=0,a._playStart=t.ctx.currentTime;var _=(a._stop-a._start)*1e3/Math.abs(a._rate);u._endTimers[a._id]=setTimeout(u._ended.bind(u,a),_)}return u._webAudio&&!g&&(a._paused=!0,a._ended=!0,a._seek=a._start||0,a._rateSeek=0,u._clearTimer(a._id),u._cleanBuffer(a._node),t._autoSuspend()),!u._webAudio&&!g&&u.stop(a._id,!0),u},_clearTimer:function(a){var u=this;if(u._endTimers[a]){if(typeof u._endTimers[a]!="function")clearTimeout(u._endTimers[a]);else{var h=u._soundById(a);h&&h._node&&h._node.removeEventListener("ended",u._endTimers[a],!1)}delete u._endTimers[a]}return u},_soundById:function(a){for(var u=this,h=0;h<u._sounds.length;h++)if(a===u._sounds[h]._id)return u._sounds[h];return null},_inactiveSound:function(){var a=this;a._drain();for(var u=0;u<a._sounds.length;u++)if(a._sounds[u]._ended)return a._sounds[u].reset();return new i(a)},_drain:function(){var a=this,u=a._pool,h=0,g=0;if(!(a._sounds.length<u)){for(g=0;g<a._sounds.length;g++)a._sounds[g]._ended&&h++;for(g=a._sounds.length-1;g>=0;g--){if(h<=u)return;a._sounds[g]._ended&&(a._webAudio&&a._sounds[g]._node&&a._sounds[g]._node.disconnect(0),a._sounds.splice(g,1),h--)}}},_getSoundIds:function(a){var u=this;if(typeof a>"u"){for(var h=[],g=0;g<u._sounds.length;g++)h.push(u._sounds[g]._id);return h}else return[a]},_refreshBuffer:function(a){var u=this;return a._node.bufferSource=t.ctx.createBufferSource(),a._node.bufferSource.buffer=s[u._src],a._panner?a._node.bufferSource.connect(a._panner):a._node.bufferSource.connect(a._node),a._node.bufferSource.loop=a._loop,a._loop&&(a._node.bufferSource.loopStart=a._start||0,a._node.bufferSource.loopEnd=a._stop||0),a._node.bufferSource.playbackRate.setValueAtTime(a._rate,t.ctx.currentTime),u},_cleanBuffer:function(a){var u=this,h=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(!a.bufferSource)return u;if(t._scratchBuffer&&a.bufferSource&&(a.bufferSource.onended=null,a.bufferSource.disconnect(0),h))try{a.bufferSource.buffer=t._scratchBuffer}catch{}return a.bufferSource=null,u},_clearSound:function(a){var u=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);u||(a.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var i=function(a){this._parent=a,this.init()};i.prototype={init:function(){var a=this,u=a._parent;return a._muted=u._muted,a._loop=u._loop,a._volume=u._volume,a._rate=u._rate,a._seek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++t._counter,u._sounds.push(a),a.create(),a},create:function(){var a=this,u=a._parent,h=t._muted||a._muted||a._parent._muted?0:a._volume;return u._webAudio?(a._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),a._node.gain.setValueAtTime(h,t.ctx.currentTime),a._node.paused=!0,a._node.connect(t.masterGain)):t.noAudio||(a._node=t._obtainHtml5Audio(),a._errorFn=a._errorListener.bind(a),a._node.addEventListener("error",a._errorFn,!1),a._loadFn=a._loadListener.bind(a),a._node.addEventListener(t._canPlayEvent,a._loadFn,!1),a._endFn=a._endListener.bind(a),a._node.addEventListener("ended",a._endFn,!1),a._node.src=u._src,a._node.preload=u._preload===!0?"auto":u._preload,a._node.volume=h*t.volume(),a._node.load()),a},reset:function(){var a=this,u=a._parent;return a._muted=u._muted,a._loop=u._loop,a._volume=u._volume,a._rate=u._rate,a._seek=0,a._rateSeek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++t._counter,a},_errorListener:function(){var a=this;a._parent._emit("loaderror",a._id,a._node.error?a._node.error.code:0),a._node.removeEventListener("error",a._errorFn,!1)},_loadListener:function(){var a=this,u=a._parent;u._duration=Math.ceil(a._node.duration*10)/10,Object.keys(u._sprite).length===0&&(u._sprite={__default:[0,u._duration*1e3]}),u._state!=="loaded"&&(u._state="loaded",u._emit("load"),u._loadQueue()),a._node.removeEventListener(t._canPlayEvent,a._loadFn,!1)},_endListener:function(){var a=this,u=a._parent;u._duration===1/0&&(u._duration=Math.ceil(a._node.duration*10)/10,u._sprite.__default[1]===1/0&&(u._sprite.__default[1]=u._duration*1e3),u._ended(a)),a._node.removeEventListener("ended",a._endFn,!1)}};var s={},o=function(a){var u=a._src;if(s[u]){a._duration=s[u].duration,f(a);return}if(/^data:[^;]+;base64,/.test(u)){for(var h=atob(u.split(",")[1]),g=new Uint8Array(h.length),_=0;_<h.length;++_)g[_]=h.charCodeAt(_);c(g.buffer,a)}else{var m=new XMLHttpRequest;m.open(a._xhr.method,u,!0),m.withCredentials=a._xhr.withCredentials,m.responseType="arraybuffer",a._xhr.headers&&Object.keys(a._xhr.headers).forEach(function(p){m.setRequestHeader(p,a._xhr.headers[p])}),m.onload=function(){var p=(m.status+"")[0];if(p!=="0"&&p!=="2"&&p!=="3"){a._emit("loaderror",null,"Failed loading audio file with status: "+m.status+".");return}c(m.response,a)},m.onerror=function(){a._webAudio&&(a._html5=!0,a._webAudio=!1,a._sounds=[],delete s[u],a.load())},l(m)}},l=function(a){try{a.send()}catch{a.onerror()}},c=function(a,u){var h=function(){u._emit("loaderror",null,"Decoding audio data failed.")},g=function(_){_&&u._sounds.length>0?(s[u._src]=_,f(u,_)):h()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(a).then(g).catch(h):t.ctx.decodeAudioData(a,g,h)},f=function(a,u){u&&!a._duration&&(a._duration=u.duration),Object.keys(a._sprite).length===0&&(a._sprite={__default:[0,a._duration*1e3]}),a._state!=="loaded"&&(a._state="loaded",a._emit("load"),a._loadQueue())},d=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var a=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),u=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),h=u?parseInt(u[1],10):null;if(a&&h&&h<9){var g=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!g&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};r.Howler=t,r.Howl=n,typeof ss<"u"?(ss.HowlerGlobal=e,ss.Howler=t,ss.Howl=n,ss.Sound=i):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=n,window.Sound=i)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var n=this;if(!n.ctx||!n.ctx.listener)return n;for(var i=n._howls.length-1;i>=0;i--)n._howls[i].stereo(t);return n},HowlerGlobal.prototype.pos=function(t,n,i){var s=this;if(!s.ctx||!s.ctx.listener)return s;if(n=typeof n!="number"?s._pos[1]:n,i=typeof i!="number"?s._pos[2]:i,typeof t=="number")s._pos=[t,n,i],typeof s.ctx.listener.positionX<"u"?(s.ctx.listener.positionX.setTargetAtTime(s._pos[0],Howler.ctx.currentTime,.1),s.ctx.listener.positionY.setTargetAtTime(s._pos[1],Howler.ctx.currentTime,.1),s.ctx.listener.positionZ.setTargetAtTime(s._pos[2],Howler.ctx.currentTime,.1)):s.ctx.listener.setPosition(s._pos[0],s._pos[1],s._pos[2]);else return s._pos;return s},HowlerGlobal.prototype.orientation=function(t,n,i,s,o,l){var c=this;if(!c.ctx||!c.ctx.listener)return c;var f=c._orientation;if(n=typeof n!="number"?f[1]:n,i=typeof i!="number"?f[2]:i,s=typeof s!="number"?f[3]:s,o=typeof o!="number"?f[4]:o,l=typeof l!="number"?f[5]:l,typeof t=="number")c._orientation=[t,n,i,s,o,l],typeof c.ctx.listener.forwardX<"u"?(c.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),c.ctx.listener.forwardY.setTargetAtTime(n,Howler.ctx.currentTime,.1),c.ctx.listener.forwardZ.setTargetAtTime(i,Howler.ctx.currentTime,.1),c.ctx.listener.upX.setTargetAtTime(s,Howler.ctx.currentTime,.1),c.ctx.listener.upY.setTargetAtTime(o,Howler.ctx.currentTime,.1),c.ctx.listener.upZ.setTargetAtTime(l,Howler.ctx.currentTime,.1)):c.ctx.listener.setOrientation(t,n,i,s,o,l);else return f;return c},Howl.prototype.init=function(t){return function(n){var i=this;return i._orientation=n.orientation||[1,0,0],i._stereo=n.stereo||null,i._pos=n.pos||null,i._pannerAttr={coneInnerAngle:typeof n.coneInnerAngle<"u"?n.coneInnerAngle:360,coneOuterAngle:typeof n.coneOuterAngle<"u"?n.coneOuterAngle:360,coneOuterGain:typeof n.coneOuterGain<"u"?n.coneOuterGain:0,distanceModel:typeof n.distanceModel<"u"?n.distanceModel:"inverse",maxDistance:typeof n.maxDistance<"u"?n.maxDistance:1e4,panningModel:typeof n.panningModel<"u"?n.panningModel:"HRTF",refDistance:typeof n.refDistance<"u"?n.refDistance:1,rolloffFactor:typeof n.rolloffFactor<"u"?n.rolloffFactor:1},i._onstereo=n.onstereo?[{fn:n.onstereo}]:[],i._onpos=n.onpos?[{fn:n.onpos}]:[],i._onorientation=n.onorientation?[{fn:n.onorientation}]:[],t.call(this,n)}}(Howl.prototype.init),Howl.prototype.stereo=function(t,n){var i=this;if(!i._webAudio)return i;if(i._state!=="loaded")return i._queue.push({event:"stereo",action:function(){i.stereo(t,n)}}),i;var s=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof n>"u")if(typeof t=="number")i._stereo=t,i._pos=[t,0,0];else return i._stereo;for(var o=i._getSoundIds(n),l=0;l<o.length;l++){var c=i._soundById(o[l]);if(c)if(typeof t=="number")c._stereo=t,c._pos=[t,0,0],c._node&&(c._pannerAttr.panningModel="equalpower",(!c._panner||!c._panner.pan)&&e(c,s),s==="spatial"?typeof c._panner.positionX<"u"?(c._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),c._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),c._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):c._panner.setPosition(t,0,0):c._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),i._emit("stereo",c._id);else return c._stereo}return i},Howl.prototype.pos=function(t,n,i,s){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"pos",action:function(){o.pos(t,n,i,s)}}),o;if(n=typeof n!="number"?0:n,i=typeof i!="number"?-.5:i,typeof s>"u")if(typeof t=="number")o._pos=[t,n,i];else return o._pos;for(var l=o._getSoundIds(s),c=0;c<l.length;c++){var f=o._soundById(l[c]);if(f)if(typeof t=="number")f._pos=[t,n,i],f._node&&((!f._panner||f._panner.pan)&&e(f,"spatial"),typeof f._panner.positionX<"u"?(f._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),f._panner.positionY.setValueAtTime(n,Howler.ctx.currentTime),f._panner.positionZ.setValueAtTime(i,Howler.ctx.currentTime)):f._panner.setPosition(t,n,i)),o._emit("pos",f._id);else return f._pos}return o},Howl.prototype.orientation=function(t,n,i,s){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"orientation",action:function(){o.orientation(t,n,i,s)}}),o;if(n=typeof n!="number"?o._orientation[1]:n,i=typeof i!="number"?o._orientation[2]:i,typeof s>"u")if(typeof t=="number")o._orientation=[t,n,i];else return o._orientation;for(var l=o._getSoundIds(s),c=0;c<l.length;c++){var f=o._soundById(l[c]);if(f)if(typeof t=="number")f._orientation=[t,n,i],f._node&&(f._panner||(f._pos||(f._pos=o._pos||[0,0,-.5]),e(f,"spatial")),typeof f._panner.orientationX<"u"?(f._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),f._panner.orientationY.setValueAtTime(n,Howler.ctx.currentTime),f._panner.orientationZ.setValueAtTime(i,Howler.ctx.currentTime)):f._panner.setOrientation(t,n,i)),o._emit("orientation",f._id);else return f._orientation}return o},Howl.prototype.pannerAttr=function(){var t=this,n=arguments,i,s,o;if(!t._webAudio)return t;if(n.length===0)return t._pannerAttr;if(n.length===1)if(typeof n[0]=="object")i=n[0],typeof s>"u"&&(i.pannerAttr||(i.pannerAttr={coneInnerAngle:i.coneInnerAngle,coneOuterAngle:i.coneOuterAngle,coneOuterGain:i.coneOuterGain,distanceModel:i.distanceModel,maxDistance:i.maxDistance,refDistance:i.refDistance,rolloffFactor:i.rolloffFactor,panningModel:i.panningModel}),t._pannerAttr={coneInnerAngle:typeof i.pannerAttr.coneInnerAngle<"u"?i.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof i.pannerAttr.coneOuterAngle<"u"?i.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof i.pannerAttr.coneOuterGain<"u"?i.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof i.pannerAttr.distanceModel<"u"?i.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof i.pannerAttr.maxDistance<"u"?i.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof i.pannerAttr.refDistance<"u"?i.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof i.pannerAttr.rolloffFactor<"u"?i.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof i.pannerAttr.panningModel<"u"?i.pannerAttr.panningModel:t._panningModel});else return o=t._soundById(parseInt(n[0],10)),o?o._pannerAttr:t._pannerAttr;else n.length===2&&(i=n[0],s=parseInt(n[1],10));for(var l=t._getSoundIds(s),c=0;c<l.length;c++)if(o=t._soundById(l[c]),o){var f=o._pannerAttr;f={coneInnerAngle:typeof i.coneInnerAngle<"u"?i.coneInnerAngle:f.coneInnerAngle,coneOuterAngle:typeof i.coneOuterAngle<"u"?i.coneOuterAngle:f.coneOuterAngle,coneOuterGain:typeof i.coneOuterGain<"u"?i.coneOuterGain:f.coneOuterGain,distanceModel:typeof i.distanceModel<"u"?i.distanceModel:f.distanceModel,maxDistance:typeof i.maxDistance<"u"?i.maxDistance:f.maxDistance,refDistance:typeof i.refDistance<"u"?i.refDistance:f.refDistance,rolloffFactor:typeof i.rolloffFactor<"u"?i.rolloffFactor:f.rolloffFactor,panningModel:typeof i.panningModel<"u"?i.panningModel:f.panningModel};var d=o._panner;d||(o._pos||(o._pos=t._pos||[0,0,-.5]),e(o,"spatial"),d=o._panner),d.coneInnerAngle=f.coneInnerAngle,d.coneOuterAngle=f.coneOuterAngle,d.coneOuterGain=f.coneOuterGain,d.distanceModel=f.distanceModel,d.maxDistance=f.maxDistance,d.refDistance=f.refDistance,d.rolloffFactor=f.rolloffFactor,d.panningModel=f.panningModel}return t},Sound.prototype.init=function(t){return function(){var n=this,i=n._parent;n._orientation=i._orientation,n._stereo=i._stereo,n._pos=i._pos,n._pannerAttr=i._pannerAttr,t.call(this),n._stereo?i.stereo(n._stereo):n._pos&&i.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}}(Sound.prototype.init),Sound.prototype.reset=function(t){return function(){var n=this,i=n._parent;return n._orientation=i._orientation,n._stereo=i._stereo,n._pos=i._pos,n._pannerAttr=i._pannerAttr,n._stereo?i.stereo(n._stereo):n._pos?i.pos(n._pos[0],n._pos[1],n._pos[2],n._id):n._panner&&(n._panner.disconnect(0),n._panner=void 0,i._refreshBuffer(n)),t.call(this)}}(Sound.prototype.reset);var e=function(t,n){n=n||"spatial",n==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()}(Vo)),Vo}var Cr=by();class wy{constructor(){Sn(this,"bgm",null);Sn(this,"seMap",{});Sn(this,"isMuted",!1);Sn(this,"bgmVolume",.4)}playBGM(e,t=this.bgmVolume){this.bgm&&this.bgm.stop(),this.bgm=new Cr.Howl({src:[e],loop:!0,volume:t}),this.isMuted||this.bgm.play()}stopBGM(){this.bgm&&this.bgm.stop()}registerSE(e,t,n=1){this.seMap[e]={howl:new Cr.Howl({src:[t],volume:n}),volume:n}}playSE(e,t){const n=this.seMap[e];if(n&&!this.isMuted){const i=n.howl.play(),s=t??n.volume;n.howl.volume(s,i)}}toggleMute(){this.isMuted=!this.isMuted,Cr.Howler.mute(this.isMuted)}setVolume(e){Cr.Howler.volume(e)}}class Ay{constructor(e,t){Sn(this,"bgm1");Sn(this,"bgm2");Sn(this,"id1");Sn(this,"id2");Sn(this,"loopDuration");Sn(this,"volume",.5);this.bgm1=new Cr.Howl({src:[e],loop:!0,volume:.4}),this.bgm2=new Cr.Howl({src:[t],loop:!0,volume:0}),this.id1=this.bgm1.play(),this.id2=this.bgm2.play(),this.loopDuration=6}crossfade(e=100){this.bgm1.fade(this.volume,0,e,this.id1),this.bgm2.fade(0,this.volume,e,this.id2)}crossfadeAtNextLoop(e=10){const n=this.bgm1.seek(this.id1)%this.loopDuration,i=(this.loopDuration-n)*1e3;setTimeout(()=>{this.bgm1.fade(this.volume,0,e,this.id1),this.bgm2.fade(0,this.volume+.1,e,this.id2)},i)}stopAll(){this.bgm1.stop(),this.bgm2.stop()}}const tr=(r,e=.8)=>{const t=_t.timeline();return t.add(()=>{r.classList.add("is-show")}).to(r,{opacity:1,duration:e,ease:"power1.inOut"}),t},Cs=(r,e=.8)=>{_t.timeline().to(r,{opacity:0,duration:e,ease:"power1.inOut"}).add(()=>{r.classList.remove("is-show")})},Ry=new Jv,Zi=new wy;let Pc,lt,qt,Mr,wn,ht,Ps=0,St=1,Lc="jp",Dc,nr=!1,Ls=!1,ql=!1,Yl=!1;const Si=document.getElementById("bullet-wrapper"),od=document.getElementById("retry"),Cy=document.getElementById("retry-button"),ir=document.getElementById("text-caption"),Ic=document.getElementById("gun-layer"),jl=document.getElementById("kv-video");let Sr;const gi=new Pe(0,0,0),Go=new Pe(Math.PI/-2,et(-10),0),ms=new Fn,Er=[];let gn=Array.from({length:5},()=>new Fn),fi=[[],[],[],[],[]],za=[[],[],[],[],[]];const Uc={stage1:0,stage2:-6,stage3:-12,stage4:-18,stage5:-24},Sf={stage1:6,stage2:9,stage3:4,stage4:8,stage5:3};let Pr=null,wa=0,Ha=new Fn;const pa=new Zf,Ef=[pa.load("./assets/image/broken/00.png"),pa.load("./assets/image/broken/01.png"),pa.load("./assets/image/broken/02.png"),pa.load("./assets/image/broken/03.png")],Py=async(r,e)=>{qt=new Yp,lt=new _n(75,r/e,.1,5),lt.position.set(0,0,0),lt.lookAt(0,-1,0),Mr=new Xv,Mr.setClearColor("#ffffff",1),qt.add(ms);for(let c=0;c<gn.length;c++)qt.add(gn[c]);const t=new am(16777215,3);t.position.set(2,2,2),qt.add(t),cd();const n=document.getElementById("canvas-wrapper");n.appendChild(Mr.domElement);for(let c=0;c<gn.length;c++)fd(c,ad[c],sd[c]);const i=new ih,s=new Ms({color:"black"});i.load("./assets/obj/gun/gun.obj",c=>{c.traverse(f=>{f instanceof pt&&(f.material=s)}),ht=c,ud(),lt.add(ht)},c=>{},c=>{});const o="@#MW%&BAEYCI=-:.",l=Cc()?.2:.15;wn=new qv(Mr,o,{invert:!0,resolution:l}),wn.setSize(r,e),wn.domElement.classList.add("aa-effect"),tr(wn.domElement,0),n.appendChild(wn.domElement),qt.add(lt),yy(Mr,wn,lt),rd(Mr,wn,lt),$a(),Iy(),_y(wn,lt),Cy.addEventListener("click",()=>{Fc()}),ld()},ld=()=>{requestAnimationFrame(ld);for(let r=0;r<fi[St-1].length;r++){const e=fi[St-1][r];e.userData.boundingBox.setFromObject(e)}for(let r=Er.length-1;r>=0;r--){const e=Er[r];e.position.add(e.velocity),e.position.z<lt.position.z-10&&(ms.remove(e),Er.splice(r,1));const t=new Ei().setFromObject(e);for(let n=0;n<za[St-1].length;n++){const s=za[St-1][n].userData.boundingBox;if(t.intersectsBox(s)){ms.remove(e),Er.splice(r,1);break}}for(let n=0;n<fi[St-1].length;n++){const i=fi[St-1][n],s=i.userData.boundingBox;if(t.intersectsBox(s)){gn[St-1].remove(i),fi[St-1].splice(n,1),nr&&Zi.playSE("hit"),ms.remove(e),Er.splice(r,1),Oy(i,gn[St-1]),my(ir),Rc(ir,Dc[Ps],40,Lc,nr?Zi:void 0),Ps++,fi[St-1].length===0&&(ql=!1,Hy());break}}}wn.render(qt,lt)},Tf=r=>{Dc=r},Ly=r=>{Lc=r},Dy=()=>{nr=!0,Zi.registerSE("shot","./assets/audio/se/shot.wav",1),Zi.registerSE("hit","./assets/audio/se/hit-simple.mp3",1),Zi.registerSE("type","./assets/audio/se/type.mp3",.3),Pc=new Ay("./assets/audio/bgm/bgm.mp3","./assets/audio/bgm/bgm2.mp3")},cd=()=>{jl.play();const r=new Kp(jl),e=new Qi({map:r}),t=new jr(7.2,12.8);Sr=new pt(t,e),Sr.rotation.set(et(-90),0,0),Sr.position.set(0,-3,0),Cc()||(Sr.rotation.z=et(90)),qt.add(Sr)},ud=()=>{ht.scale.set(0,0,0),ht.rotation.set(0,et(180),et(10)),ht.position.set(0,0,-1.5)},Iy=()=>{Ic.addEventListener("click",()=>{Ls!==!1&&bf()}),window.addEventListener("keydown",r=>{if(r.code==="Space"){if(Ls===!1)return;r.preventDefault(),bf()}})},bf=()=>{nr&&Zi.playSE("shot"),Uy(),gy(ht),Pr!==null&&Pr>0&&(Pr--,Ny()),Pr===0&&(ql=!0,$a(),setTimeout(()=>{ql&&Gy()},500))},fd=async(r,e,t)=>{const n=gn[r],i=fi[r],s=za[r],o=`stage${r+1}`;n.position.z=Uc[o]+.5,e.forEach(l=>{const c=new pt(l.geo,l.mat);c.position.copy(l.position),c.rotation.copy(l.rotation),c.scale.copy(l.scale),n.add(c),s.push(c),n.updateMatrixWorld(!0),c.updateMatrixWorld(!0);const f=new Ei().setFromObject(c);c.userData.boundingBox=f}),await Promise.all(t.map(async l=>{var a;const c=new ih;if(l.name!=="vase"&&l.name!=="curtain"){const u=await Ry.loadAsync(l.matPath);u.preload(),c.setMaterials(u)}const f=await c.loadAsync(l.objPath);if(l.name==="vase"){const u=new Ms({color:"white"});f.traverse(h=>{h instanceof pt&&(h.material=u)})}else if(l.name==="curtain"){const u=new Ms({color:"white"});f.traverse(h=>{h instanceof pt&&(h.material=u)})}else l.name==="juice"&&f.traverse(u=>{if(u.name==="glass-group_glass"&&u instanceof pt){const h=u.material;h.transparent=!0,h.opacity=.3,h.depthWrite=!1}});f.position.copy(l.position),f.rotation.copy(l.rotation),f.scale.copy(l.scale),n.add(f),(a=l.animate)==null||a.call(l,f),l.name!=="table"&&i.push(f),n.updateMatrixWorld(!0),f.updateMatrixWorld(!0);const d=new Ei().setFromObject(f);f.userData.boundingBox=d}))},Uy=()=>{const r=new cc(.03,8,8),e=new Qi({color:16711680}),t=new pt(r,e);t.position.set(lt.position.x,-.5,lt.position.z);const n=new C;lt.getWorldDirection(n),n.y+=.25,n.normalize(),t.velocity=n.clone().multiplyScalar(.3),ms.add(t),Er.push(t)},Fy=()=>{qt.remove(Sr),jl.pause()},hd=()=>{Si.innerHTML=""},dd=()=>{const r=`stage${St}`;if(Si)for(let t=0;t<Sf[r];t++){const n=document.createElement("div");n.classList.add("bullet-icon"),n.innerHTML=`
      <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.06493 0.568604C4.44995 0.567949 0.59375 7.52101 0.59375 12.5816C0.59375 17.6421 0.594363 23.6001 0.594363 23.6001L15.5355 23.6001C15.5355 23.6001 15.5348 17.6421 15.5354 12.5809C15.5355 7.52167 11.6793 0.568603 8.06493 0.568604Z" fill="black"/>
        <path d="M0.595402 27.6611L15.5359 27.6618L15.5358 24.7692H0.594788L0.595402 27.6611Z" fill="black"/>
      </svg>
      `,Si.appendChild(n)}Pr=Sf[r];const e=Si.querySelectorAll("div");_t.to(e,{display:"inline-block",duration:.1,stagger:.06,ease:"power1.inOut"})},Ny=()=>{if(Si){const r=Si.getElementsByTagName("div");r.length>0&&r[r.length-1].remove()}},Oy=(r,e)=>{e.updateMatrixWorld(!0),r.updateMatrixWorld(!0);const t=new C;r.getWorldPosition(t);const n=new Ze(.9,.9,.001);let i;i=new Qi({map:By(),transparent:!0});const s=new pt(n,i);if(s.position.copy(t),St!==1){const o=`stage${St}`;s.position.z+=Uc[o]+6*(St-1)}St===5&&(s.scale.set(.9,.9,.9),s.position.y+=.2),e.add(s)},By=()=>{const r=Math.floor(Math.random()*Ef.length);return Ef[r]},ky=()=>{if(!ht||!lt||Yl)return;Yl=!0;const r=_t.timeline({}),e=new jr(7.2,12.8),t=new pt(e,new Qi({color:0,transparent:!0,opacity:0}));t.rotation.set(et(-90),0,0),t.position.set(0,-2,0),qt.add(t);const n=new lc(.5,32),i=new Qi({color:16777215,side:In,transparent:!0,opacity:0}),s=new pt(n,i);s.rotation.set(et(-140),0,0),s.position.set(0,-.8,0),s.scale.set(.6,.5,.5),qt.add(s),r.to(t.material,{opacity:1,duration:2,ease:"power1.inOut"}).to(ht.scale,{x:.05,y:.05,z:.05,duration:.1},"-=0.1").to(s.material,{opacity:1,ease:"power4.out",duration:.6},"-=0.3").to(ht.position,{z:-.5,ease:"power4.out",duration:.6},"<").add(()=>{Fy()}).to(ht.scale,{x:.11,y:.11,z:.11,duration:.5},"+=0.5").to(ht.rotation,{y:et(30),duration:.5},"<").to(s.scale,{x:1.1,y:1.1,z:1.1,duration:.5},"<").to(s.rotation,{x:et(-100),duration:.5},"<").to(ht.rotation,{z:et(20),duration:.2},"+=0.1").to(ht.rotation,{z:et(10),duration:.2}).add(()=>{dd()},"+=0.3").to(ht.position,{z:-.4,y:-.3,duration:.8},"+=0.6").to(s.scale,{x:2,y:2,z:2,duration:.5},"<").to(t.material,{opacity:0,duration:.25},"<").to(s.material,{opacity:0,duration:.25},"<").to(ht.rotation,{y:et(90),z:0,duration:.8},"<").to(ht.scale,{x:.1,y:.1,z:.1,duration:.8},"<").to(lt.rotation,{x:gi.x,y:gi.y,z:gi.z,duration:1,ease:"power2.out"}).add(()=>{qt.remove(s),qt.remove(t),zy()})},zy=()=>{pd(),vy(lt),Rc(ir,Dc[Ps],40,Lc,nr?Zi:void 0),Ps++},$a=()=>{Ls=!1,wn.domElement.style.pointerEvents="none",Ic.style.pointerEvents="none"},pd=()=>{Ls=!0,wn.domElement.style.pointerEvents="auto",Ic.style.pointerEvents="auto"},Hy=()=>{if(St===gn.length){Wy();return}St++,Vy(),hd(),setTimeout(()=>{dd()},2e3),nr&&St===2&&Pc.crossfadeAtNextLoop()},Fc=()=>{nr&&Pc.stopAll(),_t.killTweensOf(ht.position),_t.killTweensOf(ht.rotation),Cs(od,.1),Ky(),cd();for(let r=0;r<gn.length;r++)qt.remove(gn[r]);ud(),lt.position.set(0,0,0),lt.lookAt(0,-1,0),id(gi),xy(),Ps=0,St=1,Ls=!1,Yl=!1,wa=0,lt.remove(Ha),Ha=new Fn,ir.innerHTML="",tr(ir,0),Pr=null,hd(),tr(Si,0),gn=Array.from({length:5},()=>new Fn),fi=[[],[],[],[],[]],za=[[],[],[],[],[]];for(let r=0;r<gn.length;r++)qt.add(gn[r]),fd(r,ad[r],sd[r])},Vy=()=>{const r=_t.timeline({}),e=`stage${St}`;r.add(()=>{$a()}).to(lt.rotation,{x:gi.x,y:gi.y,z:gi.z,duration:1,ease:"power2.out"},"<").to(lt.position,{z:Uc[e],duration:3,ease:"power2.out"}).add(()=>{id(gi),pd()})},Gy=()=>{_t.timeline().to(ir,{opacity:0,duration:.5,ease:"power1.inOut"}).to(lt.rotation,{x:Go.x,y:Go.y,z:Go.z,duration:3,ease:"power1.inOut"},0).add(()=>{tr(od,.2)},"+=2").to(ht.rotation,{y:et(180),z:et(90),duration:9,ease:"power1.inOut"},0).to(ht.position,{z:-5,y:.3,duration:15,ease:"power1.inOut"},0)},Wy=()=>{_t.timeline({}).add(()=>{$a()}).add(()=>{lt.add(Ha),Cc()?$l(Ty):$l(Ey)},"+=2.5").to(ht.position,{y:-2,duration:2,ease:"power1.inOut"},"+=4").to(ht.rotation,{y:et(-180),duration:2,ease:"power1.inOut"},"<").add(()=>{Cs(ir,2),Cs(Si,2)},"<").add(()=>{Jy()},"-=0.5")};function $l(r){if(wa>=r.length)return;const e=r[wa],t=new pt(e.geo,e.mat);t.scale.copy(e.scale),t.position.copy(e.position),Ha.add(t),_t.to(t.scale,{x:20,duration:5,ease:"power1.inOut"}),wa++,setTimeout(()=>$l(r),500)}const Xy=[["＜視点移動＞画面をドラッグ ＜発砲＞銃をクリック／Spaceキー"],["＜視点移動＞画面をスワイプ ＜発砲＞銃をタップ"]],qy=[["<Adjust View> Drag the screen <Shoot> Click the gun / Space key"],["<Adjust View> Swipe the screen <Shoot> Tap the gun"]],Yy=[["秘密は気のいい男だった。"],["秘密は社交的なタイプで、人と打ち解けるのは早かった。"],["秘密はかつて絵を描いていた。"],["学校ではコンピュータ工学を学び、卒業後はアプリケーションエンジニアとして働きだした。"],["秘密はカフェインを摂取するとお腹を壊す体質なので"],["注文カウンターの端に追いやられているカフェインレスメニューの用紙からアイスカフェオレを指差して注文する。"],["冬場はいつもホットミルクを注文するから、コーヒーの味を楽しむのはこの季節だけだ。"],["提供されるカフェオレはまだグラスの中で二層に分かれており、ホワイトとブラウンが重なっている。"],["秘密はこの二層を一遍にかき混ぜてしまうのではなく、まず表面に溜まった氷をひとつひとつストローで突いて下に崩していく。"],["そうしてできる対流によってグラスの中の濃度が乱れていくのを視覚的に楽しむのが好きだった。"],["私が秘密と初めて会ったのは新卒入社したベンチャー企業で、彼は同じチームにいた。"],["ランチは決まって徒歩五分の中華料理店へ出かけ、麻婆豆腐を食べる。"],["そこで秘密はこんな話をした。"],["二色の液体が混ざって一色になる、というのは"],["それぞれの分子の特性が似ていて、親和性があるためだ。"],["そのおかげで、ふたつのものは互いのスペースを交換しながら均一に散ることができる。"],["彼が言うことには"],["彼も私も、そうした親和的な素質があって"],["他者とうまく空間を交わすことができるというのだ。"],["しかし、本当にそれでよかったんだろうか。"],["粒たちは拡散を始めていて"],["そうしてひとつになったものを、また元のように分けることはできなかった。"]],jy=[["Secret was a nice guy."],["He was sociable, he made friends quickly and easily."],["He used to enjoy drawing."],["At school, he studied computer engineering and after graduating, he started working as an app engineer."],["Secret’s stomach doesn’t handle caffeine well."],["So, he points to the iced café au lait on the decaf menu, tucked away in the corner of the order counter, and places his order."],["He always orders plain hot milk in the winter, so this is the only season he can enjoy the taste of coffee."],["The café au lait is served with its two layers separated in the glass, white lying atop the brown."],["Instead of stirring the drink immediately, he first pokes the ice cubes that are clustered on the surface with a straw one by one to disrupt the separation of the layers."],["He enjoys watching the solution in the glass become disordered by the currents he created."],["I first met Secret at the startup company I joined after college, and we were on the same team."],["We would always go to this Chinese restaurant a 5 minute walk away for lunch and eat mapo tofu."],["There, he told me this story."],["The reason why two different colors of liquid can mix together to become one is"],["because the individual molecules have similar and compatible characteristics."],["As a result, the two substances can evenly disperse while exchanging space with each other."],["He said that"],["he and I also have this kind of compatibility,"],["which allows us to interact well with others."],["But is that really a good thing?"],["The particles begin to disperse,"],["and once the two solutions become one, it’s impossible to separate them again as before."]];let Tr="jp";const Va=document.getElementById("opening"),md=document.getElementById("ending"),_d=document.getElementById("ending-credit"),gd=document.getElementById("retry"),vd=gd.querySelector("button"),$y=document.querySelectorAll(".js-translation"),Zy=()=>{fetch("./assets/image/logo.svg").then(e=>e.text()).then(e=>{const t=document.getElementById("ending-logo");t&&t.insertAdjacentHTML("beforeend",e)}).catch(e=>{})},Ky=()=>{lM(),Qy(),Va.style.pointerEvents="auto",tr(Va),tM()},Jy=()=>{const r=tr(md),e=10;vd.textContent="BACK",r.add(()=>{eM(e)}).add(()=>{Rc(_d,["Created by ITO Arisa","English Translation by Chika.K"],40,"en")},`+=${e+1}`).add(()=>{tr(gd,.2)},"+=2.5")},Qy=()=>{Cs(md,0),setTimeout(()=>{_d.innerHTML="",vd.textContent="REPLAY"},100)},eM=r=>{const t=document.getElementById("ending-logo").querySelector("svg"),n=t==null?void 0:t.querySelectorAll("path");n==null||n.forEach(i=>{const s=i.getTotalLength();i.style.strokeDasharray=`${s}`,i.style.strokeDashoffset=`${s}`,i.style.animation=`draw ${r}s ease-out forwards`,i.style.stroke="black"})},tM=()=>{const e=document.getElementById("ending-logo").querySelector("svg"),t=e==null?void 0:e.querySelectorAll("path");t==null||t.forEach(n=>{n.style.animation="none",n.offsetHeight})},nM=()=>{const r=document.getElementById("kv-start"),e=document.querySelectorAll(".lang-button");document.addEventListener("contextmenu",n=>{n.preventDefault()}),document.addEventListener("contextmenu",n=>{n.preventDefault()}),e.forEach((n,i)=>{n.addEventListener("click",()=>{i===0?(Tr="jp",e[1].classList.remove("is-active"),n.classList.add("is-active")):(Tr="en",e[0].classList.remove("is-active"),n.classList.add("is-active")),iM()})});const t=new AudioContext;r.addEventListener("click",async()=>{t.state==="suspended"&&await t.resume(),yd(),Va.style.pointerEvents="none",Dy(),Tr==="jp"?Tf(Yy):Tr==="en"&&Tf(jy),Ly(Tr),Cs(Va),ky()})},iM=()=>{$y.forEach((r,e)=>{switch(Tr){case"jp":r.textContent=Xy[e][0];break;case"en":r.textContent=qy[e][0];break}})},rM=()=>new Promise(r=>{const e=()=>{const t=window.innerWidth,n=window.innerHeight;t>0&&n>0?r({w:t,h:n}):requestAnimationFrame(e)};e()}),sM=()=>{const r=document.querySelector(".menu-button"),e=document.querySelector(".menu-wrapper"),t=document.getElementById("menu-fullscreen"),n=document.getElementById("menu-title"),i=document.documentElement;r==null||r.addEventListener("click",()=>{e.classList.toggle("is-active")}),t.addEventListener("click",async()=>{await s(),e.classList.remove("is-active")}),n.addEventListener("click",()=>{Fc(),e.classList.remove("is-active")});const s=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await i.requestFullscreen()}catch{}};oM()};let Ds=null,Nc=null,Oc=!1;const xd=60*3e3,aM=10*1e3,Ga=document.querySelector(".timer-ui"),oM=()=>{function r(){Oc&&(clearTimeout(Ds),Ds=setTimeout(()=>{Md()},xd))}["mousemove","mousedown","keydown","touchstart"].forEach(e=>{window.addEventListener(e,r,{passive:!0})}),["mousemove","mousedown","keydown","touchstart"].forEach(e=>{window.addEventListener(e,cM,{passive:!0})})},yd=()=>{Oc=!0,clearTimeout(Ds),Ds=setTimeout(()=>Md(),xd)},lM=()=>{Oc=!1,clearTimeout(Ds),clearTimeout(Nc),Sd()},Md=()=>{Ga.classList.contains("is-active")||(Ga.classList.add("is-active"),Nc=setTimeout(()=>{Fc()},aM))},cM=()=>{Ga.classList.contains("is-active")&&(Sd(),clearTimeout(Nc),yd())},Sd=()=>{Ga.classList.remove("is-active")};window.addEventListener("DOMContentLoaded",async()=>{if(document.getElementById("app")){const{w:e,h:t}=await rM();Py(e,t),Zy(),nM(),sM()}});"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(()=>{}).catch(r=>{})});
