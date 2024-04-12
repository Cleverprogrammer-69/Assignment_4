//Q1
let greeting:string='Hello, World'
console.log(greeting)
//Q2
let num1:number,num2:number
num1=6
num2=3
console.log("Sum = ",num1+num2)
console.log("Difference = ",num1-num2)
console.log("Product = ",num1 * num2);
console.log("Quotient = ",num1 / num2);
//Q3
let a:number =78
let b:number = 56
console.log("Before Swap values are ",a,b)
a=a+b
b=a-b
a=a-b
console.log("After Swap values are",a,b)
//Q4
let message:string
message = "true" //Error is generated Type boolean is not assingnable to string
console.log(message)
//Q5
let a1 : number = 5 , a2 : number = 29;
console.log("modulus = ",a2 % a1);
//Q6
let counter:number=0
counter++
counter = counter + 1
counter += 1
console.log("Counter = ",counter)
//Q7
let x=true,y=false,z=true
console.log("AND = ",x&&y&&z)
console.log("OR = ",x||y||z)
console.log("NOT = ",!x,!y,!z)
//Q8
let number:number=39
number+=5
number-=7
number*=9
number/=9
console.log("Using compound assignment operators ",number)
//Q9
let numberCheck:number=67

if(numberCheck%2==0){
    console.log("Even")
}else{
    console.log("Odd")
}
//Q10
let age:number=18
if(age >=18){
    console.log("Candidate is eligible to vote")
}else{
    console.log("Candidate is not eligible to vote")
}
//Q11
let score:number;
score=78
if(score >=90){
    console.log("A")}
else if(score >=80){
    console.log("B")}
else if(score >=70){
    console.log("C")}
else if(score >=60){
    console.log("D")}
else if(score >=50){
    console.log("E")}
else{
    console.log("F")}
//Q12
let n1:number,n2:number,n3:number;
n1=9,n2=4,n3=9
if(n1>n2&&n1>n3){
    console.log("Greatest number is n1 = ",n1)}
else if(n2>n1&&n2>n3){
    console.log("Greatest number is n2 = ",n2)}
else{
    console.log("Greatest number is n3 = ",n3)}
//Q13
 let year:number=2024       //Math.floor(Math.random()*3000)
if(year%4==0){
    console.log("Its leap year : ",year)
}
else{
    console.log("Its not leap year : ",year)
}
//Q14
let fahrenhiet:number=98.6;
let celsius = (fahrenhiet-32)*(5/9)
console.log(fahrenhiet,"fahrenhiet to celsius : ",celsius)
//Q15
let number3:number=-8
if (number3>0) {
    console.log("Number is positive : ",number3)
}
else if (number3<0){
    console.log("Number is negative : ",number3)
}
else{
    console.log("Number is zero : ",number3)
}
//Q16
let tableOf:number=8
for(let i = 1;i<=10;i++){
    console.log(`${tableOf} X ${i} = ${tableOf*i}`)
}