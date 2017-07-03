Template.Chat.onCreated(function(){
  var self = this;
  self.autorun(function() {
    self.subscribe('chats');
  });
});

Template.Chat.helpers({
  messages: function(){
    var chatId = FlowRouter.getParam('id');
    var chat = Chats.findOne({_id: chatId});
    return chat.messages;
  },
  sentByMe: function(sentBy){
    return sentBy === Meteor.userId()? true : false;
  }
});

Template.Chat.events({
  'submit .sendMsg': function(event){
    event.preventDefault();
    var el = document.getElementById("msg");
    var text = el.value;
    var chatId = FlowRouter.getParam('id');
    var chat = Chats.findOne({_id: chatId});
    if (chat) { // ok - we have a chat to use
        var msgs = chat.messages; // pull the messages property
        if (!msgs) { // no messages yet, create a new array
          msgs = [];
        }

        msgs.push({
          timeStamp: new Date().toLocaleString(),
          sentBy: Meteor.userId(),
          text: text
        });

        console.log(msgs);

        Chats.update(chatId, {
          $set: {
            messages: msgs // put the messages array onto the chat object
          }
        }); // update the chat object in the database.
      }
    el.value = "";
    el.focus();
  }
});
