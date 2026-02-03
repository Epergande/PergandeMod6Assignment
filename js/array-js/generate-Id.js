usedIds = [];

function generateUniqueId() {

    while (true) {
        let newId = Math.floor(Math.random() * 1000000 );
        if (!usedIds.includes(newId)) {
            usedIds.push(newId);
            return newId;
        }
    }
}