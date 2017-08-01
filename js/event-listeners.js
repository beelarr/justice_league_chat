let messageContainer = document.querySelector(".message-container");
let noMessageElement = document.querySelector(".messages-cleared");

let userMessage = document.getElementById("userMessage");
let postMessageBtn = document.getElementById("postMessage");
let superHeroDropDown = document.getElementById("superhero");

let enlargeTextBtn = document.getElementById("enlargeText");
let deleteAllMessagesBtn = document.getElementById("deleteAllMessages");

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

messageContainer.addEventListener("click", function(event) {
  console.log("Delete Btn: ", event.target.id);
  Chatty.deleteSingleMessage(event.target.id);
});

////POST MESSAGES TO THE DOM////////

//this is for the "POST" button
postMessageBtn.addEventListener("click", () => {
  Chatty.getUserInput();
});

//this is for the "ENTER" key press
userMessage.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    Chatty.getUserInput();
  }
});
