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
      categotySelected.push($(this).attr('value'));
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

    if (handphoneChecked) {

    } else if (jacketChecked) {

    } else if (laptopChecked) {

    } else if (thumbdriveChecked) {

    } else if (walletChecked) {

    } else if (othersChecked) {

    }

    // Get value from form element
    const target = event.target;
    const colour = target.colour.value;
    console.log(colour);
  },
});
