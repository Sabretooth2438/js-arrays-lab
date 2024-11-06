// //Exercise 1
// const foods = []

// console.log('Exercise 1 result:', foods)

// //Exercise 2
// const foods = ['pizza', 'cheeseburger']

// console.log('Exercise 2 result:', foods)

// //Exercise 3
// const foods = ['pizza', 'cheeseburger']
// foods.unshift('tacos')

// console.log('Exercise 3 result:', foods)

// //Exercise 4
// const foods = ['pizza', 'cheeseburger']
// foods.unshift('tacos')
// const favfood = foods[1]

// console.log('Exercise 4 result:', favfood)

// //Exercise 5
// const foods = ['pizza', 'cheeseburger']
// foods.unshift('tacos')
// foods.splice(2, 0, 'tofu')

// console.log('Exercise 5 result:', foods)

// //Exercise 6
// const foods = ['pizza', 'cheeseburger']
// foods.unshift('tacos')
// foods.splice(2, 0, 'tofu')
// foods.splice(1, 1, 'sushi', 'cupcake')

// console.log('Exercise 6 result:', foods)

// //Exercise 7
// const foods = ['pizza', 'cheeseburger']
// foods.unshift('tacos')
// foods.splice(2, 0, 'tofu')
// foods.splice(1, 1, 'sushi', 'cupcake')
// const yummy = foods.slice(1, 3)

// console.log('Exercise 7 result:', yummy)

// //Exercise 8
// const foods = ['pizza', 'cheeseburger']
// foods.unshift('tacos')
// foods.splice(2, 0, 'tofu')
// foods.splice(1, 1, 'sushi', 'cupcake')
// const yummy = foods.slice(1, 3)
// const soyIdx = foods.indexOf('tofu')

// console.log('Exercise 8 result:', soyIdx)

// //Exercise 9
// const foods = ['pizza', 'cheeseburger']
// foods.unshift('tacos')
// foods.splice(2, 0, 'tofu')
// foods.splice(1, 1, 'sushi', 'cupcake')
// const yummy = foods.slice(1, 3)
// const soyIdx = foods.indexOf('tofu')
// const allFoods = foods.join(' -> ')

// console.log('Exercise 9 result:', allFoods)

// //Exercise 10
// const foods = ['pizza', 'cheeseburger']
// foods.unshift('tacos')
// foods.splice(2, 0, 'tofu')
// foods.splice(1, 1, 'sushi', 'cupcake')
// const yummy = foods.slice(1, 3)
// const soyIdx = foods.indexOf('tofu')
// const allFoods = foods.join(' -> ')
// const hasSoup = foods.includes('soup')

// console.log('Exercise 10 result:', hasSoup)

// //Exercise 11
// const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90]
// const odds = []
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] % 2 !== 0) {
//     odds.push(nums[i])
//   }
// }

// console.log('Exercise 11 result:', odds)

//Exercise 12
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90]
const fizz = []
const buzz = []
const fizzbuzz = []
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 3 === 0) {
    fizz.push(nums[i])
  }
  if (nums[i] % 5 === 0) {
    buzz.push(nums[i])
  }
  if (nums[i] % 3 === 0 && nums[i] % 5 === 0) {
    fizzbuzz.push(nums[i])
  }
}

console.log('Exercise 12 Results:')
console.log('  fizz:', fizz)
console.log('  buzz:', buzz)
console.log('  fizzbuzz:', fizzbuzz)
