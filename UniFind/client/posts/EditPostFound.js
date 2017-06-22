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

    var id = FlowRouter.getParam('id');
    // update form with new inputs
    PostsFound.update(id, {
      $set: {
        summary: summary,
        category: category,
        colour: colour,
        desc: detailedDesc
      }
    });
    alert("Your have successfully updated your post!");
  }
});
