Template.NewPostFound.onRendered(function() {
  $('#detailedDesc').val('');
  $('#detailedDesc').trigger('autoresize');
  $('select').material_select();
});

Template.NewPostFound.onCreated(function () {
  var self = this;
  self.autorun(function() {
    self.subscribe('allPostsLost');
    self.subscribe('images');
  });
});

Template.NewPostFound.events({

  'submit .newPostFound'(event) {
    // Prevent default browser form submit
    event.preventDefault();
    var files = document.querySelector('#fileInput').files;

    // Get value from form element
    const target = event.target;
    const summary = target.summary.value;
    const category = target.category.value;
    const colour = target.colour.value;
    const detailedDesc = target.detailedDesc.value;
    const contact = target.contact.value;
    const timeLimit = target.timeLimit.value;


    if(!summary || !category){
      alert('Please enter the required field!');
      return false;
    }

    if(files.length > 0){
      var fileObj = Images.insert(files[0]);
    }

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    var h = date.getHours();
    var min = date.getMinutes();
    var s = date.getSeconds();
    var formattedDate = '' + y + '-' + (m<=9 ? '0' + m : m) + '-' +
                        (d <= 9 ? '0' + d : d) + ' ' + (h<=9 ? '0' + h : h) + ':'
                        + (min<=9 ? '0' + min : min)


    var newPost = PostsFound.insert({
      summary: summary,
      category: category,
      colour: colour,
      desc: detailedDesc,
      contact: contact,
      createdAt: formattedDate, // current time
      date: date,
      year: y,
      author: Meteor.userId(),
      file: fileObj,
      timeLimit: timeLimit,
      status: "waiting"
    });

    var potentialPosts = PostsLost.find({category: category, status: "waiting"});
    if(potentialPosts){
      potentialPosts.forEach(function(doc){
        var notificationTime = doc.timeLimit;
        if(!notificationTime || notificationTime === "no limit" || Date.parse(doc.date) + notificationTime >= Date.parse(date)){
          var target = doc.author;
          Meteor.call('createGeneralNotification', newPost, target);
        }
        else{

        }
      });
    }

    alert("Your post is successfully submitted!");
    $('.newPostFound').trigger('reset');
    FlowRouter.go('suggested-posts');
  },
});
