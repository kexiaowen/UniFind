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

    Session.set("searchValue","");
    if (handphoneChecked) {
      Session.set("handphoneChecked", true);
      Session.set("jacketChecked", false);
      Session.set("laptopChecked", false);
      Session.set("thumbdriveChecked", false);
      Session.set("walletChecked", false);
      Session.set("othersChecked", false);
    } else if (jacketChecked) {
      Session.set("handphoneChecked", false);
      Session.set("jacketChecked", true);
      Session.set("laptopChecked", false);
      Session.set("thumbdriveChecked", false);
      Session.set("walletChecked", false);
      Session.set("othersChecked", false);
    } else if (laptopChecked) {
      Session.set("handphoneChecked", false);
      Session.set("jacketChecked", false);
      Session.set("laptopChecked", true);
      Session.set("thumbdriveChecked", false);
      Session.set("walletChecked", false);
      Session.set("othersChecked", false);
    } else if (thumbdriveChecked) {
      Session.set("handphoneChecked", false);
      Session.set("jacketChecked", false);
      Session.set("laptopChecked", false);
      Session.set("thumbdriveChecked", true);
      Session.set("walletChecked", false);
      Session.set("othersChecked", false);
    } else if (walletChecked) {
      Session.set("handphoneChecked", false);
      Session.set("jacketChecked", false);
      Session.set("laptopChecked", false);
      Session.set("thumbdriveChecked", false);
      Session.set("walletChecked", true);
      Session.set("othersChecked", false);
    } else if (othersChecked) {
      Session.set("handphoneChecked", false);
      Session.set("jacketChecked", false);
      Session.set("laptopChecked", false);
      Session.set("thumbdriveChecked", false);
      Session.set("walletChecked", false);
      Session.set("othersChecked", true);
    } else {
      Session.set("handphoneChecked", false);
      Session.set("jacketChecked", false);
      Session.set("laptopChecked", false);
      Session.set("thumbdriveChecked", false);
      Session.set("walletChecked", false);
      Session.set("othersChecked", false);
    }

    // Get value from form element
    const target = event.target;
    const colour = target.colour.value;
    console.log(colour);
  },
});
