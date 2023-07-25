// Get all navigation links with the class "nav-link"
const navLinks = document.querySelectorAll(".nav-link");

// Add a click event listener to each navigation link
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Remove the "active" class from any previously active link
    const activeLink = document.querySelector(".nav-link.active");
    if (activeLink) {
      activeLink.classList.remove("active");
    }

    // Add the "active" class to the clicked link
    link.classList.add("active");
  });
});

// Optionally, add the "active" class to the link corresponding to the current URL
const currentURL = window.location.pathname;
navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentURL) {
    link.classList.add("active");
  }
});

// let current_location = location.pathname.split("/")[1];
// if (current_location === "") return;
// let menu_items = document.querySelectorAll(".nav-link");
// for (let i = 0, len = menu_items.length; i < len; i++) {
//   if (menu_items[i].getAttribute("href").indexOf(current_location) !== -1) {
//     menu_items[i].className = "active";
//   }
// }
function confirmDelete() {
  const result = window.confirm("Are you sure you want to delete this item?");

  if (result) {
    // Add code here to perform the actual delete action (e.g., AJAX request to the server)
    console.log("Delete confirmed!");
    alert("Database Updated!");
  } else {
    // Add code here if the user cancels the delete action
    console.log("Delete canceled!");
    event.preventDefault();
  }
}

function updateMessage() {
  alert("Database Updated!");
}
