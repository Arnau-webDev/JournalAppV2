import React from 'react'
import NotesAppBar from './NotesAppBar'

const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    placeholder='Some awesome title'
                    className='notes__title-input'
                    autoComplete='off'
                />

                <textarea className='notes__textarea' placeholder='What happened today'></textarea>

                <div className="notes__image">
                    <img src="https://lh3.googleusercontent.com/4mVNVUybMXXJ5k-PuXHwqwBFDLUZbAuSxa7xcypndKhFZ9RPEGVcoXpU9mLQL6lGg3z3Cvp5pJFWDXwKiYDPWOH9zQ=w640-h400-e365-rj-sc0x00ffffff" alt="landscape" />
                </div>
            </div>
        </div>
    )
}

export default NoteScreen