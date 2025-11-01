const outerArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Using forEach to iterate through the outer array
outerArray.forEach(innerArray => {
  innerArray.forEach(element => {
    console.log(element); // Access each element of the inner array
  });
});
