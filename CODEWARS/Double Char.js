function doubleChar(str) {

	let arr = str.split('');
	let newArr = [];
	for (i = 0; i < arr.length; i++) {
		newArr[i] = arr[i] + arr[i];
	}
	return newArr.join('');
}