document.querySelectorAll(".progress-bar").forEach(bar=>{
    var value= bar.getAttribute("data-label");
    bar.style.width=`${value}%`;
})
function restartAnimation(){
    var span=document.getElementById("animated-span");
    span.style.animation="none";
    span.offsetWidth;
    
    span.style.animation="fade-in-out 2s  ease-in-out ";
}
setInterval(restartAnimation,3000);

document.addEventListener("DOMContentLoaded", function () {
    const aboutMeSection = document.querySelector(".about-me");
  
    function handleScroll() {
      const sectionPosition = aboutMeSection.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
  
      if (sectionPosition < screenHeight * 0.8) {
        aboutMeSection.classList.add("show");
      }
    }
  
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  });
  document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
      easing: 'ease-in-out',
      once: true,
      duration: 1000,
    });
  });
  


  