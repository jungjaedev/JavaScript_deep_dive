function closure() {
	let cnt = 0;
	function cntPlus() {
		cnt++;
	}
	return {
		cntPlus,
	}
}

const cntClosure = closure();

console.log(cnt);
cntPlus();
console.log(cnt);

