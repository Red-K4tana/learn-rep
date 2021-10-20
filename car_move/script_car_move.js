function Car(x, y, name, speed) {
	this.x = x,
		this.y = y,
		this.name = name,
		this.speed = speed
};
//   =====  МЕТОД РИСОВАНИЯ ОБЪЕКТА =====   //
Car.prototype.draw = function () {
	let htmlCar = '<img src="' + this.name + '.png">';
	this.carElement = $(htmlCar);

	this.carElement.css({
		position: "absolute",
		width: "200px",
		left: this.x,
		top: this.y
	});

	$('body').append(this.carElement);
};
//   ===== МЕТОД ДВИЖЕНИЯ ВПРАВО =====   //
Car.prototype.moveRight = function (frame) {
	this.x += frame;
	this.carElement.css({
		left: this.x
	});
};
//   =====ОДНОВРЕМЕННЫЙ ЗАПУСК ИНТЕРВАЛОВ ДВИЖЕНИЯ =====   // 
let teslaInt;
let nissanInt;
function moveInt() {
	teslaInt = setInterval(() => tesla.moveRight(randomSpeed()), 15);
	nissanInt = setInterval(() => nissan.moveRight(randomSpeed()), speedNissan);
	setTimeout(stopInt, 7000); // ОСТАНОВКА ЧЕРЕЗ 7 СЕК
};
//   ===== ОСТАНОВКА ДВИЖЕНИЯ =====   //
function stopInt() {
	clearInterval(teslaInt);
	clearInterval(nissanInt);
};
//   ===== РАНДОМНЫЙ СКАЧОК =====   //
function randomSpeed() {
	return Math.floor(Math.random() * 7);
};
/*
document.onkeydown = function (e) {
	if (e.keyCode == 39) {
		tesla.moveRight();
	};
};
*/
//   ===== УПРАВЛЕНИЕ ПО КНОПКАМ =====   //
document.onkeydown = function (e) {
	if (e.keyCode == 38) {
		clearInterval(nissanInt);
		speedNissan = 5;
		nissanInt = setInterval(() => nissan.moveRight(randomSpeed()), speedNissan);
		console.log('speedNissan ' + speedNissan);
	} else if (e.keyCode == 39) {
		moveInt();
	};
};

let frame;
let speedNissan = 15;
let tesla = new Car(20, 30, 'tesla', 5);
let nissan = new Car(20, 250, 'nissan', 5);


tesla.draw();
nissan.draw();