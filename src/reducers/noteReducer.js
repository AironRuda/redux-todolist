export const noteReducer = (state = [], action) => {
  // Accion que crea una nota, requiere que se le pase id y contenido, se inicia con "not important"
  if (action.type === "@notes/created") {
    return [...state, action.payload];
  }
  //Accion que cambia la importancia de la nota, recibe un id
  if (action.type === "@notes/toggle_import") {
    const { id } = action.payload;
    return state.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          important: !note.important,
        };
      }
      return note;
    });
  }
  return state;
};
//Crea un id unico para cada tarea
const generateId = () => Math.floor(Math.random() * 999999) + 1;

// funcion que se debe llamar para crear una nota
export const createNote = (content) => {
  return {
    // tipo de acciona  ejecutar
    type: "@notes/created",
    // accion a ejecutar
    payload: {
      content,
      important: false,
      id: generateId(),
    },
  };
};
// funcion que se debe llamar para modificar importancia de una nota
export const toggleImportanceOf = (id) => {
  return {
    type: "@notes/toggle_import",
    payload: { id },
  };
};
