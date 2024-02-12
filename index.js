const express = require('express')
const app = express()

const port = 8000

app.listen(port, ()=> {
    console.log(`Server connected to port ${port}`)
})

app.get('/', (req, res)=> {
    res.send(`
    <h1>
        Hello World!
    </h1>
    `)
    console.log("request received")
})

// app.listen(port,()=>{
//     console.log(`Server is running on port ${port}`);
// });

// let statments = "Happy Birthday to you! Hehe"
// let vowels=0
// let consonants=0

// changet=statments

// for(let i=0; i<changet.length; i++){
//     if (changet[i]==="a"||changet[i]==="e"||changet[i]==="i"||changet[i]==="o"||changet[i]==="u"||changet[i]==="A"||changet[i]==="E"||changet[i]==="I"||changet[i]==="O"||changet[i]==="U"){
//         vowels=vowels+1
//     }
//     else if(changet[i]==="b"||changet[i]==="c"|| changet[i]==="d"|| changet[i]==="f"||changet[i]==="g"||changet[i]==="h"||changet[i]==="j"||changet[i]==="k"||changet[i]==="l"||changet[i]==="m"||changet[i]==="p"||changet[i]==="q"||changet[i]==="r"||changet[i]==="s"||changet[i]==="t"||changet[i]==="v"||changet[i]==="w"|| changet[i]==="x"||changet[i]==="y"||changet[i]==="z"||changet[i]==="B"||changet[i]==="C"|| changet[i]==="D"|| changet[i]==="F"||changet[i]==="G"||changet[i]==="H"||changet[i]==="J"||changet[i]==="K"||changet[i]==="L"||changet[i]==="M"||changet[i]==="P"||changet[i]==="Q"||changet[i]==="R"||changet[i]==="S"||changet[i]==="T"||changet[i]==="V"||changet[i]==="W"|| changet[i]==="X"||changet[i]==="Y"||changet[i]==="Z"){
//         consonants=consonants+1
//     }
//     }
// console.log(changet.length)
// console.log(vowels)
// console.log(consonants)

// let a = [1, 2, "apple", true, [8, 9], 4, 5, 6, 7];

// // Initialize counters
// let numbersCount = 0;
// let stringsCount = 0;
// let booleansCount = 0;

// // Iterate through the array
// for (let i = 0; i < a.length; i++) {
//     if (typeof a[i] === "number") {
//         numbersCount++;
//     } else if (typeof a[i] === "string") {
//         stringsCount++;
//     } else if (typeof a[i] === "boolean") {
//         booleansCount++;
//     } else if (Array.isArray(a[i])) {
//         // If the element is an array, count its elements separately
//         for (let j = 0; j < a[i].length; j++) {
//             if (typeof a[i][j] === "number") {
//                 numbersCount++;
//             } else if (typeof a[i][j] === "string") {
//                 stringsCount++;
//             } else if (typeof a[i][j] === "boolean") {
//                 booleansCount++;
//             }
//         }
//     }
// }

// let arr = [1, 2, 3, 4, 5];

// // Adding an element
// arr.push(6); // Adds 6 to the end of the array
// console.log("After adding an element:", arr);

// // Removing an element
// arr.pop(); // Removes the last element from the array
// console.log("After removing an element:", arr);

// // Adding an element at the beginning
// arr.unshift(0); // Adds 0 to the beginning of the array
// console.log("After adding an element at the beginning:", arr);

// // Removing an element from the beginning
// arr.shift(); // Removes the first element from the array
// console.log("After removing an element from the beginning:", arr);

// // Removing a specific element by value
// let indexToRemove = arr.indexOf(3); // Find the index of the element to remove
// if (indexToRemove !== -1) {
//     arr.splice(indexToRemove, 1); // Removes one element at the specified index
// }
// console.log("After removing a specific element:", arr);

// // Output the counts
// console.log("Numbers:", numbersCount);
// console.log("Strings:", stringsCount);
// console.log("Booleans:", booleansCount);



// let x=[0,1,2,3,4]
// let y=["Hello", "world","it","is","me"]
// let z=[[3,4],[2,5],[1,3]]
// let a=[1,2,"apple", true, [8,9], 4, 5, 6, 7]
// // console.log(x)
// // console.log(y[1])
// // console.log(z[0][1])
// for(let i=0; i<y.length; i++){
//     for(let b=0; b<y[i].length; b++){
//         console.log(y[i][b])
//     }
// }
// for(let i=0; i<a.length; i++){
//     console.log(a[i])
// }
let counter=0
setInterval(()=>{
    counter++
    if (counter<=3)
    console.log("hello")
},2000)