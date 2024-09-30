const newNote = document.getElementById('new-note'); 
const delNote = document.getElementById('delete-note');
const note = document.getElementsByClassName('note'); 
const boldButton = document.getElementById('bold');
const italicButton = document.getElementById('italic');
const colorPicker = document.getElementsByClassName('color-picker');
const notesRandomBC = ['yellow', 'lightskyblue', 'lightpink', 'aquamarine'];

const colorOne = document.getElementsByClassName('color-one');
const colorTwo = document.getElementsByClassName('color-two');
const colorThree = document.getElementsByClassName('color-three'); 

function noteAdd3() {
    let hiddenNotes = [];
    for (let x=0;x<note.length;x++) {
        if (window.getComputedStyle(note[x]).display === 'none') {
            hiddenNotes.push(note[x]); 
        } 
    } 
    if (hiddenNotes[0] === undefined) {
        alert('Max Notes Reached!');
    } else {
        hiddenNotes[0].style.display = 'block'; 
    } 
}

newNote.onclick = noteAdd3;

delNote.onclick = function() {
    let noteArray = document.getElementsByClassName('note');
    let lastNote = noteArray[noteArray.length - 1]; 
    lastNote.style.display = 'none';
}

let alignButton = document.getElementById('align-button'); 

let alignButtonFunc = function() {
    let notesContainer = document.getElementById('notes-container'); 
    let notes = document.getElementsByClassName('note'); 

    if (alignButton.innerHTML === 'Vertical') {
        notesContainer.style.flexDirection = 'column'; 
        for (let x=0; x<notes.length; x++) {
            notes[x].style.width = '20%'; 
            notes[x].style.margin = '0.3% 0';
            notes[x].style.flexGrow = 0; 
        }
        alignButton.innerHTML = 'Horizontal';
    } else if (alignButton.innerHTML === 'Horizontal') {
        notesContainer.style.flexDirection = 'row'; 
        for (let y=0; y<notes.length; y++) {
            notes[y].style.width = '24.4%';
            notes[y].style.margin = '0 0.3%';
            notes[y].style.flexGrow = 0;
        }
        alignButton.innerHTML = 'Vertical';
    }
}

alignButton.onclick = alignButtonFunc; 

let doneButtons = document.getElementsByClassName('done-note');
let textNotes = document.getElementsByClassName('text-note');
let closeButton = document.getElementsByClassName('del-note'); 

for (let x=0; x<note.length; x++) {
    closeButton[x].hidden = true;  
    colorPicker[x].hidden = true;    
}

for (let x=0; x<note.length; x++) {
    doneButtons[x].hidden = true;
}
 
for (let x=0; x<note.length; x++) {
note[x].onmouseleave = function() {
    let done= this.querySelector('.done-note'); 
    done.hidden = true;
    closeButton[x].hidden = true;
    let thisColorPicker = this.querySelector('.color-picker');
    thisColorPicker.hidden = true;
    let thisColorSelector = this.querySelector('.color-selector');
    thisColorSelector.style.display = 'none';
    thisColorSelector.id = 'not-active';

}
}

for (let y=0; y<note.length; y++) {
    note[y].onmouseover = function() {
        let done=this.querySelector('.done-note');
        if (done.value !== 'Edit') {
        done.hidden = false;
        } else if (done.innerHTML === 'Edit') {
            done.hidden = true;
        }
        closeButton[y].hidden = false;
        let thisColorPicker = this.querySelector('.color-picker');
        thisColorPicker.hidden = false;
    }
}

let FF = document.getElementById('font-family');    

for (let x=0; x<note.length; x++) {
    note[x].onclick = function() {
        let done=this.querySelector('.done-note');
        if (done.value === 'Edit') {
            done.hidden = false;
        }
        let textnote = this.querySelector('.text-note');
        let FS = document.getElementById('font-size');
        if (FS.value === '' || FS.value === 0) {
            FS.value = 24;
            textnote.style.fontSize = `${FS.value}px`;
        } else if (FS.value >= 1) {
            textnote.style.fontSize = `${FS.value}px`; 
        }

        if (FF.value === 'Times New Roman') {
            textnote.style.fontFamily = 'Times New Roman';
        } else if (FF.value === 'Cambria') {
            textnote.style.fontFamily = 'Cambria';   
        } else if (FF.value === 'Arial') {
            textnote.style.fontFamily = 'Arial';
        } else if (FF.value === 'Impact') {
            textnote.style.fontFamily = 'Impact';
        }

        if (boldButton.id === 'bold') {
            textnote.style.fontWeight = 400; 
        } else if (boldButton.id === 'bold-a') {
            textnote.style.fontWeight = 'bold';
        }

        if (italicButton.id === 'italic') {
            textnote.style.fontStyle = 'normal';
        } else if (italicButton.id === 'italic-a') {
            textnote.style.fontStyle = 'italic';
        }
        let fontColor = document.getElementById("font-color").value; 
        textnote.style.color = fontColor;
    }
}

let toggleButtonText = function() {
    let textNote = this.parentNode.querySelector('.text-note'); 
    if (this.value === 'Done') {
        this.value = 'Edit';
        textNote.readOnly = true;
        textNote.style.cursor = 'default';
    } else if (this.value === 'Edit') {
        this.value = 'Done';
        textNote.readOnly = false;
        textNote.style.cursor = 'text';
    }
};

for (let i = 0; i < doneButtons.length; i++) {
    doneButtons[i].addEventListener('click', toggleButtonText);
}


function deleteNote() {
    let noteX = this.parentNode; 
    noteX.style.display = 'none';
    noteX.style.backgroundColor = 'yellow';
    noteX.style.backgroundImage = null;
    let colorONE = this.parentNode.getElementsByClassName("color-one")[0];  
    let colorTWO = this.parentNode.getElementsByClassName("color-two")[0];
    let colorTHREE = this.parentNode.getElementsByClassName("color-three")[0];
    colorONE.style.backgroundColor = 'lightskyblue'; 
    colorTWO.style.backgroundColor = 'lightpink';
    colorTHREE.style.backgroundColor = 'aquamarine';
    let thisTextArea = this.parentNode.getElementsByClassName("text-note")[0]; 
    thisTextArea.value = '';

}

for (let i=0; i<note.length; i++) {
    closeButton[i].addEventListener('click', deleteNote);
}

boldButton.onclick = function() {
    if (boldButton.id === 'bold') {
    boldButton.style.color = 'darkgoldenrod';
    boldButton.style.backgroundColor = 'white';
    boldButton.id = 'bold-a';
    } else if (boldButton.id === 'bold-a') {
    boldButton.style.backgroundColor = 'darkgoldenrod';
    boldButton.style.color = 'white';
    boldButton.id = 'bold';
    }
}


function colorSelectorFunc() {
    let thisColorSelector = this.parentNode.querySelector('.color-selector');
    if (thisColorSelector.id === 'not-active') {
        thisColorSelector.style.display = 'flex';
        thisColorSelector.id = 'active';
    } else if (thisColorSelector.id === 'active') {
        thisColorSelector.style.display= 'none';
        thisColorSelector.id = 'not-active';
    }

}

for (let x=0; x<note.length; x++) {
    colorPicker[x].onclick = colorSelectorFunc;
}

for (let x=0; x<note.length; x++) {
    colorOne[x].onclick = function() { 
        let ogBackgroundColor = window.getComputedStyle(note[x]).backgroundColor; 
        let newColor = window.getComputedStyle(colorOne[x]).backgroundColor; 
        colorOne[x].style.backgroundColor = ogBackgroundColor;
        note[x].style.backgroundColor = newColor;
        colorOne[x].style.border = `1px solid ${ogBackgroundColor}`; 
    }
    colorTwo[x].onclick = function() {
        let ogBackgroundColor = window.getComputedStyle(note[x]).backgroundColor; 
        let newColor = window.getComputedStyle(colorTwo[x]).backgroundColor; 
        colorTwo[x].style.backgroundColor = ogBackgroundColor;
        note[x].style.backgroundColor = newColor;
        colorTwo[x].style.border = `1px solid ${ogBackgroundColor}`; 

    }
    colorThree[x].onclick = function() {
        let ogBackgroundColor = window.getComputedStyle(note[x]).backgroundColor; 
        let newColor = window.getComputedStyle(colorThree[x]).backgroundColor; 
        colorThree[x].style.backgroundColor = ogBackgroundColor;
        note[x].style.backgroundColor = newColor;
        colorThree[x].style.border = `1px solid ${ogBackgroundColor}`; 
    }
}

italicButton.onclick = function() {
    if (italicButton.id === 'italic') {
        italicButton.style.color = 'darkgoldenrod';
        italicButton.style.backgroundColor = 'white';
        italicButton.id = 'italic-a';
        } else if (italicButton.id === 'italic-a') {
        italicButton.style.backgroundColor = 'darkgoldenrod';
        italicButton.style.color = 'white';
        italicButton.id = 'italic';
        }
    }

const imagePicker = document.getElementsByClassName('image-picker');
const imageSelector = document.getElementById('image-selector');
const doneImageBackground = document.getElementById('done-image-background');
const imagesBackground = document.getElementsByClassName('images-background');
const notesContainer = document.getElementById('notes-container');
let selectedNote; 

for (let x=0;x<note.length; x++) {
    imagePicker[x].onclick = function() {
        imageSelector.style.display = 'flex';
        selectedNote = x; 
    }
}

let imageUrl;

for (let x=0; x<imagesBackground.length; x++) {
    imagesBackground[x].onclick = function() {
        for (let x=0; x<imagesBackground.length; x++) {
            if (imagesBackground[x].id === `image-${x+1}-a`) {
                let activeImage = imagesBackground[x];
                activeImage.id = `image-${x}`;
                activeImage.style.border = 'none';
            } else if (imagesBackground[x].id === "default-image") {
                let activeImage = imagesBackground[x];
                activeImage.style.border = 'none';
            }
        }
        if (imagesBackground[x].id === "default-image") {
            imagesBackground[x].style.border = '3px solid red';
            imageUrl = null;
        }

        if (imagesBackground[x].id === `image-${x}`) {
        imagesBackground[x].id = `image-${x+1}-a`;
        imagesBackground[x].style.border = '3px solid red';
        imageUrl = `url(${imagesBackground[x].src})`;
        }
    }
}

let noteBackgroundRadio = document.getElementById("btn-note-background");
let containerBackgroundRadio = document.getElementById("btn-container-background");

doneImageBackground.onclick = function() {
    if (containerBackgroundRadio.checked) {
    notesContainer.style.backgroundImage = imageUrl;
    } else if (noteBackgroundRadio.checked) {
            note[selectedNote].style.backgroundImage = imageUrl;           
    }
    imageSelector.style.display = 'none';
}

let closeImageSelector = document.getElementById('close-image-selector');

closeImageSelector.onclick = function() {
    imageSelector.style.display = 'none'; 
}

const media720 = window.matchMedia("(max-width: 720px)");

function getMedia720(media720) {
    if (media720.matches) {
        newNote.innerHTML = ""; 
    }
}

getMedia720(media720); 
media720.addEventListener(getMedia720); 



// Recordatorio: Fix Responsiveness 


