import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:3001";

  const initialNotes = []

  const [notes, setNotes] = useState(initialNotes);

  // Add a note
  const addNote = async (title, description, tag) => {
    // console.log('Adding a new Note');

    const response = await fetch(`${host}/api/notes/add_notes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'token': localStorage.getItem('token'),
        },
        body: JSON.stringify({title, description, tag}),
      });
      getNotes(setNotes)
      const note = await response.json();
      setNotes(notes.concat(note));
  };

// Get all notes
const getNotes = async () => {

    const response = await fetch(`${host}/api/notes/get_all_notes`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'token': localStorage.getItem('token'),
        }
        });
        const json = await response.json();
        console.log('json', json.data);
    // setNotes(notes.concat(json));
    setNotes(json.data);
    };

  // Delete a note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/delete_note/${id}`, {
        method: "DELETE",
        headers: {
          'token': localStorage.getItem('token'),
        }
      });
  
      const json = await response.json();
    console.log("json", json);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a note
  const editNote = async (id, title, description, tag) => {

    const response = await fetch(`${host}/api/notes/update_note/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'token': localStorage.getItem('token'),
      },
      body: JSON.stringify({title, description, tag}),
    });

    const json = await response.json();
    console.log('json', json)

    let newNotes = JSON.parse(JSON.stringify(notes));
    // console.log('notes', notes)

    for (let i = 0; i < newNotes.length; i++) {
      const element = newNotes[i];
      // console.log('element', element)
      if (element._id === id) {
        newNotes[i].title = title;
        newNotes[i].description = description;
        newNotes[i].tag = tag;
        break;
      }
    }
    console.log('newNotes', newNotes);
    setNotes(newNotes);
    // console.log('notes', notes)
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, getNotes, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
