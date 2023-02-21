// Define an array with the skills
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "MongoDB",
  "Express",
  "Node",
];

// Get the skills list element from the DOM
const skillsList = document.getElementById("skills-list");

// Loop through the skills array and render them as list items
skills.forEach((skill) => {
  const listItem = document.createElement("li");
  listItem.textContent = skill;
  skillsList.appendChild(listItem);
});
