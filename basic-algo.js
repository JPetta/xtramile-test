// Write a method or pseudocode that finds, efficiently with respect to time used, all numbers that
// occur exactly once in the input collection.
// For example, findUniqueNumbers(Array.asList(1, 2, 1, 3 )) should return { 2, 3 }.

//Answer : 

function findUniqueNumbers(numbers) {
    const countMap = {};

    for (const number of numbers) {
        countMap[number] = (countMap[number] || 0) + 1;
    }

    console.log(countMap)
    // Step 2: Find the numbers that occur exactly once
    const uniqueNumbers = [];
    for (const number in countMap) {
        if (countMap[number] === 1) {
            uniqueNumbers.push(Number(number));
        }
    }

    return uniqueNumbers;
}

console.log(findUniqueNumbers([1, 2, 1, 3]))

console.log("<----------end of answer 1------------>")

// Implement the findMaxSum method or pseudocode that, efficiently with respect to time used,
// returns the largest sum of any two elements in the given list of positive numbers.
// For example, the largest sum of the list { 5, 9, 7, 11 } is the sum of the elements 9 and 11, which
// is 20.

// Answer:

function findMaxSum(numbers) {
    if (numbers.length < 2) {
        throw new Error('Numbers too short');
    }

    numbers.sort((a, b) => b - a);

    console.log(` biggest numbers are ${numbers[0]} + ${numbers[1]}`)
    return numbers[0] + numbers[1];
}

console.log(findMaxSum([5, 9, 7, 11]))
console.log("<----------end of answer 2------------>")