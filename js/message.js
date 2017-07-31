{
  let messages = {};

  Chatty.getAllMessages = function() {
    return messages;
  };

  Chatty.deleteAllMessages = function() {
    return messages = {};
  };

  
  /**
   * Insert new message to the messages object.
   * 
   * @param {string} : user input (message) 
   * @returns {object} : all messages
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

  /**
   * Deletes a single message id and returns messages object. 
   * 
   * @param {string} : message id 
   * @returns {object} : all messages
   */
  Chatty.deleteSingleMessage = function(id) {
    delete messages[id];
    return messages;
  };

}