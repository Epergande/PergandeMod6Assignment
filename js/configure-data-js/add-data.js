$(function () {
    let $form = $("#join-form");
    $form.on('submit', function (e) {
        e.preventDefault();
        const username = $('#username').val();
        const firstname = $('#first-name').val();
        const lastname = $('#last-name').val();
        const enrollDate = $('#enrollment-date').val();
        const cancelDate = $('#cancel-date').val();
        const poolAccess = $('#pool-access').prop('checked');
        const spaAccess = $('#spa-access').prop('checked');

        const newMember = new Member(username, firstname, lastname, enrollDate, cancelDate, poolAccess, spaAccess);

        const members = loadMembers().slice();
        members.push(newMember);

        localStorage.setItem('membersData', JSON.stringify(members));
        populateMemberTable(members);

        alert("New member added: " + firstname + " " + lastname);
        this.reset();
    })
});
