// //arithmetic operator
// let a=10
// let b=5
// let sum=a+b
// let diff= a-b
// let division=a/b
// let reminder=a%b
// let exponent=a**b
// console.log(sum)
// console.log(diff)
// console.log(divison)
// console.log(reminder)
// console.log(exponent)


//assignment operator
//let c=20
//c=c+1
//console.log("first:",c)
//c+=1
//console.log("second",c)

// let c=20
// let a=20
// let b=5
// let d=15
// console.log(c+=1)
// console.log(a-=1)
// console.log(b-=1)
// console.log(d*=1)
// console.log(d%=1)
// console.log(a**=1)

// let a=9
// let b=10
// console.log(a>b)
// console.log(a<b)
// greater than equals to
// console.log(a>=b)
// console.log(a<=b)


//==check only value but ignores the data types
//== strict equality checker, checks both value as well as data types
// let a=10
// let b="10"
// console.log(a==b)

//write a program to convert the degree celsius to degree fahrenheit(celsius*(9/5)+32)
const celcius=36
const fahrenheit=(celcius*(9/5)+32)
console.log("the"+celcius+"degree"+"is equal to"+fahrenheit+"fahrenheit")

// switch case statement in javascript
const day=new Date().getDay();
console.log(day);

switch(day){
    case 0:
    console.log("Today is sunday")
    break;
    case 1:
    console.log("Today is Monday")
    break;
    case 2:
        console.log("Today is Tuesday")
        break;
        case 3:
            console.log("Today is wednesday")
            break;
            case 4:
                console.log("Today is Thursday")
                break;
                case 5:
                    console.log("Today is Friday")
                    break;
                    case 6:
                        console.log("Today is saturday")
                        break;
                        default:
                            console.log("wrong input(0-6)")
}

// const day=new Date().getMonth();
// console.log(day);

// let month=4;
// switch(month){
//     case 0:
//         console.log("january")
//         break;
//     case 1:
//     console.log("February")
//     break;
//     case 2:
//         console.log("March")
//         break;
//         case 3:
//              console.log("April")
//             break;
//             case 4:
//                 console.log("May")
//                 break;
//                 case 5:
//                     console.log("June")
//                     break;
//                     case 6:
//                         console.log("july")
//                         break;
//                case 7:
//         console.log("August")
//         break;
//     case 8:
//     console.log("September")
//     break;
//     case 9:
//         console.log("October")
//         break;
//         case 10:
//              console.log("November")
//             break;
//             case 11:
//                 console.log("December")
//                 break;
//                 default:
//                     console.log("Invalid number")
// }

function sum(){
    let a=10;
    let b=20;
    console.log(a+b)
    // return a+b;
}

sum()
sum()

//parameter baed function
function mul(x,y){
    return x*y
}
console.log(mul(2,3))

//same
function multiply(a,b){
    console.log(a*b)
}
multiply(16,23)

//q1.check whether the given number is odd or Even using function and conditioal statement.

function Number(num) {

    if (num % 2 == 0) {
        console.log(num + " is Even");
    }
    else {
        console.log(num + " is Odd");
    }

}
Number(7);

const evenodd=(a)=>{
    if(a%2==0){
        console.log("even")
    }
    else{
        console.log("old")
    }
}

evenodd(22)

// const mul =(a, b) => {
//     if (a && b) {
//         console.log("Multiplication is " + (a * b));
//     }
//     else {
//         console.log("Invalid input");
//     }
// }

// multiply(5, 4);


//loop in javascript
// 1.for loop
for(let i=0;i<5;i++){
    console.log(i)
}