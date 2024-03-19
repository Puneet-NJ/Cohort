/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

// function wait1(t) {
// 	return new Promise((resolve) => setTimeout(resolve(t * 1000), t * 1000));
// }

// function wait2(t) {
// 	return new Promise((resolve) => setTimeout(resolve(t * 1000), t * 1000));
// }

// function wait3(t) {
// 	return new Promise((resolve) => setTimeout(resolve(t * 1000), t * 1000));
// }

// function calculateTime(t1, t2, t3) {
// 	return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then((response) => {
// 		let totalTime = 0;
// 		response.map((promise) =>
// 			totalTime < promise ? (totalTime = promise) : (totalTime = totalTime)
// 		);
// 		return totalTime;
// 		// console.log(totalTime);
// 	});
// }
// calculateTime(1, 2, 3);

function wait1(t) {
	const promise = new Promise((resolve) => {
		setTimeout(() => {
			resolve(t * 1000);
		}, t * 1000);
	});

	return promise;
}

function wait2(t) {
	const promise = new Promise((resolve) => {
		setTimeout(() => {
			resolve(t * 1000);
		}, t * 1000);
	});

	return promise;
}

function wait3(t) {
	const promise = new Promise((resolve) => {
		setTimeout(() => {
			resolve(t * 1000);
		}, t * 1000);
	});

	return promise;
}

function calculateTime(t1, t2, t3) {
	const time = 0;
	const promiseChain = Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(
		(result) => {
			let time = 0;

			result.map((eachPromiseTime) => (time = Math.max(eachPromiseTime, time)));

			return time;
		}
	);

	return promiseChain;
}
module.exports = calculateTime;
