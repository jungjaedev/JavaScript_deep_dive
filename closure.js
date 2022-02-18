function closure() {
	let cnt = 0;
	function cntPlus() {
		cnt = cnt + 1;
	}
	function printCnt() {
		console.log(cnt);
	}
	return {
		cntPlus,
		printCnt
	}
}

const cntClosure = closure();
console.log(cntClosure);
cntClosure.cntPlus();
cntClosure.printCnt();
