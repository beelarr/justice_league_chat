{
  Chatty.getJsonData = function() {
    $.ajax({
      url: 'js/chatty.json'
    }).done(function(data) {
      for (item in data) {
        if (item !== null) {
          Chatty.insertNewMessage(data[item].message, 0);
        }
      }
      Chatty.writeJsonToDOM(Chatty.getAllMessages());
    });
  };
  Chatty.getJsonData();
  // End of Reading json data.

  // Get user input and inserting into messages object.
  Chatty.getUserInput = function() {
    let userMessage = document.querySelector('#userMessage');
    let superHeroDropDown = document.querySelector('#superhero');
    let userMessageValue = userMessage.value;
    let superHeroKey = superHeroDropDown.value;
    let superHeroName = superHeroDropDown[superHeroKey].getAttribute('name');

    Chatty.insertNewMessage(userMessageValue, superHeroKey);
    Chatty.writeMessageToDOM(
      Chatty.getAllMessages(),
      superHeroKey,
      superHeroName
    );
    userMessage.value = '';
    userMessage.focus();
  };
  // End of Get user input and inserting into messages object.

  /**
   * Populate DOM with all messages in object.
   * 
   * @param {object} jsObject : messages object
   * @param {string} img : key to get img path 
   * @param {string} name : value from drop down 
   */
  Chatty.writeMessageToDOM = function(jsObject, img, name) {
    let ulMessageElement = document.querySelector('.message-container');
    let liElement = document.createElement('li');
    liElement.classList =
      'list-group-item justify-content-between hero-messages';
    let items = '';
    let keys = Object.keys(jsObject);

    keys.forEach(function(item) {
      items = `<div class="messageHeader"><img src="${jsObject[item].img}">
                  <h3>${name} Says:</h3>
                </div>
                <div class="messageBody">
                  <p>${jsObject[item].message}</p>
                  <p>
                    <button id="${item}" class="btn btn-danger btn-xs delete-message" data-title="Delete" data-toggle="modal" data-target="#delete" >
                    <i class="fa fa-trash-o" aria-hidden="true"></i>Delete Message</button>
                  </p>
                </div>`;
      liElement.innerHTML = items;
    });
    ulMessageElement.insertBefore(liElement, ulMessageElement.childNodes[0]);
  };

  /**
   * Populate DOM with JSON object on load.
   * 
   * @param {object} jsObject : JSON obj is append to js obj.
   * @param {sting} img : key to get img path
   * @param {string} name :  value from drop down
   */
  Chatty.writeJsonToDOM = function(jsObject, img, name) {
    let ulMessageElement = document.querySelector('.message-container');
    let items = '';
    let keys = Object.keys(jsObject);

    keys.forEach(function(item) {
      items += `<li class="list-group-item justify-content-between hero-messages">
                  <div class="messageHeader"><img src="${jsObject[item].img}">
                  <h3>Concerned Citizen-${parseInt(item) + 1} Says:</h3>
                </div>
                <div class="messageBody">
                  <p>${jsObject[item].message}</p>
                  <p>
                    <button id="${item}" class="btn btn-danger btn-xs delete-message" data-title="Delete" data-toggle="modal" data-target="#delete" >
                    <i class="fa fa-trash-o" aria-hidden="true"></i>Delete Message</button>
                  </p>
                </div>
                </li>`;
    });
    ulMessageElement.innerHTML = items;
  };

  /**
   * Populate the DOM after deleting single message.
   * 
   * @param {object} jsObject : all messages obj
   */
  Chatty.rewriteMessagesAfterDelete = function(jsObject) {
    let ulMessageElement = document.querySelector('.message-container');
    let items = '';
    let keys = Object.keys(jsObject);
    let reversedKeys = keys.reverse();

    reversedKeys.forEach(function(item) {
      items += `<li class="list-group-item justify-content-between hero-messages">
                  <div class="messageHeader"><img src="${jsObject[item].img}">
                  <h3>${name} Says:</h3>
                </div>
                <div class="messageBody">
                  <p>${jsObject[item].message}</p>
                  <p>
                    <button id="${item}" class="btn btn-danger btn-xs delete-message" data-title="Delete" data-toggle="modal" data-target="#delete" >
                    <i class="fa fa-trash-o" aria-hidden="true"></i>Delete Message</button>
                  </p>
                </div>
                </li>`;
    });
    ulMessageElement.innerHTML = items;
  };
  // End of Render JSON data in page.
}
