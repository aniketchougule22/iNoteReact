import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import Noteitem from "./Noteitem";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  let navigate = useNavigate();

  const [note, setNote] = useState({ id: "", edittitle: "", editdescription: "", edittag: "" });

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getNotes();
    } else {
      navigate('/login');
    }
    // eslint-disable-next-line
  }, []);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id: currentNote._id, edittitle: currentNote.title, editdescription: currentNote.description, edittag: currentNote.tag});
  };

  const ref = useRef(null);
  const refClose = useRef(null);

  const handleEditClick = (e) => {
    editNote(note.id, note.edittitle, note.editdescription, note.edittag);
    refClose.current.click();
    props.showAlert("Updated successfully..!", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AddNote showAlert={props.showAlert} />
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Edit Note
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="edittitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    name="edittitle"
                    className="form-control"
                    id="edittitle"
                    aria-describedby="emailHelp"
                    value={note.edittitle}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="editdescription" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    name="editdescription"
                    className="form-control"
                    id="editdescription"
                    value={note.editdescription}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edittag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    name="edittag"
                    className="form-control"
                    id="edittag"
                    value={note.edittag}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button disabled={note.edittitle.length<5 || note.editdescription.length<5} type="button" className="btn btn-primary" onClick={handleEditClick}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2 className="my-4">Your notes</h2><hr/>
        <div className="container mx-2">
          {note.length===0 && 'No notes to display!'}
        </div>
        {notes.map((ele) => {
          return <Noteitem key={ele._id} updateNote={updateNote} note={ele} showAlert={props.showAlert} />;
        })}
      </div>
    </>
  );
};

export default Notes;
