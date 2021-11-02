function digital_root(n) {

	let arrNum = String(n).split('').map(Number).map(i => x += i, x = 0).reverse()[0];
	let sum = arrNum;

	if (String(n).length > 1) {

		for (x = 0; x < 1000; x++) {

			if (String(sum).length > 1) {
				sum = String(sum).split('').map(Number).map(i => x += i, x = 0).reverse()[0];


			} else if (String(sum).length === 1) {
				return sum;

				break;
			}
		}
	} else {
		return n;
	}

}