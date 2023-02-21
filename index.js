// // Define an array with the skills
// const skills = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "MongoDB",
//   "Express",
//   "Node",
// ];

// // Get the skills list element from the DOM
// const skillsList = document.getElementById("skills-list");

// // Loop through the skills array and render them as list items
// skills.forEach((skill) => {
//   const listItem = document.createElement("li");
//   listItem.textContent = skill;
//   skillsList.appendChild(listItem);
// });

// Home page section

const firstName = "Malwandla";
const lastName = "Hlungwani";
//const bio =
// "A driven and passionate young professional with an outstanding academic record and a strong desire to excel in the IT/Tech industry.";
const projectsArray = [
  "web and mobile-responsive designs, e-commerce sites, and React applications.",
];

const education = `Wits University and Gidjana High School,
   with A grades in Multivaiable Calculus, 
   Abstruct Mathematics and physical Sciences, 
   Mathematics respectively`;
const email = "hlungwanimalwandlashaun@gmail.com";
const phone = "0609439412";

document.getElementById("firstName").textContent = firstName;
document.getElementById("lastName").textContent = lastName;
//document.getElementById("bio").textContent = bio;
document.getElementById("projectsArray").textContent = projectsArray.forEach(
  (item) => item
);
document.getElementById("education").textContent = education;
document.getElementById("email").textContent = email;
document.getElementById("phone").textContent = phone;

// About me page section

