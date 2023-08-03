import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({title: "", description: "", tag: ""});

    const handleAddNoteClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""});
        props.showAlert("Note added successfully..!", "success");
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }

  return (
    <div className="container my-2">
      <h2>Add a note</h2><hr/>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="title"
            value={note.title}
            aria-describedby="emailHelp"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
          Description
          </label>
          <input
            type="text"
            name="description"
            className="form-control"
            id="description"
            value={note.description}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
          Tag
          </label>
          <input
            type="text"
            name="tag"
            className="form-control"
            id="tag"
            value={note.tag}
            onChange={onChange}
          />
        </div>
        <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleAddNoteClick}>
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
