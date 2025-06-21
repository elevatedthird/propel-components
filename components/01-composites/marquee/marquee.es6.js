Drupal.behaviors.kineticMarquee = {
  attach(context) {
    const marquees = once("kinetic-marquee", ".marquee", context);
    marquees.forEach((e) => {
      const wrapper = e.querySelector(".marquee-wrapper");
      const items = wrapper.querySelector(".marquee-items");
      const { direction, reverse, gap } = e.dataset;
      const containerSize =
        direction === "horizontal" ? e.scrollWidth : e.scrollHeight;
      const itemsSize =
        direction === "horizontal" ? items.offsetWidth : items.offsetHeight;
      // At minimum, the length of the items must be double the container height/width.
      const numClones = Math.ceil((containerSize * 2) / itemsSize) * 2;
      for (let i = 0; i < numClones; i++) {
        const cloned = items.cloneNode(true);
        cloned.setAttribute("aria-hidden", "true");
        wrapper.appendChild(cloned);
      }
      console.log(
        containerSize,
        itemsSize,
        numClones,
        items.getBoundingClientRect().width,
      );
      // Web animations.
      let trackLength = numClones * itemsSize;
      // Add in gap from flexbox.
      trackLength = trackLength + parseInt(gap, 10) * numClones;
      console.log(`Translate: ${trackLength / 2} Track Length: ${trackLength}`);
      // The effect works by translating exactly half of the track length.
      const keyFrames = [
        {
          transform:
            direction === "horizontal" ? "translateX(0)" : "translateY(0)",
        },
        {
          transform:
            direction === "horizontal"
              ? `translateX(${-trackLength / 2}px)`
              : `translateY(${-trackLength / 2}px)`,
        },
      ];
      // Set the size of the wrapper to match the track length.
      if (direction === "horizontal") {
        wrapper.style.width = `${trackLength}px`;
      } else {
        wrapper.style.height = `${trackLength}px`;
      }
      wrapper.animate(keyFrames, {
        duration: 20000,
        iterations: Infinity,
        easing: "linear",
        fill: "forwards",
        direction: reverse === "true" ? "reverse" : "normal",
      });
      // Debugging.
      // a.pause();
      // const btn = e.querySelector("button");
      // const half = wrapper.children[(numClones / 2) - 1];
      // half.style.backgroundColor = "red";
      // btn.addEventListener("click", () => {
      //   if (a.playState === 'running') {
      //     a.pause();
      //     btn.textContent = "Play";
      //   } else {
      //     a.play();
      //     btn.textContent = "Pause";
      //   }
      // });
    });
  },
};
