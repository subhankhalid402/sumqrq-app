/*! For license information please see 7397.0f8646b0.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkQueue_Manger=self.webpackChunkQueue_Manger||[]).push([[7397,7368],{7397:function(n,t,i){i.r(t),i.d(t,{c:function(){return o}});var e=i(5785),c=i(7368),r=i(236),o=function(n,t){var i,o,a=function(n,e,c){if("undefined"!==typeof document){var r=document.elementFromPoint(n,e);r&&t(r)?r!==i&&(s(),u(r,c)):s()}},u=function(n,t){i=n,o||(o=i);var c=i;(0,e.c)((function(){return c.classList.add("ion-activated")})),t()},s=function(n){if(void 0===n&&(n=!1),i){var t=i;(0,e.c)((function(){return t.classList.remove("ion-activated")})),n&&o!==i&&i.click(),i=void 0}};return(0,r.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:function(n){return a(n.currentX,n.currentY,c.a)},onMove:function(n){return a(n.currentX,n.currentY,c.b)},onEnd:function(){s(!0),(0,c.h)(),o=void 0}})}},7368:function(n,t,i){i.r(t),i.d(t,{a:function(){return r},b:function(){return o},c:function(){return c},d:function(){return u},h:function(){return a}});var e={getEngine:function(){var n=window;return n.TapticEngine||n.Capacitor&&n.Capacitor.isPluginAvailable("Haptics")&&n.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(n){var t=this.getEngine();if(t){var i=this.isCapacitor()?n.style.toUpperCase():n.style;t.impact({style:i})}},notification:function(n){var t=this.getEngine();if(t){var i=this.isCapacitor()?n.style.toUpperCase():n.style;t.notification({style:i})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionStart():n.gestureSelectionStart())},selectionChanged:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionChanged():n.gestureSelectionChanged())},selectionEnd:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionEnd():n.gestureSelectionEnd())}},c=function(){e.selection()},r=function(){e.selectionStart()},o=function(){e.selectionChanged()},a=function(){e.selectionEnd()},u=function(n){e.impact(n)}}}]);
//# sourceMappingURL=7397.0f8646b0.chunk.js.map