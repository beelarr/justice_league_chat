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
    let ulMessageElement = document.querySelector(".message-container");
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
                    <button id="${item}" class="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" >
                    <i class="fa fa-trash-o" aria-hidden="true"></i>Delete Message</button>
                  </p>
                </div>`;
      liElement.innerHTML = items;
    });
    // console.log(ulMessageElement.has);
    // if (ulMessageElement.childNodes) {
    //   ulMessageElement.appendChild(liElement);
    // } else {
    //   ulMessageElement.insertBefore(liElement, ulMessageElement.childNodes[0]);
    // }
    ulMessageElement.insertBefore(liElement, ulMessageElement.childNodes[0]);
  };
  // End of Render data in page.
}
