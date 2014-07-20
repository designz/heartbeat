;(function($) {


	'use strict';

	var _opts = {
		container: '[data-role=heart]',
		bigCircleWidth: 32,
		smallCircleWidth: 20,
		centerCircleWidth: 7,
		mapWidth: 710
	}

	$.fn.Heartbeat = function(opts) {
		
		if(this.length == 0) return this;

		if(this.length > 1) {
			this.each(function() {
				$(this).Heartbeat(options);

			});
			return this;
		}


		var hb = {};
		var el = this;

		var init = function() {
			var self = hb;
			hb.options = $.extend(true,{},_opts,opts);

			hb.heart = el.find(self.options.container);

			//set Original Container Width and Original hear Width;
			hb.imgElement = el.find('img');
			hb.heartS = el.find('[data-role=small]');
			hb.heartB = el.find('[data-role=big]');
			hb.heartC = el.find('[data-role=center]');

			//get the width Ratio
			_getWidthRatio();

			//初始化 第一次渲染
			if(!self.heart.width()) {
				var OriginalMapWidth = self.imgElement.width();
				_showHearBeat(OriginalMapWidth,500);
			}
			

			//resize
			_doResize();

			
			
		};

		var _doResize = function() {
			var self = hb;
			$(window).bind('resize', function() {
				var nowMapWidth = self.imgElement.width();
				_setHeart(nowMapWidth);
			});
		};

		var _getWidthRatio = function() {
			var self = hb;
			var ratio = {};
			ratio['s'] = self.options.smallCircleWidth/self.options.mapWidth;
			ratio['b'] = self.options.bigCircleWidth/self.options.mapWidth;
			ratio['c'] = self.options.centerCircleWidth/self.options.mapWidth;
			self.ratio = ratio;
		};

		var _showHearBeat = function(width) {
			var self = hb;
			_setHeart(width);
			self.heart.delay(200).fadeIn(500);

			
		};

		var _setHeart = function(width) {
			//set new small heart one
			var self  = hb;
			self.heartS.width(width*self.ratio['s']);
			self.heartS.height(width*self.ratio['s']);

			self.heartB.width(width*self.ratio['b']);
			self.heartB.height(width*self.ratio['b']);

			self.heartC.width(width*self.ratio['c']);
			self.heartC.height(width*self.ratio['c']);

			var wowNum = 0.03;
			self.heart.width(width*(self.ratio['b']+wowNum));
			self.heart.height(width*(self.ratio['b']+wowNum));
			
		};

		init(opts);
		return this;
	}

	
	

})(jQuery);