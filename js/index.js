const navbar = document.querySelector(".navbar");

const images = document.querySelectorAll('.image');
const achievements_texts = document.querySelectorAll(".achievements-text");
const line_blue = document.querySelector('.line-blue');
const line_green = document.querySelector('.line-green');
const line_yellow = document.querySelector('.line-yellow');
const line_purple = document.querySelector('.line-purple');

const blur_icons = document.querySelectorAll('.blur-icon');
const read_more_btn = document.querySelector('.read-more');


const operation_titles = document.querySelectorAll('.operation-title'); 

document.addEventListener('scroll', () => {
    if (window.scrollY >= document.querySelector(".heading").offsetHeight) {
        navbar.classList.add("d-none")
    }
    else {
      navbar.classList.remove("d-none")
    }
})

// setHeadingMT();

// window.addEventListener("resize", ()=>{
//   console.log("resizing")
//   formatting sidebars and other elements dynamically
//   setHeadingMT();
//   setMapMarginTop();

// })


read_more_btn.addEventListener("click", ()=>{
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");

  if (!dots.classList.contains("d-inline")) {
    dots.classList.add("d-inline");
    dots.classList.remove("d-none");
    read_more_btn.innerHTML = "Read more";
    moreText.classList.remove("d-inline");
    moreText.classList.add("d-none");
  } else {
    dots.classList.remove("d-inline");
    dots.classList.add("d-none");
    read_more_btn.innerHTML = "Read less";
    moreText.classList.add("d-inline");
    moreText.classList.remove("d-none");
  }
})

for(let [i, icon] of blur_icons.entries()){
  // console.log(icon)
  icon.addEventListener("click", ()=>{
    const img = icon.parentElement.children[1]
    const current_icon = document.querySelectorAll('.blur-icon')[i];
    // console.log(current_icon)
    img.classList.toggle("blur-mask");

    // console.log(current_icon.children[0].src)
    if(current_icon.children[0].src.includes("eye-closed.png")){
      // console.log("in if")
      const str = current_icon.children[0].src.replace("closed", "open");
      // console.log(str)
      current_icon.children[0].src = str;
    }else{
      // console.log("in else")
      current_icon.children[0].src = current_icon.children[0].src.replace("open", "closed");
    }

  })
}


for(let title of operation_titles){
  title.addEventListener("click", ()=>{
    title.parentElement.children[1].classList.toggle("d-none");
  })

}


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
      }
      // else{
      //   entry.target.classList.remove('img-animation-2');
      // }
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

// for(let [i, img] of images.entries()){
    
//     if(window.innerWidth  <= 992){
//         observerImg1.observe(img);
//         continue;
//     }

//     if(i == 0){
//         observerImg1.observe(img);
//     }
//     else if(i == 1){
//         observerImg2.observe(img);
//     }
// }

for(let text of achievements_texts){
    observerText.observe(text);
}

observerLine.observe(line_blue);
observerLine.observe(line_green);
observerLine.observe(line_yellow);
observerLine.observe(line_purple);

function setHeadingMT(){
  document.querySelector(".heading").style.marginTop = `-${document.querySelector("nav").offsetHeight}px`;
  // console.log("Working and navbar: " + document.querySelector("nav").offsetHeight)
}
