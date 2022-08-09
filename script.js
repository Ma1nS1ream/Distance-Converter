(function () {
	"use strict";
    let convertype = "miles";
	const heading = document.querySelector('h1');
	const intro = document.querySelector('p');
	const answer = document.getElementById('answer');
	const form = document.getElementById('convert');
	document.addEventListener('keydown', function(event) {
		let key = event.code;
		if (key === 'KeyK') {
			convertype = 'kilometers';
		    heading.innerHTML = 'Kilometers to Miles Converter';
			intro.innerHTML = 'Type in a number of kilometers and click the button to convert the distance to miles.';
			let h2 = document.getElementsByTagName('h2')[0];
			h2.className = "invisible";
		}
		else if (key === 'KeyM') {
			convertype = 'miles';
			heading.innerHTML = 'Miles to Kilometers Converter';
			intro.innerHTML = 'Type in a number of miles and click the button to convert the distance to kilometers.';
            let h2 = document.getElementsByTagName('h2')[0];
			h2.className = "invisible";				
		}
	});
	form.addEventListener('submit', function (event) {
		event.preventDefault();
		let distance = parseFloat(document.getElementById('distance').value);
		if (distance) {
			if (convertype == 'miles') {
				let converted = (distance * 1.609344).toFixed(3);
				let h2 = document.getElementsByTagName('h2')[0];
                h2.innerHTML = distance + ' miles converts to ' + converted + ' kilometres';
			    h2.className = "";
			}
			else {
				let converted = (distance * 0.621371192).toFixed(3);
				let h2 = document.getElementsByTagName('h2')[0];
                h2.innerHTML = distance + ' kilometers converts to ' + converted + ' miles';
			    h2.className = "";
			}
		}
		else {
			answer.innerHTML = '<h2>Please provide a number!</h2>'
		}
	});
})();