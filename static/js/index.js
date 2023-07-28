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

function preview() {
  frame.src = URL.createObjectURL(event.target.files[0]);
  document.getElementById("i").setAttribute("src", "democlass");
}

var inputFile = document.getElementById("brand_logo");
removeImg = () => {
  document.getElementById("frame").setAttribute("src", "");
  document.getElementById("i").setAttribute("src", "");
  inputFile.value = "";
};
var customFile = document.getElementById("customFile");
removeComputerImg = () => {
  document.getElementById("frame").setAttribute("src", "");
  document.getElementById("i").setAttribute("src", "");
  customFile.value = "";
};

// function togglePopup() {
//   document.getElementById("popup-1").classList.toggle("active");
//   console.log("Button Clicked.");
//   // element.innerHTML = "This is Active";
// }
let verticalValue;
document.addEventListener("scroll", () => {
  const vertical = window.scrollY; // Getting vertical scrollbar position
  const horizontal = window.scrollX; // Getting horizontal scrollbar position

  verticalValue = vertical;
});

function openForm(y) {
  // let x = document.getElementById("number").innerHTML;
  // console.log(x);
  // let elem = document.getElementById("myForm-" + y);
  // let rect = elem.getBoundingClientRect();
  // console.log(rect["y"]);
  element = document.getElementById("element-box-" + y);
  let yaxis = element.scrollHeight;
  console.log(yaxis);
  console.log(verticalValue);
  let xaxis = element.scrollWidth;
  if (verticalValue > 600) {
    document.getElementById("myForm-" + y).style.top = "130%";
    console.log("middle div");
  } else if (verticalValue > 300) {
    document.getElementById("myForm-" + y).style.top = "100%";
    console.log("bottom div");
  }

  document.getElementById("myForm-" + y).style.display = "block";
  // if (vertical > 300) {
  //   document.getElementById("myForm-" + y).style.top = "130%";
  //   console.log("bottom div");
  // } else {
  //   document.getElementById("myForm-" + y).style.top = "55%";
  // }
  // document.getElementById("myForm-" + y).style.top = "130%";
  // if (screen.height) {
  //   link.style.top = "-200%";
  // } else {
  //   link.style.top = "100%";
  // }
  // document.getElementById("myForm-" + y).style.display = "block";
  console.log("Clicked");
  // return x;
}

function closeForm(x) {
  // x = document.getElementById("number");
  console.log(x);
  document.getElementById("myForm-" + x).style.display = "none";
}

x;
