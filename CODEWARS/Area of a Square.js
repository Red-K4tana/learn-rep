function squareArea(A) {
	let result;

	result = ((Math.pow(((4 * A) / Math.PI), 2)) / 4).toFixed(2);

	return Number(result);
}