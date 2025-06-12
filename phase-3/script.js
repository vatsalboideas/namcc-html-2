if (window.innerWidth > 991) {
  const hoverSection = document.getElementById("hoverSection");
  const followCard = document.getElementById("full-screen-hover-card");

  hoverSection.addEventListener("mouseenter", () => {
    followCard.classList.add("active");
  });

  hoverSection.addEventListener("mouseleave", () => {
    followCard.classList.remove("active");
  });

  hoverSection.addEventListener("mousemove", (e) => {
    const rect = hoverSection.getBoundingClientRect();
    const cardRect = followCard.getBoundingClientRect();

    // Calculate mouse position relative to section
    const x = e.clientX;
    const y = e.clientY;

    // Get card dimensions
    const cardWidth = 550; // Set card width
    const cardHeight = followCard.offsetHeight || 400; // Approximate height

    // Calculate boundaries
    const minX = rect.left + cardWidth / 2;
    const maxX = rect.right - cardWidth / 2;
    const minY = rect.top + cardHeight / 2;
    const maxY = rect.bottom - cardHeight / 2;

    // Constrain coordinates within section boundaries
    const constrainedX = Math.max(minX, Math.min(maxX, x));
    const constrainedY = Math.max(minY, Math.min(maxY, y));

    followCard.style.left = constrainedX + "px";
    followCard.style.top = constrainedY + "px";
  });
}

// // get the cards wrapper width
// const scrollignCardsContainer = document.getElementById(
//   "scrolling-card-wrapper"
// );

// // gsap code for scrolling cards
// gsap.registerPlugin(ScrollTrigger);

// let horizontalSection = document.querySelector(".horizontal");

// // Create the ScrollTrigger animation
// let horizontalScrollTrigger = gsap.to(".horizontal", {
//   x: () => horizontalSection.scrollWidth * -1,
//   xPercent: 100,
//   scrollTrigger: {
//     trigger: ".horizontal",
//     start: "center center",
//     end: () => `+=${horizontalSection.scrollWidth - window.innerWidth}`, // Dynamic end calculation
//     pin: "#horizontal-scoll",
//     scrub: true,
//     invalidateOnRefresh: true,
//     // markers: true,
//   },
// });

// // Navigation buttons functionality
// const prevButton = document.getElementById("prev-btn");
// const nextButton = document.getElementById("next-btn");

// // Get the ScrollTrigger instance AFTER it's created
// let currentScrollTrigger = ScrollTrigger.getAll().find(
//   (st) => st.trigger === horizontalSection
// );

// function scrollToPosition(progress) {
//   if (currentScrollTrigger) {
//     const scrollPosition =
//       currentScrollTrigger.start +
//       (currentScrollTrigger.end - currentScrollTrigger.start) * progress;
//     window.scrollTo({
//       top: scrollPosition,
//       behavior: "smooth",
//     });
//   }
// }

// // Previous button - scroll backwards
// if (prevButton) {
//   prevButton.addEventListener("click", () => {
//     // Get fresh reference to ScrollTrigger
//     currentScrollTrigger = ScrollTrigger.getAll().find(
//       (st) => st.trigger === horizontalSection
//     );
//     const currentProgress = currentScrollTrigger
//       ? currentScrollTrigger.progress
//       : 0;
//     const newProgress = Math.max(0, currentProgress - 0.1); // Move back by 10%
//     console.log(
//       "Previous clicked - Current progress:",
//       currentProgress,
//       "New progress:",
//       newProgress
//     );
//     scrollToPosition(newProgress);
//   });
// }

// // Next button - scroll forwards
// if (nextButton) {
//   nextButton.addEventListener("click", () => {
//     // Get fresh reference to ScrollTrigger
//     currentScrollTrigger = ScrollTrigger.getAll().find(
//       (st) => st.trigger === horizontalSection
//     );
//     const currentProgress = currentScrollTrigger
//       ? currentScrollTrigger.progress
//       : 0;
//     const newProgress = Math.min(1, currentProgress + 0.1); // Move forward by 10%
//     console.log(
//       "Next clicked - Current progress:",
//       currentProgress,
//       "New progress:",
//       newProgress
//     );
//     scrollToPosition(newProgress);
//   });
// }

// //filter functions for cards according to date and time
// const dateButtons = document.querySelectorAll("#date-buttons button");
// const timeButtons = document.querySelectorAll("#time-buttons button");
// const cards = document.querySelectorAll(".card");

// console.log("Date buttons:", dateButtons);
// console.log("Time buttons:", timeButtons);
// console.log("Cards:", cards);

// let selectedDate = dateButtons[0].getAttribute("data-date");
// let selectedTime = "";

// dateButtons.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     if (selectedDate === btn.getAttribute("data-date")) {
//       // If clicking the same button, deselect it
//       selectedDate = "";
//       btn.classList.remove("active");
//       selectedTime = "";
//       timeButtons.forEach((timeBtn) => {
//         timeBtn.classList.remove("active");
//       });
//     } else {
//       // Select new date
//       selectedDate = btn.getAttribute("data-date");
//       highlightActive(dateButtons, btn);
//       selectedTime = "";
//       timeButtons.forEach((timeBtn) => {
//         timeBtn.classList.remove("active");
//       });
//     }
//     console.log("Selected date:", selectedDate);
//     filterCards();
//   });
// });

// timeButtons.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     if (selectedTime === btn.getAttribute("data-time")) {
//       // If clicking the same button, deselect it
//       selectedTime = "";
//       btn.classList.remove("active");
//     } else {
//       // Select new time
//       selectedTime = btn.getAttribute("data-time");
//       highlightActive(timeButtons, btn);
//     }
//     console.log("Selected time:", selectedTime);
//     filterCards();
//   });
// });

// function filterCards() {
//   console.log(
//     "Filtering cards with date:",
//     selectedDate,
//     "and time:",
//     selectedTime
//   );

//   cards.forEach((card) => {
//     const cardDate = card.getAttribute("data-date");
//     const cardTime = card.getAttribute("data-time");

//     // If no filters are selected, show all cards
//     // If date filter is selected, check if card matches the selected date
//     // If time filter is selected, check if card matches the selected time
//     const matchDate = selectedDate === "" || cardDate === selectedDate;
//     const matchTime = selectedTime === "" || cardTime === selectedTime;

//     if (matchDate && matchTime) {
//       card.style.display = "flex";
//       console.log("Showing card with date:", cardDate, "time:", cardTime);
//     } else {
//       card.style.display = "none";
//       console.log("Hiding card with date:", cardDate, "time:", cardTime);
//     }
//   });

//   // IMPORTANT: Refresh ScrollTrigger after filtering cards
//   // This will recalculate the end value based on the new scrollWidth
//   ScrollTrigger.refresh();

//   // Update the ScrollTrigger reference after refresh
//   currentScrollTrigger = ScrollTrigger.getAll().find(
//     (st) => st.trigger === horizontalSection
//   );

//   // Scroll back to the beginning of the horizontal section AFTER refresh
//   setTimeout(() => {
//     const trigger = ScrollTrigger.getAll().find(
//       (st) => st.trigger === horizontalSection
//     );
//     if (trigger) {
//       console.log("Scrolling to trigger start:", trigger.start);
//       window.scrollTo({
//         top: trigger.start,
//         behavior: "smooth",
//       });
//     } else {
//       // Fallback methods if trigger not found
//       console.log("Trigger not found, trying fallback methods");

//       // Method 1: Scroll to horizontal section
//       const horizontalRect = horizontalSection.getBoundingClientRect();
//       const scrollTop = window.pageYOffset + horizontalRect.top;
//       window.scrollTo({
//         top: scrollTop,
//         behavior: "smooth",
//       });

//       // Method 2: If above doesn't work, try scrolling to pin element
//       // const pinElement = document.getElementById("horizontal-scoll");
//       // if (pinElement) {
//       //   window.scrollTo({
//       //     top: pinElement.offsetTop,
//       //     behavior: "smooth"
//       //   });
//       // }
//     }
//   }, 100); // Small delay to ensure ScrollTrigger refresh is complete
// }

// console.log("selectedDate", selectedDate, "selectedTime", selectedTime);

// function highlightActive(group, activeBtn) {
//   group.forEach((btn) => btn.classList.remove("active"));
//   activeBtn.classList.add("active");
// }

// function clearActive(group) {
//   group.forEach((btn) => btn.classList.remove("active"));
// }

// // Optional: Add a clear all filters function
// function clearAllFilters() {
//   selectedDate = "";
//   selectedTime = "";
//   clearActive(dateButtons);
//   clearActive(timeButtons);
//   filterCards();
// }

// filterCards();

// // gsap function for hover card tilt
// const el = document.getElementById("full-screen-hover-card");

// // Set initial 3D properties using GSAP 3.x syntax
// gsap.set(el, {
//   transformPerspective: 5000,
//   transformOrigin: "center center 0px",
// });

// function onMouseMove(e) {
//   const rect = el.getBoundingClientRect();
//   const elXPos = rect.left;
//   const elYPos = rect.top;
//   const width = rect.width;
//   const height = rect.height;

//   const elRelativeXPos = e.pageX - elXPos;
//   const elRelativeYPos = e.pageY - elYPos;
//   const xPos = (elRelativeXPos / width - 0.5) * 2;
//   const yPos = (elRelativeYPos / height - 0.5) * 2;
//   const rotationXValue = 1.5 * yPos;
//   const rotationYValue = 1.5 * xPos;

//   // Use gsap.to instead of TweenLite.to
//   gsap.to(el, {
//     duration: 1,
//     rotationY: rotationYValue,
//     rotationX: rotationXValue,
//     ease: "expo.out", // Updated ease syntax
//     transformOrigin: "center center 0px",
//   });
// }

// function onMouseLeave() {
//   // Reset rotation when mouse leaves
//   gsap.to(el, {
//     duration: 1,
//     rotationY: 0,
//     rotationX: 0,
//     ease: "expo.out",
//   });
// }

// el.addEventListener("mousemove", onMouseMove);
// el.addEventListener("mouseleave", onMouseLeave);

// // // image distortion

// // var myAnimation = new hoverEffect({
// //   parent: document.querySelector(".my-div"),
// //   intensity: 0.3,
// //   image1: "images/myImage1.jpg",
// //   image2: "images/myImage2.jpg",
// //   displacementImage: "images/myDistorsionImage.png",
// // });

gsap.registerPlugin(ScrollTrigger);

let horizontalSection = document.querySelector(".horizontal");
let cards = document.querySelectorAll(".card");
let dateButtons = document.querySelectorAll("#date-buttons button");
let timeButtons = document.querySelectorAll("#time-buttons button");
let indicatorItems = document.querySelectorAll(".indicator-item");

let isScrolling = false;
let scrollTimeout;

gsap.to(".horizontal", {
  x: () => horizontalSection.scrollWidth * -1,
  xPercent: 100,
  scrollTrigger: {
    trigger: ".horizontal",
    start: "center center",
    end: () => `+=${horizontalSection.scrollWidth - window.innerWidth}`,
    pin: "#horizontal-scoll",
    scrub: true,
    invalidateOnRefresh: true,
    onUpdate: throttledUpdateActiveButtons,
  },
});

function throttledUpdateActiveButtons() {
  if (isScrolling) return;

  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    updateActiveButtons();
  }, 50);
}

function updateActiveButtons() {
  const viewportCenter = window.innerWidth / 2;
  let centerCard = null;
  let minDistance = Infinity;

  cards.forEach((card) => {
    const cardRect = card.getBoundingClientRect();
    const cardCenter = cardRect.left + cardRect.width / 2;
    const distance = Math.abs(cardCenter - viewportCenter);

    if (
      distance < minDistance &&
      cardRect.left < viewportCenter &&
      cardRect.right > viewportCenter
    ) {
      minDistance = distance;
      centerCard = card;
    }
  });

  if (centerCard) {
    const activeDate = centerCard.getAttribute("data-date");
    const activeTime = centerCard.getAttribute("data-time");
    const activeSection = `${activeDate}-${activeTime}`;

    dateButtons.forEach((btn) => {
      btn.classList.toggle(
        "active",
        btn.getAttribute("data-date") === activeDate
      );
    });

    timeButtons.forEach((btn) => {
      btn.classList.toggle(
        "active",
        btn.getAttribute("data-time") === activeTime
      );
    });

    indicatorItems.forEach((item) => {
      item.classList.toggle(
        "active",
        item.getAttribute("data-section") === activeSection
      );
    });
  }
}

function scrollToFirstCard(date, time) {
  isScrolling = true;

  const targetCard = document.querySelector(
    `[data-date="${date}"][data-time="${time}"]`
  );
  if (!targetCard) return;

  const cardIndex = Array.from(cards).indexOf(targetCard);
  const totalCards = cards.length;
  const cardWidth = 350 + 32; // card width + gap
  const scrollWidth = horizontalSection.scrollWidth - window.innerWidth;

  const targetPosition = (cardIndex * cardWidth) / scrollWidth;
  const progress = Math.min(Math.max(targetPosition, 0), 1);

  const scrollTrigger = ScrollTrigger.getAll().find(
    (st) => st.trigger === horizontalSection
  );
  if (scrollTrigger) {
    const scrollPosition =
      scrollTrigger.start +
      (scrollTrigger.end - scrollTrigger.start) * progress;
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  }

  setTimeout(() => {
    isScrolling = false;
  }, 1000);
}

const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

prevButton?.addEventListener("click", () => {
  const scrollTrigger = ScrollTrigger.getAll().find(
    (st) => st.trigger === horizontalSection
  );
  const currentProgress = scrollTrigger ? scrollTrigger.progress : 0;
  const newProgress = Math.max(0, currentProgress - 0.15);

  const scrollPosition =
    scrollTrigger.start +
    (scrollTrigger.end - scrollTrigger.start) * newProgress;
  window.scrollTo({
    top: scrollPosition,
    behavior: "smooth",
  });
});

nextButton?.addEventListener("click", () => {
  const scrollTrigger = ScrollTrigger.getAll().find(
    (st) => st.trigger === horizontalSection
  );
  const currentProgress = scrollTrigger ? scrollTrigger.progress : 0;
  const newProgress = Math.min(1, currentProgress + 0.15);

  const scrollPosition =
    scrollTrigger.start +
    (scrollTrigger.end - scrollTrigger.start) * newProgress;
  window.scrollTo({
    top: scrollPosition,
    behavior: "smooth",
  });
});

dateButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetDate = btn.getAttribute("data-date");
    const currentActiveTime =
      document
        .querySelector(".time-buttons button.active")
        ?.getAttribute("data-time") || "day";
    scrollToFirstCard(targetDate, currentActiveTime);
  });
});

timeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetTime = btn.getAttribute("data-time");
    const currentActiveDate =
      document
        .querySelector(".date-buttons-box button.active")
        ?.getAttribute("data-date") || "12";
    scrollToFirstCard(currentActiveDate, targetTime);
  });
});

indicatorItems.forEach((item) => {
  item.addEventListener("click", () => {
    const section = item.getAttribute("data-section");
    const [date, time] = section.split("-");
    scrollToFirstCard(date, time);
  });
});

updateActiveButtons();

window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});
