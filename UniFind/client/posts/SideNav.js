Template.SideNav.onRendered(function() {
  $('input[type="checkbox"]').on('change', function() {
      $('input[name="' + this.name + '"]').not(this).prop('checked', false);
  });
});

Template.SideNav.events({
  'submit .searchByCategory'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    /*var categorySelected = new Array();
    $('#categories input:checked').each(function() {
      categorySelected.push($(this).attr('value'));
    });
    console.log(categorySelected);
    const test = $('#handphone').prop('checked');
    console.log(test);*/
    const handphoneChecked = $('#handphone').prop('checked');
    const jacketChecked = $('#jacket').prop('checked');
    const laptopChecked = $('#laptop').prop('checked');
    const thumbdriveChecked = $('#thumbdrive').prop('checked');
    const walletChecked = $('#wallet').prop('checked');
    const othersChecked = $('#others').prop('checked');

    const blueChecked = $('#blue').prop('checked');
    const blackChecked = $('#black').prop('checked');
    const greenChecked = $('#green').prop('checked');
    const goldChecked = $('#gold').prop('checked');
    const pinkChecked = $('#pink').prop('checked');
    const yellowChecked = $('#yellow').prop('checked');
    const redChecked = $('#yellow').prop('checked');
    const silverChecked = $('#yellow').prop('checked');
    const othersColourChecked = $('#othersColour').prop('checked');

    Session.set("searchValue","");
    // Session.set("hasQuery", true);
    if (handphoneChecked) {
      FlowRouter.setQueryParams({cat: "Handphone"});
      Session.set("hasCatQuery", true);
      /*Session.set("handphoneChecked", true);
      Session.set("jacketChecked", false);
      Session.set("laptopChecked", false);
      Session.set("thumbdriveChecked", false);
      Session.set("walletChecked", false);
      Session.set("othersChecked", false);*/
    } else if (jacketChecked) {
      FlowRouter.setQueryParams({cat: "Jacket"});
      Session.set("hasCatQuery", true);
      /*Session.set("handphoneChecked", false);
      Session.set("jacketChecked", true);
      Session.set("laptopChecked", false);
      Session.set("thumbdriveChecked", false);
      Session.set("walletChecked", false);
      Session.set("othersChecked", false);*/
    } else if (laptopChecked) {
      FlowRouter.setQueryParams({cat: "Laptop"});
      Session.set("hasCatQuery", true);
      /*Session.set("handphoneChecked", false);
      Session.set("jacketChecked", false);
      Session.set("laptopChecked", true);
      Session.set("thumbdriveChecked", false);
      Session.set("walletChecked", false);
      Session.set("othersChecked", false);*/
    } else if (thumbdriveChecked) {
      FlowRouter.setQueryParams({cat: "Thumbdrive"});
      Session.set("hasCatQuery", true);
      /*Session.set("handphoneChecked", false);
      Session.set("jacketChecked", false);
      Session.set("laptopChecked", false);
      Session.set("thumbdriveChecked", true);
      Session.set("walletChecked", false);
      Session.set("othersChecked", false);*/
    } else if (walletChecked) {
      FlowRouter.setQueryParams({cat: "Wallet"});
      Session.set("hasCatQuery", true);
      /*Session.set("handphoneChecked", false);
      Session.set("jacketChecked", false);
      Session.set("laptopChecked", false);
      Session.set("thumbdriveChecked", false);
      Session.set("walletChecked", true);
      Session.set("othersChecked", false);*/
    } else if (othersChecked) {
      FlowRouter.setQueryParams({cat: "Others"});
      Session.set("hasCatQuery", true);
      /*Session.set("handphoneChecked", false);
      Session.set("jacketChecked", false);
      Session.set("laptopChecked", false);
      Session.set("thumbdriveChecked", false);
      Session.set("walletChecked", false);
      Session.set("othersChecked", true);*/
    } else {
      /*Session.set("handphoneChecked", false);
      Session.set("jacketChecked", false);
      Session.set("laptopChecked", false);
      Session.set("thumbdriveChecked", false);
      Session.set("walletChecked", false);
      Session.set("othersChecked", false);*/
      Session.set("hasCatQuery", false);
    }

    if (blueChecked) {
      FlowRouter.setQueryParams({colour: "blue"});
      Session.set("hasColQuery", true);
    } else if (blackChecked) {
      FlowRouter.setQueryParams({colour: "black"});
      Session.set("hasColQuery", true);
    } else if (greenChecked) {
      FlowRouter.setQueryParams({colour: "green"});
      Session.set("hasColQuery", true);
    } else if (goldChecked) {
      FlowRouter.setQueryParams({colour: "gold"});
      Session.set("hasColQuery", true);
    } else if (pinkChecked) {
      FlowRouter.setQueryParams({colour: "pink"});
      Session.set("hasColQuery", true);
    } else if (blackChecked) {
      FlowRouter.setQueryParams({colour: "yellow"});
      Session.set("hasColQuery", true);
    } else if (yellowChecked) {
      FlowRouter.setQueryParams({colour: "red"});
      Session.set("hasColQuery", true);
    } else if (redChecked) {
      FlowRouter.setQueryParams({colour: "black"});
      Session.set("hasColQuery", true);
    } else if (silverChecked) {
      FlowRouter.setQueryParams({colour: "silver"});
      Session.set("hasColQuery", true);
    } else if (othersColourChecked) {
      FlowRouter.setQueryParams({colour: "others"});
      Session.set("hasColQuery", true);
    } else {
      Session.set("hasColQuery", false);
    }

    // Get value from form element
    /*const target = event.target;
    const colour = target.colour.value;
    console.log(colour);
    FlowRouter.setQueryParams({colour: colour});*/
  },
  'click .reset-btn' : function() {
    Session.set("hasCatQuery", false);
    Session.set("hasColQuery", false);
    FlowRouter.setQueryParams({cat: null, colour:null});
    FlowRouter.reload();
  }
});
