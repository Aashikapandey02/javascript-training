// const person={
//     name:"Aashika",
//     class:12,
//     age:20,
//     skills:["singing","dancing","coding"]
// }
// person.skills.forEach((skill)=>{

// })
// // console.log(person.name)
// // console.log(data.class)

// console.log(person.skills)

//make a object named"student" which has keys Name, Addres, roll, hobbies(in array), friends(array), rank,gender

// const student={
//     name:"Aashika",
//     address:"shitalnagar",
//     roll:"1",
//     hobbies:["dancing","reading"],
//     friends:["suvekshya","preety","sanisha"],
//     rank:"B",
//     gender: "female",

// }

// console.log(student.name);
// console.log(student.address);
// student.hobbies.forEach((hobbies)=>{
//     console.log(hobbies)
// })

// student.friends.forEach((friends)=>{
// console.log(friends)
// })

//nested object
// const student ={
//     Name:"Aashika",
//     address:"shitalnagar",
//     friends:[
//         {
//             name:"suvekshya",
//             address:"ghodaha",
//         },

//         {
//             name:"sanisha",
//             address:"ktm",
//         }
//     ]
// }
// console.log(student.friends[0].name);
// console.log(student.friends[0].address);
// console.log(student.friends[1].name);
// console.log(student.friends[1].address);


// const student= [
//     {
//     name:"Aashika",
//     age:20
// },

// {
//     name:"Suvekshya",
//     age:19
// }]

// console.log(student[0].name)
// console.log(student[0].age)


// const student=[
//     {
//         name:"Aashika",
//         age:20,
//         changeName: function changeName(){
//             this.name="suvekshya"
//         },
//         hobbies:["sing","dance"],
//         addHobbies:function addHobbies(){
//             this.hobbies.push("code")
//         }
//     }
// ]

// student[0].changeName()
// console.log(student[0].name)
// student[0].addHobbies()
// console.log(student[0].hobbies)

const student=[
    {
        name:"Aashika",
        marks:[40,60,78,56,49],
       getTotalMarks:function(){
        let sum=0;
        for(let i=0;i<this.marks.length;i++){
            Sum+= this.Marks[i];
        }
        console.log("Total Marks:",sum);
        return sum;
       },
hobbies:["sing","dance"],
    addHobbies:function addHobbies(){
       this.hobbies.push("code")
     }
  }
    
]
    

const Questiondata={
    id:1,
    title:"javascript Quiz",
    totalQuestion:3,
    questions:[
        {
          id:101,
          question:"What is javascript",
          options:["programming Language","Database","operating system","Browser"],
          correctAnswer:"Programming Language"
        },
        {
            id:102,
            question:"which keyword is used to declare variable",
            options:["var","int","letvar","define"],
            correctAnswer:"var"
        },

        {
            id:103,
            question:"which symbol is used for single line comment?",
            options:["//","/* */","#","<!--->"],
            correctAnswer:"//"
        }
    ]
}

//get all questions
console.log(Questiondata.questions)

//get questions with options
Questiondata.questions.forEach((question)=>{
    console.log(question.question)
    console.log(question.options)
})
//acesss single question
console.log(Questiondata.questions[0].question);
//acess connect answer of a question
Questiondata.questions.forEach((question)=>
{
console.log(question.correctAnswer);
});