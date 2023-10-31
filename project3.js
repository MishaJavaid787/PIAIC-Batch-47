//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName = 'Mehwish Javaid Chaudhry';
//lowercase name
let lowercaseName = personName.toLowerCase(); 
console.log(lowercaseName);

//Uppercase name
let uppercaseName = personName.toUpperCase();
console.log(uppercaseName);

//Titlecase name
let titlecaseName = personName.split(" ").map((l) => l[0].toUpperCase() + l.slice(1)).join(" ");
console.log(titlecaseName);


