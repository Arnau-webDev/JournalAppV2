import React from 'react'

const JournalEntry = () => {
    return (
        <div className="journal__entry">
            <div
                className="journal__entry-picture"
                style={{
                    backgroudSize: "Cover",
                    backgroundImage: "url(https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true)",
                    backgroundPosition: "center"
                }}
            >
            </div>

            <div className="journal__entry-body">
                <p className='journal__entry-title'>Un nuevo día</p>
                <p className='journal__entry-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quidem?</p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}

export default JournalEntry