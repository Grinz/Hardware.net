function checkEmptyFields(form) {
    if (form.firstName.value == "" || myform.myname.value == null)
    {
        alert("Name is mandatory");
        return false;
    }
    
    if (myform.phoneNumber.value == "" || myform.phoneNumber.value == null)
    {
        alert("Phone number is mandatory");
        return false;
    }
    else {
        return true;
    }
}

$(document).ready(function() {
    $("#formValidate").validate({
        rules: {
            firstName: {
                required: true,
                minlength: 5
            },
            password: {
                required: true,
                minlength: 5
            },
            passwordConfirmation: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            }
        },
        //For custom messages
        messages: {
            firstName:{
                required: "Enter a username",
                minlength: "Enter at least 5 characters"
            }
        },
        errorElement : 'div',
        errorPlacement: function(error, element) {
          var placement = $(element).data('error');
          if (placement) {
            $(placement).append(error)
          } else {
            error.insertAfter(element);
          }
        }
     });
});
