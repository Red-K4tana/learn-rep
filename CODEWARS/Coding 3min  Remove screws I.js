function sc(screws) {
	let arrScrews = screws.split('');
	let count = 0;
	for (i = 0; i < arrScrews.length; i++) {

		if (i === 0) {
			count++;
		} else if (arrScrews[i] === arrScrews[i - 1]) {
			count += 2;
		} else if (arrScrews[i] != arrScrews[i - 1])
			count += 7;

	}
	return count;
}