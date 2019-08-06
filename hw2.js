async function promiseReduce(asyncFunctions, reduce, initialValue) {
	let acc = initialValue;
	for (let asyncFn of asyncFunctions) {
		const value = await asyncFn();
		acc = reduce(acc, value);
	}
	return acc;
}

// var fn1 = () => {
//     console.log('fn1')
//     return Promise.resolve(3)
// }

// var fn2 = () => new Promise(resolve => {
//     console.log('fn2')
//     setTimeout(() => resolve(2), 1000)
// })

// promiseReduce(
//     [fn1, fn2, fn1, fn1, fn2],
//     function (memo, value) {
//         console.log('reduce')
//         return memo * value
//     },
//     1
// )
// .then(a => console.log(a))