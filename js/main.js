

$(document).ready(function () {

	$(window).on('scroll', function () {
		if ($(window).scrollTop()) {
			$('#header:not(.header-project-detail-not-scroll)').addClass('scroll');
		} else {
			$('#header:not(.header-project-detail-not-scroll)').removeClass('scroll')
		};
	});

	$(".icon-bar").click(function () {
		$("header#header").toggleClass("active");
		// $("body").toggleClass("overflow");
	});
	$(".sticky-nav-tab").click(function () {
		$(this).parent().find(".sticky-nav-tab").removeClass('active');
		$(this).addClass('active');
	});


	function setWidthText() {
		let showChar = 250;
		var ellipsestext = "...";
		var data = ['box-content-ykien p'];
		data.forEach(function (value) {

			$('.' + value).each(function () {
				var content = $(this).html();
				if (content.length > showChar) {
					var c = content.substr(0, showChar);
					var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp';
					$(this).html(html);
				}

			});
		});
	}
	setWidthText();

	$(".toggle-form-search").click(function () {
		$(this).toggleClass('active');
		$(this).siblings('.form').toggleClass('active');
	});
	$(document).mouseup(function (e) {
		var container = $(".search-main");
		if (!container.is(e.target) &&
			container.has(e.target).length === 0) {
			$('.search-main .toggle-form-search').removeClass('active');
			$('.search-main .form').removeClass('active');
		}
	});



	for (let i = 0; i < 3; i++) {
		$("#active_video_youtube_" + i).click(function () {
			for (let y = 0; y < 3; y++) {
				var symbol_ = $("#video_youtube_" + y)[0].src;
				if (symbol_.indexOf("?") > -1) {
					symbol_.substr(0, symbol_.search("autoplay") - 1);
					$("#video_youtube_" + y)[0].src = symbol_.substr(0, symbol_.search("autoplay") - 1);
				}
			}
			var symbol = $("#video_youtube_" + i)[0].src.indexOf("?") > -1 ? "&" : "?";
			$("#video_youtube_" + i)[0].src += symbol + "autoplay=1";
			console.log(symbol);
		})

	}
	function resize(){
	var win = $(window).width();
		if(win > 768){
			$(".item-project").parent('.col-md-6, .col-lg-4, .col-md-3, .col-xl-4, .col-xl-3').css({ 'padding-bottom': '20px' });
			$(".item-project").css({ 'margin-bottom': '0', 'height': '100%' });
		}else{
			$(".item-project").parent('.col-md-6, .col-lg-4, .col-md-3, .col-xl-4, .col-xl-3').css({ 'padding-bottom': '10px' });
			$(".item-project").css({ 'margin-bottom': '0', 'height': '100%' });
		}
	}
	resize();

	var win = $(window).width();
	if(win < 1024){
		$('.toggle-tab-mobile').click(function(){
			$(this).parent('.tab-title-detail').toggleClass('active');
		});
	}
	var win = $(window).width();
	function widthIframeFb(){
			let widthParent = $('.wrap-main-right').width();
			if($('.item-right').hasClass('wrap-iframe-facebook')){
				var symbol = $(".wrap-iframe-facebook iframe")[0].src;
				$(".wrap-iframe-facebook iframe")[0].src = symbol.replace('&width=380', '&width='+widthParent)
				console.log(widthParent);
				console.log($(".wrap-iframe-facebook iframe")[0].src);
			}
	}
	widthIframeFb();
	$(window).on('resize', function(){
        resize();
		widthIframeFb();
    });


	// menu footer 
	$(".icon-toggle-menu").click(function () {
		$(this).siblings(".wrap-menu").find(".item-menu.active-efect").slideToggle();
		$(this).siblings(".wrap-menu").toggleClass('active-mobile-border');
		$(this).children().attr('class', function (index, attr) {
			return attr == 'fal fa-angle-right' ? 'fal fa-angle-down' : 'fal fa-angle-right';
		});
	});

	$(".icon-toggleSubmenu").click(function () {
		$(this).children().attr('src', function (index, attr) {
			return attr == '/images/icon-plus-submenu.png' ? '/images/icon-minus-submenu.png' : '/images/icon-plus-submenu.png';
		});
		$(this).siblings('.wrapper_naviga').slideToggle();
	});


    window.onload=function(){
        function popupShow(){
            $(".popup-toppage").css({"opacity": "1", "visibility": "visible"});
            $(".popup-toppage").toggleClass("show-popup-toppage");
        }
        function popupHide(){
            $(".popup-toppage").css({"opacity": "0", "visibility": "hidden"});
            $(".popup-toppage").removeClass("show-popup-toppage");
        }
        setTimeout(popupShow, 1200);
        $(document).mouseup(function (e) {
            var container = $(".wrap-popup-toppage");
            if(!container.is(e.target) && 
            container.has(e.target).length === 0) {
                container.hide();
                popupHide();
            }
        });
        $("#close-popup-topage").click(function(){
            popupHide();
        });
    }


	// add attribute
	if($('#myScrollspy').hasClass('wrap-nav-control')){
		$('body').attr({"data-spy": "scroll", "data-target":"#myScrollspy", "data-offset":"1", "class":"body-project-detail"})
	}

	

});

$('#slide-main').owlCarousel({
	nav: true,
	autoplay: true,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1,
			loop: ($('#slide-main .item').length > 1) ? true : false,
		},
		540: {
			items: 1,
			loop: ($('#slide-main .item').length > 1) ? true : false,
		},
		768: {
			items: 1,
			loop: ($('#slide-main .item').length > 1) ? true : false,
		},
		1024: {
			items: 1,
			loop: ($('#slide-main .item').length > 1) ? true : false,
		}
	}
});
$('#slide-blog-right-main').owlCarousel({
	nav: true,
	autoplay: true,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1,
			margin: 10,
			loop: ($('#slide-blog-right-main .item').length > 1) ? true : false,
		},
		540: {
			items: 2,
			margin: 10,
			loop: ($('#slide-blog-right-main .item').length > 2) ? true : false,
		},
		768: {
			items: 3,
			margin: 10,
			loop: ($('#slide-blog-right-main .item').length > 3) ? true : false,
		},
		991: {
			items: 1,
			loop: ($('#slide-blog-right-main .item').length > 1) ? true : false,
		}
	}
});

$('#slide-project-main').owlCarousel({
	nav: true,
	autoplay: true,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1,
			margin: 5,
			loop: ($('#slide-project-main .item').length > 1) ? true : false,
		},
		540: {
			items: 2,
			margin: 5,
			loop: ($('#slide-project-main .item').length > 2) ? true : false,
		},
		768: {
			items: 3,
			margin: 10,
			loop: ($('#slide-project-main .item').length > 3) ? true : false,
		},
		1024: {
			items: 4,
			margin: 10,
			loop: ($('#slide-project-main .item').length > 4) ? true : false,
		}
	}
});
$('#slide-blog-index-main').owlCarousel({
	nav: true,
	autoplay: true,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1,
			margin: 5,
			loop: ($('#slide-blog-index-main .item').length > 1) ? true : false,
		},
		540: {
			items: 2,
			margin: 5,
			loop: ($('#slide-blog-index-main .item').length > 2) ? true : false,
		},
		768: {
			items: 3,
			margin: 10,
			loop: ($('#slide-blog-index-main .item').length > 3) ? true : false,
		},
		1024: {
			items: 4,
			margin: 10,
			loop: ($('#slide-blog-index-main .item').length > 4) ? true : false,
		}
	}
});

let arrClass = ['slide-customer-main',  
				'slide-project-index-main',
				'slide-project-index-main-2', 
				'slide-project-index-main-3', 
				'slide-ykien-kh-main',
				];
for(var i = 0; i < arrClass.length; i++){
$('#'+arrClass[i]).owlCarousel({
	nav: true,
	autoplay: true,
	margin: 10,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1,
			margin: 10,
			loop: ($('#'+arrClass[i]+ ' .item').length > 2) ? true : false,
		},
		540: {
			items: 2,
			margin: 10,
			loop: ($('#'+arrClass[i]+ ' .item').length > 2) ? true : false,
		},
		768: {
			items: 3,
			loop: ($('#'+arrClass[i]+ ' .item').length > 3) ? true : false,
		}
	}
});
};

$('.wrap-project .owl-carousel').owlCarousel({
	nav: true,
	autoplay: true,
	margin: 10,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 1,
			margin: 10,
			loop: ($('.wrap-project .owl-carousel .item').length > 2) ? true : false,
		},
		540: {
			items: 2,
			margin: 10,
			loop: ($('.wrap-project .owl-carousel .item').length > 2) ? true : false,
		},
		768: {
			items: 3,
			loop: ($('.wrap-project .owl-carousel .item').length > 3) ? true : false,
		}
	}
});

$('#partner .owl-carousel').owlCarousel({
	nav: true,
	autoplay: false,
	margin: 5,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 2,
			loop: ($('#partner .item').length > 2) ? true : false,
		},
		540: {
			items: 3,
			loop: ($('#partner .item').length > 3) ? true : false,
		},
		1024: {
			items: 5,
			loop: ($('#partner .item').length > 5) ? true : false,
		}
	}
});
$('#slide-leader-main').owlCarousel({
	nav: true,
	autoplay: true,
	margin: 10,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 2,
			margin: 10,
			loop: ($('#slide-leader-main .item').length > 2) ? true : false,
		},
		540: {
			items: 3,
			margin: 10,
			loop: ($('#slide-leader-main .item').length > 3) ? true : false,
		},
		768: {
			items: 4,
			loop: ($('#slide-leader-main .item').length > 4) ? true : false,
		},
		1080: {
			items: 5,
			loop: ($('#slide-leader-main .item').length > 5) ? true : false,
		},
		1200: {
			items: 6,
			loop: ($('#slide-leader-main .item').length > 6) ? true : false,
		}

	}
});
$('#slide-prize-main').owlCarousel({
	nav: true,
	autoplay: true,
	margin: 10,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 2,
			margin: 10,
			loop: ($('#slide-prize-main .item').length > 2) ? true : false,
		},
		540: {
			items: 3,
			margin: 10,
			loop: ($('#slide-prize-main .item').length > 3) ? true : false,
		},
		768: {
			items: 4,
			loop: ($('#slide-prize-main .item').length > 4) ? true : false,
		},
		1080: {
			items: 5,
			loop: ($('#slide-prize-main .item').length > 5) ? true : false,
		},
		1200: {
			items: 6,
			loop: ($('#slide-prize-main .item').length > 6) ? true : false,
		}

	}
});