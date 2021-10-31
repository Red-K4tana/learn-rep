// return masked string
function maskify(cc) {
	let arr = [];
	if (cc.length > 4) {
		arr = cc.split('');
		for (let i = 0; i < arr.length - 4; i++) {
			arr[i] = '#';
		}
	} else {
		return cc;
	}
	return arr.join('');
}
