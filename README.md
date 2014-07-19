Heartbeat
=========

A web responsive dot with heartbeat animation (using css3 animation )

----------------------------------
!(demo)[http://ww2.sinaimg.cn/bmiddle/64c45e19gw1eiihlmqcr8g208c06yk0m.gif]

## HTML
````html
<section id="container">
      <img src="assets/img/map.jpg" alt="This is a map">
      <div data-role="heart">
          <span data-role="center" class="heart"></span>
          <span data-role="small" class="heart"></span>
          <span data-role="big" class="heart"></span>
      </div>
</section>  
````

## JS
````javascript
require(["./config",'app/heartbeat'], function(config,yeah) {
	
	 var yeah = new yeah('#container',{mapWidth: 710});
	 // You also can give small/big/center circle's size
	 // new yeah('#container',{bigCircleWidth: 32,
	 //	smallCircleWidth: 20,
	 // centerCircleWidth: 7,
 	 //	mapWidth: 710});
	 yeah.init();

});
````
## CSS
If you want to custom it,you can modify the css file;
