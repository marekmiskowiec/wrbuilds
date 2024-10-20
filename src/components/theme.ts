// Function to set the theme
const setTheme = (themeName: string) => {
  document.body.className = themeName;
  localStorage.setItem("theme", themeName); // Save user preference in localStorage
  updateIcon(themeName); // Update the icon when theme changes
};

// Function to initialize the theme after page load
const initTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.className = savedTheme; // Restore saved theme
    updateIcon(savedTheme); // Set the appropriate icon on load
  } else {
    // Default theme is dark-theme
    setTheme("dark-theme");
  }
};

// Function to update the icon based on the current theme
const updateIcon = (themeName: string) => {
  const icon = document.getElementById("icon") as HTMLImageElement;
  if (themeName === "light-theme") {
    icon.src = "./theme/moon.png";
    icon.alt = "moon";
  } else {
    icon.src = "./theme/sun.png";
    icon.alt = "sun";
  }
};

// Add event listener to the icon that toggles the theme
document.addEventListener("DOMContentLoaded", () => {
  // Initialize the theme on page load
  initTheme();

  // Handle theme switching via icon
  const icon = document.getElementById("icon") as HTMLImageElement;

  icon.onclick = () => {
    // Toggle the theme
    const isLightTheme = document.body.classList.toggle("light-theme");

    const currentTheme = isLightTheme ? "light-theme" : "dark-theme";
    setTheme(currentTheme); // Save and update the theme
  };
});
