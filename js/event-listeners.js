{
  Chatty.eventsHanglers = function() {
      $('#superhero').keypress (function(event) {
      if (event.keyCode === 13 && $('#userMessage').value !== '') {
        Chatty.getUserInput();
      }
    });

    // Delete all messages and clear DOM.
    $("#deleteAllMessages").click(function() {
      Chatty.deleteAllMessages();
      $('.message-container').replaceWith(`<div class="messages-cleared">
                                    
                                  <img src="images/justice-league-logo.gif">
                                  </div>`);
    });

    // Deleting a single message.
    $(".message-container").click(function(event) {
      Chatty.deleteSingleMessage(event.target.id);
      console.log($('.message-container'))
      $('.message-container').innerHTML = '';
      Chatty.rewriteMessagesAfterDelete(Chatty.getAllMessages());
    });

    // Append message by clicking post btn.
    $('#postMessage').click(function () {
      Chatty.getUserInput();
    });

    // Append message by enter key.
    $('#userMessage').keyup (function(event) {
      if (event.keyCode === 13 && document.activeElement && $('#userMessage').value !== '') {
        Chatty.getUserInput();
      }
    });
  };
  Chatty.eventsHanglers();
}
