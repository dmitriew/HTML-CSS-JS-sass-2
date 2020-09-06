//@ts-check
"use strick"

// Modal
$(function(){
	$('.show-order-form').on('click', function() {
		$('.form-layout').css('display', 'flex');
	});
	
	$('.close-button').on('click', function() {
		$('.form-layout').css('display', 'none');
	});

	$('.order-form button').on('click', function(){
		let formData = $('.order-form').serializeArray();
		let request = {};
		for(i in formData) {
			request[formData[i].name] = formData[i].value;
		}

		$.post('/api/api.php', request, function(response){
			if(response == "1") {
				$('.form-layout').css('display', 'none');
			}
		});

		return false;
	});
});

// scrollTop
$(document).ready(function(){
	$('.header').height($(window).height());
	$(".top__nav a").click(function(){
		$("body,html").animate({
			scrollTop:$("#" + $(this).data('value')).offset().top
		},1000)
	})
 })

 // scrollTop for footer
 $(document).ready(function(){
	$('.header').height($(window).height());
 
	$(".footer__nav a").click(function(){
		$("body,html").animate({
			scrollTop:$("#" + $(this).data('value')).offset().top
		},1000)
	})
 })

