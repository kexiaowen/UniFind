Template.EditPostLost.onCreated(function(){
  var self = this;
  self.autorun(function() {
    var id = FlowRouter.getParam('id');
    self.subscribe('singlePostLost', id);
  });
});

Template.EditPostLost.onRendered(function() {
  $('#detailedDesc').trigger('autoresize');
  $('select').material_select();
});

Template.EditPostLost.helpers({
  post: ()=> {
    var id = FlowRouter.getParam('id');
    return PostsLost.findOne({_id: id});
  },
  updatePostId: function() {
    return this._id;
  }
});

Template.EditPostLost.events({
  "submit .editPostLost"(event) {
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
    PostsLost.update(id, {
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
