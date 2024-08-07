// keep track of previous scroll position
let prevScrollPos = window.scrollY;

window.addEventListener('scroll', function() {
  // current scroll position
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    // user has scrolled up
    document.querySelector('nav').classList.add('show');
  } else {
    // user has scrolled down
    document.querySelector('nav').classList.remove('show');
  }

  // update previous scroll position
  prevScrollPos = currentScrollPos;
});

let darkMode = document.querySelector("#theme-image");
let lightMode = document.querySelector("#light-theme-image");
let tL = document.querySelectorAll(".tl");
let border = document.querySelectorAll(".code-samples");
let repository = document.querySelectorAll(".repository-text");
let repositoryLightLogo = document.querySelectorAll(".gitlogodark");
let repositoryDarkLogo = document.querySelectorAll(".gitlogosmol");

darkMode.onclick = function() {
    darkMode.hidden = true;
    lightMode.hidden = false;
    document.querySelector('body').style.backgroundColor = "#0F0E00";
    document.querySelector('body').style.color = "white"

    tL.forEach(function(element) {
      element.style.color = "black";
    })

    border.forEach(function(sampleBorder) {
        sampleBorder.style.border = "3px solid white"
    });

    repository.forEach(function(repositoryText) {
        repositoryText.style.color = "#d0cfce";
    });

    repositoryLightLogo.forEach(function(lightLogo) {
        lightLogo.hidden = false;
    });

    repositoryDarkLogo.forEach(function(darkLogo) {
        darkLogo.hidden = true;
    });


}

lightMode.onclick = function() {
    darkMode.hidden = false;
    lightMode.hidden = true;
    document.querySelector('body').style.backgroundColor = "#F0F1FF";
    document.querySelector('body').style.color = "black"

  
      border.forEach(function(sampleBorder) {
          sampleBorder.style.border = "3px solid black"
      });
  
      repository.forEach(function(repositoryText) {
          repositoryText.style.color = "#555555";
      });
  
      repositoryLightLogo.forEach(function(lightLogo) {
          lightLogo.hidden = true;
      });
  
      repositoryDarkLogo.forEach(function(darkLogo) {
          darkLogo.hidden = false;
      });
  
}




