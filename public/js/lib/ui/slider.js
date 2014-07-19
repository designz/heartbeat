define(function(require,exports,module) {
   var plugin = {};

   var defaults = {

        //一般需要的属性
        mode: 'horizontal',
        sliderSelector: '',
        speed: 500,
        easing: null,
        slideMargin: 0,
        startSlide: 0,
        randomStart: false,
        adaptiveHeight: false,
        video: false,
        useCSS: true,
        preloadImages: 'visible',
        responsive: true,
        slideZIndex: 50,
        wrapperClass: 'bx-wrapper',

        //触摸用到的属性
        touchEnabled: true,
        swipeThreshold: 50,
        oneToOneTouch: true,
        preventDefaultSwipeX: true,
        preventDefaultSwipeY: false,


        //页码
        

        //控制操作相关属性
        controls: true,
        nextText: 'Next',
        prevText: 'Prev',
        nextSelector: null,
        prevSelector: null,
        autoControls: false,
        startText: 'Start',
        stopText: 'Stop',
        autoControlsCombine: false,
        autoControlsSelector: null,



        //自动播放操作相关属性
        auto: false,
        pause: 4000,
        autoStart: true,
        autoDirection: 'next',
        autoHover: false,
        autoDelay: 0,
        autoSlideForOnePage: false,


        //旋转木马
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 0,
        slideWidth: 0,


        //回调函数
        onSliderLoad: function() {},
        onSliderBefore: function() {},
        onSliderAfter: function() {},
        onSLiderNext: function() {},
        onSliderPrev: function() {},
        onSliderResize: function() {}

   };

   var bxSlider = function(options) {

        if(this.length == 0 ) return this;


        if(this.length > 1) {
            this.each(function() {
                $(this).bxSlider(options)
            });
            return this;
        }

        var slider = {};

        var el = this;
        plugin.el = this;


        var windowWidth = $(window).width();
        var windowHeight = $(window).height();



        var init = function() {

            slider.settings = $.extend({},defaults,options);
            slider.settings.slideWidth = parseInt(slider.settings.slideWidth);
            slider.children = el.children(slider.setttings.sliderSelector);
            if(slider.children.length < slider.settings.minSlides) slider.settings.minSlides = slider.children.length;
            if(slider.children.length < slider.settings.maxSlides) slider.settings.maxSlides = slider.children.length;


            if(slider.settings.randomStart) slider.settings.startSlide = Math.floor(Math.random()*slider.children.length);

            slider.active = { index: slider.settings.startSlide };
            slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1;

        }



   }
});





















































































