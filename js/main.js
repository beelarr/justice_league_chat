{
  // Reading json data.
  Chatty.getJsonData = function() {
    let jsonFile = $.getJSON('./js/chatty.json', function(data) {
      console.log('Data: ', data);
    });
  };
  // End of Reading json data.

  // Render json data in page.
  Chatty.renderJsonData = function() {
    let data = Chatty.getJsonData();
    let
  }
  // End of Render json data in page.

}
