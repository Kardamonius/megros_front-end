$(document).ready(function () {
	//catalog
	if (window.matchMedia("(max-width: 1024px)").matches) {
		var catalogMobile = document.querySelector(".header__catalog-btn");
		catalogMobile.setAttribute("data-modal", "#catalog");
	}
	else {
		$(function () {
			//on.button
			$('.header__catalog-btn').click(() => {
				if ($('.header__catalog-first').hasClass('active'))
					$('.header__catalog-first, .header__catalog-first .active').removeClass('active');
				else $('.header__catalog-first').toggleClass('active');
			})
			//close
			$(document).click(function (e) {
				var catalog = $('.header__catalog-btn, .catalog');
				if (!catalog.is(e.target)
					&& catalog.has(e.target).length === 0) {
					$(catalog).removeClass('active')
					$('.shadow').removeClass('active')
					if ($('.header__catalog-first').hasClass('active'))
						$('.header__catalog-second').removeClass('active')
					$('.header__catalog-first').removeClass('active');
				}
			});
			//levels
			let open_menu_second = false;
			$('.clickable>span').click(function (event) {
				event.preventDefault();
				if ($(this).next('ul').hasClass('active')) { //Если подменю уже открыто,
					$(this).next('ul').toggleClass('active'); //закрываем его
					return false; //Прерываем дальнейшее выполнение функции
				}
				let menu_second = $(this).closest('.header__catalog-btn, .header__catalog-first, .header__catalog-second').find('ul.active'); //Ищем все открытые подменю текущего уровня через общего родителя по классу .--active
				$(menu_second).each(function (e) { //Пробегаемся по получившемуся набору объектов циклом
					$(this).toggleClass('active'); //Удаляем у каждого объекта класс .--active, тем самым закрывая ВСЕ подменю текущего уровня
				});
				$(this).next('ul').toggleClass('active'); //И открываем подменю, которое нам необходимо
			});
			//shadow
			$('.header__catalog-btn').click(function (event) {
				$('.shadow').toggleClass('active')
			});
		});
	}

	//password control
	//$(function () {
	//	$('.input__password .password__control').click(function (event) {
	//		if ($('.password__control .password').attr('type') == 'password') {
	//			$(this).addClass('view');
	//			$('.password').attr('type', 'text');
	//		} else {
	//			$(this).removeClass('view');
	//			$('.password').attr('type', 'password');
	//		}
	//		return false;
	//	});
	//});

	$('body').on('click', '.password__control', function () {
		var $this = $(this)
		var $closestPass = $this.prevAll('.password')
		if ($closestPass.attr('type') == 'password') {
			$this.addClass('view');
			$closestPass.attr('type', 'text');
		} else {
			$this.removeClass('view');
			$closestPass.attr('type', 'password');
		}
		return false;
	});

	document.querySelectorAll('.sel-wrapper').forEach((e) => {
		let selTabs = e.querySelectorAll('.selects .sel');
		let selItem1 = e.querySelectorAll('.sel-content-1');
		let selItem2 = e.querySelectorAll('.sel-content-2');
		for (let i = 0; i < selTabs.length; i++) {
			selTabs[0].click();
			selTabs[i].onclick = () => {
				selTabs.forEach((e) => { e.classList.remove('active') });
				selItem1.forEach((e) => { e.classList.remove('active') });
				selItem2.forEach((e) => { e.classList.remove('active') });
				selTabs[i].classList.add('active');
				selItem1[i].classList.add('active');
				selItem2[i].classList.add('active');
			}
		}
	});

	//tabs-account
	document.querySelectorAll('.tabs-wrapper').forEach((e) => {
		let tabTabs = e.querySelectorAll('.tabs .tab');
		let tabItem = e.querySelectorAll('.tab-content .tab-item');
		for (let i = 0; i < tabTabs.length; i++) {
			tabTabs[0].click();
			tabTabs[i].onclick = () => {
				tabTabs.forEach((e) => { e.classList.remove('active') });
				tabItem.forEach((e) => { e.classList.remove('active') });
				tabTabs[i].classList.add('active');
				tabItem[i].classList.add('active');
			}
		}
	});

	//modal
	const myModal = new HystModal({
		linkAttributeName: 'data-modal',
		catchFocus: true,
		waitTransitions: true,
		closeOnEsc: false,
		fixedSelectors: ".my-fixed-elems",
		beforeOpen: function (modal) {
			console.log('Message before opening the modal');
			console.log(modal); //modal window object
		},
		afterClose: function (modal) {
			console.log('Message after modal has closed');
			console.log(modal); //modal window object
		},
	});

	//quantity
	$('body').on('click', '.number-minus, .number-plus', function () {
		var $row = $(this).closest('.number');
		var $input = $row.find('.number-text');
		var step = $row.data('step');
		var val = parseFloat($input.val());
		if ($(this).hasClass('number-minus')) {
			val -= step;
		} else {
			val += step;
		}
		$input.val(val);
		$input.change();
		return false;
	});
	$('body').on('change', '.number-text', function () {
		var $input = $(this);
		var $row = $input.closest('.number');
		var step = $row.data('step');
		var min = parseInt($row.data('min'));
		var max = parseInt($row.data('max'));
		var val = parseFloat($input.val());
		if (isNaN(val)) {
			val = step;
		} else if (min && val < min) {
			val = min;
		} else if (max && val > max) {
			val = max;
		}
		$input.val(val);
	});

	//favourite
	$(function () {
		$('.products__card-favourite').click(function (event) {
			$(this).toggleClass('selected');
		});
	});

	//player
	$(function () {
		$('.play-pause>button').click(function (event) {
			$(this).toggleClass('pause').toggleClass('play');
		});
		$('.mute-unmute>button').click(function (event) {
			$(this).toggleClass('mute').toggleClass('unmute');
		});
	});


	//select-language
	var el = {};
	$('.header__language-selected').on('click', function (ev) {
		$('.header__language-selected').css('opacity', '0');
		$('.header__language-list').toggle();
	});

	$('.header__language-list a').on('click', function (ev) {
		ev.preventDefault();
		var index = $(this).parent().index();
		$('.header__language-selected').text($(this).text()).css('opacity', '1');
		$('.header__language-list').find('li').eq(index).prependTo('.header__language-list');
		$('.header__language-list').toggle();
	});


	$('select').on('change', function (e) {
		$('.header__language-selected').text(this.value);
		$(this).animate({ width: $('.header__language-selected').width() + 'px' });
	});

	$(function () {
		$('.header__language-selected, .header__language-list a').click(function (event) {
			$('.header__language-arrow').toggleClass('active');
			$('.header__language-link').toggleClass('active');
		});
	});
	//select-sorting
	var el = {};
	$('.sorting__selected').on('click', function (ev) {
		$('.sorting__selected').css('opacity', '0');
		$('.sorting__list').toggle();
	});

	$('.sorting__list a').on('click', function (ev) {
		ev.preventDefault();
		var index = $(this).parent().index();
		$('.sorting__selected').text($(this).text()).css('opacity', '1');
		$('.sorting__list').find('li').eq(index).prependTo('.sorting__list');
		$('.sorting__list').toggle();
	});


	$('select').on('change', function (e) {
		$('.sorting__selected').text(this.value);
		$(this).animate({ width: $('.sorting__selected').width() + 'px' });
	});

	$(function () {
		$('.sorting__selected, .sorting__list a').click(function (event) {
			$('.sorting__arrow').toggleClass('active');
			$('.sorting__link').toggleClass('active');
		});
	});

	//availability
	//$('.product__availability').each(function () {
	//	var availability = $('.product__availability').text();
	//	if (availability == 'В наявності') {
	//		$(this).removeClass('not-available').addClass('available');
	//	}
	//	if (availability == 'Немає') {
	//		$(this).removeClass('available').addClass('not-available');
	//	}
	//});

	//filter-section-hide
	$(function () {
		$('.arrow-hide').click(function (event) {
			$(this).toggleClass('active').parent().next().slideToggle(300);
		});
	});

	//reset
	$('#reset-link').click(function () {
		$('#first.reset__overlay').fadeIn(300);
		$('body').addClass('lock')
	});

	$('#reset-first-step .close-button, #reset-first-step .reset__tab').click(function () {
		$('#first.reset__overlay').fadeOut(300);
		$('body').removeClass('lock');
	});

	$('.reset__form').submit(function (e) {
		input = document.querySelector('.reset__input');
		if (input.value === '') {
			$('.reset__input').addClass('invalid');
			return false;
		} else {
			e.preventDefault();
			$('.reset__input').removeClass('invalid');
			$('#first.reset__overlay').fadeOut(300);
			$('#second.reset__overlay').fadeIn(300);
			console.log('sent')
		}
	});

	$('#reset-second-step .close-button, #reset-second-step .reset__btn').click(function () {
		$('#second.reset__overlay').fadeOut(300);
		$('body').removeClass('lock');
	});
});




//range-slider
var slider = document.getElementById('slider');

if (slider) {
	noUiSlider.create(slider, {
		start: [5000, 45000],
		connect: true,
		step: 1,
		range: {
			'min': 25,
			'max': 50000
		}
	});

	const input0 = document.getElementById('by');
	const input1 = document.getElementById('for');
	const inputs = [input0, input1];

	slider.noUiSlider.on('update', function (values, handle) {
		inputs[handle].value = Math.round(values[handle]);
	});

	const setRangeSlider = (i, value) => {
		let array = [null, null];
		array[i] = value;

		slider.noUiSlider.set(array);
	};

	inputs.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			setRangeSlider(index, e.currentTarget.value);
		});
	});
}

if (window.matchMedia("(max-width: 1001px)").matches) {
	$(function () {
		$('.contact__btn').click(function (event) {
			$(this).toggleClass('active');
			$(this).removeClass('hover');
		});
	});
}
else { };
