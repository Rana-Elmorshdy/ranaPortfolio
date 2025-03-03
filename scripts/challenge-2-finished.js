const skillsArray = [
  {
    name: "HTML",
    experience: "2022",
    type: "frontend",
  },
  {
    name: "CSS",
    experience: "2022",
    type: "frontend",
  },
  {
    name: "Javascript",
    experience: "2023",
    type: "frontend",
  },
  {
    name: "React",
    experience: "2024",
    type: "frontend",
  },

  {
    name: "php",
    experience: "2022",
    type: "backend",
  },
];

// Add skills dynamically ✅
// Calculate years of experience automatically ✅
const skillsElement = document.querySelector("#skills");

const currentYear = new Date().getFullYear();

const generateListItem = (listItem) => `<li class="skills__column" data-type="${
  listItem.type
}" data-name=${listItem.name}>
<h2 class="skills__title">${listItem.name}</h2>
<span class="skills__years">${currentYear - listItem.experience} Years</span>
</li>`;

const listItemsString = skillsArray
  .map((listItem) => generateListItem(listItem))
  .join("");

const unorderdList = `<ul class="skills__list">${listItemsString}</ul>`;

skillsElement?.insertAdjacentHTML("beforeend", unorderdList);
console.log(skillsArray);
console.log(unorderdList);

/* ✨ Bonus ✨ */
// Add filters to skills section
document.querySelectorAll(".skills__button").forEach((element) => {
  element.addEventListener("click", () => {
    document
      .querySelector(".skills__button--isActive")
      .classList.remove("skills__button--isActive");
    element.classList.add("skills__button--isActive");
    document.querySelector(
      ".skills__list"
    ).classList = `skills__list ${element.dataset.type}`;
  });
});
