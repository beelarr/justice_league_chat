{
  Chatty.getJsonData = function () {
    $.ajax({
      url: 'js/chatty.json',
    }).done(function (data) {
      Chatty.renderJsonData(data);
    });
  };
  Chatty.getJsonData();
  // End of Reading json data.

  // Render json data in page.
  Chatty.renderJsonData = function (jsonData, img) {
    let messageContainer = document.querySelector('.message-container');
    let items = ''
    let keys = Object.keys(jsonData)

    keys.forEach(function (item) {
      items += `<p><li class="list-group-item justify-content-between hero-messages">
                <div class="messageHeader"><img src="${img}">
                <h3>Wonder Woman Says:</h3></div>
                    <div class="messageBody"><p>${jsonData[item]}</p>
                    <p><button id="delete-btn" class="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" >
                    <i class="fa fa-trash-o" aria-hidden="true"></i>Delete Message
                    </button></p></div>
                </li></p>`;
    });
    messageContainer.innerHTML = items;
  };
  // End of Render json data in page.
}
