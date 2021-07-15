const calc = (size, material, options, promocode, result, formState) => {
	const sizeBlock = document.querySelector(size),
		materialBlock = document.querySelector(material),
		optionsBlock = document.querySelector(options),
		promocodeBlock = document.querySelector(promocode),
		resultBlock = document.querySelector(result);

	let sum = 0;



	const calcFunc = () => {
		sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

		if (sizeBlock.value == '' || materialBlock.value == '') {
			resultBlock.textContent = 'Пожалуйста выберите размер и материал картины';
		} else if (promocodeBlock.value === 'IWANTPOPART') {
			resultBlock.textContent = Math.round(sum * 0.7);
		} else {
			resultBlock.textContent = sum;
		}
	};

	function bindActionToElems(event, elem, prop) {
		elem.addEventListener(event, () => {
			calcFunc();
			formState[prop] = elem.value;

			console.log(formState);
		});
	}

	bindActionToElems('change', sizeBlock, 'size');
	bindActionToElems('change', materialBlock, 'material');
	bindActionToElems('change', optionsBlock, 'option');
	bindActionToElems('input', promocodeBlock, 'promocod');

	/*function clearCalc() {
		sizeBlock.value = '';
		materialBlock.value = '';
		optionsBlock.value = '';
		resultBlock.value = '';
	}


	clearCalc();*/

};


export default calc;