const inputBtn = document.querySelector('#btn');
const notesContainer = document.querySelector('.notes-container');
let notes = document.querySelectorAll('.paragraph');

function saveData(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}
function showsData(){
    notesContainer.innerHTML =localStorage.getItem("notes");
}
showsData();

inputBtn.addEventListener('click', ()=>{
    let notesPara = document.createElement('p');
    let img = document.createElement('img');
    notesPara.className = "paragraph";
    notesPara.setAttribute("contenteditable", "true");
    img.src ="assets/delete.jpg";
    img.className ="delete-icon";
    notesContainer.appendChild(notesPara).appendChild(img);
})

notesContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        saveData();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll('.paragraph');
        notes.forEach((nt)=>{
            nt.onkeyup = ()=>{
                saveData();
            }
        })
    }

})




// to clear the browser data -->
//  localStorage.clear();
