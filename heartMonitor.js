let nav = document.querySelector("nav")
let content = document.querySelector(".container")

nav.addEventListener("click", (e) => {
    if(e.target == nav) {
        if(nav.classList.contains("inactive")) {
            nav.classList.remove("inactive")
            content.style.marginLeft = "236px"
        } else {
            nav.classList.add("inactive")
            content.style.marginLeft = "104px";
        }
    }
})

// When clicking on notification menu
let notifArr = document.querySelectorAll(".notification-menu .notif p");

notifArr.forEach((notification) => {
    notification.addEventListener("click", () => {
        const currentWhiteSpace = window.getComputedStyle(notification).whiteSpace;
        
        if(currentWhiteSpace === "nowrap") {
            notification.style.whiteSpace = "normal";
        } else {
            notification.style.whiteSpace = "nowrap";
        }
    })
});

// When clicking notification icon
let notifBtn = document.querySelector("nav ul .notif")
let notifMenu = document.querySelector(".notification-menu")

notifBtn.addEventListener("click", () => {
    let notifDisplay = window.getComputedStyle(notifMenu).display

    if(notifDisplay == "none") {
        notifMenu.style.display = "flex"
    }
})

document.addEventListener("click", (e) => {
    if (!notifMenu.contains(e.target) && !notifBtn.contains(e.target)) {
        notifMenu.style.display = "none"
    }
})

// Prevent menu from closing when clicking inside it
notifMenu.addEventListener("click", (e) => {
    e.stopPropagation();
})

// Populating chart
document.addEventListener("DOMContentLoaded", function () {
    let myChart = document.getElementById("myChart").getContext("2d");

    new Chart(myChart, {
        type: "line",
        data:{
            labels: Array.from({length: 50}, (_, i) => i),
            datasets: [{
                label: "Heart Rate Monitor",
                data: [1, 1, 40, 50,4,5,6,7,78,8,7,5,5,34,23,23,42,34,234],
                borderColor: 'red',
                borderWidth: 2,
                fill: false,
                tension: 0.4
            }]
        },
        options: {
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Time (seconds)'
                    }
                },
                y: {
                    display: true,
                    suggestedMin: -30,
                    suggestedMax: 30,
                    title: {
                        display: true,
                        text: 'Heart Rate'
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'linear'
            }
        }
    });
});