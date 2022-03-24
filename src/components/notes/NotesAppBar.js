import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote } from '../../actions/notes';

const NotesAppBar = () => {

    const dispatch = useDispatch();
    const { activeNote } = useSelector(state => state.notesInfo);

    const handleSaveNote = () => {
        console.log("hadasd")
        dispatch(startSaveNote(activeNote));
    }

    return (
        <div className="notes__appbar">
            <span>28 de agosto 2020</span>
            <div>
                <button className="btn">Picture</button>
                <button className="btn" onClick={handleSaveNote}>Save</button>
            </div>
        </div>
    )
}

export default NotesAppBar