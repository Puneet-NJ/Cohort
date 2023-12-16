const arr = [10, 20, 30, 40, 50];
let ans = -1;
arr.map((ele, index) => {
	if (ele === 90) {
		ans = index;
		return;
	}
});
console.log(ans);
