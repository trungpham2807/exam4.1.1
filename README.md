
## 1. CLI (5%)
Q1. What is CLI?
Q2. What is the advantage/disadvantage of CLI?
Q3. Which do you prefer, CLI or GUI (Graphical User Interface)? Why?
Q4. Which command to check your current directory?
Q5. Which command to create a new folder/directory?
Q6. Which command to create a new file?
Q7. You are in Desktop folder, which command to make a new directory name coderschool and navigate inside it?
Q8. Which command to delete a file?
Q9. Which command to delete a not-empty folder?
Q10. What does this command do?
`
echo "# test" >> README.md
`
## 2. Git/Github (5%)
Q11. What does . mean in this command:
`
git add .
`
Q12. What does -m mean, is it OK without -m in this command:
`
git commit -m "first commit"
`
Q13. What does -M mean in this command:
`
git branch -M main
`
Q14. What do origin and main mean in these commands:
`
git remote add origin https://github.com/<acc_name>/<repo_name>.git
git push -u origin main
`
Q15. Which command to initialize a git repo in local?

## 3.HTML (10%)
`
<head>
  <meta charset="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
  />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>Document</title>
  <link rel="stylesheet" src="style.css" />
</head>
`
This HTML code for Q16, 17 and 18.

Q16. Inside head tag, what does first meta tag mean?
Q17. Inside head tag, what does second meta tag mean?
Q18. Inside head tag, what is wrong with link tag?
Q19. List some tags that do not have closing tag?
Q20. Give some contexts of using span tag?
Q21. Give 1 example of creating a hyperlink by a tag in html? (answer with HTML code)
Q22. Give 1 example of inserting a picture in html? (answer with HTML code)
Q22. Give 1 example of creating an email link in html? (answer with HTML code)
Q23. Create a form similar to the below picture? (answer with HTML code)

Q24. Create a form with checkboxes similar to the below picture? (answer with HTML code)

Q25. How to add a YouTube video to html? (answer with HTML code)

## 4. CSS (10%)
Q26. Explain box model elements.
Q27. The value in inch of 1 px?
Q28. What is vw/vh?
Q29. List all values of position property? Which one is default value?
Q30. List all values of flex-direction property? Which one is default value?
Q31. List all values of justify-content property? Which one is default value?
Q32. List all values of align-items property? Which one is default value?
Q33. List all values of align-content property? Which one is default value?
Q34. List all values of flex-wrap property? Which one is default value?
Q35. The different between space-between and space-around in align-content property?
Q36. Create a box similar to the picture below? (answer with HTML + CSS code)


## 5. Basic JavaScript (10%)
let i = 3;

for (; i < 5; i++) {
  console.log(i);
}
// for Q37
Q37. What does this code snippet do? Paste it to vscode, try to run and explain.
```
let i = 3;

for (; i < 5; ) {
  console.log(i);
  i += 1;
}
`
// for Q38
Q38. What does this code snippet do? Paste it to vscode, try to run and explain.
`
let i = 3;

for (;;) {
  console.log(i);
  i += 1;
}
`
// for Q39
Q39. What does this code snippet do? Paste it to vscode, try to run and explain.

Q40. Use for-loop to console log square numbers from 1 to 10.

for (<add your code only here>) {
  console.log(i)
}
`
  // ouput: 0 1 4 9 16 25 36 49 64 81 100
  // hint: you can use more than 1 variable in for-loop
  `
I hope that you understand for-loop a little more after these 4 questions.

## 6. Advanced JavaScript (10%)
`
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
`
// for Q41 and 42.
Q41: Write a function with input (argument) is an array, output (return) is one element from input with age is 21. Test with above array.
Q42: Write a function with input (argument) is an array, converts this array into json format and saves to db.json file. Test with above array.

The End of Part 1