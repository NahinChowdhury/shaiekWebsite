const line_yellow_ochre = document.querySelector('.line-yellow-ochre');

const top_btn = document.querySelector('.top-btn');


top_btn.addEventListener("click", ()=>{
    window.scrollTo(0,0);
})


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

observerLine.observe(line_yellow_ochre);