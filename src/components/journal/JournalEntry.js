import React from 'react';
import moment from 'moment';
import { activeNote } from '../../actions/notes';
import { useDispatch } from 'react-redux';

const JournalEntry = ({ id, title, body, date, url }) => {

    const dispatch = useDispatch();

    const noteDate = moment(date);

    const handleSetActiveNote = () => {
        const note = {
            title,
            url,
            body,
            date
        };

        dispatch(activeNote(id, note));
    };

    return (
        <div className="journal__entry animate__animated animate__backInLeft animate__faster" onClick={handleSetActiveNote}>
            {
                url !== undefined && (
                    <div
                        className="journal__entry-picture"
                        style={{
                            backgroudSize: "Cover",
                            backgroundImage: `url(${url})`,
                            backgroundPosition: "center"
                        }}
                    >
                    </div>
                )
            }

            <div className="journal__entry-body">
                <p className='journal__entry-title'>{title}</p>
                <p className='journal__entry-content'>{body}</p>
            </div>

            <div className="journal__entry-date-box">
                <span>{noteDate.format("dddd")}</span>
                <h4>{noteDate.format("Do")}</h4>
            </div>
        </div>
    )
}

export default JournalEntry