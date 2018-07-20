/**
 * Toggles the main off-canvase navigation.
 */
const bodyElement = document.querySelector('body');
const containerElement = document.querySelector('.site-container');

document.querySelector('.open-panel').addEventListener('click', function(event) {
  event.preventDefault();
  openPanel();
});

document.querySelector('.close-panel').addEventListener('click', function(event) {
  event.preventDefault();
  closePanel();
});

/**
 * Reveal the panel.
 */
function openPanel() {
  bodyElement.classList.add('panel-on');
  bodyElement.classList.add('panel-animating-in');

  setTimeout(function() {
    bodyElement.classList.remove('panel-animating-in');
    containerElement.addEventListener('click', handleContainerClick);
  }, 800);
}

/**
 * Hide the panel.
 */
function closePanel() {
  bodyElement.classList.remove('panel-on');
  bodyElement.classList.add('panel-animating-out');

  setTimeout(function() {
    bodyElement.classList.remove('panel-animating-out');
    containerElement.removeEventListener('click', handleContainerClick);
  }, 800);
}

/**
 * Handles the click event on the container. Separated
 * declared function, so it can be removed.
 */
function handleContainerClick(event) {
  closePanel();
}
