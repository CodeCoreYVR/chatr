$(document).ready(function(){

  var loadMessages = function() {
    $.get("/messages", function(messages){
      $("ul#messages").html("");
      for(var i = 0; i < messages.length; i++) {
        var li = "<li data-id=" + messages[i].id  + ">" +
                    messages[i].body + "<i>x</i></li>";
        $("ul#messages").prepend(li);
      }
    });
  }

  $("form").on("submit", function(event){
    event.preventDefault();
    var body = $("textarea").val();

    // $.post("/messages", {body: body }, loadMessages);
    $.ajax({
      method:  "POST",
      url:     "/messages",
      data:    {body: body},
      success: loadMessages,
      error:   function() { alert("ERROR!"); }
    });

    $("textarea").val("");
    $("textarea").focus();
  });

  loadMessages();

});
