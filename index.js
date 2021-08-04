const images = document.querySelectorAll('.image');
const achievements_texts = document.querySelectorAll(".achievements-text");
const line_blue = document.querySelector('.line-blue');
const line_green = document.querySelector('.line-green');
const line_yellow = document.querySelector('.line-yellow');

// document.addEventListener('scroll', () => {
//     if (window.scrollY >= image.getBoundingClientRect().bottom) {
//         image.classList.add('animation');
//         console.log("in image")
//     }
//     else {
//         image.classList.remove('animation');
//     }
// })

const observerImg1 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('img-animation-1');
      }
    });
});

const observerImg2 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('img-animation-2');
      }else{
        entry.target.classList.add('img-animation-2');
      }
    });
});

const observerText = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('text-animation');
      }
    });
});

const observerLine = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('line-animation');
      }
    });
});

for(let [i, img] of images.entries()){
    
    if(window.innerWidth <= 992){
        observerImg1.observe(img);
        continue;
    }

    if(i == 0){
        observerImg1.observe(img);
    }
    else if(i == 1){
        observerImg2.observe(img);
    }
}

for(let text of achievements_texts){
    observerText.observe(text);
}

observerLine.observe(line_blue);
observerLine.observe(line_green);
observerLine.observe(line_yellow);
