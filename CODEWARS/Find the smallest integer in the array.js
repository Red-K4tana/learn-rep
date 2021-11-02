class SmallestIntegerFinder {
	findSmallestInt(args) {
		let num = Math.min.apply(Math, args)
		return num;
	}
}