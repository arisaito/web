/*! For license information please see app.bundle.js.LICENSE.txt */
!function(t){t.fn.glitch=function(i){var n=t.extend({bg:null,maxint:1,minint:.5,maxglitch:800,hshift:10,vshift:10,direction:"horizontal"},i);return this.each((function(){$t=t(this),$t.wrap('<div style="display:inline-block;position:relative">');var i=$t.closest("div"),o=$t.clone(),e=$t.height(),h=$t.width();null===n.bg&&(n.bg=$t.css("background-color")),o.css({position:"absolute",top:0,left:0,height:e,width:h,overflow:"hidden","background-color":n.bg}),i.append(o);var a=function(t){return Math.floor(Math.random()*(t+1))};setTimeout((function t(){var i;for(i=0;i<a(n.maxglitch)+1;i++)setTimeout((function(){var t;t="vertical"==("random"==n.direction?Math.random()<.5?"horizontal":"vertical":n.direction)?{top:a(n.vshift+1),width:a(Math.floor(.8*h))+2,height:e}:{left:a(n.hshift+1),height:a(Math.floor(.8*e))+2,width:h},o.css(t)}),a(300));setTimeout((function(){o.css({left:0,top:0})}),300),setTimeout(t,1e3*(a(n.maxint-n.minint)+n.minint))}),1e3)}))}}(jQuery),$((function(){setTimeout((function(){$(".loading-bg").fadeOut(500)}),100)})),$(window).on("load",(function(){$(".glitch").glitch({maxint:1,minint:.1,maxglitch:100,direction:"random"}),$(".glitch-light").glitch({maxint:3,minint:1,maxglitch:5,direction:"random"})}));