$(function () {
    const $form = $("#join-form");
    const $fnameInput = $('#first-name');
    const $lnameInput = $('#last-name');
    const $usernameInput = $('#username');
    const $enrollDate = $('#enrollment-date');
    const $cancelDate = $('#cancel-date');

    function showError($input, message) {
        $form.find('.error').remove();
        const $error = $('<p class="error">')
            .text(message);
        $input.after($error);
    }

    function clearError() {
        $form.find('.error').remove();
    }

    $fnameInput.on("keyup blur", function () {
        if (!/^[a-zA-Z]*$/.test($(this).val())) {
            showError($(this), "FirstName can only contain letters");
        } else {
            clearError($(this));
        }
    });

    $lnameInput.on("keyup blur", function () {
        if (!/^[a-zA-Z]*$/.test($(this).val())) {
            showError($(this), "LastName can only contain letters");
        } else {
            clearError($(this));
        }
    });

    $usernameInput.on("blur", function () {
        if (!/^[0-9]{2}[a-zA-Z]{4,6}$/.test($(this).val())) {
            showError($(this), "Username must be 2 numbers followed by 4\-6 letters");
        } else {
            clearError($(this));
        }
    });

    function validateDates() {
        const enroll = $enrollDate[0] && $enrollDate[0].valueAsDate;
        const cancel = $cancelDate[0] && $cancelDate[0].valueAsDate;

        if (enroll && cancel) {
            if (enroll >= cancel) {
                showError($enrollDate, "Enrollment Date must be before Cancel Date");
            } else {
                clearError($enrollDate);
            }
        } else {
            clearError($enrollDate);
        }
    }

    $enrollDate.add($cancelDate).on("change blur keyup", validateDates);
});
