{
  let messages = {};

  Chatty.getAllMessages = function() {
    return messages;
  };

  Chatty.deleteAllMessages = function() {
    return messages = {};
  };

  /**
   * Inserts a new message into the messages object.
   *
   * @param message {string} : new message
   * @returns {object} : all messages object
   */
  Chatty.insertNewMessage = function(message) {
    let indexes = Object.keys(messages);
    if (indexes.length === 0) {
      messages[0] = message;
      return messages;
    } else {
      let reverseIndexes = indexes.reverse()
      let lastIndex = parseInt(reverseIndexes[0])
      messages[lastIndex+1] = message;
      return messages;
    }
  };

  Chatty.deleteSingleMessage = function(id) {
    return delete messages[id];
    return messages;
  };

}