/**
 * Hero unit parallax.
 *
 * Sets up the hero unit parallax scroll
 * effect. Used on homepage and inner page
 * banners.
 */
const imageElement = document.querySelector('.hero-bg img');
const heroElementWrap = document.querySelector('.section-home-hero .wrap');

window.addEventListener('scroll', function applyParallax() {
  const intensity = 8; // Use number between 5-10
  const scrollPos = window.scrollY;

  // Shift background image, relative to scroll position.
  if (imageElement) {
    imageElement.style.transform = `translate(0, -${scrollPos / intensity}px)`;
  }

  // Fade out and slide up hero.
  if (heroElementWrap) {
    let distance = scrollPos / heroElementWrap.offsetTop;
    let opacity = distance + 1 - distance * 2; // distance => opacity, .1 => .9, .2 => .8, .3 => .7, etc.

    opacity = opacity + 0.2; // Delay start of the effect by 20%.
    opacity = Math.min(Math.max(opacity, 0), 1); // Keep in range 0-1.

    heroElementWrap.style.opacity = opacity;
    heroElementWrap.style.transform = `translate(0, -${distance * 100}px)`;
  }
});
