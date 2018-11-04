$(document).ready(function() {
    $("#accountInformationsForm").validate({
        rules: {
            firstName: {
                required: true,
                minlength: 3
            },
            lastName: {
                required: true,
                minlength: 3
            },
            phoneNumber: {
                required: true,
                minlength: 10,
                maxlength: 10,
                digits: true
            },
            address: {
                required: true,
                minlength: 10
            },
            city: {
                required: true,
                minlength: 3,
            },
            zipCode: {
                required: true,
                minlength: 5,
                maxlength: 5,
                digits: true
            },
            emailAddress: {
                required: true,
                email: true
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
            firstName: {
                required: "Veuillez saisir un prénom.",
                minlength: "La saisie doit être de 3 caractères de long minimum."
            },
            lastName: {
                required: "Veuillez saisir un nom de famille.",
                minlength: "La saisie doit être de 3 caractères de long minimum."
            },
            phoneNumber: {
                required: "Veuillez saisir un numéro de téléphone.",
                minlength: "La saisie doit être de 10 caractères de long.",
                maxlength: "La saisie doit être de 10 caractères de long.",
                digits: "Seuls des chiffres peuvent être saisis."
            },
            address: {
                required: "Veuillez saisir une adresse postale.",
                minlength: "La saisie doit être de 10 caractères de long minimum."
            },
            city: {
                required: "Veuillez saisir une ville.",
                minlength: "La saisie doit être de 3 caractères de long minimum."
            },
            zipCode: {
                required: "Veuillez saisir un code postal.",
                minlength: "La saisie doit être de 5 caractères de long.",
                maxlength: "La saisie doit être de 5 caractères de long.",
                digits: "Seuls des chiffres peuvent être saisis."
            },
            emailAddress: {
                required: "Veuillez saisir une adresse e-mail.",
                email: "Le format de l'adresse e-mail est invalide."
            },
            password: {
                required: "Veuillez saisir un mot de passe.",
                minlength: "La saisie doit être de 5 caractères de long minimum."
            },
            passwordConfirmation: {
                required: "Veuillez re-saisir votre mot de passe.",
                minlength: "La saisie doit être de 5 caractères de long minimum.",
                equalTo: "Les deux saisies de mot de passe ne correspondent pas."
            }
        },
        errorElement : 'div',
        errorClass: 'invalid',
        validClass: 'valid',
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
