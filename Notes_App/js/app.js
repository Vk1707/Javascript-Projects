// Selectors
const addBtn = document.querySelector("#btn");
const main = document.querySelector(".main");

// Add Event Onclick to Button
addBtn.addEventListener(
    "click",
    function(){
        addNote()
    }
);

// function for Save Notes
const saveNote = () => {
    // console.log("save note")
    const notes = document.querySelectorAll("textarea")
    const data  = [];

    notes.forEach(
        (note) =>{
            data.push(note.value)
        }
    )
    console.log(notes);
    if (data.length === 0){
        localStorage.removeItem("notes")
    }else{
        localStorage.setItem("notes", JSON.stringify(data));
    }    
}

let numberOfNote = 1;

// function for Add Note Template 
const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("notes")
    note.innerHTML = `
        <div class="tool">
            <span> Note : ${numberOfNote})</span>
            <div class="itag">
            <i class="save fa-solid fa-floppy-disk"></i>
            <i class="delete fa-solid fa-trash"></i>
            </div>
        </div>
        <textarea placeholder = "CLick Here! To Write Your Notes....">${text}</textarea>
    `;

    note.querySelector(".delete").addEventListener(
        "click",
        function(){
            // Remove the note
            note.remove()
            // save Note After Removing
            saveNote()
            
            // Reload Window after Removing
            location.reload();
        }
    );

    // Add Click Event in save icon in note 
    note.querySelector("textarea").addEventListener(
        "focusout",
        function(){
            saveNote();
        }
    );
    
    // Add Click Event in save icon in note 
    note.querySelector(".save").addEventListener(
        "click",
        function(){
            saveNote()
        }
    );

    //Append note in main div
    main.appendChild(note);

    //scroll to appended child
    note.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

    //savenote after adding new Note
    saveNote();

    //Increase Value of Numberof Notes After Each AddNote
    numberOfNote++;
}

// Stop Scroll 
window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});

//Self Calling function to check localstorage and addNote with data from localstorage
(
    function(){
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        console.log(lsNotes);
        
        if (lsNotes === null){
            addNote();
        } else{
            lsNotes.forEach(
                (lsnote) => {
                    addNote(lsnote)
                }
            )
        }

    }
)();
