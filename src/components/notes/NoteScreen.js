import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NotesAppBar from './NotesAppBar';
import { activeNote as activeNoteAction } from '../../actions/notes';

const NoteScreen = () => {

    const dispatch = useDispatch();
    const { activeNote } = useSelector(state => state.notesInfo);

    const [formValues, setFormValues] = useState(activeNote);
    const { title, body } = formValues;

    const activeId = useRef(activeNote.id);

    useEffect(() => {
        if (activeId.current !== activeNote.id) {
            setFormValues(activeNote);
            activeId.current = activeNote.id;
        };

    }, [activeNote]);

    useEffect(() => {
        dispatch(activeNoteAction(activeNote.id, formValues));
    }, [formValues, dispatch]);


    const handleInputChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    };

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
        </div>
    )
}

export default NoteScreen