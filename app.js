// let x=0
// let y=5
// console.log(x+y)
// var grade=25
// let z=1

// if(grade=="75"){
// console.log("asdfasdfa", grade)
// }
// else{
//     console.log("you are edged")
// }

// for(let i=0; i==2; i++){
//     z=z+1
//     console.log(z)
// }

// let ab="person123123"
// console.log(ab.length)

// let x= "person123123"

// for(let i=0; i<x.length; i++){
//     console.log(x[i])
// }

// for(let i =x.length-1; i>=0; i--){
//     console.log(x[i])
// }

// let x=0

// for(let i=0; i<75; i+=2)
// console.log("hatdog",i,"201")

// let x="sladfjaskldfjakls12"
// let z= true

// for(let i=x.length; i>=0; i--){
//     if(x[i]==="1" || x[i]==="a"){
//         console.log(x[i])
//     }
// }

const {students,hello} = require ('./mymodule')
// const mymodule = require ('./mymodule')
// console.log(mymodule)
// mymodule.hello("Japayuks")
hello()
for(let i=0; i<students.length; i++){
    console.log(students[i])
}
