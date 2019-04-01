/* coté client */
(function($) {
    socket = io.connect("http://localhost:8888/");
    $("#loginform").submit(function(event){
        event.preventDefault();
        socket.emit("login", {
            username: $('#username').val(),
            mail: $('#mail').val();
        })
    })
})(jQuery);