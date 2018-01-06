$(document).ready(function() {

	//NAV-BUTTON
	$(".top__button__menu").click(function() {
  $(".nav > ul").slideToggle(700); //Свойство 700 просто для плавности прокрутки
	});
	$(window).resize(function() {
		if ($(window).width() > 992 ) {
			$(".nav > ul").removeAttr('style');
		}
	})
	
	// Options
	var options = {
		offset: 200
	}

	// Create a new instance of Headhesive.js and pass in some options
	var header = new Headhesive('.second__line', options);


	// SEARCH-POPUP
	$('.opacity').css({opacity: 0.7});
	
	$(".search__header").click(function(){
		$(".search_popup").show();
		$(".close_search").show();
		$(".opacity").show();
	});
	
	$(".close_search").click(function(){
		$(".search_popup").hide();
		$(".close_search").hide();
		$(".opacity").hide();
	});


	// UP-BUTTON
	$(window).scroll(function(){
		if ($(this).scrollTop() > 800) {
			$('.up__button').fadeIn();
		} else {
			$('.up__button').fadeOut();
		}
	});

	$('.up__button').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});








	//Мега-меню и мобайл меню
	// $(".sf-menu").superfish({
	// 	delay: 200,
	// 	speed: "fast",
	// 	cssArrows: false
	// })
	// .after("<div id='mobile-menu'>").clone().appendTo("#mobile-menu");
	// $("#mobile-menu").find("*").attr("style", "");
	// $("#mobile-menu").children("ul").removeClass("sf-menu")

	// .parent().mmenu({
	// 	extensions : [ 'theme-black', 'effect-menu-slide', 'pagedim-black' ],
	// 	navbar: {
	// 		title: "Меню"
	// 	},
	// 	offCanvas: {
	// 		position: 'right'
	// 	},
	// 	searchfield: {
	// 		add: 'true',
	// 		placeholder: "Поиск"
	// 	}
	// });

	// var header = new Headhesive('.second__line');

	// Options
	// var options = {
	// 	offset: 500
	// }

// Create a new instance of Headhesive.js and pass in some options
// var header = new Headhesive('.second__line', options);


	//Кнопка Button к мобайл меню
	// $(".toggle-mnu").click(function() {
	// 	$(this).addClass("on");
	// });

	// var api = $("#mobile-menu").data("mmenu");
	// api.bind("close:finish", function () {
	// 	$(".toggle-mnu").removeClass("on");
	// });
	

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 4
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});