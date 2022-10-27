const nextSlider = document.querySelectorAll(".select-btn img")[1];
const prevSlider = document.querySelectorAll(".select-btn img")[0];

const images = Array.from(
  document.querySelectorAll(".image-container .main-image")
);

let slideNumber;

function slideHandling() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.toggle("active");
    document.querySelector(`[data-index = '${i}']`).classList.toggle("active");

    // if (images[i].classList.contains("active")) {
    //   slideNumber = i;
    //   images[slideNumber].classList.remove("active");
    //   document
    //     .querySelector(`[data-index = '${slideNumber}']`)
    //     .classList.remove("active");
    //   if (slideNumber === 0) {
    //     images[++slideNumber].classList.add("active");
    //   }
    //   //   if ((slideNumber = 0)) {
    //   //     images[slideNumber + 1].classList.add("active");
    //   //     document
    //   //       .querySelector(`[data-index = '${slideNumber + 1}']`)
    //   //       .classList.add("active");
    //   //   } else if ((slideNumber = 1)) {
    //   //     images[slideNumber - 1].classList.add("active");
    //   //     document
    //   //       .querySelector(`[data-index = '${slideNumber - 1}']`)
    //   //       .classList.add("active");
    //   //   }
    // }
  }
}

nextSlider.addEventListener("click", slideHandling);
prevSlider.addEventListener("click", slideHandling);
