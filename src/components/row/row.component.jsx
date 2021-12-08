import React, {useState, useEffect} from 'react'
import './row.styles.scss'

import imgEmptyHeart from '../../assets/images/iconmonstr-favorite-2.png'
import imgLiked from '../../assets/images/iconmonstr-favorite-3.png'
import imgclock from '../../assets/images/iconmonstr-time-2.png'


function Row(props) {

    const {id, author, title, url, created, liked} = props

    //LOCAL STATE

    const [rowProps, setRowProps] = useState({
        id: id,
        author: author,
        title: title,
        url: url,
        created: created,
        liked: liked
    })

    

    //HANDLE CLICK
    const handleClick = () => {
        setRowProps({
            ...rowProps,
            liked: !rowProps.liked
        })
        // setLikedRows(addToFaves(rowProps))
    }


    
    //OPEN THE NEW URL IN ANOTHER TAB
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
                <button onClick={() => handleClick()} className='likeButton'>
                        {
                            (rowProps.liked===false)
                            ? <img src={imgEmptyHeart} alt="" /> 
                            : <img src={imgLiked} alt="" />
                        }
                </button>
            </div>
        </div>
    )
}

export default Row
