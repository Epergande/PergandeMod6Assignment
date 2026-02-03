function createMemberTableRow(member) {
    const cancellation = (member.cancellationDate === null || member.cancellationDate === "") ? "N/A" : member.cancellationDate;
    const pool = member.poolAccess ? "✅" : "❌";
    const spa = member.spaAccess ? "✅" : "❌";
    return `<tr>
            <td class="member-table-row"  >${member.id}</td>
            <td class="member-table-row"  >${member.userName}</td>
            <td class="member-table-row"  >${member.firstName} ${member.lastName}</td>
            <td class="member-table-row"  >${member.enrolmentDate}</td>
            <td class="member-table-row"  >${cancellation}</td>
            <td class="member-table-row"  >${pool}</td>
            <td class="member-table-row"  >${spa}</td>
            <td class="member-table-row popover-btn-row"><button class="open-popover-btn"
             data-member-username="${member.userName}"
             data-member-firstName="${member.firstName}"
             data-member-lastname="${member.lastName}"
             data-member-enrollmentDate="${member.enrolmentDate}"
             data-member-cancellationDate="${member.cancellationDate}"
             data-member-poolAccess="${member.poolAccess}"
             data-member-spaAccess="${member.spaAccess}"

             popovertarget="delete-edit-popover">✏️</button></td>
        </tr>`;
}

function populateMemberTable(members) {
    const $memberTable = $('#members-table');
    $memberTable.html(`<tr>
        <th id="table-id" class="clickable" scope="col">ID</th>
        <th id="table-username" class="clickable" scope="col">Username</th>
        <th id="table-fullName" class="clickable" scope="col">Name</th>
        <th id="table-enrollmentDate" class="clickable" scope="col">Enrollment Date</th>
        <th id="table-cancellationDate" class="clickable" scope="col">Cancellation Date</th>
        <th id="table-pool-access" class="clickable" scope="col">Pool Access</th>
        <th id="table-spa-access" class="clickable" scope="col" >Spa Access</th>
        <th id="table-popover" scope="col" >Modify Member</th>
 
    </tr>`);
    members.forEach(member => $memberTable.append(createMemberTableRow(member)));
}

populateMemberTable(loadMembers())
