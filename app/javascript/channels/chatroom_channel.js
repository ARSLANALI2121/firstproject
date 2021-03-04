import consumer from "./consumer"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
  	console.log("connected to the new channel")
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    //alert (mykey.data);
  	$('#message-container').append(data.my_message)
    scroll_bottom();

  	//console.log(data.mykey)
  }
});
