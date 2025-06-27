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
    const thumbnails = once('lightbox','[data-micromodal-trigger]', el);
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === '') {
          thumbnail.click();
        }
      });
      thumbnail.addEventListener('click', (e) => {
        e.preventDefault();
        const index = parseInt(thumbnail.getAttribute('data-index'), 10);
        this.glide.go('=' + index);
      });
    });
    glide.mount();
  },
};

Drupal.behaviors.lightboxModal = {
  options: {
    awaitOpenAnimation: true,
    onShow: () => {
      // move to active slide.

        Drupal.behaviors.lightboxGlide.glide.update();
    },
  },
  init(mm, el) {
  }
};