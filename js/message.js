{
  let messages = {};

  Chatty.getAllMessages = function() {
    return messages;
  }

  Chatty.insertNewMessage = function(message) {
    let index = message.length;
    messages[index+1] = message;
  }
}