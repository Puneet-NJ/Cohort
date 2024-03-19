/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

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
	let totalTime = 0;

	const promiseChain = wait1(t1)
		.then((time1) => {
			totalTime += time1;
			return wait2(t2);
		})
		.then((time2) => {
			totalTime += time2;
			return wait3(t3);
		})
		.then((time3) => {
			return (totalTime += time3);
		});

	return promiseChain;
}

module.exports = calculateTime;
