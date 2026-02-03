let modifyTableHeader = document.getElementById("table-popover");
modifyTableHeader.classList.add("hidden");


const rows = document.querySelectorAll('.popover-btn-row');
rows.forEach(btn => btn.classList.add('hidden'));


let tableHeaders = document.querySelectorAll('th');
tableHeaders.forEach(header => {
    header.classList.remove("clickable");
});