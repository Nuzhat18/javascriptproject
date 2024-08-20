//print number 1 to 10

/*var num = 1;

while(num<=10){
    console.log(num);
    num = num + 1;
}

console.log("while loop completed");*/

//print odd numbers between 1 to 20

/*var num = 1;
while (num <= 20){
    console.log(num);
    num = num +2;
}
console.log("odd number between 1 to 20 printed");*/

//Print 1 to 10 using For Loop

/*console.log("Print 1 to 10 using For Loop");

for (var num3 = 1; num3 <= 10; num3++) {
    console.log(num3);
}*/

console.log("Print all the numbers in array using for each loop");
var arr1 = [4, 7, 12, 10, 15, 20];

for (var num of arr1) {
    console.log(num);
}

console.log("Print all the numbers in array normal for loop");
for (var index = 0; index < arr1.length; index++) {

    console.log(arr1[index]);
}

