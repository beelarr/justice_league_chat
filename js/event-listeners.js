{
  Chatty.eventsHanglers = function() {
    let messageContainer = document.querySelector('.message-container');
    let userMessage = document.getElementById('userMessage');
    let postMessageBtn = document.getElementById('postMessage');
    let deleteAllMessagesBtn = document.getElementById('deleteAllMessages');
    let superHeroDropDown = document.querySelector('#superhero');

    superHeroDropDown.addEventListener('keypress', function(event) {
      if (event.keyCode === 13 && userMessage.value !== '') {
        Chatty.getUserInput();
      }
    });

    // Delete all messages and clear DOM.
    deleteAllMessagesBtn.addEventListener('click', function() {
      Chatty.deleteAllMessages();
      messageContainer.innerHTML = `<div class="messages-cleared">
                                    All Messages Have Been Cleared<br>
                                    <img src="images/jllogo.png">
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
      if (event.keyCode === 13 && document.activeElement && userMessage.value !== '') {
        Chatty.getUserInput();
      }
    });
  };
  Chatty.eventsHanglers();
}
