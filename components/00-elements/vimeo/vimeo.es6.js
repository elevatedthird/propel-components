class LiteVimeo extends (globalThis.HTMLElement ?? class {}) {
  player = null;
  addPrefetch(e, t, i) {
    let o = document.createElement("link");
    (o.rel = e), (o.href = t), i && (o.as = i), (o.crossorigin = !0), document.head.append(o);
  }
  getThumbnailDimensions() {
    // Ensure we always get a large enough thumbnail.
    return { width: 720, height: 405 };
  }
  connectedCallback() {
    this.videoId = this.getAttribute("videoid");
    let { width: e, height: t } = this.getThumbnailDimensions();
    let i = window.devicePixelRatio || 1;
    i >= 2 && (i *= 0.75),
    (e = Math.round(e * i)),
    (t = Math.round(t * i)),
    fetch(`https://vimeo.com/api/oembed.json?url=https://player.vimeo.com/video/${this.videoId}`)
      .then((e) => e.json())
      .then((i) => {
        let o = i.thumbnail_url;
        (o = o.replace(/-d_[\dx]+/i, `-d_${e}x${t}`)), (this.style.backgroundImage = `url("${o}")`);
      });
    let o = this.querySelector(".ltv-playbtn");
    (this.playLabel = (o && o.textContent.trim()) || this.getAttribute("playlabel") || "Play video"),
    o || (((o = document.createElement("button")).type = "button"), o.setAttribute("aria-label", this.playLabel), o.classList.add("ltv-playbtn"), this.append(o)),
    o.removeAttribute("href"),
    // this.addEventListener("pointerover", LiteVimeo.warmConnections, { once: !0 }),
    this.addEventListener("click", () => this.addIframe(true));
  }
  addIframe(autoplay = false) {
    if (this.classList.contains("ltv-activated")) return;
    let e = document.createElement("iframe");
    (e.width = 640),
    (e.height = 360),
    (e.title = this.playLabel),
    (e.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),
    e.src = `https://player.vimeo.com/video/${encodeURIComponent(this.videoId)}`;
    if (autoplay) {
      e.setAttribute('src', e.getAttribute('src') + '?autoplay=1&muted=1&loop=1&autopause=false');
      e.setAttribute('muted', 'muted');
      e.setAttribute('autoplay', 'autoplay');
      e.setAttribute('loop', 'loop');
      e.setAttribute('autopause', 'false');
    }
    this.append(e);
    if ('Vimeo' in globalThis) {
      this.player = new Vimeo.Player(e);
    } else {
      console.warn('Vimeo Player API not loaded. Please ensure the Vimeo Player script is included.');
    }
    this.classList.add("ltv-activated");
  }
  play () {
    if (this.player) {
      this.player.play();
      this.player.setVolume(0);
    }
  }
  pause () {
    if (this.player) {
      this.player.pause();
      this.player.setVolume(0);
    }
  }
}

globalThis.customElements && !globalThis.customElements.get("lite-vimeo") && globalThis.customElements.define("lite-vimeo", LiteVimeo);

Drupal.behaviors.LiteVimeo = {
  attach: (context) => {
    // Autoplay the video when it comes into view
    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.addIframe(true);
          observer.disconnect();
        }
      });
    };
    const autoplayVideos = once('lite-vimeo', `lite-vimeo[autoplay='true']`, context);
    autoplayVideos.forEach((autoplay) => {
      const observer = new IntersectionObserver(handleIntersect, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the element is visible
      });
      observer.observe(autoplay);
    });
  },
};
