$(document).ready(function() {
	resizeLayout();
	$(window).on('resize', function(){
		resizeLayout();
	});

	var filter = "win16|win32|win64|mac";

	if(navigator.platform){
		if(0 > filter.indexOf(navigator.platform.toLowerCase())){
			$('.background_video1').css('display', 'none');
		};
	};


	$(".title_menuArea div").mouseover(function(){
		var menuNo = $(this).attr("role");
		if(menuNo == 02) {
			$(this).children("img").attr('src', 'img/index_icon_2_hover.png');
			$(this).children("h3").css('color', 'rgba(255,255,255,.90)');
		}
		else if(menuNo == 03) {
			$(this).children("img").attr('src', 'img/index_icon_1_hover.png');
			$(this).children("h3").css('color', 'rgba(255,255,255,.90)');
		}
		else if(menuNo == 04) {
			$(this).children("img").attr('src', 'img/index_icon_3_hover.png');
			$(this).children("h3").css('color', 'rgba(255,255,255,.90)');
		};
    });

    $(".title_menuArea div").mouseout(function(){
    	var menuNo = $(this).attr("role");
    	if(menuNo == 02) {
    		$(this).children("img").attr('src', 'img/index_icon_2.png');
    		$(this).children("h3").css('color', 'rgba(255,255,255,.60)');
    	}
		else if(menuNo == 03) {
			$(this).children("img").attr('src', 'img/index_icon_1.png');
			$(this).children("h3").css('color', 'rgba(255,255,255,.60)');
		}
		else if(menuNo == 04) {
			$(this).children("img").attr('src', 'img/index_icon_3.png');
			$(this).children("h3").css('color', 'rgba(255,255,255,.60)');
		};
    });

    $(".portfolio_area div").mouseover(function(){
		$(this).children(".portfolio_opacity").css('visibility', 'visible');
    });

    $(".portfolio_area div").mouseout(function(){
    	$(this).children(".portfolio_opacity").css('visibility', 'hidden');
    });

    $(".header_button").on('click',function(){
    	 if($(this).is(".actived") == true){
    	 	$(this).removeClass("actived");
    	 	$(".header_menuContainer").animate({left: "-700px"},100);
    	 	$(".menu_activedWrapper").hide();
    	 }else{
    	 	$(this).addClass("actived");
    	 	$(".header_menuContainer").animate({left: "0px"},100);
    	 	$(".menu_activedWrapper").show().on('click',function(){
		    	$(".header_button").removeClass("actived");
			 	$(".header_menuContainer").animate({left: "-700px"},100);
			 	$(".menu_activedWrapper").hide();
		    });
    	 };
    });

    $(".header_menuContainer span").on('click',function(){
    	$(".header_button").removeClass("actived");
	 	$(".header_menuContainer").animate({left: "-700px"},100);
	 	$(".menu_activedWrapper").hide();
    });

    $(".portfolio_area div").on('click',function(){
    	var portfolioNo = $(this).attr("role");
    	if(portfolioNo == 01) {
    		location.href='./views/Portfolio1_index.html';
    	}
		else if(portfolioNo == 02) {
			location.href='https://www.hyundai.com/kr/ko/e';
		}
		else if(portfolioNo == 03) {
			location.href='./views/Portfolio2_index.html';
		}
		else if(portfolioNo == 04) {
			location.href='./views/Portfolio4_index.html';
		}
		else if(portfolioNo == 05) {
			location.href='./views/Portfolio5_index.html';
		}
		else if(portfolioNo == 06) {
			location.href='http://hidr.kr/main.html';
		}
		else if(portfolioNo == 07) {
			location.href='http://xn--3j1bw30bw7gsje.com/';
		}
		else if(portfolioNo == 08) {
			location.href='http://yonseirenew.co.kr/';
		}
		else if(portfolioNo == 09) {
			location.href='http://hansongyeeobgyn.net/';
		}
    });

	$(".menu_button").on('click',function(){
		var menuNo = $(this).attr("role");
		var boxPosition = Math.round( $(".portfolio_section[role=" + menuNo + "]").offset().top);
		$('body, html').animate({ scrollTop: boxPosition }, 500);
	});

	$(window).scroll(function() {
		if($(window).scrollTop() >= $("article:nth-of-type(1)").offset().top - 1 ){
			$('header').fadeIn(1000);
			$('video').hide();
		} else {
			$('header').fadeOut(1000);
			$('video').show();
		};
	});
});

function resizeLayout() {
	//$('video').width($(window).width());
	if($(window).height() <= 600){
		$('.title_area').css('top', '10%');
		$('section:nth-of-type(1)').height(600);
		$('section:nth-of-type(3)').height(600);
		$('section:nth-of-type(2)').height($('.portfolio_area').height() + 300);
	}else{
		$('.title_area').css('top', '20%');
		$('section:nth-of-type(1)').height($(window).height());
		$('section:nth-of-type(3)').height($(window).height());
		$('section:nth-of-type(2)').height($('.portfolio_area').height() + 300);
	};

	if($(window).width() <= 496){
		$('article').height($('.about_area').height() + 100);
		$('.about_area').css('top', '50px');
	}else{
		$('article').height(1200);
		$('.about_area').css('top', '10%');
	}
};