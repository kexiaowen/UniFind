// Template.TopNavbar.onRendered(function() {
//     $('.dropdown-button').dropdown();
// });
Template.TopNavbar.onRendered(function() {
    $('.dropdown-button').dropdown({
          inDuration: 300,
          outDuration: 225,
          constrain_width: false, // Does not change width of dropdown to that of the activator
          hover: true, // Activate on hover
          gutter: 0, // Spacing from edge
          belowOrigin: true, // Displays dropdown below the button
          alignment: 'left' // Displays dropdown with edge aligned to the left of button
        }
    );
    $(".button-collapse").sideNav({
      closeOnClick: true,
      draggable: true
    });
});

Template.TopNavbar.events({
  'click .logout' (event) {
    Meteor.logout((er)=>{
      if(er) {
        Materialize.toast(er.reason, 4000);
      } else {
        FlowRouter.go('/');
      }
    });
  }
});
