{
  Chatty.eventsHanglers = function() {
    let messageContainer = document.querySelector('.message-container');
    let userMessage = document.getElementById('userMessage');
    let postMessageBtn = document.getElementById('postMessage');
    let deleteAllMessagesBtn = document.getElementById('deleteAllMessages');
    let superHeroDropDown = document.querySelector('#superhero');

    $('#superhero').keypress (function(event) {
      if (event.keyCode === 13 && userMessage.value !== '') {
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
      // $('.message-container').replaceWith("");
      messageContainer.innerHTML = '';
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
