		//---ФУНКЦИИ---
	function pickWord() {
		let words = ["кот", "стол"];
	return words[Math.floor(Math.random() * words.length)];
		};
	function setupAnswerArray(word) {
		let answerArray = [];
	for (let i = 0; i < word.length; i++) {
		answerArray[i] = "_";
			};
	return answerArray;
		};
	function getGuesses() {
			return prompt("Укажите букву или нажмите Отмена.");
		};

	function updateGameState (answerArray, guess, word) {
		let replacementLetter = 0;
	for (let i = 0; i < word.length; i++) {
				if (word[i] === guess) {
		answerArray[i] = guess;
	replacementLetter++;
				};
			};
	return replacementLetter;
		};

	//---КОД ИГРЫ---
	let word = pickWord(); //загаданное слово
	console.log("загаданное слово " + word);
	let answerArray = setupAnswerArray(word); //переделка слова в подчеркивания
	let remainingLetters = word.length; //оставшиеся буквы
	let remainingTry = word.length + 5; //оставшиеся попытки
		//игровой цикл
		while (remainingLetters > 0) {
		alert("Открытые буквы " + answerArray.join(" ")); // показываем состояние игры
	if (remainingTry === 0) {
		alert("Попытки закончились.");
	break;
			};
	let guess = getGuesses(); //запрашиваем букву
	if (guess === null) { //нажата кнопка отмены
		alert("Закрываем игру.");
	break;
			} else if (guess.length !== 1) { //игрок указал больше одной буквы
		alert("Укажите только одну букву.");
			} else { //игрок указал одну букву, проверяем совпадения
		console.log("неоткрытые буквы, было - " + remainingLetters)
				let correctGuess = updateGameState(answerArray, guess, word);
	remainingLetters -= correctGuess; //уменьшаем количество оставшихся букв на количество замененных букв
	console.log("неоткрытые буквы, стало - " + remainingLetters);
	remainingTry --; //уменьшаем количество попыток на 1
	console.log("попыток осталось " + remainingTry);
			};
	//поздравление с победой
	if (remainingLetters === 0) {
		alert("Поздравляем! Слово открыто - " + answerArray.join(" "));
			};
		};
