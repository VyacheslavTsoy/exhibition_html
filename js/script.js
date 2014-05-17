$(function(){
// IPad/IPhone
	var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
	ua = navigator.userAgent,

	gestureStart = function () {viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";},

	scaleFix = function () {
		if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
			viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
			document.addEventListener("gesturestart", gestureStart, false);
		}
	};
	
	scaleFix();
	// Menu Android
	if(window.orientation!=undefined){
    var regM = /ipod|ipad|iphone/gi,
     result = ua.match(regM)
    if(!result) {
     $('.sf-menu li').each(function(){
      if($(">ul", this)[0]){
       $(">a", this).toggle(
        function(){
         return false;
        },
        function(){
         window.location.href = $(this).attr("href");
        }
       );
      } 
     })
    }
   } 
});
var ua=navigator.userAgent.toLocaleLowerCase(),
 regV = /ipod|ipad|iphone/gi,
 result = ua.match(regV),
 userScale="";
if(!result){
 userScale=",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0'+userScale+'">')

var owl = $('.owl-carousel'); // save reference to variable
  function setContentHeight(){
    var globalHeight = $("#content").height();
    owl.find(".owl-item").height(globalHeight);
  }

  function responsiveHeight(){
    if($("body").height()<768){
      $("body").addClass("height_mid");
    }
    else{
     $("body").removeClass("height_mid"); 
    }
  }

  $(function() {
    $("body").append("<div id='preloader'></div>");
    owl.owlCarousel({
      items:1,
      loop:true,
      center:true,
      margin:false,
      dotData:true
    });

    $(".menu_link").on("click", function(){
      $(this).parents(".menu").find("li").removeClass("current");
      $(this).parent().addClass("current");
    })

    $(".thumb_link").on("click", function(){
      var openModal = $(this).data("modal");
      if(openModal){
        $(openModal).arcticmodal({
        beforeOpen: function(data, el) {
          if(openModal == "#tugs_gallery"){
            $('#carousel').flexslider({
              animation: "slide",
              controlNav: false,
              animationLoop: false,
              slideshow: false,
              itemWidth: 148,
              itemMargin: 3,
              asNavFor: '#slider'
            });

            $('#slider').flexslider({
              animation: "slide",
              controlNav: false,
              animationLoop: false,
              slideshow: false,
              sync: "#carousel"
            });
          }
        }
      });
      }
    })

    setContentHeight();
    responsiveHeight();

    $(".tugs_thumb").on("click", function(){
      var currentSlide = $(this).data("tug");
      $(this).parent().find(".active").removeClass("active");
      $(this).addClass("active");
      $("#tugs_slider").find(".tug_item").fadeOut();
      $("#tugs_slider").find(currentSlide).fadeIn();
    })

    $( document ).tooltip();

  });

  $(window).resize(function(){
    setContentHeight();
    responsiveHeight();
  })

  $(window).load(function(){
    $("#preloader").fadeOut();
  })