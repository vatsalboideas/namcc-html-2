AOS.init();

if (window.innerWidth > 991) {
  // const hoverSection = document.getElementById("hoverSection");
  // const followCard = document.getElementById("full-screen-hover-card");

  // // Variables for smooth following
  // let targetX = 0;
  // let targetY = 0;
  // let currentX = 0;
  // let currentY = 0;
  // let isAnimating = false;

  // // Easing factor (0.1 = slow, 0.3 = fast)
  // const easingFactor = 0.12;

  // // Add styles for better performance
  // followCard.style.willChange = "transform";

  // // Function to check if mouse is within section bounds
  // function isMouseInSection(mouseX, mouseY) {
  //   const rect = hoverSection.getBoundingClientRect();
  //   return (
  //     mouseX >= rect.left &&
  //     mouseX <= rect.right &&
  //     mouseY >= rect.top &&
  //     mouseY <= rect.bottom
  //   );
  // }

  // // Animation function
  // function animate() {
  //   // Calculate the difference
  //   const dx = targetX - currentX;
  //   const dy = targetY - currentY;

  //   // Apply easing
  //   currentX += dx * easingFactor;
  //   currentY += dy * easingFactor;

  //   // Update position
  //   followCard.style.left = currentX + "px";
  //   followCard.style.top = currentY + "px";

  //   // Continue animation if there's still movement
  //   if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
  //     requestAnimationFrame(animate);
  //   } else {
  //     isAnimating = false;
  //   }
  // }

  // // Global mouse position tracking
  // let globalMouseX = 0;
  // let globalMouseY = 0;

  // // Track global mouse position
  // document.addEventListener("mousemove", (e) => {
  //   globalMouseX = e.clientX;
  //   globalMouseY = e.clientY;

  //   // Check if mouse is still in section after any movement
  //   if (!isMouseInSection(globalMouseX, globalMouseY)) {
  //     followCard.classList.remove("active");
  //   }
  // });

  // // Handle scroll events to check mouse position
  // window.addEventListener("scroll", () => {
  //   // After scroll, check if mouse is still within section bounds
  //   if (!isMouseInSection(globalMouseX, globalMouseY)) {
  //     followCard.classList.remove("active");
  //   }
  // });

  // // Handle window resize
  // window.addEventListener("resize", () => {
  //   if (!isMouseInSection(globalMouseX, globalMouseY)) {
  //     followCard.classList.remove("active");
  //   }
  // });

  // hoverSection.addEventListener("mouseenter", () => {
  //   followCard.classList.add("active");
  // });

  // hoverSection.addEventListener("mouseleave", () => {
  //   followCard.classList.remove("active");
  // });

  // hoverSection.addEventListener("mousemove", (e) => {
  //   const rect = hoverSection.getBoundingClientRect();

  //   // Calculate mouse position
  //   const x = e.clientX;
  //   const y = e.clientY;

  //   // Show card if mouse is in section
  //   followCard.classList.add("active");

  //   // Get card dimensions
  //   const cardWidth = 550;
  //   const cardHeight = followCard.offsetHeight || 400;

  //   // CENTER THE CARD ON MOUSE
  //   let centeredX = x - cardWidth / 15;
  //   let centeredY = y - cardHeight / 15;

  //   // Keep card within section boundaries
  //   const minX = rect.left;
  //   const maxX = rect.right - cardWidth;
  //   const minY = rect.top;
  //   const maxY = rect.bottom - cardHeight / 2;

  //   targetX = Math.max(minX, Math.min(maxX, centeredX));
  //   targetY = Math.max(minY, Math.min(maxY, centeredY));

  //   // Start animation if not already running
  //   if (!isAnimating) {
  //     isAnimating = true;
  //     requestAnimationFrame(animate);
  //   }
  // });

  var myAnimation = new hoverEffect({
    parent: document.querySelector(".fullscreen-hover-card"),
    intensity: 0.1,
    image1: "images/thumbnail.png",
    image2: "images/thumbnail.png",
    displacementImage: "images/7.jpg",
    imagesRatio: 0.56,
  });
  var myAnimation = new hoverEffect({
    parent: document.querySelector(".card-middle"),
    intensity: 0.1,
    image1: "images/thumbnail.png",
    image2: "images/thumbnail.png",
    displacementImage: "images/7.jpg",
    imagesRatio: 0.56,
  });

  // gsap function for hover card tilt
  const el = document.getElementById("full-screen-hover-card");

  // Set initial 3D properties using GSAP 3.x syntax
  gsap.set(el, {
    transformPerspective: 5000,
    transformOrigin: "center center 0px",
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
    const rotationXValue = 1.5 * yPos;
    const rotationYValue = 1.5 * xPos;

    // Use gsap.to instead of TweenLite.to
    gsap.to(el, {
      duration: 1,
      rotationY: rotationYValue,
      rotationX: rotationXValue,
      ease: "expo.out", // Updated ease syntax
      transformOrigin: "center center 0px",
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
}

// const scrollignCardsContainer = document.getElementById(
//   "scrolling-card-wrapper"
// );

// // gsap code for scrolling cards
// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// let horizontalSection = document.querySelector(".horizontal");
// let scrollingCardWrapper = document.getElementById("scrolling-card-wrapper");
// let tween;
// let currentScrollTrigger;

// // Navigation elements
// const prevButton = document.getElementById("prev-btn");
// const nextButton = document.getElementById("next-btn");
// const dayButtons = document.querySelectorAll(".day-btn");

// // Day navigation buttons
// dayButtons.forEach((btn) => {
//   btn.addEventListener("click", function (e) {
//     e.preventDefault();
//     const targetSelector = btn.getAttribute("data-target");
//     scrollToTarget(targetSelector);
//     updateDayButtonActive(targetSelector);
//   });
// });

// function scrollToTarget(targetSelector) {
//   let targetElem = document.querySelector(targetSelector);
//   let y = targetElem;

//   if (targetElem && scrollingCardWrapper.contains(targetElem)) {
//     // If target is within the horizontal scroll section
//     let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start;
//     let totalMovement = scrollingCardWrapper.scrollWidth - window.innerWidth;
//     let targetPosition = targetElem.offsetLeft;
//     y = Math.round(
//       tween.scrollTrigger.start + (targetPosition / totalMovement) * totalScroll
//     );
//   }

//   gsap.to(window, {
//     scrollTo: {
//       y: y,
//       autoKill: false,
//     },
//     duration: 1,
//     ease: "power2.out",
//   });
// }

// function updateDayButtonActive(targetSelector) {

//   console.log(targetSelector, "targetkjdshvc")
//   dayButtons.forEach((btn) => {
//     btn.classList.toggle(
//       "active",
//       btn.getAttribute("data-target") === targetSelector
//     );
//   });
// }

// // Create the ScrollTrigger animation
// let createHorizontalScroll = () => {
//   gsap.to(".horizontal", {
//     x: () => horizontalSection.scrollWidth * -1,
//     xPercent: 100,
//     scrollTrigger: {
//       trigger: ".horizontal",
//       start: "center center",
//       end: () => `+=${horizontalSection.scrollWidth - window.innerWidth}`, // Dynamic end calculation
//       pin: "#horizontal-scoll",
//       scrub: true,
//       invalidateOnRefresh: true,
//       // markers: true,
//       onUpdate: (self) => {
//         updateActiveStatesOnScroll(self.progress);
//       },
//     },
//   });
//   currentScrollTrigger = tween.scrollTrigger;
// };

// // Update active states based on scroll position
// function updateActiveStatesOnScroll(progress) {
//   const dayCards = document.querySelectorAll(".card[id]");
//   const totalWidth = scrollingCardWrapper.scrollWidth - window.innerWidth;
//   const currentPosition = progress * totalWidth;

//   let activeDay = "#day-12"; // default

//   dayCards.forEach((card) => {
//     const cardPosition = card.offsetLeft;
//     if (currentPosition >= cardPosition - 100) {
//       // 100px threshold
//       activeDay = "#" + card.id;
//     }
//   });

//   updateDayButtonActive(activeDay);
// }

//
//
//
//
//
//
//
//
//
//
//
//
//

// // Get the ScrollTrigger instance AFTER it's created
// currentScrollTrigger = ScrollTrigger.getAll().find(
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

// createHorizontalScroll();

// window.addEventListener("resize", () => {
//   ScrollTrigger.refresh();
// });

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Variables
let horizontalSection = document.querySelector(".horizontal");
let scrollingCardWrapper = document.getElementById("scrolling-card-wrapper");
let tween;
let currentScrollTrigger;

// Navigation elements
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const dayButtons = document.querySelectorAll(".day-btn");
const toggleDayBtn = document.getElementById("toggle-day");
const toggleNightBtn = document.getElementById("toggle-night");

let currentMode = "day"; // 'day' or 'night'

// Day/Night toggle functionality
toggleDayBtn.addEventListener("click", function () {
  currentMode = "day";
  updateToggleButtons();
  // Navigate to current day's day section
  const activeDay = document.querySelector(".day-btn.active");
  if (activeDay) {
    const target = activeDay.getAttribute("data-target");
    scrollToTarget(target);
  }
});

toggleNightBtn.addEventListener("click", function () {
  currentMode = "night";
  updateToggleButtons();
  // Navigate to current day's night section
  const activeDay = document.querySelector(".day-btn.active");
  if (activeDay) {
    const target = activeDay.getAttribute("data-night-target");
    scrollToTarget(target);
  }
});

function updateToggleButtons() {
  toggleDayBtn.classList.toggle("active", currentMode === "day");
  toggleNightBtn.classList.toggle("active", currentMode === "night");
}

// Individual day buttons - MODIFIED TO AUTO SWITCH TO DAY MODE
dayButtons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    // Update active day button
    dayButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // AUTOMATICALLY SWITCH TO DAY MODE when any date button is clicked
    currentMode = "day";
    updateToggleButtons();

    // Always navigate to the day target (not night)
    const target = btn.getAttribute("data-target");
    scrollToTarget(target);
  });
});

function scrollToTarget(targetSelector) {
  let targetElem = document.querySelector(targetSelector);
  let y = targetElem;

  if (targetElem && scrollingCardWrapper.contains(targetElem)) {
    // If target is within the horizontal scroll section
    let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start;
    let totalMovement = scrollingCardWrapper.scrollWidth - window.innerWidth;
    let targetPosition = targetElem.offsetLeft;
    y = Math.round(
      tween.scrollTrigger.start + (targetPosition / totalMovement) * totalScroll
    );
  }

  gsap.to(window, {
    scrollTo: {
      y: y,
      autoKill: false,
    },
    duration: 1,
    ease: "power2.out",
  });
}

function updateTimeButtonActive(activeTarget) {
  // Update day button based on target
  dayButtons.forEach((btn) => {
    const dayTarget = btn.getAttribute("data-target");
    const nightTarget = btn.getAttribute("data-night-target");

    if (dayTarget === activeTarget) {
      btn.classList.add("active");
      currentMode = "day";
    } else if (nightTarget === activeTarget) {
      btn.classList.add("active");
      currentMode = "night";
    } else {
      btn.classList.remove("active");
    }
  });

  updateToggleButtons();
}

// Create horizontal scroll animation
function createHorizontalScroll() {
  tween = gsap.to(scrollingCardWrapper, {
    x: () => -(scrollingCardWrapper.scrollWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
      trigger: "#horizontal-scroll",
      pin: true,
      start: "center center",
      scrub: 1,
      // markers:true,
      end: () => `+=${scrollingCardWrapper.scrollWidth - window.innerWidth}`,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        updateActiveStatesOnScroll(self.progress);
      },
    },
  });

  currentScrollTrigger = tween.scrollTrigger;
}

// Update active states based on scroll position
function updateActiveStatesOnScroll(progress) {
  const targetCards = document.querySelectorAll(".card[id]");
  const totalWidth = scrollingCardWrapper.scrollWidth - window.innerWidth;
  const currentPosition = progress * totalWidth;

  let activeTarget = "#day-12-day"; // default

  targetCards.forEach((card) => {
    const cardPosition = card.offsetLeft;
    if (currentPosition >= cardPosition - 100) {
      // 100px threshold
      activeTarget = "#" + card.id;
    }
  });

  // Update active button based on current target
  updateTimeButtonActive(activeTarget);
}

// Navigation buttons functionality
function scrollToPosition(progress) {
  if (currentScrollTrigger) {
    const scrollPosition =
      currentScrollTrigger.start +
      (currentScrollTrigger.end - currentScrollTrigger.start) * progress;
    gsap.to(window, {
      scrollTo: {
        y: scrollPosition,
        autoKill: false,
      },
      duration: 0.8,
      ease: "power2.out",
    });
  }
}

prevButton?.addEventListener("click", () => {
  const currentProgress = currentScrollTrigger
    ? currentScrollTrigger.progress
    : 0;
  const newProgress = Math.max(0, currentProgress - 0.15);
  scrollToPosition(newProgress);
});

nextButton?.addEventListener("click", () => {
  const currentProgress = currentScrollTrigger
    ? currentScrollTrigger.progress
    : 0;
  const newProgress = Math.min(1, currentProgress + 0.15);
  scrollToPosition(newProgress);
});

// Initialize
createHorizontalScroll();

// Handle resize
window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});
