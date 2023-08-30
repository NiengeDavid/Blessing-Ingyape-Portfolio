//Scroll effects for sm
// Selected all menu buttons
const menuButtons = document.querySelectorAll(".btn");

//click event listener to each button
menuButtons.forEach((button) => {
  button.addEventListener("click", scrollToSection);
});

// Scroll to the target section
function scrollToSection(event) {
  // Get the target section ID from the button's data-target attribute
  const targetSectionId = event.target.getAttribute("data-target");

  // Find the target section element
  const targetSection = document.getElementById(targetSectionId);

  // Scroll to the target section using smooth behavior
  targetSection.scrollIntoView({ behavior: "smooth" });
}