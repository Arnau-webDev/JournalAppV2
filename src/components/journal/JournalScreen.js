import React from 'react';
import { useSelector } from 'react-redux';
import NoteScreen from '../notes/NoteScreen';
import NothingSelected from './NothingSelected';
import Sidebar from './Sidebar';

const JournalScreen = () => {

  const { activeNote } = useSelector(state => state.notesInfo);

  return (
    <div className="journal__main-content">

      <Sidebar />

      <main>
        {activeNote === null ? (<NothingSelected />) : (<NoteScreen />)}
      </main>
    </div>
  )
}

export default JournalScreen;