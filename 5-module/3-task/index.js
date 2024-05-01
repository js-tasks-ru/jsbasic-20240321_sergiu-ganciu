/**
 * Move carousel slides on buttons clicks
 * @returns {}
 */
function initCarousel() {
  const carouselArrows = Array.from(document.querySelectorAll('.carousel__arrow'));
  const countSlides = document.querySelectorAll('.carousel__slide').length;
  const slideWidth = document.querySelector('.carousel__inner').offsetWidth;
  let carouselInner = document.querySelector('.carousel__inner');
  let translateWidth = 0;
  carouselArrows[1].style.display = 'none';

  carouselArrows.forEach(carouselArrow => {
    carouselArrow.addEventListener('click', () => {
      if (carouselArrow.classList.contains('carousel__arrow_right')){
        translateWidth += slideWidth;
        carouselInner.style.transform = "translateX(-" + translateWidth + "px)";

        //if last slide - hide right arrow
        if ((countSlides-1) * slideWidth == translateWidth){
          carouselArrow.style.display = 'none';
        }

        //display left arrow when carousel has been moved from first slide
        if (translateWidth == slideWidth){
          carouselArrows[1].style.display = '';
        }
      }
      else {
        translateWidth -= slideWidth;
        carouselInner.style.transform = "translateX(-" + translateWidth + "px)";
        
        //if first slide - hide left arrow
        if (translateWidth == 0){
          carouselArrow.style.display = 'none';
        }

        //display right arrow when carousel has been moved from last slide
        if ((countSlides-1) * slideWidth > translateWidth){
          carouselArrows[0].style.display = '';
        }
      }
    });
  });
}
