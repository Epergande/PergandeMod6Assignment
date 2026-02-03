function loadMembers() {
    const savedMembers = localStorage.getItem('membersData');
    if (savedMembers) {
        const parsed = JSON.parse(savedMembers);
        return parsed.map(data => new Member(
            data.userName,
            data.firstName,
            data.lastName,
            data.enrolmentDate,
            data.cancellationDate,
            data.poolAccess,
            data.spaAccess
        ));
    }
    localStorage.setItem('membersData', JSON.stringify(defaultMembers));
    return defaultMembers
}