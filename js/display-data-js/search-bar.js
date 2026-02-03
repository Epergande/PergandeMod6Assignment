const searchInputEl = document.getElementById('search-bar');
const selectEl = document.querySelector('.filter-by');

function getInput() {
    return (searchInputEl.value).toLowerCase();
}

function showFilteredResults() {
    const input = getInput();
    const option = selectEl.value;
    let results = loadMembers();

    if (input) {
        results = results.filter(member => {
            if (option === 'by-id') {
                return String(member.id).toLowerCase().includes(input);
            } else if (option === 'by-username') {
                return (member.userName).toLowerCase().includes(input);
            } else {
                const fullName = `${member.firstName} ${member.lastName}`.toLowerCase();
                return fullName.includes(input);
            }
        });
    }

    populateMemberTable(results);
}

searchInputEl.addEventListener('input', showFilteredResults);
selectEl.addEventListener('change', showFilteredResults)