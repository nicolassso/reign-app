import React from 'react'
import './row.styles.scss'

function Row() {
    return (
        <div className="row">
            <div className="row-container">
                <div className="row-content">
                    <div className="row-date-author">3hs ago by me</div>
                    <div className="row-new-content">yeyeye react is good</div>
                </div>
                <div className="row-like">
                    <div className="row-heart"></div>
                </div>
            </div>
        </div>
    )
}

export default Row
