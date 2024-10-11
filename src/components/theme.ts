// Funkcja do ustawiania motywu
const setTheme = (themeName: string) => {
  document.body.className = themeName; // Zastępuje wszystkie klasy body wybraną klasą motywu
  localStorage.setItem("theme", themeName); // Zapisuje preferencje użytkownika w localStorage
};

// Funkcja inicjalizująca motyw po załadowaniu strony
const initTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.className = savedTheme; // Przywraca zapisany motyw
  }
};

// Dodajemy event listener na przyciski, które zmieniają motyw
document.addEventListener("DOMContentLoaded", () => {
  // Inicjalizacja motywu przy starcie
  initTheme();

  // Przełączanie motywów za pomocą przycisków
  const themeButtons = document.querySelectorAll(
    ".theme-toggle-btn"
  ) as NodeListOf<HTMLButtonElement>;
  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const theme = button.dataset.theme; // Odczytujemy nazwę motywu z data-theme
      setTheme(theme!); // Dodajemy !, aby poinformować TS, że wartość nie jest null
    });
  });
});
