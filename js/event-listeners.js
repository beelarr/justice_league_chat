{
  Chatty.eventsHanglers = function() {
    let messageContainer = document.querySelector('.message-container');
    let userMessage = document.getElementById('userMessage');
    let postMessageBtn = document.getElementById('postMessage');
    let deleteAllMessagesBtn = document.getElementById('deleteAllMessages');

    // Delete all messages and clear DOM.
    deleteAllMessagesBtn.addEventListener('click', function() {
      Chatty.deleteAllMessages();
      messageContainer.innerHTML = `<div class="messages-cleared">
                                    
                                  <img src="images/justice-league-logo.gif">
                                  </div>`;
    });

    // Deleting a single message.
    messageContainer.addEventListener('click', function(event) {
      Chatty.deleteSingleMessage(event.target.id);
      messageContainer.innerHTML = '';
      Chatty.rewriteMessagesAfterDelete(Chatty.getAllMessages());
    });

    // Append message by clicking post btn.
    postMessageBtn.addEventListener('click', () => {
      Chatty.getUserInput();
    });

    // Append message by enter key.
    userMessage.addEventListener('keyup', function(event) {
      if (event.keyCode === 13) {
        Chatty.getUserInput();
      }
    });
  };
  Chatty.eventsHanglers();
}

