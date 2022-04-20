import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NotesAppBar from './NotesAppBar';
import { activeNote as activeNoteAction, startDeleteNote } from '../../actions/notes';

const NoteScreen = () => {

    const dispatch = useDispatch();
    const { activeNote } = useSelector(state => state.notesInfo);

    const [formValues, setFormValues] = useState(activeNote);
    const { title, body } = formValues;

    const activeId = useRef(activeNote.id);
    const activeUrl = useRef(activeNote.url);

    useEffect(() => {
        if (activeId.current !== activeNote.id) {
            setFormValues(activeNote);
            activeId.current = activeNote.id;
        };

        if (activeNote.url !== "" && activeUrl.current !== activeNote.url) {
            setFormValues(activeNote);
            activeUrl.current = activeNote.url;
        }

    }, [activeNote, activeNote.url]);

    useEffect(() => {
        dispatch(activeNoteAction(activeNote.id, formValues));
    }, [formValues, dispatch]);


    const handleInputChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    };

    const handleDeleteNote = () => {
        dispatch(startDeleteNote(activeNote.id));
    }

    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    name='title'
                    placeholder='Some awesome title'
                    className='notes__title-input'
                    autoComplete='off'
                    onChange={handleInputChange}
                    value={title}
                />

                <textarea
                    className='notes__textarea'
                    name='body'
                    placeholder='What happened today'
                    onChange={handleInputChange}
                    value={body}
                ></textarea>

                {activeNote.url && (
                    <div className="notes__image">
                        <img src={activeNote.url} alt="landscape" />
                    </div>
                )}
            </div>

            <button className="btn btn-danger" onClick={handleDeleteNote} disabled={activeNote.id === "uG6pXkoZkKp6yDzb57O4" || activeNote.id === "ic6hKu0ojvJWjN6v9Bn8" || activeNote.id === "c9Hr9chGWiUHUB2oFi9l"}>Delete</button>
        </div>
    )
}

export default NoteScreen;