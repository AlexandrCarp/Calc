var sign,
    savedNumber = 0,
    number = 0,
    field,
    show;
function readNumber (button) {
	if (sign !== undefined) {
		resetField ();
		number += button.value;
	    
	} else {
		savedNumber += button.value;
	}

	field = document.calc.disp.value;
	if (field > 0) {
		show = field.toString() + button.value;
		document.calc.disp.value = show;

	} else  {
	document.calc.disp.value = button.value;
    }
};
function readSign (button) {
	if(sign !== undefined) {
		calculate ();
		sign = button.value;
		document.calc.disp.value = savedNumber;
		number = 0;
	} else {
		sign = button.value;
		document.calc.disp.value = "0";
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
		document.calc.disp.value = 0;
		}
};