jQuery 插件版本 Heartbeat
=========

### a version for jQuery user to use Heartbeat to point place at Map.

A web responsive dot with heartbeat animation (using css3 animation )

----------------------------------
![demo](http://ww2.sinaimg.cn/bmiddle/64c45e19gw1eiihlmqcr8g208c06yk0m.gif)

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
use ````<script>````to import jQuery and Hearbeat.
Then:
````javascript
$('#container').Hearbeat();
````
## CSS
If you want to custom it,you can modify the css file;
