"use strict";(self.webpackChunkQueue_Manger=self.webpackChunkQueue_Manger||[]).push([[5022],{5022:function(e,n,t){t.r(n),t.d(n,{createSwipeBackGesture:function(){return a}});var r=t(1811),u=t(9507),i=t(7909),a=function(e,n,t,a,c){var o=e.ownerDocument.defaultView,f=(0,u.i)(e),s=function(e){return f?-e.deltaX:e.deltaX};return(0,i.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(e){return function(e){var n=e.startX;return f?n>=o.innerWidth-50:n<=50}(e)&&n()},onStart:t,onMove:function(e){var n=s(e)/o.innerWidth;a(n)},onEnd:function(e){var n=s(e),t=o.innerWidth,u=n/t,i=function(e){return f?-e.velocityX:e.velocityX}(e),a=i>=0&&(i>.2||n>t/2),h=(a?1-u:u)*t,d=0;if(h>5){var l=h/Math.abs(i);d=Math.min(l,540)}c(a,u<=0?.01:(0,r.j)(0,u,.9999),d)}})}}}]);
//# sourceMappingURL=5022.230c5934.chunk.js.map