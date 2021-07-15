/*import {
	getResource
} from '../services/requests';

const calc1 = (size, material, options, promocode, result) => {

	const sizeBlock = document.querySelector(size),
		eachSize = sizeBlock[0].querySelectorAll('option'),
		materialBlock = document.querySelector(material),
		eachMaterial = materialBlock[0].querySelectorAll('option'),
		optionsBlock = document.querySelector(options),
		eachOption = optionsBlock[0].querySelectorAll('option'),
		promocodeBlock = document.querySelector(promocode),
		resultBlock = document.querySelector(result);


	let sum = 0;


	const calcFunc = () => {
		sum = Math.round((sizeBlock) * (materialBlock) + (optionsBlock.value));

		if (sizeBlock == '' || materialBlock == '') {
			resultBlock.textContent = 'Пожалуйста выберите размер и материал картины';
		} else if (promocodeBlock.textContent === 'IWANTPOPART') {
			resultBlock.textContent = Math.round(sum * 0.7);
		} else {
			resultBlock.textContent = sum;
		}
	};


	function getNums(api) {
		getResource(api)
			.then()
			.catch()
	}

	function active() {
		eachSize.forEach(elem, i) {
			elem.
		}
	}

};*/

//export default calc1;