// Made with <3 in Germany

var feed = new Instafeed({
  get: 'user',
  userId: '2304898135',
  accessToken: '2304898135.df9a512.1434c9b34c7c475993df3cf5a31ca2b3',
  resolution: "standard_resolution",
  template: '<a href="{{link}}"><img src="{{image}}" alt=""></a>',
  after: function() {
    document.querySelector("main").removeAttribute("class");
    document.querySelector("footer").removeAttribute("class");
  }
})

if ((!(/MSIE 9/i.test(navigator.userAgent))) || (!(/MSIE 10/i.test(navigator.userAgent))) || (!(/rv:11.0/i.test(navigator.userAgent))) || (!(/Edge\/\d./i.test(navigator.userAgent)))) {
  document.getElementsByClassName("instafeed-loader-disabled")[0].removeAttribute("class");
}

feed.run();
