//Exercise:

numbers = [1,2,3,21,6,12,5,81,35];

function double(arr) {
	return arr.map(function(val) {
		return val * 2;
	});
}

const doubleNew = arr => arr.map(val => val * 2);

double(numbers);
doubleNew(numbers)


function squareAndFindEvens(numbers){
	var squares = numbers.map(function(num){
		return num ** 2;
	});
	var evens = squares.filter(function(square){
		return square % 2 === 0;
	});
	return evens;
  }
  
const squareAndFindEvensNew = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0)

squareAndFindEvens(numbers)
squareAndFindEvensNew(numbers) 