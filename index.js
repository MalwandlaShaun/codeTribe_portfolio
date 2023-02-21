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

// About me page section

const projects = [
  "Netflix Clone",
  "Spotify Clone",
  "E-commerce website",
  "Social media app",
  "And many more",
];

const projectsList = document.getElementById("projects-list");

projects.forEach((project) => {
  const listItem = document.createElement("li");
  listItem.textContent = project;
  projectsList.appendChild(listItem);
});
