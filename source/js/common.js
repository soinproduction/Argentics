// init sliders

(function () {
  "use strict";

  const breakpoint = window.matchMedia("(min-width:1024px)");
  let slider;

  const breakpointChecker = function () {
    if (breakpoint.matches === true) {
      if (slider !== undefined) slider.destroy(true, true);

      return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
  };
  const enableSwiper = function () {
    slider = new Swiper(".index-logo__slider", {
      slidesPerView: "auto",
      spaceBetween: 70,
      loop: true,
      speed: 8000,
      autoplay: {
        delay: 0,
      },
    });
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
})();

(function () {
  "use strict";

  const breakpoint = window.matchMedia("(min-width:1024px)");
  let slider;

  const breakpointChecker = function () {
    if (breakpoint.matches === true) {
      if (slider !== undefined) slider.destroy(true, true);

      return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
  };
  const enableSwiper = function () {
    slider = new Swiper(".partners-logo__slider", {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      speed: 8000,
      autoplay: {
        delay: 0,
      },

    });
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
})();

(function () {
  // technical slider
  "use strict";

  const breakpoint = window.matchMedia("(min-width:1024px)");
  let slider;

  const breakpointChecker = function () {
    if (breakpoint.matches === true) {
      if (slider !== undefined) slider.destroy(true, true);

      return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
  };
  const enableSwiper = function () {
    slider = new Swiper(".technical__slider", {
      slidesPerView: "auto",
      spaceBetween: 0,
      centeredSlides: true,
      loop: true,
      speed: 8000,
      autoplay: {
        delay: 0,
      },
    });
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
})();
// init sliders

// accordion

// const getAccordions = function(className = ".accordion") {
//   return document.querySelectorAll(className);
// }

// const accordions = getAccordions();
// let openedAccordion = null;

// const closeAccordion = function (accordion) {
//   accordion.style.maxHeight = 0;
// };

// const openAccordion = function (accordion) {
//   accordion.style.maxHeight = accordion.scrollHeight + "px";
// };

// const toggleAccordionButton = function (button, className = "active") {
//   button.classList.toggle(className);
// };

// const checkIsAccordionOpen = function(accordion) {
//   return accordion.style.maxHeight && accordion.style.maxHeight !== "0px";
// }

// const accordionClickHandler = function () {
//   toggleAccordionButton(this);

//   const accordionContent = this.nextElementSibling;
//   const isAccordionOpen = checkIsAccordionOpen(accordionContent);

//   if (isAccordionOpen) {
//     closeAccordion(accordionContent);
//     openedAccordion = null;
//   } else {
//     if (openedAccordion != null) {
//       closeAccordion(openedAccordion);
//       const accordionButton = openedAccordion.previousElementSibling
//       toggleAccordionButton(accordionButton);
//     }
//     openAccordion(accordionContent);
//     openedAccordion = accordionContent;
//   }
// }

// const activateAccordion = function(accordions, handler) {
//   for (const accordion of accordions) {
//     accordion.addEventListener('click', handler)
//   }
// }
// activateAccordion(accordions,accordionClickHandler);

// acoordion
const galleryItems = document.querySelectorAll(".gallery-list");
for (const galleryItem of galleryItems) {
  lightGallery(galleryItem, {
    download: false,
  });
}

let header = document.querySelector("header");
const headerHeight = header.offsetHeight;
const body = document.body;

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  if (scrollTop >= 1) {
    header.classList.add("fixed");
  } else if (scrollTop <= 0) {
    header.classList.remove("fixed");
  }
});

let burgerBtns = [...document.querySelectorAll(".burger-button")];
let mobileMenu = document.querySelector(".header__mobile");
for (const burgerBtn of burgerBtns) {
  burgerBtn.addEventListener("click", function () {
    body.classList.toggle("active");
  });
}

lightGallery(document.getElementById("portfolioGallery"), {});

let moreBtn = document.querySelector(".veiw-more");
let moreLists = [...document.querySelectorAll(".portfolio-gallery__list")];
let secondClick = false;
if (moreBtn) {
  moreBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (secondClick) {
      moreBtn.innerHTML = "More Works";
      for (const moreList of moreLists) {
        moreList.style.maxHeight = null;
      }
      secondClick = false;
    } else {
      moreBtn.innerHTML = "roll up";
      for (const moreList of moreLists) {
        moreList.style.maxHeight = moreList.scrollHeight + "px";
      }
      secondClick = true;
    }
  });
}

const overlay = document.querySelector(".overlay");
const overlayHide = document.querySelectorAll("[data-close]");

for (const btn of overlayHide) {
  btn.onclick = function () {
    overlay.classList.remove("active");
  };
}

// закрытие по клику вне окна
if (overlay) {
  overlay.addEventListener("click", function (e) {
    e.stopPropagation();
    let curentTargetWrapper = document.querySelector(".modal-wrapper");
    if (event.target === curentTargetWrapper) {
      overlay.classList.remove("active");
    }
  });
}
// закрытие по Escape
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) {
    overlay.classList.remove("active");
  }
});

// демо для показа.
// для показа модалки после успешной отправки формы, нужно добавить класс active к блоку overlay

const overlayOpen = document.querySelector("[data-open]");

overlayOpen.onclick = showOverlay;
function showOverlay() {
  overlay.classList.add("active");
}

let accButton = document.querySelectorAll(".accordion");
let c;
for (c = 0; c < accButton.length; c++) {
  accButton[c].addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.classList.remove("active");
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.classList.add("active");
    }
  });
}


const getAccordions = function(dataName = "[data-id]") {
  return document.querySelectorAll(dataName);
}

const accordions = getAccordions();
let openedAccordion = null;

const closeAccordion = function (accordion) {
  accordion.style.maxHeight = 0;
};

const openAccordion = function (accordion) {
  accordion.style.maxHeight = accordion.scrollHeight + "px";
};

const toggleAccordionButton = function (button, className = "active") {
  button.classList.toggle(className);
};

const checkIsAccordionOpen = function(accordion) {
  return accordion.style.maxHeight && accordion.style.maxHeight !== "0px";
}

const accordionClickHandler = function () {

  let curentDataNumber = this.dataset.id

  toggleAccordionButton(this);

  const accordionContent = document.querySelector(`[data-content="${curentDataNumber}"]`);
  const isAccordionOpen = checkIsAccordionOpen(accordionContent);

  if (isAccordionOpen) {
    closeAccordion(accordionContent);
    openedAccordion = null;
  } else {
    if (openedAccordion != null) {
      closeAccordion(openedAccordion);
      const accordionButton = document.querySelector(`[data-id="${openedAccordion.dataset.content}"]`)
      toggleAccordionButton(accordionButton);
    }
    openAccordion(accordionContent);
    openedAccordion = accordionContent;
  }
}

const activateAccordion = function(accordions, handler) {
  for (const accordion of accordions) {
    accordion.addEventListener('click', handler)
  }
}
activateAccordion(accordions,accordionClickHandler);
