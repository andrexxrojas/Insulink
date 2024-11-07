let nav = document.querySelector("nav");
let content = document.querySelector(".container");
let legendBtn = document.querySelector(".legend-btn");
let legendInfo = document.querySelector(".legend-btn .legend-info");
let logo = document.querySelector("nav ul .logo a");
let burgerMenu = document.querySelector("header .burger");
let notifContainer = document.querySelector(".notification-menu");
let notifArr = notifContainer.querySelectorAll("p");
let notifBtn = document.querySelector("nav ul .notif");
let notifCloseBtn = document.querySelector(".notif-close-btn");

logo.addEventListener("click", (e) => e.preventDefault())
burgerMenu.addEventListener("click", toggleNavActive)

function handleNavClick(e) {
  if (e.target.closest("nav")) {
    nav.classList.toggle("inactive");
    content.style.marginLeft = nav.classList.contains("inactive") ? "104px" : "236px";
  }
}

function toggleNavClickEvent() {
  if (window.innerWidth > 768) {
    // notifContainer.style.display = "none"
    nav.addEventListener("click", handleNavClick);
    nav.classList.remove("active");
    content.style.marginLeft = nav.classList.contains("inactive") ? "104px" : "236px";  
} else {
    // notifContainer.style.display = "none"
    nav.removeEventListener("click", handleNavClick);
    nav.classList.add("inactive");
    nav.removeEventListener("click", toggleNavActive)
    nav.addEventListener("click", toggleNavActive)

    content.style.marginLeft = "0px";
  }
}

function toggleNavActive() {
    nav.classList.toggle("active");
}

toggleNavClickEvent();
window.addEventListener("resize", toggleNavClickEvent);

legendBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent click event from bubbling up to body
  legendInfo.style.display = legendInfo.style.display === "none" ? "flex" : "none";
});

document.body.addEventListener("click", (e) => {
  if (legendInfo.style.display !== "none" && !legendInfo.contains(e.target) && !legendBtn.contains(e.target)) {
    legendInfo.style.display = "none";
  }
});

// Toggle display of notification menu when clicking the notification icon
notifBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent click from bubbling up
  notifContainer.style.display = notifContainer.style.display === "none" ? "flex" : "none";
});

notifCloseBtn.addEventListener("click", () => {
  notifContainer.style.display = "none";
})

// Toggle text wrap on individual notification items
notifArr.forEach((notification) => {
  notification.addEventListener("click", () => {
    notification.style.whiteSpace = notification.style.whiteSpace === "nowrap" ? "normal" : "nowrap";
  });
});

// Hide notification menu when clicking outside of it
document.addEventListener("click", (e) => {
  if (!notifContainer.contains(e.target) && !notifBtn.contains(e.target)) {
    notifContainer.style.display = "none";
  }
});

// Prevent hiding when clicking inside the notification menu
notifContainer.addEventListener("click", (e) => {
  e.stopPropagation();
});
