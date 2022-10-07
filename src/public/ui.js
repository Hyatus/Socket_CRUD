// RENDERIZAR ELEMENTOS, AGRETAR, ETC 

const notesList = document.querySelector('#notes');
let savedId = '' // guarda la nota que se ha seleccionado en getNote para actualizar 

const noteUI = note => {
    // Retorna un sólo elemento como un div con todos sus elementos etc.
    const div = document.createElement('div');

   div.innerHTML += `
   <div class="card card-body rounded-0 mb-2">
        <div class="d-flex justify-content-between">
            <h1 class="h3 card-title">${note.title}</h1>
            <div>
                <button class="btn btn-danger delete" data-id="${note.id}">delete</button>
                <button class="btn btn-secondary update" data-id="${note.id}">update</button>
            </div>
        </div>
        <p>${note.description}</p>
   </div>
   `;
   
   // No escogemos los elementos del document sino solamente del div
   const btnDelete = div.querySelector(".delete") // Analiza el que tenga la clase delete dentro del div 
   const btnUpdate = div.querySelector(".update")
   
   btnDelete.addEventListener('click',()=>{
    //e.preventDefault() 
    deleteNote(btnDelete.dataset.id)
   });
   
   btnUpdate.addEventListener('click',(e)=>{
    e.preventDefault() 
    getNote(btnUpdate.dataset.id)
   });
   

   return div 
}



const renderNotes = notes => {          // Las notas que ya están guardadas
    notes.forEach(note => {            // Recibo una lista de notas y a cada nota la agrego a la interfaz con noteUI
        notesList.append(noteUI(note)) // Añade a la interfaz cada nota nueva que se vaya añadiendo 
    })
}


const appendNote = note => {       // Las notas nuevas que se van añadiendo 
    notesList.append(noteUI(note)) // Añade una nota a la lista 
}


