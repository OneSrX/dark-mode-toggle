document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("dark-mode-toggle");

  // Set initial dark mode state
  setDarkMode(localStorage.getItem("darkMode") === "true");

  // Toggle dark mode on checkbox change
  darkModeToggle.addEventListener("change", toggleDarkMode);

  // Function to set dark mode
  function setDarkMode(isDarkMode) {
    darkModeToggle.checked = isDarkMode;
    if (isDarkMode) enableDarkMode();
    else disableDarkMode();
  }

  // Function to toggle dark mode
  function toggleDarkMode() {
    setDarkMode(darkModeToggle.checked);
  }

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
