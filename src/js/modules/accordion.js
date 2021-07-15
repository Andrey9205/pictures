const accordion = (triggersSelector) => {
	const btns = document.querySelectorAll(triggersSelector);

	btns.forEach(btn => {
		btn.addEventListener('click', function () {
			if (!this.classList.contains('active-style')) {
				btns.forEach(btn => {
					btn.classList.remove('active-style');
					btn.nextElementSibling.classList.remove('active-content');
					btn.nextElementSibling.style.maxHeight = "0px";

				});
				this.classList.add('active-style');
				this.nextElementSibling.classList.add('active-content');
			}
			if (this.classList.contains('active-style')) {
				this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
			}
		});

	});

	//blocks = document.querySelectorAll(itemSelector); //для работы на css стилях

	/*blocks.forEach(block => {
		block.classList.add('animated', 'fadeInDown');
	});

	btns.forEach(btn => {
		btn.addEventListener('click', function () {
			if (!this.classList.contains('active')) {
				btns.forEach(btn => {
					btn.classList.remove('active', 'active-style');
				});
				this.classList.add('active', 'active-style');
			}
		});
	});*/

};

export default accordion;