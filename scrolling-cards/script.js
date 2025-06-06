// get the cards wrapper width

const scrollignCardsContainer = document.getElementById(
  "scrolling-card-wrapper"
);

// gsap code for scrolling cards

gsap.registerPlugin(ScrollTrigger);

let horizontalSection = document.querySelector(".horizontal");

gsap.to(".horizontal", {
  x: () => horizontalSection.scrollWidth * -1,
  xPercent: 100,
  scrollTrigger: {
    trigger: ".horizontal",
    start: "center center",
    // end: '+=1500px',
    end: `+=${scrollignCardsContainer.offsetWidth + 100}`,
    pin: "#horizontal-scoll",
    scrub: true,
    invalidateOnRefresh: true,
    markers: true,
  },
});

//filter functions for cards according to date and time

const dateButtons = document.querySelectorAll("#date-buttons button");
const timeButtons = document.querySelectorAll("#time-buttons button");
const cards = document.querySelectorAll(".card");

console.log("Date buttons:", dateButtons);
console.log("Time buttons:", timeButtons);
console.log("Cards:", cards);

let selectedDate = dateButtons[0].getAttribute("data-date");
let selectedTime = "";

dateButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (selectedDate === btn.getAttribute("data-date")) {
      return;
      // If clicking the same button, deselect it
      selectedDate = "";
      btn.classList.remove("active");
      selectedTime = "";
    } else {
      // Select new date
      selectedDate = btn.getAttribute("data-date");
      highlightActive(dateButtons, btn);
      selectedTime = "";
    }
    console.log("Selected date:", selectedDate);
    filterCards();
  });
});

timeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (selectedTime === btn.getAttribute("data-time")) {
      return;
      // If clicking the same button, deselect it
      selectedTime = "";
      btn.classList.remove("active");
    } else {
      // Select new time
      selectedTime = btn.getAttribute("data-time");
      highlightActive(timeButtons, btn);
    }
    console.log("Selected time:", selectedTime);
    filterCards();
  });
});

function filterCards() {
  console.log(
    "Filtering cards with date:",
    selectedDate,
    "and time:",
    selectedTime
  );

  cards.forEach((card) => {
    const cardDate = card.getAttribute("data-date");
    const cardTime = card.getAttribute("data-time");

    // If no filters are selected, show all cards
    // If date filter is selected, check if card matches the selected date
    // If time filter is selected, check if card matches the selected time
    const matchDate = selectedDate === "" || cardDate === selectedDate;
    const matchTime = selectedTime === "" || cardTime === selectedTime;

    if (matchDate && matchTime) {
      card.style.display = "flex";
      console.log("Showing card with date:", cardDate, "time:", cardTime);
    } else {
      card.style.display = "none";
      console.log("Hiding card with date:", cardDate, "time:", cardTime);
    }
  });
}

console.log("selectedDate", selectedDate, "selectedTime", selectedTime);

function highlightActive(group, activeBtn) {
  group.forEach((btn) => btn.classList.remove("active"));
  activeBtn.classList.add("active");
}

function clearActive(group) {
  group.forEach((btn) => btn.classList.remove("active"));
}

// Optional: Add a clear all filters function
function clearAllFilters() {
  selectedDate = "";
  selectedTime = "";
  clearActive(dateButtons);
  clearActive(timeButtons);
  filterCards();
}

filterCards();




// gsap function for hover card tilt




const el = document.getElementById("full-screen-hover-card");

// Set initial 3D properties using GSAP 3.x syntax
gsap.set(el, {
  transformPerspective: 900,
  transformOrigin: "center center -10px",
});

function onMouseMove(e) {
  const rect = el.getBoundingClientRect();
  const elXPos = rect.left;
  const elYPos = rect.top;
  const width = rect.width;
  const height = rect.height;

  const elRelativeXPos = e.pageX - elXPos;
  const elRelativeYPos = e.pageY - elYPos;
  const xPos = (elRelativeXPos / width - 0.5) * 2;
  const yPos = (elRelativeYPos / height - 0.5) * 2;
  const rotationXValue = 2 * yPos;
  const rotationYValue = -2 * xPos;

  // Use gsap.to instead of TweenLite.to
  gsap.to(el, {
    duration: 1,
    rotationY: rotationYValue,
    rotationX: rotationXValue,
    ease: "expo.out", // Updated ease syntax
    transformOrigin: "center center -10px",
  });
}

function onMouseLeave() {
  // Reset rotation when mouse leaves
  gsap.to(el, {
    duration: 1,
    rotationY: 0,
    rotationX: 0,
    ease: "expo.out",
  });
}

el.addEventListener("mousemove", onMouseMove);
el.addEventListener("mouseleave", onMouseLeave);



