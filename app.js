const btn = document.querySelector(".btn");
let theme = "light";

btn.addEventListener("click", () => {
  if (theme === "light") {
    document.documentElement.classList.add("dark-theme");
    theme = "dark";
    btn.textContent = "Light Theme";
  } else if (theme === "dark") {
    document.documentElement.classList.remove("dark-theme");
    theme = "light";
    btn.textContent = "Dark Theme";
  }
});
