// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback, initialValue) {


// //  CODE INSIDE HERE   //
	var accumulator = (initialValue === undefined) ? undefined : initialValue;
	for (var i = 0; i < arr.length; i++) {
		if (accumulator !== undefined || i !== 0)
		{
			accumulator = callback(accumulator, arr[i], i, arr);
		}
		else
		{
			accumulator = arr[i];
		}
	}
	return accumulator;

}



/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
