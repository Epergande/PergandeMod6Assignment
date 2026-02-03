$(function () {
    $('#members-table').on('click', 'th.clickable', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const columnId = $(this).attr('id');
        const members = loadMembers().slice();
        members.sort(getComparator(columnId));
        populateMemberTable(members);
    });

    function getComparator(columnId) {
        switch (columnId) {
            case 'table-id':
                return (a, b) => (Number(a.id) - Number(b.id));
            case 'table-username':
                return (a, b) => String(a.userName).localeCompare(String(b.userName));
            case 'table-fullName':
                return (a, b) => {
                    const A = `${a.firstName} ${a.lastName}`.toLowerCase();
                    const B = `${b.firstName} ${b.lastName}`.toLowerCase();
                    return A.localeCompare(B);
                };
            case 'table-enrollmentDate':
                return (a, b) => (Date.parse(a.enrolmentDate) - Date.parse(b.enrolmentDate));
            case 'table-cancellationDate':
                return (a, b) => {
                    const a2 = Date.parse(a.cancellationDate) || 0;
                    const b2 = Date.parse(b.cancellationDate) || 0;
                    return (b2 - a2);
                };
            case 'table-pool-access':
                return (a, b) => {
                    const A = a.poolAccess === true ? 1 : 0;
                    const B = b.poolAccess === true ? 1 : 0;
                    return (B - A);
                };
            case 'table-spa-access':
                return (a, b) => {
                    const A = a.spaAccess === true ? 1 : 0;
                    const B = b.spaAccess === true ? 1 : 0;
                    return (B - A);
                };
        }
    }
});
