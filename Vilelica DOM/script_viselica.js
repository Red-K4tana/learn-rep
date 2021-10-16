
		// ----- CANVAS -----
		let canv = document.getElementById('canvas');
		let ctx = canv.getContext('2d');
		let grad = (Math.PI * 2) / 360;
		canv.width = 600;
		canv.height = 300;
		ctx.lineWidth = 3;
		//========== ФУНКЦИИ ==========
		function drawError6 () {
			// ---голова---
			ctx.strokeStyle = 'black';
			ctx.fillStyle = 'black';
			ctx.beginPath();
			ctx.arc(314, 115, 15, 0, grad * 360, false);
			ctx.fill();
			ctx.strokeStyle = 'pink';
			ctx.fillStyle = 'pink';
			ctx.lineWidth = 2;
			ctx.beginPath();
			ctx.moveTo(306, 106);
			ctx.lineTo(312, 112);
			ctx.moveTo(312, 106);
			ctx.lineTo(306, 112);
			ctx.moveTo(315, 106);
			ctx.lineTo(321, 112);
			ctx.moveTo(321, 106);
			ctx.lineTo(315, 112);
			ctx.stroke();
			ctx.beginPath();
			ctx.arc(314, 108, 15, 7, grad * 135, false);
			ctx.stroke();
			ctx.beginPath();
			ctx.arc(316, 120, 6, 0, grad * 135, false);
			ctx.fill();
			ctx.strokeStyle = 'black';
			ctx.lineWidth = 4;
			ctx.beginPath();
			ctx.moveTo(314, 130);
			ctx.lineTo(314, 140);
			ctx.stroke();
		};
		function drawError5 () {
			//--- туловище ---
			ctx.fillStyle = 'black';
			ctx.beginPath();
			ctx.moveTo(298, 140);
			ctx.lineTo(330, 140);
			ctx.lineTo(314, 180);
			ctx.lineTo(298, 140);
			ctx.fill();
			ctx.fillStyle = 'Pink';
			ctx.beginPath();
			ctx.arc(314, 150, 3, 0, grad * 360, false);
			ctx.arc(314, 160, 3, 0, grad * 360, false);
			ctx.fill();
		};
		function drawError4 () {
			// --- 1 рука ---
			ctx.strokeStyle = 'black';
			ctx.lineWidth = 4;
			ctx.beginPath();
			ctx.moveTo(328, 142);
			ctx.lineTo(350, 180);
			ctx.stroke();
		};
		function drawError3 () {
			// --- 2 рука ---
			ctx.strokeStyle = 'black';
			ctx.lineWidth = 4;
			ctx.beginPath();
			ctx.moveTo(300, 142);
			ctx.lineTo(280, 180);
			ctx.stroke();
		};
		function drawError2 () {
			// --- 1 нога ---
			ctx.strokeStyle = 'black';
			ctx.lineWidth = 4;
			ctx.beginPath();
			ctx.moveTo(314, 177);
			ctx.lineTo(290, 220);
			ctx.stroke();
		};
		function drawError1 () {
			// --- 2 нога ---
			ctx.strokeStyle = 'black';
			ctx.lineWidth = 4;
			ctx.beginPath();
			ctx.moveTo(314, 177);
			ctx.lineTo(338, 220);
			ctx.stroke();
		};
		//----- выбор рандомного слова -----
		function randomWord() {
			return wordArray[Math.floor(Math.random() * wordArray.length)];
		};
		//----- переделывание в скрытое слово -----
		function hiddenWord() {
			let answerArray = [];
			for (let i = 0; i < word.length; i++) {
				answerArray[i] = '_';
			};
			return answerArray;
		};
		//----- изменение текста -----
		buttonOfGo.onclick = function () {
			location.reload();
		};
		// ========== КОД ИГРЫ ==========
		let wordArray = ['кошка', 'диван', 'машина', 'цветок', 'карась', 'стол', 'шахматы', 'клей', 'телефон', 'лук'];
		let word = randomWord(); // --- здесь хранится игровое слово ---
		let remainingLetters = word.length; // --- здесь количество букв, по ходу игры оно бдует уменьшаться по мере открытия букв ---		
		let remainingError = 6; // --- количество ошибок ---
		let letter; // --- здесь буква из enterOfLetters ---
		let concurrence = 0; // --- здесь количество совпадений за один цикл ---
		communication.innerText = 'Укажите букву';
		let answerArray = hiddenWord(); // --- здесь переделанное слово в виде массива "подчеркиваний" ---
		guessedLetters.innerText = answerArray.join(' ');

		buttonOfEnter.onclick = function () {
			letter = document.getElementById('enterOfLetters').value;
			concurrence = 0;
			if (letter.length === 0) {
				communication.innerText = 'Введите букву';
				document.getElementById('enterOfLetters').value = '';
			} else if (letter.length !== 1) {
				communication.innerText = 'Введите только одну букву';
				document.getElementById('enterOfLetters').value = '';
			} else {
				
				for (let i = 0; i < word.length; i++) { // --- проверка совпадений указанной буквы ---
					if (letter === word[i]) {
						answerArray[i] = letter;
						guessedLetters.innerText = answerArray.join(' '); // --- обновление угаданных букв ---
						remainingLetters--; // --- количество скрытых букв, нужно для отслеживания конца игры ---
						concurrence++; // --- количество совпадений ---
						document.getElementById('enterOfLetters').value = '';
						// --- условие проверки оставшихся букв для объявления победы ---
						if (remainingLetters === 0) {
							communication.innerText = 'Ура!!! Вы победили!!!';
						};
					};
				};
				console.log('количество совпадений ' + concurrence);
				if (concurrence === 0) {
					remainingError--;
					console.log('плюс 1 ошибка');
					errorInfo.innerText = 'Ошибка. Осталось ошибок ' + remainingError;
				};
				if (remainingError === 0) {
					communication.innerText = 'Вы проиграли!!!';
				};
				console.log('осталось ошибок ' + remainingError);
				if (remainingError === 0) {
					drawError6();
				} else if (remainingError === 1) {
					drawError5();
				} else if (remainingError === 2) {
					drawError4();
				} else if (remainingError === 3) {
					drawError3();
				} else if (remainingError === 4) {
					drawError2();
				} else if (remainingError === 5) {
					drawError1();
				};
			};
		};