	//снимаем ширину поля
	function widthMap () {
		let x = parseInt($('.map').css('width'), 10);
	return x;
		};
	//снимаем высоту поля
	function heightMap () {
		let x = parseInt($('.map').css('height'), 10);
	return x;
		};
	//определяем рандомные координаты сокровища
	function randomCoords (side) {
			return Math.floor(Math.random() * side);
		};
	//вычисляем дистанцию до сокровища
	function hypotenuse () {
		sqA = Math.pow(event.offsetY - coordsTreasure.x, 2);
	sqB = Math.pow(event.offsetX - coordsTreasure.y, 2);
	console.log(Math.sqrt(sqA + sqB));
	return Math.sqrt(sqA + sqB);
		};
	//проверяем дистанцию от клика до сокровища
	function distanceToTreasure (dist) {
			if (dist < 50) {
				return 'Ура, нашел!!!';
			} else if (dist < 100) {
				return 'Очень горячо';
			} else if (dist < 200) {
				return 'Горячо';
			} else if (dist < 300) {
				return 'Тепло';
			} else if (dist < 400) {
				return 'Холодно';
			} else if (dist < 500) {
				return 'Очень холодно';
			} else if (dist < 600) {
				return 'Замерзаем полностью';
			} else {
				return 'Окоченевший труп';
			};
		};
	let clicks = 0;
	let coordsTreasure = {
		x: randomCoords (widthMap ()),
	y: randomCoords (heightMap ())
		};
	console.log(coordsTreasure);
	$('.map').click (function (event) {
		clicks++;
	$('#state').text(distanceToTreasure(hypotenuse()));

	if (clicks === 10) {
		alert('Проиграл');
		};
	if (hypotenuse() < 50) {
		alert('Победа!!!')		
		};
	});
	
	