{

	
let userMessage = document.getElementById("userMessage");
let superHeroDropDown = document.getElementById("superhero");
let messageContainer = document.querySelector('.message-container');

let superHeroes = {
	"Default Hero": "images/defaultusericon.png",
	"Batman": "images/batmanicon.png",
	"Wonder Woman": "images/wonderwomanicon.png",
	"Superman": "images/supermanicon.png",
	"Flash": "images/flashicon.png"
};

	Chatty.addMessage = function(){
		let userMessageInput = userMessage.value;
		let superHero = superHeroDropDown.value;
		let superHeroImage = superHeroes[superHero];
		let newHeroMessage = document.createElement("p"); 
		newHeroMessage.innerHTML = `<li class="list-group-item justify-content-between hero-messages">
	                <div class="messageHeader">
	                <img src="${superHeroImage}">
	                <h3>${superHero} Says:</h3></div>
	                    <div class="messageBody"><p>${userMessageInput}</p>
	                    <p><button id="delete-btn" class="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" >
	                    <i class="fa fa-trash-o" aria-hidden="true"></i>Delete Message
	                    </button></p></div>
	                </li>`;
	    messageContainer.insertBefore(newHeroMessage, messageContainer.childNodes[0])
		}



}





