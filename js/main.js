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
  Chatty.renderJsonData = function (jsonData) {
    let messageContainer = document.querySelector('.message-container');
    let items = ''
    let keys = Object.keys(jsonData)

    keys.forEach(function(item) {
      items += `<li class="list-group-item justify-content-between">
                    ${jsonData[item]}
                    <span class="badge badge-default badge-pill">14</span>
                </li>`
    });
    messageContainer.innerHTML = items;
  };
  // End of Render json data in page.
}
