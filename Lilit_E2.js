//Exercise 1
let number= +prompt("Please enter a number")
if(number % 2 === 0){
	console.log("odd")
}
else {
	console.log("even")
}


//Exercise 2
number = +prompt("Please enter a number")
let lastDigit = number % 10
console.log(lastDigit)

let newNumber = (number - lastDigit)/10
let finalNumber = +("" + lastDigit + newNumber)
console.log(finalNumber)


//Exercise 3

let average = 0
i = 4
do {
	number = +prompt("Please enter a number")
	i--
	average = average + number

} while (i>=0)

average = average/5
alert("The average is " + average)



//Exercise 4
let a,b,c
a = +prompt("Give a number")
b = +prompt("Give a number")
c = +prompt("Give a number")
if(a < b && b < c) {
   	console.log(a, b , c);
  
} else if (a < b && c < b) {
    console.log(a, c, b);
} else if (b < a && a < c) {
    console.log(b, a, c);
} else if(b < a && c < a) {
    console.log(b, c, a); 
} else if(c < a && a < b) {
    console.log(c, a, b);
} else {
    console.log(c, b , a);
}


//Exercise 5
var n = +prompt();
var i = 0;
var j = 0;

if (n%2 === 0 && !Math.floor(n/10)) {
	i+=1;
}
if (n%3 === 0 && n%10 === 1) {
	j+=1;
}





