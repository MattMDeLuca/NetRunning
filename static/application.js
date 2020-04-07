$(document).ready(function(){
    //connect to the socket server.
    var socket = io.connect('http://' + 'localhost' + ':' + '5000' + '/test');
    //var numbers_received = [];
    console.log("This is working!");


    //receive details from server
    socket.on('user_info', function(msg) {
        console.log("Received user name " + msg.user);
        //console.log("Existing message: " + $('#message_log').val())
        //maintain a list of ten numbers
//        if (numbers_received.length >= 10){
//            numbers_received.shift()
//        }
//        numbers_received.push(msg.number);
//        numbers_string = '';
//        for (var i = 0; i < numbers_received.length; i++){
//            numbers_string = numbers_string + '<p>' + numbers_received[i].toString() + '</p>';
//        }
        latest_message = document.getElementById('message_log').innerHTML;
        console.log("This is the latest: " + latest_message)
        if (latest_message == 'undefined') {
            console.log("First message");
            $('#message_log').html(msg.user);
        }
        else {
            console.log("Second Message");
            $('#message_log').html('<p>' + latest_message + '</p>' + '<p>' + msg.user + '</p>');
        }

    });
});