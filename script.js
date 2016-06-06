var sign,
	savedNumber = 0,
	number = 0,
	field,
	show,
	figures=document.querySelectorAll('.number'),
	signVal=document.querySelectorAll('.sign'),
	equally=document.querySelectorAll('.long2'),
	clear=document.querySelectorAll('.clean');
function addEvent(element, func) {
	for (var i = 0, len = element.length; i < len; i++) {
			element[i].addEventListener('click', func);
		};
};
function readNumber (button) {
	e = event.clientX;
	f = event.clientY;
	elem=document.elementFromPoint(e, f);
	if (sign !== undefined) {
		resetField();
		number += elem.value;
	} else {
		savedNumber +=elem.value;
	}
	field = document.calc.disp.value;
	if (field > 0) {
		show = field.toString() + elem.value;
		document.calc.disp.value = show;
	} else  {
	document.calc.disp.value = elem.value;
	}
};
function readSign (button) {
	e = event.clientX;
	f = event.clientY;
	elem=document.elementFromPoint(e, f);
	if(sign !== undefined) {
		calculate ();
		sign = elem.value;
		document.calc.disp.value = savedNumber;
		number = 0;
	} else {
		sign = elem.value;
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
	document.calc.disp.value = savedNumber;
};
function result () {
	calculate ();
	sign = undefined;
	number = 0;
};
function clean () {
	sign = undefined;
	savedNumber = 0;
	number = 0;
	document.calc.disp.value = 0
};
function resetField () { 
	if (typeof sign !== 'undefined' && number == 0) {
		document.calc.disp.value = this.value;
		}
};
addEvent(figures, readNumber);
addEvent(signVal, readSign);
addEvent(equally, result);
addEvent(clear, clean);