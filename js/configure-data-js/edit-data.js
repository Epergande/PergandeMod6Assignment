$(function () {
    let selectedUsername = null;
    let selectedFirstName = null;
    let selectedlastName = null;
    let selectedEnrolmentDate = null;
    let selectedCancellationDate = null;
    let selectedPoolAccess = null;
    let selectedSpaAccess = null;
    let $selectedRow = null;

    $('.open-popover-btn').on('click', function () {
        $selectedRow = $(this).closest('tr');
        selectedUsername = $(this).data('member-username');
        selectedFirstName = $(this).data('member-firstname');
        selectedlastName = $(this).data('member-lastname');
        selectedEnrolmentDate = $(this).data('member-enrollmentdate');
        selectedCancellationDate = $(this).data('member-cancellationdate');
        selectedPoolAccess = $(this).data('member-poolaccess');
        selectedSpaAccess = $(this).data('member-spaaccess');
    });
    $("#edit-data-btn").on('click', function (e) {
        e.preventDefault();
        $('#delete-edit-popover').get(0).hidePopover();
        const memberIdCellHtml = $selectedRow.find('td:eq(0)').prop('outerHTML');
        const usernameCellHtml = `<td>${selectedUsername}</td>`;
        const fullNameCellHtml = `
            <td>
                <input type="text" aria-label="First Name" value="${selectedFirstName}" id="edit-first-name" />
                <input type="text" aria-label="Last Name" value="${selectedlastName}" id="edit-last-name" />
            </td>`;

        const enrollmentCellHtml = `<td><input type="date" aria-label="Enrollment Date" value="${selectedEnrolmentDate}" id="edit-enrolment-date"/></td>`;
        const cancelationValue = selectedCancellationDate && selectedCancellationDate !== "N/A" ? selectedCancellationDate : '';
        const cancelationCellHtml = `<td><input type="date" aria-label="Cancellation Date" value="${cancelationValue}" id="edit-cancellation-date"/></td>`;

        const isPoolAccess = (selectedPoolAccess === true);
        const poolCellHtml = `
            <td>
                <select aria-label="Pool Access" id="edit-pool-access">
                    <option value="true" ${isPoolAccess ? 'selected' : ''}>✅</option>
                    <option value="false" ${!isPoolAccess ? 'selected' : ''}>❌</option>
                </select>
            </td>`;

        const isSpaAccess = (selectedSpaAccess === true);
        const spaCellHtml = `
            <td>
                <select aria-label="Spa Access" id="edit-spa-access">
                    <option value="true" ${isSpaAccess ? 'selected' : ''}>✅</option>
                    <option value="false" ${!isSpaAccess ? 'selected' : ''}>❌</option>
                </select>
            </td>`;

        const saveButtonCellHtml = `<td><button type="button" class="save-edit-btn save-button" >💾</button></td>`;

        const newRowHtml = `
            <tr>
                ${memberIdCellHtml}
                ${usernameCellHtml}
                ${fullNameCellHtml}
                ${enrollmentCellHtml}
                ${cancelationCellHtml}
                ${poolCellHtml}
                ${spaCellHtml}
                ${saveButtonCellHtml}
            </tr>`;

        const $newRow = $(newRowHtml);


        $selectedRow.replaceWith($newRow);
        $selectedRow = $newRow;


        $selectedRow.find('.save-edit-btn').on('click', (e) => {
            e.preventDefault();

            const updatedFirstName = $selectedRow.find('#edit-first-name').val();
            const updatedLastName = $selectedRow.find('#edit-last-name').val();
            const updatedEnrolmentDate = $selectedRow.find('#edit-enrolment-date').val();
            const updatedCancellationDate = $selectedRow.find('#edit-cancellation-date').val();
            const updatedPoolAccess = $selectedRow.find('#edit-pool-access').val() === 'true';
            const updatedSpaAccess = $selectedRow.find('#edit-spa-access').val() === 'true';

            let members = loadMembers();
            const memberIndex = members.findIndex(m => m.userName === selectedUsername);
            members[memberIndex].firstName = updatedFirstName;
            members[memberIndex].lastName = updatedLastName;
            members[memberIndex].enrolmentDate = updatedEnrolmentDate;
            members[memberIndex].cancellationDate = updatedCancellationDate || null;
            members[memberIndex].poolAccess = updatedPoolAccess;
            members[memberIndex].spaAccess = updatedSpaAccess;
            localStorage.setItem('membersData', JSON.stringify(members));
            populateMemberTable(members);
            selectedUsername = null;
            $selectedRow = null;
            window.location.reload();
        });
    });
});