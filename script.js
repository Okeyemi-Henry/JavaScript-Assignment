//JAVASCRIPT ASSIGNMENT 1-4

// number 1  print sum of an array 

let printSum=(arr) => {
    let sum= 0;
    for(var a= 0; a<arr.length; a++){
        sum += arr[a];
    }
    console.log(sum);
}
printSum([1,2,3,4,5]);



//number 2 bob & alice hackerRank
// alicepoint= a[0], a[1], a[2]
//bobpoint= b[0], b[1], b[2]
let alice=[2,8,6,8 ,-1 ,0]
let bob=[4,4,10,12]
let noPoint=0

let hackerRank = () => {
    let totalPoints=[]
    let alicePoint=0;
    let bobPoint=0;

    if (alice[0] > bob[0]){
        alicePoint++
    }

    else if (alice[0] < bob[0]){
        bobPoint++
    }

    else (alice[0] === bob[0])
    
    
    if (alice[1] > bob[1]){
        alicePoint++
    }

    else if (alice[1] < bob[1]){
        bobPoint++
    }

else(alice[1]===bob[1])


if (alice[2] > bob[2]){
    alicePoint++
}

else if(alice[2] < bob[2]){
    bobPoint++
}

else(alice[2] === bob [2])

totalPoints.push(alicePoint)
totalPoints.push(bobPoint)
console.log(totalPoints)
};

hackerRank();

//number 3 positive,negative&zero

let positiveNegativeZero =(arr) =>
{
     

    let len = arr.length;
 
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
 

    for(let i = 0; i < len; i++)
    {
        if (arr[i] > 0)
        {
            positiveCount++;
        }
        else if (arr[i] < 0)
        {
            negativeCount++;
        }
        else if (arr[i] == 0)
        {
            zeroCount++;
        }
    }
 


    console.log(parseFloat(positiveCount/len))             
    console.log(parseFloat(negativeCount/len))
    console.log(parseFloat(zeroCount/len))


}


// Test Case:
let a = [ 2, -1, 5, 6, 0, -3 ];
positiveNegativeZero(a);



// sum of two integers number4
let firstFunction=()=> sum;
sum=(20+80)
console.log(sum)

//still number 4 second way .
let add=(20+80)
let secondFunction=()=>{

    for(var a= 0; a<add; a++){
        add  += a;
      
    }
    return add

    }
console.log(add)


    