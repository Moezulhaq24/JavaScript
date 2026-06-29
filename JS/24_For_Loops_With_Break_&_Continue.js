// for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    if(element==5){
        // console.log("5 is best number")
    }
    // console.log(element);
}

for (let i = 0; i < 10; i++) {
    // console.log(`Outer Loop Value:${i}`);
    for (let j = 0; j < 10; j++) {
        // console.log(`Inner Loop Value:${j} and Outer loop ${i}`);
        // console.log(i+'*'+j+'='+i*j);
    }
    
}


let myarr = ["flash","batman","superman"]

for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    console.log(element)   
}

// break and continue

// for (let i = 1; i <= 20; i++) {
//     if(i==5){
//         console.log("5 is detected");
//         break
//     }
//     console.log(`Value of i : ${i}`)
    
// }

for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log("5 is detected");
        continue
    }
    console.log(`Value of i : ${i}`)
    
}