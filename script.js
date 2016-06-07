var sign,
	savedNumber = '',
	number = '',
	field,
	show,
	figures=document.querySelectorAll('.number'),
	signVal=document.querySelectorAll('.sign'),
	equally=document.querySelectorAll('.long2'),
	clear=document.querySelectorAll('.clean'),
	display=document.querySelector('.field');
function addEvent(element, func) {
	for (var i = 0, len = element.length; i < len; i++) {
			element[i].addEventListener('click', func);
		};
};
function readNumber (button) {
	current=this.dataset.value;
	resetField();
	if (sign !== undefined) {
		number += current;
	} else {
		savedNumber +=current;
	}
	field = display.innerHTML;
	if (field > 0) {
		show = field.toString() + current;
		display.innerHTML = show;
	} else  {
	display.innerHTML = current;
	}
};
function readSign (button) {
	current=this.dataset.value;
	if(sign !== undefined) {
		calculate ();
		sign = current;
		display.value = savedNumber;
		number = '';
	} else {
		sign = current;
	}
};
function calculate () {
	if (~sign.indexOf ("+")) {
		savedNumber = (+savedNumber + Number(number));
	} else if (~sign.indexOf ("-")) {
		savedNumber = (+savedNumber - Number(number));
	} else if (~sign.indexOf ("*")) {
		savedNumber = (+savedNumber * Number(number));
	} else {
		savedNumber = (+savedNumber / Number(number));
	}
	display.innerHTML = savedNumber;
};
function result () {
	calculate ();
	sign = undefined;
	number = '';
};
function clean () {
	sign = undefined;
	savedNumber = '';
	number = '';
	display.innerHTML = '0'
};
function resetField () { 
	if (typeof sign !== 'undefined' && number == '') {
		display.innerHTML = this.value;
		}
};
addEvent(figures, readNumber);
addEvent(signVal, readSign);
addEvent(equally, result);
addEvent(clear, clean);