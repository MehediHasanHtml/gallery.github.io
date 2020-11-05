jQuery(document).ready(function(){


  var feed = new Instafeed({
    get: 'user',
    userId: 2287101977,
    accessToken: '2287101977.bd818f3.834eb979e432444eb7637c8498bcc48f',
    target: 'Instafeed',
    resolution: 'low_resolution',
    limit: 6,
    template: '<div class="instt"><a href="{{link}}" target="_new"><img src="{{image}}" /></a></div>',
  });
  feed.run();


$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});

// loader
setTimeout(function(){ 

$('.loader').fadeOut(); }, 1000);




// Smoothscroll ///    
$('.navbar-nav li a').on('click', function(event) {
    var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 65
    }, 1000);
      event.preventDefault();
});


// owl-carousel
$('.main-slider .owl-carousel').owlCarousel({
  'items': 1,
  'autoplay': true,
  'loop': true,
  'dots': true,
  'nav': true,
  'pagination': true,
  'navText': ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']

}); 
  



var wow = new WOW(
  {
    boxClass:     'wow',      
    animateClass: 'animated',
    offset:       0,          
    mobile:       true,       
    live:         true,       
    callback:     function(box) {
     
    },
    scrollContainer: null,  
    resetAnimation: true,  
  }
);
wow.init();


// scroll-Top

$(window).scroll(function(){
  if($(this).scrollTop() > 500){
    $('.scrolltotop').fadeIn();
  }
  else{
    $('.scrolltotop').fadeOut();
  }
   
   
});
   
$('.scrolltotop').click(function(){
  $('html,body').animate({scrollTop:0}, 1000);
});




});

