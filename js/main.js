{
  Chatty.getJsonData = function() {
    $.ajax({
      url: "js/chatty.json"
    }).done(function(data) {
      for (item in data) {
        Chatty.insertNewMessage(data[item].message, 0)
      }
      Chatty.writeJsonToDOM (Chatty.getAllMessages());
    });
  };
  Chatty.getJsonData();
  // End of Reading json data.

  // Get user input and inserting into messages object.
  Chatty.getUserInput = function() {
    let userMessage = document.querySelector("#userMessage");
    let userMessageValue = userMessage.value;
    let superHeroKey = superHeroDropDown.value;
    let superHeroName = superHeroDropDown[superHeroKey].getAttribute("name");

    Chatty.insertNewMessage(userMessageValue, superHeroKey);
    Chatty.writeMessageToDOM(
      Chatty.getAllMessages(),
      superHeroKey,
      superHeroName
    );
    userMessage.value = "";
    userMessage.focus();
  };
  // End of Get user input and inserting into messages object.

  // Render data in page.
  Chatty.writeMessageToDOM = function(jsObject, img, name) {
    let ulMessageElement = document.querySelector(".message-container");
    let noMessageElement = document.querySelector(".messages-cleared");
    let liElement = document.createElement("li");
    liElement.classList =
      "list-group-item justify-content-between hero-messages";
    let items = "";
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
  // End of Render data in page.

   // Render JSON data in page.
  Chatty.writeJsonToDOM = function(jsObject, img, name) {
    let ulMessageElement = document.querySelector(".message-container");
    let items = "";
    let keys = Object.keys(jsObject);
    
    keys.forEach(function(item) {
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
