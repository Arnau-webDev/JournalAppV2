import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
import { authReducer } from '../../reducers/authReducer';
import JournalEntries from './JournalEntries'

const Sidebar = () => {

    const dispatch = useDispatch(authReducer);
    const { name } = useSelector(state => state.auth);

    const handleLogout = () => {
        console.log("click");
        dispatch(startLogout());
    };

    const handleAddNewEntry = () => {
        dispatch(startNewNote());
    };

    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar mt-5">
                <h3>
                    <i className="fa-solid fa-user"></i>
                    <span> {name}</span>
                </h3>

                <div className='logout'>
                    <i className="fa-solid fa-person-walking-arrow-loop-left"></i>
                    <button className="btn" onClick={handleLogout}>Log Out</button>
                </div>
            </div>

            <div className="journal__new-entry" onClick={handleAddNewEntry}>
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className='mt-5'>New Entry</p>
            </div>

            <JournalEntries />
        </aside>
    )
}

export default Sidebar