//author: Spencer Xie 
//email: spencerxie2012@gmail.com
//@spenceryi

define(['jquery'],function($) {
	'use strict';

	var _opts = {
		container: '[data-role=heart]',
		bigCircleWidth: 32,
		smallCircleWidth: 20,
		centerCircleWidth: 7,
		mapWidth: 710
	}

	function Heartbeat(element, opts) {
		this.element = $(element);
		this.options = $.extend(true,{},_opts,opts);
	}

	Heartbeat.prototype = {

		init: function() {
			var self = this;

			self.heart = self.element.find(self.options.container);

			//set Original Container Width and Original hear Width;
			self.imgElement = self.element.find('img');
			self.heartS = self.heart.find('[data-role=small]');
			self.heartB = self.heart.find('[data-role=big]');
			self.heartC = self.heart.find('[data-role=center]');

			//get the width Ratio
			self._getWidthRatio();

			//初始化 第一次渲染
			if(!self.heart.width()) {
				var OriginalMapWidth = self.imgElement.width();
				self._showHearBeat(OriginalMapWidth,500);
			}
			

			//resize
			self._doResize();

			
			
		},

		_doResize: function() {
			var self = this;
			$(window).bind('resize', function() {
				var nowMapWidth = self.imgElement.width();
				self._setHeart(nowMapWidth);
			});
		},

		_getWidthRatio: function() {
			var self = this;
			var ratio = {};
			ratio['s'] = self.options.smallCircleWidth/self.options.mapWidth;
			ratio['b'] = self.options.bigCircleWidth/self.options.mapWidth;
			ratio['c'] = self.options.centerCircleWidth/self.options.mapWidth;
			self.ratio = ratio;
		},

		_showHearBeat: function(width) {
			var self = this;
			self._setHeart(width);
			self.heart.delay(200).fadeIn(500);

			
		},

		_setHeart: function(width) {
			//set new small heart one
			var self  = this;
			self.heartS.width(width*self.ratio['s']);
			self.heartS.height(width*self.ratio['s']);

			self.heartB.width(width*self.ratio['b']);
			self.heartB.height(width*self.ratio['b']);

			self.heartC.width(width*self.ratio['c']);
			self.heartC.height(width*self.ratio['c']);

			var wowNum = 0.03;
			self.heart.width(width*(self.ratio['b']+wowNum));
			self.heart.height(width*(self.ratio['b']+wowNum));
			
		}
	}

	
	
	return Heartbeat;


});
