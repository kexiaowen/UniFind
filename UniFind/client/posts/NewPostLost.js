Template.NewPostLost.onRendered(function() {
  $('#detailedDesc').val('');
  $('#detailedDesc').trigger('autoresize');
  $('select').material_select();
});

Template.NewPostLost.events({
  'submit .newPostLost'(event) {
    // Prevent default browser form submit
    event.preventDefault();
    var files = document.querySelector('#fileInput').files;

    // Get value from form element
    const target = event.target;
    const summary = target.summary.value;
    const category = target.category.value;
    const colour = target.colour.value;
    const detailedDesc = target.detailedDesc.value;

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
                        + (min<=9 ? '0' + min : min) + ':' + (s<=9 ? '0' + s : s);


    PostsLost.insert({
      summary: summary,
      category: category,
      colour: colour,
      desc: detailedDesc,
      createdAt: formattedDate, // current time
      year: y,
      author: Meteor.userId(),
      file: fileObj,
    });
    alert("Your post is successfully submitted!");
    $('.newPostLost').trigger('reset');
    FlowRouter.go('suggested-posts');

  },
});
