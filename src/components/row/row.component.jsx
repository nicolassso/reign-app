import React, {useState} from 'react'
import './row.styles.scss'

import imgEmptyHeart from '../../assets/images/iconmonstr-favorite-2.png'
import imgLiked from '../../assets/images/iconmonstr-favorite-3.png'
import imgclock from '../../assets/images/iconmonstr-time-2.png'

function Row() {

    const [isLiked, setLiked] = useState(false);

    const handleClick = () => {
        setLiked(!isLiked)
    }


    return (
        <div className="row">
            <div className="row-content">
                <div className="row-date-author">
                    <img src={imgclock} alt="" width='16px'/> 
                    <span>3hs ago by me</span>
                    </div>
                <div className="row-new-content">
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, alias a, dicta consequatur quasi.</span>
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
