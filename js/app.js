document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("dark-mode-toggle");

  // Check if there's a saved dark mode preference
  const isDarkMode = localStorage.getItem("darkMode") === "true";

  // Set the initial state of the toggle based on the saved preference
  darkModeToggle.checked = isDarkMode;

  // Apply dark mode based on the saved preference
  if (isDarkMode) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }

  // Toggle dark mode on checkbox change
  darkModeToggle.addEventListener("change", function () {
    if (darkModeToggle.checked) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });

  // Enable dark mode
  function enableDarkMode() {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "true");
  }

  // Disable dark mode
  function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "false");
  }
});
