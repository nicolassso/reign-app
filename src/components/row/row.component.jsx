import React, {useState} from 'react'
import './row.styles.scss'

import imgEmptyHeart from '../../assets/images/iconmonstr-favorite-2.png'
import imgLiked from '../../assets/images/iconmonstr-favorite-3.png'
import imgclock from '../../assets/images/iconmonstr-time-2.png'

function Row(props) {

    const {author, title, url, created} = props

    const [isLiked, setLiked] = useState(false);

    const handleClick = () => {
        setLiked(!isLiked)
    }

    const urlClick = (u) => {
        window.open (u, "_blank")
    }


    return (
        <div className="row">
            <div onClick={() => urlClick(url)} className="row-content">
                <div className="row-date-author">
                    <img src={imgclock} alt="" width='16px'/> 
                    <span>{created} by {author}</span>
                    </div>
                <div className="row-new-content">
                    <span>{title}</span>
                </div>
            </div>
            <div className="row-like">
                <button onClick={handleClick} className='likeButton'>
                        {
                            (isLiked===false)
                            ? <img src={imgEmptyHeart} alt="" /> 
                            : <img src={imgLiked} alt="" />
                        }
                </button>
            </div>
        </div>
    )
}

export default Row
