Template.NewPostLost.onRendered(function() {
  $('#detailed-desc').val('');
  $('#detailed-desc').trigger('autoresize');
  $('select').material_select();
});

Template.NewPostLost.events({
  'submit .newPostLost'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const summary = target.summary.value;
    const category = target.category.value;
    const colour = target.colour.value;
    const detailedDesc = target.detailedDesc.value;

    PostsLost.insert({
      summary: summary,
      category: category,
      colour: colour,
      desc: detailedDesc,
      createdAt: new Date(), // current time
      author: this.userId,
    });
    alert("Your post is successfully submitted!");
    $('.newPostLost').trigger('reset');

    console.log(summary);
    console.log(category);
    console.log(colour);
    console.log(detailedDesc);
  },
});
