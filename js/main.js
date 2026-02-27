(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();

    // Carga imagen modal
    var imageModal = document.getElementById('imageModal');
imageModal.addEventListener('show.bs.modal', function (event) {
  // Botón que activó el modal
  var button = event.relatedTarget;
  // Extraer información de los atributos data-
  var imgSource = button.getAttribute('src');
  
  // Actualizar la imagen del modal
  var modalImg = imageModal.querySelector('#imagePreview');
  modalImg.src = imgSource;
});

// Ir arriba
$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		},300 );
	});

	$(window).scroll(function(){
		if ($(this).scrollTop() > 0){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		};
	});
	
});

// acordeon
const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", () => {
    //console.log(question);
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
        //console.log(item);
      }
    });

    question.classList.toggle("show-text");

    //console.log(question);
  });
});
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonial carousel

    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 2500,
        center: true,
        dots: true,
        loop: true,
        margin: 50,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    // Noticias carousel

    $(".notice-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 5000,
        center: true,
        dots: true,
        loop: true,
        margin: 50,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });



})(jQuery);

