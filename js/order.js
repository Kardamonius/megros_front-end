$(document).ready(function () {
	//tabs
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

	//steps
	$('.next-button').on('click', function () {
		if ($('#step-3').hasClass('active')) {
			$('.order__footer-btn').addClass('enable');
			$('.order__footer .checkbox').addClass('enable');
		};
	});
	$('.prev-button').on('click', function () {
		$(this).parent().removeClass('active');
		$(this).parent().prev().addClass('active');
		$('.order__footer-btn').removeClass('enable');
		$('.order__footer .checkbox').removeClass('enable');
	});

	//radio-order
	const $radio = $('#step-2 .radio').on('change', function () {
		$radio.next().removeClass('active');
		$(this).next('input').addClass('active');
	});
	$(".checkbox__input").on("click", function () {
		if ($(this).is(":checked")) {
			$(this).parent().next().addClass('active');
		}
		else {
			$(this).parent().next().removeClass('active');
		};
	});
});

//validate
let form = document.querySelector('.js-form'),
	inputName = document.querySelector('.order__form-item.active .js-input-name'),
	inputPhone = document.querySelector('.order__form-item.active .js-input-phone'),
	inputEmail = document.querySelector('.order__form-item.active .js-input-email'),
	inputPassword = document.querySelector('.order__form-item.active .js-input-password'),
	inputEmailPhone = document.querySelector('.order__form-item.active .js-input-email-phone'),
	inputCity = document.querySelector('.order__form-step.active .js-input-city.active'),
	inputDelivery = document.querySelectorAll('.js-input-delivery.active'),
	nextButton1 = document.querySelector('#step-1 .next-button'),
	nextButton2 = document.querySelector('#step-2 .next-button');

//function validateEmail(email) {
//	let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//	return re.test(String(email).toLowerCase());
//}

//function validateName(name) {
//	let re = /^(([a-zA-Z' -]{1,80})|([а-яА-ЯЁёІіЇїҐґЄє' -]{1,80}))$/u;
//	return re.test(String(name));
//}

//function validatePass(password) {
//	let re = /([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+)/;
//	return re.test(String(password));
//}

nextButton1.addEventListener('click', function () {
	//let emailVal = inputEmail.value,
	//	nameVal = inputName.value,
	//	passVal = inputPassword.value;
	formInputs = document.querySelectorAll('.order__form-item.active .order__form-input'),
		emptyInputs = Array.from(formInputs).filter(input => input.value === '');

	formInputs.forEach(function (input) {
		if (input.value === '') {
			input.classList.add('invalid');
		} else {
			input.classList.remove('invalid');
		};

		if (emptyInputs.length !== 0) {
			return false;
		} else {
			//inputPassword.classList.remove('invalid');
			$(nextButton1).parent().removeClass('active');
			$(nextButton1).parent().next().addClass('active');
		}

		//if (!validateName(nameVal)) {
		//	inputName.classList.add('invalid');
		//	return false;
		//} else {
		//	inputName.classList.remove('invalid');
		//};

		//if (!validateEmail(emailVal)) {
		//	inputEmail.classList.add('invalid');
		//	return false;
		//} else {
		//	inputEmail.classList.remove('invalid');
		//};

		//if (!validatePass(passVal)) {
		//	inputPassword.classList.add('invalid');
		//}
	});
});

nextButton2.addEventListener('click', function () {
	formInputs = document.querySelectorAll('.order__form-step.active .order__form-input.active'),
		emptyInputs = Array.from(formInputs).filter(input => input.value === '');

	formInputs.forEach(function (input) {

		if (input.value === '') {
			input.classList.add('invalid');
		} else {
			input.classList.remove('invalid');
		};

		if (emptyInputs.length !== 0) {
			return false;
		};

		let inputRadio = document.querySelector('input[name="delivery"]:checked'),
			//radio = document.querySelector('.order__form-step.active .radio__fake'),
			radios = document.querySelectorAll('.order__form-step.active .radio__fake');
		if (!inputRadio) {
			radios.forEach(radio => radio.classList.add('invalid'));
			return false;
		} else {
			radios.forEach(radio => {
				radio.addEventListener('click', function () {
					console.log('click');

				});
			});
			$(nextButton2).parent().removeClass('active');
			$(nextButton2).parent().next().addClass('active');
			radios.forEach(radio => radio.classList.remove('invalid'));
		};
	});
});

form.onsubmit = function (event) {

	let inputRadio = document.querySelector('input[name="payment"]:checked'),
		radios = document.querySelectorAll('.order__form-step.active .radio__fake');
	if (!inputRadio) {
		radios.forEach(radio => radio.classList.add('invalid'));
		event.preventDefault()
		return false;
	} else {
		radios.forEach(radio => radio.classList.remove('invalid'));
	}
}

