Template.NewPostLost.onRendered(function() {
  $('#detailed-desc').val('');
  $('#detailed-desc').trigger('autoresize');
  $('select').material_select();
});

Template.NewPostLost.events({
  'submit .newPostFound'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const summary = target.summary.value;
    const category = target.category.value;
    const colour = target.colour.value;
    const detailedDesc = target.detailedDesc.value;

    console.log(summary);
    console.log(category);
    console.log(colour);
    console.log(detailedDesc);
  },
});
