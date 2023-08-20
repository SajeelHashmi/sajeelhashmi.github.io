const btns = document.querySelectorAll(".navBtn");
const activeBtn = document.querySelector("#activeBtn");
const sections = document.querySelectorAll(".section");
const dot = document.querySelector('.dot');

let dotAnimation
btns.forEach(button => {
  button.addEventListener('click', () => {
    const sectionId = button.getAttribute('data-id');
    
    sections.forEach(section => {
      section.classList.remove('show');
    });
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.add('show');
    }

    const buttonRect = button.getBoundingClientRect();
    const centerX = buttonRect.left + buttonRect.width / 2;
    const centerY = buttonRect.top + buttonRect.height / 2;
    dot.style.transform = `translate(${centerX}px, ${centerY}px)`;

    const animationDuration = 4000; // Duration of the animation in milliseconds
    const radiusX = 80; // Half of the x-diameter
    const radiusY = 40; // Half of the y-diameter

    let startTime = null;
    cancelAnimationFrame(dotAnimation);

    // Update dot position periodically to create circular animation
    setTimeout(() => {
    dotAnimation =  requestAnimationFrame(animate);

    }, 500);
    function animate(time) {
      if (!startTime) startTime = time;
      const progress = (time - startTime) / animationDuration;
    
 
    
      const angle = progress * 2 * Math.PI;
      const dotX =  radiusX * Math.cos(angle);
      const dotY =  radiusY * Math.sin(angle);

      dot.style.left = `${dotX - dot.clientWidth / 2}px`;
      dot.style.top = `${dotY - dot.clientHeight / 2}px`;
    
 
        requestAnimationFrame(animate);
      
    }

  });
  if( button.getAttribute('data-id')=="aboutMe")
  {
    button.click()
  }
  
});

