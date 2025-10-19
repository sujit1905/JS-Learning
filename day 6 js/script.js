// function diceRoll()
// {
//     let num=Math.random()*6
//     num=Math.floor(num);
//     num+=1;

//     console.log(num);
// }
// diceRoll();

//functions with argument

// function printName(name)
// {
//     console.log(name);
// }

// printName("xyz");

//function which give average of three numbers

// function averageOfNumbers(num01,num02,num03)
// {

//     console.log((num01+num02+num03)/3);
// }

// averageOfNumbers(50,5,50);

//function for multiplication table of any number

// function multiplication(num)
// {
//     for(let i=1; i<=10; i++)
//     {
//         console.log(`${num}*${i}=${num*i}`);
//     }
// }

// multiplication(5);

//function that return the sum of 1 to n numbers

// function SumOfNumbers(max){
//     let ans=0;
//     for(let i=1; i<=max; i++)
//     {
//         ans=ans+i;
//     }
//     console.log(ans);
//     return ans;
// }
// SumOfNumbers(5);

// function concat(arr)
// {
//     let sumOfstring="";

//     for(let i=0; i<arr.length; i++)
//     {
//         sumOfstring+=arr[i];
//     }
//     return sumOfstring
// }


// let ans=concat(["sujit","Mecwan"]);

// console.log(ans);

// lexical scope
function outterFunction(){

    function innerFunction(){
    console.log(a);
    console.log(b);
    }
    let a = 5;
    let b = 10;
    innerFunction();
}
outterFunction();

// function expression

let sum = function (a, b) {
    let sum = a + b;
    return sum
}


//higher order function

function Multiplegreet(func,n)
{
    for(let i=1; i<=n; i++)
    {
        func();
    }
}

let greet = function()
{
    console.log("hello");
}

Multiplegreet(greet,10)
