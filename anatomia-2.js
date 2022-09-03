//Anonymous function - Functions that have no name

(function (a, b, c) {
  return a + b + c;
});

//function expression - set variable name to a function(still anonymous)

const sum = function (a, b) {
  return a + b;
};

const result = sum(2, 45);
console.log(result);

const anotherSum = sum;

console.log(anotherSum(576, 24));

