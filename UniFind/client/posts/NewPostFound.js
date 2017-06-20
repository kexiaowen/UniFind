Template.NewPostFound.onRendered(function() {
  $('#detailedDesc').val('');
  $('#detailedDesc').trigger('autoresize');
  $('select').material_select();
});

Template.NewPostFound.events({
  "submit .newPostFound"(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const summary = target.summary.value;
    const category = target.category.value;
    const colour = target.colour.value;
    const detailedDesc = target.detailedDesc.value;

    PostsFound.insert({
      summary: summary,
      category: category,
      colour: colour,
      desc: detailedDesc,
      createdAt: new Date(), // current time
      author: this.userId,
    });
    alert("Your post is successfully submitted!");
    $('.newPostFound').trigger('reset');

    console.log(summary);
    console.log(category);
    console.log(colour);
    console.log(detailedDesc);
  },
});
