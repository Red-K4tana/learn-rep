function calculateHypotenuse(a, b) {

	let numA = Number(String(a));
	let numB = Number(String(b));

	if (numA > 0 && numA < 1000000 && numB > 0 && numB < 1000000) {
		let c = (Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))).toFixed(3);

		return Number(c);

	} else {
		throw "error"
	}
}