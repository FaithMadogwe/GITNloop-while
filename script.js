// # while True:
// #     num = int(input("Enter a number: "))
// #     if num <= 100:
// #         break
// # print(f"You entered a valid number: {num}")


// # while True:
// #     num = int(input("Enter a number: "))
// #     if 50 <= num <= 100:
// #         break
// # print(f"You entered a valid number between 50 and 100: {num}")


// # for i in range(1, 101):
// #     if i % 3 == 0:
// #         print("Fizz")
// #     elif i % 5 == 0:
// #         print("Buzz")
// #     else:
// #         print(i)


// # for i in range(1, 101):
// #     if i % 3 == 0 and i % 5 == 0:
// #         print("FizzBuzz")
// #     elif i % 3 == 0:
// #         print("Fizz")
// #     elif i % 5 == 0:
// #         print("Buzz")
// #     else:
// #         print(i)


// # num = int(input("Enter a number: "))
// # for i in range(1, 13):
// #     print(f"{num} x {i} = {num * i}")


// # while True:
// #     num = int(input("Enter a number between 2 and 9: "))
// #     if 2 <= num <= 9:
// #         break
// # for i in range(1, 13):
// #     print(f"{num} x {i} = {num * i}")

//1. Input validation

// let number=100 ;
// while (number >= 100) {
//     number= prompt ('Enter a number')
// }
// console.log(`Number ${number} is valid`)


// while (number <=50 || number >100)
//     number= prompt ('Enter a numer')
// console.log(`Number ${number} is valid`)

// FizzBuzz
for (let i = 1; i <= 100; i++) {
    console.log (i)
    if (i % 3 ===0 )
        console.log (`Fizz`)

    if (i % 5 ===0)
        console.log (`Buzz`)

    if (i % 3 ===0 && i % 5 ===0)
console.log (`FizzBuzz`)
    
} 

//Multiplication table

 let num;
 num = prompt ("Enter a number")
 for (let i = 1; i <=10; i++) {
   
   console.log(`${num} × ${i} = ${num * i}`)
    
 }
 for (let i = 1; i <= 9; i++) {
   console.log(`${num} × ${i}= ${num * i}`)
    
 }