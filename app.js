
//-------------------basics-------------------------
// const myname="suheb"

// let a=5

// console.log(myname)  //cannot be changed
// console.log(a)

// a=999

// console.log(a)

//--------------------datatypes--------------------
// let mynum;
// console.log(mynum)

// let boolvalue=true
// let nullvalue=null

// console.log(boolvalue)
// console.log(nullvalue)

//------------------array--------------------------------

// let array=[1,2,3,4,5,6,7,8]

// console.log(array.length)
// console.log(array[0])
// console.log(array[1])
// console.log(array[array.length-1])

//-----------------composite data type--(map)--------------------


// const person={
//     name:{
//         firstname:"syed",
//         middlename:"sha",
//         lastname:"suheb"
//     },
//     age:22,
//     city:"Vellore"

// }
// console.log(person)

// const student={
//     name:"syed sha suheb",
//     age:22,
//     courses:[{coursname:"DSA",coursecredits:3},{coursname:"web dev",coursecredits:4}]
// }
// console.log(student)
// console.log(student.courses)
// console.log(student.courses[0])
// console.log(student.courses[1].coursname)

//--------------template strings------------------------

// let mynamenew="suheb"

// mynamenew="rinci"

// console.log(`hello ${mynamenew}`)

//---------prompt and alert--------------------------------

// const studentname=prompt("Enter your name: ")
// alert(`hello ${studentname}`)

//-----------------Operators-------------

// let a=7
// let b=3

// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)

// a++
// console.log(a)
// b--
// console.log(b)

//---------comparators----------------

// console.log(3>4)
// console.log(3<4)
// console.log(3>=4)
// console.log(3>=3)
// console.log(3=='3')
// console.log(3==='3')

//----------conditionals-------------------

// let weather="Sunny"
// let subCondition="Too Hot"

// if(weather==="Cloudy"){
//     console.log("Take the umbrella")
// }else if(weather==="Rainy"){
//     console.log("Use the umbrella")
// }
// else if(weather==="Sunny"){
//     if(subCondition==="Too hot"){
//         console.log("Use the umbrella")
//     }
//     else{
//         console.log("Don't use the umbrella")
//     }
// }else{
//     console.log("Don't take the umbrella")
// }


//--------ternary Operator----------------------------

// let result=9>5

// result?console.log("Result is true"):console.log("Result is false")

// let age=prompt("Enter your age");

// if(age>60){
//     console.log("Senior Citizen");
// }
// else if(age<18){
//     console.log("Minor");
// }else{
//     console.log("Adult");
// }

//-------------------false values------------------

// false--bool false
// 0----number 0
// null---null
// undefined
// NaN--not a number
// ""---empty string

// let a;

// if(a){
//     console.log("bool is true")
// }else{
//         console.log("bool is false")
// }

//--------logical operators--------------

// let a1=0;
// let a2="";
// if(a1||a2){
//     console.log("hi")
// }

// let b1=56;
// let b2=89;;

// if(b1&&b2){
//     console.log("hello")
// }

//--------------for loop---------------

// let arr=[22,56,76,89,90]

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

//---while loop and rand function

// let rand=Math.random()

// while(rand>0.5){
//     console.log("greater than 0.5");
//     rand=Math.random();
// }

// let itr=1;

// while(itr!=6){
//     console.log(itr);
//     itr++;
// }

//-----task=>use  for loop to calculate factorial of a number

// let a = parseInt(prompt("enter a number"));

// let fac = 1;
// for (let index = 2; index <= a; index++) {
//     fac = fac * index;

// }

// console.log(fac)

//-----types of function----------------

// function  greet(name)
//  {
//     console.log(`hello ${name}`)

// }

// greet("syed")

// //=========>arrow function

// const namaste=(name)=>{
//     console.log(`namaste ${name}`)
// }

// namaste("bhau")

// const greet2=function  greet(name)
// {
//    console.log(`hello ${name}`)

// }

// greet2("akram")

//-----------------return statement in a function--------------

// const fun=(element)=>{
//     return `hi hello ${element}, you are returned`
// }

// let result=fun("suheb")
// console.log(result)

//--------task for functions--arrow functions
//task-1================>
// let len = () => {
//     let user = prompt("Enter your name")
//     console.log(user.length)

// }
 
// len()

//task-2=================>

// let add=(a,b)=>{
//     return a+b
// }

// let ans=add(5,6)

// console.log(ans)

//-------------------------call back function------------------------------

// const message=(status,callback)=>{
//     if(status=="unplaced"){
//         callback()
//     }else{
//         console.log("Congratulations")
//     }
// }

// const course=()=>{
//     console.log("Complete DSA Topics to get placed")
// }

// message("placed",course);
// message("unplaced",course);


//-----------call back functions task---------------------------

// const isAgeOdd=(age,callback)=>{
//     if(age%2!=0){
//             callback(age)
//     }else{
//         console.log("your age is even")
//     }
// }

// const printAge=(age)=>{
//     console.log(`you odd age is ${age}`)
// }

// isAgeOdd(10,printAge)
// isAgeOdd(13,printAge)

//--------------------------------assignments------------------------------
//Temperature conversion=================>

// const temp=(c)=>{
//     return ((c*(9/5))+32)

// }
// let f=temp(1)
// console.log(f)

//ODD-EVEN-CHECKER========================>

// const oeCheck=(num)=>{
//     return num%2==0
// }

//  console.log(oeCheck(10))
//  console.log(oeCheck(11))

 //-----------------------------------------------------------------------------------------------------

  