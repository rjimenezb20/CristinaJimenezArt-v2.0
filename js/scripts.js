

$(window).on('load', function(){

	$('#overlay img').fadeOut(600, function(){

		$('#overlay').fadeOut(200);
	});
});

$(window).on('scroll', function(){

	var scroll = $(window).scrollTop();

	//About effect
	var aboutDepth = $('.about').offset().top - $(window).innerHeight() * .2;
	if (scroll >= aboutDepth) {
		$('.about article').css('width', '100%');
		$('.about article span p').css('opacity', '1');
		$('.hobbies').css('opacity', '1');
	}

});

$(document).ready(function(){

	//Background gallery images
	$('.gallery div').each(function(i) {
		var img = $(this).data('image').split(",");
		
		$(this).css('background', 'rgb(35, 34, 34) url(img/gallery/' + img[0] + ') no-repeat 50% 50% / cover');

		//Multiple image icon controll
		if (img.length > 2) {

			$('.gallery div:nth-of-type(' + (i + 1) + ')').append("<span class="+"multipleImg"+"></span>");
		}
	});

	//GalleryModalWindow
	$('.gallery div').each(function() { 

		$(this).on('click', function() {

			var img = $(this).data('image').split(",");
			var thumb = $(this).data('thumbnail').split(",");
			
			for (var i = 0; i < img.length - 1; i++ ) {

				$('.modalContainer').append("<div class=" + "modalSubContainer" + "><div class=" + "modalImg" + i + "></div><p>" + thumb[i] + "</p></div>");
				$('.modalImg' + i).css('background', 'url(img/gallery/' + img[i+1] + ') no-repeat 50% 100% / contain');
			}
			
			$('.modalContainer').addClass('flex');
			$('body').css('overflow', 'hidden');
		});
	});

	$('.modalImg img, .modalContainer').on('click', function() {
		$('.modalContainer').removeClass('flex');
		$('div[class*="modalSub"]').remove();
		$('body').css('overflow', 'initial');
	});

	//OwlCarousel
	$(".owl-carousel").owlCarousel({
		items: 1,
		smartSpeed: 600,
		fluidSpeed: true,
		dots: false
	});

	//Select year
	$('.years ul li').each(function() {	
		$(this).on('click', function() {
			var number = $(this).data('number');
			$('.selected').removeClass('selected');
			$(this).addClass('selected');
			$('.visible').removeClass('visible');
			$('.yearContent' + number).addClass('visible');
			$(".owl-carousel").trigger('to.owl.carousel', number-1);
		});
	});
});

//ScrollTo
$('.moveTo').on('click', function(){

	var level = $(this).data('level');

	$('html').animate({
		scrollTop: $(level).offset().top
	}, 1000);

});

//Form
$("#formulary").on("submit", function(event) {

      event.preventDefault();

      $.post({
            
            url:'manager.php',

            data: $("#formulary").serialize(),

            success: function() {
            		
                  $('input, textarea').val("SEND");
                  msg("Mensaje enviado");
            }
      });
});


function msg(texto) {

     $('.message').css('transform', 'translateX(0)');
     $('.message p').text(texto);
     $().

	setTimeout( function(){
	    $('.message').css('transform', 'translateX(100%)');
	}, 3000);
}