import React from 'react'
import './pagination.styles.scss'

function Pagination() {
    return (
        <div className="pagination">
            <div className="pagination-item"><span><i className="fas fa-angle-left"></i></span></div>
            <div className="pagination-item"><span>1</span></div>
            <div className="pagination-item"><span>2</span></div>
            <div className="pagination-item"><span>3</span></div>
            <div className="pagination-item"><span>4</span></div>
            <div className="pagination-item"><span>5</span></div>
            <div className="pagination-item"><span>6</span></div>
            <div className="pagination-item"><span>7</span></div>
            <div className="pagination-item"><span>8</span></div>
            <div className="pagination-item"><span>9</span></div>
            <div className="pagination-item"><span><i className="fas fa-angle-right"></i></span></div>
        </div>
    )
}

export default Pagination
