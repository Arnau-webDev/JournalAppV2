import React from 'react';
import moment from 'moment';

const JournalEntry = ({ id, title, body, date, url }) => {

    const noteDate = moment(date);
    console.log(noteDate);

    // console.log(id, title, body, date, url);
    return (
        <div className="journal__entry">
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