Drupal.behaviors.kineticMarquee = {
  attach(context) {
    const marquees = once("kinetic-marquee", ".marquee", context);
    function createAnimation(containerSize, items, direction, gap, wrapper, duration, reverse) {
      // At minimum, the length of the items must be double the container height.
      const numClones = Math.ceil((containerSize * 2) / (direction === 'horizontal' ? items.offsetWidth : items.offsetHeight)) * 2;
      for (let i = 0; i < numClones; i++) {
        const cloned = items.cloneNode(true);
        cloned.setAttribute("aria-hidden", "true");
        cloned.classList.add('marquee-items--clone');
        wrapper.appendChild(cloned);
      }
      // Web animations.
      let translate = numClones * (direction === 'horizontal' ? items.offsetWidth : items.offsetHeight);
      // Add in gap from flexbox.
      translate = translate + (parseInt(gap, 10) * numClones);
      if (direction === 'horizontal') {
        wrapper.style.width = `${translate}px`;
      }
      else {
        wrapper.style.height = `${translate}px`;
      }
      const keyFrames = [
        { transform: direction === 'horizontal' ? 'translateX(0)' : 'translateY(0)' },
        { transform: direction === 'horizontal' ? `translateX(${-translate/2}px)` : `translateY(${-translate/2}px)` }
      ];
      return wrapper.animate( keyFrames,
        {
          duration: parseInt(duration, 10) || 40000,
          iterations: Infinity,
          easing: 'linear',
          fill: 'forwards',
          direction: reverse === 'true' ? 'reverse' : 'normal',
        }
      );
    }
    marquees.forEach((e) => {
      const wrapper = e.querySelector(".marquee-wrapper");
      const items = wrapper.querySelector(".marquee-items");
      const { direction, reverse, gap, duration } = e.dataset;
      const containerSize = direction === 'horizontal'
        ? e.scrollWidth
        : e.scrollHeight;
      let animation = createAnimation(containerSize, items, direction, gap, wrapper, duration, reverse);
      wrapper.addEventListener('mouseenter', () => {
        animation.pause();
      });
      wrapper.addEventListener('focus', () => {
        animation.pause();
      });
      wrapper.addEventListener('mouseleave', () => {
        animation.play();
      });
      wrapper.addEventListener('blur', () => {
        animation.play();
      });
      // Todo: Refactor to use resize observer.
      document.body.addEventListener('resize', () => {
        animation.cancel();
        animation = null;
        // Delete all the clones.
        const clones = wrapper.querySelectorAll('.marquee-items--clone');
        clones.forEach((clone) => {
          wrapper.removeChild(clone);
        });
        animation = createAnimation(containerSize, items, direction, gap, wrapper, duration, reverse);
      });
    });
  },
};
