const initBg = (autoplay = true) => {
    const bgImgsNames = ['boy-1.jpg','girl4.jpg', 'boy3-2.jpg'];
    const bgImgs = bgImgsNames.map(img => "img/" + img);

    $('.tm-container').backstretch(bgImgs, {duration: 2500, fade: 900});

    if(!autoplay) {
      $.backstretch('pause');  
    }    
}

const setBg = id => {
    $.backstretch('show', id);
}

// const setBgOverlay = () => {
//     const windowWidth = window.innerWidth;
//     const bgHeight = $('body').height();
//     const tmBgLeft = $('.tm-bg-left');

//     $('.tm-bg').height(bgHeight);

//     if(windowWidth > 768) {
//         tmBgLeft.css('border-left', `0`)
//                 .css('border-top', `${bgHeight}px solid transparent`);                
//     } else {
//         tmBgLeft.css('border-left', `${windowWidth}px solid transparent`)
//                 .css('border-top', `0`);
//     }
// }

$(document).ready(function () {
    const autoplayBg = false;	// set Auto Play for Background Images
    initBg(autoplayBg);    
    // setBgOverlay();

    const bgControl = $('.tm-bg-control');            
    bgControl.click(function() {
        bgControl.removeClass('active');
        $(this).addClass('active');
        const id = $(this).data('id');                
        setBg(id);
    });

    $(window).on("backstretch.after", function (e, instance, index) {        
        const bgControl = $('.tm-bg-control');
        bgControl.removeClass('active');
        const current = $(".tm-bg-controls-wrapper").find(`[data-id=${index}]`);        
        current.addClass('active');
    });

    // $(window).resize(function() {
    //     setBgOverlay();
    // });
});

const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) activeSlideIndex = 0;
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) activeSlideIndex = slidesLength - 1;
  }
  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));
