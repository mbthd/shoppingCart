/*配置rem*/
(function(doc, win){
	var docEl = doc.documentElement, resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize', recalc = function(){
		var clientWidth = docEl.clientWidth;
		docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
	};
	if(!doc.addEventListener){
		return;
	}
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);

})(document, window);