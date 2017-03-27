var page = require('webpage').create();
page.open('http://192.168.120.231:3000/', function() {
    page.render('out/homepage.png');
    phantom.exit();
});
