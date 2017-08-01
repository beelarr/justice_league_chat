let messageContainer = document.querySelector(".message-container");

let userMessage = document.getElementById("userMessage");
let postMessageBtn = document.getElementById("postMessage");
let superHeroDropDown = document.getElementById("superhero");

let enlargeTextBtn = document.getElementById("enlargeText");
let deleteAllMessagesBtn = document.getElementById("deleteAllMessages");
let deleteCurrentMessage = document.getElementById("delete-btn");

//////CLEAR ALL MESSAGES////
/*I tried to connect the chatty.js to delete all messages but 
because we decided to create messages based on selected hero, I didn't know how 
to add those to the array.
*/

deleteAllMessagesBtn.addEventListener("click", () => {
  Chatty.deleteAllMessages();
  messageContainer.innerHTML = `<div class="messages-cleared">All Messages Have Been Cleared<br>
								<img src="images/jllogo.png"></div>`;
});

////POST MESSAGES TO THE DOM////////

//this is for the "POST" button
postMessageBtn.addEventListener("click", () => {
  Chatty.getUserInput();
});

//this is for the "ENTER" key press
userMessage.addEventListener("keyup", function(pushEnter) {
  let messages = Object.keys(Chatty.getAllMessages()).length;

  if (pushEnter.keyCode === 13 && messages === 0) {
    let noMessagesElement = document.querySelector(".messages-cleared");
    messageContainer.remove(noMessagesElement);
    Chatty.getUserInput();
  } else if (pushEnter.keyCode === 13) {
    Chatty.getUserInput();
  }
});
