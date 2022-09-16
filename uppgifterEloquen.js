//Uppgift nr 1 i "Program structure"
//Looping a triangle


// let square = "#";

// while (square.length <= 7) {
//     console.log(square);
//     square += "#";
// }

/*
let a = 1;
while (a <= 100) {
    if (a % 5 == 0 && a % 3 == 0) {
        console.log('FizzBuzz');
    }
    else if (a % 3 == 0)
        console.log('Fizz');
    else if (a % 5 == 0) {
        console.log('Buzz');
    } else {
    console.log(a);
    }

    a++;
    
}*/

let whiteS = " ";
let square = "#";
let theString = "";

//while ( <= 8) {
while (theString.length !== 8){
        theString += square;
        theString += whiteS;
    }  
        theString += "\n";
        

        console.log(theString);
    
//}

