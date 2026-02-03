usedIds = [];

function generateUniqueId() {

    while (true) {
        let newId = Math.round(Math.random() * 1000000);
        if (newId < 100000) {
            newId += 100000;
        }
        if (!usedIds.includes(newId)) {
            usedIds.push(newId);
            return newId;
        }
    }
}