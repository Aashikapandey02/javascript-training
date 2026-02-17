// conditional statement 

// let a=20;
// let b=30
// let c=50

// if(a>b){
//     console.log(a+"is greater")
// }
// else{
//     console.log(b+"is greater)
// }


let a=20;
let b=5;
let c=15;
if(a>b && a>c){
    console.log(a+"c is greater")
}
else if(b>c){
    console.log(b+"c is greater")
}
else{
    console.log(c+"c is greater")
}

//using if else statement, display "your BMI[BMI VALUE" is perfect","your BMI is blelow average"or "your BMI is above average"

let marks=37;
if(marks>40){
    if (marks>90)
    console.log("he got A+")
else if(marks>80 && marks<90){
    console.log("he got A")
}
else if(marks>60 && marks<80){
    console.log("he got B")
}
else{
    console.log("he got c")
}
}

else{
    console.log("he failed the exam")
}

//using the if else statement, calculate the electricity bill based on units consumed:
//conditons:
//up to 50 units=rs.3 per unit
//51 to 150 units=rs.5 per unit
//above 50 units=rs.8per unit

let units=120;
let bill;
if (units<= 50) {
            bill = units * 3;
            console.log("your electricity bill is rs" +bill)
        } 
        else if(units>=51 && units<=150 ){
            bill = (50*3)*((units-50)*5);
         console.log("your electricity bill is rs" +bill)
        }
        else if (units>150) {
           bill = (50*3)*(100*5)*((units-150)*8);
         console.log("your electricity bill is rs" +bill)
        }


        let age = 25;
if (age < 13) {
    console.log("Child");
}
else if (age >= 13 && age <= 19) {
    console.log("Teenager");
}
else if (age >= 20 && age <= 59) {
    console.log("Adult");
}
else {
    console.log("Senior Citizen");
}


// DOM(Document object model)