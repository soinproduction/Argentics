
// init sliders


(function () {
  "use strict";

  const breakpoint = window.matchMedia("(min-width:1024px)");
  let slider;

  const breakpointChecker = function () {
    if (breakpoint.matches === true) {
      if (slider !== undefined)
      slider.destroy(true, true);

      return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
  };
  const enableSwiper = function () {
    slider = new Swiper(".index-logo__slider", {
      slidesPerView: 'auto',
      spaceBetween: 70,
      loop: true,
      speed: 8000,
      autoplay: {
        delay: 0,
      },
      // pagination: {
      //   el: ".swiper-pagination",
      // },
      // breakpoints: {
      //   320: {
      //     slidesPerView: 3,
      //     spaceBetween: 10,
      //   },
      //   576: {
      //     slidesPerView: 4,
      //     spaceBetween: 15,
      //   },
      //   768: {
      //     slidesPerView: 5,
      //     spaceBetween: 15,
      //   },
      // },
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
      if (slider !== undefined)
        slider.destroy(true, true);

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
      // pagination: {
      //   el: ".swiper-pagination",
      // },
      // breakpoints: {
      //   320: {
      //     slidesPerView: 3,
      //     spaceBetween: 10,
      //   },
      //   576: {
      //     slidesPerView: 4,
      //     spaceBetween: 15,
      //   },
      //   768: {
      //     slidesPerView: 5,
      //     spaceBetween: 15,
      //   },
      // },
    });
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
})();

(function () { // technical slider
  "use strict";

  const breakpoint = window.matchMedia("(min-width:1024px)");
  let slider;

  const breakpointChecker = function () {
    if (breakpoint.matches === true) {
      if (slider !== undefined)
      slider.destroy(true, true);

      return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
  };
  const enableSwiper = function () {
    slider = new Swiper(".technical__slider", {
    slidesPerView: 'auto',
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    speed: 8000,
    autoplay: {
      delay: 0,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    // },
    // breakpoints: {
    //   320: {
    //     slidesPerView: 3,
    //     spaceBetween: 10,
    //   },
    //   576: {
    //     slidesPerView: 4,
    //     spaceBetween: 15,
    //   },
    //   768: {
    //     slidesPerView: 5,
    //     spaceBetween: 15,
    //   },
    // },
  });
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
})();

// init sliders

// tabs

// tabParents.forEach(function (tabParent) {
//   let tabNavs = tabParent.querySelectorAll("[data-tab]");
//   let tabPanes = tabParent.querySelectorAll("[data-tab-content]");

//   for (let i = 0; i < tabNavs.length; i++) {
//     tabNavs[i].addEventListener("click", function (e) {
//       e.preventDefault();
//       let activeTabAttr = e.target.getAttribute("data-tab");

//       for (let j = 0; j < tabNavs.length; j++) {
//         let contentAttr = tabPanes[j].getAttribute("data-tab-content");

//         if (activeTabAttr === contentAttr) {
//           tabNavs[j].classList.add("active");
//           tabPanes[j].classList.add("active");
//         } else {
//           tabNavs[j].classList.remove("active");
//           tabPanes[j].classList.remove("active");
//         }
//       }
//     });
//   }
// });

// tabs


// select

// if (select.length) {
//   select.forEach((item) => {
//     const selectCurrent = item.querySelector(".select__current");
//     item.addEventListener("click", (event) => {
//       const el = event.target.dataset.choice;
//       const text = event.target.innerText;
//       if (el === "choosen" && selectCurrent.innerText !== text) {
//         selectCurrent.innerText = text;
//       }
//       item.classList.toggle("is-active");
//     });
//   });
// }

// select

// accordion
let acc = document.querySelectorAll(".accordion");
let i;



for (i = 0; i < acc.length; i++) {
  acc[0].click()
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
// acoordion

const galleryItems = document.querySelectorAll(".gallery-list");
for (const galleryItem of galleryItems) {
  lightGallery(galleryItem, {
    download: false,
  });
}

let header = document.querySelector("header");

const headerHeight = header.offsetHeight;
const body = document.querySelector("main");

// console.log(document.documentElement.clientWidth)

// function autoPadding() {
//   const headerHeightResize = document.querySelector("header").offsetHeight
//   const body = document.querySelector("main");

//   if (document.documentElement.clientWidth < 1050) {
//     body.style.paddingTop = headerHeightResize + 'px';
//   } else {
//     body.style.paddingTop = 0;
//   }

// } autoPadding();


// window.addEventListener('resize', function() {
//   autoPadding();
// })

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  if (scrollTop >= 1) {
    header.classList.add("fixed");
  } else if (scrollTop <= 0) {
    header.classList.remove("fixed");
  }
});

// let scrollTop = body.scrollTop;
// console.log(scrollTop);

// body.addEventListener('scroll', function(){
//   let scrollTop = body.scrollTop;

// });

lightGallery(document.getElementById('portfolioGallery'),{
  // subHtmlSelectorRelative: true,
  // addClass: 'fixed-size',
  // appendSubHtmlTo: '.lg-empty-html'
});

let moreBtn = document.querySelector('.veiw-more');
let moreLists = [...document.querySelectorAll('.portfolio-gallery__list')];
let secondClick = false;

if (moreBtn) {
  moreBtn.addEventListener('click', function(e){
    e.preventDefault()
    if (secondClick) {
      moreBtn.innerHTML = 'More Works';
      for (const moreList of moreLists) {
        moreList.style.maxHeight = null;
      }
      secondClick = false;
    } else {
      moreBtn.innerHTML = 'roll up';
      for (const moreList of moreLists) {
        moreList.style.maxHeight = moreList.scrollHeight + "px";
      }
      secondClick = true;
    };
  });
}
