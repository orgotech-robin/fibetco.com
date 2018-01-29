var bonuses = [
	{
		name: "LeoVegas",
		logo: "",
		emblem: "test-logo.png",
		header: "emblem.png",
		sitelink: "https://www.leovegas.com",
		reflink: "https://www.leovegas.com",
		description_en: "LeoVegas offers a bonus of $1000 and 100 freespins.",
		description_sv: "LeoVegas erbjuder en bonus på upp till 10 000 kr och även 100 freespins.",
		bonus: {
			freespins: 200,
			bonus: 2000
		}
	},
	{

	}
]
var swiper = new Swiper('.swiper-container', {
	onSlideChangeEnd: function(){
		console.log("HEJ");
	},
	pagination: '.swiper-pagination',
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 2,
	coverflow: {
		rotate: 0,
		stretch: 54,
		depth: 36,
		modifier: 2,
		slideShadows : true
	},
	nextButton: '.swiper-button-next-custom',
    prevButton: '.swiper-button-prev-custom',
	loop: true,
	spaceBetween: 100,
	breakpoints: {
		// when window width is <= 320px
		1200: {
  			slidesPerView: 2.4,
  			spaceBetween: 10,
			coverflow: {
	            rotate: -8,
	            stretch: 20,
	            depth: 25,
	            modifier:2,
	        }
		},
		// when window width is <= 480px
		992: {
			slidesPerView: 1,
			slidesPerView: 2,
         	coverflow: {
            	rotate: -10,
            	stretch: 60,
            	depth: 25,
            	modifier:2,
        	}
		},
		775: {
			slidesPerView: 2.4,
  			spaceBetween: 10,
			coverflow: {
	            rotate: -8,
	            stretch: 20,
	            depth: 25,
	            modifier:2,
	        }
		},
		575: {
			slidesPerView: 1,
			slidesPerView: 1.3,
         	coverflow: {
            	rotate: -4,
            	stretch: 60,
            	depth: 25,
            	modifier:2,
        	}
		}
	}
});
