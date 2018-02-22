//Create a variable "x"

var x = "";

//Create a for loop, this will add to our variable "x"
for (var i = 1; i < 7; i++) {
    x = x + "#";

    //Console log x so this will print out x on a new line every time the loop runs.
    console.log(x);
}

/*For this, I have created variable "x" with a blank string. I then created a for loop where
the index will first start at 1, this means there will only be 1 "#". i has to be less than 7 so
this will only print out 6 "#". 

I then have x = x + "#". This essentially is saying ""= "" + "#". x will then be updated to "#"
Then it will print this out with console.log. Since the index number is less than 7, it will repeat
the loop. now, the second time around, it will be #= #+# and x will be updated to "##" This will
print on the second line because console log loops. This repeats until index reaches 6.*/

function oddEvenNumber(num) {
    if (num % 2 === 0) {
        console.log("The number is even");
    } else {
        console.log("The Number is odd");
    }
};

/*I have created a function where the argument num will be evaluated. If there is no remainder,
 then we know the number is even and "The number is even" will be printed, else "The number is odd"
 will be printed.*/ 