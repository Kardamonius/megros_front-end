//swiper
const swiper = new Swiper('.product__photo-slider', {
	direction: 'vertical',
	slidesPerView: 4,
	spaceBetween: 10,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	watchOverflow: true,
	slidesPerGroup: 1,
	breakpoints: {
		1701: {
			slidesPerView: 4,
		},
		1700: {
			slidesPerView: 3,
		},
	}
});
new Swiper('.product__photo-primary', {
	thumbs: {
		swiper: swiper,
		multipleActiveThumbs: false,
	},
	breakpoints: {
		1000: {
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
		},
		767: {
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
		},
		480: {
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
		},
		360: {
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
		},
	},
});
new Swiper('.product__slider-row', {
	slidesPerView: 5,
	slidesPerGroup: 1,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	breakpoints: {
		1701: {
			slidesPerView: 5,
		},
		1700: {
			slidesPerView: 4,
		},
		1000: {
			slidesPerView: 3,
			allowTouchMove: false,
		},
		767: {
			slidesPerView: 3,
			allowTouchMove: false,
		},
		480: {
			slidesPerView: 1.3,
		},
		360: {
			slidesPerView: 1.2,
			allowTouchMove: false,
		}
	}
});
new Swiper('.banner__inner', {
	slidesPerView: 1.71,
	//loop: true,
	spaceBetween: 10,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
	breakpoints: {
		1701: {
			slidesPerView: 1.71,
		},
		1700: {
			slidesPerView: 1.71,
		},
		1000: {
			slidesPerView: 1,
		},
		767: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 1,
		},
		360: {
			slidesPerView: 1,
		}
	}
})