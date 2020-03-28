$(document).ready(function () {
  new PanelSnap({
    container: document.body,
    panelSelector: '.section',
    directionThreshold: 50,
    delay: 0,
    duration: 500,
    easing: 'ease-in'
  });

  $('#sendEmail').click(function () {
    let name = $('#name').val();
    let email = $('#email').val();
    let message = $('#message').val();
    $(location).attr('href', 'mailto:shalinee43@gmail.com?subject=' +
      encodeURIComponent("I checked your GitHub Profile - " + name + ' - ' + email) + "&body=" + encodeURIComponent(message));
  });
});