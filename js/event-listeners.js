
let messageContainer = document.querySelector('.message-container');

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

deleteAllMessagesBtn.addEventListener("click", () =>{
	messageContainer.innerHTML = `<p class="messagesCLeared">All Messages Have Been Cleared<br>
								<img src="images/jllogo.png"></p>`;
});


////POST MESSAGES TO THE DOM////////

//this is for the "POST" button
postMessageBtn.addEventListener("click", ()=>{
	Chatty.addMessage();
});

//this is for the "ENTER" key press
userMessage.addEventListener('keyup', function (pushEnter) {
        if (pushEnter.which === 13) {
        Chatty.addMessage();
        }
    });



