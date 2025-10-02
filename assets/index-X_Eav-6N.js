(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))I(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&I(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function I(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const i=`

       @@BYII=IB
        @AC=---I
        #AC=----:                #@&AYEI==-:
        WBC=---:                  #@#AYI=--:
         BBC=---:                     C==--::::
         &C=----::                 EEYCII===--:::
         &C=---:::               M@%&BAEYCCII
         &I=----::::              @@W&BBAAEEE
        AI=-----::::              @@@M%WBAEE:
        Y=------::::                @@@@EECC
       AI=-----:::...:
      AI===---:::...:
     EI===---:::......:
    YI===-----::......:
   BYI===-----:::......:           :WWWWWWWW
  @AYCI==----::::...::              @@@BYCI==
  @BYCI==-----::::::::               Y@MAYI=--
  @&EYII==------::::::-              @%ECI=-:
  @%AYCI==-----:::::-               @BYI=-::
  @MAYCII==----:::--               @%YI=-::
  &@BEYCI==------=             BECI==-::::::::
   @%AYCI===-----=          &EYCII==--:::::::::
   @@BECII==-----=        @@MBEYCII==---:::
   :@&EYCI==-----=        &@M&AEYYCI==--::
    @#AYCII==---=           @%BAEYYCCIIII=:
    @&EYCI==--=Y            @%BAEEYCII=:
`,n=()=>{console.log("\x1B[36m%s\x1B[0m",i)};window.addEventListener("DOMContentLoaded",()=>{n()});
