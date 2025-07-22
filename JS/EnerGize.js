const burgerMenuShow = document.querySelector(".navBurger");
const showContent = document.querySelector(".burgerMenuContent");
const closeShowContent = document.querySelector(".closeIcon");
const showAnwser = document.querySelector(".showFaqAnwser");
const faqAnwserContent = document.querySelector(".faqAnswer");
const showMinus = document.querySelector(".minus");
const hidePlus = document.querySelector(".plus");

burgerMenuShow.addEventListener("click", () => {
  const isHidden = getComputedStyle(showContent).display;

  if (isHidden === "none") {
    showContent.style.display = "block";
  }
});

closeShowContent.addEventListener("click", () => {
  showContent.style.display = "none";
});

showAnwser.addEventListener("click", () => {
  const isAnwserHidden = getComputedStyle(faqAnwserContent).display;

  if (isAnwserHidden === "none") {
    faqAnwserContent.style.display = "block";
    showMinus.style.display = "block";
    hidePlus.style.display = "none";
  } else {
    faqAnwserContent.style.display = "none";
    showMinus.style.display = "none";
    hidePlus.style.display = "block";
  }
});
