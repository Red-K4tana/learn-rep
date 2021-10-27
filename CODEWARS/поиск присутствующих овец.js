function countSheeps(arrayOfSheep) {
	// TODO May the force be with you
	let arrayFalse = [];
	arrayFalse = arrayOfSheep.filter(function (x) {
		return x === true;
	});
	return arrayFalse.length;
}