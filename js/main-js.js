// JavaScript Document
function openNav() {
    document.getElementById("PosMobile").style.display = "block";
}

function closeNav() {
    document.getElementById("PosMobile").style.display = "none";
}

$("#user_mob").click(function(){
    $(".pos_usermob").toggle();
});

$("#t_offusermenu").click(function(){
    $(".pos_usermob").hide();
});


$("#t_offmenu").click(function(){
    $(".pos_usermob").hide();
	 $("#PosMobile").hide();
});

 var swiper1 = new Swiper('.swiper1', {
      spaceBetween: 0,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      //pagination: {
//        el: '.swiper-pagination',
//        clickable: true,
//      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

  var swiper2 = new Swiper('.swiper2', {
	  slidesPerView: 'auto',
      spaceBetween: 0,
	  loop: true,
	   autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
       navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    var swiper3 = new Swiper('.swiper3', {
      slidesPerView: 'auto',
	  spaceBetween: 0,
	  loop: true,
	   autoplay: {
        delay: 2800,
        disableOnInteraction: false,
      },
       navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });	


	
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#breaking > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#breaking');
}, 3000);	