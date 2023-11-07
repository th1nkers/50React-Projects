import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab, Zoom } from "@mui/material";
import { useState } from "react";

const CreateArea = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value, //direct handle related to the same name as define in state.
      };
    });
  };

  const noteSubmitHandler = (e) => {
    e.preventDefault();
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            value={note.title}
            placeholder="Title"
            onChange={changeHandler}
          />
        )}

        <textarea
          onClick={() => setIsExpanded(true)}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          onChange={changeHandler}
          rows={isExpanded ? 3 : 1}
        />

        <Zoom in={"true"}>
          <Fab onClick={noteSubmitHandler}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
