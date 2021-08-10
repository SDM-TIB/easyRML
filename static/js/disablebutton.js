$(document).ready(function() {
    $('#addprefixbutton').prop('disabled', true);
  
    function validateNextButton() {
      var buttonDisabled = $('#manualPrefix').val().trim() === '' || $('#manualUrl').val().trim() === '';
      $('#addprefixbutton').prop('disabled', buttonDisabled);
    }
  
    $('#manualPrefix').on('keyup', validateNextButton);
    $('#manualUrl').on('keyup', validateNextButton);
  });