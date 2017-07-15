Template.EditPostFound.onCreated(function(){
  var self = this;
  self.autorun(function() {
    var id = FlowRouter.getParam('id');
    self.subscribe('singlePostFound', id);
  });
});

Template.EditPostFound.onRendered(function() {
  $('#detailedDesc').trigger('autoresize');
  $('select').material_select();
});

Template.EditPostFound.helpers({
  post: ()=> {
    var id = FlowRouter.getParam('id');
    return PostsFound.findOne({_id: id});
  },
  updatePostId: function() {
    return this._id;
  }
});

Template.EditPostFound.events({
  "submit .editPostFound"(event) {
    // Prevent default browser form submit
    event.preventDefault();

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

    var files = document.querySelector('#fileInput').files;
    if(files.length > 0){
      var fileObj = Images.insert(files[0]);
    }

    var id = FlowRouter.getParam('id');
    // update form with new inputs
    PostsFound.update(id, {
      $set: {
        summary: summary,
        category: category,
        colour: colour,
        desc: detailedDesc,
        contact: contact,
        file: fileObj,
        timeLimit: timeLimit
      }
    });
    alert("Your have successfully updated your post!");
    FlowRouter.go('view-posts');
  }
});
