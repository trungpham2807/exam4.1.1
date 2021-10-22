// 5. Basic JavaScript (10%)

// Q37. What does this code snippet do? Paste it to vscode, try to run and explain.

// let i = 3;

// for (; i < 5; i++) {
//   console.log(i);
// }
// Answer: Using for loop and print this i value and print value 3,4 in console.
// Actually we already declared i before loop, and in JS we dont need to declared or type something like i = 3 into ()

// Q38. What does this code snippet do? Paste it to vscode, try to run and explain.

// let i = 3;

// for (; i < 5; ) {
//   console.log(i);
//   i += 1;
// }
// Answer: It print 3,4 to console. Because print before increase value i by 1, that's why the first value equal 3. Then increase i by 1 then move on for..loop.

// Q39. What does this code snippet do? Paste it to vscode, try to run and explain.
// let i = 3;

// for (;;) {
//   console.log(i);
//   i += 1;
// }

// Answer: Creating infinite loop because there is no condition to compare.

// Q40. Use for-loop to console log square numbers from 1 to 10.
// for (let i = 0; i <= 10; i++) {
//   console.log(i*i)
// }


// 6. Advanced JavaScript (10%)
const data = [
  {
    id: 1,
    name: "A",
    age: 20,
  },
  {
    id: 2,
    name: "B",
    age: 21,
  },
  {
    id: 3,
    name: "C",
    age: 22,
  },
];

/* Q41: Write a function with input (argument) is an array, output (return) is one element from input with age is 21. Test with above array. */ 
  const CoderAge = (arr) =>{
    if(Array.isArray(arr)){
        const isAge = arr.filter((e) => e.age === 21)
        console.log(isAge)  
    }else{
        console.log("Pls input array")
    }
    
  }
CoderAge(data);
// Q42: Write a function with input (argument) is an array, converts this array into json format and saves to db.json file. Test with above array.
const CoderJson = (arr) => {
    if(Array.isArray(arr)) {
        const json = JSON.stringify(arr);
        const fs = require('fs');
         fs.writeFile("db.json", json, function(err) {
            if (err) {
                console.log(err);
            }
        });
    }else{
        console.log("Please input array")
    }
    

}
CoderJson(data);
