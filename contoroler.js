//contoroler
//logic
function addItem() {
    var value = document.getElementById("textbox").value;
    if (!value) return;
    notes.push({ title: value, done: false });

    render();
}

function deleteAll() {
    notes = [];
    render();
}


function deleteItem(note) {
    notes.splice(notes.indexOf(note), 1);
    render();
}


function toggleDone(note) {
    note.done = !note.done;
    render();
}

var filter = 0; // 0:all    1:active     2:completed
function getFilteredNotes() {
    if (filter == 1) {
        return notes.filter(function (note) {//kole list note
            return !note.done;
        });
    }
    if (filter == 2)
        return notes.filter(function (note) {
            return note.done;
        });

    return notes;
}

function setFilter(value) {
    filter = value;
    render();
}
