// Load the index.js for index page
requirejs(["./config"], function(config) {
    require(['app/main']);
});
