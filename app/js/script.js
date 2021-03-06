(function() {
var sign,
	savedNumber = '',
	number = '',
	field,
	show,
	result,
	figures = document.querySelectorAll('.number'),
	signVal = document.querySelectorAll('.sign'),
	equally = document.querySelectorAll('.equally'),
	clear = document.querySelectorAll('.clean'),
	display = document.querySelector('.field'),
	numbers = document.querySelectorAll('.figures'),
	back = document.querySelectorAll('.backspace'),
	calculator = document.querySelector('.calculator'),
	topDiv = document.querySelector('.top');
topDiv.onmousedown = function (e) {

	document.onmousemove = function (e) {
		moveAt(e);		
	}
	function moveAt(e) {
		calculator.style.left = e.pageX - topDiv.offsetWidth / 2 + 'px';
		calculator.style.top = e.pageY - topDiv.offsetHeight / 2 + 'px';
	}
	calculator.onmouseup = function() {
		document.onmousemove = null;
		calculator.onmouseup = null;
	}
};

function addLight (element) {
	for (var i=0, len=element.length; i<len; i++){
		element[i].onmouseover = function(event) {
  			var target = event.target;
  			target.style.background = 'gray';
		};
		element[i].onmouseout = function(event) {
  			var target = event.target;
  			target.style.background = '';
		};
	};
};

function addEvent(element, func) {
	for (var i = 0, len = element.length; i < len; i++) {
			element[i].addEventListener('click', func);
		};
};

function readNumber (button) {
	resetField();
	number += this.dataset.value;
	display.innerHTML = number;
};

function backspace (button) {
		number = number.slice(0, -1);
		display.innerHTML = number;
};

function readSign (button) {
	current=this.dataset.value;
	if(sign !== undefined) {
		calculate();
		sign = current;
		display.value = savedNumber;
		number = '';

	} else if (savedNumber == '') {
		sign = current;
		savedNumber = +number;
		display.innerHTML = savedNumber;
		number = ''

	} else {		
		sign = current;
		number = ''
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
	calculate();
	sign = undefined;
};

function clean () {
	sign = undefined;
	savedNumber = '';
	number = '';
	display.innerHTML = '0'
};

function resetField () { 
	if (typeof sign !== 'undefined' && number === undefined) {
		display.innerHTML = this.value;
		}
};

addEvent(figures, readNumber);
addEvent(signVal, readSign);
addEvent(equally, result);
addEvent(clear, clean);
addLight(numbers);
addEvent(back, backspace);
}());