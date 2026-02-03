function createMemberTableRow(member) {
    return `<tr>
            <td>${member.id}</td>
            <td >${member.userName}</td>
            <td>${member.firstName} ${member.lastName}</td>
            <td>${member.enrolmentDate}</td>
            <td>${member.cancellationDate}</td>
            <td>${member.poolAccess}</td>
            <td>${member.spaAccess}</td>
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
    </tr>`);
    members.forEach(member => $memberTable.append(createMemberTableRow(member)));
}
populateMemberTable(defaultMembers)
