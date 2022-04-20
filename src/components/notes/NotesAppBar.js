import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { startSaveNote, startUploading } from '../../actions/notes';

const NotesAppBar = () => {

    const dispatch = useDispatch();
    const { activeNote } = useSelector(state => state.notesInfo);

    const handleSaveNote = () => {
        dispatch(startSaveNote(activeNote));
    };

    const handlePictureUpload = () => {
        document.querySelector("#fileSelector").click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            dispatch(startUploading(file));
        }
    }

    const noteDate = moment(new Date().getTime());


    return (
        <div className="notes__appbar">
            <span>{`${noteDate.format("LL")} ${moment().format('dddd')}`}</span>

            <input id="fileSelector" type="file" name="file" style={{ display: "none" }} onChange={handleFileChange} />

            <div>
                <button className="btn" onClick={handlePictureUpload}>Picture</button>
                <button className="btn" onClick={handleSaveNote}>Save</button>
            </div>
        </div>
    )
}

export default NotesAppBar;