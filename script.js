// Part 1: Event Handling

// Click event
const clickBtn = document.getElementById("clickBtn");
const clickMessage = document.getElementById("clickMessage");

clickBtn.addEventListener("click", () => {
  clickMessage.textContent = "Button was clicked!";
});

// Mouseover event
const hoverText = document.getElementById("hoverText");
hoverText.addEventListener("mouseover", () => {
  hoverText.textContent = "You hovered over me!";
});

// Part 2: Interactive Elements

// Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
const counter = document.getElementById("counter");
document.getElementById("increment").addEventListener("click", () => {
  count++;
  counter.textContent = count;
});
document.getElementById("decrement").addEventListener("click", () => {
  count--;
  counter.textContent = count;
});

// Part 3: Form Validation
const form = document.getElementById("signupForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  let isValid = true;

  // Clear previous errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    isValid = false;
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Enter a valid email";
    isValid = false;
  }

  // Password validation
  const password = document.getElementById("password").value.trim();
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
    isValid = false;
  }

  // Final message
  const formMessage = document.getElementById("formMessage");
  if (isValid) {
    formMessage.textContent = "Form submitted successfully!";
    form.reset();
  } else {
    formMessage.textContent = "Please fix the errors above.";
  }
});
