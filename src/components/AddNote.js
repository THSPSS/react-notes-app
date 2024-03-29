import { useState } from "react";

const AddNote =  ({ handleAddNote }) => {

    const [noteText, setNoteText] = useState('');

    //create handleChange function
    //event value : user has typed
    const handleChange = (event) => {
        console.log(event.target.value);
    }

    //arrow function
    const handleSaveClick = () => {
        handleAddNote(noteText)
    }

    return(<div className="note new">
        <textarea 
            rows="8" 
            cols="10"
            placeholder="Type to add a note..."
            onChange={handleChange}
        ></textarea>
        <div className="note-footer">
            <small>200 Remaining</small>
            <button className="save" onClick={handleSaveClick}>Save</button>
        </div>
    </div>)
}

export default AddNote;