define(['jquery'],function($){
	function Window(){
		this.cfg = {
			width:500,
			height:300,
			content:"",
			handler:null
		};
	}

	Window.prototype = {
		alert:function(cfg){
			var CFG = $.extend(this.cfg,cfg);
			var boudingBox = $('<div class="window_boundingBox"></div>');
			boudingBox.appendTo('body');
			boudingBox.html(CFG.content);
			var btn = $('<input type="button" value="确定">');
			btn.appendTo(boudingBox);
			btn.click(function(){
				CFG.handler && CFG.handler(); //判断是否传入执行操作的函数，如果传入就执行
				boudingBox.remove();
			});
			$.extend(this.cfg,cfg);
			boudingBox.css({
				width:CFG.width+'px',
				height:CFG.height+'px',
				left:(CFG.x||(window.innerWidth-CFG.width)/2)+'px',
				top:(CFG.y||(window.innerHeight-CFG.height)/2)+'px'
			});
		},
		confirm:function(){},
		prompt:function(){}
	}

	return{
		Window : Window
	}
})