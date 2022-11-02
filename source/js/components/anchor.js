const anchorButtons = document.querySelectorAll('.anchor-button');


for(const anchorButton of anchorButtons) {
  anchorButton.addEventListener('click', function(e){
    e.preventDefault();

    if (this.classList.contains('anchor-button')) {
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
}
