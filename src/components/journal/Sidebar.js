import React from 'react'
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { authReducer } from '../../reducers/authReducer';
import JournalEntries from './JournalEntries'

const Sidebar = () => {

    const dispatch = useDispatch(authReducer);

    const handleLogout = () => {
        console.log("click");
        dispatch(startLogout());
    };

    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar mt-5">
                <h3>
                    <i className="far fa-moon"></i>
                    <span> Arnau</span>
                </h3>

                <button className="btn" onClick={handleLogout}>Log Out</button>
            </div>

            <div className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className='mt-5'>New Entry</p>
            </div>

            <JournalEntries />
        </aside>
    )
}

export default Sidebar