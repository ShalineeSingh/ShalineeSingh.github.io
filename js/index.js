$(document).ready(function () {
  new PanelSnap({
    container: document.body,
    panelSelector: '.section',
    directionThreshold: 50,
    delay: 0,
    duration: 500,
    easing: 'ease-in'
  });
});