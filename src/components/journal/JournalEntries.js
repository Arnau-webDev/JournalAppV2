import React from 'react'
import { useSelector } from 'react-redux';
import JournalEntry from './JournalEntry';

const JournalEntries = () => {

    const { notes } = useSelector(state => state.notesInfo);

    return (
        <div className='journal__entries'>
            {notes
                .sort((a, b) => {
                    return a.date > b.date ? -1 : 1;
                })
                .map((note) => {
                    return <JournalEntry key={note.id} {...note} />
                })
            }
        </div>
    )
}

export default JournalEntries;