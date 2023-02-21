const name = "Malwandla";
  const surname = "Hlungwani";
  const education = "Gidjana High School";
  const university = "Wits University";
  const major = "BSc in Chemistry and Mathematics";
  const courses = "freecodecamp and sololearn online courses on web development and more";
  
  document.getElementById("name").textContent = name;
  document.getElementById("surname").textContent = surname;
  document.getElementById("education").textContent = education;
  document.getElementById("university").textContent = university;
  document.getElementById("major").textContent = major;
  document.getElementById("courses").textContent = courses;

  
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