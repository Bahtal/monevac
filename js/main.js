document.addEventListener("DOMContentLoaded", function() {
	const form = document.getElementById('section-form');
	const username = document.getElementById('section-username');
	const phone = document.getElementById('section-phone');
	const message = document.getElementById('section-message');
	const label = document.querySelectorAll('.section-form__label')

	form.addEventListener('submit', function(e) {
		e.preventDefault();
		let isValid = true;

		if (username.value.trim() === '') {
			username.classList.add('error');
			label[0].style.opacity = "1";
			isValid = false;
		} else {
			username.classList.remove('error');
			label[0].style.opacity = "0";
		}

		if (phone.value.includes('_')) {
			phone.classList.add('error');
			label[1].style.opacity = "1";
			isValid = false;
		} else {
			phone.classList.remove('error');
			label[1].style.opacity = "0";
		}

		if (message.value.trim() === '') {
			message.classList.add('error');
			label[2].style.opacity = "1";
			isValid = false;
		} else {
			message.classList.remove('error');
			label[2].style.opacity = "0";
		}

		if (isValid) {
			alert("Форма успешно отправлена");
		}
	});

	IMask(phone, {
		mask: '+{7}(000)000-00-00',
		lazy: false,
		placeholderChar: '_' 
	});
});


