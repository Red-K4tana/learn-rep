function FilterString(value) {

	let reg = new RegExp(/[0-9]/gi);

	return Number(value.match(reg).join(''))
}