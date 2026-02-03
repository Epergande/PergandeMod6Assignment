$(function () {
    let selectedUsername = null;

    $('.open-popover-btn').on('click', function () {


        // dont care about this stuff
        let $selectedRow = $(this).closest('tr');
        let selectedFirstName = $(this).data('member-firstname');
        let selectedlastName = $(this).data('member-lastname');
        let selectedEnrolmentDate = $(this).data('member-enrollmentdate');
        let selectedCancellationDate = $(this).data('member-cancellationdate');
        let selectedPoolAccess = $(this).data('member-poolaccess');
        let selectedSpaAccess = $(this).data('member-spaaccess');
        // start caring again here

        selectedUsername = $(this).data('member-username');
    });

    const $btn = $("#delete-data-btn");
    $btn.on('click', function (e) {
        const username = selectedUsername;

        if (!confirm(`Are you sure you want to delete username: ${username}? This action cannot be undone.`)) {
            return;
        } else {
            let members = JSON.parse(localStorage.getItem('membersData'));

            members = members.filter(m => m.userName !== username);

            localStorage.setItem('membersData', JSON.stringify(members));
            populateMemberTable(members);

            selectedUsername = null;
            $('#delete-edit-popover').removeData('member-username');
            window.location.reload();
        }
    });

});

