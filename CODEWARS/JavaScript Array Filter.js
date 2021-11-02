function getEvenNumbers(arr) {
	// filter out the odd numbers
	let newArr = arr.filter(x => !(x % 2));
	return newArr;
}