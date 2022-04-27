// //for loop

// for(let i = 1; i<=10 ; i++){
//     console.log(i*2);
// }


// //while loop

// let b = 10;
// while(b < 0 ){
//     console.log(b);
//     b--;
// }

//using for loop and while loop try to print the multiple of 2 till 20 from 2


// let c = 2;
// do {
//     console.log(c);
//     c=c+2;
// } while (c<=20);

// for - in loop
//array is group of values and also its range is 0 to n-1
//in work process : counting a index number


let name = 'hitesh'

let place =['bhilai','raipur','durg']
for (let a in place){
    console.log(a);
    }
    for(let b of place){
        console.log(b);
    }

//for each - its very imp. for web

place.forEach((b,index)=>{/// the first parameter accepts the vlues of the array
// and the second parameter accepts the indexes of the array
    console.log(index,b)
})
    

