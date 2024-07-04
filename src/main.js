$(document).ready(function(){
  
  $("a").on('click', function(event) {

    if (this.hash !== "") {
     
        event.preventDefault();
        
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

// CATALOG


document.addEventListener('DOMContentLoaded', function () {
	const showMoreBtn = document.querySelector('.catalog-button');

	const hiddenItems = document.querySelectorAll('.catalog-item.hidden');
	const catalogSection = document.getElementById('catalog');

	showMoreBtn.addEventListener('click', function () {
		hiddenItems.forEach(item => item.style.display = 'block');
		showMoreBtn.style.display = 'none';
		showLessBtn.style.display = 'block';
	});

		// Плавна прокрутка до секції Catalog
		catalogSection.scrollIntoView({ behavior: 'smooth' });
	});