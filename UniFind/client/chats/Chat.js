Template.Chat.onCreated(function(){
  var self = this;
  self.autorun(function() {
    var chatId = FlowRouter.getParam('id');
    self.subscribe('singleChat', chatId);
  });

});

Template.Chat.helpers({
  messages: function(){
    let messages = document.getElementById('chat-msg');
    setTimeout(() => {
        messages.scrollTop = messages.scrollHeight;
    }, 300);
    var chat = Chats.findOne({});
    return chat.messages;
  },
  sentByMe: function(sentBy){
    return sentBy === Meteor.userId()? true : false;
  },
  timeStamp: function(){
    var time = this.timeStamp;
    var d = time.getDate();
    var m = time.getMonth() + 1;
    var y = time.getFullYear();
    var h = time.getHours();
    var min = time.getMinutes();
    return "At " + (h<=9 ? '0' + h : h) + ':'
    + (min<=9 ? '0' + min : min) + " , " + (d <= 9 ? '0' + d : d) + '/' + (m<=9 ? '0' + m : m)
     + '/' + y;                        ;
  }
});

Template.Chat.events({
  'submit .sendMsg': function(event){
    event.preventDefault();
    var el = document.getElementById("msg");
    var text = el.value;
    var chatId = FlowRouter.getParam('id');
    var chat = Chats.findOne({});
    if (chat) { // ok - we have a chat to use
        var msgs = chat.messages; // pull the messages property
        /*if (!msgs) { // no messages yet, create a new array
          msgs = [];
        }*/
        msgs.push({
          timeStamp: new Date(),
          sentBy: Meteor.userId(),
          text: text
        });

        Chats.update(chatId, {
          $set: {
            messages: msgs // put the messages array onto the chat object
          }
        }); // update the chat object in the database.

        var target = chat.user1Id === Meteor.userId()? chat.user2Id : chat.user1Id;
        Meteor.call('createChatNotification', chat, target);
      }
    el.value = "";
    el.focus();
  }
});
