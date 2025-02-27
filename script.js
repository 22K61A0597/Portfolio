document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.createElement("button");
    themeToggle.textContent = "Toggle Theme";
    themeToggle.style.position = "fixed";
    themeToggle.style.top = "10px";
    themeToggle.style.right = "10px";
    themeToggle.style.padding = "10px";
    document.body.appendChild(themeToggle);
  
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
    });
  });

 // Tab Switching Functionality
function openTab(event, tabName) {
  const tabContents = document.querySelectorAll('.tab-content');
  const tabLinks = document.querySelectorAll('.tab-link');

  tabContents.forEach(tab => tab.classList.remove('active'));
  tabLinks.forEach(link => link.classList.remove('active'));

  document.getElementById(tabName).classList.add('active');
  event.currentTarget.classList.add('active');
}

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(0);
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth",
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
  const contactBox = document.querySelector(".contact-box");
  
  setTimeout(() => {
      contactBox.style.opacity = "1";
      contactBox.style.transform = "translateY(0)";
  }, 300);
});
