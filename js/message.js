{
  let superHeroes = {
    0: "images/defaultusericon.png",
    1: "images/batmanicon.png",
    2: "images/wonderwomanicon.png",
    3: "images/supermanicon.png",
    4: "images/flashicon.png"
  };

  let messages = {};

  Chatty.getAllSuperHeroes = function() {
    return superHeroes;
  };

  Chatty.getAllMessages = function() {
    return messages;
  };

  Chatty.deleteAllMessages = function() {
    return (messages = {});
  };

  /**
   * Inserts a new message to messages object.
   * 
   * @param {string} : user input 
   * @param {sting} : super hero image key 
   * @returns {object} : all messages
   */
  Chatty.insertNewMessage = function(message, img) {
    let heroesImages = Chatty.getAllSuperHeroes();
    let indexes = Object.keys(messages);

    if (indexes.length === 0) {
      messages[0] = { message: message, imp: superHeroes[img] };
      return messages;
    } else {
      let reverseIndexes = indexes.reverse();
      let lastIndex = parseInt(reverseIndexes[0]);
      messages[lastIndex + 1] = { message: message, imp: superHeroes[img] };
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
