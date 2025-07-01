/**
 * Lightbox, a combination of Glide.js and MicroModal.js.
 */

Drupal.behaviors.lightboxGlide = {
  glide: null,
  options: {
    perView: 1,
    rewind: false,
    gap: 0,
    dragThreshold: false,
    animationDuration: 0,
  },
  init(glide, el) {
    this.glide = glide;
    const lightbox = el.closest('.lightbox');
    const thumbnails = once('lightbox-glide','[data-micromodal-trigger]', lightbox);
    // Add click event to thumbnails to open the lightbox.
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener('keydown', (e) => {
        if (e.code === 'Enter' || e.code === 'Space') {
          thumbnail.click();
        }
      });
      thumbnail.addEventListener('click', (e) => {
        e.preventDefault();
        const index = parseInt(thumbnail.getAttribute('data-index'), 10);
        this.glide.go('=' + index);
      });
    });
    glide.on('mount.after', () => {
      const prevArrow = el.querySelector('.glide__arrow--left');
      if (glide.index === 0) {
        prevArrow.classList.add('opacity-0');
        prevArrow.setAttribute('aria-hidden', 'true');
        prevArrow.setAttribute('tabindex', '-1');
        prevArrow.setAttribute('disabled', 'true');
      }
    });
    glide.on('run.after', () => {
      // If the current slide is playing a video, stop it.
      console.log('run.after', glide.index);
      const prevArrow = el.querySelector('.glide__arrow--left');
      const nextArrow = el.querySelector('.glide__arrow--right');
      const lightbox = el.closest('.lightbox');
      const maxItems = parseInt(lightbox.dataset.maxItems, 10);
      if (glide.index === 0) {
        prevArrow.classList.add('opacity-0');
        prevArrow.setAttribute('aria-hidden', 'true');
        prevArrow.setAttribute('tabindex', '-1');
        prevArrow.setAttribute('disabled', 'true');
      }
      else {
        prevArrow.classList.remove('opacity-0');
        prevArrow.removeAttribute('aria-hidden');
        prevArrow.removeAttribute('tabindex');
        prevArrow.removeAttribute('disabled');
      }
      if (glide.index >= maxItems - 1) {
        nextArrow.classList.add('opacity-0');
        nextArrow.setAttribute('aria-hidden', 'true');
        nextArrow.setAttribute('tabindex', '-1');
        nextArrow.setAttribute('disabled', 'true');
      }
      else {
        nextArrow.classList.remove('opacity-0');
        nextArrow.removeAttribute('aria-hidden');
        nextArrow.removeAttribute('tabindex');
        nextArrow.removeAttribute('disabled');
      }
      // Make the height of the track the same as the active slide.
      const activeSlide = el.querySelector('.glide__slide--active');
      const track = el.querySelector('.glide__track');
      const height = activeSlide.offsetHeight;
      track.style.height = `${height}px`;
    });
    glide.mount();
  },
};

Drupal.behaviors.lightboxModal = {
  options: {
    awaitOpenAnimation: true,
    onShow: () => Drupal.behaviors.lightboxGlide.glide.update(),
  },
  init(mm, el) {
  }
};