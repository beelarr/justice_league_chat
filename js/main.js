{
  userMessage = document.querySelector("#userMessage");
  // let superHeroDropDown = document.getElementById("superhero");
  // let messageContainer = document.querySelector('.message-container');

  Chatty.getJsonData = function() {
    $.ajax({
      url: "js/chatty.json"
    }).done(function(data) {
      Chatty.writeMessageToDOM(data);
    });
  };
  Chatty.getJsonData();
  // End of Reading json data.

  Chatty.getUserInput = function() {
    let userMessageInput = userMessage.value;
    let superHeroKey = superHeroDropDown.value;
    let superHeroName = superHeroDropDown[superHeroKey].getAttribute("name");

    // let superHeroImage = superHeroes[superHero];
    Chatty.insertNewMessage(userMessageInput, superHeroKey);
    Chatty.writeMessageToDOM(
      Chatty.getAllMessages(),
      superHeroKey,
      superHeroName
    );
    userMessage.value = "";
    // userMessage.getAttribute(name) = "";
    userMessage.focus();
  };

  // Render data in page.
  Chatty.writeMessageToDOM = function(jsObject, img, name) {
    let messageContainer = document.querySelector(".message-container");
    let ulMessageElement = document.createElement("ul");
    ulMessageElement.classList = 'list-group';
    let items = "";
    let keys = Object.keys(jsObject);
    
    keys.forEach(function(item) {
    console.log('keys: ', jsObject[item].img);
      items = `<li class="list-group-item justify-content-between hero-messages">
                <div class="messageHeader"><img src="${jsObject[item].img}">
                <h3>${name} Says:</h3></div>
                    <div class="messageBody"><p>${jsObject[item].message}</p>
                    <p><button id="delete-btn" class="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" >
                    <i class="fa fa-trash-o" aria-hidden="true"></i>Delete Message
                    </button></p></div>
                </li>`;
      ulMessageElement.innerHTML = items;
    });
    messageContainer.insertBefore(ulMessageElement, messageContainer.childNodes[0]);
  };
  // End of Render data in page.
}
